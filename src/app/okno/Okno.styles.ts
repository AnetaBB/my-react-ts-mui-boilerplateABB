import { makeStyles } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';
import { threadId } from 'node:worker_threads';

import Pexels from '../../assets/pexels-andre-moura-7751285.jpg';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // allignItems: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '8px',
    padding: '8px',
    //  */gridTemplateRows: 'repeat(2, minmax(200px, auto))',
    // border: '5px solid purple',
    // flexWrap: 'wrap',
    // flexFlow: 'column wrap',
    /* grid-template-columns: [first] 80px [second 80px],
    grid-template-rows: [third] 80px [fourth] 80px,*/
    height: '50%',
    width: '50%',
    backgroundColor: '#B60A9A',
  },
  glass: {
    width: '100%',
    height: '100%',
    // border: '5px solid purple',
    backgroundColor: '#24CAFB',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundImage: `url(${Pexels})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  spot: {
    width: '40px',
    height: '20px',
    backgroundColor: 'yellow',
  },
}));
