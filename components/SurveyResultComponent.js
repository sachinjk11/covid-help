import React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, FlatList, Modal, StyleSheet, Alert, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Tile } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { BannerAd } from './bannerAd';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const defaultAnswers = {};

const Separator = () => (
    <View style={styles.separator} />
  );

class SurveyResultForm extends Component {

    constructor(props){
        super(props);
        this.state = {
             header : 'test',
             details : ''
        };
    }
   
    componentWillMount(){
        const answers = this.props.route.params.surveyAnswers;//this.props.navigation.getParam('surveyAnswers', defaultAnswers);
        console.log('ans'+answers.contact1.value);

        if(answers.contact1.value == 'Yes'|| answers.contact2.value == 'Yes'){
            
            if(answers.symptoms1.value == 'Yes' || answers.symptoms2.value == 'Yes'  || answers.symptoms3.value == 'Yes' ||
                answers.symptoms4.value == 'Yes' || answers.symptoms5.value == 'Yes'  || answers.symptoms6.value == 'Yes' || 
                answers.symptoms7.value == 'Yes' || answers.symptoms8.value == 'Yes'  || answers.symptoms9.value == 'Yes' ){

                        if(answers.Emergency1.value == 'Yes' || answers.Emergency2.value == 'Yes'){
                            
                         this.setState({header : 'High Risk'});
                         this.setState({details : 'Cotact local emergency number, This may be a medical emergency.\n\nYour breathing trouble may be caused by a life-threatening lung or heart problem.\n\nYou may need emergency treatment on the way to the hospital.'});
                        
                        } else {

                            this.setState({header:'Medium Risk'});
                            this.setState({details:'Contact a health care provider within 12 hours, Your answers indicate that you may have possible symptoms of COVID-19.\n\nBased on this information, you should speak to your health care provider.\n\nYou may be directed to a testing site.'});
                        }
                } else {

                    this.setState({header:'Low Risk'});
                    this.setState({details:'Your answers indicate that you do not have any symptoms that currently suggest the need for COVID-19 testing.'});

                }

        } else {
                    if(answers.symptoms1.value == 'Yes' || answers.symptoms2.value == 'Yes'  || answers.symptoms3.value == 'Yes' ||
                        answers.symptoms4.value == 'Yes' || answers.symptoms5.value == 'Yes'  || answers.symptoms6.value == 'Yes' || 
                        answers.symptoms7.value == 'Yes' || answers.symptoms8.value == 'Yes'  || answers.symptoms9.value == 'Yes' ||
                        answers.Emergency1.value == 'Yes' || answers.Emergency2.value == 'Yes' ){

                            this.setState({header:'Low Risk'});
                            this.setState({details:'Your answers indicate that you may have possible symptoms of COVID-19.\n\nBased on this information, you should speak to your health care provider.\n\nYou may be directed to a testing site.'});

                        } else {

                            this.setState({header:'Safe Zone'});
                            this.setState({details:'Your answers indicate that you do not have any symptoms that currently suggest the no need for COVID-19 testing.'});
                    
                    }
        }
    }
    render(){
       
        const { navigate } = this.props.navigation;
        return(
            <ScrollView>
            <BannerAd/>
            <View>
                <Card title={this.state.header}
                titleStyle={{textAlign: 'center'}}
                >
                    <Text style={{marginTop: 10, marginBottom: 10}}>
                        {this.state.details}
                    </Text>
                </Card>
                <Separator />                  
                    <Button
                        buttonStyle={{marginTop : 15,marginHorizontal: 16}}
                        icon={
                            <Foundation name="refresh" size={24} color="white" />
                            }
                        titleStyle={{ marginLeft: 10 }}
                        title="Take The Assessment Again"
                        onPress={()=>{navigate('Self Assessment',{onBack: () => this.refresh()});}}
                    />
                <Separator />        
                <Card
                title={'How It Spreads'}
                titleStyle={{textAlign: 'center'}}
                image={require('../assets/prv2.jpg')}
                imageStyle={{
                    resizeMode: 'contain'
                }}>
                </Card> 
                <Card
                title={'Prevention'}
                titleStyle={{textAlign: 'center'}}
                image={require('../assets/sp1.jpg')}
                imageStyle={{
                    resizeMode: 'contain'
                }}>
                </Card> 
                <Card
                title={'Symptoms'}
                titleStyle={{textAlign: 'center'}}
                image={require('../assets/sym2.jpg')}
                imageStyle={{
                    resizeMode: 'contain'
                }}>
                </Card>    
            </View>
            <BannerAd/>
            </ScrollView>
        );
    }                 
}

const styles = StyleSheet.create({
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

export default (SurveyResultForm);