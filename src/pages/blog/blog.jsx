import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import img1blogpage from "../../assets/img/img1blogpage.jpg"
import img2blogpage from "../../assets/img/img2blogpage.jpg"
import img3blogpage from "../../assets/img/img3blogpage.jpg"

import "../../assets/styles/styles.css"
import "./blog.css"

const BlogPage = () => {
    return (
        <div className="BlogPageContainer">
            <ArrowBackIosIcon sx={{ fontSize: "50px" }} />
            <div className="PagesSlider">
                <div className="ContentCover">
                    <img className="CoverImage" src={img1blogpage} alt="A chinese woman with a umbrella" />
                    <div className="TextInsideImage"> <p>JAPAO</p></div>
                </div>

                <div className="ContentCover">
                    <img className="CoverImage" src={img2blogpage} alt="" />
                    <div className="TextInsideImage"><p>PARIS</p></div>
                </div>

                <div className="ContentCover">
                    <img className="CoverImage" src={img3blogpage} alt="" />
                    <div className="TextInsideImage"><p>ORLANDO</p></div>
                </div>
            </div>
            <ArrowForwardIosIcon sx={{ fontSize: "50px" }} />
        </div>
    )
}

export default BlogPage