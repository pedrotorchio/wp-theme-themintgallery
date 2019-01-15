import Base from './Base'

export default class Image extends Base{
    constructor() {
        super()
        this.url = null
        this.sizes = {}
        this.title = ''
        this.alt = ''
        this.caption = ''
        this.width = 0
        this.height = 0
        this.orientation = 'landscape'
    }
}