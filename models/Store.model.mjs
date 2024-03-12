import mongoose from "mongoose";
const { Schema } = mongoose;

const StoreSchema = new Schema({
        storeName: {
            type: String, required: true
        },
        storeOwner: {
            type: Schema.Types.ObjectId, ref: "User", required: true
        },
        storeGstNumber: {
            type: String
        },
        storeEmail: {
            type: String, required: true, unique: true
        },
        storeMoNum: {
            type: Number, required: true, unique: true
        },
        storeAddress: {
            type: Schema.Types.ObjectId, ref: "StoreAddress", required: true
        },        
        storeEmployees: [{
            type: Schema.Types.ObjectId, ref: "User"
        }],        
        storePictures: [{
            type: Schema.Types.ObjectId, ref: "StorePicture"
        }],
        productCategories: [{
            type: Schema.Types.ObjectId, ref: "ProductCategory"
        }],
        products: [{
            type: Schema.Types.ObjectId, ref: "Product"
        }],
        isActive: {
            type: Boolean,
            required: true
        },
        isDeleted: {
            type: Boolean,
            required: true
        }
    },{
        timestamps: true
    }
);

export const Store = mongoose.model('Store', StoreSchema);
Store.createIndexes();