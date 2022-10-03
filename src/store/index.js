import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    data: []
  },
  getters: {
    showData(state) {
      return state.data.filter(data => data.UID === '61df26a9d083a3542803f5cd')[0]
    }
  },
  mutations: {
    initData(state, data) {
      state.data = data
    }
  },
  actions: {
    getData(context) {
      axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
      .then(({data}) => {
        context.commit('initData', data)
      })
    }
  },
  modules: {
  }
})
