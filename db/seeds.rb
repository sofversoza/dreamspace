puts "Seeeeeding 🌱🌱🌱🌱🌱🌱"
Post.destroy_all

users = User.create([
  {
    full_name: "Design Test",
    dob: '1997-03-12',
    avatar: '',
    bio: 'Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores.',
    website: 'www.myportfolio.com',
    pronouns: 'she/her',
    country: 'Berlin',
    username: 'test',
    email: 'test@gmail.com',
    password: 'password',
    password_confirmation: 'password'
  }, 
  {
    full_name: "Sylvia Plath",
    dob: '1932-10-27',
    avatar: '',
    bio: 'Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores.',
    website: 'www.barnesandnoble.com',
    pronouns: 'she/her',
    country: 'United States',
    username: 'splath',
    email: 'sylviaplath@gmail.com',
    password: 'password',
    password_confirmation: 'password'
  }
])

# DESIGN USER
posts = Post.create([
  { 
    content_type: 'image',
    content: 'design1.jpeg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design2.jpeg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design3.jpeg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design4.jpeg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design5.jpeg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design6.jpeg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design7.jpeg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design8.jpeg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design9.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design10.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design11.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design12.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design13.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design14.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design15.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design16.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design17.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design18.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design19.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  },
  { 
    content_type: 'image',
    content: 'design20.jpg',
    caption: 'Artist name',
    highlights: true,
    user: User.first
  }
])


# SYLVIA PLATH
posts = Post.create([
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia ut commodi facere laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia. autem quia ut commodi facere laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia.", 
    caption: "Lady Lazarus",
    highlights: true,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Exercitationem sit beatae ducimus vel necessitatibus excepturi quo.", 
    caption: "Right now",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo.", 
    caption: "Status",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo.", 
    caption: "Just a thought",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia ut commodi facere laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora.", 
    caption: "I was wondering",
    highlights: false,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook1.jpeg',
    caption: "Modern Classic Edition of The Bell Jar",
    highlights: true,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook3.jpeg',
    caption: "The first american edition of my journals",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo.", 
    caption: "Hmmmm",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum?  Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia.", 
    caption: "More on this",
    highlights: false,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook5.jpeg',
    caption: "My favorite print of Ariel",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia.", 
    caption: "Read me, or dont",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo.", 
    caption: "Read me, or dont",
    highlights: false,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook4.jpeg',
    caption: "First ever print of The Bell Jar",
    highlights: true,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook6.jpeg',
    caption: "Every poem I've ever written",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo.", 
    caption: "Update",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia ut commodi facere laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia.  autem quia ut commodi facere laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia.", 
    caption: "More thoughts",
    highlights: false,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook7.jpeg',
    caption: "Copy of a short-story I wrote in college",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo.", 
    caption: "About this",
    highlights: false,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook8.jpeg',
    caption: "Mary Ventura, translated",
    highlights: true,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo pariatur rerum?", 
    caption: " A short thought",
    highlights: false,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook10.jpeg',
    caption: "Another print of Bell Jar",
    highlights: true,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum?  Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia.", 
    caption: "Lorem ipsum",
    highlights: false,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook2.jpeg',
    caption: "New Faber Stories Copy",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora.", 
    caption: "Est iure recusandae",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Est iure recusandae ut laudantium ipsam qui nisi ullam et culpa exercitationem sit perspiciatis odit et officiis Quis ut quibusdam tempora. Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? pariatur rerum? Ut maxime temporibus qui dolorem dolores eos expedita assumenda aut beatae ducimus vel necessitatibus excepturi quo pariatur rerum? Et illo eligendi ut dignissimos soluta ut sunt corporis et accusamus dolor et nostrum voluptas qui autem quia.", 
    caption: "Lorem",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo.", 
    caption: "For me",
    highlights: false,
    user: User.second
  },
  {
    content_type: "blog",
    content: "Lorem ipsum dolor sit amet. Ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo. Lorem ipsum dolor sit amet. Ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo. Lorem ipsum dolor sit amet. Ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo. Lorem ipsum dolor sit amet. Ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo. Lorem ipsum dolor sit amet. Ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo. Lorem ipsum dolor sit amet. Ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo. Lorem ipsum dolor sit amet. Ut ullam et culpa exercitationem sit beatae ducimus vel necessitatibus excepturi quo.", 
    caption: "For U",
    highlights: false,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook11.jpeg',
    caption: "A Dramatic Portrait",
    highlights: false,
    user: User.second
  },
  {
    content_type: "image",
    content: 'plathbook12.jpeg',
    caption: "Journal entries of 12 yrs",
    highlights: false,
    user: User.second
  }
])

puts "Done seeding!!!!!!!"