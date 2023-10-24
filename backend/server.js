const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// JSON database 
// Each article has fields: id, title, author, date, content
const articles = [
    {"id": 0,
     "title": "  The Ultra-Ultra-Ultra HD: Do Our Eyes Even Care?",
     "image": "https://ichef.bbci.co.uk/news/976/cpsprodpb/1311A/production/_106360187_4917fc45-8427-48bf-885a-e2294acfae9f.jpg",
     "content": `<p>
     It's 2023 and here we are with the latest tech buzz - The 16K Ultra-Ultra-Ultra HD TV! 
     Remember when 4K was a thing? Oh, those were such low-res times. Now, our screens are so 
     crystal clear that you can count the pores on an actor's nose from your living room.
 </p>

 <p>
     But here’s the million-dollar (or should we say, million-pixel) question: 
     <b>can our puny human eyes even detect the difference?</b>
 </p>

 <p>
     Sure, the tech giants claim that with the Ultra-Ultra-Ultra HD experience, 
     you can practically "feel" the texture of the grass in movies. But let's be real, 
     we were all still trying to spot the difference between Full HD and 4K. 
     Now they expect us to discern between 4K and 16K? 
     <span class="sarcasm">Maybe if we evolved into eagles overnight.</span>
 </p>

 <p>
     In related news, the world's leading optometrists are rejoicing as 
     they expect a surge in appointments. Apparently, squinting at our new 
     TVs trying to spot the differences is causing some vision strain. 
     But hey, that's the price we pay for progress!
 </p>

 <p>
     So, if you’ve got a few grand to spare and you want to be the envy of 
     every tech lover (or eagle) on your block, by all means, invest in the 
     Ultra-Ultra-Ultra HD TV. Just remember, your cat lounging in front of the screen 
     probably has a better appreciation for that resolution than you do.
 </p>

 <b>
     Stay tuned for our next review: The Ultra-Ultra-Ultra HD Glasses - for when your 
     eyes can’t keep up with technology!
 </b>`,
    },
    {"id": 1,
     "title": "Cutting-Edge Technology: An Unnecessary Solution to Nonexistent Problems",
     "image": './src/images/ssmug.jpg',
     "content": 
     `<p>In an age where tech companies keep churning out new gadgets and gizmos faster than you can say "smart toaster," it's essential to take a step back and ask ourselves, "Do we really need all this tech?" Let's dive into the hilarious world of innovation and explore how our lives are enriched by the latest and greatest gadgets and apps that address problems we never knew existed. </p>
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
     </b> </p>`,
    },
  ]

// Define a GET route to retrieve all articles
app.get('/articles', (req, res) => {
  res.json(articles);
});

// Define a GET route to retrieve a specific article
app.get('/articles/:id', (req, res) => {
  const article = articles.find((article) => article.id == req.params.id)
  res.json(article);
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
