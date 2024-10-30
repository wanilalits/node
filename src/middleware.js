import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
 const path=request.nextUrl.pathname;

 var ispublicPath = path ==='/login' || path ==='/register';
 var token = request.cookies.get('token')?.value || '';






 if (ispublicPath && token)
{ 
  console.log('1 is'+ ispublicPath+ token )
return NextResponse.redirect(new URL(path, request.nextUrl));
}

if (!ispublicPath && !token  )
    { console.log('2 is'+ ispublicPath+ token )
    return NextResponse.redirect(new URL('/login', request.nextUrl));
    }



}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/login', '/register', '/profile'],
}


//'/about/:path*'  '/',