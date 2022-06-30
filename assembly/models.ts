import { u128 } from "near-sdk-as";
import { AccountId, Money, toNear, toYocto } from "./utils";

export class Constants {
  static ACCESS_DENIED:string = 'Access Denied';
  static INVALID_EXPIRY_DATE:string = 'Expiry date must be later than the current date';
  static NOT_SUBSCRIBER:string = 'You are not a subscriber';
  static SUBSCRIBTION_EXPIRED:string = 'Your subscribtion has expired';
  static SERVICE_EXPIRED:string = 'This service has expired';
  static ALREADY_REDEEMED:string = 'You have already redeemed this service';
  static SUB_FEES:Money = u128.from(toYocto(10));

  static formulateWrongeDepositMessage(attachedDeposit:Money):string {
    return "Attached deposit must be equal to the subscription fees (" + toNear(Constants.SUB_FEES).toString() + "N). Amount attached to call was: " + toNear(attachedDeposit).toString() + 'N';
  }

  static calcSubDuration(): u64 {
    let subDays:u64 = 30;
    let secondsInDay:u64 = 86400;
    let subMilliseconds:u64 = subDays * secondsInDay * 1000;
    return subMilliseconds;
  }
}

@nearBindgen
export class Service {
  id: string;
  provider: AccountId;
  profitPerRedeem: string;
  title: string;
  discription: string;
  redeemCount: number;
  registerationDate: u64;
  expiryDate: u64;

  constructor(
    id: string,
    provider: AccountId,
    profitPerRedeem: string,
    title: string,
    discription: string,
    redeemCount: number,
    registerationDate: u64,
    expiryDate: u64,
  ) {
    this.id = id;
    this.provider = provider;
    this.profitPerRedeem = profitPerRedeem;
    this.title = title;
    this.discription = discription;
    this.redeemCount = redeemCount;
    this.registerationDate = registerationDate;
    this.expiryDate = expiryDate;
  }
}

@nearBindgen
export class Subscriber {
  accountId: AccountId;
  subscriptionDate: u64;
  expiryDate: u64;
  servicesRedeemed: Array<string>;

  constructor(
    accountId: AccountId = '',
    subscriptionDate: u64 = 0,
    expiryDate: u64 = 0,
    servicesRedeemed: Array<string> = [],
  ) {
    this.accountId = accountId;
    this.subscriptionDate = subscriptionDate;
    this.expiryDate = expiryDate;
    this.servicesRedeemed = servicesRedeemed;
  }

  isNotEmpty(): bool {
    if (this.accountId == '')
      return false;
    else
      return true;
  }
}