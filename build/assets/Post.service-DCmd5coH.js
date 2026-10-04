import{g as a,c}from"./services-CCUisz6M.js";import{i as p,s as y}from"./cacheTTL-B7obvhff.js";import{C as l}from"./CacheHelperPost-CfWnWpOm.js";const I=async(e,s)=>{if(!s)return;const r=a`
      query GetPostByPostID($AccountID: Int, $PostID: Int!) {
        getPostByPostID(AccountID: $AccountID, PostID: $PostID) {
        res
      post{
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
                media{
                type
                media
                }
        user {
        id
            username
            profilePicture
        }
hashtags {
  hashtag {
    hashtag
  }
}
        tags {
           user {
               username
         }
        }
        channel {
        id
            username
           profilePicture
        }
  myReaction {
      reaction
  }
      linkContent{
      title
      image
      description
      }
            }
    }
}
    `,o=parseInt(s,10),t={AccountID:e,PostID:o},P=`getPost:${s}`,h=await p(P);try{const{data:i}=await c.query({query:r,variables:t,fetchPolicy:h?"cache-first":"network-only"}),m=i?.getPostByPostID;if(h||await y(P),m){const n=i.getPostByPostID,g="https://medias.info_center_template.com/",d=`https://medias.info_center_template.com/u/${n?.post?.userId}/f/${s}/images/`;return{...n,post:{...n?.post,user:{...n.post?.user,...n.post?.user?.profilePicture&&{profilePicture:g+n?.post?.user?.profilePicture}},media:n?.post?.media?.map(u=>({...u,media:u?.media?d+u.media:u.media}))}}}}catch(i){throw new Error(i.message||"Error fetching post by PostID.")}},f=async e=>{if(!e)return;const s=a`
     mutation CreatePost($postData: PostObject!) {
       createPost(postData: $postData) {
         post{
         id}
        res
        }
      }
    `,r={postData:e};try{const{data:o}=await c.mutate({mutation:s,variables:r});if(o.createPost){try{const t=o?.createPost?.post?.id;e?.channelId?l.action_CREATE_C(t,e?.channelId):l.action_CREATE(t)}catch{console.log("apollo cache edit error")}return o.createPost}}catch(o){throw console.log(o),new Error(o.message||"Error signing up.")}},D=async(e,s)=>{if(!e||!s)return;const r=a`
     query seachPostTagUsers($AccountID: Int!, $searchTerm: String!) {
seachPostTagUsers(AccountID: $AccountID, searchTerm: $searchTerm) {
res
        users {
        id
           username
        }
    }
}
    `,o={AccountID:e,searchTerm:s};try{const{data:t}=await c.query({query:r,variables:o,fetchPolicy:"no-cache"});if(t.seachPostTagUsers)return t.seachPostTagUsers}catch(t){throw new Error(t.message||"Error signing up.")}},w=async(e,s)=>{if(!e||!s)return;const r=a`
     query  seachPostHashtag($AccountID: Int!, $searchTerm: String!) {
 seachPostHashtag(AccountID: $AccountID, searchTerm: $searchTerm) {
        res
        hashtags {
            hashtag
        }
    }
}

    `,o={AccountID:e,searchTerm:s};try{const{data:t}=await c.query({query:r,variables:o,fetchPolicy:"no-cache"});if(t.seachPostHashtag)return t.seachPostHashtag}catch(t){throw new Error(t.message||"Error signing up.")}},$=async e=>{if(!e)return;const s=a`
     mutation updatePost($postData: PostObject!) {
   updatePost(postData: $postData) {
        res
        }
      }
    `,r={postData:e};try{const{data:o}=await c.mutate({mutation:s,variables:r,fetchPolicy:"no-cache"});if(o.updatePost)return o.updatePost}catch(o){throw new Error(o.message||"Error signing up.")}},E=async(e,s)=>{if(!e||!s)return;const r=a`
   mutation cancelDeletePost($PostID: Int!, $AccountID: Int!) {
       cancelDeletePost(PostID: $PostID,AccountID: $AccountID) {
res
        }
      }
    `,o={PostID:e,AccountID:s};try{const{data:t}=await c.mutate({mutation:r,variables:o,fetchPolicy:"no-cache"});if(t.cancelDeletePost)return t.cancelDeletePost}catch(t){throw new Error(t.message||"Error signing up.")}},A=async(e,s)=>{if(!e||!s)return;const r=a`
   mutation deletePost($PostID: Int!, $AccountID: Int!) {
        deletePost(PostID: $PostID,AccountID: $AccountID) {
res
        }
      }
    `,o={PostID:e,AccountID:s};try{const{data:t}=await c.mutate({mutation:r,variables:o,fetchPolicy:"no-cache"});if(t.deletePost)return t.deletePost}catch(t){throw new Error(t.message||"Error signing up.")}},T=async(e,s)=>{if(!e||!s)return;const r=a`
    mutation deletePostFinal($PostID: Int!, $AccountID: Int!) {
      deletePostFinal(PostID: $PostID, AccountID: $AccountID) {
        res
      }
    }
  `,o={PostID:e,AccountID:s};try{const{data:t}=await c.mutate({mutation:r,variables:o,fetchPolicy:"no-cache"});if(t?.deletePostFinal){try{l.action_DELETE_FINAL(e,s)}catch{console.log("apollo cache edit error")}return t.deletePostFinal}}catch(t){throw new Error(t.message||"Error deleting post.")}},F={createPost:f,createPost_tagged:D,createPost_hashtag:w,updatePost:$,removePost:A,removePostFinal:T,removePostCancel:E,getPostByPostID:I};export{F as P};
