import{g as c,c as n}from"./services-CCUisz6M.js";const s=async e=>{if(e)try{const r=c`
  query getEmail($AccountID: Int!) {
    getEmail(AccountID: $AccountID) {    
   email
   res
    }
  }
`,t={AccountID:e},{data:a}=await n.query({query:r,variables:t,fetchPolicy:"no-cache"});if(a?.getEmail)return a.getEmail}catch(r){throw new Error(r.message||"Error")}},o=async e=>{if(!e)return;const r={AccountID:e};try{const t=c`
     query dataRequest($AccountID: Int!) {
 dataRequest(AccountID: $AccountID) {
res
createdAt
    }
  }
`,{data:a}=await n.query({query:t,variables:r});if(a.dataRequest)return a.dataRequest}catch(t){throw new Error(t.message||"Error signing in.")}},i=async e=>{if(!e)return;const r={AccountID:e};try{const t=c`
  mutation createDataRequest($AccountID: Int!) {
    createDataRequest(AccountID: $AccountID) {
    res
    }
  }
`,{data:a}=await n.mutate({mutation:t,variables:r,fetchPolicy:"no-cache"});if(a.createDataRequest)return a.createDataRequest}catch(t){throw new Error(t.message||"Error signing in.")}},q={dataRquest:o,createDataRquest:i,getMyEmail:s};export{q as K};
