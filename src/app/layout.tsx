import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
})

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
})

export const metadata: Metadata = {
  title: "Vivendo de Audiovisual — Workshop Presencial",
  description: "Em 2 dias intensivos você aprende a transformar sua câmera em uma fonte de renda real",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-warm-white text-charcoal overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
