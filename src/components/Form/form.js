/* eslint-disable eqeqeq */
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  TextField
}from '@mui/material';
import './form.css';
import { useState } from 'react';
import './form.css';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const elements = [
  {
    event: 'scheduleUpdateDialog',
    head: 'Schedule Update for an Instance',
    fields: [
      { id: 'Cluster', options: [{ key: 'Production' }, { key: 'Testing' }, { key: 'Develpment' }] },
      { id: 'Instance Name', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { id: 'Current jenkins version', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { id: 'Jenkins Version', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { id: 'Select Date and Time', dualBox: true, options: [ 
          {key: '00:00'},
          {key: '01:00'},
          {key: '02:00'},
          {key: '03:00'},
          {key: '04:00'},
          {key: '05:00'},
          {key: '06:00'},
          {key: '07:00'},
          {key: '08:00'},
          {key: '09:00'},
          {key: '10:00'},
          {key: '11:00'},
          {key: '12:00'},
          {key: '13:00'},
          {key: '14:00'},
          {key: '15:00'},
          {key: '16:00'},
          {key: '17:00'},
          {key: '18:00'},
          {key: '19:00'},
          {key: '20:00'},
          {key: '21:00'},
          {key: '22:00'},
          {key: '23:00'},
        ] },
    ],
    buttons: [
      { button: 'Schedule', primary: false },
      { button: 'Cancel', primary: true },
    ],
  },
  {
    event: 'createInstanceDialog',
    head: 'Coming soon',
    description: 'This feature will be available soon',
    buttons: [
      { button: 'Cancel', primary: true },
    ],
  },
  {
    event: 'scheduleRestartDialog',
    head: 'Coming soon',
    description: 'This feature will be available soon',
    buttons: [
      { button: 'Cancel', primary: true },
    ],
  },
  {
    event: 'configureInstanceDialog',
    head: 'Coming soon',
    color: '#005691',
    description: 'This feature will be available soon',
    buttons: [
      { button: 'Cancel', primary: true },
    ],
  },
  {
    event: 'configureAlertDialog',
    head: 'Coming soon',
    description: 'This feature will be available soon',
    buttons: [
      { button: 'Cancel', primary: true },
    ],
  },
  
  {
    event: 'startJenkinsDialog',
    head: 'Coming soon',
    description: 'This feature will be available soon',
    buttons: [
      { button: 'Cancel' },
    ],
  },
  {
    event: 'deleteInstanceDialog',
    head: 'Coming soon',
    description: 'This feature will be available soon',
    buttons: [
      { button: 'Cancel', primary: true },
    ],
  },
];
export default function Form(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [openDialogue, setOpen]= useState(true);

  return elements.map(ele => (
    <div>
      {console.log(props.event)}
      {props.event == ele.event ? (
        <Dialog 
        fullWidth={true}
        maxWidth="md" 
        open={openDialogue}
        >
          <DialogTitle className='dialog_title'
          color={"Blue"}
                    style={{
                      color: 'rgb(0, 86, 145)',
                      fontWeight: '500',
                      fontSize: 'calc(21px)',
                      borderWidth:'0.5px',
                      borderBottomStyle:'solid',
                      borderBottomColor:'rgba(0, 0, 0, 0.15)'
                  }}
                  >{ele.head}</DialogTitle>
          <DialogContent className='dialog_cont'>
              {ele.description ? <DialogContentText
              style={{ 
                fontSize: '1.1rem', 
                color: '#6E6E6E', 
                marginTop: '25px',
                fontFamily: "Arial",
              }}
             >
              {ele.description}
              </DialogContentText> : ''}
            {ele.fields?.map(fielding => (
              <Grid container 
              style={{
               marginTop:'10px',
               marginBottom:'10px'
            }}
            spacing={3}>
                <Grid item md={4}
>
                  {fielding.id}
                </Grid>
                {fielding.dualBox ? (
                            <>
                              <Grid item md={4}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                  <DesktopDatePicker                             
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  minDate={new Date()}
                                  maxDate={new Date().setDate(365)}
                                  showDisabledMonthNavigation
                                  renderInput={params => 
                                  <TextField {...params} />} />{' '}
                                </LocalizationProvider>
                              </Grid>
                              <Grid item md={4}>
                                <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                                  {fielding.options.map(optioning => (
                                    <MenuItem value={optioning.key}>{optioning.key}</MenuItem>
                                  ))}
                                </Select>
                              </Grid>
                            </>
                          ) : (
                            <Grid item md={8}>
                              <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                                {fielding.options.map(optioning => (
                                  <MenuItem value={optioning.key}>{optioning.key}</MenuItem>
                                ))}
                              </Select>
                            </Grid>
                          )}
                        </Grid>
                      ))}
          </DialogContent>
          <DialogActions>
          {ele.buttons?.map(buttoning => (
                        <Button
                          onClick={() => {
                            setOpen(false);
                          }}>
                          {buttoning.button}
                        </Button>
                      ))}
            {/* <Button onClick={() => this.HandleDialogChange('scheduleUpdateDialog', false)}>Schedule</Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button> */}
          </DialogActions>
        </Dialog>
      ) : (
        ''
      )}
    </div>
  ));
}


