import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.View`
  padding-top: 20px;
  flex: 1;
`

class Container extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <StyledContainer>
        {children}
      </StyledContainer>
    )
  }
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Container
