import React from 'react';
import './App.scss';
import ImageContainer from './components/atoms/ImageContainer';
import imageLogo from './assets/images/logo_image.png';
import Select from './components/atoms/select/Select';
import Label from './components/atoms/label/Label';
import ColorPattern from './components/atoms/colorPattern/ColorPattern';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import SelecrForm from './components/moleclues/SelecrForm';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

          <Tabs defaultActiveKey="components" id="uncontrolled-tab-example">
            <Tab eventKey="components" title="Components">
              <div className="p-4">
                <h1>Basic components</h1>
                <div className="row pt-4 flex-wrap">
                  <div className="col-md-4 py-2 border">
                    <h2>Color Pattern</h2>
                    <ColorPattern style={{ background: 'linear-gradient(to right, #061d49, #fff)', height: '40px', color: '#fff' }}>Navy Blue 100% to 0%</ColorPattern>
                    <ColorPattern style={{ background: 'linear-gradient(to right, #104cbf, #fff)', height: '40px', color: '#000' }}>blue 100% to 0%</ColorPattern>
                    <ColorPattern style={{ background: 'linear-gradient(to right, #7ed321, #fff)', height: '40px', color: '#000' }}>green 100% to 0%</ColorPattern>
                    <ColorPattern style={{ background: 'linear-gradient(to right, #ff0, #fff)', height: '40px', color: '#000' }}>Yellow 100% to 0%</ColorPattern>
                    <ColorPattern style={{ background: 'linear-gradient(to right, #f00, #fff)', height: '40px', color: '#000' }}>Red 100% to 0%</ColorPattern>
                    <ColorPattern style={{ background: 'linear-gradient(to right, #fff, #fff)', height: '40px', color: '#000' }}>White 100% to 0%</ColorPattern>
                    <ColorPattern style={{ background: 'linear-gradient(to right, #000, #fff)', height: '40px', color: '#fff' }}>Black 100% to 0%</ColorPattern>
                    <ColorPattern style={{ background: 'linear-gradient(to right, #969492, #fff)', height: '40px', color: '#000' }}>Gray 100% to 0%</ColorPattern>

                  </div>
                  <div className="col-md-4 py-2 border">
                    <h2>Image for logo</h2>
                    <ImageContainer imageURL={imageLogo} />
                  </div>
                  <div className="col-md-4 py-2 border">
                    <h2>Label text</h2>
                    <Label for="selectOne"><strong>Label text</strong></Label>
                  </div>
                  <div className="col-md-4 py-2 border">
                    <h2>Select normal</h2>
                    <Select name="selectOne" id="selectOne" />

                    <h2>Select invalid</h2>
                    <Select name="selectOne" id="selectOne2" data-valide="false" />

                    <h2>Select valid</h2>
                    <Select name="selectOne" id="selectOne3" value="First select" data-valide="true" />
                  </div>

                  <div className="col-md-4 py-2 border">
                    <h1>Headings 1</h1>
                    <h2>Headings 2</h2>
                    <h3>Headings 3</h3>
                    <h4>Headings 4</h4>
                    <h5>Headings 5</h5>
                    <h6>Headings 6</h6>
                  </div>

                  <div className="col-md-4 py-2 border">
                    <h2>Buttons</h2>
                    <Button variant="primary">Primary</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                    <Button variant="warning">Warning</Button>{' '}
                    <Button variant="danger">Danger</Button>
                    <Button variant="info">Info</Button>{' '}
                    <Button variant="light">Light</Button>
                    <Button variant="dark">Dark</Button>{' '}
                    <Button variant="link">Link</Button>
                  </div>
                  <div className="col-md-4 py-2 border">
                    <h2>Button arrow</h2>
                    <Button variant="primary" data-arrow="right">Primary</Button>
                    <Button variant="primary rounded" data-arrow="left">Primary</Button>
                    <Button variant="primary rounded" data-arrow="right">Primary</Button>
                    <Button variant="warning rounded" data-arrow="right">Primary</Button>
                    <Button variant="warning rounded" data-arrow="left">Primary</Button>
                  </div>
                  <div className="col-md-4 py-2 border">
                    <h2>button block</h2>
                    <Button variant="primary rounded w-100 " data-arrow="left">Primary</Button>
                    <br />
                    <Button variant="primary btn-block" data-arrow="right">Primary</Button>
                  </div>
                  <div className="col-md-4 py-2 border">
                    <h2>Error text message</h2>
                    <div className="text-error">Error the name field</div>
                  </div>

                  <div className="col-md-4 py-2 border">
                    <h2>Tiny paragraph</h2>
                    <div className="tiny-content">
                      <p>Copyright © 2019 AbbVie Ltd. All rights reserved.</p>
                      <p>Unless otherwise specified, all product names appearing in this internet site are trademarks owned by our licensed to AbbVie Inc., its subsidiaries or affiliates. No use of any AbbVie trademark, trade name, or trade dress in this site may be made without the prior written authorization of AbbVie Inc., except to identify the product or services of the company.</p>
                    </div>
                  </div>
                  <div className="col-md-4 py-2 border">
                    <h2>Select form</h2>
                    <SelecrForm />
                  </div>
                </div>
              </div>


            </Tab>
            <Tab eventKey="template" title="Template">
              <p>Template here</p>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <p>teb text 3</p>
            </Tab>
          </Tabs>

        </div>
      </div>
    </div>
  );
}

export default App;
