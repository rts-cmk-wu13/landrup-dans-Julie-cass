"use server"
import { NextResponse } from "next/server";

export function proxy(request) {
    if(!request.cookies.has("authToken")){
        return NextResponse.redirect(new URL ('/activities', request.url));
    }}

export const config = {
    matcher: '/profile/:path*',
};