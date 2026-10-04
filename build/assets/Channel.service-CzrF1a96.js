import{g as h,c as u}from"./services-CCUisz6M.js";import{i as m,s as g}from"./cacheTTL-B7obvhff.js";const C=async(n,a)=>{if(!a||!n)return;const t=h`
    query getChannelByUsername($AccountID: Int!, $Username: String!) {
      getChannelByUsername(AccountID: $AccountID, Username: $Username) {
        res
        channel {
          id
          username
          name
          profilePicture
          status
          cover
          slogan
          description
         isPublic
          allowMemberPosting
          allowFollow
          membersCount
          createdAt
    updatedAtUsername
    updatedAtName
          channelMy {
            id
            status
            admin
          }
        }
      }
    }
  `,c={AccountID:n,Username:a};try{const s=`getChannelByUsername:${a}`,r=await m(s),{data:i}=await u.query({query:t,variables:c,fetchPolicy:r?"cache-first":"network-only"}),e=i?.getChannelByUsername;if(r||await g(s),e){const o=i?.getChannelByUsername,l="https://medias.info_center_template.com/";return{...o,channel:{...o?.channel,...o?.channel?.profilePicture&&{profilePicture:l+o?.channel?.profilePicture},...o?.channel?.cover&&{cover:l+o?.channel?.cover}}}}}catch(s){throw new Error(s.message||"Error fetching user data.")}},d=async n=>{if(!n)return;const a=h`
    query getChannelByUsernamePublic($Username: String!) {
      getChannelByUsernamePublic(Username: $Username) {
        res
        channel {
          id
          username
          name
          profilePicture
          cover
          slogan
          description
         isPublic
          membersCount
          createdAt
        }
      }
    }
  `,t={Username:n};try{const c=`getChannelByUsernamePublic:${n}`,s=await m(c),{data:r}=await u.query({query:a,variables:t,fetchPolicy:s?"cache-first":"network-only"}),i=r?.getChannelByUsernamePublic;if(s||await g(c),i){const e=r?.getChannelByUsernamePublic,o="https://medias.info_center_template.com/";return{...e,channel:{...e?.channel,...e?.channel?.profilePicture&&{profilePicture:o+e?.channel?.profilePicture},...e?.channel?.cover&&{cover:o+e?.channel?.cover}}}}}catch(c){throw new Error(c.message||"Error fetching user data.")}},P=async(n,a,t)=>{if(!n||!t)return;const c=h`
      query GetNewChannels($AccountID: Int!, $searchData: SearchObject, $page: Int) {
       getNewChannels(AccountID: $AccountID, searchData: $searchData, page: $page) {
        hasNextPage
        res
        channels {
        name
            username
            profilePicture
         isPublic
          membersCount
        }
    }
}
    `,s={AccountID:n,searchData:a,page:t};try{const r=`getNewChannel:${t}`,i=await m(r),{data:e}=await u.query({query:c,variables:s,fetchPolicy:i?"cache-first":"network-only"}),o=e?.getNewChannels;if(i||await g(r),e?.getNewChannels){const l=e.getNewChannels,y="https://medias.info_center_template.com/",w=l.channels?.map(f=>({...f,...f?.profilePicture&&{profilePicture:y+f.profilePicture}}));return{res:l.res,channels:w,hasNextPage:l.hasNextPage}}}catch(r){throw new Error(r.message||"Error fetching user data.")}},E=async(n,a,t,c)=>{if(!n||!a||!t)return;const s=h`
      query  getMyChannelUnified($AccountID: Int!, $type: String!, $page: Int) {
       getMyChannelUnified(AccountID: $AccountID, type: $type, page: $page) {
        hasNextPage
        res
        channels {
            username
            profilePicture
         isPublic
          membersCount
        }
    }
}
    `,r={AccountID:n,type:a,page:t};try{const i=`getMyChannelUnified:${t}`,e=await m(i),{data:o}=await u.query({query:s,variables:r,fetchPolicy:c||!e?"network-only":"cache-first"}),l=o?.getMyChannelUnified;if(e||await g(i),l){const y=o.getMyChannelUnified,w="https://medias.info_center_template.com/",f=y?.channels?.map(p=>({...p,...p?.profilePicture&&{profilePicture:w+p.profilePicture}}));return{...y,channels:f}}}catch(i){throw new Error(i.message||"Error fetching user data.")}},$=async(n,a,t)=>{if(!n||!a||!t)return;const c=h`
    query getChannelsByUser_friend($AccountID: Int!, $Username: String!, $page: Int) {
      getChannelsByUser_friend(AccountID: $AccountID, Username: $Username, page: $page) {
        hasNextPage
        res
        channels {
 id
    username
   name
  profilePicture
         isPublic
          membersCount
        }
      }
    }
  `,s={AccountID:n,Username:a,page:t};try{const{data:r}=await u.query({query:c,variables:s,fetchPolicy:"cache-first"});return r?.getChannelsByUser_friend||null}catch(r){throw new Error(r.message||"Error fetching user data.")}},N=async(n,a,t,c,s,r)=>{if(!n||!a||!t||!c)return;const i={AccountID:n,ChannelID:a,page:t,type:c,searchTerm:s};try{const e=h`
          query getChannelFollowers($AccountID: Int!, $ChannelID: Int!, $page: Int!, $type: String, $searchTerm: String) {
         getChannelFollowers(AccountID: $AccountID, ChannelID: $ChannelID, page: $page, type: $type, searchTerm: $searchTerm) {
        hasNextPage
        res
        users {
        id
           username
        }
    }
}

        `,o=!!s||r,{data:l}=await u.query({query:e,variables:i,fetchPolicy:o?"network-only":"cache-first"});if(l.getChannelFollowers)return l.getChannelFollowers}catch(e){throw new Error(e.message||"Error fetching user data.")}},I={fetchChannelByUsername:C,fetchChannelByUsernamePublic:d,getNewChannels:P,getMyJoinedChannels:E,getMyJoinedChannels_friend:$,getChannelFollowers:N};export{I as K};
