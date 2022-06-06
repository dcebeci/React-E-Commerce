import React, { useState } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form';

import { commerce } from '../../lib/commerce';
import FormInput from './CustomTextField';




const AdressForm=() => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();

  return (
    <>
    <Typography variant="h6" gutterBottom>ShippingAdress</Typography>
    <FormProvider {...methods}>
      <form onSubmit=''>
        <Grid container spacing={3}>
          <FormInput required name='firstName' label= 'First name' />
          <FormInput required name='lastName' label= 'Last name' />
          <FormInput required name='address1' label= 'Adress' />
          <FormInput required name='email' label= 'Email' />
          <FormInput required name='city' label= 'City' />
          <FormInput required name='zip' label= 'ZIP / Post Code ' />
        <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Country</InputLabel>
            <Select value={} fullWidth onChange={}>
              <MenuItem key={} value={}>
                Select
              </MenuItem>
            </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Country</InputLabel>
            <Select value={} fullWidth onChange={}>
              <MenuItem key={} value={}>
                Select
              </MenuItem>
            </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Country</InputLabel>
            <Select value={} fullWidth onChange={}>
              <MenuItem key={} value={}>
                Select
              </MenuItem>
            </Select>
        </Grid>
        </Grid>
      </form>
    </FormProvider>
    </>
  )
}

export default AdressForm;