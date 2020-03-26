import React, {useState} from 'react';
import {TextInput, View, Text, Platform} from 'react-native';
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
  keyboardType,
  placeholderSeparatorStyle,
  focusedSeparatorStyle,
  customInputStyle,
  customContainerStyle,
  customLabelStyle,
  onSubmitEditing,
  blurOnSubmit,
  inputRef,
}) => {
  const [isFocused, setFocus] = useState(false);
  return (
    <View style={[styles.container, customContainerStyle]}>
      <Text style={[styles.labelStyle, customLabelStyle]}>
        {isFocused && placeholder}
      </Text>
      <TextInput
        ref={inputRef}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        placeholder={isFocused ? '' : placeholder}
        placeholderTextColor={colors.opacityGrey}
        style={[styles.inputStyle, customInputStyle]}
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
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={blurOnSubmit}
      />

      <View
        style={[
          isFocused || value
            ? [styles.focusedSeparator, focusedSeparatorStyle]
            : [styles.separator, placeholderSeparatorStyle],
        ]}
      />
    </View>
  );
};

export default InputField;
