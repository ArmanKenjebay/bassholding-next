import NextImage from 'next/image'
import wallImage from '@/../public/images/company_profile.webp'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import CalculateModal from '@/app/[locale]/_components/CalculateModal'
import FinancialTabs from '@/app/[locale]/_components/FinancialTabs'
import MotionDiv from '@/app/[locale]/_components/MotionDiv'
import DivTransform from '@/app/[locale]/_components/DivTransform'
import YearReport from '@/app/[locale]/_components/YearReport'
import React from 'react'
import PressRelease from '@/app/[locale]/_components/PressRelease'

type Props = {
  params: { locale: Locale }
}
export default async function Investors({ params: { locale } }: Props) {
  const dictionary = await getDictionary(locale)

  const ebidta = [
    { label: 'EBIDTA', value: '457 млн ₸' },
    { label: 'ROA', value: '31.4 %' },
    { label: 'ROE', value: '58.5%' },
    { label: 'Вклад в развитие', value: '> 2 млрд ₸' },
  ]

  const animate = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: {
      x: -50,
      opacity: 1,
    },
  }

  return (
    <div className={`flex flex-col h-full xl:mb-10 mb-5`}>
      <MotionDiv>
        <div className={`w-full relative xl:mb-0 mb-5`}>
          <NextImage
            className={`w-full xl:h-[484px] lg:h-[280px] md:h-[180px] sm:h-[140px] h-[121px] object-cover`}
            width={1440}
            height={484}
            src={wallImage.src}
            alt="bassholding image"
          />
          <DivTransform
            className={`absolute top-1/3 right-10`}
            animation={animate}
            viewport={{ once: false }}
          >
            <CalculateModal />
          </DivTransform>
        </div>
      </MotionDiv>

      <MotionDiv>
        <div className={`lg:flex flex-col p-[60px] hidden sm:mb-10 mb-5`}>
          <span className={`text-primary-gold text-[48px]`}>BASS GOLD</span>
          <span className={`text-[24px]`}>
            золотодобывающая компания, имеющая 25-летний опыт деятельности на
            рынке драгоценных металлов. В активах компании имеется золоторудное
            месторождение Ушшокы, расположенное в области Ұлытау Республики
            Казахстан и Чинасыл - Сай в Алматинской области, на которой
            планируется строительство фабрики по переработке флотоконцентрата.
          </span>
        </div>
      </MotionDiv>

      <MotionDiv>
        <div
          className={`lg:flex lg:flex-row flex-col p-[60px] justify-evenly items-center hidden sm:mb-10 mb-5`}
        >
          {ebidta.map((el) => (
            <div className={`flex flex-col text-[32px]`}>
              <span className={``}>{el.label}</span>
              <span className={`text-primary-gold`}>{el.value}</span>
            </div>
          ))}
        </div>
      </MotionDiv>

      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        <FinancialTabs />
      </div>

      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        <YearReport />
      </div>

      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        <span
          className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[21px] sm:mb-10 mb-5`}
        >
          ПРЕСС РЕЛИЗЫ
        </span>

        <PressRelease />
      </div>
    </div>
  )
}
