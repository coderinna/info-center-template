import{g as n,c}from"./services-CCUisz6M.js";import{i as y,s as D}from"./cacheTTL-B7obvhff.js";const E=async(r,i)=>{if(!(!r||!i))try{const t=n`
query getDateProfile($AccountID: Int!, $DateID: Int!) {
 getDateProfile(AccountID: $AccountID, DateID: $DateID) {
        res
        dateProfile {
        id
            bio
            relationshipStatus
            cover
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
            liked
        }
    }
}
   `,l={AccountID:r,DateID:i},d=`getDateProfile:${i}`,o=await y(d),{data:s}=await c.query({query:t,variables:l,fetchPolicy:o?"cache-first":"network-only"}),h=s?.getDateProfile;if(o||await D(d),h){const e=s?.getDateProfile,g="https://medias.info_center_template.com/",u=["pic","pic2","pic3","pic4","pic5"];return{...e,dateProfile:{...e?.dateProfile,...e?.dateProfile?.profilePicture&&{profilePicture:g+e.dateProfile.profilePicture},...e?.dateProfile?.cover&&{cover:g+e.dateProfile.cover},...u.reduce((a,f)=>(e?.date?.[f]&&(a[f]=`${g}${e.date[f]}`),a),{})}}}}catch(t){throw new Error(t.message||"Error fetching user data.")}},I=async(r,i)=>{if(!(!r||!i))try{const t=n`
query  getMyLikedDateProfiles($AccountID: Int!, $page: Int) {
    getMyLikedDateProfiles(AccountID: $AccountID, page: $page) {
        res
        hasNextPage
        dateProfiles {
        id
            age
            name
            profilePicture
            gender
            calculatedDistance
        }
    }
}
   `,l={AccountID:r,page:i},d="getMyLikedDateProfiles",o=await y(d),{data:s}=await c.query({query:t,variables:l,fetchPolicy:o?"cache-first":"network-only"}),h=s?.getMyLikedDateProfiles;if(o||await D(d),h){s?.getMyLikedDateProfiles?.dates?.forEach(a=>{const f=c.cache.identify({__typename:"Date",id:a.id});f&&c.cache.writeFragment({id:f,fragment:n`
        fragment LikedField on Date {
         liked
        }
      `,data:{liked:!0}})});const e=s.getMyLikedDateProfiles,g=e.dateProfiles||[],u="https://medias.info_center_template.com/",m=g.map(a=>{const f=c.cache.writeFragment({id:c.cache.identify({__typename:"DateProfile",id:a.id}),fragment:n`
    fragment LikedField on DateProfile {
      liked
    }
  `,data:{liked:!0}});return{liked:!0,...a,...a?.profilePicture&&{profilePicture:u+a.profilePicture}}});return{res:e?.res,dateProfiles:m}}}catch(t){throw new Error(t.message||"Error fetching user data.")}},$=async(r,i)=>{if(!(!r||!i))try{const t=n`
query getHowLikedMyDateProfiles($AccountID: Int!, $page: Int) {
 getHowLikedMyDateProfiles(AccountID: $AccountID, page: $page) {
        res
        hasNextPage
     dateProfiles {
        id
            age
            name
            profilePicture
            gender
            calculatedDistance
        }
    }
}
   `,l={AccountID:r,page:i}}catch(t){throw new Error(t.message||"Error fetching user data.")}},A=async(r,i)=>{if(!(!r||!i))try{const t=n`
query getMyMatches($AccountID: Int!, $page: Int) {
getMyMatches(AccountID: $AccountID, page: $page) {
        res
        hasNextPage
    dateProfiles {
     id
        name
            age
            profilePicture
            gender
            calculatedDistance
            user {
               id
               username
            }
        }
    }
}
   `,l={AccountID:r,page:i},d="getMyMatches",o=await y(d),{data:s}=await c.query({query:t,variables:l,fetchPolicy:o?"cache-first":"network-only"}),h=s?.getMyMatches;if(o||await D(d),h){const e=s.getMyMatches,g=e.dateProfiles||[],u="https://medias.info_center_template.com/",m=g.map(a=>{const f=c.cache.readFragment({id:c.cache.identify({__typename:"Date",id:a.id}),fragment:n`
      fragment MatchField on Date {
        match
      }
    `});return{...a,match:!0,...a?.profilePicture&&{profilePicture:u+a.profilePicture}}});return{res:e?.res,dateProfiles:m}}}catch(t){throw new Error(t.message||"Error fetching user data.")}},L=async(r,i,t=!1)=>{if(r)try{const l=n`
      query getAllDateProfiles($AccountID: Int!, $page: Int) {
        getAllDateProfiles(AccountID: $AccountID, page: $page) {
          res
          hasNextPage
          dateProfiles {
          id
           name
            age
            profilePicture
            gender
            calculatedDistance
          }
        }
      }
    `,d={AccountID:r,page:i},o="getAllDateProfiles",s=await y(o),h=t||s,{data:e}=await c.query({query:l,variables:d,fetchPolicy:h?"network-only":"cache-first"}),g=e?.getAllDateProfiles;if(s||await D(o),g){const u=e.getAllDateProfiles,m=u.dateProfiles||[],a="https://medias.info_center_template.com/",f=m.map(P=>{const p=c.cache.identify({__typename:"Date",id:P.id}),w=c.cache.readFragment({id:p,fragment:n`
    fragment MatchField on Date {
      match
    }
  `}),k=c.cache.readFragment({id:p,fragment:n`
    fragment LikesMeField on Date {
      likesme
    }
  `}),M=c.cache.readFragment({id:p,fragment:n`
    fragment LikedField on Date {
      liked
    }
  `});return{match:w?.match??!1,likesme:k?.likesme??!1,liked:M?.liked??!1,...P,...P?.profilePicture&&{profilePicture:a+P?.profilePicture}}});return{res:u?.res,dateProfiles:f}}return{res:"ERROR",hasNextPage:!1,date:[]}}catch(l){throw new Error(l.message||"Error fetching user data.")}},R={getDateProfile:E,getHowLikedMyDateProfiles:$,getMyLikedDateProfiles:I,getMyMatches:A,getAllDateProfiles:L};export{R as K};
