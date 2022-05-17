import { test, assert, clearStore, logStore } from 'matchstick-as';
import { handleBondCreated } from '../src/mapping';
import { createBondEvent } from './utils/helpers';

test('Can handle creating a new bond', () => {
  const newBond = '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83';
  const name = 'New Bond 2023Dec24';
  const symbol = 'NB12';
  const owner = '0x888EF71766ca594DED1F0FA3AE64eD2941740A20';
  const maturity = 1652793160;
  const paymentToken = '0x888EF71766ca594DED1F0FA3AE64eD2941740A20';
  const collateralToken = '0x222EF71766ca594DED1F0FA3AE64eD2941740A20';
  const collateralTokenAmount = 1;
  const convertibleTokenAmount = 1;
  const bonds = 50;
  const newBondEvent = createBondEvent(
    newBond,
    name,
    symbol,
    owner,
    maturity,
    paymentToken,
    collateralToken,
    collateralTokenAmount,
    convertibleTokenAmount,
    bonds
  );

  handleBondCreated(newBondEvent);
  logStore();

  assert.fieldEquals('Bond', newBond, 'name', name);
  assert.fieldEquals('Bond', newBond, 'maturity', maturity.toString());

  clearStore();
});

test('should fetch an existing dao or create a new one by id', () => {
  const newBond = '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83';
  const name = 'New Bond 2023Dec24';
  const symbol = 'NB12';
  const owner = '0x888ef71766ca594ded1f0fa3ae64ed2941740a20';
  const maturity = 1652793160;
  const paymentToken = '0x888EF71766ca594DED1F0FA3AE64eD2941740A20';
  const collateralToken = '0x222EF71766ca594DED1F0FA3AE64eD2941740A20';
  const collateralTokenAmount = 1;
  const convertibleTokenAmount = 1;
  const bonds = 50;
  const daoName = 'Something Dao';

  const newBondEvent = createBondEvent(
    newBond,
    name,
    symbol,
    owner,
    maturity,
    paymentToken,
    collateralToken,
    collateralTokenAmount,
    convertibleTokenAmount,
    bonds
  );

  handleBondCreated(newBondEvent);
  assert.fieldEquals('Dao', owner, 'name', daoName);

  clearStore();
});