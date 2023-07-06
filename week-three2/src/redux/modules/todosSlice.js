import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    //서버와 통신하는 비동기이기때문에 async를 불여주어야 함
    try {
      //서버통신이 항상 성공을 보장할수 없기 때문에 try로 묶어줌
      const response = await axios.get("http://localhost:3001/todos");
      console.log("response", response);

      //툴킷에서 제공하는 API
      //Promise -> resolve(=네트워크 요청이 성공한 경우) -> dispatch해주는 기능을 가지는 API
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);

      //툴킷에서 제공하는 API
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state, action) => {
      // 서버통신 진행중
      state.isLoading = true;
      state.isError = false;
    },
    [__getTodos.fulfilled]: (state, action) => {
      // 서버통신 완료
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload; //fulfillWithValue(response.data);에서 response.data
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload; //rejectWithValue(error)에서 error
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
