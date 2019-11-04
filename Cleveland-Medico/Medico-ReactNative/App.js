import React, {Component} from 'react';
import {Text, FlatList, View} from 'react-native';

class App extends Component {
  constructor() {
      super();
      this.state = {
          medicos: [],
      };
  }

  componentDidMount() {
      this._carregarMedicos();
  }

  _carregarMedicos = async () => {
      await fetch('http://192.168.3.14:5000/api/medico')
      .then(resposta => resposta.json())
      .then(data => this.setState({medicos: data}))
      .catch(erro => console.warn(erro));

  };

  render() {
      return (
          <FlatList
          data={this.state.medicos}
          keyExtractor={item => item.idMedico}
          renderItem={({item}) => (
              <View>
                  <Text>{item.nome} , {item.dataDeNascimento} , {item.crm} - {item.especialidade} </Text>
              </View>
          )}
          />
      );
  }
} 

export default App;