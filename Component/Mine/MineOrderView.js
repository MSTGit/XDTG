/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image,View,Button,TouchableOpacity} from 'react-native';
//导入本地数据
import orderViewData from './OrderViewData.json'
//export default 一个文件中只允许有一个类使用export default 修饰
export default class MineOrderView extends Component {

    setupSubOrderView(){
        var subItemArr = [];
        for (var i = 0 ; i < orderViewData.length ; i ++){
            var itemData = orderViewData[i];

            subItemArr.push(
                <MineOrderSubView  key={i} item={itemData}/>
            )
        }
        return subItemArr;
    }
    render() {

        return (
            <View style={styles.container}>

                {this.setupSubOrderView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,

        backgroundColor:'white',
        //  父控件中  设置主轴排列方式
        flexDirection:'row',
    },



});

//封装一个子控件对象 将数据和视图绑定到一起
class MineOrderSubView extends Component{
    //初始化一个item 用来保存每个subOrder的数据对象
    static getInitialState(){
        return {
            item:{},
        }
    }

    render() {
        return (
            <TouchableOpacity style={SubStyles.subItemStyle}  onPress={(key)=>{
                alert(this.props.item.title)
            }}>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:this.props.item.icon}} style={SubStyles.subItemImageStyle} />
                    <Text style={SubStyles.subItemTextStyle}>{this.props.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    };


};
const SubStyles = StyleSheet.create({
    subItemTextStyle:{
        color:'#666',
        fontSize:13,
        marginBottom:8,//设置文字距离底部的间距
    },
    subItemImageStyle:{
        width:40,
        height:30,
        resizeMode:'contain',//设置内容模式
        //设置上边距
        marginTop:8,
        //设置下边距
        marginBottom:8,
    },
    subItemStyle:{
        flex:1,
        //设置控件中只控件的对齐方式
        justifyContent:'center',//横向居中对齐
        alignItems:'center',//纵向居中对齐
    },
});
