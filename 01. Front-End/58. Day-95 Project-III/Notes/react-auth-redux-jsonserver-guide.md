
# Here is your **final, combined, in-depth note** that walks through the complete flow of **user authentication (register, login, current user, logout)** using **React, Redux Toolkit, Axios**, and **json-server** backend (`db.json`), with proper explanations, file structure, and code examples:

---

# 🔐 User Authentication with Redux Toolkit + React + json-server

---

## 📦 Overview

This project is a full-stack eCommerce app built using:

* **Frontend**: React, Redux Toolkit, React Router, Axios
* **Backend**: json-server (`db.json`)
* **Features**:

  * Register new user ➜ Save to `db.json`
  * Login ➜ Match credentials from `db.json`
  * Store logged-in user in `localStorage`
  * Logout ➜ Clear user from `localStorage`
  * Maintain state in Redux

---

## 🧠 Project Flow Summary

1. User fills the **Register** form → data saved to `db.json`.
2. On **Login**, credentials are verified from `db.json`.
3. If valid, user data is saved in `localStorage`.
4. On app load, `localStorage` is checked and user is set in Redux.
5. On **Logout**, `localStorage` is cleared.

---

## 📁 `db.json` – Backend Setup with json-server

```json
{
  "users": [
    {
      "id": "dPea0ahBha",
      "username": "admin@123",
      "email": "admin@gmail.com",
      "password": "Admin@54321",
      "isAdmin": true
    }
  ],
  "products": [],
  "carts": []
}
```

* `users` holds registered user data.
* Data is accessed using REST endpoints (`GET`, `POST`, `DELETE`, etc.).

---

## 🔗 `axiosconfig.jsx` – Axios Instance

```jsx
import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:3000/"
})

export default instance
```

* Centralized Axios instance to avoid repetition.

---

## 🗂 `store/store.jsx` – Redux Store Setup

```jsx
import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./reducers/userSlice"
import productSlice from "./reducers/productSlice"
import cartSlice from "./reducers/cartSlice"

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productReducer: productSlice,
    cartReducers: cartSlice
  }
})
```

* Combines all slices (user, product, cart) into a central store.

---

## 🧩 `userSlice.jsx` – User Reducer

```jsx
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, action) => {
      state.users = action.payload
    }
  }
})

export default userSlice.reducer
export const { loaduser } = userSlice.actions
```

* Handles setting user data in Redux.
* Exports `loaduser` to be used in actions.

---

## 🛠️ `userActions.jsx` – Async Actions for User Auth

```jsx
import axios from "../../api/axiosconfig"
import { loaduser } from "../reducers/userSlice"

// Register new user
export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/users", user)
    console.log("User Registered")
  } catch (error) {
    console.log(error)
  }
}

// Login user and save to localStorage
export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/users?email=${user.email}&password=${user.password}`)
    localStorage.setItem("user", JSON.stringify(res.data[0]))
    console.log("Login Success:", res.data[0])
  } catch (error) {
    console.log(error)
  }
}

// On app load – Check and load current user
export const asynccurrentuser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch(loaduser(user))
    } else {
      console.log("User not logged in")
    }
  } catch (error) {
    console.log(error)
  }
}

// Logout user
export const asynclogoutuser = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user")
    console.log("User logged out")
  } catch (error) {
    console.log(error)
  }
}
```

---

## 🧾 `Login.jsx` – Login UI with React Hook Form

```jsx
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { asyncloginuser } from "../store/actions/userActions"
import { useDispatch } from "react-redux"

const Login = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const LoginHandler = (user) => {
    dispatch(asyncloginuser(user))
  }

  return (
    <form onSubmit={handleSubmit(LoginHandler)} className="...">
      <input {...register("email", { required: true })} placeholder="Email" />
      <input {...register("password", { required: true })} type="password" placeholder="Password" />
      <button>Login</button>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </form>
  )
}

export default Login
```

---

## 📝 `Register.jsx` – Registration Page

```jsx
import { useForm } from "react-hook-form"
import nanoid from "nano-id"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { asyncregisteruser } from "../store/actions/userActions"

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const RegisterHandler = (user) => {
    user.id = nanoid()
    user.isAdmin = false
    dispatch(asyncregisteruser(user))
    navigate("/login")
  }

  return (
    <form onSubmit={handleSubmit(RegisterHandler)} className="...">
      <input {...register("username", { required: true })} placeholder="Username" />
      <input {...register("email", { required: true })} placeholder="Email" />
      <input {...register("password", { required: true })} type="password" placeholder="Password" />
      <button>Register</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  )
}

export default Register
```

---

## ⚛️ `App.jsx` – Load Current User on App Load

```jsx
import { useEffect } from "react"
import Mainroutes from "./routes/Mainroutes"
import Nav from "./components/Nav"
import { asynccurrentuser } from "./store/actions/userActions"
import { useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asynccurrentuser())
  }, [])

  return (
    <div className="...">
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App
```

---

## 📌 Summary

| Action       | Source                                       | Description                                 |
| ------------ | -------------------------------------------- | ------------------------------------------- |
| Register     | `Register.jsx` → `asyncregisteruser()` → API | Saves new user to `db.json`                 |
| Login        | `Login.jsx` → `asyncloginuser()` → API       | Validates and stores user in `localStorage` |
| Current User | `App.jsx` → `asynccurrentuser()`             | Loads user from `localStorage` on app start |
| Logout       | `asynclogoutuser()`                          | Removes user from `localStorage`            |

---

## ✅ Final Thoughts

This flow ensures:

* Separation of concerns (reducers vs. actions)
* Secure login state handling
* Scalable state management using Redux Toolkit
* Clear frontend-backend communication