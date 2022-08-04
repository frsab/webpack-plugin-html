// import log from ';/log.js';
import $ from 'jquery';

var log = require('./log.js')
log("hello 1",new Date())
log("hello2 ",new Date())
log("hello III",new Date())

$(document).ready(function(){
    $("body").css("background-color","blue");
  });


