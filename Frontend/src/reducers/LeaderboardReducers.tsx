import { Reducer } from "redux";
import { ActionsTypes } from "../actions/actionTypes";
import { IStore, initialState } from "../store/initialState";
import { Action } from "redux";
import { IPlayer } from "../Models/Player";

interface IFetchPlayersAction extends Action {
    Players: IPlayer[]
}

export const LeaderboardReducer = (s: IStore, a: IFetchPlayersAction): IStore => {
    switch (a.type) {
        case ActionsTypes.FETCHING_PLAYERS_FULFILLED:
            return { ...s, Players: a.Players }
        default:
            return initialState
    }
}