function reactive(obj) {
  if (typeof obj !== 'object' || typeof obj === null) {
    return;
  }

  return new Proxy(obj, {
    get (target, p, receiver) {
      console.log(1);
      return Reflect.get(target, p, receiver);
    },

    set (target, p, newValue, receiver) {
      console.log(2);
      return Reflect.set(target, p, newValue, receiver);
    },

    deleteProperty (target, p) {
      console.log(3);
      return Reflect.deleteProperty(target, p)
    }
  });
}

const r = reactive({
  a: {
    b: 3
  },
  b: 8
})

console.log(r.b = 9);