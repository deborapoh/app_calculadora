import React from 'react';
import { AppRegistry, View } from 'react-native';

import App from './src/App';

const Calculadora = () => (
    <View>
        <App />
    </View>
);

AppRegistry.registerComponent('Calculadora', () => Calculadora);
