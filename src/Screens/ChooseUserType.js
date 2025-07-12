import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LEARNER_TITLE, SELECT_USER, TUTOR_TITLE } from '../Utils/Strings'
import BgButton from '../Components/BgButton'
import BorderButton from '../Components/BorderButton'

const ChooseUserType = () => {
  return (
    <View>
      <Image source={require("../images/Users.jpg")} style={styles.imagestyle} />
      <Text style={styles.textuser}>{SELECT_USER}</Text>
      <BgButton title={TUTOR_TITLE} />
      <BorderButton title={LEARNER_TITLE} />
    </View>
  )
}

export default ChooseUserType

const styles = StyleSheet.create({
  imagestyle: {
    width: '100%',
  },
  textuser: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 20,
  },
})
