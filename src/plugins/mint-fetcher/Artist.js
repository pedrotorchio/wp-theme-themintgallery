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
        this.gallery = null
        this.signatureSVG = null
        this.additionalSections = []
        this.categories = []

        this.description = ""
        this.keywords = []
    }
}