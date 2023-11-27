import { NextRequest, NextResponse } from 'next/server'
import { getNews } from '@/get-api'
import { TNewsData } from '@/app/[locale]/_types/TNews'

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const res = await getNews()
    const newsData = res.news as TNewsData[]

    const response = newsData.map((el) => ({
      ...el,
      baseImg: require(`@/../public/images/${el.image.main}`),
    }))

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Ошибка при получении новостей:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}