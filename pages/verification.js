import Link from 'next/link'
import { withRouter } from 'next/router'
import Layout from '../components/layout'
import useStyles from '../utils/styles'
import Grid from '@material-ui/core/Grid'
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import Box from '@mui/material/Box';
import { motion } from "framer-motion";





const Form = ({ handleNext }) => {
    const classes = useStyles();
    // create state variables for each input
    const [code, setCode] = useState('');

    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const phone = localStorage.getItem("phone")
      }

    const handleVerification = async () => {
        const response = await fetch('https://xchange-ng.herokuapp.com/api/v1/auth/user/verifyOTP', {method:'POST',
          body:JSON.stringify({
            phoneNumber: phone,
            countryCode:"NG",
            otpCode:code
          }),
          headers:{
           'Content-Type': 'application/json'
          }
        })
    
        const data = await response.json()
        handleNext()
    
        
        console.log('Data found is ', data);
        // handleClose();
      };
    return (
        <>
            <Box
                m={10}
                p={6}
                sx={{
                    width: 404,
                    height: 395,
                    borderRadius: 8,
                    boxShadow: "0px 10px 15px #2AFEA226",

                }}
                className='bg-primary'
            >
                <h1 className="text-2xl text-secondary text-left font-sans mb-2 tracking-wider  ">Enter Verification Code</h1>
                <Typography className="text-xs text-secondary text-left font-sans   ">Verification code have been sent to <br /> 0816 **** 343</Typography>
                <form className={classes.root}>
                    <Box>
                        <TextField
                            label="xxxxxx"
                            id="standard-basic"
                            variant="standard"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused,
                                },

                            }}
                            required
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', style: { fontFamily: 'Noto Sans' } }}
                            focuscolor="green"
                            value={code}
                            onChange={e => setCode(e.target.value)}
                            InputProps={{
                                classes: {
                                    underline: classes.underline
                                },

                            }}



                        />
                    </Box>

                    <div>
                        <Link href="/verification">
                            <motion.button
                                whileHover={{ scale: 0.9 }}
                                whileTap={{ scale: 1.1 }}
                                transition={{ duration: 1, type: "spring" }}>
                                <Button type="submit" variant="contained" disableElevation={true} className="bg-tertiary h-12 text-secondary  mt-24 " onClick={handleVerification} >
                                    VERIFY
                                </Button>
                            </motion.button>
                        </Link>
                    </div>
                </form>

            </Box>
        </>

    );
};




export default function Verification() {
    const steps = ['Verify', 'Username', 'Account'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };


    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
          top: 22,
        },
        [`&.${stepConnectorClasses.active}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            backgroundColor:
              '#00FFA2',
          },
        },
        [`&.${stepConnectorClasses.completed}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
              '#04456633',
          },
        },
        [`& .${stepConnectorClasses.line}`]: {
          height: 3,
          marginTop:-10,
          border: 0,
          backgroundColor:
            '#04456633',
          borderRadius: 2,
        },
      }));
      
      const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        backgroundColor: 'transparent',
        border: 2,
        borderColor:'green',
        zIndex: 1,
        color: '#000',
        width: 20,
        height: 20,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
          backgroundColor:
            '#00FFA2',
          boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        }),
        ...(ownerState.completed && {
          backgroundColor:
            '#00FFA2',
        }),
      }));

      function ColorlibStepIcon(props) {
        const { active, completed, className } = props;
      
        const icons = {
          1: '1',
          2: '2',
          3: '3',
         
        };
      
        return (
          <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
          </ColorlibStepIconRoot>
        );
      }
      
      ColorlibStepIcon.propTypes = {
        /**
         * Whether this step is active.
         * @default false
         */
        active: PropTypes.bool,
        className: PropTypes.string,
        /**
         * Mark the step as completed. Is passed to child components.
         * @default false
         */
        completed: PropTypes.bool,
        /**
         * The label displayed in the step icon.
         */
        icon: PropTypes.node,
      };

      
      


    return (
        <Layout>
            <div className="my-4">
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep} orientation="horizontal"  alternativeLabel connector={<ColorlibConnector />} >
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};


                                    return (
                                        <Step key={label} {...stepProps} >
                                            <StepLabel {...labelProps} StepIconComponent={ColorlibStepIcon} ></StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                           
                            {/* {activeStep === steps.length && (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        
                                    </Box>
                                </React.Fragment>
                            )
                            } */}
                        </Box>
                        <Form handleNext={handleNext} />
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

