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
                    <li>
                      <a className="navBar-link" href="#service">Service</a>
                    </li>
                    <li>
                      <a className="navBar-link" href="#">Team</a>
                    </li>
                    <li>
                      <a className="navBar-link" href="#">Client</a>
                    </li>
                  </ul>
                </nav>
            </section>
            </div>

            <div className="thoseWords">
              <p className="slogan">Dedicated to your <br />Internet Access</p>
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

              <div className="serviceContent">
                <section className="service_info">
                  <h3>Smart Office</h3>
                  <p>5G/Internet/Customization/ Maintenance/Smart Office/ Cloud Server/IDC/VPN</p>
                </section>
                <section className="service_info">
                  <h3>Intelligent Building</h3>
                  <p>5G/IOT/AI Customized Solution /Visualization Management Platform for Leasing/Property/5G/Internet/IBMS system/Service Robot/Face recognition System for gateway/Camera/Building intelligence weak electricity</p>
                </section>
                <section className="service_info">
                  <h3>Smart City</h3>
                  <p>Smart Street Lights/IOT/Intelligent Parking/Ware house/Transportation/Environmental protection</p>
                </section>
              </div>
            </div>


            <div className="teaminfo">
              <h2 id="teamTitle">TEAM</h2>
              <div className="teamwrapper">
                <div className="teamContent1">
                  <div className="nameCard">
                    <p className="teamName">Nicole Chen</p>
                    <p className="teamIntro">
                      创始人曾就职于戴德梁行，现致力于网络及5G应用物联网方案解决。
                      毕业于英国伦敦大学建筑系规划开发硕士
                      创始人曾就职于戴德梁行，现致力于网络及5G应用物联网方案解决。
                      毕业于英国伦敦大学建筑系规划开发硕士
                      创始人曾就职于戴德梁行，现致力于网络及5G应用物联网方案解决。
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
                <h5 className="footerTitle" id="footerStyle">ADRESSS</h5>
                <p className="footerinfo" id="footerStyle">
                  Room 811, No.1295 Lu jia bang Road<br />
                  Huang Pu District, Shanghai
                </p>
              </section>
              <section id="footerSection">
                <h5 className="footerTitle" id="footerStyle">CONTACTS</h5>
                <p className="classinfo" id="footerStyle">
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
