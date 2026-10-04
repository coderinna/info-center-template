import{g as n,c as i}from"./services-CCUisz6M.js";const c=async(s,t)=>{const a={AdminID:s,page:t};try{const e=n`
    query GetAllUsersAdmin($AdminID: Int!, $page: Int) {
        getAllUsersAdmin(AdminID: $AdminID, page: $page) {
          currentPage
        totalPages
        hasNextPage
        users {
                id
                username
                createdAt
        }
    }
}
      `,{data:r}=await i.query({query:e,variables:a});if(r.getAllUsersAdmin)return r.getAllUsersAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},A=async(s,t,a)=>{const e={AdminID:s,page:t,status:a};try{const r=n`
    query GetUsersByStatusAdmin($AdminID: Int!, $page: Int, $status: String) {
      getUsersByStatusAdmin(AdminID: $AdminID, page: $page, status: $status) {
          currentPage
        totalPages
        hasNextPage
        users {
            AccountID
            Email
            Status
            EmailVerified
            StatusExpiry
              user {
                AccountID
                Status
                Username
                Name
                createdAt
            }
        }
    }
}
      `,{data:m}=await i.query({query:r,variables:e});if(m.getUsersByStatusAdmin)return m.getUsersByStatusAdmin}catch(r){throw new Error(r.message||"Error signing up.")}},d=async(s,t)=>{const a={AdminID:s,searchTerm:t};try{const e=n`
query searchUserByUsernameAndNameAdmin($AdminID: Int!, $searchTerm: String!){
   searchUserByUsernameAndNameAdmin(AdminID : $AdminID, searchTerm: $searchTerm) {
   id     
   email
   createdAt
        user {
        username     
        }
    }
}
        `,{data:r}=await i.query({query:e,variables:a});if(r.searchUserByUsernameAndNameAdmin)return r.searchUserByUsernameAndNameAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},g={searchUserByUsernameAndName:d,getAllUsersAdmin:c,getUsersByStatus:A};export{g as K};
