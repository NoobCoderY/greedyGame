import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

// Action
export const fetchMainData = createAsyncThunk("fetchMainData", async (dateVal ,dateVal2) => {
    const response = await fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${dateVal}&endDate=2017-06-02`);
    return response.json();
  });

const MainData=createSlice({
    name:"Main",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
      },
      extraReducers: (builder) => {
        builder.addCase(fetchMainData.pending, (state, action) => {
          state.isLoading = true;
        });
        builder.addCase(fetchMainData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload;
        });
        builder.addCase(fetchMainData.rejected, (state, action) => {
          console.log("Error", action.payload);
          state.isError = true;
        });
      },
});

export default MainData.reducer