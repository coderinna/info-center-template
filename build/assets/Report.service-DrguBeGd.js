import{g as o,c}from"./services-CCUisz6M.js";import{i as R,s as h}from"./cacheTTL-B7obvhff.js";const I=async r=>{if(r)try{const t=o`
mutation createReport($reportData: ReportObject!) {
  createReport(reportData: $reportData) {
    res
    }
}
   `,{data:e}=await c.mutate({mutation:t,variables:{reportData:r},fetchPolicy:"no-cache"});if(e.createReport)return e.createReport}catch(t){throw new Error(t.message||"Error fetching user data.")}},D=async(r,t,e)=>{if(!r||!t)return;const n={AccountID:r,page:t,type:e};try{const s=o`
query getReportsByAccountID($AccountID: Int!, $page: Int, $type: String) {
  getReportsByAccountID(AccountID: $AccountID, page: $page, type: $type) {
        hasNextPage
        res
        reports {
            id
            title
            message
            status
            answer
            createdAt
            user {
               id
                username
                ghost
            }
        }
    }
}
   `,a=o`
query getReportsByAccountID($AccountID: Int!, $page: Int, $type: String) {
  getReportsByAccountID(AccountID: $AccountID, page: $page, type: $type) {
        hasNextPage
        res
        reports {
            id
            title
            message
            status
            answer
            createdAt
        }
    }
}
   `,g=e==="user"?s:a,p=`getReports:${e}`,u=await R(p),{data:i}=await c.query({query:g,variables:n,fetchPolicy:u?"cache-first":"network-only"}),y=i?.getReportsByAccountID;if(u||await h(p),y)return i.getReportsByAccountID}catch(s){throw new Error(s.message||"Error fetching user data.")}},$=async(r,t,e)=>{if(!r||!e||!t)return;const n={AccountID:r,ChannelID:t,page:e};try{const s=o`
query getReportsByChannelID($AccountID: Int!,  $ChannelID: Int!, $page: Int) {
getReportsByChannelID(AccountID: $AccountID, ChannelID: $ChannelID, page: $page) {
        hasNextPage
        reports {
            id
            title
            message
            status
            answer
            createdAt
        }
    }
}
   `,{data:a}=await c.query({query:s,variables:n});if(a.getReportsByChannelID)return a.getReportsByChannelID}catch(s){throw new Error(s.message||"Error fetching user data.")}},A={createReport:I,getReporstsByUser:D,getReportsByChannel:$};export{A as R};
