import styled from 'styled-components/native'
import { SafeAreaView } from 'react-navigation'

export const Layout = styled(SafeAreaView).attrs(props => ({
    color: props.gray ? 'appBg' : 'white'
  }))`
    flex: 1;
    
`
// background-color: ${props => getColor(props.color)};
