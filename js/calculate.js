
window.odometerOptions = {
    auto: false, // Don't automatically initialize everything with class 'odometer'
    selector: '.my-numbers', // Change the selector used to automatically find things to be animated
    format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
    duration: 50, // Change how long the javascript expects the CSS animation to take
    theme: 'default', // Specify the theme (if you have more than one theme css file on the page)
    animation: 'count' // Count is a simpler animation method which just increments the value,
                       // use it when you're looking for something more subtle.
  };

function load() {
	var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
		for(var i = 0; i < hashParams.length; i++){
			var p = hashParams[i].split('=');
			document.getElementById(p[0]).value = decodeURIComponent(p[1]);
		}
		calculate();
}

function calculate() {

    var fish_total = 0;
	var clan_modifier = 1; 

    // Herring
	fish_total += (document.getElementById("het").value * 10) * clan_modifier;
	fish_total += (document.getElementById("hes").value * 40) * clan_modifier;
	fish_total += (document.getElementById("hem").value * 70) * clan_modifier;
	fish_total += (document.getElementById("hel").value * 100) * clan_modifier;
	fish_total += (document.getElementById("heh").value * 300) * clan_modifier;

	// Kingfish
	fish_total += (document.getElementById("kit").value * 10) * clan_modifier;
	fish_total += (document.getElementById("kis").value * 40) * clan_modifier;
	fish_total += (document.getElementById("kim").value * 70) * clan_modifier;
	fish_total += (document.getElementById("kil").value * 100) * clan_modifier;
	fish_total += (document.getElementById("kih").value * 300) * clan_modifier;

	// Butterflyfish
	fish_total += (document.getElementById("but").value * 15) * clan_modifier;
	fish_total += (document.getElementById("bus").value * 60) * clan_modifier;
	fish_total += (document.getElementById("bum").value * 105) * clan_modifier;
	fish_total += (document.getElementById("bul").value * 150) * clan_modifier;
	fish_total += (document.getElementById("buh").value * 450) * clan_modifier;

	// Goldfish
	fish_total += (document.getElementById("got").value * 15) * clan_modifier;
	fish_total += (document.getElementById("gos").value * 60) * clan_modifier;
	fish_total += (document.getElementById("gom").value * 105) * clan_modifier;
	fish_total += (document.getElementById("gol").value * 150) * clan_modifier;
	fish_total += (document.getElementById("goh").value * 450) * clan_modifier;

	// Carp
	fish_total += (document.getElementById("cat").value * 20) * clan_modifier;
	fish_total += (document.getElementById("cas").value * 80) * clan_modifier;
	fish_total += (document.getElementById("cam").value * 140) * clan_modifier;
	fish_total += (document.getElementById("cal").value * 200) * clan_modifier;
	fish_total += (document.getElementById("cah").value * 600) * clan_modifier;

	// Halibut
	fish_total += (document.getElementById("hat").value * 20) * clan_modifier;
	fish_total += (document.getElementById("has").value * 80) * clan_modifier;
	fish_total += (document.getElementById("ham").value * 140) * clan_modifier;
	fish_total += (document.getElementById("hal").value * 200) * clan_modifier;
	fish_total += (document.getElementById("hah").value * 600) * clan_modifier;

	// Sea Angler
	fish_total += (document.getElementById("set").value * 30) * clan_modifier;
	fish_total += (document.getElementById("ses").value * 120) * clan_modifier;
	fish_total += (document.getElementById("sem").value * 210) * clan_modifier;
	fish_total += (document.getElementById("sel").value * 300) * clan_modifier;
	fish_total += (document.getElementById("seh").value * 900) * clan_modifier;
	
	// Tuna
	fish_total += (document.getElementById("tut").value * 40) * clan_modifier;
	fish_total += (document.getElementById("tus").value * 160) * clan_modifier;
	fish_total += (document.getElementById("tum").value * 280) * clan_modifier;
	fish_total += (document.getElementById("tul").value * 400) * clan_modifier;
	fish_total += (document.getElementById("tuh").value * 1200) * clan_modifier;

	// Acid
	fish_total += (document.getElementById("act").value * 80) * clan_modifier;
	fish_total += (document.getElementById("acs").value * 320) * clan_modifier;
	fish_total += (document.getElementById("acm").value * 560) * clan_modifier;
	fish_total += (document.getElementById("acl").value * 800) * clan_modifier;
	fish_total += (document.getElementById("ach").value * 2400) * clan_modifier;

	// Dumbfish
	fish_total += (document.getElementById("dut").value * 5) * clan_modifier;
	fish_total += (document.getElementById("dus").value * 10) * clan_modifier;
	fish_total += (document.getElementById("dum").value * 30) * clan_modifier;
	fish_total += (document.getElementById("dul").value * 50) * clan_modifier;
	fish_total += (document.getElementById("duh").value * 100) * clan_modifier;

	// Piranha
	fish_total += (document.getElementById("pit").value * 30) * clan_modifier;
	fish_total += (document.getElementById("pis").value * 120) * clan_modifier;
	fish_total += (document.getElementById("pim").value * 210) * clan_modifier;
	fish_total += (document.getElementById("pil").value * 300) * clan_modifier;
	fish_total += (document.getElementById("pih").value * 900) * clan_modifier;

    // Crab
	fish_total += (document.getElementById("crt").value * 320) * clan_modifier;
	fish_total += (document.getElementById("crs").value * 1280) * clan_modifier;
	fish_total += (document.getElementById("crm").value * 2240) * clan_modifier;
	fish_total += (document.getElementById("crl").value * 3200) * clan_modifier;
	fish_total += (document.getElementById("crh").value * 9600) * clan_modifier;

	// Topaz
	fish_total += (document.getElementById("tot").value * 3);
	fish_total += (document.getElementById("tos").value * 6);
	fish_total += (document.getElementById("tom").value * 12);
	fish_total += (document.getElementById("tol").value * 30);
	fish_total += (document.getElementById("toh").value * 90);

	// Emerald
	fish_total += (document.getElementById("emt").value * 5);
	fish_total += (document.getElementById("ems").value * 10);
	fish_total += (document.getElementById("emm").value * 20);
	fish_total += (document.getElementById("eml").value * 50);
	fish_total += (document.getElementById("emh").value * 150);

	// Sapphire
	fish_total += (document.getElementById("sat").value * 10);
	fish_total += (document.getElementById("sas").value * 20);
	fish_total += (document.getElementById("sam").value * 40);
	fish_total += (document.getElementById("sal").value * 100);
	fish_total += (document.getElementById("sah").value * 300);

	// Ruby
	fish_total += (document.getElementById("rut").value * 20);
	fish_total += (document.getElementById("rus").value * 40);
	fish_total += (document.getElementById("rum").value * 80);
	fish_total += (document.getElementById("rul").value * 200);
	fish_total += (document.getElementById("ruh").value * 600);

	// Diamond
	fish_total += (document.getElementById("dit").value * 30);
	fish_total += (document.getElementById("dis").value * 60);
	fish_total += (document.getElementById("dim").value * 120);
	fish_total += (document.getElementById("dil").value * 300);
	fish_total += (document.getElementById("dih").value * 900);
	
	// Gem Pouches
	fish_total += (document.getElementById("sgp").value * 200);
	fish_total += (document.getElementById("mgp").value * 1000);
	fish_total += (document.getElementById("lgp").value * 10000);
    
    // Calculate the amount of gems and bytecoins
    var gems_per_byte = document.getElementById("gpb").value
    var final_gems = fish_total;
    var final_byte = Math.round(final_gems / gems_per_byte)

    // change odometer to show results

    if (final_gems > 999999999 || final_byte > 999999999 ) {
    setTimeout(function(){
        odometer1.innerHTML = 999999999;
        odometer2.innerHTML = 999999999;
    }, 10);}
    else {
        setTimeout(function(){
            odometer1.innerHTML = final_gems;
            odometer2.innerHTML = final_byte;
        }, 10);
    }
}  

function generatelink() {
	var link = window.location.href.split('#')[0] + "#";
    var fullcode = "";
	var inputs = document.getElementsByClassName("calc-input");
	var i;
	for (i=0; i < inputs.length; i++) { // adds all fish and gemstones to link if value above zero
		if (inputs[i].value > 0) {
			var str = inputs[i].id + "=" + inputs[i].value + "&";
			fullcode += str;}
        }
    if (fullcode) {
	console.log(fullcode);
    console.log(btoa(fullcode));
    hashedlink = btoa(fullcode);
    linkkey = makeid(6);
    keyedlink = "https://cors.bridged.cc/https://jsonbase.com/pwcalctest/" + linkkey;
    postData(keyedlink, {linkkey: hashedlink});
    console.log(keyedlink, {btoalink: hashedlink});
    }
    document.getElementById("share").value = linkkey;
}

function loadurl() {
    var codeparsed = (window.location.search).substring(1);
    document.getElementById("code-input").value = codeparsed;
    loadcode();

}





function loadcode(code = "") {
    var code = document.getElementById("code-input").value;
    var encodedvalues = JSON.parse(getData("https://cors.bridged.cc/https://jsonbase.com/pwcalctest/", code));
    console.log("encoded link is " + encodedvalues.linkkey);
    var decodedvalues = atob(encodedvalues["linkkey"]).split("&");

    

	for(var i = 0; i < decodedvalues.length; i++){
			var p = decodedvalues[i].split('=');
			document.getElementById(p[0]).value = decodeURIComponent(p[1]);
    scrolltocalc();
	calculate();
    }
}

function scrolltocalc() {
    $(document).ready(function () {
        // Handler for .ready() called.
        $('html, body').stop(true, false).animate({
            scrollTop: $('#calculator').offset().top
        }, 'slow');
        
    });

}

function reset() {
        var tObj = document.getElementsByClassName('calc-input');
        for(var i = 0; i < tObj.length; i++){
            tObj[i].value='';
        }
        document.getElementById('gpb').value = 10
        calculate();
}

function copylink() {
	var copyText = document.getElementById("share");
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	 document.execCommand("copy");
}



function getData(url = '', shortcode = '') {
    var xmlHttp = new XMLHttpRequest();
    url += shortcode;
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText) ;
    return xmlHttp.responseText
}


async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHJKMNOPQRSTUVWXYZ123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}