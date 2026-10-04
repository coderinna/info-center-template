import{c as s,g as u}from"./services-CCUisz6M.js";import{i as E,s as _}from"./cacheTTL-B7obvhff.js";const P=(t,o,r,c)=>{const a=s.cache.identify({__typename:"Comment",id:t});if(!a){console.warn("⛔ cacheId puuttuu");return}const n=s.cache.identify({__typename:"User",id:c});try{s.cache.writeFragment({id:`Comment:${t}`,fragment:u`
    fragment InitComment on Comment {
      id
      AccountID
      PostID
      Text
      LikesCount
      DislikesCount
      RepliesCount
      createdAt
      updatedAt
      Ghost
      myReaction
      user {
        id
        AccountID
        ProfilePicture
        Username
        __typename
      }
      __typename
    }
  `,data:{__typename:"Comment",id:t,AccountID:c,Text:o,createdAt:Date.now(),updatedAt:null,RepliesCount:0,LikesCount:0,DislikesCount:0,PostID:r,Ghost:"N",user:null,myReaction:null}}),a&&n&&s.cache.modify({id:`Comment:${t}`,fields:{user(){return{__ref:`User:${c}`}}}})}catch(e){console.error("❌ cache modify failed:",e)}try{s.cache.modify({id:"ROOT_QUERY",fields:{getCommentsByPost(e={},m){const{readField:l,storeFieldName:i}=m,d={...e,comments:Array.isArray(e?.comments)?e.comments:[]};let f={};if(i?.includes("(")){const C=i.slice(i.indexOf("(")+1,i.lastIndexOf(")"));try{f=JSON.parse(C)}catch{console.warn("⚠️ args parse failed:",C)}}if(!(Number(f?.PostID)===Number(r))||d.comments.some(C=>{const h=l("id",C);return Number(h)===Number(t)}))return e;const g={__typename:"Comment",id:t};return{...d,comments:[...d.comments,g]}}}})}catch(e){console.error("❌ modify failed",e)}},A=(t,o)=>{if(s.cache.identify({__typename:"Comment",id:t}))try{s.cache.modify({id:"ROOT_QUERY",fields:{getCommentsByPost(c={},a){const{readField:n,storeFieldName:e}=a;let m={};if(e.includes("(")){const d=e.slice(e.indexOf("(")+1,e.lastIndexOf(")"));try{m=JSON.parse(d)}catch{console.warn("⚠️ args parse failed")}}if(!(m.PostID===o)||!c?.comments)return c;const i=c.comments.filter(d=>n("id",d)!==t);return{...c,comments:i}}}})}catch(c){console.error("❌ modify delete failed",c)}},$=t=>{const o=s.cache.identify({__typename:"Comment",id:t});if(o)try{s.cache.evict({id:o}),s.cache.gc()}catch{console.error("evict failed")}},p={action_DELETE:A,action_CREATE:P,action_NOT_FOUND:$},D=async(t,o,r)=>{if(!t||!o||!r)return;const c=u`
query GetCommentsByPost($AccountID: Int!, $PostID: Int!, $page: Int) {
    getCommentsByPost(AccountID: $AccountID, PostID: $PostID, page: $page) {
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
   `,a={AccountID:t,PostID:o,page:r},n=`getComments:${o}`,e=await E(n);try{const{data:m}=await s.query({query:c,variables:a,fetchPolicy:e?"cache-first":"network-only"}),l=m?.getCommentsByPost;if(e||await _(n),l){const i=m.getCommentsByPost,d="https://medias.info_center_template.com/",f=i.comments.map(y=>({...y,...y.profilePicture&&{profilePicture:d+y.profilePicture}}));return{...i,comments:f}}}catch(m){throw new Error(m.message||"Error fetching post comments")}},T=async(t,o,r)=>{if(!t||!r||!o)return;const c=u`
      query getSingleComment($AccountID: Int!, $CommentID: Int!, $PostID: Int!) {
         getSingleComment(AccountID: $AccountID, CommentID: $CommentID, PostID: $PostID) {
                 res
                 comment{
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
          }
         `,a={AccountID:t,CommentID:o?parseInt(o,10):void 0,PostID:r?parseInt(r,10):void 0};try{const{data:n}=await s.query({query:c,variables:a});if(n.getSingleComment){const e=n.getSingleComment;return{...e,user:{...e?.comment?.user,...e?.comment?.user?.profilePicture&&{profilePicture:"https://medias.info_center_template.com/"+e.user.profilePicture}}}}}catch(n){throw new Error(n.message||"Error fetching post comments")}},w=async(t,o,r,c)=>{if(!t||!o||!r)return;const a=u`
       mutation CreateComment($AccountID: Int!, $PostID: Int!, $Text: String!) {
           createComment(AccountID: $AccountID, PostID: $PostID, Text: $Text) {
           res
            comment {
            id
            }
           }
       }
    `,n={AccountID:t,PostID:o,Text:r};try{const{data:e}=await s.mutate({mutation:a,variables:n});if(e.createComment){try{const m=e?.createComment?.comment?.id;p.action_CREATE(m,r,o,c)}catch{console.log("apollo cache edit error")}return e.createComment}}catch(e){throw new Error(e.message||"Error creating comment.")}},O=async(t,o,r)=>{if(!t||!o||!r)return;const c=u`
        mutation UpdateComment($AccountID: Int!, $CommentID: Int!, $Text: String!) {
            updateComment(AccountID: $AccountID, CommentID: $CommentID, Text: $Text) {
                    res
            }
        }
    `,a={AccountID:t,CommentID:o,Text:r};try{const{data:n}=await s.mutate({mutation:c,variables:a,fetchPolicy:"no-cache"});if(n.updateComment)return n.updateComment}catch(n){throw new Error(n.message||"Error fetching user data.")}},N=async(t,o,r)=>{if(!t||!o||!r)return;const c=u`
            mutation DeleteComment($AccountID: Int!, $CommentID: Int!) {
      deleteComment(AccountID: $AccountID, CommentID: $CommentID) {
          res
                }
            }
        `,a={AccountID:t,CommentID:o};try{const{data:n}=await s.mutate({mutation:c,variables:a,fetchPolicy:"no-cache"});if(n.deleteComment){try{p.action_DELETE(o,r)}catch{console.log("apollo cache edit error")}return n.deleteComment}}catch(n){throw new Error(n.message||"Error fetching user data.")}},S={getCommentsByPostID:D,getSingleComment:T,createComment:w,updateComment:O,deleteComment:N};export{S as C,p as a};
