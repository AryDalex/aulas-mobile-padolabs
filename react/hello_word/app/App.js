/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React, {Component} from 'react';
import * as React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from './style';

function HomeScreen({ navegation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
        title="Go to Details"
        onPress={() => navegation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



// class Home extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             counter: 0,
//         }
//     }

//     componentDidMount() {}

//     render() {
//         const {counter} = this.state;
//         return (
//             <View style={styles.screen}>
//                 {/* <Text style={styles.counter}>Contador: {this.state.counter}</Text> */}
//                 <Text style={styles.counter}>Contador: {counter}</Text>
//                 <Button style={styles.button} title="Incrementer" onPress={() => this.setState({counter: this.state.counter + 1})}></Button>
//             </View>
//         );
//     }
// }

// export default Home;
