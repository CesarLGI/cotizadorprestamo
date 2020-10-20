import React from 'react';
import {Text,View,StyleSheet, ScrollView} from 'react-native';

const Resultado=(props)=>{
    const{capital,interes,meses,errorMessage,total}=props;

    return(
        <ScrollView style={styles.content}>
        
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.titulo}>Resumen</Text>
                    <View style={styles.valor}>
                        <Text>Cantidad solicitada:</Text>
                        <Text>{`${capital} $`}</Text>
                    </View>
                    <View style={styles.valor}>
                        <Text>Interes % :</Text>
                        <Text>{`${interes} $`}</Text>
                    </View>
                    <View style={styles.valor}>
                        <Text>Plazos:</Text>
                        <Text>{`${meses} meses`}</Text>
                    </View>
                    <View style={styles.valor}>
                        <Text>Pago mensual:</Text>
                        <Text>{`${total.mesFee} $`}</Text>
                    </View>
                    <View style={styles.valor}>
                        <Text>Total:</Text>
                        <Text>{`${total.total} $`}</Text>
                    </View>
                    
                </View>
                
            )}
            <Text style={styles.error}>{errorMessage}</Text>
        
        </ScrollView>
    );
}
const styles=StyleSheet.create({
    error:{
        textAlign:'center',
        color:'#f00',
        fontWeight:'bold',
        fontSize:20,
        marginTop:20

    },
    content:{
        //marginTop:100,
        marginHorizontal:40
    },
    boxResult:{
        padding:30,

    },
    titulo:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:15,
        textTransform:'uppercase'
    },
    valor:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    }
})
export default Resultado;