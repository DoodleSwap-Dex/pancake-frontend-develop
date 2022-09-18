import { SerializedFarmConfig } from '@pancakeswap/farms'
import { bscTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_MAINNET } from './common'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
   {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'DOODZ',
    lpAddress: '0x3c5abAFB2bad7998A5BfFB21191De2E20AF1F9D5',
    token: bscTokens.syrup,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 3,
    lpSymbol: 'DOODZ-BNB LP',
    lpAddress: CAKE_BNB_LP_MAINNET,
    token: bscTokens.doodz,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 3,
    v1pid: 2,
    lpSymbol: 'DOODZ-BUSD LP',
    lpAddress: '0x77D82666d495e928E25dB8C14F435FCB7fDFDA84',
    token: bscTokens.doodz,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddress: '0x3D4c252d2D32782295b38FAfC20cf7b5F68f5619',
    token: bscTokens.wbnb,
    quoteToken: bscTokens.busd,
  },
  {
    pid: 4,
    v1pid: 1,
    lpSymbol: 'DOODZ-USDT LP',
    lpAddress: '0x39333fE86277a42083974314F267d926a4d967Bb',
    boosted: false,
    token: bscTokens.doodz,
    quoteToken: bscTokens.usdt,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
