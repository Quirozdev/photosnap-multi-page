import { ComparisonFeature } from "@/features/pricing/types/comparison-feature";

export const comparisonFeatures: ComparisonFeature[] = [
  {
    id: "unlimited-story-posting",
    label: "UNLIMITED STORY POSTING",
    basic: true,
    pro: true,
    business: true,
  },
  {
    id: "unlimited-photo-upload",
    label: "UNLIMITED PHOTO UPLOAD",
    basic: true,
    pro: true,
    business: true,
  },
  {
    id: "embedding-custom-content",
    label: "EMBEDDING CUSTOM CONTENT",
    basic: false,
    pro: true,
    business: true,
  },
  {
    id: "customize-metadata",
    label: "CUSTOMIZE METADATA",
    basic: false,
    pro: true,
    business: true,
  },
  {
    id: "advanced-metrics",
    label: "ADVANCED METRICS",
    basic: false,
    pro: false,
    business: true,
  },
  {
    id: "photo-downloads",
    label: "PHOTO DOWNLOADS",
    basic: false,
    pro: false,
    business: true,
  },
  {
    id: "search-engine-indexing",
    label: "SEARCH ENGINE INDEXING",
    basic: false,
    pro: false,
    business: true,
  },
  {
    id: "custom-analytics",
    label: "CUSTOM ANALYTICS",
    basic: false,
    pro: false,
    business: true,
  },
];
