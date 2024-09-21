const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughText:{
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt:{
            type: Date,
            default: Date.now,

        },
        username:{
            type: String,
            required: true,
        },
        reactions:[reactionSchema]
        
    },
    {
        toJSON: {
            getters: true,
            
        },
        id:false,
    },
)
thoughtSchema.virtual('thoughtCount').get(function(){
    return this.thoughts.length


})
//create virtual

const Thought = model('Thought', thoughtSchema)



module.exports = Thought;