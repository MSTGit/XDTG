/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image,TouchableOpacity, View,Button} from 'react-native';
import HomeMiddleCommonView from './HomeMiddleCommonView'
import Dimensions from 'Dimensions';
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;
export default class HomeMiddleView extends Component {
    //接收上级传递过来的数据
    static getInitialState(){
        return {
            dataObj:{}
        }
    };
    render() {

        /*
        *   页面分析: 在该组件中 左边为一个大的View 右边为两个垂直排列的view 而且右边的view和下边控件样式相同 因此考虑把右边的控件再抽取出来 封装成为一个单独的组件
        * */
        //获取左边的数据
        var dataLeft = this.props.dataObj.dataLeft;
        return (
            <View style={styles.container}>
                {/*设置左边的View*/}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:dataLeft.img1}} style={styles.imgStyle}/>
                    <Image source={{uri:dataLeft.img2}} style={styles.imgStyle}/>
                    <Text>{dataLeft.title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>{dataLeft.price}</Text>
                        <Text>{dataLeft.sale}</Text>
                    </View>

                </View>
                {/*设置右边的View*/}
                <View>
                    {this.renderRightItem()}
                </View>
            </View>
        );
    }
    //创建右边的控件
    renderRightItem(){
    //    获取数据
        var rightData = this.props.dataObj.dataRight;

    //    定义组件数组
        var itemArr= [];
        for(var i = 0 ; i < rightData.length ; i ++){
            //创建组件装入数组
            itemArr.push(
                <HomeMiddleCommonView key={i} data={rightData[i]}/>
            )
        }
        return itemArr;

}}

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        flexDirection:'row',

    },
    leftViewStyle:{
        backgroundColor:'white',
        width:screenW * 0.5,
        height:131,
        alignItems:'center',
        justifyContent:'space-around',
        marginRight:1,
    },
    imgStyle:{
        width:screenW * 0.3,
        height:screenW * 0.1,
        resizeMode:'contain',
    }
});
