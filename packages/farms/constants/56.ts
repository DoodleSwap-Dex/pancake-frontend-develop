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
    pid: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddress: '0x3D4c252d2D32782295b38FAfC20cf7b5F68f5619',
    token: bscTokens.wbnb,
    quoteToken: bscTokens.busd,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
