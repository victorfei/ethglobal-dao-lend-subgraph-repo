import { BigInt } from "@graphprotocol/graph-ts"
import {
  BondFactory,
  BondCreated,
  IssuerAllowListEnabled,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TokenAllowListEnabled
} from "../generated/BondFactory/BondFactory"
import { ExampleEntity } from "../generated/schema"

export function handleBondCreated(event: BondCreated): void {
  
}