import * as Styled from './LoseWinAnimation.styled'

interface LoseWinAnimationProps {
  result: boolean
}

export const LoseWinAnimation: React.FC<LoseWinAnimationProps> = ({ result }) => {
  return (
    <>
      {result ? (
        <Styled.IconWrapper>
          <Styled.LoseIcon size={'100%'} />
        </Styled.IconWrapper>
      ) : (
        <Styled.IconWrapper>
          <Styled.WinIcon size={'100%'} />
        </Styled.IconWrapper>
      )
      }
    </>
  )
}
