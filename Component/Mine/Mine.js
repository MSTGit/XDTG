/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,ScrollView} from 'react-native';
//导入组件
import MineCommonItem from './MineCommonItem'
import MineOrderView from './MineOrderView'
import MineHeaderView from './MineHeaderView'

//导入本地数据
import HeaderData from './HeaderData.json'
export default class Mine extends Component {
    render() {
        //获取到当前的导航控制器
        const {navigation}=this.props;

        return (
            <ScrollView style={styles.container}>
                <MineHeaderView data={HeaderData}/>

                    <MineCommonItem
                        leftImgName='collect'
                        leftText='我的订单'
                        rightText='查看全部订单'
                    />
                    <MineOrderView />

                <View style={{marginTop:15}}>
                    <MineCommonItem
                        leftImgName='draft'
                        leftText='XD钱包'
                        rightText='账户余额:¥100.3'
                    />
                    <MineCommonItem
                        leftImgName='like'
                        leftText='抵用券'
                        rightText='99.8'
                    />

                </View>

                <View style={{marginTop:15}}>
                    <MineCommonItem
                        leftImgName='card'
                        leftText='积分商城'
                    />
                </View>
                <View style={{marginTop:15}}>
                    <MineCommonItem
                        leftImgName='new_friend'
                        leftText='今日推荐'
                        rightImgName='me_new'
                    />
                </View>
                <View style={{marginTop:15}}>
                    <MineCommonItem
                        leftImgName='pay'
                        leftText='我要合作'
                        rightText='轻松开店,招财进宝'
                    />
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5FCFF',
    },

});
