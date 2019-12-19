import axios from 'axios'

export {
  getAllTerm,
  getTermByID,
  createTerm,
  updateTerm,
  deleteOneTerm
}

let BASE_TERM = `${process.env.BASE_URL}/terms`

function getAllTerm(accessToken) {
  return axios.get(BASE_TERM, {
    headers: {
      accessToken
    },
  })
}

function getTermByID(id, accessToken) {
  let url = `${BASE_TERM}/${id}`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}

function createTerm({
  name,
  startTime,
  endTime,
  subject, 
  registSTime,
  registETime
}, accessToken) {
  return axios.post(BASE_TERM, {
    name,
    startTime,
    endTime,
    subject, 
    registSTime,
    registETime
  }, {
    headers: {
      accessToken
    },
  })
}

function updateTerm(id, {
  name,
  startTime,
  endTime,
  subject, 
  registSTime,
  registETime
}, accessToken) {
  let url = `${BASE_TERM}/${id}`
  console.log(url,{
    name,
    startTime,
    endTime,
    subject, 
    registSTime,
    registETime
  }, accessToken)
  console.log(axios)
  return axios.put(url, {
    name,
    startTime,
    endTime,
    subject, 
    registSTime,
    registETime
  }, {
    headers: {
      accessToken
    },
  })
}

function deleteOneTerm(id, accessToken) {
  let url = `${BASE_TERM}/${id}`
  return axios.delete(url, {
    headers: {
      accessToken
    },
  })
}
