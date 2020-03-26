import React, {useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {ProgressHeader} from '../register/components';
import {finishScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {strings} from '../core/strings';
import {roots} from '../navigation';

const FinishScreen = ({navigation}) => {
  const codes = [
    {name: 'Antohi Claudiu', code: 'CJ12WIP1'},
    {name: 'Antohi Dana', code: 'CJ12WIP2'},
    {name: 'Antohi Dana', code: 'CJ12WIP3'},
    {name: 'Antohi Claudiu', code: 'CJ12WIP1'},
    {name: 'Antohi Dana', code: 'CJ12WIP2'},
    {name: 'Antohi Dana', code: 'CJ12WIP3'},
    {name: 'Antohi Claudiu', code: 'CJ12WIP1'},
    {name: 'Antohi Dana', code: 'CJ12WIP2'},
    {name: 'Antohi Dana', code: 'CJ12WIP3'},
  ];

  const [recompleteForm, setRecompleteForm] = useState(false);
  return (
    <ScrollView style={finishScreenStyles.container}>
      <ProgressHeader step={10} />
      <View style={finishScreenStyles.codeContainer}>
        <Text style={finishScreenStyles.codeLabelStyle}>
          {strings.finishScreenCodeLabel}
        </Text>
        {!recompleteForm && (
          <Text style={finishScreenStyles.codeStyle}>CJ12WIP</Text>
        )}
      </View>
      {recompleteForm ? (
        <View style={finishScreenStyles.listStyle}>
          <FlatList
            data={codes}
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
      ) : (
        <View style={finishScreenStyles.card}>
          <Text style={finishScreenStyles.title}>
            {strings.finishScreenFirstLine}
          </Text>
          <Text style={finishScreenStyles.textStyle}>
            {strings.finishScreenSecondLine}
          </Text>
          <Text style={finishScreenStyles.textStyle}>
            {strings.finisScreenThirdLine}
          </Text>
        </View>
      )}
      <View style={finishScreenStyles.bottomContainer}>
        <GeneralButton
          onPress={() => navigation.navigate(roots.registerStack)}
          text={strings.adaugaMembru}
        />
        <View style={finishScreenStyles.marginTop}>
          <GeneralButton
            onPress={() => navigation.navigate(roots.endScreen)}
            text={strings.nuMaiAdaug}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FinishScreen;
