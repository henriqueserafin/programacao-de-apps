import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import { useState, useEffect } from "react";
import { styles } from "../../assets/styles/profile.styles";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const EditProfileScreen = () => {
  const router = useRouter();
  const { user } = useUser();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with user data
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.emailAddresses?.[0]?.emailAddress || "");
      setPhone(user.phoneNumbers?.[0]?.phoneNumber || "");
    }
  }, [user]);

  const handleSaveProfile = async () => {
    if (!firstName.trim()) {
      Alert.alert("Erro", "O nome é obrigatório");
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
    
      
      Alert.alert(
        "Sucesso", 
        "Perfil atualizado com sucesso!",
        [{ text: "OK", onPress: () => router.back() }]
      );
    } catch (error) {
      Alert.alert("Erro", "Falha ao atualizar o perfil. Tente novamente.");
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getFullName = () => {
    return `${firstName.trim()} ${lastName.trim()}`.trim() || "Usuário";
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Editar Perfil</Text>
        <TouchableOpacity
          style={[styles.saveButtonContainer, isLoading && styles.saveButtonDisabled]}
          onPress={handleSaveProfile}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={COLORS.primary} />
          ) : (
            <>
              <Text style={styles.saveButton}>Salvar</Text>
              <Ionicons name="checkmark" size={18} color={COLORS.primary} />
            </>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* PROFILE ILLUSTRATION */}
        <View style={styles.illustrationContainer}>
          <Image 
            source={require("../../assets/images/Privacy policy-rafiki.png")} 
            style={styles.illustration} 
          />
        </View>

        {/* PROFILE PREVIEW */}
        <View style={styles.profilePreview}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={40} color={COLORS.primary} />
          </View>
          <Text style={styles.previewName}>{getFullName()}</Text>
          <Text style={styles.previewEmail}>{email || "email@exemplo.com"}</Text>
        </View>

        {/* FORM CARD */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Informações Pessoais</Text>
          
          {/* FIRST NAME */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nome</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              placeholder="Digite seu nome"
              placeholderTextColor={COLORS.textLight}
              onChangeText={setFirstName}
            />
          </View>

          {/* LAST NAME */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Sobrenome</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              placeholder="Digite seu sobrenome"
              placeholderTextColor={COLORS.textLight}
              onChangeText={setLastName}
            />
          </View>

          {/* EMAIL */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              style={[styles.input, styles.inputDisabled]}
              value={email}
              placeholder="Digite seu e-mail"
              placeholderTextColor={COLORS.textLight}
              onChangeText={setEmail}
              keyboardType="email-address"
              editable={false}
            />
            <Text style={styles.helperText}>
              O e-mail não pode ser alterado por questões de segurança
            </Text>
          </View>

          {/* PHONE */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Telefone</Text>
            <TextInput
              style={styles.input}
              value={phone}
              placeholder="Digite seu telefone"
              placeholderTextColor={COLORS.textLight}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* DANGER ZONE */}
        <View style={styles.dangerCard}>
          <Text style={styles.dangerTitle}>Zona de Perigo</Text>
          <TouchableOpacity 
            style={styles.dangerButton}
            onPress={() => Alert.alert(
              "Excluir Conta",
              "Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.",
              [
                { text: "Cancelar", style: "cancel" },
                { text: "Excluir", style: "destructive" }
              ]
            )}
          >
            <Ionicons name="trash" size={20} color={COLORS.expense} />
            <Text style={styles.dangerButtonText}>Excluir Conta</Text>
          </TouchableOpacity>
        </View>

        {/* BOTTOM PADDING */}
        <View style={{ height: 50 }} />
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;