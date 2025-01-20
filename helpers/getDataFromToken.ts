import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { UserType } from "@/types/userTypes";
export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!);
    if (!decodedToken || typeof decodedToken === "string") {
      throw new Error("Invalid token payload");
    }

    return decodedToken as UserType;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
};
