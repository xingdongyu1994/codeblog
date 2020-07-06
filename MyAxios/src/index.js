import MyAxios from './MyAxios'
import defaultParams from './defaultparams'


var myAxios = new MyAxios(defaultParams)

myAxios.create = function (config) {
  return new MyAxios(config)
}
return myAxios