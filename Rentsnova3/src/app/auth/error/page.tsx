import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RentsNovaLogo } from "@/components/ui/logo";
import { AlertTriangle, ArrowLeft, Mail, RefreshCcw } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication Error - RentsNova",
  description: "An error occurred during authentication. Please try again.",
};

interface AuthErrorPageProps {
  searchParams: {
    error?: string;
  };
}

const errorMessages: Record<string, { title: string; description: string; action: string }> = {
  Signin: {
    title: "Sign In Error",
    description: "There was a problem signing you in. Please try again.",
    action: "Try signing in again",
  },
  OAuthSignin: {
    title: "Sign In Error",
    description: "There was a problem signing you in with the external provider.",
    action: "Try signing in again",
  },
  OAuthCallback: {
    title: "OAuth Error",
    description: "There was a problem with the OAuth callback.",
    action: "Try signing in again",
  },
  OAuthCreateAccount: {
    title: "Account Creation Error",
    description: "Could not create an account with the external provider.",
    action: "Try signing in again",
  },
  EmailCreateAccount: {
    title: "Account Creation Error",
    description: "Could not create an account with your email.",
    action: "Try signing in again",
  },
  Callback: {
    title: "Callback Error",
    description: "There was a problem with the authentication callback.",
    action: "Try signing in again",
  },
  OAuthAccountNotLinked: {
    title: "Account Not Linked",
    description: "This email is already associated with another account. Please use the original sign-in method.",
    action: "Use original sign-in method",
  },
  EmailSignin: {
    title: "Email Sign In Error",
    description: "The magic link could not be sent. Please check your email address and try again.",
    action: "Try again",
  },
  CredentialsSignin: {
    title: "Sign In Failed",
    description: "The credentials you provided are incorrect.",
    action: "Check your credentials",
  },
  SessionRequired: {
    title: "Session Required",
    description: "You need to be signed in to access this page.",
    action: "Sign in to continue",
  },
  default: {
    title: "Authentication Error",
    description: "An unexpected error occurred during authentication.",
    action: "Try again",
  },
};

export default function AuthErrorPage({ searchParams }: AuthErrorPageProps) {
  const errorType = searchParams.error || "default";
  const errorInfo = errorMessages[errorType] || errorMessages.default;

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
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-full">
                <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">{errorInfo.title}</h1>
            <p className="text-muted-foreground">
              {errorInfo.description}
            </p>
          </div>

          {/* Error Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">What happened?</CardTitle>
              <CardDescription className="text-center">
                {errorType !== "default" && (
                  <span className="text-xs font-mono bg-muted px-2 py-1 rounded">
                    Error: {errorType}
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {/* Primary Action */}
                <Button className="w-full" size="lg" asChild>
                  <Link href="/auth/signin" className="flex items-center justify-center">
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    {errorInfo.action}
                  </Link>
                </Button>

                {/* Alternative Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/auth/signup">
                      Create Account
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">
                      Go Home
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Still having trouble?
                    </span>
                  </div>
                </div>

                <div className="text-sm text-center space-y-2">
                  <p className="text-muted-foreground">
                    If this error persists, please contact our support team.
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="mailto:support@rentsnova.com" className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Support
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Solutions */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-center mb-6">Common Solutions</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Check Your Email</h4>
                  <p className="text-sm text-muted-foreground">
                    Make sure you're using the correct email address and check your spam folder for magic links.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Clear Browser Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Try clearing your browser's cookies and cache, then attempt to sign in again.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Try a Different Browser</h4>
                  <p className="text-sm text-muted-foreground">
                    Sometimes switching to a different browser or disabling ad blockers can help.
                  </p>
                </CardContent>
              </Card>
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
