import 'react-native-gesture-handler';
import * as React from 'react';
import Nevigate from './components/navigationComponent';
import { Loading } from './components/LoadingComponent';

export default class App extends React.Component {

  render(){
    return(   
      <Nevigate/>
    );
  }
}
