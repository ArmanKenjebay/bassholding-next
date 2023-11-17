import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import NextImage from 'next/image'
import { Image } from '@nextui-org/image'
import aboutImage from '@/../public/about.jpg'
import ekoImage from '@/../public/eko.jpg'
import inspiringImage from '@/../public/inspiring.jpg'
import technologyImage from '@/../public/technology.jpg'
import trustImage from '@/../public/trust.jpg'
import chingizImage from '@/../public/chingiz.png'
import erlanImage from '@/../public/erlan.jpg'
import balsuluImage from '@/../public/balsulu.png'
import maxImage from '@/../public/max.png'
import berikImage from '@/../public/berik.png'
import bibigulImage from '@/../public/bibigul.jpg'
import aliaImage from '@/../public/alia.jpg'
import alimImage from '@/../public/alim.jpg'
import shokanImage from '@/../public/shokan.jpg'
import ermekImage from '@/../public/ermek.jpg'
import PersonalCard from '@/app/[locale]/_components/PersonalCard'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.about.title,
    description: dictionary.about.description,
  }
}

export default async function About({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const feels = [
    { title: dictionary.about.sustainability, image: ekoImage },
    { title: dictionary.about.engagement, image: inspiringImage },
    {
      title: dictionary.about.technological_advancement,
      image: technologyImage,
    },
    {
      title: dictionary.about.sincerity,
      image: trustImage,
      classes: 'grayscale',
    },
  ]

  const personals = [
    {
      name: dictionary.about.chingiz_sadvakassov,
      src: chingizImage,
      position: dictionary.about.founder,
    },
    {
      name: dictionary.about.yerlan_tasbulatov,
      src: erlanImage,
      position: dictionary.about.founder,
    },
    {
      name: dictionary.about.balsulu_tasbulatova,
      src: balsuluImage,
      position: dictionary.about.balsulu_tasbulatova_description,
    },
    {
      name: dictionary.about.maxim_vanyukov,
      src: maxImage,
      position: dictionary.about.maxim_vanyukov_description,
    },
    {
      name: dictionary.about.berik_kanayev,
      src: berikImage,
      position: dictionary.about.berik_kanayev_description,
    },
    {
      name: dictionary.about.bibigul_mussatayeva,
      src: bibigulImage,
      position: dictionary.about.bibigul_mussatayeva_description,
    },
    {
      name: dictionary.about.aliya_korabayeva,
      src: aliaImage,
      position: dictionary.about.aliya_korabayeva_description,
    },
    {
      name: dictionary.about.alimzhan_abishev,
      src: alimImage,
      position: dictionary.about.alimzhan_abishev_description,
    },
    {
      name: dictionary.about.shokan_aidar,
      src: shokanImage,
      position: dictionary.about.shokan_aidar_description,
    },
    {
      name: dictionary.about.yermek_ilyasov,
      src: ermekImage,
      position: dictionary.about.yermek_ilyasov_description,
    },
  ]

  return (
    <section className="flex flex-col">
      <div className="mt-20">
        <div className="sm:px-5 px-2 mb-10">
          <div className="relative h-full w-full">
            <Image
              isBlurred
              radius="none"
              src={aboutImage.src}
              width={aboutImage.width}
              height={aboutImage.height}
              alt={'about'}
              className="z-10 filter brightness-50 object-contain"
            />
            <span className="z-50 w-3/4 tracking-widest absolute lg:bottom-20 bottom-5 left-3 font-gilroy xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg">
              {dictionary.about.human_value}
            </span>
          </div>
        </div>
        <div className="sm:px-5 px-2 mb-10">
          <div className="flex flex-col sm:w-3/4 w-full">
            <span className="text-2xl tracking-widest mb-2">
              {dictionary.about.our_values}
            </span>
            <span className="text-base">
              {dictionary.about.our_values_principles}
            </span>
          </div>
        </div>

        <div className="sm:px-5 px-2 mb-10">
          <div className="h-full grid lg:grid-cols-4 grid-cols-2 gap-3">
            {feels.map(({ title, image, classes }, index) => (
              <div
                key={index}
                className="relative overflow-hidden h-[101px] sm:w-full md:h-[200px] xl:h-[287px]"
              >
                <span className="z-10 absolute top-3/4 sm:top-[60%] block w-full h-full text-xs sm:text-base lg:text-xl xl:text-3xl tracking-widest text-center">
                  {title}
                </span>
                <NextImage
                  src={image}
                  alt=""
                  className={`w-full h-full object-cover md:rounded-[120px] rounded-3xl filter brightness-[.65] ${
                    classes ? classes : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="sm:px-5 px-2 sm:mb-10 mb-5">
          <div className="grid gap-x-3 gap-y-5 sm:gap-y-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div className="col-span-2 md:col-span-2 flex justify-center flex-col gap-y-3 ">
              <span className="text-2xl tracking-widest mb-2 md:text-2xl lg:text-3xl xl:text-6xl">
                {dictionary.about.our_team}
              </span>
              <span className="text-primary-gold text-base tracking-widest md:text-2xl lg:text-3xl xl:text-6xl">
                {dictionary.about.team_contribution}
              </span>
            </div>
            {personals.map(({ name, position, src }) => (
              <PersonalCard
                key={name}
                src={src}
                name={name}
                position={position}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
