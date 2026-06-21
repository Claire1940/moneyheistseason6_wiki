import { setRequestLocale } from 'next-intl/server'
import { getLatestArticles } from '@/lib/getLatestArticles'
import type { Language } from '@/lib/content'
import type { Metadata } from 'next'
import HomePageClient from './HomePageClient'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moneyheistseason6.wiki'
  const pageUrl = locale === 'en' ? siteUrl : `${siteUrl}/${locale}`
  const heroImage = `${siteUrl}/images/hero.webp`

  return {
    title: 'Money Heist Season 6 Wiki - Release, Cast & Trailer',
    description:
      'Follow Money Heist Season 6 news, Netflix status, release date updates, cast rumors, trailer checks, plot theories, spinoffs and where to watch.',
    openGraph: {
      type: 'website',
      url: pageUrl,
      siteName: 'Money Heist Season 6 Wiki',
      title: 'Money Heist Season 6 Wiki - Release, Cast & Trailer',
      description:
        'Follow Money Heist Season 6 news, Netflix status, release date updates, cast rumors, trailer checks, plot theories, spinoffs and where to watch.',
      images: [{ url: heroImage, width: 1920, height: 1080, alt: 'Money Heist Season 6 Wiki Hero' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Money Heist Season 6 Wiki - Release, Cast & Trailer',
      description:
        'Track official updates for Money Heist Season 6, including release date, trailer checks, cast news, and where to watch.',
      images: [heroImage],
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  // 服务器端获取最新文章数据
  const latestArticles = await getLatestArticles(locale as Language, 30)
  return <HomePageClient latestArticles={latestArticles} moduleLinkMap={{}} locale={locale} />
}
