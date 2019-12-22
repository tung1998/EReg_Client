import axios from 'axios'

export {
  getAllSubject,
  getSubjectByID,
  createSubject,
  updateSubject,
  deleteOneSubject, 
  importFile
}

let BASE_SUBJECT = `${process.env.BASE_URL}/subjects`

function getAllSubject(accessToken) {
  return axios.get(BASE_SUBJECT,{
    headers: {
      accessToken
    },
  })
}

function getSubjectByID(id,accessToken){
  let url = `${BASE_SUBJECT}/${id}`
  return axios.get(url,{
    headers: {
      accessToken
    },
  })
}

function createSubject({
  subjectCode,
  name
}, accessToken){
    return axios.post(BASE_SUBJECT,{
      subjectCode,
      name
    },{
      headers: {
        accessToken
    },
  })
}

function updateSubject(id, {
  subjectCode,
  name
}, accessToken){
  let url = `${BASE_SUBJECT}/${id}`
    return axios.put(url,{
      subjectCode, 
      name
    }, {
      headers: {
        accessToken
    },
  })
}

function deleteOneSubject(id,accessToken){
  let url = `${BASE_SUBJECT}/${id}`
  return axios.delete(url,{
    headers: {
      accessToken
    },
  })
}