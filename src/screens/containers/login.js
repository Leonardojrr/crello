import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Alert
} from 'react-native';

import LoginForm from "../components/loginForm"

const Login = () => {



  return (
    <View style={styles.body}>
     <SafeAreaView style={styles.body}>

        <View style={styles.logo_container}>
          <Text style={styles.logo_font}>Crello</Text>
        </View>

        <View style={styles.login_container}>
          <LoginForm/>
        </View>

       <View style={styles.regist_button} onTouchStart={()=>{}}>
         <Text style={styles.regist_text}>Create an account</Text>
       </View>

     </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    body:{
      width: "100%",
      height: "100%",
      backgroundColor:"white",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between"
    },
    logo_container:{
      width: "100%",
      height:"30%",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-evenly"
    },
    logo_font:{
      fontFamily:"Ginchiest",
      color:"#ff8300",
      fontSize:100
    },
    regist_button:{
     borderColor:"#d3d3d3",
     borderWidth:2,
     width:"100%",
     height:50,
     display:"flex",
     justifyContent:"center",
     alignItems:"center"
    },
    regist_text:{
      color:"#ff8300",
      fontSize:20,
      fontFamily:"Nunito-Bold"
    },
})

export default Login;
