import { TextInputProps } from 'react-native';


interface SearchBarProps {
  onPressSearch: (text: string) => void
}

interface SearchBarStates {
  text: string;
}

interface ISearchBar extends TextInputProps {
  onPress: () => void,
}

export {
  SearchBarProps,
  SearchBarStates,
  ISearchBar,
};
