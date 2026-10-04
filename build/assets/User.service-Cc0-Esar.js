import{g as o,c as m}from"./services-CCUisz6M.js";const d=async(a,r)=>{const i={AdminID:a,AccountID:r};try{const n=o`
        query getUserPrivateByAdmin($AdminID: Int!, $AccountID: Int!) {
        getUserPrivateByAdmin(AdminID: $AdminID, AccountID: $AccountID) {
                id
                email
                status
                dob
                emailVerified
               banExpiry
                createdAt
                user 
              {id
                  status
                   username
                   name
                   slogan 
                    description
                    cover
                    profilePicture
                    verified
                    postsCount
friendsCount
followedCount
channelsCount
                }
          }
        }
          `,{data:t}=await m.query({query:n,variables:i});if(t.getUserPrivateByAdmin)return t.getUserPrivateByAdmin}catch(n){throw new Error(n.message||"Error signing up.")}},u=async(a,r,i)=>{const n={AdminID:a,AccountID:r,StatusExpiry:i};try{const t=o`
     mutation updateUserPrivateStatusFrozenAdmin( $AdminID:Int!, $AccountID: Int!, $StatusExpiry: String) {
updateUserPrivateStatusFrozenAdmin(AdminID: $AdminID,AccountID: $AccountID,  StatusExpiry: $StatusExpiry) {
   message
    }
}
  `,{data:e}=await m.mutate({mutation:t,variables:n});if(e.updateUserPrivateStatusFrozenAdmin)return e.updateUserPrivateStatusFrozenAdmin}catch(t){throw new Error(t.message||"Error signing up.")}},A=async(a,r)=>{const i={AdminID:a,AccountID:r};try{const n=o`
     mutation updateUserPrivateStatusBannedAdmin( $AdminID: Int!, $AccountID: Int!) {
updateUserPrivateStatusBannedAdmin(AdminID: $AdminID, AccountID: $AccountID) {
   message
    }
}
  `,{data:t}=await m.mutate({mutation:n,variables:i});if(t.updateUserPrivateStatusBannedAdmin)return t.updateUserPrivateStatusBannedAdmin}catch(n){throw new Error(n.message||"Error signing up.")}},I=async(a,r,i,n)=>{if(!a||!r||!i||!n)return;const t={AccountID:a,AdminID:r,Text:i,Subject:n};try{const e=o`
mutation sendEmailByAdmin($AdminID: Int!, $AccountID: Int!, $Text: String!, $Subject: String!) {
    sendEmailByAdmin(AdminID: $AdminID, AccountID: $AccountID, Text: $Text, Subject: $Subject) {
        message
    }
}
  `,{data:s}=await m.mutate({mutation:e,variables:t});if(s.sendEmailByAdmin)return s.sendEmailByAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},D=async(a,r,i)=>{const n={AdminID:a,AccountID:r,NewEmail:i};try{const t=o`
  mutation  chanceEmailAdmin($AdminID: Int!, $AccountID: Int!, $NewEmail: String!) {
 chanceEmailAdmin(AdminID: $AdminID, AccountID: $AccountID, NewEmail: $NewEmail) {
res
    }
  }
`,{data:e}=await m.mutate({mutation:t,variables:n});if(e.chanceEmailAdmin)return e.chanceEmailAdmin}catch(t){throw new Error(t.message||"Error signing in.")}},g=async(a,r,i,n,t)=>{const e={AdminID:a,AccountID:r,ChannelID:i,newName:n,message:t};try{const s=o`
mutation updateNameByAdmin($AdminID: Int!, $AccountID: Int, $ChannelID: Int, $newName: String!, $message: String) {
updateNameByAdmin( AdminID: $AdminID, AccountID: $AccountID, ChannelID: $ChannelID, newName: $newName, message: $message) {
message
}
}
  `,{data:c}=await m.mutate({mutation:s,variables:e});if(c.updateNameByAdmin)return c.updateNameByAdmin}catch(s){throw new Error(s.message||"Error signing up.")}},$=async(a,r,i,n)=>{const t={AdminID:a,AccountID:r,ChannelID:i,message:n};try{const e=o`
mutation updateUsernameByAdmin($AdminID: Int!, $AccountID: Int, $ChannelID: Int, $message: String) {
updateUsernameByAdmin( AdminID: $AdminID, AccountID: $AccountID, ChannelID: $ChannelID, message: $message) {
message
}
}
  `,{data:s}=await m.mutate({mutation:e,variables:t});if(s.updateUsernameByAdmin)return s.updateUsernameByAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},E=async(a,r,i,n)=>{const t={AdminID:a,AccountID:r,ChannelID:i,message:n};try{const e=o`
mutation updateSloganByAdmin($AdminID: Int!, $AccountID: Int, $ChannelID: Int, $message: String) {
updateSloganByAdmin( AdminID: $AdminID, AccountID: $AccountID, ChannelID: $ChannelID, message: $message) {
message
}
}
  `,{data:s}=await m.mutate({mutation:e,variables:t});if(s.updateSloganByAdmin)return s.updateSloganByAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},l=async(a,r,i,n)=>{const t={AdminID:a,AccountID:r,ChannelID:i,message:n};try{const e=o`
mutation updateDescriptionByAdmin($AdminID: Int!, $AccountID: Int, $ChannelID: Int, $message: String) {
updateDescriptionByAdmin( AdminID: $AdminID, AccountID: $AccountID, ChannelID: $ChannelID, message: $message) {
message
}
}
  `,{data:s}=await m.mutate({mutation:e,variables:t});if(s.updateDescriptionByAdmin)return s.updateDescriptionByAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},y=async(a,r,i)=>{const n={AccountID:a,AdminID:r,type:i};try{const t=o`
mutation deleteProfileImagesAdmin($AdminID: Int!, $AccountID: Int!, $type: String!) {
deleteProfileImagesAdmin(AdminID: $AdminID, AccountID: $AccountID, type: $type) {
message
    }
}
  `,{data:e}=await m.mutate({mutation:t,variables:n});if(e.deleteProfileImagesAdmin)return e.deleteProfileImagesAdmin}catch(t){throw new Error(t.message||"Virhe.")}},p=async(a,r)=>{const i={AccountID:a,AdminID:r};try{const n=o`
mutation deleteUserAdmin($AdminID: Int!, $AccountID: Int!) {
 deleteUserAdmin(AdminID: $AdminID, AccountID: $AccountID,) {
message
    }
}
  `,{data:t}=await m.mutate({mutation:n,variables:i});if(t.deleteUser)return t.deleteUser}catch(n){throw new Error(n.message||"Virhe.")}},U=async(a,r)=>{const i={AccountID:a,AdminID:r};try{const n=o`
mutation LogOutUser($AdminID: Int!, $AccountID: Int!) {
 LogOutUser(AdminID: $AdminID, AccountID: $AccountID,) {
message
    }
}
  `,{data:t}=await m.mutate({mutation:n,variables:i});if(t.LogOutUser)return t.LogOutUser}catch(n){throw new Error(n.message||"Virhe.")}},w={getUserPrivate:d,chanceEmail:D,updateUserPrivateStatusFrozen:u,updateUserPrivateStatusBanned:A,sendEmailByAdmin:I,updateNameByAdmin:g,updateUsernameByAdmin:$,updateSloganByAdmin:E,updateDescriptionByAdmin:l,deleteProfileImages:y,deleteUser:p,LogOutOtherUser:U};export{w as R};
