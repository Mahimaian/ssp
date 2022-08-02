  import React from "react";
  import { 
    Grid,
    Paper
  } from '@mui/material';
  import { 
      Notifications as NotificationsIcon, 
      PlayCircleOutline as PlayCircleOutlineIcon, 
      PostAdd as PostAddIcon, 
      Schedule as ScheduleIcon, 
      Settings as SettingsIcon, 
      SettingsApplications as SettingsApplicationsIcon, 
      Update as UpdateIcon
  } from '@mui/icons-material';

  import Carousel from 'react-multi-carousel';
  import 'react-multi-carousel/lib/styles.css';
  import './feature.css';
  import Clock from 'react-live-clock';
  import Form from "../Form/form";

  const feature_lists = [
    { type: 'postadd', name: 'Create Instance', description: 'Create an instance on JMaaS', dialog: 'createInstanceDialog' },
    { type: 'update', name: 'Schedule Update', description: 'Schedule update of an instance on JMaaS', dialog: 'scheduleUpdateDialog' },
    { type: 'schedule', name: 'Schedule Restart', description: 'Schedule restart of an instance on JMaaS', dialog: 'scheduleRestartDialog' },
    { type: 'settings', name: 'Configure Instance', description: 'Enable SSO, JDK 11, Java Parameters', dialog: 'configureInstanceDialog' },
    { type: 'notifications', name: 'Configure Alerts', description: 'Configure Alerts of an instance on JMaaS', dialog: 'configureAlertDialog' },
    { type: 'playcircle', name: 'Start Jenkins', description: 'Start a jenkins instance on JMaaS', dialog: 'startJenkinsDialog' },
    { type: 'settingsapplications', name: 'Delete Instance', description: 'Delete a jenkins instance in JMaaS', dialog: 'deleteInstanceDialog' },

  ];

  const typesIcons = {
    postadd: <PostAddIcon />,
    update: <UpdateIcon />,
    schedule: <ScheduleIcon />,
    settings: <SettingsIcon />,
    notifications: <NotificationsIcon />,
    playcircle: <PlayCircleOutlineIcon />,
    settingsapplications: <SettingsApplicationsIcon />,
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };



  function getIconByType(type = 'postadd') {
    const icon = typesIcons[type];
    const iconWithStyles = React.cloneElement(icon, {
      style: {
        color: '#1D64A8',
        fontSize: '75px',
      },
    });
    return iconWithStyles;
  }


  class Feature extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tag: null,
      };
    }
    HandleDialogChange = (dialog, open) => {
      let { tag, dialogOpen, event } = this.state;
      tag = dialog;
      event = open;
      dialogOpen = open;
      this.setState({ tag, event, dialogOpen });
      // console.log(tag, event, dialogOpen);
    };
    handleDateChange = date => {
      this.setState({
        selectedDate: date
      })
    }
    render() {
    return (
      <div className='carousel_div'>
        <React.Fragment>
          <Grid container className='carousel_grid'>
            <Grid item xs={4} textAlign={'left'} paddingLeft={3} fontSize={22} variant="h2">
              Welcome to JMaas Self Service
            </Grid>
              <Grid item xs={4} textAlign={'center'}></Grid>
                <Grid item xs={4} textAlign={'right'} paddingRight={5} fontSize={17} variant="h4"  size="sm">
                Timezone: CEST(Current Time:
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Berlin'} />)
                </Grid>
              </Grid>
            <Carousel 
            responsive={responsive}
            infinite={true}
            totalSlides={5}
            className='carousel_hero'
            >
              {feature_lists.map(f => (
              <Paper className='carousel_cards' onClick={() => this.HandleDialogChange(f.dialog, true)}
              >
                {getIconByType(f.type)}
                <h3 id={`${f.type}`}>{f.name}</h3>
                <p>{f.description}</p>
              </Paper>
              ))}
            </Carousel>
            {this.state.event ? <Form event={this.state.tag} /> : ''}
        </React.Fragment>  
        </div>   
    );
    }
  }
  export default Feature;
