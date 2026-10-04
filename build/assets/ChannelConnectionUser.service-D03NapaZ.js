import{g as i,c}from"./services-CCUisz6M.js";const s=async(a,t)=>{const e={AccountID:a,ChannelID:t};if(!(!a||!t))try{const o=i`
      mutation joinInChannel($AccountID: Int!, $ChannelID: Int!) {
        joinInChannel(AccountID: $AccountID, ChannelID: $ChannelID) {
         res
        }
      }
    `,{data:n}=await c.mutate({mutation:o,variables:e});if(n.joinInChannel)return n.joinInChannel}catch(o){throw new Error(o.message||"Error joining channel.")}},h=async(a,t,e)=>{const o={AccountID:a,ChannelID:t,action:e};if(!(!a||!t))try{const n=i`
      mutation handleJoinInChannel($AccountID: Int!, $ChannelID: Int!, $action: String!) {
        handleJoinInChannel(AccountID: $AccountID, ChannelID: $ChannelID, action: $action) {
          res
        }
      }
    `,{data:r}=await c.mutate({mutation:n,variables:o});if(r?.handleJoinInChannel)return r.handleJoinInChannel;throw new Error("No response from server.")}catch(n){throw new Error(n.message||"Error handling join action.")}},I={joinInChannel:s,handleJoinInChannel:h};export{I as P};
