function MyStorage() {}
MyStorage.prototype.set = function (config) {
  let defaultConfig = {
    key: '',
    value: '',
    expires: '',
    startTime: new Date().getTime(),
  };
  const lastConfig = Object.assign(defaultConfig, config);
  const {
    key,
    value,
    expires,
    startTime
  } = lastConfig;

  window.localStorage.setItem(
    key,
    JSON.stringify({
      value,
      expires,
      startTime
    })
  );
};
MyStorage.prototype.get = function (key) {

  let item = JSON.parse(window.localStorage.getItem(key))
  const {
    value,
    expires,
    startTime
  } = item
  const newTime = new Date().getTime()
  console.log("不分敌我", newTime - startTime)
  if (startTime) {
    if (newTime - startTime < expires) {
      return value
    } else {
      localStorage.removeItem(key);
      return false;
    }
  } else {
    return value
  }

};
export default MyStorage;