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
import AcceptedStudent from '@/components/Manager/AcceptedStudent/AcceptedStudent.vue'
import UnAcceptedStudent from '@/components/Manager/UnAcceptedStudent/UnAcceptedStudent.vue'
import ShiftManage from '@/components/Manager/ShiftManage/ShiftManage.vue'
import Print from '@/components/Manager/Print/Print.vue'
import AddShift from '@/components/Manager/AddShift/AddShift.vue'
//import student component
import StudentWorkingPage from '@/components/Student/WorkingPage/WorkingPage.vue'
import StudentProfile from '@/components/Student/Profile/Profile.vue'
import registerExam from '@/components/Student/registerExam/registerExam.vue'

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
        name: 'studentManage',
        path: 'studentManage',
        component: StudentManage
      }, {
        name: 'subjectManage',
        path: 'subjectManage',
        component: SubjectManage
      }, {
        name: 'acceptedStudent',
        path: 'acceptedStudent',
        component: AcceptedStudent
      }, {
        name: 'unAcceptedStudent',
        path: 'unAcceptedStudent',
        component: UnAcceptedStudent
      }, {
        name: 'shiftManage',
        path: 'shiftManage',
        component: ShiftManage
      }, {
        name: 'print',
        path: 'print',
        component: Print
      }, {
        name: 'addShift',
        path: 'addShift',
        component: AddShift
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
      },{
        name: 'registerExam',
        path: 'registerExam',
        component: registerExam
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
