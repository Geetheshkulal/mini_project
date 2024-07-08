import {request, gql} from 'graphql-request';

const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/clybbe4k602ab07w9vmq0h6fg/master";

const getCategory=async()=>{
  const query = gql`
 query GetCategory{
  categories {
    id
    name
    icon {
      url
    }
  }
}
  ` 

  const result=await request(MASTER_URL,query);
  return result;

}

export default{
    getCategory
};