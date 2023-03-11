const tokenKey = "token";
const userKey = "user";

export const signOut = () => {
  localStorage.removeItem(userKey);
  localStorage.removeItem(tokenKey);
  // localStorage.removeItem(googleKey);
  // localStorage.removeItem(profilePictureKey);
  // localStorage.removeItem(facebookKey);
  // persistedStore.pause();
  // persistedStore.flush().then(() => {
  //   return persistedStore.purge();
  // });
  localStorage.removeItem("persist:root");
  localStorage.removeItem("currentStatus");
};

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
}

export const setJwt = (value: string) => localStorage.setItem(tokenKey, value);

export const getJwt = () => localStorage.getItem(tokenKey);

export const getCurrentUser: any = () => localStorage.getItem(userKey);
