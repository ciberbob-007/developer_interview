/**
 * Query Contract Balances from the Zilliqa Chain
 * 
 * Use the "@zilliqa-js/zilliqa" package to query the defined contract below and get the state.
 * The state will return all mutable fields on a smart contract and their current values.
 * 
 * Modify the handler below to accept an "address" string.
 * Query the defined contract below to get the current state.
 * Find and return the balance of the "address".
 */

import type { NextApiRequest, NextApiResponse } from 'next'
// import { Zilliqa } from '@zilliqa-js/zilliqa';
// import { ContractState } from '../../typings'

// const zilliqa = new Zilliqa('https://api.zilliqa.com/');
// const tokenAddress = 'zil1z5l74hwy3pc3pr3gdh3nqju4jlyp0dzkhq2f5y';

type RequestData = {

};

type ResponseData = {
  balance: string
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // const contract = zilliqa.contracts.at(tokenAddress);
  // ...
  // const body: RequestData = JSON.parse(req.body);

  /**
   * TODO:
   * Query the current "state" of the contract.
   * Retrieve the balances from the "state".
   * Get the "address" from the request data and return the balance of that address.
   * 
   * Hint: The "state" balances are in lower-case base16 format.
   */

  res.status(200).json({ balance: '0' })
}
 