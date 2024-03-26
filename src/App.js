import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import giftcard from "./pages/giftcard";
import ideas from "./pages/ideas";
import log from "./pages/log";
import membership from "./pages/membership";
import newletter from "./pages/newletter";
import podcast from "./pages/podcast";
import insterest from "./pages/interest"
import style from "./style/style.css";
import blog1 from "./img/blog1.png";
import blog2 from "./img/blog2.png";
import blog3 from "./img/blog3.png";
import phone from "./img/phone.png";
import sum1 from "./img/sum1.png";
import sum2 from "./img/sum2.png";
import sum3 from "./img/sum3.png";
import sum4 from "./img/sum4.png";
import sum5 from "./img/sum5.png";
import sum6 from "./img/sum6.png";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import icon17 from "./img/icon17.png";
import icon6 from "./img/icon6.png";
import icon7 from "./img/icon7.png";
import icon8 from "./img/icon8.png";
import icon9 from "./img/icon9.png";
import icon10 from "./img/icon10.png";
import icon11 from "./img/icon11.png";
import icon12 from "./img/icon12.png";
import icon13 from "./img/icon13.png";
import icon14 from "./img/icon14.png";
import icon15 from "./img/icon15.png";
import icon16 from "./img/icon16.png";
import icon5 from "./img/icon5.png";



import { Button } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/giftcard" Component={giftcard} />
        <Route path="/ideas" Component={ideas} />
        <Route path="/log" Component={log} />
        <Route path="/membership" Component={membership} />
        <Route path="/newletter" Component={newletter} />
        <Route path="/podcast" Component={podcast} />
        <Route path="/interest" Component={insterest}/>

      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <section className="home">
      <div className="homepage">
        <h1>
          Making knowledge accesible <br />
          for all.
        </h1>
        <p>
          15-min simplified summaries of cutting-edge research
          <br />
          papers
        </p>
        <h2>
          Learn the Latest in <span>Technology</span>
        </h2>
        <ul>
          <li>
            <Link to="/membership" className="link">
              START YOUR FREE TRIAL
            </Link>
          </li>
        </ul>
      </div>
      <div className="home_bottom">
        <h1>Stay on the cutting-edge in 15 mins</h1>

        <div className="blog">
          <div className="blog1">
            <img src={blog1} />
            <p>
              Research journals are expensive,
              <br />
              costing upwards of $100k USD.
            </p>
          </div>
          <div className="blog1">
            <img src={blog2} />
            <p>
              We provide short summaries of <br />
              research articles from top journals.
            </p>
          </div>
          <div className="blog1">
            <img src={blog3} />
            <p>
              Learn new ideas and concepts <br />
              before anyone else via audio or text.
            </p>
          </div>
        </div>
        <div className="phone">
          <div className="pleft">
            <img src={phone} />
          </div>
          <div className="pright">
            <div className="skills">
              <h3>READ</h3>
              <p>
                Read article summaries from top research including, Nature,
                Science and
                <br />
                Journal of Business Research.
              </p>
            </div>
            <div className="skills">
              <h3>LEARN</h3>
              <p>
                Click on keywords to see definitions, images and videos to help
                you better
                <br />
                understand the concept.
              </p>
            </div>
            <div className="skills">
              <h3>AUDIO</h3>
              <p>
                Listen to podcasts from top researchers sharing exclusive
                insights into <br />
                interesting ideas.
              </p>
            </div>
            <div className="skills">
              <h3>VIDEO</h3>
              <p>
                Watch videos of research articles to better grasp the concept
                visually.
              </p>
            </div>

            <div className="li_div">
              <li>
                <Link to="/membership" className="link_vidio">
                  START FREE TRIAL
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="discover">
        <h1>Discover Research Summaries.</h1>
        <ul>
          <li>
            <Link to="/membership" className="link">
              START FREE TRIAL
            </Link>
          </li>
        </ul>
        <div className="imglink">
          <li>
            <Link to="/membership" className="">
              <img src={sum1} />
            </Link>
          </li>

          <li>
            <Link to="/membership">
              <img src={sum2} />
            </Link>
          </li>

          <li>
            <Link to="/membership">
              <img src={sum3} />
            </Link>
          </li>
        </div>
        <div className="imglink">
          <li>
            <Link to="/membership">
              <img src={sum4} />
            </Link>
          </li>

          <li>
            <Link to="/membership">
              <img src={sum5} />
            </Link>
          </li>

          <li>
            <Link to="/membership">
              <img src={sum6} />
            </Link>
          </li>
        </div>
      </div>
<div className="interes">
  <div className="int_title">
  <h1>
  What are you interested in?
  </h1>

  <button>
  <Link to="/membership" className="link">
              START FREE TRIAL
            </Link>

  </button>
           
          
  </div>
<div className="inte">
  <div className="inte1">
  <button>
  <Link to="/interest" className="link">
             <img src={icon1}/>Agricultere
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon2}/> Vet Sciences
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon3}/> Data/Statistics
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon4}/>Health Science
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon5}/>Space
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon6}/>Metaverse
            </Link>

  </button>
  </div>
  <div className="inte1">
  <button>
  <Link to="/interest" className="link">
             <img src={icon7}/>History
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon8}/> Economics
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon9}/> Biology
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon10}/>Komputer Science
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon11}/>Language and Culture
            </Link>

  </button>
 
  </div>
  <div className="inte1">
  <button>
  <Link to="/interest" className="link">
             <img src={icon12}/>Mathematics
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon13}/>Philosophy
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon14}/> Human Siciety
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon15}/>Psychology
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon16}/>Creative Science
            </Link>

  </button>
  <button>
  <Link to="/interest" className="link">
  <img src={icon17}/>Startups
            </Link>

  </button>
  </div>

</div>
</div>
<div className="ask">

  <div className="askleft">
    <div>
    <h1>
Frequently Asked 
<br/>Questions
</h1>
    </div>


<div className="askright">
    <p>
    What can I access? Access our entire database of idea<br/>
     summaries, videos and podcast.
    </p>
    <p>
    Is this right for me? Don’t worry, try our 7-day free trial and 
    <br/>our cancellation is as simple as the click of a button.
    </p>
    <p>
    How are we different?  Unlike others, our goal is to<br/>
     summarise most influential research and articles to 
    <br/>provide key insights. No opinions or bias, only key ideas.
    </p>
    </div>
  </div>
  
</div>

<div className="bottomlink">
  <div className="btn">
  <button>
  <Link to="/membership" className="link">
             Contact Us
            </Link>

  </button>
  <button>
  <Link to="/membership" className="link">
             About Us
            </Link>

  </button>
  <button>
  <Link to="/membership" className="link">
             Terms Of Service
            </Link>

  </button>
  <button>
  <Link to="/membership" className="link">
             Privacy Policy
            </Link>

  </button>
  <button>
  <Link to="/membership" className="link">
              Log In
            </Link>

  </button>
  </div>


</div>
    </section>
  );
};

export default App;
