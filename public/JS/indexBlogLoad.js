/**
 * Filename: indexBlogLoad.js
 * Company: Touchdown Delivery, LLC
 * Author: Darien Tsai
 * Collaborators: none
 * Date Created: 1/27/19
 * Description:
 * Appends the three most recent blog entries to the blog section of the index page
 */

//parse and append the first 3 blog posts
document.addEventListener("DOMContentLoaded", function(){
  //The container for blog posts
  let append = document.getElementById('progress-box');
  //The number of posts to be shown.
  let posts = 3;
  let hookEndIndex = 251; //number of characters for the preview text

  //access first three posts, loads them into page
  for( var i = 0; i < posts; i += 1){

    //stringify thumbnail and hook
    var obj = entries[i]
    var thumb = JSON.stringify(obj.thumbnail);
    var hook = JSON.stringify(obj.contents[0]).substring(0, hookEndIndex);

    //take out quotation marks
    thumb = thumb.substring(1, thumb.length - 1);
    hook = hook.substring(1, hook.length - 1);

    //create and append
    append.innerHTML += "<figure class=\"event\">" +
                          "<p href=\"blog.html\">" +
                             "<img src=\"" + thumb +
                          "\"><figcaption>" + hook +
                       "</figcaption></p></figure>";
  }

  //URL addition, add event listeners

  let blogs = append.childNodes;

  blogs[0].addEventListener( 'click',
    function( e ){ location.assign("blog.html#0");}
  );
  blogs[1].addEventListener( 'click',
    function( e ){ location.assign("blog.html#1");}
  );
  blogs[2].addEventListener( 'click',
    function( e ){ location.assign("blog.html#2");}
  );
});