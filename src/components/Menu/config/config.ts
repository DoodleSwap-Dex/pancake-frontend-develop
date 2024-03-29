import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      {
        label: t('Trade'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/swap',
        showItemsOnMobile: false,
        items: [
          {
            label: t('Swap'),
            href: '/swap',
          },
          {
            label: t('Liquidity'),
            href: '/liquidity',
          },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
      {
        label: t('Earn'),
        href: '/farms',
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        image: '/images/decorations/pe2.png',
        supportChainIds: SUPPORT_ONLY_BSC,
        items: [
          {
            label: t('Farms'),
            href: '/farms',
          },
          {
            label: t('Pools (coming soon)'),
            href: '/pools',
            supportChainIds: SUPPORT_ONLY_BSC,
          },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
      {
        label: t('FlashLoans'),
        href: '/liquidity',
        icon: TrophyIcon,
        fillIcon: TrophyFillIcon,
        supportChainIds: SUPPORT_ONLY_BSC,
        items: [
          {
            label: t('Arbitrage (coming soon)'),
            href: '/liquidity',
            hideSubNav: true,
          },
          {
            label: t('Borrow (coming soon)'),
            href: '/liquidity',
          },
          {
            label: t('Battle (coming soon)'),
            href: '/liquidity',
          },
        ],
      },
      {
        label: '',
        icon: MoreIcon,
        hideSubNav: true,
        items: [
          {
            label: t('Blog'),
            href: 'https://medium.com/@doodleswapdex',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
          {
            label: t('Docs'),
            href: 'https://doodleswap-dex.gitbook.io/docs/',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
        ].map((item) => addMenuItemSupported(item, chainId)),
      },
    ].map((item) => addMenuItemSupported(item, chainId))

export default config
