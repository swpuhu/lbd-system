export default {
  bindMethods(methods, obj) {
    methods.forEach(func => {
      if (typeof func === 'funciton') {
        obj[func] = obj[func].bind(this);
      }
    });
  }
}