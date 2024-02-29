class Router {
  constructor() {
    this.routes = {};

  }

  route(path, cb) {
    this.routes[path] = cb;
  }

  push(path) {
    this.routes[path]?.();
  }
}

const r = new Router();

r.route('path', () => {
  console.log(111);
})

setTimeout(() => {
  r.push('path')
}, 2000)