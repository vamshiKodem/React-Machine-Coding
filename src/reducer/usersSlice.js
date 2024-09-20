import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  isError: false,
};

export const fetchUsers = createAsyncThunk("users", async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
  } catch (err) {
    console.log("err");
  }
});

const userSlice = createSlice({
  initialState,
  name: "users",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isError = false;
        state.loading = true;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isError = true;
        state.loading = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;
