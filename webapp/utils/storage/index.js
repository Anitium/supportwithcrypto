export const getItem = key => {
  if(window) {
    return JSON.parse(window.localStorage.getItem(key));
  }
  return null;
}

export const setItem = (key, item) => {
  if(window) {
    window.localStorage.setItem(key, JSON.stringify(item));
  }
};

export const removeItem = key => {
  if(window) {
    window.localStorage.removeItem(key);
  }
}
