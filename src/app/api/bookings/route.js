import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

// ✅ Handle POST Request - Create a Booking
export async function POST(req) {
  try {
    const body = await req.json();
    await connectToDB();

    const newBooking = await Booking.create(body);
    return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to create booking" }, { status: 500 });
  }
}

// ✅ Handle GET Request - Fetch all Bookings
export async function GET() {
  try {
    await connectToDB();
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, bookings }, { status: 200 });
  } catch (error) {
    console.error("Fetch Bookings Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch bookings" }, { status: 500 });
  }
}
