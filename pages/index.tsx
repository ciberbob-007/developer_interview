import type { NextPage } from 'next'
import Head from 'next/head' 
import { Typography, Grid, Input, Box, Container, Stack, Toolbar, AppBar } from '@mui/material';

// import { fromBech32Address, toBech32Address } from '@zilliqa-js/crypto';
// import { isBech32, isAddress } from '@zilliqa-js/util/dist/validation';

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

const Home: NextPage = (props) => {
  return (
    <Box >
      <AppBar position='fixed'>
        <Container>
          <Toolbar disableGutters sx={{justifyContent:'space-between'}}>
            <Typography variant="h6" component="div" > Address Converter </Typography>
            <Typography>XCAD: 0.00</Typography>
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
            <Grid item xs={6}  >
              <Input fullWidth placeholder='Bech32 Address' />
            </Grid>
            <Grid item xs={6}  >
              <Input fullWidth placeholder='Hex Address' />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: {
     
    },
    revalidate: 240,
  };
}


export default Home;
