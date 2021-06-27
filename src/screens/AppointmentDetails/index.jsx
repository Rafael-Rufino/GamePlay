import React from 'react';
import {Fontisto} from '@expo/vector-icons';
import {View,Text, ImageBackground, FlatList} from 'react-native';
import {Background} from '../../components/Background';
import {ListHeader} from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { BorderlessButton } from 'react-native-gesture-handler';
import {theme} from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { styles } from './styles';
import {Member} from '../../components/Member';
import {ListDivider} from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Rafael',
      avatar_url: 'https://github.com/Rafael-Rufino.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'offline',
    }
  ]
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
          <Fontisto 
            name="share"
            size={24}
            color={theme.colors.primary}
          />


          </BorderlessButton>

        }
      />
      <ImageBackground
         source={BannerImg}
         style = {styles.banner}
         >
          <View style={styles.bannerContent}>
            <Text style={styles.title}>
                Lendários
            </Text>
            <Text style={styles.subtitle}>
              È hoje que vamos chegar ao challenger sem perder uma partida da md10
            </Text>
        </View>

      </ImageBackground>
      <ListHeader
        title="jogador"
        subtitle="total 3"
      />

        <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) =>(
          <Member data = {item} />

        )}
        ItemSeparatorComponent={() => <ListDivider/>}
        style={styles.members}
        
        />
        <View style={styles.footer}>
           <ButtonIcon title="Entrar na Partida"/>
        </View>
    </Background>
  );
}
