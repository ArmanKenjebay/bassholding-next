import { ReactNode } from 'react'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

type Params = {
  children: ReactNode
  params: {
    locale: Locale
  }
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.contact.title,
    description: dictionary.contact.description,
  }
}

export default async function Layout({ params, children }: Params) {
  return <section className={`mt-20 flex flex-col`}>{children}</section>
}