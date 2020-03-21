import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import {colors} from '../../themes';
import styles from './styles/InputFieldStyle';

const InputField = ({
  maxLength,
  secureTextEntry,
  placeholder,
  value,
  editable,
  autoFocus,
  onChangeText,
  multiline,
  textAlign,
  autoCorrect,
  autoCapitalize,
  returnKeyType,
}) => {
  const [isFocused, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={isFocused ? styles.labelStyle : styles.unselectedLabelStyle}>
        {placeholder}
      </Text>
      <TextInput
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={colors.lightGrey}
        style={
          isFocused
            ? [
                styles.inputStyle,
                {borderColor: colors.darkBlue, borderBottomWidth: 2},
              ]
            : styles.inputStyle
        }
        value={value}
        selectionColor={colors.darkBlue}
        editable={editable}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        multiline={multiline}
        textAlignVertical={textAlign}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
      />
    </View>
  );
};

export default InputField;
