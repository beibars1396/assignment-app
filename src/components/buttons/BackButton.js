import React from 'react'
import styled from 'styled-components'

const Container = styled.TouchableOpacity`
    margin: 0;
    height: 50px;
    width: 130px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 15;
`

const Text = styled.Text`
    font-size: 24px;
    color: blue;
`

export default ({ onPress }) => {
    return (
        <Container onPress={onPress} activeOpacity={0.75} >
            <Text>назад</Text>
        </Container>
    )
}
