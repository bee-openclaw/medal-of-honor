export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export interface Quote {
  text: string;
  source?: string;
}

export interface Contribution {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface ImpactMetric {
  label: string;
  value: string;
  icon?: string;
}

export type CategoryId =
  | "tech"
  | "science"
  | "arts"
  | "civil-rights"
  | "medicine"
  | "exploration";

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  icon: string;
}

export interface Honoree {
  slug: string;
  name: string;
  title: string;
  born: string;
  died?: string;
  birthPlace: string;
  category: CategoryId;
  tags: string[];
  portraitImage: string;
  summary: string;
  impactStatement: string;
  timeline: TimelineEvent[];
  quotes: Quote[];
  contributions: Contribution[];
  impactMetrics?: ImpactMetric[];
  impactScore?: number;
  nominatedBy?: string;
  votes?: number;
  featured?: boolean;
}

export interface Nomination {
  id: string;
  name: string;
  category: CategoryId;
  reason: string;
  submittedBy: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
}

export interface CommunityStore {
  votes: Record<string, number>;
  nominations: Nomination[];
}
