import axios from 'axios'

export {
  getAllShift,
  getShiftByID,
  createShift,
  updateShift,
  deleteOneShift
}

let BASE_SHIFT = `${process.env.BASE_URL}/shifts`

function getAllShift(accessToken) {
  return axios.get(BASE_SHIFT,{
    headers: {
      accessToken
    },
  })
}

function getShiftByID(id,accessToken){
  let url = `${BASE_SHIFT}/${id}`
  return axios.get(url,{
    headers: {
      accessToken
    },
  })
}

function createShift({
  subjectID,
  roomID,
  time,
  studentID,
  term
}, accessToken){
    return axios.post(BASE_SHIFT,{
      subjectID,
      roomID,
      time,
      studentID,
      term
    }, {
    headers: {
      accessToken
    },
  })
}

function updateShift({
  subjectID,
  roomID,
  time,
  studentID,
  term
}, accessToken){
  let url = `${BASE_SHIFT}/${id}`
  console.log(url,{
  subjectID,
  roomID,
  time,
  studentID,
  term  }, accessToken)
  console.log(axios)
    
    return axios.put(url,{
      subjectID,
      roomID,
      time,
      studentID,
      term
    }, {
    headers: {
      accessToken
    },
  })
}

function deleteOneShift(id,accessToken){
  let url = `${BASE_SHIFT}/${id}`
  return axios.delete(url,{
    headers: {
      accessToken
    },
  })
}