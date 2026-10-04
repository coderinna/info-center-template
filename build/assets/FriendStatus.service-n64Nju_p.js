import{g,c as l}from"./services-CCUisz6M.js";import{i as m,s as h}from"./cacheTTL-B7obvhff.js";const w=async(t,r,n,o)=>{if(!t||!n||!r)return;const u=g`
    query GetMyFriendRelations($AccountID: Int!, $type: String!, $page: Int!, $searchData: SearchObject) {
      getMyFriendRelations(AccountID: $AccountID, type: $type, page: $page, searchData: $searchData) {
        hasNextPage
        res
        users {
        __typename
        id
          username
          status
          profilePicture
          friendStatus {
        __typename
            id
            status
          }
        }
      }
    }
  `,s={AccountID:t,type:r,page:n,searchData:o};try{const e=`getMyFriendRelations:${r}`,i=await m(e),{data:c}=await l.query({query:u,variables:s,fetchPolicy:i?"cache-first":"network-only"}),d=c?.getMyFriendRelations;if(i||await h(e),d){const a=c.getMyFriendRelations,p="https://medias.info_center_template.com/",y=a?.users?.map(f=>({...f,...f?.profilePicture&&{profilePicture:p+f?.profilePicture}}));return{...a,users:y}}return null}catch(e){throw new Error(e.message||"Error fetching friend relations.")}},$=async(t,r,n)=>{if(!t||!r)return;const o=g`
query getNewFriendsUnified($AccountID: Int!, $page: Int,  $searchData: SearchObject) {
   getNewFriendsUnified(AccountID: $AccountID, page: $page, searchData: $searchData) {
hasNextPage
res
   users{
   id
            username
            profilePicture
}
    }
}
  `,u={AccountID:t,page:r,searchData:n};try{const{data:s}=await l.query({query:o,variables:u});if(s.getNewFriendsUnified){const e=s?.getNewFriendsUnified,i="https://medias.info_center_template.com/",c=e.users.map(a=>({...a,...a?.profilePicture&&{profilePicture:i+a?.profilePicture}}));return{...e,users:c}}}catch(s){throw new Error(s.message||"Error signing up.")}},F=async(t,r,n,o)=>{if(!t||!r||!n||!o)return;const u=g`
query getFriendsUnified($AccountID: Int!, $FriendID: Int!, $type: String!, $page: Int) {
   getFriendsUnified(AccountID: $AccountID, FriendID: $FriendID, type: $type, page: $page) {
        hasNextPage
        res
        users {
        id
           username
           profilePicture
        }
    }
}
  `,s={AccountID:t,FriendID:r,page:o,type:n};try{const{data:e}=await l.query({query:u,variables:s});if(e.getFriendsUnified){const i=e?.getFriendsUnified,c="https://medias.info_center_template.com/",d=i.users.map(p=>({...p,...p?.profilePicture&&{profilePicture:c+p.profilePicture}}));return{...i,users:d}}}catch(e){throw new Error(e.message||"Error signing up.")}},R={getMyFriendRelations:w,getNewFriends:$,getFriends_ByFriend:F};export{R as P};
