import React from 'react';
import {View, Text} from 'react-native';
import {progressHeaderStyles} from './styles';

const TimerHeader = ({step}) => {
  return (
    <View style={progressHeaderStyles.container}>
      <View style={progressHeaderStyles.progressContainer}>
        <View style={progressHeaderStyles.circle} />
        <View
          style={[progressHeaderStyles.progress, {width: `${step * 3.33}%`}]}
        />
        <View
          style={[
            progressHeaderStyles.progressLight,
            {width: `${100 - step * 3.33}%`},
          ]}
        />
        <View style={progressHeaderStyles.circle} />
      </View>
      <Text style={progressHeaderStyles.textStyle}>
        {step >= 10 ? `00:0${30 - step}` : `00:${30 - step}`}
      </Text>
    </View>
  );
};

export default TimerHeader;
