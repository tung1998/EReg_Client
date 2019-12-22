import axios from 'axios'

export {
  getAllTermSubStu,
  getTermSubStuByID,
  createTermSubStu,
  updateTermSubStu,
  deleteOneTermSubStu,
  importFile
}

let BASE_TERMSUBSTU = `${process.env.BASE_URL}/termSubStus`

function getAllTermSubStu(accessToken) {
  return axios.get(BASE_TERMSUBSTU, {
    headers: {
      accessToken
    },
  })
}

function getTermSubStuByID(id, accessToken) {
  let url = `${BASE_TERMSUBSTU}/${id}`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}

function createTermSubStu({
  termID,
  subjectID,
  subjectName,
  student
}, accessToken) {
  return axios.post(BASE_TERMSUBSTU, {
    termID,
    subjectID,
    subjectName,
    student
  }, {
    headers: {
      accessToken
    },
  })
}

function updateTermSubStu(id, {
  termID,
  subjectID,
  subjectName,
  student
}, accessToken) {
  let url = `${BASE_TERMSUBSTU}/${id}`
  console.log(url, {
    termID,
    subjectID,
    subjectName,
    student
  }, accessToken)
  console.log(axios)

  return axios.put(url, {
    termID,
    subjectID,
    subjectName,
    student
  }, {
    headers: {
      accessToken
    },
  })
}

function deleteOneTermSubStu(id, accessToken) {
  let url = `${BASE_TERMSUBSTU}/${id}`
  return axios.delete(url, {
    headers: {
      accessToken
    },
  })
}

function importFile(id, formData, accessToken) {
  let url = `${BASE_TERMSUBSTU}/importFile/${id}`
  return axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      accessToken
    },
  })
}
