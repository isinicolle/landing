const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCV6ZDSDfPyXNvHbM8YGvv8w&part=snippet%2Cid&order=date&maxResults=10'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e34b454bafmsh64b6918c49a57b1p10c028jsn934b9ee2e5fc',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function getVideos(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

(async () => {
//se llamara asi misma
   try{
        const videos = await getVideos(API);
   }
   catch{
         console.log('error')
   }
})();