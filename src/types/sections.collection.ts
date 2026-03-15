import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { button } from "./pages.collection";

export const testimonialSection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        slide_image: z.string(),
        content: z.string(),
        rating: z.number(),
      }),
    ),
  }),
});

export const callToAction = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    image: z.string(),
    button: button,
  }),
});

export const callToActionSecondary = defineCollection({
  loader: glob({
    pattern: "call-to-action-secondary.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    image_primary: z.string(),
    image_secondary: z.string(),
    description: z.string(),
    button: button,
  }),
});

export const gallerySection = defineCollection({
  loader: glob({
    pattern: "gallery-section.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    gallery: z.object({
      image_1: z.object({
        caption: z.string(),
        source: z.string(),
      }),
      image_2: z.object({
        caption: z.string(),
        source: z.string(),
      }),
      image_3: z.object({
        caption: z.string(),
        source: z.string(),
      }),
    }),
  }),
});

export const newsletterSocial = defineCollection({
  loader: glob({
    pattern: "newsletter-social.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
  }),
});

export const gallerySlider = defineCollection({
  loader: glob({
    pattern: "gallery-slider.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    images: z.array(z.string()),
    button: button,
  }),
});
