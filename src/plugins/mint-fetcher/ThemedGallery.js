import Base from './Base'

export default class ThemedGallery extends Base {
    constructor () {
        super()
        this.theme = ''
        this.slug = ''
        this.gallery = null
    }
}