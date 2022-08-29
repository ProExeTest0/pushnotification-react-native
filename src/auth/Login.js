import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Textinputbox from '../components/common/Textinput';
import {hp, wp} from '../components/helper/constatnt';

const Login = () => {
  return (
    <View style={styles.container}>
      {/* <Textinputbox lable={'email'} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
  },
});

//make this component available to the app
export default Login;
