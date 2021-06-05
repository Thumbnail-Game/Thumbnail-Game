import * as Styled from './LoseWinAnimation.styled'

interface LoseWinAnimationProps {}

export const LoseWinAnimation: React.FC<LoseWinAnimationProps> = ({}) => {
  return (
    <Styled.IconWrapper>
      <Styled.LoseIcon size={'100%'} />
    </Styled.IconWrapper>
  )
}
