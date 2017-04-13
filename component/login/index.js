import React from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={{backgroundColor:'white', flex:1, justifyContent:'center'}}>
                <Text style={{fontSize:48, fontFamily: 'cursive_bold', marginLeft:48, marginBottom:96}}>Sign in</Text>
                <Text style={{fontSize:16, marginLeft:64}}>Email address</Text>
                <TextInput style={{marginLeft:64, width:256}}></TextInput>
                <Text style={{fontSize:16, marginLeft:64}}>Password</Text>
                <TextInput style={{marginLeft:64, width:256}}></TextInput>
                <TouchableHighlight style={{alignItems:'center', backgroundColor:'lightgreen', marginLeft:64, padding:16, width:256}} underlayColor="silver" onPress={this.checkSubmit}>
                    <Text style={{fontSize:16}}>Submit</Text>
                </TouchableHighlight>
            </View>
        );
    }
    checkSubmit() {

    }
}