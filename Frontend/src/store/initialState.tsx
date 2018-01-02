import { IPlayer } from "../Models/Player";

export interface IStore {
    Players: IPlayer[]
}


export const initialState: IStore = {
    Players: []
}
