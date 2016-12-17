'use strict';
import React, { PropTypes } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { colors } from '../../styles';

const SettingsRow = ({ text, statusText, buttonText, onPress }) => (
  <View style={styles.row}>
    <View>
      <Text>{text}</Text>
      <Text>{statusText || ''}</Text>
    </View>
    <Button
      title={buttonText}
      onPress={onPress}
    />
  </View>
);

const Settings = ({initializeFirebaseStatus, downloadPharmaCare, downloadIdsStatus, initializeFirebase, downloadPharmaCareStatus, downloadIds}) => (
  <ScrollView>
    <SettingsRow
      text='Initialize Firebase with Mock Data'
      statusText={initializeFirebaseStatus}
      buttonText='Initialize'
      onPress={initializeFirebase}
    />
    <SettingsRow
      text='Download Ids from Server'
      statusText={downloadIdsStatus}
      buttonText='Download'
      onPress={downloadIds}
    />
    <SettingsRow
      text='Download PharmaCare from Server'
      statusText={downloadPharmaCareStatus}
      buttonText='Download'
      onPress={downloadPharmaCare}
    />
  </ScrollView>
);
Settings.propTypes = {
  initializeFirebaseStatus: PropTypes.string.isRequired,
  downloadPharmaCareStatus: PropTypes.string.isRequired,
  downloadPharmaCare: PropTypes.func.isRequired,
  downloadIds: PropTypes.func.isRequired,
};

const styles = {
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: 75,
    borderBottomWidth: 1,
    borderBottomColor: '#c1c1c1'
  }
};

export default Settings;