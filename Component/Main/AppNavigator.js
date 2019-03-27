import {createStackNavigator,createBottomTabNavigator} from 'react-navigation'
import Home from '../../Component/Home/Home'
import Mine from '../../Component/Mine/Mine'
import More from '../../Component/More/More'
import Shop from '../../Component/Shop/Shop'

//导入二级y页面
import HomeDetail from '../../Component/Home/HomeDetail'
import {Platform, StyleSheet, Text, View,Button,TouchableOpacity,Image} from 'react-native';
import React, {Component} from 'react';
export const AppHomeStackNavigator = createStackNavigator ({
    HomePageNav:{
        screen:Home,
        navigationOptions:{
            title:'首页',
            headerTintColor:'white',
            headerStyle: {
                backgroundColor: 'rgba(255, 97, 2, 1.0)',
            },
        },

    },
    HomeD : {screen : HomeDetail,
        navigationOptions:{
            title:'详情页',
            headerTintColor:'white',
            headerStyle: {
                backgroundColor: 'rgba(255, 97, 2, 1.0)',
            },
        },
    },
});
export const AppMineStackNavigator = createStackNavigator ({
    MinePageNav:{
        screen:Mine,
        navigationOptions:{
            title:'我的',
            header:null //该属性为null则是设置导航栏为隐藏 只会隐藏当前页面
        }
    },
});
export const AppShopStackNavigator = createStackNavigator ({
    ShopPageNav:{
        screen:Shop,
        navigationOptions:{
            title:'商城',
            headerTintColor:'white',
            headerStyle: {
                backgroundColor: 'rgba(4, 193, 174, 1.0)',
            },
        }
    },
});
export const AppMoreStackNavigator = createStackNavigator ({
    MorePageNav:{
        screen:More,
        navigationOptions:{
            title:'更多',
            headerTintColor:'white',
            headerStyle: {
                backgroundColor: 'rgba(255, 97, 2, 1.0)',
            },
            headerRight:(<TouchableOpacity onPress={()=>{alert(0)}} style={{marginRight:15}}>
                <Image source={{uri:'icon_mine_setting'}} style={{width:24,height:24}}/>
            </TouchableOpacity>),


        }
    },
});

export const AppBottomTabNavigator = createBottomTabNavigator({
    HomePage:{
        screen:AppHomeStackNavigator,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image
                        source={{uri:focused ? 'icon_tabbar_homepage_selected' : 'icon_tabbar_homepage'}}
                        style={styles.tabbarImageStyle}
                    />
                )
            })
    } },
        ShopPage:{
            screen:AppShopStackNavigator,
            navigationOptions:{
                tabBarLabel:'商城',
                tabBarIcon:(({tintColor,focused}) => {
                    return(
                        <Image
                            source={{uri:focused ? 'icon_tabbar_merchant_selected' : 'icon_tabbar_merchant_normal'}}
                            style={styles.tabbarImageStyle}
                        />
                    )
                })
            }
        },

    MinePage:{
        screen:AppMineStackNavigator,
        navigationOptions:{
            tabBarLabel:'我的',

            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image
                        source={{uri:focused ? 'icon_tabbar_mine_selected' : 'icon_tabbar_mine'}}
                        style={styles.tabbarImageStyle}
                    />
                )
            })
        }
    },
        MorePage:{
            screen:AppMoreStackNavigator,
            navigationOptions:{
                tabBarLabel:'更多',
                tabBarIcon:(({tintColor,focused}) => {
                    return(
                        <Image
                            source={{uri:focused ? 'icon_tabbar_misc_selected' : 'icon_tabbar_misc'}}
                            style={styles.tabbarImageStyle}
                        />
                    )
                })
            }
        },


},{
        //这里设置的是一般情况下Tabbar共同的属性


        backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        tabBarOptions:{
            activeTintColor:'rgba(255, 97, 2, 1.0)', // label和icon的前景色 活跃状态下（选中）。
            labelStyle:{
                fontSize: 12,
            }, //label的样式。
        }
    }
);

const styles = StyleSheet.create({
    tabbarImageStyle:{
        width:26,
        height:26,
    },
});