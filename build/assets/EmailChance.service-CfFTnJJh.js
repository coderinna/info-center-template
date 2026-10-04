import{g as t,c as s}from"./services-CCUisz6M.js";const c=async e=>{if(!e)return;const a={Email:e};try{const i=t`
    mutation sendEmailResetLink($Email: String!) {
      sendEmailResetLink(Email: $Email) {
    res
      }
    }
  `,{data:r}=await s.mutate({mutation:i,variables:a});if(r.sendEmailResetLink)return r.sendEmailResetLink}catch(i){throw new Error(i.message||"Error ")}},E=async(e,a)=>{if(!e||!a)return;const i={Email:e,Token:a};try{const r=t`
    query verifyResetEmailLink($Email: String!, $Token: String!) {
  verifyResetEmailLink(Email: $Email, Token: $Token) {
        res
      }
    }
  `,{data:n}=await s.mutate({mutation:r,variables:i,fetchPolicy:"no-cache"});if(n.verifyResetEmailLink)return n.verifyResetEmailLink;throw new Error("Sign-in failed: No signIn data returned.")}catch(r){throw new Error(r.message||"Error signing in.")}},m=async(e,a,i)=>{if(!e||!a||!i)return;const r={Email:e,Token:a,newEmail:i};try{const n=t`
    mutation chanceEmailViaEmail($Email: String!, $Token: String!, $NewEmail: String!) {
     chanceEmailViaEmail(Email: $Email, Token: $Token, NewEmail: $NewEmail) {
     res
      }
    }
  `,{data:o}=await s.mutate({mutation:n,variables:r,fetchPolicy:"no-cache"});if(o.chanceEmail)return o.chanceEmail;throw new Error("Sign-in failed: No signIn data returned.")}catch(n){throw new Error(n.message||"Error signing in.")}},g={chanceEmail:c,resetEmail_url:E,chanceEmailEnd:m};export{g as A};
