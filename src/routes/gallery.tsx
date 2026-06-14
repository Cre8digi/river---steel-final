import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "./about";

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.webp";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.png";
import img7 from "@/assets/7.webp";
import img8 from "@/assets/8.jpg";
import img81 from "@/assets/8.1.jpg";
import img9 from "@/assets/9.webp";
import img10 from "@/assets/10.webp";
import img11 from "@/assets/11.jpg";
import img12 from "@/assets/12.webp";
import img13 from "@/assets/13.jpg";
import img14 from "@/assets/14.jpg";
import img15 from "@/assets/15.webp";
import img16 from "@/assets/16.webp";
import img17 from "@/assets/17.webp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — River Steels" },
      {
        name: "description",
        content: "Photo gallery of River Steels products and facility.",
      },
      { property: "og:title", content: "Gallery — River Steels" },
      {
        property: "og:description",
        content: "Browse our products and manufacturing facility.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const IMAGES = [
  { src: img1, alt: "Product 1", span: "lg:col-span-2 lg:row-span-2" },
  { src: img2, alt: "Product 2" },
  { src: img3, alt: "Product 3" },
  { src: img4, alt: "Product 4" },
  { src: img5, alt: "Product 5" },
  { src: img6, alt: "Product 6" },
  { src: img7, alt: "Product 7" },
  { src: img8, alt: "Product 8" },
  { src: img81, alt: "Product 8.1" },
  { src: img9, alt: "Product 9" },
  { src: img10, alt: "Product 10" },
  { src: img11, alt: "Product 11" },
  { src: img12, alt: "Product 12" },
  { src: img13, alt: "Product 13" },
  { src: img14, alt: "Product 14" },
  { src: img15, alt: "Product 15" },
  { src: img16, alt: "Product 16" },
  { src: img17, alt: "Product 17" },
];

function Gallery() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Explore our products, inventory and manufacturing excellence."
      />

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {IMAGES.map((img, i) => (
              <Reveal
                key={i}
                delay={(i % 4) * 0.05}
                className={`overflow-hidden rounded-xl group cursor-pointer shadow-lg ${img.span ?? ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
