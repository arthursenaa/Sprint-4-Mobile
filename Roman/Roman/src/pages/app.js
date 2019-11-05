import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  constructor() {
    super();
    this.state = {
      email: null,
      senha: null,
    };
  }

  _fazerLogin = async () => {
    // console.warn(this.state.email + this.state.senha);
    await fetch('', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        senha: this.state.senha,
      }),
    })
      .then(resposta => resposta.json())
      .then(data => this._botaoLogar(data.token))
      .catch(erro => console.warn(erro));
  };

  _botaoLogar = async token => {
    if (token != null) {
      try {
        await AsyncStorage.setItem('@roman:token', roken);
        this.props.navigation.navigate('MainNavigator');
      } catch (error) {}
    }
  };


  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <View>
          <TextInput
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          style={{marginLeft:'15%'  ,width:'70%'}}
          />
          <TextInput
            placeholder="Senha"
            onChangeText={senha => this.setState({ senha })}
            value={this.state.senha}
          style={styles.imput}
          />
          <TouchableOpacity onPress={this._fazerLogin} style={{marginLeft:'25%',width:'50%',backgroundColor:'grey'}}>
            <Text style={styles.center}>Login</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }
};

const styles = StyleSheet.create({
  center: {
    textAlign : 'center'
  },
  imput: {marginLeft:'15%'  ,width:'70%'}
  
});

export default App;
