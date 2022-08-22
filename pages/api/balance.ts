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
import { Zilliqa } from '@zilliqa-js/zilliqa'
import { ContractState } from '../../typings'

import { isBech32, isAddress } from '@zilliqa-js/util/dist/validation'

const zilliqa = new Zilliqa('https://api.zilliqa.com/')

const tokenAddress = 'zil1z5l74hwy3pc3pr3gdh3nqju4jlyp0dzkhq2f5y'

type RequestData = {}

type ResponseData = {
  balance: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // const body: RequestData = JSON.parse(req.body)

  /**
   * TODO:
   * Query the current "state" of the contract.
   * Retrieve the balances from the "state".
   * Get the "address" from the request data and return the balance of that address.
   *
   * Hint: The "state" balances are in lower-case base16 format.
   */

  const address = (req.query?.address32 as string) || ''

  if (isBech32(address)) {
    const contract = zilliqa.contracts.at(address)
    const state = (await contract.getState()) as ContractState

    res.status(200).json({ balance: state._balance })
  } else {
    res.status(200).json({ balance: '-' })
  }
}
