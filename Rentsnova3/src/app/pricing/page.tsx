import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing - RentsNova | Transparent Housing Plans for Africa",
  description: "Choose the perfect plan for your housing needs. From free browsing to professional property management, find transparent pricing for landlords, tenants, and agents in Africa.",
  keywords: ["pricing", "plans", "landlord", "tenant", "agent", "property management", "africa", "cameroon"],
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RentsNovaLogo } from "@/components/ui/logo";
import { CheckCircle, Star, ArrowRight, Users, Home, Shield, Smartphone, CreditCard } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <RentsNovaLogo size="md" showText={true} />
              </Link>

              <div className="hidden md:flex items-center space-x-6">
                <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="text-foreground font-medium">
                  Pricing
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <RentsNovaLogo size="lg" showText={true} className="justify-center mb-4" />
            <p className="text-xl font-medium text-secondary">
              Rent Smarter. Live Anywhere.
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Simple, Transparent{" "}
            <span className="text-primary">Pricing</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Choose the plan that works for you. Start free, upgrade as you grow.
            All plans include our core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex rounded-lg border bg-muted p-1">
              <Button variant="default" size="sm" className="rounded-md">
                Monthly
              </Button>
              <Button variant="ghost" size="sm" className="rounded-md">
                Annual <Badge variant="secondary" className="ml-2">Save 20%</Badge>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

            {/* Basic User */}
            <Card className="relative">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-lg">Basic User</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Free</span>
                  </div>
                  <CardDescription className="mt-2">
                    Perfect for browsing properties
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Browse rental & sale properties</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Basic search filters</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Contact property owners</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Save favorites</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Tenant Premium */}
            <Card className="relative border-primary">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-primary text-primary-foreground">Popular</Badge>
              </div>
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-lg">Tenant Premium</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">2,000</span>
                    <span className="text-lg text-muted-foreground ml-1">FCFA</span>
                  </div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <CardDescription className="mt-2">
                    Enhanced features for serious renters
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Priority application processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Advanced search filters</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Application tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Tenant protection insurance</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Property Owner Pro */}
            <Card className="relative">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-lg">Property Owner Pro</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">10,000</span>
                    <span className="text-lg text-muted-foreground ml-1">FCFA</span>
                  </div>
                  <div className="text-sm text-muted-foreground">per property/month</div>
                  <CardDescription className="mt-2">
                    Professional property management
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Unlimited rental & sale listings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Application & inquiry management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Automated rent collection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Buyer & tenant screening</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Financial reporting</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Real Estate Agent */}
            <Card className="relative">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-lg">Real Estate Agent</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">15,000</span>
                    <span className="text-lg text-muted-foreground ml-1">FCFA</span>
                  </div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <CardDescription className="mt-2">
                    Professional agent tools + commission tracking
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Multi-property portfolio management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Client & landlord network</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Commission tracking system</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Lead generation tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
                    <span className="text-sm">Performance analytics</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <div className="text-sm text-center text-muted-foreground">
                    + 2% commission on transactions
                  </div>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose RentsNova?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built specifically for African markets with features that matter most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trust & Security */}
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Trust & Security</CardTitle>
                <CardDescription>
                  Identity verification and secure payments
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Mobile-First */}
            <Card>
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Mobile-First</CardTitle>
                <CardDescription>
                  Optimized for smartphones and slow connections
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Local Payments */}
            <Card>
              <CardHeader>
                <CreditCard className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Local Payments</CardTitle>
                <CardDescription>
                  MTN Money, Orange Money, and bank transfers
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Bilingual */}
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Bilingual Support</CardTitle>
                <CardDescription>
                  English and French language support
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 rentsnova-gradient text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of landlords and tenants already using RentsNova.
            Start with our free plan, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Home className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Users className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <RentsNovaLogo size="md" showText={true} />
              </div>
              <p className="text-muted-foreground mb-2">
                Rent Smarter. Live Anywhere.
              </p>
              <p className="text-sm text-muted-foreground">
                Modernizing Africa's housing marketplace, starting with Cameroon.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">For Landlords</Link></li>
                <li><Link href="#" className="hover:text-foreground">For Tenants</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="/#features" className="hover:text-foreground">Features</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="#" className="hover:text-foreground">Support</Link></li>
                <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-foreground">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 RentsNova. All rights reserved. Made with ❤️ for Africa.
          </div>
        </div>
      </footer>
    </div>
  );
}
