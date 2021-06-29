import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { ThemeContext } from '../../../providers/AppProvider'

import * as Styled from './Drawer.styled'

export const Drawer: React.FC = () => {

    return (
        <Styled.Wrapper>
            <div>Hello</div>
        </Styled.Wrapper>
    )
}
