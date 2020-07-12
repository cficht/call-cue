export const postRequest = body => {
  return fetch(`http://davidtmp-env.eba-m3rsfbhj.us-west-2.elasticbeanstalk.com/cued`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
};

export const getRequest = id => {
  return fetch(`http://davidtmp-env.eba-m3rsfbhj.us-west-2.elasticbeanstalk.com/cued/cue_id/issue/${id}`)
    .then(res => res.json())
};

export const getRequests = () => {
  return fetch('http://davidtmp-env.eba-m3rsfbhj.us-west-2.elasticbeanstalk.com/cued/cue_id/issues')
    .then(res => res.json())
};