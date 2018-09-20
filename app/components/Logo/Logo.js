import React from 'react'
import {View,Image,Text} from 'react-native'

const Logo = () => (
    <View>
     <Image source={require('./Images/background.png')}>
      <Image source={require('./Images/logo.png')}/>
     </Image>
     <Text>Currency Converter</Text>
    </View>
)

export default Logo