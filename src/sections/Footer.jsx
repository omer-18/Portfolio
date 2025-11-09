import { socialImgs } from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    {/*add a blog here maybe?*/}
                    <p>Omer Sajid :)</p>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            <a className= "icon" href = {socialImg.url} target="_blank" rel="noopener noreferrer" key = {socialImg.url}>
                            <img src={socialImg.imgPath} alt="social icon" />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;