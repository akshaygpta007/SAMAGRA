import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import URLS from '../../apis/urls';
import logger from '../../utils/logger';
import styles from './styles';
import UrlData from './url-data';

const Home = () => {
  logger.log('Home');

  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldShow(true);
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text>Test App</Text>
      </View>
      <View style={styles.dataContainer}>
        <UrlData url={URLS.comments} shouldShow={shouldShow} />
        <UrlData url={URLS.photos} shouldShow={shouldShow} />
      </View>
      <View style={styles.dataContainer}>
        <UrlData url={URLS.todos} shouldShow={shouldShow} />
        <UrlData url={URLS.posts} shouldShow={shouldShow} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
