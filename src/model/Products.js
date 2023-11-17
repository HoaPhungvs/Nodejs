import mongoose from "mongoose"; 
import mongooosepaginate from "mongoose-paginate-v2"

const productsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    desc:{
        type:String,
       
    }
        

},{
    versionKey:false,timestamps:true,
})
productsSchema.plugin(mongooosepaginate)
export default mongoose.model('Product',productsSchema)