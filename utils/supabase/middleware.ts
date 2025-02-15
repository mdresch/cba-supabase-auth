import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            const cookieOptions = { ...options }; // Create a copy so we don't modify the original
            const requestCookie = {
              name: name,
              value: value,
              ...cookieOptions, // Spread the options into the cookie object
            };
            request.cookies.set(requestCookie); // Now set the cookie object
          });
        
          supabaseResponse = NextResponse.next({ request });
        
          cookiesToSet.forEach(({ name, value, options }) => {
            const cookieOptions = { ...options }; // Important: Copy the options!
            supabaseResponse.cookies.set({ name, value, ...cookieOptions });
          });
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log("Supabase User:", user);

  if (
    !user &&
    !request.nextUrl.pathname.startsWith('/sign-in') &&
    !request.nextUrl.pathname.startsWith('/auth') &&
  !request.nextUrl.pathname.startsWith('/sign-up') &&
  !request.nextUrl.pathname.startsWith('/reset-password') &&
  !request.nextUrl.pathname.startsWith('/verify-email') &&
  !request.nextUrl.pathname.startsWith('/sign-out') &&
  !request.nextUrl.pathname.startsWith('/') // All paths included
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/sign-in'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}