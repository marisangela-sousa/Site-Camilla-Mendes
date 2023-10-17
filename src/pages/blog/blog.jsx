import { useRef, useState } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import img1blogpage from "../../assets/img/img1blogpage.jpg"
import img2blogpage from "../../assets/img/img2blogpage.jpg"
import img3blogpage from "../../assets/img/img3blogpage.jpg"

import ContentPage from './content/content';

import "../../assets/styles/styles.css"
import "./blog.css"

const BlogPage = () => {
    const [isContentOpen, setIsContentOpen] = useState(false)

    const carousel = useRef(null)

    const HandleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const HandleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <div className="BlogPageContainer">
            <button className="Button" onClick={HandleLeftClick}><ArrowBackIosIcon sx={{ fontSize: "50px" }} /></button>
            <div className="PagesSlider" ref={carousel}>
                <div className="ContentCover" onClick={()=>setIsContentOpen(!isContentOpen)} >
                    <img className="CoverImage" src={img1blogpage} alt="A chinese woman with a umbrella" />
                    <div className="TextInsideImage"> <p>JAPAO</p></div>
                </div>

                <div className="ContentCover" >
                    <img className="CoverImage" src={img2blogpage} alt="" />
                    <div className="TextInsideImage"><p>PARIS</p></div>
                </div>

                <div className="ContentCover">
                    <img className="CoverImage" src={img3blogpage} alt="" />
                    <div className="TextInsideImage"><p>ORLANDO</p></div>
                </div>

                <div className="ContentCover">
                    <img className="CoverImage" src={img3blogpage} alt="" />
                    <div className="TextInsideImage"><p>ORLANDO</p></div>
                </div>

                <div className="ContentCover">
                    <img className="CoverImage" src={img3blogpage} alt="" />
                    <div className="TextInsideImage"><p>ORLANDO</p></div>
                </div>
            </div>
            <button className="Button" onClick={HandleRightClick}><ArrowForwardIosIcon sx={{ fontSize: "50px" }} /></button>
            <ContentPage isOpen={isContentOpen} onClose={()=>setIsContentOpen(!isContentOpen)}/>
        </div>
    )
}

export default BlogPage