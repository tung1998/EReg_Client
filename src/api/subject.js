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
  subjectID,
  name
}, accessToken){
    return axios.post(BASE_SUBJECT,{
      subjectID,
      name
    },{
      headers: {
        accessToken
    },
  })
}

function updateSubject({
  subjectID,
  name
}, accessToken){
  let url = `${BASE_SUBJECT}/${id}`
  console.log(url,{
    subjectID,
    name
  }, accessToken)
  console.log(axios)
    return axios.put(url,{
      subjectID, 
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