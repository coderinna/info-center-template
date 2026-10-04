import{g as r,c as n}from"./services-CCUisz6M.js";const o=async(a,i)=>{const e={AdminID:a};try{const t=r`
query getStatisticsAdmin($AdminID: Int!) {
  getStatisticsAdmin(AdminID: $AdminID){
    totalUsers
    totalUserPrivs
      totalChannels
    totalComments
    totalPosts
     totalChats
      totalDates
  }
}
  `,{data:s}=await n.query({query:t,variables:e,fetchPolicy:i?"network-only":"cache-first"});if(s.getStatisticsAdmin)return s.getStatisticsAdmin}catch(t){throw new Error(t.message||"Error signing up.")}},l={getStatistics:o};export{l as K};
