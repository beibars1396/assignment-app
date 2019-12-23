import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const TouchableContainer = styled.TouchableOpacity`
`

const AnimatedCard = ({ animation, number }) => {
    return(
        <View
            style = {{
                top: '25%',
                position: 'absolute',
                left: 0,
                height: '50%',
                width: '100%',
                borderColor: '#1f1f1f',
                backfaceVisibility: 'hidden',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text
                style={[ animation ? {
                    color: 'white'
                } : {
                    color: '#333333'
                }, {
                    fontSize: 100 / 1.5,
                    lineHeight: 100 / 1.5,
                    fontWeight: '700',
                }]}
            >
                {number}
            </Text>
        </View>
    )
}

export default ({ number }) => {
    const [isOpen, setShuffle] = useState(false)
    
    const onContainerPress = () => {
        setShuffle(!isOpen)
    }

    return (
        <TouchableContainer
            onPress={onContainerPress}
        >
            <View style={{
                width: 100 * 0.8,
                height: 100 * 1.2,
                borderRadius: 100 /10,
                
                backgroundColor: '#333333',
                margin: 3,
                shadowColor: '#1f1f1f',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowRadius: 2,
                shadowOpacity: 1,
                elevation: 5
            }}>
                <AnimatedCard 
                    animation={isOpen}
                    number={number}
                />
                <AnimatedCard 
                    animation={isOpen}
                    number={number}
                />
            </View>
        </TouchableContainer>
    )
}