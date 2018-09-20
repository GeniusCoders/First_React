import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import styles from './style'

const Container = ({childeren}) => (
    <View style={styles.conatiner}>
     {childeren}
    </View>
)

Container.propTypes = {
   childeren: PropTypes.any,
}

export default Container