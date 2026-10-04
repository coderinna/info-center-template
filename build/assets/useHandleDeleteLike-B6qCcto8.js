import{g as h,c as D}from"./services-CCUisz6M.js";import{k as n,e as k}from"./index-Dog7C49N.js";const m=async(c,e)=>{if(!(!c||!e))try{const t=h`
mutation makeDateLike($AccountID: Int!, $DateID: Int!) {
 makeDateLike(AccountID: $AccountID, DateID: $DateID) {
    res
    chat{
       id
       chatId
         user{
            id
            username
    }
    }
    }
}
   `,r={AccountID:c,DateID:e},{data:a}=await D.mutate({mutation:t,variables:r,fetchPolicy:"no-cache"});if(a.makeDateLike){try{const o=a?.makeDateLike?.res==="MATCH";n.action_CREATE_LIKE(e,o)}catch{console.log("apollo cache edit error")}try{a?.makeDateLike?.res==="MATCH"&&k.action_CREATE_CHAT(a?.makeDateLike?.chat,a?.makeDateLike?.chat?.user)}catch{console.log("apollo cache edit error")}return a.makeDateLike}}catch(t){throw new Error(t.message||"Error fetching user data.")}},d=async(c,e)=>{if(!(!c||!e))try{const t=h`
mutation  deleteDateLike($AccountID: Int!, $DateID: Int!) {
 deleteDateLike(AccountID: $AccountID, DateID: $DateID) {
    res
    }
}
   `,{data:r}=await D.mutate({mutation:t,variables:{AccountID:c,DateID:e},fetchPolicy:"no-cache"});if(r.deleteDateLike){try{n.action_DELETE_LIKE(e)}catch{console.log("apollo cache edit error")}return r.deleteDateLike}}catch(t){throw new Error(t.message||"Error fetching user data.")}},u={makeDateLike:m,deleteDateLike:d},f=async({User:c,profile:e,setDateProfile:t,setDateProfiles:r,setAnimate:a})=>{try{let o=e?.id;a(!0);const l=await u.deleteDateLike(c?.id,e?.id);["OK","INVALID","LIKED"].includes(l?.res)&&(t(i=>({...i,liked:!1,match:!1})),r(i=>i.map(s=>s?.id===e?.id?{...s,deleted:!0,liked:!1,match:!1}:s))),l?.res==="NOT_FOUND"&&n.action_NOT_FOUND(o)}catch{}finally{setTimeout(()=>a(!1),500)}};export{u as P,f as h};
