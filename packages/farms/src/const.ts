import { FixedNumber, BigNumber } from '@ethersproject/bignumber'

export const FIXED_ZERO = FixedNumber.from(0)
export const FIXED_ONE = FixedNumber.from(1)
export const FIXED_TWO = FixedNumber.from(2)

export const BIG_TEN = BigNumber.from(10)

export const FIXED_TEN_IN_POWER_18 = FixedNumber.from(BIG_TEN.pow(18))

export const masterChefAddresses = {
  97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
  56: '0x36CDBf44737f3D13657249487f8B2CC8618732Cc',
}

export const nonBSCVaultAddresses = {
  5: '0x8CB958bBdb45597cc918147469eb650A9397aBDA',
}
