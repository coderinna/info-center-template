import{g as r,c as s}from"./services-CCUisz6M.js";const c=async(a,i,e,t)=>{try{const n=r`mutation GrantVIPstatusGiftAdmin(  $AdminID: Int!  $AccountID: Int!, $Text: String!,  $vipUntil: Int! ) {
    grantVIPstatusGiftAdmin(   AdminID: $AdminID , AccountID: $AccountID, Text: $Text,  vipUntil: $vipUntil
    ) {  
      message
    }
  }
`,{data:I}=await s.mutate({mutation:n,variables:{AdminID:a,AccountID:i,Text:e,vipUntil:t}});return I?.grantVIPstatusGiftAdmin}catch(n){throw new Error(n.message||"VIP mutation failed")}},o=async(a,i,e)=>{try{const t=r`query getGrantedVIPsGiftAdmin(  $AdminID: Int! , $page: Int! ) {
    getGrantedVIPsGiftAdmin(   AdminID: $AdminID , page: $page ) {  
    res
    vipGifts{
      id
      userId
      vipDays
      createdAt 
       }
    }
  }
`,{data:n}=await s.query({query:t,variables:{AdminID:a,page:i},fetchPolicy:e?"network-only":"cache-first"});return n?.getGrantedVIPsGiftAdmin}catch(t){throw new Error(t.message||"VIP mutation failed")}},m={grantVIPstatusGiftAdmin:c,getGrantedVIPsGiftAdmin:o};export{m as K};
