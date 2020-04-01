import React, {useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {ProgressHeader} from '../register/components';
import {finishScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {I18n} from '../core/strings';
import {roots} from '../navigation';
import {connect} from 'react-redux';

const FinishScreen = ({navigation, declarationCodes}) => {
  const [recompleteForm, setRecompleteForm] = useState(false);
  return (
    <View style={finishScreenStyles.container}>
      <ProgressHeader step={10} />
      <ScrollView
        style={finishScreenStyles.container}
        contentContainerStyle={finishScreenStyles.contentContainer}>
        <View style={finishScreenStyles.listStyle}>
          <View style={finishScreenStyles.codeContainer}>
            <Text style={finishScreenStyles.codeLabelStyle}>
              {I18n.t('finishScreenCodeLabel')}
            </Text>
          </View>
          <FlatList
            data={declarationCodes}
            renderItem={({item}) => (
              <View style={finishScreenStyles.codeContainer}>
                <Text style={finishScreenStyles.nameTextStyle}>
                  {item.name}
                </Text>
                <Text style={finishScreenStyles.codeListStyle}>
                  {item.code}
                </Text>
              </View>
            )}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.name}
          />
        </View>
        {declarationCodes.length < 2 && (
          <View style={finishScreenStyles.card}>
            <Text style={finishScreenStyles.title}>
              {I18n.t('finishScreenFirstLine')}
            </Text>
            <Text style={finishScreenStyles.textStyle}>
              {I18n.t('finishScreenSecondLine')}
            </Text>
            <Text style={finishScreenStyles.textStyle}>
              {I18n.t('finisScreenThirdLine')}
            </Text>
          </View>
        )}
        <View style={finishScreenStyles.bottomContainer}>
          <GeneralButton
            onPress={() => navigation.navigate(roots.registerStack)}
            text={I18n.t('adaugaMembru')}
          />
          <View style={finishScreenStyles.marginTop}>
            <GeneralButton
              onPress={() => navigation.navigate(roots.endScreen)}
              text={I18n.t('nuMaiAdaug')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  const {declarationCodes} = state.register.rergisterReducer;
  return {declarationCodes};
};

export default connect(mapStateToProps)(FinishScreen);
