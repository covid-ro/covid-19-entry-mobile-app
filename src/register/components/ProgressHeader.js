import React from 'react';
import {View, Text} from 'react-native';
import {progressHeaderStyles} from './styles';
import {strings} from '../../core/strings';

const Component = ({step}) => {
  return (
    <View style={progressHeaderStyles.container}>
      <View style={progressHeaderStyles.progressContainer}>
        <View style={progressHeaderStyles.circle} />
        <View
          style={[progressHeaderStyles.progress, {width: `${step * 7.14}%`}]}
        />
        <View
          style={[
            progressHeaderStyles.progressLight,
            {width: `${100 - step * 7.14}%`},
          ]}
        />
        <View style={progressHeaderStyles.circle} />
      </View>
      <Text style={progressHeaderStyles.textStyle}>{`${step} ${
        strings.progressHeaderStep
      }`}</Text>
    </View>
  );
};

export default Component;
