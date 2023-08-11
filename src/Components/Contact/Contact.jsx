import './Contact.css'


const Contact = () => {
  return (
    <div className="top_container">
        <div className="footer_middle">
        <img src="/images/licious-logo.svg" alt="" />
        <div className='line'></div>
        </div>
        <div className='line-bottom'>
            <div className='icons'>
                <p>EXPERIENCE LICIOUS APP ON MOBILE</p>
                <div className="btns">
                    <img src="public\images\footer\app-store.webp" alt="" />
                    <img src="public\images\footer\playstore-.webp" alt="" />
                </div>
                <p>KEEP IN TOUCH</p>
                <div className="btns">
                    <img src="public\images\footer\twittet.webp" alt="" />
                    <img src="public\images\footer\fb.webp" alt="" />
                    <img src="public\images\footer\insta.webp" alt="" />
                </div>
            </div>
            <div className='useful-links'>
            <p className='useful-heading'>USEFUL LINKS</p>
            <div className="useful-rest">
                <div className="links">
            <p>Why Licious?</p>
            <p>refer & Earn</p>
            <p>Licious Cash & Cash+</p>
            <p>Careers</p>
            <p>BLOG</p>
                </div>
            <div className="about-us">
                <p>About Us</p>
                <p>Bug Bounty Guidelines</p>
                <p>T&C</p>
                <p>FAQ</p>
                <p>Privacy Policy</p>
                <p>FSSC 22000 Certification</p>
                <p>SA8000 Certification</p>
                <p>Sitemap</p>
            </div>
            </div>
            </div>
            <div className="contact-us">
                <div className="contact-title">
                    CONTACT US
                </div>
                <div className="contact-details">
                    <p>
                        Call: 1800-4190-786 <br/>
                        talktous@licious.com
                    </p>
                <p className='address'>
                REGISTERED OFFICE ADDRESS:<br/>
                DELIGHTFUL GOURMET PVT LTD<br/>
                Maruthi Infotech Center 11/1,12/1 B wing 1stBangalore, Karnataka - 560071<br/>
                Floor Amarjyothi layout Intermediate ring<br/>
                road Domlur, B.B.M.P East, Karnataka-560071<br/>
                </p>
                <img src="public\images\footer\visa.webp" alt="" />
                <p className='security'>HAVE SECURITY CONCERN ?</p>
                <p>Mail us to:  security@licious.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact