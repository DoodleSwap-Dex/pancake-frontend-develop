import { ArrowForwardIcon, Button, Text, Link, useMatchBreakpoints, useIsomorphicEffect } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/image'
import { memo, useMemo, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { cute } from './images'
import * as S from './Styled'

const RightWrapper = styled.div`
  position: absolute;
  min-height: 100%;
  right: 0;
  bottom: 0px;
  ${({ theme }) => theme.mediaQueries.sm} {
    bottom: 8.2px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    bottom: 9px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    bottom: -2px;
  }
`
const Header = styled(S.StyledHeading)`
  font-size: 20px;
  min-height: 44px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 40px;
    min-height: auto;
  }
`

const HEADING_ONE_LINE_HEIGHT = 27

const LotteryBanner = () => {
  const {
    t,
    currentLanguage: { code },
  } = useTranslation()
  const { isDesktop, isMobile } = useMatchBreakpoints()
  const { isDark } = useTheme()

  const perpetualUrl = useMemo(() => `https://forms.gle/iCsQf8sCH5Gtox7G9`, [code, isDark])
  const headerRef = useRef<HTMLDivElement>(null)

  useIsomorphicEffect(() => {
    const target = headerRef.current
    target.style.fontSize = '' // reset
    target.style.lineHeight = ''
    if (!target || !isMobile) return
    if (target.offsetHeight > HEADING_ONE_LINE_HEIGHT) {
      target.style.fontSize = '18px'
      target.style.lineHeight = `${HEADING_ONE_LINE_HEIGHT}px`
    }
  }, [isMobile, code])

  return (
    <S.Wrapper>
      <S.Inner>
        <S.LeftWrapper>
          <S.StyledSubheading ref={headerRef}>{t('Apply To')}</S.StyledSubheading>
          <Header width={['160px', '160px', 'auto']}>{t('Get Listed On Farms')}</Header>
          <Link href={perpetualUrl} external>
            <Button>
              <Text color="invertedContrast" bold fontSize="16px" mr="4px">
                {t('Apply Now')}
              </Text>
              <ArrowForwardIcon color="invertedContrast" />
            </Button>
          </Link>
        </S.LeftWrapper>
        <RightWrapper>
          {isDesktop ? (
            <Image src={cute} alt="LotteryBanner" width={232} height={232} placeholder="blur" />
          ) : (
            <Image src={cute} alt="LotteryBanner" width={208} height={208} placeholder="blur" />
          )}
        </RightWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default memo(LotteryBanner)
