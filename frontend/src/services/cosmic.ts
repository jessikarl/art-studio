import { createBucketClient } from "@cosmicjs/sdk";

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.VITE_BUCKET_SLUG || "",
  readKey: import.meta.env.VITE_BUCKET_READ_KEY || "",
});

export interface Artwork {
  id: string;
  title: string;
  slug: string;
  metadata: {
    description?: string;
    price?: number;
    dimensions?: string;
    medium?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    is_available?: boolean;
  };
}