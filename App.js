import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,YellowBox
} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Resultado from './src/components/Resultado';
YellowBox.ignoreWarnings(["Picker has been extracted"]);


const App = () => {
  //state
  const [capital,guardarCapital]=useState(null);
  const [interes,guardarInteres]=useState(null);
  const [meses,guardarMeses]=useState(null);
  const [total,guardarTotal]=useState(null);
  const [errorMessage,guardarErrorMessage]=useState('');
  
  //console.log(total)
  const calcular=()=>{
    guardarErrorMessage("");
    guardarTotal(null);
    if(!capital){
      guardarErrorMessage('Ingresar la cantidad a solicitar')
    }else if(!interes){
      guardarErrorMessage('Ingresar el interes del prestamo')
    }else if(!meses){
      guardarErrorMessage('Selecciona los meses a pagar')
    } else{
      const i=interes / 100;
      const fee= capital / ((1-Math.pow(i+1,-meses)) / i);
      guardarTotal({
        mesFee:fee.toFixed(2).replace('.',','),
        total:(fee*meses).toFixed(2).replace('.',','),

      });
    }
    //guardarErrorMessage('');
  }
  useEffect(()=>{
    if (capital && interes && meses){
      calcular();
    }else{
      guardarErrorMessage("");
      guardarTotal(null);
    }
    
  },[capital,interes,meses])
  return (
    <>
    
    <SafeAreaView style={styles.safeArea}>
    
      <View style={styles.background}></View>
      <Text style={styles.tituloApp}>Cotizador de Prestamos</Text>
      <Form guardarCapital={guardarCapital} guardarInteres={guardarInteres} guardarMeses={guardarMeses} meses={meses}></Form>
    </SafeAreaView>
    
    <Resultado capital={capital} total={total} errorMessage={errorMessage} interes={interes} meses={meses}></Resultado>
    <Footer calcular={calcular}></Footer>
    
    </>
  );
};

const styles=StyleSheet.create({
  safeArea:{
    //justifyContent:'center',
    height:280,
    alignItems:'center'
  },
  background:{
    backgroundColor:colors.PRIMARY_COLOR,
    height:200,
    width:'100%',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    zIndex:-1,
    position:'absolute'
  },
  tituloApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:15,

  }
})


export default App;
