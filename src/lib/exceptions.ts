export class AuthRequiredException extends Error {
  constructor(message = "Authentication is required to access this resource") {
    super(message);
    this.name = "AuthRequiredException";
  }
}
