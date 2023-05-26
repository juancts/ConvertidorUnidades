import mongoose from 'mongoose'

const converterdb = new mongoose.Schema({
    numero: {
        type: String,
        required: true, 
        trim: true
    },
    tipo:{
        type: String,
        required: true,
        trim: true
    }
})

export default mongoose.model('converterdb', converterdb)