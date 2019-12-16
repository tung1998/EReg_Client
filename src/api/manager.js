import axios from 'axios'

export {
  getAllManager,
  getManagerByID,
  createManager,
  updateManager,
  deleteOneManager
}

let BASE_USER = `${process.env.BASE_URL}/managers`

function getAllManager() {
  return axios.get(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function getManagerByID(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.get(url,{
    headers: {
      accessToken
    },
  })
}

function createManager({
  name,
  dateOfBirth,
  position,
  phone,
  email
}, accessToken){
    return axios.post(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function updateManager({
  name,
  dateOfBirth,
  position,
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

function deleteOneManager(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.delete(url,{
    headers: {
      accessToken
    },
  })
}