import { Button, Text, Content, Accordion } from 'native-base'
import { Image, View } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import AppContainer from '../../components/Container'
import { color } from '../../config/styles'

const text = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

const dataArray = [
  { title: 'First Element', content: text },
  { title: 'Second Element', content: text },
  { title: 'Third Element', content: text },
  { title: 'Third Element', content: text },
  { title: 'Third Element', content: text },
  { title: 'Third Element', content: text },
  { title: 'Third Element', content: text },
  { title: 'Third Element', content: text },
]

const Wrapper = styled.View`
  flex: 1;
  padding: 10px 35px;
`

const HeaderImage = styled.Image`
  height: 250px;
  width: 100%;
`

const ReleaseYear = styled.Text`
  font-size: 14px;
  align-self: flex-start;
  color: ${color.grey};
  margin-top: 8px;
`

const ContentWrapper = styled.View`
  margin-top: 10px;
  flex: 1;
`

const NextSeasonBtn = styled(Button)`
  margin-top: 20px;
  
`

class Season extends React.PureComponent {
  static propTypes = {}

  render() {
    return (
      <AppContainer>
        <Wrapper>
          <HeaderImage
            source={{ uri: 'https://kenh14cdn.com/2016/1-1470249277486.jpg' }}
          />
          <ReleaseYear>Release year: 2016</ReleaseYear>

          <ContentWrapper style={{ width: '100%' }}>
            <Accordion dataArray={dataArray} />
          </ContentWrapper>
          <NextSeasonBtn warning bordered block>
            <Text>Go to Season 2</Text>
          </NextSeasonBtn>
        </Wrapper>
      </AppContainer>
    )
  }
}

export default Season
