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
hook: 'short description'
contents: ['content element']
}

/*
img in paragraph template-put at beginning of contents element
<img src="#" alt="#" align="left">
*/

/*
IMPORTANT: the most recent entry should be indexed at 0
*/
var entries = [
  {
    id: 2,
    title: "Test 3",
    pub: "Touchdown Delivery",
    date: "Jan 27, 2019",
    thumbnail: "#",
    hook: "Third test for news page parsing!",
    contents: [
      "Borem ipsum dolor sit amet, consectetur adipiscing elit.Sed ornare turpis non massa fringilla semper. Aenean acmagna ac purus sollicitudin sagittis. Vestibulum sed risusvitae elit interdum fringilla pharetra id ipsum. Quisqueefficitur elit non felis pharetra, vel mollis urna dapibus.Etiam rutrum pharetra ipsum, ut egestas est semper quis.Aliquam erat volutpat. Nullam posuere diam a massa eleifend,venenatis feugiat leo blandit. Etiam a orci a arcu interdumposuere et ullamcorper lorem. Maecenas rutrum ullamcorpertellus vel dictum.",
      "Suspendisse posuere interdum enim, sit amet fermentum nullaultricies sit amet. Nulla consequat feugiat dapibus. Ut acaugue fermentum, pharetra sapien ac, fermentum ipsum. Etiamporta quam sem, id blandit mauris sollicitudin eget. Suspendissevitae ante et erat gravida aliquet quis vulputate est.Pellentesque vestibulum vestibulum mattis. Aenean at auctor nisl.Duis et luctus quam, sed posuere dui. Curabitur condimentum pharetraconsectetur. Etiam hendrerit vulputate commodo. Cras venenatis semmalesuada placerat egestas. Nulla facilisi."
    ]

  },
  {
    id: 1,
    title: "Test 2",
    pub: "Touchdown Delivery",
    date: "Dec 15, 2018",
    thumbnail: "#",
    hook: "Another test for news page parsing!",
    contents: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed ornare turpis non massa fringilla semper. Aenean acmagna ac purus sollicitudin sagittis. Vestibulum sed risusvitae elit interdum fringilla pharetra id ipsum. Quisqueefficitur elit non felis pharetra, vel mollis urna dapibus.Etiam rutrum pharetra ipsum, ut egestas est semper quis.Aliquam erat volutpat. Nullam posuere diam a massa eleifend,venenatis feugiat leo blandit. Etiam a orci a arcu interdumposuere et ullamcorper lorem. Maecenas rutrum ullamcorpertellus vel dictum.",
      "Suspendisse posuere interdum enim, sit amet fermentum nullaultricies sit amet. Nulla consequat feugiat dapibus. Ut acaugue fermentum, pharetra sapien ac, fermentum ipsum. Etiamporta quam sem, id blandit mauris sollicitudin eget. Suspendissevitae ante et erat gravida aliquet quis vulputate est.Pellentesque vestibulum vestibulum mattis. Aenean at auctor nisl.Duis et luctus quam, sed posuere dui. Curabitur condimentum pharetraconsectetur. Etiam hendrerit vulputate commodo. Cras venenatis semmalesuada placerat egestas. Nulla facilisi."
    ]

  },
  {
    id: 0,
    title: "Test 1",
    pub: "Touchdown Delivery",
    date: "Dec 14, 2018",
    thumbnail: "#",
    hook: "A test for news page parsing!",
    contents: [
      "Dorem dipsum dolor sit amet, consectetur adipiscing elit.Sed ornare turpis non massa fringilla semper. Aenean acmagna ac purus sollicitudin sagittis. Vestibulum sed risusvitae elit interdum fringilla pharetra id ipsum. Quisqueefficitur elit non felis pharetra, vel mollis urna dapibus.Etiam rutrum pharetra ipsum, ut egestas est semper quis.Aliquam erat volutpat. Nullam posuere diam a massa eleifend,venenatis feugiat leo blandit. Etiam a orci a arcu interdumposuere et ullamcorper lorem. Maecenas rutrum ullamcorpertellus vel dictum.",
      "Suspendisse posuere interdum enim, sit amet fermentum nullaultricies sit amet. Nulla consequat feugiat dapibus. Ut acaugue fermentum, pharetra sapien ac, fermentum ipsum. Etiamporta quam sem, id blandit mauris sollicitudin eget. Suspendissevitae ante et erat gravida aliquet quis vulputate est.Pellentesque vestibulum vestibulum mattis. Aenean at auctor nisl.Duis et luctus quam, sed posuere dui. Curabitur condimentum pharetraconsectetur. Etiam hendrerit vulputate commodo. Cras venenatis semmalesuada placerat egestas. Nulla facilisi."
    ]
  }
];