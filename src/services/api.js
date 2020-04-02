const API_ROOT = `http://localhost:3000/api/v1`;
const ROOT = `http://localhost:3000`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type" : "application/json",
    "Accepts" : "application/json",
    "Authorization" : token()
  };
};

// const getListings = () => {
//   return fetch(`${API_ROOT}/listings/`, 
//    { headers: headers() })
//    then(res => res.json());
// };

const saveListing = (data) => {
  console.log(data, "api.js saveListing")
  return fetch(`${API_ROOT}/users/listing`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({listing: data.listing, user_id: data.user_id})
  })
}

const searchListings = (data) => {
  console.log(data, "api.js searchListings")
  return fetch(`${ROOT}/listings/search`, { 
    method: "POST",
    headers: headers(),
    body: JSON.stringify({search: {city: data.search.city, state: data.search.state}})
  })
};

const signup = data => {
  console.log(data, "api.js hitting signup")
  return fetch(`${API_ROOT}/users`, { 
    method: "POST",
    headers: headers(),
    body: JSON.stringify({user: data})
  }).then(res => res.json())
}

// POST to api, Create in backend
const login = data => {
  console.log(data)
  return fetch(`${API_ROOT}/auth`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({user: data})
  }).then(res => res.json());
};

const deleteAccount = data => {
  console.log(data, "api.js delete account")
  // getCurrentUser()
  // .then(res=> console.log(res))
  return fetch(`${API_ROOT}/users/${data.id}`, { headers: headers()})
  // .then(res=>res.json())
  // get current user id (promise), pass to backend via fetch (DESTROY)
  // clear token.
}

const getCurrentUser = () => {
  console.log("api.js getting current user", token());
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers()
  }).then(res => res.json())
};

export const api = {
  auth: {
    signup,
    login,
    deleteAccount,
    getCurrentUser
  },
  listings: {
    // getListings,
    searchListings,
    saveListing
  } 
};