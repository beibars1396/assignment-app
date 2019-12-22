import React, { useEffect } from 'react'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from './Card'
import FlipCard from './FlipCard'

const NumberCardContainer = styled.TouchableOpacity`
`

export default ({ number, size }) => {
    let frontRef, backRef
    let rotateFront = new Animated.Value(0)
    let rotateBack = new Animated.Value(-180)

    const MatrixMath = {
        createIdentityMatrix: function() {
          return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        },
      
        multiplyInto: function(out, a, b) {
            const a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a03 = a[3],
                a10 = a[4],
                a11 = a[5],
                a12 = a[6],
                a13 = a[7],
                a20 = a[8],
                a21 = a[9],
                a22 = a[10],
                a23 = a[11],
                a30 = a[12],
                a31 = a[13],
                a32 = a[14],
                a33 = a[15];
        
            let b0 = b[0],
            b1 = b[1],
            b2 = b[2],
            b3 = b[3];
            out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        
            b0 = b[4];
            b1 = b[5];
            b2 = b[6];
            b3 = b[7];
            out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        
            b0 = b[8];
            b1 = b[9];
            b2 = b[10];
            b3 = b[11];
            out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        
            b0 = b[12];
            b1 = b[13];
            b2 = b[14];
            b3 = b[15];
            out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        },

        reusePerspectiveCommand: function(matrixCommand, p) {
            matrixCommand[11] = -1 / p;
        },

        reuseTranslate3dCommand: function(matrixCommand, x, y, z) {
            matrixCommand[12] = x;
            matrixCommand[13] = y;
            matrixCommand[14] = z;
        },
    }

    const animateTick = () => {
        console.log('animateTick');
        
        rotateFront.setValue(0);
        rotateBack.setValue(-180);
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
        ]).start();
    }
    
    const onCardPress = () => {
        animateTick()
    }

    const { createIdentityMatrix } = MatrixMath
    const { multiplyInto } = MatrixMath 

    const rotateXMatrix = (matrix, deg) => {
        const rad = (Math.PI / 180) * deg;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const rotate = [
          1, 0, 0, 0,
          0, cos, -sin, 0,
          0, sin, cos, 0,
          0, 0, 0, 1,
        ];
        multiplyInto(matrix, matrix, rotate);
    }
      
    const perspectiveMatrix = (matrix, value) => {
        const perspective = createIdentityMatrix();
        MatrixMath.reusePerspectiveCommand(perspective, value);
        multiplyInto(matrix, matrix, perspective);
    }
      
    const translateMatrix = (matrix, origin) => {
        const { x, y, z } = origin;
        const translate = createIdentityMatrix();
        MatrixMath.reuseTranslate3dCommand(translate, x, y, z);
        multiplyInto(matrix, translate, matrix);
    }
      
    const untranslateMatrix = (matrix, origin) => {
        const { x, y, z } = origin;
        const unTranslate = createIdentityMatrix();
        MatrixMath.reuseTranslate3dCommand(unTranslate, -x, -y, -z);
        multiplyInto(matrix, matrix, unTranslate);
    }

    const transformRef = (ref, deg, y) => {
        const perspective = PropTypes.number
        const matrix = createIdentityMatrix();
        translateMatrix(matrix, { x: 0, y, z: 0 });
        perspectiveMatrix(matrix, perspective);
        rotateXMatrix(matrix, deg);
        untranslateMatrix(matrix, { x: 0, y, z: 0 });
        if (ref) {
          ref.setNativeProps({ style: { transform: [{ matrix }] } });
        }
      }

    useEffect(() => {
        animateTick()
        // rotateFront.addListener(({ value }) => {
        //     transformRef(frontRef, value, size * 0.3)
        // })
        // rotateBack.addListener(({ value }) => {
        //     transformRef(backRef, value, -size * 0.3)
        // })
    }, [])

    const setFrontRef = ( ref ) => {
        frontRef = ref
    }

    const setBackRef = ( ref ) => {
        backRef = ref
    }

    number = parseInt(number)
    
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
                setRef={setBackRef}
                type="upper"
                number={number}
                size={size}
            />
            <FlipCard
                setRef={setFrontRef}
                type="lower"
                size={size}
            />
        </NumberCardContainer>
    )
}
