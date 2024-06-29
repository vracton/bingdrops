import React, {useState} from 'react';
import {Text, View, StyleSheet, Switch} from 'react-native';

export default function SettingsScreen() {
  const [isSelected, setSelection] = useState(false);
  const [darkMode, setSel] = useState(false);
  const [savePrev, setSele] = useState(false);
  return (
    <View style={{backgroundColor: "#1C1C1E", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch
        trackColor={{false: '#767577', true: '#30D158'}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setSel}
        value={darkMode}
      />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Save Previous Images</Text>
        <Switch
        trackColor={{false: '#767577', true: '#30D158'}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setSele}
        value={savePrev}
      />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>4k Downloads</Text>
        <Switch
        trackColor={{false: '#767577', true: '#30D158'}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setSelection}
        value={isSelected}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  label: {
    margin: 8,
    color: "white"
  },
});