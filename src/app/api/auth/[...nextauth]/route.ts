import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import EmailProvider from "next-auth/providers/email";
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT) || 587,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier: email, url, provider }) => {
        // For development, just log the magic link
        if (process.env.NODE_ENV === "development") {
          console.log(`Magic link for ${email}: ${url}`);
          return;
        }

        // For production, use Resend or SMTP
        if (process.env.RESEND_API_KEY) {
          const { Resend } = await import("resend");
          const resend = new Resend(process.env.RESEND_API_KEY);

          try {
            await resend.emails.send({
              from: provider.from as string,
              to: email,
              subject: "Sign in to RentsNova",
              html: `
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Sign in to RentsNova</title>
                  </head>
                  <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                      <div style="background-color: white; border-radius: 8px; padding: 40px; border: 1px solid #e2e8f0;">
                        <div style="text-align: center; margin-bottom: 30px;">
                          <h1 style="color: #ea580c; margin: 0; font-size: 24px;">🏠 RentsNova</h1>
                          <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Rent Smarter. Live Anywhere.</p>
                        </div>

                        <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; text-align: center;">Sign in to your account</h2>

                        <p style="color: #475569; margin: 0 0 30px 0; line-height: 1.6;">
                          Click the button below to securely sign in to your RentsNova account. This link will expire in 24 hours for your security.
                        </p>

                        <div style="text-align: center; margin: 30px 0;">
                          <a href="${url}" style="display: inline-block; background-color: #ea580c; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 16px;">Sign in to RentsNova</a>
                        </div>

                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                          <p style="color: #64748b; font-size: 12px; margin: 0; text-align: center;">
                            If you didn't request this email, you can safely ignore it.
                            <br>This link will expire in 24 hours.
                          </p>
                        </div>
                      </div>

                      <div style="text-align: center; margin-top: 20px;">
                        <p style="color: #64748b; font-size: 12px; margin: 0;">
                          © 2025 RentsNova. Made with ❤️ for Africa.
                        </p>
                      </div>
                    </div>
                  </body>
                </html>
              `,
            });
          } catch (error) {
            console.error("Failed to send email:", error);
            throw new Error("Failed to send verification email");
          }
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Get user from database with role info
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
        });

        if (dbUser) {
          token.role = dbUser.role;
          token.country = dbUser.country || "";
          token.city = dbUser.city || "";
          token.emailVerified = dbUser.emailVerified;
          token.isActive = dbUser.isActive;
          token.profileCompleted = false; // We'll update this logic later when role tables are ready
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.role = token.role as "TENANT" | "LANDLORD" | "AGENT" | "ADMIN";
        session.user.country = token.country as string;
        session.user.city = token.city as string;
        session.user.emailVerified = token.emailVerified as Date;
        session.user.isActive = token.isActive as boolean;
        session.user.profileCompleted = token.profileCompleted as boolean;
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account?.provider === "email") {
        // Allow sign in for magic link
        return true;
      }
      return false;
    },
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
  events: {
    async createUser({ user }) {
      console.log(`New user created: ${user.email}`);
    },
    async signIn({ user }) {
      console.log(`User signed in: ${user.email}`);
    },
  },
};

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
