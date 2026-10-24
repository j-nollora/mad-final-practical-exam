import { useState } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

export default function LoginScreen() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState('•••••••••••')
  const [showPassword, setShowPassword] = useState()
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}> 
        <Image style={styles.image} source={require('../assets/login.png')}/>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>
          Welcome back
        </Text>
        <Text style={styles.subheading}>
          Login to your account to continue.
        </Text>

        <Text style={styles.label}>
          Email address
        </Text>
        <View style={styles.emailInput}>
          <Ionicons
            name='mail-outline'
            size={20}
            color="dimgray"
            style={styles.icon}
          />
          <TextInput 
            value={email}
            onChangeText={setEmail}
            placeholder="john@gmail.com"
            placeholderTextColor="gray"
          />
        </View>

        <Text style={styles.label}>
          Password
        </Text>
        <View style={styles.passwordInput}>
          <Ionicons
            name='lock-closed-outline'
            size={20}
            color="dimgray"
            style={styles.icon}
          />
          <TextInput 
            value={password}
            style={styles.passwordInputField}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="gray"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="dimgray"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotTxt}>Forgot Password?</Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={[styles.primaryBtn, styles.primaryColor]}>
          <Text style={styles.btnTxt}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.line}></View>
          <Text style={styles.dividerTxt}>or continue with</Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.oauth}>
          <TouchableOpacity style={styles.oauthBtn}>
            <Ionicons
              name='logo-google'
              size={20}
              color="#e93d2f"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.oauthBtn}>
            <Ionicons
              name='logo-apple'
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.oauthBtn}>
            <Ionicons
              name='logo-facebook'
              size={20}
              color="#1877f2"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTxt}>Don't have an account?</Text>
          <TouchableOpacity onPress={() =>  navigation.navigate('SignUp')}>
            <Text style={styles.footerLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: 'center',
  },
  contentContainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
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
  label: {
    fontSize: 14,
    paddingHorizontal: '5%',
    marginTop: 10,
    color: '#1c1a3a',
    fontWeight: 'bold'
  },
  emailInput: {
    backgroundColor: '#f4f3fb',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    gap: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 3
  },
  passwordInput: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    gap: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 3,
    borderColor: '#5b4bff',
    borderWidth: 1,
  },
  passwordInputField: {
    width: '70%'
  },
  icon: {
    alignSelf: 'center',
    justifySelf: 'center'
  },  
  primaryBtn: {
    marginTop: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 15,
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
    fontSize: 16
  },
  forgot: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  forgotTxt: {
    fontWeight: 'bold',
    color: '#5b4bff',
    textAlign: 'right'
  },
  divider: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    height: 1,
    width: "25%",
    backgroundColor: '#e8e7f5',
    marginVertical: 8
  },
  dividerTxt: {
    color: '#5e5b78',
  }, 
  oauth: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    gap: 10,
    marginTop: 10
  },  
  oauthBtn: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e8e7f5',
    borderRadius: 10
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
    fontWeight: 'bold'
  }

})
