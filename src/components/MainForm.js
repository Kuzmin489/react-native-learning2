import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from "firebase";
import { Button, CardSection } from "./common";

class MainForm extends Component {

    render() {
        return (
            <View>
                <CardSection>
                    <Text>Welcome to learn App!</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>
                </CardSection>
            </View>
        );
    }
}

export default MainForm;