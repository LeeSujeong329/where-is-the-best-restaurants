import React from 'react';
import {View} from 'react-native';
import SearchBar from './components/SearchBar'

class MainComponent extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                }}
            >
                <SearchBar onPressSearch={(text) => alert(text)}/>
            </View>
        );
    }
}

export default MainComponent;
