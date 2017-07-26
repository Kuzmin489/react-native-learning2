import React, { Component } from "react";
import firebase from "firebase";
import { View } from "react-native";
import { Header, Button, CardSection, Spinner } from "./components/common/";
import LoginForm from "./components/LoginForm";
import MainForm from "./components/MainForm";

class App extends Component {

    state = {loggedIn : null};

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyC0MRmGgxTk1RP0MiHvcprja5s3PJsCoOo",
            authDomain: "react-1d111.firebaseapp.com",
            databaseURL: "https://react-1d111.firebaseio.com",
            projectId: "react-1d111",
            storageBucket: "react-1d111.appspot.com",
            messagingSenderId: "304454110966"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn:true})
            } else {
                this.setState({loggedIn:false})
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <MainForm/>;
            case false:
                return <LoginForm/>;
            default:
                return (<CardSection><Spinner size="large"/></CardSection>);
        }
    }



    render() {
        return (
            <View>
                <Header headerText={"Auth lear app"} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
