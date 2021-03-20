import React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, FlatList, Modal, StyleSheet, Button, Alert, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { Loading } from './LoadingComponent';
import { Card, Icon } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

class AboutForm extends Component {

    constructor(props){
        super(props);
    } 

    render(){
        return (
          <WebView 
          startInLoadingState={true}
          source={{ uri:'https://www.covid19india.org/'}}
          renderLoading={() => <Loading/>}
          />
        );
      }
}

export default (AboutForm);