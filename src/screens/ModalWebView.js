import React from 'react';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';
import { gStyle } from '../constants';

import Header from '../components/Header';

const ModalWebView = ({ navigation }) => (
  <View style={gStyle.container}>
    <Header close closeText="Close" navigation={navigation} showLogo />

    <WebView
      bounces={false}
      javaScriptEnabled
      scalesPageToFit
      source={{ uri: navigation.getParam('url', 'https://netflix.com') }}
      startInLoadingState
    />
  </View>
);

ModalWebView.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default ModalWebView;
