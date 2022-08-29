//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {wp, hp} from '../helper/constatnt';
// create a component
const Textinputbox = ({lable}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={lable} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: hp(7),
    width: wp('98%'),
    borderWidth: 2,
  },
});

//make this component available to the app
export default Textinputbox;
