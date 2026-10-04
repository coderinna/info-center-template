import{c as a,g as u}from"./services-CCUisz6M.js";import{i as d,s as h}from"./cacheTTL-B7obvhff.js";const y=e=>{if(a.cache.identify({__typename:"Notice",id:e})){try{a.cache.modify({id:"ROOT_QUERY",fields:{getNotices(t={},{readField:o}){return t?.notices?{...t,notices:t.notices.filter(r=>o("id",r)!==e)}:t}}})}catch{console.error("modify 1 failed")}console.log("deleting notice ending")}},l={action_DELETE_NOTICE:y},f=async(e,c,t)=>{if(!e||!c||!t)return;const o=u`
query getLogsByAccountID($AccountID: Int!, $category: String!, $page: Int) {
    getLogsByAccountID(AccountID: $AccountID, category: $category, page: $page) {
        hasNextPage
        res
        logs {
            id
            action
            createdAt
        }
    }
}
   `,r={AccountID:e,category:c,page:t},s=`getLogs:${c}`,i=await d(s);try{const{data:n}=await a.query({query:o,variables:r,fetchPolicy:i?"cache-first":"network-only"}),g=n?.getLogsByAccountID;if(i||await h(s),g)return n.getLogsByAccountID}catch(n){throw new Error(n.message||"Error fetching user data.")}},E=async(e,c)=>{if(!(!e||!c))try{const t=u`
query GetNotices($AccountID: Int!,$page: Int){
    getNotices(AccountID: $AccountID,  page: $page) {
        hasNextPage
        res
        notices {
            id
            postId
            commentId
            action
            status
            category
            createdAt
            user {
                id
                username
            }
        }
    }
} `,o={AccountID:e,page:c},r="getNotices",s=3600*1e3,i=await d(r,s),{data:n}=await a.query({query:t,variables:o,fetchPolicy:i?"cache-first":"network-only"}),g=n?.getNotices;if(i||await h(r),g)return n?.getNotices}catch(t){throw new Error(t.message||"Error fetching user data.")}},I=async e=>{if(!e)return;const c=u`
query getNoticesCount($AccountID: Int!){
    getNoticesCount(AccountID: $AccountID) {
    counts{
      newChannelMemberReq
     newFriendRequests
      newChatReq
      newChannelAdminReq
      newTaggedReq
  }
}
}
`,t={AccountID:e};try{const{data:o}=await a.query({query:c,variables:t,fetchPolicy:"cache-first"});if(o.getNoticesCount)return o.getNoticesCount}catch(o){throw new Error(o.message||"Error fetching user data.")}},N=async(e,c)=>{if(!(!e||!c))try{const t=u`
mutation deleteNotice($AccountID: Int!, $id: Int!) {
   deleteNotice(AccountID: $AccountID, id: $id) {
res
      }
   }
`,o={AccountID:e,id:c},{data:r}=await a.mutate({mutation:t,variables:o,fetchPolicy:"no-cache"});if(r.deleteNotice){try{const s=c;l.action_DELETE_NOTICE(s)}catch{console.log("apollo cache edit error")}return r.deleteNotice}}catch(t){throw new Error(t.message||"Error fetching user data.")}},A={LogsByAccountID:f,Notices:E,NoticeCounts:I,deleteNotice:N};export{A as L};
