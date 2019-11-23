export function errorCodeChecker(errorCode) {
  switch (errorCode) {
    case 200:
      return true;
    default:
      return false;
  }
}
