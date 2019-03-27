/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image, Switch,TouchableOpacity} from 'react-native';



export default class MineCommonItem extends Component {

    //初始化属性 只会调用一次 需要用static修饰
    static getInitialState () {
        return {
            leftImgName:'',
            leftText: '',
            rightText: '',
            rightImgName:'',
        }
    }
    //状态机
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    //设置右边的内容
    setUpRightContent(){
        //判断右边显示的是箭头还是图片  箭头和右边的文字是一起的 有图片就不会出现右边文字和箭头
        if (!(this.props.rightImgName === '' || this.props.rightImgName === undefined)){//有图片名 说明有图片

            return (<Image source={{uri:this.props.rightImgName}} style={{marginRight:8,width:24,height:13 }}/>)
        } else {//否则没有图片
            return (<View style={styles.rightContentViewStyle}>{/*包装一个View 用来显示里面所有的子控件*/}
                {/*设置右边的文字*/}
                <Text style={styles.rightTextStyle}>{this.props.rightText}</Text>
                {/*设置右边图片*/}
                <Image source={{uri:'icon_cell_rightArrow'}} style={styles.rightImageStyle} />
            </View>)
        }
    };
    //设置左边内容
    setUpLeftContent(){
        return (
            //alert(this.props.leftText),
            //因为return返回的时候 只能返回一个对象 所以左边的组件 需要通过一个View将所有的组件包装起来返回回去
            <View style={styles.leftViewStyle}>
                {/*做边的icon*/}
                <Image source={{uri:this.props.leftImgName}} style={styles.leftImgStyle}/>
                {/*左边文字*/}

                <Text style={styles.leftTextStyle}>{this.props.leftText}</Text>
            </View>
        )
    }
    render() {
        //获取到当前的导航控制器
        const {navigation} = this.props;

        return (
            <TouchableOpacity activeOpacity={0.9} style={styles.opacityStyle}>
                <View style={styles.container}>
                    {/*设置左边组件*/}
                    {this.setUpLeftContent()}
                    {/*//在组件中调用函数 需要传递的是一个对象 所以需要用大括号包装起来*/}
                    {/*设置右边组件*/}
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
    leftViewStyle:{

        //设置主轴排列方式
        flexDirection:'row',
        //设置副轴对齐方式
        alignItems:'center',
    //    设置左间距
        paddingLeft:8,
    },
    leftImgStyle:{
        height:24,
        width:24,
    //    设置圆角
        borderRadius:12,

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

    },
    rightContentViewStyle:{
        height:44,

        marginRight:8,//设置距离右边距的距离
        flexDirection:'row',//设置主轴方向

        alignItems:'center',//设置侧轴对齐方式

    }
});
