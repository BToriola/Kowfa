import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import useStyles from '../utils/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Lock from '../assets/ios-lock.svg'
import Exchange from '../assets/advert.svg'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { motion, AnimatePresence } from "framer-motion";
// import useSwr from 'swr'






const Form = () => {
  const classes = useStyles();
  const router = useRouter()
  // create state variables for each input
  const [phone, setPhone] = useState('');
  const [errorText, setErrorText] = useState('');

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem("phone", phone)
  }
  

 

  const handleAuthentication = async (e) => {
    e.preventDefault();
    console.log(phone);
    const response = await fetch('https://xchange-ng.herokuapp.com/api/v1/auth/user', {method:'POST',
      body:JSON.stringify({
        phoneNumber: phone,
        countryCode:"NG",
        mode:"phone"
      }),
      headers:{
       'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
      router.push("/verification")

    console.log('Data found is ', data);
  };
  return (
    <>
      <Box
        m={10}
        p={6}
        sx={{
          width: {
            xs: 404,
            sm: 404,
          },
          height: 395,
          borderRadius: 8,
          boxShadow: "0px 10px 15px #2AFEA226",
          typography: 'subtitle2'

        }}
        className='bg-primary'
      >
        <div sx={{ p: 4 }}>

          <h1 className="text-2xl text-secondary font-mono mb-16">Sign In</h1>
          <form className={classes.root}>

            <TextField
              label="Phone No:"
              id="standard-basic"
              variant="standard"
              required
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', style: { fontFamily: 'Noto Sans', color: '#044566' } }}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              InputProps={{
                classes: {
                  underline: classes.underline
                },
                endAdornment: (
                  <InputAdornment position="start">
                    <Image src={Lock} />
                  </InputAdornment>
                )

              }}
            />

            <div>
              
                <motion.button
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 1.1 }}
                  transition={{ duration: 1, type: "spring" }}>
                  <Button type="submit" variant="contained" onClick = {handleAuthentication} disableElevation={true} className="bg-tertiary h-12  text-secondary  mt-24" >
                    LOG IN
                  </Button>
                </motion.button>
             
            </div>
          </form>
        </div>
      </Box>
    </>

  );
};


const ExchangeInfo = () => {
  return (

    <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '80vh' }}>
      <AnimatePresence initial={false} >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <Image src={Exchange}
            alt="Picture of Exchange"

          />
        </motion.button>
      </AnimatePresence>
      <div sx={{ padding: 10 }}>
        <Typography variant="h4" color="#044566" className='animate-fade-up' sx={{ letterSpacing: 3, paddingTop: 5 }}>
          <p className='font-bold'>Fast & Easy <br />Cross Border Exchange</p>
        </Typography>
        <Typography variant="h6" color="#044566" sx={{ letterSpacing: 0.5, fontWeight: 'lighter' }}>
          <p className=''>Send and receive money directly in your Nigeria <br /> bank account from the US</p>
        </Typography>
      </div>
    </Grid>
  )
}


export default function  Home() {
  return (
    <Layout>
      <Container maxWidth="xl" className="m-4" >
        <Grid container>
          <Grid item lg={4} xs={12}>
            <Form />
          </Grid>
          <Grid item lg={8} xs={12}  >
            <ExchangeInfo />
          </Grid>
        </Grid>

      </Container>
    </Layout>
  )
}
