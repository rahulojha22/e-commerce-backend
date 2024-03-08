import mongoose from "mongoose";
const { Schema } = mongoose;

const UserAddressSchema = new Schema({
        userId: {
            type: Schema.Types.ObjectId, ref: "User", required: true        
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

export const UserAddress = mongoose.model('UserAddress', UserAddressSchema);
UserAddress.createIndexes();