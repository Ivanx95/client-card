export default class DynamicClass {
  constructor (klass, ...opts) {
    return new klass(...opts);
  }
}