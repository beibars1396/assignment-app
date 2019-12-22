import React from 'react'
import { View, Text } from 'react-native'

export default ({ type, size, number }) => {

    return (
        <View
            style = {[
                type === 'upper' ? {
                    borderBottomWidth: 0.5
                } : {
                    borderTopWidth: 0.5
                },
                {
                    flex: 0.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: '#1f1f1f',
                    overflow: 'hidden'
            }]}
        >
            <Text
                style = {{
                    fontWeight: '700',
                    color: '#cccccc',

                    fontSize: size / 1.5,
                    lineHeight: size / 1.5,

                    transform: [
                        type === 'upper' ? {
                            translateY: size * 0.3
                        } : {
                           translateY: -size * 0.3
                        }
                    ]
                }}
            >
                { number }
            </Text>
        </View>
    )
}
