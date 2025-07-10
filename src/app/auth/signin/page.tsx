import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RentsNovaLogo } from "@/components/ui/logo";
import { ArrowLeft, Mail, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";
import { SignInForm } from "@/components/auth/sign-in-form";

export const metadata: Metadata = {
  title: "Sign In - RentsNova | Access Your Account",
  description: "Sign in to your RentsNova account using our secure magic link authentication. No passwords required - just enter your email.",
  keywords: ["sign in", "login", "authentication", "magic link", "rentsnova", "africa"],
};

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center">
              <RentsNovaLogo size="md" showText={true} />
            </Link>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <RentsNovaLogo size="lg" showText={true} className="justify-center mb-4" />
            <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
            <p className="text-muted-foreground">
              Sign in to your RentsNova account
            </p>
          </div>

          {/* Sign In Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Sign In</CardTitle>
              <CardDescription className="text-center">
                Enter your email address and we'll send you a secure sign-in link
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <SignInForm />

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      How it works
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Secure & Passwordless</p>
                      <p className="text-muted-foreground">No passwords to remember or forget</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Magic Link</p>
                      <p className="text-muted-foreground">We'll send a secure link to your email</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Instant Access</p>
                      <p className="text-muted-foreground">Click the link to sign in automatically</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="font-medium text-primary hover:underline">
                Get started for free
              </Link>
            </p>
          </div>

          {/* Features */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4">Why Choose RentsNova?</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium">Trusted & Secure</h4>
                <p className="text-sm text-muted-foreground">
                  Verified users and secure transactions
                </p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium">Mobile-First</h4>
                <p className="text-sm text-muted-foreground">
                  Optimized for African markets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t mt-12">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <RentsNovaLogo size="sm" showText={true} className="justify-center" />
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            Rent Smarter. Live Anywhere.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 RentsNova. All rights reserved. Made with ❤️ for Africa.
          </p>
        </div>
      </footer>
    </div>
  );
}
