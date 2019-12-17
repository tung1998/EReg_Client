import axios from 'axios'

export {
  getAllRoom,
  getRoomByID,
  createRoom,
  updateRoom,
  deleteOneRoom
}

let BASE_ROOM = `${process.env.BASE_URL}/rooms`

function getAllRoom() {
  return axios.get(BASE_ROOM, {
    headers: {
      accessToken
    },
  })
}

function getRoomByID(id, accessToken) {
  let url = `${BASE_ROOM}/${id}`
  return axios.get(url, {
    headers: {
      accessToken
    },
  })
}

function createRoom({
  name,
  address,
  computerQuantity
}, accessToken) {
  return axios.post(BASE_ROOM, {
    name,
    address,
    computerQuantity
  }, {
    headers: {
      accessToken
    },
  })
}

function updateRoom({
  room_id,
  buiding,
  seats
}, accessToken) {
  let url = `${BASE_ROOM}/${id}`
  return axios.put(url, {
    headers: {
      accessToken
    },
  })
}

function deleteOneRoom(id, accessToken) {
  let url = `${BASE_ROOM}/${id}`
  return axios.delete(url, {
    headers: {
      accessToken
    },
  })
}
