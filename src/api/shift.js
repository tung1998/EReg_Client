import axios from 'axios'

export {
  getAllShift,
  getShiftByID,
  createShift,
  updateShift,
  deleteOneShift,
  getAvaiableShift,
  registerShift,
  getRegisterShiftByTerm,
  getStudent
}

let BASE_SHIFT = `${process.env.BASE_URL}/shifts`

function getAllShift(accessToken) {
  return axios.get(BASE_SHIFT, {
    headers: {
      accessToken
    },
  })
}

function getShiftByID(id, accessToken) {
  let url = `${BASE_SHIFT}/${id}`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}

function createShift({
  subjectID,
  roomID,
  time,
  shiftExam,
  studentID,
  term
}, accessToken) {
  return axios.post(BASE_SHIFT, {
    subjectID,
    roomID,
    shiftExam,
    time,
    studentID,
    term
  }, {
    headers: {
      accessToken
    },
  })
}

function updateShift(id, {
  subjectID,
  roomID,
  shiftExam,
  time,
  studentID,
  term
}, accessToken) {
  let url = `${BASE_SHIFT}/${id}`
  return axios.put(url, {
    subjectID,
    roomID,
    shiftExam,
    time,
    studentID,
    term
  }, {
    headers: {
      accessToken
    },
  })
}

function deleteOneShift(id, accessToken) {
  let url = `${BASE_SHIFT}/${id}`
  return axios.delete(url, {
    headers: {
      accessToken
    },
  })
}

function getAvaiableShift(accessToken) {
  let url = `${BASE_SHIFT}/getAvaiableShift`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}


function registerShift(shiftID, accessToken) {
  let url = `${BASE_SHIFT}/registerShift`
  return axios.post(url, {
    shiftID
  }, {
    headers: {
      accessToken
    },
  })
}


function getRegisterShiftByTerm(shiftID, accessToken) {
  let url = `${BASE_SHIFT}/getRegisterShiftByTerm/${shiftID}`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}

function getStudent(shiftID, accessToken) {
  let url = `${BASE_SHIFT}/getStudent/${shiftID}`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}
