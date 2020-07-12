import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const [request, setRequest] = useState({})
  
  const { id } = useParams();

  useEffect(() => {
    const allRequests = JSON.parse(localStorage.getItem('requests'));
    setRequest(allRequests.find(request => request.reqId === id));
  }, [])

  const isId = () => {
    if(request) return (
      <>
        <div>
          <h3>User: {request.name}</h3>
          <h3>Email: {request.email}</h3>
          <h3>Phone Number: {request.phone}</h3>
          <h3>Description: {request.description}</h3>
        </div> 
        <div>
          <h3>Expected wait time: </h3>
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
    <>
      {isId()}
    </>
  )
}
