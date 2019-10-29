import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MainNavigator from '../index'
class Main extends Component {
    constructor() {
        super();
        this.state = {
            eventos: [],
        };
    }

    componentDidMount() {
        this._carregarEventos();
    }

    _carregarEventos = async () => {
        await fetch('http://192.168.7.85:5000/api/eventos')
            .then(resposta => resposta.json())
            .then(data => this.setState({eventos: data }))
            .catch(erro => console.warn(erro));
    }

    render() {
        return (
            <FlatList
                data={this.state.eventos}
                keyExtractor={item => item.idEvento}
                renderItem={({ item }) => (
                    <View style={{backgroundColor:'grey'}}>
                        <Text style={{textAlign:'left', padding:20, color:'White' ,fontSize:20}} >{item.titulo} : {item.descricao} - {item.dataEvento} - {item.localizacao}  - {item.idCategoriaNavigation.nome}  </Text>
                        {/* <Text>{item.descricao}</Text>
                        <Text>{item.dataEvento}</Text> */}
                    </View>
                )}
            />
        );
    }
}
// style={styles.lista}
// const styles = StyleSheet.create({

//     background: {
//         backgroundColor: 'black',
//     },

// });

export default Main;