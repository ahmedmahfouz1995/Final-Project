import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const initialState = {
  TeacherId :"",
  TeacherData:[],
  isLoading: false,
  error: null,
  isUpdated: false,
  isAdmin: true,
};


export const createTeacher = createAsyncThunk(
  "Teacher/createTeacher",
  async ({data,isAdmin}, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        if (isAdmin===false) {
            const navigate=  useNavigate()
            navigate("logIn")
         }
      console.log(data);
      const response = await axios.put(`http://localhost:8000/admin/addTeacher`,data);
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const TeacherSlice = createSlice({
  name: "Teacher",
  initialState,
  reducers: {
    // setUpdated: (state, action) => ({...state, isUpdated: action.payload})
  },
  extraReducers: {

    // get Teacher
    // -------Add Teacher
    [createTeacher.pending]: (state, action) => ({...state, isUpdated: false}),
    [createTeacher.fulfilled]: (state, action) => {
      state.TeacherData=action.payload;
      state.isUpdated = true;
    },
    [createTeacher.rejected]: (state, action) => {
        state.isUpdated = false;
    },
    // -------edit Teacher
    
  },
});

export const TeacherReducer = TeacherSlice.reducer;
export const TeacherActions = TeacherSlice.actions;
