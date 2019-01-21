import Base from './Base'
export default class Page extends Base {
    constructor() {
        super()
        this.title = ""
        this.excerpt = ""
        this.featuredImage = null
        this.htmlContent = ""
        this.quotes = []
        this.data = {}
    }
}