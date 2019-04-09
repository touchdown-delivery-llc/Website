/**
 * Filename: newsEntries.js
 * Company: Touchdown Delivery, LLC
 * Author: Darien Tsai
 * Collaborators: none
 * Date Created: 12/14/18
 * Description:
 Locally stores news entries. Use until we get a database.
 */


/*
array of entries,
each fomatted the same in this way:

{
id: 'the number entry this is, start counting at 0;
title: 'title'
pub: 'company/author'
date: 'month day', 'year'
thumbnail: 'name'.'ext'
contents: ['content element']
}

/* Full images
img as a standalone block, put as its content element
<img src=# alt=# class=content-figure>
*/

var entries = [
  {
    id: 1,
    title: "Spacious Payload Delivery with Minimal Packaging",
    pub: "Touchdown Delivery",
    date: "Mar 21, 2019",
    thumbnail: "res/blog/1/0.png",
    contents: [
    "The Touchdown Delivery Drone is a general purpose, semi autonomous VTOL quadcopter style drone, with a user accessible compartment space located centrally and directly behind the rechargeable battery. The Version 8.0 Payload can be broken down into basic components, and although the shape isn’t a perfect box, it does have one consistent, prismatic height (a little over 4.5” - enough for a soda can). The large length of the Payload, variable L, allows for objects slightly larger than 14” (enough for shoes or many kitchen tools).",
    "<img src=res/blog/1/1.PNG alt=Variables class=content-figure>",
    "In terms of volume, the V8.0 Payload totals 2.52gal (9.551L), enough for a small bag of cosmetics, a few tech devices, or even a small amount of produce.",
    "The Version 8.0 drone was optimistic in terms of volume, but realistic in terms of its 3.5lbs (1.59 kg) maximum payload capacity. With a 21.8% volumetric reduction, V8.1 saves pounds in terms of the paneling and arm material needed to created the Payload, while still increasing the height available. The changes to the V8.1 Payload are in line with the flight duration and product transport goals we have for the initial Delivery Drone.",
    "<img src=res/blog/1/2.PNG alt=Spacious class=content-figure>",
    "The V8.1 Drone Frame is still being finished, but some feature changes are already evident including square cutouts for product lighting (more illuminating area than the V8.0 circular lights), thicker padding under the Payload fabric, and (most importantly) more room up front for a larger LiPo battery."
    ]

  },
  {
    id: 0,
    title: "The Challenge of Flight Power",
    pub: "Touchdown Delivery",
    date: "Mar 21, 2019",
    thumbnail: "res/blog/0/0.PNG",
    contents: [
      "Touchdown Delivery’s Version 8.0 Drone was our first design to use 4 propellers, as well as our first version to have one battery unit balanced in the center. These large differences separated V8 from the Version 7 series, which used two large ducted/shrouded propellers, along with additional stabilizing propellers. V8 was a step forward, but it also lost a lot of power in the leap from 2 battery units per drone to 1. Overall, the ratio of the power (11.0 Ah) to the loaded mass (32.7 lbs / 14.83 kg) was not adequate to support the flight times we need.",
      "<img src=res/blog/0/1.PNG alt=Battery class=content-figure>",
      "Version 8.0 has features that will stay, such as the Horizontal Stabilizer/Handle and aft-tapered Payload Bay, but the Battery Unit needed a complete overhaul - so we nearly doubled the power, and used the extra height to reduce the overall length and width of the Payload Bay, while maintaining an impressive volume. The new V8.1 Battery Unit has high-rated connectors on both sides, for redundant power to the whole drone. Beneath the LiPo, there’s room for the battery connector, shrink wrap, and even some small circuit components. The LiPo battery is folded up in a Silicone Rubber sheet, which helps cushion the cells against any acceleration from drop heights under 6’. The folded structural Aluminum gives the Battery Unit rigidity. Additionally, circular clearance cutouts on the right and left side allow for cooling airflow from 4 fans while the drone is hovering, landing, or taking off. This is sometimes necessary to cool the battery and ESCs because in some phases of the flight there is no forward motion to push air into the air scoop. Adjacent to the fan cutouts, on the front and back of the Battery Unit, patterned triangles are used for mass reduction. While the total Loaded and Unloaded mass of V8.1 is still not known, refined aspects of the design in terms of flight stress distribution and component selection are working to shed grams.",
      "<img src=res/blog/0/2.JPG alt=Section class=content-figure>",
      "With a 21.0 Ah Battery Unit, Darien and I hope V8.1 will be approaching the theoretical flight durations required by our rigorous economic model, with margin. Ultimately, once the power loss of the battery is characterized, it can be predictably assessed. This doesn’t take into account random variables like a Partner who only uses one of the provided Battery Units rather than cylicing through all of the provided Battery Units (and therefore distributing the number of discharges). Other Partners might accidentally expose Battery Units to extreme and adverse temperatures, and although they will be splash proof (we are aiming for IP33), they won’t be waterproof.",
      "<img src=res/blog/0/3.JPG alt=Section class=content-figure>",
      "But whatever happens to the first generation of Battery Units, the Touchdown Delivery model of retaining ownership of the drones makes addressing any failures easier. I can only hope that battery technology continues to provide substantial improvements, enabling potential hardware updates and a path to even greater delivery performance."
    ]
  }
];