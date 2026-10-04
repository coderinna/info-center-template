import{g as c,c as i}from"./services-CCUisz6M.js";const A=async(n,a)=>{const r={AdminID:n,page:a};try{const e=c`
  query GetContactsAdmin($AdminID: Int!, $page: Int) {
    getContactsAdmin(AdminID: $AdminID, page: $page) {
      contacts {
        id
        name
       email
       status
       message
        answer
        type
        createdAt
      }
      currentPage
      totalPages
      hasNextPage
    }
  }
`,{data:t}=await i.query({query:e,variables:r});if(t.getContactsAdmin)return t.getContactsAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},g=async(n,a)=>{const r={AdminID:n,page:a};try{const e=c`
  query getDMCAsAdmin($AdminID: Int!, $page: Int) {
  getDMCAsAdmin(AdminID: $AdminID, page: $page) {
      contacts {
        id
       name
       email
        status
       message
       adminAnswer
       userAnswer
       createdAt
       url
        type
      }
      currentPage
      totalPages
      hasNextPage
    }
  }
`,{data:t}=await i.query({query:e,variables:r});if(t.getDMCAsAdmin)return t.getDMCAsAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},m=async(n,a,r)=>{const e={AdminID:n,ContactID:a,Answer:r};try{const t=c`
 mutation answerInContactAdmin($AdminID: Int!, $ContactID: Int!, $Answer: String!) {
   answerInContactAdmin(AdminID: $AdminID, ContactID: $ContactID, Answer: $Answer) {
message
    }
  }
`,{data:s}=await i.mutate({mutation:t,variables:e});if(s.answerInContactAdmin)return s.answerInContactAdmin}catch(t){throw new Error(t.message||"Error signing up.")}},d=async(n,a,r,e=!1)=>{const t={AdminID:n,type:a,page:r};try{const s=c`
query fetchDataRequests($AdminID: Int!, $type: String!, $page: Int!) {
  fetchDataRequests(AdminID: $AdminID, type: $type, page: $page) {
res
dataRequests{
id
userId
createdAt
readyAt
}
    }
  }
`,{data:o}=await i.query({query:s,variables:t,fetchPolicy:e?"network-only":"cache-first",variables:t});if(o.fetchDataRequests)return o.fetchDataRequests}catch(s){throw new Error(s.message||"Error signing up.")}},I={contactAnswer:m,fetchContacts:A,fetchDMCAs:g,fetchDataRequests:d};export{I as A};
