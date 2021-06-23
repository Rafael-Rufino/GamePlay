import React from 'react';
import {View, Text} from 'react-native';

import {Avatar} from '../Avatar'; 
import {styles} from './styles';

export function Profile(){
  return (
    <View style = {styles.container}>
      <Avatar urlImage = "https://lh3.google.com/u/0/ogw/ADea4I5Ogk0yHj-TX46CSjknqAz5uy29YI8lz9Lir4xV=s32-c-mo"/>
      <View>
        <View style = {styles.user}>
          <Text style = {styles.greeting}>
            Olá

          </Text>
          <Text style = {styles.username}>
            Rafael
          </Text>
        </View>

        <Text style = {styles.message}>
          Hoje é dia de vitoria

        </Text>
      </View>
      
    </View>
  )
}
