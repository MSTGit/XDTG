/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
//导入组件
import MineCommonItem from './../Mine/MineCommonItem'
import HomeGuessYouLikeListView from './HomeGuessYouLikeListView'

export default class HomeGuessYouLikeView extends Component {
    static getInitialState(){
        return {
            data:[]
        }
    }
    render() {
        //获取到当前的导航控制器
        const {navigation}=this.props;

        return (
            <View style={styles.container}>
                {/*第一部分 猜你喜欢*/}
                <MineCommonItem
                    leftImgName='cnxh'
                    leftText= '猜你喜欢'
                />
                {/*第二部分 ListView*/}
                <HomeGuessYouLikeListView data={this.props.data}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:15,
    },
});
