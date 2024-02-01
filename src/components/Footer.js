import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

const Footer = (props) => {
  console.log('hola q tal');
  const {calcular} = props;
  return (
    <View style={styles.viewForm}>
      <TouchableOpacity style={styles.boton} onPress={() => calcular()}>
        <Text style={styles.text}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    borderRadius: 20,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    padding: 16,
    width: '75%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
export default Footer;
