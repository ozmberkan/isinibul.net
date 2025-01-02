import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  _id?: string;
  email: string;
  username: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterUser {
  email: string;
  username: string;
  password: string;
}

export interface UserState {
  user: User | null;
  status: "idle" | "loading" | "failed" | "success";
}


export const registerService = createAsyncThunk("user/register" , async(data : RegisterUser, {rejectWithValue}) => {
try {
  const res = await axios.post("http://localhost:5001/api/auth/register", data, {
    withCredentials: true,
  });

  return res.data
} catch (error) {
  return rejectWithValue(error)
}
})
export const loginService = createAsyncThunk("user/login" , async(data : LoginUser, {rejectWithValue}) => {
  try {
    const res = await axios.post("http://localhost:5001/api/auth/login", data, {
      withCredentials: true,
    });
  
    return res.data
  } catch (error) {
    return rejectWithValue(error)
  }
  })
  

  export const getUserById = createAsyncThunk("user/getUserById" , async(id : string, {rejectWithValue}) => {
    try {
      const res = await axios.get(`http://localhost:5001/api/auth/getUserById/${id}`, {
        withCredentials: true,
      });
    
      return res.data
    } catch (error) {
      return rejectWithValue(error)
    }
    })



const initialState: UserState = {
  user: null,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  
  },
  extraReducers : (builder) => {
    builder
    .addCase(registerService.pending, (state) => {
      state.status = "loading";
    })
    .addCase(registerService.fulfilled, (state,action:PayloadAction<User>) => {
      state.status = "success";
      state.user = action.payload
    })
    .addCase(registerService.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(loginService.pending, (state) => {
      state.status = "loading";
    }).addCase(loginService.fulfilled, (state,action:PayloadAction<User>) => {
      state.status = "success";
      state.user = action.payload
    }).addCase(loginService.rejected, (state) => {
      state.status = "failed";
    })
    .addCase(getUserById.pending, (state) => {
      state.status = "loading";
    }).addCase(getUserById.fulfilled, (state,action:PayloadAction<User>) => {
      state.status = "success";
      state.user = action.payload
    }).addCase(getUserById.rejected, (state) => {
      state.status = "failed";
    })
  }
});

export const {  } = userSlice.actions;

export default userSlice.reducer;
