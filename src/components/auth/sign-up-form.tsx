"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Loader2, Home, Building, Users, CheckCircle } from "lucide-react";
import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["TENANT", "LANDLORD", "AGENT"]),
  country: z.string().min(1, "Please select a country"),
});

const countries = [
  { value: "cameroon", label: "🇨🇲 Cameroon", flag: "🇨🇲" },
  { value: "nigeria", label: "🇳🇬 Nigeria (Coming Soon)", flag: "🇳🇬", disabled: true },
  { value: "kenya", label: "🇰🇪 Kenya (Coming Soon)", flag: "🇰🇪", disabled: true },
  { value: "ghana", label: "🇬🇭 Ghana (Coming Soon)", flag: "🇬🇭", disabled: true },
  { value: "south-africa", label: "🇿🇦 South Africa (Coming Soon)", flag: "🇿🇦", disabled: true },
  { value: "other", label: "🌍 Other African Country", flag: "🌍" },
];

export function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    country: "cameroon", // Default to Cameroon since it's available
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    setSuccess(false);

    try {
      // Validate form data
      const validatedData = signUpSchema.parse(formData);

      // Call registration API
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Registration failed");
      }

      setSuccess(true);
      // Redirect to sign in page after a moment
      setTimeout(() => {
        window.location.href = "/auth/signin";
      }, 2000);
    } catch (err) {
      console.error("Registration error:", err);

      if (err instanceof z.ZodError) {
        setError(err.issues[0]?.message || "Please check your input");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  if (success) {
    return (
      <div className="text-center p-6">
        <div className="mb-4">
          <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">Account created successfully!</h3>
        <p className="text-sm text-muted-foreground mb-4">
          You can now sign in with your email address. Redirecting you to sign in...
        </p>
        <div className="animate-pulse text-sm text-muted-foreground">
          Redirecting...
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Role Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          I want to <span className="text-red-500">*</span>
        </label>
        <Select
          value={formData.role}
          onValueChange={(value) => updateFormData("role", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="TENANT">
              <div className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Find a place to rent</span>
              </div>
            </SelectItem>
            <SelectItem value="LANDLORD">
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>List my properties</span>
              </div>
            </SelectItem>
            <SelectItem value="AGENT">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Work as an agent</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className="pl-10"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Country Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Country <span className="text-red-500">*</span>
        </label>
        <Select
          value={formData.country}
          onValueChange={(value) => updateFormData("country", value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem
                key={country.value}
                value={country.value}
                disabled={country.disabled}
              >
                {country.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {error && (
        <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
          {error}
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isLoading || !formData.email || !formData.role || !formData.country}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
}
