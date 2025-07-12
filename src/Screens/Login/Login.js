import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WHITE } from '../../Utils/Colors';

const Login = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Image source={require("../../images/Loginone.jpg")} style={styles.imagestyle} />
      <Text style={styles.User}>Create User With</Text>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          console.log("Route Param:", route.params); // debugging
          if (route.params?.screen === 'tutor') {
            navigation.navigate("TutorHome");
          }
        }}
      >
        <Image source={require("../../images/Google.png")} style={styles.googleimage} />
        <Text style={styles.googletext}>Login With Google</Text>
    
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagestyle: {
    width: '100%',
  },
  User: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 20,
  },
  loginBtn: {
    width: '90%',
    height: 50,
    backgroundColor: WHITE,
    elevation: 6,
    marginVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleimage: {
    width: 16,
    height: 15,
    marginLeft: 4,
  },
  googletext: {
    paddingLeft: 7,
    fontWeight: '500',
  },
});
