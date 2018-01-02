import * as React from 'react';
import { connect } from 'react-redux';
import { fetchLeaderboardAction } from "../../actions/leaderboardActions";
import { Store } from 'redux';
import { IStore } from '../../store/initialState';
import { IPlayer } from '../../Models/Player';

export interface ILeaderboardProps {
    fetchLeaderboardAction: any;
    Players: IPlayer[]
}

export interface ILeaderboardState {
    Players: IPlayer[];
}

class Leaderboard extends React.Component<ILeaderboardProps> {
    /**
     *
     */
    componentWillMount() {
        this.props.fetchLeaderboardAction();
    }

    componentDidMount() {
        console.log("didMount", this.props);
    }

    render() {
        console.log("Render", this.props);
        return (
            <div>
                Ranking!
                <ul>
                    {this.props.Players.map((p, i) => {
                        return <li key={i}>{i}. {p.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    (store: any) => { return { Players: store.Players.Players } }, 
    { fetchLeaderboardAction }
)(Leaderboard);