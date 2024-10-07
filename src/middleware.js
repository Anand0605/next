
import { NextResponse } from "next/server";

const middleware =(request)=>{

    if(request.nextUrl.pathname != "/login"){
        // return NextResponse.redirect(new URL('/login',request.url))
    }
    
}

export default middleware

export const config={
    // macher:["/about/:path*","/studentlist/:path*","/about/aboutCollege/:path*"]
}