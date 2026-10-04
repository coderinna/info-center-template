import{g as c,c as o}from"./services-CCUisz6M.js";const i=async(a,r)=>{const t=c`
      query fetchAllChannelsAdmin($AccountID: Int!, $page: Int) {
    fetchAllChannelsAdmin(AccountID: $AccountID, page: $page) {
        hasNextPage
        res
        channels {
  id
   username
          name
     membersCount
        }
    }
}
    `,n={AccountID:a,page:r};try{const{data:e}=await o.query({query:t,variables:n});if(e.fetchAllChannelsAdmin)return e.fetchAllChannelsAdmin}catch(e){throw new Error(e.message||"Error fetching user data.")}},m=async(a,r,t)=>{const n=c`
      query getChannelPosts($AccountID: Int!, $ChannelID: Int!, $page: Int) {
      getChannelPosts(AccountID: $AccountID, ChannelID: $ChannelID, page: $page) {
        hasNextPage
        res
        posts {
            PostID
           AccountID
            ChannelID
            Text
            createdAt
            res
            user{
            AccountID
            Username
            Name
    }
        }
    }
}
    `,e={AccountID:a,ChannelID:r,page:t};try{const{data:s}=await o.query({query:n,variables:e});if(s.getChannelPosts)return s.getChannelPosts}catch(s){throw new Error(s.message||"Error fetching user data.")}},d=async(a,r)=>{const t={AdminID:a,ChannelID:r};try{const n=c`
        mutation deleteChannelAdmin($AdminID: Int!, $ChannelID: Int!) {
       deleteChannelAdmin(AdminID: $AdminID, ChannelID: $ChannelID) {
         res
          }
        }
      `,{data:e}=await o.mutate({mutation:n,variables:t});if(e.deleteChannelAdmin)return e.deleteChannelAdmin}catch(n){throw new Error(n.message||"Error fetching user data.")}},A=async(a,r,t,n,e)=>{const s={AccountID:a,ChannelID:r,page:t,type:n,searchTerm:e};try{const h=c`
          query getChannelFollowers($AccountID: Int!, $ChannelID: Int!, $page: Int!, $type: String, $searchTerm: String) {
         getChannelFollowers(AccountID: $AccountID, ChannelID: $ChannelID, page: $page, type: $type, searchTerm: $searchTerm) {
        hasNextPage
        res
        users {
        AccountID
            Username
            Name
            ProfilePicture
        }
    }
}

        `,{data:l}=await o.query({query:h,variables:s});if(l.getChannelFollowers)return l.getChannelFollowers}catch(h){throw new Error(h.message||"Error fetching user data.")}},u=async(a,r)=>{const t={AccountID:a,ChannelID:r};try{const n=c`
          query fetchChannelAdmin($AccountID: Int!, $ChannelID: Int!) {
           fetchChannelAdmin(AccountID: $AccountID, ChannelID: $ChannelID) {
        res  
        channel{
         id
        status
        username
        name
        allowMemberPosting
        allowFollow
       slogan
       description
        profilePicture
       cover
        isPublic
        publicMembers
        membersCount
        createdAt
      }
            }
          }
        `,{data:e}=await o.query({query:n,variables:t});if(e.fetchChannelAdmin)return e.fetchChannelAdmin}catch(n){throw new Error(n.message||"Error fetching user data.")}},I=async(a,r)=>{const t={AdminID:a,searchTerm:r};try{const n=c`
query  searchChannelByUsernameAndNameAdmin($AdminID: Int!, $searchTerm: String!){
searchChannelByUsernameAndNameAdmin(AdminID : $AdminID, searchTerm: $searchTerm) {
 res
 channels {
id
name
username
membersCount
createdAt
  }
    }
}
        `,{data:e}=await o.query({query:n,variables:t});if(e.searchChannelByUsernameAndNameAdmin)return e.searchChannelByUsernameAndNameAdmin}catch(n){throw new Error(n.message||"Error signing up.")}},C=async(a,r,t)=>{const n={AdminID:a,ChannelID:r,searchTerm:t};try{const e=c`
query  seachNewChannelAdmin($AdminID: Int!, $ChannelID: Int!, $searchTerm: String!){
 seachNewChannelAdmin(AdminID : $AdminID, ChannelID: $ChannelID, searchTerm: $searchTerm) {
AccountID
            Username
            Name
        
    }
}
        `,{data:s}=await o.query({query:e,variables:n});if(s.seachNewChannelAdmin)return s.seachNewChannelAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},D=async(a,r,t)=>{const n={AdminID:a,AccountID:r,ChannelID:t};try{const e=c`
mutation addChannelAdmin($AdminID: Int!, $ChannelID: Int!, $AccountID: Int!){
addChannelAdmin(AdminID: $AdminID, ChannelID: $ChannelID, AccountID: $AccountID) {
res
        
    }
}
        `,{data:s}=await o.mutate({mutation:e,variables:n});if(s.addChannelAdmin)return s.addChannelAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},$={fetchChannel:u,searchChannelByUsernameAndName:I,getChannels:i,getChannelFollowers:A,getChannelPosts:m,deleteChannel:d,seachNewChannelAdmin:C,addChannelAdmin:D};export{$ as K};
