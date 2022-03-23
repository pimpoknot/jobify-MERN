import {readFile, writeFile} from 'fs/promises'
import dotenv from 'dotenv';
dotenv.config()
import connectDB from './db/connect.js'
import Job from './models/Job.js'

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        await Job.deleteMany()
        const jsonProducts = JSON.parse(await readFile(new URL('./MOCK_DATA.json', import.meta.url)))
        await Job.create(jsonProducts)
        for(let data of jsonProducts) {
            console.log(`${data.company} | ${data.position}`)
        }
        console.log('Success!')
        process.exit(0)
    } catch (err) {
        console.log(err)
        console.log('Error!')
        process.exit(1)
    }
}

start()