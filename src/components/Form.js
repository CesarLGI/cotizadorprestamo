import React,{useState} from 'react';
import {StyleSheet,TextInput,View,Picker} from 'react-native';
import colors from '../utils/colors';



const Form=(props)=>{
    //console.log(props);
    //state picker
    const [selectedValue, setSelectedValue] = useState(null);
    const {guardarCapital,guardarInteres,guardarMeses,meses}=props;

    return(
        <View style={styles.viewForm}>
            <View  style={styles.viewInput}>
                <TextInput 
                    style={styles.input}
                    placeholder="Cantidad a pedir"
                    keyboardType='numeric' 
                    onChange={texto=>guardarCapital(texto.nativeEvent.text)} 
                    
                />
                      
                <TextInput
                    keyboardType="numeric"
                    style={[styles.input,styles.inputPorc]}
                    onChange={texto=>guardarInteres(texto.nativeEvent.text)} 
                    placeholder="Interes %"/>
            </View>
            <View style={styles.picker}>
                <Picker
                    selectedValue={meses}                                        
                    style={{color:'grey'}}
                    onValueChange={(itemValue, itemIndex) =>guardarMeses(itemValue)}
                    on
                    
                >
                    <Picker.Item label="Seleccionar plazos" value=""  />
                    <Picker.Item label="3 meses" value='3' />
                    <Picker.Item label="6 meses" value="6" />
                    <Picker.Item label="12 meses" value="12" />
                    <Picker.Item label="24 meses" value="24" />
                </Picker>
            </View>
            

            
            
        </View>
    )
}
const styles=StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:1,
        width:'90%',
        paddingHorizontal:50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius:30,
        height:180,
        justifyContent:'center'
    },
    viewInput:{
        flexDirection:'row',
        
    },
    input:{
        height:50,
        backgroundColor:'#fff',
        borderWidth:0,
        borderColor:colors.PRIMARY_COLOR,
        borderRadius:5,
        width:'65%',
        marginRight:5,
        marginLeft:-15,
        marginBottom:10,
        color:'#000',
        paddingHorizontal:20
    },
    inputPorc:{
        width:'45%',
        marginLeft:5
    },
    picker:{
        height:50,
        borderRadius:5,
        marginTop:5,
        backgroundColor:'#fff',
        width:'114%',
        marginLeft:-15,
        
    }
    
})
// const pickerSelectStyles=StyleSheet.create({
//     inputIos:{
//         fontSize:16,
//         paddingHorizontal:12,
//         paddingVertical:10,
//         borderWidth:0.5,
//         borderRadius:4,
//         color:'black',
//         borderColor:'grey',
//         paddingRight:30,
//         backgroundColor:'white',
//     },
//     inputAndroid:{
//         fontSize:16,
//         paddingHorizontal:10,
//         paddingVertical:8,
//         borderWidth:0.5,
//         borderRadius:8,
//         color:'black',
//         borderColor:'grey',
//         paddingRight:30,
//         backgroundColor:'white',
//     }
// })
export default Form;