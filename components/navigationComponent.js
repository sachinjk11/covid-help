import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './TestCompnent';
import ePass from './ePassComponent';
import ePassApply from './ePassApplyComponent';
import HelpDesk from './HelpDeskComponent';
import Count from './CountComponent';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import Survey from './SurveyComponent';
import SurveyResult from './SurveyResultComponent';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();
const TestStack = createStackNavigator();
const InfoStack = createStackNavigator();
const CountStack = createStackNavigator();
const HelpDeskStack = createStackNavigator();
const SurveyStack = createStackNavigator();


function SurveyStackScreen() {
    return (
      <SurveyStack.Navigator>
       <SurveyStack.Screen name="Self Assessment" component={Survey} />
       <SurveyStack.Screen name="Assessment Result" component={SurveyResult} />        
      </SurveyStack.Navigator>
     );
}

function InfoStackScreen() {
    return (
      <InfoStack.Navigator>
       <InfoStack.Screen name="e-Pass" component={ePass} /> 
       <InfoStack.Screen name="Apply e-Pass" component={ePassApply} />             
      </InfoStack.Navigator>
     );
}

function CountStackScreen() {
    return (
      <CountStack.Navigator>
       <CountStack.Screen name="Statistics" component={Count} />             
      </CountStack.Navigator>
     );
}

function HelpDeskStackScreen() {
    return (
      <HelpDeskStack.Navigator>
       <HelpDeskStack.Screen name="Help Desk" component={HelpDesk} />             
      </HelpDeskStack.Navigator>
     );
}


function MyTabs(){
    return (
        <Tab.Navigator
        activeColor="#000000"
        inactiveColor="#808080"
        barStyle={{ backgroundColor: '#FFFFFF' }}
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
        >
        <Tab.Screen
            name="Assessment"
            component={SurveyStackScreen}
            options={{
            tabBarLabel: 'Assessment',
            tabBarIcon: ({ color }) => (
                <FontAwesome5 name="tasks" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="e-Pass"
            component={InfoStackScreen}
            options={{
            tabBarLabel: 'e-Pass',
            tabBarIcon: ({ color }) => (
                <Fontisto name="train-ticket" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Statistics"
            component={CountStackScreen}
            options={{
            tabBarLabel: 'Statistics',
            tabBarIcon: ({ color }) => (
                <Ionicons name="md-stats" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Help Desk"
            component={HelpDeskStackScreen}
            options={{
            tabBarLabel: 'Help Desk',
            tabBarIcon: ({ color }) => (
                <AntDesign name="contacts" color={color} size={26} />
            ),
            }}
        />
        </Tab.Navigator>
    );
}

class Nevigate extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return (
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          );
    }
}

export default Nevigate;