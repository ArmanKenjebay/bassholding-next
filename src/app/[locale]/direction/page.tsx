import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import DirectionCard from '@/app/[locale]/_components/DirectionCard'
import React from 'react'
import directionCards from '@/app/[locale]/_variables/DirectionCards'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.direction.title,
    description: dictionary.direction.description,
  }
}

export default async function Direction({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const cards = [...directionCards]

  return (
    <section className="flex flex-col w-full h-full">
      <div className="mt-20">
        <div className="sm:px-16 md:px-24 lg:px-32 xl:px-52 px-5 py-8 flex justify-center items-center text-center sm:mb-10 mb-5">
          <span className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">
            <span className="text-primary-gold">Основная задача холдинга</span>{' '}
            - поднимать знамя Республики Казахстан в разных направлениях и на
            разных площадках.
          </span>
        </div>
        <div className="sm:px-5 px-2 sm:mb-10 mb-5">
          <div className="flex sm:flex-row flex-col">
            {cards.map((card, index) => (
              <DirectionCard
                key={card.title}
                {...card}
                dictionary={dictionary}
                className="app-img-box"
                classNameImage="filter brightness-50 ease-in-out duration-200 scale-150 -translate-y-6 object-cover grayscale hover:scale-110 hover:grayscale-0 hover:brightness-[.8]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
