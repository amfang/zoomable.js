// Video.js
// The set of videos registered in our app.

module.exports = {
	autoPK: false,
	attributes: {
		id :{
			autoIncrement: true,
			primaryKey: true,
			columnName: 'video_id'
		},

		title: {
			type: 'string',
			required: true
		},

	    description: {
	    	type: 'string'
	    },

	    tags: {
	    	collection: 'tag',
	    	via: 'videoWithTags'
	    },

	    // 0 for self only, 1 for public
	    privacy: {
	    	type: 'integer', 
	    	required: true,
	    	defaultsTo: 1
	    },

	    duration: {
	    	type: 'string'
	    },

	    shares: {
	    	type: 'integer',
	    	defaultsTo: 0
	    },

	    videoDir: {
	    	type: 'string',
	    	required: true
	    },
	    
	    createdAt: {
	    	type: 'datetime',
	    	defaultsTo: function() {return new Date(); }
	    },

	    updatedAt: {
	    	type: 'datetime',
	    	defaultsTo: function() {return new Date(); }
	    }
	}
}