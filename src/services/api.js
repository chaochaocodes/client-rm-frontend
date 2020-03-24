const API_ROOT = `http://localhost:3000/api/v1`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accepts: "application/json",
    Authorization: token()
  };
};
 
const getListings = () => {
  return fetch(`${API_ROOT}/listings/`, { headers: headers() }).then(res =>
    res.json()
  );
};

const signup = data => {
  console.log(data)
  return fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({user: data})
  }).then(res => res.json());
}

// fetch to api, backend create 
const login = data => {
  console.log(data)
  return fetch(`${API_ROOT}/auth`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({user: data})
  }).then(res => res.json());
};

const logout = data => {
  console.log(data)
  
}

const getCurrentUser = () => {
  // console.log("getting current user", headers);
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers()
  }).then(res => res.json());
};

export const api = {
  auth: {
    signup,
    login,
    getCurrentUser
  },
  listings: {
    getListings
  }
};