/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState, useRef, useCallback } from "react";
import bannerImg1 from "./img/배너1.svg";
import bannerImg2 from "./img/배너2.svg";
import bannerImg3 from "./img/배너3.svg";

const SliderArea = styled.div`
  height: 770px;
  overflow: hidden;
  width: 100%;
  background-color: blue;
  // border: 1px solid black;
  position: relative;
  display: flex;
  // overflow: hidden;
  box-sizing: border-box;
`;

const SliderButton = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  background-color: black;
  left: 100%;
  top: 50%;
  transform: translate(-100%, -50%);
  box-sizing: border-box;
  transition: all ease 2s 0s;
`;
const SliderContents = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: white;
  left: ${(props) => -props.sliderNum * 100 + props.index * 100}%;
  top: 50%;
  transform: translate(0, -50%);
  box-sizing: border-box;
  transition: all ease 1s 0s;
`;

const SliderMoveBoxWrap = styled.div`
  // height: 100px;
  // width: 100px;
  position: absolute;
  // background-color: white;
  // left: ${(props) => props.sliderNum * 100}%;
  right: 102px;
  bottom: 45px;
  border: 0px;
  display: flex;
  box-sizing: border-box;
  transition: all ease 0.25s 0s;
`;
const SliderMoveBox1 = styled.div`
  height: 24px;
  width: ${(props) => {
    // console.log(props);
    if (props.sliderNum === props.index) {
      return "40px";
    } else {
      return "40px";
    }
  }};
  // margin-right: 4px;
  // border-radius: 12px;
  border: 0px;
  background-color: ${(props) => {
    // console.log(props);
    if (props.sliderNum === props.index) {
      return "#cccccc";
    } else {
      return "#ffffff";
    }
  }};
  box-sizing: border-box;
  transition: all ease 0.25s 0s;
`;

const BannerImgWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const BannerImg = styled.img`
  // width: 100%;
  // height: 100%;
`;

const Banner1Button = styled.div`
  position: absolute;
  width: 434px;
  height: 82px;
  left: 57%;
  top: 57%;

  background: #ff6a00;
  border-radius: 41px;

  font-family: "Peace Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner2Button = styled.div`
  position: absolute;
  width: 429px;
  height: 82px;
  left: 57%;
  top: 57%;

  background: #222222;
  border-radius: 41px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  letter-spacing: -0.03em;
  text-transform: uppercase;

  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BannerSlider = () => {
  const [sliderNum, setSliderNum] = useState(0);
  const [flag, setFlag] = useState(0);
  const [contents, setContents] = useState([
    <BannerImgWrap>
      <BannerImg src={bannerImg1}></BannerImg>
    </BannerImgWrap>,
    <BannerImgWrap>
      <BannerImg src={bannerImg2}></BannerImg>
    </BannerImgWrap>,

    <BannerImgWrap>
      <BannerImg src={bannerImg3}></BannerImg>
    </BannerImgWrap>,
  ]);

  const [toggle, running] = useInterval(() => {
    // Your custom logic here
    setSliderNum((num) => {
      if (num === 2) {
        return 0;
      } else {
        return num + 1;
      }
    });
  }, 5000);

  // const stop = () => {
  //   clearInterval(start);
  // };
  // useEffect(() => {
  //   const interval = setInterval(() => {}, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <SliderArea className="slider-area">
      {/* <BannerImg src={bannerImg1}></BannerImg> */}
      {contents.map((item, index) => {
        return (
          <SliderContents
            onClick={() => {
              // stop();
            }}
            key={index + "a"}
            index={index}
            sliderNum={sliderNum}
          >
            {item}
          </SliderContents>
        );
      })}

      <SliderMoveBoxWrap>
        {contents.map((item, index) => {
          return (
            <SliderMoveBox1
              key={index + "b"}
              onClick={() => {
                setFlag(1);
                setSliderNum(index);
              }}
              sliderNum={sliderNum}
              index={index}
            ></SliderMoveBox1>
          );
        })}
      </SliderMoveBoxWrap>
    </SliderArea>
  );
};

function useInterval(callback, delay) {
  const savedCallback = useRef();
  const intervalId = useRef(null);
  const [currentDelay, setDelay] = useState(delay);

  const toggleRunning = useCallback(
    () => setDelay((currentDelay) => (currentDelay === null ? delay : null)),
    [delay]
  );

  const clear = useCallback(() => clearInterval(intervalId.current), []);

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (intervalId.current) clear();

    if (currentDelay !== null) {
      intervalId.current = setInterval(tick, currentDelay);
    }

    return clear;
  }, [currentDelay, clear]);

  return [toggleRunning, !!currentDelay];
}
