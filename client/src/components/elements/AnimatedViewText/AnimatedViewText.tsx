import { useState, useEffect } from 'react';
import { animated, useSprings, useSpring } from 'react-spring';
import * as Styled from './AnimatedViewText.styled'

interface AnimatedViewTextProps {
    animatedNum: number,
}

export const AnimatedViewText: React.FC<AnimatedViewTextProps> = ({ animatedNum }) => {
    const [nums, setNums] = useState<Number[]>([]);
    let values: any = [];
    useEffect(() => {
        console.log(animatedNum)
        if ((animatedNum + '').length > 0) {
            const tempNums: number[] = []
            let numString = animatedNum + '';

            while (numString.length > 3) {
                tempNums.push(parseInt(numString.substr(numString.length - 3)));
                numString = numString.substr(0, numString.length - 3);
            }
            if (tempNums.length > 0) {
                tempNums.push(parseInt(numString))
            }

            console.log(tempNums)
            setNums(tempNums)
        }
    }, [animatedNum])

    const items = [
        { val: 34214 },
        { val: 13424 },
    ]

    const springs = useSprings(
        items.length,
        // items.map(item => ({ val: item.val, from: { val: 0 } })
        items.map(item => ({ from: { val: 0 }, to: { val: item.val } })
        )
    )

    // const springs = useSprings(items.length, items.map(item => ({ val: item.val.interpolate }))
    // video.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return (
        <>
            {springs.map(animation => (
                <animated.div style={animation}>{animation.val.interpolate(val => Math.floor(val))}</animated.div>
            ))}
        </>
    );
};
