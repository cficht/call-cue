import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  make: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '30px',
    margin: '0 auto',
    border: '2px solid black',
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'lightgray',
    height: 100,
    width: '40%',
    padding: '30px',
  },
  check: {
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
    height: 100,
    width: '40%',
    padding: '30px',
  }
}));

export default function Dashboard() {
  const [requestId, setRequestId] = useState('')
  const classes = useStyles();

  return (
    <>
    <div className={classes.make}>
      <Link to="/request"><Button variant="contained" color="secondary">Make Request</Button></Link>
    </div>
    <div className={classes.check}>
      <TextField id="standard-basic" label="Request ID" value={requestId} name="name" onChange={(e) => setRequestId(e.target.value)}/>
      <br/>
      <Link to={requestId ? `/detail/${requestId}` : `/detail/null`}><Button variant="contained" color="secondary">Check Request</Button></Link>
    </div>
    <div className={classes.make}>
      <Link to="/cue"><Button variant="contained" color="secondary">Check Cue</Button></Link>
    </div>
    </> 
  )
}
