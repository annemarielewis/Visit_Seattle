const db = require('../db')
const { District } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const districtList =[
        {
            name: 'Northwest Seattle',
            population: 749256,
            fact: "Seattle had real-life superheroes"
        },
        {
            name: 'Northeast Seattle',
            population: 241989,
            fact: 'Seattle Seahawks fans caused an earthquake'
        },
        {
            name: 'Magnolia & Queen Anne',
            population: 22890,
            fact: 'Seattle had a good bootlegger'
        },
        {
            name: 'Central Seattle',
            population: 30552,
            fact: 'The Klondike Gold rush contributed to Seattles largest population boom.'
        },
        {
            name: 'Downtown Seattle',
            population: 99000,
            fact: 'Harbor island is a completely man-made island'
        },
        {
            name: 'West Seattle & Delridge',
            population: 80154,
            fact: 'Seattle is the perfect place for nature lovers'
        },
        {
            name: 'Southeast Seattle',
            population: 84000,
            fact: 'Seattle is the coffee capital of America'
        }
    ]

    await District.insertMany(districtList)
    console.log('created districts')
}

const run = async () => {
    await main()
    await db.close()
}

run()