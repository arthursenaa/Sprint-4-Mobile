import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

class Main extends Component {  
    constructor() {
      super();
      this.state = {
        projetos: [], 
      };
    }
  
    componentDidMount() {
      this._listarProjetos();
    }
  
    _listarProjetos = async () => {
      await fetch('')
        .then(resposta => resposta.json())
        .then(data => this.setState({projetos: data}))
        .catch(erro => console.warn(erro));
    };
  
    render() {
      return (
        <FlatList
          data={this.state.eventos}
          keyExtractor={item => item.idEvento}
          renderItem={({item}) => (
            <View>
              <Text>{item.titulo}</Text>
            </View>
          )}
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    tabBarEstilizacao:
    {width: 25, height: 25, tintColor: 'white'}
  })
  
  export default Main;