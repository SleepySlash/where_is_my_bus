import { NextResponse } from "next/server";

import {
  deleteUserInAuth,
  deleteDocumentById,
  findDocumentsByRoll,
} from "@/server/appwrite";

export async function POST(req) {
  const body = await req.json();
  console.log("Let's check the req body", body);
  const { userId, role, roll, docId } = body;
  // console.log("Let's check the req body", req.body.params);
  console.log("Got here 1 with value", docId);
  try {
    if (role !== "Student") {
      //   await deleteUserInAuth(userId);
      console.log("Got here 1");
      await deleteDocumentById(docId);
    } else {
      const documents = await findDocumentsByRoll(roll);
      for (let i = 0; i < documents.length; i++) {
        // await deleteUserInAuth(documents[i].UserId);
        await deleteDocumentById(documents[i].$id);
      }
    }
    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
