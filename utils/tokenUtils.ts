function isRefreshTokenValid(): boolean {
  const tokenExpirationTime =
    localStorage.getItem("refreshExpiresIn") != null
      ? Number(localStorage.getItem("refreshExpiresIn"))
      : 0;
  const now = Date.now() / 1000;
  return tokenExpirationTime > now;
}
