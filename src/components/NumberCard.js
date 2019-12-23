import React, { useEffect } from 'react'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from './Card'
import FlipCard from './FlipCard'
import {
    createIdentityMatrix
} from '@utils/MatrixMath'
import {
    rotateXMatrix,
    perspectiveMatrix,
    translateMatrix,
    untranslateMatrix
} from '@utils/Transform'

const NumberCardContainer = styled.TouchableOpacity`
`

export default ({ number, size }) => {
    backRef = null
    frontRef = null
    
    rotateFront = new Animated.Value(0)
    rotateBack = new Animated.Value(-180)

    useEffect(() => {
        animateTick()
        rotateFront.addListener(({ value }) => {
            transformRef(frontRef, value, size * 0.3)
        })
        rotateBack.addListener(({ value }) => {
            transformRef(backRef, value, size * 0.3)
        })
    })

    const setFrontRef = ( ref ) => {
        frontRef = ref
    }

    const setBackRef = ( ref ) => {
        backRef = ref
    }

    const animateTick = () => {        
        rotateFront.setValue(0)
        rotateBack.setValue(-180)
        Animated.parallel([
            Animated.timing(rotateFront, {
                toValue: 180,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(rotateBack, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start()
    }

    const transformRef = (ref, deg, y) => {
        // const perspective = PropTypes.number
        const perspective = 250
        const matrix = createIdentityMatrix();
        // translateMatrix(matrix, { x: 0, y, z: 0 });
        perspectiveMatrix(matrix, perspective);
        rotateXMatrix(matrix, deg);
        untranslateMatrix(matrix, { x: 0, y, z: 0 });
        if (ref) {
            ref.setNativeProps({ style: { transform: [{ matrix }] } });
        }
    }


    const onCardPress = () => {
        animateTick()
    }
    
    return (
        <NumberCardContainer 
            onPress={onCardPress}
            style={{
                width: size * 0.8,
                height: size * 1.2,
                borderRadius: size /10,

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
            }}
        >
            <Card 
                number={number}
                type="upper"
                size={size}
            />
            <Card 
                type="lower"
                size={size}
            />
            <FlipCard
                setRef={setFrontRef}
                type="front"
                size={size}
            />
            <FlipCard
                setRef={setBackRef}
                type="back"
                number={number}
                size={size}
            />
        </NumberCardContainer>
    )
}
