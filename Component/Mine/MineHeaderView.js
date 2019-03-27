/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

var Dimensions = require('Dimensions');
import {Platform, StyleSheet,Image,TouchableOpacity, Text, View,Button} from 'react-native';

//定义屏幕宽高
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

export default class MineHeaderView extends Component {
    //创建属性获取外界传过来的数据
    static getInitialState(){
        return {
            data:{}
        }
    }
    render() {
        //获取到当前的导航控制器
        const {navigation}=this.props;

        return (
            <View style={styles.container}>
            {/*一共分为2个部分 第一部分为又分为两大部分 1.1 Icon + title + VIP ;1.2 箭头; 第二部分底部一整块view 又分为3个小部分 */}
            {/*创建第一部分*/}
                {this.setupFirstSectionSubView()}
            {/*创建第二部分*/}
                {this.setupSecondSectionSubView()}
            </View>
        );
    }
    //创建返回第一部分
    setupFirstSectionSubView(){
            return (
                <View style={styles.firstSectionSubViewStyle}>
                    {/*设置左边视图*/}
                    {this.setupFirstSectionLeftSubView() }
                    {/*设置右边视图*/}
                    {this.setupFirstSectionRightSubView() }
                </View>
            )
    }
    //设置第一部分左边视图
    setupFirstSectionLeftSubView(){
        return (
            <View style={styles.firstSectionLeftSubViewStyle}>
                <Image source={{uri:this.props.data.personData.personIcon}} style={styles.firstSectionIconStyle}/>
                <Text style={styles.firstSectionTitleStyle}>
                    {this.props.data.personData.personName}
                </Text>
                <Image source={{uri:this.props.data.personData.rank}} style={styles.firstSectionRankStyle}/>
            </View>
        )
    }
    //设置第一部分右边视图
    setupFirstSectionRightSubView(){
        return (<Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13}}/>)
    }
    //设置第一部分右边视图
    //创建返回第二部分
    setupSecondSectionSubView(){
    //    使用一个View来保存所有的子控件
        return (
            <View style={styles.secondSectionSubViewStyle}>
                {this.setupSecondSectionItemSubView()}
            </View>
        )
    }

    setupSecondSectionItemSubView(){
        var subArr = [];
        var orderData = this.props.data.orderData;
        for (var i = 0 ; i < orderData.length ; i ++){
            var subOrderData = orderData[i];
            //    最外层用一个View来展示
            subArr.push(
                <SecondSectionItemSubView key={i} subOrderData={subOrderData}/>
            )
        }
        return subArr;
}};

const styles = StyleSheet.create({
    //整个组件样式
    container: {
        flex: 1,
        height:200,
        alignItems:'center',//设置居中
        justifyContent:'center',
        backgroundColor: 'rgba(255, 96, 0, 1.0)',

    },
    //设置第一部分样式
    firstSectionSubViewStyle:{
        //flex:1,//设置宽度占满屏幕
        width:screenW * 0.9,
        flexDirection:'row',//设置主轴对齐方式
        justifyContent:'space-between',//设置两端对齐
        alignItems:'center',//设置垂直方向居中对齐
    },
    //第一部分左边视图样式
    firstSectionLeftSubViewStyle:{
        flexDirection:'row',//设置主轴对齐方式
        //垂直方向对齐
        alignItems:'center',
    },
    //设置头像style
    firstSectionIconStyle:{
        width:80,
        height:80,
        borderRadius:40,
    },
    //设置店名style
    firstSectionTitleStyle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginLeft:5,
    },
    //设置vip图标style
    firstSectionRankStyle:{
        width:17,
        height:17,
        marginLeft:5,
    },
    //设置下部分视图
    secondSectionSubViewStyle:{
        //设置主轴的排列方式
        flexDirection:'row',
        backgroundColor:'rgba(255,255,255,0.4)',
        //设置占满全屏
        // flex:1,// 设置了定位方式以后失效了
        // 绝对定位
        position:'absolute',
        bottom:0,//距离底部0
        left:0,//距离左边0
    //    设置宽度
        width:screenW,
    },


});

//封装一个子控件对象 将数据和视图绑定到一起
class SecondSectionItemSubView extends Component {
    //创建属性获取外界传过来的数据
    static getInitialState(){
        return {
            subOrderData:{}
        }
    }
    render(){
        return (
            <TouchableOpacity style={subStyles.secondSectionItemStyle} onPress={()=>{
                alert(this.props.subOrderData.name)
            }}>
                <View>
                    <Text style={subStyles.secondSectionItemNumberStyle}>{this.props.subOrderData.number}</Text>
                    <Text style={subStyles.secondSectionItemNameStyle}>{this.props.subOrderData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
};

const subStyles = StyleSheet.create({
    //设置下部分item的样式
    secondSectionItemStyle:{
        flex:1,//设置为1 让所有只控件保持大小一样宽度
        //设置对齐方式
        //横向对齐  目前主轴的排列方向为纵向 因此横向是alignItems
        alignItems:'center',
        //纵向对齐
        justifyContent:'center',

    },

    //底部item 数字label style
    secondSectionItemNumberStyle:{
        color:'white',
        fontSize:15,
        textAlign:'center',//设置文字居中
    },
    //底部item 数字name style
    secondSectionItemNameStyle:{
        color:'white',
        marginTop:4,
        fontSize:15
    },
});