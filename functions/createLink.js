const axios = require('axios');
require('dotenv').config();
const {CREATE_LINK} = require('./utils/linkQueries.js')
const sendQuery = require('./utils/sendQuery')
const formattedResponse = require('./utils/formattedResponse');


exports.handler=async(event)=>{

    // if (event.httpMethod !== 'PUT') {
    //     return formattedResponse(405, { err: 'Method not supported' });
    // }
   
        const { title,url} = JSON.parse(event.body);
        const variables = { title,url};

     
        try{
            const {createLink:createdLink}=await sendQuery(CREATE_LINK,variables);
            
            return formattedResponse(200,createdLink)
        }
        catch(err){
            return formattedResponse(500,{err:"error in Createlinks"}) 
      
        }

}