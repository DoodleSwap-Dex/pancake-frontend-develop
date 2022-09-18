import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. No registration, no hassle.'),
  bodyText: t('Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/cat/',
    attributes: [{ src: 'lamb', alt: t('alphaca cat') }],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('Make an automated income with DoodleSwap.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/cat/',
    attributes: [{ src: 'devil', alt: t('Devil Cat') }],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('DOODZ makes our world go round.'),
  bodyText: t(
    'DOODZ token is at the heart of the DoodleSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x3c5abAFB2bad7998A5BfFB21191De2E20AF1F9D5&chainId=56',
    text: t('Buy DOODZ'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cat/',
    attributes: [{ src: 'sleeping', alt: t('Sleeping Cat') }],
  },
})
