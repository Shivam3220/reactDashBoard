import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    Logged: false,
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  },
  reducers: {
    userLoggingIn: (state, action) => {
        console.log(action)
      const {id,name, phone,email,address} = action.payload
      state.Logged = true;
      state.id = id;
      state.name = name;
      state.phone = phone;
      state.email = email;
      state.address = address;
    },
    userLoggingOut: (state) => {
        localStorage.removeItem("user")
      state.Logged = false;
      state.id = "";
      state.name = "";
      state.phone = "";
      state.email = "";
      state.address = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoggingIn, userLoggingOut } = counterSlice.actions;

export default counterSlice.reducer;
