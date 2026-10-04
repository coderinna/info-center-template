import{g as d,c as o}from"./services-CCUisz6M.js";const c=async(n,a,t)=>{const r={AdminID:n,page:a};try{const e=d`
query getAllBannedWords($AdminID: Int!, $page: Int) {
getAllBannedWords(AdminID: $AdminID, page: $page) {
       currentPage
        totalPages
        hasNextPage
        words {
     id
           word
        }
    }
}

  `,{data:s}=await o.query({query:e,variables:r,fetchPolicy:t?"network-only":"cache-first"});if(s.getAllBannedWords)return s.getAllBannedWords}catch(e){throw new Error(e.message||"Error signing up.")}},i=async(n,a)=>{const t={AdminID:n,Word:a};try{const r=d`
mutation createBannedWord($AdminID: Int!, $Word: String!) {
createBannedWord(AdminID: $AdminID, Word: $Word) {
message
}
}
  `,{data:e}=await o.mutate({mutation:r,variables:t});if(e.createBannedWord)return e.createBannedWord}catch(r){throw new Error(r?.message||"Error signing up.")}},g=async(n,a)=>{const t={AdminID:n,BannedWordID:a};try{const r=d`
mutation deleteBannedWord($AdminID: Int!, $BannedWordID: Int!) {
deleteBannedWord(AdminID: $AdminID, BannedWordID: $BannedWordID) {
message
}
}
  `,{data:e}=await o.mutate({mutation:r,variables:t});if(e.deleteBannedWord)return e.deleteBannedWord}catch(r){throw new Error(r.message||"Error signing up.")}},m=async(n,a)=>{const t={AdminID:n,searchTerm:a};try{const r=d`
query searchBannedWord($AdminID: Int!, $searchTerm: String!){
searchBannedWord(AdminID: $AdminID, searchTerm: $searchTerm) {
 id
   word
    }
}
        `,{data:e}=await o.query({query:r,variables:t});if(e.searchBannedWord)return e.searchBannedWord}catch(r){throw new Error(r.message||"Error signing up.")}},B={searchBannedWord:m,getBannedWords:c,createBannedWord:i,deleteBannedWord:g};export{B as K};
