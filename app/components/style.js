import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    padding: 8px;
`

export const WhiteBackground = styled.div`
    background-color: #F8FBFC;
    height: calc(100vh - 40px);
    width: calc(100vw - 40px);
    border-radius: 4px;
`

export const Header1 = styled.h1`
    color: #7E69FA;
    margin: 0;
`

export const Header2 = styled.h2`
    color: #7E69FA;
    margin: 0;
`

export const ClassInfoWrapper = styled.div`
    padding: 8px;
`

export const Text = styled.p`
    font-size: ${props => props.size + 'px' };
    color: #7E69FA;
`

export const DateHolder = styled.div``

export const TextGroup = styled.div`
    display: flex;
    align-items: center;
`

export const InputWrapper = styled.div``
export const InvisibleInput = styled.input``