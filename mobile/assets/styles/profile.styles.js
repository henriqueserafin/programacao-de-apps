import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
  },
  backButton: {
    padding: 5,
  },
  saveButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  saveButton: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "600",
  },
  scrollContainer: {
    flex: 1,
  },

  // ILLUSTRATION SECTION
  illustrationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  illustration: {
    width: 250,
    height: 180,
    resizeMode: "contain",
  },

  // PROFILE PREVIEW SECTION
  profilePreview: {
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.card,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  previewName: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 4,
  },
  previewEmail: {
    fontSize: 16,
    color: COLORS.textLight,
  },

  // FORM SECTION
  card: {
    backgroundColor: COLORS.card,
    margin: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 16,
    color: COLORS.text,
  },
  inputDisabled: {
    backgroundColor: COLORS.background,
    color: COLORS.textLight,
  },
  helperText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 4,
    fontStyle: "italic",
  },

  // DANGER ZONE
  dangerCard: {
    backgroundColor: COLORS.card,
    margin: 16,
    marginTop: 8,
    borderRadius: 16,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.expense,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dangerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.expense,
    marginBottom: 12,
  },
  dangerButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  dangerButtonText: {
    fontSize: 16,
    color: COLORS.expense,
    marginLeft: 8,
    fontWeight: "500",
  },
});