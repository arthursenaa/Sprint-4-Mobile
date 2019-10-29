/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  
  statement

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.background}>
          <Text style={{color: 'yellow',fontWeight: 'bold',fontSize: 30,textAlign:'center'}}>Hello World!</Text>
        </View>
        <View>
          <TextInput
            style={{ height: 40 ,width: 500 , backgroundColor:'grey', marginTop:20 }}
            placeholder="Type here!"
            onChangeText={(text) => this.setState({ text })}
            // value={}
          />
          
          <Button
            title="Button"
            onPress={() => Alert.alert(this.state.text)}
          />
        </View>


      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  background: {
    backgroundColor: 'blue',
  },
  // gufos: {
  //   color: 'yellow',
  //   fontWeight: 'bold',
  //   fontSize: 30,
  //   alignItems: 'center',
  // },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
