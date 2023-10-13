import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "../../components/navbar/navbar"
import AboutPage from "../about/about"
import BlogPage from "../blog/blog"

const Main = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main