import { NextRequest, NextResponse } from 'next/server';
import { supabase } from './lib/supabaseClient';

export async function middleware(req : NextRequest) {
  const res = NextResponse.next();

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    const redirectUrl = new URL('/giris', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/profil/:path*'],
};
