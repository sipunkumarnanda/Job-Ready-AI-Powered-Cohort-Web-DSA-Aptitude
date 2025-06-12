
import axios from "../../api/axiosconfig";
import { loaduser, removeuser } from "../reducers/userSlice";


export const asyncregisteruser = (user) => async (dispatch, getState) => {
    try {    
        const res = await axios.post("/users", user)
        console.log("Response : ",res);
    } catch (error) {
        console.log(error);
    }
}


export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    console.log(res);
    const loggedInUser = res.data[0];
    if (loggedInUser) {
      console.log("User found:", res.data[0]);
      localStorage.setItem("user", JSON.stringify(res.data[0]));
      dispatch(loaduser(loggedInUser));
    }else{
        console.log("Invalid credentials");
    }
  } catch (error) {
    console.log(error);
  }
};



export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
    const user = JSON.parse(localStorage.getItem("user"))
    // console.log("USer : ", user);
    if(user){
    dispatch(loaduser(user))
    }else{
        console.log("user not logged in");
    }
    } catch (error) {
        console.log(error);
    }
}



export const asynclogoutuser = () => async (dispatch, getState) => {
    try {
    localStorage.removeItem("user")
    dispatch(removeuser())
    console.log("User Logged out");
    } catch (error) {
        console.log(error);
    }
}
