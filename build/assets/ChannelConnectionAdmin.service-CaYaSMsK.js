import{g as i,c as h}from"./services-CCUisz6M.js";const c=async(r,t,a)=>{const s={AdminID:r,AccountID:t,ChannelID:a};if(!(!r||!t||!a))try{const e=i`
      mutation requestJoinInChannelByAdmin($AdminID: Int!, $AccountID: Int!,  $ChannelID: Int!) {
      requestJoinInChannelByAdmin( AdminID: $AdminID, AccountID: $AccountID, ChannelID: $ChannelID) {
          res
        }
      }
    `,{data:n}=await h.mutate({mutation:e,variables:s});if(n?.requestJoinInChannelByAdmin)return n.requestJoinInChannelByAdmin;throw new Error("No response from server.")}catch(e){throw new Error(e.message||"Error handling join action.")}},m=async(r,t,a,s)=>{const e={AdminID:r,AccountID:t,ChannelID:a,action:s};if(!(!r||!t||!a||!s))try{const n=i`
      mutation handleChannelMemberStatusByAdmin( $AdminID: Int!,$AccountID: Int!, $ChannelID: Int!, $action: String!) {
      handleChannelMemberStatusByAdmin( AdminID: $AdminID,AccountID: $AccountID, ChannelID: $ChannelID, action: $action) {
          res
        }
      }
    `,{data:o}=await h.mutate({mutation:n,variables:e});if(o?.handleChannelMemberStatusByAdmin)return o.handleChannelMemberStatusByAdmin;throw new Error("No response from server.")}catch(n){throw new Error(n.message||"Error handling join action.")}},d=async(r,t,a,s)=>{const e={AdminID:r,AccountID:t,ChannelID:a,action:s};if(!(!r||!t||!a||!s))try{const n=i`
      mutation createChannelAdmin( $AdminID: Int!, $AccountID: Int!, $ChannelID: Int!) {
      createChannelAdmin(AdminID: $AdminID, AccountID: $AccountID, ChannelID: $ChannelID) {
          res
        }
      }
    `,{data:o}=await h.mutate({mutation:n,variables:e});if(o?.createChannelAdmin)return o.createChannelAdmin;throw new Error("No response from server.")}catch(n){throw new Error(n.message||"Error handling join action.")}},l=async(r,t,a,s)=>{const e={AdminID:r,Username:t,ChannelID:a,action:s};if(!(!r||!a||!searchTerm))try{const n=i`
      mutation handleChannelAdminStatusByAdmin( $AdminID: Int!, $Username: String!, $ChannelID: Int!, $action: String!) {
     handleChannelAdminStatusByAdmin(AdminID: $AdminID, Username: $Username,  ChannelID: $ChannelID, action: $action) {
          res
        }
      }
    `,{data:o}=await h.mutate({mutation:n,variables:e});if(o?.handleChannelAdminStatusByAdmin)return o.handleChannelAdminStatusByAdmin;throw new Error("No response from server.")}catch(n){throw new Error(n.message||"Error handling join action.")}},A=async(r,t,a)=>{const s={AdminID:r,ChannelID:t,action:a};if(!(!r||!t||!a))try{const e=i`
      mutation handleMyChannelAdminStatus($AdminID: Int!, $ChannelID: Int!, $action: String!) {
     handleMyChannelAdminStatus(AdminID: $AdminID, ChannelID: $ChannelID, action: $action) {
          res
        }
      }
    `,{data:n}=await h.mutate({mutation:e,variables:s});if(n?.handleMyChannelAdminStatus)return n.handleMyChannelAdminStatus;throw new Error("No response from server.")}catch(e){throw new Error(e.message||"Error handling join action.")}},I=async(r,t,a)=>{const s={AdminID:r,ChannelID:t,searchTerm:a};if(!(!r||!t||!a))try{const e=i`
          query seachAdminForChannel($AdminID: Int!, $ChannelID: Int!, $searchTerm: String!) {
          seachAdminForChannel(AdminID: $AdminID, ChannelID: $ChannelID, searchTerm: $searchTerm) {
        res  
        users{
        Username
      }}
          }
        `,{data:n}=await h.query({query:e,variables:s,fetchPolicy:"cache-first"});if(n.seachAdminForChannel)return n.seachAdminForChannel}catch(e){throw new Error(e.message||"Error fetching user data.")}},u=async(r,t,a)=>{const s={AdminID:r,ChannelID:t,searchTerm:a};if(!(!r||!t||!a))try{const e=i`
          query seachUsersForChannel($AdminID: Int!, $ChannelID: Int!, $searchTerm: String!) {
        seachUsersForChannel(AdminID: $AdminID, ChannelID: $ChannelID, searchTerm: $searchTerm) {
        res  
        users{
        id
        username
      }}
          }
        `,{data:n}=await h.query({query:e,variables:s});if(n.seachUsersForChannel)return n.seachUsersForChannel}catch(e){throw new Error(e.message||"Error fetching user data.")}},$={searchNewChannelMembers:u,requestJoinInChannelByAdmin:c,handleMemberByAdmin:m,searchNewAdmins:I,joinInAdminByAdmin:d,handleAdminByAdmin:l,handleMyAdminStatus:A};export{$ as K};
