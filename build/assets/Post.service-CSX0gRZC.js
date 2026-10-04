import{g as o,c as i}from"./services-CCUisz6M.js";const c=async(a,s)=>{const r={AdminID:a,searchTerm:s};try{const e=o`
query  searchPostByAdmin($AdminID: Int!, $searchTerm: String!){
 searchPostByAdmin(AdminID: $AdminID, searchTerm: $searchTerm) {
     res
     posts {
     id
     userId
     text
     title
     createdAt
     }
    }
}
        `,{data:t}=await i.query({query:e,variables:r});if(t.searchPostByAdmin)return t.searchPostByAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},g=async(a,s)=>{const r={AdminID:a,searchTerm:s};try{const e=o`
query searchHashtagByAdmin($AdminID: Int!, $searchTerm: String!){
 searchHashtagByAdmin(AdminID: $AdminID, searchTerm: $searchTerm) {
     res
 hashtags {
     id
 hashtag
     createdAt
     }
    }
} `,{data:t}=await i.query({query:e,variables:r});if(t.searchHashtagByAdmin)return t.searchHashtagByAdmin}catch(e){throw new Error(e.message||"Error signing up.")}},d=async(a,s)=>{const r={AdminID:a,PostID:s};try{const e=o`
      query GetPostByPostIDAdmin( $AdminID: Int!, $PostID: Int!) {
        getPostByPostIDAdmin(AdminID: $AdminID, PostID: $PostID) {
        res 
        post {
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
            hashtag
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
    `,{data:t}=await i.query({query:e,variables:r});if(t.getPostByPostIDAdmin)return t.getPostByPostIDAdmin}catch(e){throw new Error(e.message||"Error fetching post by PostID.")}},m=async(a,s,r)=>{const e=o`
    query getHashtagsAdmin($AccountID: Int!, $type: String! $page: Int!) {
      getHashtagsAdmin(AccountID: $AccountID, type: $type, page: $page) {
        hasNextPage
        hashtags {
         hashtag
          picture
          createdAt
        }
      }
    }
  `,t={AccountID:a,type:s,page:r};try{const{data:n}=await i.query({query:e,variables:t});if(n.getHashtagsAdmin)return n.getHashtagsAdmin}catch(n){throw console.error("GraphQL query error:",n),new Error(n.message||"Error fetching hashtags.")}},A=async(a,s)=>{const r=o`
    query getHashtagAdmin($AccountID: Int!, $hashtag: String!) {
      getHashtagAdmin(AccountID: $AccountID, hashtag: $hashtag) {
        id
       hashtag
          picture
          createdAt
          updatedAt
          count
      }
    }
  `,e={AccountID:a,hashtag:s};try{const{data:t}=await i.query({query:r,variables:e});if(t.getHashtagAdmin)return t.getHashtagAdmin}catch(t){throw console.error("GraphQL query error:",t),new Error(t.message||"Error fetching hashtags.")}},h=async(a,s)=>{const r=o`
   query getAllPostsAdmin($AdminID: Int!, $page: Int!) {
   getAllPostsAdmin(AdminID: $AdminID, page: $page) {
        currentPage
        totalPages
        hasNextPage
        posts {
            id
            userId
            text
            createdAt
        }
    }
}
    `,e={AdminID:a,page:s};try{const{data:t}=await i.query({query:r,variables:e});if(t.getAllPostsAdmin)return t.getAllPostsAdmin}catch(t){throw new Error(t.message||"Error signing up.")}},u=async(a,s,r)=>{const e=o`
   query    getPostsByAccountID_admin($AdminID: Int!, $AccountID: Int!, $page: Int) {
    getPostsByAccountID_admin(AdminID: $AdminID, AccountID: $AccountID, page: $page) {
        currentPage
        totalPages
        hasNextPage
        posts {
            PostID
            AccountID
            Text
            createdAt
        }
    }
}
    `,t={AdminID:a,AccountID:s,page:r};try{const{data:n}=await i.query({query:e,variables:t});if(n.getPostsByAccountID_admin)return n.getPostsByAccountID_admin}catch(n){throw new Error(n.message||"Error signing up.")}},y=async(a,s)=>{const r=o`
   mutation deletePostAdmin($PostID: Int!, $AdminID: Int!) {
        deletePostAdmin(PostID: $PostID, AdminID: $AdminID) {
message
        }
      }
    `,e={PostID:a,AdminID:s};try{const{data:t}=await i.mutate({mutation:r,variables:e});if(t.deletePostAdmin)return t.deletePostAdmin}catch(t){throw new Error(t.message||"Error signing up.")}},I=async(a,s)=>{const r=o`
   mutation deleteHashtagAdmin($Hashtag: String!, $AdminID: Int!) {
  deleteHashtagAdmin(Hashtag: $Hashtag, AdminID: $AdminID) {
message
        }
      }
    `,e={Hashtag:a,AdminID:s};try{const{data:t}=await i.mutate({mutation:r,variables:e});if(t.deleteHashtagAdmin)return t.deleteHashtagAdmin}catch(t){throw new Error(t.message||"Error signing up.")}},P={searchPostByAdmin:c,searchHashtagByAdmin:g,getPostByPostID:d,getAllPosts:h,getPostsByAccountID:u,getHashtags:m,getHashtag:A,removePost:y,removeHashtag:I};export{P};
