import { useState } from "react";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Index() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  const [isUserFocused, setIsUserFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    Alert.alert("Login", `User: ${user}\nPassword: ${password}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.screen}>
            <View style={styles.logoContainer}>
              <Image source={require('../assets/images/logo.png')} />
            </View>

            <View style={styles.form}>
              <Text style={styles.title}>INICIAR SESIÓN</Text>

              <View style={[
                  styles.inputContainer,
                  isUserFocused && { borderColor: '#FFD895' }
                ]}>
                <MaterialIcons name="person" size={32} color="#FFD895"/>
                <TextInput 
                  style={styles.input}
                  placeholder="Usuario"
                  value={user}
                  onChangeText={setUser}
                  placeholderTextColor={isUserFocused ? '#FFD895' : '#717171'}
                  autoCapitalize="none"
                  onFocus={() => setIsUserFocused(true)}
                  onBlur={() => setIsUserFocused(false)}
                />
              </View>

              <View style={[
                  styles.inputContainer,
                  isPasswordFocused && { borderColor: '#FFD895' }
                ]}>
                <MaterialIcons name="lock" size={32} color="#FFD895"/>
                <TextInput 
                  style={styles.input}
                  placeholder="Contraseña"
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor={isPasswordFocused ? '#FFD895' : '#717171'}
                  secureTextEntry={!showPassword}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                />
                <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} 
                  size={32} color="#FFD895" onPress={() => setShowPassword(!showPassword)}
                />
              </View>


              <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Ingresar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFB22C',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  form: {
    flex: 2,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#854836',
  },
  forgotPassword: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
    color: '#854836',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#717171', //FFD895
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 55,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    padding: 15,
    fontSize: 22,
    borderRadius: 20,
    height: 55,
  },
  button: {
    backgroundColor: '#FFB22C',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
});
