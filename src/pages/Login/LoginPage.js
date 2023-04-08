import React, { useState } from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundColor: '#0d102d',
  },

  leftPanel: {
    backgroundColor: '',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
  },
  logo: {
    /* logo 3 */

    width: '261px',
    height: '263px',
    marginBottom: theme.spacing(2),
  },
  rightPanel: {
    display: 'flex',
    backgroundColor: '#0d102d',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  loginHeader: {
    color: '#00E4FF',
    fontSize: '38px',
    fontWeight: '900',
    marginBottom: theme.spacing(4),
  },
  caption: {
    fontSize: '16px',
    fontWeight: '400',
    color: ' #EEEEEE ',
    marginBottom: theme.spacing(4),
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputField: {
    marginBottom: theme.spacing(2),
    width: '420px',
    // height: '48px',
    backgroundColor: '#0d102d',
    color: 'white',
    border: '2px solid #131740',
    borderRadius: '16px',
    [theme.breakpoints.down('md')]: {
      width: '350px',
    },
    '& input::placeholder': {
      color: 'white',
    },
  },
  forgetPassword: {
    display: 'flex',
    alignSelf: 'end',
    marginRight: '140px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginRight: '0px',
    },
  },
  loginButton: {
    width: '420px',
    height: '56px',
    borderRadius: '16px',
    padding: '16px 60px 16px 60px',
    marginBottom: theme.spacing(4),
    background: 'linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%)',
    [theme.breakpoints.down('md')]: {
      width: '350px',
    },
  },
  socialLogin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    gap: '5px',
  },
  socialButton: {
    margin: theme.spacing(1),
    border: '1px solid #ccc',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    fontSize: '1.5rem',
  },
  button: { display: 'flex', gap: '5px' },
  divider: {
    marginBottom: theme.spacing(3),
    width: '400px',
    color: '#131740',
    borderBottom: `1px solid #131740`,
    [theme.breakpoints.down('md')]: {
      width: '320px',
    },
  },
  continueText: {
    color: '#aaa',
    fontWeight: 'bold',
    margin: '0 16px',
  },
  dividers: {
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    height: '1px',
    width: '130px',
    margin: '10px 0',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: '20px 10px',
  },
  rightCont: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: '20px 10px',
  },
}));

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            // background: `linear-gradient(to top left, #0D102D 83%, #2E96B7 17%)`,
            background: `linear-gradient(300deg, rgba(13,16,45,1) 35%, rgba(19,29,126,1) 95%)`,
          }}
        >
          <Grid>
            <IconButton style={{ display: 'flex' }}>
              <HomeIcon style={{ color: '#ffff' }} />
            </IconButton>
            <Grid className={classes.leftPanel}>
              <img src="/favicon.ico" alt="Logo" className={classes.logo} />
              {isMdScreen ? null : (
                <Grid className={classes.textContainer}>
                  <Typography
                    style={{
                      color: '#7D7F96',
                      fontSize: '14px',
                      fontWeight: '400',
                    }}
                  >
                    © 2022 Chronus Sports - Powered By
                  </Typography>
                  <Typography
                    style={{
                      color: '#00E4FF',
                      fontSize: '14px',
                      fontWeight: '400',
                    }}
                  >
                    {' '}
                    Mooh!Tech
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          className={classes.rightPanel}
          // style={{ height: '100vh', padding: 10 }}
        >
          <Grid className={classes.loginHeader}>BEM VINDO!</Grid>
          <Grid className={classes.caption}>
            Por favor, faç login ou registre-se.
          </Grid>
          <Grid className={classes.button} style={{}}>
            <Grid
              style={{
                padding: '10px',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#FFFFFF',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {' '}
              Login
            </Grid>
            <Grid
              style={{
                padding: '10px',
                //   fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#747474',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {' '}
              Register
            </Grid>
          </Grid>
          <hr className={classes.divider} />

          <form className={classes.form}>
            <TextField
              // id="email"
              // label="Email"
              placeholder="E-mail"
              variant="outlined"
              fullWidth
              className={classes.inputField}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon style={{ color: 'white' }} />
                  </InputAdornment>
                ),
                inputProps: { style: { color: 'white' } }, // add this line
              }}
            />
            <TextField
              id="password"
              placeholder="Senha"
              variant="outlined"
              fullWidth
              className={classes.inputField}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ color: 'white' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? (
                        <VisibilityOffIcon style={{ color: 'white' }} />
                      ) : (
                        <VisibilityIcon style={{ color: 'white' }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
                inputProps: { style: { color: 'white' } }, // add this line
              }}
              type={showPassword ? 'text' : 'password'}
            />
            {isMdScreen ? null : (
              <Grid className={classes.forgetPassword}>
                <Button
                  style={{
                    color: '#A3A3A3',
                    fontWeight: 400,
                    fontSize: '13px',
                  }}
                >
                  Esqueci minha senha
                </Button>
              </Grid>
            )}

            <Button
              variant="contained"
              color="primary"
              className={classes.loginButton}
            >
              ENTRAR
            </Button>
            <Grid
              className="otherButton"
              style={{ display: 'flex', gap: '5px' }}
            >
              <Grid>
                {' '}
                <Divider className={classes.Dividers} />
              </Grid>
              <Grid>
                {' '}
                <Typography variant="body2" className={classes.continueText}>
                  continuar com
                </Typography>
              </Grid>
              <Grid>
                {' '}
                <Divider className={classes.Dividers} />
              </Grid>
            </Grid>

            <Grid className={classes.socialLogin}>
              <Grid className={classes.socialButton}>
                <IconButton>
                  <FacebookIcon
                    color="primary"
                    className={classes.socialIcon}
                  />
                </IconButton>
              </Grid>
              <Grid className={classes.socialButton}>
                <IconButton>
                  <InstagramIcon color="error" className={classes.socialIcon} />
                </IconButton>
              </Grid>
              <Grid className={classes.socialButton}>
                <IconButton>
                  <GoogleIcon color="primary" className={classes.socialIcon} />
                </IconButton>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
