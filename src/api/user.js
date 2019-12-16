import axios from 'axios' //library(copy)

export {
  getAllUser,
  checkUserPassword,
  getUserByID,
  getUserByAccessToken,
  checkAccessToken,
  deleteAccessToken
}

let BASE_USER = `${process.env.BASE_URL}/users`


//call api
function getAllUser(accessToken) {
  return axios.get(BASE_USER, {
    headers: {
      accessToken
    },
  })
}

function getUserByID(id, accessToken) {
  let url = `${BASE_USER}/${id}`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}

function getUserByAccessToken(accessToken) {
  let url = `${BASE_USER}/${accessToken}`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}

function checkAccessToken(accessToken) {
  let url = `${BASE_USER}/checkAccessToken`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}

function checkUserPassword({
  username,
  password
}, accessToken) {
  let url = `${BASE_USER}/checkPassword`
  return axios.post(url, {
    username,
    password
  }, {
    headers: {
      accessToken
    },
  })
}

function deleteAccessToken(accessToken) {
  let url = `${BASE_USER}/deleteAccesstoken`
  return axios.post(url, {}, {
    headers: {
      accessToken
    },
  })
}
