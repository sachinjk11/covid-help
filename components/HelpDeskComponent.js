import React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, FlatList, Linking, StyleSheet } from 'react-native';
import { Card, ListItem, Icon, Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { BannerAd } from './bannerAd';

const Separator = () => (
    <View style={styles.separator} />
  );

  
class HelpDeskForm extends Component {

    constructor(props){
        super(props);
    }

    sendOnWhatsApp=() => {
            let url = 'whatsapp://send?text=Hi&phone=919013151515';
            Linking.openURL(url).then((data) => {
              console.log('WhatsApp Opened');
            }).catch(() => {
              alert('Make sure Whatsapp installed on your device');
            });
    }

    render(){
        return(
            <ScrollView>
                <BannerAd/>
                <Separator />
                <View style={styles.container}>
                   <Button
                        icon={
                            <FontAwesome name="whatsapp" size={24} color="white" />
                            }
                        title="WhatsApp Corona Helpdesk"
                        titleStyle={{ marginLeft: 10 }}
                        onPress={this.sendOnWhatsApp}
                    />
                </View>  
                <Separator />   
                  <Card title={'Andhra Pradesh'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text >
                        {'0866-2410978'}
                    </Text>
                </Card>

                <Card title={'Arunachal Pradesh'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text >
                        {'104'}
                    </Text>
                </Card>

                <Card title={'Assam'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text >
                        {'104'}
                    </Text>
                </Card>

                <Card title={'Bihar'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text >
                        {'104\n0612-2217681\n2233806'}
                    </Text>
                </Card>
                <BannerAd/>
                <Card title={'Chhattisgarh'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text >
                        {'0771-282113\n2446607\n2440608'}
                    </Text>
                </Card>

                <Card title={'Goa'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text >
                        {'104'}
                    </Text>
                </Card>

                <Card title={'Gujarat'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text >
                        {'104\n079-23251900\n23251908'}
                    </Text>
                </Card>

                <Card title={'Haryana'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text >
                        {'0866-2410978'}
                    </Text>
                </Card>
                <BannerAd/>
                <Card title={'Himachal Pradesh'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text >
                        {'0866-2410978'}
                    </Text>
                </Card>

                <Card title={'Jharkhand'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'0866-2410978'}
                    </Text>
                </Card>

                <Card title={'Karnataka'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'0866-2410978'}
                    </Text>
                </Card>
                <BannerAd/>
                <Card title={'Madhya Pradesh'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'104\n1075\n181\n0755-2411180\n2704201\n0729-22344'}
                    </Text>
                </Card>

                <Card title={'Maharashtra'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'022-22024535'}
                    </Text>
                </Card>

                <Card title={'Manipur'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'1800-345-3818'}
                    </Text>
                </Card>
                <BannerAd/>
                <Card title={'Kerala'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'0471-2552056\n25521056'}
                    </Text>
                </Card>

                <Card title={'Odisha'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'104\n0674-2534177'}
                    </Text>
                </Card>

                <Card title={'Punjab'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'104'}
                    </Text>
                </Card>

                <Card title={'Rajasthan'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'0141-2225000\n2225624'}
                    </Text>
                </Card>
                <BannerAd/>
                <Card title={'Tamil Nadu'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'044-29510500\n25615025'}
                    </Text>
                </Card>

                <Card title={'Telangana'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'104\n040-23286100'}
                    </Text>
                </Card>

                <Card title={'Uttar Pradesh'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'0522-2237515'}
                    </Text>
                </Card>

                <Card title={'Uttarakhand'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'104'}
                    </Text>
                </Card>
                <BannerAd/>
                <Card title={'West Bengal'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'1800-313-444222\n033-23412600'}
                    </Text>
                </Card>

                <Card title={'Chandigarh'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'0172-2752038\n2752031\n2704048'}
                    </Text>
                </Card>

                <Card title={'Delhi'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'104\n011-22307145'}
                    </Text>
                </Card>

                <Card title={'Ladakh'}
                    titleStyle={{textAlign: 'center'}}>
                    <Text>
                        {'01982-256462\n257416\n258960'}
                    </Text>
                </Card>
                <BannerAd/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop : 15,
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    bottomBanner: {
        position: "absolute",
        bottom: 0
      },
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }
  });

export default (HelpDeskForm);