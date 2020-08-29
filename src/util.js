const _toString = Object.prototype.toString

export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}

export function toRawType(value) {
  return _toString.call(value).slice(8, -1)
}
