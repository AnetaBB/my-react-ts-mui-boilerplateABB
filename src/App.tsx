import { ThemeProvider, useTheme } from '@material-ui/core';

import { Container } from 'app/container/Container';

import { useStyles } from './App.styles';

export const App = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
};
