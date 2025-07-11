import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  // Temporarily disabled middleware - just allow all requests
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
