import { Address, Contract, datetoTimeout } from "@marlowe.io/language-core-v1";
import { lovelace } from "@marlowe.io/language-core-v1/playground-v1";

export const DAPP_TAG = "buy-me-a-coffee";

export const mkContract = (donor: Address, acceptor: Address): Contract => {
  const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;
  const inTwentyFourHours = datetoTimeout(new Date(Date.now() + twentyFourHoursInMilliseconds));

  return {
    "when": [
      {
        "then": "close",
        "case": {
          "party": donor,
          "deposits": 100n,
          "of_token": {
            "token_name": "",
            "currency_symbol": ""
          },
          "into_account": acceptor
        }
      }
    ],
    "timeout_continuation": "close",
    "timeout": inTwentyFourHours,
  }
};


