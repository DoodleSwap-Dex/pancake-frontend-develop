import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://doodleswap-dex.gitbook.io/docs/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/@doodleswapdex',
      },
      {
        label: t('Community'),
        href: 'https://t.me/doodleswapdex',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://doodleswap-dex.gitbook.io/docs/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://t.me/doodleswapdex',
      },
      {
        label: t('Guides'),
        href: 'https://doodleswap-dex.gitbook.io/docs/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/doodleswap-dex',
      },
      {
        label: t('Documentation'),
        href: 'https://doodleswap-dex.gitbook.io/docs/',
      },
      {
        label: t('Careers'),
        href: 'https://doodleswap-dex.gitbook.io/docs/career/were-hiring',
      },
    ],
  },
]
