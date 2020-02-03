import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView
} from 'react-native';

const Login = () => {
  return (
    <View style={styles.body}>
     <SafeAreaView style={styles.body}>
        <View style={styles.form_container}>
          <View style={styles.logo}>
            <Image source={require("../../../assets/svg/logo.png")}/>
            <Text style={styles.logo_font}>Crello</Text>
          </View>
          
        </View>
     </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    body:{
      width: "100%",
      height: "100%",
      backgroundColor:"#e3e3e3",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    form_container:{
      width:"65%",
      height:"75%",
      backgroundColor:"white",
      borderRadius: 15,
      display:"flex",
      alignItems:"center",
    },
    logo:{
      width: "100%",
      height:"30%",
      display:"flex",
      alignItems:"center"
    },
    logo_font:{
      fontFamily:"Ginchiest",
      color:"#ff8300",
      fontSize:30
    }

})

export default Login;
