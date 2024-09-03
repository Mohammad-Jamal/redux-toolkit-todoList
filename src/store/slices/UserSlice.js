import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    // what action do we need in our app
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload,1);
    },
    // deleteUsers(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    // builder.addCase(userSlice.actions.deleteUsers,() => {
    //   return []
    // })
    builder.addCase(deleteUsers,() => {
      return []
    })
  }
});

// console.log('user slice actions : ');
// console.log(userSlice.actions);

export default userSlice.reducer;

export const {addUser,removeUser} = userSlice.actions;
