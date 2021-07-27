const db = require('../config/connection');
const { User, Category, Product} = require('../models');

async function seedCategories(){
    const categories = await Category.insertMany([
        {name: 'Technology'},
        {name: 'Gaming'},
        {name: 'Apparel'},
        {name: 'Home'},
        {name: 'Kitchen'},
        {name: 'Bathroom Supplies'},
        {name: 'Athletics'},
        {name: 'Entertainment'}
    ]);

    return categories;
}

async function seedProducts(categories){
    const products = await Product.insertMany([
        {
            name: 'Tablet',
            description: 'A beautiful and functional tablet for all your tech needs!',
            category: categories[0]._id,
            price: 799.99,
            image: 'tablet.jpg'
        },
        {
            name: 'Smartphone',
            description: 'Top tier smartphone for you to connect with the world',
            category: categories[0]._id,
            price: 649.99,
            image: 'smartphone.jpg'
        },
        {
            name: 'Camera',
            description: 'Take stunning photographs and capture your life on paper',
            category: categories[0]._id,
            price: 299.99,
            image: 'camera.jpg'
        },
        {
            name: 'Controller',
            description: 'Control your favorite gaming consoles with precision.',
            category: categories[1]._id,
            price: 89.99,
            image: 'controller.jpg'
        },
        {
            name: 'Console',
            description: 'Power your games and play with bleeding-edge tech.',
            category: categories[1]._id,
            price: 499.99,
            image: 'console.jpg'
        },
        {
            name: 'GPU',
            description: 'Render games on your PC with high FPS using this high-end GPU',
            category: categories[1]._id,
            price: 699.99,
            image: 'gpu.jpg'
        },
        {
            name: 'Shoes',
            description: 'Modern comfort meets retro style — this men’s Nike Air Max has everything you need in your shoe rotation. The upper provides durable support and a premium look while the extra cushioning in the collar gives extra comfort where you need it the most. And you can’t forget about the Max Air technology! This innovative air gives the shoe a perfect amount of cushioning and shows off that classic style everyone loves.',
            category: categories[3]._id,
            price: 249.99,
            image: 'airmax.jpg'
        },
        {
            name: 'COD Controller',
            description: 'Control your firearm with this controller',
            category: categories[3]._id,
            price: 150.00,
            image: 'codcontroller.jpg'
        },
        {
            name: 'Eiffel tower',
            description: 'take your better half to Paris',
            category: categories[7]._id,
            price: 850.00,
            image: 'eiffeltower.jpg'
        },
        {
            name: 'Headphones',
            description: 'Something you need for avoiding daily nuisance',
            category: categories[0]._id,
            price: 75.00,
            image: 'headphones.jpg'
        },
        {
            name: 'Lights',
            description: 'Beautiful ceiling lights for better ambience',
            category: categories[3]._id,
            price: 50.00,
            image: 'lights.jpg'
        },
        {
            name: 'Statue',
            description: 'Put his face in your house to conquer your own house',
            category: categories[3]._id,
            price: 65.00,
            image: 'statue.jpg'
        },
        {
            name: 'Table',
            description: 'minimilistic table with wire organization ports. It is for someone who does not like clutter',
            category: categories[3]._id,
            price: 299.99,
            image: 'table.jpg'
        },
        {
            name: 'Bed',
            description: 'Burma Teak frame with extra soft and comfortable mattress',
            category: categories[3]._id,
            price: 2999.99,
            image: 'bed.jpg'
        },
        {
            name: 'Volleyball Net',
            description: 'Summer and volleyball goes hand in hand. Its time to buy your own net',
            category: categories[6]._id,
            price: 29.99,
            image: 'volleyballnet.jpg'
        },
        {
            name: 'Tennis Rackey',
            description: 'Roger Federers Wilson racket and summer days will be one of the best decisions for the season. Its on sale.',
            category: categories[6]._id,
            price: 87.00,
            image: 'tennisracket.jpg'
        },
        {
            name: 'Spikeball',
            description: 'Havent tried spike ball? You can play it anywhere with anyone.',
            category: categories[6]._id,
            price: 299.99,
            image: 'spikeball.jpg'
        },
        

        //add more products here, place image files in client/src/assets/images/Product Images. I used unsplash and downloaded low res pics.
    ]);

    return products;
}

db.once('open', async () => {

    //delete all categories before seeding
    await Category.deleteMany();
    const categories = await seedCategories();
    console.log('Categories seeded.');

    //delete all products before seeding
    await Product.deleteMany();
    await seedProducts(categories);
    console.log('Products seeded.');

    //delete all users before seeding
    await User.deleteMany();
    console.log('Users reset.');

    process.exit();
});