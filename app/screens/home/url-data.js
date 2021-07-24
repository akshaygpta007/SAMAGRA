import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import logger from '../../utils/logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUrlData = (url, shouldShow, buttonText) => {
  const [data, setData] = useState({start: '', end: ''});

  logger.log(url, shouldShow, 'url, shouldShow', data, 'data');

  const formData = useCallback(() => {
    setData(cData => ({...cData, start: new Date().toLocaleTimeString()}));
    axios
      .post(url)
      .then(async response => {
        logger.log(response, 'response');
        setData(cData => ({
          ...cData,
          end: new Date().toLocaleTimeString(),
          startSave: new Date().toLocaleTimeString(),
        }));

        const jsonValue = JSON.stringify(response.data);
        AsyncStorage.setItem(url, jsonValue).then(() => {
          setData(cData => ({
            ...cData,
            endSave: new Date().toLocaleTimeString(),
          }));
        });
      })
      .catch(console.error);
  }, [url]);

  const [restart, setRestart] = useState(false);

  useEffect(() => {
    if (shouldShow) {
      formData();
    }
    if (restart) {
      setRestart(false);
      formData();
    }
  }, [formData, shouldShow, restart]);

  const renderButton = () => {
    return (
      <Pressable
        onPress={() => setRestart(true)}
        style={styles.innerDataContainer}>
        <Text>{buttonText}</Text>
      </Pressable>
    );
  };

  const renderBlock = () => {
    return (
      <View style={styles.innerDataContainer}>
        <Text>Start: {data.start}</Text>
        <Text>End:: {data.end}</Text>
        <Text>Start Save: {data.startSave}</Text>
        <Text>End Save: {data.endSave}</Text>
      </View>
    );
  };

  return {block: renderBlock(), button: renderButton()};
};

export default useUrlData;
