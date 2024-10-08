
const { Schema, Types } = require('mongoose');

// Define the Reaction schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Types.ObjectId, // Use Mongoose's ObjectId data type
            default: () => new Types.ObjectId() // Default value set to a new ObjectId
        },
        reactionBody: {
            type: String,
            required: true, // Required field
            maxlength: 280 // 280 character maximum
        },
        username: {
            type: String,
            required: true // Required field
        },
        createdAt: {
            type: Date,
            default: Date.now, // Set default value to the current timestamp
            get: (timestamp) => new Date(timestamp).toLocaleString() // Format the timestamp on query
        }
    },
    {
        toJSON: {
            getters: true // Use getters for JSON representation
        },
        id: false // Prevent automatic addition of __v field
    }
);

module.exports = reactionSchema; // Export the Reaction schema





















// **Reaction** (SCHEMA ONLY)

// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId

// * `reactionBody`
//   * String
//   * Required
//   * 280 character maximum

// * `username`
//   * String
//   * Required

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query






