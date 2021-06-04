import { useState, useEffect } from 'react'
import { useSprings } from 'react-spring'
import * as Styled from './AnimatedViewText.styled'

interface AnimatedViewTextProps {
  animatedNum: number
}

export const AnimatedViewText: React.FC<AnimatedViewTextProps> = ({
  animatedNum,
}) => {
  const [items, setItems] = useState<any>([])

  useEffect(() => {
    console.log(animatedNum)

    //  animatedNum: 1000000 [1,000,000]
    //  82664 is incorrect with this code, turns to [826,64]
    //  542 => [5, 42]
    let stanley = animatedNum + ''
    const tempItems: any = []
    //3047051 => 3,47,51
    for (let i = 0; i < stanley.length; i++) {
      tempItems.push({ val: parseInt(stanley[i]) })
    }
    console.log(tempItems)
    setItems(tempItems)

    // if ((animatedNum + '').length > 0) {
    //   const tempItems: any = []
    //   let numString = animatedNum + ''

    //   while (numString.length > 3) {
    //     tempItems.push({
    //       val: parseInt(numString.substr(numString.length - 4)),
    //     })
    //     numString = numString.substr(0, numString.length - 4)
    //   }
    //   if (tempItems.length > 0) {
    //     tempItems.push({ val: parseInt(numString) })
    //   }

    //   console.log(tempItems)
    //   setItems(tempItems.reverse())
    // }
  }, [animatedNum])

  const springs = useSprings(
    items.length,
    items.map((item: any) => ({ from: { val: 0 }, to: { val: item.val } }))
  )

  return (
    <>
      <Styled.ViewCounterContainer>
        {springs.map((animation, i) => (
          <>
            <Styled.AnimatedDiv key={i}>
              {(animation as any).val.interpolate((val: number) =>
                Math.floor(val)
              )}
            </Styled.AnimatedDiv>
            <Styled.Span>,</Styled.Span>
          </>
        ))}
      </Styled.ViewCounterContainer>
    </>
  )
}
