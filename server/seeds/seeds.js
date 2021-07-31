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
        {name: 'Entertainment'},
        {name: 'Art'}
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
            description: 'Modern comfort meets retro style — this men’s Nike Air Max has everything you need in your shoe rotation. The upper provides durable support and a premium look while the extra cushioning in the collar gives extra comfort where you need it the most.',
            category: categories[2]._id,
            price: 249.99,
            image: 'airmax.jpg'
        },
        {
            name: 'COD Controller',
            description: 'Control your firearm with this controller',
            category: categories[1]._id,
            price: 150.99,
            image: 'codcontroller.jpg'
        },
        {
            name: 'Eiffel Tower Tour',
            description: 'Take your better half to Paris on a beautiful tour of the Eiffel tower.',
            category: categories[7]._id,
            price: 850.99,
            image: 'eiffeltower.jpg'
        },
        {
            name: 'Headphones',
            description: 'Something you need for avoiding daily nuisance',
            category: categories[0]._id,
            price: 75.99,
            image: 'headphones.jpg'
        },
        {
            name: 'Lights',
            description: 'Beautiful ceiling lights for better ambience',
            category: categories[3]._id,
            price: 50.99,
            image: 'lights.jpg'
        },
        {
            name: 'Statue',
            description: 'Put his face in your house to conquer your own house',
            category: categories[3]._id,
            price: 65.99,
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
            name: 'Tennis Racket',
            description: 'Roger Federers Wilson racket and summer days will be one of the best decisions for the season. Its on sale.',
            category: categories[6]._id,
            price: 87.99,
            image: 'tennisracket.jpg'
        },
        {
            name: 'Spikeball',
            description: 'Havent tried spike ball? You can play it anywhere with anyone.',
            category: categories[6]._id,
            price: 299.99,
            image: 'spikeball.jpg'
        },
        {
            name: 'Edhen Milano',
            description: 'These semi-formal shoes can be worn anywhere to any occasion',
            category: categories[2]._id,
            price: 899.99,
            image: 'edhenmilanoshoes.jpg'
        },
        {
            name: 'Canvas',
            description: 'Canvas perfect for any type of paint. Bring your artwork to life.',
            category: categories[8]._id,
            price: 39.99,
            image: 'canvas.jpg'
        },
        {
            name: 'Canvas',
            description: 'Canvas perfect for any type of paint. Bring your artwork to life.',
            category: categories[8]._id,
            price: 39.99,
            image: 'canvas.jpg'
        },
        {
            name: 'Pillow',
            description: 'So comfy, you will sleep forever with this plush and comfortable pillow.',
            category: categories[3]._id,
            price: 49.99,
            image: 'pillow.jpg'
        },
        {
            name: 'Spoon Set',
            description: 'Use these to eat soup and other fluid-like foods. They are easy to clean too!',
            category: categories[3]._id,
            price: 14.99,
            image: 'spoons.jpg'
        },
        {
            name: 'Paint Brush',
            description: 'The dream of an artist. This paint brush will enable you to bring your artistic visions to life.',
            category: categories[8]._id,
            price: 12.99,
            image: 'paintbrush.jpg'
        },
        {
            name: 'Art Print',
            description: 'A gorgeous print of Japan. This will look great in your living room!',
            category: categories[8]._id,
            price: 24.99,
            image: 'artprint.jpg'
        },
        {
            name: 'Soccer Ball',
            description: 'Modern soccer ball used in professional competition. Grip and durability you can only dream of.',
            category: categories[6]._id,
            price: 39.99,
            image: 'soccerball.jpg'
        },
        {
            name: 'Cast-iron Pan',
            description: 'This pan is heavy! Being made out of cast iron is a big responsibility. It will cook anything!',
            category: categories[4]._id,
            price: 81.99,
            image: 'pan.jpg'
        },
        {
            name: 'Toaster',
            description: 'Toast your bread and bagels with this aluminum toaster. It is fully programmable and will ensure your bread is cooked to perfection',
            category: categories[4]._id,
            price: 119.99,
            image: 'toaster.jpg'
        },
        {
            name: 'Coffee Beans',
            description: 'Roasted beans from South America. They are fresh and tasty. Sure to make your coffee a delight.',
            category: categories[4]._id,
            price: 8.99,
            image: 'coffeebeans.jpg'
        }
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