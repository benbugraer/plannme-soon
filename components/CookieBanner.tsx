"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setShowBanner(false);
  };

  const declineCookies = () => {
    Cookies.set("cookieConsent", "false", { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4  inset-x-4 z-[100]">
      <div className="rounded-lg border border-primary bg-tertiary px-4 py-3 shadow-lg shadow-black/5 max-w-6xl mx-auto">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <p className="text-sm">
            Bu web sitesi deneyiminizi geliştirmek için çerezleri
            kullanmaktadır. Çerez kullanımını kabul edebilir veya
            reddedebilirsiniz.
          </p>
          <div className="flex gap-2 max-md:flex-wrap">
            <Button size="sm" onClick={acceptCookies}>
              Kabul Et
            </Button>
            <Button variant="outline" size="sm" onClick={declineCookies}>
              Reddet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
