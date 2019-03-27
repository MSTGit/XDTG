/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image, Switch,TouchableOpacity} from 'react-native';



export default class MoreCommonItem extends Component {

    //初始化属性 只会调用一次 需要用static修饰
    static getInitialState () {
        return {
            leftText: '',
            rightText: '',
            rightSwitch: false,
        }
    }
    //状态机
    constructor(props) {
      super(props);
      this.state = {
            isSwitchOn:true,//定义一个属性 记录开关的状态
      };
    }
    setUpRightContent(){


            //判断右边显示的是箭头还是开关  箭头和右边的文字是一起的 有开关就不会出现右边文字和箭头
            if (this.props.isSwitch){
                return (<Switch style={{marginRight:8}} value = {this.state.isSwitchOn} onValueChange={()=>{
                //
                    var currentState = this.state.isSwitchOn;
                    this.state=({
                        isSwitchOn: !currentState
                    });
                    if (this.state.isSwitchOn){
                        alert(0)
                    }
                }



                } />) //需要把return写到里面 不能写到外面将if语句包括在一起
            } else {
                return (<View style={styles.rightContentViewStyle}>
                    <Text style={styles.rightTextStyle}>{this.props.rightText}</Text>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightImageStyle} />
                </View>)
            }



    };
    render() {
        //获取到当前的导航控制器
        const {navigation} = this.props;

        return (
            <TouchableOpacity activeOpacity={0.9} style={styles.opacityStyle}>
                <View style={styles.container}>
                    <Text style={styles.leftTextStyle}>{this.props.leftText}</Text>

                    {/*//在组件中调用函数 需要传递的是一个对象 所以需要用大括号包装起来*/}
                    {this.setUpRightContent()}
                </View>

            </TouchableOpacity>

        );

    }

}


const styles = StyleSheet.create({
    opacityStyle:{

    },
    container:{
        flex:1,
        height:44,
        backgroundColor:'white',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',//设置两端对齐

    },
    leftTextStyle:{
        color:'#333',
        fontSize:14,
        marginLeft:8,
    },
    rightTextStyle:{
        color:'#666',
        fontSize:12,
        marginRight:8,


    },
    rightImageStyle:{
        height:13,
        width:8,
        // position:'absolute',//这里直接通过定位的方式,来设置控件的位置 也可以设置对齐方式来设置 不过可能回稍微麻烦些
        // right:8,

    },
    rightContentViewStyle:{
        height:44,

        marginRight:8,//设置距离右边距的距离
        flexDirection:'row',//设置主轴方向

        alignItems:'center',//设置侧轴对齐方式

    }
});
