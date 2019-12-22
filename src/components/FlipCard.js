import React from 'react';
import { Animated, View, Text } from 'react-native';

export default ({ type, size, number, setRef }) => {
  return (
    <Animated.View
        ref = { setRef }
        style = {[
            type === 'front'
            ? {
                top: 0,
                borderTopLeftRadius: size / 10,
                borderTopRightRadius: size / 10,
                borderBottomWidth: 0.5,
            }
            : {
                top: '50%',
                borderBottomLeftRadius: size / 10,
                borderBottomRightRadius: size / 10,
                borderTopWidth: 0.5,
            },

            {
                position: 'absolute',
                left: 0,
                height: '50%',
                width: '100%',
                backgroundColor: '#333333',
                borderColor: '#1f1f1f',
                backfaceVisibility: 'hidden',
                alignItems: 'center',
                justifyContent: 'center'
            }
        ]}
        >
        <View style={{
            overflow: 'hidden'
        }}>
            <Text style={{
                transform: [type === 'front' ? { translateY: size * 0.3 } : { translateY: -size * 0.3 }],
                fontSize: size / 1.5,
                lineHeight: size / 1.5,
                fontWeight: '700',
                color: '#cccccc'
            }}>
            {number}
            </Text>
        </View>
        </Animated.View>
  );
}
