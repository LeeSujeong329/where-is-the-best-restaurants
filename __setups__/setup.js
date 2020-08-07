import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({adapter: new Adapter()});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter', () => {
  return {
    UIManager: {
      RCTView: () => ({
        directEventTypes: {},
        ScaleToFill: {},
      }),
    },
    KeyboardObserver: {},
    RNGestureHandlerModule: {
      attachGestureHandler: jest.fn(),
      createGestureHandler: jest.fn(),
      dropGestureHandler: jest.fn(),
      updateGestureHandler: jest.fn(),
      State: {},
      Directions: {},
    },
    PlatformConstants: {
      forceTouchAvailable: false,
    },
  };
});
jest.mock('react-native/Libraries/Components/Keyboard/Keyboard', () => {});

jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  const MockMapView = (props: any) => {
    return <View>{props.children}</View>;
  };
  const MockMarker = (props: any) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});
