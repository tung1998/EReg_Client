import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage/LoginPage.vue'
import WorkingPage from '@/components/WorkingPage/WorkingPage.vue'
import Profile from '@/components/Profile/Profile.vue'

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
    },
    {
      path: '/manager',
      component: WorkingPage,
      children: [{
          name: 'manager',
          path: '',
          redirect: 'profile'
        },
        {
          name: 'managerProfile',
          path: 'profile',
          component: Profile
        }
      ]
    }, {
      path: '/student',
      component: WorkingPage,
      children: [{
          name: 'student',
          path: '',
          redirect: 'profile'
        },
        {
          name: 'profile',
          path: 'profile',
          component: Profile
        }
      ]
    }
  ]
})

//suport function
function beforeEnterLogin(to, from, next) {
  console.log(1)
  next()
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
