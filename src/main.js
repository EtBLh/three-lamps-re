let mapPins = [];

//header scroll animation
(function(){
    let controller = new ScrollMagic.Controller();

    let tween = TweenLite
    .to("header",1,{className: "+=fade-out",onComplete: ()=>{document.querySelector("#header-wrapper div").style+="display:none;"}});
    
    new ScrollMagic.Scene({
        duration: window.innerHeight/2
    }).setTween(tween).setPin("header").addTo(controller);
}());

//shops
(function(){
    let slideContainer = document.querySelector('#slideContainer');

    const createShopPanel = (name, imgURL, address, index) => {
        slideContainer.innerHTML+=`
        <section class="panel">
            <div class="shop-info">
                <img src="${imgURL}" alt="A shop front-picture" >
                <div class="title-wrapper">
                    <span>${name}</span>
                </div>
                <a href="javascript:show(${index});" class='address'>${address}</a>
            </div>
            <a href="javascript:hide(${index});" id='hide${index}' style="display:none;" class="hide-modal"></a>
            <div id="map${index}" class="map" style="display:none"></div>
        </section>
        `
    }

    fetch('https://mobile-web-design-skill-competition.netlify.com/shops.json')
        .then(body => body.json())
        .then(json => {
            console.log(json);
            let i = 0;
            for(shop of json){
                mapPins.push({lat: shop.latitude, lng: shop.longitude})
                createShopPanel(shop.name,shop.photo_url,shop.address,i)
                i++;
            }
            initMap();
        })

    		// init
		let controller = new ScrollMagic.Controller();

		// define movement of panels
        let wipeAnimation = new TimelineLite()
			.to("#slideContainer", 1,   {x: "-75%"});

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
                duration: window.innerWidth*6,
                pushfollowers: true
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
            .addTo(controller);
}())

var initMap = () => {
    mapPins.forEach(({lat, lng},index)=>{
        let map = new google.maps.Map(document.getElementById(`map${index}`), {
            center: {lat: lat, lng: lng},
            zoom: 15
          });
          new google.maps.Marker({position:{lat: lat, lng: lng},map: map})
    })
}

var show = (index) => {
    document.querySelector(`#map${index}`).style="display:block";
    document.querySelector(`#hide${index}`).style="display:block"; 
}
var hide = (index) => {
    document.querySelector(`#map${index}`).style="display:none";
    document.querySelector(`#hide${index}`).style="display:none"; 
}