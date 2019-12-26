import axios from 'axios'

export default {

  postsUsuarioId (idUsuario) {
    return axios.get(`/${idUsuario}/posts`)
      .then(response => {
        return response.data
      })
  },

  fetchSingleMovie (id) {
    return axios.get('&i=' + id)
      .then(response => {
        return response.data
      })
  }
}
