import * as React from "react";
import { Menu, Icon, Container } from "semantic-ui-react";
import "./App.css"
import { Link, Switch, Route } from "react-router-dom";
import Leaderboard from "../Leaderboard/Leaderboard";

const temp = () => {
    return <h1>TEMP1</h1>;
}

class App extends React.Component<null, {}> {
    render() {
        return (
            <div className="header">
                { /* the following section is fixed to the top */}
                <Menu inverted color="green" borderless style={{
                    flexShrink: 0, //don't allow flexbox to shrink it
                    borderRadius: 0, //clear semantic-ui style
                    margin: 0 //clear semantic-ui style
                }}>
                    <Menu.Item as="h1" header>
                        Bordtennisrankingen!
					</Menu.Item>
                </Menu>
                { /* the following section is in the middle, and it can scroll */}
                <div className="mainContent">
                    <Container>
                        <Switch>
                            <Route exact path={"/"} component={Leaderboard} />
                        </Switch>
                    </Container>
                </div>
                { /* the following section is fixed to the bottom */}
                <Menu icon="labeled" color="green" fixed={"bottom"} inverted borderless widths={3} className="footer">
                    <Menu.Item as={Link} to="/">
                        <Icon name="newspaper" />
                        Ranking
					</Menu.Item>
                    <Menu.Item as={Link} to="/profile/">
                        <Icon name="user" size="large" />
                        Spillere
					</Menu.Item>
                    <Menu.Item as={Link} to="/settings/">
                        <Icon name="setting" />
                        Settings
					</Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default App;