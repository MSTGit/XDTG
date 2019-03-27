/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,ScrollView} from 'react-native';
import MoreCommonItem from './MoreCommonItem'


export default class Home extends Component {
    render() {
        //获取到当前的导航控制器
        const {navigation}=this.props;

        return (
            <ScrollView style={styles.container}>
                <View style={{marginTop:15}}>
                    <MoreCommonItem
                        leftText='扫一扫'

                    />

                </View>
                <View  style={{marginTop:15}}>
                    <MoreCommonItem
                        leftText='省流量模式'
                        isSwitch={true}
                    />
                    <MoreCommonItem
                        leftText='消息提醒'
                    />
                    <MoreCommonItem
                        leftText='邀请好友使用XDTG'
                    />
                    <MoreCommonItem
                        leftText='清空缓存'
                        rightText='199Mb'
                    />

                </View>
                <View  style={{marginTop:15}}>
                <MoreCommonItem
                    leftText='意见反馈'
                />
                <MoreCommonItem
                    leftText='问卷调查'
                />
                <MoreCommonItem
                    leftText='支付帮助'
                />
                <MoreCommonItem
                    leftText='网络诊断'
                />
                <MoreCommonItem
                    leftText='关于码团'
                /><MoreCommonItem
                leftText='我要应聘'
            />

            </View>
                <View  style={{marginTop:15}}>
                    <MoreCommonItem
                    leftText='精品应用'
                />
                    <MoreCommonItem
                        leftText='精品应用'
                    />
                    <MoreCommonItem
                        leftText='精品应用'
                    />
                    <MoreCommonItem
                        leftText='精品应用'
                    />



                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
