import { Address, ethereum } from '@graphprotocol/graph-ts';
import { newMockEvent } from 'matchstick-as';
import { BondCreated } from '../../generated/BondFactory/BondFactory';

export const createBondEvent = (
  newBond: string,
  name: string,
  symbol: string,
  owner: string,
  maturity: i32,
  paymentToken: string,
  collateralToken: string,
  collateralTokenAmount: i32,
  convertibleTokenAmount: i32,
  bonds: i32
): BondCreated => {
  const mockEvent = newMockEvent();
  const pairEvent = new BondCreated(
    mockEvent.address,
    mockEvent.logIndex,
    mockEvent.transactionLogIndex,
    mockEvent.logType,
    mockEvent.block,
    mockEvent.transaction,
    mockEvent.parameters
  );
  pairEvent.parameters = [
    new ethereum.EventParam(
      'newBond',
      ethereum.Value.fromAddress(Address.fromString(newBond))
    ),
    new ethereum.EventParam('name', ethereum.Value.fromString(name)),
    new ethereum.EventParam('symbol', ethereum.Value.fromString(symbol)),
    new ethereum.EventParam(
      'owner',
      ethereum.Value.fromAddress(Address.fromString(owner))
    ),
    new ethereum.EventParam('maturity', ethereum.Value.fromI32(maturity)),
    new ethereum.EventParam(
      'paymentToken',
      ethereum.Value.fromString(paymentToken)
    ),
    new ethereum.EventParam(
      'collateralToken',
      ethereum.Value.fromString(collateralToken)
    ),
    new ethereum.EventParam(
      'collateralTokenAmount',
      ethereum.Value.fromI32(collateralTokenAmount)
    ),
    new ethereum.EventParam(
      'convertibleTokenAmount',
      ethereum.Value.fromI32(convertibleTokenAmount)
    ),
    new ethereum.EventParam('bonds', ethereum.Value.fromI32(bonds)),
  ];

  return pairEvent;
};
