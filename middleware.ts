import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
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
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    response = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
                },
            },
        }
    )

    // 2. Refresh the session link if it exists
    const { data: { user } } = await supabase.auth.getUser()

    // 3. Security Route Guard Protection
    const isTargetingAdmin = request.nextUrl.pathname.startsWith('/admin')
    const isAtAdminLogin = request.nextUrl.pathname === '/admin/login' // Adjust if your login path is different

    if (isTargetingAdmin && !isAtAdminLogin && !user) {
        const loginUrl = new URL('/admin/login', request.url)
        return NextResponse.redirect(loginUrl)
    }

    return response
}

export const config = {
    matcher: ['/admin/:path*'],
}