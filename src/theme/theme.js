import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  theme.typography.h1 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
  };

  theme.typography.h2 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  };

  theme.typography.body2 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  };

  export default theme;