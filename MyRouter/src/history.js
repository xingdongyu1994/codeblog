class RouterHistory {
  constructor() {
    this.currentUrl = ''
    this.routers = {}
  }
  route(url, cb) {
    this.routers[url] = cb || function () {}
  }
  init() {
    window.addEventListener('load', () => {
      this.render('/')
    }, false)
    window.addEventListener('popstate', () => {

      this.render(window.location.pathname)
    });
  }
  aBindClickUrl() {
    const aAllLink = document.querySelectorAll('a[data-href]');

    for (let i = 0; i < aAllLink.length; i++) {
      let current = aAllLink[i]
      current.addEventListener(
        'click',
        e => {
          e.preventDefault();
          const url = current.getAttribute('data-href');
          console.log("跟别人分", url)
          this.render(url);
        },
        false
      );
    }

  }
  render(url) {
    this.aBindClickUrl()
    this.currentUrl = url || '/';
    this.routers[this.currentUrl]();
  }
}
export default RouterHistory