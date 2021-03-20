import React from 'react';
import { Component } from 'react';
import { Text, View, Button, FlatList, Modal, StyleSheet, Alert, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { BannerAd } from './bannerAd';
const Separator = () => (
    <View style={styles.separator} />
  );

class ePassForm extends Component {

    constructor(props){
        super(props);
    }

    logout(){
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <ScrollView>
            <SafeAreaView style={styles.container}>
                    <BannerAd/>
                    <Separator />   
                    <Button
                        title="Maharashtra"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://covid19.mhpolice.in/' });}}
                    />
                    <Separator />             
                    <Button
                        title="Chandigarh"
                        onPress={()=>{navigate('Apply e-Pass', { url:'http://admser.chd.nic.in/dpc/' });}}
                    />
                    <Separator />             
                    <Button
                        title="Sikkim"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://eservices.sikkim.gov.in/renderApplicationForm.do;jsessionid=A6BD28A550FFDABD3FC406CA334F8D3F?serviceId=13640008&UUID=67201fe9-cfae-4659-a70d-ed4d472a25af&grievDefined=0&serviceLinkRequired=No&directService=true&userLoggedIn=N&tempId=4843&source=CTZN&OWASP_CSRFTOKEN=FUZS-A6PA-L6B2-5ENF-DDKH-EXF3-FHW4-EB9F' });}}
                    />
                    <Separator />             
                    <Button
                        title="Uttarakhand"
                        onPress={()=>{navigate('Apply e-Pass', { url:'http://smartcitydehradun.uk.gov.in/e-pass' });}}
                    />
                     <Separator />   
                     <BannerAd/>
                    <Separator />             
                    <Button
                        title="Chhattisgarh"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://raipur.gov.in/cg-covid-19-epass/' });}}
                    />
                    <Separator />             
                    <Button
                        title="Jharkhand"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://ranchi.nic.in/e-pass/' });}}
                    />
                    <Separator />             
                    <Button
                        title="Gujarat"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://www.digitalgujarat.gov.in/Citizen/CitizenService.aspx' });}}
                    />
                    <Separator />             
                    <Button
                        title=" Karnataka"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://sevasindhu.karnataka.gov.in/Sevasindhu/English' });}}
                    />
                    <Separator />     
                    <BannerAd/>
                    <Separator />              
                    <Button
                        title="Tamil Nadu"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://tnepass.tnega.org/#/user/pass' });}}
                    />
                    <Separator />             
                    <Button
                        title="Arunachal Pradesh"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://eservice.arunachal.gov.in/' });}}
                    />
                     <Separator />             
                    <Button
                        title="Kerala"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://covid19jagratha.kerala.nic.in/home/addDomestic' });}}
                    />
                     <Separator />             
                    <Button
                        title="Telengana"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://policeportal.tspolice.gov.in/' });}}
                    />
                     <Separator />   
                     <BannerAd/>
                    <Separator />                
                    <Button
                        title="punjab"
                        onPress={()=>{navigate('Apply e-Pass', { url:'http://covidhelp.punjab.gov.in/' });}}
                    />
                     <Separator />             
                    <Button
                        title="Himachal Pradesh"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://covid19epass.hp.gov.in' });}}
                    />
                    <Separator />             
                    <Button
                        title="assam"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://eservices.assam.gov.in/renderApplicationForm.do;jsessionid=306C9F80382F7B737A5157831A30FC12?serviceId=15330010&UUID=036f1bd6-d321-4200-a540-fc5ff717ef83&grievDefined=0&serviceLinkRequired=No&directService=true&userLoggedIn=N&tempId=5969&source=CTZN&OWASP_CSRFTOKEN=TC9I-15NJ-LIQM-G3QG-OMQ5-9GO4-BER3-80W5' });}}
                    />
                    <Separator />             
                    <Button
                        title="rajasthan"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://sso.rajasthan.gov.in/signin' });}}
                    />
                    <Separator /> 
                    <BannerAd/>
                    <Separator />                  
                    <Button
                        title="Madhya Pradesh"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://mapit.gov.in/covid-19/' });}}
                    />
                    <Separator />             
                    <Button
                        title="Delhi"
                        onPress={()=>{navigate('Apply e-Pass', { url:'https://epass.jantasamvad.org/epass/relief/english/' });}}
                    />
                    <Separator />    
                    <BannerAd/>
                    <Separator />                       
            </SafeAreaView>
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
  });
export default (ePassForm);