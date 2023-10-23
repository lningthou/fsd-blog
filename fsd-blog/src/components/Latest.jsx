import { useState } from 'react';
import reactLogo from './../assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Trending from './Trending.jsx';
import MoreArticles from './MoreArticles.jsx';
import './../App.css';
import ai_iym from './../images/ai_iym.jpeg';
import ai_ite from './../images/ai_ite.jpg';
import ai_bew from './../images/ai_bew.jpg';
import ai_iyw from './../images/ai_iyw.jpg';
import ssmug from './../images/ssmug.jpg';

function Latest() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* add which tab this is*/}
      <div class="body">
        <Trending />
        <div class="mainContent">
          <div class="mainArticle">
            <h1>Cutting-Edge Technology: An Unnecessary Solution to Nonexistent Problems</h1>
            <img src={ssmug} width="100%" alt="Vite logo" />
            <p>In an age where tech companies keep churning out new gadgets and gizmos faster than you can say "smart toaster," it's essential to take a step back and ask ourselves, "Do we really need all this tech?" Let's dive into the hilarious world of innovation and explore how our lives are enriched by the latest and greatest gadgets and apps that address problems we never knew existed. </p>
            <ul>
                <li>
                The Self-Stirring Spoon App
                Are you tired of using your wrist muscles to stir your coffee? Well, fear not, because the "StirMaster 3000" app has you covered. This groundbreaking app syncs with your smart spoon and does the stirring for you. Finally, you can relax and let your coffee stir itself, which leaves you more time for meaningful pursuits, like staring at your smartphone.
                </li>
                <li>
                The Automatic Selfie Stick
                Because taking a selfie with your arm extended is so 2015, the "Selfie-Extendo Max" is here to save the day. With its advanced AI technology, it automatically positions itself at the perfect angle to capture your best angles without any effort from you. Now you can focus on more important things, like choosing the right filter for your selfie.
                </li>
                <li>
                The "LifeLog" App
                Ever wondered if you're living life to the fullest? The "LifeLog" app tracks your every move, analyzes your conversations, and monitors your vital signs to ensure you are squeezing every ounce of potential out of your existence. Receive daily reminders to take more risks or socialize with people who have more exciting lives than yours. You'll never feel inadequate again!
                </li>
                <li>
                The "SmartPants" - Pants with an IQ
                Do you ever find yourself struggling with the age-old dilemma of "What should I wear today?" The SmartPants have you covered! These technologically advanced trousers analyze your daily schedule, the weather, and your personal style preferences to choose the perfect outfit for you. Bonus feature: they also warm up when it's cold and cool down when it's hot, because why bother experiencing temperature changes naturally?
                </li>
                <li>
                The "Mindless Meetings" App
                Who has time for endless meetings? Well, not you, because the "Mindless Meetings" app generates realistic meeting-sounding background noise for your Zoom calls, allowing you to peacefully work on other things. Worried about your boss catching on? Don't be; this app also comes with a "panic meeting" button to quickly bring you back into the conversation when necessary.
                </li>
            </ul>
            <p>
                We often find ourselves embracing tech solutions to problems that, when considered rationally, are hardly problems at all. Our obsession with innovation can sometimes lead to gadgets and apps that serve no purpose other than to complicate our lives further. So, the next time you're tempted to download a new app or buy the latest tech gadget, take a step back and ask, "Is this technology genuinely solving a problem, or is it just another absurd solution in search of a non-existent problem?"
            </p>
            <p> <b>
            Sometimes the best solution to a problem is to realize it wasn't a problem in the first place.
            </b> </p>
          </div>
          <MoreArticles />
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default Latest