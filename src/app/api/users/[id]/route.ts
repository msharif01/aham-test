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

export const DELETE = async (request: NextRequest, { params }: { params: ParamsType }) => {
  const { id } = params;

  try {
    await connect();

    await User.findByIdAndDelete(id);

    return new NextResponse("User has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
