import{g as o,c as t}from"./services-CCUisz6M.js";const c=async a=>{const{Email:e,Username:n}=a;if(!e&&!n)return;const s={Email:e||void 0,Username:n||void 0};try{const r=o`
    mutation sendPasswordResetLink($Email: String, $Username: String) {
      sendPasswordResetLink(Email: $Email, Username: $Username) {
  res
      }
    }
  `,{data:i}=await t.mutate({mutation:r,variables:s,fetchPolicy:"no-cache"});if(i.sendPasswordResetLink)return i.sendPasswordResetLink;throw console.error("Error: No data returned from mutation."),new Error("Sign-in failed: No signIn data returned.")}catch(r){throw new Error(r.message||"Error signing in.")}},d=async(a,e)=>{const n={Email:a,Token:e};if(!(!a||!e))try{const s=o`
  query VerifyResetPasswordLink( $Email: String!, $Token: String!) {
    verifyResetPasswordLink( Email: $Email, Token: $Token) {
  res
    }
  }
`,{data:r}=await t.query({query:s,variables:n,fetchPolicy:"no-cache"});if(r.verifyResetPasswordLink)return r.verifyResetPasswordLink;throw new Error("Sign-in failed: No signIn data returned.")}catch(s){throw console.error("Sign-in error:",s),new Error(s.message||"Error signing in.")}},l=async(a,e,n)=>{const s={Email:a,Token:e,Password:n};if(!(!a||!e||!n))try{const r=o`
    mutation chancePasswordViaEmail($Email: String!, $Token: String!, $Password: String!) {
     chancePasswordViaEmail(Email: $Email, Token: $Token, Password: $Password) {
      res
     }
    }
`,{data:i}=await t.mutate({mutation:r,variables:s,fetchPolicy:"no-cache"});if(i.chancePasswordViaEmail)return i.chancePasswordViaEmail;throw new Error("Sign-in failed: No signIn data returned.")}catch(r){throw console.error("Sign-in error:",r),new Error(r.message||"Error signing in.")}},m={lostPassword:c,resetPassword_url:d,chancePassword:l};export{m as A};
