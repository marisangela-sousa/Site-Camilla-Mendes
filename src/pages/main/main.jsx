import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "../../components/navbar/navbar"
import AboutPage from "../about/about"
import BlogPage from "../blog/blog"
import ContactPage from "../contact/contact"

const Main = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main