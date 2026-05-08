import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // If a Google Sheets webhook URL is configured, forward the payload
    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhook) {
      const resp = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        return NextResponse.json({ error: "Forwarding to webhook failed" }, { status: 502 });
      }

      return NextResponse.json({ success: true });
    }

    // Fallback: log and return success (no persistence configured)
    console.log("Appointment submission (no webhook configured):", data);
    return NextResponse.json({ success: true, message: "No webhook configured. Submission logged." });
  } catch (err) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
