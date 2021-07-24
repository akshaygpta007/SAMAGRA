import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
  heading: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 10,
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  innerDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});

export default styles;
