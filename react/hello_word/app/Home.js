import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './style';

function Weather() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.location}>
                    <Image style={styles.iconLocalization} source={{uri: 'https://cdn-icons-png.flaticon.com/512/17/17589.png'}} />
                    <Text style={[styles.text, styles.textLocalization, styles.textBlack]}>Accra, Ghana</Text>
                </View>
                <Text style={[styles.textSmall, styles.textBlack]}>20-Sep-22</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.element}>
                    <Text style={[styles.temperature, styles.textBlack]}>20°</Text>
                    <Text style={[styles.textSmall, styles.textBlack]}>Real feel: 20</Text>
                </View>

                <View style={styles.element}>
                    <Image style={styles.imgWeather} source={{uri: 'https://cdn-icons-png.flaticon.com/512/8841/8841362.png'}} />
                    <Text style={[styles.textWeather, styles.textBlack]}>Cloudy</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.data}>
                    <Text style={styles.textData}>UV Index</Text>
                    <Text style={styles.textData}>Humidity</Text>
                    <Text style={styles.textData}>Wind Speed</Text>
                    <Text style={styles.textData}>Rain Probability</Text>
                    <Text style={styles.textData}>Pressure</Text>
                </View>
                
                <View style={styles.data}>
                    <Text style={styles.textData}></Text>
                    <Text style={styles.textData}>55</Text>
                    <Text style={styles.textData}>5.00 mph</Text>
                    <Text style={styles.textData}>30%</Text>
                    <Text style={styles.textData}>1023.1 pa</Text>
                </View>
            </View>
        </View>
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
                        iconName = focused ? 'cloudy-sharp' : 'cloudy-outline';
                    }
                    else if (route.name === 'Metrics') {
                        iconName = focused ? 'analytics' : 'analytics-outline';
                    }
                    else if (route.name === 'News') {
                        iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
                    }
                    else if (route.name === 'Localization') {
                        iconName = focused ? 'location-sharp' : 'location-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#8DBBFF',
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