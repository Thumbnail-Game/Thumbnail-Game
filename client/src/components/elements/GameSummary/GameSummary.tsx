import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { ThemeContext } from '../../../providers/AppProvider'
import { AnimatedViewText } from '../index'
// import { SeenVideos } from '../../modules/Thumbnail/Thumbnail'
import { HeaderText } from '../../../styles/constantStyles'
import * as Styled from './GameSummary.styled'

interface GameSummaryProps {
  videos: any
  reset: () => void
}

//Views: {Intl.NumberFormat().format(Math.round(video.views))}

export const GameSummary: React.FC<GameSummaryProps> = ({ videos, reset }) => {
  const [indexArr, setIndexArr] = useState<any>([])

  const router = useRouter()

  const { themeMode } = useContext(ThemeContext)


  useEffect(() => {
    const tempArr = []

    for (let i = 0; i < videos.length; i += 2) {
      tempArr.push({ video1: videos[i], video2: videos[i + 1] })
    }

    setIndexArr(tempArr)
  }, [videos])

  return (
    <Styled.GameSummaryWrapper>
      <HeaderText>Game Summary</HeaderText>
      <Styled.CarouselContainer>
        <Carousel
          showStatus={false}
          autoFocus={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                type="button"
                title={label}
                style={{
                  position: 'absolute',
                  marginTop: "auto",
                  marginBottom: "auto",
                  top: '0px',
                  bottom: '180px',
                  zIndex: 2,
                  left: '70px',
                  backgroundColor: 'Transparent',
                  backgroundRepeat: 'no-repeat',
                  border: 'none',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  outline: 'none',
                }}
              >
                <FiChevronLeft
                  color={themeMode === 'light' ? 'white' : 'grey'}
                  style={{
                    height: '100%',
                    fontSize: 98,
                    color: '#B7B7B7'
                  }}
                />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: 'absolute',
                  marginTop: "auto",
                  marginBottom: "auto",
                  top: '0px',
                  bottom: '180px',
                  right: '70px',
                  zIndex: 2,
                  backgroundColor: 'Transparent',
                  backgroundRepeat: 'noRepeat',
                  border: 'none',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  outline: 'none',
                }}
              >
                <FiChevronRight
                  color={themeMode === 'light' ? 'white' : 'grey'}
                  style={{
                    height: '100%',
                    fontSize: 98,
                    color: '#B7B7B7'
                  }}
                />
              </button>
            )
          }
        >
          {indexArr.map((videoObj: any, i: number): any => (
            <Styled.VideoContainer key={i}>
              {videoObj?.video1.isLoss || videoObj?.video2.isLoss && (
                <>
                  <Styled.LoseIcon size={160}></Styled.LoseIcon>
                  <Styled.IconDiv></Styled.IconDiv>
                </>
              )}
              <Styled.VideoColumnContainer>
                <Styled.VideoThumbnail
                  width={604.8}
                  height={340.2}
                  src={videoObj?.video1?.thumbnail}
                />
                <Styled.VideoTitle>{videoObj?.video1?.title}</Styled.VideoTitle>
                <Styled.VideoViews>{videoObj?.video1?.views.toLocaleString()} <Styled.ViewSpan>views</Styled.ViewSpan></Styled.VideoViews>
              </Styled.VideoColumnContainer>
              <p style={{ marginTop: '500px' }} className=".control-dots"></p>
              <Styled.VideoColumnContainer>
                <Styled.VideoThumbnail
                  width={604.8}
                  height={340.2}
                  src={videoObj?.video2?.thumbnail}
                />
                <Styled.VideoTitle>{videoObj?.video2?.title}</Styled.VideoTitle>
                <Styled.VideoViews>{videoObj?.video2?.views.toLocaleString()} <Styled.ViewSpan>views</Styled.ViewSpan></Styled.VideoViews>
              </Styled.VideoColumnContainer>
            </Styled.VideoContainer>
          ))}
        </Carousel>
      </Styled.CarouselContainer >
      <Styled.ButtonContainer>
        <Styled.PlayAgainButton
          onClick={() => router.push('/')}
        >
          Back to menu
        </Styled.PlayAgainButton>
        <Styled.PlayAgainButton
          onClick={() => {
            reset()
          }}
        >
          Play again
      </Styled.PlayAgainButton>
      </Styled.ButtonContainer>
    </Styled.GameSummaryWrapper >
  )
}
