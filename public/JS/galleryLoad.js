/**
 * Filename: galleryLoad.js
 * Company: Touchdown Delivery, LLC
 * Author: Darien Tsai
 * Collaborators: none
 * Date Created: 1/6/19
 * Description:
 * Loads the gallery page, appends the images in
 */

//The container to display the gallery images
let view = document.getElementById("presenter");
//The path to the images area
let path = "res/gallery/";

//appends each image into viewer
for( var count = 0; count < image.length; count += 1 ){
  //create and add image to view area
  let source = path + JSON.stringify(image[count].name).substring(1, JSON.stringify(image[count].name).length - 1);
  var newImg = document.createElement("img");
  newImg.setAttribute("src", source);
  newImg.setAttribute("class", "item");
  view.appendChild(newImg);
}