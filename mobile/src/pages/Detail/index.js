import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'
import styles from './styles'

function Detail () {
  const navigation = useNavigation()
  const message = 'Hello Ipesq, I want to be a hero for the case New UTI machine.'

  function navigationBack () {
    navigation.goBack()
  }

  function sendWhatsapp () {
    Linking.openURL(`whatsapp://send?phone=5583982186476&text=${message}`)
  }

  function sendMail () {
    MailComposer.composeAsync({
      subject: 'Hero of New UTI machine.',
      recipients: ['sol.uian@gmail.com'],
      body: message
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigationBack}>
          <Feather name='arrow-left' size={28} color='#e82041' />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>CASE:</Text>
        <Text style={styles.incidentValue}>New UTI machine.</Text>

        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>IPESQ</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>$ 120.00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this case.</Text>

        <Text style={styles.heroDescription}>Contact:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Detail
