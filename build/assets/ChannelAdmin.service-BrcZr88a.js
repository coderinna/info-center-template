import{g as s,c as o}from"./services-CCUisz6M.js";const l=async(e,n,a)=>{if(!e||!n)return;const t={AccountID:e,Username:n,Name:a};try{const r=s`
          query checkIsAvailableChannelUsername($AccountID: Int!, $Username: String!) {
   checkIsAvailableChannelUsername(AccountID: $AccountID, Username: $Username) {
res
            }
          }
        `,{data:c}=await o.query({query:r,variables:t,fetchPolicy:"network-only"});if(c.checkIsAvailableChannelUsername)return c.checkIsAvailableChannelUsername}catch(r){throw new Error(r.message||"Error fetching user data.")}},h=async(e,n,a)=>{if(!e||!n||!a)return;const t={AccountID:e,Username:n,Name:a};try{const r=s`
        mutation createChannel($AccountID: Int!, $Username: String!, $Name: String!) {
       createChannel(AccountID: $AccountID, Username: $Username, Name: $Name) {
         res
          }
        }
      `,{data:c}=await o.mutate({mutation:r,variables:t});if(c.createChannel)return c.createChannel}catch(r){throw new Error(r.message||"Error fetching user data.")}},i=async e=>{if(!e)return;const n={channelData:e};try{const a=s`
        mutation updateChannel($channelData: ChannelObject!) {
       updateChannel(channelData: $channelData) {
         res
          }
        }
      `,{data:t}=await o.mutate({mutation:a,variables:n});if(t.updateChannel)return t.updateChannel}catch(a){throw new Error(a.message||"Error fetching user data.")}},u=async(e,n)=>{if(!e||!n)return;const a={AdminID:e,ChannelID:n};try{const t=s`
        mutation deleteChannel($AdminID: Int!, $ChannelID: Int!) {
       deleteChannel(AdminID: $AdminID, ChannelID: $ChannelID) {
         res
          }
        }
      `,{data:r}=await o.mutate({mutation:t,variables:a});if(r.deleteChannel)return r.deleteChannel}catch(t){throw new Error(t.message||"Error fetching user data.")}},m={checkIsAvailableChannelUsername:l,createChannel:h,updateChannel:i,deleteChannel:u};export{m as C};
