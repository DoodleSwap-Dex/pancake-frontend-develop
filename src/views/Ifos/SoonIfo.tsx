import { bscTokens } from '@pancakeswap/tokens'
import IfoContainer from './components/IfoContainer'
import IfoSteps from './components/IfoSteps'
import ComingSoonSection from './components/ComingSoonSection'

const SoonIfo = () => (
  <IfoContainer
    ifoSection={<ComingSoonSection />}
    ifoSteps={
      <IfoSteps isLive={false} hasClaimed={false} isCommitted={false} ifoCurrencyAddress={bscTokens.doodz.address} />
    }
  />
)

export default SoonIfo
