export function setStoredToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}
export function getStoredToken() {
  const tokenString = sessionStorage.getItem("token");
  if (tokenString == null || tokenString === undefined) {
    return null;
  }
  const userToken = JSON.parse(tokenString);
  return userToken;
}
