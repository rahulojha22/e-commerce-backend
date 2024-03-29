import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
        fName: {
            type: String, required: true
        },
        lName: {
            type: String, required: true
        },
        userEmail: {
            type: String, required: true, unique: true
        },
        userMoNum: {
            type: Number, required: true, unique: true
        },
        userAddresses: [{
            type: Schema.Types.ObjectId, ref: "UserAddress"
        }],
        userPassword: {
            type: String, required: true
        },
        userRole: {
            type: Schema.Types.ObjectId, ref: "Role", required: true
        },
        userStores: [{
            type: Schema.Types.ObjectId, ref: "Store"
        }],
        currentStore: {
            type: Schema.Types.ObjectId, ref: "Store"
        },
        loginToken: {
            type: String
        },
        profilePicture: {
            type: String
        },
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

export const User = mongoose.model('User', UserSchema);
User.createIndexes();