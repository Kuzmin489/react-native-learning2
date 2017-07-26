import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Header = ({headerText}) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#98e4f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width:0, height: 10},
        shadowOpacity: 0.5,
        position: 'relative',
        elevation: 2

    },
    textStyle: {
        fontSize: 20
    }
};

Header.PropTypes = {
    headerText: PropTypes.string
};

Header.defaultProps = {
    headerText: 'Default Header'
};



export {Header};