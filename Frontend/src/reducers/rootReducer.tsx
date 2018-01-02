import { combineReducers } from "redux";
import { Reducer } from "redux";
import { LeaderboardReducer } from "./LeaderboardReducers";

export const rootReducer: Reducer<{}> = combineReducers({
    Players: LeaderboardReducer
});

export default rootReducer;
