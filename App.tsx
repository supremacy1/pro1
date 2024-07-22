/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
           .
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons'; // If using Expo
// // import Footer from '../components/Footer'; // Adjust import based on your file structure

// function Landingpage() {
//   const [data, setData] = useState([]);
//   const [imageIndex, setImageIndex] = useState(0);
//   // const images = [
//   //   require('./images/b1.jpg'), // Adjust the paths to your image files
//   //   require('./images/b2.jpg'),
//   //   require('./images/b4.jpg')
//   // ];
//   // const intervalTime = 7000; // Time interval in milliseconds

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setImageIndex(prevIndex => (prevIndex + 1) % images.length);
//   //   }, intervalTime);

//   //   return () => clearInterval(interval);

//   //   async function fetchData() {
//   //     try {
//   //       const response = await fetch('https://example.com/api/data'); // Use your API endpoint
//   //       const result = await response.json();
//   //       setData(result);
//   //       console.log(result); // This logs the fetched data
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //     }
//   //   }

//   //   fetchData();
//   // }, []);

//   return (
//     <View style={styles.maincontainer}>
//       <View style={styles.log}>
//         <TouchableOpacity onPress={() => console.log('Navigate to Login')}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.imagecontainer}>
//         {/* <Image
//           source={images[imageIndex]}
//           style={styles.image}
//           resizeMode="cover"
//         /> */}
//         <View style={styles.caption}>
//           <Text style={styles.text}>BOOK YOUR PHOTOGRAPHER</Text>
//           <View style={styles.buttonGroup}>
//             <TouchableOpacity onPress={() => console.log('Navigate to Register')} style={styles.button}>
//               <Text style={styles.buttonText}>Register</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => console.log('Navigate to All Users Dashboard')} style={styles.button}>
//               <Text style={styles.buttonText}>Book a Photographer</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <View style={styles.boxes}>
//         <View style={styles.box}>
//           <Text style={styles.boxTitle}>Photographer</Text>
//           <Text>Are you a professional Photographer / Videographer? Register and get contacted by clients for their occasion</Text>
//         </View>
//         <View style={styles.box}>
//           <Text style={styles.boxTitle}>Clients</Text>
//           <Text>Are you looking to add color to your occasions? Contact any of our professional Photographers</Text>
//         </View>
//       </View>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <Text>{item.name}</Text>
//         )}
//       />
//       <View style={styles.footercontainer}>
//         <View style={styles.header}>
//           <Text style={styles.headerText}>Book one of our professional Photographers that will add color to your occasion</Text>
//         </View>
//         <View style={styles.line}>
//           <Text style={styles.lineText}>We are Reliable and Professional</Text>
//         </View>
//       </View>
//       {/* <Footer /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   log: {
//     alignItems: 'flex-end',
//   },
//   buttonText: {
//     color: '#007bff',
//     fontSize: 16,
//   },
//   imagecontainer: {
//     height: 300,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   caption: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   buttonGroup: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     color: '#fff',
//   },
//   boxes: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 20,
//   },
//   box: {
//     width: '45%',
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 5,
//   },
//   boxTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   footercontainer: {
//     marginTop: 20,
//   },
//   header: {
//     marginBottom: 10,
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   line: {
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     paddingTop: 10,
//   },
//   lineText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Landingpage;
