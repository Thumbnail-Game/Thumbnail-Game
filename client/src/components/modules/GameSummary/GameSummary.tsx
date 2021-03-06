import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { ThemeContext } from '../../../providers/AppProvider'
import { HeaderText } from '../../../styles/constantStyles'
import { PlayIcon } from '../../elements/index'
import { Footer } from '../index'
import * as Styled from './GameSummary.styled'
import {
  useCreateImpressionMutation,
  useGetUserQuery,
} from '../../../generated/graphql'
import { auth } from '../../../config/firebaseConfig'

interface GameSummaryProps {
  videos: any
  reset: (changeGamemode: boolean) => void
  gamemode: string
}

export const GameSummary: React.FC<GameSummaryProps> = ({
  videos,
  reset,
  gamemode,
}) => {
  const [indexArr, setIndexArr] = useState<any>([])

  const { themeMode } = useContext(ThemeContext)

  const [, createImpression] = useCreateImpressionMutation()

  const uid = auth?.currentUser?.uid
  const [user] = useGetUserQuery({ variables: { uid: uid ? uid : '' } })
  const userData = user && user.data

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
    } else if (index === indexArr.length - 1 && gamemode === 'timed') {
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
            renderIndicator={(_, isSelected) => (
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
              />
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
                    <a
                      target="_blank"
                      href={videoObj?.video1?.url}
                      onClick={() => {
                        if (!videoObj.video1) return
                        const user_id = userData?.user?.id
                        createImpression({
                          user_id: user_id ? user_id : null,
                          video_id: videoObj.video1.id,
                        })
                      }}
                    >
                      <Styled.Videos>
                        <Styled.VideoThumbnail
                          width={604.8}
                          height={340.2}
                          src={videoObj?.video1?.thumbnail}
                        />
                        <PlayIcon />
                      </Styled.Videos>
                    </a>
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
                    <a
                      target="_blank"
                      href={videoObj?.video2?.url}
                      onClick={() => {
                        if (!videoObj.video2) return
                        const user_id = userData?.user?.id
                        createImpression({
                          user_id: user_id ? user_id : null,
                          video_id: videoObj.video2.id,
                        })
                      }}
                    >
                      <Styled.Videos>
                        <Styled.VideoThumbnail
                          width={604.8}
                          height={340.2}
                          src={videoObj?.video2?.thumbnail}
                        />
                        <PlayIcon />
                      </Styled.Videos>
                    </a>
                    <Styled.VideoTitle>
                      {videoObj?.video2?.title}
                    </Styled.VideoTitle>
                    <Styled.VideoViews>
                      {videoObj?.video2?.views.toLocaleString()}{' '}
                      <Styled.ViewSpan>views</Styled.ViewSpan>
                    </Styled.VideoViews>
                  </Styled.VideoColumnContainer>
                  <Styled.Dots className=".control-dots" />
                </Styled.VideoContainer>
              ))}
          </Carousel>
        </Styled.CarouselContainer>
        <Styled.ButtonContainer>
          <Styled.BackToMenuButton onClick={() => reset(true)}>
            Back to menu
          </Styled.BackToMenuButton>
          <Styled.PlayAgainButton
            onClick={() => {
              reset(false)
            }}
          >
            Play again
          </Styled.PlayAgainButton>
        </Styled.ButtonContainer>
      </Styled.GameSummaryWrapper>
      <Footer />
    </>
  )
}
