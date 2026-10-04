import{g as o,c}from"./services-CCUisz6M.js";const i=async(n,t,r)=>{const s={AdminID:n,ReportID:t,Answer:r};try{const e=o`
mutation handleReportAdmin($AdminID: Int!, $ReportID: Int!, $Answer: String!) {
handleReportAdmin(AdminID: $AdminID, ReportID: $ReportID, Answer: $Answer) {
message
    }
}
  `,{data:a}=await c.mutate({mutation:e,variables:s});if(a.handleReportAdmin)return a.handleReportAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},m=async(n,t,r,s)=>{try{const e={AdminID:n,page:t,status:r},a=o`
  query getReportsAdmin($AdminID: Int!, $page: Int!, $status: String) {
    getReportsAdmin( AdminID: $AdminID,   page: $page,   status: $status ) {
      reports {
        id
     userId
        reportedUserId
        title
        message
        status
        createdAt
        answer
      }
      currentPage
      totalPages
      hasNextPage
    }
  }
`,{data:d}=await c.query({query:a,variables:e,fetchPolicy:s?"network-only":"cache-first"});return d?.getReportsAdmin?d.getReportsAdmin:{reports:[],currentPage:t,totalPages:0,hasNextPage:!1}}catch(e){throw new Error(e.message||"Error fetching reports.")}},p=async n=>{try{const t=o`
mutation createReport($reportData: ReportObject!) {
  createReport(reportData: $reportData) {
    res
    }
}
   `,{data:r}=await c.mutate({mutation:t,variables:{reportData:n}});if(r.createReport)return r.createReport}catch(t){throw new Error(t.message||"Error fetching user data.")}},I=async(n,t)=>{const r=o`
query getReportByReportIDAdmin($AdminID: Int!, $ReportID: Int!) {
getReportByReportIDAdmin(AdminID: $AdminID, ReportID: $ReportID) {
      id
      userId
      status
      reportedUserId
      message
      createdAt
      title
      adminId
      answer
     copy
      postId
      commentId
      replyId
      channelId
    }
}
   `,s={AdminID:n,ReportID:t};try{const{data:e}=await c.query({query:r,variables:s});if(e.getReportByReportIDAdmin)return e.getReportByReportIDAdmin}catch(e){throw new Error(e.message||"Error fetching user data.")}},A=async(n,t,r,s)=>{const e=o`
query getReportsByAccountAdmin($AccountID: Int!, $AdminID: Int!,  $page: Int!, $badUser: Boolean) {
    getReportsByAccountAdmin(AccountID: $AccountID,  AdminID: $AdminID, page: $page, badUser: $badUser) {
    res
        reports{
     id
       userId
          reportedUserId
            adminId
            title
            message
            status
     postId
      commentId
      replyId
      channelId
     messageId
            createdAt
            }
           currentPage
          totalPages
          hasNextPage
        }
    }
   `,a={AccountID:n,AdminID:t,page:r,badUser:s};try{const{data:d}=await c.query({query:e,variables:a});if(d.getReportsByAccountAdmin)return d.getReportsByAccountAdmin}catch(d){throw new Error(d.message||"Error fetching user data.")}},g=async(n,t,r)=>{const s=o`
query getReportsByChannelAdmin($ChannelID: Int!, $AdminID: Int!, $page: Int!) {
getReportsByChannelAdmin(ChannelID: $ChannelID,  AdminID: $AdminID, page: $page) {
        reports{
     id
     userId
     reportedUserId
            adminId
            title
            message
            status
      channelId
            createdAt
            }
           currentPage
          totalPages
          hasNextPage
        }
    }
   `,e={ChannelID:n,AdminID:t,page:r};try{const{data:a}=await c.query({query:s,variables:e});if(a.getReportsByChannelAdmin)return a.getReportsByChannelAdmin}catch(a){throw new Error(a.message||"Error fetching user data.")}},R=async(n,t)=>{const r=o`
mutation deleteReportAdmin($AdminID: Int!, $ReportID: Int!) {
    deleteReportAdmin(AdminID: $AdminID, ReportID: $ReportID) {
     message
    }
}
   `,s={AdminID:n,ReportID:t};try{const{data:e}=await c.mutate({mutation:r,variables:s});if(e.deleteReportAdmin)return e.deleteReportAdmin}catch(e){throw new Error(e.message||"Error fetching user data.")}},u=async(n,t,r)=>{const s={AdminID:n,searchTerm:t,Title:r};try{const e=o`
    query searchReportAdmin($AdminID: Int!, $searchTerm: String!, $Title: String!){
       searchReportAdmin(AdminID : $AdminID, searchTerm: $searchTerm, Title: $Title) {
       id
        AccountID
        ReportedAccountID
        AdminID
        Title
        Message
        Status
        Answer
        createdAt
        }
    }
            `,{data:a}=await c.query({query:e,variables:s});if(a.searchReportAdmin)return a.searchReportAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},y={searchReport:u,createReport:p,getReport:I,getReports:m,deleteReport:R,getReportsByAccount:A,getReportsByChannel:g,handleReceivedReport:i};export{y as K};
