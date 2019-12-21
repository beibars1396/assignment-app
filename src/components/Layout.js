import styled from 'styled-components/native'
import { SafeAreaView } from 'react-navigation'

export const Layout = styled(SafeAreaView).attrs(props => ({

}))`
    flex: 1;
    
`
// background-color: ${props => getColor(props.color)};

export const Block = styled.View.attrs(props => ({
  topPadding: props.topPadding || 0,
  bottomPadding: props.bottomPadding || 0
}))`
  height: 50px;

`
