import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // console.log("Proxying request to /todo/1", request);
  // return NextResponse.redirect(new URL("/todo/1", request.url));
}

export const config = {
  matcher: "/todo",
};
