import React, {useState} from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'
import useStyles from '../styles';
import AdressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping Adress', 'Payment details'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  const Confirmation = () => (
      <div>
        Cfm
      </div>
  )



  const Form = () => activeStep === 0
      ? <AdressForm/> 
      : <PaymentForm/>
  return (
    <>
    <div className={classes.toolbar}/>
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align='center'>Chechkout</Typography>
        <Stepper activeStep={0} className={classes.stepper}>

        </Stepper>
        {activeStep === steps.length ? <Confirmation /> : <Form/>}
      </Paper>
    </main>
    </>
  )
}

export default Checkout