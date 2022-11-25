import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './style';

function Weather() {
  return (
    <View style={styles.cabecalho}>
        <View style={styles.cabecalho}>
            <Text>Accra, Ghana</Text>
            <Text>20-Sep-22</Text>
        </View>
        <View style={styles.cabecalho}>
            <Text>20°</Text>
            <Text>Real feel: 20</Text>
            <Text>Cloudy</Text>
        </View>
        <View style={styles.cabecalho}>
            <Text>UV Index</Text>
            <View style={styles.cabecalho}>
                <Text>Humidity</Text>
                <Text>Wind Speed</Text>
                <Text>Rain Probability</Text>
                <Text>Pressure</Text>
            </View>
            <View style={styles.cabecalho}>
                <Text>55</Text>
                <Text>5.00 mph</Text>
                <Text>30%</Text>
                <Text>1023.1 pa</Text>
            </View>
        </View>
    </View>
    // <View style={styles.container}>
    //   <Text>Weather!</Text>
    // </View>
  );
}

function Metrics() {
  return (
    <View style={styles.container}>
      <Text>Metrics!</Text>
    </View>
  );
}

function News() {
  return (
    <View style={styles.container}>
      <Text>News!</Text>
    </View>
  );
}

function Localization() {
  return (
    <View style={styles.container}>
      <Text>Localization!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function navigationBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Weather') {
              iconName = focused ? 'partly-sunny' : 'partly-sunny-outline';
            }
            else if (route.name === 'Metrics') {
              iconName = focused ? 'analytics' : 'analytics-outline';
            }
            else if (route.name === 'News') {
              iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
            }
            else if (route.name === 'Localization') {
              iconName = focused ? 'location-outline' : 'location-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} /> */}
        <Tab.Screen name="Weather" component={Weather} />
        <Tab.Screen name="Metrics" component={Metrics} />
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Localization" component={Localization} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}