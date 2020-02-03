import React,{useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  TextInput
} from 'react-native';

const LoginForm = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [logDisable,setLogDisable] = useState(true)

    useEffect(()=>{
        if(email != "" && password != ""){
            setLogDisable(false);
        }
        else{
            setLogDisable(true);
        }
    });

    return (
    <View style={styles.login_container}>

        <TextInput 
        placeholder="Email" 
        style={styles.text_field} 
        value={email} 
        onChangeText={text => setEmail(text)}
        />

        <TextInput
        placeholder="Password" 
        secureTextEntry={true} 
        style={styles.text_field} 
        value={password} 
        onChangeText={text => setPassword(text)}
        />
        
            <Button 
            disabled={logDisable} 
            style={styles.te} title="Login"
            color="#ff8300"
            />
       
    </View>
    );
};

const styles = StyleSheet.create({
    login_container:{
        width:"100%",
        height:"60%",
        display:"flex",
        justifyContent:"center"
    },
    text_field:{
      height:50,
      width:250,
      marginBottom:20,
      borderColor:"#e3e3e3",
      borderWidth: 2,
      fontSize:17,
      color:"#ff8300",
      fontFamily:"Nunito-Regular"
    },
    button_container:{
        width:150,
        display:"flex",
        alignItems:"center"
    }
})

export default LoginForm;