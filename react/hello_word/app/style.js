import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'space-around'
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    location: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    
    textBlack: {
        color: 'black',
    },
    
    iconLocalization: {
        width: 14,
        height: 14,
        marginRight: 5,
    },

    textLocalization: {
        fontWeight: "bold",
    },
    
    textSmall: {
        fontSize: 12,
    },
    
    text: {
        fontSize: 14,
    },

    card: {
        backgroundColor: 'white',
        padding: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        borderRadius: 20,
        elevation: 20,
        shadowColor: 'grey',

        width: 330,
    },

    element: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        height: 130,
    },

    temperature: {
        fontSize: 55,
    },
    
    textWeather: {
        fontSize: 20,
    },

    imgWeather: {
        width: 65,
        height: 65,
    },

    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

        width: 230,
    },

    data: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        height: 150,
    },

    textData: {
        fontWeight: "bold",
        fontSize: 14,
    },
});