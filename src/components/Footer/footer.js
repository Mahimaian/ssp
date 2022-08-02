import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import '../Footer/footer.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Footer extends React.Component {
  render() {
    return (
      <div className='footer_div'>
        <Grid container>
          <Grid item xs={4}>
            <Item>Privacy Policy</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Brought you by JMaas Team</Item>
          </Grid>
          <Grid item xs={4}>
            <Item> 
              <a href="mailto:CIBEE.Pilot-Build-IaaS@de.bosch.com">Contact us</a> 
            </Item>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;
