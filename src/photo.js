let getRidOfInstruction = TweenLite
    .to("#instruction",0.6,{y: "-100%",paused:true});

function takeScreenshot() {
	let aScene = document
		.querySelector("a-scene")
		.components.screenshot.getCanvas("perspective");
	let frame = captureVideoFrame("video", "png");
	aScene = resizeCanvas(aScene, frame.width, frame.height);
	frame = frame.dataUri;
	// mergeImages([frame, aScene]).then(b64 => {
    //     let link = document.getElementById("download-link");
    //     //make this compatible with safari
    //     var clearUrl = b64.replace(/^data:image\/\w+;base64,/, '');
    //     link.setAttribute('href', 'data:application/octet-stream;base64,' + encodeURIComponent(clearUrl));
	// 	link.setAttribute("download", "AR.png");
	// 	// link.setAttribute("href", b64);
	// 	link.click();
    // });
    mergeImages([frame,aScene]).then(b64 => {
        let link = document.getElementById("download-link");
        //make this compatible with safari
        var clearUrl = b64.replace(/^data:image\/\w+;base64,/, '');
        link.setAttribute('href', 'data:application/octet-stream;base64,' + encodeURIComponent(clearUrl));
		link.setAttribute("download", "AR.png");
		// link.setAttribute("href", b64);
		link.click();
	});
};