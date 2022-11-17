/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
// import type {Node} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  // useColorScheme,
  Text,
  View,
  Button,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {}

    render() {
        const {counter} = this.state;
        return (
            <View style={styles.screen}>
                {/* <Text style={styles.counter}>Contador: {this.state.counter}</Text> */}
                <Text style={styles.counter}>Contador: {counter}</Text>
                <Button style={styles.button} title="Incrementer" onPress={() => this.setState({counter: this.state.counter + 1})}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  counter: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 30,
    marginLeft: 30,
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: "#B0C4DE",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4682B4",
    fontSize: 18,
    textAlign: "center",
    color: "#000",
  },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  button: {
    // marginTop: 8,
    // fontSize: 18,
    // fontWeight: '400',
  },
  // highlight: {
  //   fontWeight: '700',
  // },
});

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default Home;
// export default App;
