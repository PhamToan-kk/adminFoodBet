import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import{
  Home,
  AddFood,
  Foods,
  OrderList

} from '../containers'
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {VectorIcon,Badge} from '../components';
import {Colors} from '../theme'


const Tab = createBottomTabNavigator();

const tabs = {
  Home: {
    // < Screen name
    labelStyle: {
      color: Colors.red_fresh,
    },
    icon: {
      component: () => (
        <VectorIcon
          MaterialCommunityIcons
          name="home"
          size={25}
          color={Colors.red_fresh}
        />
      ),
      activeColor:Colors.red_fresh,
      // inactiveColor: 'red',
    },
    background: {
      activeColor: Colors.Lavender
      // inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Foods: {
    // < Screen name
    labelStyle: {
      color: Colors.red_fresh,
    },
    icon: {
      component: () => (
        <VectorIcon MaterialCommunityIcons name="layers-search-outline" color={Colors.red_fresh} size={23} />
      ),
      activeColor: Colors.red_fresh,
      inactiveColor: 'blue',
    },
    background: {
      activeColor: Colors.Lavender,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  OrderList: {
    // < Screen name
    labelStyle: {
      color: Colors.red_fresh,
    },
    icon: {
      component: () => {
        
        return(
          <>
            <Badge iconSize={30} />
            <VectorIcon FontAwesome5 name="hornbill" color={Colors.red_fresh} size={23} />
          </>

      )},
      activeColor: Colors.red_fresh,
      inactiveColor: 'blue',
    },
    background: {
      activeColor: Colors.Lavender,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  

};

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <AnimatedTabBar
          tabs={tabs}
          {...props}
          iconSize={24}
        />
      )}>
      <Tab.Screen component={Home} name={'Home'} />
      <Tab.Screen component={Foods} name={'Foods'} />
      <Tab.Screen component={OrderList} name={'OrderList'}  options={{ tabBarBadge: 3}} />

    </Tab.Navigator>
  );
};
