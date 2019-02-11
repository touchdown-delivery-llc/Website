/**
 * Filename: openingsTabs.js
 * Company: Touchdown Delivery, LLC
 * Author: Darien Tsai
 * Collaborators:none
 * Date Created: 12/22/18
 * Description: 
 * Handles data for the tabs/info area of openings.html
 */

//Get the tabs and info containers
let tabs = document.querySelectorAll('#tabs h3')
let infoTitle = document.getElementById('info-title-container');
let respList = document.getElementById('resp-list');
let expList = document.getElementById('exp-list');

/**
 * Makes a clicked tab selected and switches info
 * 
 * @param idx The index of the selected tab
 */
function switcher( idx ){
  //selects clicked tab
  for(var i = 0; i < tabs.length; i += 1){
    tabs[i].className = "op-tab";
  }
  tabs[idx].className = "active-tab";

  var p = positions[idx]; //shortens selection of info object

  //switches the position title, animates
  infoTitle.innerHTML = "<h3 id=\"op-title\" class=\"slide\">" + p.title +
                        "</h3>";
  
  //switches the responsibilities info
  var resp = "";
  for( var i = 0; i < p.responsibilities.length; i += 1){
    resp += "<li class=\"op-list-item fade\">" +
                    p.responsibilities[i] +
                                  "</li>";
  }
  respList.innerHTML = resp;

  //switches the experience info
  var exp = "";
  for( var i = 0; i < p.responsibilities.length; i += 1){
    exp += "<li class=\"op-list-item fade\">" +
                          p.experience[i] +
                                   "</li>";
  }
  expList.innerHTML = exp;
}

//add click events to tabs, tabs will switch position info on click
for( var i = 0; i < tabs.length; i += 1 ){
  tabs[i].addEventListener(
    'click',
    function(e){
      //passes in tab's index to switcher method
      switcher(e.target.attributes[1].value);
    }
  );
}