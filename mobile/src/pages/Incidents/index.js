import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'
import styles from './styles'

function Incidents () {
  const navigation = useNavigation()

  function navigateToDetail () {
    navigation.navigate('Detail')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>Choose one case below and save the day.</Text>

      <FlatList
        style={styles.incidentList}
        data={[1, 2, 3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>CASE:</Text>
            <Text style={styles.incidentValue}>New UTI machine.</Text>

            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>IPESQ</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>$ 120.00</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>See more details</Text>
              <Feather name='arrow-right' size={16} color='#e02041' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

export default Incidents
