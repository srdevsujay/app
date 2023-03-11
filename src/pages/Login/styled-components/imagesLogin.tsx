import styled from "styled-components";
import { SpanImage } from "./types";

export const ImageMarni = styled.img`
  position: absolute;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  bottom: 0;
  z-index: 99;
`;

export const Image = styled.img<SpanImage>(
  ({ width, left, height, filter, background, bottom, right, top }) => ({
    position: "absolute",
    width: width,
    height: height,
    bottom: bottom,
    background: background,
    filter: filter,
    left: left,
    right: right,
    top: top,
  })
);

export const SpanColor = styled.span<SpanImage>(
  ({ width, left, height, filter, background, bottom }) => ({
    position: "absolute",
    width: width,
    height: height,
    background: background,
    opacity: "0.4",
    filter: filter,
    left: left,
    bottom: bottom,
    zIndex: "999",
  })
);

/* 
.filterBlue {
  position: absolute;
  width: 323px;
  height: 124px;
  background: #3997FF;
  opacity: 0.4;
  filter: blur(44px);
  bottom: 0;
  left: 17.2%;
}

.filterBlueCircle {
  position: absolute;
  width: 62px;
  height: 31px;
  background: #3997FF;
  opacity: 0.5;
  filter: blur(35px);
  bottom: 24.5%;
  left: 5%;
}

.filterRed {
  position: absolute;
  width: 69px;
  height: 69px;
  background: #D64682;
  opacity: 0.6;
  filter: blur(44px);
  bottom: 37.4%;
  left: 33.5%;
}

.marni {
  position: fixed;
  height: 470px;
  left: 45.3%;
  bottom: 0px;
  z-index: 99;
}
  
.portatil {
  height: 190px;
  position: fixed;
  top: 150px;
  right: 7.8%;
}

.barrasLogin {
  position: fixed;
  height: 301px;
  left: 44.4%;
  bottom: 70px;
} 

.dona {
  width: 85px;
  height: 84px;
  position: fixed;
  top: 33%;
  left: 55.5% !important;
}

.punto {
  position: absolute;
  width: 38px;
  height: 38px;
  top: 150px;
  right: 300px;
}

.cubo {
  width: 86px;
  height: 85px;
  position: fixed;
  bottom: 150px;
  right: 7.8%;
}
*/
