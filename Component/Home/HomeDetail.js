/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,WebView, Text, View,Button} from 'react-native';



export default class Shop extends Component {
    constructor(props) {
      super(props);
      this.state = {};

    }

    render() {
        //获取到当前的导航控制器
        const {navigation}=this.props;
        var item = this.props.navigation.state.params.keyword;


        return (
            <WebView source={{uri:item}}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
