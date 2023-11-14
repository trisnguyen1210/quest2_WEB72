// -----------------------------Use mongoose---------------------------------//
import mongoose from 'mongoose';

const account = "trinvm1210";
const encodedPassword = encodeURIComponent("Tri@12109898");
const url = `mongodb+srv://${account}:${encodedPassword}@web72.ss2kzgw.mongodb.net/test-Web72`;

async function connectToDB() {
    try {
        const connect = await mongoose.connect(url)
        console.log(`Connect successfuly DB mongoose`)
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB;