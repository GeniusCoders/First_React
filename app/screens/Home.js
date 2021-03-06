import React from 'react'
import {View,StatusBar,Text} from 'react-native'
import Container from '../components/Container/Container'
import {Logo} from '../components/Logo'

export default () => (
    <Container>
     <StatusBar translucent={false} barStyle={"light-content"} />
     <Logo/>
    </Container>
)