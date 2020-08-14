import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


class TheBestRestaurants extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
              {/* 실제 지도 */}
              <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: 127.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={styles.mapStyle}
              />
              <View style={{flex: 1, backgroundColor: 'yellow', alignItems: 'center'}}>
                {
                  this.props.data.map((restaurant, index) => {
                    return (
                      <View key={index} style={{width: screen.width-20, height: 50, backgroundColor: 'pink', padding: 10, margin: 10}}>
                        <Text>{index+1 + '. ' +restaurant.RESTRT_NM}</Text>
                      </View>
                    );
                  })
                } 
              </View>
            </View>
        );
    }
}

export default TheBestRestaurants;

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
      width: screen.width,
      height: screen.height - 250,
      marginTop: 50,
    },   
    mapStyle: {
      width: screen.width,
      height: 400,
      borderWidth: 1,
    }
});