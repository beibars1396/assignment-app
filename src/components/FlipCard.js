import React, { useState } from 'react'
import { View, Text } from 'react-native'

const StaticCard = ({ position, number }) => {
    return (
        <View
            style = {[
                position === 'upper' ? {
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

                    fontSize: 100 / 1.5,
                    lineHeight: 100 / 1.5,

                    transform: [
                        position === 'upper' ? {
                            translateY: 100 * 0.3
                        } : {
                           translateY: -100 * 0.3
                        }
                    ]
                }}
            >
                { number }
            </Text>
        </View>
    )
}

const AnimatedCard = ({ animation, number }) => {
    return (
        <View style = {[
            animation === 'fold' ? {
                top: 0,
                borderTopLeftRadius: 100 / 10,
                borderTopRightRadius: 100 / 10,
                borderBottomWidth: 0.5,
            } : {
                top: '50%',
                borderBottomLeftRadius: 100 / 10,
                borderBottomRightRadius: 100 / 10,
                borderTopWidth: 0.5,
            }, {
                position: 'absolute',
                left: 0,
                height: '50%',
                width: '100%',
                backgroundColor: '#333333',
                borderColor: '#1f1f1f',
                backfaceVisibility: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }
        ]}>
            <Text style={{
                transform: [animation === 'fold' ? { translateY: 100 * 0.3 } : { translateY: -100 * 0.3 }],
                fontSize: 100 / 1.5,
                lineHeight: 100 / 1.5,
                fontWeight: '700',
                color: '#cccccc'
            }}>
                {number}
            </Text>
        </View>
    )
}

export default ({ number }) => {
    const [shuffle, setShuffle] = useState(false)

    const upperAnimation = shuffle ? 'fold' : 'unfold'
    const lowerAnimation = !shuffle ? 'fold' : 'unfold'

    return (
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
            <StaticCard
                position={'upper'}
                number={number}
            />
            <StaticCard
                position={'lower'}
                
            />
            <AnimatedCard 
                animation={upperAnimation}
                number={number}
            />
            <AnimatedCard 
                animation={lowerAnimation}

            />
        </View>
    )
}