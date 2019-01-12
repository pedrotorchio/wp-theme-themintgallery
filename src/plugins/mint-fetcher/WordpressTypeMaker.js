import Artist from './Artist'
import Image from './Image'

export function makeArtist(wpData) {
    let artist = new Artist()
        artist.name = wpData.title.rendered
        artist.profilePicture = 
        artist.bio = ''

        artist.themedGalleries = []
        artist.gallery = []
    
    return artist;
}
export function makeImage(wpData) {
    let image = new Image()
        image.url = null
        image.sizes = {}
        image.title = ''
        image.alt = ''
}



export default {
    makeArtist,
    makeImage
}