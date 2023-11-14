import localFont from 'next/font/local'
import './globals.css'
import { ReactNode } from 'react'
import CustomNavbar from '@/app/[locale]/_components/Navbar'
import { i18n, Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import Footer from '@/app/[locale]/_components/Footer'

const gilroy = localFont({
  variable: '--font-gilroy',
  src: [
    {
      path: '../../../public/fonts/Gilroy-Regular.woff2',
    },
    {
      path: '../../../public/fonts/Gilroy-Bold.woff2',
    },
    {
      path: '../../../public/fonts/Gilroy-RegularItalic.woff2',
    },
    {
      path: '../../../public/fonts/Gilroy-SemiBold.woff2',
    },
  ],
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.main.title,
    description: dictionary.main.description,
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <html lang={locale} className="dark">
      <body className={`${gilroy.variable} font-gilroy`}>
        <CustomNavbar
          params={{ dictionary: { ...dictionary.navbar }, locale }}
        />
        <main>{children}</main>
        <Footer
          params={{
            dictionary: {
              navbar: dictionary.navbar,
              contact: dictionary.contact,
            },
            locale,
          }}
        />
      </body>
    </html>
  )
}
