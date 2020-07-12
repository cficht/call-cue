import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import shortId from 'shortid';
import { useHistory } from 'react-router-dom';
import { postRequest, getRequests } from '../services/cue';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
  req: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '30px',
    margin: '0 auto',
    border: '2px solid black',
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'lightgray',
    height: 400,
    width: '40%',
    padding: '30px',
  }
}));

export default function Request() {
  const [request, setRequest] = useState({
    reqId: '',
    name: '',
    email: '',
    phone: '',
    description: ''
  })
  const [allRequests, setAllRequests] = useState([]);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    getRequests()
      .then(res => setAllRequests(res.Items));
    setRequest({...request, reqId: shortId.generate()})
  }, [])

  const handleClick = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };
  const handleChange = (e) => {
    setRequest({...request, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(request).filter(field => field.length < 1).length > 0) handleClick();
    else {
      const obj = {
        CueId: 'cue_id',
        CustomerIssueCreateDate: Date.now(),
        CustomerIssueDescription: request.description,
        CustomerName: request.name,
        CustomerPhoneNumber: request.phone,
        IssueId: request.reqId
      }
      postRequest(obj)
        .then(() => history.push(`/detail/${request.reqId}`));
    }
  }

  return (
    <div className={classes.req}>
      <TextField id="standard-basic" label="Name" value={request.name} name="name" onChange={handleChange}/>
      <TextField id="standard-basic" label="Email" value={request.email} name="email" onChange={handleChange}/>
      <TextField id="standard-basic" label="Phone Number" value={request.phone} name="phone" onChange={handleChange}/>
      <br/>
      <TextField id="outlined-multiline-static" label="Description" multiline rows={4} variant="outlined" value={request.description} name="description" onChange={handleChange}/>
      <br/>
      <Button variant="contained" color="secondary" onClick={handleSubmit}>Request</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">Please enter all information!</Alert>
      </Snackbar>
    </div>
  )
}
