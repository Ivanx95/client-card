export default class BadRequestError extends Error {
  constructor(message, response) {
    super(message);
    this.name = "BadRequestError";
    this.response=response;
  }
}
