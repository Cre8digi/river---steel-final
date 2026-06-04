import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "River Steels — Manufacturers, Stockists & Suppliers of Industrial Raw Materials" },
      { name: "description", content: "River Steels: Mumbai-based manufacturer, stockist & supplier of Stainless Steel, Alloy Steel, Carbon Steel, Monel, Inconel, Hastelloy, Duplex & Super Duplex pipes, fittings and flanges." },
      { name: "author", content: "River Steels" },
      { name: "keywords", content: "River Steels, stainless steel, alloy steel, carbon steel, monel, inconel, incoloy, hastelloy, duplex, super duplex, pipe fittings, flanges, ERW pipes, seamless pipes, Mumbai" },
      { property: "og:title", content: "River Steels — Industrial Raw Materials, Pipes, Fittings & Flanges" },
      { property: "og:description", content: "Manufacturers, Stockists & Suppliers of premium industrial raw materials across India and global markets." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "River Steels" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "River Steels",
          description: "Manufacturers, Stockists & Suppliers of Industrial Raw Materials",
          email: "riversteels316@gmail.com",
          telephone: "+91 8828471856",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office No. 6, 1st Floor, Plot No. 59/61, Khandke Building, Bhandari Street",
            addressLocality: "Girgaon, Mumbai",
            postalCode: "400004",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-16 md:pt-[7.5rem] min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </QueryClientProvider>
  );
}
