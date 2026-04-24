"use client";

import { useEffect } from "react";

const CLICK_ID_COOKIE_DAYS = 30;

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    `${name}=${encodeURIComponent(value)}` +
    `; expires=${expires.toUTCString()}` +
    `; path=/` +
    `; SameSite=Lax`;
}

function captureClickIds() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);

  const fbclid = params.get("fbclid");
  if (fbclid) {
    setCookie("_fbc_persist", fbclid, CLICK_ID_COOKIE_DAYS);
    try {
      window.localStorage.setItem("fif_fbclid", fbclid);
    } catch {
      /* private mode / disabled storage */
    }
  }

  const gclid = params.get("gclid");
  if (gclid) {
    setCookie("_gcl_persist", gclid, CLICK_ID_COOKIE_DAYS);
    try {
      window.localStorage.setItem("fif_gclid", gclid);
    } catch {
      /* noop */
    }
  }
}

export default function TrackingProvider() {
  useEffect(() => {
    captureClickIds();

    // Lazy-load sourcebuster (client only) to keep it out of the server bundle
    import("sourcebuster").then(({ default: sbjs }) => {
      sbjs.init({
        domain: window.location.hostname,
        lifetime: 6,          // months — first-touch sticky
        session_length: 30,   // minutes
        referrals: [
          { host: "t.co",              medium: "social", display: "twitter.com" },
          { host: "l.facebook.com",    medium: "social", display: "facebook.com" },
          { host: "lm.facebook.com",   medium: "social", display: "facebook.com" },
          { host: "l.instagram.com",   medium: "social", display: "instagram.com" },
          { host: "www.tiktok.com",    medium: "social", display: "tiktok.com" },
          { host: "www.pinterest.com", medium: "social", display: "pinterest.com" },
        ],
      });
    });
  }, []);

  return null;
}
