import { createBucketClient } from "@cosmicjs/sdk";

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.VITE_BUCKET_SLUG || "",
  readKey: import.meta.env.VITE_BUCKET_READ_KEY || "",
});

export interface ArtGallery {
  id: string;
  title: string;
  slug: string;
  type: string;
  created_at: string;
  modified_at: string;
  metadata: {
    description?: string;
    price?: number;
    dimensions?: string;
    technique?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    is_available?: boolean;
  };
}

