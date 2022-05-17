export function setStoredToken(userToken) {
  sessionStorage.setItem("token", userToken);
}
export function getStoredToken() {
  const tokenString = sessionStorage.getItem("token");
  if (tokenString == null || tokenString == undefined) {
    return null;
  }
  const userToken = tokenString;
  return userToken;
}
