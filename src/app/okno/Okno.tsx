import React from 'react';
import { useTheme } from '@material-ui/core';

import { OknoProps } from './Okno.types';
import { useStyles } from './Okno.styles';

export const Okno: React.FC<OknoProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.wrapper}>
      <div className={classes.glass}>
        <div className={classes.spot}></div>
        <div className={classes.spot} style={{ backgroundColor: 'green' }}></div>
      </div>
      <div className={classes.glass}>second</div>
      <div className={classes.glass}>third</div>
      <div className={classes.glass}>fourth</div>
    </div>
  );
};
