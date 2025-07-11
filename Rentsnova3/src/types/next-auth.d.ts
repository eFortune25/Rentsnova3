import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "TENANT" | "LANDLORD" | "AGENT" | "ADMIN";
      country: string;
      city: string;
      emailVerified: Date | null;
      isActive: boolean;
      profileCompleted: boolean;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: "TENANT" | "LANDLORD" | "AGENT" | "ADMIN";
    country: string;
    city: string;
    emailVerified: Date | null;
    isActive: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: "TENANT" | "LANDLORD" | "AGENT" | "ADMIN";
    country: string;
    city: string;
    emailVerified: Date | null;
    isActive: boolean;
    profileCompleted: boolean;
  }
}
