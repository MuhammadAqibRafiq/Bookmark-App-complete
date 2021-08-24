const GET_LINKS = `
# Write your query or mutation here
query{
  allLinks{
    data {
       title
      _id
      url
     
    }
  }
}`;

const CREATE_LINK = `
    mutation($title: String!, $url: String!  ) {
        createLink( data: {  title:$title, url: $url  }) {
             title
            _id
            url
          
        }
    }
`;

const UPDATE_LINK = `
  mutation($id: ID!, $title: String!, $url: String!  ) {
        updateLink( id: $id, data: {  title:$title, url: $url  }) {
             title
            _id
            url
           
        }
    }
`;

const DELETE_LINK = `
  mutation($id: ID!) {
        deleteLink( id: $id) {
            _id
        }
    }
`;

module.exports = {
    GET_LINKS,
    CREATE_LINK,
    UPDATE_LINK,
    DELETE_LINK,
};