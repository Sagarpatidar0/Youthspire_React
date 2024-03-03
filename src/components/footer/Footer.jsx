import "./Footer.css";
function Footer() {
  return (
    <>
        <div className="container">
          <div className="footer-mat">
            <h2>YOUTSPHIRE</h2>
            <h3>PARTNERS</h3>
            <h3>BREAKMART</h3>
          </div>
          <div className="row">
            <div className="legal-stuff">
              <div className="menu">
                <h2>LEGAL STUFF</h2>
                <ul>
                  <li>
                    <a href="#"> FAQ & SUPPORT</a>
                  </li>
                  <li>
                    <a href="#">PRIVACY POLICY</a>
                  </li>
                  <li>
                    <a href="#">TERMS & CONDITIONS</a>
                  </li>
                  <li>
                    <a href="#">AUCTION TERMS</a>
                  </li>
                </ul>
              </div>

              <div className="menu">
                <h2 id="more-stuff">MORE STUFF</h2>
                <ul>
                  <li>MINT DETAILS</li>
                  <li>OUR TEAM</li>
                  <li>CAREERS</li>
                  <li>YOUTH PROGRAM</li>
                </ul>
              </div>
            </div>
            <div className="footer_icon-button">
              <div className="footer-button">
                <button className="tt rever">CONTACT US</button>
              </div>
              <div className="footer-icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src="./Images/22.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./Images/23.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./Images/25.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./Images/24.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Footer;
