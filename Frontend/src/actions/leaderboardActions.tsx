import { Action } from "redux";
import axios from "axios";
import { ActionsTypes } from "./actionTypes";
import { IPlayer } from "../Models/Player";

export const fetchLeaderboardAction = () => {
    return (dispatch) => {
        axios.get("https://uinames.com/api/?amount=15&region=Norway").then(response => {
            let p: IPlayer[] = response.data;
            dispatch({ type: ActionsTypes.FETCHING_PLAYERS_FULFILLED, Players: p });
        }).catch(err => {
            dispatch({ type: ActionsTypes.FETCHING_PLAYERS_REJECTED, payload: err })
        });
    }
}

