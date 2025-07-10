import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email("Invalid email format"),
  role: z.enum(["TENANT", "LANDLORD", "AGENT"]),
  country: z.string().min(1, "Country is required"),
  firstName: z.string().min(1, "First name is required").optional(),
  lastName: z.string().min(1, "Last name is required").optional(),
  phoneNumber: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = registerSchema.parse(body);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Create user record (for now, just the basic user without role-specific tables)
    const user = await prisma.user.create({
      data: {
        email: validatedData.email,
        role: validatedData.role,
        country: validatedData.country,
        isActive: true,
        emailVerified: null, // Will be set when they verify via magic link
      },
    });

    // TODO: Later we'll add role-specific table creation when we implement the full schema

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully. Please check your email for verification.",
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          country: user.country,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
