import{o as T,i as b,r as i,j as e}from"./vendor-C7C9t1z-.js";import{g as o,c}from"./services-CCUisz6M.js";const $=async(s,a)=>{try{const t=o`
      mutation  editAd($AdminID: Int!, $adData: AdObject!) {
        editAd(AdminID: $AdminID, adData: $adData) {
    res
    }
}
   `,{data:r}=await c.mutate({mutation:t,variables:{AdminID:s,adData:a}});if(r.editAd)return r.editAd}catch(t){throw new Error(t.message||"Error fetching user data.")}},w=async(s,a)=>{try{const t=o`
mutation deleteAd($AdminID: Int!, $AdID: Int!) {
deleteAd(AdminID: $AdminID, AdID: $AdID) {
    res
    }
}
   `,{data:r}=await c.mutate({mutation:t,variables:{AdminID:s,AdID:a}});if(r.deleteAd)return r.deleteAd}catch(t){throw new Error(t.message||"Error fetching user data.")}},S=async s=>{try{const a=o`
query getAds($AdminID: Int!) {
 getAds(AdminID: $AdminID) {
    res
    ads {
      id
      imageUrl
      linkUrl
      position
      startTime
      endTime
      isActive
    }
  }
}
    `,t={AdminID:s},{data:r}=await c.query({query:a,variables:t});if(r.getAds)return r.getAds}catch(a){throw new Error(a.message||"Error fetching user data.")}},U=async(s,a)=>{try{const t=o`
query getAd($AdminID: Int!, $AdID: Int!) {
 getAd(AdminID: $AdminID, AdID: $AdID) {
      id
      imageUrl
      linkUrl
      position
      startTime
      endTime
      isActive
      res
    }
}
   `,r={AdminID:s,AdID:a},{data:d}=await c.query({query:t,variables:r});if(d.getAd)return d.getAd}catch(t){throw new Error(t.message||"Error fetching user data.")}},C=async(s,a)=>{try{const t=o`
      mutation createAd($AdminID: Int!, $adData: AdObject!) {
        createAd(AdminID: $AdminID, adData: $adData) {
          id
          res
        }
      }
    `,r={AdminID:s,adData:a},{data:d}=await c.mutate({mutation:t,variables:r,fetchPolicy:"no-cache"});if(d.createAd)return d.createAd}catch(t){throw new Error(t.message||"Error creating ad.")}},q={getAds:S,getAd:U,createAd:C,deleteAd:w,updateAd:$},R=()=>{const s=T(),{User:a}=b(n=>n.UserSlice),[t,r]=i.useState(""),[d,v]=i.useState(""),[m,x]=i.useState(""),[A,E]=i.useState("BOTTOM"),[g,h]=i.useState(!1),[I,D]=i.useState(null),[l,j]=i.useState(null),p=async n=>{n.preventDefault(),h(!0),D(null);try{const u={linkUrl:t,startTime:d,endTime:m,position:A};let f=a?.id;const y=await q.createAd(f,u);j(y.id),alert("Ad created!")}catch(u){D(u.message||"Failed to create ad")}finally{h(!1)}};return e.jsxs("div",{className:"form-container",children:[e.jsx("h2",{children:"Create New Ad"}),I&&e.jsx("p",{className:"error",children:I}),!l&&e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Link URL"}),e.jsx("input",{type:"text",value:t,onChange:n=>r(n.target.value),required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Start Time"}),e.jsx("input",{type:"datetime-local",value:d,onChange:n=>v(n.target.value),required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"End Time"}),e.jsx("input",{type:"datetime-local",value:m,onChange:n=>x(n.target.value),required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Position"}),e.jsxs("select",{value:A,onChange:n=>E(n.target.value),required:!0,children:[e.jsx("option",{value:"BOTTOM",children:"BOTTOM"}),e.jsx("option",{value:"LEFT",children:"LEFT"}),e.jsx("option",{value:"LEFT2",children:"LEFT2"})]})]}),e.jsx("button",{type:"submit",disabled:g,children:g?"Creating...":"Create Ad"})]}),l&&e.jsxs("div",{children:[e.jsxs("p",{children:["Ad created successfully! You can now upload images for Ad ID:"," ",e.jsx("strong",{children:l})]}),e.jsx("button",{onClick:()=>s(`/item/ad/${l}`),children:"Add"})]})]})};export{R as default};
