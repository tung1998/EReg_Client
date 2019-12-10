import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage/LoginPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      beforeEnter: beforeEnterLogin
    }
  ]
})

//suport function
function beforeEnterLogin(to, from, next) {
  console.log(1)
  // let userID = Meteor.userId()
  // if (userID) {
  //   meteorCallDefaul("user.getByID", userID)
  //     .then(user => {
  //       next({
  //         name: 'user',
  //         params: {
  //           user: user.username
  //         }
  //       })
  //     })
  //     .catch(error => {
  //       next('user')
  //     })
  // } else next()
}
