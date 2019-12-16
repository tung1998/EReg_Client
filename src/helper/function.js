import {
  _ERRORS
} from './variable'
export {
  objectToArray,
  alertNotifyDefaul,
  formatPhoneNumber,
  handleError
}

function objectToArray(obj) {
  return Object.keys(obj).map(i => obj[i])
}


//alertNotify
const stacks = {
  topleft: {
    'dir1': 'down',
    'dir2': 'right',
    'push': 'top'
  },
  bottomleft: {
    'dir1': 'right',
    'dir2': 'up',
    'push': 'top'
  },
  bottomright: {
    'dir1': 'up',
    'dir2': 'left',
    'firstpos1': 15,
    'firstpos2': 15
  },
  bar_top: {
    'dir1': 'down',
    'dir2': 'right',
    'push': 'top',
    'spacing1': 0,
    'spacing2': 0
  },
  bar_bottom: {
    'dir1': 'up',
    'dir2': 'right',
    'spacing1': 0,
    'spacing2': 0
  },
}

function alertNotifyDefaul({
  title = 'Thông báo',
  text,
  shadow = true,
  classname = '',
  stack = 'bottomright',
}) {
  return new PNotify({
    styling: 'fontawesome',
    title,
    text: text && text.vn ? text.vn : '',
    type: classname,
    shadow,
    addclass: `stack-${stack}`,
    stack: stacks[stack]
  });
}

function formatPhoneNumber(phone, symbol = '.') {
  if (phone === undefined)
    return null;
  switch (phone.length) {
    case 10:
      return phone.replace(/(\d{3})(\d{3})(\d{4})/, `$1${symbol}$2${symbol}$3`);
    case 11:
      return phone.replace(/(\d{4})(\d{3})(\d{4})/, `$1${symbol}$2${symbol}$3`);
    default:
      return phone;
  }
}


function handleError(error) {
  console.log(error)
  alertNotifyDefaul(_ERRORS.somethingWrong)
  return false
}
