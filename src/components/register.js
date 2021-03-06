import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState} from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  Logo from '../assets/scholarship.png';

const theme = createTheme();

export default function Register() {
  const [User,setUser]=useState({
    firstName:'',
    lastName:'',
    age:0,
    education:'',
    country:'',
    email:'',
    password:''

  });
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = event.currentTarget;
    console.log({
      firstName:data.get('firstName'),
      lastName:data.get('lastName'),
      age:data.get('age'),
      education:data.get('education'),
      country:data.get('country'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.white' }} src={Logo}>
          
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  color="warning"
                  autoFocus
                  
                  onChange={handleSubmit}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  color="warning"
                  
                  onChange={handleSubmit}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="family-name"
                  color="warning"
                  onChange={handleSubmit}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  required
                  fullWidth
                  id="Level of Education"
                  label="Level of Education"
                  name="Level of Education"
                  autoComplete="family-name"
                  color="warning"
                  value={User.education}
                  onChange={handleSubmit}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Country"
                  label="Country"
                  name="country"
                  autoComplete="Country"
                  color="warning"
                  value={User.country}
                  onChange={handleSubmit}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color="warning"
                  value={User.email}
                  onChange={handleSubmit}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  
                  id="password"
                  autoComplete="new-password"
                  color="warning"
                  value={User.password}
                  onChange={handleSubmit}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="warning"
              onClick={handleSubmit}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}