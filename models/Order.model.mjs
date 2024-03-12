import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema({
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

export const Order = mongoose.model('Order', OrderSchema);
Order.createIndexes();