import React from 'react';
import { useTheme } from '@material-ui/core';

import { ButtonyProps } from './Buttony.types';
import { useStyles } from './Buttony.styles';

export const Buttony: React.FC<ButtonyProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div className={classes.wrapper}>Buttony</div>;
};
