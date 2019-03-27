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
import HomeTopMenuComponent from './HomeTopMenuComponent';
import HomeMiddleView from './HomeMiddleView'
import HomeMiddleBottomView from './HomeMiddleBottomView';
import HomeShopCenterView from './HomeShopCenterView'
import HomeGuessYouLikeView from './HomeGuessYouLikeView'

//导入数据
import TopMenuData from '../../LocalData/TopMenu.json';
import HomeTopMiddleLeftData from  '../../LocalData/HomeTopMiddleLeft.json';
import HomeMiddleBottomViewData from  '../../LocalData/Home_D4.json';
import HomeShopCenterViewData from  '../../LocalData/Home_D5.json';
import HomeGuessYouLikeViewData from  '../../LocalData/GuestYouLikeData.json';
/*
* 页面分析:
* 首先整个页面可以滚动 最底层应该是一个scrollView
* 页面中第一部分,是一个可以左右滚动的视图,因此该页面也是一个scrollview嵌套的
* */

export default class Home extends Component {

    render() {

        const {navigation}=this.props;

        return (
            <ScrollView style={styles.container}>
                    {/*第一部分 头部视图*/}
                    <HomeTopMenuComponent
                    data={TopMenuData.data}
                    />
                    {/*第二部分 中间View */}
                    <HomeMiddleView dataObj={HomeTopMiddleLeftData}/>
                {/*第三部分*/}
                <HomeMiddleBottomView dataArr={HomeMiddleBottomViewData.data}/>
                {/*第四部分 购物中心*/}
                <HomeShopCenterView data={HomeShopCenterViewData} pushToHome={(data)=>this.pushToHomeDetail(data)}/>
                {/*第五部分 猜你喜欢*/}
                <HomeGuessYouLikeView data={HomeGuessYouLikeViewData}/>
            </ScrollView>
        );
    }
    //跳转到详情也
    pushToHomeDetail(data){
        //要跳转 需要到AppNavigator中配置路由
        // this.props.navigation.navigate('HomeD');
        //需要向下级页面传递数据 因此需要使用push方法来向下级页面传递数据
        this.props.navigation.push('HomeD',{keyword:data});


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop:15,
    },
});
