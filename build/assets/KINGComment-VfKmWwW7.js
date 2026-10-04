const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CommentItem-C95twy1r.js","assets/preload-helper-BXl3LOEh.js","assets/vendor-C7C9t1z-.js","assets/vendor-DvB2Xm2x.css","assets/Report-CFn-7EZ6.js","assets/Report.service-DrguBeGd.js","assets/services-CCUisz6M.js","assets/cacheTTL-B7obvhff.js","assets/QuickNoticeBox-DHA_7waQ.js","assets/OkBox-BLsZ7ixp.css","assets/Main-CLv1qHIM.css","assets/ghost-ScaG6GMc.js","assets/Comment.service-CBzAw3iY.js","assets/RenderTimeAgo-hG7OsN_v.js","assets/formatNumber-C9-nPz9Z.js","assets/Comment-DBsEdhLt.css","assets/CommentItemEmpty-Dhx5a4iK.js","assets/index-Dog7C49N.js","assets/index-9LUVz_1H.css","assets/Edit-2uhXXZ9s.js","assets/Edit-D_s093KZ.css","assets/CacheHelperPost-CfWnWpOm.js","assets/LoginPleasePopup-Dn5VVAp3.js","assets/LoginPleasePopup-DoxyH5JH.css"])))=>i.map(i=>d[i]);
import{_ as K}from"./preload-helper-BXl3LOEh.js";import{m as ke,i as ie,r as c,j as t,aH as Y}from"./vendor-C7C9t1z-.js";import{c as _,g as I}from"./services-CCUisz6M.js";import{i as Fe,s as Ue}from"./cacheTTL-B7obvhff.js";import{a as Le,C as q}from"./Comment.service-CBzAw3iY.js";import{C as Q}from"./CacheHelperPost-CfWnWpOm.js";const Ge=(e,r)=>{if(!_.cache.identify({__typename:"Reply",id:e})){console.warn("⛔ cacheId puuttuu");return}try{_.cache.modify({id:"ROOT_QUERY",fields:{getRepliesByCommentID(s={},n){const{readField:m,toReference:a,storeFieldName:u}=n;let h={};if(u.includes("(")){const p=u.slice(u.indexOf("(")+1,u.lastIndexOf(")"));try{h=JSON.parse(p)}catch{console.warn("⚠️ args parse failed",p)}}if(!(h.CommentID===r)||s?.replies?.some(p=>m("id",p)===e))return s;const g=a({__typename:"Reply",id:e});return{...s,replies:[...s?.replies,g]}}}})}catch{console.error("❌ modify failed 1")}const o=_.cache.identify({__typename:"Comment",id:r});if(!o){console.warn("⛔ cacheId puuttuu");return}try{_.cache.modify({id:o,fields:{RepliesCount(s=0){return s+1}}})}catch{console.error("❌ modify failed 2")}},Me=(e,r)=>{if(_.cache.identify({__typename:"Reply",id:e}))try{_.cache.modify({id:"ROOT_QUERY",fields:{getRepliesByCommentID(o={},s){const{readField:n,storeFieldName:m}=s;let a={};if(m.includes("(")){const f=m.slice(m.indexOf("(")+1,m.lastIndexOf(")"));try{a=JSON.parse(f)}catch{console.warn("⚠️ args parse failed")}}if(!(a.CommentID===r)||!o?.replies)return o;const h=o.replies.filter(f=>n("id",f)!==e);return{...o,replies:h}}}})}catch(o){console.error("❌ modify delete failed",o)}},Be=e=>{const r=_.cache.identify({__typename:"Reply",id:e});if(r)try{_.cache.evict({id:r}),_.cache.gc()}catch{console.error("evict failed")}},ue={action_DELETE:Me,action_CREATE:Ge,action_NOT_FOUND:Be},Ye=async(e,r,i)=>{if(!e||!i||!r)return;const o=I`
            query getRepliesByCommentID($AccountID: Int!, $CommentID: Int!, $page: Int) {
                getRepliesByCommentID(AccountID: $AccountID, CommentID: $CommentID, page: $page) { 
        hasNextPage
        res
        replies {
           id
        AccountID
            CommentID
            Text
            LikesCount
            DislikesCount
            createdAt
            updatedAt
                Ghost
              user {
              id
              AccountID
                Username
                ProfilePicture
            }
        }
    }
}
        `,s={AccountID:e,CommentID:r,page:i};try{const n=`getReplies:${r}`,m=await Fe(n),{data:a}=await _.query({query:o,variables:s,fetchPolicy:m?"cache-first":"network-only"}),u=a?.getRepliesByCommentID;if(m||await Ue(n),u){const h=a.getRepliesByCommentID,f="https://medias.info_center_template.com/",y=h.replies.map(p=>({...p,...p.ProfilePicture&&{ProfilePicture:f+p.ProfilePicture}}));return{...h,replies:y}}}catch(n){throw new Error(n.message||"Error fetching user data.")}},Ke=async(e,r,i)=>{if(!e||!i||!r)return;const o=I`
        mutation createReply($AccountID: Int!, $CommentID: Int!, $replyData: ReplyObject!) {
               createReply(AccountID: $AccountID, CommentID: $CommentID, replyData: $replyData) {
               res
             reply{
             id
             }
                }
            }
        `,s={AccountID:e,CommentID:r,replyData:i};try{const{data:n}=await _.mutate({mutation:o,variables:s});if(n.createReply){try{const m=n?.createReply?.reply?.id;ue.action_CREATE(m,r)}catch{console.log("apollo cache edit error")}return n.createReply}}catch(n){throw new Error(n.message||"Error fetching user data.")}},qe=async(e,r,i)=>{if(!e||!r||!i)return;const o=I`
    mutation UpdateReply($AccountID: Int!, $ReplyID: Int!, $Text: String!) {
      updateReply(AccountID: $AccountID, ReplyID: $ReplyID, Text: $Text) {
      res
      }
    }
  `,s={AccountID:e,ReplyID:r,Text:i};try{const{data:n}=await _.mutate({mutation:o,variables:s,fetchPolicy:"no-cache"});if(n.updateReply)return n.updateReply}catch(n){throw new Error(n.message||"Error updating reply.")}},Qe=async(e,r,i)=>{if(!e||!r||!i)return;const o=I`
        mutation deleteReply($AccountID: Int!, $ReplyID: Int!) {
            deleteReply(AccountID: $AccountID, ReplyID: $ReplyID) {
res
                }
            }
        `,s={AccountID:e,ReplyID:r};try{const{data:n}=await _.mutate({mutation:o,variables:s,fetchPolicy:"no-cache"});if(n.deleteReply){try{ue.action_DELETE(r,i)}catch{console.log("apollo cache edit error")}return n.deleteReply}}catch(n){throw new Error(n.message||"Error fetching user data.")}},Ve=async(e,r)=>{if(!e||!r)return;const i=I`
            query getReplyByReplyID($AccountID: Int!, $ReplyID: Int!) {
            getReplyByReplyID(AccountID: $AccountID, ReplyID: $ReplyID) {
            res
                  reply {
                        id
                        CommentID
                        Text
                        LikesCount
                        DislikesCount
                        createdAt
                        updatedAt
                        Ghost
                         user {
                         id
                         AccountID
                            Username
                            ProfilePicture
                         }
                        }
                    }
                }
               `,o={AccountID:e,ReplyID:r?parseInt(r,10):void 0};try{const{data:s}=await _.query({query:i,variables:o});if(s.getReplyByReplyID)return s.getReplyByReplyID}catch(s){throw new Error(s.message||"Error fetching post comments")}},ze={getRepliesByComment:Ye,getSingleReply:Ve,createReply:Ke,updateReply:qe,deleteReply:Qe},le=async(e,r,i,o,s,n,m,a,u,h)=>{o.preventDefault(),m(!0),await new Promise(f=>setTimeout(f,1e3));try{let f=e;const y={Text:n},g=await ze.createReply(s.id,e,y);if(g?.res==="OK"){const p={Text:n,CommentID:e,id:g?.reply?.id,AccountID:s.id,createdAt:Date.now()};r(null),i(!0),typeof u=="function"&&u(e),h(e),a(R=>{const b=R[e]||[],P={id:s?.id,AccountID:s.id,Username:s?.Username,ProfilePicture:s?.ProfilePicture,Ghost:"N"},F=[{...p,user:P},...b].sort((O,v)=>new Date(v.createdAt)-new Date(O.createdAt));return{...R,[e]:F}})}g?.res==="NOT_FOUND"&&Le.action_NOT_FOUND(f)}catch{}finally{m(!1)}},He=async(e,r,i,o,s,n,m)=>{r.preventDefault(),m(!0);try{e(h=>({...h,[r]:!0}));let a;const u=Number(i);if(a=await q.createComment(o.id,u,s,o?.id),a?.res==="OK"){e(y=>({...y,[a?.comment?.id]:!0}));const h={id:o?.id,username:o?.username,profilePicture:o?.profilePicture,ghost:!1},f={text:s,createdAt:Date.now(),updatedAt:null,user:h,id:a?.comment?.id};setTimeout(()=>{n(y=>[...y,f].sort((p,R)=>new Date(Number(R.createdAt))-new Date(Number(p.createdAt)))),e(y=>({...y,[a?.comment?.id]:!1}))},50)}a?.res==="NOT_FOUND"&&Q.action_NOT_FOUND(i)}catch{e(u=>({...u,[i]:!1}))}finally{m(!1)}},me=async({isLoadMore:e=!1,customPage:r,setLoading:i,setLoadingMore:o,setHasNextPage:s,setComments:n,setCurrentPage:m,setTotalPages:a,page:u,PostID:h,User:f})=>{try{e?o(!0):i(!0);const y=r??u,g=Number(h),p=await q.getCommentsByPostID(f.id,g,y);p?.res==="OK"&&(n(p?.comments||[]),s(p?.hasNextPage),m(p?.currentPage),a(p?.totalPages)),p?.res==="NOT_FOUND"&&(Q.action_NOT_FOUND(g),n([]),s(!1))}catch{}finally{e?o(!1):i(!1)}},Je=async({User:e,CommentID:r,PostID:i,setComments:o,setShowCommentNotFound:s})=>{try{const n=await q.getSingleComment(e.id,r,i);n?.res==="OK"&&o(m=>[...Array.isArray(m)?m:[],...(Array.isArray(n)?n:[n?.comment]).map(a=>({...a,New:"Y"}))]),n?.res==="NOT_FOUND"&&Q.action_NOT_FOUND(i)}catch{s(!0)}},We=c.lazy(()=>K(()=>import("./CommentItem-C95twy1r.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))),Xe=c.lazy(()=>K(()=>import("./CommentItemEmpty-Dhx5a4iK.js"),__vite__mapDeps([16,2,3,17,6,7,1,18,19,20,12,21,10,9,15]))),Ze=c.lazy(()=>K(()=>import("./LoginPleasePopup-Dn5VVAp3.js"),__vite__mapDeps([22,2,3,23]))),et=({PostID:e,ReplyID:r,OwnProfile:i,CommentID:o,item:s})=>{const{t:n,i18n:m}=ke(),a=n("Comment",{returnObjects:!0}),{User:u}=ie(l=>l.UserSlice),[h,f]=c.useState({}),[y,g]=c.useState(!1),[p,R]=c.useState(!1),[b,P]=c.useState(!1),[V,F]=c.useState({}),[O,v]=c.useState({}),[U,C]=c.useState([]),[E,z]=c.useState(!1),[w,L]=c.useState(null),[tt,st]=c.useState(!1),[H,J]=c.useState("emoji"),[N,T]=c.useState(""),[de,W]=c.useState(!1),[pe,fe]=c.useState(!1),[he,X]=c.useState(!1),[ye,A]=c.useState(!1),_e=c.useRef(null),[Z,ge]=c.useState(null),[Re,nt]=c.useState(!1),[ee,S]=c.useState(""),[$,je]=c.useState(1),[te,se]=c.useState(!1),[D,ne]=c.useState(1),[x,oe]=c.useState(1),[G,ae]=c.useState(x),[Ce,we]=c.useState(!1),[xe,Ee]=c.useState(null),re=c.useRef(!1),{user:Ne}=ie(l=>l.auth),[Se,ce]=c.useState(!1);c.useEffect(()=>{re.current||(re.current=!0,o?Je({User:u,CommentID:o,PostID:e,setComments:C,setShowCommentNotFound:W}):U?.length===0&&e&&me({isLoadMore:!1,customPage:$,setLoading:R,setLoadingMore:P,setHasNextPage:se,setComments:C,setCurrentPage:oe,setTotalPages:ne,page:$,PostID:e,User:u}))},[]);const M=l=>{W(!1);let d=$+1;o&&!Ce?(we(!0),d=1,C([])):o&&$===1&&(d=2),je(d),me({isLoadMore:!0,customPage:l??d,setLoading:R,setLoadingMore:P,setHasNextPage:se,setComments:C,setCurrentPage:oe,setTotalPages:ne,page:d,PostID:e,User:u})},B=l=>{T(d=>d+l.emoji),A(!1)},De=()=>{fe(l=>!l),A(!0)},Ie=l=>{ge(Z===l?null:l)},be=l=>{let d=l.target.value;const j=10,k=500;d=d.replace(/\n{2,}/g,`
`);const Ae=d.split(`
`).length,$e=d.length;if(/[<>{}\[\]|\\%()\/=&¤#";:]/.test(d)){S(a?.invalid_chars||"Invalid characters!");return}if(Ae>j){S(a?.too_many_lines_comment||`Comment can contain a maximum of ${j} lines.`);return}if($e>k){S(a?.too_long_comment||`Comment too long. Maximum number of characters is ${k}.`);return}S(""),T(d)},Pe=l=>l?.split(`
`)?.filter(k=>k.trim()!=="")?.length,Oe=()=>{S("")};c.useEffect(()=>{E&&T("")},[E]);const ve=l=>{C(d=>d.map(j=>j?.id===l?{...j,repliesCount:(j.repliesCount||0)+1}:j))},Te=l=>{if(!Ne){ce(!0);return}w!==null?le(w,L,g,l,u,N,z,f,ve,Ee):He(v,l,e,u,N,C,z)};return t.jsx("section",{children:t.jsx(c.Suspense,{fallback:t.jsx("div",{children:"Loading..."}),children:t.jsxs("div",{className:"reply_comment-box",children:[Se&&t.jsx(Ze,{onClose:()=>ce(!1)}),p?t.jsx("div",{className:"loader2"}):t.jsxs("div",{children:[de&&t.jsx("span",{children:t.jsx(Xe,{ReplyID:r,CommentID:o,replyIndex:w,setReplyIndex:L,replies:h,setReplies:f})}),U?.length===0?t.jsx("div",{className:"reply_notCommentJet",children:t.jsx("span",{children:a?.write_first_comment||"Write first comment"})}):t.jsx("div",{className:"reply_comment_container",children:U?.map((l,d)=>t.jsx("div",{className:`reply_comment_container2 ${l?.New==="Y"?"reply_comment_container2_empty":""} 
    ${V[l?.id]?"fade-out":"fade-in"} 
  ${O[l?.id]?"reply-animation":"reply-animation2"}`,children:t.jsx(We,{CommentID:o,ReplyID:r,setDeleteAnimation:F,OwnProfile:i,comment:{...l},index:d,setReplyIndex:L,replyIndex:w,setComment:T,setComments:C,optionsVisible:Z,toggleOptions:Ie,newAnimation:O,setNewAnimation:v,handleReply:le,item:s,replies:h,setReplies:f,setIsRepliesOpen:g,isRepliesOpen:y,replyCommentID:xe})},`${l?.id}-${l?.index}`))}),t.jsxs("div",{className:"show-more-comments",children:[b&&t.jsx("div",{className:"loader2"}),!b&&t.jsxs("span",{children:[!te&&t.jsxs("span",{className:"text_b",children:[a?.no_more_to_show||"No more comments to show",".."]}),te&&t.jsxs("span",{children:[t.jsx("br",{}),t.jsxs("span",{className:"text_b",children:[a?.page||"Page:"," ",x," / ",D]}),t.jsxs("button",{className:"comments-button",onClick:()=>M(x-1),disabled:x<=1,children:["← ",a?.previous||"Previous"]}),t.jsxs("button",{className:"comments-button",onClick:()=>M(x+1),disabled:x>=D,children:[a?.next||"Next"," →"]}),t.jsxs("span",{className:"comments-go-to-page",children:[t.jsx("input",{type:"number",min:1,max:D,value:G,onChange:l=>{const d=parseInt(l.target.value,10);isNaN(d)?ae(""):ae(Math.min(d,D))},className:"comments-input"}),t.jsx("button",{className:"comments-button",onClick:()=>M(G),disabled:D<=1||!G,children:a?.go_to_page||"Go"})]})]})]})]}),"   "]}),pe&&t.jsxs("div",{ref:_e,children:[t.jsxs("div",{className:"showEmojiesGifs_popup-content",children:[ye&&t.jsx("div",{children:t.jsx(Y,{onEmojiClick:B})}),he&&t.jsx("div",{children:t.jsx(Y,{onEmojiClick:B})})]}),t.jsxs("div",{className:"showEmojiesGifs_tabs",children:[t.jsx("button",{className:`showEmojiesGifs_tab ${H==="emoji"?"active":""}`,onClick:()=>{J("emoji"),A(!0),X(!1)},children:a?.emoji||"Emoji"}),t.jsx("button",{className:`showEmojiesGifs_tab ${H==="gif"?"active":""}`,onClick:()=>{J("gif"),X(!0),A(!1)},children:a?.GIF||"GIF"})]})]}),s?t.jsx("div",{className:"reply_commentti_box",children:t.jsxs("div",{className:"reply_input-container",children:[t.jsx("span",{children:t.jsx("button",{className:"reply_emoji-button",type:"button",onClick:()=>{De()},children:"    😊"})}),t.jsx("p",{}),t.jsx("textarea",{required:!0,className:"reply_inputComment",value:E?a?.sending||"Sending...":N,rows:Math.min(Pe(N)||1,4),onChange:be,placeholder:w!==null?a?.placeholder_write_reply||"Write reply..":a?.placeholder_write_comment||"Write comment..",wrap:"soft"}),t.jsx("button",{onClick:Te,className:"reply_comment_buttonSend",type:"submit",disabled:E||!N,children:E||w===null?a?.send_button||"Send":a?.reply_button||"Reply"})]})}):t.jsx("span",{}),ee&&t.jsxs("div",{className:"error-message",children:[ee,t.jsx("button",{className:"reply_emoji-button",onClick:Oe,children:a?.ok||"OK"})]}),Re&&t.jsx(Y,{onEmojiClick:B})]})})})},ut=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"}));export{ze as C,ut as K,ue as a};
