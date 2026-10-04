const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FriendItem-BmkKA9qV.js","assets/vendor-C7C9t1z-.js","assets/vendor-DvB2Xm2x.css","assets/ChatTopBar-E3XB24yc.js","assets/FriendsEmptyState-CztwH6sl.js"])))=>i.map(i=>d[i]);
import{_ as D}from"./preload-helper-BXl3LOEh.js";import{i as q,m as O,r as i,j as n}from"./vendor-C7C9t1z-.js";import{g as E,c as w}from"./services-CCUisz6M.js";import{i as R,s as T}from"./cacheTTL-B7obvhff.js";import{e as k}from"./index-Dog7C49N.js";const H=async(t,s)=>{if(!t||!s)return;const c=E`
    query getChatList($AccountID: Int!, $page: Int!) {
      getChatList(AccountID: $AccountID, page: $page) {
        hasNextPage
        res
        chats {
         id
         chatId
         lastMessageAt
         unreadCount
          user {
          id
            username
          }
        }
      }
    }
    `,o={AccountID:t,page:s},a="getChatList",g=1800*1e3,y=await R(a,g);try{const{data:h}=await w.query({query:c,variables:o,fetchPolicy:y?"cache-first":"network-only"}),u=h?.getChatList;if(y||await T(a),u)return h.getChatList}catch(h){throw new Error(h.message||"Error signing up.")}},U=async(t,s)=>{if(!t)return;const c=E`
  query getMyChatFriend_search($AccountID: Int!,  $searchData: SearchObject) {
   getMyChatFriend_search(AccountID: $AccountID,  searchData: $searchData) {
        hasNextPage
        res
        chats {
         id
          user {
          id 
          username
          }
        }
      }
    }
    `,o={AccountID:t,searchData:s};try{const{data:a}=await w.query({query:c,variables:o});if(a.getMyChatFriend_search)return a.getMyChatFriend_search}catch(a){throw new Error(a.message||"Error signing up.")}},Y=async(t,s,c,o=null)=>{if(!t||!s||!c)return;const a=E`
  query GetMyChatRelations($AccountID: Int!, $type: String!, $page: Int, $searchData: SearchObject) {
    getMyChatRelations(AccountID: $AccountID, type: $type, page: $page, searchData: $searchData) {
      hasNextPage
      res
      participants {
        id
        status
        chatId
        user {
          id 
          username
        }
      }
    }
  }
`,g={AccountID:t,type:s,page:c,searchData:o||void 0},y="getMyChatRelations",h=await R(y);try{const{data:u}=await w.query({query:a,variables:g,fetchPolicy:h?"cache-first":"network-only"}),p=u?.getMyChatRelations;if(h||await T(y),p)return u?.getMyChatRelations}catch(u){console.error("getMyChatRelations error:",u)}},B=async(t,s)=>{if(!t||!s)return;const c=E`
    query getChatBetweenFriends($AccountID: Int!, $FriendID: Int!) {
   getChatBetweenFriends(AccountID: $AccountID, FriendID: $FriendID) {
        res
        participants {
          id
          status
          chatId
          userId
        }
      }
    }
  `,o={AccountID:t,FriendID:s};try{const{data:a}=await w.query({query:c,variables:o});return a?.getChatBetweenFriends}catch(a){throw a}},K={getChatList:H,getMyChatRelations:Y,getChatBetweenFriends:B,getChatList_search:U},Q=i.lazy(()=>D(()=>import("./FriendItem-BmkKA9qV.js"),__vite__mapDeps([0,1,2]))),z=i.lazy(()=>D(()=>import("./ChatTopBar-E3XB24yc.js"),__vite__mapDeps([3,1,2]))),G=i.lazy(()=>D(()=>import("./FriendsEmptyState-CztwH6sl.js"),__vite__mapDeps([4,1,2]))),st=({friends:t,setFriends:s,selectedFriend:c,setSelectedFriend:o,selectedChatFriend:a,setSelectedChatFriend:g,isFriendTyping:y,UsernameParams:h,setMessages:u})=>{const{User:p}=q(e=>e.UserSlice),{t:j}=O(),_=j("Chat",{returnObjects:!0}),[N,A]=i.useState(1),[f,$]=i.useState(!1),[M,V]=i.useState(!1),[C,v]=i.useState(!1),[x,W]=i.useState("all"),F=window.innerWidth<=768,L=async(e=1)=>{v(!0);try{let r;if(x==="all"&&(r=await K.getChatList(p?.id,e)),r?.res==="OK"){const l=r?.chats||r?.participants||[];$(l?.hasNextPage??!1),s(d=>e===1?l:[...d,...l])}}catch(r){console.error("Error loading friends:",r)}finally{v(!1)}};i.useEffect(()=>{g(null),o(null),u([]),s([]),A(1),L(1)},[x]);const S=()=>{if(f&&!C){const e=N+1;A(e),L(e)}},b=(e,r,{setSelectedFriend:l,setSelectedChatFriend:d})=>{switch(d(null),l(null),e){case"pending_sent":d({...r,type:"pending_sent"});break;case"pending_received":d({...r,type:"pending_received"});break;case"all":l(r),s(I=>I.map(m=>m?.id===r?.id?{...m,unreadCount:null}:m)),d(null);try{k.action_SELECT_ROOM(r)}catch{console.log("apollo cache edit error")}break;default:console.log("tab error")}};return n.jsx("section",{children:n.jsx(i.Suspense,{fallback:n.jsx("div",{className:"loader2"}),children:n.jsxs("div",{className:"friends-list",children:[n.jsx(z,{keys:_,shouldHideChatList:F,setSelectedFriend:o}),n.jsxs("div",{className:"FriendList_items",children:[M?n.jsx("div",{className:"loader2"}):t?.length===0?n.jsx(G,{keys:_}):n.jsx("ul",{children:t?.map(e=>{const r=String(e?.id),l=y[r],d=l?.isTyping&&l?.userId!==p?.id,I=e?.message||null,m=I?renderTimeAgo(I?.createdAt):"",P=c?.id===e?.id;return n.jsx(Q,{friend:e,isSelected:P,isTypingNow:d,timeAgo:m,keys:_,activeTab:x,handleSelectFriend:b,setSelectedFriend:o,setSelectedChatFriend:g},e.id)})}),t?.length>0&&n.jsxs("div",{className:"pagination-section",children:[C&&n.jsx("div",{className:"loader2"}),f&&!C&&n.jsx("button",{className:"goto-button",onClick:S,children:_?.show_more||"Show more"}),!f&&!C&&n.jsx("div",{children:_?.no_more_connections||"No more connections to display..."})]})]})]})})})};export{st as default};
