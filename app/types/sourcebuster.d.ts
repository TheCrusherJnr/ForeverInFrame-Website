declare module "sourcebuster" {
  export interface SbjsVisit {
    typ?: string;
    src?: string;
    mdm?: string;
    cmp?: string;
    cnt?: string;
    trm?: string;
  }

  export interface SbjsVisitAdd {
    fd?: string;
    ep?: string;
    rf?: string;
  }

  export interface SbjsSession {
    pgs?: string;
    cpg?: string;
  }

  export interface SbjsUdata {
    vst?: string;
    uip?: string;
    uag?: string;
  }

  export interface SbjsGet {
    current?: SbjsVisit;
    current_add?: SbjsVisitAdd;
    first?: SbjsVisit;
    first_add?: SbjsVisitAdd;
    session?: SbjsSession;
    udata?: SbjsUdata;
  }

  export interface SbjsReferral {
    host: string;
    medium?: string;
    display?: string;
  }

  export interface SbjsInitOptions {
    domain?: string | { host: string; aliases: string[] };
    lifetime?: number;
    session_length?: number;
    timezone_offset?: number;
    base64?: boolean;
    referrals?: SbjsReferral[];
    organics?: Array<{ host: string; display?: string; param?: string }>;
    campaign_param?: string | string[];
    source_param?: string | string[];
    medium_param?: string | string[];
    term_param?: string | string[];
    content_param?: string | string[];
    promocode_param?: string | string[];
    blacklist?: string[];
  }

  export interface Sbjs {
    init: (options?: SbjsInitOptions) => void;
    get: SbjsGet;
  }

  const sbjs: Sbjs;
  export default sbjs;
}
