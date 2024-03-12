import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
        productName: {
            type: String, required: true
        },
        productDescription: {
            type: String, required: true
        },
        productUnit: {
            type: String, required: true
        },
        productBasePrice: {
            type: Number, required: true
        },
        minBuyQuantity: {
            type: Number, required: true
        },
        productCategories: [{
            type: Schema.Types.ObjectId, ref: "ProductCategory"
        }],
        productSubCategory: [{
            type: Schema.Types.ObjectId, ref: "ProductSubCategory"
        }],
        productAttributes: [{
            type: Schema.Types.ObjectId, ref: "productAttribute"
        }],
        productDetails: [{
            type: Schema.Types.ObjectId, ref: "productDetail"
        }],
        productPictures: [{
            type: Schema.Types.ObjectId, ref: "productPicture"
        }],
        productStock: [{
            type: Schema.Types.ObjectId, ref: "productStock"
        }],
        storeId: {
            type: Schema.Types.ObjectId, ref: "Store"
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

export const Product = mongoose.model('Product', ProductSchema);
Product.createIndexes();