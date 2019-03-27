/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text,Image, View,Button,TouchableOpacity} from 'react-native';

//导入组件
import MineCommonItem from './../Mine/MineCommonItem'



export default class HomeShopCenterView extends Component {
    //接收上级传递过来的数据
    static getInitialState(){
        return {
            data:{},
            pushToHome:{}//中转底层传递过来的事件
        }
    };
    render() {


        return (
            <View style={styles.container}>
            {/*导航*/}
            <MineCommonItem
                leftImgName='gwzx'
                leftText= '购物中心'
                rightText= {this.props.data.tips}
            />
            {/*商场*/}
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{height:130,backgroundColor:'white'}}
            >
                {this.renderItem()}
            </ScrollView>
            </View>
        );
    }
    renderItem(){
        //获取到数据数组
        var dataArr = this.props.data.data;
    //    组件数组
        var itemArr = [];
        for (var i = 0 ; i < dataArr.length ; i++){
            //获取当前的对象
            var item = dataArr[i];
            // debugger;
            // console.log(item);
        //    创建组件 装入数组
            itemArr.push(
               < ShopView
               itemObj={item} key={i} popToPreView={(data)=>this.dealWithNextView(data)}
               />
            )
        }
        return itemArr;
    }
    //处理底层传递过来的事件
    dealWithNextView(data){
        this.props.pushToHome(data);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      marginTop:15,
    },
    showViewStyle:{
      margin:8,
      height:120,
    },
    shopImgStyle:{
        width:120,
        height:90,
        borderRadius:8,
    },
    showTextViewStyle:{
    backgroundColor:'orange',
        padding:2,
        borderBottomRightRadius:5,
        borderTopRightRadius:5,
        position:'absolute',//设置定位
        left:0,
        top:60,
    },
    showTextStyle:{
        backgroundColor:'rgba(0,0,0,0)',
        color:'white',
    }

});


//单独封装一个组件
class ShopView extends Component {
    //接收上级传递过来的数据
    static getInitialState(){
        return {
            itemObj:{},
            popToPreView:{}//用于向上级传递数据的函数
        }
    };
    render(){
        return (
            <TouchableOpacity style={styles.showViewStyle} onPress={()=>this.pushToDetail(this.props.itemObj.detailurl)}>
                <Image source={{uri:this.props.itemObj.img}} style={styles.shopImgStyle}/>
                <Text>{this.props.itemObj.name}</Text>
                <View style={styles.showTextViewStyle}>
                    <Text style={styles.showTextStyle}>{this.props.itemObj.showtext.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    pushToDetail(data){
        //实现popToPreView
        //处理URL
       var newData = this.dealWithShopRUL(data);
        this.props.popToPreView(newData);
    }
    //处理URL
    dealWithShopRUL(data){
            //最终的URL
        var realURL ;
            //URL后缀
            const last_url = '';
            if (data.search('imeituan') !== -1){//找到了
                //替换
                realURL = data.replace('imeituan://www.meituan.com/web/?url=','') + last_url;
            }
            return realURL;
    }
}