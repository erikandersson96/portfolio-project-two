# Erik game (Color game)
 
A website for people to play a version of the famous Simon Game. But this game is called Erik game. Instead of trying to match the computer color sequence, the user must hit a different color sequence. To win the game the user has to complete 10 levels, for each level the computer will increase one more color to the sequence. 
 
To play the game you can cklick this [link](https://erikandersson96.github.io/portfolio-project-two/). (Opens in a new tab).
 
![Am I Responsive, to show the website on different screen sizes](file-path)
 
 
 
---
## Portfolio Project Two 
 
---
### Intention
 
This website is a `fictional website` for the purpose of my Second Portfolio Project for Code Institute’s Full Stack Software Development Course. I created this website with the knowledge I gained from the `HTML`, `CSS` and `JavaScript` modules. 

The main goal with this project was to test my new knowledge in JavaScript. I decided to create my own version of the famous Simon Game, but with a twist. I reversed the logic of the game so the player needs to play his/her own sequence in order to win over the computer.
 
* Features I aimed to achieve with this project:
 
* To make the game `easy` to understand.
* Create a game with an old style interface `(Trying to take the user back to the 90's)`.
* Use a `Wrapper` for all text and the game itself to create a `“stand out”` feeling and catch the attention of the user.
* Create a game that everyone at any age can play!
 
---
## Table of Contents 
 
* [UX](#ux-user-experience)
 * [Visitor Goals](#visitor-goals)
 * [User Stories](#user-stories)
 
* [Wireframes](#wireframes)
 * [First Idea](#first-idea)
 * [Comparison](#comparison)
 
* [Website Design](#website-design)
 * [Color Scheme](#color-scheme)
 * [Fonts](#fonts)
 
* [Existing Features](#existing-features)
 * [Navigation Bar](#navigation-bar)
 * [Landing Page](#landing-page)
 * [Footer](#footer)
 * [About us](#about-us)
 * [Get in touch](#get-in-touch)
 
* [Future Features](#future-features)
 * [Learning Points](#learning-points)
 
* [Testing](#testing)
 * [Devices](#devices)
 * [Validator Testing](#validator-testing)
 * [Lighthouse Dev Tool](#lighthouse-dev-tool)
 * [Wave Page](#wave-page)
 * [Fixed Bugs](#fixed-bugs)
 * [Unfixed Bugs](#unfixed-bugs)
 
 
* [Deployment](#deployment)
 * [Creating My Website](#creating-my-website)
 * [GitHub Pages](#github-pages)
 
* [Credits](#credits) 
 * [Inspiration for this project](#inspiration-for-this-project)
 * [Content](#content)
 * [Media](#media)
 
* [Support](#support)
 
 
---
## UX (User Experience)
 
### Visitor Goals
 
* To quickly understand how the game works.
 
* To be accessible on all devices.
 
 
### User Stories
 
* A user's perspective: I want to easily understand the purpose of the website.
* A user's perspective: I want to easily understand how to play the game. 
* A user's perspective: I want the website to offer a clean interface.
 
 
---
## Wireframes
 
* First `11 images` is from the first visual idea for my project. As you will recognise from comparing my wireframes to the final product, you will see that my final product doesn't look like my wireframes at all. That has to do with a lot of different reasons that I will explain underneath all images. The wireframes was created using [Balsamiq - Balsamiq Wireframes](https://balsamiq.com/) (link). 
* Second row containing `1 image` is from the final product of the website. To give you a comparison.

### First Idea
 
**First website idea (wireframes):**

**Mobile:**

![Screenshot wireframe: Landing page, game-level, Easy](/assets/images/wireframeMobile1.png) 
![Screenshot wireframe: Medium, Hard, Pop Up](/assets/images/wireframeMobile2.png) 

**Tablet:**

![Screenshot wireframe: Landing page, User name](/assets/images/wireframeTablet1.png) 
![Screenshot wireframe: Easy, Medium](/assets/images/wireframeTablet2.png) 
![Screenshot wireframe: Hard, Pop Up](/assets/images/wireframeTablet3.png) 

**Desktop:**

![Screenshot wireframe: Landing page](/assets/images/wireframeDesktop1.png) 
![Screenshot wireframe: User name](/assets/images/wireframeDesktop2.png) 
![Screenshot wireframe: Easy](/assets/images/wireframeDesktop3.png) 
![Screenshot wireframe: Medium](/assets/images/wireframeDesktop4.png) 
![Screenshot wireframe: Hard](/assets/images/wireframeDesktop5.png) 
![Screenshot wireframe: Pop Up](/assets/images/wireframeDesktop6.png) 

### Comparison
 
**Final product:** **(desktop)**
 
Landing page. 

![Screenshot of landing page](/assets/images/)

Easy Interface. 

![Screenshot of easy interface](/assets/images/easy.png)

Medium Interface. 

![Screenshot of medium interface](/assets/images/medium.png)

Hard Interface. 

![Screenshot of hard interface](/assets/images/hard.png) 

Footer (social media links). 

![Screenshot of footer](/assets/images/footer1.png) 


#### Changes:

Using DOM instead of multiply HTML files: 
* As you can see, I choose to only display the game on the "Landing page". Beacuse my game only exist on one page, at first I didn't really understood the princip of DOM so I tought that I would create one HTML page for each "function" of the game. Like creating one Landing page that displayed some information about the game and a button that would take the user to the next page(HTML file) which would have been game-level(User name) with the choice of three difficulty levels and a Play button. After that a page with the correlated game interface (Easy, Medium or Hard) and so on as you can see in my wireframes. But I quickly realized that if I instead used the DOM I could keep everything within one HTML file. I will display with images my first repository and each html file that i created before I choose to create this repository and work with DOM instead. Worth mentioning is that this first repository never had finsihed CSS so the styling is not what is importent, I just want to give you as a reader a better understanding of how complex things could have been for me if I didn't go with using the DOM. 
 
Using Game Interface of circles instead of pieces like the wireframes: 
* I also choose to go with `another` style of my buttons for the game. Instead of using pieces like in the wireframe and in the original Simon Game, I chose to go with four circles. This was beacuse I felt that I am not to comfortable with my CSS skills to experiment with styles like that, maybe in the future.   
 
* In the footer I chose to only use social media links like `My own Github, Instagram, Youtube`. I felt that it looked cleaner to only have Social media platforms here instead of credits.
 
* Lastly, I decided to go with a simple design that had a look of an old game, so therfore I didn't experiment to much with the design of my final product. I wanted the game to be straight forward so the user could understand the game fast and start playing. 

#### Images of first repository **(without using DOM):** 

**HTML files.**

Index file. 

![Screenshot of index file](/assets/images/firstindex.png) 

Select difficulty file. 

![Screenshot of difficulty file](/assets/images/firstselector.png) 

Easy interface file. 

![Screenshot of easy interface file](/assets/images/first-easy.png)

Medium interface file. 

![Screenshot of medium interface file](/assets/images/first-medium.png) 

Hard interface file. 

![Screenshot of hard interface file](/assets/images/first-hard.png) 

**Interface - users perspective.**

Landing page. 

![Screenshot of landing page](/assets/images/firstlanding.png) 

Choose difficulty. 

![Screenshot of choose difficulty](/assets/images/firstselection.png) 

Easy Interface. 

![Screenshot of easy interface](/assets/images/first-easy1.png) 

Medium Interface. 

![Screenshot of medium interface](/assets/images/first-medium1.png) 

Hard Interface. 

![Screenshot of hard interface](/assets/images/first-medium1.png) 


---
## Website Design
 
Logo design - Because this website was created with the intention to keep it clean and simple. I decided to go with only `“Erik game”`. Beacuse I thought it gave the game a simple and clean look.
 
Background Image - I downloaded this image from `pixabay.com` which is a website with free images. And I used a `black background color` to it in case the image wouldn't load.

`Wrapper` - I chose a `"Wrapper"` to contain the game and all other text on the page to let the Game stand out from the background image and make it look better.

Website Colors - I went for a lighter green with almost a little neon effect to my Wrapper, difficulty selector and footer (social media links), beacuse I thought it was a nice contrast to my background-image that has green "neon" stripes in it. For my difficulty selector I used a dark green for when the User has selected a difficulty. For my description box (description of the game) and Start game button I chose a little darker green to let it `Stand out` from the Wrapper. For my game controlls (circles) I chose Green, Blue, Yellow and Red beacuse I think it looks the best. 
  

### Color Scheme
 
* I went for eight different colors for the website. `Light neon green` for the `Wrapper, difficulty selector and social media links`, little darker green for the `description box and the "Start game" button`, black for all `text`, dark green for the selected `difficulty` and my circles has `green, blue, yellow, red`.
 
**#11D6A1 - Light neon green (HEX-color)**
 
![A box with the color of my Wrapper](/assets/images/11d6a1.png)
 
**#0fbd8e - Little darker green (HEX-color)**
 
![A box with the color of my description box](/assets/images/0fbd8e.png)
 
**Black - color (Default color)**
 
![A black box](/assets/images/black.png) 

**#0ca17a - Dark green (HEX-color)** 

![A box with the color of my difficulty selector](/assets/images/0ca17a.png) 

**Green - color (Default color)**

![A box with the color of my first circle](/assets/images/green.png) 

**Blue - color (Default color)**

![A box with the color of my second circle](/assets/images/blue.png) 

**Yellow - color (Default color)**

![A box with the color of my third circle](/assets/images/yellow.png) 

**Red - color (Default color)**
 
![A box with the color of my fourth circle](/assets/images/red.png)


### Fonts
 
* I used two different fonts for the website. `"nunito"` for my `logo` and `“Roboto Mono”` for all other text with `sans-serif` as a backup if `“nunito” or "Roboto Mono"` wouldn’t work.  The `"nunito"` and `“Roboto Mono”` fonts were taken from `Pairfonts`. I chose this combination beacuse for me it looked the most like an old game so I think they complements each other well for this game. 
 
**nunito, for my logo:**
 
![Image that displays how font nunito looks](/assets/images/nunito.png)
 
**Roboto Mono, all other text:**
 
![Image that displays how font Roboto Mono looks](/assets/images/robotomono.png)

 
---
## Existing Features
 
  
### Game Interface  
 
* Beacuse this is a very simplistic game I only have one page for my website. The `"Landing page"` exist of a background image `"A space corridor"` and a `"Wrapper"` for 
all the content of my game. The description `"box"` is contained with a black thin border that has the same rounded edges as the `"Wrapper"`, the difficulty selector is styled 
with black borders as well to capsule each diffuculty `Easy | Medium | Hard`. The `Start game` button is the only `"box"` in the Interface that I have kept square in it's shape, to 
keep it original. The game controlls `"circles"` has all the same round shape to them. 
  
* The `"Wrapper"` creates an eye-catching contrast to grab the user's attention. 

* The `description box` and the `difficulty selector` has a border around it to make it stand out and be easy to read. 
 
![Screenshot of Game Interface](/assets/images/gameinterface1.png)

 
### Footer
 
* The footer includes all the social media links to the relevant social media platform. The links will open in a new tab to not confuse the user. Or open each social media platform application on the device if the user interacts on a mobile device or tablet. The icons for the social media links have been used from `Font Awesome` and they all have the same color 
as the `Wrapper`. 
 
![Screenshot of Footer](/assets/images/footer1.png)

 
### Easy difficulty 

### Medium difficulty 

### Hard difficulty 


---
## Future Features
 
### Learning Points
 
* I'd like to include feedback to the user so they are aware that the information was submitted from the `Contact Form.` I didn't have the knowledge to include a `“Thank you for Submitting”` pop-up or redirect to a new page. But I will include this as soon as I have the knowledge required to do so in the next projects.
 
* I made some mistakes when positioning each element: the text on the first page, the About us page, the Price information, and the `Contact form` on the third page. I used `"absolute"` instead of `“relative”` position which forced me to create a total of `13 Media Screen size breakpoints.` This is a mistake that I will take with me into the next project and improve upon to increase the amount of breakpoints. I will also start with creating the website for my next project on a mobile device first because it's much easier to expand the screen size than increase the screen size as I did with this project, which resulted in a lot of time wasted.
 
* I also learned when git commit a message in `Gitpod` I should have only included what was relevant to that commit. I may have committed a message which included more changes than I added in that exact commit message, not only once but a couple of times. This is something that I will improve in my next project to be more consistent and correct with my commit messages.
 
* The way I structured my `Media Screen size breakpoints` will improve for future projects. When I ran the `W3C CSS Validator` I got a ton of errors because I had included attributes in every `Media queries` even if they were not changed between screen sizes which resulted in `287 parse errors`, but they are all fixed now.
 
ÄNDRA HÄR MED!!
---
## Testing
 
* The interface of the game has been tested across all screen sizes for a responsive experience. The size of the `logo, description box, choose difficulty and the circles` will all 
change size at a break-point of 350px. I tested this in the `Chrome dev tool, so I have not tested it on actual devices`.
 
* I used validators to ensure that my code was correct and up to standard. I did this with the use of `W3C validator` for HTML, `Jigsaw Validator` for CSS and 
`JS Hint` for JavaScript.
 
* I made sure that the website looks good down to a screen size of 278px wide.
 
* All links to external websites open in a new browser.
 
* My difficulty selctor marks the selceted difficulty Easy | Medium | Hard, with a darker green to let the user know what is been selected. 

 
### Devices
Something that's worth mentioning is that I've tested the majority of these devices within `Chrome dev tool`, I have not had physical access to test these devices.
I have tested the responsiveness and aesthetics on the following devices and browsers:

* **Apple**
 * iPhone 5/SE
 * iPhone 6/7/8
 * iPhone 6/7/8 Plus
 * iPhone X/11
 * iPad
 * iPad Pro

* **Android**
 * Samsung Galaxy S8
 * Microsoft Surface Duo
 
* **Google Devices**
 * Google Nest Hub
 * Google Nest Hub Max
 
* **Motorola**
 * Moto G4
 
* **Desktops/laptops**
 * MacBook Pro 13"
 * Lenovo 24" monitor
 
* **Browsers**
 * Chrome 
 * Safari 
 
 
---
### Validator Testing
 
* **HTML-Validator**
 
When testing the website link at [W3C Validator](https://validator.w3.org/) I got these results: 
ÄNDRA HÄR MED!!
**Error 1:**
 
I've got an error for using `h1` element more than in my logo. And this could confuse a screen reader because it will treat it as a `top-level heading.`
 
![Screenshot of first HTML validation error](/assets/images/)
ÄNDRA HÄR MED!!
**Solution:**
 
I changed the `h1` tags to `h2` tags instead.
 
After I corrected the Solution I got a new error:
ÄNDRA HÄR MED!!
**Error 2:**
 
My `action` attribute to my form element has no value.
 
![Screenshot of second HTML validation error](/assets/images/)
ÄNDRA HÄR MED!!
**Solution 2:**
 
I tried to remove the `action` attribute in my HTML without interfering with the experience of the website and it all worked. I also got no errors for my HTML after this when validating the HTML code again.
ÄNDRA HÄR MED!!
**After I applied the HTML solutions:**
 
Here you can take a look at my `Approved` HTML for my [Home Page]().
 
Here you can take a look at my `Approved` HTML for my [About us Page]().
 
Here you can take a look at my `Approved` HTML for my [Get in touch Page]().
 
ÄNDRA HÄR MED!!
* **CSS-Validator** 
 
When testing the website link at [Jigsaw Validator]() I got these results:
ÄNDRA HÄR MED!!
**Error:**
 
`287 Parse errors.` I had written for the font-family: `Open+Sans` and the `“+”` gave me an error for all of them. And I had also set every `Media queries` for all attributes of that `div` not only the attributes that I actually changed. And I also got an error for including too much unnecessary code within each `Media screen size breakpoint`, I did not only include the  parameters that I changed, I also included every each of them including the ones that I didn’t change.
ÄNDRA HÄR MED!!
**Here is a screenshot of my CSS validation error:**
 
![Screenshot of CSS jigsaw validation error](/assets/images/)
ÄNDRA HÄR MED!!
**Here is an example of how i wrote "Open+Sans":**
 
![Screenshot of wrong spelling of font](/assets/images/)
ÄNDRA HÄR MED!!
**Here is an example of how I structured my Media queries at first, which caused this parse error:**
 
![Screenshot of wrong media queries structure](/assets/images/)
ÄNDRA HÄR MED!!
**Solution:**
 
I changed every font to the correct spelling (from `Open+Sans` to `“Open Sans”`) and I also got rid of all unnecessary code in every `Media screen breakpoint` that I had included from the start. So from now on it only holds the changes made for every `13 breakpoints` in my CSS file.
 
ÄNDRA HÄR MED!!
**After I applied the CSS solution:**
Here is a link to my Approved CSS jigsaw [Validator]().
 
ÄNDRA HÄR MED!!
---
### Lighthouse Dev Tool
I used `Chrome lighthouse dev tool` to test the website `performance`. I’ve got an average result of `98,6%` for desktop and `90%` for mobile devices.
ÄNDRA HÄR MED!!
**Home Page (desktop)**
 
![Screenshot home page in ligthouse](/assets/images/)
ÄNDRA HÄR MED!!
**About us Page (desktop)**
 
![Screenshot about us page in lighthouse](/assets/images/)
ÄNDRA HÄR MED!!
**Get in touch Page (desktop)**
 
![Screenshot get in touch page in lighthouse](/assets/images/)
 
ÄNDRA HÄR MED!
**Home Page (mobile)**
 
![Screenshot home page in lighthouse for mobile](/assets/images/)
ÄNDRA HÄR MED!!
**About us (mobile)**
 
![Screenshot home page in lighthouse for mobile](/assets/images/)
ÄNDRA HÄR MED!!
**Get in touch (mobile)**
 
![Screenshot home page in lighthouse for mobile]()
 
ÄNDRA HÄR MED!!
---
### Wave Page
 
Each page has been tested through wave.webaim.org for accessibility.
 
* You can look at the results [here]().
 
ÄNDRA HÄR MED!!
---
## Fixed Bugs
 
I validated my CSS and found `287 parse errors`. This was because I had written `Open+Sans` instead of `“Open Sans”`. As a result of the `287 parse errors`, I realized that I was inefficient with my CSS and refactored the `Media Queries` to only include code that had been changed.
 
When I was running `Wave Page` I got `6 label errors` for my contact form. This was caused because I had written my HTML for the contact form in the wrong way without `correct labels`. I corrected this by correcting my HTML code for the contact form, with a correct `label` for each input field.
 
* Here you can take a look at before and after screenshot of my `HTML` contact form:
ÄNDRA HÄR MED!!
**Before:**
 
![Screenshot wrong html contact form]()
ÄNDRA HÄR MED!!
**After:**
 
![Screenshot correct html contact form]()
 
ÄNDRA HÄR MED!!
---
## Unfixed Bugs
 
When a user visits the website on an `Apple` mobile or tablet device with an older `iOS update` than `iOS 15`. They might not view the `“About us”` page call to action button that directs users to the contact form at the `“Get in touch”` page the same as on a desktop and other mobile devices. The `call to action button` should be within the `Text Overlay` that contains the `About us` information, and the same for the `submit` button on `Get in touch` page. This could as well happen on some `Android` mobile devices, but as I wrote earlier I don't have access to test this on these devices.
 
I also discovered that when I clicked the link for my Wave Page on my Apple iPhone 11 in the `Wave Page` section in this Readme, I got 1 `contrast` error for the `About us` and `Get in touch` page. But this is only when I click the link from my iPhone, not when I do the same procedure on my desktop. I tried if I changed the screen size of my Chrome browser window on my MacBook (desktop) to see if that gave the same `contrast issue` as on my `iPhone 11` but it didn't even if I refreshed the page a couple of times to test. This could of course be the same on a `Android` mobile device. 
 
When I searched for a `solution` to these `"defects/errors"` on the Internet I couldn’t figure out what caused this so I decided that I will leave it as `unfixed bugs`, and I will try my best to solve this issue later in my career when I have more knowledge in Software development.
ÄNDRA HÄR MED!!
**Here is a screenshot of the contrast error I got when I looked at Wave Page on my iPhone 11:**
 
About us:
 
![Screenshot on iPhone 11 at Wave Page, About us]()
ÄNDRA HÄR MED!!
Get in touch:
 
![Screenshot on iPhone 11 at Wave Page, Get in touch]()
ÄNDRA HÄR MED!!
**Here is a screenshot with the same screen size dimensions (1,792 x 828 pixels) as my iPhone 11 but when I looked at Wave Page on my desktop (MacBook Pro):**
 
About us:
 
![Screenshot on desktop at Wave Page, About us]()
ÄNDRA HÄR MED!!
Get in touch:
 
![Screenshot on desktop at Wave Page, Get in touch]()
 
ÄNDRA HÄR MED!!
---
## Deployment
 
### Creating My Website
 
When I created this website I used the `Code Institute Gitpod Full Template`.
 
I frequently used `commit` throughout the whole project, this is the commands used in the terminal: 
 
`git add .` (This command is used for adding files to the staging area before committing).
 
`git commit -m “commit message here..”` (This is used to label the commit changes made to the local repository).
 
`git push` (This command is used to push all changes to the Github repository).
 
This is all done to prevent any `data` loss in case Gitpod crashes.
 

---
## GitHub Pages
 
* The site was deployed to GitHub pages. The steps to deploy are as follows:
 
1. Log in to Github and locate the Github `Repository`.
1. In the Github repository, navigate to the `settings` tab.
1. In the menu to the left, you will find `Pages` almost at the bottom of the list.
1. Under `“Source”`, click the dropdown menu called `“None”` and select `“Main”`.
1. Click `save` and the page will automatically refresh with the website link displayed.
1. The published `link` will show up above. Alternatively, click this [link](https://erikandersson96.github.io/portfolio-project-two/).
(Link opens in a new tab). 
 

---
## Credits 

### Inspiration for this project 

The inspiration for my Simon Game JavaScript code was taken from this [tutorial](https://freshman.tech/simon-game/), beacuse my knowledge for JavaScript is very low and for me to create 
a game like Simon Game as my first ever project in JavaScript out of only what I knew when starting out with my Portfolio Project Two was to big of a task. So therefore I chose 
together with my mentor `Benjamin Kavanagh` to follow that guide as support but to use my own words and create my own version of it, which I ended up with Erik game. Instead of 
doing a `"regular"` Simon Game as the original I created a reverse version with the goal to not press the same color sequence as the computer in order for the user to win.
The code that I have that is still the same as in the tutorial is `resetGame function()`, `humanTurn function()`, `activateTile function()`, `playRound function()`, 
`nextStep function()`, `nextRound function()`, `startGame function()`, `startBtn event listener`. 
Here is also a live version of Freshmans Simon Game [link](https://freshman-simon.surge.sh/). (Links opens in a new tab). 
I will compare the guide's code to my code down below with both text and images: 

#### Tutorial - Freshman Simon Game

**Freshman JavaScript Code:** 

ResetGame function(). 

![Screenshot of Freshman js code](assets/images/freshmancode1.png) 

HumanTurn function(), ActivateTile function(), PlayRound function(). 

![Screenshot of Freshman js code](assets/images/freshmancode2.png) 

NextStep function(), NextRound function().

![Screenshot of Freshman js code](assets/images/freshmancode3.png) 

StartGame function(), StartButton event listener. 

![Screenshot of Freshman js code](assets/images/freshmancode4.png)

**Freshman Final product:**

Start page, Freshman Simon Game. 

![Screenshot of Freshman final product](assets/images/freshmancomplete1.png) 

Game interface, Freshman Simon Game. 

![Screenshot of Freshman final product](assets/images/freshmancomplete2.png)

Reset game, Freshman Simon Game. 

![Screenshot of Freshman final product](assets/images/freshmancomplete3.png) 

You won the game, Freshman Simon Game. 

![Screenshot of Freshman final product](assets/images/freshmancomplete3.png)


#### My project - Erik game

**JavaScript Code:** 

Reset game function(). 

![Screenshot of Erik game JavaScript code](assets/images/erikcode1.png)

Human turn function(). Name in my code: userTurn., 
Activate tile function(). Name in my code: activateCircle., 
Play round function(). Name in my code: playPattern. 

![Screenshot of Erik game JavaScript code](assets/images/erikcode2.png)

NextStep function(). Name in my code: nextPhase.

![Screenshot of Erik game JavaScript code](assets/images/erikcode3.png) 

NextRound function(). Name in my code: nextTurn. 

![Screenshot of Erik game JavaScript code](assets/images/erikcode4.png)

StartGame function(). 

![Screenshot of Erik game JavaScript code](assets/images/erikcode5.png) 

StartButton event listener. Name in my code: startBtn.

![Screenshot of Erik game JavaScript code](assets/images/erikcode6.png) 

**Final product:**

Start page, Erik game. 

![Screenshot of Erik game final product](assets/images/erikgamestart.png)

Game interface, Erik game. 

![Screenshot of Erik game final product](assets/images/erikgameinterface1.png)

Reset game, Erik game. 
The alert message for reset game works the same as in Freshman Simon Game. 

![Screenshot of Erik game final product](assets/images/erikgamereset.png) 

You won the game! Erik game.  
The alert message for you won the game works the same as in Freshman Simon Game.

![Screenshot of Erik game final product](assets/images/erikgamewon.png) 


#### Styling for radio buttons

* The inspiration for my radio buttons, `Easy | Medium | Hard` has been taken from [this](https://codepen.io/skeddles/pen/PbROLK) codepen link
that I found from this article [link](https://freefrontend.com/css-radio-buttons/) (both links opens in a new tab). 

**Image inspiration:** 

![Screenshot of css inspiration for radio buttons](assets/images/cssinspo.png)

**My radio buttons:** 

![Screenshot of my radio buttons](assets/images/radiobtns1.png)


### Content

**Styling**
* The `Wrapper` inspiration was taken from `Benjamin Kavanagh - my mentor` and his second project, you can check it out [here](https://bak2k3.github.io/covid-dashboard/index.html).
* The design of the `Difficulty selector/Radio buttons` was taken as inspiration from this [project](https://codepen.io/skeddles/pen/PbROLK) but with my own styling and naming to the HTML and CSS elements. (Link opens in a new tab).
* The inspiration for the styling of the `Circles` was taken from [this](https://www.freecodecamp.org/news/css-shapes-explained-how-to-draw-a-circle-triangle-and-more-using-pure-css/) article. (Link opens in a new tab).  
* The `footer` with the icons for the different social media was taken from [Font Awesome](https://fontawesome.com/) (link opens in a new tab).
* The fonts were taken from [Pair Fonts](https://pairfonts.com/) (link opens in a new tab). 


### Media
 
* The Background Image (Hero image) was taken from [Pixa bay](https://pixabay.com/) (link opens in a new tab).

**Background image:**
 
* Image taken from [Pixa bay](https://pixabay.com/sv/photos/tunnel-korridor-plats-yttre-rymden-3233082/) (link). 
If you click the link you can see how it looks like at Pixa bay (link opens in a new tab). 
 
![Background image](/assets/images/background-image.jpg)
 

---
## Support
 
I would like to give an extra `Thank you` to all the kind people I have around me that gave me support in all different ways.
 
* **Code Institute** for their **Tutor** support.
* My mentor [Benjamin Kavanagh](https://github.com/BAK2K3) (link opens in a new tab) for being a Superior mentor.
* **Google** for always clear things up.
* My lovely **Girlfriend** for always supporting me.
 
ÄNDRA HÄR MED!!
#### RETURN TO THE [TOP](#erik-game) 