/**
 * Query Prices
 * https://api.coingecko.com/api/v3/simple/price?ids=xcad-network&vs_currencies=usd
 *
 * Use the API above to query the current price for the "xcad-network" token.
 * This price value will need to be displayed on the client-side.
 *
 * Example Response: { 'xcad-network': { usd: 4.78 } }
 */

import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  price?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=xcad-network&vs_currencies=usd'
  )
  const data = await response.json()

  if (data) {
    res.status(200).json({
      price: data['xcad-network'].usd
    })
  } else {
    res.status(500).json({ error: 'Error fetching price' })
  }
}
