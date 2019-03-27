/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,ListView,Image,TouchableOpacity, Text, View,Button} from 'react-native';


export default class HomeGuessYouLikeListView extends Component {
    static getInitialState(){
        return {
            data:[],
            api_uri:[]
        }
    }
    //创建数据源
    constructor(props) {
      super(props);
      // var ds = new ListView.dataSource ({rowHasChanged:(r1,r2)=>r1!== r2});
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});

        this.state = {
          dataSource:ds.cloneWithRows([])
      };
    }
    render() {


        return (
            <ListView

                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                enableEmptySections={true}
            />

        );
    }
    //创建ListView
    renderRow(data,sectionID,rowID){
        return (
            <TouchableOpacity style={styles.itemStyle} onPress={()=>{
                alert('你好,你点击了第' + sectionID + '组,第' + rowID + '行');
            }}>
                <Image source={{uri:data.frontImg}} style={styles.itemImageStyle}/>
                <View style={styles.itemRightViewStyle}>
                    <Text style={{color:'#333',fontSize:18,marginRight:50}} numberOfLines={1}>{data.title}</Text>
                    <Text style={{color:'#666',fontSize:14,marginRight:20}} numberOfLines={1}>{data.address}</Text>
                    <Text style={{color:'rgba(253,78,36,1)',fontSize:18}}>人均:{data.avgPrice}</Text>
                    <Text style={styles.rightInfoStyle}>>100m</Text>

                </View>
            </TouchableOpacity>
        )
    }
    //在该方法中从网络上请求数据
    componentDidMount(){
        this.loadDataFromNet();
    }
    //请求网络  接口用不了
    loadDataFromNet(){
        //模拟数据
        var dataArr = [];
        //alert(this.props.data.data.poiInfos.length);
        for (var i = 0 ; i < this.props.data.data.poiInfos.length ; i++){
            dataArr.push(this.props.data.data.poiInfos[i]);
        }

        //更新数据
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(dataArr)
        })
        return;

        fetch(this.props.api_uri)
            .then((response)=>response.json())
            .then((responseData)=>{
            console.log(responseData);
            //更新状态机
            //     this.setState({
            //         dataSource:this.state.dataSource.cloneWithRows(responseData.data)
            //     })
            })
    }
}

const styles = StyleSheet.create({
    itemImageStyle:{
        width:120,
        height:90,
        borderRadius:5,
        marginRight:10,
    },
    itemStyle:{
       borderBottomColor:'#e8e8e8',
       borderBottomWidth:1,
        padding:7,
        flexDirection:'row',
        backgroundColor:'white',
    },
    itemRightViewStyle:{
       flex:1,
        justifyContent:'space-around',
    },
    rightInfoStyle:{
        position:'absolute',
        right:5,
        top:10,
        color:'#666'
    }

});
