import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}> 
        <Image style={styles.image} source={require('../assets/welcome.png')}/>
      </View>
      
      <Text style={styles.heading}>
        Let's get {'\n'}you started
      </Text>
      <Text style={styles.subheading}>
        Create an account or log in to pick up right{'\n'}where you left off.
      </Text>

      <TouchableOpacity style={[styles.primaryBtn, styles.primaryColor]} onPress={() =>  navigation.navigate('SignUp')}>
        <Text style={styles.btnTxt}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryBtn} onPress={() =>  navigation.navigate('Login')}>
        <Text style={styles.btnTxt1}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerTxt}>By continuing you agree to our</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}> Terms</Text>
        </TouchableOpacity>
        <Text style={styles.footerTxt}> and</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}> Privacy Policy</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3fb',
    alignContent: 'center',
    justifyContent: 'center'
  },
  imgContainer:{
    height: '45%',
    justifyContent: 'center'
  },
  image: {
    width: 400,
    height: 300,
    alignSelf: 'center',
  },
  heading: {
    marginTop: 30,
    fontSize: 36,
    fontWeight: 'bold',
    paddingHorizontal: '5%',
    color: '#1c1a3a'
  },
  subheading: {
    fontSize: 18,
    paddingHorizontal: '5%',
    marginBottom: 20,
    marginTop: 10,
    color: '#5e5b78'
  },
  primaryBtn: {
    marginTop: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff'
  },
  primaryColor: {
    backgroundColor: '#5b4bff',
    borderColor: '#5b4bff',
  },
  btnTxt: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
  btnTxt1: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  footerTxt: {
    color: '#5e5b78'
  },
  footerLink: {
    color: '#5b4bff',
    textDecorationLine: 'underline'
  }

})
