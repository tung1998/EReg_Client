//init vue
import Vue from 'vue'
import Router from 'vue-router'
//import page
import LoginPage from '@/components/LoginPage/LoginPage.vue'
import ErrorPage from '@/components/ErrorPage/ErrorPage.vue'
//import manager component
import ManagerWorkingPage from '@/components/Manager/WorkingPage/WorkingPage.vue'
import ManagerProfile from '@/components/Manager/Profile/Profile.vue'
import StudentManage from '@/components/Manager/StudentManage/StudentManage.vue'
import SubjectManage from '@/components/Manager/SubjectManage/SubjectManage.vue'
import ShiftManage from '@/components/Manager/ShiftManage/ShiftManage.vue'
import RoomManage from '@/components/Manager/RoomManage/RoomManage.vue'
import TermManage from '@/components/Manager/TermManage/TermManage.vue'
import TermSubStuManage from '@/components/Manager/TermSubStuManage/TermSubStuManage.vue'
import Print from '@/components/Manager/Print/Print.vue'
//import student component
import StudentWorkingPage from '@/components/Student/WorkingPage/WorkingPage.vue'
import StudentProfile from '@/components/Student/studentProfile/studentProfile.vue'
import StudentPrint from '@/components/Student/studentPrint/studentPrint.vue'
import registerExam from '@/components/Student/registerExam/registerExam.vue'
import StudentPage from '@/components/Student/page/page.vue'

//function 
import {
  checkAccessToken
} from '../api/user'
import {
  handleError
} from '../helper/function'

Vue.use(Router)

const router = new Router({
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
        component: ManagerProfile,
        beforeEnter: beforeEnterManager
      }, {
        name: 'studentManage',
        path: 'studentManage',
        component: StudentManage,
        beforeEnter: beforeEnterManager
      }, {
        name: 'subjectManage',
        path: 'subjectManage',
        component: SubjectManage,
        beforeEnter: beforeEnterManager
      }, {
        name: 'shiftManage',
        path: 'shiftManage',
        component: ShiftManage,
        beforeEnter: beforeEnterManager
      }, {
        name: 'RoomManage',
        path: 'RoomManage',
        component: RoomManage,
        beforeEnter: beforeEnterManager
      },{
        name: 'print',
        path: 'print',
        component: Print,
        beforeEnter: beforeEnterManager
      }, {
        name: 'termManage',
        path: 'termManage',
        component: TermManage,
        beforeEnter: beforeEnterManager
      }, {
        name: 'termSubStuManage',
        path: 'termSubStuManage',
        component: TermSubStuManage,
        beforeEnter: beforeEnterManager
      }],
      beforeEnter: beforeEnterManager

    }, {
      path: '/student',
      component: StudentWorkingPage,
      children: [{
        name: 'student',
        path: '',
        redirect: 'page'
      }, {
        name: 'page',
        path: 'page',
        component: StudentPage,
        beforeEnter: beforeEnterStudent
      }, {
        name: 'studentProfile',
        path: 'studentProfile',
        component: StudentProfile,
        beforeEnter: beforeEnterStudent
      }, {
        name: 'registerExam',
        path: 'registerExam',
        component: registerExam,
        beforeEnter: beforeEnterStudent
      }, {
        name: 'studentPrint',
        path: 'studentPrint',
        component: StudentPrint,
        beforeEnter: beforeEnterStudent
      }],
      beforeEnter: beforeEnterStudent
    },
    {
      name: "error",
      path: "*",
      component: ErrorPage
    }
  ]
})


//checkPermistion
function beforeEnterLogin(to, from, next) {
  let accessToken = Vue.$cookies.get('accessToken')
  if (accessToken)
    checkAccessToken(accessToken).then(result => {
      console.log(result)
      if (result.data && result.data.userType == 0) {
        next({
          name: 'managerProfile'
        })
      }
      if (result.data && result.data.userType == 1) {
        next({
          name: 'studentProfile'
        })
      }
      next()
    }).catch(error => {
      handleError(error)
      next()
    })
  else next()
}

function beforeEnterManager(to, from, next) {
  let accessToken = Vue.$cookies.get('accessToken')
  if (accessToken)
    checkAccessToken(accessToken).then(result => {
      if (result.data && result.data.userType == 0)
        next()
      else if (result.data && result.data.userType == 1)
        next({
          name: 'studentProfile'
        })
      else next({
        name: 'login'
      })
    }).catch(handleError)
  else next({
    name: 'login'
  })
}

function beforeEnterStudent(to, from, next) {
  let accessToken = Vue.$cookies.get('accessToken')
  if (accessToken)
    checkAccessToken(accessToken).then(result => {
      if (result.data && result.data.userType == 1)
        next()
      else if (result.data && result.data.userType == 0)
        next({
          name: 'managerProfile'
        })
      else next({
        name: 'login'
      })
    }).catch(handleError)
  else next({
    name: 'login'
  })
}

export default router
