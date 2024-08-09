
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { LoginAPI } from '../../../services/allApis';


// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (loginData, thunkAPI) => {
//     try {
//       const response = await LoginAPI(loginData);
//       return response
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isAuths: false,
//     token: null,
//     error: null,
//     datas:[],
//     loading: false,
//   },
//   reducers: {
//     logout: (state) => {
//       state.isAuths = false;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         console.log("pending");
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isAuths = true;
//         state.token = action.payload;
//         state.datas=action.payload;
//         state.loading = false;
//         state.error = null;
//         console.log("fullfilled");
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         console.log("Rejacted");
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export const AuthReducer= authSlice.reducer;


// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    adminstate:""
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.adminstate = action.payload.data.userType;
   
    },
    loginFailure: (state, action) => {
      state.adminstate ="";
    },
    logout: (state) => {
      state.adminstate ="";
    }
  }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export const AuthReducer= authSlice.reducer;
