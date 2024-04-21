import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50", // Updated background color
  },
});

const stylesCamera = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    height: "100%",
  },
  cameraContainer: {
    flex: 1,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

const stylesImageScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#E91E63", // Updated background color
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF", // Updated text color
    fontWeight: "bold",
    textAlign: "center",
  },
});

// Updated styles for Sign In and Sign Up screens
const stylesSignInAndUp = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F44336", // Updated background color
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#E91E63",
  },
  input: {
    width: "80%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 35,
  },
  button: {
    backgroundColor: "#FF9800", // Updated background color
    paddingHorizontal: 23,
    paddingVertical: 13,
    borderRadius: 40,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF", // Updated text color
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
  },
  footertext: {
    color: "#00A36C",
  },
  link: {
    color: "#A020F0",
  },
});

export { stylesHome, stylesCamera, stylesImageScreen, stylesSignInAndUp };
