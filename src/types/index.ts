export interface Hospital {
  id: string;
  name: string;
  location: string;
  coverage: string;
  locations?: string[];
  waitTimesUrl?: string;
  websiteUrl?: string;
  appLinks?: {
    ios?: string;
    android?: string;
  };
  hasOnlineWaitTimes: boolean;
  notes?: string;
}

export interface Region {
  id: string;
  name: string;
  hospitals: Hospital[];
}

export interface MobileApp {
  id: string;
  name: string;
  description: string;
  features: string[];
  url: string;
  platform?: 'ios' | 'android' | 'web' | 'all';
}

export type FilterOption = 'all' | 'with-wait-times' | 'without-wait-times';
