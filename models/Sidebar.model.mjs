import mongoose from "mongoose";
const { Schema } = mongoose;

const SidebarSchema = new Schema({        
        menu: {
            type: String, required: true
        },
        menuDescription: {
            type: String
        },
        menuUrl: {
            type: String, required: true
        },
        menuOrder: {
            type: Number, required: true
        },
        isActive: {
            type: Boolean, required: true
        }
    },
    {
        timestamps: true
    }
);

export const Sidebar = mongoose.model('UserSidebar', SidebarSchema);
Sidebar.createIndexes();