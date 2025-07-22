/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StatusBar, TextInput, View} from 'react-native';
import {
  KeyboardAvoidingView,
  KeyboardProvider,
} from 'react-native-keyboard-controller';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    flex: 1,
  };

  return (
    <KeyboardProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <KeyboardAvoidingView
          behavior={'padding'}
          style={{flex: 1}}
          keyboardVerticalOffset={30}>
          <View style={{flex: 1}}>
            <TextInput
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />
            <TextInput placeholder="Enter your text" />
          </View>

          <Button title="Submit" onPress={() => {}} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </KeyboardProvider>
  );
}

export default App;
