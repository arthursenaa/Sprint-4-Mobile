import React, {Component} from 'react';
import {Text, AsyncStorage, Image, StyleSheet} from 'react-native';
import * as JWT from 'jtw-decode';

class Profile extends Component {
  
    static navigationOptions = {
        tabBarIcon: () => (
          <Image
            source={require('../assets/img/perfil.png')}
            style={styles.tabBarEstilizacao}
          />
        ),
      };
  
    constructor() {
    super();
    this.state = {
      tokenLocal: null,
      decoded: null,
    };
  }

  componentDidMount() {
    this._buscarDadosDoStorage();
  }

  _buscarDadosDoStorage = async () => {
    try {
      const tokenDoStorage = await AsyncStorage.getItem('@gufos:token');
      if (tokenDoStorage != null) {
        this.setState({ tokenLocal : tokenDoStorage })
        // this.setState({ decoded : jwt_decode(this.state.tokenLocal)})
      }
    } catch (error) {}
  };

  render() {
    return(
    // <Text>{this.state.tokenLocal}</Text>
      <Text>{this.state.decoded}</Text>
    );}
}

const styles = StyleSheet.create({
    tabBarEstilizacao:
    {width: 25, height: 25, tintColor: 'white'}
  })

export default Profile;