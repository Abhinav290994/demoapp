import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Image formation</h1>
        </header>

        <div id="ninja-slider">
            <div id="slider-inner">
                <ul>
                    <li>
                        <a id="ns-img" href="img/abc.jpg"></a>
                        <div id="caption">
                            <h3>Dummy Caption 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan purus.</p>
                        </div>
                    </li>
                    <li>
                        <a id="ns-img" href="img/a.jpg"></a>
                        <div id="caption">
                            <h3>Dummy Caption 2</h3>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                        </div>
                    </li>
                    <li>
                        <span id="ns-img" styles="background-image:url(img/b.jpg);"></span>
                        <div className="caption">
                            <h3>Dummy Caption 3</h3>
                            <p>Duis fringilla arcu convallis urna commodo, et tempus velit posuere.</p>
                        </div>
                    </li>
                    <li>
                        <a id="ns-img" href="img/c.jpg"></a>
                        <div className="caption">
                            <h3>Dummy Caption 4</h3>
                            <p>Quisque semper dolor sed neque consequat scelerisque at sed ex. Nam gravida massa.</p>
                        </div>
                    </li>
                    <li>
                        <a id="ns-img" href="img/d.jpg"></a>
                        <div id="caption">
                            <h3>Dummy Caption 5</h3>
                            <p>Proin non dui at metus suscipit bibendum.</p>
                        </div>
                    </li>
                </ul>
                <div id="fsBtn" className="fs-icon" title="Expand/Close"></div>
            </div>

    </div>
    <div styles="max-width:700px;margin:90px auto;">
        <h2>DEMO: Click Gallery Images to Popup Lightbox</h2>
        <br /><br />
        <div className="gallery">
            <img src="img/abc.jpg" onclick="lightbox(0)" styles="width:auto; height:140px;" />
            <img src="img/a_s.jpg" onclick="lightbox(1)" styles="width:auto; height:140px;" /><br />
            <img src="img/b_s.jpg" onclick="lightbox(2)" />
            <img src="img/c_s.jpg" onclick="lightbox(3)" />
            <img src="img/d_s.jpg" onclick="lightbox(4)" />
        </div>
    </div>
    </div>






    );
  }
}


export default App;
