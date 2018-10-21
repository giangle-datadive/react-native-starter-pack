import React, { PureComponent } from 'react'
import { DrawerActions } from 'react-navigation'
import {
  Header, Right, Button, Icon,
} from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'


const StyledContainer = styled.View`
  flex: 1;
`

const StyledHeader = styled(Header)`
  background-color: rgba(27, 49, 68, 0.1);
`

class AppContainer extends PureComponent {
  openMenu = () => {
    const { dispatch } = this.props
    dispatch(DrawerActions.openDrawer())
  }

  render() {
    const { children } = this.props
    return (
      <StyledContainer>
        <StyledHeader>
          <Right>
            <Button onPress={this.openMenu} transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </StyledHeader>
        {children}
      </StyledContainer>
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(AppContainer)
