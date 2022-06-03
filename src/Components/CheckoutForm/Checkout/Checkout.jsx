import React, {useState} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'
import useStyles from '../styles';

const steps = ['Shipping Adress', 'Payment details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  return (
    <>
    <div className={classes.toolbar}/>
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align='center'>Chechkout</Typography>
        <Stepper activeStep={0} className={classes.stepper}>

        </Stepper>
      </Paper>
    </main>
    </>
  )
}

export default Checkout