// Importa o módulo React e o componente Component da biblioteca "react".
import React, {Component} from "react";
// Importa os componentes da biblioteca "react-native".
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";
// Declara e exporta a classe HomeScreen que estende a classe Component do React.
export default class HomeScreen extends Component{
      // Define o método de renderização para este componente.

      //criar botôes das telas de Localização da EEI e Tela de Meteoros
      render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg1.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>App Rastreador EEI</Text>
                    </View>
                    
                   
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("IssLocation")
                    }>
                        <Text style={styles.routeText}>Localização da EEI</Text>
                        <Text style={styles.knowMore}>{"Saiba Mais --->"}</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={require('../assets/iss_icon.png')} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                       
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Meteors")
                    }>
                        <Text style={styles.routeText}>Meteoros</Text>
                        <Text style={styles.knowMore}>{"Saiba Mais --->"}</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={require('../assets/meteor_icon.png')} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet. create({
    container: {
        flex: 1
    },
    //verificar se o sistema operacional é Android
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    //inserir imagem
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    // estilo dos botões
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },

    //adicionar estilo aos títulos
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },

    //estilo do título
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },

    //os estilos de texto dentro do botão
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },

    //estilo "saiba mais"
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    //icones dentro dos botões
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
});