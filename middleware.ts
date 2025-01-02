import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = req.cookies.get("authToken");

  if (!token) {
    return NextResponse.redirect(new URL("/giris", req.url));
  }

  try {
    return NextResponse.next();

  } catch (error) {
    console.error("Token doğrulama hatası:", error);
    return NextResponse.redirect(new URL("/giris", req.url));
  }
};

export const config = {
  matcher: ["/profil/:path*"],
};
