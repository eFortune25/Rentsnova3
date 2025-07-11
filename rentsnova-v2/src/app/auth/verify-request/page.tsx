import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RentsNovaLogo } from "@/components/ui/logo";
import { ArrowLeft, Mail, CheckCircle, Clock, RefreshCcw } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Check Your Email - RentsNova",
  description: "We've sent you a secure magic link to sign in to your RentsNova account.",
};

export default function VerifyRequestPage() {
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
              <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">Check your email</h1>
            <p className="text-muted-foreground">
              We've sent you a secure magic link
            </p>
          </div>

          {/* Verification Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Magic Link Sent</CardTitle>
              <CardDescription className="text-center">
                Click the link in your email to sign in securely
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email sent successfully</p>
                    <p className="text-sm text-muted-foreground">
                      Check your inbox and spam folder
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Link expires in 24 hours</p>
                    <p className="text-sm text-muted-foreground">
                      For your security, the magic link will expire after 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">One-click sign in</p>
                    <p className="text-sm text-muted-foreground">
                      Simply click the link to be signed in automatically
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Didn't receive the email?
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/auth/signin" className="flex items-center justify-center">
                      <RefreshCcw className="mr-2 h-4 w-4" />
                      Send another magic link
                    </Link>
                  </Button>

                  <div className="text-center">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/auth/signup">
                        Create a new account instead
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-center mb-6">Troubleshooting</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Check your spam folder</h4>
                  <p className="text-sm text-muted-foreground">
                    Sometimes magic links can end up in spam or junk folders. Check there and mark RentsNova as safe.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Wait a few minutes</h4>
                  <p className="text-sm text-muted-foreground">
                    Email delivery can sometimes take a few minutes. If you don't see it, try sending another link.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Check your email address</h4>
                  <p className="text-sm text-muted-foreground">
                    Make sure you entered the correct email address. You can try signing in again with the correct email.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Still having trouble?</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Contact our support team if you continue to experience issues.
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="mailto:support@rentsnova.com" className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Support
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium mb-2 text-sm">🔒 Security Notice</h4>
            <p className="text-xs text-muted-foreground">
              For your security, magic links can only be used once and expire after 24 hours.
              Never share your magic link with anyone else.
            </p>
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
