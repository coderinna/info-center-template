import{g as i,c}from"./services-CCUisz6M.js";import{i as g,s as y}from"./cacheTTL-B7obvhff.js";const h=async(n,t,o)=>{if(!n||!t||!o)return;const r=i`
query GetCommentsByPostAdmin($AccountID: Int!, $PostID: Int!, $page: Int) {
    getCommentsByPostAdmin(AccountID: $AccountID, PostID: $PostID, page: $page) {
        hasNextPage
        totalPages
          currentPage
          res
        comments {
        id
       userId
            postId
            text
            likesCount
            dislikesCount
            repliesCount
            createdAt
            updatedAt
            ghost
             user {
             id
              username
            }
        }
    }
}
   `,e={AccountID:n,PostID:t,page:o},s=`getComments:${t}`,a=await g(s);try{const{data:m}=await c.query({query:r,variables:e,fetchPolicy:a?"cache-first":"network-only"}),l=m?.getCommentsByPostAdmin;if(a||await y(s),l){const u=m.getCommentsByPostAdmin,A="https://medias.info_center_template.com/",C=u.comments.map(d=>({...d,...d.profilePicture&&{profilePicture:A+d.profilePicture}}));return{...u,comments:C}}}catch(m){throw new Error(m.message||"Error fetching post comments")}},p=async(n,t)=>{if(!n||!t)return;const o=i`
      query getSingleCommentAdmin($AdminID: Int!, $CommentID: Int!) {
         getSingleCommentAdmin(AdminID: $AdminID, CommentID: $CommentID) {
                 id
                 postId
                userId
                 text
                  likesCount
                  dislikesCount
                 repliesCount
                  createdAt
                  updatedAt
                 ghost
                   user {
                   id
                      username
                    profilePicture
                  }
              }
          }
         `,r={AdminID:n,CommentID:t};try{const{data:e}=await c.query({query:o,variables:r});if(e.getSingleCommentAdmin){const s=e.getSingleCommentAdmin;return{...s,user:{...s?.comment?.user,...s?.comment?.user?.profilePicture&&{profilePicture:"https://medias.info_center_template.com/"+s.user.profilePicture}}}}}catch(e){throw new Error(e.message||"Error fetching post comments")}},I=async(n,t)=>{if(!n||!t)return;const o=i`
            mutation DeleteCommentAdmin($AccountID: Int!, $CommentID: Int!) {
      deleteCommentAdmin(AccountID: $AccountID, CommentID: $CommentID) {
          res
                }
            }
        `,r={AccountID:n,CommentID:t};try{const{data:e}=await c.mutate({mutation:o,variables:r,fetchPolicy:"no-cache"});if(e.deleteCommentAdmin)return e.deleteCommentAdmin}catch(e){throw new Error(e.message||"Error fetching user data.")}},f=async(n,t)=>{const o={AdminID:n,searchTerm:t};try{const r=i`
query searchCommentByAdmin($AdminID: Int!, $searchTerm: String!){
 searchCommentByAdmin(AdminID: $AdminID, searchTerm: $searchTerm) {
 res 
 comments {
       id
        userId
        text
        createdAt
  }}
}
        `,{data:e}=await c.query({query:r,variables:o});if(e.searchCommentByAdmin)return e.searchCommentByAdmin}catch(r){throw new Error(r.message||"Error signing up.")}},E={getSingleCommentAdmin:p,getCommentsByPostIDAdmin:h,deleteCommentAdmin:I,searchCommentByAdmin:f};export{E as C};
