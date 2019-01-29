import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'

Vue.use(Vuex)

const Head = {
  nameSpaced: true,
  state: { title: 'Welcome to Gurutaka Portfolio' },
  mutations: {},
  actions: {},
  getters: {
    getTitle (state, getters, rootState) {
      return state.title
    }
  }
}

const About = {
  nameSpaced: true,
  state: {
    accounts: [
      {
        stackClass: '',
        iconClasses: ['fab fa-twitter fa-2x'],
        url: 'https://twitter.com/',
        color: 'color:#1da1f2'
      },
      {
        stackClass: '',
        iconClasses: ['fab fa-github fa-2x'],
        url: 'https://github.com/',
        color: 'color:#000000'
      },
      {
        stackClass: 'fa-stack',
        iconClasses: [
          'fa fa-square fa-stack-2x',
          'fa fa-search fa-stack-1x fa-inverse fa-2x'
        ],
        url: 'https://qiita.com',
        color: 'color:#4cb10d'
      }
    ],
    iconPass: require('../assets/icon.jpg')
  },
  mutations: {},
  actions: {},
  getters: {
    getAccounts (state, getters, rootState) {
      return state.accounts
    },
    getIconPass (state, getters, rootState) {
      return state.iconPass
    }
  }
}

const Works = {
  nameSpaced: true,
  state: {
    work: [
      {
        title: '',
        imgSrc: require('@/assets/…'),
        tags: ['JavaScript', 'php'],
        date: '',
        txt:
          '',
        urlTitle:
          '',
        url: ''
      },
    ],
    isShow: false
  },
  mutations: {
    show (state) {
      state.isShow = true
    },
    hide (state) {
      state.isShow = false
    }
  },
  actions: {
    showModal ({ state, commit, rootState }, id) {
      commit('show')
      commit('setModalInfo', state.work[id])
    },
    hideModal ({ commit }) {
      commit('hide')
    }
  },
  getters: {
    getWorks (state, getters, rootState) {
      return state.work
    },
    getModalShow (state, getters, rootState) {
      return state.isShow
    }
  }
}

const Modal = {
  nameSpaced: true,
  state: {
    modalInfo: {
      title: '',
      date: '',
      text: '',
      imgSrc: '',
      urlTitle: '',
      url: ''
    }
  },
  mutations: {
    setModalInfo (state, workInfo) {
      state.modalInfo.title = workInfo.title
      state.modalInfo.date = workInfo.date
      state.modalInfo.text = workInfo.txt
      state.modalInfo.imgSrc = workInfo.imgSrc
      state.modalInfo.url = workInfo.url
      state.modalInfo.urlTitle = workInfo.urlTitle
    }
  },
  actions: {},
  getters: {
    getModalInfo (state, getters, rootState) {
      return state.modalInfo
    }
  }
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  modules: {
    Head,
    About,
    Works,
    Modal
  }
})
