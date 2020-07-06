function mergeParams(target, source) {
  for (var key in target) {
    if (target.hasOwnProperty(key)) {
      target[key] = source[key]
    }
  }
  return target
}
export {
  mergeParams
}