(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/project1.bf56edc6.png"},25:function(e,t,a){e.exports=a.p+"static/media/project2.f7e79c7d.png"},26:function(e,t,a){e.exports=a.p+"static/media/project3.7bded960.png"},27:function(e,t,a){e.exports=a.p+"static/media/email_icon.fd99f8e3.png"},28:function(e,t,a){e.exports=a.p+"static/media/github_icon.e2a62886.png"},29:function(e,t,a){e.exports=a.p+"static/media/linkedin_icon.56ab00e8.png"},30:function(e,t,a){e.exports=a.p+"static/media/twitter_icon.512536cb.png"},31:function(e,t,a){e.exports=a.p+"static/media/profile.22740604.jpg"},32:function(e,t,a){e.exports=a(50)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),l=a.n(i),c=a(10),o=a(8),s=a(21),u=a.n(s),m=function(e){var t=e.children,a={display:"inline-block",margin:10,marginBottom:30};return r.a.createElement("div",null,r.a.createElement("h3",{style:a},r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("h3",{style:a},r.a.createElement(c.b,{to:"/jokes"},"Jokes")),r.a.createElement("h3",{style:a},r.a.createElement(c.b,{to:"/music-master"},"MusicMaster")),t)},p=a(3),h=a(4),f=a(13),d=a(6),g=a(5),E=a(24),y=a.n(E),k=a(25),v=a.n(k),b=a(26),j=a.n(b),w=[{id:1,title:"Example React Application",description:"A React App that I built, involving JS and core web dev concepts!",link:"https://github.com/15Dkatz/example",image:y.a},{id:2,title:"My API",description:"A REST API that I built from scratch with GET and POST requests!",link:"https://github.com/15Dkatz/example",image:v.a},{id:3,title:"Operating Systems Final Project",description:"My unique final project for my university Operating Systems course.",link:"https://github.com/15Dkatz/example",image:j.a}],O=function(e){var t=e.project,a=t.title,n=t.image,i=t.description,l=t.link;return r.a.createElement("div",{style:{display:"inline-block",width:300,margin:10}},r.a.createElement("h2",null," ",a),r.a.createElement("img",{src:n,alt:"profile",style:{width:"200px",height:"100px"}}),r.a.createElement("p",null,i),r.a.createElement("a",{href:l},l))},A=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Highlighted Projects"),w.map((function(e){return r.a.createElement(O,{key:e.id,project:e})})))},I=a(27),x=a.n(I),S=a(28),P=a.n(S),C=a(29),D=a.n(C),M=a(30),B=a.n(M),N=[{id:1,link:"mailto:gauthamanu@gmail.com",image:x.a},{id:2,link:"https://github.com/Gautham0609",image:P.a},{id:3,link:"https://www.linkedin.com/in/Gautham0609",image:D.a},{id:4,link:"https://twitter.com/GautyNow",image:B.a}],_=function(e){var t=e.socialProfile,a=t.image,n=t.link;return r.a.createElement("span",null,r.a.createElement("a",{href:n},r.a.createElement("img",{src:a,alt:"socialMediaIcon",style:{height:35,width:35,margin:5}})))},J=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Connect with me!"),N.map((function(e){return r.a.createElement(_,{key:e.id,socialProfile:e})})))},R=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).animateTile=function(){e.titleInterval=setInterval((function(){return e.setState({fadeIn:!e.state.fadeIn})}),3e3)},e.state={fadeIn:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.animateTile()}},{key:"componentWillUnmount",value:function(){clearInterval(this.titleInterval)}},{key:"render",value:function(){return r.a.createElement("p",{className:this.state.fadeIn?"text-fade-in":"text-fade-out"},"I am a full stack developer. I love my daughter RAKSHA")}}]),a}(n.Component),U=a(31),Q=a.n(U),T=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).state={displayBio:!1},e.toggleDisplayBio=e.toggleDisplayBio.bind(Object(f.a)(e)),e}return Object(h.a)(a,[{key:"toggleDisplayBio",value:function(){this.setState({displayBio:!this.state.displayBio})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:Q.a,alt:"profile",className:"profileImg"}),r.a.createElement("h1",null,"Hello I am Gautham Venkatesan"),r.a.createElement(R,null),r.a.createElement("p",null,"I always look forward to work on new technologies and enhance my skillset"),this.state.displayBio?r.a.createElement("div",null,r.a.createElement("p",null,"Live in Toronto Ontario"),r.a.createElement("p",null,"It excites me how coding and development scene is changing everyday. I think React is awesome."),r.a.createElement("p",null,"Upon stumbing on free time I play table tennis and cook Paneer!"),r.a.createElement("button",{className:"btn btn-sm btn-default",onClick:this.toggleDisplayBio},"Read Less")):r.a.createElement("div",null," ",r.a.createElement("button",{className:"btn btn-sm btn-default",onClick:this.toggleDisplayBio},"Read More")),r.a.createElement("hr",null),r.a.createElement(A,null),r.a.createElement("hr",null),r.a.createElement(J,null))}}]),a}(n.Component),G=(a(48),function(e){var t=e.joke,a=t.setup,n=t.punchline;return r.a.createElement("p",null," ",a," => ",n)}),H=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).fetchJokes=function(){fetch("https://official-joke-api.appspot.com/random_ten").then((function(e){return e.json()})).then((function(t){return e.setState({jokes:t})})).catch((function(e){return alert(e.message)}))},e.state={joke:{},jokes:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://official-joke-api.appspot.com/random_joke").then((function(e){return e.json()})).then((function(t){return e.setState({joke:t})})).catch((function(e){return alert(e.message)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Highlighted Jokes"),r.a.createElement(G,{joke:this.state.joke}),r.a.createElement("h3",null,"Do you want to see ten more Jokes"),r.a.createElement("button",{onClick:this.fetchJokes},"Click Me!"),this.state.jokes.map((function(e){return r.a.createElement(G,{key:e.id,joke:e})})))}}]),a}(n.Component),K=function(e){var t=e.artist;if(!t)return null;var a=t.images,n=t.name,i=t.followers,l=t.genres;return r.a.createElement("div",null,r.a.createElement("h3",null,n),r.a.createElement("p",null,i.total," followers"),r.a.createElement("p",null,l.join(",")),r.a.createElement("img",{src:a[0]&&a[0].url,alt:"artist-profile",style:{width:200,height:200,borderRadius:100,objectFit:"cover"}}))},z=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={playing:!1,audio:null,playingPreviewUrl:""},e.playAudio=function(t){return function(){var a=new Audio(t);e.state.playing?(e.state.audio.pause(),e.state.playingPreviewUrl===t?e.setState({playing:!1}):(a.play(),e.setState({audio:a,playingPreviewUrl:t}))):(a.play(),e.setState({playing:!0,audio:a,playingPreviewUrl:t}))}},e.trackIcon=function(t){return t.preview_url?e.state.playing&&e.state.playingPreviewUrl===t.preview_url?r.a.createElement("span",null,"| |"):r.a.createElement("span",null,"\u25b6"):r.a.createElement("span",null,"N/A")},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tracks;return r.a.createElement("div",null,t.map((function(t){var a=t.album,n=t.name,i=t.id,l=t.preview_url;return r.a.createElement("div",{key:i,className:"track",onClick:e.playAudio(l)},r.a.createElement("img",{src:a.images[0]&&a.images[0].url,alt:"album",className:"track-image"}),r.a.createElement("p",{className:"track-text"},n),r.a.createElement("p",{className:"track-icon"},e.trackIcon(t)))})))}}]),a}(n.Component),q=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={artistQuery:""},e.updateArtistQuery=function(t){e.setState({artistQuery:t.target.value})},e.onKeyPress=function(t){"Enter"===t.key&&(e.setState({artistQuery:t.target.value}),e.searchArtist())},e.searchArtist=function(){e.props.searchArtist(e.state.artistQuery)},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{onChange:this.updateArtistQuery,onKeyPress:this.onKeyPress,placeholder:"Search for any artist"}),r.a.createElement("button",{onClick:this.searchArtist},"Search"))}}]),a}(n.Component),F="https://spotify-api-wrapper.appspot.com",L=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={artist:null,tracks:[]},e.searchArtist=function(t){fetch("".concat(F,"/artist/").concat(t)).then((function(e){return e.json()})).then((function(t){if(t.artists.total>0){var a=t.artists.items[0];e.setState({artist:a}),fetch("".concat(F,"/artist/").concat(a.id,"/top-tracks")).then((function(e){return e.json()})).then((function(t){return e.setState({tracks:t.tracks})})).catch((function(e){return alert(e.message)}))}})).catch((function(e){return alert(e.message)}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.searchArtist("adele")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Music Master"),r.a.createElement(q,{searchArtist:this.searchArtist}),r.a.createElement(K,{artist:this.state.artist}),r.a.createElement(z,{tracks:this.state.tracks}))}}]),a}(n.Component),V=(a(49),L);l.a.render(r.a.createElement(c.a,{history:u()(),basename:"/react-personal-porfolio"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:function(){return r.a.createElement(m,null,r.a.createElement(T,null))}}),r.a.createElement(o.a,{exact:!0,path:"/jokes",render:function(){return r.a.createElement(m,null,r.a.createElement(H,null))}}),r.a.createElement(o.a,{exact:!0,path:"/music-master",render:function(){return r.a.createElement(m,null,r.a.createElement(V,null))}}))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9afcf173.chunk.js.map