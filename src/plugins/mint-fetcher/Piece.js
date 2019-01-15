import Base from './Base'

export default class Piece extends Base {
    constructor() {
        super()
        this.title = '';
        this.type = '';
        this.dimensions = '';
        this.isSoldOut = false;
        this.images = []
    }
}