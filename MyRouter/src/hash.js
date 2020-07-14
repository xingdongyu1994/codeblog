class RouterHash {
  constructor() {
    this.currentUrl = ''
    this.routers = {}
  }
  route(url, cb) {
    this.routers[url] = cb || function () {}
  }
  init() {
    window.addEventListener('load', this.render.bind(this), false)
    window.addEventListener('hashchange', this.render.bind(this), false)
  }
  render() {
    this.currentUrl = window.location.hash.slice(1) || '/';
    this.routers[this.currentUrl]()
  }
}

export default RouterHash