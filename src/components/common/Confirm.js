import React,{Component} from 'react'
import {Text,View,Modal} from 'react-native'
import {CardSection , Card ,Button} from './'

const Confirm=({visible , children ,onAccept ,onDeny ,emp_error_del})=>{
    console.log('Confirm.js>>', {visible , children })
    return(
        <Modal
            animationType="fade"
            transparent={false}
            visible={visible}
            onRequestClose={() => {}}>
           <View style={style.containerStyle}>
            <CardSection style={style.CardSectionStyle}>
                <Text style={style.textStyle} > {children} </Text>
            </CardSection>
            <CardSection style={style.CardSectionStyle}>
                <Text style={style.errorStyle}>{emp_error_del}</Text>
            </CardSection>
            
            <CardSection style={style.CardSectionStyle}>
                <Button onPress={onAccept}> YES </Button>
            </CardSection>
            <CardSection style={style.CardSectionStyle}>
                <Button onPress={onDeny}> NO </Button>
            </CardSection>
            </View>
         </Modal>
        )
}

const style = {
    CardSectionStyle:{
        justifyContent:'center'
    },
    textStyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40
    },
    containerStyle:{
        backgroundColor:'rgba(120,0,0,0.5)',
        position:'relative',
        flex:1,
        justifyContent:'center',
    },
    errorStyle:{
        fontSize:18,
        alignSelf:'center',
        color:'red',
    },
}

export {Confirm}