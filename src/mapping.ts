import { BondCreated } from '../generated/BondFactory/BondFactory';
import { Bond as BondTemplate} from '../generated/templates/Bond/Bond';
import { Bond, Dao, Token } from '../generated/schema';

export function handleBondCreated(event: BondCreated): void {
  const bond = new Bond(event.params.newBond.toHexString());
  bond.name = event.params.name;
  bond.amount = event.params.bonds;
  bond.maturity = event.params.maturity;

  // Check and populate dao
  let dao = Dao.load(event.params.owner.toHexString());
  if (!dao) {
    dao = new Dao(event.params.owner.toHexString());
  }
  dao.name = event.params.name;
  bond.dao = dao.id;
  
  // Check and populate paymentToken
  let paymentToken = Token.load(event.params.owner.toHexString());
  if (!paymentToken) {
    paymentToken = new Token(event.params.owner.toHexString());
  }
  bond.paymentToken = paymentToken.id;

  bond.save();
  dao.save();
  paymentToken.save();
  // BondTemplate.create();
}