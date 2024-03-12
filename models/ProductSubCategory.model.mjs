import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSubCategorySchema = new Schema({
        subCategoryName: {
            type: String, required: true
        },
        subCategoryDescription: {
            type: String
        },          
        isDeleted: {
            type: Boolean, required: true
        }
    },{
        timestamps: true
    }
);

export const ProductSubCategory = mongoose.model('ProductSubCategory', ProductSubCategorySchema);
ProductSubCategory.createIndexes();