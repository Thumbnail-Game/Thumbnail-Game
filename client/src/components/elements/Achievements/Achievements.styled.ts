import styled from 'styled-components'

interface AchievementImageProps {
  isCrownImage: boolean
}
export const AchievementImage = styled.img<AchievementImageProps>`
  position: relative;
  width: 47px;

  top: ${(props) => (props.isCrownImage ? '-4px' : '')};
`

export const AchievementContainer = styled.div`
  display: flex;
`

export const Title = styled.div`
  margin-top: 10px;
  font-family: 'Gothic Bold';
  font-size: 20px;
`
