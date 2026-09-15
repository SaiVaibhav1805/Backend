import mongoose from "mongoose"


const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {   // so for this model let us assume we need the data of a user who created so we use type by taking a reference
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subtodo'
        }
    ]
}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema); // in database the schema name is stored as Todo=todos it is lowercased and converted to plural

