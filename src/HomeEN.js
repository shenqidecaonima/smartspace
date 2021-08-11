import React, {Component} from 'react';
import BestMenu from "./BestMenu";
import { SMTPClient, Message } from 'emailjs';

  function Email(params) {
    const client = new SMTPClient({
      user: '876138716@qq.com',
      password: 'passwordylnqclxuqdtybcda',
      host: 'smtp-qq.com',
      ssl: true
    });
    
    const message = new Message({
      text: 'i hope this works',
      from: 'you <876138716@qq.com>',
      to: 'you <876138716@qq.com>',
      subject: 'testing emailjs',
    });
    
    // send the message and get a callback with an error or details of the message that was sent
    client.send(message, (err, message) => {
      console.log(err || message);
    });
  }



export default class Home extends Component{
  render(){
    return(
      <div>
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
                        <a className="navBar-link" href="#team">Team</a>
                      </li>
                      <li className="navBar-li">
                        <a className="navBar-link" href="#client">Client</a>
                      </li>
                    </ul>
                  </nav>
              </section>
              <li className="Lang" >
              <img src="/Lang.png" width="20px" height="20px" alt="client"/>
              <ul className="LangCard">
                <a href="./en"><p>English</p></a>
                <a href="./"><p>中文</p></a>
              </ul>
              </li>
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

            <a name="service"></a>
            <div className="info">
              <div className="interesting"></div>
              <div className="service">
                <h4>The Future has Begun</h4>
                <h2 id="title1">OUR SOLUTION SERVICES</h2>
                <div className="magic">
                <div className="magic-menu1">
                    <ul className="magic-ul">
                      <li className="magic-title">Smart Office</li>
                      <li id="g5" className="magic-li">4G/5G Broadband/</li>
                      <li className="magic-li">Cloud server/Vpn/</li>
                      <li className="magic-li">Customization</li>
                    </ul>
                    <div className="smartoffice">
                       <svg t="1594833843470" class="icon" viewBox="0 0 1024 1024" p-id="5599" width="40" height="40"><path d="M385.98 71c11.27-1.63 22.69-1.2 34.04-1.25h184.04c13.33 0.18 26.71-0.54 40 0.85 31.12 3.42 60.48 19.86 79.74 44.52 13.98 17.65 22.73 39.35 24.89 61.76 0.9 8.35 0.46 16.74 0.56 25.12 27.24 0.01 54.48-0.01 81.72 0 34.63 0.62 67.86 21.37 83.82 52.07 7.39 13.76 11.28 29.35 11.47 44.96-0.01 202.81-0.01 405.62 0 608.43 5.65-0.24 11.5 0.95 16.14 4.34 7.3 5.07 11.14 14.61 9.36 23.33-1.69 10.33-11.26 18.68-21.74 18.85-280.03 0.04-560.06 0.02-840.08 0.01-9.42-0.22-18.18-6.94-20.97-15.91-2.41-7.21-0.97-15.5 3.68-21.51 4.26-5.68 11.3-9.05 18.38-9.07 5.49-0.04 10.98 0.02 16.47-0.01V310.06c0.05-6.37-0.28-12.77 0.6-19.1 2.57-23.35 14.05-45.57 31.57-61.2 16.66-15.18 38.78-24.22 61.3-25.01 27.59-0.01 55.18 0.01 82.78-0.01-0.08-14.34-0.3-28.87 3.12-42.91 6.26-27.56 22.87-52.5 45.69-69.14C348.21 81.2 366.75 73.68 385.98 71m-22.2 56.8c-15.65 9.96-27.19 26.14-31.45 44.19-1.94 7.84-2.16 15.97-2.08 24.01v404.03c0.09 102.52-0.18 205.04 0.14 307.56 21.14-0.29 42.29 0.12 63.43-0.21-0.18-61.46 0-122.92-0.09-184.39-0.24-21.71 10.82-43.08 28.38-55.77 11.47-8.53 25.67-13.22 39.94-13.48 44.32 0.01 88.64 0.01 132.97 0.01 18.05 0.15 35.95 7.7 48.55 20.65 12.79 12.69 20.17 30.6 20.19 48.6-0.02 61.5-0.01 122.99-0.01 184.49 12.91 0.02 25.83 0 38.74 0.01-0.18-31.52 0.35-63.01 0.26-94.52V198.96c-0.06-7.01 0.34-14.07-0.84-21.02-2.83-19.48-14.17-37.46-30.33-48.65-12.36-8.67-27.46-13.08-42.52-13.03-75.03-0.02-150.06-0.01-225.09 0-14.13-0.01-28.32 3.81-40.19 11.54m385.47 120.7v565.46c0.1 31.18-0.44 62.35-0.25 93.53 43.56 0.04 87.13-0.04 130.69 0.04 0.15-202.19 0-404.38 0.07-606.57 0.18-12.68-4.54-25.29-12.9-34.8-9.44-10.81-23.49-17.5-37.87-17.67-26.58 0.02-53.16 0.01-79.74 0.01m-559.16 4.93c-20.51 6.06-35.85 26.11-36.09 47.54v606.52c43.25 0 86.51 0.03 129.76-0.01-0.03-218.74 0-437.48-0.02-656.23h-66.77c-8.99 0.14-18.22-0.81-26.88 2.18m250.15 469.5c0.02 61.52 0.01 123.05 0.01 184.57 59-0.01 117.99 0.01 176.99-0.01 0.01-61.48 0.02-122.96 0-184.43 0.01-11.92-10.39-22.52-22.29-22.78-44-0.06-88-0.02-131.99-0.02-12-0.03-22.81 10.63-22.72 22.67z" p-id="5600" fill="#e6e6e6"></path><path d="M430.41 225.58c1.82-0.4 3.69-0.55 5.56-0.58 61.68 0 123.36 0.01 185.04-0.01 6.58-0.12 13.28 2.41 17.74 7.34 4.76 4.89 6.97 12 6.14 18.75-0.85 8.48-6.88 16.11-14.87 19.03-4.15 1.67-8.69 1.43-13.07 1.39-58.99 0-117.97 0-176.96 0.01-4.37 0.07-8.9 0.22-12.98-1.58-9.55-3.54-15.78-13.96-14.56-24.05 0.85-9.69 8.43-18.27 17.96-20.3zM433.31 350.34c62.9-0.2 125.81-0.03 188.71-0.09 11.75-0.2 22.58 9.86 22.97 21.66 0.82 9.21-4.53 18.46-12.84 22.45-3.76 1.9-8.02 2.56-12.19 2.41-59.33-0.05-118.66-0.01-177.99-0.02-4.66-0.05-9.47 0.43-13.94-1.21-9.8-3.16-16.56-13.44-15.65-23.68 0.53-11.02 9.91-20.73 20.93-21.52zM428.42 476.56c4.03-1.46 8.37-1.02 12.57-1.06h174.99c4.67 0.01 9.52-0.4 13.96 1.36 8.7 3.09 15.01 11.83 15.09 21.08 0.55 9.77-5.92 19.36-15.13 22.6-4.75 1.83-9.9 1.45-14.88 1.46H441.98c-5.36 0.03-10.99 0.35-15.94-2.05-8.82-3.8-14.54-13.52-13.65-23.06 0.57-9.21 7.2-17.64 16.03-20.33zM791.15 488.21c5.84-1.3 11.87-0.5 17.81-0.71 7.12 0.23 14.73-1.03 21.34 2.36 8.26 3.91 13.69 13 12.98 22.15-0.2 11.66-10.6 21.95-22.28 21.99-8.69-0.02-17.39 0.06-26.08-0.04-10.61-0.56-19.99-9.45-21.17-20-1.86-11.38 6.12-23.25 17.4-25.75zM201.5 499.64c8.41-1.33 16.99-0.32 25.48-0.66 6.06-0.32 12.42 0.92 17.3 4.73 7.07 5.24 10.64 14.76 8.69 23.35-1.87 10.26-11.56 18.41-22 18.45-8 0-16-0.03-24 0.01-8.08 0.21-16.07-4.32-20.09-11.32-3.48-5.79-4.11-13.1-2-19.48 2.46-7.44 9-13.32 16.62-15.08zM790.39 634.52c2.15-0.66 4.41-0.82 6.66-0.79 7.67 0.03 15.34 0.03 23.01 0 8.82-0.35 17.41 5.2 21.08 13.18 2.17 4.34 2.55 9.36 1.86 14.11-1.52 9.76-10.1 17.89-19.92 18.94-5.36 0.57-10.76 0.18-16.13 0.29-6.91-0.13-14.29 0.83-20.62-2.56-9-4.29-14.33-14.89-12.48-24.67 1.32-8.66 8.07-16.22 16.54-18.5zM202.42 645.53c9.18-0.66 18.41-0.08 27.61-0.3 10.9-0.54 21.17 8.04 22.99 18.71 2.15 9.8-3.03 20.64-12.03 25.08-6.4 3.6-13.95 2.59-20.97 2.73-5.63-0.15-11.3 0.37-16.89-0.4-11.06-1.52-20.03-12.11-19.43-23.31-0.24-10.72 8.23-20.66 18.72-22.51zM790.41 780.59c6.08-1.54 12.42-0.58 18.62-0.84 6.63 0.27 13.59-0.97 19.9 1.7 8.6 3.32 14.63 12.29 14.37 21.52 0.31 9.59-6.21 18.84-15.26 21.91-4.79 1.87-10 1.3-15.02 1.37-5.98-0.06-11.97 0.11-17.95-0.06-10.38-0.51-19.66-8.93-21.19-19.21-2.29-11.34 5.35-23.47 16.53-26.39zM204.26 791.37c5.92-0.3 11.86-0.04 17.78-0.12 5.93 0.1 12.2-0.7 17.72 2 9.02 3.89 14.77 13.95 13.59 23.7-0.91 10.62-10 19.79-20.64 20.68-6.25 0.29-12.51 0.03-18.76 0.12-4.62-0.11-9.38 0.5-13.85-1-8.11-2.29-14.52-9.45-16.03-17.72-0.93-5.5-0.23-11.4 2.68-16.23 3.54-6.35 10.31-10.64 17.51-11.43z" p-id="5601" fill="#e6e6e6"></path></svg>
                    </div>
                  </div>

                  <div className="magic-menu2">
                    <ul className="magic-ul">
                      <li className="magic-title">Intelligent Building</li>
                      <li id="g5" className="magic-li">4G/5G network access/</li>
                      <li className="magic-li">Visualization system/Low voltage room/Face recognition/security system/Property management/Customization</li>
                    </ul>
                  </div>
                   

                  <div className="magic-menu3">
                    <ul className="magic-ul">
                      <li className="magic-title">Smart City</li>
                      <li className="magic-li">IBMS system/</li>
                      <li className="magic-li">Customization</li>
                    </ul>
                  </div>
       

                </div>
                <BestMenu />
              </div>

              

              <a name="team"></a>
              <div className="teaminfo">
                <h2 id="title1">TEAM</h2>
                <div className="teamwrapper">
                  <div className="teamContent1">
                    <div className="nameCard">
                      <div className="nameCardC">
                        <div className="nameCardCC">
                         <p className="nameCardInfo">Jinhua</p>
                         <p id="lastName" className="nameCardInfo">Tang</p>
                        </div>
                      </div>                     
                    </div>
                    <div className="nameCard">
                      <p className="nameCardInfo">Nicole</p>
                      <p id="lastName" className="nameCardInfo">Chen</p>
                    </div>
                    <div className="nameCard">
                      <p className="nameCardInfo">Jeremy</p>
                      <p id="lastName" className="nameCardInfo">Tao</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact">
                <h2 id="title1">CONTACT US</h2>
                <h4>Get in touch with us!</h4>
                <div className="contactInfo">
                  <div id="contactInfoD" >
                    <svg t="1594926536993" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="2323" width="30" height="30"><path d="M745.6 32H278.4C230.4 32 192 73.6 192 121.6v780.8C192 950.4 230.4 992 278.4 992h464c48 0 86.4-41.6 86.4-89.6V121.6C832 73.6 793.6 32 745.6 32z m28.8 870.4c0 16-12.8 28.8-28.8 28.8H278.4c-16 0-28.8-12.8-28.8-28.8V121.6c0-16 12.8-28.8 28.8-28.8h48l22.4 32c9.6 16 28.8 25.6 48 25.6h227.2c19.2 0 38.4-9.6 48-25.6l22.4-32h48c16 0 28.8 12.8 28.8 28.8v780.8z" p-id="2324" fill="#ffffff"></path><path d="M598.4 841.6h-176c-16 0-28.8 12.8-28.8 28.8s12.8 28.8 28.8 28.8h176c16 0 28.8-12.8 28.8-28.8s-12.8-28.8-28.8-28.8z" p-id="2325" fill="#ffffff"></path></svg>
                    <p className="footerinfo" id="contactStyle">
                    Twitter：smart space8<br />
                    微信公众号：讯楼科技smartspace
                    </p>
                  </div>
                  <div className="contactInfoD">
                    <svg t="1594926640355" class="icon" viewBox="0 0 1025 1024" version="1.1" p-id="3318" width="30" height="30"><path d="M365.062518 704 217.862518 704C198.662518 704 173.062518 716.8 166.662518 729.6L6.662517 934.4C-6.137483 947.2 0.262517 960 19.462517 960L1005.062515 960C1024.262515 960 1030.662515 947.2 1017.862515 934.4L857.862515 729.6C845.062515 716.8 825.862515 704 806.662515 704L659.462515 704 608.262518 768 806.662515 768 909.062515 896 115.462518 896 217.862518 768 416.262518 768 365.062518 704 365.062518 704 365.062518 704 365.062518 704Z" p-id="3319" fill="#ffffff"></path><path d="M512.0032 64C371.2032 64 256.0032 179.2 256.0032 320 256.0032 364.8 268.8032 409.6 288.0032 448L448.0032 723.2C486.4032 787.2 544.0032 787.2 576.0032 723.2L723.2032 460.8C748.8032 422.4 768.0032 371.2 768.0032 320 768.0032 179.2 652.8032 64 512.0032 64L512.0032 64ZM672.0032 416 544.0032 646.4C518.4032 691.2 505.6032 691.2 480.0032 646.4L345.6032 409.6C326.4032 384 320.0032 352 320.0032 313.6 320.0032 211.2 403.2032 128 512.0032 128 620.8032 128 704.0032 211.2 704.0032 313.6 704.0032 352 691.2032 384 672.0032 416L672.0032 416Z" p-id="3320" fill="#ffffff"></path></svg>
                    <p className="footerinfo" id="contactStyle">
                    Room 1566, Building 1, 222 Hubin Road, Link Square, Shanghai, China<br/>
                    </p>
                  </div>
                  <div id="contactInfoD">
                    <svg t="1594926710461" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="4415" width="30" height="30"><path d="M741.12 305.737143H276.114286L511.817143 528.457143z" fill="#ffffff" p-id="4416"></path><path d="M524.8 566.857143a18.651429 18.651429 0 0 1-25.417143 0.182857l-62.72-59.245714L256 668.525714v49.737143h512v-49.737143l-181.577143-161.645714L524.8 566.857143zM256 337.005714v282.514286l153.965714-136.96zM768 619.52V330.788571l-155.245714 150.491429z" fill="#ffffff" p-id="4417"></path><path d="M512 9.142857C234.24 9.142857 9.142857 234.24 9.142857 512S234.24 1014.857143 512 1014.857143 1014.857143 789.76 1014.857143 512 789.76 9.142857 512 9.142857z m292.571429 727.405714c0 10.057143-8.228571 18.285714-18.285715 18.285715H237.714286c-10.057143 0-18.285714-8.228571-18.285715-18.285715V287.451429c0-10.057143 8.228571-18.285714 18.285715-18.285715h548.571428c10.057143 0 18.285714 8.228571 18.285715 18.285715v449.097142z" fill="#ffffff" p-id="4418"></path></svg>
                    <p className="footerinfo" id="contactStyle">
                    service@smartspace.ltd
                    </p>
                  </div>
                </div>

                <div className="contactA">
                  <h5 id="contacth5">IF YOU GOT ANY QUESTION</h5>
                  <h5 id="contacth5">PLEASE DO NOT HESITATE TO SEND US A MESSAGE</h5>
                  <form className="contactB">
                    <div>
                      <input id="contactF" type="text" placeholder="Your Name" size="60"></input>
                    </div>
                    <div>
                      <input id="contactF" type="text" placeholder="Your Email" size="60"></input>
                    </div>
                    <div>
                      <textarea placeholder="Message" rows="15" cols="51"></textarea>
                    </div>
                    <div>
                      <input className="submit" type="submit" value="Send Message" size="10"></input>
                    </div>
                  </form>
                  <div className="social">
                    <a href="https://weibo.com/u/7386208963" target="view-frame"><img src="weibo.png"></img></a>
                    <img src="facebook.png"></img>
                    <img src="twitter.png"></img>
                    <img src="instagram.png"></img>
                    <img src="linkedin.png"></img>
                    <a href="Wechat.jpeg" target="view-frame"><img src="wechat.png"></img></a>
                  </div>
                </div>


                
              </div>

              <a name="client"></a>
              <div className="client">
                <div className="clientTitle">
                  <h2 id="title1">CLIENT</h2>
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
                      <img src="/cl/Picture4.png" width="160px" height="100px" alt="client"/>
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
                      <img src="/cl/Picture8.png" width="110px" height="85px" alt="client"/>
                    </th>
                    <th>
                      <img src="/cl/Picture9.png" width="130px" height="100px" alt="client"/>
                    </th>
                    <th>
                      <img src="/cl/Picture10.png" width="150px" height="60px" alt="client"/>
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
                  <img src="./logo1.png" alt="small logo here" width="266px" height="160px"/>
                </section>
                <section id="footerSection">
                  <h5 className="footerTitle" id="footerStyle">ADDRESS</h5>
                  <p className="footerinfo" id="footerStyle">
                  Room 1566, Building 1, 222 Hubin Road,<br/>
                  Link Square, Shanghai, China<br/>
                  上海市黄浦区湖滨路222号<br/>企业天地一号楼1566室
                  </p>
                </section>
                <section id="footerSection">
                  <h5 className="footerTitle" id="footerStyle">CONTACTS</h5>
                  <p className="footerinfo" id="footerStyle">
                    Email: service@smartspace.ltd<br />
                    Phone: 400-117-1204<br />
                    WeChat official account: SmartSpace 讯楼<br />
                    WeChat Channel ：SmartSpace讯楼科技
                  </p>
                </section>
              </div>

            </div>
          </div>
      </div>

    )
  }
}
