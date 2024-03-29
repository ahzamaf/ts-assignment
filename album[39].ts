function make_album (artist:string, title:string, tracks?:number) {

    const album: {artist:string, title:string, tracks:number}= {
        artist: artist,
        title: title,
        tracks: 0
    }
if(tracks !==undefined){
album.tracks= tracks;}

    return album;
    
}
const album1 = make_album('atif aslam', 'bepanah')
console.log(album1)

const album2 = make_album('nehal naseem', 'aaja ve')
console.log(album2)

const album3 = make_album('mithoon', 'barish', 10)
console.log(album3)