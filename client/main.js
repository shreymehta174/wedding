/**
 * Main entry point for the client application.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-stickynode';

import Menu from './components/Menu.component';
import RSVPForm from './components/RSVPForm.component';
import SecretTooltip from './components/SecretTooltip.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';

const websiteContent = (
  <div>

    <TitleBar id="titlebar">
    </TitleBar>

    {/* <div style={{ height: '200px' }}></div> */}

    <Sticky enabled={true}>
      <Menu id="menu"
        items={[{ label: 'THE BRIDE & GROOM', href: 'brideandgroom' },
                { label: 'THE WEDDING', href: 'wedding' },
                // { label: 'RSVP', href: 'rsvp' },
                // { label: 'LOGISTICS', href: 'logistics' },
                // { label: 'THINGS TO DO', href: 'thingstodo' },
                { label: 'MESSAGE', href: 'message' }]}>
      </Menu>
    </Sticky>

    <TopicContainer id="brideandgroom" name="brideandgroom" title="The Bride and Groom">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <p>
              <img className="thumbnail" src="img/jocelyn-baby.jpg" alt="Dhwani" />
              Dhwani is a sweet and loving girl who always sees the beauty in people. She always respects family and their values. 
              She built her career in Information Technology.
            </p>
          </div>

          <div className="one-half column">
            <p>
              <img className="thumbnail" src="img/kal-baby.jpg" alt="Shrey" />
              Shrey is a simple and funny boy who always lives the life with humor. He loves the family and hanging around with them.
              He built his career in Information Techonolgy.
            </p>
          </div>
        </div>
      </div>

      <hr />

      {/* <p>
        <div>
        <img className="large-image" src="img/proposal.jpg" alt="Shrey and Dhwani" />
        </div>
      </p> */}

       <h2>OUR STORY</h2>
       <div id="container"></div>
       <script src="./example.js"></script>
      <p>
        Coming Soon...
        {/* It all started with one single text message and then few calls in the begining to know each other and understanding choice of each other. Parents met each other at temple and they introduced us to each other.
        After that so many video calls, text messages and voice calls started and we mutually decided that we found the person whom we want to grow old together.
        After that we met in September 2018. We decided to move forward towards the next phase of our life with the blessings from parents and elder family members. */}
      </p>
    </TopicContainer>

    <TopicContainer id="wedding" title="The Wedding">
      <div className="container">
        <div className="one-half column">
          <h2>ENGAGEMENT</h2>
          <p>18:30 @ Annapurna Plot</p>
          <p>
            <img className="location-image" src="img/annapurna.jpg" alt="Annapurna Party Plot" />
          </p>
          <p style={{textAlign: "center"}}>
            <a href="https://goo.gl/maps/ozfZxwhmPLk">Google Maps</a> | <a href="img/annapurna-map.jpg">Image Map</a>
          </p>
          <p>Located on Dhoomketu Marg Chitrakar Rasiklal Parikh Marg, Bhatta, Paldi, Ahmedabad Gujarat 380007. Also have a look at the
             map above.
          </p>
        </div>
        <div className="one-half column">
          <h2>MARRIAGE</h2>
          <p>18:30 @ The Viva Farm</p>
          <p>
            {/* <a href="img/viva.jpg"></a> */}
            <img className="location-image" src="img/viva.jpg" alt="Viva Farm" />
          </p>
          <p style={{textAlign: "center"}}>
            <a href="https://goo.gl/maps/pJbagNHVpTH2">Google Maps</a> | <a href="img/viva-map.jpg">Image Map</a>
          </p>
          <p>Located at Hathijan, Sardar Patel Ring Rd, Vinzol, Ahmedabad, Gujarat 382445. Also have a look at the map above.
          </p>
        </div>
        <div className="one-half column">
          <h2>RECEPTION</h2>
          <p>19:00 @ Bhoomi Party Plot</p>
          <p>
            <img className="location-image" src="img/bhoomi.jpg" alt="Bhoomi Party Plot" />
          </p>
          <p style={{textAlign: "center"}}>
            <a href="https://goo.gl/maps/Qm3AAKyFiY42">Google Maps</a> | <a href="img/bhoomi-map.jpg">Image Map</a>
          </p>
          <p>Located at 101, Naranpura Rd, Sundar Nagar, Naranpura, Ahmedabad, Gujarat 380013. Also have a look at the map above.
          </p>
        </div>
      </div>

      <hr />

      <h2>ON THE WEDDING DAY (24th January)</h2>
      <p>Mandap Muhurat will start in the morning at 09:00. The wedding ceremony will start at 18:45 at <a href="https://goo.gl/maps/pJbagNHVpTH2">Viva Farm</a>. Please arrive at your convinience and shower newly wedded couple with your blessings.
      </p>

      <hr />

      <h2>DAY BEFORE THE WEDDING (23rd January)</h2>
      <p>Bhajan will be held inside banquet of <a href="https://goo.gl/maps/ozfZxwhmPLk">Annapurna Party Plot</a>. Ring Ceremony and DJ Party will be held on the open plot of <a href="https://goo.gl/maps/ozfZxwhmPLk">Annapurna Party Plot</a> from 19:00 to 23:00.
      </p>

      <hr />

      <h2>DAY AFTER THE WEDDING (25th January)</h2>
      <p>Reception Ceremony will be held at <a href="https://goo.gl/maps/Qm3AAKyFiY42">Bhoomi Party Plot</a>.
      </p>
    </TopicContainer>

    {/* <TopicContainer id="rsvp" title="RSVP">
    //   <RSVPForm>
    //   </RSVPForm>
    // </TopicContainer>*/}

    <TopicContainer id="message" title="Message">
      <p>Dear family and friends,</p>
      <p>We feel honoured that you are all coming a long way to come and celebrate our special day with us. Your presence will make this occassion very very special.
      </p>
      <p>Thank you in advance!
      </p>
    </TopicContainer>

  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
