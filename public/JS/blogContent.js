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
  console.log(JSON.stringify(obj.thumbnail));
  var imgStr = "<img src=" + JSON.stringify(obj.thumbnail) +
                                  " class=\"content-img\">";

  //content array into a string of paragraphs
  var contentStr = "";
  for(var i = 0; i < obj.contents.length; i += 1){
    //Content string:
    //Checks for parenthesis and turns them into tooltips
    var content = addTooltips( JSON.stringify(obj.contents[i]) );

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

//goes through a string and turns parenthesis into tooltips
function addTooltips( contentString ){

  let spaceOne = 0;
  let spaceTwo = 0;
  let tipOpen = null;
  let parsing = false;

  let spanOpenStringOp = "<span class=\"tooltip\" name=\"";
  let spanOpenStringEnd = "\">";
  let spanCloseString = "</span>";

  //loop through the content string, find parenthesis
  for( var i = 0; i < contentString.length; i += 1 ){
    //Goes through words by spaces
    //When closing a tooltip text, adds as tooltip to previous word
    if( contentString.charAt(i) == '(' ){
      tipOpen = i + 1;
      parsing = true;
    }
    else if( contentString.charAt(i) == ')'){
      //generate string to add, set content for tooltip pseudo element in name 
      let addition =               spanOpenStringOp +
              contentString.substring( tipOpen, i ) +
                                  spanOpenStringEnd +
      contentString.substring( spaceOne, spaceTwo ) +
                                    spanCloseString +
                     contentString.substring( i + 1);
      //let pseudo = "'" + contentString.substring( tipOpen, i ) + "'";

      //Add everything, stop parsing
      contentString = contentString.substring(0, spaceOne) + addition;
      parsing = false;
    }
    else if( contentString.charAt(i) == ' ' && !parsing ){
      //when starting a new word
      if( spaceOne <= spaceTwo){
        spaceOne = spaceTwo + 1;
      }
      spaceTwo = i;
      console.log(contentString.substring(spaceOne, spaceTwo));
    }
  }
  return contentString;
}

//gets the url and simulates a blog click if possible
function navFrom(){
  try{
    let blogNum = parseInt(location.hash.substring(1));
    logs[blogNum].click();
  }
  catch(e){
    console.log("Error: unobtainable selection index OR no selection");
  }
}