/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,ListView,Image,TouchableOpacity, Text, View,Button} from 'react-native';

import Dimensions from 'Dimensions';
var screenW = Dimensions.get('window').width;

export default class HomeTopListView extends Component {
    static getInitialState(){
        return {
            //接收父控件传过来的数据
            data:[]
        }
    }
    //创建一个状态机 用于创建listview的数据源
    constructor(props) {
      super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
      this.state = {
          dataSource:ds.cloneWithRows(this.props.data)
      };
    }
    render() {
        return (
            <ListView contentContainerStyle={styles.listViewStyle}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                      scrollEnabled={false}
            />
        );
    }
    renderRow(rowData,SectionID,RowID){
        return (
            <TouchableOpacity style={styles.listViewContentStyle} onPress={()=>{alert(rowData.title)}}
>
                <Image source={{uri:rowData.image}} style={styles.listViewImgStyle}/>
                <Text style={styles.listViewTextStyle}>{rowData.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listViewImgStyle:{
        width:60,
        height:60,
        borderRadius:30,
    },
    listViewTextStyle:{
        textAlign:'center',
        color:'#666',
    },

    listViewStyle:{
        backgroundColor:'white',
        flexWrap:'wrap',
        flexDirection:'row',
        height:170,
        width:screenW,
    },
    listViewContentStyle:{
        width:screenW / 5,
        height:80,
        justifyContent:'center',
        alignItems:'center',
    }
});
