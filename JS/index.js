var when = require('when')
var Camera = require('gopro_hero_api')
CameraMode = Camera.CameraMode;
PhotoResolution = Camera.PhotoResolution;
VideoResolution = Camera.VideoResolution;

var cam = new Camera('baptiste','10.5.5.9',':8080')

//cam.setCameraMode('VIDEO');
/*
cam
.status()

.then(function(status) {
	console.log('camera status',status)
	
})

.otherwise(function(e) {
	console.error(e.stack || e)
})

cam.ready().then(function () {

        cam.status().then(function (status) {
            console.log(status);
             cam.capture(true);
        }).catch(function (error) {
            console.log(error.message);
        })
   

    }).catch(function (error) {
        console.log(error.message);
    });
*/

/* PHOTO RESOLUTION
cam.ready().then(function () {
console.log('ready');
        cam.setCameraMode(CameraMode.PHOTO).then(function(){
            cam.setPhotoResolution(PhotoResolution.WIDE_12MP)})})
        
.catch(function (error) {
        console.log(error.message);
    });
*/
 /*mode video
 
cam.ready().then(function () {
console.log('ready');
        cam.setCameraMode(CameraMode.VIDEO).then(function(){
            cam.setVideoResolution(VideoResolution.HD_720_60)})})
            .catch(function (error) {
        console.log(error.message);
    });

*/

// CAPTURE ON
function captureon () {
cam.ready().then(function () {

        cam.capture(true);

    }).catch(function (error) {
        console.log(error.message);
});
}


// CAPTURE OFF
/*
cam.ready().then(function () {

        cam.capture(false);

    }).catch(function (error) {
        console.log(error.message);
});
*/
//



