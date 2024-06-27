import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CheckBox from 'expo-checkbox';

export default function SettingsScreen() {
  const [isSelected, setSelection] = useState(false);
  const [darkMode, setSel] = useState(false);
  const [savePrev, setSele] = useState(false);
  return (
    <View style={{backgroundColor: "#1C1C1E", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.checkboxContainer}>
        <CheckBox
        value={darkMode}
        onValueChange={setSel}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Dark Mode</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
        value={savePrev}
        onValueChange={setSele}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Automatically Save Previous Images</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
        value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Download in 4k?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: "white"
  },
});