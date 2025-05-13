import type { Metadata } from "next";
import "../assets/globals.css";

export const metadata: Metadata = {
  // Basic Metadata
  title: "OralTech",
  description: "Somos un consultorio odontológico en el que nos dedicamos a crear sonrisas radiantes que irradian confianza y belleza, buscamos hacer felices a nuestros pacientes ayudándolos a conseguir su sonrisa soñada. Contamos con los profesionales ideales para ayudar a nuestros pacientes a mantener su salud y estética bucal.",
  
  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.ico",
    },
  },
  
  // App Information
  applicationName: "OralTech",
  appleWebApp: {
    capable: true,
    title: "OralTech",
    statusBarStyle: "default",
  },
  
  // Open Graph Protocol (for social media sharing)
  openGraph: {
    title: "OralTech",
    description: "Somos un consultorio odontológico en el que nos dedicamos a crear sonrisas radiantes que irradian confianza y belleza, buscamos hacer felices a nuestros pacientes ayudándolos a conseguir su sonrisa soñada. Contamos con los profesionales ideales para ayudar a nuestros pacientes a mantener su salud y estética bucal.",
    url: "https://www.oraltechodontologia.com/",
    siteName: "OralTech",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "../assets/webp/oraltech_logo_white.webp",
        width: 1200,
        height: 630,
        alt: "OralTech",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "OralTech",
    description: "Somos un consultorio odontológico en el que nos dedicamos a crear sonrisas radiantes que irradian confianza y belleza, buscamos hacer felices a nuestros pacientes ayudándolos a conseguir su sonrisa soñada. Contamos con los profesionales ideales para ayudar a nuestros pacientes a mantener su salud y estética bucal.",
    images: ["../assets/webp/oraltech_logo_white.webp"],
    site: "@OralTech",
    
    creator: "@AngelLuna",
  },
  
  // Robots and Indexing
  robots: {
    index: true,
    follow: true,

    googleBot: {

      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Alternate Languages
  alternates: {
    canonical: "https://www.oraltechodontologia.com",
    languages: {
      "es-CO": "https://www.oraltechodontologia.com",
      "en-US": "https://www.oraltechodontologia.com/en",
    },
  },
  
   // Verification for Search Console and Other Services
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      "facebook-domain-verification": "facebook-domain-verification-code",
      "norton-safeweb-site-verification": "norton-verification-code",
      "baidu-site-verification": "baidu-verification-code",
      "pinterest-site-verification": "pinterest-verification-code"
    }
  },
  // Additional Metadata
  category: "Dental",
  creator: "Angel Luna",
  publisher: "OralTech",
  keywords: [
    "tecnología dental", 
    "equipos dentales", 
    "servicio técnico dental", 
    "OralTech", 
    "clínica dental", 
    "odontología", 
    "Cúcuta", 
    "Medellín", 
    "Colombia", 
    "equipos odontológicos", 
    "mantenimiento dental",
    "innovación dental",
    "software dental",
    "radiología dental digital"
  ],
  
  // Manifest
  manifest: "/site.webmanifest",
  
  // Viewport Settings
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Mobile App Install Banners
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  
  // Referrer Policy
  referrer: "origin-when-cross-origin",
  
  // Theme Color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#28295F" },
    { media: "(prefers-color-scheme: dark)", color: "#28295F" },
  ],
  
  // Content Type
  other: {
    "Content-Type": "text/html; charset=utf-8",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
