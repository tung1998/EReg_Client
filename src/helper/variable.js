export {
    _ERRORS,
    _SUCCESS,
}


//Cảnh báo lỗi
const _ERRORS = {
    wrongUsernameOrPassword: {
        code: 0,
        classname: 'warning',
        title: 'Cảnh báo',
        text: {
            vn: 'Tên đăng nhập hoặc mật khẩu không chính xác!',
            en: 'Wrong username or password!',
        }
    },
    cannotFound: {
        code: 1,
        classname: 'warning',
        title: 'Cảnh báo',
        text: {
            vn: 'Không tìm thấy!',
            en: 'Cannot found!',
        }
    },
    formFillOut: {
        code: 2,
        classname: 'warning',
        title: 'Cảnh báo',
        text: {
            vn: 'Vui lòng điền đủ thông tin!',
            en: 'Please fill out the form!',
        }
    },
    somethingWrong: {
        code: 3,
        classname: 'warning',
        title: 'Cảnh báo',
        text: {
            vn: 'Có lỗi xảy ra!',
            en: 'Something wrong!',
        }
    }
}

//các notify khi thành công
const _SUCCESS = {
    loginSuccess: {
        code: 0,
        classname: 'success',
        title: 'Thành công',
        text: {
            vn: 'Đăng nhập thành công!',
            en: 'Logged in successfully!',
        }
    },
    createSuccess: {
        code: 1,
        classname: 'success',
        title: 'Thành công',
        text: {
            vn: 'Khởi tạo thành công!',
            en: 'Create successfully!'
        }
    },
    deleteSuccess: {
        code: 2,
        classname: 'success',
        title: 'Thành công',
        text: {
            vn: 'Xóa thành công!',
            en: 'Delete successfully!'
        }
    },
    updateSuccess: {
        code: 3,
        classname: 'success',
        title: 'Thành công',
        text: {
            vn: 'Cập nhật thành công!',
            en: 'Update successfully!'
        }
    }
}