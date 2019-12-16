import axios from 'axios'

export {
  getAllStudentSubject,
  getStudentSubjectByID,
  createStudentSubject,
  updateStudentSubject,
  deleteOneStudentSubject
}

let BASE_USER = `${process.env.BASE_URL}/studentSubjects`

function getAllStudentSubject() {
  return axios.get(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function getStudentSubjectByID(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.get(url,{
    headers: {
      accessToken
    },
  })
}

function createStudentSubject({
  student_id,
  subject_id,
  term
}, accessToken){
    return axios.post(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function updateStudentSubject({
  student_id,
  subject_id,
  term
}, accessToken){
  let url = `${BASE_USER}/${id}`
    return axios.put(url,{
    headers: {
      accessToken
    },
  })
}

function deleteOneStudentSubject(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.delete(url,{
    headers: {
      accessToken
    },
  })
}