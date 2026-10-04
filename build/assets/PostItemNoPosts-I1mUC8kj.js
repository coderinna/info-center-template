import{g as d,c as y}from"./services-CCUisz6M.js";import{i as h,s as p}from"./cacheTTL-B7obvhff.js";import{m as A,j as u,b5 as E}from"./vendor-C7C9t1z-.js";let I=` hasNextPage
        res
        posts {
        id
      userId
        text
        title
        likesCount
        dislikesCount
        commentsCount
        status
        isPublic
        link
        allowLikes
        allowComments
        payWall
        createdAt
        updatedAt
        location
        locationLat
        locationLon
                        myReaction {
                reaction
            }
       tags {
                user {
                id
                    username
                      }
                        }
hashtags {
  hashtag {
    hashtag
  }
}
                media{
                type
               media
                }
        }`,N=`hasNextPage
        res
        posts {
        id
      userId
      channelId
        text
        title
        likesCount
        dislikesCount
        commentsCount
        status
        isPublic
        link
        allowLikes
        allowComments
        payWall
        createdAt
        updatedAt
        location
        locationLat
        locationLon
        user {
        id
            username
            profilePicture
        }
       tags {
                user {
                id
                    username
                      }
                        }
hashtags {
  hashtag {
    hashtag
  }
}
                media{
                type
               media
                }
        }`,w=`hasNextPage
        res
        posts {
        id
      userId
        text
        title
        likesCount
        dislikesCount
        commentsCount
        status
        isPublic
        link
        allowLikes
        allowComments
        payWall
        createdAt
        updatedAt
        location
        locationLat
        locationLon
                            user {
                            id
                    username
                    profilePicture
                      }
                        myReaction {
               reaction
            }
       tags {
                user {
                id
                   username
                      }
                        }
hashtags {
  hashtag {
    hashtag
  }
}
                media{
                type
                media
                }
        }`;const k=async(s,t)=>{if(!s||!t)return;const r=d`
      query GetPostByAccountID($AccountID: Int!, $page: Int) {
        getPostByAccountID(AccountID: $AccountID, page: $page) {
${I}  
      }
  }
    `,n={AccountID:s,page:t},e="getMyPosts",o=await h(e);try{const{data:a}=await y.query({query:r,variables:n,fetchPolicy:o?"cache-first":"network-only"}),c=a?.getPostByAccountID;if(o||await p(e),c){const i=a.getPostByAccountID,f="https://medias.info_center_template.com/";return{...i,posts:i?.posts?.map(g=>{const m=`https://medias.info_center_template.com/u/${s}/f/${g?.id}/images/`;return{...g,media:g?.media?.map(l=>({...l,media:l?.media?m+l.media:l.media}))}})}}}catch(a){throw new Error(a.message||"Error signing up.")}},x=async(s,t,r)=>{if(!s||!t||!r)return;const n=d`
      query GetPostByAccountID_Friend($AccountID: Int!, $FriendID: Int!, $page: Int) {
      getPostByAccountID_Friend(AccountID: $AccountID, FriendID: $FriendID, page: $page) {
    ${I}  
        hasNextPage
        res
      }
  }
    `,e={AccountID:s,FriendID:t,page:r};try{const o=`getPostByFriend:${t}`,a=await h(o),{data:c}=await y.query({query:n,variables:e,fetchPolicy:a?"cache-first":"network-only"}),i=c?.getPostByAccountID_Friend;if(a||await p(o),i){const f=c.getPostByAccountID_Friend,$="https://medias.info_center_template.com/";return{...f,posts:f?.posts?.map(m=>{const l=`https://medias.info_center_template.com/u/${t}/f/${m?.id}/images/`;return{...m,media:m?.media?.map(P=>({...P,media:P?.media?l+P.media:P.media}))}})}}}catch(o){throw new Error(o.message||"Error signing up.")}},D=async(s,t)=>{if(!s||!t)return;const r=d`
      query getMyPosts($AccountID: Int!, $page: Int) {
        getMyPosts(AccountID: $AccountID, page: $page) {
      ${w}   
        hasNextPage
        res
      } } 
         `,n={AccountID:s,page:t};try{const e="myPosts",o=await h(e),{data:a}=await y.query({query:r,variables:n,fetchPolicy:o?"cache-first":"network-only"}),c=a?.getMyPosts;if(o||await p(e),c)return a.getMyPosts}catch(e){throw new Error(e.message||"Error signing up.")}},W=async(s,t)=>{if(!s||!t)return;const r=d`
query getWorldPosts($AccountID: Int!, $page: Int!) {
  getWorldPosts(AccountID: $AccountID, page: $page) {
         ${w}   
        hasNextPage
        res
      }
  }
    `,n={AccountID:s,page:t};try{const e="getWorldPosts",o=await h(e),{data:a}=await y.query({query:r,variables:n,fetchPolicy:o?"cache-first":"network-only"}),c=a?.getWorldPosts;if(o||await p(e),c)return a.getWorldPosts}catch(e){throw new Error(e.message||"Error signing up.")}},q=async()=>{const s=d`
query   fetchWelcomePosts {
  fetchWelcomePosts {
         ${w}   
        res
      }
  }
    `;try{const t="fetchWelcomePosts",r=await h(t),{data:n}=await y.query({query:s,fetchPolicy:r?"cache-first":"network-only"}),e=n?.fetchWelcomePosts;if(r||await p(t),e)return n.fetchWelcomePosts}catch(t){throw new Error(t.message||"Error signing up.")}},j={myPostByAccountID:k,myPostByAccountID_Friend:x,myPosts:D,worldSearch:W,fetchWelcomePosts:q},v=()=>{const{t:s}=A(),t=s("Post",{returnObjects:!0});return u.jsx("div",{className:"PostsEmpty_container",children:u.jsxs("div",{className:"PostsEmpty_card",children:[u.jsx("div",{className:"PostsEmpty_iconWrapper",children:u.jsx(E,{className:"PostsEmpty_icon"})}),u.jsx("div",{className:"PostsEmpty_title",children:t?.header_empty||"The wall is empty"}),u.jsx("div",{className:"PostsEmpty_text",children:t?.no_post_text||"Täällä ei ole vielä julkaisuja. Uudet postaukset näkyvät täällä."})]})})};export{v as F,j as P,N as a,w as p};
