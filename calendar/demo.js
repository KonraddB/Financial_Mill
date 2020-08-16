var events = [
  {'Date': new Date(2016, 6, 7), 'Title': 'Doctor appointment at 3:25pm.'},
  {'Date': new Date(2016, 6, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
  {'Date': new Date(2020, 7, 25), 'Title': 'Test', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
