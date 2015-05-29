
var server = require("./server"); 
var router = require("./router"); 
var requestHandlers = require("./requestHandlers"); 
 
var handle = {} 
//区分大小写的  
handle["/"] = requestHandlers.start; 
handle["/start"] = requestHandlers.start; 
handle["/upload"] = requestHandlers.upload; 
 
server.start(router.route, handle); 
