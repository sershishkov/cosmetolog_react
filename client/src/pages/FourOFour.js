import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import Image_404 from '../images/404/404_1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '400px',
  },
  wrapImg: {
    width: 404,
    height: 404,
    margin: 'auto',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
}));

function FourOFour() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify='center'
      alignItems='center'
    >
      <Grid item className={classes.wrapImg}>
        <img src={Image_404} alt='404' />
      </Grid>
    </Grid>
  );
}

export default FourOFour;
