import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const phoneValidationSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
});

// Phone number patterns for African countries
const phonePatterns: Record<string, { pattern: RegExp; format: string; example: string }> = {
  cameroon: {
    pattern: /^(\+237|237)?[6-9]\d{8}$/,
    format: "+237 6XX XX XX XX",
    example: "+237 677 12 34 56",
  },
  nigeria: {
    pattern: /^(\+234|234)?[7-9]\d{9}$/,
    format: "+234 8XX XXX XXXX",
    example: "+234 803 123 4567",
  },
  kenya: {
    pattern: /^(\+254|254)?[7]\d{8}$/,
    format: "+254 7XX XXX XXX",
    example: "+254 712 345 678",
  },
  ghana: {
    pattern: /^(\+233|233)?[2-5]\d{8}$/,
    format: "+233 2XX XXX XXX",
    example: "+233 244 123 456",
  },
  "south-africa": {
    pattern: /^(\+27|27)?[6-8]\d{8}$/,
    format: "+27 6X XXX XXXX",
    example: "+27 61 234 5678",
  },
  "ivory-coast": {
    pattern: /^(\+225|225)?[0-9]\d{7}$/,
    format: "+225 XX XX XX XX",
    example: "+225 07 12 34 56",
  },
  senegal: {
    pattern: /^(\+221|221)?[7][0-8]\d{7}$/,
    format: "+221 7X XXX XXXX",
    example: "+221 77 123 4567",
  },
  morocco: {
    pattern: /^(\+212|212)?[5-7]\d{8}$/,
    format: "+212 6XX XXX XXX",
    example: "+212 661 234 567",
  },
  egypt: {
    pattern: /^(\+20|20)?1[0-5]\d{8}$/,
    format: "+20 1XX XXX XXXX",
    example: "+20 100 123 4567",
  },
  ethiopia: {
    pattern: /^(\+251|251)?9\d{8}$/,
    format: "+251 9XX XXX XXX",
    example: "+251 911 234 567",
  },
  uganda: {
    pattern: /^(\+256|256)?[7]\d{8}$/,
    format: "+256 7XX XXX XXX",
    example: "+256 772 123 456",
  },
  tanzania: {
    pattern: /^(\+255|255)?[6-7]\d{8}$/,
    format: "+255 7XX XXX XXX",
    example: "+255 754 123 456",
  },
};

function formatPhoneNumber(phoneNumber: string, country: string): string {
  const pattern = phonePatterns[country.toLowerCase()];
  if (!pattern) return phoneNumber;

  // Remove all non-digit characters
  const digits = phoneNumber.replace(/\D/g, "");

  // Add country code if missing
  if (country === "cameroon" && !digits.startsWith("237")) {
    return `+237${digits}`;
  } else if (country === "nigeria" && !digits.startsWith("234")) {
    return `+234${digits}`;
  } else if (country === "kenya" && !digits.startsWith("254")) {
    return `+254${digits}`;
  } else if (country === "ghana" && !digits.startsWith("233")) {
    return `+233${digits}`;
  }

  return `+${digits}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phoneNumber, country } = phoneValidationSchema.parse(body);

    const countryKey = country.toLowerCase();
    const pattern = phonePatterns[countryKey];

    if (!pattern) {
      return NextResponse.json(
        {
          valid: false,
          error: "Phone validation not supported for this country yet",
          supportedCountries: Object.keys(phonePatterns),
        },
        { status: 400 }
      );
    }

    // Clean and format phone number
    const cleanedNumber = phoneNumber.replace(/\s+/g, "").replace(/[-()]/g, "");
    const isValid = pattern.pattern.test(cleanedNumber);

    if (isValid) {
      const formattedNumber = formatPhoneNumber(cleanedNumber, country);

      return NextResponse.json({
        valid: true,
        phoneNumber: formattedNumber,
        country,
        format: pattern.format,
      });
    } else {
      return NextResponse.json(
        {
          valid: false,
          error: `Invalid phone number format for ${country}`,
          expectedFormat: pattern.format,
          example: pattern.example,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Phone validation error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    supportedCountries: Object.keys(phonePatterns),
    patterns: Object.entries(phonePatterns).reduce((acc, [country, data]) => {
      acc[country] = {
        format: data.format,
        example: data.example,
      };
      return acc;
    }, {} as Record<string, { format: string; example: string }>),
  });
}
