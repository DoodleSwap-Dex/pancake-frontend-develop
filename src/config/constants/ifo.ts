import { Token, ChainId } from '@pancakeswap/sdk'
import { bscTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_MAINNET } from './lp'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(ChainId.BSC, CAKE_BNB_LP_MAINNET, 18, 'DOODZ-BNB LP')

const ifos: Ifo[] = [
  {
    id: 'hoop',
    address: '0x326e9E1B685C7F366fb320e7eC59599F3d88b1a2',
    isActive: true,
    name: 'HOOP',
    poolBasic: {
      saleAmount: '6,499,500 HOOP',
      raiseAmount: '$357,472.50',
      cakeToBurn: '$0',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '15,165,500 HOOP',
      raiseAmount: '$834,102.50',
      cakeToBurn: '$0',
      distributionRatio: 0.7,
    },
    currency: bscTokens.doodz,
    token: bscTokens.hoop,
    releaseBlockNumber: 21525900,
    campaignId: '511500000',
    articleUrl:
      'https://pancakeswap.finance/voting/proposal/bafkreicsc2nevwvyp7ot5ewkmujvor3bcafh372kuxzncojqbuabnpwupe',
    tokenOfferingPrice: 0.055,
    version: 3.2,
    twitterUrl: 'https://twitter.com/DinosChibi',
    description: `Chibi Dinos is a basketball and dinosaur themed metaverse with games such as Primal Hoop, an arcade basketball game with an adventure role-playing game (RPG) mode and Primal Pick'em, a predictive play-to earn game (P2E).`,
    vestingTitle: '$HOOP - In-game currency for the Chibi Dinos Gaming Universe',
  },
]

export default ifos
