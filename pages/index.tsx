import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Typography,
  Grid,
  Input,
  Box,
  Container,
  Stack,
  Toolbar,
  AppBar,
  Button
} from '@mui/material'
import { useEffect, useState } from 'react'

import { fromBech32Address, toBech32Address } from '@zilliqa-js/crypto'
import { isBech32, isAddress } from '@zilliqa-js/util/dist/validation'

import useSwr from 'swr'

/**
 * TODO [Part 1]:
 * Use the '@zilliqa-js/crypto' package to convert a Bech32 address to a Base16 address.
 * Allow the user to enter a Bech32 address, displaying the converted Base16 address on-screen.
 *
 * Example:
 *    Bech32 Address: zil1tym3sy8sary2y3lqy56dx4ej9v7fsxku52gl6z
 *    Base16 Address: 0x59371810F0E8c8a247E02534D357322B3c981AdC
 *
 *
 * TODO [Part 2]:
 * Using the "price" API, display the current XCAD price on-screen.
 *
 *
 * TODO [Part 3]:
 * Using the "balance" API, add button to allow a user to query the balance of any valid Base16 and Bech32 address.
 * Display the balance of the address on the client.
 */

const fetcher = (url: string) => fetch(url).then(res => res.json())

const Home: NextPage = props => {
  const [bech32Address, setBech32Address] = useState('')
  const [hex16Address, setHex16Address] = useState('')

  const { data: price, error: priceError } = useSwr('/api/price', fetcher)
  const { data: balance, error: balanceError } = useSwr(
    `/api/balance?address32=${bech32Address}&address16=${hex16Address}`,
    fetcher
  )

  useEffect(() => {}, [hex16Address])

  return (
    <Box>
      <AppBar position="fixed">
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              {' '}
              Address Converter{' '}
            </Typography>
            {price && (
              <Typography variant="h6" component="div">
                {`XCAD : $${price.price} USD`}
              </Typography>
            )}
            {priceError && (
              <Typography variant="h6" component="div">
                {`$0.00`}
              </Typography>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Container>
        <Head>
          <title>Address Converter</title>
          <meta name="description" content="Zilliqa Address Converter" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Stack mt={16} alignItems="center">
          <Grid container maxWidth={600} spacing={3}>
            <Grid item xs={6}>
              <Input
                fullWidth
                placeholder="Bech32 Address"
                value={bech32Address}
                onChange={event => {
                  const bench32 = event.target.value
                  setBech32Address(bench32)
                  if (isBech32(bench32)) {
                    const hex16 = fromBech32Address(event.target.value)
                    setHex16Address(hex16)
                    return
                  }

                  setHex16Address('')
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                fullWidth
                placeholder="Hex Address"
                value={hex16Address}
                onChange={event => {
                  const hex16 = event.target.value
                  setHex16Address(hex16)
                  if (isAddress(hex16)) {
                    const bench32 = toBech32Address(event.target.value)
                    setBech32Address(bench32)
                    return
                  }
                  setBech32Address('')
                }}
              />
            </Grid>
            <Grid item xs={6}>
              {/* Disable button, no longer needed
                <Button variant="contained">Query Balance</Button>*/}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="div">
                {`Balance: ${balance ? balance.balance : '-'}`}
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 240
  }
}

export default Home
