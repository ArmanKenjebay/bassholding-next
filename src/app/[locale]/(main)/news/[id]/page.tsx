import Image from 'next/image'
import { getNewsById } from '@/get-api'
import { getDictionary } from '@/get-dictionary'
import PrevNews from '@/app/[locale]/_components/PrevNews'
import { Chip } from '@nextui-org/chip'
import { Locale } from '@/i18n-config'
import Link from 'next/link'
import PageWrapper from '@/app/[locale]/_components/PageWrapper'

async function getData(id: string) {
  const data = await getNewsById(id)
  return { ...data }
}

export async function generateMetadata({ params }: any) {
  const data = await getData(params.id).then((res) => res)

  return {
    title: data.title ? data.title[params.locale as Locale] : 'Bassholding',
    description: data.context ? data.context[params.locale as Locale] : '',
  }
}

export default async function NewsDetail({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string }
}) {
  const dictionary = await getDictionary(locale)
  const data = await getData(id).then((res) => res)

  let main: any

  try {
    main = require(`@/../public/images/${data?.image?.main}`)
  } catch (e) {
    console.error(e)
  }

  return (
    <div className={`xl:px-[60px] mt-20 flex flex-col w-full h-full mb-28`}>
      <PageWrapper>
        <div className={`flex flex-col sm:px-5 px-5 sm:mb-10 mb-5`}>
          <PrevNews
            locale={locale}
            dictionary={dictionary}
            classNames={'mb-5 sm:mb-10 xl:my-[76px]'}
          />

          <div
            className={`flex gap-x-12 gap-y-3 lg:flex-row flex-col-reverse mb-5 sm:mb-10 xl:mb-24`}
          >
            {main && (
              <Image
                className={`rounded-[50px] w-full xl:h-[450px] lg:h-[280px] h-[200px] object-cover`}
                src={main}
                width={959}
                height={650}
                alt={'bassholding news image'}
              />
            )}

            <div className={`flex flex-col gap-y-3`}>
              <div
                className={`flex flex-row lg:flex-col gap-x-5 gap-y-3 items-center lg:items-start`}
              >
                <Chip
                  variant={'bordered'}
                  className="border-primary-gold text-primary-gold xl:mb-10 mb-5"
                  classNames={{
                    base: 'truncate xl:text-[16px]',
                    content: 'p-0 sm:p-1 truncate',
                  }}
                >
                  {data?.chips?.map((chi) => chi[locale])[0]}
                </Chip>

                <span className={`xl:text-[20px] font-[300] xl:mb-10 mb-5`}>
                  {data.date && data?.date[locale]}
                </span>
              </div>
              <span
                className={`xl:text-[32px] lg:text-[32px] text-lg leading-normal font-[300]`}
              >
                {data.title && data?.title[locale]}
              </span>
            </div>
          </div>
          <div className={`sm:mb-10`}>
            <span
              className={`xl:text-[20px] inline-block whitespace-pre-line leading-normal text-sm lg:text-2xl font-[200] mb-5`}
            >
              {data.content && data.content[locale]}
            </span>

            {data?.docsHref?.length && (
              <div className={`flex gap-3`}>
                {data?.docsHref.map((doc) => (
                  <Link
                    target={`_blank`}
                    className={`px-3 py-1 rounded-xl border border-primary-gold text-primary-gold transition duration-200 hover:text-white hover:border-white`}
                    href={doc}
                  >
                    <span className={`text-sm`}>Документ</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}
