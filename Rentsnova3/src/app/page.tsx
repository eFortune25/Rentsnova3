import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RentsNovaLogo } from "@/components/ui/logo";
import { Star, Users, Home, MapPin, Phone, Shield, Smartphone, CreditCard, CheckCircle, MapPin as Location, Star as StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
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
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Select defaultValue="en">
                <SelectTrigger className="w-16">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="fr">FR</SelectItem>
                </SelectContent>
              </Select>

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
          {/* Logo & Tagline */}
          <div className="mb-8">
            <RentsNovaLogo size="xl" showText={true} className="justify-center mb-4" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
              Rent Smarter. Live Anywhere.
            </p>
          </div>

          {/* Announcement Banner */}
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-8 bg-primary/5 border-primary/20">
            <span className="text-primary font-medium">🏠 Now Live in Cameroon - Starting the Revolution</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Modernizing Africa's{" "}
            <span className="text-primary">Housing Marketplace</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Secure, transparent, and efficient property rentals and sales across Africa.
            Connect property owners, real estate agents, tenants and buyers through
            our comprehensive marketplace platform.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Users className="mr-2 h-5 w-5" />
              I'm a Landlord
            </Button>
            <Button size="lg" variant="outline">
              <Home className="mr-2 h-5 w-5" />
              I'm Looking to Rent
            </Button>
            <Button size="lg" variant="secondary">
              <Users className="mr-2 h-5 w-5" />
              I'm an Agent
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="stat-number">10+</div>
              <p className="text-muted-foreground">Available Properties</p>
            </div>
            <div className="text-center">
              <div className="stat-number">4+</div>
              <p className="text-muted-foreground">Cities Covered</p>
            </div>
            <div className="text-center">
              <div className="stat-number">2,000+</div>
              <p className="text-muted-foreground">Active Tenants</p>
            </div>
            <div className="text-center">
              <div className="stat-number">100%</div>
              <p className="text-muted-foreground">Digital Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Search */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1">
              <Input
                placeholder="Search rental properties by location..."
                className="h-12 text-base"
              />
            </div>
            <Select>
              <SelectTrigger className="h-12 md:w-48">
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="douala">Douala</SelectItem>
                <SelectItem value="yaounde">Yaoundé</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-12 md:w-48">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
              </SelectContent>
            </Select>
            <Button size="lg" className="h-12 px-8">
              Search Rentals
            </Button>
          </div>
        </div>
      </section>

      {/* Available Properties */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Properties</h2>
            <p className="text-xl text-muted-foreground">
              Discover verified properties for rent and sale across Cameroon's major cities
            </p>
          </div>

          {/* Property Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border bg-muted p-1">
              <Button variant="default" size="sm" className="rounded-md">
                For Rent
              </Button>
              <Button variant="ghost" size="sm" className="rounded-md">
                For Sale
              </Button>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Property Card 1 */}
            <Card className="property-card">
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/3865098831/2035048105.jpeg"
                  alt="Modern 2BR House"
                  width={400}
                  height={300}
                  className="property-card-image"
                />
                <Badge className="absolute top-3 left-3 bg-primary">2BR 1BA</Badge>
                <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                  <StarIcon className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Modern 2BR House in Douala</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  Bonanjo, Douala
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-lg font-semibold text-primary">
                    150,000 FCFA
                    <span className="text-sm text-muted-foreground ml-1">per month</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <span>2 🛏️</span>
                  <span>1 🚿</span>
                  <span>85m²</span>
                </div>
              </CardContent>
            </Card>

            {/* Property Card 2 */}
            <Card className="property-card">
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/3865098831/2323546999.jpeg"
                  alt="Luxury 3BR Apartment"
                  width={400}
                  height={300}
                  className="property-card-image"
                />
                <Badge className="absolute top-3 left-3 bg-primary">3BR 2BA</Badge>
                <Badge className="absolute top-3 right-12 bg-green-600">Save</Badge>
                <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                  <StarIcon className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Luxury 3BR Apartment</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  Bastos, Yaoundé
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-lg font-semibold text-primary">
                    300,000 FCFA
                    <span className="text-sm text-muted-foreground ml-1">per month</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <span>3 🛏️</span>
                  <span>2 🚿</span>
                  <span>120m²</span>
                </div>
              </CardContent>
            </Card>

            {/* Property Card 3 */}
            <Card className="property-card">
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/3865098831/3813164612.jpeg"
                  alt="Cozy Studio"
                  width={400}
                  height={300}
                  className="property-card-image"
                />
                <Badge className="absolute top-3 left-3 bg-primary">1BR 1BA</Badge>
                <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                  <StarIcon className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Cozy Studio Near University</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  Ngoa-Ekelle, Yaoundé
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-lg font-semibold text-primary">
                    80,000 FCFA
                    <span className="text-sm text-muted-foreground ml-1">per month</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">4.5</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <span>1 🛏️</span>
                  <span>1 🚿</span>
                  <span>45m²</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Properties →
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for African Markets</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Addressing real challenges with technology designed specifically for African property markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trust & Security */}
            <Card>
              <CardHeader>
                <div className="feature-icon mb-4">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
                <CardTitle>Trust & Security</CardTitle>
                <CardDescription>
                  Verified users, secure messaging, and payment protection for safe transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Identity verification required
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Secure payment escrow
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Fraud protection system
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobile-First */}
            <Card>
              <CardHeader>
                <div className="feature-icon mb-4">
                  <Smartphone className="w-12 h-12 text-primary" />
                </div>
                <CardTitle>Mobile-First Design</CardTitle>
                <CardDescription>
                  Optimized for smartphones with offline capabilities and fast loading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Works on any smartphone
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Optimized for slow connections
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    French & English support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Local Payments */}
            <Card>
              <CardHeader>
                <div className="feature-icon mb-4">
                  <CreditCard className="w-12 h-12 text-primary" />
                </div>
                <CardTitle>Local Payments</CardTitle>
                <CardDescription>
                  MTN Money, Orange Money, and bank transfers integrated seamlessly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    MTN Money integration
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Orange Money support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Bank transfer options
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 rentsnova-gradient text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Property Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of landlords and tenants already using RentsNova
            to make property rental simple, secure, and transparent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Home className="mr-2 h-5 w-5" />
              List Your Property
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Find Your Home
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <RentsNovaLogo size="md" showText={true} className="text-white" />
              </div>
              <p className="text-gray-300 mb-2">
                Rent Smarter. Live Anywhere.
              </p>
              <p className="text-sm text-gray-400">
                Modernizing Africa's housing marketplace, starting with Cameroon.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-white transition-colors">For Landlords</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">For Tenants</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 RentsNova. All rights reserved. Made with ❤️ for Africa.
          </div>
        </div>
      </footer>
    </div>
  );
}
