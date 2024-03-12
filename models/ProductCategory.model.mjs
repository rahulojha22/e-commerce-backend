import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductCategorySchema = new Schema({
        categoryName: {
            type: String, required: true
        },
        categoryDescription: {
            type: String
        },  
        productSubCategories: [{
            type: Schema.Types.ObjectId, ref: "ProductSubCategory"
        }],      
        isActive: {
            type: Boolean, required: true
        },
        isDeleted: {
            type: Boolean, required: true
        }
    },{
        timestamps: true
    }
);

export const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema);
ProductCategory.createIndexes();