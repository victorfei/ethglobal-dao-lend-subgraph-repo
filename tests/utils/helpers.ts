import { newMockEvent } from 'matchstick-as';

export const createNewPairEvent = (
    token0: string,
    token1: string,
    stable: boolean,
    pair: string,
    allPairsLen: i32
  ): PairCreated => {
    const mockEvent = newMockEvent()
    const pairEvent = new PairCreated(
      mockEvent.address,
      mockEvent.logIndex,
      mockEvent.transactionLogIndex,
      mockEvent.logType,
      mockEvent.block,
      mockEvent.transaction,
      mockEvent.parameters
    )
    pairEvent.parameters = [
      new ethereum.EventParam('token0', ethereum.Value.fromAddress(Address.fromString(token0))),
      new ethereum.EventParam('token1', ethereum.Value.fromAddress(Address.fromString(token1))),
      new ethereum.EventParam('token1', ethereum.Value.fromBoolean(stable)),
      new ethereum.EventParam('pair', ethereum.Value.fromAddress(Address.fromString(pair))),
      new ethereum.EventParam('allPairsLen', ethereum.Value.fromI32(allPairsLen))
    ]
  
    return pairEvent
  }