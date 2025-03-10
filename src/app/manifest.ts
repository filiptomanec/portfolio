import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Filip Tomanec - Software Developer",
    short_name: "Filip Tomanec",
    description:
      "Filip Tomanec - Full-Stack software developer, specializující se na vývoj webových a mobilních aplikací. Má zkušenosti s React, React Native, TypeScript a Java Spring Boot, zaměřuje se na robustní a efektivní řešení v oblasti frontend a backend vývoje.",
    start_url: "/",
    display: "standalone",
    background_color: "#1c1c22",
    theme_color: "#00ff99",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
