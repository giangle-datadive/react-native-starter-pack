import React from 'react'
import {
  Content, ListItem, Separator, Text,
} from 'native-base'
import Container from './Container'

class SideMenu extends React.PureComponent {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Container>
        <Content>
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
        </Content>
      </Container>
    )
  }
}

export default SideMenu
