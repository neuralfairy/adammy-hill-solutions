import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Analytics } from "@/components/analytics"
import { GDPRBanner } from "@/components/gdpr-banner"
import { LiveChat } from "@/components/live-chat"
import { Suspense } from "react"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Adammyhill Solutions - Messaging Strategy SaaS",
  description:
    "Drive conversions with precision messaging. We build messaging strategies that turn interest into revenue.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: "messaging optimization, conversion strategy, brand communication, B2B sales tools",
  authors: [{ name: "Adammyhill Solutions" }],
  openGraph: {
    title: "Adammyhill Solutions - Messaging Strategy SaaS",
    description:
      "Drive conversions with precision messaging. We build messaging strategies that turn interest into revenue.",
    url: "https://adammyhill.com",
    siteName: "Adammyhill Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adammyhill Solutions - Messaging Strategy SaaS",
    description:
      "Drive conversions with precision messaging. We build messaging strategies that turn interest into revenue.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Adammyhill Solutions",
              url: "https://adammyhill.com",
              logo: "https://adammyhill.com/logo.png",
              description:
                "Messaging strategy SaaS company helping businesses drive conversions with precision messaging.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Austin",
                addressRegion: "TX",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-512-000-0000",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <GDPRBanner />
          <LiveChat />
        </Suspense>
      </body>
    </html>
  )
}
