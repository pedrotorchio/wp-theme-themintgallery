import Base from './Base'
export default class Artist extends Base {
    constructor() {
        super()
        this.name = ''
        this.profilePicture = null
        this.bio = ''
        this.slug = ''
        this.featured = null
        this.themedGalleries = []
        this.gallery = []
        this.signatureSVG = null
        this.aditionalSections = []
    }
}