/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import HomeMiddleCommonView from './HomeMiddleCommonView'


export default class HomeMiddleBottomView extends Component {
    //接收上级传递过来的数据
    static getInitialState(){
        return {
            dataArr:{}
        }
    };
    render() {
        /*
        * 页面分析:该组件中,可以将整个页面拆分我上下部分,上部分是一个单独的View, 下部分为之前封装好的组件
        * */

        return (
            <View style={styles.container}>
                {/*上部分*/}
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    }
    renderBottomItem(){
    //    获取数据数组
        var dataArr = this.props.dataArr;
    //    组件数组
        var itemArr = [];
        for(var i = 0 ; i < dataArr.length ; i++){
            //由于组件需要的数据模型和当前的模型不一样 所以需要转换
                var itemData= dataArr[i];//取出当前的数据模型
            //转换模型
            var changeData = {
                "title" :itemData.maintitle ,
                "subTitle" : itemData.title,
                "rightImage" : this.dealWithUrl(itemData.imageurl),//处理URL
                "titleColor": itemData.typeface_color};

            //创建组件 装入数组
            itemArr.push(
                <HomeMiddleCommonView key={i} data={changeData}/>
            )

        }
        return itemArr;
    }
    dealWithUrl(url){
        //定义关键字
        var wh = 'w.h';
        var replaceUrl;
        //判断是否有关键字 如果没有找到 则返回-1 取反  则表示找到了
        if (url.search(wh) !== -1){
            var replaceText = '60.50';
            replaceUrl =  url.replace(wh,replaceText);

        }
        return replaceUrl;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:15,
    },
    bottomViewStyle:{
        flexDirection:'row',//设置主轴横向排列
        flexWrap:'wrap',//自动换行
    }

});
