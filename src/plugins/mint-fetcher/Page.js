import Base from './Base'
export default class Page extends Base {
    constructor() {
        super()
        this.title = ""
        this.excerpt = ""
        this.keywords = []
        this.description = ""
        this.featuredImage = null
        this.htmlContent = ""
        this.quotes = []
        this.data = {}
    }
}