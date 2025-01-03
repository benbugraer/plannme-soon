/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resend } from "resend";
import { NextResponse } from "next/server";
import WelcomeEmail from "@/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("API Key:", process.env.RESEND_API_KEY?.substring(0, 5) + "...");

const isProduction = process.env.NODE_ENV === "production";
const fromEmail = isProduction
  ? "PlannMe <bugraer@plannme.com>"
  : "PlannMe <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    console.log("Gelen email:", email);

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Email doğrulama
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Geçerli bir email adresi giriniz." },
        { status: 400 }
      );
    }

    // Hoşgeldin emaili gönder
    try {
      const result = await resend.emails.send({
        from: "PlannMe <bugraer@plannme.com>",
        to: email,
        subject: "PlannMe - Hoş Geldiniz!",
        react: WelcomeEmail(),
      });
      console.log("Email gönderim sonucu:", result);
    } catch (emailError) {
      console.error("Email gönderim hatası:", emailError);
      throw emailError;
    }

    return NextResponse.json(
      { message: "Aboneliğiniz başarıyla tamamlandı!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen tekrar deneyiniz." },
      { status: 500 }
    );
  }
}
export async function GET() {
  const data = { message: "API is working" };
  const response = new Response(JSON.stringify(data), {
    headers: {
      "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
    },
  });
  return response;
}
