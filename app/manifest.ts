import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hartery's Family Restaurant",
    short_name: "Hartery's",
    description: "Hartery's Family Restaurant, Stephenville NL",
    start_url: "/",
    display: "standalone",
    background_color: "#1E283A",
    theme_color: "#1E283A",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
