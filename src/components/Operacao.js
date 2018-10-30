import React, { Component } from 'react';
import { Picker, StyleSheet, View } from 'react-native';

export default class Operacao extends Component {

    render() {
        return (
            <View style={styles.centralizado}>
                <Picker
                    style={styles.operacao}
                    selectedValue={this.props.operacao}
                    onValueChange={op => { this.props.atualizaOperacao(op) }}
                >
                    <Picker.Item label='Somar' value='somar' />
                    <Picker.Item label='Subtrair' value='subtrair' />
                    <Picker.Item label='Multiplicar' value='multiplicar' />
                    <Picker.Item label='Dividir' value='dividir' />
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    operacao: {
        marginTop: 30,
        marginBottom: 30,
        width: 120,
    },

    centralizado: {
        alignItems: 'center',
    }
});
