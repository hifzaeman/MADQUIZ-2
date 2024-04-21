import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import * as tf from "@tensorflow/tfjs";
import * as use from "@tensorflow-models/universal-sentence-encoder";
import "@tensorflow/tfjs-react-native";
import * as ImagePicker from "expo-image-picker";
import { fetch } from "@tensorflow/tfjs-react-native";

export default function USEModel() {
  const [isTfReady, setIsTfReady] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const [embeddings, setEmbeddings] = useState(null);
  const [sentences, setSentences] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const model = useRef(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
      await tf.ready(); // Initialize TensorFlow.js
      setIsTfReady(true);
      model.current = await use.load();
      setIsModelReady(true);
    })();
  }, []);

  const selectImageAsync = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        quality: 1,
        aspect: [4, 3],
      });

      console.log("ImagePicker result:", result);

      if (
        !result.cancelled &&
        result.assets.length > 0 &&
        result.assets[0].uri
      ) {
        setSelectedImage(result.assets[0].uri);
       
      } else {
        console.log("Image selection cancelled or URI is missing");
      }
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  };

  const extractTextFromImage = async (uri) => {
  
  };

  const embedSentences = async () => {
    if (!sentences) {
      alert("Please select an image to extract sentences.");
      return;
    }

    try {
      const embeddings = await model.current.embed(sentences);
      setEmbeddings(embeddings.arraySync());
      console.log("Embeddings:", embeddings.arraySync());
    } catch (error) {
      console.error("Error embedding sentences:", error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Text style={styles.headerText}>USE Sentence Embedding</Text>

          <View style={styles.loadingContainer}>
            <View style={styles.loadingTfContainer}>
              <Text style={styles.text}>TensorFlow.js ready?</Text>
            </View>           
          </View>
          <TouchableOpacity
            style={styles.imageWrapper}
            onPress={isModelReady ? selectImageAsync : undefined}
          >
            {selectedImage && (
              <Image
                source={{ uri: selectedImage }}
                style={styles.imageContainer}
              />
            )}
            {!selectedImage && (
              <Text style={styles.transparentText}>Tap to choose image</Text>
            )}
          </TouchableOpacity>

          <View style={styles.predictionWrapper}>
            {isModelReady && selectedImage && (
              <Text style={styles.text}>
                Sentences: {sentences ? sentences.join(", ") : "Extracting..."}
              </Text>
            )}
            {isModelReady && sentences && (
              <TouchableOpacity onPress={embedSentences}>
                <Text style={styles.text}>Embed Sentences</Text>
              </TouchableOpacity>
            )}
            {isModelReady && embeddings && (
              <Text style={styles.text}>Embeddings: {embeddings}</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  contentContainer: {
    paddingTop: 30,
  },
  headerText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  loadingContainer: {
    marginTop: 5,
  },
  text: {
    fontSize: 16,
  },
  loadingTfContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  loadingModelContainer: {
    flexDirection: "row",
    marginTop: 10,},
  imageWrapper: {
    width: 300,
    height: 300,
    borderColor: "#66c8cf",
    borderWidth: 3,
    borderStyle: "dashed",
    marginTop: 40,
    marginBottom: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",},
  imageContainer: {
    width: 280,
    height: 280,},
  predictionWrapper: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",},
  transparentText: {
    opacity: 0.8,},});
