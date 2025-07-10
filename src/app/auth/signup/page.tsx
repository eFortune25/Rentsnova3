import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RentsNovaLogo } from "@/components/ui/logo";
import { ArrowLeft, Mail, Shield, Users, Home, Building, CheckCircle, Globe } from "lucide-react";
import Link from "next/link";
import { SignUpForm } from "@/components/auth/sign-up-form";

export const metadata: Metadata = {
  title: "Get Started - RentsNova | Join Africa's Housing Revolution",
  description: "Create your free RentsNova account. Choose your role as a tenant, landlord, or agent and start your journey in Africa's modern housing marketplace.",
  keywords: ["sign up", "register", "create account", "tenant", "landlord", "agent", "africa", "housing"],
};

export default function SignUpPage() {
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
            <h1 className="text-2xl font-bold mb-2">Join RentsNova</h1>
            <p className="text-muted-foreground">
              Start your journey in Africa's modern housing marketplace
            </p>
          </div>

          {/* Sign Up Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Create Your Account</CardTitle>
              <CardDescription className="text-center">
                Choose your role and we'll get you started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <SignUpForm />

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      What happens next
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Email Verification</p>
                      <p className="text-muted-foreground">We'll send a magic link to verify your email</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Profile Setup</p>
                      <p className="text-muted-foreground">Complete your profile with additional details</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Start Exploring</p>
                      <p className="text-muted-foreground">Access your personalized dashboard</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="text-xs text-muted-foreground text-center">
                By creating an account, you agree to our{" "}
                <Link href="#" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/signin" className="font-medium text-primary hover:underline">
                Sign in here
              </Link>
            </p>
          </div>

          {/* Role Benefits */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-center mb-6">Choose Your Journey</h3>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Home className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Tenants</h4>
                      <p className="text-sm text-muted-foreground">
                        Find verified properties, apply securely, and manage your rental journey
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Building className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Landlords</h4>
                      <p className="text-sm text-muted-foreground">
                        List properties, screen tenants, and collect rent digitally
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Agents</h4>
                      <p className="text-sm text-muted-foreground">
                        Manage multiple properties, track commissions, and grow your network
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why RentsNova */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4">Why RentsNova?</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium text-sm">Secure & Trusted</h4>
                <p className="text-xs text-muted-foreground">
                  Verified users and protected transactions
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium text-sm">Built for Africa</h4>
                <p className="text-xs text-muted-foreground">
                  Local payments and bilingual support
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
