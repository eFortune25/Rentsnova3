import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us - RentsNova | Modernizing Africa's Housing Marketplace",
  description: "Learn about RentsNova's mission to revolutionize African housing markets. Starting in Cameroon, we're building transparent, secure, and accessible property rental solutions across Africa.",
  keywords: ["about", "mission", "vision", "african housing", "cameroon", "property marketplace", "real estate africa"],
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RentsNovaLogo } from "@/components/ui/logo";
import { Target, Heart, Users, Globe, Shield, Smartphone, Star, MapPin, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
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
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
                <Link href="/about" className="text-foreground font-medium">
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
            <RentsNovaLogo size="xl" showText={true} className="justify-center mb-4" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">
              Rent Smarter. Live Anywhere.
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Revolutionizing{" "}
            <span className="text-primary">African Housing</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            We're on a mission to modernize Africa's housing marketplace, making property rental
            and sales transparent, secure, and accessible to everyone across the continent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Join Our Mission
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To create a transparent, secure, and efficient housing marketplace that connects
                property owners, tenants, and real estate professionals across Africa, starting
                with Cameroon.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe everyone deserves access to quality housing and transparent rental
                processes. By leveraging technology designed specifically for African markets,
                we're breaking down barriers and building bridges in the housing ecosystem.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  <span className="font-semibold">Transparency First</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-primary mr-2" />
                  <span className="font-semibold">Built for Africa</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg"></div>
              <Card className="relative">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become the leading housing marketplace platform across Africa, empowering
                    millions of people to find their perfect home while enabling property owners
                    to efficiently manage their investments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              African housing markets face unique challenges that traditional solutions don't address
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Lack of Trust</CardTitle>
                <CardDescription>
                  Limited verification systems lead to fraud and unsafe transactions between landlords and tenants.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Poor Digital Access</CardTitle>
                <CardDescription>
                  Most platforms aren't optimized for mobile-first users or slow internet connections common in Africa.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Fragmented Markets</CardTitle>
                <CardDescription>
                  No unified platform connecting tenants, landlords, and agents with local payment methods and languages.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive platform designed specifically for African markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Trust & Security</CardTitle>
                <CardDescription>
                  Identity verification, secure messaging, and payment protection for safe transactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Verified user profiles</li>
                  <li>• Secure payment escrow</li>
                  <li>• Fraud detection system</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Mobile-First Design</CardTitle>
                <CardDescription>
                  Optimized for smartphones with offline capabilities and fast loading on slow connections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Works on any smartphone</li>
                  <li>• Optimized for slow internet</li>
                  <li>• Offline functionality</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Local Integration</CardTitle>
                <CardDescription>
                  MTN Money, Orange Money, bilingual support, and understanding of local markets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Local payment methods</li>
                  <li>• English & French support</li>
                  <li>• Cultural understanding</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real numbers from our growing community in Cameroon
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Digital Management</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Open, honest communication in all our relationships and transactions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Empathy</h3>
              <p className="text-sm text-muted-foreground">
                Understanding the unique challenges faced by African communities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously improving our platform to better serve our users.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                Building stronger connections between people and places.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Continental Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Starting in Cameroon, expanding across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Expansion Roadmap</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phase 1: Cameroon (Current)</h4>
                    <p className="text-muted-foreground">Establishing our foundation in major Cameroonian cities including Yaoundé and Douala.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phase 2: Central Africa</h4>
                    <p className="text-muted-foreground">Expanding to neighboring countries: Chad, Central African Republic, and Equatorial Guinea.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phase 3: Continental Scale</h4>
                    <p className="text-muted-foreground">Nigeria, Kenya, Ghana, and other major African markets with localized features.</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <CardContent className="relative p-8">
                <h4 className="text-xl font-bold mb-4">12 Countries Ready</h4>
                <p className="text-muted-foreground mb-6">
                  Our platform already supports 12 African countries with 86+ cities,
                  complete with local currencies, phone validation, and cultural considerations.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>🇨🇲 Cameroon</div>
                  <div>🇳🇬 Nigeria</div>
                  <div>🇰🇪 Kenya</div>
                  <div>🇬🇭 Ghana</div>
                  <div>🇸🇳 Senegal</div>
                  <div>🇨🇮 Ivory Coast</div>
                  <div>🇹🇿 Tanzania</div>
                  <div>🇺🇬 Uganda</div>
                  <div>🇷🇼 Rwanda</div>
                  <div>🇲🇦 Morocco</div>
                  <div>🇪🇬 Egypt</div>
                  <div>🇿🇦 South Africa</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 rentsnova-gradient text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the Housing Revolution
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Be part of transforming Africa's housing marketplace. Whether you're a tenant,
            landlord, or agent, there's a place for you in our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
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
