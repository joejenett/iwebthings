// Based on onionring.js (https://garlic.garden/onionring/)
// onionring.js is licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24


//the full URLs of all the sites in the ring
var sites = [
'https://joejenett.github.io/i.webthings/',
'https://directory.joejenett.com/',
'https://the.dailywebthing.com/',
'https://pointers.dailywebthing.com/'
];

//the name of the ring
var ringName = 'welink';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'welink';

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://iwebthings.jenett.org/please-allow-me-to-try-again-fellow-linkers/';

//should the widget include a random button?
var useRandom = true;
