import axios from 'axios'//library(copy)

export {
  getAllUser,
  checkUserPassword,
  getUserByID,
  getUserByAccessToken
}

let BASE_USER = `${process.env.BASE_URL}/users`


//call api
function getAllUser(accessToken) {
  return axios.get(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function getUserByID(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.get(url,{
    headers: {
      accessToken
    },
  })
}
function getUserByAccessToken(accessToken){
  let url = `${BASE_USER}/${accessToken}`
  return axios.get(url,{
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
