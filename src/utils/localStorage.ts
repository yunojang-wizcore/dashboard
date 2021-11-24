export const save = (key:KEY_NAME, data:any) => {
  localStorage.setItem(key, JSON.stringify(data));
}
export const load = (key:KEY_NAME) => {
  const data = localStorage.getItem(key);
  
  if (!data) {
    console.error('invaild key');
    return null;
  }

  return JSON.parse(data);
}

export enum KEY_NAME {
  darkMode = 'dark-mode'
}