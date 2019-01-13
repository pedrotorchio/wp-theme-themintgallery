import Artist from './Artist'
import Image from './Image'
import Gallery from './Gallery'
import ThemedGallery from './ThemedGallery'
import Piece from './Piece'

export function makeArtist(wpData) {
    let artist = new Artist()
        artist.name = wpData.title.rendered
        artist.bio = wpData.acf.bio
                
        if (wpData.acf.profile_picture)
            artist.profilePicture = makeImage(wpData.acf.profile_picture)
            
        if (wpData.CFS.themed_gallery)
            artist.themedGalleries = wpData.CFS.themed_gallery.map( makeThemedGallery)
        if (wpData.CFS.gallery)
            artist.gallery = makeGallery(wpData.CFS.gallery)
    
    return artist;
}
export function makeThemedGallery(wpData) {
    
    let tg = new ThemedGallery();
        tg.theme = wpData.theme
        tg.gallery = makeGallery(wpData.pieces)

    return tg;
}
export function makeGallery(wpData) {

    let gallery = new Gallery();
        gallery.pieces = wpData.map(makePiece);

    return gallery
}
export function makePiece(wpData){

    let piece = new Piece();
        piece.title = wpData.title;
        piece.type = wpData.type;
        piece.dimensions = wpData.dimensions;
        piece.isSoldOut = makeBoolean(wpData.is_sold_out)
        
        if (wpData.images)
            piece.images = wpData.images.map(makeImage);

    return piece
}

export function makeBoolean(wpData) {
    return Boolean(wpData) && wpData != 0
}
export function makeImage(wpData) {

    let image = new Image()
        image.url = new URL(wpData.url)
        image.title = wpData.title || ''
        image.alt = wpData.alt || image.title
        image.caption = wpData.caption || ''
        image.width = wpData.width || -1
        image.height = wpData.height || -1
        image.orientation = wpData.orientation || 'landscape'

        if (wpData.sizes) {
            
           Object
                .entries(wpData.sizes)
                .forEach( ([size, data]) => {
                    
                    image.sizes[size] = makeImage(data)
                })
        }

        return image
}



export default {
    makeArtist,
    makeImage,
    makeThemedGallery,
    makeBoolean,
    makePiece,
    makeGallery
}