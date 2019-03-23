/**
 * Filename: footerLoad.js
 * Company Touchdown Delivery, LLC
 * Author: Darien Tsai
 * Collaborators: None
 * Date Created MM/DD/YY
 * Description: 
 * Loads footer to any page that has one
 */

//footer components before the links
let footSegOne = "<div id=\"footer-links\"><div id=\"footer-social\">" +
"<h3>Follow Us</h3><div id=\"social-medias\"><!--insert social media-->" +
"<a href=\"http://www.facebook.com/1579189573\" class=\"social\"><img src=\"res/social/facebook_logo_white.png\"></a>" +
"<a href=\"https://www.linkedin.com/in/bryan-dierking-93659838\" class=\"social\"><img src=\"res/social/linkedIn_logo_white.png\"></a>" +
"<a href=\"https://twitter.com/bryandierking\" class=\"social\"><img src=\"res/social/twitter_logo_white.png\"></a>" +
"</div></div><div id=\"footer-nav\">";

let links = document.getElementsByClassName('f-nav-item');
let linkStr = "";

for( var i = 0; i < links.length; i += 1){
  linkStr += "<a href=\"" + links[i].href + "\"" +
              ">" + links[i].innerHTML + "</a>";          
}

//footer components with links and on
let footSegTwo = "</div></div><div id=\"footer-meta\">" +
"<h6>Copyright &copy Touchdown Delivery, LLC. All rights reserved</h6></div>";

//load in the footer
document.getElementsByTagName('footer')[0].innerHTML = footSegOne +
                                                          linkStr +
                                                       footSegTwo;

