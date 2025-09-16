function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:justify-between">
            <div>
                <h1 className="text-3xl font-bold">Sandesh Tamang</h1>
                <p className="text-sm">Faculty Lecturer | Data Analyst | Software Developer</p>
                <p className="text-sm">Email: <a href="mailto:c4crypt@gmail.com" className="underline">c4crypt@gmail.com</a></p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0 text-2xl">
                <a href="https://github.com/sixdgt" className="hover:text-gray-300"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/codesandesh/" className="hover:text-gray-300"><FaLinkedin/></a>
                <a href="https://www.facebook.com/codesandes" className="hover:text-gray-300"><FaFacebook/></a>
                <a href="https://www.youtube.com/@codesandesh" className="hover:text-gray-300"><FaYoutube/></a>
                <a href="https://www.instagram.com/codesandes/" className="hover:text-gray-300"><FaInstagram/></a>
                <a href="https://www.tiktok.com/@codesandesh" className="hover:text-gray-300"><FaTiktok/></a>
            </div>
            </div>
        </header>
    );
}

export default Header;