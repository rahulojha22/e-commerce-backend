import mongoose from "mongoose";
const { Schema } = mongoose;

const StoreAddressSchema = new Schema({
        storeId: {
            type: Schema.Types.ObjectId, ref: "Store", required: true        
        },
        addressType: {
            type: String, required: true        
        },        
        addressLine1: {
            type: String
        },
        addressLine2: {
            type: String
        },
        country: {
            type: String
        },
        state: {
            type: String
        },
        city: {
            type: String
        },
        zipcode: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

export const StoreAddress = mongoose.model('StoreAddress', StoreAddressSchema);
StoreAddress.createIndexes();