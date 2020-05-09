import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const data = ['https://images.pexels.com/photos/159621/open-book-library-education-read-159621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', "https://images.pexels.com/photos/239548/pexels-photo-239548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"];

const useStyles = makeStyles(theme => ({

  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 500,
    maxWidth: 800,
    overflow: "hidden",
    display: "block",
    width: "100%",
    margin: "auto"
  }
}));


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowBackIos style={{ fontSize: 40, color: "#34495e", paddinRight: '50%' }} />
    </div>

  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowForwardIos style={{ fontSize: 40, color: "#34495e" }} />
    </div>
  );
}

/*customPaging: function (i) {
  return (
    <a style={{}}>
      <img style={{ height: '20px', width: "25px" }} src={data[i]} />
    </a>
  );
},*/

function MySlider(props) {
  const classes = useStyles();
  const settings = {

    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let displayImages = data.map((val) => {
    return (
      <div>
        <img style={{ width: '100%', height: '500px' }} src={val} />
      </div>
    );
  });

  return (
    <div style={{ padding: '40px', paddingTop: 0 }}>
      <Slider {...settings} style={{ paddingLeft: '1%', height: '50%' }}>
        {displayImages}
      </Slider>
    </div>
  );
}

export default MySlider;
