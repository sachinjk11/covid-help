import React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, FlatList, Modal, StyleSheet, Button, Alert, ScrollView, Share } from 'react-native';
import { Card, Icon } from 'react-native-elements';


class HomeForm extends Component {

    constructor(props){
        super(props);
    }

    myName(){
        const { navigate } = this.props.navigation;
        navigate('About', { name: 'sachin kore' });
    }

    render(){
        const { navigate } = this.props.navigation;

        const renderItem = ({item, index}) => {
            return(
                <Card
                    title={item.title}
                    image={{uri:item.img}}
                    imageStyle={{
                        resizeMode: 'contain'
                    }}
                >
                    <Text style={{margin: 10, textAlign: 'justify'}}> {item.desc}</Text>
                    <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' 
                    onPress={()=>{navigate('Details', { name:item.uid });}}/>
                </Card>
            );
        }

        return(
            <ScrollView>
                <FlatList  
                        data={this.props.products}
                        renderItem={renderItem}
                />  
            </ScrollView>
        );
    }
}

export default (HomeForm);