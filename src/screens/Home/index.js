import { Button, Icon, Right, Text } from 'native-base'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import AppContainer from '../../components/Container'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
`

const LogoText = styled.Text`
  font-family: "Benguiat";
  font-size: 24px;
  text-transform: uppercase;
  color: rgb(123, 23, 15);
  margin-top: -150px;
`

const WrapSeason = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 14px;
  align-self: stretch;
`

const SoundQuoteButton = styled(Button)`
  margin-top: 14px;
`

class Home extends React.PureComponent {
  static propTypes = {
  }

  openDrawer = () => {
    const { navigation } = this.props
    navigation.openDrawer()
  }

  render() {
    return (
      <AppContainer>
        <Wrapper>
          <LogoText>Stranger things</LogoText>
          <WrapSeason>
            <Button warning bordered>
              <Text>Season 1</Text>
            </Button>
            <Button onPress={this.openDrawer} warning bordered>
              <Text>Season 2</Text>
            </Button>
          </WrapSeason>
          <SoundQuoteButton block boder danger>
            <Text>Sound Quotes</Text>
          </SoundQuoteButton>
        </Wrapper>
      </AppContainer>
    )
  }
}

export default Home
