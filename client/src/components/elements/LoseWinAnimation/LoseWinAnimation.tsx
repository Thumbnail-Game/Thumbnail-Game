import * as Styled from './LoseWinAnimation.styled'

interface LoseWinAnimationProps {
  loseType: string | undefined
}

export const LoseWinAnimation: React.FC<LoseWinAnimationProps> = ({
  loseType,
}) => {
  if (loseType === 'incorrect') {
    return (
      <Styled.IconWrapper>
        <Styled.LoseIcon size={'100%'} />
      </Styled.IconWrapper>
    )
  } else if (loseType === 'time') {
    return (
      <Styled.IconWrapper>
        <Styled.TimeIcon size={'100%'} />
      </Styled.IconWrapper>
    )
  } else {
    return (
      <Styled.IconWrapper>
        <Styled.WinIcon size={'100%'} />
      </Styled.IconWrapper>
    )
  }
}
