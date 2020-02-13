import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className="backVideo">
          <video muted loop autoPlay role="presentation" width="100%" height="100%">
              <source src="/video/homePage.mp4" type="video/mp4" />
          </video>
        </div>



        <div className="content">
          <div className="coverPage">

            <section  className="logo">
                <img src="logo.png" alt="logo" width="150px" height="160px"/>
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

            <div class="mouse_scroll">
              <div class="mouse">
                <div class="wheel"></div>
              </div>
              <div>
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
              </div>
            </div>

          </div>

          <div className="info">
            <a name="service"></a>
            <div className="service">
              <h2>Our Solution Services </h2>
              <h4>The Future has Begun</h4>
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
              <h2>Team</h2>
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
              <h2>Client</h2>
              <table align="center">
                <tr>
                  <th>
                    <img src="/cl/Picture1.png" width="100px" height="100px"/>
                  </th>
                  <th>
                    <img src="/cl/Picture2.png" width="140px" height="100px"/>
                  </th>
                  <th>
                    <img src="/cl/Picture3.png" width="100px" height="100px"/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <img src="/cl/Picture4.png" width="140px" height="100px"/>
                  </th>
                  <th>
                    <img src="/cl/Picture5.png" width="100px" height="100px"/>
                  </th>
                  <th>
                    <img src="/cl/Picture6.png" width="100px" height="100px"/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <img src="/cl/Picture7.png" width="100px" height="100px"/>
                  </th>
                  <th>
                    <img src="/cl/Picture8.png" width="100px" height="100px"/>
                  </th>
                  <th>
                    <img src="/cl/Picture9.png" width="100px" height="100px"/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <img src="/cl/Picture10.png" width="100px" height="60px"/>
                  </th>
                  <th>
                    <img src="/cl/Picture11.png" width="300px" height="50px"/>
                  </th>
                </tr>
              </table>
            </div>

            <div className="footer">
              <section id="footerSection">
                <img src="#" alt="small logo here"/>
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
