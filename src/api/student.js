import axios from 'axios'

export {
  getAllStudent,
  getStudentByID,
  createStudent,
  updateStudent,
  deleteOneStudent,
  importFile,
  getCurrentInfo
}

let BASE_STUDENT = `${process.env.BASE_URL}/students`

function getAllStudent(accessToken) {
  return axios.get(BASE_STUDENT, {
    headers: {
      accessToken
    },
  })
}

function getStudentByID(id, accessToken) {
  let url = `${BASE_STUDENT}/${id}`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}

function createStudent({
  studentID,
  name,
  dateOfBirth,
  sex,
  major,
  classMajor,
  address,
  phone,
  email,
}, accessToken) {
  return axios.post(BASE_STUDENT, {
    studentID,
    name,
    dateOfBirth,
    sex,
    major,
    classMajor,
    address,
    phone,
    email
  }, {
    headers: {
      accessToken
    },
  })
}

function updateStudent(id, {
  studentID,
  name,
  dateOfBirth,
  sex,
  major,
  classMajor,
  address,
  phone,
  email
}, accessToken) {
  let url = `${BASE_STUDENT}/${id}`
  return axios.put(url, {
    studentID,
    name,
    dateOfBirth,
    sex,
    major,
    classMajor,
    address,
    phone,
    email
  }, {
    headers: {
      accessToken
    },
  })
}

function deleteOneStudent(id, accessToken) {
  let url = `${BASE_STUDENT}/${id}`
  return axios.delete(url, {
    headers: {
      accessToken
    },
  })
}

function importFile(formData, accessToken) {
  let url = `${BASE_STUDENT}/importFile`
  return axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      accessToken
    },
  })
}


function getCurrentInfo(accessToken){
  let url = `${BASE_STUDENT}/currentInfo`
  return axios.get(url, {
    headers: {
      'Content-Type': 'multipart/form-data',
      accessToken
    },
  })
}