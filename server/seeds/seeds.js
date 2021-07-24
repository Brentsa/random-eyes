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