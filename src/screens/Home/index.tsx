import React, {useState} from 'react';
import {View, FlatList} from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import {Profile} from '../../components/Profile';
import { styles } from './styles';
import {ListDivider} from '../../components/ListDivider';
import {CategorySelect} from '../../components/CategorySelect';
import {ListHeader} from '../../components/ListHeader';
import {Background} from '../../components/Background';
import { Appointment } from '../../components/Appointment';
import {useNavigation} from  '@react-navigation/native';

export function Home(){
  const [category, setCategory] = useState('');

  const appointments = [
      {
        id: '1', 
        guild: {
          id: '1',
          name: 'Lendários',
          icon: null,
          owner: true,
        },

        category: '1', 
        date: '22/06 ás 20:40h',
        description: 'È hoje que chegar ao challenger sem perder uma aprtida da md10'
      },
      {
        id: '2', 
        guild: {
          id: '1',
          name: 'Lendários',
          icon: null,
          owner: true,
        },

        category: '1', 
        date: '22/06 ás 20:40h',
        description: 'È hoje que chegar ao challenger sem perder uma aprtida da md10'
      }
  ]

  const navigation = useNavigation();

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails');
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate');
  }

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background>
      <View style ={styles.header}>
        <Profile/>
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>

 
        <CategorySelect 
          categorySelected={category}
          setCategory={handleCategorySelect}
          hasCheckBox={true}
        />

        <View style={styles.content}>
          <ListHeader
            title="Partidas agendadas"
            subtitle= "Total 6"

          />

          <FlatList 
              data ={appointments}
              keyExtractor= {item => item.id}
              renderItem={({item}) =>(
              <Appointment 
              data={item}
              onPress={handleAppointmentDetails}
              
              />
            )}
            ItemSeparatorComponent = {() => <ListDivider/>}
            style={styles.matches}
            showsVerticalScrollIndicator = {false}
          />

        </View>
    </Background>
  );
}