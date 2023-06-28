
import { User } from "@/app/models/User";
import connect from "@/app/utils/db"
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { name, email, phoneNumber } = await request.json();

  await connect()

  const newUser = new User({
    name,
    email,
    phoneNumber
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return new NextResponse(err.message, {
        status: 500,
      });
    }
    return new NextResponse("An error occurred", {
      status: 500,
    });
  }
};
