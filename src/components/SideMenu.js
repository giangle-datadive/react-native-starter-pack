import React from 'react'
import {
  Content, ListItem, Separator, Text,
} from 'native-base'
import styled from 'styled-components'

const ContentWrapper = styled(Content)`
  margin-top: 20px;
`

class SideMenu extends React.PureComponent {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <ContentWrapper>
        <Separator bordered>
          <Text>MIDFIELD</Text>
        </Separator>
        <ListItem>
          <Text>Caroline Aaron</Text>
        </ListItem>
        <ListItem last>
          <Text>Lee Allen</Text>
        </ListItem>
        <Separator bordered>
          <Text>MIDFIELD</Text>
        </Separator>
        <ListItem>
          <Text>Caroline Aaron</Text>
        </ListItem>
        <ListItem last>
          <Text>Lee Allen</Text>
        </ListItem>
      </ContentWrapper>
    )
  }
}

export default SideMenu
