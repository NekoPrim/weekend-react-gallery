// const galleryItems = [
//     // { id: 1, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 }
//     { id: 1, title: 'The Giant of Boston', path: 'images/the-giant-of-boston.jpeg', description: 'Created by Os Gemeos, in Boston USA', likes: 0 },
//     { id: 2, title: 'The Lennon Wall', path: 'images/the-lennon-wall.jpeg', description: 'Created by various artists, in Prague Czechia', likes: 0 },
//     { id: 3, title: 'Flower Thrower', path: 'images/flower-thrower.png', description: ' Created by Banksy, in Jerusalem Israel', likes: 0 },
//     { id: 4, title: 'Stay Safe', path: 'images/stay-safe.jpeg', description: 'Created by Rasmus Balstrom, in LA USA', likes: 0 },
//     { id: 5, title: 'Portrait of David', path: 'images/portrait-of-david.jpeg', description: 'Created by Eduardo Kobra, in Carrara Italy', likes: 0 },
//     { id: 6, title: 'Street Art', path: 'images/street-art.jpeg', description: 'Created by Pichi and Avo, in Belgium', likes: 0 },
//     { id: 7, title: 'Dont Shoot', path: 'images/dont-shoot.png', description: 'Created by Bambi, in London England', likes: 0 },
//     { id: 8, title: 'Disaster', path: 'images/disaster.jpeg', description: 'Created by Jake Dobkin, in NY USA', likes: 0 },
//     { id: 9, title: 'Elmac and Retna', path: 'images/elmac-and-retna.jpeg', description: 'Created by Marquis Lewis, in Los Angeles USA', likes: 0 },
//     { id: 10, title: 'Collective Graffiti', path: 'images/collective-graffitti.jpeg', description: 'Created by anonymous, in Chiado Lisbon', likes: 0 }
// ];

// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool({
    database: 'react_gallery', // database name (this will change)
    host: 'localhost', // where to find the database
    port: 5432,        // port for finding the database
    max: 10,           // max number of connections for the pool
    idleTimeoutMillis: 30000 // 30 seconds before timeout/cancel query
});

// Listener setup on the pool isn't required, 
// but can be super handy for troubleshooting.
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;