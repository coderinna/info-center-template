import{m as q,i as S,r as i,j as e,L as A}from"./vendor-C7C9t1z-.js";import{g as h,c as f}from"./services-CCUisz6M.js";import E from"./QuickNoticeBox-DHA_7waQ.js";import{P as M}from"./index-Dog7C49N.js";/* empty css              */import"./cacheTTL-B7obvhff.js";import"./preload-helper-BXl3LOEh.js";const R=async(n,o)=>{if(!n||!o)return;const t=h`
query getMyTagged($AccountID: Int!, $page: Int) {
    getMyTagged(AccountID: $AccountID, page: $page) {
        hasNextPage
        posts {
          id
          user{
          id
          username
          profilePicture
          }
    }
}
}

    `,r={AccountID:n,page:o};try{const{data:a}=await f.query({query:t,variables:r});if(a.getMyTagged)return a.getMyTagged}catch(a){throw new Error(a.message||"Error signing up.")}},k=async(n,o,t)=>{if(!n||!t||!o)return;const r=h`
   mutation handleTagged($AccountID: Int!, $PostID: Int!,  $action: String!) {
       handleTagged(AccountID: $AccountID, PostID: $PostID, action: $action) {
res
        }
      }
    `,a={AccountID:n,PostID:o,action:t};try{const{data:c}=await f.mutate({mutation:r,variables:a,fetchPolicy:"no-cache"});if(c.handleTagged)return c.handleTagged}catch(c){throw new Error(c.message||"Error signing up.")}},m={getMyTagged:R,handleTagged:k},G=()=>{const{t:n,i18n:o}=q(),t=n("Profile",{returnObjects:!0}),{User:r}=S(s=>s.UserSlice),a=r?.id,[c,d]=i.useState([]),[x,u]=i.useState(!1),[y,j]=i.useState(!1),[w,T]=i.useState(""),[I,N]=i.useState(!1);i.useEffect(()=>{r&&P()},[r]);const P=async()=>{u(!0);try{const l=await m.getMyTagged(a,1);d(l?.posts||[])}catch{}finally{u(!1)}},p=async(s,l)=>{try{(await m.handleTagged(a,s,l))?.res==="OK"&&d(b=>b.map(g=>g.postId===s?{...g,answered:"true"}:g))}catch{j(!0),N(!1),T("Error processing request")}};return x?e.jsx("div",{className:"loader",children:t?.loading||"Loading tag requests..."}):e.jsxs("div",{className:"tag-requests-container",children:[e.jsx(E,{noticeBoolea:y,noticeMessage:w,noticeGood:I}),e.jsx("h1",{className:"tag-requests-list_h1",children:"Tagged Requests"}),e.jsx("ul",{className:"tag-requests-list",children:c.map((s,l)=>e.jsxs("li",{className:"tag-request-item",children:[e.jsx(M,{Url:s?.user?.profilePicture??null,fallbackText:"Profile",className:"profile-icon",borderRadius:"50%",placeHolder:4}),e.jsxs("span",{className:"request-text",children:[e.jsx("strong",{children:s?.user?.username||"Unknown User"}),t?.text_want||"wants to tag you in a post"]}),e.jsxs("div",{className:"request-actions",children:[s.answered==="true"?e.jsx("span",{className:"tagged-answered-badge",children:t?.answered||"Answered"}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>p(s.postId,"accept"),children:t?.aswer||"Accept"}),e.jsx("button",{onClick:()=>p(s.postId,"deny"),children:t?.Reject||"Reject"})]}),e.jsx(A,{to:`/post/${s.postId}`,className:"show-post-button",children:t?.ViewPost||"View Post"})]})]},s?.id||l))})]})};export{G as default};
