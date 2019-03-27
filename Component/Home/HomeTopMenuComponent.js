/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {Platform, StyleSheet, Text, View,ScrollView,Button,ListView,Image,TouchableOpacity} from 'react-native';
import HomeTopListView from './HomeTopListView'

//定义常亮
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;
/*
* 页面分析:
* scrollview中嵌套listview
* */

export default class HomeTopMenuComponent extends Component {
    static getInitialState(){
        return {
            //接收从外部传过来的数据
            data:[]

    }}
    constructor(props) {
      super(props);
      this.state = {
          selectIndex:0
      };
    }
    render() {

        const {navigation}=this.props;
        return (
            <View style={styles.container}>

                {/*往scrollview中放子控件*/}
                {/*上部分子控件*/}
                <ScrollView style={styles.topScrollViewStyle}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e)=>this.onMomentumScrollEnd(e)}
                >
                    {this.renderItem()}
                </ScrollView>
                {/*下部分子控件*/}
                {this.renderIndicator()}
            </View>
        );
    }
    renderItem(){
        var itemsArr = [];
        for (var i = 0 ; i < this.props.data.length ; i ++){
            itemsArr.push(
                <HomeTopListView key={i} data={this.props.data[i]}/>
            )
        }
        return itemsArr;
    }
    //监听滚动 当滚动即将停止的时候 ,更新指示器
    onMomentumScrollEnd(e){
        //获取当前scrollview的偏移量
        var offset = e.nativeEvent.contentOffset.x;
        //计算偏移量值
        var index = Math.floor(offset / screenW);

        this.setState({
            selectIndex: index
        })};


    //创建底部指示器view
    renderIndicator(){
        return (
            <View style={styles.indicatorViewStyle}>

                {this.renderIndicatorText()}
            </View>
        )
    }
    //创建指示器view中子控件
    renderIndicatorText(){
        var indicatorTextIArr = [];
        for (var i = 0 ; i < this.props.data.length ; i ++){

            var style = (this.state.selectIndex === i) ? {color:'rgba(255, 97, 2, 1.0)'}: {color: '#666'};
            indicatorTextIArr.push(
                <Text key={i} style={[{fontSize: 20},style, {marginRight:10},{textAlign:'center'}]}>&bull;</Text>
            )
        }
        return indicatorTextIArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:190,
        backgroundColor:'black'
    },
    topScrollViewStyle:{

        backgroundColor:'white',
    },
    topItemStyle:{
        width:screenW,
        height:160,
        backgroundColor:'orange',
    },
    indicatorViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        width:screenW,
        height:30,
    },
});
