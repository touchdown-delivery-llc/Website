/**
 * Filename: newsLoad.js
 * Company: Touchdown Delivery, LLC
 * Author: Darien Tsai
 * Collaborators: none
 * Date Created: 12/15/18
 * Description: 
 * Handles what the page should do when it first loads
 */

//parse the news entires to logs when loaded
document.addEventListener("DOMContentLoaded", function(){
  let logContainer = document.getElementById('updates');
  let presenter = document.getElementById('updates-presenter');

  for( var i = 0; i < entries.length; i += 1){
    //stringify id, thumbnail, title, date, hook
    var obj = entries[i]
    var num = JSON.stringify(obj.id);
    var thumb = JSON.stringify(obj.thumbnail);
    var title = JSON.stringify(obj.title);
    var date = JSON.stringify(obj.date);
    var hook = JSON.stringify(obj.hook);

    //create the html string
    presenter.innerHTML += "<div class=\"log " +
      num.substring(1, num.length - 1) + "\">" +
              "<div class=\"thumb\"><img src=" +
           thumb + " alt=\"Thumbnail\"></div>" +
                    "<div class=\"text\"><h3 " +
                        "class=\"log-title\">" +
          title.substring(1, title.length - 1) +
                     "<h6 class=\"log-date\">" +
            date.substring(1, date.length - 1) +
                 "</h6><p class=\"log-desc\">" +
            hook.substring(1, hook.length - 1) +
                            "</p></div></div>";
                            
  }
  addClicks();
  logContainer.classname = "on";
});