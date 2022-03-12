# Erik game (Color game) 
 
A website for people to play a version of the famous Simon Game. But this game is called Erik game. Instead of trying to match the computer color sequence, the user must hit a different color sequence. For each level the computer will increase one more color to the sequence and the game will continue for as long as the user doesn't press the same sequence as the computer. 

**Remember that all links in this Readme does not open in a new tab. They open in the same window.**
 
To play the game you can click this [link](https://erikandersson96.github.io/portfolio-project-two/). 


![Am I Responsive, to show the website on different screen sizes](/assets/images/responsive.png)
 
 
---
## Portfolio Project Two 
 
---
### Intention
 
This website is a `fictional website` for the purpose of my Second Portfolio Project for Code Institute’s Full Stack Software Development Course. I created this website with the knowledge I gained from the `HTML`, `CSS`, and `JavaScript` modules. 

The main goal of this project was to test my new knowledge of JavaScript. I decided to create my own version of the famous Simon Game, but with a twist. I reversed the logic of the game so the player needs to play his/her own sequence in order to win over the computer.
 
* Features I aimed to achieve with this project:
 
* To make the game `easy` to understand.
* Create a game with an old-style interface `(Trying to take the user back to the '90s)`.
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
  * [Flow diagram](#flow-diagram)
 
* [Website Design](#website-design)
  * [Color Scheme](#color-scheme)
  * [Fonts](#fonts)
 
* [Existing Features](#existing-features)
  * [Game Interface](#game-interface)
  * [Difficulty Selector](#difficulty-selector)
  * [Easy Difficulty](#easy-difficulty)
  * [Medium Difficulty](#medium-difficulty)
  * [Hard Difficulty](#hard-difficulty) 
  * [Footer](#footer)
 
* [Future Features](#future-features)
  
* [Learning Points](#learning-points)

* [Testing](#testing)
  * [General Testing](#general-testing)
  * [Device Testing](#device-testing)
  * [Validation](#validation)
  * [Accessibility](#accessibility)
  * [User Story Testing](#user-story-testing)
  * [Feature Testing](#feature-testing)
 
* [Fixed Bugs](#fixed-bugs)

* [Unfixed Bugs](#unfixed-bugs)

* [Deployment](#deployment)
 
* [GitHub Pages](#github-pages) 
  * [Forking](#forking)
  * [Cloning](#cloning)

* [Credits](#credits) 
  * [Code-JavaScript](#code-javascript)
  * [Styling-CSS](#styling-css) 

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
 
* First `11 images` is from the first visual idea for my project. As you will recognize from comparing my wireframes to the final product, you will see that my final product doesn't look like my wireframes at all. That has to do with a lot of different reasons that I will explain underneath all images. The wireframes were created using [Balsamiq - Balsamiq Wireframes](https://balsamiq.com/). 
* Second row containing `5 images` is from the final product of the website. To give you a comparison.

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

![Screenshot of landing page](/assets/images/land.png)

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
* As you can see, I choose to only display the game on the "Landing page". Because my game only exists on one page, at first I didn't really understand the principle of DOM so I thought that I would create one HTML page for each "function" of the game. Like creating one Landing page that displayed some information about the game and a button that would take the user to the next page(HTML file) which would have been game-level(User name) with the choice of three difficulty levels and a Play button. After that a page with the correlated game interface (Easy, Medium, or Hard) and so on as you can see in my wireframes. But I quickly realized that if I instead used the DOM I could keep everything within one HTML file. I will display with images my first repository and each HTML file that I created before I choose to create this repository and work with DOM instead. Worth mentioning is that this first repository never had finished CSS so the styling is not what is important, I just want to give you as a reader a better understanding of how complex things could have been for me if I didn't go with using the DOM. 
 
Using Game Interface of circles instead of pieces like the wireframes: 
* I also choose to go with `another` style of my buttons for the game. Instead of using pieces like in the wireframe and in the original Simon Game, I chose to go with four circles. This was because I felt that I am not too comfortable with my CSS skills to experiment with styles like that, maybe in the future.   
 
* In the footer I chose to only use social media links like `My own Github, Instagram, Youtube`. I felt that it looked cleaner to only have Social media platforms here instead of credits.
 
* Lastly, I decided to go with a simple design that had a look of an old game, so therefore I didn't experiment too much with the design of my final product. I wanted the game to be straightforward so the user could understand the game fast and start playing. 

#### Images of first repository **(without using DOM):** 

**HTML files.**

Index file. (Landing page)

![Screenshot of index file](/assets/images/firstindex.png) 

Select difficulty file. `Easy | Medium | Hard`. 

![Screenshot of difficulty file](/assets/images/firstselector.png) 

Easy interface file. Four color circles and one in the middle that was supposed to be a `Start game` button. 

![Screenshot of easy interface file](/assets/images/first-easy.png)

Medium interface file. Six color circles and the `Start game` button in the middle. 

![Screenshot of medium interface file](/assets/images/first-medium.png) 

Hard interface file. Eight color circles and the `Start game` button in the middle.

![Screenshot of hard interface file](/assets/images/first-hard.png) 

**Interface - users perspective. First repository (without using DOM):**

Landing page. 

![Screenshot of landing page](/assets/images/first-landing2.png) 

Choose difficulty. `Easy | Medium | Hard`.

![Screenshot of choose difficulty](/assets/images/select2.png) 

Easy Interface. Four color circles and a white `Start game` button. 

![Screenshot of easy interface](/assets/images/easy2.png) 

Medium Interface. Six color circles and a white `Start game` button.

![Screenshot of medium interface](/assets/images/m2.png) 

Hard Interface. Eight color circles and a white `Start game` button.

![Screenshot of hard interface](/assets/images/first-hard1.png) 


## Flow diagram 

* Before I started my project my mentor [Ben](https://github.com/BAK2K3) wanted me to do a `Flow diagram` there I tried to display how my JavaScript logic would work. 
So I followed his advice and created a `Flow diagram` with [Lucid chart](https://www.lucidchart.com/pages/). When I created my `Flow diagram` I had not started with my JavaScript for my 
project yet, so there will be some differences between the `Flow diagram` and my final JavaCript code. But my `Flow diagram` would at least give you as a reader an idea of 
how the JavaScript logic works. I will both display my `Flow diagram` underneath but also give you some pointers to what is different with my JavaScript code: 

**Flow diagram:** 

![Screenshot of flow diagram](/assets/images/flowdiagram.png) 

**Differences:** 

* In the flow diagram I first thought I would create a direct replica of Simon Game so my logic in the `Flow diagram` tells you that `"User try to match sequence"` as in the original 
Simon Game but in my final product `Erik game` the user is not supposed to match the color sequence of the computer in order to win. 

* The User interface (UI) says that `Easy` should have 4 different colors, `Medium` should have 6 different colors and `Hard` would have 8 different colors. But in `Erik game` the 
user interface looks a little bit different with `Easy` that has 5 different colors, `Medium` has 4 different colors and `Hard` has 3 different colors. 

* The condition that checks if the user's input is either `true` or `false` would in this case be `false` it would trigger a message with `"Game over, play again!"`. In `Erik game` the logic is created this way that the condition checks each round if it is `true or false` for the color sequence, and if it is `false (the user has pressed the same color)` the user will get an message above the colors that he/she have lost the game and can press `Start game` to play again. 


---
## Website Design
 
Logo design - Because this website was created with the intention to keep it clean and simple. I decided to go with only `“Erik game”`. Because I thought it gave the game a simple and clean look.
 
Background Image - I downloaded this image from `pixabay.com` which is a website with free images. And I used a `black background color` to it in case the image wouldn't load.

`Wrapper` - I chose a `"Wrapper"` to contain the game and all other text on the page to let the Game stand out from the background image and make it look better.

Website Colors - I went for a lighter green with almost a little neon effect to my Wrapper, difficulty selector and footer (social media links), because I thought it was a nice contrast to my background-image that has green "neon" stripes in it. For my difficulty selector I used a dark green for when the User has selected a difficulty. For my description box (description of the game) and Start game button I chose a little darker green to let it `Stand out` from the Wrapper. For my game controlls (circles) I chose Green, Blue, Yellow and Red beacuse I think it looks the best. 
  

### Color Scheme
 
* I went for eight different colors for the website. `Light neon green` for the `Wrapper, difficulty selector and social media links`, little darker green for the `description box and the "Start game" button`, black for all `text`, dark green for the selected `difficulty` and my circles has `green, blue, yellow, red, orange`.
 
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

**Orange - color (Default color)** 

![A box with the color of my middle circle](/assets/images/orange.png)


### Fonts
 
* I used two different fonts for the website. `"nunito"` for my `logo` and `“Roboto Mono”` for all other text with `sans-serif` as a backup if `“nunito” or "Roboto Mono"` wouldn’t work.  The `"nunito"` and `“Roboto Mono”` fonts were taken from `Pairfonts`. I chose this combination because for me it looked the most like an old game so I think they complements each other well for this game. 
 
**nunito, for my logo:**
 
![Image that displays how font nunito looks](/assets/images/nunito.png)
 
**Roboto Mono, all other text:**
 
![Image that displays how font Roboto Mono looks](/assets/images/robotomono.png)

 
---
## Existing Features
 

### Game Interface  
 
* Because this is a very simplistic game I only have one page for my website. The `"Landing page"` exist of a background image `"A space corridor"` and a `"Wrapper"` for 
all the content of my game. The description `"box"` is contained with a black thin border that has the same rounded edges as the `"Wrapper"`, the difficulty selector is styled 
with black borders as well to capsule each diffuculty `Easy | Medium | Hard`. The `Start game` button is the only `"box"` in the Interface that I have kept square in it's shape, to 
keep it original. The game controlls `"circles"` has all the same round shape to them. 
  
* The `"Wrapper"` creates an eye-catching contrast to grab the user's attention. 

* The `description box` and the `difficulty selector` has a border around it to make it stand out and be easy to read. 
 
![Screenshot of Game Interface](/assets/images/gameinterface1.png) 


### Difficulty Selector

* To choose difficulty for the game the user needs to choose one of `Easy | Medium | Hard`. 

![Screenshot of difficulty selector](/assets/images/easymediumhard.png)
 
### Easy Difficulty 

* When the user press `Easy` in the difficulty selector the JavaScript checks in radioButtons function if the current difficulty is the same as the `Easy` button 
radio class name, so the right game interface displays for `Easy` difficulty. 

![Screenshot of Easy Interface](/assets/images/erikgameinterface1.png)

### Medium Difficulty 

* When the user press `Medium` in the difficulty selector the JavaScript checks in radioButtons function if the current difficulty is the same as the `Medium` button 
radio class name, so the right game interface displays for `Medium` difficulty.

![Screenshot of Medium Interface](/assets/images/erikgameinterface3.png)

### Hard Difficulty 

* When the user press `Hard` in the difficulty selector the JavaScript checks in radioButtons function if the current difficulty is the same as the `Hard` button 
radio class name, so the right game interface displays for `Hard` difficulty.

![Screenshot of Hard Interface](/assets/images/erikgameinterface2.png)


### Footer
 
* The footer includes all the social media links to the relevant social media platform. The links will open in a new tab to not confuse the user. Or open each social media platform application on the device if the user interacts on a mobile device or tablet. The icons for the social media links have been used from `Font Awesome` and they all have the same color 
as the `Wrapper`. 

* The footer also has an hover effect to it for when the user hover's over each social media link. The color of the link shifts from the green color to black. 
 
![Screenshot of Footer](/assets/images/footer1.png) 


--- 
## Future Features


* Be able to add a leadership board/scoreboard to the game in the future. So the user's could see how good they have performed comapare to their friends. 

* Add some sort of sound or other effects when the user plays the game. 


---
## Learning Points


* I learned when testing my website in `Wave page` that you are not supposed to have an `h3 heading` following an `h1` if you haven't used any `h2` in between because it is `bad habbit` at least would I could read when I got the alert message with `Wave page` and istead apply styling to it in CSS to get the right font-size. I also learned in `Wave page` that when using `Radio buttons` 
as I have in Erik game, it is good practise to use `fieldset and legend` for my `input and label elements` within my html index file beacuse it is more userfriendly for screen readers. So I fixed this and applied some styling to my `fieldset and legend` to hide it in my User interface. 

* I learned when testing my website in HTML validation that I wasn't allowed to use a `div` as a child element to a `label` (radio buttons), I had did it for my `<span>`  element in my label so 
I just removed the div and added it's `class` to the `<span>` element instead. 


--- 
## Testing


### General Testing

* The interface of the game has been tested across all screen sizes for a responsive experience. The size of the `logo, description box, choose difficulty and the circles` will all 
change size at a break-point of 350px. I tested this in the `Chrome dev tool, so I have not tested it on actual devices`.
 
* I used validators to ensure that my code was correct and up to standard. I did this with the use of `W3C validator` for HTML, `Jigsaw Validator` for CSS and 
`JS Hint` for JavaScript.
 
* I made sure that the website looks good down to a screen size of 278px wide.
 
* All links to external websites open in a new browser.
 
* My difficulty selctor marks the selceted difficulty Easy | Medium | Hard, with a darker green to let the user know what is been selected. 

 
### Device Testing

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


### Validation
 

#### HTML-Validator
 
When testing the website link at [W3C Validator](https://validator.w3.org/) I got 2 errors, I will show them here: 

**Error 1:**
 
I've got an error for using a `div` element as a child of my `label` element. 
 
![Screenshot of first HTML validation error](/assets/images/htmlvalidation1.png)

**Solution:**
 
I deleted the `div` beacuse it was just unnecessary. Beginner misstake. 

**Error 2:**
 
Empty heading, beacuse I let my `h3` heading be empty between it's opening and closing tags.
 
![Screenshot of second HTML validation error](/assets/images/htmlvalidation2.png)

**Solution 2:**
 
I deleted my `h3` heading and added a `div` instead with the same class as my `h3` had. I actualy got more satisfied with this solution not only beacuse of the validation 
but beacuse then the level counter isn't displayed before the game starts, just the way I wanted it to be to start with but forgot to change. 

**After I applied the HTML solutions:**
 
Here you can take a look at my `Approved` HTML validation for my [Erik game](https://validator.w3.org/nu/?doc=https%3A%2F%2Ferikandersson96.github.io%2Fportfolio-project-two%2F). 


#### CSS-Validator 
 
When testing the website link at [Jigsaw Validator](https://jigsaw.w3.org/css-validator/validator.html.en) I got these results:

**Congratulations! No error found.**

Here is a link to my Approved CSS jigsaw [Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ferikandersson96.github.io%2Fportfolio-project-two%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).  


#### JS-Hint

When testing my JavaScript code in [JS hint](https://jshint.com/) I got this result: 

![Screenshot of result from JS hint](/assets/images/jshint.png) 

I have considered that message and I do not believe it requires fixing as it only relates to semantics and I think my code is well commented. 
Other then that message I got no errors. 


### Accessibility 


#### Lighthouse - dev tool

I used `Chrome lighthouse dev tool` to test the website `performance`. I’ve got an average result of `93%` for desktop and `93%` for mobile devices in a normal chrome browser window, but when I tested `Chrome lighthouse dev tool` in a chrome inkognito window I got an average result of `100%` for desktop and `99,75%` for mobile devices.

**Desktop in normal chrome window:**
 
![Screenshot home page in ligthouse](/assets/images/lightdesktop2.png)
 
**Mobile in normal chrome window:**
 
![Screenshot home page in lighthouse for mobile](/assets/images/lightmobile2.png)

**Desktop in chrome inkognito window:** 

![Screenshot home page in ligthouse, inkognito window](/assets/images/lightdesktop3.png)

**Mobile in chrome inkognito window:** 

![Screenshot home page in ligthouse, inkognito window](/assets/images/lightmobile3.png)

 
#### Wave Page
 
* Erik game has been tested through [wave.webaim.org](https://wave.webaim.org/) for accessibility.
 
You can look at the approved result [here](https://wave.webaim.org/report#/https://erikandersson96.github.io/portfolio-project-two/).

* When I tested my webpage first I got 2 alerts. 

**First alert.** 

I got this because I hadn't added a `fieldset` or `legend` for my `Radio Buttons` in my index file. When I googled this I found that I should use it in consideration for `screen readers`. 
So I added it but then I didn't like the look of a border and a legend around my radio buttons so I applied some CSS to hide them. 

**Second alert.**

I got this because I had used a `h3` element for my `"Choose difficulty level"` above my `Radio Buttons`, and after some googling I understood that I should use an 
`h2` instead beacuse my logo is `h1` and this was the second heading level for my index file structure. So I changed to an `h2` and styled it with css to have 
the correct size and font. 


### User Story Testing 


* To meet the expectations in the user stories. I have tested the website for each of them. 

**Goal**
* A user's perspective: I want to easily understand the purpose of the website. 

**Result** 
* By only displaying the game right away the user can fast and easy understand the purpose of this website as well start to play the game.  

**Goal**
* A user's perspective: I want to easily understand how to play the game. 

**Result**
* The interface of Erik game displays a straight forward look with both a description of the game and setup that is ready to be played right away.

**Goal**
* A user's perspective: I want the website to offer a clean interface.

**Result**
* The game offers a stand out look to capture the attention of the user. The game also offers clear instructions and is ready to be played with very few button presses. 


### Feature Testing 


* When I tested my game after I was satisfyed with the looks an everything, I noticed that there was some defects in my game that I had to fix. 
I will list them underneath: 

* When I played the game I was able to register a click (on a color) even if I didn't press a specific color. The whole area for the colors `the div` was acting as a color press. So therfore I had to change my gameInterface event listener to not listen for my div element as before but to listen for `data-circle` that is representing each of the colors 

* When I played the game I also was able to click more times then the sequence was supposed to, so say that the sequence was 5 clicks I was able to click 8 of 5 colors. So therfore I had to add an if(usersTurn) in manageClick function so the game only allows the user to press a color until the number of clicks is met for each level.  

* After I had tested the game for a while I realized that an alert message for my `game over` and `you have won` messages wasn't the best solution. So I decided to change my JavaScript file for resetGame function to instead showing these messages on the same row that the other instruction text in the game was displayed. But when I did this change I was left with a new problem, my message for `You won!` wasn't dispalyed were `Game over` now is displayed in fact it wasn't displayed anywhere. So to not confuse the user to much or needing to rewrite to much JavaScript I decided to not have any higher complete level as 10 of 10 to win the game. Initially, the game had 10 rounds, however following user feedback the decision was made to remove the round limit, so as to allow users to compete for higher scores, and to challenge themselves as the game progressively becomes more difficult. 

**With alert message:** 

![Screenshot of alert message](/assets/images/erikgamereset.png) 

**Now without alert message:**

![Screenshot of game over message](/assets/images/gameover.png) 


---
## Fixed Bugs
 
* When I first completed my JavaScript code and was satisfied with my styling I tested Erik game a couple of times both on desktop but also on a mobile device. 
After a while I got to the conclusion that when playing in `Hard` difficulty (2 colors) It could quickly become impossible to win over the computer, beacuse if the computer 
had flashed first `yellow` and secondly `green` the user wouldn't have any option to start. This was because the user can't start with pressing the same color as the computer started or finsih with otherwise the user would lose. So to prevent this I had to come up with a solution. So I added one more color of `orange` to `Easy` in the middle that will be hidden in 
`Medium and Hard` difficulty. So `Medium` got 4 `colors` instead and `Hard` got 3 `colors`. The solution I applied is this: 

**Bugg before:** 

![Screenshot hard interface before (only 2 colors)](/assets/images/hardbefore.png) 


**Solution:** 

![Screenshot hard interface now (3 colors)](/assets/images/erikgameinterface2.png)


**Footer** 

* My footer wasn't in the center of the screen because I had mistakenly not added the correct `padding-left` attribute to my `social-media-links` in my CSS. But now it is fixed. 
Here is an comparison of the footer before and after I fixed it, notice that Instagram icon is not in the middle of yellow and red circle: 

Before: 

![Screenshot of footer not in center](/assets/images/notinmiddle.png) 

After: 

![Screenshot of footer in the center](/assets/images/land.png)


---
## Unfixed Bugs
 

* When I first deployed `Erik game` I sent the link for the game to my friends so they could test it and then give me some input. What one of them experienced was that he wasn't able 
to reach my game in `Opera GX` browser (desktop). I have only tested my game in `Safari and chrome` (both desktop and mobile) with no issues so I don't know why this bug exist with some 
browsers so I will leave it as an `Unfixed bug` and try to improve that over time with my increased knowledge.  

* When playing the game, if the user lose the game and press `Start game` to restart the game and to play again, the game might break. I have noticed when playing the game that when I press `Start game` after I have lost, the counter that counts number of clicks for each level have sometimes not be working correct, so let say I am restarting the game after I lost the game at level 5 the game restarts properly to level 1 but when it is my turn to press my opposite sequence the press counter records my first press as number 5 etc. And espacially if the user maybe try to change difficulty when already started the game at a certain difficulty. So the game will break and only let me as a user to press as many times I want and it will never start the computers sequence. The user has to refresh the page if this happens. I don't know what is causing this bugs, so therfore I will leave them as bugs and remember it for future projects to improve on. 


---
## Deployment
 
 
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
 

### Forking 

Forking a Github repository is the process of making a copy of someone else repository and add your own changes to it without changing the original, the original repository is known 
as "upstream repository". I will explain the process of forking down below: 

1. Go to the Github page that hosts the repository you wish to fork. 
1. In the top-right corner of the page there is a button that says `"Fork"`. 
1. Click this button. 
1. This creates a copy of that repository to your Github home page. You can submit and receive changes to your copy by using pull requests and/or syncing with the original upstream repository. 

This instructions were taken from [Github - Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo). 

### Cloning 

Cloning a repository inolves making a full copy of a repository on your local machine. This allows you to work on the code easier. Changes can be pushed back up to the Github site or changes from other sources pulled to your local copy. I will explain how to clone down below: 

1. Go to the repository page on Github. 
1. Above the file list click on the green button that says `"Code"`. 
1. You can choose to download a zip file of the repository, to unpack it on your local machine and open it in your IDE. 
1. Clone using HTTPS by copying the URL under the HTTPS tab. 
1. Open a terminal window, set current directory to the one you want to contain the clone from. 
1. Type `git clone` and paste the URL copied from the Github page. 
1. The repository clone will now be created on your machine. 

This instructions were taken from [Github - cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). 


---
## Credits 

### Code-JavaScript

* The inspiration for my Simon Game JavaScript code was taken from this [tutorial](https://freshman.tech/simon-game/), because my knowledge for JavaScript was very low and for me to create 
a game like Simon Game as my first ever project in JavaScript out of only what I knew when starting out with my Portfolio Project Two was to big of a task. So therefore I chose 
together with my mentor `Benjamin Kavanagh` to follow that guide as support but to use my own words and create my own version of it, which I ended up with Erik game. 
I have added comments above my JavaScript code so that it clarifies my code vs the tutorial.   


### Styling-CSS

* Hide buttons when clicked. This css styling were taken as inspiration from [Freshman Simon Game](https://jsfiddle.net/ayoisaiah/Lxwhder6/20/). 

* The inspiration for my radio buttons, `Easy | Medium | Hard` has been taken from [this](https://codepen.io/skeddles/pen/PbROLK) codepen link
that I found from this [article](https://freefrontend.com/css-radio-buttons/). But with my own styling and naming to the HTML and CSS elements. 

* The CSS for my `wrapper` was inspired from [stackoverflow](https://stackoverflow.com/questions/5275410/what-is-the-correct-way-to-do-a-css-wrapper). The inspiartion for the 
`User interface` of the `wrapper` was initial taken from `Benjamin Kavanagh - my mentor` and his second project, you can check it out [here](https://bak2k3.github.io/covid-dashboard/index.html). 

* The inspiration for the styling of the `Circles` was taken from this [article](https://www.freecodecamp.org/news/css-shapes-explained-how-to-draw-a-circle-triangle-and-more-using-pure-css/).   


---
## Content


### Media
 
* The Background Image (Hero image) was taken from [Pixa bay](https://pixabay.com/).

**Background image:**
 
* Image taken from [Pixa bay](https://pixabay.com/sv/photos/tunnel-korridor-plats-yttre-rymden-3233082/). 
If you click the link you can see how it looks like at Pixa bay. 
 
![Background image](/assets/images/background-image.jpg)

**Footer** 

* The `footer` with the icons for the different social media links was taken from [Font Awesome](https://fontawesome.com/). 

**Fonts** 

* The fonts were taken from [Pair Fonts](https://pairfonts.com/). 


---
## Support
 
I would like to give an extra `Thank you` to all the kind people I have around me that gave me support in all different ways.
 
* **Code Institute** for their **Tutor** support.
* My mentor [Benjamin Kavanagh](https://github.com/BAK2K3) (link opens in a new tab) for being a Superior mentor.
* **Google** for always clear things up.
* My lovely **Girlfriend** for always supporting and believing in me.
 

#### RETURN TO THE [TOP](#erik-game-color-game) 