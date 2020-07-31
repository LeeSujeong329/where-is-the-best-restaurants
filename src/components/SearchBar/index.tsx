import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBarProps, SearchBarStates, ISearchBar } from './types';


class SearchBar extends React.Component<
    SearchBarProps,
    SearchBarStates
> implements ISearchBar {

    constructor(props) {
        super(props);

        this.onChangeText = this.onChangeText.bind(this);
        this.onPress = this.onPress.bind(this);

        this.state = {
            text: '',
        };
    }

    onChangeText(text: string) {
        this.setState({text: text});
    }

    onPress() {
        this.props.onPressSearch(this.state.text);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.onChangeText}
                    value={this.state.text}
                />
                </View>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>검색</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 80,
        marginTop: 100,
        flexDirection: 'row',
        backgroundColor: 'yellow',
    },
    textInputContainer: {
        width: 230,
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 2,
        height: 50,
    },
    button: {
        width: 70,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }
});