import{c,g as u}from"./services-CCUisz6M.js";import{m as f,n as l}from"./index-Dog7C49N.js";const h=a=>{let t=c.cache.identify({__typename:"User",id:a});try{c.cache.modify({id:"ROOT_QUERY",fields:{getMyFriendRelations(e={},{readField:n,storeFieldName:r,toReference:s}){let o;if(r){const i=r.match(/\((.*)\)/);i&&(o=JSON.parse(i[1]).type)}if(o!=="banned"||!e?.users)return e;const d=s({__typename:"User",id:a});return{...e,users:[...e.users,d]}}}})}catch{console.error("modify 1 failed")}try{c.cache.modify({id:t,fields:{followerStatus(e){return{__typename:"FollowerStatus",status:"BANNED"}}}})}catch{console.error("modify 2 failed")}try{c.cache.modify({id:t,fields:{friendStatus(e){return{__typename:"FriendStatus",status:null}}}})}catch{console.error("modify 3 failed")}try{c.cache.modify({id:"ROOT_QUERY",fields:{getMyFriendRelations(e={},{readField:n,storeFieldName:r,toReference:s}){let o;if(r){const i=r.match(/\((.*)\)/);i&&(o=JSON.parse(i[1]).type)}return!e?.users||!(o==="followers"||o==="friends"||o==="pending_sent"||o==="pending_received")?e:{...e,users:e.users.filter(i=>n("id",i)!==a)}}}})}catch{console.error("modify 4 failed")}console.log("banning end")},m=(a,t)=>{try{c.cache.modify({id:"ROOT_QUERY",fields:{getMyFriendRelations(e={},{readField:n,storeFieldName:r,toReference:s}){let o;if(r){const d=r.match(/\((.*)\)/);d&&(o=JSON.parse(d[1]).type)}return o!=="banned"||!e?.users?e:{...e,users:e.users.filter(d=>n("id",d)!==a)}}}})}catch{console.error("modify 1 failed")}try{if(!t)return;const e=c.cache.identify({__typename:"FollowerStatus",id:t});e&&c.cache.writeFragment({id:e,fragment:u`
        fragment FollowerStatusField on FollowerStatus {
       status
          id
        }
      `,data:{status:null,id:null}})}catch{console.error("modify 2 failed")}},E={action_UNBAN:m,action_BAN:h},_=async(a,t,e)=>{if(!a||!e||!t)return;const n=u`
mutation createFriend($AccountID: Int!, $FriendID: Int!) {
    createFriend(AccountID: $AccountID, FriendID: $FriendID){
    res
    friendStatusId
    }
}
  `,r={AccountID:a,FriendID:t};try{const{data:s}=await c.mutate({mutation:n,variables:r});if(s.createFriend){try{let o=s?.createFriend?.friendStatusId;l.action_NEW(e,o)}catch{console.log("apollo cache edit error")}return s.createFriend}}catch(s){throw new Error(s.message||"Error signing up.")}},F=async(a,t,e,n)=>{if(!a||!t||!e||!n)return;const r=u`
    mutation updateFriendStatus($AccountID: Int!, $id: Int!, $action: String!, $UserID: Int) {
      updateFriendStatus(AccountID: $AccountID, id: $id, action: $action, UserID: $UserID) {
        res
      }
    }
  `,s={AccountID:a,id:t,action:e};try{const{data:o}=await c.mutate({mutation:r,variables:s});if(o.updateFriendStatus){try{e==="UNBAN"&&E.action_UNBAN(n,t),e==="BAN"&&E.action_BAN(n,t),e==="ACCEPT"&&f.action_ACCEPT(n,t),e==="DENY"&&f.action_DENY(n,t),e==="DELETE_SENT"&&l.action_DELETE_SENT(n,t),e==="DELETE_FRIEND"&&l.action_DELETE(n,t),e==="DELETE_FOLLOWER"&&f.action_DELETE(n,t)}catch{console.log("apollo cache edit error")}return o.updateFriendStatus}}catch(o){throw new Error(o.message||"Error accepting friend request.")}},I=async(a,t)=>{if(!a||!t)return;const e=u`
mutation DeleteFriend($AccountID: Int!, $id: Int!) {
    deleteFriend(AccountID: $AccountID, id: $id){
    res
}
}
  `,n={AccountID:a,id:t};try{const{data:r}=await c.mutate({mutation:e,variables:n});if(r.deleteFriend)return r.deleteFriend}catch(r){throw new Error(r.message||"Error signing up.")}},p=async(a,t)=>{if(!a||!t)return;const e=u`
mutation banUser($AccountID: Int!, $FriendID: Int!) {
  banUser(AccountID: $AccountID, FriendID: $FriendID){
    res
}
}
  `,n={AccountID:a,FriendID:t};try{const{data:r}=await c.mutate({mutation:e,variables:n});if(r.banUser){try{E.action_BAN(id)}catch{console.log("apollo cache edit error")}return r.banUser}}catch(r){throw new Error(r.message||"Error signing up.")}},D=async(a,t)=>{if(!a||!t)return;const e=u`
mutation fetchUserConnection($AccountID: Int!, $FriendID: Int!) {
  fetchUserConnection(AccountID: $AccountID, FriendID: $FriendID){
    res
        friendStatus {
            id
            status
        }
         followerStatus {
            id
            status
        }
}
}
  `,n={AccountID:a,FriendID:t};try{const{data:r}=await c.mutate({mutation:e,variables:n,fetchPolicy:"network-only"});if(r.fetchUserConnection)return r.fetchUserConnection}catch(r){throw new Error(r.message||"Error signing up.")}},A={sendFriendRequest:_,UpdateFriendStatus:F,deleteFriend:I,BanUser:p,fetchUserConnection:D};export{A as K};
