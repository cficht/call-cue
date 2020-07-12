import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getRequests } from '../services/cue';

const useStyles = makeStyles(() => ({
  all: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '30px',
    margin: '0 auto',
    border: '2px solid black',
    borderRadius: 20,
    color: 'black',
    backgroundColor: 'lightgray',
    height: 400,
    width: '40%',
  }
}));

export default function All() {
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    getRequests()
      .then(res => setAllRequests(res.Items));
  }, [])

  const classes = useStyles();

  const requestNodes = allRequests.map(request => { return (
    <div className={classes.all}>
        <div>
          <h3>User: {request.CustomerName}</h3>
          <h3>IssueId: {request.IssueId}</h3>
          <h3>Phone Number: {request.CustomerPhoneNumber}</h3>
          <h3>Description: {request.CustomerIssueDescription}</h3>
        </div> 
        <div>
          <h3>Creation Date: {new Date(Number(request.CustomerIssueCreateDate)).toLocaleString()} </h3>
        </div>
    </div>
  )
  })

  return (
    <div>
      {requestNodes}
    </div>
  )
}
