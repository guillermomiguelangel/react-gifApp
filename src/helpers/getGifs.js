

export const getGifs = async (category)=>{
    const apiKey = '21D2QdXQ2TCP67mHYY25B9nLzF8s391L';
    const url = `https://api.giphy.com/v1/stickers/search?q=${category}&limit=20&api_key=${apiKey}`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map((img)=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}