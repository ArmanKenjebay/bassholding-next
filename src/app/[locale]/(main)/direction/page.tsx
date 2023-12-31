import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import DirectionCard from '@/app/[locale]/_components/DirectionCard'
import getDirections from '@/app/[locale]/_variables/direction-cards'
import PageWrapper from '@/app/[locale]/_components/PageWrapper'
import MotionDiv from '@/app/[locale]/_components/MotionDiv'

export default async function Direction({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const cards = [...getDirections()]

  return (
    <>
      <PageWrapper>
        <MotionDiv>
          <div className="sm:px-16 md:px-24 lg:px-32 xl:p-52 px-5 py-8 flex justify-center items-center text-center sm:mb-10 mb-5 uppercase">
            <span
              className="2xl:text-[64px] font-[250] lg:text-4xl md:text-3xl sm:text-2xl text-xl"
              style={{ lineHeight: '92%' }}
            >
              <span className="text-primary-gold">
                {dictionary.direction['main_aim-1']}
              </span>
              {dictionary.direction['main_aim-2']}
            </span>
          </div>
        </MotionDiv>

        <div className="xl:px-[54px] sm:px-5 px-5 lg:mb-40 sm:mb-10 mb-5">
          <div className="flex sm:flex-row flex-col">
            {cards.map((card, index) => (
              <DirectionCard
                locale={locale}
                key={card.title}
                {...card}
                dictionary={dictionary}
                className="app-img-box"
              />
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  )
}
