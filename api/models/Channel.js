/**
* Channel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    "channel_name": {
      type: "string",
      required: true
    },
    "topic": {
      type: "string"
    },
    "messages": {
      "collection": "Message",
      "via": "channel"
    }
  }
};
