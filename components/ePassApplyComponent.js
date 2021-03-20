import React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, FlatList, Modal, StyleSheet, Button, Alert, SafeAreaView, Share } from 'react-native';
import { WebView } from 'react-native-webview';
import { Loading } from './LoadingComponent';
import { ScrollView } from 'react-native-gesture-handler';

const scalesPageToFit = Platform.OS === 'android';

class AboutForm extends Component {

    constructor(props){
        super(props);
    }

    logout(){
    }

    render(){
        const url = this.props.route.params.url;
        return(
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <WebView 
            scrollEnabled={true}
            startInLoadingState={true}
            source={{ uri:url }}
            renderLoading={() => <Loading/>}
            />
           </ScrollView>
        );
    }
}

export default (AboutForm);