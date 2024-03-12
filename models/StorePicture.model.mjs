import mongoose from "mongoose";
const { Schema } = mongoose;

const StorePictureSchema = new Schema({
        storeId: {
            type: Schema.Types.ObjectId, ref: "Store", required: true
        },
        pictureName: {
            type: String, required: true
        },
        fileName: {
            type: String, required: true, unique: true
        },
        fileType: {
            type: String, required: true
        },        
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

export const StorePicture = mongoose.model('StorePicture', StorePictureSchema);
StorePicture.createIndexes();