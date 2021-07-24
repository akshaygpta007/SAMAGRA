import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';
import styles from './styles';
import logger from '../../utils/logger';
import storeData from '../../utils/async-storage';

const UrlData = ({url, shouldShow}) => {
  const [data, setData] = useState({start: '', end: ''});

  logger.log(url, shouldShow, 'url, shouldShow', data, 'data');

  useEffect(() => {
    if (shouldShow) {
      setData(cData => ({...cData, start: new Date().toLocaleTimeString()}));
      axios.post(url).then(response => {
        logger.log(response, 'response');
        setData(cData => ({
          ...cData,
          end: new Date().toLocaleTimeString(),
          startSave: new Date().toLocaleTimeString(),
        }));

        storeData(url, response);
        setData(cData => ({
          ...cData,
          endSave: new Date().toLocaleTimeString(),
        }));
      });
    }
  }, [shouldShow, url]);

  return (
    <View style={styles.innerDataContainer}>
      <Text>Start: {data.start}</Text>
      <Text>End:: {data.end}</Text>
      <Text>Start Save: {data.startSave}</Text>
      <Text>End Save: {data.endSave}</Text>
    </View>
  );
};

export default UrlData;
