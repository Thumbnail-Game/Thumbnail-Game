import styled from 'styled-components'

interface AchievementImageProps {
  isCrownImage: boolean
}

export const AchievementImage = styled.img<AchievementImageProps>`
  position: relative;
  width: 47px;

  margin-top: ${(props) => (props.isCrownImage ? '-4px' : '')};
`

export const AchievementContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const AchievementPopupContainer = styled.div`
  display: none;
  position: absolute;
  width: 150px;
  height: 140px;
  margin-left: -50px;
  text-align: center;
  border-radius: 10px;
  opacity: 0.7;
  margin-top: 5px;
  background-color: ${(props) => props.theme.achievementPopupBackground};
`

export const ImageContainer = styled.div`
  &:hover ${AchievementPopupContainer} {
    display: block;
  }
`

export const Title = styled.div`
  margin-top: 20px;
  font-family: 'Gothic Bold';
  font-size: 20px;
`

export const PopupTitle = styled.div`
  padding: 10px;
  font-family: verdana;
  font-size: 18px;
  font-weight: 600;
`

export const PopupDescription = styled.div`
  padding: 5px;
  font-family: verdana;
`
