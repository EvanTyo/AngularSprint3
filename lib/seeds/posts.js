module.exports = db => {
  const posts = [
    {
      author: 'Molina Fulton',
      content:
        'Ut quis proident ipsum ipsum fugiat reprehenderit esse ut. Aliqua est tempor ipsum exercitation quis nostrud sit adipisicing mollit magna duis Lorem. Ut et proident voluptate aute voluptate voluptate anim irure et Lorem culpa non voluptate. Aliqua ea ullamco nostrud id quis officia in eiusmod eiusmod labore aliqua quis duis ad. Elit et elit sunt exercitation sunt nisi incididunt amet amet. Pariatur nulla eiusmod minim fugiat commodo id enim duis occaecat.\r\n',
      title:
        'Deserunt nulla ipsum ea occaecat commodo aliqua nostrud proident pariatur.',
      createdAt: new Date(2017, 9, 5),
      votes: 1,
      img_url: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
      inCart: false
    },
    {
      author: 'Ellis Daniel',
      content:
        'Ullamco eu veniam nostrud id aliquip consequat. Amet ut incididunt nisi ipsum eu esse elit. Consectetur elit qui nostrud pariatur nostrud qui laborum qui ea labore est tempor in.\r\n',
      title:
        'Quis cillum nisi elit tempor incididunt et deserunt ut eiusmod ullamco sunt consectetur.',
      createdAt: new Date(2017, 7, 5),
      votes: 3,
      img_url: 'https://images.unsplash.com/photo-1500514300702-8833f1fba0c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ab7811af3890e7e0c2ea876666e15f31&auto=format&fit=crop&w=1400&q=80'
    },
    {
      author: 'Ivy Mack',
      content:
        'Voluptate culpa id commodo quis occaecat irure adipisicing. Aliquip exercitation consectetur qui magna dolore laborum. Consequat non tempor nulla laborum. Dolor eu dolore dolor pariatur deserunt aute veniam non enim deserunt aute et. Mollit aliquip velit anim mollit labore velit et minim mollit sint velit in duis do. Ullamco nulla duis eiusmod elit.\r\n',
      title: 'Eu in et nulla proident veniam reprehenderit veniam.',
      createdAt: new Date(2017, 6, 5),
      votes: 2,
      img_url: 'https://i.ytimg.com/vi/Ce7hJ24a8yM/maxresdefault.jpg'
    },
    {
      author: 'Farrell Ingram',
      content:
        'Laboris nisi occaecat laborum fugiat elit ipsum Lorem qui proident qui. Dolor dolor sit magna eiusmod cillum qui minim aliquip deserunt sint deserunt velit. Voluptate ea exercitation ex do magna. Mollit est consequat deserunt et quis consequat commodo duis sit nisi. Incididunt et nisi est adipisicing incididunt reprehenderit in sunt excepteur in.\r\n',
      title:
        'Laboris eiusmod consequat in eiusmod eiusmod excepteur aliquip occaecat cupidatat irure adipisicing.',
      createdAt: new Date(2017, 6, 5),
      votes: 5,
      img_url: 'https://www.petakids.com/wp-content/uploads/2015/04/Bunny-Outside.jpg'
    },
    {
      author: 'Avis Whitley',
      content:
        'Ut laborum reprehenderit dolore est commodo enim aliquip officia commodo proident dolor quis reprehenderit eu. Commodo excepteur et sunt ullamco commodo sunt non velit ut. Irure quis consequat in aliqua nulla do aliquip mollit aute commodo reprehenderit.\r\n',
      title:
        'Quis sunt reprehenderit et excepteur ipsum proident excepteur enim et ad eu.',
      createdAt: new Date(2017, 11, 5),
      votes: 2,
      img_url: 'https://cdn-www.enfocus.com/sites/combell-www.enfocus.com/files/media/blog/2017-08-09-Lorem-Ipsum/lorem-ipsum.jpg'
    },
    {
      author: 'Walters Spencer',
      content:
        'Laborum aliqua nulla Lorem esse voluptate proident qui nostrud pariatur nostrud fugiat dolor. Id ea anim cupidatat occaecat officia culpa deserunt voluptate. Nulla sit irure reprehenderit incididunt enim enim occaecat nostrud id et deserunt nostrud duis ad.\r\n',
      title: 'Est esse incididunt aliquip proident aute esse et.',
      createdAt: new Date(2017, 12, 5),
      votes: 1,
      img_url: 'https://images.unsplash.com/photo-1496297485239-4265d2ba2105?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fcca05467a72f429b3c885c9b605428&auto=format&fit=crop&w=1520&q=80'
    },
    {
      author: 'Sheri Calderon',
      content:
        'Est laborum proident irure esse aute et dolor laborum nostrud elit non eu do magna. Duis enim est cillum in nisi. Mollit reprehenderit Lorem quis deserunt dolor. Veniam eiusmod ut non qui incididunt et et cupidatat. Veniam sunt nostrud minim eu non elit aute. In consectetur sit eu deserunt cillum qui fugiat velit consequat Lorem ut et veniam sunt.\r\n',
      title: 'Aliqua exercitation nisi sunt mollit Lorem sint enim.',
      createdAt: new Date(2017, 10, 5),
      votes: 3,
      img_url: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb'
    }
  ]

  posts.forEach(post => db.posts.insert(post))
}
