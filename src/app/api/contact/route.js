import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";


// ✅ Handle POST Request - Save Contact Message
export async function POST(req) {
  try {
    const body = await req.json();
    await connectToDB();
    
  

    const newMessage = await Contact.create(body);
    return NextResponse.json({ success: true, message: newMessage }, { status: 201 });
  } catch (error) {
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
    return NextResponse.json({ success: false, error: "Failed to fetch messages" }, { status: 500 });
  }
}
