import React from 'react'
import styled from 'styled-components'

const Container = styled.TouchableOpacity`
    
`

const Text = styled.Text`
`

export default ({ title, onPress }) => (
    <Container onPress={onPress} activeOpacity={0.75}>
        <Text>{title}</Text>
    </Container>
)
