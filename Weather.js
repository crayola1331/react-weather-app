import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

// export default class Weather extends Component {
//     render() {
//         return (
//             <LinearGradient 
//             colors={[ '#00c6fb', '#005bea']}
//             style={styles.container}>
//                 <View style={styles.upper}>
//                     <Ionicons color="white" size={144} name="ios-rainy" />
//                     <Text style={styles.temp}>19</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining</Text>
//                     <Text style={styles.subtitle}>More info, Look outside</Text>
//                 </View>
//             </LinearGradient>
//         )
//     }
// }

const weatherCases = {
    Rain: {
        colors: ["#00c6fb", "#005bea"],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: "ios-rainy"
    },
    Sunny: {
        colors: ["#fef253", "#ff7360"],
        title: "Sunny",
        subtitle: "Go tanning",
        icon: "ios-sunny"
    },
    Thunderstorm: {
        colors: ["#00ecbc", "#007adf"],
        title: "Thunderstorm",
        subtitle: "For more info look outside",
        icon: "ios-thunderstorm"
    },
    Clouds: {
        colors: ["#d7d2cc", "#304352"],
        title: "Clouds",
        subtitle: "I know it's boring",
        icon: "ios-cloudy"
    },
    Snow: {
        colors: ["#7de2fc", "#b986e5"],
        title: "Snowy",
        subtitle: "Do you want to build a snowman",
        icon: "ios-snow"
    },
    Drizzle: {
        colors: ["#89f7f2", "#66a6ff"],
        title: "Drizzle",
        subtitle: "It's like rain",
        icon: "ios-cloud-outline"
    },
    Haze: {
        colors: ["#89f7f2", "#66a6ff"],
        title: "Haze",
        subtitle: "It's like rain",
        icon: "ios-cloud-outline"
    }
}

function Weather( { weatherName, temp, city} ) {
    console.log(weatherName)
    return(
        <LinearGradient 
            colors={weatherCases[weatherName].colors}
            style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
                    <Text style={styles.temp}>{ temp }</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                    <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
                </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    redView: {
        flex: 1,
        backgroundColor: "red"
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {

    },
    temp: {
        fontSize: 38,
        color: "white"
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "flex-end",
        paddingLeft: 30
    },
    title: {
        fontSize: 38,
        color: "white",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 24,
        color: "white",
        marginBottom: 24
    }
})