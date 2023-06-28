import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest)=> {
  return new NextResponse("It works!", { status: 200})
}