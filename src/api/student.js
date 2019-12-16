import axios from 'axios'

export {
  getAllStudent,
  getStudentByID,
  createStudent,
  updateStudent,
  deleteOneStudent
}

let BASE_USER = `${process.env.BASE_URL}/students`

function getAllStudent() {
  return axios.get(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function getStudentByID(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.get(url,{
    headers: {
      accessToken
    },
  })
}

function createStudent({
  name,
  student_id,
  dateOfBirth,
  phone,
  email
}, accessToken){
    return axios.post(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function updateStudent({
  name,
  student_id,
  dateOfBirth,
  phone,
  email
}, accessToken){
  let url = `${BASE_USER}/${id}`
    return axios.put(url,{
    headers: {
      accessToken
    },
  })
}

function deleteOneStudent(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.delete(url,{
    headers: {
      accessTokens
    },
  })
}