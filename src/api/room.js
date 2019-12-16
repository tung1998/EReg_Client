import axios from 'axios'

export {
  getAllRoom,
  getRoomByID,
  createRoom,
  updateRoom,
  deleteOneRoom
}

let BASE_USER = `${process.env.BASE_URL}/rooms`

function getAllRoom() {
  return axios.get(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function getRoomByID(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.get(url,{
    headers: {
      accessToken
    },
  })
}

function createRoom({
  room_id,
  buiding,
  seats
}, accessToken){
    return axios.post(BASE_USER,{
    headers: {
      accessToken
    },
  })
}

function updateRoom({
  room_id,
  buiding,
  seats
}, accessToken){
  let url = `${BASE_USER}/${id}`
    return axios.put(url,{
    headers: {
      accessToken
    },
  })
}

function deleteOneRoom(id,accessToken){
  let url = `${BASE_USER}/${id}`
  return axios.delete(url,{
    headers: {
      accessToken
    },
  })
}