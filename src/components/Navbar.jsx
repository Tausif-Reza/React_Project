import React from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h2>
            <span>T</span>ausif
            <span> R</span>eza
          </h2>
        </div>

        {/* 2nd menu part */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/services">services</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569891%7Cb%7Csign%20in%20to%20facebook%7C&placement=&creative=589460569891&keyword=sign%20in%20to%20facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-11079269337%26loc_physical_ms%3D9061994%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAy9msBhD0ARIsANbk0A9hTSeYK52IFMtz1UhFY9Lej0HmXIEWiyxGrTDtaUlvX3pfi3re_UYaAsjFEALw_wcB"
                target="_technical"
              ><FaFacebookSquare className="facebook"/></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_technical"
              ><FaInstagramSquare className="instagram"/></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=gnkVSQJYHqg"
                target="_technical"
              ><FaYoutubeSquare className="youtube"/></a>
            </li>
          </ul>
        </div>
      </nav>
      {/* hero section */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>SDLC Training</h1>
      </section> */}
    </>
  );
};

export default Navbar;
