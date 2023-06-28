import {User} from "@/app/models/User"
import connect from "@/app/utils/db"
import { NextRequest, NextResponse } from "next/server"

type ParamsType = {
  id: string;
};

export const GET = async (request: NextRequest, { params }: { params: ParamsType })=> {

  const {id} = params

  try {

    await connect()

    const user = await User.findById(id)

    return new NextResponse(JSON.stringify(user), { status: 200, headers: { "Content-Type": "application/json" } })
  } catch(err){
    return new NextResponse("It works!", { status: 400})
  }
}