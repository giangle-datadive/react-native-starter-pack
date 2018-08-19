import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
`

const CustomImage = styled(Image)`
  height: 120px;
  width: 120px;
`

class Home extends React.PureComponent {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true,
  }

  static propTypes = {}

  render() {
    return (
      <Wrapper>
        <CustomImage
          resizeMode="contain"
          source={{
            uri: 'https://avatars0.githubusercontent.com/u/22128074',
          }}
        />
      </Wrapper>
    )
  }
}

export default Home