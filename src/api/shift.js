import axios from 'axios'

export {
  getAllShift,
  getShiftByID,
  createShift,
  updateShift,
  deleteOneShift
}

let BASE_USER = `${process.env.BASE_URL}/shifts`

function getAllShift() {
  return axios.get(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function getShiftByID(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.get(url,{
    headers: {
      accessToken
    },
  })
}

function createShift({
  subject_id,
  room_id,
  time,
  student_id,
  term
}, accessToken){
    return axios.post(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function updateShift({
  subject_id,
  room_id,
  time,
  student_id,
  term
}, accessToken){
  let url = `${BASE_USER}/${id}`
    return axios.put(url,{
    headers: {
      accessToken
    },
  })
}

function deleteOneShift(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.delete(url,{
    headers: {
      accessToken
    },
  })
}