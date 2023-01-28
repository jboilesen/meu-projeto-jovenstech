import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

class NasaImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgSrc: null,
            explanation: null
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://api.nasa.gov/planetary/apod?api_key=bxDdukeopxAQIoMaJftdRF4hqTBhB8XqClZqvk6C')
            .then(response => response.json())
            .then(data => this.setState({ explanation: data.explanation, imgSrc: data.hdurl }));
    }

    render() {
        const { explanation, imgSrc } = this.state;
        return (
            <ImageBackground source={imgSrc} resizeMode="cover" style={styles.image}>
              <Text style={styles.text}>{ explanation }</Text>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 16,
      lineHeight: 44,
      fontWeight: "bold",
      margin: 100,
      padding: 50,
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
});

/* import React    from "react";
import template from "./NasaImage.jsx";

class NasaImage extends React.Component {
  render() {
    return template.call(this);
  }
} */

export default NasaImage;
