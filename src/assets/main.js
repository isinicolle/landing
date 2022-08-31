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
        let view = ` ${videos.items.map(video => `    
        <div class="group relative">
        <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnail.high.url}" 
        alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
        </h3>
        </div>
        </div> `).slice(0, 10).join('')}`;
        }
   catch{
         console.log('error')
   }
})();
