import React from 'react';
import {View} from 'react-native';
import SearchBar from './components/SearchBar'

class MainComponent extends React.Component {

    constructor(props) {
        super(props);

        this.requestTheBestRestaurants = this.requestTheBestRestaurants.bind(this);
    }

    async requestTheBestRestaurants(sigunNM: string) {

        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          };
        const path = 'https://openapi.gg.go.kr/PlaceThatDoATasteyFoodSt?SIGUN_NM=' + encodeURIComponent(sigunNM);
        const response = await fetch(path, options);
        const json = await response.json();

        console.log(json);
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                }}
            >
                <SearchBar onPressSearch={this.requestTheBestRestaurants}/>
            </View>
        );
    }
}

export default MainComponent;
