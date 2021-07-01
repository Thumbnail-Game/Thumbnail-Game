import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { ThemeContext } from '../../../providers/AppProvider'
import { HeaderText } from '../../../styles/constantStyles'
import { PlayIcon } from '../PlayIcon/PlayIcon'
import { FeedbackFooter } from '../index'
import * as Styled from './GameSummary.styled'

interface GameSummaryProps {
  videos: any
  reset: (changeGamemode: boolean) => void
}

export const GameSummary: React.FC<GameSummaryProps> = ({ videos, reset }) => {
  const [indexArr, setIndexArr] = useState<any>([])

  const { themeMode } = useContext(ThemeContext)

  useEffect(() => {
    const tempArr = []

    for (let i = 0; i < videos.length; i += 2) {
      tempArr.push({ video1: videos[i], video2: videos[i + 1] })
    }

    setIndexArr(tempArr)
  }, [videos])

  const renderIcon = (videoObj: any, index: number) => {
    if (videoObj?.video1.isLoss || videoObj?.video2.isLoss) {
      return <Styled.LoseIcon size={160} />
      //  if they did not lose by incorrect choice, the last video
      //  has to be lost on time
    } else if (index === indexArr.length - 1) {
      return <Styled.TimeIcon size={132} />
    } else {
      return <Styled.WinIcon size={160} />
    }
  }

  let isMobile = useMediaQuery('max-width:760px')

  return (
    <>
    <Styled.GameSummaryWrapper>
      <HeaderText>Game Summary</HeaderText>
      <Styled.CarouselContainer>
        <Carousel
          showStatus={false}
          autoFocus={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={indexArr.length - 1}
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <div
              style={{
                backgroundColor: `${isSelected ? '#FF0000' : '#C4C4C4'}`,
                width: '12px',
                height: '12px',
                marginRight: '5px',
                marginLeft: '5px',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            ></div>
          )}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <Styled.LeftButton
                onClick={onClickHandler}
                type="button"
                title={label}
              >
                <Styled.IconHoverDiv>
                  <FiChevronLeft
                    color={themeMode === 'light' ? 'white' : 'grey'}
                    style={{
                      height: '100%',
                      fontSize: 70,
                      color: '#B7B7B7',
                      marginLeft: '-3px',
                    }}
                  />
                </Styled.IconHoverDiv>
              </Styled.LeftButton>
            )
          }
          renderArrowNext={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <Styled.RightButton
                type="button"
                onClick={onClickHandler}
                title={label}
              >
                <Styled.IconHoverDiv>
                  <FiChevronRight
                    color={themeMode === 'light' ? 'white' : 'grey'}
                    style={{
                      height: '100%',
                      fontSize: 70,
                      color: '#B7B7B7',
                      marginLeft: '6px',
                    }}
                  />
                </Styled.IconHoverDiv>
              </Styled.RightButton>
            )
          }
        >
          {indexArr &&
            indexArr.map((videoObj: any, i: number): any => (
              <Styled.VideoContainer key={i}>
                {renderIcon(videoObj, i)}
                <Styled.VideoColumnContainer>
                  <Styled.Videos>
                    <Link href={videoObj?.video1?.url}>
                      <>
                        <a href={videoObj?.video1?.url} target="_blank">
                          <Styled.VideoThumbnail
                            width={604.8}
                            height={340.2}
                            src={videoObj?.video1?.thumbnail}
                          />
                        </a>
                        <a target="_blank" href={videoObj?.video1?.url}>
                          <PlayIcon />
                        </a>
                      </>
                    </Link>
                  </Styled.Videos>
                  <Styled.VideoTitle>
                    {videoObj?.video1?.title}
                  </Styled.VideoTitle>
                  <Styled.VideoViews>
                    {videoObj?.video1?.views.toLocaleString()}{' '}
                    <Styled.ViewSpan>views</Styled.ViewSpan>
                  </Styled.VideoViews>
                </Styled.VideoColumnContainer>
                {!isMobile && <Styled.Dots className=".control-dots" />}
                <Styled.VideoColumnContainer>
                  <Styled.Videos>
                    <Link href={videoObj?.video2?.url}>
                      <>
                        <a href={videoObj?.video2?.url} target="_blank">
                          <Styled.VideoThumbnail
                            width={604.8}
                            height={340.2}
                            src={videoObj?.video2?.thumbnail}
                          />
                        </a>
                        <a target="_blank" href={videoObj?.video2?.url}>
                          <PlayIcon />
                        </a>
                      </>
                    </Link>
                  </Styled.Videos>
                  <Styled.VideoTitle>
                    {videoObj?.video2?.title}
                  </Styled.VideoTitle>
                  <Styled.VideoViews>
                    {videoObj?.video2?.views.toLocaleString()}{' '}
                    <Styled.ViewSpan>views</Styled.ViewSpan>
                  </Styled.VideoViews>
                </Styled.VideoColumnContainer>
                {/* {isMobile && (
                  <Styled.Dots className=".control-dots"></Styled.Dots>
                )} */}

                <Styled.Dots className=".control-dots"></Styled.Dots>
              </Styled.VideoContainer>
            ))}
        </Carousel>
      </Styled.CarouselContainer>
      <Styled.ButtonContainer>
        <Styled.PlayAgainButton onClick={() => reset(true)}>
          Back to menu
        </Styled.PlayAgainButton>
        <Styled.PlayAgainButton
          onClick={() => {
            reset(false)
          }}
        >
          Play again
        </Styled.PlayAgainButton>
      </Styled.ButtonContainer>
    </Styled.GameSummaryWrapper>
    <FeedbackFooter/>
    </>
  )
}
