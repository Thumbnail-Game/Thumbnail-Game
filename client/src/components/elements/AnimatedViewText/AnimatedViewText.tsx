import { useState, useEffect } from 'react'
import { useSpring, useSprings } from 'react-spring'
import * as Styled from './AnimatedViewText.styled'

interface AnimatedViewTextProps {
  animatedNum: number
}

export const AnimatedViewText: React.FC<AnimatedViewTextProps> = ({
  animatedNum,
}) => {
  const props = useSpring({ val: animatedNum, from: { val: 0 } })

  return (
    <>
      <Styled.ViewCounterContainer>
        <>
          <Styled.AnimatedDiv>
            {props.val.interpolate((val: number) => {
              return Intl.NumberFormat().format(Math.round(val))
            })}
          </Styled.AnimatedDiv>
        </>
      </Styled.ViewCounterContainer>
    </>
  )
}
