import React, { Component } from 'react';
import { View, Alert } from 'react-native';

// import * from './components/index' nao precisa quando for index
import { Topo, Resultado, Painel } from './components';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            num1: '',
            num2: '',
            operacao: 'somar',
            resultado: ''
        };

        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this);

    }

    calcular() {

        if (this.state.num1 == '' || this.state.num2 == '') {
            Alert.alert('Campo não informado!');
            return
        }

        if (parseFloat(this.state.num2) === 0) {
            Alert.alert('Divisão por Zero!');
            return
        }

        let resultado = ''

        switch (this.state.operacao) {
            case 'somar':
                resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
                break;
            case 'subtrair':
                resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
                break;
            case 'multiplicar':
                resultado = parseFloat(this.state.num1) * parseFloat(this.state.num2);
                break;
            case 'dividir':
                resultado = parseFloat(this.state.num1) / parseFloat(this.state.num2);
                break;
            default:
                resultado = 0;
                break;
        }
        this.setState({ resultado: resultado.toString() });
        console.log(resultado);
    }

    atualizaValor(nomeCampo, numero) {

        const obj = {};
        obj[nomeCampo] = numero;

        this.setState(obj);
    }

    atualizaOperacao(operacao) {
        this.setState( { operacao } );
    }

    render() {
        return (
            <View>
                <Topo />
                <Resultado resultado={this.state.resultado} />
                <Painel
                    num1={this.state.num1}
                    num2={this.state.num2}
                    operacao={this.state.operacao}
                    calcular={this.calcular}
                    atualizaOperacao={this.atualizaOperacao}
                    atualizaValor={this.atualizaValor}
                />
            </View>
        );
    }
}
