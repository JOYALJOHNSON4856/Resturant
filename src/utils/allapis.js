const DOMAIN = process.env.REACT_APP_SERVER_URL;


const API = {
  login: `${DOMAIN}authenticate`,
  
};

export const BASE_URL = DOMAIN;
export default API;