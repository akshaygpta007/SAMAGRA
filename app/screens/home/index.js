import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import URLS from '../../apis/urls';
import logger from '../../utils/logger';
import styles from './styles';
import useUrlData from './url-data';

const Home = () => {
  logger.log('Home');

  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldShow(true);
    }, 5000);
  }, []);

  const {block: commentsBlock, button: commentsButton} = useUrlData(
    URLS.comments,
    shouldShow,
    'Button 1',
  );

  const {block: photosBlock, button: photosButton} = useUrlData(
    URLS.photos,
    shouldShow,
    'Button 2',
  );

  const {block: postsBlock, button: postsButton} = useUrlData(
    URLS.posts,
    shouldShow,
    'Button 3',
  );

  const {block: todosBlock, button: todosButton} = useUrlData(
    URLS.todos,
    shouldShow,
    'Button 4',
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text>Test App</Text>
      </View>
      <View style={styles.dataContainer}>
        {commentsBlock}
        {photosBlock}
      </View>
      <View style={styles.dataContainer}>
        {postsBlock}
        {todosBlock}
      </View>
      <View style={styles.dataContainer}>
        {commentsButton}
        {photosButton}
      </View>
      <View style={styles.dataContainer}>
        {postsButton}
        {todosButton}
      </View>
    </SafeAreaView>
  );
};

export default Home;
