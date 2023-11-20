import localFont from 'next/font/local'
import './globals.css'
import { ReactNode } from 'react'
import CustomNavbar from '@/app/[locale]/_components/Navbar'
import { i18n, Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import Footer from '@/app/[locale]/_components/Footer'
import { ScrollShadow } from '@nextui-org/scroll-shadow'

const gilroy = localFont({
  variable: '--font-gilroy',
  src: [
    {
      path: '../../../public/fonts/Gilroy-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Gilroy-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/Gilroy-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Gilroy-UltraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/Gilroy-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Gilroy-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Gilroy-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/Gilroy-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
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
        <ScrollShadow
          size={10}
          className="w-full h-full overflow-x-hidden"
          hideScrollBar
        >
          <CustomNavbar
            params={{
              dictionary: { ...dictionary.navbar },
              modalDictionary: { ...dictionary.contact_us },
              locale,
            }}
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
        </ScrollShadow>
      </body>
    </html>
  )
}
