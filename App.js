import React, { Component }from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./Weather";

const API_KEY = "e6e574ca04972096a2c80b04c18bff43";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weatherName: null,
    city: null
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
      this._getWeather(position.coords.latitude, position.coords.longitude)
    },
      error => {
        this.setState({
          error:error
        })
      }
    )
  }

  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        temperature: json.main.temp,
        weatherName: json.weather[0].main,
        city: json.name,
        isLoaded: true
      })
    })
  }
  render() {
    const { isLoaded, error, temperature, weatherName, city} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />

        {isLoaded ? 
        <Weather weatherName={ weatherName } temp={ Math.floor(temperature - 273.15) } city={ city }/> : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>
            Getting the weather
          </Text>
          {error ? <Text style={styles.errorText}>{ error }</Text> : null}
        </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 50 
  },
  errorText: {
    color: "red",
    marginBottom: 40
  }
});
