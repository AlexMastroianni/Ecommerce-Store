const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Small Plants' },
    { name: 'Large Plants' },
    { name: 'Indoor' },
    { name: 'Mininal' },
    { name: 'Growth' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Small Anthurium Indoor Plant',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '1.jpg',
      category: categories[0]._id,
      price: 60.99,
      quantity: 19,
    },
    {
      name: 'Small Golden Pothos',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: '2.jpg',
      category: categories[0]._id,
      price: 49.99,
      quantity: 3,
    },
    {
      name: 'Large Dracaena Marginata',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: '3.jpg',
      price: 79.99,
      quantity: 7,
    },
    {
      name: 'Small Arangement ',
      category: categories[0]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: '4.jpg',
      price: 40.99,
      quantity: 5,
    },
    {
      name: 'Snake Plant',
      category: categories[3]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: '5.jpg',
      price: 14.99,
      quantity: 10,
    },
    {
      name: 'Large Croton',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: '6.jpg',
      price: 99.99,
      quantity: 9,
    },
    {
      name: 'The Ultimate',
      category: categories[4]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: '7.jpg',
      price: 199.99,
      quantity: 1,
    },
    {
      name: 'Light Moth Orchid',
      category: categories[2]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: '8.jpg',
      price: 40.99,
      quantity: 60,
    },
    {
      name: 'Simple Croton',
      category: categories[0]._id,
      description:
        'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: '9.jpg',
      price: 15.99,
      quantity: 100,
    },
    {
      name: 'The Mini Ultimate',
      category: categories[2]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: '10.jpg',
      price: 89.99,
      quantity: 10,
    },
    {
      name: 'Friendly Spike',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '11.jpg',
      price: 20.99,
      quantity: 12,
    },
    {
      name: 'lil minis',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: '12.jpg',
      price: 9.99,
      quantity: 600,
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
});
