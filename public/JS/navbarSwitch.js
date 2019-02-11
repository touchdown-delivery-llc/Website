/**
 * Filename: navbarSwitch
 * Company: Touchdown Delivery, LLC
 * Author: Darien Tsai
 * Collaborators: none
 * Date Created: 10/30/18
 * Description:
 * Switches between the mobile and static
 * navigation bars.
 */

//select mobile and static nav bars
let mNav = document.getElementById('mobile-nav');
let sNav = document.getElementById('static-nav');
//static nav bar height
let height = sNav.clientHeight;
//tracks if mobile nav is on or off
let on = false;


/**
 * Toggles mobile nav bar based on scroll index
 */
window.addEventListener(
  'scroll',
  function(e){
    if( window.scrollY > height && !on){
      mNav.className = "on";
      on = true;
    }
    else if(this.window.scrollY <= height && on){
      mNav.className = "off";
      on = false;
    }
  }
);