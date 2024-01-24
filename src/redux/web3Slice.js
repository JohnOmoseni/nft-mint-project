import { createSlice } from "@reduxjs/toolkit";

const initialWeb3State = {
	currentAcc: null,
	currentChain: "",
	contract: null,
	isAuthenticated: false,
	isConnected: false,
	showConfetti: false,
};

const web3Slice = createSlice({
	name: "web3",
	initialState: initialWeb3State,
	reducers: {
		setCurrentAcc: (state, { payload }) => {
			state.currentAcc = payload;
			state.isConnected = true;
		},
		setCurrentChain: (state, { payload }) => {
			state.currentChain = payload;
			state.isAuthenticated = true;
		},
		setContract: (state, { payload }) => {
			state.contract = payload;
		},
		setShowConfetti: (state, { payload }) => {
			state.showConfetti = payload;
		},
	},
});

export default web3Slice.reducer;
export const { setCurrentAcc, setCurrentChain, setContract, setShowConfetti } =
	web3Slice.actions;
