import{g as n,c as o}from"./services-CCUisz6M.js";const c=async a=>{try{const t=n`
mutation updateDateProfileAdmin($dateData: dateObject!) {
updateDateProfileAdmin(dateData: $dateData) {
    res
    }
}
   `,{data:e}=await o.mutate({mutation:t,variables:{dateData:a}});if(e.updateDateProfileAdmin)return e.updateDateProfileAdmin}catch(t){throw new Error(t.message||"Error fetching user data.")}},d=async(a,t)=>{try{const e=n`
mutation deleteDateProfileAdmin($AdminID: Int!, $AccountID: Int!) {
deleteDateProfileAdmin(AdminID: $AdminID, AccountID: $AccountID) {
    res
    }
}
   `,{data:r}=await o.mutate({mutation:e,variables:{AdminID:a,AccountID:t}});if(r.deleteDateProfileAdmin)return r.deleteDateProfileAdmin}catch(e){throw new Error(e.message||"Error fetching user data.")}},s=async(a,t)=>{try{const e=n`
query getDateProfileAdmin($AccountID: Int!, $DateID: Int!) {
 getDateProfileAdmin(AccountID: $AccountID, DateID: $DateID) {
        res
        dateProfile {
        id
        userId
        createdAt
          name
            bio
            relationshipStatus
            profilePicture
            cover
           age
            ageStart
            ageEnd
            gender
            genderLookingAt
            lookingAt
            job
            education
            kids
            smoking
            drinking
            sexArray{
            id
            }
            petArray{
            id
            }
            hobbyArray{
            id
            }
            pic
            pic2
            pic3
            pic4
            pic5
        }
    }
}
   `,r={AccountID:a,DateID:t},{data:i}=await o.query({query:e,variables:r});if(i.getDateProfileAdmin)return i.getDateProfileAdmin}catch(e){throw new Error(e.message||"Error fetching user data.")}},l=async(a,t)=>{try{const e=n`
query getAllDateProfilesAdmin($AccountID: Int!, $page: Int!) {
getAllDateProfilesAdmin(AccountID: $AccountID, page: $page) {
        res
              dateProfiles{
              id
            userId
            name
               createdAt
    }
    }
}
   `,r={AccountID:a,page:t},{data:i}=await o.query({query:e,variables:r});if(i.getAllDateProfilesAdmin)return i.getAllDateProfilesAdmin}catch(e){throw new Error(e.message||"Error fetching user data.")}},A={getDateProfile:s,updateDate:c,deleteDate:d,getAllDateProfiles:l};export{A as K};
