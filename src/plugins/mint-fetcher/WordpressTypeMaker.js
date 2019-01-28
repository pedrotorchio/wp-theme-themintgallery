import Artist from './Artist'
import Image from './Image'
import Gallery from './Gallery'
import ThemedGallery from './ThemedGallery'
import Piece from './Piece'
import Slide from './Slide'
import Page from './Page'
import Quote from './Quote'

import slugify from 'slugify'

export function makeBase(model, wpData) {
    
    if (wpData.id)
        model.id = wpData.id
    if (wpData.category_data)
        model.categories = wpData.category_data

    return model
}
export function makePage(wpData) {
    let page = new Page()
        page = makeBase(page, wpData)
        
        page.title = wpData.title.rendered
        page.description = wpData.acf.description
        if (wpData.acf.keywords)
            page.keywords = makeKeywords(wpData.acf.keywords);
        page.excerpt = wpData.excerpt
        if (wpData.featured_image)
            page.featuredImage = makeImage(wpData.featured_image)

        page.htmlContent = wpData.content.rendered

        if (wpData.CFS.quotes)
            page.quotes = wpData.CFS.quotes.map(makeQuote)
        
        const { CFS, acf, ...defaultData } = wpData;

        page.data = { ...wpData['acf'], ...wpData['CFS'], ...defaultData };

        return page
}
export function makeSlide(wpData) {
    let slide = new Slide()
        slide.title = wpData.acf.title || wpData.title

        if (wpData.CFS.slides)
            slide.pages = wpData.CFS.slides.map(makeImage)
        if (wpData.featured_image)
            slide.featuredImage = makeImage(wpData.featured_image)

    return slide
}
export function makeKeywords(wpData) {
    return wpData.split(',').map(wrd => wrd.trim())
}
export function makeQuote(wpData) {
    let quote = new Quote()
        quote.htmlText = wpData.text
        quote.author = wpData.author
    return quote
}
export function makeUrl(wpData) {
    let url = wpData

    try {
        url = new URL(wpData);

    } catch(e) {
        url = {
            path: wpData
        }
    }
    return url

}
export function makeArtist(wpData) {
    let artist = new Artist()
        artist = makeBase(artist, wpData)
        artist.name = wpData.title.rendered
        artist.bio = wpData.acf.bio
        artist.slug = wpData.slug || slugify (artist.name, { lower: true })

        if (wpData.acf.keywords)
            artist.keywords = makeKeywords(wpData.acf.keywords);

        if (wpData.acf.description)
            artist.description = wpData.acf.description

        if (wpData.CFS.additional)
            artist.additionalSections = wpData.CFS.additional
                
        if (wpData.featured_image)
            artist.featured = makeImage(wpData.featured_image)
        
        if (wpData.acf.signature_svg)
            artist.signatureSVG = makeImage(wpData.acf.signature_svg, false)

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
        tg = makeBase(tg, wpData)
        
        tg.slug = slugify(wpData.theme, { lower: true })
        tg.theme = wpData.theme
        tg.gallery = makeGallery(wpData.pieces)

    return tg;
}
export function makeGallery(wpData) {

    let gallery = new Gallery();
        gallery = makeBase(gallery, wpData)
        gallery.pieces = wpData.map(makePiece);

    return gallery
}
export function makePiece(wpData){

    let piece = new Piece();
        piece = makeBase(piece, wpData)
        piece.title = wpData.title;
        piece.type = wpData.type;
        piece.dimensions = wpData.dimensions;
        piece.isSoldOut = makeBoolean(wpData.is_sold_out)
        
        if (wpData.images) {
            wpData.images = wpData.images.filter(img => Boolean(img))
            piece.images = wpData.images.map( data => makeImage(data) );
        }
            

    return piece
}

export function makeBoolean(wpData) {
    return Boolean(wpData) && wpData != 0
}
export function makeImage(wpData, sizes = true) {
    // console.log('a', wpData.sizes, sizes, sizes && wpData.sizes ? 'extract' : 'not extract');
    if (wpData == null)
        return false;

    let image = new Image()
        image = makeBase(image, wpData)
        image.url = new URL(wpData.url)
        image.title = wpData.title || ''
        image.alt = wpData.alt || image.title
        image.caption = wpData.caption || ''
        image.width = wpData.width || -1
        image.height = wpData.height || -1
        image.orientation = wpData.orientation || 'landscape'
        
        if (sizes && wpData.sizes) {
            
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
    makeGallery,
    makeSlide,
    makePage,
}