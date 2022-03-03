puts "Seeeeeding 🌱🌱🌱🌱🌱🌱"


users = User.create([
  {
    full_name: "Sofia Versoza",
    dob: '1997-03-12',
    avatar: '',
    bio: 'hello, this is my bio!',
    website: 'www.myportfolio.com',
    pronouns: 'she/her',
    country: 'United States',
    username: 'sof',
    email: 'sofversoza@gmail.com',
    password: 'password',
    password_confirmation: 'password'
  }
])


puts "Done seeding!!!!!!!"