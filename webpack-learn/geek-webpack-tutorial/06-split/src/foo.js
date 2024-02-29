import('./bar').then(({add}) => {
  console.log(add(1, 3));
})