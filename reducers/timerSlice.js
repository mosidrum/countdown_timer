import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedTime: 0,
	isCounting: false,
};

const timmerSlice = createSlice({
	name: 'timmer',
	initialState,
	reducers: {
		setSelectedTime(state, action) {
			state.selectedTime = action.payload;
		},
		startCountdown(state) {
			state.isCounting = true;
		},
		stopCountdown(state) {
			state.isCounting = false;
		},
	},
});

export const { setSelectedTime, startCountdown, stopCountdown } =
	timmerSlice.actions;

export default timmerSlice.reducer;
