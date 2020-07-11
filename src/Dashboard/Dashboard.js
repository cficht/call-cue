import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Dashboard() {
  const [requestId, setRequestId] = useState('')

  return (
    <div>
      <Link to="request"><Button variant="contained" color="secondary">Make Request</Button></Link>
      <TextField id="standard-basic" label="Request ID" value={requestId} name="name" onChange={(e) => setRequestId(e.target.value)}/>
      <Link to={`detail/${requestId}`}><Button variant="contained" color="secondary">Check Request</Button></Link>
    </div>
  )
}
