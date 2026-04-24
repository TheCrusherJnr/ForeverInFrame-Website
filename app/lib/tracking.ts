import type { Sbjs } from "sourcebuster";

declare global {
  interface Window {
    sbjs?: Sbjs;
  }
}

export const MAKE_WEBHOOK_URL =
  "https://hook.eu1.make.com/7i4l2ca964hodqlzymtl2k4yga6sucp7";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const pattern = new RegExp(
    "(?:^|; )" +
      name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") +
      "=([^;]*)"
  );
  const match = document.cookie.match(pattern);
  return match ? decodeURIComponent(match[1]) : null;
}

function readStored(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export type TrackingData = Record<string, string | null | undefined>;

export function getTrackingData(): TrackingData {
  if (typeof window === "undefined") return {};

  const out: TrackingData = {};
  const sbjs = window.sbjs;

  if (sbjs?.get) {
    const g = sbjs.get;
    out.current_type = g.current?.typ;
    out.current_source = g.current?.src;
    out.current_medium = g.current?.mdm;
    out.current_campaign = g.current?.cmp;
    out.current_content = g.current?.cnt;
    out.current_term = g.current?.trm;
    out.current_visit_date = g.current_add?.fd;
    out.current_entrance_point = g.current_add?.ep;
    out.current_referer = g.current_add?.rf;

    out.first_type = g.first?.typ;
    out.first_source = g.first?.src;
    out.first_medium = g.first?.mdm;
    out.first_campaign = g.first?.cmp;
    out.first_content = g.first?.cnt;
    out.first_term = g.first?.trm;
    out.first_visit_date = g.first_add?.fd;
    out.first_entrance_point = g.first_add?.ep;
    out.first_referer = g.first_add?.rf;

    out.session_pages_viewed = g.session?.pgs;
    out.session_current_page = g.session?.cpg;

    out.total_visits = g.udata?.vst;
    out.user_agent = g.udata?.uag;
  }

  // Click IDs: URL first, then 30-day cookie, then localStorage
  const params = new URLSearchParams(window.location.search);
  out.fbclid =
    params.get("fbclid") ||
    readCookie("_fbc_persist") ||
    readStored("fif_fbclid") ||
    null;
  out.gclid =
    params.get("gclid") ||
    readCookie("_gcl_persist") ||
    readStored("fif_gclid") ||
    null;

  return out;
}

export function newEventId(prefix = "lead"): string {
  const rnd = Math.random().toString(36).slice(2, 9);
  return `${prefix}_${Date.now()}_${rnd}`;
}
