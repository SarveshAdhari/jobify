import mongoose from 'mongoose'

const connectDB = (url) =>{
    mongoose.connect(url)
    // console.log('Connected to db')
}

export default connectDB 