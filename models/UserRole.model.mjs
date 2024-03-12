import mongoose from "mongoose";
const { Schema } = mongoose;

const UserRoleSchema = new Schema({        
        roleName: {
            type: String, required: true
        },
        roleDescription: {
            type: String
        },
        sideBarMenus: [{
            type: Schema.Types.ObjectId, ref: "UserSidebar"
        }],
        permissions: [{
            type: Schema.Types.ObjectId, ref: "UserPermission"
        }]
    },
    {
        timestamps: true
    }
);

export const UserRole = mongoose.model('UserRole', UserRoleSchema);
UserRole.createIndexes();