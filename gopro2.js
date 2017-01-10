var when = require('when')
var Camera = require('gopro_hero_api')

var cam = new Camera('baptiste','10.5.5.9',':8080')


cam
.status()
if (statusBuffer[1]) {
        camgopower='on'
    };
.then(function(status) {
	
    
    console.log('camera status',status)
    
    
	//cam.capture(false);
})

.otherwise(function(e) {
	console.error(e.stack || e)
})