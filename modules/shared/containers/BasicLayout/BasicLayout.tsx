import styled from 'styled-components'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const BasicLayout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}

export default BasicLayout