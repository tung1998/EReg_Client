import axios from 'axios'

export {
  getAllSubject,
  getSubjectByID,
  createSubject,
  updateSubject,
  deleteOneSubject, 
  importFile
}

let BASE_USER = `${process.env.BASE_URL}/subjects`

function getAllSubject() {
  return axios.get(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function getSubjectByID(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.get(url,{
    headers: {
      accessToken
    },
  })
}

function createSubject({
  subject_id,
  subject_name
}, accessToken){
    return axios.post(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function updateSubject({
  subject_id,
  subject_name
}, accessToken){
  let url = `${BASE_USER}/${id}`
    return axios.put(url,{
    headers: {
      accessToken
    },
  })
}

function deleteOneSubject(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.delete(url,{
    headers: {
      accessToken
    },
  })
}