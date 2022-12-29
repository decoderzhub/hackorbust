export function randNum() {
  let num =
    Math.floor(Math.random() * (Math.floor(5) - Math.ceil(0) + 1)) +
    Math.ceil(0);
  return num;
}

export function authToken() {
  let auth = sessionStorage.getItem("Auth Token");
  return auth;
}

export const fetchData = async (baseURL, placeholder, setData) => {
 
  if (typeof placeholder === "object") {
    console.log(baseURL);
    console.log(typeof placeholder);
    const response = await fetch(baseURL + placeholder.location.pathname);
    response.json().then((json) => {
      setData(json);
    });
  }
  if (typeof placeholder === "string") {
    console.log(baseURL);
    console.log(placeholder)
    console.log(typeof placeholder);
    const response = await fetch(baseURL + "/" + placeholder);
    response.json().then((json) => {
        if(json){
            setData(json);
        }
    });
  }
};
