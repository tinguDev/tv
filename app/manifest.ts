import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zoolo TV",
    short_name: "Zoolo TV",
    description: "Watch live Indian TV channels on Zoolo TV.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#090a0e",
    theme_color: "#101426",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
