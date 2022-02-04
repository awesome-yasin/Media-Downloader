var messageElement = document.getElementById("message");
function message(string) {
	var child = document.createTextNode(string);
	messageElement.appendChild(child);
	messageElement.appendChild(document.createElement("br"));
}
function errorMessage(string) {
	message(string);
	throw new Error(string);
}

function getVideos(inputUrl) {
	resetPage();
	var videoId = getVideoId(inputUrl);
	console.log(videoId)
	var loadSubscribe = document.getElementById("frame");
	var substack = document.createElement("iframe");
	console.log(videoId)
	substack.src = `https://www.youtube.com/embed/${videoId}`;
	// Set size and hide iframe border
	substack.width = "100%";
	substack.height = "360";
	substack.style.border= "none";
	substack.style.background = "white";
	loadSubscribe.appendChild(substack);

	if (!videoId) {
		errorMessage("Error: Couldn't find video id in provided URL. If you know the video id, try entering only 'v={videoId}'");
	}
	fetch(`https://cors-proxy-9001.herokuapp.com/https://youtube.com/watch?v=${videoId}`)
		.then(response => {
		// indicates whether the response is successful (status code 200-299) or not
			if (!response.ok) {
			  throw (`Request failed with status ${response.status}`);
			}
	
			response.text().then(text => parseRawHTML(text));
			
		})
		.catch(error => errorMessage(error));
	
}

function parseRawHTML(rawHTML) {
	// Stole this regex from ytdl.
	// See _YT_INITIAL_PLAYER_RESPONSE_RE and _YT_INITIAL_BOUNDARY_RE in
	// https://github.com/ytdl-org/youtube-dl/blob/master/youtube_dl/extractor/youtube.py
	var pattern = /ytInitialPlayerResponse\s*=\s*({.+?})\s*;\s*(?:var\s+meta|<\/script|\n)/;
	var matches = pattern.exec(rawHTML);
	if (!matches) {
		errorMessage("Error: Could not parse raw HTML.");
	}
	try {
		var playerResponse = JSON.parse(matches[1]);
		var title = document.getElementById("title");
		var substack = document.createElement("h4");
		substack.append(playerResponse.videoDetails.title)
		title.appendChild(substack);

		var views = document.getElementById("view")
		views.append(playerResponse.videoDetails.viewCount + " " + "Views")

		var uploadDate = document.getElementById("date")
		uploadDate.append(playerResponse.microformat.playerMicroformatRenderer.uploadDate)

		var duration = document.getElementById("duration")
		duration.append(playerResponse.microformat.playerMicroformatRenderer.lengthSeconds + " " + "Sec")

		console.log(playerResponse)
	} catch (e) {
		errorMessage("Error: Could not parse");
	}
	if (!playerResponse.hasOwnProperty('streamingData')) {
		errorMessage("Error: No stream data found");
	}
	var streamingData = playerResponse.streamingData;
	console.log(streamingData)
	var regularFormats = streamingData['formats'];
	var adaptiveFormats = streamingData['adaptiveFormats'];
	getDecipherFunction([regularFormats, adaptiveFormats], rawHTML);
}

// formats is an array of arrays of format objects
function getDecipherFunction(formats, rawHTML, inputUrls) {
	// Check if any require signature deciphering
	var needDecipher = false;
	for (var i = 0; i < formats.length; i++) {
		for (var j = 0; j < formats[i].length; j++) {
			if (formats[i][j]['signatureCipher']) {
				needDecipher = true;
				break;
			}
		}
		if (needDecipher) {
			break;
		}
	}
	if (needDecipher) {
		// Get decipher function
	
		// Stole this regex from ytdl. See player_url in
		// https://github.com/ytdl-org/youtube-dl/blob/master/youtube_dl/extractor/youtube.py
		var playerPattern = /(?:PLAYER_JS_URL|jsUrl)\"\s*:\s*\"([^\"]+)/;
		
		var matches = playerPattern.exec(rawHTML);
		if (matches) {
			var playerURL = 'https://cors-proxy-9001.herokuapp.com/https://youtube.com/' + matches[1];
			fetch(playerURL)
			.then(response => {
			// indicates whether the response is successful (status code 200-299) or not
				if (!response.ok) {
					throw (`Request failed with status ${response.status}`);
				}
			
				response.text().then(text => decipherURLs(formats, text));
			})
			.catch(error => errorMessage(error));
		}
	} else {
		displayFormats(formats);
		iframeLoad(inputUrls)
		
	}
}

function decipherURLs(formats, rawJS) {
	// Stole these regex from ytdl. See _parse_sig_js in
	// https://github.com/ytdl-org/youtube-dl/blob/master/youtube_dl/extractor/youtube.py

	var patterns = [
		/\b[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*encodeURIComponent\s*\(\s*([a-zA-Z0-9$]+)\(/,
		/\b[a-zA-Z0-9]+\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*encodeURIComponent\s*\(\s*([a-zA-Z0-9$]+)\(/,
		/\bm=([a-zA-Z0-9$]{2,})\(decodeURIComponent\(h\.s\)\)/,
		/\bc&&\(c=([a-zA-Z0-9$]{2,})\(decodeURIComponent\(c\)\)/,
		/(?:\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2,})\s*=\s*function\(\s*a\s*\)\s*{\s*a\s*=\s*a\.split\(\s*""\s*\);[a-zA-Z0-9$]{2}\.[a-zA-Z0-9$]{2}\(a,\d+\)/,
		/(?:\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2,})\s*=\s*function\(\s*a\s*\)\s*{\s*a\s*=\s*a\.split\(\s*""\s*\)/,
		/([a-zA-Z0-9$]+)\s*=\s*function\(\s*a\s*\)\s*{\s*a\s*=\s*a\.split\(\s*""\s*\)/,
		// Obsolete patterns
		/(["\'])signature\1\s*,\s*([a-zA-Z0-9$]+)\(/,
		/\.sig\|\|([a-zA-Z0-9$]+)\(/,
		/yt\.akamaized\.net\/\)\s*\|\|\s*.*?\s*[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*(?:encodeURIComponent\s*\()?\s*([a-zA-Z0-9$]+)\(/,
		/\b[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*([a-zA-Z0-9$]+)\(/,
		/\b[a-zA-Z0-9]+\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*([a-zA-Z0-9$]+)\(/,
		/\bc\s*&&\s*a\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\('/,
		/\bc\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\(/,
		/\bc\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\(/,
	];
	
	var matches = null;
	for (var i = 0; i < patterns.length; i++) {
		matches = patterns[i].exec(rawJS);
		if (matches != null) {
			break;
		}
	}
	if (matches == null) {
		errorMessage("Error: Couldn't get decipher function.");
	}
	// The ultimate hack. We append functions that need to be run into the entire js and call eval
	var toRun = rawJS.replace(/}\)\(_yt_player\);/, "return " + matches[1] + "\(\);}\)\(_yt_player\);");
	var regex = new RegExp(matches[1] + "\\(.*?_yt_player\\);","gm");
	formats.forEach(formatType => {
		formatType.forEach(format => {
			if (format['signatureCipher']) {
				var signatureCipher = format['signatureCipher'];
				var urlPattern = /url=([^&"]*)/;
				var url = decodeURIComponent(urlPattern.exec(signatureCipher)[1]);
				var spPattern = /sp=([^&"]*)/;
				var sp = decodeURIComponent(spPattern.exec(signatureCipher)[1]);
				var sPattern = /s=([^&"]*)/;
				var s = decodeURIComponent(sPattern.exec(signatureCipher)[1]);
				toRun = toRun.replace(regex, matches[1] + "\(\"" + s + "\"\);}\)\(_yt_player\);");
				var newSig = eval(toRun);
				format['url'] = url.concat('&' + sp + '=' + newSig);
			}
		});
	});
	displayFormats(formats);
	
}

function displayFormats(formats, inputUrls) {
	var table = document.getElementById("tb");
	
	
	
	
		// Add attributes
	
	formats.forEach(formatType => {
		formatType.forEach(format => {
			var row = table.insertRow(-1);
			//Download Link
			var cell = row.insertCell(-1);
			var aTag = document.createElement('a');
			aTag.setAttribute('href', format['url']);
			aTag.setAttribute('target', '_blank');
			aTag.innerHTML = `Download [ ${format['width'] + " " +  'x' + " " + format['height']} ]`;
			aTag.style.textDecoration = "none"
			aTag.style.color = "#791600"
			aTag.style.transition = "0.2s"
			aTag.style.fontWeight = "bold"
			aTag.addEventListener('mouseover',function(){
				aTag.style.color="#cc2500";
			 })
			 aTag.addEventListener('mouseleave',function(){
				aTag.style.color = "#791600"
			 })
			
			cell.appendChild(aTag);
			//Resolution
			cell = row.insertCell(-1);
			cell.innerHTML = format['width'] + 'x' + format['height'];
			//File Type
			cell = row.insertCell(-1);
			cell.innerHTML = format['mimeType'];
			
			
			
			//Bitrate
			cell = row.insertCell(-1);
			cell.innerHTML = format['bitrate'];
			//Audio Sample Rate
			cell = row.insertCell(-1);
			cell.innerHTML = format['audioSampleRate'];
		});
	});

	iframeLoad(inputUrls)
}



function resetPage() {
	var toReset = document.getElementsByClassName("resets");
	if (toReset) {
		[...toReset].forEach(element => element.innerHTML = "");
	}
}

function getVideoId (url) {
	var pattern = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
	var matches = pattern.exec(url);
	
	if (matches) {
		return matches[1];
	}
	
}
