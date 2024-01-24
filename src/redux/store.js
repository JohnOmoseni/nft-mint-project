import { configureStore } from "@reduxjs/toolkit";
import Web3Reducer from "./web3Slice";

const store = configureStore({
	reducer: {
		web3: Web3Reducer,
	},
});

export default store;
