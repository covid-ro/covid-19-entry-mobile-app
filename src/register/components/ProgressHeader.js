import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {progressHeaderStyles} from './styles';
import {I18n} from '../../core/strings';

const Component = ({step, language}) => {
  return (
    <View style={progressHeaderStyles.container}>
      <View style={progressHeaderStyles.progressContainer}>
        <View style={progressHeaderStyles.circle} />
        <View
          style={[progressHeaderStyles.progress, {width: `${step * 10}%`}]}
        />
        <View
          style={[
            progressHeaderStyles.progressLight,
            {width: `${100 - step * 10}%`},
          ]}
        />
        <View style={progressHeaderStyles.circle} />
      </View>
      <Text style={progressHeaderStyles.textStyle}>{`${step} ${I18n.t(
        'progressHeaderStep',
        {locale: language},
      )}`}</Text>
    </View>
  );
};

const mapStateToProps = state => {
  const {language} = state.register.rergisterReducer;
  return {language};
};

export default connect(mapStateToProps)(Component);
