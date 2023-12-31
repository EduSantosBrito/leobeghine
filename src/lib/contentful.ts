import contentful, { Asset } from "contentful";

export type TestimonialVideo = {
  title: string;
  description: string;
  thumbnail: Asset;
  video: Asset;
};

export const contentfulClient = contentful.createClient({
  space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.PUBLIC_CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
