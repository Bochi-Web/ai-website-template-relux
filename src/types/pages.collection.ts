import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string(),
  meta_title: z.string().optional(),
  image: z.string().optional(),
  draft: z.boolean(),
};

export const button = z.object({
  enable: z.boolean(),
  label: z.string(),
  link: z.string(),
});

export const homepage = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      subtitle: z.string(),
      content: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    about_section: z.object({
      enable: z.boolean(),
      title: z.string(),
      featured_images: z.object({
        image_1: z.string(),
        image_2: z.string(),
        image_3: z.string(),
      }),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
      reviews: z.object({
        enable: z.boolean(),
        companies: z.array(
          z.object({
            name: z.string(),
            rating: z.number(),
            logo: z.string(),
          }),
        ),
      }),
    }),
    image_slider: z.object({
      enable: z.boolean(),
      images: z.array(
        z.object({
          image: z.string(),
          alt_text: z.string(),
        }),
      ),
      features: z.array(
        z.object({
          label: z.string(),
          icon: z.string(),
        }),
      ),
    }),
    room_slider: z.object({
      enable: z.boolean(),
    }),
    facilities_section: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
      facilities: z.array(
        z.object({
          label: z.string(),
          icon: z.string(),
        }),
      ),
    }),
  }),
});

export const roomListPage = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/rooms" }),
  schema: z.object({
    ...commonFields,
    subtitle: z.string(),
  }),
});

export const roomSinglePage = defineCollection({
  loader: glob({
    pattern: "**/!(-index|_index).{md,mdx}",
    base: "src/content/rooms",
  }),
  schema: z.object({
    ...commonFields,
    gallery: z.array(z.string()).optional(),
    price: z.string(),
    room_details: z.object({
      size: z.string(),
      occupancy: z.string(),
      bed_type: z.string(),
      bathroom: z.string(),
    }),
    room_overview: z.string(),
    room_amenities: z.array(z.string()),
    room_amenities_hightlight: z.array(z.string()),
    categories: z.array(z.string()),
  }),
});

export const blogListPage = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    ...commonFields,
    subtitle: z.string(),
  }),
});

export const blogSinglePage = defineCollection({
  loader: glob({
    pattern: "**/!(-index|_index).{md,mdx}",
    base: "src/content/blog",
  }),
  schema: z.object({
    ...commonFields,
    date: z.coerce.date(),
    categories: z.array(z.string()),
    featured: z.boolean(),
  }),
});

export const about = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    ...commonFields,
    subtitle: z.string(),
    about_section: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
      image: z.string(),
    }),
    service_section: z.object({
      enable: z.boolean(),
      title: z.string(),
      operating_hours: z.string(),
      image: z.string(),
      services: z.array(
        z.object({
          label: z.string(),
          icon: z.string(),
        }),
      ),
    }),
  }),
});

export const cafeJuice = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/cafe-juice" }),
  schema: z.object({
    ...commonFields,
    subtitle: z.string(),
    gallery_section: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.object({
        title: z.string(),
        list_texts: z.array(z.string()),
      }),
      images: z.array(z.string()),
    }),
    menu_section: z.object({
      enable: z.boolean(),
      title: z.string(),
      subtitle: z.string(),
      image: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          price: z.string(),
        }),
      ),
    }),
  }),
});

export const contact = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    ...commonFields,
    subtitle: z.string(),
    contact_section: z.object({
      enable: z.boolean(),
      title: z.string(),
    }),
  }),
});

export const regularpage = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    ...commonFields,
    subtitle: z.string(),
  }),
});
