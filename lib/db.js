const Table = require('./table')

const db = {
  init() {
    // this.people = new Table()
    // this.meetings = new Table()

    // inbox
    this.messages = new Table()

    // shopping-cart
    this.products = new Table()
    this.items = new Table()

    // user dashboard...thing?
    this.users = new Table()

    // reddit-clone
    this.posts = new Table()
    this.comments = new Table()
    
    // camera-list
    this.cameras = new Table()
    
    // funds
    this.funds = new Table()

    // bookstore
    this.books = new Table()

    // contact list
    this.contacts = new Table()

    // movies
    this.movies = new Table()

    // bills
    this.bills = new Table()

  },
}

db.init()

// require('./seeds/crm')(db)
require('./seeds/funds')(db)
require('./seeds/inbox')(db)
require('./seeds/shopping-cart')(db)
require('./seeds/users')(db)
require('./seeds/posts')(db)
require('./seeds/comments')(db)
require('./seeds/cameras')(db)
require('./seeds/books')(db)
require('./seeds/contact-list')(db)
require('./seeds/movies')(db)
require('./seeds/bills')(db)


module.exports = db
