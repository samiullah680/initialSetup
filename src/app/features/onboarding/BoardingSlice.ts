import { createSlice } from "@reduxjs/toolkit";
import { getOrderCount, getProductCount } from "./AsyncActions";

export interface BoardingSliceProps {
  value: {
    data: any;
    step: number;
  };
  loading: boolean;
  msg: string;
}

const initialState: BoardingSliceProps = {
  value: {
    data: {},
    step: 0,
  },
  loading: false,
  msg: "",
};

export const BoardingSlice = createSlice({
  name: "onboarding",
  initialState,
  //sync actions
  reducers: {
    incrementStep: (state) => {
      state.value.step += 1;
    },
  },
  //async actions
  extraReducers(builder) {
    builder
      //getting completed step
      .addCase(getOrderCount.pending, (state) => {
        state.loading = true;
        state.msg = "Pending";
      })
      .addCase(getOrderCount.fulfilled, (state, action) => {
        state.loading = false;
        state.msg = "Success";
        state.value.step = action.payload?.data;
      })
      .addCase(getOrderCount.rejected, (state) => {
        state.loading = false;
        state.msg = "Failed";
      })
      //getting connected profile
      .addCase(getProductCount.pending, (state) => {
        state.loading = true;
        state.msg = "Pending";
      })
      .addCase(getProductCount.fulfilled, (state, action) => {
        state.loading = false;
        state.msg = "Success";
        state.value.data = action.payload?.data;
      })
      .addCase(getProductCount.rejected, (state) => {
        state.loading = false;
        state.msg = "Failed";
      });
  },
});

// Action creators are generated for each case reducer function
export const { incrementStep } = BoardingSlice.actions;

export default BoardingSlice.reducer;
