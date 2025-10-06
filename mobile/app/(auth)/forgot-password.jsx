import { Link, useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../../assets/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

export default function ForgotPassword() {
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  // Handle the submission of the forgot password form
  const onForgotPasswordPress = async () => {
    if (!emailAddress) {
      setError("Por favor, insira seu e-mail");
      return;
    }

    
    try {
      // adicionar a api do email
      setIsEmailSent(true);
      setMessage("Um e-mail de recuperação foi enviado para sua caixa de entrada");
      setError("");
    } catch (err) {
      setError("Ocorreu um erro. Tente novamente.");
    }
  };

  const goBackToSignIn = () => {
    router.back();
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={30}
    >
      <View style={styles.container}>
        <Image 
          source={require("../../assets/images/Reset password-rafiki.png")} 
          style={styles.illustration} 
        />
        
        {!isEmailSent ? (
          <>
            <Text style={styles.title}>Esqueceu sua senha?</Text>
            <Text style={styles.subtitle}>
              Digite seu e-mail e enviaremos instruções para redefinir sua senha
            </Text>

            {error ? (
              <View style={styles.errorBox}>
                <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity onPress={() => setError("")}>
                  <Ionicons name="close" size={20} color={COLORS.textLight} />
                </TouchableOpacity>
              </View>
            ) : null}

            <TextInput
              style={[styles.input, error && styles.errorInput]}
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Entre com seu e-mail"
              placeholderTextColor="#9A8478"
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
              keyboardType="email-address"
            />

            <TouchableOpacity style={styles.button} onPress={onForgotPasswordPress}>
              <Text style={styles.buttonText}>Enviar E-mail de Recuperação</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.title}>E-mail enviado!</Text>
            
            <View style={styles.successBox}>
              <Ionicons name="checkmark-circle" size={20} color={COLORS.income} />
              <Text style={styles.successText}>{message}</Text>
            </View>

            <Text style={styles.subtitle}>
              Verifique sua caixa de entrada e siga as instruções no e-mail para redefinir sua senha
            </Text>

            <TouchableOpacity style={styles.button} onPress={goBackToSignIn}>
              <Text style={styles.buttonText}>Voltar para Login</Text>
            </TouchableOpacity>
          </>
        )}

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Lembrou sua senha?</Text>

          <Link href="/sign-in" asChild>
            <TouchableOpacity>
              <Text style={styles.linkText}>Fazer login</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}