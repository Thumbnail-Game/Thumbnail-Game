import { useState, useEffect, useContext } from 'react'
import { Button } from '@material-ui/core'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import { ThemeContext } from '../../../providers/AppProvider'
import { SeenVideos } from '../../modules/Thumbnail/Thumbnail'
import * as Styled from './GameSummary.styled'

interface GameSummaryProps {
  videos: any
  reset: () => void
}

//Views: {Intl.NumberFormat().format(Math.round(video.views))}

export const GameSummary: React.FC<GameSummaryProps> = ({ videos, reset }) => {
  const [indexArr, setIndexArr] = useState<any>([])

  const { toggleTheme, themeMode } = useContext(ThemeContext)

  useEffect(() => {
    const tempArr = []

    for (let i = 0; i < videos.length; i += 2) {
      tempArr.push({ video1: videos[i], video2: videos[i + 1] });
    }

    setIndexArr(tempArr)
    console.log(tempArr);
  }, [videos])

  return (
    <Styled.GameSummaryWrapper>
      <Styled.CarouselContainer>
        <Carousel
          showStatus={false}
          autoFocus={true}
          useKeyboardArrows={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                type="button"
                title={label}
                style={{
                  position: "absolute",
                  top: ".7em",
                  bottom: "auto",
                  padding: ".4em",
                  zIndex: 2,
                  left: "0px",
                  backgroundColor: "Transparent",
                  backgroundRepeat: "no-repeat",
                  border: "none",
                  cursor: "pointer",
                  overflow: "hidden",
                  outline: "none"
                }}
              >
                <FiChevronLeft
                  color={themeMode === 'light' ? 'white' : 'grey'}
                  style={{
                    height: '100%',
                    fontSize: 98,
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
                  top: '.7em',
                  bottom: 'auto',
                  padding: '.4em',
                  zIndex: 2,
                  right: '0px',
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
                    fontSize: 98
                  }}
                />
              </button>
            )
          }
        >
          {
            indexArr.map((videoObj: any, i: number): any => (
              <Styled.VideoContainer>
                <Styled.VideoThumbnail width={672}
                  height={378} src={videoObj?.video1?.thumbnail} />
                <p style={{ marginTop: "500px" }} className=".control-dots"></p>
                <Styled.VideoThumbnail width={672}
                  height={378} src={videoObj?.video2?.thumbnail} />
              </Styled.VideoContainer>
            ))
          }
        </Carousel >
      </Styled.CarouselContainer >
      <Button
        variant="contained"
        color="primary"
        style={{ zIndex: 4 }}
        onClick={() => {
          reset()
        }}
      >
        Play Again
      </Button>

    </Styled.GameSummaryWrapper >
  )
}
