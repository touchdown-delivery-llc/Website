/**
 * Filename: newsContent.js
 * Company: Touchdown Delivery, LLC
 * Author: Darien Tsai
 * Collaborators: None
 * Date Created: 11/29/18
 * Description: 
 * Handles switching between logs and actual content
 */

//get the elements that will switch
let logContainer = document.getElementById('updates');
let header = document.getElementsByTagName('header')[0];
let contentContainer = document.getElementById('content');
let appendTo = document.getElementById('append');
let back = document.getElementById('back');
let foot = document.getElementsByTagName('footer')[0];

//array of updates
let logs = document.getElementsByClassName('log');

/**
 * switches logs to actual, cooresponding content
 * 
 * @param idx the index the logclicked
 */
function switcher( idx ){
  //calls display to handle choosing the data,
  //gets index starting from last index, subtracting log index.
  display(entries[entries.length - 1 - idx]);

  //this is the part where JSON comes in
  logContainer.className = "off";
  contentContainer.className = "on";
  header.className = "hide";
  foot.className = "";
}

//TODO implement JSON matching and parsing
/**
 * loads the entry data into the append container
 * 
 * @param obj the json object with all the entry data 
 */
function display( obj ){
  //the actual first character of any stringified data from obj
  var first = 1;

  //get data as strings from obj
  var title = JSON.stringify(obj.title);
  var pub = JSON.stringify(obj.pub);
  var date = JSON.stringify(obj.date);

  //title string into as article title
  var titleStr = "<h1 class=\"content-title\">" +
       title.substring(first, title.length - 1) +
                                         "</h1>";

  //publishing string into article info
  var publishStr = "<p class=\"content-sub\">" +
          pub.substring(first, pub.length - 1) +
                                         " - " +
        date.substring(first, date.length - 1) +
                                        "</p>";

  //thumbnail string into article image
  var imgStr = "<img src=" + JSON.stringify(obj.thumbnail) +
                                  " class=\"content-img\">";

  //content array into a string of paragraphs
  var contentStr = "";
  for(var i = 0; i < obj.contents.length; i += 1){
    var content = JSON.stringify(obj.contents[i]);

    contentStr += "<p class=\"content-section\">" +
     content.substring(first, content.length - 1) +
                                          "</p>";
  }
  //add all strings and add as a complete entry to display
  appendTo.innerHTML = titleStr + publishStr + imgStr + contentStr;
}

//add listeners to logs
function addClicks(){
  for ( let i = 0; i < logs.length; i += 1 ){
    logs[i].addEventListener( 
      'click',
      function(e){
        //the index of the log clicked
        let idx = null;
        for( let i = 0; i < e.path.length; i += 1){
          //finds the actual log element index in event's classpath
          if( e.path[i].classList[0] == "log" ){
            idx = e.path[i].classList[1];
            break;
          }
        }
        switcher( idx ); 
      }
    );
  }
  //Checks if this page was accessed elsewhere,
  //accesses a specific blog entry
  navFrom();
}

//add listener to go back to logs
back.addEventListener(
  'click',
  function(){
    logContainer.className = "on";
    contentContainer.className = "off";
    header.className = "show";
    foot.className = "hidden";
  }
)

//gets the url and simulates a blog click if possible
function navFrom(){
  try{
    let blogNum = parseInt(location.hash.substring(1));
    logs[blogNum].click();
  }
  catch(e){
    console.log("Error: unobtainable selection index");
  }
}