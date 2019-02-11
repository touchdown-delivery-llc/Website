/**
 * Filename: paging.js
 * Company: Touchdown Delivery, LLC
 * Author: Darien Tsai
 * Collaborators: none
 * Date Created: 12/17/18
 * Description: 
 * Manages the transition between the index page and all the others
 */

 //select body
let body = document.getElementsByTagName('body')[0];

//Index page links
let mobileNavs = document.getElementsByClassName('m-nav-item')
let staticNavs = document.getElementsByClassName('nav-item');
let navButton = document.getElementById('head-button');
let footNavs = document.getElementsByClassName('f-nav-item');

//set listeners for mobile navs
for( var i = 0; i < mobileNavs.length; i += 1){
  mobileNavs[i].addEventListener(
    'click',
    function(e){
      transition(e);
    }
  );
}

//set listeners for static navs
for( var i = 0; i < staticNavs.length; i += 1){
  staticNavs[i].addEventListener(
    'click',
    function(e){
      transition(e);
    }
  );
}

//set listener for button
navButton.addEventListener(
  'click',
  function(e){
    transition(e);
  }
);

//set listeners for foot navs
for( var i = 0; i < footNavs.length; i += 1){
  footNavs[i].addEventListener(
    'click',
    function(e){
      transition(e);
    }
  );
}

/**
 * 
 * @param e the target object
 */
function transition(e){
    //gets the uri
    var link = String(e.target.attributes[0].value);

    //sets the body class to transition class
    body.className = "transition";

    //switches page after animation
    setTimeout(
      function(){
        location.assign(link);
      },
      300
    );
}