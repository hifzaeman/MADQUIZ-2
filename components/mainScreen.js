import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import CameraScreen from "./cameraScreen";
import ImageClassifier from "./objectDetectionScreen";
import USEModel from "./USEsentenceencoder";
import { auth } from "../firebase";

const Tab =  createMaterialTopTabNavigator();

const MainScreen = () => {
  const navigation = useNavigation();

  const HandleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
      })}
    >
      <Tab.Screen name="Capture" component={CameraScreen} />
    
      <Tab.Screen name="Classifiy" component={ImageClassifier} />
      <Tab.Screen name="Encoder" component={USEModel} />
      <Tab.Screen
        name="SignOut"
        component={() => null}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            HandleSignOut();
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
