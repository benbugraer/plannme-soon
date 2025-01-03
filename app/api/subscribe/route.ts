/**
 * @fileoverview Email abonelik sistemi ve hoş geldin emaili gönderme işlemleri
 */

import { Resend } from "resend";
import { NextResponse } from "next/server";
import WelcomeEmail from "@/emails/welcome";

// Environment variables kontrolü
if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY yapılandırılmamış");
}

// Resend instance'ı oluştur
const resend = new Resend(process.env.RESEND_API_KEY);

// API isteği için tip tanımlaması
interface SubscribeRequest {
  email: string;
  name?: string; // İsteğe bağlı isim alanı
}

// Email doğrulama için regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Ortam bazlı email konfigürasyonu
const isProduction = process.env.NODE_ENV === "production";
const fromEmail = isProduction
  ? "PlannMe <bugraer@plannme.com>"
  : "PlannMe <onboarding@resend.dev>";

/**
 * Abone olma ve hoş geldin emaili gönderme işlemini gerçekleştiren POST handler
 */
export async function POST(request: Request) {
  try {
    // Request body'den veriyi al
    const { email } = (await request.json()) as SubscribeRequest;
    console.log("İşleme alınan email:", email);

    // Email doğrulama
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçerli bir email adresi giriniz." },
        { status: 400 }
      );
    }

    try {
      // Welcome emaili gönderimi
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "PlannMe'ye Hoş Geldiniz! 🎉",
        react: WelcomeEmail(), // Email template'i gönder
        // Email gönderim ayarları
        tags: [
          {
            name: "category",
            value: "welcome",
          },
          {
            name: "environment",
            value: isProduction ? "production" : "development",
          },
        ],
        text: `Plannme'ye hoş geldiniz! Ailemize katıldığınız için çok mutluyuz.`, // Plain text alternatifi
      });

      // Başarılı sonuç logla
      console.log("Email gönderim başarılı:", {
        email,
        timestamp: new Date().toISOString(),
      });

      // Başarılı yanıt döndür
      return NextResponse.json(
        {
          success: true,
          message: "Aboneliğiniz başarıyla tamamlandı!",
        },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (emailError) {
      // Email gönderim hatalarını logla
      console.error("Email gönderim hatası:", emailError);

      // Hata tipine göre özel mesajlar
      if (emailError instanceof Error) {
        const errorMessage = emailError.message.toLowerCase();

        if (errorMessage.includes("rate limit")) {
          return NextResponse.json(
            { error: "Çok fazla istek gönderildi. Lütfen biraz bekleyin." },
            { status: 429 }
          );
        }

        if (errorMessage.includes("invalid email")) {
          return NextResponse.json(
            { error: "Geçersiz email adresi." },
            { status: 400 }
          );
        }

        return NextResponse.json(
          {
            error:
              "Email gönderiminde bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
          },
          { status: 500 }
        );
      }

      throw emailError;
    }
  } catch (error: unknown) {
    // Genel hataları logla
    console.error("Abonelik işlemi hatası:", error);

    // Hata mesajını hazırla
    const errorMessage =
      error instanceof Error
        ? `Hata: ${error.message}`
        : "Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.";

    // Hata yanıtı döndür
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

/**
 * API durumunu kontrol eden GET handler
 */
export async function GET() {
  try {
    // API durumunu kontrol et
    const apiStatus = await resend.emails.get("");

    return NextResponse.json(
      {
        status: "active",
        message: "API çalışıyor",
        timestamp: new Date().toISOString(),
        resendStatus: apiStatus ? "connected" : "error",
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=59",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("API durum kontrolü hatası:", error);

    return NextResponse.json(
      {
        status: "error",
        message: "API bağlantı hatası",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
