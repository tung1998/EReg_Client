//init vue
import Vue from 'vue'
import Router from 'vue-router'
//import page
import LoginPage from '@/components/LoginPage/LoginPage.vue'
import ErrorPage from '@/components/ErrorPage/ErrorPage.vue'
//import manager component
import ManagerWorkingPage from '@/components/Manager/WorkingPage/WorkingPage.vue'
import ManagerProfile from '@/components/Manager/Profile/Profile.vue'
import SubjectManage from '@/components/Manager/SubjectManage/SubjectManage.vue'
//import student component
import StudentWorkingPage from '@/components/Student/WorkingPage/WorkingPage.vue'
import StudentProfile from '@/components/Student/Profile/Profile.vue'

//manager

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
      component: ManagerWorkingPage,
      children: [{
        name: 'manager',
        path: '',
        redirect: 'profile'
      }, {
        name: 'managerProfile',
        path: 'profile',
        component: ManagerProfile
      }, {
        name: 'subjectManage',
        path: 'profile',
        component: SubjectManage
      }]
    }, {
      path: '/student',
      component: StudentWorkingPage,
      children: [{
        name: 'student',
        path: '',
        redirect: 'profile'
      }, {
        name: 'profile',
        path: 'profile',
        component: StudentProfile
      }]
    },
    {
      name: "error",
      path: "*",
      component: ErrorPage
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
