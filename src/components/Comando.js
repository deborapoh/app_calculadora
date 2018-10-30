import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default props => (
    <View style={styles.centralizado}>
        <View style={styles.botao}>
            <Button
                title='Calcular'
                onPress={ props.acao }
            />
        </View>
    </View>

);

const styles = StyleSheet.create({
    botao: {
        width: 160,
    },
    centralizado: {
        alignItems: 'center',
    }
});
