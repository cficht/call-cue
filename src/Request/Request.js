import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import shortId from 'shortid';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

  useEffect(() => {
    const reqs = JSON.parse(localStorage.getItem('requests'));
    setAllRequests({...request, reqId: shortId.generate()})
    console.log(reqs);
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
      localStorage.setItem('requests', JSON.stringify([...allRequests, request]))
    }
  }

  return (
    <div className="request">
      <TextField id="standard-basic" label="Name" value={request.name} name="name" onChange={handleChange}/>
      <TextField id="standard-basic" label="Email" value={request.email} name="email" onChange={handleChange}/>
      <TextField id="standard-basic" label="Phone Number" value={request.phone} name="phone" onChange={handleChange}/>
      <TextField id="outlined-multiline-static" label="Description" multiline rows={4} variant="outlined" value={request.description} name="description" onChange={handleChange}/>
      <Button variant="contained" color="secondary" onClick={handleSubmit}>Request</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">Please enter all information!</Alert>
      </Snackbar>
    </div>
  )
}
