import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.light_blue};
  padding-top: 100px;
`

export const WrapperAuth = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
`

export const Title = styled.p`
  font-family: ${({ theme }) => theme.roboto500};
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`

export const RegisterText = styled.div`
  font-family: ${({ theme }) => theme.roboto400};
`

export const WrapToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  margin-top: 20px;
`

export const TogglePage = styled.p`
  color: ${({ theme }) => theme.blue[0]};
  cursor: pointer;
`

export const WrapperLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: ${({ theme }) => theme.light_blue};
`

export const WrapGoHome = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`
