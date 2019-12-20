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
    backgroundColor: #CCCCFF;
`

const Text = styled.Text`
    font-size: 24px;
`

export default ({ title, onPress }) => (
    <Container onPress={onPress} activeOpacity={0.75}>
        <Text>{title}</Text>
    </Container>
)
