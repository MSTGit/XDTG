/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image,TouchableOpacity, View,Button} from 'react-native';
import Dimensions from 'Dimensions';
var screenW = Dimensions.get('window').width;

export default class HomeMiddleCommonView extends Component {
    //接收上级传递过来的数据
    static getInitialState(){
        return {
            data:{}
        }
    };
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>{alert(this.props.data.title)}}>
                    {/*设置左边内容*/}
                <View style={styles.leftViewStyle}>
                    <Text style={{color:this.props.data.titleColor, fontSize:18}}>{this.props.data.title}</Text>
                    <Text numberOfLines={1} style={{color:this.props.data.titleColor,marginTop:5}}>{this.props.data.subTitle}</Text>
                </View>
                    {/*设置右边内容*/}
                    <Image source={{uri : this.props.data.rightImage}} style={styles.rightImageStyle}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom:1,
        flexDirection:'row',//设置排列方式为水平方向
        height:65,
        backgroundColor: 'white',
        width:screenW * 0.5 - 1,
        alignItems:'center',//设置侧轴方向居中显示
        justifyContent:'space-between',//设置两端对齐
        paddingLeft:10,
        paddingRight:10,
        marginRight:1,
    },
    leftViewStyle:{
        flex:1,
    },
    rightImageStyle:{
        width:60,
        height:50,
        resizeMode:'contain',
    },
});
