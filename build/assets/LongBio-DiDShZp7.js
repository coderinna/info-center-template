import{m as f,i as B,r as n,j as a}from"./vendor-C7C9t1z-.js";import{g as u,c as g}from"./services-CCUisz6M.js";import{i as L,s as h}from"./cacheTTL-B7obvhff.js";/* empty css              */const U=async t=>{if(!t)return;const r=u`
     mutation updateUserLongBio($userLongBioData: UserLongBioObject!) {
       updateUserLongBio(userLongBioData: $userLongBioData) {
        res
        }
      }
    `,s={userLongBioData:t};try{const{data:e}=await g.mutate({mutation:r,variables:s});if(e.updateUserLongBio)return e.updateUserLongBio}catch(e){throw console.log(e),new Error(e.message||"Error signing up.")}},_=async t=>{if(!t)return;const r=u`
     mutation createUserLongBio($userLongBioData: UserLongBioObject!) {
      createUserLongBio(userLongBioData: $userLongBioData) {
        res
        }
      }
    `,s={userLongBioData:t};try{const{data:e}=await g.mutate({mutation:r,variables:s});if(e.createUserLongBio)return e.createUserLongBio}catch(e){throw console.log(e),new Error(e.message||"Error signing up.")}},w=async(t,r)=>{if(!t||!r)return;const s={AccountID:t,FriendID:r};try{const e=u`
query getUserLongBio($AccountID: Int!, $FriendID: Int!){
    getUserLongBio(AccountID: $AccountID, FriendID: $FriendID) {
text
pic
pic2
res
    }
}
  `,i=` getUserLongBio:${r}`,o=await L(i),{data:c}=await g.query({query:e,variables:s,fetchPolicy:o?"cache-first":"network-only"}),l=c?.getUserLongBio;if(o||await h(i),l)return c.getUserLongBio}catch{throw new Error("Virhe.")}},y={createUserLongBio:_,updateLongBio:U,getUserLongBio:w},I=({UserURL:t})=>{const{t:r}=f();r("Profile",{returnObjects:!0});const{User:s}=B(m=>m.UserSlice),[e,i]=n.useState(!1),[o,c]=n.useState(null),[l,x]=n.useState(!1),[S,T]=n.useState(null),d=(o?.Text||"").replace(/\n/g,"<br />");return n.useEffect(()=>{if(!s.id||!t?.id)return;(async()=>{i(!0);try{const p=await y.getUserLongBio(s.id,t.AccountID);c(p)}catch{}finally{i(!1)}})()},[t?.id]),a.jsxs("div",{className:"user_tip_content_profile",children:[o?.pic&&a.jsx("div",{className:"user_tip_images",children:a.jsx("img",{src:o?.pic,alt:"user-tip-img",className:"user_tip_img"})}),a.jsx("div",{className:"user_tip_text",dangerouslySetInnerHTML:{__html:d}}),o?.pic2&&a.jsx("div",{className:"user_tip_images",children:a.jsx("img",{src:o?.pic2,alt:"user-tip-img",className:"user_tip_img"})})]})};export{I as default};
