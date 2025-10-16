import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import mongoose from "mongoose";

// ✅ Handle POST Request - Save Contact Message
export async function POST(req) {
  try {
    const body = await req.json();
    await connectToDB();
    //check mongoDB connection =1
    console.log("MongoDB connected" + mongoose.connection.readyState);
  

    const newMessage = await Contact.create(body);
    console.log("New contact message saved:", newMessage);
    return NextResponse.json({ success: true, message: newMessage }, { status: 201 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 });
  }
}

// ✅ Optional: GET to view all messages (admin)
export async function GET() {
  try {
    await connectToDB();
    const messages = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, messages }, { status: 200 });
  } catch (error) {
    console.error("Fetch Contact Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch messages" }, { status: 500 });
  }
}
