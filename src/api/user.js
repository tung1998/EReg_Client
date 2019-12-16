import axios from 'axios'

export {
  getAllUser,
  checkUserPassword
}

let BASE_USER = `${process.env.BASE_URL}/users`

function getAllUser() {
  return axios.get(BASE_USER)
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
