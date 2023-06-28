import {User} from "@/app/models/User"
import connect from "@/app/utils/db"
import { NextRequest, NextResponse } from "next/server"


export const GET = async (request: NextRequest)=> {

  try {

    await connect()

    const users = await User.find()

    return new NextResponse(JSON.stringify(users), { status: 200, headers: { "Content-Type": "application/json" } })
  } catch(err){
    return new NextResponse("It works!", { status: 400})
  }
}