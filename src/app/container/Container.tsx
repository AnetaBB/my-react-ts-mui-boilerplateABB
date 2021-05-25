import React from 'react';
import { useTheme } from '@material-ui/core';

import { Okno } from 'app/okno/Okno';

import { ContainerProps } from './Container.types';
import { useStyles } from './Container.styles';

export const Container: React.FC<ContainerProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.wrapper}>
      <Okno />
    </div>
  );
};
