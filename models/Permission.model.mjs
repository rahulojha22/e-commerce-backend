import mongoose from "mongoose";
const { Schema } = mongoose;

const PermissionSchema = new Schema({        
        permissionName: {
            type: String, required: true
        },
        permissionDescription: {
            type: String
        }        
    },
    {
        timestamps: true
    }
);

export const Permission = mongoose.model('UserPermission', PermissionSchema);
Permission.createIndexes();