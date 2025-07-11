import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RentsNovaLogo } from "@/components/ui/logo";
import { ArrowLeft, Shield, Home, Building, Users, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Access Denied - RentsNova",
  description: "You don't have permission to access this page.",
};

export default function UnauthorizedPage() {
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
                <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
            <p className="text-muted-foreground">
              You don't have permission to access this page
            </p>
          </div>

          {/* Access Denied Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" />
                Insufficient Permissions
              </CardTitle>
              <CardDescription className="text-center">
                This page is restricted to specific user roles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  The page you're trying to access requires special permissions that your current account doesn't have.
                </p>

                <div className="space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Go to Homepage
                    </Link>
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" asChild>
                      <Link href="/auth/signin">
                        Sign In
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/auth/signup">
                        Create Account
                      </Link>
                    </Button>
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
                      Need different access?
                    </span>
                  </div>
                </div>

                <div className="text-sm text-center space-y-2">
                  <p className="text-muted-foreground">
                    If you believe you should have access to this page, please contact your administrator or our support team.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Role Information */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-center mb-6">Account Types</h3>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Home className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Tenant Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Search properties, apply to rentals, manage applications
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
                      <h4 className="font-medium">Landlord Access</h4>
                      <p className="text-sm text-muted-foreground">
                        List properties, manage tenants, process applications
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
                      <h4 className="font-medium">Agent Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Manage multiple properties, track commissions, client management
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-purple-500 mt-1" />
                    <div>
                      <h4 className="font-medium">Admin Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Full platform management, user oversight, system administration
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium mb-2 text-sm">Need Help?</h4>
            <p className="text-xs text-muted-foreground mb-3">
              If you're having trouble accessing your account or need to upgrade your permissions, our support team is here to help.
            </p>
            <Button variant="ghost" size="sm" asChild>
              <Link href="mailto:support@rentsnova.com">
                Contact Support
              </Link>
            </Button>
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
