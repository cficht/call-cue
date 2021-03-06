import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { getRequest } from '../services/cue';

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
    color: 'black',
    backgroundColor: 'lightgray',
    height: 400,
    width: '40%',
    padding: '30px',
  }
}));

export const Detail = () => {
  const [request, setRequest] = useState({})
  const { id } = useParams();

  useEffect(() => {
    getRequest(id)
      .then(res => setRequest(res.Item))
  }, [])

  const classes = useStyles();

  const isId = () => {
    if(request) return (
      <>
        <div>
          <h3>User: {request.CustomerName}</h3>
          <h3>IssueId: {request.IssueId}</h3>
          <h3>Phone Number: {request.CustomerPhoneNumber}</h3>
          <h3>Description: {request.CustomerIssueDescription}</h3>
        </div> 
        <div>
          <h3>Creation Date: {Date(request.CustomerIssueCreateDate)} </h3>
        </div>
      </>
    ) 
    else return (
      <div>
        <h3>Bad ID</h3>
      </div>
    )
  }

  return (
    <div className={classes.req}>
      {isId()}
    </div>
  )
}
