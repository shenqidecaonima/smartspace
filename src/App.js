import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className="backVideo">
          <video muted loop autoPlay role="presentation" width="100%" height="100%">
              <source src="/video/homePage1.mp4" type="video/mp4" />
          </video>
        </div>



        <div className="content">
          <div className="coverPage">

            <div className="topBar">
            <section  className="logo">
                <img src="logo1.png" alt="logo" width="266px" height="150px"/>
            </section>
            <section className="menu">
                <nav>
                  <ul className="navBar-ul">
                    <li className="navBar-li">
                      <a className="navBar-link" href="#service">Service</a>
                    </li>
                    <li className="navBar-li">
                      <a className="navBar-link" href="#">Team</a>
                    </li>
                    <li className="navBar-li">
                      <a className="navBar-link" href="#">Client</a>
                    </li>
                  </ul>
                </nav>
            </section>
            </div>

            <div className="thoseWords">
              <p className="slogan">Dedicated to your <br />5G Network Access</p>
            </div>


            <div className="mouse_scroll">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <div>
                <span className="m_scroll_arrows unu"></span>
                <span className="m_scroll_arrows doi"></span>
                <span className="m_scroll_arrows trei"></span>
              </div>
            </div>

          </div>

          <div className="info">
            <div className="interesting"></div>
            <a name="service"></a>
            <div className="service">
              <h4>The Future has Begun</h4>
              <h2>OUR SOLUTION SERVICES</h2>
              <div className="magic">
                <img src="./service.png" alt="service" className="magic-img"/>
                <div className="magic-menu1">
                  <ul className="magic-ul">
                    <li className="magic-title">SMART OFFICE</li>
                    <li className="magic-li">5G</li>
                    <li className="magic-li">Internet/Customization/Smart Office</li>
                    <li className="magic-li">Cloud Server/IDC/VPN</li>
                  </ul>
                </div>

                <div className="magic-menu2">
                  <ul className="magic-ul">
                    <li className="magic-title">Intelligent Building</li>
                    <li className="magic-li">5G/IOT/AI Customized Solution /Visualization Management Platform for Leasing/Property/IBMS system/Service Robot/Face recognition System for gateway/Camera</li>
                    <li className="magic-li">Building intelligence weak electricity</li>
                  </ul>
                </div>

                <div className="magic-menu3">
                  <ul className="magic-ul">
                    <li className="magic-title">Smart City</li>
                    <li className="magic-li">Internet/Customization/ Maintenance/Smart Office</li>
                    <li className="magic-li">Cloud Server/IDC/VPN</li>
                  </ul>
                </div>

{/*
                <svg className="svg_1">
                  <g class="layer">
                  <title>Layer 1</title>
                  <circle cx="100" cy="100" fill="#FFFFFF" r="11" stroke="#FFFFFF" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="4"/>
                  <circle cx="100" cy="100" fill="rgb(46,45,45)" r="10" stroke="#FFFFFF" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="4"/>
                  <polygon points="91 108.5,100 120,109 108.5" fill="#FFFFFF"  stroke="#FFFFFF" stroke-width="1" />
                  </g>
                </svg>
                <svg className="svg_2">
                  <g class="layer">
                  <title>Layer 1</title>
                  <circle cx="100" cy="100" fill="#FFFFFF" r="11" stroke="#FFFFFF" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="4"/>
                  <circle cx="100" cy="100" fill="rgb(46,45,45)" r="10" stroke="#FFFFFF" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="4"/>
                  <polygon points="91 108.5,100 120,109 108.5" fill="#FFFFFF"  stroke="#FFFFFF" stroke-width="1" />
                  </g>
                </svg>
                <svg className="svg_3">
                  <g class="layer">
                  <title>Layer 1</title>
                  <circle cx="100" cy="100" fill="#FFFFFF" r="11" stroke="#FFFFFF" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="4"/>
                  <circle cx="100" cy="100" fill="rgb(46,45,45)" r="10" stroke="#FFFFFF" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="4"/>
                  <polygon points="91 108.5,100 120,109 108.5" fill="#FFFFFF"  stroke="#FFFFFF" stroke-width="1" />
                  </g>
                </svg>
*/}

              </div>
            </div>


            <div className="teaminfo">
              <h2 id="teamTitle">TEAM</h2>
              <div className="teamwrapper">
                <div className="teamContent1">
                  <div className="nameCard">
                    <p className="teamName" id="pforTeam">Nicole Chen</p>
                    <p className="teamIntro" id="pforTeam">
                    She has worked for Cushman & Wakefield as well as the British Council.<br />
                    She is currently working in the field of Communication Technology, specializing in 5G network construction and intelligence building.<br />
                    She graduated from Raffles Institution Highschool in Singapore and received a Master's of Science Degree from University College London, The Bartlett school of Architecture.

                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="client">
              <div className="clientTitle">
                <h2>CLIENT</h2>
              </div>

              <table align="center">
                <tbody>
                <tr>
                  <th>
                    <img src="/cl/Picture1.png" width="100px" height="100px" alt="client"/>
                  </th>
                  <th>
                    <img src="/cl/Picture2.png" width="160px" height="100px" alt="client"/>
                  </th>
                  <th>
                    <img src="/cl/Picture3.png" width="100px" height="100px" alt="client"/>
                  </th>
                  <th>
                    <img src="/cl/Picture4.png" width="140px" height="100px" alt="client"/>
                  </th>
                  <th>
                    <img src="/cl/Picture5.png" width="100px" height="100px" alt="client"/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <img src="/cl/Picture7.png" width="100px" height="100px" alt="client"/>
                  </th>
                  <th>
                    <img src="/cl/Picture8.png" width="110px" height="100px" alt="client"/>
                  </th>
                  <th>
                    <img src="/cl/Picture9.png" width="130px" height="100px" alt="client"/>
                  </th>
                  <th>
                    <img src="/cl/Picture10.png" width="140px" height="60px" alt="client"/>
                  </th>
                  <th>
                    <img src="/cl/Picture6.png" width="100px" height="70px" alt="client"/>
                  </th>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="footer">
              <section id="footerSection">
                <img src="./logo3.png" alt="small logo here" width="266px" height="160px"/>
              </section>
              <section id="footerSection">
                <h5 className="footerTitle" id="footerStyle">ADDRESS</h5>
                <p className="footerinfo" id="footerStyle">
                  Room 811, No.1295 Lu jia bang Road<br />
                  Huang Pu District, Shanghai
                </p>
              </section>
              <section id="footerSection">
                <h5 className="footerTitle" id="footerStyle">CONTACTS</h5>
                <p className="footerinfo" id="footerStyle">
                  Twitter：smart space8<br />
                  微信公众号：讯楼科技smartspace
                </p>
              </section>
            </div>

          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
