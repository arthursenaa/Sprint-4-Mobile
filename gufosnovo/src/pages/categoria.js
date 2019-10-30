import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


class Main extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
          <Text style={styles.tabBarEstilizacao}>Categoria</Text>
        ),
      };

    constructor() {
        super();
        this.state = {
            eventos: [], // api
        };
    }

    componentDidMount() {
        this._carregarEventos();
    }

    _carregarEventos = async () => {
        // axios, fetch, xhr (XmlHttpRequest)
        await fetch('http://192.168.7.85:5000/api/eventos')
            .then(resposta => resposta.json())
            .then(data => this.setState({ eventos: data }))
            .catch(erro => console.warn(erro));
    };

    render() {
        return (

            <View>
                <Text style={{ textAlign: "center", fontSize:30 }}> Categorias : </Text>
                <FlatList
                    data={this.state.eventos}
                    keyExtractor={item => item.idEvento}
                    renderItem={({ item }) => (
                        <Text style={{ textAlign: "center", fontSize:18 }}>{item.idCategoriaNavigation.nome}</Text>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBarEstilizacao:
    {fontSize:20 , color: 'white'}
  })

export default Main;