import{g as f,c as g}from"./services-CCUisz6M.js";import{i as h,s as m}from"./cacheTTL-B7obvhff.js";const R=async(r,t,o,l,c)=>{if(!r||!o||!t)return;const u=f`
    query GetMyFollowerRelations($AccountID: Int!, $type: String!, $page: Int!, $searchData: SearchObject) {
      getMyFollowerRelations(AccountID: $AccountID, type: $type, page: $page, searchData: $searchData) {
        hasNextPage
        res
        users {
        __typename
        id
          username
          status
          profilePicture
          followerStatus {
        __typename
            id
            status
          }
        }
      }
    }
  `,y={AccountID:r,type:t,page:o,searchData:l};try{const e=`getMyFollowerRelations:${t}`,a=await h(e),{data:n}=await g.query({query:u,variables:y,fetchPolicy:c?"network-only":a?"cache-first":"network-only"});if(n?.getMyFollowerRelations){a||await m(e);const i=n.getMyFollowerRelations,p="https://medias.info_center_template.com/",w=i?.users?.map(s=>({...s,...s?.profilePicture&&{profilePicture:p+s?.profilePicture}}));return{...i,users:w}}return null}catch(e){throw new Error(e.message||"Error fetching friend relations.")}},M={getMyFollowersRelations:R};export{M as K};
