const axios = require('axios');
require('dotenv').config();
const {GET_LINKS} = require('./utils/linkQueries.js')
const sendQuery = require('./utils/sendQuery')
const formattedResponse = require('./utils/formattedResponse');

exports.handler=async(event)=>{
    
        try{
            const res =await sendQuery(GET_LINKS);
            const data = res.allLinks.data;
            return formattedResponse(200,data)
        //     return {
        //         statusCode:200,
        //         body: JSON.stringify(data)
        // }
        }
        catch(err){
            return formattedResponse(500,{err:"error in getlinks"}) 
        //     return {
        //         statusCode:500,
        //         body: JSON.stringify({err:"error in getlinks"})
        // }
        }



    // const GET_LINKS =`
    // query{
    //     allLinks{
    //       data{
    //          title
    //         url
    //         description
    //         _id
    //         archived
    //       }
    //     }
    //   }
    //   `
    //   const {data} = await axios ({
    //       url:'https://graphql.fauna.com/graphql',
    //       method:"POST",
    //       headers: {
    //             Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    //       },
    //       data:{
    //             query:GET_LINKS,
    //             variables:{},
    //       }
    //   });
    //   console.log(data.allLinks)
    //   return{
    //     statusCode: 200,
    //     body: JSON.stringify(data),
    //     // body: JSON.stringify(data.data.allLinks.data),

    // };

}

