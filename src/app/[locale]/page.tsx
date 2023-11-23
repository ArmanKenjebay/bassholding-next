import Image from 'next/image'
import { Image as ImageNext } from '@nextui-org/image'
import { StaticImageData } from 'next/image'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import { Divider } from '@nextui-org/divider'

import news1 from '@/../public/images/news1.webp'
import homeImg from '@/../public/images/home-page.webp'
import homeImg2 from '@/../public/images/home-page-2.webp'
import DirectionCard from '@/app/[locale]/_components/DirectionCard'
import Marquee from '@/app/[locale]/_components/Marquee'
import NewsLine from '@/app/[locale]/_components/NewsLine'
import getDirections from '@/app/[locale]/_variables/direction-cards'
import HomeBackgroundImage from '@/app/[locale]/_components/HomeBackgroundImage'

type TCard = {
  image: StaticImageData
  title: string
  desc: string
  chips: string[]
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const cards = getDirections()

  const news = [
    {
      content:
        'Группа компаний, осуществляющая инвестиционную деятельность в разных секторах экономики.',
      chip: 'социальная жизнь',
      date: '28/10/2023',
    },
    {
      content:
        'Работников рудника Ушшокы наградили благодарственными письмами в честь Дня Республики',
      chip: 'BASS GOLD',
      date: '28/09/2023',
    },
    {
      content:
        'BASS Gold выплатил купонное вознаграждение по облигациям первого выпуска',
      chip: 'социальная жизнь',
      date: '06/10/2023',
    },
  ]

  return (
    <section className="flex flex-col w-full h-full">
      <div className="lg:min-h-[600px] flex justify-between sm:flex-row flex-col-reverse gap-y-5 sm:mb-10 mb-5">
        <div className="flex flex-col gap-y-3 justify-end px-5 sm:px-6 md:px-8">
          <ImageNext
            as={Image}
            className="lg:w-[336px] lg:h-[83px] w-[168px] h-[42px]"
            src={homeImg2.src}
            width={447}
            height={111}
            radius="full"
            alt={'bassholding image'}
          />
          <div className="flex flex-col gap-y-1">
            <span className="text-2xl lg:text-5xl tracking-widest">
              BASS HOLDING
            </span>
            <span className=" tracking-wide font-light text-sm lg:text-3xl">
              {dictionary.main['text-under-photo']}
            </span>
          </div>
        </div>
        <div className="flex h-full">
          <HomeBackgroundImage
            image={homeImg}
            width={1800}
            height={2120}
            className={`w-full h-[294px] sm:h-[380px] sm:w-[210px] md:h-[480px] md:w-[300px] lg:h-[640px] lg:w-[340px] xl:w-[564px] xl:h-[700px]`}
          >
            {dictionary.main['text-photo'].split('.').map((text) => (
              <span className="block lg:text-4xl xl:text-4xl">{text}</span>
            ))}
          </HomeBackgroundImage>
        </div>
      </div>

      <div className="sm:mb-10 mb-5">
        <Marquee>
          <span className="text-4xl mx-4">HR TECH</span>
          <span className="text-4xl mx-4">FINTECH</span>
          <span className="text-4xl mx-4">ENERGY</span>
          <span className="text-4xl mx-4">MINING</span>
          <span className="text-4xl mx-4">HR TECH</span>
          <span className="text-4xl mx-4">FINTECH</span>
          <span className="text-4xl mx-4">ENERGY</span>
          <span className="text-4xl mx-4">MINING</span>
          <span className="text-4xl mx-4">HR TECH</span>
          <span className="text-4xl mx-4">FINTECH</span>
          <span className="text-4xl mx-4">ENERGY</span>
          <span className="text-4xl mx-4">MINING</span>
          <span className="text-4xl mx-4">HR TECH</span>
          <span className="text-4xl mx-4">FINTECH</span>
          <span className="text-4xl mx-4">ENERGY</span>
          <span className="text-4xl mx-4">MINING</span>
        </Marquee>
      </div>

      <div className="sm:px-5 px-2 sm:mb-10 mb-5">
        <div className="flex justify-center sm:flex-row flex-col">
          {cards.map((card, index) => (
            <DirectionCard
              key={card.title}
              {...card}
              dictionary={dictionary}
              className="app-img-box"
              classNameImage="filter brightness-50 ease-in-out duration-200 scale-150 -translate-y-6 object-cover object-center 2xl:object-bottom grayscale"
            />
          ))}
        </div>
      </div>

      <div className="sm:px-5 px-2 sm:mb-10 mb-5">
        <span className="lg:text-4xl md:text-3xl text-2xl">
          {dictionary.news.title}
        </span>
        {news.map((n, index) => (
          <div key={index}>
            {index < news.length && <Divider className="my-2 bg-white" />}
            <NewsLine {...n} />
          </div>
        ))}
      </div>

      <div className="sm:px-5 px-2 sm:mb-10 w-full h-full">
        <ImageNext
          as={Image}
          width={news1.width}
          height={news1.height}
          radius={`none`}
          src={news1.src}
          className={`w-[320px] h-[104px] sm:h-full sm:w-full rounded-[40px] sm:rounded-3xl object-cover object-top`}
          classNames={{
            wrapper: 'w-full h-full',
          }}
          alt="bassholding image"
        />
      </div>
    </section>
  )
}
