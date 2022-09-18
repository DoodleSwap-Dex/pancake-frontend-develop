import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://doodleswap-dex.gitbook.io/docs/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/pancakeswap",
      },
      {
        label: "Community",
        href: "https://t.me/doodleswapdex",
      },
      {
        label: "DOODZ",
        href: "https://doodleswap-dex.gitbook.io/docs/doodz",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://doodleswap-dex.gitbook.io/docs/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://t.me/doodleswapdex",
      },
      {
        label: "Guides",
        href: "https://doodleswap-dex.gitbook.io/docs/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/doodleswap-dex",
      },
      {
        label: "Documentation",
        href: "https://doodleswap-dex.gitbook.io/docs/",
      },
      {
        label: "Careers",
        href: "https://doodleswap-dex.gitbook.io/docs/career/were-hiring",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/doodleswapdex",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/doodleswapdex",
      },
      {
        label: "Announcements",
        href: "https://t.me/doodleswapann",
      },
    ],
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/doodleswap-dex/",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/pancakeswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
