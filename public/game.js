(()=>{var Lu=0,Lc=1,Du=2;var Gr=1,Po=2,Gs=3,bi=0,Ve=1,hn=2,Yn=0,Ei=1,Vr=2,Dc=3,Nc=4,Nu=5;var qi=100,Uu=101,Fu=102,Ou=103,Bu=104,zu=200,Hu=201,ku=202,Gu=203,Uc=204,Fc=205,Vu=206,Wu=207,Xu=208,qu=209,Yu=210,Zu=211,$u=212,Ju=213,Ku=214,Ya=0,Za=1,$a=2,bs=3,Ja=4,Ka=5,ja=6,Qa=7,Lo=0,ju=1,Qu=2,Nn=0,Oc=1,Bc=2,zc=3,Vs=4,Hc=5,kc=6,Gc=7;var Vc=300,wi=301,Yi=302,Do=303,No=304,Wr=306,Es=1e3,Vn=1001,to=1002,Ye=1003,tf=1004;var Xr=1005;var Ze=1006,Uo=1007;var Ti=1008;var un=1009,Wc=1010,Xc=1011,Ws=1012,Fo=1013,Un=1014,bn=1015,Fn=1016,Oo=1017,Bo=1018,Xs=1020,qc=35902,Yc=35899,Zc=1021,$c=1022,En=1023,Wn=1026,Ai=1027,zo=1028,Ho=1029,Ri=1030,ko=1031;var Go=1033,qr=33776,Yr=33777,Zr=33778,$r=33779,Vo=35840,Wo=35841,Xo=35842,qo=35843,Yo=36196,Zo=37492,$o=37496,Jo=37488,Ko=37489,Jr=37490,jo=37491,Qo=37808,tl=37809,el=37810,nl=37811,il=37812,sl=37813,rl=37814,al=37815,ol=37816,ll=37817,cl=37818,hl=37819,ul=37820,fl=37821,dl=36492,pl=36494,ml=36495,gl=36283,xl=36284,Kr=36285,_l=36286;var fr=2300,eo=2301,Xa=2302,yc=2303,vc=2400,Mc=2401,Sc=2402;var ef=3200;var jr=0,nf=1,ai="",Ie="srgb",dr="srgb-linear",pr="linear",_e="srgb";var qa=7680;var sf=519,rf=512,af=513,of=514,yl=515,lf=516,cf=517,vl=518,hf=519,Jc=35044,qs=35048;var Kc="300 es",Ln=2e3,ws=2001;function Ud(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uf(){let s=mr("canvas");return s.style.display="block",s}var Qh={},Ts=null;function gr(...s){let t="THREE."+s.shift();Ts?Ts("log",t,...s):console.log(t,...s)}function ff(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Yt(...s){s=ff(s);let t="THREE."+s.shift();if(Ts)Ts("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function qt(...s){s=ff(s);let t="THREE."+s.shift();if(Ts)Ts("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Hi(...s){let t=s.join(" ");t in Qh||(Qh[t]=!0,Yt(...s))}function df(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pf={[Ya]:Za,[$a]:ja,[Ja]:Qa,[bs]:Ka,[Za]:Ya,[ja]:$a,[Qa]:Ja,[Ka]:bs},Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ql=Math.PI/180,no=180/Math.PI;function ni(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function se(s,t,e){return Math.max(t,Math.min(e,s))}function Od(s,t){return(s%t+t)%t}function Yl(s,t,e){return(1-e)*s+e*t}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ih=class ih{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;var mt=ih,gn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*_;m<0&&(u=-u,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+_*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+_*o;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sh=class sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;var B=sh,Zl=new B,tu=new gn,rh=class rh{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],w=i[4],x=i[7],b=i[2],T=i[5],L=i[8];return r[0]=a*_+o*S+l*b,r[3]=a*m+o*w+l*T,r[6]=a*p+o*x+l*L,r[1]=c*_+h*S+f*b,r[4]=c*m+h*w+f*T,r[7]=c*p+h*x+f*L,r[2]=u*_+d*S+g*b,r[5]=u*m+d*w+g*T,r[8]=u*p+d*x+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($l.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($l.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($l.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rh.prototype.isMatrix3=!0;var $t=rh,$l=new $t,eu=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bd(){let s={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_e&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(i.r=Ss(i.r),i.g=Ss(i.g),i.b=Ss(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?pr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[dr]:{primaries:t,whitePoint:n,transfer:pr,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:eu,fromXYZ:nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}var oe=Bd();function ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ss,io=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=mr("canvas")),ss.width=t.width,ss.height=t.height;let i=ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zd=0,As=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Jl(i[a].image)):r.push(Jl(i[a]))}else r=Jl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jl(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?io.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var Hd=0,Kl=new B,rn=class s extends Xn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Vn,i=Vn,r=Ze,a=Ti,o=En,l=un,c=s.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=ni(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kl).x}get height(){return this.source.getSize(Kl).y}get depth(){return this.source.getSize(Kl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Es:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Es:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Vc;rn.DEFAULT_ANISOTROPY=1;var ah=class ah{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,x=(d+1)/2,b=(p+1)/2,T=(h+u)/4,L=(f+_)/4,y=(g+m)/4;return w>x&&w>b?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=T/n,r=L/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=L/r,i=y/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;var Pe=ah,so=class extends Xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new rn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new As(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends so{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xr=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Io=class Io{constructor(t,e,n,i,r,a,o,l,c,h,f,u,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,u,d,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,f,u,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Io().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,Gd)}lookAt(t,e,n){let i=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),pi.crossVectors(n,pn),pi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),pi.crossVectors(n,pn)),pi.normalize(),_a.crossVectors(pn,pi),i[0]=pi.x,i[4]=_a.x,i[8]=pn.x,i[1]=pi.y,i[5]=_a.y,i[9]=pn.y,i[2]=pi.z,i[6]=_a.z,i[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],w=n[7],x=n[11],b=n[15],T=i[0],L=i[4],y=i[8],A=i[12],P=i[1],F=i[5],M=i[9],I=i[13],C=i[2],R=i[6],D=i[10],U=i[14],z=i[3],O=i[7],V=i[11],W=i[15];return r[0]=a*T+o*P+l*C+c*z,r[4]=a*L+o*F+l*R+c*O,r[8]=a*y+o*M+l*D+c*V,r[12]=a*A+o*I+l*U+c*W,r[1]=h*T+f*P+u*C+d*z,r[5]=h*L+f*F+u*R+d*O,r[9]=h*y+f*M+u*D+d*V,r[13]=h*A+f*I+u*U+d*W,r[2]=g*T+_*P+m*C+p*z,r[6]=g*L+_*F+m*R+p*O,r[10]=g*y+_*M+m*D+p*V,r[14]=g*A+_*I+m*U+p*W,r[3]=S*T+w*P+x*C+b*z,r[7]=S*L+w*F+x*R+b*O,r[11]=S*y+w*M+x*D+b*V,r[15]=S*A+w*I+x*U+b*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15],S=l*d-c*u,w=o*d-c*f,x=o*u-l*f,b=a*d-c*h,T=a*u-l*h,L=a*f-o*h;return e*(_*S-m*w+p*x)-n*(g*S-m*b+p*T)+i*(g*w-_*b+p*L)-r*(g*x-_*T+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=e*o-n*a,w=e*l-i*a,x=e*c-r*a,b=n*l-i*o,T=n*c-r*o,L=i*c-r*l,y=h*_-f*g,A=h*m-u*g,P=h*p-d*g,F=f*m-u*_,M=f*p-d*_,I=u*p-d*m,C=S*I-w*M+x*F+b*P-T*A+L*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=(o*I-l*M+c*F)*R,t[1]=(i*M-n*I-r*F)*R,t[2]=(_*L-m*T+p*b)*R,t[3]=(u*T-f*L-d*b)*R,t[4]=(l*P-a*I-c*A)*R,t[5]=(e*I-i*P+r*A)*R,t[6]=(m*x-g*L-p*w)*R,t[7]=(h*L-u*x+d*w)*R,t[8]=(a*M-o*P+c*y)*R,t[9]=(n*P-e*M-r*y)*R,t[10]=(g*T-_*x+p*S)*R,t[11]=(f*x-h*T-d*S)*R,t[12]=(o*A-a*F-l*y)*R,t[13]=(e*F-n*A+i*y)*R,t[14]=(_*w-g*b-m*S)*R,t[15]=(h*b-f*w+u*S)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,_=a*h,m=a*f,p=o*f,S=l*c,w=l*h,x=l*f,b=n.x,T=n.y,L=n.z;return i[0]=(1-(_+p))*b,i[1]=(d+x)*b,i[2]=(g-w)*b,i[3]=0,i[4]=(d-x)*T,i[5]=(1-(u+p))*T,i[6]=(m+S)*T,i[7]=0,i[8]=(g+w)*L,i[9]=(m-S)*L,i[10]=(1-(u+_))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=rs.set(i[0],i[1],i[2]).length(),o=rs.set(i[4],i[5],i[6]).length(),l=rs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,h=1/o,f=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,e.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Ln,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Ln)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ws)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Ln,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Ln)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ws)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Io.prototype.isMatrix4=!0;var pe=Io,rs=new B,Rn=new pe,kd=new B(0,0,0),Gd=new B(1,1,1),pi=new B,_a=new B,pn=new B,iu=new pe,su=new gn,xn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vd=0,ru=new B,as=new gn,Jn=new pe,ya=new B,tr=new B,Wd=new B,Xd=new gn,au=new B(1,0,0),ou=new B(0,1,0),lu=new B(0,0,1),cu={type:"added"},qd={type:"removed"},os={type:"childadded",child:null},jl={type:"childremoved",child:null},He=class s extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new B,e=new xn,n=new gn,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new $t}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return ru.copy(t).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ya.copy(t):ya.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(tr,ya,this.up):Jn.lookAt(ya,tr,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),as.setFromRotationMatrix(Jn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cu),os.child=t,this.dispatchEvent(os),os.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd),jl.child=t,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cu),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new B(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var le=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yd={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},va={h:0,s:0,l:0};function Ql(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Od(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ql(a,r,t+1/3),this.g=Ql(a,r,t),this.b=Ql(a,r,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=mf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return oe.workingToColorSpace(je.copy(this),t),Math.round(se(je.r*255,0,255))*65536+Math.round(se(je.g*255,0,255))*256+Math.round(se(je.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(je.copy(this),e);let n=je.r,i=je.g,r=je.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ie){oe.workingToColorSpace(je.copy(this),t);let e=je.r,n=je.g,i=je.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(va);let n=Yl(mi.h,va.h,e),i=Yl(mi.s,va.s,e),r=Yl(mi.l,va.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Ut;Ut.NAMES=mf;var Cs=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},si=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cn=new B,Kn=new B,tc=new B,jn=new B,ls=new B,cs=new B,hu=new B,ec=new B,nc=new B,ic=new B,sc=new Pe,rc=new Pe,ac=new Pe,ei=class s{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Cn.subVectors(t,e),i.cross(Cn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Cn.subVectors(i,e),Kn.subVectors(n,e),tc.subVectors(t,e);let a=Cn.dot(Cn),o=Cn.dot(Kn),l=Cn.dot(tc),c=Kn.dot(Kn),h=Kn.dot(tc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return sc.setScalar(0),rc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(sc,r.x),a.addScaledVector(rc,r.y),a.addScaledVector(ac,r.z),a}static isFrontFacing(t,e,n,i){return Cn.subVectors(n,e),Kn.subVectors(t,e),Cn.cross(Kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Cn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ls.subVectors(i,n),cs.subVectors(r,n),ec.subVectors(t,n);let l=ls.dot(ec),c=cs.dot(ec);if(l<=0&&c<=0)return e.copy(n);nc.subVectors(t,i);let h=ls.dot(nc),f=cs.dot(nc);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ls,a);ic.subVectors(t,r);let d=ls.dot(ic),g=cs.dot(ic);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(cs,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return hu.subVectors(r,i),o=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(hu,o);let p=1/(m+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(t.matrixWorld),this.union(Ma)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Sa.subVectors(this.max,er),hs.subVectors(t.a,er),us.subVectors(t.b,er),fs.subVectors(t.c,er),gi.subVectors(us,hs),xi.subVectors(fs,us),Ui.subVectors(hs,fs);let e=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Ui.z,Ui.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Ui.z,0,-Ui.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Ui.y,Ui.x,0];return!oc(e,hs,us,fs,Sa)||(e=[1,0,0,0,1,0,0,0,1],!oc(e,hs,us,fs,Sa))?!1:(ba.crossVectors(gi,xi),e=[ba.x,ba.y,ba.z],oc(e,hs,us,fs,Sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new B,new B,new B,new B,new B,new B,new B,new B],In=new B,Ma=new qn,hs=new B,us=new B,fs=new B,gi=new B,xi=new B,Ui=new B,er=new B,Sa=new B,ba=new B,Fi=new B;function oc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Fi.fromArray(s,r);let o=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ze=new B,Ea=new mt,Zd=0,Ee=class extends Xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var yr=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vr=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},$d=new qn,nr=new B,lc=new B,ri=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(nr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(lc)),this.expandByPoint(nr.copy(t.center).sub(lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jd=0,Mn=new pe,cc=new He,ds=new B,mn=new qn,ir=new qn,qe=new B,Ae=class s extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ud(t)?vr:yr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(mn.min,ir.min),mn.expandByPoint(qe),qe.addVectors(mn.max,ir.max),mn.expandByPoint(qe)):(mn.expandByPoint(ir.min),mn.expandByPoint(ir.max))}mn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qe.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(t,c),qe.add(ds)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ee(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new B,l[y]=new B;let c=new B,h=new B,f=new B,u=new mt,d=new mt,g=new mt,_=new B,m=new B;function p(y,A,P){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(F),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(F),o[y].add(_),o[A].add(_),o[P].add(_),l[y].add(m),l[A].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let y=0,A=S.length;y<A;++y){let P=S[y],F=P.start,M=P.count;for(let I=F,C=F+M;I<C;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let w=new B,x=new B,b=new B,T=new B;function L(y){b.fromBufferAttribute(i,y),T.copy(b);let A=o[y];w.copy(A),w.sub(b.multiplyScalar(b.dot(A))).normalize(),x.crossVectors(T,A);let F=x.dot(l[y])<0?-1:1;a.setXYZW(y,w.x,w.y,w.z,F)}for(let y=0,A=S.length;y<A;++y){let P=S[y],F=P.start,M=P.count;for(let I=F,C=F+M;I<C;I+=3)L(t.getX(I+0)),L(t.getX(I+1)),L(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Ee(u,h,f)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},sn=new B,Is=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hc=new B,Kd=new B,jd=new $t,Pn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=hc.subVectors(n,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jd.getNormalMatrix(t),i=this.coplanarPoint(hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qd=0,Dn=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Ei,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Fc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ps=class extends Dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ps,sr=new B,ms=new B,gs=new B,xs=new mt,rr=new mt,gf=new pe,wa=new B,ar=new B,Ta=new B,uu=new mt,uc=new mt,fu=new mt,Sr=class extends He{constructor(t=new Ps){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mr(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Is(n,3,0,!1)),ps.setAttribute("uv",new Is(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),gf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Aa(wa.set(-.5,-.5,0),gs,a,ms,i,r),Aa(ar.set(.5,-.5,0),gs,a,ms,i,r),Aa(Ta.set(.5,.5,0),gs,a,ms,i,r),uu.set(0,0),uc.set(1,0),fu.set(1,1);let o=t.ray.intersectTriangle(wa,ar,Ta,!1,sr);if(o===null&&(Aa(ar.set(-.5,.5,0),gs,a,ms,i,r),uc.set(0,1),o=t.ray.intersectTriangle(wa,Ta,ar,!1,sr),o===null))return;let l=t.ray.origin.distanceTo(sr);l<t.near||l>t.far||e.push({distance:l,point:sr.clone(),uv:ei.getInterpolation(sr,wa,ar,Ta,uu,uc,fu,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Aa(s,t,e,n,i,r){xs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(rr.x=r*xs.x-i*xs.y,rr.y=i*xs.x+r*xs.y):rr.copy(xs),s.copy(t),s.x+=rr.x,s.y+=rr.y,s.applyMatrix4(gf)}var ti=new B,fc=new B,Ra=new B,Ca=new B,br=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fc.copy(t).add(e).multiplyScalar(.5),Ra.copy(e).sub(t).normalize(),Ca.copy(this.origin).sub(fc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ra),o=Ca.dot(this.direction),l=-Ca.dot(Ra),c=Ca.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(fc).addScaledVector(Ra,u),d}intersectSphere(t,e){if(t.radius<0)return null;ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,w=n.z-a.z,x=Math.abs(l),b=Math.abs(c),T=Math.abs(h),L,y,A,P,F,M,I,C,R,D,U,z;if(x>=b&&x>=T?(A=l,M=f,R=g,z=p,l>=0?(L=c,y=h,P=u,F=d,I=_,C=m,D=S,U=w):(L=h,y=c,P=d,F=u,I=m,C=_,D=w,U=S)):b>=T?(A=c,M=u,R=_,z=S,c>=0?(L=h,y=l,P=d,F=f,I=m,C=g,D=w,U=p):(L=l,y=h,P=f,F=d,I=g,C=m,D=p,U=w)):(A=h,M=d,R=m,z=w,h>=0?(L=l,y=c,P=f,F=u,I=g,C=_,D=p,U=S):(L=c,y=l,P=u,F=f,I=_,C=g,D=S,U=p)),A===0)return null;let O=L/A,V=y/A,W=1/A,lt=P-O*M,at=F-V*M,Ct=I-O*R,Vt=C-V*R,Kt=D-O*z,J=U-V*z,tt=Kt*Vt-J*Ct,_t=lt*J-at*Kt,it=Ct*at-Vt*lt;if(i){if(tt<0||_t<0||it<0)return null}else if((tt<0||_t<0||it<0)&&(tt>0||_t>0||it>0))return null;let et=tt+_t+it;if(et===0)return null;let Lt=W*(tt*M+_t*R+it*z);return(et>0?Lt<0:Lt>0)?null:this.at(Lt/et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},du=new pe,Oi=new br,Ia=new ri,pu=new B,Pa=new B,La=new B,Da=new B,dc=new B,Na=new B,mu=new B,Ua=new B,ot=class extends He{constructor(t=new Ae,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(dc.fromBufferAttribute(f,t),a?Na.addScaledVector(dc,h):Na.addScaledVector(dc.sub(e),h))}e.add(Na)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Ia.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Ia,pu)===null||Oi.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(du.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(du),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,b=w;x<b;x+=3){let T=o.getX(x),L=o.getX(x+1),y=o.getX(x+2);i=Fa(this,p,t,n,c,h,f,T,L,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);i=Fa(this,a,t,n,c,h,f,S,w,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,b=w;x<b;x+=3){let T=x,L=x+1,y=x+2;i=Fa(this,p,t,n,c,h,f,T,L,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=m,w=m+1,x=m+2;i=Fa(this,a,t,n,c,h,f,S,w,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function tp(s,t,e,n,i,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===bi,o),l===null)return null;Ua.copy(o),Ua.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ua);return c<e.near||c>e.far?null:{distance:c,point:Ua.clone(),object:s}}function Fa(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Pa),s.getVertexPosition(l,La),s.getVertexPosition(c,Da);let h=tp(s,t,e,n,Pa,La,Da,mu);if(h){let f=new B;ei.getBarycoord(mu,Pa,La,Da,f),i&&(h.uv=ei.getInterpolatedAttribute(i,o,l,c,f,new mt)),r&&(h.uv1=ei.getInterpolatedAttribute(r,o,l,c,f,new mt)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};ei.getNormal(Pa,La,Da,u.normal),h.face=u,h.barycoord=f}return h}var Er=class extends rn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ye,h=Ye,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ls=class extends Ee{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_s=new pe,gu=new pe,Oa=[],xu=new qn,ep=new pe,or=new ot,lr=new ri,wr=class extends ot{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ep)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),xu.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),lr.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_s),gu.multiplyMatrices(n,_s),or.matrixWorld=gu,or.raycast(t,Oa);for(let a=0,o=Oa.length;a<o;a++){let l=Oa[a];l.instanceId=r,l.object=this,e.push(l)}Oa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Er(new Float32Array(i*this.count),i,this.count,zo,bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bi=new ri,np=new mt(.5,.5),Ba=new B,Ds=class{constructor(t=new Pn,e=new Pn,n=new Pn,i=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],w=r[13],x=r[14],b=r[15];if(i[0].setComponents(c-a,d-h,p-g,b-S).normalize(),i[1].setComponents(c+a,d+h,p+g,b+S).normalize(),i[2].setComponents(c+o,d+f,p+_,b+w).normalize(),i[3].setComponents(c-o,d-f,p-_,b-w).normalize(),n)i[4].setComponents(l,u,m,x).normalize(),i[5].setComponents(c-l,d-u,p-m,b-x).normalize();else if(i[4].setComponents(c-l,d-u,p-m,b-x).normalize(),e===Ln)i[5].setComponents(c+l,d+u,p+m,b+x).normalize();else if(e===ws)i[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);let e=np.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ba.x=i.normal.x>0?t.max.x:t.min.x,Ba.y=i.normal.y>0?t.max.y:t.min.y,Ba.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ki=class extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_u=new pe,bc=new br,za=new ri,Ha=new B,Gi=class extends He{constructor(t=new Ae,e=new ki){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),za.radius+=r,t.ray.intersectsSphere(za)===!1)return;_u.copy(i).invert(),bc.copy(t.ray).applyMatrix4(_u);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=u,_=d;g<_;g++){let m=c.getX(g);Ha.fromBufferAttribute(f,m),yu(Ha,m,l,i,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,_=d;g<_;g++)Ha.fromBufferAttribute(f,g),yu(Ha,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yu(s,t,e,n,i,r,a){let o=bc.distanceSqToPoint(s);if(o<e){let l=new B;bc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Tr=class extends rn{constructor(t=[],e=wi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sn=class extends rn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends rn{constructor(t,e,n=Un,i,r,a,o=Ye,l=Ye,c,h=Wn,f=1){if(h!==Wn&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new As(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ao=class extends yi{constructor(t,e=Un,n=wi,i,r,a=Ye,o=Ye,l,c=Wn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ar=class extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},De=class s extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(f,2));function g(_,m,p,S,w,x,b,T,L,y,A){let P=x/L,F=b/y,M=x/2,I=b/2,C=T/2,R=L+1,D=y+1,U=0,z=0,O=new B;for(let V=0;V<D;V++){let W=V*F-I;for(let lt=0;lt<R;lt++){let at=lt*P-M;O[_]=at*S,O[m]=W*w,O[p]=C,c.push(O.x,O.y,O.z),O[_]=0,O[m]=0,O[p]=T>0?1:-1,h.push(O.x,O.y,O.z),f.push(lt/L),f.push(1-V/y),U+=1}}for(let V=0;V<y;V++)for(let W=0;W<L;W++){let lt=u+W+R*V,at=u+W+R*(V+1),Ct=u+(W+1)+R*(V+1),Vt=u+(W+1)+R*V;l.push(lt,at,Vt),l.push(at,Ct,Vt),z+=6}o.addGroup(d,z,A),d+=z,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ns=class s extends Ae{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,g=n*2+r,_=i+1,m=new B,p=new B;for(let S=0;S<=g;S++){let w=0,x=0,b=0,T=0;if(S<=n){let A=S/n,P=A*Math.PI/2;x=-h-t*Math.cos(P),b=t*Math.sin(P),T=-t*Math.cos(P),w=A*f}else if(S<=n+r){let A=(S-n)/r;x=-h+A*e,b=t,T=0,w=f+A*u}else{let A=(S-n-r)/n,P=A*Math.PI/2;x=h+t*Math.sin(P),b=t*Math.cos(P),T=t*Math.sin(P),w=f+u+A*f}let L=Math.max(0,Math.min(1,w/d)),y=0;S===0?y=.5/i:S===g&&(y=-.5/i);for(let A=0;A<=i;A++){let P=A/i,F=P*Math.PI*2,M=Math.sin(F),I=Math.cos(F);p.x=-b*I,p.y=x,p.z=b*M,o.push(p.x,p.y,p.z),m.set(-b*I,T,b*M),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+y,L)}if(S>0){let A=(S-1)*_;for(let P=0;P<i;P++){let F=A+P,M=A+P+1,I=S*_+P,C=S*_+P+1;a.push(F,M,I),a.push(M,C,I)}}}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var te=class s extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,_=[],m=n/2,p=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(d,2));function S(){let x=new B,b=new B,T=0,L=(e-t)/n;for(let y=0;y<=r;y++){let A=[],P=y/r,F=P*(e-t)+t;for(let M=0;M<=i;M++){let I=M/i,C=I*l+o,R=Math.sin(C),D=Math.cos(C);b.x=F*R,b.y=-P*n+m,b.z=F*D,f.push(b.x,b.y,b.z),x.set(R,L,D).normalize(),u.push(x.x,x.y,x.z),d.push(I,1-P),A.push(g++)}_.push(A)}for(let y=0;y<i;y++)for(let A=0;A<r;A++){let P=_[A][y],F=_[A+1][y],M=_[A+1][y+1],I=_[A][y+1];(t>0||A!==0)&&(h.push(P,F,I),T+=3),(e>0||A!==r-1)&&(h.push(F,M,I),T+=3)}c.addGroup(p,T,0),p+=T}function w(x){let b=g,T=new mt,L=new B,y=0,A=x===!0?t:e,P=x===!0?1:-1;for(let M=1;M<=i;M++)f.push(0,m*P,0),u.push(0,P,0),d.push(.5,.5),g++;let F=g;for(let M=0;M<=i;M++){let C=M/i*l+o,R=Math.cos(C),D=Math.sin(C);L.x=A*D,L.y=m*P,L.z=A*R,f.push(L.x,L.y,L.z),u.push(0,P,0),T.x=R*.5+.5,T.y=D*.5*P+.5,d.push(T.x,T.y),g++}for(let M=0;M<i;M++){let I=b+M,C=F+M;x===!0?h.push(C,C+1,I):h.push(C+1,C,I),y+=3}c.addGroup(p,y,x===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qe=class s extends te{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oo=class s extends Ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let w=new B,x=new B,b=new B;for(let T=0;T<e.length;T+=3)d(e[T+0],w),d(e[T+1],x),d(e[T+2],b),l(w,x,b,S)}function l(S,w,x,b){let T=b+1,L=[];for(let y=0;y<=T;y++){L[y]=[];let A=S.clone().lerp(x,y/T),P=w.clone().lerp(x,y/T),F=T-y;for(let M=0;M<=F;M++)M===0&&y===T?L[y][M]=A:L[y][M]=A.clone().lerp(P,M/F)}for(let y=0;y<T;y++)for(let A=0;A<2*(T-y)-1;A++){let P=Math.floor(A/2);A%2===0?(u(L[y][P+1]),u(L[y+1][P]),u(L[y][P])):(u(L[y][P+1]),u(L[y+1][P+1]),u(L[y+1][P]))}}function c(S){let w=new B;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(S),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function h(){let S=new B;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let x=m(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;a.push(x,1-b)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){let w=a[S+0],x=a[S+2],b=a[S+4],T=Math.max(w,x,b),L=Math.min(w,x,b);T>.9&&L<.1&&(w<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function d(S,w){let x=S*3;w.x=t[x+0],w.y=t[x+1],w.z=t[x+2]}function g(){let S=new B,w=new B,x=new B,b=new B,T=new mt,L=new mt,y=new mt;for(let A=0,P=0;A<r.length;A+=9,P+=6){S.set(r[A+0],r[A+1],r[A+2]),w.set(r[A+3],r[A+4],r[A+5]),x.set(r[A+6],r[A+7],r[A+8]),T.set(a[P+0],a[P+1]),L.set(a[P+2],a[P+3]),y.set(a[P+4],a[P+5]),b.copy(S).add(w).add(x).divideScalar(3);let F=m(b);_(T,P+0,S,F),_(L,P+2,w,F),_(y,P+4,x,F)}}function _(S,w,x,b){b<0&&S.x===1&&(a[w]=S.x-1),x.x===0&&x.z===0&&(a[w]=b/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var _n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new mt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,i=[],r=[],a=[],o=new B,l=new pe;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(se(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(se(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Us=class extends _n{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new mt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lo=class extends Us{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var vu=new B,Mu=new B,pc=new jc,mc=new jc,gc=new jc,co=class extends _n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Mu.subVectors(i[0],i[1]).add(i[0]),c=Mu);let f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(vu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=vu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),pc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,m),mc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,m),gc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),mc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),gc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(pc.calc(l),mc.calc(l),gc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Su(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function ip(s,t){let e=1-s;return e*e*t}function sp(s,t){return 2*(1-s)*s*t}function rp(s,t){return s*s*t}function hr(s,t,e,n){return ip(s,t)+sp(s,e)+rp(s,n)}function ap(s,t){let e=1-s;return e*e*e*t}function op(s,t){let e=1-s;return 3*e*e*s*t}function lp(s,t){return 3*(1-s)*s*s*t}function cp(s,t){return s*s*s*t}function ur(s,t,e,n,i){return ap(s,t)+op(s,e)+lp(s,n)+cp(s,i)}var Rr=class extends _n{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,i.x,r.x,a.x,o.x),ur(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ho=class extends _n{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,i.x,r.x,a.x,o.x),ur(t,i.y,r.y,a.y,o.y),ur(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cr=class extends _n{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends _n{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ir=class extends _n{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(hr(t,i.x,r.x,a.x),hr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends _n{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(hr(t,i.x,r.x,a.x),hr(t,i.y,r.y,a.y),hr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Su(o,l.x,c.x,h.x,f.x),Su(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new mt().fromArray(i))}return this}},Ec=Object.freeze({__proto__:null,ArcCurve:lo,CatmullRomCurve3:co,CubicBezierCurve:Rr,CubicBezierCurve3:ho,EllipseCurve:Us,LineCurve:Cr,LineCurve3:uo,QuadraticBezierCurve:Ir,QuadraticBezierCurve3:fo,SplineCurve:Pr}),po=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ec[i.type]().fromJSON(i))}return this}},Lr=class extends po{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Cr(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ir(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Rr(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Pr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Us(t,e,n,i,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fs=class extends Lr{constructor(t){super(t),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Lr().fromJSON(i))}return this}};function hp(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=xf(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=mp(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,f=l;for(let u=e;u<i;u+=e){let d=s[u],g=s[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Dr(r,a,e,o,l,c,0),a}function xf(s,t,e,n,i){let r;if(i===Tp(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=bu(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=bu(a/n|0,s[a],s[a+1],r);return r&&Os(r,r.next)&&(Ur(r),r=r.next),r}function Vi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Os(e,e.next)||Le(e.prev,e,e.next)===0)){if(Ur(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Dr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&vp(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?fp(s,n,i,r):up(s)){t.push(l.i,s.i,c.i),Ur(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=dp(Vi(s),t),Dr(s,t,e,n,i,r,2)):a===2&&pp(s,t,e,n,i,r):Dr(Vi(s),t,e,n,i,r,1);break}}}function up(s){let t=s.prev,e=s,n=s.next;if(Le(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),f=Math.min(o,l,c),u=Math.max(i,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&cr(i,o,r,l,a,c,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fp(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Le(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),_=Math.max(o,l,c),m=Math.max(h,f,u),p=wc(d,g,t,e,n),S=wc(_,m,t,e,n),w=s.prevZ,x=s.nextZ;for(;w&&w.z>=p&&x&&x.z<=S;){if(w.x>=d&&w.x<=_&&w.y>=g&&w.y<=m&&w!==i&&w!==a&&cr(o,h,l,f,c,u,w.x,w.y)&&Le(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&cr(o,h,l,f,c,u,x.x,x.y)&&Le(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=_&&w.y>=g&&w.y<=m&&w!==i&&w!==a&&cr(o,h,l,f,c,u,w.x,w.y)&&Le(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&cr(o,h,l,f,c,u,x.x,x.y)&&Le(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function dp(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Os(n,i)&&yf(n,e,e.next,i)&&Nr(n,i)&&Nr(i,n)&&(t.push(n.i,e.i,i.i),Ur(e),Ur(e.next),e=s=i),e=e.next}while(e!==s);return Vi(e)}function pp(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bp(a,o)){let l=vf(a,o);a=Vi(a,a.next),l=Vi(l,l.next),Dr(a,t,e,n,i,r,0),Dr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function mp(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=xf(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Sp(c))}i.sort(gp);for(let r=0;r<i.length;r++)e=xp(i[r],e);return e}function gp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function xp(s,t){let e=_p(s,t);if(!e)return t;let n=vf(e,s);return Vi(n,n.next),Vi(e,e.next)}function _p(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(Os(s,e))return e;do{if(Os(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&_f(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);Nr(e,s)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&yp(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function yp(s,t){return Le(s.prev,s,t.prev)<0&&Le(t.next,s,s.next)<0}function vp(s,t,e,n){let i=s;do i.z===0&&(i.z=wc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Mp(i)}function Mp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function wc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Sp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function _f(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function cr(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&_f(s,t,e,n,i,r,a,o)}function bp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Ep(s,t)&&(Nr(s,t)&&Nr(t,s)&&wp(s,t)&&(Le(s.prev,s,t.prev)||Le(s,t.prev,t))||Os(s,t)&&Le(s.prev,s,s.next)>0&&Le(t.prev,t,t.next)>0)}function Le(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Os(s,t){return s.x===t.x&&s.y===t.y}function yf(s,t,e,n){let i=Ga(Le(s,t,e)),r=Ga(Le(s,t,n)),a=Ga(Le(e,n,s)),o=Ga(Le(e,n,t));return!!(i!==r&&a!==o||i===0&&ka(s,e,t)||r===0&&ka(s,n,t)||a===0&&ka(e,s,n)||o===0&&ka(e,t,n))}function ka(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ga(s){return s>0?1:s<0?-1:0}function Ep(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&yf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Nr(s,t){return Le(s.prev,s,s.next)<0?Le(s,t,s.next)>=0&&Le(s,s.prev,t)>=0:Le(s,t,s.prev)<0||Le(s,s.next,t)<0}function wp(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function vf(s,t){let e=Tc(s.i,s.x,s.y),n=Tc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bu(s,t,e,n){let i=Tc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ur(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Tc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tp(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Ac=class{static triangulate(t,e,n=2){return hp(t,e,n)}},zi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Eu(t),wu(n,t);let a=t.length;e.forEach(Eu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,wu(n,e[l]);let o=Ac.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Eu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function wu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Bs=class s extends Ae{constructor(t=new Fs([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new de(i,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Ap,w,x=!1,b,T,L,y;if(p){w=p.getSpacedPoints(h),x=!0,u=!1;let Q=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,Q),T=new B,L=new B,y=new B}u||(m=0,d=0,g=0,_=0);let A=o.extractPoints(c),P=A.shape,F=A.holes;if(!zi.isClockWise(P)){P=P.reverse();for(let Q=0,ft=F.length;Q<ft;Q++){let dt=F[Q];zi.isClockWise(dt)&&(F[Q]=dt.reverse())}}function I(Q){let dt=10000000000000001e-36,pt=Q[0];for(let yt=1;yt<=Q.length;yt++){let Wt=yt%Q.length,kt=Q[Wt],Zt=kt.x-pt.x,Jt=kt.y-pt.y,H=Zt*Zt+Jt*Jt,me=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(pt.x),Math.abs(pt.y)),re=dt*me*me;if(H<=re){Q.splice(Wt,1),yt--;continue}pt=kt}}I(P),F.forEach(I);let C=F.length,R=P;for(let Q=0;Q<C;Q++){let ft=F[Q];P=P.concat(ft)}function D(Q,ft,dt){return ft||qt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ft,dt)}let U=P.length;function z(Q,ft,dt){let pt,yt,Wt,kt=Q.x-ft.x,Zt=Q.y-ft.y,Jt=dt.x-Q.x,H=dt.y-Q.y,me=kt*kt+Zt*Zt,re=kt*H-Zt*Jt;if(Math.abs(re)>Number.EPSILON){let N=Math.sqrt(me),v=Math.sqrt(Jt*Jt+H*H),X=ft.x-Zt/N,Z=ft.y+kt/N,K=dt.x-H/v,gt=dt.y+Jt/v,xt=((K-X)*H-(gt-Z)*Jt)/(kt*H-Zt*Jt);pt=X+kt*xt-Q.x,yt=Z+Zt*xt-Q.y;let j=pt*pt+yt*yt;if(j<=2)return new mt(pt,yt);Wt=Math.sqrt(j/2)}else{let N=!1;kt>Number.EPSILON?Jt>Number.EPSILON&&(N=!0):kt<-Number.EPSILON?Jt<-Number.EPSILON&&(N=!0):Math.sign(Zt)===Math.sign(H)&&(N=!0),N?(pt=-Zt,yt=kt,Wt=Math.sqrt(me)):(pt=kt,yt=Zt,Wt=Math.sqrt(me/2))}return new mt(pt/Wt,yt/Wt)}let O=[];for(let Q=0,ft=R.length,dt=ft-1,pt=Q+1;Q<ft;Q++,dt++,pt++)dt===ft&&(dt=0),pt===ft&&(pt=0),O[Q]=z(R[Q],R[dt],R[pt]);let V=[],W,lt=O.concat();for(let Q=0,ft=C;Q<ft;Q++){let dt=F[Q];W=[];for(let pt=0,yt=dt.length,Wt=yt-1,kt=pt+1;pt<yt;pt++,Wt++,kt++)Wt===yt&&(Wt=0),kt===yt&&(kt=0),W[pt]=z(dt[pt],dt[Wt],dt[kt]);V.push(W),lt=lt.concat(W)}let at;if(m===0)at=zi.triangulateShape(R,F);else{let Q=[],ft=[];for(let dt=0;dt<m;dt++){let pt=dt/m,yt=d*Math.cos(pt*Math.PI/2),Wt=g*Math.sin(pt*Math.PI/2)+_;for(let kt=0,Zt=R.length;kt<Zt;kt++){let Jt=D(R[kt],O[kt],Wt);_t(Jt.x,Jt.y,-yt),pt===0&&Q.push(Jt)}for(let kt=0,Zt=C;kt<Zt;kt++){let Jt=F[kt];W=V[kt];let H=[];for(let me=0,re=Jt.length;me<re;me++){let N=D(Jt[me],W[me],Wt);_t(N.x,N.y,-yt),pt===0&&H.push(N)}pt===0&&ft.push(H)}}at=zi.triangulateShape(Q,ft)}let Ct=at.length,Vt=g+_;for(let Q=0;Q<U;Q++){let ft=u?D(P[Q],lt[Q],Vt):P[Q];x?(L.copy(b.normals[0]).multiplyScalar(ft.x),T.copy(b.binormals[0]).multiplyScalar(ft.y),y.copy(w[0]).add(L).add(T),_t(y.x,y.y,y.z)):_t(ft.x,ft.y,0)}for(let Q=1;Q<=h;Q++)for(let ft=0;ft<U;ft++){let dt=u?D(P[ft],lt[ft],Vt):P[ft];x?(L.copy(b.normals[Q]).multiplyScalar(dt.x),T.copy(b.binormals[Q]).multiplyScalar(dt.y),y.copy(w[Q]).add(L).add(T),_t(y.x,y.y,y.z)):_t(dt.x,dt.y,f/h*Q)}for(let Q=m-1;Q>=0;Q--){let ft=Q/m,dt=d*Math.cos(ft*Math.PI/2),pt=g*Math.sin(ft*Math.PI/2)+_;for(let yt=0,Wt=R.length;yt<Wt;yt++){let kt=D(R[yt],O[yt],pt);_t(kt.x,kt.y,f+dt)}for(let yt=0,Wt=F.length;yt<Wt;yt++){let kt=F[yt];W=V[yt];for(let Zt=0,Jt=kt.length;Zt<Jt;Zt++){let H=D(kt[Zt],W[Zt],pt);x?_t(H.x,H.y+w[h-1].y,w[h-1].x+dt):_t(H.x,H.y,f+dt)}}}Kt(),J();function Kt(){let Q=i.length/3;if(u){let ft=0,dt=U*ft;for(let pt=0;pt<Ct;pt++){let yt=at[pt];it(yt[2]+dt,yt[1]+dt,yt[0]+dt)}ft=h+m*2,dt=U*ft;for(let pt=0;pt<Ct;pt++){let yt=at[pt];it(yt[0]+dt,yt[1]+dt,yt[2]+dt)}}else{for(let ft=0;ft<Ct;ft++){let dt=at[ft];it(dt[2],dt[1],dt[0])}for(let ft=0;ft<Ct;ft++){let dt=at[ft];it(dt[0]+U*h,dt[1]+U*h,dt[2]+U*h)}}n.addGroup(Q,i.length/3-Q,0)}function J(){let Q=i.length/3,ft=0;tt(R,ft),ft+=R.length;for(let dt=0,pt=F.length;dt<pt;dt++){let yt=F[dt];tt(yt,ft),ft+=yt.length}n.addGroup(Q,i.length/3-Q,1)}function tt(Q,ft){let dt=Q.length;for(;--dt>=0;){let pt=dt,yt=dt-1;yt<0&&(yt=Q.length-1);for(let Wt=0,kt=h+m*2;Wt<kt;Wt++){let Zt=U*Wt,Jt=U*(Wt+1),H=ft+pt+Zt,me=ft+yt+Zt,re=ft+yt+Jt,N=ft+pt+Jt;et(H,me,re,N)}}}function _t(Q,ft,dt){l.push(Q),l.push(ft),l.push(dt)}function it(Q,ft,dt){Lt(Q),Lt(ft),Lt(dt);let pt=i.length/3,yt=S.generateTopUV(n,i,pt-3,pt-2,pt-1);jt(yt[0]),jt(yt[1]),jt(yt[2])}function et(Q,ft,dt,pt){Lt(Q),Lt(ft),Lt(pt),Lt(ft),Lt(dt),Lt(pt);let yt=i.length/3,Wt=S.generateSideWallUV(n,i,yt-6,yt-3,yt-2,yt-1);jt(Wt[0]),jt(Wt[1]),jt(Wt[3]),jt(Wt[1]),jt(Wt[2]),jt(Wt[3])}function Lt(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function jt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Rp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ec[i.type]().fromJSON(i)),new s(n,t.options)}},Ap={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new mt(r,a),new mt(o,l),new mt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new mt(a,1-l),new mt(c,1-f),new mt(u,1-g),new mt(_,1-p)]:[new mt(o,1-l),new mt(h,1-f),new mt(d,1-g),new mt(m,1-p)]}};function Rp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var zs=class s extends oo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},cn=class s extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let w=0;w<c;w++){let x=w*f-r;g.push(x,-S,0),_.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let w=S+c*p,x=S+c*(p+1),b=S+1+c*(p+1),T=S+1+c*p;d.push(w,x,T),d.push(x,b,T)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ne=class s extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new B,u=new B,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],w=p/n,x=a+w*o,b=t*Math.cos(x),T=Math.sqrt(t*t-b*b),L=0;p===0&&a===0?L=.5/e:p===n&&l===Math.PI&&(L=-.5/e);for(let y=0;y<=e;y++){let A=y/e,P=i+A*r;f.x=-T*Math.cos(P),f.y=b,f.z=T*Math.sin(P),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(A+L,1-w),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let w=h[p][S+1],x=h[p][S],b=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&d.push(w,x,T),(p!==n-1||l<Math.PI)&&d.push(x,b,T)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ye=class s extends Ae{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],u=new B,d=new B,g=new B;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let p=0;p<=i;p++){let S=p/i*r;d.x=(t+e*Math.cos(m))*Math.cos(S),d.y=(t+e*Math.cos(m))*Math.sin(S),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/i),f.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let p=(i+1)*_+m-1,S=(i+1)*(_-1)+m-1,w=(i+1)*(_-1)+m,x=(i+1)*_+m;l.push(p,S,x),l.push(S,w,x)}this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Zi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Tu(i))i.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Tu(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function tn(s){let t={};for(let e=0;e<s.length;e++){let n=Zi(s[e]);for(let i in n)t[i]=n[i]}return t}function Tu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Mf={clone:Zi,merge:tn},Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(i.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},mo=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Se=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Fr=class extends Se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Or=class extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jr,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},go=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xo=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ys(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function xc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var vi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_o=class extends vi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mc:r=t,o=2*e-n;break;case Sc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mc:a=t,l=2*n-e;break;case Sc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,w=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+S*a[c+b]+w*a[l+b]+x*a[f+b];return r}},yo=class extends vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},vo=class extends vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Mo=class extends vi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(i-e),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=d*u+g*2,S=f[p],w=f[p+1],x=t*u+g*2,b=h[x],T=h[x+1],L=Dp(n,e,S,b,i);r[g]=Sf(L,_,w,T,m)}return r}};function Sf(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Lp(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Dp(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Sf(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Lp(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var yn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ys(e,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ys(t.times,Array),values:ys(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),xc(t.settings)&&(n.settings={inTangents:ys(t.settings.inTangents,Array),outTangents:ys(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Mo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fr:e=this.InterpolantFactoryMethodDiscrete;break;case eo:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break;case yc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return yc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;xc(this.settings)&&(Au(this.settings.inTangents,t),Au(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Fd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[u+g]||_!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,xc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Au(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=eo;var Mi=class extends yn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=fr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends yn{constructor(t,e,n,i){super(t,e,n,i)}};So.prototype.ValueTypeName="color";var bo=class extends yn{constructor(t,e,n,i){super(t,e,n,i)}};bo.prototype.ValueTypeName="number";var Eo=class extends vi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Br=class extends yn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends yn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=fr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends yn{constructor(t,e,n,i){super(t,e,n,i)}};wo.prototype.ValueTypeName="vector";var To=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bf=new To,Ao=class{constructor(t){this.manager=t!==void 0?t:bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hs=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Wi=class extends Hs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_c=new pe,Ru=new B,Cu=new B,zr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ru),Cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(_c,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===ws||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(_c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Va=new B,Wa=new gn,kn=new B,Hr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Va,Wa,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Va,Wa,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_i=new B,Iu=new mt,Pu=new mt,Ge=class extends Hr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Pu),e.subVectors(Pu,Iu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ql*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Rc=class extends zr{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0}},kr=class extends Hs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ks=class extends Hr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cc=class extends zr{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xi=class extends Hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Cc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var vs=-90,Ms=1,Ro=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ge(vs,Ms,t,e);i.layers=this.layers,this.add(i);let r=new Ge(vs,Ms,t,e);r.layers=this.layers,this.add(r);let a=new Ge(vs,Ms,t,e);a.layers=this.layers,this.add(a);let o=new Ge(vs,Ms,t,e);o.layers=this.layers,this.add(o);let l=new Ge(vs,Ms,t,e);l.layers=this.layers,this.add(l);let c=new Ge(vs,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Co=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var th="\\[\\]\\.:\\/",Np=new RegExp("["+th+"]","g"),eh="[^"+th+"]",Up="[^"+th.replace("\\.","")+"]",Fp=/((?:WC+[\/:])*)/.source.replace("WC",eh),Op=/(WCOD+)?/.source.replace("WCOD",Up),Bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),Hp=new RegExp("^"+Fp+Op+Bp+zp+"$"),kp=["material","materials","bones","map"],Ic=class{constructor(t,e,n){let i=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Np,"")}static parseTrackName(t){let e=Hp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);kp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Ic;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oy=new Float32Array(1);var oh=class oh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};oh.prototype.isMatrix2=!0;var Pc=oh;function nh(s,t,e,n){let i=Gp(n);switch(e){case Zc:return s*t;case zo:return s*t/i.components*i.byteLength;case Ho:return s*t/i.components*i.byteLength;case Ri:return s*t*2/i.components*i.byteLength;case ko:return s*t*2/i.components*i.byteLength;case $c:return s*t*3/i.components*i.byteLength;case En:return s*t*4/i.components*i.byteLength;case Go:return s*t*4/i.components*i.byteLength;case qr:case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wo:case qo:return Math.max(s,16)*Math.max(t,8)/4;case Vo:case Xo:return Math.max(s,8)*Math.max(t,8)/2;case Yo:case Zo:case Jo:case Ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $o:case Jr:case jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case dl:case pl:case ml:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gl:case xl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Kr:case _l:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gp(s){switch(s){case un:case Wc:return{byteLength:1,components:1};case Ws:case Xc:case Fn:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case Un:case Fo:case bn:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xf(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Yp(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,om=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ym=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ng=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ig=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:Zp,alphahash_pars_fragment:$p,alphamap_fragment:Jp,alphamap_pars_fragment:Kp,alphatest_fragment:jp,alphatest_pars_fragment:Qp,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:am,iridescence_fragment:om,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:fm,color_fragment:dm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:xm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:ym,displacementmap_pars_vertex:vm,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:bm,colorspace_fragment:Em,colorspace_pars_fragment:wm,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:Hm,envmap_vertex:Im,fog_vertex:Pm,fog_pars_vertex:Lm,fog_fragment:Dm,fog_pars_fragment:Nm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Bm,lights_pars_begin:zm,lights_toon_fragment:km,lights_toon_pars_fragment:Gm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:Zm,lights_fragment_end:$m,lightprobes_pars_fragment:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:t0,map_fragment:e0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:s0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:a0,morphinstance_vertex:o0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:h0,morphtarget_vertex:u0,normal_fragment_begin:f0,normal_fragment_maps:d0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:M0,opaque_fragment:S0,packing:b0,premultiplied_alpha_fragment:E0,project_vertex:w0,dithering_fragment:T0,dithering_pars_fragment:A0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:P0,shadowmap_vertex:L0,shadowmask_pars_fragment:D0,skinbase_vertex:N0,skinning_pars_vertex:U0,skinning_vertex:F0,skinnormal_vertex:O0,specularmap_fragment:B0,specularmap_pars_fragment:z0,tonemapping_fragment:H0,tonemapping_pars_fragment:k0,transmission_fragment:G0,transmission_pars_fragment:V0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:Z0,background_frag:$0,backgroundCube_vert:J0,backgroundCube_frag:K0,cube_vert:j0,cube_frag:Q0,depth_vert:tg,depth_frag:eg,distance_vert:ng,distance_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:ag,linedashed_frag:og,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:hg,meshlambert_frag:ug,meshmatcap_vert:fg,meshmatcap_frag:dg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:xg,meshphysical_vert:_g,meshphysical_frag:yg,meshtoon_vert:vg,meshtoon_frag:Mg,points_vert:Sg,points_frag:bg,shadow_vert:Eg,shadow_frag:wg,sprite_vert:Tg,sprite_frag:Ag},wt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},$n={basic:{uniforms:tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:tn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:tn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:tn([wt.points,wt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:tn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:tn([wt.common,wt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:tn([wt.sprite,wt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:tn([wt.common,wt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:tn([wt.lights,wt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};$n.physical={uniforms:tn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Ml={r:0,b:0,g:0},Rg=new pe,qf=new $t;qf.set(-1,0,0,0,1,0,0,0,1);function Cg(s,t,e,n,i,r){let a=new Ut(0),o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let x=S.backgroundBlurriness>0;w=t.get(w,x)}return w}function g(S){let w=!1,x=d(S);x===null?m(a,o):x&&x.isColor&&(m(x,1),w=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(S,w){let x=d(w);x&&(x.isCubeTexture||x.mapping===Wr)?(c===void 0&&(c=new ot(new De(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Zi($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qf),c.material.toneMapped=oe.getTransfer(x.colorSpace)!==_e,(h!==x||f!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ot(new cn(2,2),new $e({name:"BackgroundMaterial",uniforms:Zi($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=oe.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB(Ml,Qc(s)),e.buffers.color.setClear(Ml.r,Ml.g,Ml.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:_,dispose:p}}function Ig(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(F,M,I,C,R){let D=!1,U=f(F,C,I,M);r!==U&&(r=U,c(r.object)),D=d(F,C,I,R),D&&g(F,C,I,R),R!==null&&t.update(R,s.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,x(F,M,I,C),R!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return s.createVertexArray()}function c(F){return s.bindVertexArray(F)}function h(F){return s.deleteVertexArray(F)}function f(F,M,I,C){let R=C.wireframe===!0,D=n[M.id];D===void 0&&(D={},n[M.id]=D);let U=F.isInstancedMesh===!0?F.id:0,z=D[U];z===void 0&&(z={},D[U]=z);let O=z[I.id];O===void 0&&(O={},z[I.id]=O);let V=O[R];return V===void 0&&(V=u(l()),O[R]=V),V}function u(F){let M=[],I=[],C=[];for(let R=0;R<e;R++)M[R]=0,I[R]=0,C[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:I,attributeDivisors:C,object:F,attributes:{},index:null}}function d(F,M,I,C){let R=r.attributes,D=M.attributes,U=0,z=I.getAttributes();for(let O in z)if(z[O].location>=0){let W=R[O],lt=D[O];if(lt===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(lt=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(lt=F.instanceColor)),W===void 0||W.attribute!==lt||lt&&W.data!==lt.data)return!0;U++}return r.attributesNum!==U||r.index!==C}function g(F,M,I,C){let R={},D=M.attributes,U=0,z=I.getAttributes();for(let O in z)if(z[O].location>=0){let W=D[O];W===void 0&&(O==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),O==="instanceColor"&&F.instanceColor&&(W=F.instanceColor));let lt={};lt.attribute=W,W&&W.data&&(lt.data=W.data),R[O]=lt,U++}r.attributes=R,r.attributesNum=U,r.index=C}function _(){let F=r.newAttributes;for(let M=0,I=F.length;M<I;M++)F[M]=0}function m(F){p(F,0)}function p(F,M){let I=r.newAttributes,C=r.enabledAttributes,R=r.attributeDivisors;I[F]=1,C[F]===0&&(s.enableVertexAttribArray(F),C[F]=1),R[F]!==M&&(s.vertexAttribDivisor(F,M),R[F]=M)}function S(){let F=r.newAttributes,M=r.enabledAttributes;for(let I=0,C=M.length;I<C;I++)M[I]!==F[I]&&(s.disableVertexAttribArray(I),M[I]=0)}function w(F,M,I,C,R,D,U){U===!0?s.vertexAttribIPointer(F,M,I,R,D):s.vertexAttribPointer(F,M,I,C,R,D)}function x(F,M,I,C){_();let R=C.attributes,D=I.getAttributes(),U=M.defaultAttributeValues;for(let z in D){let O=D[z];if(O.location>=0){let V=R[z];if(V===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(V=F.instanceColor)),V!==void 0){let W=V.normalized,lt=V.itemSize,at=t.get(V);if(at===void 0)continue;let Ct=at.buffer,Vt=at.type,Kt=at.bytesPerElement,J=Vt===s.INT||Vt===s.UNSIGNED_INT||V.gpuType===Fo;if(V.isInterleavedBufferAttribute){let tt=V.data,_t=tt.stride,it=V.offset;if(tt.isInstancedInterleavedBuffer){for(let et=0;et<O.locationSize;et++)p(O.location+et,tt.meshPerAttribute);F.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let et=0;et<O.locationSize;et++)m(O.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let et=0;et<O.locationSize;et++)w(O.location+et,lt/O.locationSize,Vt,W,_t*Kt,(it+lt/O.locationSize*et)*Kt,J)}else{if(V.isInstancedBufferAttribute){for(let tt=0;tt<O.locationSize;tt++)p(O.location+tt,V.meshPerAttribute);F.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let tt=0;tt<O.locationSize;tt++)m(O.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let tt=0;tt<O.locationSize;tt++)w(O.location+tt,lt/O.locationSize,Vt,W,lt*Kt,lt/O.locationSize*tt*Kt,J)}}else if(U!==void 0){let W=U[z];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(O.location,W);break;case 3:s.vertexAttrib3fv(O.location,W);break;case 4:s.vertexAttrib4fv(O.location,W);break;default:s.vertexAttrib1fv(O.location,W)}}}}S()}function b(){A();for(let F in n){let M=n[F];for(let I in M){let C=M[I];for(let R in C){let D=C[R];for(let U in D)h(D[U].object),delete D[U];delete C[R]}}delete n[F]}}function T(F){if(n[F.id]===void 0)return;let M=n[F.id];for(let I in M){let C=M[I];for(let R in C){let D=C[R];for(let U in D)h(D[U].object),delete D[U];delete C[R]}}delete n[F.id]}function L(F){for(let M in n){let I=n[M];for(let C in I){let R=I[C];if(R[F.id]===void 0)continue;let D=R[F.id];for(let U in D)h(D[U].object),delete D[U];delete R[F.id]}}}function y(F){for(let M in n){let I=n[M],C=F.isInstancedMesh===!0?F.id:0,R=I[C];if(R!==void 0){for(let D in R){let U=R[D];for(let z in U)h(U[z].object),delete U[z];delete R[D]}delete I[C],Object.keys(I).length===0&&delete n[M]}}}function A(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Pg(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==En&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let y=L===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==un&&L!==bn&&!y&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:x,maxSamples:b,samples:T}}function Dg(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Pn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,w=S*4,x=p.clippingState||null;l.value=x,x=h(g,u,w,d);for(let b=0;b!==w;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=d;w!==_;++w,x+=4)a.copy(f[w]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Zs=4,Ng=6,Ug=20,Fg=256,Qr=new ks,Ef=new Ut,lh=null,ch=0,hh=0,uh=!1,Og=new B,$i=new B,Ji=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=Og}=r;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lh,ch,hh),this._renderer.xr.enabled=uh,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Fn,format:En,colorSpace:dr,depthBuffer:!1},i=wf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Bg(r)),this._blurMaterial=Hg(r,t,e),this._ggxMaterial=zg(r,t,e)}return i}_compileMaterial(t){let e=new ot(new Ae,t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,i,r){let l=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Ef),f.toneMapping=Nn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ot(new De,new Ue({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Ef),p=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let b=this._cubeSize;Ys(i,x*b,w>2?b:0,b,b),f.setRenderTarget(i),p&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===wi||t.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Zs?n-g+Zs:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Ys(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(o,Qr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ys(t,m,p,3*_,2*_),i.setRenderTarget(t),i.render(o,Qr)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-Zs?i-this._lodMax+Zs:0),u=4*(this._cubeSize-h);Ys(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Qr)}};function Bg(s){let t=[],e=[],n=s,i=s-Zs+1+Ng;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let p=0;p<f;p++){let S=p%3*2/3-1,w=p>2?0:-1,x=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(x,d*u*p);for(let b=0;b<u;b++){let T=h[b*2]*2-1,L=h[b*2+1]*2-1;p===0?$i.set(1,L,T):p===1?$i.set(-T,1,-L):p===2?$i.set(-T,L,1):p===3?$i.set(-1,L,-T):p===4?$i.set(-T,-1,L):$i.set(T,L,-1),$i.toArray(_,(p*u+b)*d)}}let m=new Ae;m.setAttribute("position",new Ee(g,d)),m.setAttribute("outputDirection",new Ee(_,d)),e.push(new ot(m,null)),n>Zs&&n--}return{lodMeshes:e,sizeLods:t}}function wf(s,t,e){let n=new ln(s,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function zg(s,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Hg(s,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:Ug,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Tf(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Af(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bl=class extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Tr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new De(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Yn});r.uniforms.tEquirect.value=e;let a=new ot(i,r),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Ze),new Ro(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function kg(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Do||d===No)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new bl(g.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===Do||d===No,_=d===wi||d===Yi;if(g||_){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ji(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new Ji(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Do?u.mapping=wi:d===No&&(u.mapping=Yi),u}function l(u){let d=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Gg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Hi("WebGLRenderer: "+n+" extension not supported."),i}}}function Vg(s,t,e,n){let i={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],s.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(d!==null){let S=d.array;_=d.version;for(let w=0,x=S.length;w<x;w+=3){let b=S[w+0],T=S[w+1],L=S[w+2];u.push(b,T,T,L,L,b)}}else{let S=g.array;_=g.version;for(let w=0,x=S.length/3-1;w<x;w+=3){let b=w+0,T=w+1,L=w+2;u.push(b,T,T,L,L,b)}}let m=new(g.count>=65535?vr:yr)(u,1);m.version=_;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Wg(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let _=0;for(let m=0;m<d;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qg(s,t,e){let n=new WeakMap,i=new Pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let A=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let x=o.attributes.position.count*w,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*b*4*f),L=new xr(T,x,b,f);L.type=bn,L.needsUpdate=!0;let y=w*4;for(let P=0;P<f;P++){let F=m[P],M=p[P],I=S[P],C=x*b*4*P;for(let R=0;R<F.count;R++){let D=R*y;d===!0&&(i.fromBufferAttribute(F,R),T[C+D+0]=i.x,T[C+D+1]=i.y,T[C+D+2]=i.z,T[C+D+3]=0),g===!0&&(i.fromBufferAttribute(M,R),T[C+D+4]=i.x,T[C+D+5]=i.y,T[C+D+6]=i.z,T[C+D+7]=0),_===!0&&(i.fromBufferAttribute(I,R),T[C+D+8]=i.x,T[C+D+9]=i.y,T[C+D+10]=i.z,T[C+D+11]=I.itemSize===4?i.w:1)}}u={count:f,texture:L,size:new mt(x,b)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Yg(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Zg={[Oc]:"LINEAR_TONE_MAPPING",[Bc]:"REINHARD_TONE_MAPPING",[zc]:"CINEON_TONE_MAPPING",[Vs]:"ACES_FILMIC_TONE_MAPPING",[kc]:"AGX_TONE_MAPPING",[Gc]:"NEUTRAL_TONE_MAPPING",[Hc]:"CUSTOM_TONE_MAPPING"};function $g(s,t,e,n,i,r){let a=new ln(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ae;c.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new de([0,2,0,0,2,0],2));let h=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ot(c,h),u=new ks(-1,1,1,-1,0,1),d=null,g=null,_=!1,m,p=null,S=[],w=!1;this.setSize=function(x,b){a.setSize(x,b),o!==null&&o.setSize(x,b),l!==null&&l.setSize(x,b);for(let T=0;T<S.length;T++){let L=S[T];L.setSize&&L.setSize(x,b)}},this.setEffects=function(x){S=x,w=S.length>0&&S[0].isRenderPass===!0;let b=a.width,T=a.height;S.length>0&&o===null&&(o=new ln(b,T,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new ln(b,T,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<S.length;L++){let y=S[L];y.setSize&&y.setSize(b,T)}},this.begin=function(x,b){if(_||x.toneMapping===Nn&&S.length===0)return!1;if(p=b,b!==null){let T=b.width,L=b.height;(a.width!==T||a.height!==L)&&this.setSize(T,L)}return w===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Nn,!0},this.hasRenderPass=function(){return w},this.end=function(x,b){x.toneMapping=m,_=!0;let T=a,L=o;for(let y=0;y<S.length;y++){let A=S[y];A.enabled!==!1&&(A.render(x,L,T,b),A.needsSwap!==!1&&(T=L,L=L===o?l:o))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,h.defines={},oe.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");let y=Zg[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(p),x.render(f,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Yf=new rn,ph=new yi(1,1),Zf=new xr,$f=new ro,Jf=new Tr,Rf=[],Cf=[],If=new Float32Array(16),Pf=new Float32Array(9),Lf=new Float32Array(4);function Js(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Rf[i];if(r===void 0&&(r=new Float32Array(i),Rf[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function We(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function wl(s,t){let e=Cf[t];e===void 0&&(e=new Int32Array(t),Cf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Jg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2fv(this.addr,t),Xe(e,t)}}function jg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;s.uniform3fv(this.addr,t),Xe(e,t)}}function Qg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4fv(this.addr,t),Xe(e,t)}}function tx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Lf.set(n),s.uniformMatrix2fv(this.addr,!1,Lf),Xe(e,n)}}function ex(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Pf.set(n),s.uniformMatrix3fv(this.addr,!1,Pf),Xe(e,n)}}function nx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;If.set(n),s.uniformMatrix4fv(this.addr,!1,If),Xe(e,n)}}function ix(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2iv(this.addr,t),Xe(e,t)}}function rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3iv(this.addr,t),Xe(e,t)}}function ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4iv(this.addr,t),Xe(e,t)}}function ox(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function lx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2uiv(this.addr,t),Xe(e,t)}}function cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3uiv(this.addr,t),Xe(e,t)}}function hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4uiv(this.addr,t),Xe(e,t)}}function ux(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ph.compareFunction=e.isReversedDepthBuffer()?vl:yl,r=ph):r=Yf,e.setTexture2D(t||r,i)}function fx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||$f,i)}function dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Jf,i)}function px(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Zf,i)}function mx(s){switch(s){case 5126:return Jg;case 35664:return Kg;case 35665:return jg;case 35666:return Qg;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ax;case 5125:return ox;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(s,t){s.uniform1fv(this.addr,t)}function xx(s,t){let e=Js(t,this.size,2);s.uniform2fv(this.addr,e)}function _x(s,t){let e=Js(t,this.size,3);s.uniform3fv(this.addr,e)}function yx(s,t){let e=Js(t,this.size,4);s.uniform4fv(this.addr,e)}function vx(s,t){let e=Js(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Mx(s,t){let e=Js(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Sx(s,t){let e=Js(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function bx(s,t){s.uniform1iv(this.addr,t)}function Ex(s,t){s.uniform2iv(this.addr,t)}function wx(s,t){s.uniform3iv(this.addr,t)}function Tx(s,t){s.uniform4iv(this.addr,t)}function Ax(s,t){s.uniform1uiv(this.addr,t)}function Rx(s,t){s.uniform2uiv(this.addr,t)}function Cx(s,t){s.uniform3uiv(this.addr,t)}function Ix(s,t){s.uniform4uiv(this.addr,t)}function Px(s,t,e){let n=this.cache,i=t.length,r=wl(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ph:a=Yf;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Lx(s,t,e){let n=this.cache,i=t.length,r=wl(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||$f,r[a])}function Dx(s,t,e){let n=this.cache,i=t.length,r=wl(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Jf,r[a])}function Nx(s,t,e){let n=this.cache,i=t.length,r=wl(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Zf,r[a])}function Ux(s){switch(s){case 5126:return gx;case 35664:return xx;case 35665:return _x;case 35666:return yx;case 35674:return vx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return bx;case 35667:case 35671:return Ex;case 35668:case 35672:return wx;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}var mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mx(e.type)}},gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ux(e.type)}},xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;function Df(s,t){s.seq.push(t),s.map[t.id]=t}function Fx(s,t,e){let n=s.name,i=n.length;for(fh.lastIndex=0;;){let r=fh.exec(n),a=fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Df(e,c===void 0?new mh(o,s,t):new gh(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new xh(o),Df(e,f)),e=f}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Fx(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Nf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Ox=37297,Bx=0;function zx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Uf=new $t;function Hx(s){oe._getMatrix(Uf,oe.workingColorSpace,s);let t=`mat3( ${Uf.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case pr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ff(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+zx(s.getShaderSource(t),o)}else return r}function kx(s,t){let e=Hx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Gx={[Oc]:"Linear",[Bc]:"Reinhard",[zc]:"Cineon",[Vs]:"ACESFilmic",[kc]:"AgX",[Gc]:"Neutral",[Hc]:"Custom"};function Vx(s,t){let e=Gx[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sl=new B;function Wx(){oe.getLuminanceCoefficients(Sl);let s=Sl.x.toFixed(4),t=Sl.y.toFixed(4),e=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function qx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ea(s){return s!==""}function Of(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(s){return s.replace(Zx,Jx)}var $x=new Map;function Jx(s,t){let e=ie[t];if(e===void 0){let n=$x.get(t);if(n!==void 0)e=ie[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _h(e)}var Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(s){return s.replace(Kx,jx)}function jx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Qx={[Gr]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function t_(s){return Qx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e_={[wi]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE_UV"};function n_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":e_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var i_={[Yi]:"ENVMAP_MODE_REFRACTION"};function s_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":i_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var r_={[Lo]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function a_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":r_[s.combine]||"ENVMAP_BLENDING_NONE"}function o_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function l_(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=t_(e),c=n_(e),h=s_(e),f=a_(e),u=o_(e),d=Xx(e),g=qx(r),_=i.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[Hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[Hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,kx("linearToOutputTexel",e.outputColorSpace),Wx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ea).join(`
`)),a=_h(a),a=Of(a,e),a=Bf(a,e),o=_h(o),o=Of(o,e),o=Bf(o,e),a=zf(a),o=zf(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=S+m+a,x=S+p+o,b=Nf(i,i.VERTEX_SHADER,w),T=Nf(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function L(F){if(s.debug.checkShaderErrors){let M=i.getProgramInfoLog(_)||"",I=i.getShaderInfoLog(b)||"",C=i.getShaderInfoLog(T)||"",R=M.trim(),D=I.trim(),U=C.trim(),z=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,T);else{let V=Ff(i,b,"vertex"),W=Ff(i,T,"fragment");qt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+R+`
`+V+`
`+W)}else R!==""?Yt("WebGLProgram: Program Info Log:",R):(D===""||U==="")&&(O=!1);O&&(F.diagnostics={runnable:z,programLog:R,vertexShader:{log:D,prefix:m},fragmentShader:{log:U,prefix:p}})}i.deleteShader(b),i.deleteShader(T),y=new $s(i,_),A=Yx(i,_)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(_,Ox)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}var c_=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vh(t),e.set(t,n)),n}},vh=class{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}};function h_(s){return s===Ri||s===Jr||s===Kr}function u_(s,t,e,n,i,r){let a=new _r,o=new yh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,A,P,F,M,I){let C=F.fog,R=M.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=t.get(y.envMap||D,U),O=z&&z.mapping===Wr?z.image.height:null,V=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Yt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let W=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,lt=W!==void 0?W.length:0,at=0;R.morphAttributes.position!==void 0&&(at=1),R.morphAttributes.normal!==void 0&&(at=2),R.morphAttributes.color!==void 0&&(at=3);let Ct,Vt,Kt,J;if(V){let we=$n[V];Ct=we.vertexShader,Vt=we.fragmentShader}else{Ct=y.vertexShader,Vt=y.fragmentShader;let we=o.getVertexShaderStage(y),ge=o.getFragmentShaderStage(y);o.update(y,we,ge),Kt=we.id,J=ge.id}let tt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),it=M.isInstancedMesh===!0,et=M.isBatchedMesh===!0,Lt=!!y.map,jt=!!y.matcap,Q=!!z,ft=!!y.aoMap,dt=!!y.lightMap,pt=!!y.bumpMap&&y.wireframe===!1,yt=!!y.normalMap,Wt=!!y.displacementMap,kt=!!y.emissiveMap,Zt=!!y.metalnessMap,Jt=!!y.roughnessMap,H=y.anisotropy>0,me=y.clearcoat>0,re=y.dispersion>0,N=y.retroreflectivity>0,v=y.iridescence>0,X=y.sheen>0,Z=y.transmission>0,K=H&&!!y.anisotropyMap,gt=me&&!!y.clearcoatMap,xt=me&&!!y.clearcoatNormalMap,j=me&&!!y.clearcoatRoughnessMap,st=v&&!!y.iridescenceMap,vt=v&&!!y.iridescenceThicknessMap,Bt=X&&!!y.sheenColorMap,Et=X&&!!y.sheenRoughnessMap,Mt=!!y.specularMap,zt=!!y.specularColorMap,Xt=!!y.specularIntensityMap,Qt=Z&&!!y.transmissionMap,G=Z&&!!y.thicknessMap,St=!!y.gradientMap,nt=!!y.alphaMap,bt=y.alphaTest>0,Rt=!!y.alphaHash,ht=!!y.extensions,Ht=Nn;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ht=s.toneMapping);let Ft={shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:Ct,fragmentShader:Vt,defines:y.defines,customVertexShaderID:Kt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:et,batchingColor:et&&M._colorsTexture!==null,instancing:it,instancingColor:it&&M.instanceColor!==null,instancingMorph:it&&M.morphTexture!==null,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Lt,matcap:jt,envMap:Q,envMapMode:Q&&z.mapping,envMapCubeUVHeight:O,aoMap:ft,lightMap:dt,bumpMap:pt,normalMap:yt,displacementMap:Wt,emissiveMap:kt,normalMapObjectSpace:yt&&y.normalMapType===nf,normalMapTangentSpace:yt&&y.normalMapType===jr,packedNormalMap:yt&&y.normalMapType===jr&&h_(y.normalMap.format),metalnessMap:Zt,roughnessMap:Jt,anisotropy:H,anisotropyMap:K,clearcoat:me,clearcoatMap:gt,clearcoatNormalMap:xt,clearcoatRoughnessMap:j,dispersion:re,retroreflection:N,iridescence:v,iridescenceMap:st,iridescenceThicknessMap:vt,sheen:X,sheenColorMap:Bt,sheenRoughnessMap:Et,specularMap:Mt,specularColorMap:zt,specularIntensityMap:Xt,transmission:Z,transmissionMap:Qt,thicknessMap:G,gradientMap:St,opaque:y.transparent===!1&&y.blending===Ei&&y.alphaToCoverage===!1,alphaMap:nt,alphaTest:bt,alphaHash:Rt,combine:y.combine,mapUv:Lt&&g(y.map.channel),aoMapUv:ft&&g(y.aoMap.channel),lightMapUv:dt&&g(y.lightMap.channel),bumpMapUv:pt&&g(y.bumpMap.channel),normalMapUv:yt&&g(y.normalMap.channel),displacementMapUv:Wt&&g(y.displacementMap.channel),emissiveMapUv:kt&&g(y.emissiveMap.channel),metalnessMapUv:Zt&&g(y.metalnessMap.channel),roughnessMapUv:Jt&&g(y.roughnessMap.channel),anisotropyMapUv:K&&g(y.anisotropyMap.channel),clearcoatMapUv:gt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(y.sheenRoughnessMap.channel),specularMapUv:Mt&&g(y.specularMap.channel),specularColorMapUv:zt&&g(y.specularColorMap.channel),specularIntensityMapUv:Xt&&g(y.specularIntensityMap.channel),transmissionMapUv:Qt&&g(y.transmissionMap.channel),thicknessMapUv:G&&g(y.thicknessMap.channel),alphaMapUv:nt&&g(y.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(yt||H),vertexNormals:!!R.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!R.attributes.uv&&(Lt||nt),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||R.attributes.normal===void 0&&yt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:M.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:at,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Lt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:kt&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hn,flipSided:y.side===Ve,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ht&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&y.extensions.multiDraw===!0||et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)A.push(P),A.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(A,y),S(A,y),A.push(s.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function S(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function w(y){let A=d[y.type],P;if(A){let F=$n[A];P=Mf.clone(F.uniforms)}else P=y.uniforms;return P}function x(y,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new l_(s,A,y,i),c.push(P),h.set(A,P)),P}function b(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function L(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:L}}function f_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function d_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function kf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Gf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,_,m,p){let S=s[t];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},s[t]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=a(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,d,g,_,m,p,S){S.reversedDepth===!0&&(m=-m);let w=o(u,d,g,_,m,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):e.push(w)}function c(u,d,g,_,m,p){let S=o(u,d,g,_,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):e.unshift(S)}function h(u,d){e.length>1&&e.sort(u||d_),n.length>1&&n.sort(d||kf),i.length>1&&i.sort(d||kf)}function f(){for(let u=t,d=s.length;u<d;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function p_(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Gf,s.set(n,[a])):i>=r.length?(a=new Gf,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function m_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Ut};break;case"SpotLight":e={position:new B,direction:new B,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function g_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var x_=0;function __(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function y_(s){let t=new m_,e=g_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new pe,a=new pe;function o(c){let h=0,f=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,w=0,x=0,b=0,T=0,L=0,y=0,A=0,P=0;c.sort(__);for(let M=0,I=c.length;M<I;M++){let C=c[M],R=C.color,D=C.intensity,U=C.distance,z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ri?z=C.shadow.map.texture:z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=R.r*D,f+=R.g*D,u+=R.b*D;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],D);P++}else if(C.isSunLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,W=e.get(C);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=W,n.sunShadowMap[g]=z;let lt=V.getViewportCount();for(let at=0;at<lt;at++)n.sunShadowMatrix[_+at]=V.getMatrix(at),n.sunShadowCascade[_+at]=V._cascadeData[at];_+=lt,g++}n.sun[d]=O,d++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,W=e.get(C);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=O,m++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(R).multiplyScalar(D),O.distance=U,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[S]=O;let V=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,V.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[S]=V.matrix,C.castShadow){let W=e.get(C);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,n.spotShadow[S]=W,n.spotShadowMap[S]=z,L++}S++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(R).multiplyScalar(D),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[w]=O,w++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let V=C.shadow,W=e.get(C);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=O,p++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(D),O.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[x]=O,x++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let F=n.hash;(F.sunLength!==d||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==S||F.rectAreaLength!==w||F.hemiLength!==x||F.numSunShadows!==g||F.numDirectionalShadows!==b||F.numPointShadows!==T||F.numSpotShadows!==L||F.numSpotMaps!==y||F.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,F.sunLength=d,F.directionalLength=m,F.pointLength=p,F.spotLength=S,F.rectAreaLength=w,F.hemiLength=x,F.numSunShadows=g,F.numDirectionalShadows=b,F.numPointShadows=T,F.numSpotShadows=L,F.numSpotMaps=y,F.numLightProbes=P,n.version=x_++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let x=c[S];if(x.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),f++}else if(x.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),u++}else if(x.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Vf(s){let t=new y_(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function v_(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Vf(s),t.set(i,[o])):r>=a.length?(o=new Vf(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],E_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Wf=new pe,ta=new B,dh=new B;function w_(s,t,e){let n=new Ds,i=new mt,r=new mt,a=new Pe,o=new go,l=new xo,c={},h=e.maxTextureSize,f={[bi]:Ve,[Ve]:bi,[hn]:hn},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:M_,fragmentShader:S_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ae;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ot(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let p=this.type;this.render=function(T,L,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Po&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);let A=s.getRenderTarget(),P=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),M=s.state;M.setBlending(Yn),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let I=p!==this.type;I&&L.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(R=>R.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,R=T.length;C<R;C++){let D=T[C],U=D.shadow;if(U===void 0){Yt("WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let z=U.getFrameExtents();i.multiply(z),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/z.x),i.x=r.x*z.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/z.y),i.y=r.y*z.y,U.mapSize.y=r.y));let O=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=O,U.map===null||I===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Gs){if(D.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ln(i.x,i.y,{format:Ri,type:Fn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),U.map.texture.name=D.name+".shadowMap",U.map.depthTexture=new yi(i.x,i.y,bn),U.map.depthTexture.name=D.name+".shadowMapDepth",U.map.depthTexture.format=Wn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ye,U.map.depthTexture.magFilter=Ye}else D.isPointLight?(U.map=new bl(i.x),U.map.depthTexture=new ao(i.x,Un)):(U.map=new ln(i.x,i.y),U.map.depthTexture=new yi(i.x,i.y,Un)),U.map.depthTexture.name=D.name+".shadowMap",U.map.depthTexture.format=Wn,this.type===Gr?(U.map.depthTexture.compareFunction=O?vl:yl,U.map.depthTexture.minFilter=Ze,U.map.depthTexture.magFilter=Ze):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ye,U.map.depthTexture.magFilter=Ye);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let V=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();D.isPointLight!==!0&&U.updateMatrices(D,y);for(let W=0;W<V;W++){let lt=U.getCamera(W);if(D.isPointLight){let at=U.camera,Ct=U.matrix,Vt=D.distance||at.far;Vt!==at.far&&(at.far=Vt,at.updateProjectionMatrix()),ta.setFromMatrixPosition(D.matrixWorld),at.position.copy(ta),dh.copy(at.position),dh.add(b_[W]),at.up.copy(E_[W]),at.lookAt(dh),at.updateMatrixWorld(),Ct.makeTranslation(-ta.x,-ta.y,-ta.z),Wf.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Wf,at.coordinateSystem,at.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,W),s.clear();else{W===0&&(s.setRenderTarget(U.map),s.clear());let at=U.getViewport(W);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),M.viewport(a)}n=U.getFrustum(W),x(L,y,lt,D,this.type)}U.isPointLightShadow!==!0&&this.type===Gs&&S(U,y),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(A,P,F)};function S(T,L){let y=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new ln(i.x,i.y,{format:Ri,type:Fn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(L,null,y,u,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(L,null,y,d,_,null)}function w(T,L,y,A){let P=null,F=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)P=F;else if(P=y.isPointLight===!0?l:o,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let M=P.uuid,I=L.uuid,C=c[M];C===void 0&&(C={},c[M]=C);let R=C[I];R===void 0&&(R=P.clone(),C[I]=R,L.addEventListener("dispose",b)),P=R}if(P.visible=L.visible,P.wireframe=L.wireframe,A===Gs?P.side=L.shadowSide!==null?L.shadowSide:L.side:P.side=L.shadowSide!==null?L.shadowSide:f[L.side],P.alphaMap=L.alphaMap,P.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,P.map=L.map,P.clipShadows=L.clipShadows,P.clippingPlanes=L.clippingPlanes,P.clipIntersection=L.clipIntersection,P.displacementMap=L.displacementMap,P.displacementScale=L.displacementScale,P.displacementBias=L.displacementBias,P.wireframeLinewidth=L.wireframeLinewidth,P.linewidth=L.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let M=s.properties.get(P);M.light=y}return P}function x(T,L,y,A,P){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Gs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let I=t.update(T),C=T.material;if(Array.isArray(C)){let R=I.groups;for(let D=0,U=R.length;D<U;D++){let z=R[D],O=C[z.materialIndex];if(O&&O.visible){let V=w(T,O,A,P);T.onBeforeShadow(s,T,L,y,I,V,z),s.renderBufferDirect(y,null,I,V,T,z),T.onAfterShadow(s,T,L,y,I,V,z)}}}else if(C.visible){let R=w(T,C,A,P);T.onBeforeShadow(s,T,L,y,I,R,null),s.renderBufferDirect(y,null,I,R,T,null),T.onAfterShadow(s,T,L,y,I,R,null)}}let M=T.children;for(let I=0,C=M.length;I<C;I++)x(M[I],L,y,A,P)}function b(T){T.target.removeEventListener("dispose",b);for(let y in c){let A=c[y],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function T_(s,t){function e(){let G=!1,St=new Pe,nt=null,bt=new Pe(0,0,0,0);return{setMask:function(Rt){nt!==Rt&&!G&&(s.colorMask(Rt,Rt,Rt,Rt),nt=Rt)},setLocked:function(Rt){G=Rt},setClear:function(Rt,ht,Ht,Ft,we){we===!0&&(Rt*=Ft,ht*=Ft,Ht*=Ft),St.set(Rt,ht,Ht,Ft),bt.equals(St)===!1&&(s.clearColor(Rt,ht,Ht,Ft),bt.copy(St))},reset:function(){G=!1,nt=null,bt.set(-1,0,0,0)}}}function n(){let G=!1,St=!1,nt=null,bt=null,Rt=null;return{setReversed:function(ht){if(St!==ht){let Ht=t.get("EXT_clip_control");ht?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),St=ht;let Ft=Rt;Rt=null,this.setClear(Ft)}},getReversed:function(){return St},setTest:function(ht){ht?tt(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(ht){nt!==ht&&!G&&(s.depthMask(ht),nt=ht)},setFunc:function(ht){if(St&&(ht=pf[ht]),bt!==ht){switch(ht){case Ya:s.depthFunc(s.NEVER);break;case Za:s.depthFunc(s.ALWAYS);break;case $a:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Ja:s.depthFunc(s.EQUAL);break;case Ka:s.depthFunc(s.GEQUAL);break;case ja:s.depthFunc(s.GREATER);break;case Qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}bt=ht}},setLocked:function(ht){G=ht},setClear:function(ht){Rt!==ht&&(Rt=ht,St&&(ht=1-ht),s.clearDepth(ht))},reset:function(){G=!1,nt=null,bt=null,Rt=null,St=!1}}}function i(){let G=!1,St=null,nt=null,bt=null,Rt=null,ht=null,Ht=null,Ft=null,we=null;return{setTest:function(ge){G||(ge?tt(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(ge){St!==ge&&!G&&(s.stencilMask(ge),St=ge)},setFunc:function(ge,An,zn){(nt!==ge||bt!==An||Rt!==zn)&&(s.stencilFunc(ge,An,zn),nt=ge,bt=An,Rt=zn)},setOp:function(ge,An,zn){(ht!==ge||Ht!==An||Ft!==zn)&&(s.stencilOp(ge,An,zn),ht=ge,Ht=An,Ft=zn)},setLocked:function(ge){G=ge},setClear:function(ge){we!==ge&&(s.clearStencil(ge),we=ge)},reset:function(){G=!1,St=null,nt=null,bt=null,Rt=null,ht=null,Ht=null,Ft=null,we=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],_=null,m=!1,p=null,S=null,w=null,x=null,b=null,T=null,L=null,y=new Ut(0,0,0),A=0,P=!1,F=null,M=null,I=null,C=null,R=null,D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,z=0,O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),U=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),U=z>=2);let V=null,W={},lt=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),Ct=new Pe().fromArray(lt),Vt=new Pe().fromArray(at);function Kt(G,St,nt,bt){let Rt=new Uint8Array(4),ht=s.createTexture();s.bindTexture(G,ht),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<nt;Ht++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(St,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(St+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return ht}let J={};J[s.TEXTURE_2D]=Kt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(s.DEPTH_TEST),a.setFunc(bs),pt(!1),yt(Lc),tt(s.CULL_FACE),ft(Yn);function tt(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function _t(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function it(G,St){return u[G]!==St?(s.bindFramebuffer(G,St),u[G]=St,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=St),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=St),!0):!1}function et(G,St){let nt=g,bt=!1;if(G){nt=d.get(St),nt===void 0&&(nt=[],d.set(St,nt));let Rt=G.textures;if(nt.length!==Rt.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Ht=Rt.length;ht<Ht;ht++)nt[ht]=s.COLOR_ATTACHMENT0+ht;nt.length=Rt.length,bt=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,bt=!0);bt&&s.drawBuffers(nt)}function Lt(G){return _!==G?(s.useProgram(G),_=G,!0):!1}let jt={[qi]:s.FUNC_ADD,[Uu]:s.FUNC_SUBTRACT,[Fu]:s.FUNC_REVERSE_SUBTRACT};jt[Ou]=s.MIN,jt[Bu]=s.MAX;let Q={[zu]:s.ZERO,[Hu]:s.ONE,[ku]:s.SRC_COLOR,[Uc]:s.SRC_ALPHA,[Yu]:s.SRC_ALPHA_SATURATE,[Xu]:s.DST_COLOR,[Vu]:s.DST_ALPHA,[Gu]:s.ONE_MINUS_SRC_COLOR,[Fc]:s.ONE_MINUS_SRC_ALPHA,[qu]:s.ONE_MINUS_DST_COLOR,[Wu]:s.ONE_MINUS_DST_ALPHA,[Zu]:s.CONSTANT_COLOR,[$u]:s.ONE_MINUS_CONSTANT_COLOR,[Ju]:s.CONSTANT_ALPHA,[Ku]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(G,St,nt,bt,Rt,ht,Ht,Ft,we,ge){if(G===Yn){m===!0&&(_t(s.BLEND),m=!1);return}if(m===!1&&(tt(s.BLEND),m=!0),G!==Nu){if(G!==p||ge!==P){if((S!==qi||b!==qi)&&(s.blendEquation(s.FUNC_ADD),S=qi,b=qi),ge)switch(G){case Ei:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vr:s.blendFunc(s.ONE,s.ONE);break;case Dc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qt("WebGLState: Invalid blending: ",G);break}else switch(G){case Ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dc:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",G);break}w=null,x=null,T=null,L=null,y.set(0,0,0),A=0,p=G,P=ge}return}Rt=Rt||St,ht=ht||nt,Ht=Ht||bt,(St!==S||Rt!==b)&&(s.blendEquationSeparate(jt[St],jt[Rt]),S=St,b=Rt),(nt!==w||bt!==x||ht!==T||Ht!==L)&&(s.blendFuncSeparate(Q[nt],Q[bt],Q[ht],Q[Ht]),w=nt,x=bt,T=ht,L=Ht),(Ft.equals(y)===!1||we!==A)&&(s.blendColor(Ft.r,Ft.g,Ft.b,we),y.copy(Ft),A=we),p=G,P=!1}function dt(G,St){G.side===hn?_t(s.CULL_FACE):tt(s.CULL_FACE);let nt=G.side===Ve;St&&(nt=!nt),pt(nt),G.blending===Ei&&G.transparent===!1?ft(Yn):ft(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);let bt=G.stencilWrite;o.setTest(bt),bt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),kt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(G){F!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),F=G)}function yt(G){G!==Lu?(tt(s.CULL_FACE),G!==M&&(G===Lc?s.cullFace(s.BACK):G===Du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),M=G}function Wt(G){G!==I&&(U&&s.lineWidth(G),I=G)}function kt(G,St,nt){G?(tt(s.POLYGON_OFFSET_FILL),(C!==St||R!==nt)&&(C=St,R=nt,a.getReversed()&&(St=-St),s.polygonOffset(St,nt))):_t(s.POLYGON_OFFSET_FILL)}function Zt(G){G?tt(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function Jt(G){G===void 0&&(G=s.TEXTURE0+D-1),V!==G&&(s.activeTexture(G),V=G)}function H(G,St,nt){nt===void 0&&(V===null?nt=s.TEXTURE0+D-1:nt=V);let bt=W[nt];bt===void 0&&(bt={type:void 0,texture:void 0},W[nt]=bt),(bt.type!==G||bt.texture!==St)&&(V!==nt&&(s.activeTexture(nt),V=nt),s.bindTexture(G,St||J[G]),bt.type=G,bt.texture=St)}function me(){let G=W[V];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function re(){try{s.compressedTexImage2D(...arguments)}catch(G){qt("WebGLState:",G)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(G){qt("WebGLState:",G)}}function v(){try{s.texSubImage2D(...arguments)}catch(G){qt("WebGLState:",G)}}function X(){try{s.texSubImage3D(...arguments)}catch(G){qt("WebGLState:",G)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(G){qt("WebGLState:",G)}}function K(){try{s.compressedTexSubImage3D(...arguments)}catch(G){qt("WebGLState:",G)}}function gt(){try{s.texStorage2D(...arguments)}catch(G){qt("WebGLState:",G)}}function xt(){try{s.texStorage3D(...arguments)}catch(G){qt("WebGLState:",G)}}function j(){try{s.texImage2D(...arguments)}catch(G){qt("WebGLState:",G)}}function st(){try{s.texImage3D(...arguments)}catch(G){qt("WebGLState:",G)}}function vt(G){return f[G]!==void 0?f[G]:s.getParameter(G)}function Bt(G,St){f[G]!==St&&(s.pixelStorei(G,St),f[G]=St)}function Et(G){Ct.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ct.copy(G))}function Mt(G){Vt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Vt.copy(G))}function zt(G,St){let nt=c.get(St);nt===void 0&&(nt=new WeakMap,c.set(St,nt));let bt=nt.get(G);bt===void 0&&(bt=s.getUniformBlockIndex(St,G.name),nt.set(G,bt))}function Xt(G,St){let bt=c.get(St).get(G);l.get(St)!==bt&&(s.uniformBlockBinding(St,bt,G.__bindingPointIndex),l.set(St,bt))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},V=null,W={},u={},d=new WeakMap,g=[],_=null,m=!1,p=null,S=null,w=null,x=null,b=null,T=null,L=null,y=new Ut(0,0,0),A=0,P=!1,F=null,M=null,I=null,C=null,R=null,Ct.set(0,0,s.canvas.width,s.canvas.height),Vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:_t,bindFramebuffer:it,drawBuffers:et,useProgram:Lt,setBlending:ft,setMaterial:dt,setFlipSided:pt,setCullFace:yt,setLineWidth:Wt,setPolygonOffset:kt,setScissorTest:Zt,activeTexture:Jt,bindTexture:H,unbindTexture:me,compressedTexImage2D:re,compressedTexImage3D:N,texImage2D:j,texImage3D:st,pixelStorei:Bt,getParameter:vt,updateUBOMapping:zt,uniformBlockBinding:Xt,texStorage2D:gt,texStorage3D:xt,texSubImage2D:v,texSubImage3D:X,compressedTexSubImage2D:Z,compressedTexSubImage3D:K,scissor:Et,viewport:Mt,reset:Qt}}function A_(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,v){return g?new OffscreenCanvas(N,v):mr("canvas")}function m(N,v,X){let Z=1,K=re(N);if((K.width>X||K.height>X)&&(Z=X/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap||typeof VideoFrame!="undefined"&&N instanceof VideoFrame){let gt=Math.floor(Z*K.width),xt=Math.floor(Z*K.height);u===void 0&&(u=_(gt,xt));let j=v?_(gt,xt):u;return j.width=gt,j.height=xt,j.getContext("2d").drawImage(N,0,0,gt,xt),Yt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+gt+"x"+xt+")."),j}else return"data"in N&&Yt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),N;return N}function p(N){return N.generateMipmaps}function S(N){s.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(N,v,X,Z,K,gt=!1){if(N!==null){if(s[N]!==void 0)return s[N];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let xt;Z&&(xt=t.get("EXT_texture_norm16"),xt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===s.RED&&(X===s.FLOAT&&(j=s.R32F),X===s.HALF_FLOAT&&(j=s.R16F),X===s.UNSIGNED_BYTE&&(j=s.R8),X===s.UNSIGNED_SHORT&&xt&&(j=xt.R16_EXT),X===s.SHORT&&xt&&(j=xt.R16_SNORM_EXT)),v===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(j=s.R8UI),X===s.UNSIGNED_SHORT&&(j=s.R16UI),X===s.UNSIGNED_INT&&(j=s.R32UI),X===s.BYTE&&(j=s.R8I),X===s.SHORT&&(j=s.R16I),X===s.INT&&(j=s.R32I)),v===s.RG&&(X===s.FLOAT&&(j=s.RG32F),X===s.HALF_FLOAT&&(j=s.RG16F),X===s.UNSIGNED_BYTE&&(j=s.RG8),X===s.UNSIGNED_SHORT&&xt&&(j=xt.RG16_EXT),X===s.SHORT&&xt&&(j=xt.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(j=s.RG8UI),X===s.UNSIGNED_SHORT&&(j=s.RG16UI),X===s.UNSIGNED_INT&&(j=s.RG32UI),X===s.BYTE&&(j=s.RG8I),X===s.SHORT&&(j=s.RG16I),X===s.INT&&(j=s.RG32I)),v===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(j=s.RGB8UI),X===s.UNSIGNED_SHORT&&(j=s.RGB16UI),X===s.UNSIGNED_INT&&(j=s.RGB32UI),X===s.BYTE&&(j=s.RGB8I),X===s.SHORT&&(j=s.RGB16I),X===s.INT&&(j=s.RGB32I)),v===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),X===s.UNSIGNED_INT&&(j=s.RGBA32UI),X===s.BYTE&&(j=s.RGBA8I),X===s.SHORT&&(j=s.RGBA16I),X===s.INT&&(j=s.RGBA32I)),v===s.RGB&&(X===s.UNSIGNED_SHORT&&xt&&(j=xt.RGB16_EXT),X===s.SHORT&&xt&&(j=xt.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),v===s.RGBA){let st=gt?pr:oe.getTransfer(K);X===s.FLOAT&&(j=s.RGBA32F),X===s.HALF_FLOAT&&(j=s.RGBA16F),X===s.UNSIGNED_BYTE&&(j=st===_e?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&xt&&(j=xt.RGBA16_EXT),X===s.SHORT&&xt&&(j=xt.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function b(N,v){let X;return N?v===null||v===Un||v===Xs?X=s.DEPTH24_STENCIL8:v===bn?X=s.DEPTH32F_STENCIL8:v===Ws&&(X=s.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Un||v===Xs?X=s.DEPTH_COMPONENT24:v===bn?X=s.DEPTH_COMPONENT32F:v===Ws&&(X=s.DEPTH_COMPONENT16),X}function T(N,v){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ye&&N.minFilter!==Ze?Math.log2(Math.max(v.width,v.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?v.mipmaps.length:1}function L(N){let v=N.target;v.removeEventListener("dispose",L),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function y(N){let v=N.target;v.removeEventListener("dispose",y),F(v)}function A(N){let v=n.get(N);if(v.__webglInit===void 0)return;let X=N.source,Z=d.get(X);if(Z){let K=Z[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(N),Object.keys(Z).length===0&&d.delete(X)}n.remove(N)}function P(N){let v=n.get(N);s.deleteTexture(v.__webglTexture);let X=N.source,Z=d.get(X);delete Z[v.__cacheKey],a.memory.textures--}function F(N){let v=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let K=0;K<v.__webglFramebuffer[Z].length;K++)s.deleteFramebuffer(v.__webglFramebuffer[Z][K]);else s.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[Z]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let X=N.textures;for(let Z=0,K=X.length;Z<K;Z++){let gt=n.get(X[Z]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(X[Z])}n.remove(N)}let M=0;function I(){M=0}function C(){return M}function R(N){M=N}function D(){let N=M;return N>=i.maxTextures&&Yt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),M+=1,N}function U(N){let v=[];return v.push(N.wrapS),v.push(N.wrapT),v.push(N.wrapR||0),v.push(N.magFilter),v.push(N.minFilter),v.push(N.anisotropy),v.push(N.internalFormat),v.push(N.format),v.push(N.type),v.push(N.generateMipmaps),v.push(N.premultiplyAlpha),v.push(N.flipY),v.push(N.unpackAlignment),v.push(N.colorSpace),v.join()}function z(N,v){let X=n.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&X.__version!==N.version){let Z=N.image;if(Z===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(X,N,v);return}}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+v)}function O(N,v){let X=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){_t(X,N,v);return}else N.isExternalTexture&&(X.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+v)}function V(N,v){let X=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&X.__version!==N.version){_t(X,N,v);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+v)}function W(N,v){let X=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&X.__version!==N.version){it(X,N,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+v)}let lt={[Es]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[to]:s.MIRRORED_REPEAT},at={[Ye]:s.NEAREST,[tf]:s.NEAREST_MIPMAP_NEAREST,[Xr]:s.NEAREST_MIPMAP_LINEAR,[Ze]:s.LINEAR,[Uo]:s.LINEAR_MIPMAP_NEAREST,[Ti]:s.LINEAR_MIPMAP_LINEAR},Ct={[rf]:s.NEVER,[hf]:s.ALWAYS,[af]:s.LESS,[yl]:s.LEQUAL,[of]:s.EQUAL,[vl]:s.GEQUAL,[lf]:s.GREATER,[cf]:s.NOTEQUAL};function Vt(N,v){if(v.type===bn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ze||v.magFilter===Uo||v.magFilter===Xr||v.magFilter===Ti||v.minFilter===Ze||v.minFilter===Uo||v.minFilter===Xr||v.minFilter===Ti)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,lt[v.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,lt[v.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,lt[v.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,at[v.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ye||v.minFilter!==Xr&&v.minFilter!==Ti||v.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Kt(N,v){let X=!1;N.__webglInit===void 0&&(N.__webglInit=!0,v.addEventListener("dispose",L));let Z=v.source,K=d.get(Z);K===void 0&&(K={},d.set(Z,K));let gt=U(v);if(gt!==N.__cacheKey){K[gt]===void 0&&(K[gt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),K[gt].usedTimes++;let xt=K[N.__cacheKey];xt!==void 0&&(K[N.__cacheKey].usedTimes--,xt.usedTimes===0&&P(v)),N.__cacheKey=gt,N.__webglTexture=K[gt].texture}return X}function J(N,v,X){return Math.floor(Math.floor(N/X)/v)}function tt(N,v,X,Z){let gt=N.updateRanges;if(gt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,X,Z,v.data);else{gt.sort((Bt,Et)=>Bt.start-Et.start);let xt=0;for(let Bt=1;Bt<gt.length;Bt++){let Et=gt[xt],Mt=gt[Bt],zt=Et.start+Et.count,Xt=J(Mt.start,v.width,4),Qt=J(Et.start,v.width,4);Mt.start<=zt+1&&Xt===Qt&&J(Mt.start+Mt.count-1,v.width,4)===Xt?Et.count=Math.max(Et.count,Mt.start+Mt.count-Et.start):(++xt,gt[xt]=Mt)}gt.length=xt+1;let j=e.getParameter(s.UNPACK_ROW_LENGTH),st=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Bt=0,Et=gt.length;Bt<Et;Bt++){let Mt=gt[Bt],zt=Math.floor(Mt.start/4),Xt=Math.ceil(Mt.count/4),Qt=zt%v.width,G=Math.floor(zt/v.width),St=Xt,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(s.UNPACK_SKIP_ROWS,G),e.texSubImage2D(s.TEXTURE_2D,0,Qt,G,St,nt,X,Z,v.data)}N.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,j),e.pixelStorei(s.UNPACK_SKIP_PIXELS,st),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function _t(N,v,X){let Z=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=s.TEXTURE_3D);let K=Kt(N,v),gt=v.source;e.bindTexture(Z,N.__webglTexture,s.TEXTURE0+X);let xt=n.get(gt);if(gt.version!==xt.__version||K===!0){if(e.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let nt=oe.getPrimaries(oe.workingColorSpace),bt=v.colorSpace===ai?null:oe.getPrimaries(v.colorSpace),Rt=v.colorSpace===ai||nt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let st=m(v.image,!1,i.maxTextureSize);st=me(v,st);let vt=r.convert(v.format,v.colorSpace),Bt=r.convert(v.type),Et=x(v.internalFormat,vt,Bt,v.normalized,v.colorSpace,v.isVideoTexture);Vt(Z,v);let Mt,zt=v.mipmaps,Xt=v.isVideoTexture!==!0,Qt=xt.__version===void 0||K===!0,G=gt.dataReady,St=T(v,st);if(v.isDepthTexture)Et=b(v.format===Ai,v.type),Qt&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Et,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Et,st.width,st.height,0,vt,Bt,null));else if(v.isDataTexture)if(zt.length>0){Xt&&Qt&&e.texStorage2D(s.TEXTURE_2D,St,Et,zt[0].width,zt[0].height);for(let nt=0,bt=zt.length;nt<bt;nt++)Mt=zt[nt],Xt?G&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Mt.width,Mt.height,vt,Bt,Mt.data):e.texImage2D(s.TEXTURE_2D,nt,Et,Mt.width,Mt.height,0,vt,Bt,Mt.data);v.generateMipmaps=!1}else Xt?(Qt&&e.texStorage2D(s.TEXTURE_2D,St,Et,st.width,st.height),G&&tt(v,st,vt,Bt)):e.texImage2D(s.TEXTURE_2D,0,Et,st.width,st.height,0,vt,Bt,st.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Et,zt[0].width,zt[0].height,st.depth);for(let nt=0,bt=zt.length;nt<bt;nt++)if(Mt=zt[nt],v.format!==En)if(vt!==null)if(Xt){if(G)if(v.layerUpdates.size>0){let Rt=nh(Mt.width,Mt.height,v.format,v.type);for(let ht of v.layerUpdates){let Ht=Mt.data.subarray(ht*Rt/Mt.data.BYTES_PER_ELEMENT,(ht+1)*Rt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,ht,Mt.width,Mt.height,1,vt,Ht)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,Mt.width,Mt.height,st.depth,vt,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,Et,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?G&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,Mt.width,Mt.height,st.depth,vt,Bt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,Et,Mt.width,Mt.height,st.depth,0,vt,Bt,Mt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Xt&&Qt&&e.texStorage2D(s.TEXTURE_2D,St,Et,zt[0].width,zt[0].height);for(let nt=0,bt=zt.length;nt<bt;nt++)Mt=zt[nt],v.format!==En?vt!==null?Xt?G&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,Et,Mt.width,Mt.height,0,Mt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?G&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Mt.width,Mt.height,vt,Bt,Mt.data):e.texImage2D(s.TEXTURE_2D,nt,Et,Mt.width,Mt.height,0,vt,Bt,Mt.data)}else if(v.isDataArrayTexture)if(Xt){if(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Et,st.width,st.height,st.depth),G)if(v.layerUpdates.size>0){let nt=nh(st.width,st.height,v.format,v.type);for(let bt of v.layerUpdates){let Rt=st.data.subarray(bt*nt/st.data.BYTES_PER_ELEMENT,(bt+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,bt,st.width,st.height,1,vt,Bt,Rt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Bt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,st.width,st.height,st.depth,0,vt,Bt,st.data);else if(v.isData3DTexture)Xt?(Qt&&e.texStorage3D(s.TEXTURE_3D,St,Et,st.width,st.height,st.depth),G&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Bt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Et,st.width,st.height,st.depth,0,vt,Bt,st.data);else if(v.isFramebufferTexture){if(Qt)if(Xt)e.texStorage2D(s.TEXTURE_2D,St,Et,st.width,st.height);else{let nt=st.width,bt=st.height;for(let Rt=0;Rt<St;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,Et,nt,bt,0,vt,Bt,null),nt>>=1,bt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),st.parentNode!==nt){nt.appendChild(st),f.add(v),nt.onpaint=bt=>{let Rt=bt.changedElements;for(let ht of f)Rt.includes(ht.image)&&(ht.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,st);else{let Rt=s.RGBA,ht=s.RGBA,Ht=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Rt,ht,Ht,st)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Xt&&Qt){let nt=re(zt[0]);e.texStorage2D(s.TEXTURE_2D,St,Et,nt.width,nt.height)}for(let nt=0,bt=zt.length;nt<bt;nt++)Mt=zt[nt],Xt?G&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,vt,Bt,Mt):e.texImage2D(s.TEXTURE_2D,nt,Et,vt,Bt,Mt);v.generateMipmaps=!1}else if(Xt){if(Qt){let nt=re(st);e.texStorage2D(s.TEXTURE_2D,St,Et,nt.width,nt.height)}G&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Bt,st)}else e.texImage2D(s.TEXTURE_2D,0,Et,vt,Bt,st);p(v)&&S(Z),xt.__version=gt.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function it(N,v,X){if(v.image.length!==6)return;let Z=Kt(N,v),K=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+X);let gt=n.get(K);if(K.version!==gt.__version||Z===!0){e.activeTexture(s.TEXTURE0+X);let xt=oe.getPrimaries(oe.workingColorSpace),j=v.colorSpace===ai?null:oe.getPrimaries(v.colorSpace),st=v.colorSpace===ai||xt===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let vt=v.isCompressedTexture||v.image[0].isCompressedTexture,Bt=v.image[0]&&v.image[0].isDataTexture,Et=[];for(let ht=0;ht<6;ht++)!vt&&!Bt?Et[ht]=m(v.image[ht],!0,i.maxCubemapSize):Et[ht]=Bt?v.image[ht].image:v.image[ht],Et[ht]=me(v,Et[ht]);let Mt=Et[0],zt=r.convert(v.format,v.colorSpace),Xt=r.convert(v.type),Qt=x(v.internalFormat,zt,Xt,v.normalized,v.colorSpace),G=v.isVideoTexture!==!0,St=gt.__version===void 0||Z===!0,nt=K.dataReady,bt=T(v,Mt);Vt(s.TEXTURE_CUBE_MAP,v);let Rt;if(vt){G&&St&&e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Qt,Mt.width,Mt.height);for(let ht=0;ht<6;ht++){Rt=Et[ht].mipmaps;for(let Ht=0;Ht<Rt.length;Ht++){let Ft=Rt[Ht];v.format!==En?zt!==null?G?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht,0,0,Ft.width,Ft.height,zt,Ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht,Qt,Ft.width,Ft.height,0,Ft.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht,0,0,Ft.width,Ft.height,zt,Xt,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht,Qt,Ft.width,Ft.height,0,zt,Xt,Ft.data)}}}else{if(Rt=v.mipmaps,G&&St){Rt.length>0&&bt++;let ht=re(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Qt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Bt){G?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Et[ht].width,Et[ht].height,zt,Xt,Et[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Qt,Et[ht].width,Et[ht].height,0,zt,Xt,Et[ht].data);for(let Ht=0;Ht<Rt.length;Ht++){let we=Rt[Ht].image[ht].image;G?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht+1,0,0,we.width,we.height,zt,Xt,we.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht+1,Qt,we.width,we.height,0,zt,Xt,we.data)}}else{G?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,zt,Xt,Et[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Qt,zt,Xt,Et[ht]);for(let Ht=0;Ht<Rt.length;Ht++){let Ft=Rt[Ht];G?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht+1,0,0,zt,Xt,Ft.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ht+1,Qt,zt,Xt,Ft.image[ht])}}}p(v)&&S(s.TEXTURE_CUBE_MAP),gt.__version=K.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function et(N,v,X,Z,K,gt){let xt=r.convert(X.format,X.colorSpace),j=r.convert(X.type),st=x(X.internalFormat,xt,j,X.normalized,X.colorSpace),vt=n.get(v),Bt=n.get(X);if(Bt.__renderTarget=v,!vt.__hasExternalTextures){let Et=Math.max(1,v.width>>gt),Mt=Math.max(1,v.height>>gt);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,gt,st,Et,Mt,v.depth,0,xt,j,null):e.texImage2D(K,gt,st,Et,Mt,0,xt,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,N),Jt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,K,Bt.__webglTexture,0,Zt(v)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,K,Bt.__webglTexture,gt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(N,v,X){if(s.bindRenderbuffer(s.RENDERBUFFER,N),v.depthBuffer){let Z=v.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,gt=b(v.stencilBuffer,K),xt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Jt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt(v),gt,v.width,v.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt(v),gt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,gt,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,N)}else{let Z=v.textures;for(let K=0;K<Z.length;K++){let gt=Z[K],xt=r.convert(gt.format,gt.colorSpace),j=r.convert(gt.type),st=x(gt.internalFormat,xt,j,gt.normalized,gt.colorSpace);Jt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt(v),st,v.width,v.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt(v),st,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,st,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(N,v,X){let Z=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,N),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",L)),K.__webglTexture===void 0){K.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,v.depthTexture);let vt=r.convert(v.depthTexture.format),Bt=r.convert(v.depthTexture.type),Et;v.depthTexture.format===Wn?Et=s.DEPTH_COMPONENT24:v.depthTexture.format===Ai&&(Et=s.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Et,v.width,v.height,0,vt,Bt,null)}}else z(v.depthTexture,0);let gt=K.__webglTexture,xt=Zt(v),j=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,st=v.depthTexture.format===Ai?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===Wn)Jt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,j,gt,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,st,j,gt,0);else if(v.depthTexture.format===Ai)Jt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,j,gt,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,st,j,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(N){let v=n.get(N),X=N.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==N.depthTexture){let Z=N.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=Z}if(N.depthTexture&&!v.__autoAllocateDepthBuffer)if(X)for(let Z=0;Z<6;Z++)jt(v.__webglFramebuffer[Z],N,Z);else{let Z=N.texture.mipmaps;Z&&Z.length>0?jt(v.__webglFramebuffer[0],N,0):jt(v.__webglFramebuffer,N,0)}else if(X){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=s.createRenderbuffer(),Lt(v.__webglDepthbuffer[Z],N,!1);else{let K=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=v.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,gt)}}else{let Z=N.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Lt(v.__webglDepthbuffer,N,!1);else{let K=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,gt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(N,v,X){let Z=n.get(N);v!==void 0&&et(Z.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Q(N)}function dt(N){let v=N.texture,X=n.get(N),Z=n.get(v);N.addEventListener("dispose",y);let K=N.textures,gt=N.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=v.version,a.memory.textures++),gt){X.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer[j]=[];for(let st=0;st<v.mipmaps.length;st++)X.__webglFramebuffer[j][st]=s.createFramebuffer()}else X.__webglFramebuffer[j]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)X.__webglFramebuffer[j]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(xt)for(let j=0,st=K.length;j<st;j++){let vt=n.get(K[j]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),a.memory.textures++)}if(N.samples>0&&Jt(N)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let st=K[j];X.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[j]);let vt=r.convert(st.format,st.colorSpace),Bt=r.convert(st.type),Et=x(st.internalFormat,vt,Bt,st.normalized,st.colorSpace,N.isXRRenderTarget===!0),Mt=Zt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,Et,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,X.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(X.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)et(X.__webglFramebuffer[j][st],N,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,st);else et(X.__webglFramebuffer[j],N,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(v)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let j=0,st=K.length;j<st;j++){let vt=K[j],Bt=n.get(vt),Et=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Et=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Et,Bt.__webglTexture),Vt(Et,vt),et(X.__webglFramebuffer,N,vt,s.COLOR_ATTACHMENT0+j,Et,0),p(vt)&&S(Et)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(j=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,Z.__webglTexture),Vt(j,v),v.mipmaps&&v.mipmaps.length>0)for(let st=0;st<v.mipmaps.length;st++)et(X.__webglFramebuffer[st],N,v,s.COLOR_ATTACHMENT0,j,st);else et(X.__webglFramebuffer,N,v,s.COLOR_ATTACHMENT0,j,0);p(v)&&S(j),e.unbindTexture()}N.depthBuffer&&Q(N)}function pt(N){let v=N.textures;for(let X=0,Z=v.length;X<Z;X++){let K=v[X];if(p(K)){let gt=w(N),xt=n.get(K).__webglTexture;e.bindTexture(gt,xt),S(gt),e.unbindTexture()}}}let yt=[],Wt=[];function kt(N){if(N.samples>0){if(Jt(N)===!1){let v=N.textures,X=N.width,Z=N.height,K=s.COLOR_BUFFER_BIT,gt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(N),j=v.length>1;if(j)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let st=N.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);let Bt=n.get(v[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Bt,0)}s.blitFramebuffer(0,0,X,Z,0,0,X,Z,K,s.NEAREST),l===!0&&(yt.length=0,Wt.length=0,yt.push(s.COLOR_ATTACHMENT0+vt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(yt.push(gt),Wt.push(gt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);let Bt=n.get(v[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Bt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let v=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Zt(N){return Math.min(i.maxSamples,N.samples)}function Jt(N){let v=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function H(N){let v=a.render.frame;h.get(N)!==v&&(h.set(N,v),N.update())}function me(N,v){let X=N.colorSpace,Z=N.format,K=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||X!==dr&&X!==ai&&(oe.getTransfer(X)===_e?(Z!==En||K!==un)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",X)),v}function re(N){return typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame!="undefined"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=R,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=ft,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function R_(s,t){function e(n,i=ai){let r,a=oe.getTransfer(i);if(n===un)return s.UNSIGNED_BYTE;if(n===Oo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return s.BYTE;if(n===Xc)return s.SHORT;if(n===Ws)return s.UNSIGNED_SHORT;if(n===Fo)return s.INT;if(n===Un)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===Fn)return s.HALF_FLOAT;if(n===Zc)return s.ALPHA;if(n===$c)return s.RGB;if(n===En)return s.RGBA;if(n===Wn)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===zo)return s.RED;if(n===Ho)return s.RED_INTEGER;if(n===Ri)return s.RG;if(n===ko)return s.RG_INTEGER;if(n===Go)return s.RGBA_INTEGER;if(n===qr||n===Yr||n===Zr||n===$r)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Wo||n===Xo||n===qo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===Zo||n===$o||n===Jo||n===Ko||n===Jr||n===jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yo||n===Zo)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$o)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jo)return r.COMPRESSED_R11_EAC;if(n===Ko)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jr)return r.COMPRESSED_RG11_EAC;if(n===jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===pl||n===ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dl)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gl||n===xl||n===Kr||n===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ar(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:C_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Xn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new Mh,p={},S=e.getContextAttributes(),w=null,x=null,b=[],T=[],L=new mt,y=null,A=null,P=new Ge;P.viewport=new Pe;let F=new Ge;F.viewport=new Pe;let M=[P,F],I=new Co,C=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=b[J];return tt===void 0&&(tt=new Rs,b[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=b[J];return tt===void 0&&(tt=new Rs,b[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=b[J];return tt===void 0&&(tt=new Rs,b[J]=tt),tt.getHandSpace()};function D(J){let tt=T.indexOf(J.inputSource);if(tt===-1)return;let _t=b[tt];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||a),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",z);for(let J=0;J<b.length;J++){let tt=T[J];tt!==null&&(T[J]=null,b[J].disconnect(tt))}C=null,R=null,m.reset();for(let J in p)delete p[J];if(t.setRenderTarget(w),d=null,u=null,f=null,i=null,x=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(L.width,L.height,!1),A!==null){let J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",U),i.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,it=null,et=null;S.depth&&(et=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=S.stencil?Ai:Wn,it=S.stencil?Xs:Un);let Lt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Lt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new ln(u.textureWidth,u.textureHeight,{format:En,type:un,depthTexture:new yi(u.textureWidth,u.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ln(d.framebufferWidth,d.framebufferHeight,{format:En,type:un,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(J){for(let tt=0;tt<J.removed.length;tt++){let _t=J.removed[tt],it=T.indexOf(_t);it>=0&&(T[it]=null,b[it].disconnect(_t))}for(let tt=0;tt<J.added.length;tt++){let _t=J.added[tt],it=T.indexOf(_t);if(it===-1){for(let Lt=0;Lt<b.length;Lt++)if(Lt>=T.length){T.push(_t),it=Lt;break}else if(T[Lt]===null){T[Lt]=_t,it=Lt;break}if(it===-1)break}let et=b[it];et&&et.connect(_t)}}let O=new B,V=new B;function W(J,tt,_t){O.setFromMatrixPosition(tt.matrixWorld),V.setFromMatrixPosition(_t.matrixWorld);let it=O.distanceTo(V),et=tt.projectionMatrix.elements,Lt=_t.projectionMatrix.elements,jt=et[14]/(et[10]-1),Q=et[14]/(et[10]+1),ft=(et[9]+1)/et[5],dt=(et[9]-1)/et[5],pt=(et[8]-1)/et[0],yt=(Lt[8]+1)/Lt[0],Wt=jt*pt,kt=jt*yt,Zt=it/(-pt+yt),Jt=Zt*-pt;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Jt),J.translateZ(Zt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),et[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let H=jt+Zt,me=Q+Zt,re=Wt-Jt,N=kt+(it-Jt),v=ft*Q/me*H,X=dt*Q/me*H;J.projectionMatrix.makePerspective(re,N,v,X,H,me),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function lt(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let tt=J.near,_t=J.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),I.near=F.near=P.near=tt,I.far=F.far=P.far=_t,(C!==I.near||R!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,R=I.far),I.layers.mask=J.layers.mask|6,P.layers.mask=I.layers.mask&-5,F.layers.mask=I.layers.mask&-3;let it=J.parent,et=I.cameras;lt(I,it);for(let Lt=0;Lt<et.length;Lt++)lt(et[Lt],it);et.length===2?W(I,P,F):I.projectionMatrix.copy(P.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),at(J,I,it)};function at(J,tt,_t){_t===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=no*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(J){return p[J]};let Ct=null;function Vt(J,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let it=!1;_t.length!==I.cameras.length&&(I.cameras.length=0,it=!0);for(let Q=0;Q<_t.length;Q++){let ft=_t[Q],dt=null;if(d!==null)dt=d.getViewport(ft);else{let yt=f.getViewSubImage(u,ft);dt=yt.viewport,Q===0&&(t.setRenderTargetTextures(x,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(x))}let pt=M[Q];pt===void 0&&(pt=new Ge,pt.layers.enable(Q),pt.viewport=new Pe,M[Q]=pt),pt.matrix.fromArray(ft.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ft.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(dt.x,dt.y,dt.width,dt.height),Q===0&&(I.matrix.copy(pt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),it===!0&&I.cameras.push(pt)}let et=i.enabledFeatures;if(et&&et.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Q=f.getDepthInformation(_t[0]);Q&&Q.isValid&&Q.texture&&m.init(Q,i.renderState)}if(et&&et.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Q=0;Q<_t.length;Q++){let ft=_t[Q].camera;if(ft){let dt=p[ft];dt||(dt=new Ar,p[ft]=dt);let pt=f.getCameraImage(ft);dt.sourceTexture=pt}}}}for(let _t=0;_t<b.length;_t++){let it=T[_t],et=b[_t];it!==null&&et!==void 0&&et.update(it,tt,c||a)}Ct&&Ct(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let Kt=new Xf;Kt.setAnimationLoop(Vt),this.setAnimationLoop=function(J){Ct=J},this.dispose=function(){}}},P_=new pe,Kf=new $t;Kf.set(-1,0,0,0,1,0,0,0,1);function L_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,w,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),w=S.envMap,x=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function D_(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let T=b.program;n.uniformBlockBinding(x,T)}function c(x,b){let T=i[x.id];T===void 0&&(m(x),T=h(x),i[x.id]=T,x.addEventListener("dispose",S));let L=b.program;n.updateUBOMapping(x,L);let y=t.render.frame;r[x.id]!==y&&(u(x),r[x.id]=y)}function h(x){let b=f();x.__bindingPointIndex=b;let T=s.createBuffer(),L=x.__size,y=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,L,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,T),T}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let b=i[x.id],T=x.uniforms,L=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let y=0,A=T.length;y<A;y++){let P=T[y];if(Array.isArray(P))for(let F=0,M=P.length;F<M;F++)d(P[F],y,F,L);else d(P,y,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,b,T,L){if(_(x,b,T,L)===!0){let y=x.__offset,A=x.value;if(Array.isArray(A)){let P=0;for(let F=0;F<A.length;F++){let M=A[F],I=p(M);g(M,x.__data,P),typeof M!="number"&&typeof M!="boolean"&&!M.isMatrix3&&!ArrayBuffer.isView(M)&&(P+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,x.__data)}}function g(x,b,T){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,T)}function _(x,b,T,L){let y=x.value,A=b+"_"+T;if(L[A]===void 0)return typeof y=="number"||typeof y=="boolean"?L[A]=y:ArrayBuffer.isView(y)?L[A]=y.slice():L[A]=y.clone(),!0;{let P=L[A];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return L[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(x){let b=x.uniforms,T=0,L=16;for(let A=0,P=b.length;A<P;A++){let F=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,I=F.length;M<I;M++){let C=F[M],R=Array.isArray(C.value)?C.value:[C.value];for(let D=0,U=R.length;D<U;D++){let z=R[D],O=p(z),V=T%L,W=V%O.boundary,lt=V+W;T+=W,lt!==0&&L-lt<O.storage&&(T+=L-lt),C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=O.storage}}}let y=T%L;return y>0&&(T+=L-y),x.__size=T,x.__cache={},this}function p(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",x),b}function S(x){let b=x.target;b.removeEventListener("dispose",S);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function w(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var N_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function U_(){return Zn===null&&(Zn=new Er(N_,16,16,Ri,Fn),Zn.name="DFG_LUT",Zn.minFilter=Ze,Zn.magFilter=Ze,Zn.wrapS=Vn,Zn.wrapT=Vn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var na=class{constructor(t={}){let{canvas:e=uf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=un}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=d,m=new Set([Go,ko,Ho]),p=new Set([un,Un,Ws,Xs,Oo,Bo]),S=new Uint32Array(4),w=new Int32Array(4),x=new B,b=null,T=null,L=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,M=null,I=null,C=null,R=null;this._outputColorSpace=Ie;let D=0,U=0,z=null,O=-1,V=null,W=new Pe,lt=new Pe,at=null,Ct=new Ut(0),Vt=0,Kt=e.width,J=e.height,tt=1,_t=null,it=null,et=new Pe(0,0,Kt,J),Lt=new Pe(0,0,Kt,J),jt=!1,Q=new Ds,ft=!1,dt=!1,pt=new pe,yt=new B,Wt=new Pe,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function Jt(){return z===null?tt:1}let H=n;function me(E,k){return e.getContext(E,k)}let re,N,v,X,Z,K,gt,xt,j,st,vt,Bt,Et,Mt,zt,Xt,Qt,G,St,nt,bt,Rt,ht;try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",An,!1),H===null){let k="webgl2";if(H=me(k,E),H===null)throw me(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(E){throw e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",An,!1),qt("WebGLRenderer: "+E.message),E}function Ht(){re=new Gg(H),re.init(),bt=new R_(H,re),N=new Lg(H,re,t,bt),v=new T_(H,re),N.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),I=H.createFramebuffer(),C=H.createFramebuffer(),R=H.createFramebuffer(),X=new Xg(H),Z=new f_,K=new A_(H,re,v,Z,N,bt,X),gt=new kg(P),xt=new Yp(H),Rt=new Ig(H,xt),j=new Vg(H,xt,X,Rt),st=new Yg(H,j,xt,Rt,X),G=new qg(H,N,K),zt=new Dg(Z),vt=new u_(P,gt,re,N,Rt,zt),Bt=new L_(P,Z),Et=new p_,Mt=new v_(re),Qt=new Cg(P,gt,v,st,g,l),Xt=new w_(P,st,N),ht=new D_(H,X,N,v),St=new Pg(H,re,X),nt=new Wg(H,re,X),X.programs=vt.programs,P.capabilities=N,P.extensions=re,P.properties=Z,P.renderLists=Et,P.shadowMap=Xt,P.state=v,P.info=X}_!==un&&(A=new $g(_,e.width,e.height,o,i,r));let Ft=new Sh(P,H);this.xr=Ft,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize(Kt,J,!1))},this.getSize=function(E){return E.set(Kt,J)},this.setSize=function(E,k,$=!0){if(Ft.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=E,J=k,e.width=Math.floor(E*tt),e.height=Math.floor(k*tt),$===!0&&(e.style.width=E+"px",e.style.height=k+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Kt*tt,J*tt).floor()},this.setDrawingBufferSize=function(E,k,$){Kt=E,J=k,tt=$,e.width=Math.floor(E*$),e.height=Math.floor(k*$),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(_===un){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(et)},this.setViewport=function(E,k,$,q){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,k,$,q),v.viewport(W.copy(et).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(Lt)},this.setScissor=function(E,k,$,q){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,k,$,q),v.scissor(lt.copy(Lt).multiplyScalar(tt).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(E){v.setScissorTest(jt=E)},this.setOpaqueSort=function(E){_t=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,$=!0){let q=0;if(E){let Y=!1;if(z!==null){let At=z.texture.format;Y=m.has(At)}if(Y){let At=z.texture.type,Pt=p.has(At),Tt=Qt.getClearColor(),Dt=Qt.getClearAlpha(),Ot=Tt.r,ne=Tt.g,ae=Tt.b;Pt?(S[0]=Ot,S[1]=ne,S[2]=ae,S[3]=Dt,H.clearBufferuiv(H.COLOR,0,S)):(w[0]=Ot,w[1]=ne,w[2]=ae,w[3]=Dt,H.clearBufferiv(H.COLOR,0,w))}else q|=H.COLOR_BUFFER_BIT}k&&(q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),M=E},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",An,!1),Qt.dispose(),Et.dispose(),Mt.dispose(),Z.dispose(),gt.dispose(),st.dispose(),Rt.dispose(),ht.dispose(),vt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Wh),Ft.removeEventListener("sessionend",Xh),Ni.stop()};function we(E){E.preventDefault(),gr("WebGLRenderer: Context Lost."),F=!0}function ge(){gr("WebGLRenderer: Context Restored."),F=!1;let E=X.autoReset,k=Xt.enabled,$=Xt.autoUpdate,q=Xt.needsUpdate,Y=Xt.type;Ht(),X.autoReset=E,Xt.enabled=k,Xt.autoUpdate=$,Xt.needsUpdate=q,Xt.type=Y}function An(E){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zn(E){let k=E.target;k.removeEventListener("dispose",zn),Rd(k)}function Rd(E){Cd(E),Z.remove(E)}function Cd(E){let k=Z.get(E).programs;k!==void 0&&(k.forEach(function($){vt.releaseProgram($)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,$,q,Y,At){k===null&&(k=kt);let Pt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Tt=Ld(E,k,$,q,Y);v.setMaterial(q,Pt);let Dt=$.index,Ot=1;if(q.wireframe===!0){if(Dt=j.getWireframeAttribute($),Dt===void 0)return;Ot=2}let ne=$.drawRange,ae=$.attributes.position,Nt=ne.start*Ot,xe=(ne.start+ne.count)*Ot;At!==null&&(Nt=Math.max(Nt,At.start*Ot),xe=Math.min(xe,(At.start+At.count)*Ot)),Dt!==null?(Nt=Math.max(Nt,0),xe=Math.min(xe,Dt.count)):ae!=null&&(Nt=Math.max(Nt,0),xe=Math.min(xe,ae.count));let Be=xe-Nt;if(Be<0||Be===1/0)return;Rt.setup(Y,q,Tt,$,Dt);let Re,be=St;if(Dt!==null&&(Re=xt.get(Dt),be=nt,be.setIndex(Re)),Y.isMesh)q.wireframe===!0?(v.setLineWidth(q.wireframeLinewidth*Jt()),be.setMode(H.LINES)):be.setMode(H.TRIANGLES);else if(Y.isLine){let Je=q.linewidth;Je===void 0&&(Je=1),v.setLineWidth(Je*Jt()),Y.isLineSegments?be.setMode(H.LINES):Y.isLineLoop?be.setMode(H.LINE_LOOP):be.setMode(H.LINE_STRIP)}else Y.isPoints?be.setMode(H.POINTS):Y.isSprite&&be.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(re.get("WEBGL_multi_draw"))be.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Je=Y._multiDrawStarts,It=Y._multiDrawCounts,nn=Y._multiDrawCount,fe=Dt?xt.get(Dt).bytesPerElement:1,vn=Z.get(q).currentProgram.getUniforms();for(let Hn=0;Hn<nn;Hn++)vn.setValue(H,"_gl_DrawID",Hn),be.render(Je[Hn]/fe,It[Hn])}else if(Y.isInstancedMesh)be.renderInstances(Nt,Be,Y.count);else if($.isInstancedBufferGeometry){let Je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,It=Math.min($.instanceCount,Je);be.renderInstances(Nt,Be,It)}else be.render(Nt,Be)};function Vh(E,k,$,q){M!==null&&E.isNodeMaterial&&M.setObject(q,E),ft===!0&&zt.setState(E,$,!1),E.transparent===!0&&E.side===hn&&E.forceSinglePass===!1?(E.side=Ve,E.needsUpdate=!0,xa(E,k,q),E.side=bi,E.needsUpdate=!0,xa(E,k,q),E.side=hn):xa(E,k,q)}this.compile=function(E,k,$=null){$===null&&($=E),M!==null&&M.renderStart(E,k,$),T=Mt.get($),T.init(k),y.push(T),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),E!==$&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),M!==null&&M.updateLights(T.state.lightsArray),dt=this.localClippingEnabled,ft=zt.init(this.clippingPlanes,dt),ft===!0&&zt.setGlobalState(this.clippingPlanes,k),M!==null&&Xt.render(T.state.shadowsArray,$,k);let q=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let At=Y.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){let Tt=At[Pt];Vh(Tt,$,k,Y),q.add(Tt)}else Vh(At,$,k,Y),q.add(At)}),T=y.pop(),M!==null&&M.renderEnd(),q},this.compileAsync=function(E,k,$=null){let q=this.compile(E,k,$);return new Promise(Y=>{function At(){if(q.forEach(function(Pt){let Dt=Z.get(Pt).currentProgram;(Dt===void 0||Dt.isReady())&&q.delete(Pt)}),q.size===0){Y(E);return}setTimeout(At,10)}re.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Wl=null;function Id(E){Wl&&Wl(E)}function Wh(){Ni.stop()}function Xh(){Ni.start()}let Ni=new Xf;Ni.setAnimationLoop(Id),typeof self!="undefined"&&Ni.setContext(self),this.setAnimationLoop=function(E){Wl=E,Ft.setAnimationLoop(E),E===null?Ni.stop():Ni.start()},Ft.addEventListener("sessionstart",Wh),Ft.addEventListener("sessionend",Xh),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;M!==null&&M.renderStart(E,k);let $=Ft.enabled===!0&&Ft.isPresenting===!0,q=A!==null&&(z===null||$)&&A.begin(P,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(k),k=Ft.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,k,z),T=Mt.get(E,y.length),T.init(k),T.state.textureUnits=K.getTextureUnits(),y.push(T),pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(pt,Ln,k.reversedDepth),dt=this.localClippingEnabled,ft=zt.init(this.clippingPlanes,dt),b=Et.get(E,L.length),b.init(),L.push(b),Ft.enabled===!0&&Ft.isPresenting===!0){let Pt=P.xr.getDepthSensingMesh();Pt!==null&&Xl(Pt,k,-1/0,P.sortObjects)}Xl(E,k,0,P.sortObjects),b.finish(),M!==null&&M.updateLights(T.state.lightsArray),P.sortObjects===!0&&b.sort(_t,it),Zt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Zt&&Qt.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&zt.beginShadows();let Y=T.state.shadowsArray;if(Xt.render(Y,E,k),ft===!0&&zt.endShadows(),(q&&A.hasRenderPass())===!1){let Pt=b.opaque,Tt=b.transmissive;if(T.setupLights(),k.isArrayCamera){let Dt=k.cameras;if(Tt.length>0)for(let Ot=0,ne=Dt.length;Ot<ne;Ot++){let ae=Dt[Ot];Yh(Pt,Tt,E,ae)}Zt&&Qt.render(E);for(let Ot=0,ne=Dt.length;Ot<ne;Ot++){let ae=Dt[Ot];qh(b,E,ae,ae.viewport)}}else Tt.length>0&&Yh(Pt,Tt,E,k),Zt&&Qt.render(E),qh(b,E,k)}z!==null&&U===0&&(K.updateMultisampleRenderTarget(z),K.updateRenderTargetMipmap(z)),q&&A.end(P),E.isScene===!0&&E.onAfterRender(P,E,k),Rt.resetDefaultState(),O=-1,V=null,y.pop(),y.length>0?(T=y[y.length-1],K.setTextureUnits(T.state.textureUnits),ft===!0&&zt.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,M!==null&&M.renderEnd()};function Xl(E,k,$,q){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Q)){q&&Wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pt);let Pt=st.update(E),Tt=E.material;Tt.visible&&b.push(E,Pt,Tt,$,Wt.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Q))){let Pt=st.update(E),Tt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Wt.copy(E.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Wt.copy(Pt.boundingSphere.center)),Wt.applyMatrix4(E.matrixWorld).applyMatrix4(pt)),Array.isArray(Tt)){let Dt=Pt.groups;for(let Ot=0,ne=Dt.length;Ot<ne;Ot++){let ae=Dt[Ot],Nt=Tt[ae.materialIndex];Nt&&Nt.visible&&b.push(E,Pt,Nt,$,Wt.z,ae,k)}}else Tt.visible&&b.push(E,Pt,Tt,$,Wt.z,null,k)}}let At=E.children;for(let Pt=0,Tt=At.length;Pt<Tt;Pt++)Xl(At[Pt],k,$,q)}function qh(E,k,$,q){let{opaque:Y,transmissive:At,transparent:Pt}=E;T.setupLightsView($),ft===!0&&zt.setGlobalState(P.clippingPlanes,$),q&&v.viewport(W.copy(q)),Y.length>0&&ga(Y,k,$),At.length>0&&ga(At,k,$),Pt.length>0&&ga(Pt,k,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Yh(E,k,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){let Nt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new ln(1,1,{generateMipmaps:!0,type:Nt?Fn:un,minFilter:Ti,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let At=T.state.transmissionRenderTarget[q.id],Pt=q.viewport||W;At.setSize(Pt.z*P.transmissionResolutionScale,Pt.w*P.transmissionResolutionScale);let Tt=P.getRenderTarget(),Dt=P.getActiveCubeFace(),Ot=P.getActiveMipmapLevel();P.setRenderTarget(At),P.getClearColor(Ct),Vt=P.getClearAlpha(),Vt<1&&P.setClearColor(16777215,.5),P.clear(),Zt&&Qt.render($);let ne=P.toneMapping;P.toneMapping=Nn;let ae=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),ft===!0&&zt.setGlobalState(P.clippingPlanes,q),ga(E,$,q),K.updateMultisampleRenderTarget(At),K.updateRenderTargetMipmap(At),re.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let xe=0,Be=k.length;xe<Be;xe++){let Re=k[xe],{object:be,geometry:Je,material:It,group:nn}=Re;if(It.side===hn&&be.layers.test(q.layers)){let fe=It.side;It.side=Ve,It.needsUpdate=!0,Zh(be,$,q,Je,It,nn),It.side=fe,It.needsUpdate=!0,Nt=!0}}Nt===!0&&(K.updateMultisampleRenderTarget(At),K.updateRenderTargetMipmap(At))}P.setRenderTarget(Tt,Dt,Ot),P.setClearColor(Ct,Vt),ae!==void 0&&(q.viewport=ae),P.toneMapping=ne}function ga(E,k,$){let q=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,At=E.length;Y<At;Y++){let Pt=E[Y],{object:Tt,geometry:Dt,group:Ot}=Pt,ne=Pt.material;ne.allowOverride===!0&&q!==null&&(ne=q),Tt.layers.test($.layers)&&Zh(Tt,k,$,Dt,ne,Ot)}}function Zh(E,k,$,q,Y,At){M!==null&&Y.isNodeMaterial&&M.setObject(E,Y),E.onBeforeRender(P,k,$,q,Y,At),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(P,k,$,q,E,At),Y.transparent===!0&&Y.side===hn&&Y.forceSinglePass===!1?(Y.side=Ve,Y.needsUpdate=!0,P.renderBufferDirect($,k,q,Y,E,At),Y.side=bi,Y.needsUpdate=!0,P.renderBufferDirect($,k,q,Y,E,At),Y.side=hn):P.renderBufferDirect($,k,q,Y,E,At),E.onAfterRender(P,k,$,q,Y,At)}function xa(E,k,$){k.isScene!==!0&&(k=kt);let q=Z.get(E),Y=T.state.lights,At=T.state.shadowsArray,Pt=Y.state.version,Tt=vt.getParameters(E,Y.state,At,k,$,T.state.lightProbeGridArray),Dt=vt.getProgramCacheKey(Tt),Ot=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;let ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=gt.get(E.envMap||q.environment,ne),q.envMapRotation=q.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",zn),Ot=new Map,q.programs=Ot);let ae=Ot.get(Dt);if(ae!==void 0){if(q.currentProgram===ae&&q.lightsStateVersion===Pt)return Jh(E,Tt),ae}else Tt.uniforms=vt.getUniforms(E),M!==null&&E.isNodeMaterial&&M.build(E,$,Tt),E.onBeforeCompile(Tt,P),ae=vt.acquireProgram(Tt,Dt),Ot.set(Dt,ae),q.uniforms=Tt.uniforms;let Nt=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=zt.uniform),Jh(E,Tt),q.needsLights=Nd(E),q.lightsStateVersion=Pt,q.needsLights&&(Nt.ambientLightColor.value=Y.state.ambient,Nt.lightProbe.value=Y.state.probe,Nt.sunLights.value=Y.state.sun,Nt.sunLightShadows.value=Y.state.sunShadow,Nt.directionalLights.value=Y.state.directional,Nt.directionalLightShadows.value=Y.state.directionalShadow,Nt.spotLights.value=Y.state.spot,Nt.spotLightShadows.value=Y.state.spotShadow,Nt.rectAreaLights.value=Y.state.rectArea,Nt.ltc_1.value=Y.state.rectAreaLTC1,Nt.ltc_2.value=Y.state.rectAreaLTC2,Nt.pointLights.value=Y.state.point,Nt.pointLightShadows.value=Y.state.pointShadow,Nt.hemisphereLights.value=Y.state.hemi,Nt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Nt.sunShadowCascade.value=Y.state.sunShadowCascade,Nt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Nt.spotLightMatrix.value=Y.state.spotLightMatrix,Nt.spotLightMap.value=Y.state.spotLightMap,Nt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=ae,q.uniformsList=null,ae}function $h(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=$s.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Jh(E,k){let $=Z.get(E);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Pd(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let $=0,q=E.length;$<q;$++){let Y=E[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function Ld(E,k,$,q,Y){k.isScene!==!0&&(k=kt),K.resetTextureUnits();let At=k.fog,Pt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,Tt=z===null?P.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:oe.workingColorSpace,Dt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ot=gt.get(q.envMap||Pt,Dt),ne=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ae=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Nt=!!$.morphAttributes.position,xe=!!$.morphAttributes.normal,Be=!!$.morphAttributes.color,Re=Nn;q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Re=P.toneMapping);let be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Je=be!==void 0?be.length:0,It=Z.get(q),nn=T.state.lights;if(ft===!0&&(dt===!0||E!==V)){let Te=E===V&&q.id===O;zt.setState(q,E,Te)}let fe=!1;q.version===It.__version?(It.needsLights&&It.lightsStateVersion!==nn.state.version||It.outputColorSpace!==Tt||Y.isBatchedMesh&&It.batching===!1||!Y.isBatchedMesh&&It.batching===!0||Y.isBatchedMesh&&It.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&It.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&It.instancing===!1||!Y.isInstancedMesh&&It.instancing===!0||Y.isSkinnedMesh&&It.skinning===!1||!Y.isSkinnedMesh&&It.skinning===!0||Y.isInstancedMesh&&It.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&It.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&It.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&It.instancingMorph===!1&&Y.morphTexture!==null||It.envMap!==Ot||q.fog===!0&&It.fog!==At||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==zt.numPlanes||It.numIntersection!==zt.numIntersection)||It.vertexAlphas!==ne||It.vertexTangents!==ae||It.morphTargets!==Nt||It.morphNormals!==xe||It.morphColors!==Be||It.toneMapping!==Re||It.morphTargetsCount!==Je||!!It.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,It.__version=q.version);let vn=It.currentProgram;fe===!0&&(vn=xa(q,k,Y),M&&q.isNodeMaterial&&M.onUpdateProgram(q,vn,It));let Hn=!1,ui=!1,ns=!1,ve=vn.getUniforms(),Oe=It.uniforms;if(v.useProgram(vn.program)&&(Hn=!0,ui=!0,ns=!0),q.id!==O&&(O=q.id,ui=!0),It.needsLights){let Te=Pd(T.state.lightProbeGridArray,Y);It.lightProbeGrid!==Te&&(It.lightProbeGrid=Te,ui=!0)}if(Hn||V!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ve.setValue(H,"projectionMatrix",E.projectionMatrix),ve.setValue(H,"viewMatrix",E.matrixWorldInverse);let di=ve.map.cameraPosition;di!==void 0&&di.setValue(H,yt.setFromMatrixPosition(E.matrixWorld)),N.logarithmicDepthBuffer&&ve.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ve.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,ui=!0,ns=!0)}if(It.needsLights&&(nn.state.sunShadowMap.length>0&&ve.setValue(H,"sunShadowMap",nn.state.sunShadowMap,K),nn.state.directionalShadowMap.length>0&&ve.setValue(H,"directionalShadowMap",nn.state.directionalShadowMap,K),nn.state.spotShadowMap.length>0&&ve.setValue(H,"spotShadowMap",nn.state.spotShadowMap,K),nn.state.pointShadowMap.length>0&&ve.setValue(H,"pointShadowMap",nn.state.pointShadowMap,K)),Y.isSkinnedMesh){ve.setOptional(H,Y,"bindMatrix"),ve.setOptional(H,Y,"bindMatrixInverse");let Te=Y.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ve.setValue(H,"boneTexture",Te.boneTexture,K))}Y.isBatchedMesh&&(ve.setOptional(H,Y,"batchingTexture"),ve.setValue(H,"batchingTexture",Y._matricesTexture,K),ve.setOptional(H,Y,"batchingIdTexture"),ve.setValue(H,"batchingIdTexture",Y._indirectTexture,K),ve.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ve.setValue(H,"batchingColorTexture",Y._colorsTexture,K));let fi=$.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&G.update(Y,$,vn),(ui||It.receiveShadow!==Y.receiveShadow)&&(It.receiveShadow=Y.receiveShadow,ve.setValue(H,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(Oe.envMapIntensity.value=k.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=U_()),ui){if(ve.setValue(H,"toneMappingExposure",P.toneMappingExposure),It.needsLights&&Dd(Oe,ns),At&&q.fog===!0&&Bt.refreshFogUniforms(Oe,At),Bt.refreshMaterialUniforms(Oe,q,tt,J,T.state.transmissionRenderTarget[E.id]),It.needsLights&&It.lightProbeGrid){let Te=It.lightProbeGrid;Oe.probesSH.value=Te.texture,Oe.probesMin.value.copy(Te.boundingBox.min),Oe.probesMax.value.copy(Te.boundingBox.max),Oe.probesResolution.value.copy(Te.resolution)}$s.upload(H,$h(It),Oe,K)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&($s.upload(H,$h(It),Oe,K),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ve.setValue(H,"center",Y.center),ve.setValue(H,"modelViewMatrix",Y.modelViewMatrix),ve.setValue(H,"normalMatrix",Y.normalMatrix),ve.setValue(H,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Te=q.uniformsGroups;for(let di=0,is=Te.length;di<is;di++){let jh=Te[di];ht.update(jh,vn),ht.bind(jh,vn)}}return vn}function Dd(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Nd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,k,$){let q=Z.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(E.texture).__webglTexture=k,Z.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let $=Z.get(E);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,$=0){z=E,D=k,U=$;let q=null,Y=!1,At=!1;if(E){let Tt=Z.get(E);if(Tt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(H.FRAMEBUFFER,Tt.__webglFramebuffer),W.copy(E.viewport),lt.copy(E.scissor),at=E.scissorTest,v.viewport(W),v.scissor(lt),v.setScissorTest(at),O=-1;return}else if(Tt.__webglFramebuffer===void 0)K.setupRenderTarget(E);else if(Tt.__hasExternalTextures)K.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ne=E.depthTexture;if(Tt.__boundDepthTexture!==ne){if(ne!==null&&Z.has(ne)&&(E.width!==ne.image.width||E.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(E)}}let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(At=!0);let Ot=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?q=Ot[k][$]:q=Ot[k],Y=!0):E.samples>0&&K.useMultisampledRTT(E)===!1?q=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?q=Ot[$]:q=Ot,W.copy(E.viewport),lt.copy(E.scissor),at=E.scissorTest}else W.copy(et).multiplyScalar(tt).floor(),lt.copy(Lt).multiplyScalar(tt).floor(),at=jt;if($!==0&&(q=I),v.bindFramebuffer(H.FRAMEBUFFER,q)&&v.drawBuffers(E,q),v.viewport(W),v.scissor(lt),v.setScissorTest(at),Y){let Tt=Z.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,$)}else if(At){let Tt=k;for(let Dt=0;Dt<E.textures.length;Dt++){let Ot=Z.get(E.textures[Dt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Dt,Ot.__webglTexture,$,Tt)}}else if(E!==null&&$!==0){let Tt=Z.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Tt.__webglTexture,$)}O=-1};function Kh(E){let k=Z.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=N.textureFormatReadable(E.format),k.__typeReadable=N.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,$,q,Y,At,Pt,Tt=0){if(!(E&&E.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){v.bindFramebuffer(H.FRAMEBUFFER,Dt);try{let Ot=E.textures[Tt],ne=Ot.format,ae=Ot.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Tt);let Nt=Kh(Ot);if(Nt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-q&&$>=0&&$<=E.height-Y&&H.readPixels(k,$,q,Y,bt.convert(ne),bt.convert(ae),At)}finally{let Ot=z!==null?Z.get(z).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(E,k,$,q,Y,At,Pt,Tt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(k>=0&&k<=E.width-q&&$>=0&&$<=E.height-Y){v.bindFramebuffer(H.FRAMEBUFFER,Dt);let Ot=E.textures[Tt],ne=Ot.format,ae=Ot.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Tt);let Nt=Kh(Ot);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,xe),H.bufferData(H.PIXEL_PACK_BUFFER,At.byteLength,H.STREAM_READ),H.readPixels(k,$,q,Y,bt.convert(ne),bt.convert(ae),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Be=z!==null?Z.get(z).__webglFramebuffer:null;v.bindFramebuffer(H.FRAMEBUFFER,Be);let Re=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await df(H,Re,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,xe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,At),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(xe),H.deleteSync(Re),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,$=0){let q=Math.pow(2,-$),Y=Math.floor(E.image.width*q),At=Math.floor(E.image.height*q),Pt=k!==null?k.x:0,Tt=k!==null?k.y:0;K.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,$,0,0,Pt,Tt,Y,At),v.unbindTexture()},this.copyTextureToTexture=function(E,k,$=null,q=null,Y=0,At=0){let Pt,Tt,Dt,Ot,ne,ae,Nt,xe,Be,Re=E.isCompressedTexture?E.mipmaps[At]:E.image;if($!==null)Pt=$.max.x-$.min.x,Tt=$.max.y-$.min.y,Dt=$.isBox3?$.max.z-$.min.z:1,Ot=$.min.x,ne=$.min.y,ae=$.isBox3?$.min.z:0;else{let Oe=Math.pow(2,-Y);Pt=Math.floor(Re.width*Oe),Tt=Math.floor(Re.height*Oe),E.isDataArrayTexture?Dt=Re.depth:E.isData3DTexture?Dt=Math.floor(Re.depth*Oe):Dt=1,Ot=0,ne=0,ae=0}q!==null?(Nt=q.x,xe=q.y,Be=q.z):(Nt=0,xe=0,Be=0);let be=bt.convert(k.format),Je=bt.convert(k.type),It;k.isData3DTexture?(K.setTexture3D(k,0),It=H.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(K.setTexture2DArray(k,0),It=H.TEXTURE_2D_ARRAY):(K.setTexture2D(k,0),It=H.TEXTURE_2D),v.activeTexture(H.TEXTURE0),v.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),v.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),v.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);let nn=v.getParameter(H.UNPACK_ROW_LENGTH),fe=v.getParameter(H.UNPACK_IMAGE_HEIGHT),vn=v.getParameter(H.UNPACK_SKIP_PIXELS),Hn=v.getParameter(H.UNPACK_SKIP_ROWS),ui=v.getParameter(H.UNPACK_SKIP_IMAGES);v.pixelStorei(H.UNPACK_ROW_LENGTH,Re.width),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Re.height),v.pixelStorei(H.UNPACK_SKIP_PIXELS,Ot),v.pixelStorei(H.UNPACK_SKIP_ROWS,ne),v.pixelStorei(H.UNPACK_SKIP_IMAGES,ae);let ns=E.isDataArrayTexture||E.isData3DTexture,ve=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Oe=Z.get(E),fi=Z.get(k),Te=Z.get(Oe.__renderTarget),di=Z.get(fi.__renderTarget);v.bindFramebuffer(H.READ_FRAMEBUFFER,Te.__webglFramebuffer),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let is=0;is<Dt;is++)ns&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,Y,ae+is),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,At,Be+is)),H.blitFramebuffer(Ot,ne,Pt,Tt,Nt,xe,Pt,Tt,H.DEPTH_BUFFER_BIT,H.NEAREST);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||Z.has(E)){let Oe=Z.get(E),fi=Z.get(k);v.bindFramebuffer(H.READ_FRAMEBUFFER,C),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,R);for(let Te=0;Te<Dt;Te++)ns?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.__webglTexture,Y,ae+Te):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Oe.__webglTexture,Y),ve?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fi.__webglTexture,At,Be+Te):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fi.__webglTexture,At),Y!==0?H.blitFramebuffer(Ot,ne,Pt,Tt,Nt,xe,Pt,Tt,H.COLOR_BUFFER_BIT,H.NEAREST):ve?H.copyTexSubImage3D(It,At,Nt,xe,Be+Te,Ot,ne,Pt,Tt):H.copyTexSubImage2D(It,At,Nt,xe,Ot,ne,Pt,Tt);v.bindFramebuffer(H.READ_FRAMEBUFFER,null),v.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(It,At,Nt,xe,Be,Pt,Tt,Dt,be,Je,Re.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(It,At,Nt,xe,Be,Pt,Tt,Dt,be,Re.data):H.texSubImage3D(It,At,Nt,xe,Be,Pt,Tt,Dt,be,Je,Re):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,At,Nt,xe,Pt,Tt,be,Je,Re.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,At,Nt,xe,Re.width,Re.height,be,Re.data):H.texSubImage2D(H.TEXTURE_2D,At,Nt,xe,Pt,Tt,be,Je,Re);v.pixelStorei(H.UNPACK_ROW_LENGTH,nn),v.pixelStorei(H.UNPACK_IMAGE_HEIGHT,fe),v.pixelStorei(H.UNPACK_SKIP_PIXELS,vn),v.pixelStorei(H.UNPACK_SKIP_ROWS,Hn),v.pixelStorei(H.UNPACK_SKIP_IMAGES,ui),At===0&&k.generateMipmaps&&H.generateMipmap(It),v.unbindTexture()},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&K.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?K.setTextureCube(E,0):E.isData3DTexture?K.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?K.setTexture2DArray(E,0):K.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){D=0,U=0,z=null,v.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var sa=class extends si{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new De;t.deleteAttribute("uv");let e=new Se({side:Ve}),n=new Se,i=new kr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new ot(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new wr(t,n,6),o=new He;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ot(t,Ks(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ot(t,Ks(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ot(t,Ks(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new ot(t,Ks(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new ot(t,Ks(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new ot(t,Ks(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ks(s){return new Or({color:0,emissive:16777215,emissiveIntensity:s})}var oi=[{id:0,name:"Bubbles",tag:"The Royal Bean",color:"#ff5fb4"},{id:1,name:"Ninja",tag:"The Silent Bean",color:"#3b82f6"},{id:2,name:"Dino",tag:"The Chunky Dino",color:"#3ddc84"},{id:3,name:"Robo",tag:"The Bolt Bot",color:"#ffc233"}],ra=[{id:0,key:"candy",name:"Candy Meadow",sub:"Easy",stars:1,limit:110,finishZ:-321.9,finishY:0,colors:["#ff7ab8","#7be8ff"],blurb:"Sweet hills, bouncy mushrooms, spinning bars"},{id:1,key:"canyon",name:"Sunset Canyon",sub:"Medium",stars:2,limit:130,finishZ:-314,finishY:5,colors:["#ff8a3d","#8b2fc9"],blurb:"Lava, hammers, conveyors and rolling balls"},{id:2,key:"frost",name:"Frozen Peak",sub:"Hard",stars:3,limit:150,finishZ:-332.7,finishY:10.5,colors:["#9fe3ff","#3b82f6"],blurb:"Slippery ice, snowballs, lifts and bounce pads"},{id:3,key:"neon",name:"Neon Space",sub:"Insane",stars:4,limit:170,finishZ:-412.5,finishY:5,colors:["#22f2ff","#ff2bd6"],blurb:"Vanishing tiles, giant fans and pistons in space"},{id:4,key:"fair",name:"Funfair Frenzy",sub:"Extreme",stars:5,limit:180,finishZ:-421.6,finishY:0,colors:["#ffd23f","#ff4d6d"],blurb:"Seesaws, bungee bounce, roller coaster and pitfalls"},{id:5,key:"fun",name:"Fun Map",sub:"Chill",stars:1,limit:300,finishZ:-304,finishY:.15,colors:["#80ed99","#4cc9f0"],blurb:"A giant theme park. Nothing can kill you! Play on every ride, then solve the maze to the final door"}];var aa=new B;function wn(s,t,e,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;aa.copy(t),aa[n]=0,aa.normalize();let c=.5*a/(a+o),h=1-aa.angleTo(s)/l;return Math.sign(aa[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Tl=class s extends De{constructor(t=1,e=1,n=1,i=2,r=.1){let a=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new B,c=new B,h=new B(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,_=new B,m=.5/a;for(let p=0,S=0;p<f.length;p+=3,S+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),d[S+0]=wn(_,c,"z","y",r,n),d[S+1]=1-wn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[S+0]=1-wn(_,c,"z","y",r,n),d[S+1]=1-wn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[S+0]=1-wn(_,c,"x","z",r,t),d[S+1]=wn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[S+0]=1-wn(_,c,"x","z",r,t),d[S+1]=1-wn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[S+0]=1-wn(_,c,"x","y",r,t),d[S+1]=1-wn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[S+0]=wn(_,c,"x","y",r,t),d[S+1]=1-wn(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};function Qf(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ae,c=0;for(let h=0;h<s.length;++h){let f=s[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<s.length;++u){let d=s[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=jf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][u]);let g=jf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function jf(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ee(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){let _=h.getComponent(u,g);o.setComponent(u+f,g,_)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}var ce={R:.42,H:1.55,STEP:.34,EDGE:.28,G:34,RUN:9.4,JUMP:12.2,ACC:70,AIR:22,DEC:95,AIR_DEC:9,ICE_ACC:11,ICE_DEC:5.5,TERM:-50,SNAP:.5},On=(s,t,e)=>s<t?t:s>e?e:s,td=new xn,ed=new gn,nd=new pe,id=new B,sd=new B,Ci=new Ut,Ki=class{constructor(){this.list=[]}add(t,e,n,i,r,a=0,o=0,l=0,c=1,h=1,f=1){td.set(a,o,l),ed.setFromEuler(td),id.set(e,n,i),sd.set(c,h,f),nd.compose(id,ed,sd);let u=t.index?t.toNonIndexed():t.clone();u.attributes.uv&&u.deleteAttribute("uv"),u.applyMatrix4(nd);let d=u.attributes.position.count,g=new Float32Array(d*3);Ci.set(r);for(let _=0;_<d;_++)g[_*3]=Ci.r,g[_*3+1]=Ci.g,g[_*3+2]=Ci.b;u.setAttribute("color",new Ee(g,3)),this.list.push(u)}addGeo(t){t.index&&(t=t.toNonIndexed()),t.attributes.uv&&t.deleteAttribute("uv"),this.list.push(t)}build(t){if(!this.list.length)return null;let e=Qf(this.list,!1);return this.list.length=0,new ot(e,t)}};var Al=class{constructor(t,e=!1){this.theme=t,this.headless=e,this.group=new le,this.solids=[],this.ramps=[],this.discs=[],this.hazards=[],this.updaters=[],this.checkpoints=[],this.zones=[],this.main=new Ki,this.glow=new Ki,this.waterY=-5,this.killY=-9,this.geoCache=new Map,this.matCache=new Map,this.colorIdx=0,this.arrowTexture=null,this.time=0,this.hitOut={nx:0,nz:1,pow:10},this.onEvent=null}rbox(t,e,n,i){let r=Math.max(.02,Math.min(i,t/2-.01,e/2-.01,n/2-.01)),a=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,o=this.geoCache.get(a);return o||(o=Math.min(t,e,n)<.35?new De(t,e,n):new Tl(t,e,n,2,r),this.geoCache.set(a,o)),o}mat(t,e={}){var r,a,o,l;let n=t+JSON.stringify(e),i=this.matCache.get(n);return i||(i=new Se({color:t,roughness:(r=e.rough)!=null?r:.38,metalness:(a=e.metal)!=null?a:.02,emissive:(o=e.emissive)!=null?o:0,emissiveIntensity:(l=e.ei)!=null?l:1}),this.matCache.set(n,i)),i}pick(){let t=this.theme.plat;return t[this.colorIdx++%t.length]}addSolid(t,e,n,i,r,a,o={}){let l={x0:t,y0:e,z0:n,x1:i,y1:r,z1:a,active:!0,ice:!!o.ice,conv:o.conv||null,bounce:o.bounce||0,boost:o.boost||0,dx:0,dy:0,dz:0,moving:!1,name:o.name||""};return this.solids.push(l),l}add(t,e=!0,n=!0){return t.castShadow=e,t.receiveShadow=n,this.group.add(t),t}emit(t,e){this.onEvent&&this.onEvent(t,e)}platform(t,e,n,i,r,a={}){var h,f,u;let o=(h=a.h)!=null?h:1.6,l=(f=a.color)!=null?f:this.pick(),c=this.addSolid(t-i/2,e-o,n-r/2,t+i/2,e,n+r/2,a);if(!this.headless){if(this.main.add(this.rbox(i,o,r,.3),t,e-o/2,n,l),a.pad!==!1&&i>2.4&&r>2.4){let d=(u=a.padColor)!=null?u:a.ice?this.theme.icePad:this.theme.pad;this.main.add(this.rbox(i-1.1,.12,r-1.1,.05),t,e+0,n,d)}if(this.theme.edgeGlow){let d=this.theme.edgeGlow;this.glow.add(this.rbox(i+.04,.12,.12,.03),t,e-.08,n+r/2,d),this.glow.add(this.rbox(i+.04,.12,.12,.03),t,e-.08,n-r/2,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t+i/2,e-.08,n,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t-i/2,e-.08,n,d)}}return c}disc(t,e,n,i,r={}){var f,u,d,g,_,m,p,S,w;let a=(f=r.omega)!=null?f:0,o=(u=r.h)!=null?u:1.4,l={cx:t,cz:n,top:e,r:i,th:o,omega:a,phase:(d=r.phase)!=null?d:0,bounce:r.bounce||0,push:r.push||null,ice:!!r.ice,theta:(g=r.phase)!=null?g:0,dTheta:0,kind:"disc",squash:0,first:!0};if(this.discs.push(l),this.headless)return l;if(r.bounce){let x=new le;x.position.set(t,e,n);let b=new ot(new te(i*.55,i*.7,1.4,20),this.mat((_=r.stem)!=null?_:"#fff3d6"));b.position.y=-.7;let T=new ot(new Ne(i,28,14,0,Math.PI*2,0,Math.PI/2),this.mat((m=r.color)!=null?m:"#ff3b6b",{rough:.25}));T.scale.y=.45,T.position.y=-.05,x.add(b,T);for(let L=0;L<6;L++){let y=new ot(new Ne(.26,10,8),this.mat("#ffffff")),A=L/6*Math.PI*2;y.position.set(Math.cos(A)*i*.62,.34*(1-.3),Math.sin(A)*i*.62),y.scale.y=.4,x.add(y)}return this.add(x),l.mesh=x,this.updaters.push((L,y)=>{l.squash=Math.max(0,l.squash-y*4);let A=1-Math.sin(l.squash*Math.PI)*.35*l.squash;x.scale.set(1+(1-A)*.5,A,1+(1-A)*.5)}),l}let c=(p=r.color)!=null?p:this.pick(),h=new te(i,i,o,40);if(a===0)this.main.add(h,t,e-o/2,n,c),this.main.add(new te(i-.5,i-.5,.12,40),t,e,n,(S=r.padColor)!=null?S:this.theme.pad),this.theme.edgeGlow&&this.glow.add(new ye(i,.07,6,48),t,e-.1,n,this.theme.edgeGlow,Math.PI/2);else{let x=new le;x.position.set(t,e,n);let b=new ot(h,this.mat(c));b.position.y=-o/2;let T=new ot(new te(i-.5,i-.5,.12,40),this.mat((w=r.padColor)!=null?w:this.theme.pad));x.add(b,T);for(let L=0;L<4;L++){let y=new ot(this.rbox(i*1.6,.14,.6,.05),this.mat(this.theme.hazard2));y.position.y=.06,y.rotation.y=L*Math.PI/4,x.add(y)}if(this.theme.edgeGlow){let L=new ot(new ye(i,.08,6,48),new Ue({color:this.theme.edgeGlow,toneMapped:!1}));L.rotation.x=Math.PI/2,L.position.y=-.1,x.add(L)}this.add(x),l.mesh=x,this.updaters.push(L=>{x.rotation.y=l.theta})}return l}ramp(t,e,n,i,r,a,o={}){var U,z;let l={x0:t-a/2,x1:t+a/2,zN:e,zF:i,yN:n,yF:r,conv:o.conv||null,ice:!!o.ice,kind:"ramp"};if(this.ramps.push(l),this.headless)return l;let c=Math.min(n,r)-1.6,h=(U=o.color)!=null?U:this.pick(),f=(O,V,W)=>[O,V,W],u=f(l.x0,n,e),d=f(l.x1,n,e),g=f(l.x1,r,i),_=f(l.x0,r,i),m=f(l.x0,c,e),p=f(l.x1,c,e),S=f(l.x1,c,i),w=f(l.x0,c,i),x=[],b=(O,V,W,lt)=>{x.push(...O,...V,...W,...O,...W,...lt)};b(u,_,g,d),b(u,d,p,m),b(g,_,w,S),b(_,u,m,w),b(d,g,S,p);let T=new Ae;T.setAttribute("position",new de(x,3)),T.computeVertexNormals();let L=x.length/3,y=new Float32Array(L*3);Ci.set(h);for(let O=0;O<L;O++)y[O*3]=Ci.r,y[O*3+1]=Ci.g,y[O*3+2]=Ci.b;T.setAttribute("color",new Ee(y,3)),this.main.addGeo(T);let A=e-i,P=r-n,F=Math.hypot(A,P),M=Math.atan2(P,A),I=(e+i)/2,C=(n+r)/2,R=-Math.sin(M),D=Math.cos(M);return this.main.add(this.rbox(a-1.6,.1,F-.6,.04),t,C+D*.02,I+R*.02*0,(z=o.padColor)!=null?z:o.ice?this.theme.icePad:this.theme.pad,M,0,0),l}mover(t,e,n,i,r,a,o={}){var _,m,p;let l=(_=o.h)!=null?_:1.5,c=this.addSolid(t-i/2,e-l,n-r/2,t+i/2,e,n+r/2,o);c.moving=!0,c.first=!0;let h=null;if(!this.headless){if(h=new ot(this.rbox(i,l,r,.28),this.mat((m=o.color)!=null?m:this.pick(),{rough:.3})),o.pad!==!1){let S=new ot(this.rbox(i-1,.12,r-1,.05),this.mat((p=o.padColor)!=null?p:this.theme.pad));S.position.y=l/2,h.add(S)}if(o.stripes){let S=new ot(this.rbox(i+.02,.4,r+.02,.05),this.mat(this.theme.hazard));S.position.y=0,h.add(S)}this.add(h)}let f=0,u=0,d=0,g=S=>{let[w,x,b]=a(S);c.x0=t-i/2+w,c.x1=t+i/2+w,c.y0=e-l+x,c.y1=e+x,c.z0=n-r/2+b,c.z1=n+r/2+b,c.first&&(f=w,u=x,d=b,c.first=!1),c.dx=w-f,c.dy=x-u,c.dz=b-d,f=w,u=x,d=b,h&&h.position.set(t+w,e-l/2+x,n+b)};return g(0),this.updaters.push(S=>g(S)),c}tile(t,e,n,i,r,a={}){var _,m,p,S,w,x;let o=(_=a.period)!=null?_:4.8,l=(m=a.solidT)!=null?m:2.4,c=(p=a.warn)!=null?p:.8,h=(S=a.off)!=null?S:0,f=this.addSolid(t-i/2,e-1,n-r/2,t+i/2,e,n+r/2,a),u=null,d=null;this.headless||(d=new Se({color:(w=a.color)!=null?w:this.pick(),roughness:.3,emissive:0}),u=new ot(this.rbox(i,1,r,.22),d),u.position.set(t,e-.5,n),this.add(u));let g=new Ut((x=a.color)!=null?x:"#ffffff");return this.updaters.push(b=>{let T=((b+h)%o+o)%o;T<l?(f.active=!0,u&&(u.visible=!0,u.position.x=t,d.emissive.setRGB(0,0,0))):T<l+c?(f.active=!0,u&&(u.visible=!0,u.position.x=t+Math.sin(b*70)*.07,d.emissive.setRGB(.55,.05,.02))):(f.active=!1,u&&(u.visible=!1))}),f}conveyor(t,e,n,i,r,a,o={}){let l=this.addSolid(t-i/2,e-1.4,n-r/2,t+i/2,e,n+r/2,{...o,conv:[0,a]});if(this.headless)return l;this.main.add(this.rbox(i,1.4,r,.25),t,e-.7,n,this.theme.convBase);let c=new cn(i-1.2,r-.6),h=this.arrowTexture?this.arrowTexture.clone():null;h&&(h.needsUpdate=!0,h.wrapS=h.wrapT=Es,h.repeat.set(Math.max(1,Math.round((i-1.2)/2.4)),Math.max(1,Math.round((r-.6)/2.4))));let f=new ot(c,new Se({color:this.theme.belt,map:h,roughness:.6}));f.rotation.x=-Math.PI/2,a>0&&(f.rotation.z=Math.PI),f.position.set(t,e+.03,n),this.add(f,!1,!0);let u=Math.abs(a);return this.updaters.push((d,g)=>{h&&(h.offset.y-=u*g/2.4/(r-.6)*h.repeat.y)}),l}bar(t,e,n,i,r={}){var S,w,x,b,T,L,y;let a=(S=r.w)!=null?S:1.2,o=(w=r.h)!=null?w:1.2,l=(x=r.omega)!=null?x:1.4,c=(b=r.phase)!=null?b:0,h=(T=r.arms)!=null?T:1,f={type:"bar",test:(A,P,F)=>{if(A.y>e+o||A.y+ce.H<e)return!1;let M=A.x-t,I=A.z-n;if(M*M+I*I>(i/2+1.2)*(i/2+1.2))return!1;let C=c+l*P;for(let R=0;R<h;R++){let D=C+R*Math.PI/h,U=Math.cos(D),z=Math.sin(D),O=M*U-I*z,V=M*z+I*U,W=On(O,-i/2,i/2),lt=On(V,-a/2,a/2),at=O-W,Ct=V-lt;if(at*at+Ct*Ct<ce.R*ce.R){let Vt=Math.hypot(M,I)||.001,Kt=l*I,J=-l*M,tt=Math.hypot(Kt,J)||1;Kt/=tt,J/=tt;let _t=Kt+M/Vt*.45,it=J+I/Vt*.45,et=Math.hypot(_t,it)||1;return F.nx=_t/et,F.nz=it/et,F.pow=On(6+Math.abs(l)*Vt*1.15,9,21),!0}}return!1}};if(this.hazards.push(f),this.headless)return f;let u=new le;u.position.set(t,e+o/2,n);let d=Math.max(3,Math.round(i/2.4)),g=i/d,_=this.mat((L=r.color1)!=null?L:this.theme.hazard,{rough:.3}),m=this.mat((y=r.color2)!=null?y:this.theme.hazard2,{rough:.3});for(let A=0;A<h;A++){let P=new le;P.rotation.y=A*Math.PI/h;for(let F=0;F<d;F++){let M=new ot(this.rbox(g*.995,o,a,.25),F%2?_:m);M.position.x=-i/2+g*(F+.5),M.castShadow=!0,P.add(M)}u.add(P)}let p=new ot(new te(a*.85,a,o+.7,16),this.mat(this.theme.hub));return p.castShadow=!0,u.add(p),this.add(u),this.updaters.push(A=>{u.rotation.y=c+l*A}),f}hammer(t,e,n,i,r={}){var p,S,w,x,b,T,L,y,A;let a=(p=r.amp)!=null?p:1.1,o=(S=r.omega)!=null?S:1.6,l=(w=r.phase)!=null?w:0,c=(x=r.r)!=null?x:1.3,h=(b=r.span)!=null?b:9,f={type:"hammer",test:(P,F,M)=>{let I=a*Math.sin(o*F+l),C=t+i*Math.sin(I),R=e-i*Math.cos(I),D=a*o*Math.cos(o*F+l),U=i*Math.cos(I)*D,z=On(R,P.y+.15,P.y+ce.H-.1),O=C-P.x,V=R-z,W=n-P.z,lt=ce.R+c;if(O*O+V*V+W*W<lt*lt){let at=-O,Ct=-W;at=(Math.sign(U)||Math.sign(at)||1)*1,Ct=Ct*.5;let Kt=Math.hypot(at,Ct);return M.nx=at/Kt,M.nz=Ct/Kt,M.pow=On(Math.abs(U)*1.05+6,10,23),!0}return!1}};if(this.hazards.push(f),this.headless)return f;let u=new le;u.position.set(t,e,n);let d=new ot(new te(.17,.17,i,10),this.mat(this.theme.hub));d.position.y=-i/2;let g=new ot(new Ne(c,28,18),this.mat(this.theme.hazard,{rough:.25}));g.position.y=-i;let _=new ot(new ye(c*.98,.12,8,28),this.mat(this.theme.hazard2));_.position.y=-i,_.rotation.x=Math.PI/2;let m=_.clone();if(m.rotation.set(0,Math.PI/2,0),u.add(d,g,_,m),u.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),this.add(u),this.updaters.push(P=>{u.rotation.z=a*Math.sin(o*P+l)}),!this.headless){let P=this.theme.hub;this.main.add(this.rbox(.9,e-((T=r.baseY)!=null?T:e-i-1.5)+1.2,.9,.2),t-h,(e+((L=r.baseY)!=null?L:e-i-1.5))/2-0,n,P),this.main.add(this.rbox(.9,e-((y=r.baseY)!=null?y:e-i-1.5)+1.2,.9,.2),t+h,(e+((A=r.baseY)!=null?A:e-i-1.5))/2-0,n,P),this.main.add(this.rbox(h*2+1,.8,.9,.2),t,e+.6,n,P)}return f}balls(t,e,n,i,r,a,o,l,c={}){let h=n-e,f=h/a,u=l.map(()=>({x:t,z:0,y:0,on:!1})),d=[],g=m=>new Ut(m%2?this.theme.hazard:this.theme.hazard2);this.headless||l.forEach((m,p)=>{let S=new Ne(r,32,20),w=S.attributes.position,x=w.count,b=new Float32Array(x*3);for(let L=0;L<x;L++){let y=Math.atan2(w.getZ(L),w.getX(L)),P=Math.floor((y+Math.PI)/(Math.PI*2)*8)%2?new Ut(this.theme.hazard):new Ut(this.theme.hazard2);b[L*3]=P.r,b[L*3+1]=P.g,b[L*3+2]=P.b}S.setAttribute("color",new Ee(b,3));let T=new ot(S,new Se({vertexColors:!0,roughness:.25}));T.visible=!1,this.add(T),d.push(T)});let _={type:"balls",test:(m,p,S)=>{for(let w=0;w<u.length;w++){let x=u[w];if(!x.on)continue;let b=On(x.y,m.y+.15,m.y+ce.H-.1),T=x.x-m.x,L=x.y-b,y=x.z-m.z,A=ce.R+r;if(T*T+L*L+y*y<A*A){let P=(m.x-x.x)*.8,F=1,M=Math.hypot(P,F);return S.nx=P/M,S.nz=F/M,S.pow=On(a*1.1+4,10,20),!0}}return!1}};return this.hazards.push(_),this.updaters.push(m=>{l.forEach((p,S)=>{let w=u[S],x=((m+p)%o+o)%o,b=x<f;w.on=b,b&&(w.z=e+x*a,w.y=i(w.z)+r,w.x=t);let T=d[S];T&&(T.visible=b,b&&(T.position.set(w.x,w.y,w.z),T.rotation.x=w.z/r))})}),_}seesaw(t,e,n,i,r,a,o,l=0){let c={x0:t-i/2,x1:t+i/2,zN:n+r/2,zF:n-r/2,yN:e,yF:e,conv:null,ice:!1,kind:"ramp",seesaw:!0};this.ramps.push(c);let h=g=>{let _=a*Math.sin(2*Math.PI*g/o+l);return c.yN=e+_,c.yF=e-_,_};if(h(0),this.headless)return this.updaters.push(g=>h(g)),c;this.main.add(new te(.5,1.1,2.4,8),t,e-1.4,n,this.theme.hub),this.main.add(this.rbox(i*.9,.7,1.4,.2),t,e-2.5,n,this.theme.hazard2);let f=new le;f.position.set(t,e-.25,n);let u=new ot(this.rbox(i,.5,r,.2),this.mat(this.pick(),{rough:.35})),d=new ot(this.rbox(i-1.2,.1,r-1.2,.04),this.mat(this.theme.pad));d.position.y=.27,f.add(u,d);for(let g of[-1,1]){let _=new ot(this.rbox(i,.62,1.2,.2),this.mat(this.theme.hazard,{rough:.3}));_.position.set(0,.03,g*(r/2-.6)),f.add(_)}for(let g of[-1,1]){let _=new ot(new te(.1,.1,1.1,8),this.mat(this.theme.hub));_.position.set(g*(i/2-.5),.9,0),f.add(_)}return this.add(f),this.updaters.push(g=>{let _=h(g);f.rotation.x=-Math.atan2(_,r/2)}),c}bungee(t,e,n,i,r,a){let o=this.disc(t,n,e,i,{bounce:r,color:this.theme.hazard});if(this.headless)return o;let l=a,c=14;for(let h=0;h<c;h++){let f=h/c*Math.PI*2,u=t+Math.cos(f)*(i*.92),d=e+Math.sin(f)*(i*.92);this.main.add(new te(.07,.07,l-n,5),u,(l+n)/2,d,h%2?"#ffffff":this.theme.hazard)}this.main.add(new ye(i*.92,.35,8,36),t,l,e,this.theme.accent,Math.PI/2),this.main.add(new ye(i*.92,.2,8,36),t,n+.15,e,"#ffffff",Math.PI/2);for(let h=0;h<3;h++){let f=Math.PI/2+h*Math.PI*2/3+.5,u=t+Math.cos(f)*(i+1.4),d=e+Math.sin(f)*(i+1.4);this.main.add(new te(.45,.6,l+12,8),u,(l-12)/2,d,h%2?"#ffd23f":"#ffffff")}return this.glow.add(new Ne(.9,12,8),t,l+1.6,e,"#ffffff"),o}tube(t,e,n){if(this.headless)return;let i=new B(0,1,0),r=new B,a=new B,o=new B,l=new gn,c=new xn;for(let h=0;h<t.length-1;h++){r.set(...t[h]),a.set(...t[h+1]),o.subVectors(a,r);let f=o.length();o.normalize(),l.setFromUnitVectors(i,o),c.setFromQuaternion(l),this.main.add(new te(e,e,f*1.02,6),(r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,n,c.x,c.y,c.z)}}airpad(t,e,n,i,r,a={}){var u,d;let o={x:t,z:e,r:n,y0:i,y1:i+r,lift:(u=a.lift)!=null?u:90,vmax:(d=a.vmax)!=null?d:9};if(this.zones.push(o),this.headless)return o;this.main.add(new te(n*.95,n,.5,28),t,i+.25,e,this.theme.hub),this.glow.add(new ye(n*.8,.14,8,36),t,i+.55,e,"#9cf0ff",Math.PI/2);let l=new Ue({color:"#8fe9ff",transparent:!0,opacity:.16,depthWrite:!1,side:hn,toneMapped:!1}),c=new ot(new te(n*.92,n*.92,r,24,1,!0),l);c.position.set(t,i+r/2,e),c.renderOrder=3,this.group.add(c);let h=new Ue({color:"#e6fbff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),f=[];for(let g=0;g<5;g++){let _=new ot(new ye(n*.85,.08,6,28),h);_.rotation.x=Math.PI/2,_.renderOrder=3,this.group.add(_),f.push(_)}return this.updaters.push(g=>{f.forEach((_,m)=>{let p=(g*.5+m/5)%1;_.position.set(t,i+.6+p*(r-.8),e),_.scale.setScalar(1-p*.25)})}),o}punch(t,e,n,i,r,a,o={}){var w,x;let l=(w=o.period)!=null?w:3.2,c=(x=o.off)!=null?x:0,h=1,f=Math.hypot(i,r)||1;i/=f,r/=f;let u=b=>{let T=((b+c)%l+l)%l/l,L=(y,A,P)=>{let F=Math.max(0,Math.min(1,(P-y)/(A-y)));return F*F*(3-2*F)};return a*(L(.5,.58,T)-L(.78,.95,T))},d={type:"punch",test:(b,T,L)=>{var D;let y=u(T);if(y<.4)return!1;let A=t+i*(y+.5),P=n+r*(y+.5),F=On(e,b.y+.15,b.y+ce.H-.1),M=A-b.x,I=e-F,C=P-b.z,R=ce.R+h;return M*M+I*I+C*C<R*R?(L.nx=i,L.nz=r,L.pow=(D=o.pow)!=null?D:15,!0):!1}};if(this.hazards.push(d),this.headless)return d;let g=new le;g.position.set(t,e,n),g.rotation.y=Math.atan2(i,r);let _=new ot(new te(.22,.22,1,8),this.mat(this.theme.hub));_.rotation.x=Math.PI/2;let m=new ot(new Ne(h,20,14),this.mat(this.theme.hazard,{rough:.3})),p=new ot(new te(.62,.62,.5,14),this.mat("#ffffff"));p.rotation.x=Math.PI/2,p.position.z=-.95;let S=new ot(new Ne(.42,12,10),this.mat(this.theme.hazard,{rough:.3}));return S.position.set(.7,.45,-.35),m.add(p,S),p.position.z=-.95,m.scale.set(1,1,1.1),g.add(_,m),g.traverse(b=>{b.isMesh&&(b.castShadow=!0)}),this.add(g,!1,!1),this.main.add(this.rbox(2.2,2.6,1.2,.3),t-i*.3,e,n-r*.3,this.theme.hub,0,Math.atan2(i,r),0),this.updaters.push(b=>{let T=u(b);_.scale.y=Math.max(.01,T+.2),_.position.z=(T+.2)/2,m.position.z=T+.5}),d}ferris(t,e,n,i,r,a){let o=f=>f*Math.PI*2/r;for(let f=0;f<r;f++)this.mover(t,e-i,n,5,5,u=>{let d=a*u+o(f);return[0,i*(1-Math.cos(d)),i*Math.sin(d)]},{h:.7,color:this.theme.plat[f%this.theme.plat.length],pad:!0});if(this.headless)return;let l=new le;l.position.set(t,e,n);let c=this.mat("#ffffff",{rough:.35});for(let f of[-1,1]){let u=new ot(new ye(i,.28,8,56),c);u.rotation.y=Math.PI/2,u.position.x=f*3.2,l.add(u)}for(let f=0;f<4;f++)for(let u of[-1,1]){let d=new ot(new te(.12,.12,i*2,6),this.mat(this.theme.hazard));d.rotation.x=f*Math.PI/4,d.position.x=u*3.2,l.add(d)}let h=new ot(new te(.9,.9,7.4,14),this.mat(this.theme.hub));h.rotation.z=Math.PI/2,l.add(h),this.add(l,!0,!1);for(let f of[-1,1])for(let u of[-1,1])this.main.add(this.rbox(.7,e+1,.7,.2),t+f*4.4,(e-1)/2,n+u*i*.55,this.theme.hub,0,0,0,1,1,1);this.updaters.push(f=>{l.rotation.x=-(a*f)})}pirate(t,e,n,i,r,a=.1){let o=a+n;if(this.mover(t,a,e,10,5,c=>{let h=i*Math.sin(2*Math.PI*c/r);return[0,n*(1-Math.cos(h)),n*Math.sin(h)]},{h:.9,color:this.theme.hazard,stripes:!0,pad:!0}),this.headless)return;for(let c of[-1,1])this.main.add(this.rbox(.8,o+2,.8,.2),t+c*6.2,(o+2)/2-.5,e+2.2,this.theme.hub,0,0,.12*c),this.main.add(this.rbox(.8,o+2,.8,.2),t+c*6.2,(o+2)/2-.5,e-2.2,this.theme.hub,0,0,.12*c);this.main.add(this.rbox(14.5,.9,.9,.2),t,o+.4,e,this.theme.accent);let l=new le;l.position.set(t,o,e);for(let c of[-1,1]){let h=new ot(new te(.16,.16,n,8),this.mat("#ffffff"));h.position.set(c*4.2,-n/2,0),l.add(h)}this.add(l,!0,!1),this.updaters.push(c=>{l.rotation.x=-i*Math.sin(2*Math.PI*c/r)})}dropTower(t,e,n,i=13){let r=a=>{let o=(a%i+i)%i;if(o<1)return 0;if(o<5.5){let l=(o-1)/4.5;return n*(l*l*(3-2*l))}if(o<8.5)return n;if(o<9.4){let l=(o-8.5)/.9;return n*(1-l*l)}return 0};if(this.mover(t,.1,e,6,6,a=>[0,r(a),0],{h:.9,color:this.theme.accent,stripes:!0,pad:!0}),!this.headless){for(let a of[-1,1])for(let o of[-1,1])this.main.add(this.rbox(.7,n+5,.7,.2),t+a*3.6,(n+5)/2-.5,e+o*3.6,"#ffffff");this.main.add(this.rbox(8.2,.8,8.2,.2),t,n+4.6,e,this.theme.hazard),this.glow.add(new Ne(.7,10,8),t,n+5.6,e,"#ffffff")}}orbit(t,e,n,i,r,a){for(let o=0;o<r;o++){let l=o*Math.PI*2/r;this.mover(t+n,i,e,4.4,4.4,c=>{let h=a*c+l;return[n*Math.cos(h)-n,.7*Math.sin(c*1.3+l),n*Math.sin(h)]},{h:.8,color:this.theme.plat[o%this.theme.plat.length],pad:!0})}this.headless||(this.main.add(new te(.7,.9,i+5,10),t,(i+5)/2-.4,e,this.theme.hub),this.main.add(new Qe(2.4,2.2,14),t,i+6,e,this.theme.hazard),this.glow.add(new ye(n,.12,6,48),t,i-.5,e,"#ffffff",Math.PI/2))}cannon(t,e,n,i){if(this.disc(t,0,e,2.4,{bounce:n,push:i,color:this.theme.hazard}),this.headless)return;let r=i[1]<0?-1:1;this.main.add(new te(1,1.35,5.5,14),t,2.4,e-r*2.8,this.theme.hub,r*.93,0,0),this.main.add(new ye(1.1,.2,8,18),t,4.4,e-r*.5,this.theme.accent,Math.PI/2-r*.64,0,0)}checkpoint(t,e,n,i=14){let r={x:t,y:e,z:n,w:i,spawn:[t,e,n+1]};return this.checkpoints.push(r),this.headless||this.arch(t,e,n,i,this.theme.accent,!0),r}arch(t,e,n,i,r,a=!1){let o=a?5.2:8.5;this.main.add(this.rbox(.9,o,.9,.25),t-i/2,e+o/2,n,r),this.main.add(this.rbox(.9,o,.9,.25),t+i/2,e+o/2,n,r),this.main.add(this.rbox(i+.9,a?.9:1.6,a?.9:1.4,.25),t,e+o,n,r),this.glow.add(new Ne(.42,12,8),t-i/2,e+o+.8,n,"#ffffff"),this.glow.add(new Ne(.42,12,8),t+i/2,e+o+.8,n,"#ffffff")}update(t,e){this.time=t;for(let n of this.updaters)n(t,e);for(let n of this.discs)if(n.omega){let i=n.phase+n.omega*t;n.dTheta=n.first?0:i-n.theta,n.theta=i,n.first=!1}}carry(t){let e=t.ground;if(e){if(e.moving)t.x+=e.dx,t.y+=e.dy,t.z+=e.dz;else if(e.kind==="disc"&&e.omega){let n=t.x-e.cx,i=t.z-e.cz,r=e.dTheta,a=Math.cos(r),o=Math.sin(r);t.x=e.cx+n*a+i*o,t.z=e.cz-n*o+i*a,t.yawOff=(t.yawOff||0)+r}}}checkHazards(t,e){for(let n of this.hazards)if(n.test(t,e,this.hitOut))return this.hitOut;return null}finalize(){if(this.headless)return;let t=this.main.build(new Se({vertexColors:!0,roughness:.4,metalness:.02}));t&&(t.castShadow=!0,t.receiveShadow=!0,this.group.add(t));let e=this.glow.build(new Ue({vertexColors:!0,toneMapped:!1}));e&&this.group.add(e)}resolveHorizontal(t){let e=ce.R,n=ce.H;for(let i of this.solids){if(!i.active||i.y1<=t.y+ce.STEP||i.y0>=t.y+n||t.x<i.x0-e||t.x>i.x1+e||t.z<i.z0-e||t.z>i.z1+e)continue;let r=On(t.x,i.x0,i.x1),a=On(t.z,i.z0,i.z1),o=t.x-r,l=t.z-a,c=o*o+l*l;if(c>=e*e)continue;let h,f;if(c>1e-9){let d=Math.sqrt(c),g=e-d;h=o/d,f=l/d,t.x+=h*g,t.z+=f*g}else{let d=t.x-i.x0,g=i.x1-t.x,_=t.z-i.z0,m=i.z1-t.z,p=Math.min(d,g,_,m);p===d?(t.x=i.x0-e,h=-1,f=0):p===g?(t.x=i.x1+e,h=1,f=0):p===_?(t.z=i.z0-e,h=0,f=-1):(t.z=i.z1+e,h=0,f=1)}let u=t.vx*h+t.vz*f;if(u<0&&(t.vx-=u*h,t.vz-=u*f),i.moving){let d=i.dx*h+i.dz*f;d>0&&(t.vx+=h*Math.min(d/.016,8)*.3,t.vz+=f*Math.min(d/.016,8)*.3)}}for(let i of this.discs){if(t.y+n<=i.top-i.th||t.y>=i.top-ce.STEP)continue;let r=t.x-i.cx,a=t.z-i.cz,o=Math.hypot(r,a),l=i.r+e;if(o<l&&o>1e-6){let c=r/o,h=a/o;t.x=i.cx+c*l,t.z=i.cz+h*l;let f=t.vx*c+t.vz*h;f<0&&(t.vx-=f*c,t.vz-=f*h)}}}findGround(t,e,n){let i=ce.EDGE,r=e+ce.STEP,a=n&&t.noSnap<=0?ce.SNAP:0,o=null,l=-1e9;for(let c of this.solids){if(!c.active)continue;let h=c.y1;h>r||h<=l||t.x<c.x0-i||t.x>c.x1+i||t.z<c.z0-i||t.z>c.z1+i||(t.y<=h+1e-4||t.y<=h+a)&&(o=c,l=h)}for(let c of this.ramps){if(t.x<c.x0-i||t.x>c.x1+i||t.z>c.zN+.3||t.z<c.zF-.3)continue;let h=On((c.zN-t.z)/(c.zN-c.zF),0,1),f=c.yN+(c.yF-c.yN)*h;f>r||f<l||(t.y<=f+1e-4||t.y<=f+a)&&(o=c,l=f)}for(let c of this.discs){let h=c.top;if(h>r||h<l)continue;let f=t.x-c.cx,u=t.z-c.cz,d=c.r+i*.8;f*f+u*u>d*d||(t.y<=h+1e-4||t.y<=h+a)&&(o=c,l=h)}return o?{s:o,top:l}:null}hitCeiling(t,e){for(let n of this.solids)if(n.active&&!(e+ce.H>n.y0+.02||t.y+ce.H<=n.y0)&&!(t.x<n.x0||t.x>n.x1||t.z<n.z0||t.z>n.z1))return n;return null}};var F_={candy:{plat:["#ff7ab8","#ffb347","#5ad6c4","#a78bfa","#ffd84d"],pad:"#fff6fc",icePad:"#e8fbff",hazard:"#ff3b6b",hazard2:"#ffffff",hub:"#6b4de6",accent:"#ffdc3a",convBase:"#7a56e8",belt:"#ffe8f4"},canyon:{plat:["#e0793a","#f2b05e","#c4503d","#b8452f","#f5c77e"],pad:"#ffe6c2",icePad:"#fff",hazard:"#4b2a9e",hazard2:"#ffd23f",hub:"#4a2a1c",accent:"#ffd23f",convBase:"#5a2d1e",belt:"#ffb35e"},frost:{plat:["#d6efff","#9fd6ff","#bfe9ff","#8ec5f5","#f4fbff"],pad:"#ffffff",icePad:"#f4fcff",hazard:"#ff4d6d",hazard2:"#ffffff",hub:"#2f5d9e",accent:"#ff8a5b",convBase:"#3a6db0",belt:"#cfe9ff"},fair:{plat:["#ff5d73","#ffd23f","#3ec6e0","#8bd450","#ff9f43"],pad:"#fff7e0",icePad:"#fff",edgeGlow:null,hazard:"#ff2d55",hazard2:"#fff6d6",hub:"#5b2a86",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},fun:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#6a3fa0",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},neon:{plat:["#2a1d6e","#3a1785","#1f2f7a","#4c1a7c","#2f2273"],pad:"#4a36b0",icePad:"#4a36b0",edgeGlow:"#22f2ff",hazard:"#ff2bd6",hazard2:"#22f2ff",hub:"#0e0a2e",accent:"#7cff3d",convBase:"#18104a",belt:"#3a2a9a"}},O_=["candy","canyon","frost","neon","fair","fun"],B_=(s,t,e)=>{let n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)};function rd(s,t=!1,e=null){let n=O_[s],i=F_[n],r=new Al(i,t);r.arrowTexture=e,r.key=n,r.waterY=s===5?-40:-5.5,r.killY=s===5?-60:-9.5;let a={z:0,y:0},o={key:n,spawn:{x:0,y:0,z:1.5},signs:[],pads:[]};function l(M,I,C={}){var V,W,lt;let R=a.z-((V=C.gap)!=null?V:0),D=R-I/2,U=a.y+((W=C.dy)!=null?W:0),z=(lt=C.x)!=null?lt:0,O=r.platform(z,U,D,M,I,C);return a.z=R-I,a.y=U,{s:O,x:z,cz:D,near:R,far:R-I,top:U,w:M,d:I}}function c(M,I=3.5){return r.checkpoint(M.x,M.top,M.near-I,Math.min(M.w,16))}let h=()=>{a.z=6,a.y=0;let M=l(18,22);return o.startArch=M.near-8,M};function f(M,I,C,R,D={}){let U;for(let z=0;z<M;z++)U=l(I,I,{gap:C,x:Math.sin(z*2.1+.6)*R,...D});return U}function u(M,I,C=12,R={}){let D=r.ramp(0,a.z,a.y,a.z-M,a.y+I,C,R);return a.z-=M,a.y+=I,D}function d(M,I,C,R,D,U){let z=M/(I+1);for(let O=0;O<I;O++){let V=a.z-z*(O+1),W=O*Math.PI;r.mover(0,a.y,V,C,R,lt=>[D*Math.sin(lt*2*Math.PI/U+W),0,0])}a.z-=M}function g(M,I,C,R,D,U){let z=M/(I+1);for(let O=0;O<I;O++){let V=a.z-z*(O+1),W=O*Math.PI*.9;r.mover(0,a.y,V,C,R,lt=>[0,D*(.5-.5*Math.cos(lt*2*Math.PI/U+W)),0],{stripes:!0})}a.z-=M}function _(M,I,C){for(let R=0;R<M;R++){let D=a.z-4.5-R*I;r.disc(R%2?2:-2,a.y,D,2.5,{bounce:C,color:R%2?i.hazard:i.accent})}a.z-=9+(M-1)*I}function m(M,I,C,R,D){for(let U=0;U<M;U++){let z=a.z-R-I;r.disc(0,a.y,z,I,{omega:C[U%C.length],phase:U*1.3}),D&&r.bar(0,a.y+.12,z,I*1.9,{omega:-D*(U%2?-1:1),h:1,w:1,phase:U}),a.z=z-I}}function p(M,I,C,R=0){let D=l(I,M*C+8,{gap:R});for(let U=0;U<M;U++){let z=D.near-7-U*C,O=3,V=I/O;for(let W=0;W<O;W++){let lt=U*1.7+W*2.1,at=3.4+W%2*.6;r.mover(D.x-I/2+V*(W+.5),D.top+3.4,z,V-.08,.9,Ct=>[0,2.9*B_(.35,.62,.5+.5*Math.sin(Ct*2*Math.PI/at+lt)),0],{h:3.4,stripes:!0,pad:!1,color:i.hazard2})}}return D}function S(M,I,C,R,D,U=0,z=1.5){let O=l(M,I,{gap:U});for(let V=0;V<C;V++)r.hammer(O.x,O.top+R+1.45,O.near-7-V*D,R,{amp:1.2,omega:z+.08*V,phase:V*1.9,span:M/2+.8,baseY:O.top,r:1.3});return O}function w(M,I,C,R=0){let D=l(M,I,{gap:R}),U=M/2;for(let z=0;z<C;z++){let O=D.near-7-z*((I-12)/Math.max(1,C-1)||8),V=5.5,W=U-V/2,lt=3.2+z%2*.5;r.mover(D.x-U+V/2,D.top+2.6,O,V,1.1,at=>[W*(.5-.5*Math.cos(at*2*Math.PI/lt+z))*2*(z%2,1),0,0],{h:2.6,stripes:!0,pad:!1,color:i.hazard2}),r.mover(D.x+U-V/2,D.top+2.6,O-3.2,V,1.1,at=>[-W*(.5-.5*Math.cos(at*2*Math.PI/(lt+.4)+z+1))*2,0,0],{h:2.6,stripes:!0,pad:!1,color:i.hazard2})}return D}function x(M,I,C,R=2.2,D=1.8){for(let U=0;U<M;U++){let z=a.z-R-C/2-U*(C+D);for(let O=0;O<I;O++){let V=(O-(I-1)/2)*(C+1.4);r.platform(V,a.y,z,C,C,{color:i.plat[(U+O)%i.plat.length]})}}a.z-=R+M*C+(M-1)*D}function b(M,I,C,R,D,U){let z=u(M,I,C),O=W=>z.yN+(z.yF-z.yN)*((z.zN-W)/(z.zN-z.zF));return[-C*.32,0,C*.32].forEach((W,lt)=>r.balls(W,z.zF,z.zN-2,O,U,R,D,[lt*D/3],{})),z}function T(M,I,C,R,D,U=1.4){let z=a.z-U,O=z-I/2,V=r.seesaw(0,a.y,O,M,I,C,R,D);return a.z=z-I,V}function L(M,I,C=0){a.z-=C,M.forEach((R,D)=>{let U=a.z-I/2-D*I;for(let z=0;z<R.length;z++)R[z]==="#"&&r.platform((z-(R.length-1)/2)*I,a.y,U,I,I,{color:i.plat[(D+z)%i.plat.length],pad:!0})}),a.z-=M.length*I}function y(M,I,C,R){r.bungee(0,a.z-I,a.y-C,5.5,R,a.y+15),a.z-=M}function A(M,I,C=0){let R=a.z-.9-3;[-4.7+C,4.7+C].forEach((U,z)=>{let O=z*Math.PI,V=at=>{let Ct=.5-.5*Math.cos(2*Math.PI*at/I+O);return[1.2*Math.sin(2*Math.PI*Ct),2.3*Math.sin(2*Math.PI*Ct),-M*Ct]};r.mover(U,a.y,R,6,6,at=>V(at),{h:1.3,stripes:!0,color:z?i.plat[2]:i.plat[0]});let W=[],lt=48;for(let at=0;at<=lt;at++){let Ct=at/lt,Vt=[U+1.2*Math.sin(2*Math.PI*Ct),2.3*Math.sin(2*Math.PI*Ct),-M*Ct];W.push([Vt[0],a.y-1.5+Vt[1],R+Vt[2]])}for(let at of[-2.2,2.2])r.tube(W.map(Ct=>[Ct[0]+at,Ct[1],Ct[2]]),.14,i.hazard);r.tube(W.map(at=>[at[0],at[1]-.3,at[2]]),.2,i.hub);for(let at=0;at<=lt;at+=4){let Ct=W[at];r.tube([[Ct[0],Ct[1]-.3,Ct[2]],[Ct[0],a.y-14,Ct[2]]],.22,i.hub)}}),a.z=R-M-3-.9}function P(){let M=l(22,34,{gap:0,color:i.plat[0]}),I=M.near-12;return r.arch(0,M.top,I,20,i.accent,!1),o.finishZ=I,o.finishY=M.top,o.finishPlat=M,M}if(s===0){h(),f(5,6,3,3.2);let M=l(16,10,{gap:3});c(M,3),M=l(18,34,{gap:2.5}),r.bar(M.x,M.top,M.near-10,18,{omega:1.3,h:1,w:1.1}),r.bar(M.x,M.top,M.near-24,18,{omega:-1.6,h:1,w:1.1,phase:1}),c(M,3.5),u(14,3,12),M=l(14,10),c(M,3),d(20,2,6.2,6.2,5,5.2),M=l(14,10),c(M,3),_(3,9,16.5),M=l(14,10),c(M,3),m(3,5,[.9,-1,1.1],2.6),M=l(16,10,{gap:2.6}),c(M,3),M=p(3,18,11,1),u(16,-3,12),P()}else if(s===1){h(),f(3,7,3,2.6);let M=l(18,10,{gap:3});c(M,3),M=S(18,36,3,8,11,2.5,1.5),M=l(14,8,{gap:3}),c(M,3),M=r.conveyor(0,a.y,a.z-15,14,30,5),r.bar(0,a.y,a.z-10,14,{omega:1.5,h:1}),r.bar(0,a.y,a.z-23,14,{omega:-1.8,h:1,phase:2}),a.z-=30,M=l(14,8),c(M,3),x(6,3,4.6),M=l(14,8,{gap:2.2}),c(M,3),b(40,5,14,11,6,1.5),M=l(22,28),r.bar(M.x,M.top,M.near-14,22,{omega:1.05,arms:2,h:1.1}),c(M,3),M=w(16,36,3,2.5),P()}else if(s===2){h();let M=l(10,40,{gap:2.5,ice:!0});r.bar(M.x,M.top,M.near-14,10,{omega:.9,h:.95,w:1}),r.bar(M.x,M.top,M.near-28,10,{omega:-1.1,h:.95,w:1,phase:1.5}),f(4,6.5,3.2,2.5,{ice:!0}),M=l(16,10,{gap:3.2,ice:!0}),c(M,3),m(3,6,[.8,-1,1.2],2.8,1.9),M=l(18,10,{gap:2.8}),c(M,3),b(36,6,14,12,5.4,1.4),M=l(16,10),c(M,3),g(18,2,6.2,6.2,3.2,4.4),M=l(14,10),c(M,3),r.disc(0,a.y,a.z-4,3,{bounce:22,color:i.hazard}),M=l(16,12,{gap:11,dy:4.5}),c(M,3),M=l(12,24,{ice:!0}),r.bar(M.x,M.top,M.near-12,12,{omega:1.4,h:1}),M=l(22,32,{ice:!0}),r.bar(M.x,M.top,M.near-16,22,{omega:-1.25,arms:2,h:1.1}),P()}else if(s===4){h();let M;for(let I=0;I<3;I++)T(9,12,1.4,3.4+I*.5,I*2.1),M=l(12,6,{gap:1.4});c(M,3),L(["#####","#.#.#","##.##",".#.#.",".##..","..#.#",".###.","#####"],3.2,1.2),r.checkpoint(0,a.y,a.z+1.6,14),u(30,8,12),M=l(12,12),c(M,3),y(20,9,9,32),M=l(16,14),c(M,3),u(30,-8,12),M=l(16,8),c(M,3),A(44,12),M=l(16,10),c(M,3),x(5,3,4.6,2.2,1.7),M=l(14,8,{gap:2.2}),c(M,3),m(3,6,[.9,-1.1,1],2.6,1.6),M=l(16,10,{gap:2.6}),c(M,3),M=l(22,30),r.bar(M.x,M.top,M.near-15,22,{omega:1.2,arms:2,h:1.1}),P()}else if(s===5){o.startArch=-2,a.z=-16,a.y=0,r.platform(0,0,-330/2,92,350,{h:2,color:"#92e66c",pad:!1});for(let it=4,et=0;it>-346;it-=14,et++)for(let Lt of[-1,1])r.platform(Lt*(92/2+1),22,it-7,2,14,{h:22,color:i.plat[(et+(Lt>0?2:0))%i.plat.length],pad:!1});r.platform(0,22,11,96,2,{h:22,color:i.plat[1],pad:!1}),r.platform(0,22,-341,96,2,{h:22,color:i.plat[3],pad:!1}),r.headless||r.main.add(r.rbox(12,.03,232,.01),0,.02,-128,"#f8ebb8");let C=it=>r.platform(0,.04,it,8,14,{boost:1,color:"#ffd23f",pad:!1,h:.5});r.checkpoint(0,0,-70,16),C(-30),C(-52),[[-16,-26,3.2,20,0],[-22,-36,3.2,24,1],[-14,-46,3.4,28,2],[16,-28,3.2,22,3],[22,-38,3.4,26,4]].forEach(([it,et,Lt,jt,Q])=>r.disc(it,0,et,Lt,{bounce:jt,color:i.plat[Q]})),r.platform(31,9,-52,12,12,{color:i.plat[1]}),r.disc(20,0,-50,3.4,{bounce:29,color:i.hazard}),r.airpad(-26,-62,3.6,0,15),r.platform(-34,13,-62,8,8,{color:i.plat[2]}),r.orbit(-32,-18,6,1.6,3,.8),r.cannon(22,-14,16,[0,-17]),r.pirate(28,-70,16,.55,6.5),r.dropTower(-32,-82,14,13),r.checkpoint(0,0,-72,16),r.ramp(-14,-72,0,-98,10,8,{color:i.plat[3]}),r.platform(-28,10,-104,30,12,{color:i.plat[1]}),r.punch(-44,11.2,-104,1,0,8,{off:0}),r.punch(-12.2,11.2,-104,-1,0,8,{off:1.6}),[-38,-28,-18].forEach((it,et)=>r.ramp(it,-110,10,-152,0,7,{conv:[0,-14],ice:!0,color:i.plat[et*2%5],padColor:"#ffffff"})),r.platform(26,1.2,-90,14,14,{color:i.plat[4]}),r.punch(17.2,2.4,-90,1,0,7,{off:0}),r.punch(34.8,2.4,-90,-1,0,7,{off:1.6}),r.punch(26,2.4,-98.8,0,1,7,{off:.8}),r.punch(26,2.4,-81.2,0,-1,7,{off:2.4});for(let it=0;it<3;it++)r.seesaw(26,2,-112-it*16,9,12,1.4,3.4+it*.4,it*2.1);C(-118),r.checkpoint(0,0,-150,16),r.ramp(-30,-156,0,-182,8,10,{color:i.plat[2]}),r.platform(-30,8,-188,12,12,{color:i.plat[0]}),r.bungee(-30,-203,0,5.5,30,15),r.ferris(-30,11,-224,9,6,.4),r.ramp(26,-156,0,-164,3,14,{color:i.plat[3]}),a.z=-164,a.y=3,l(16,8,{x:26}),A(36,11,26),l(16,8,{x:26}),r.ramp(26,a.z,3,a.z-8,0,14,{color:i.plat[3]}),r.disc(0,.3,-180,8.5,{omega:.7,color:i.plat[0]}),r.headless||(r.main.add(new te(.5,.5,9,10),0,4.8,-180,"#ffffff"),r.main.add(new Qe(10,3.2,20),0,10.4,-180,i.hazard)),[-160,-172,-184].forEach((it,et)=>{r.disc(-14,.3,it,3.5,{omega:et%2?1.5:-1.5,color:i.plat[(et+1)%5]}),r.bar(-14,.4,it,6.4,{omega:et%2?-1.1:1.1,h:.9,w:.9})}),r.checkpoint(0,0,-232,16);let R=8,D=7,U=1.2,z=6,O=-236,V=20261017,W=()=>(V=V*1664525+1013904223>>>0,V/4294967296),lt=Array.from({length:D},()=>Array(D+1).fill(!0)),at=Array.from({length:D+1},()=>Array(D).fill(!0)),Ct=Array.from({length:D},()=>Array(D).fill(!1)),Vt=[[0,3]];for(Ct[0][3]=!0;Vt.length;){let[it,et]=Vt[Vt.length-1],Lt=[];if(it+1<D&&!Ct[it+1][et]&&Lt.push([it+1,et]),it-1>=0&&!Ct[it-1][et]&&Lt.push([it-1,et]),et-1>=0&&!Ct[it][et-1]&&Lt.push([it,et-1]),et+1<D&&!Ct[it][et+1]&&Lt.push([it,et+1]),!Lt.length){Vt.pop();continue}let[jt,Q]=Lt[Math.floor(W()*Lt.length)];jt===it+1?at[it+1][et]=!1:jt===it-1?at[it][et]=!1:Q===et-1?lt[it][et]=!1:lt[it][et+1]=!1,Ct[jt][Q]=!0,Vt.push([jt,Q])}at[0][3]=!1,at[D][3]=!1;let Kt=["#3fae4a","#58c25c","#2f9a44"];for(let it=0;it<D;it++)for(let et=0;et<=D;et++)lt[it][et]&&r.platform((et-D/2)*R,z,O-(it+.5)*R,U,R+U,{h:z,color:Kt[(it+et)%3],pad:!1});for(let it=0;it<=D;it++)for(let et=0;et<D;et++)at[it][et]&&r.platform((et+.5-D/2)*R,z,O-it*R,R+U,U,{h:z,color:Kt[(it+et+1)%3],pad:!1});let J=new Map,tt=[[0,3]];for(J.set("0,3",null);tt.length;){let[it,et]=tt.shift(),Lt=[[it+1,et,at[it+1][et]],[it-1,et,it>0?at[it][et]:!0],[it,et-1,lt[it][et]],[it,et+1,lt[it][et+1]]];for(let[jt,Q,ft]of Lt)!ft&&jt>=0&&jt<D&&Q>=0&&Q<D&&!J.has(jt+","+Q)&&(J.set(jt+","+Q,[it,et]),tt.push([jt,Q]))}let _t=[];for(let it=[D-1,3];it;it=J.get(it[0]+","+it[1]))_t.unshift([(it[1]+.5-D/2)*R,O-(it[0]+.5)*R]);o.mazePath=_t,r.checkpoint(0,0,O+2,16),a.z=O-D*R,a.y=.15,P()}else{h();for(let I=0;I<4;I++)l(2.8,12,{gap:3.3,x:I%2?2.6:-2.6});let M=l(18,12,{gap:3.3});c(M,3),x(6,3,4.4,2.2,1.9),M=l(16,10,{gap:2.2}),c(M,3),m(3,6.5,[1,-1.2,1.4],2.8,1.7),M=l(16,10,{gap:2.8}),c(M,3),M=r.conveyor(0,a.y,a.z-17,14,34,6),r.hammer(0,a.y+8.5,a.z-10,7,{amp:1.2,omega:1.7,phase:0,span:8,baseY:a.y,r:1.2}),r.hammer(0,a.y+8.5,a.z-24,7,{amp:1.2,omega:1.7,phase:2.2,span:8,baseY:a.y,r:1.2}),a.z-=34,M=l(16,10),c(M,3),M=w(18,38,3,0),c(M,3),d(18,2,6,6,5.5,4.4),M=l(14,8),c(M,3),g(20,2,6,6,3.4,4),M=l(14,10),c(M,3),r.disc(0,a.y,a.z-4,3,{bounce:24,color:i.hazard}),M=l(16,12,{gap:11.5,dy:5}),c(M,3),M=l(22,36),r.bar(M.x,M.top,M.near-18,22,{omega:1.25,arms:3,h:1.15}),P()}r.finalize();let F=o.finishPlat;return o.length=-o.finishZ,o.checkpoints=r.checkpoints,o.endZ=F.far,{world:r,info:o}}function ad(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!1,ground:null,coyote:0,jumpBuf:0,stun:0,dive:0,diveCd:0,noSnap:0,hitCd:0,boost:0,jumping:!1,noCtrl:0,landSpeed:0,inWater:!1,events:[],moveT:0,yawOff:0}}var z_=(s,t)=>{let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function Rl(s,t,e,n){let i=t-s.vx,r=e-s.vz,a=Math.hypot(i,r);a<=n||a<1e-6?(s.vx=t,s.vz=e):(s.vx+=i/a*n,s.vz+=r/a*n)}function od(s,t,e,n){t.coyote=t.grounded?.11:t.coyote-e,t.jumpBuf=n.jumpPressed?.13:t.jumpBuf-e,t.stun>0&&(t.stun=Math.max(0,t.stun-e)),t.dive>0&&(t.dive=Math.max(0,t.dive-e)),t.diveCd>0&&(t.diveCd-=e),t.noSnap>0&&(t.noSnap-=e),t.hitCd>0&&(t.hitCd-=e),t.boost>0&&(t.boost-=e),t.noCtrl>0&&(t.noCtrl-=e);let i=t.stun<=0&&t.dive<=0&&t.noCtrl<=0,r=t.ground&&t.ground.ice,a=Math.abs(n.mx)+Math.abs(n.mz)>.01;if(n.divePressed&&t.diveCd<=0&&t.stun<=0&&t.dive<=0){let c=Math.sin(t.yaw),h=Math.cos(t.yaw);t.vx=c*15.5,t.vz=h*15.5,t.vy=t.grounded?7:Math.max(t.vy,3.5),t.grounded=!1,t.ground=null,t.noSnap=.2,t.dive=.85,t.diveCd=1.1,t.events.push("dive")}if(i){let c=ce.RUN*(t.boost>0?1.45:1)*(t.speedMul||1);if(a){let h=t.grounded?r?ce.ICE_ACC:ce.ACC:ce.AIR;Rl(t,n.mx*c,n.mz*c,h*e);let f=Math.atan2(n.mx,n.mz);t.yaw+=z_(t.yaw,f)*(1-Math.exp(-20*e))}else t.grounded?Rl(t,0,0,(r?ce.ICE_DEC:ce.DEC)*e):Rl(t,0,0,ce.AIR_DEC*e)}else{let c=t.grounded?r?1.2:9:.6;Rl(t,0,0,c*e)}t.jumpBuf>0&&(t.grounded||t.coyote>0)&&t.stun<=0&&t.dive<=.45&&(t.vy=ce.JUMP*(t.jumpMul||1),t.grounded=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.noSnap=.2,t.jumping=!0,t.events.push("jump")),t.jumping&&!n.jumpHeld&&t.vy>6&&(t.vy-=55*e),t.vy=Math.max(ce.TERM,t.vy-ce.G*e*(t.dive>0&&!t.grounded?.8:1));for(let c of s.zones){let h=t.x-c.x,f=t.z-c.z;if(h*h+f*f<c.r*c.r&&t.y>c.y0-.3&&t.y<c.y1){let u=Math.max(0,(t.y-c.y0)/(c.y1-c.y0)),d=c.vmax*(1-u*u);t.vy<d&&(t.vy=Math.min(d,t.vy+c.lift*e)),t.noSnap=Math.max(t.noSnap,.12),t.air||(t.air=!0,t.events.push("air"))}else t.air=!1}if(t.grounded&&t.ground){let c=t.ground.conv;c&&(t.x+=c[0]*e,t.z+=c[1]*e),t.ground.boost&&(t.boost=.55)}let o=t.grounded,l=t.y;if(t.x+=t.vx*e,t.z+=t.vz*e,s.resolveHorizontal(t),s.resolveHorizontal(t),t.y+=t.vy*e,t.grounded=!1,t.ground=null,t.vy<=0){let c=s.findGround(t,l,o);if(c){let h=-t.vy;t.y=c.top,t.vy=0,t.grounded=!0,t.ground=c.s,t.jumping=!1,c.s.bounce?(t.vy=c.s.bounce,t.grounded=!1,t.ground=null,t.noSnap=.25,t.jumping=!1,c.s.push&&(t.vx=c.s.push[0],t.vz=c.s.push[1],t.noCtrl=.9),c.s.squash!==void 0&&(c.s.squash=1),t.events.push("bounce")):!o&&h>6&&(t.landSpeed=h,t.events.push("land"))}}else{let c=s.hitCeiling(t,l);c&&(t.y=c.y0-ce.H,t.vy=Math.min(0,t.vy*.2))}return t.y<s.waterY-.2&&!t.inWater&&(t.inWater=!0,t.events.push("splash")),t.y<s.killY&&t.events.push("fell"),t}function Cl(s,t,e,n){return s.hitCd>0||s.shield>0?!1:(s.vx=t*n,s.vz=e*n,s.vy=Math.max(s.vy,6.5),s.grounded=!1,s.ground=null,s.noSnap=.25,s.stun=.95,s.dive=0,s.hitCd=.5,s.events.push("hit"),!0)}function bh(s,t,e,n,i){s.x=t,s.y=e,s.z=n,s.vx=s.vy=s.vz=0,s.grounded=!1,s.ground=null,s.stun=0,s.dive=0,s.inWater=!1,s.hitCd=1,s.yaw=i!=null?i:Math.PI,s.noSnap=0,s.boost=0}var H_=(s,t,e)=>s<t?t:s>e?e:s,an=(s,t={})=>{var e,n,i;return new Fr({color:s,roughness:(e=t.r)!=null?e:.3,clearcoat:(n=t.cc)!=null?n:.65,clearcoatRoughness:.25,metalness:(i=t.m)!=null?i:0})},Fe=(s,t=.55)=>new Se({color:s,roughness:t}),Eh=(s,t,e)=>{let n=new ot(new Ns(s,t,6,16),e);return n.castShadow=!0,n},en=(s,t,e=16,n=12)=>{let i=new ot(new Ne(s,e,n),t);return i.castShadow=!0,i},hd=Fe("#ffffff",.25),ud=Fe("#101018",.4);function wh(s,t,e,n,i,r=.55){for(let a of[-1,1]){let o=en(i,hd);o.position.set(a*n,t,e);let l=en(i*r,ud);l.position.set(0,0,i*.62),o.add(l),s.add(o)}}function ld(s,t){let e=new Fs;for(let n=0;n<10;n++){let i=-Math.PI/2+n*Math.PI/5,r=n%2?t:s,a=Math.cos(i)*r,o=Math.sin(i)*r;n?e.lineTo(a,o):e.moveTo(a,o)}return e.closePath(),e}var cd=[{name:"Bubbles",pivotY:.85},{name:"Ninja",pivotY:.95},{name:"Dino",pivotY:.8},{name:"Robo",pivotY:.9}],ji=class{constructor(t){this.id=t,this.group=new le,this.pivot=new le,this.inner=new le,this.group.add(this.pivot),this.pivot.add(this.inner),this.pivot.position.y=cd[t].pivotY,this.inner.position.y=-cd[t].pivotY,this.body=new le,this.inner.add(this.body),this.t=Math.random()*10,this.phase=0,this.squash=0,this.tumble=0,this.lean=0,this.dive=0,this.wag=[],this.height=1.7,[this.buildBubbles,this.buildNinja,this.buildDino,this.buildRobo][t].call(this),this.makeBat(),this.makeExtras(),this.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}limbs(t,e,n,i,r,a,o,l,c,h,f,u){let d=(g,_,m,p,S,w)=>{let x=new le;x.position.set(g,_,0);let b=Eh(m,p,S);if(b.position.y=-p/2-m*.6,x.add(b),w){let T=w();x.add(T)}return this.inner.add(x),x};this.legL=d(-t,e,n,i,r,u?()=>{let g=en(n*1.35,u);return g.scale.set(1,.6,1.5),g.position.set(0,-i-n*.55,n*.7),g}:null),this.legR=d(t,e,n,i,r,u?()=>{let g=en(n*1.35,u);return g.scale.set(1,.6,1.5),g.position.set(0,-i-n*.55,n*.7),g}:null),this.armL=d(-a,o,l,c,h,f?()=>{let g=en(l*1.45,f);return g.position.y=-c-l*.9,g}:null),this.armR=d(a,o,l,c,h,f?()=>{let g=en(l*1.45,f);return g.position.y=-c-l*.9,g}:null),this.handY=-c-l*.9}makeExtras(){let t=this.height,e=new ot(new Ne(t*.64,22,14),new Ue({color:"#7fd8ff",transparent:!0,opacity:.3,depthWrite:!1}));e.position.y=t*.52,e.visible=!1,this.group.add(e),this.shield=e;let n=an("#ffd23f",{m:.6,r:.25}),i=new le,r=new ot(new te(.2,.17,.12,5),n);i.add(r);for(let a=0;a<5;a++){let o=a/5*Math.PI*2,l=new ot(new Qe(.06,.2,6),n);l.position.set(Math.cos(o)*.17,.15,Math.sin(o)*.17),i.add(l)}i.position.y=t+.22,i.scale.setScalar(1.15),i.visible=!1,this.group.add(i),this.leadCrown=i}makeBat(){let t=an("#d9a15a",{r:.45,cc:.3}),e=Fe("#3a2412",.7),n=Fe("#ff3b3b",.5),i=new le,r=new ot(new te(.035,.045,.5,10),e);r.position.y=-.18,i.add(r);let a=new ot(new te(.05,.125,.8,14),t);a.position.y=-.7,i.add(a);let o=new ot(new Ne(.125,12,8),t);o.scale.y=.5,o.position.y=-1.1,i.add(o);let l=new ot(new ye(.075,.018,6,16),n);l.rotation.x=Math.PI/2,l.position.y=-.52,i.add(l);let c=new ot(new Ne(.06,8,6),e);c.position.y=.07,i.add(c),i.position.set(0,this.handY,.02),i.visible=!1,i.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.armR.add(i),this.bat=i}buildBubbles(){let t=an("#ff5fb4"),e=an("#d63a8d"),n=Eh(.47,.34,t);n.position.y=.3+.64,this.body.add(n),this.limbs(.2,.42,.13,.12,t,.5,.95,.11,.22,t,Fe("#ffffff",.3),Fe("#7a2cff",.4)),wh(this.body,1.2,.4,.17,.13);for(let o of[-1,1]){let l=en(.07,Fe("#ff8fcf"));l.scale.set(1.4,.8,.5),l.position.set(o*.3,1.04,.4),this.body.add(l)}let i=new ot(new Bs(ld(.17,.075),{depth:.04,bevelEnabled:!1}),an("#ffd23f",{m:.3}));i.position.set(0,.8,.455),this.body.add(i);let r=new le;r.position.set(0,1.55,.02);let a=new ot(new te(.27,.3,.16,20),an("#ffd23f",{m:.55,r:.2}));r.add(a);for(let o=0;o<5;o++){let l=o/5*Math.PI*2,c=new ot(new Qe(.065,.22,8),an("#ffd23f",{m:.55,r:.2}));c.position.set(Math.cos(l)*.23,.18,Math.sin(l)*.23),r.add(c);let h=en(.04,Fe(o%2?"#35e0ff":"#ff3b6b",.2));h.position.set(Math.cos(l)*.23,.3,Math.sin(l)*.23),r.add(h)}this.body.add(r),this.crown=r,this.height=1.95}buildNinja(){let t=an("#2f6bff"),e=an("#14224f",{cc:.3}),n=Eh(.36,.76,t);n.position.y=.34+.74,this.body.add(n),this.limbs(.15,.55,.11,.3,e,.42,1.28,.09,.3,t,Fe("#14224f"),Fe("#0a0a14"));let i=new ot(new te(.372,.372,.22,24,1,!0),Fe("#0b0b17",.5));i.position.y=1.5,this.body.add(i);let r=new ot(new Ne(.372,24,8,0,Math.PI*2,0,Math.PI/2),Fe("#0b0b17",.5));r.scale.set(1,.96,1),r.position.y=1.46,this.body.add(r),wh(this.body,1.5,.3,.14,.1,.65);let a=new ot(new ye(.31,.05,8,28),Fe("#ff2b4a",.4));a.rotation.x=Math.PI/2,a.position.y=1.64,this.body.add(a),this.tails=[];for(let h=0;h<2;h++){let f=new le;f.position.set(h?.06:-.06,1.64,-.3);let u=new ot(new De(.1,.05,.6),Fe("#ff2b4a",.4));u.position.z=-.3,f.add(u),this.body.add(f),this.tails.push(f)}let o=new ot(new ye(.37,.05,8,28),Fe("#ffd23f",.4));o.rotation.x=Math.PI/2,o.position.y=.95,this.body.add(o);let l=new ot(new ye(.31,.07,8,24),Fe("#ffffff",.5));l.rotation.x=Math.PI/2,l.position.y=1.28,this.body.add(l);let c=new ot(new Bs(ld(.13,.04),{depth:.03,bevelEnabled:!1}),an("#d8e2ff",{m:.8,r:.2}));c.scale.set(1,1,1),c.position.set(0,.7,.34),this.body.add(c),this.height=1.95}buildDino(){let t=an("#3ddc84"),e=an("#c8ffd9"),n=an("#ff9f1c"),i=en(.58,t,28,20);i.scale.set(1,1.08,.98),i.position.y=.3+.62,this.body.add(i);let r=en(.45,e,22,16);r.scale.set(.85,.95,.5),r.position.set(0,.85,.36),this.body.add(r),this.limbs(.24,.42,.15,.1,t,.52,.85,.09,.12,t,null,Fe("#1f9d5b"));for(let c of[this.legL,this.legR])for(let h=-1;h<=1;h++){let f=new ot(new Qe(.035,.12,6),hd);f.rotation.x=Math.PI/2,f.position.set(h*.07,-.22,.36),c.add(f)}let a=en(.3,t,18,12);a.scale.set(1,.7,.9),a.position.set(0,1,.5),this.body.add(a);for(let c of[-1,1]){let h=en(.03,ud,8,6);h.position.set(c*.08,1.08,.76),this.body.add(h)}wh(this.body,1.42,.34,.22,.17,.5);for(let c of[-1,1]){let h=new ot(new Qe(.06,.2,8),Fe("#fff1c2",.4));h.position.set(c*.2,1.68,.18),h.rotation.z=-c*.25,this.body.add(h)}[.62,.8,1,1.2,1.38].forEach((c,h)=>{let f=[.13,.18,.21,.18,.13][h],u=new ot(new Qe(f*.75,f*2,8),n),d=-Math.sqrt(Math.max(.02,.58*.58-(c-.92)*(c-.92)/1.17))-.02;u.position.set(0,c,d),u.rotation.x=-(1.15-h*.2),this.body.add(u)}),this.tail=new le,this.tail.position.set(0,.55,-.45);let o=new ot(new Qe(.22,.9,12),t);o.rotation.x=-Math.PI/2-.4,o.position.set(0,0,-.4),this.tail.add(o);let l=en(.07,n);l.position.set(0,-.2,-.78),this.tail.add(l),this.body.add(this.tail),this.height=1.85}buildRobo(){let t=an("#ffc233"),e=an("#b4bdcc",{m:.7,r:.25}),n=Fe("#1c2233",.4),i=new Ue({color:"#4ff3ff"}),r=new ot(new Ns(.46,.4,6,16),t);r.scale.set(1,1,.92),r.position.y=.98,r.castShadow=!0,this.body.add(r);let a=new ot(new De(.64,.3,.12),n);a.position.set(0,1.28,.4),a.rotation.x=-.12,this.body.add(a);for(let f of[-1,1]){let u=en(.075,i,10,8);u.scale.set(1,1.15,.5),u.position.set(f*.16,1.29,.47),this.body.add(u)}let o=new ot(new De(.26,.05,.05),n);o.position.set(0,1.03,.45),this.body.add(o);let l=new ot(new De(.34,.24,.06),e);l.position.set(0,.76,.43),l.rotation.x=-.05,this.body.add(l);for(let[f,u]of[[-.1,.82],[.1,.82],[-.1,.7],[.1,.7]]){let d=en(.025,n,6,4);d.position.set(f,u,.47),this.body.add(d)}for(let f of[-1,1]){let u=new ot(new te(.1,.1,.16,12),e);u.rotation.z=Math.PI/2,u.position.set(f*.5,1.28,0),u.castShadow=!0,this.body.add(u)}let c=new ot(new te(.025,.025,.3,8),e);c.position.set(0,1.78,0),this.body.add(c);let h=en(.075,Fe("#ff3b3b",.3),12,8);h.position.set(0,1.97,0),this.body.add(h),this.limbs(.2,.45,.12,.14,e,.52,.98,.1,.22,e,Fe("#ff4d4d",.4),Fe("#2b3347",.4)),this.height=2}update(t,e){this.t+=t;let n=H_(e.speed/10.5,0,1.3);e.grounded&&!e.stun&&(this.phase+=t*(5+n*11));let i=Math.sin(this.phase),r=n*.95;if(e.stun>0)this.tumble+=t*11,this.pivot.rotation.x=this.tumble,this.pivot.rotation.z=Math.sin(this.tumble*.5)*.4,this.legL.rotation.x=Math.sin(this.t*16)*1,this.legR.rotation.x=-Math.sin(this.t*16)*1,this.armL.rotation.z=-1.5+Math.sin(this.t*18)*.5,this.armR.rotation.z=1.5-Math.sin(this.t*18)*.5,this.armL.rotation.x=this.armR.rotation.x=0;else{let l=Math.round(this.tumble/(Math.PI*2))*Math.PI*2;this.tumble+=(l-this.tumble)*Math.min(1,t*14),this.pivot.rotation.z*=Math.max(0,1-t*12);let c=e.dive>0?1:0;this.dive+=(c-this.dive)*Math.min(1,t*16);let h=(e.grounded?n*.2:.05)+this.dive*1.35;if(this.lean+=(h-this.lean)*Math.min(1,t*14),this.pivot.rotation.x=this.tumble+this.lean,e.celebrate){let f=Math.abs(Math.sin(this.t*6))*.35;this.body.position.y=f,this.armL.rotation.z=-2.6+Math.sin(this.t*14)*.3,this.armR.rotation.z=2.6-Math.sin(this.t*14)*.3,this.armL.rotation.x=this.armR.rotation.x=0,this.legL.rotation.x=this.legR.rotation.x=0}else if(this.dive>.3)this.armL.rotation.x=this.armR.rotation.x=-2.9,this.armL.rotation.z=-.15,this.armR.rotation.z=.15,this.legL.rotation.x=this.legR.rotation.x=.2;else if(e.grounded){this.legL.rotation.x=i*r,this.legR.rotation.x=-i*r,this.armL.rotation.x=-i*r*.9,this.armR.rotation.x=i*r*.9;let f=Math.sin(this.t*2.2)*.04;this.armL.rotation.z=-.15-f-n*.2,this.armR.rotation.z=.15+f+n*.2}else{let f=e.vy>0;this.legL.rotation.x=f?.7:.35,this.legR.rotation.x=f?-.5:-.2,this.armL.rotation.z=-2.2,this.armR.rotation.z=2.2,this.armL.rotation.x=this.armR.rotation.x=0}e.celebrate||(this.body.position.y=e.grounded?Math.abs(i)*.07*n:0)}if(this.shield.visible=!!e.shield,e.shield){let l=1+Math.sin(this.t*8)*.04;this.shield.scale.set(l,l,l)}if(this.leadCrown.visible=!!e.leader,e.leader&&(this.leadCrown.rotation.y+=t*2.2,this.leadCrown.position.y=this.height+.22+Math.sin(this.t*3)*.05),this.bat.scale.setScalar(e.mega?1.6:1),e.swing>0&&!e.stun){let l=e.swing,c;if(l<.3)c=-2.95*(l/.3);else{let h=(l-.3)/.7;c=-2.95+2.75*(1-(1-h)*(1-h))}this.armR.rotation.x=c,this.armR.rotation.z=.12,this.pivot.rotation.x=this.tumble+this.lean+(l>.3?.28*Math.sin(Math.min(1,(l-.3)/.35)*Math.PI):0),this.bat.visible=!0}else this.bat.visible=!1;e.landed&&(this.squash=1),this.squash=Math.max(0,this.squash-t*5);let a=1-Math.sin(this.squash*Math.PI)*.22*this.squash;!e.grounded&&e.vy>2&&!e.stun&&(a=1.1),!e.grounded&&e.vy<-8&&(a=1.06);let o=1+(1-a)*.55;this.body.scale.set(o,a,o),this.tails&&this.tails.forEach((l,c)=>{l.rotation.x=-.15-n*.5+Math.sin(this.t*9+c)*.12*(.4+n),l.rotation.y=(c?1:-1)*(.15+Math.sin(this.t*7+c*2)*.12)}),this.tail&&(this.tail.rotation.y=Math.sin(this.t*(6+n*6))*(.35+n*.25)),this.crown&&(this.crown.rotation.z=Math.sin(this.t*5)*.05*n)}dispose(){this.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:[e]).forEach(n=>n.dispose())}})}};function Il(s,t="#ffffff"){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");n.font='700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif',n.textAlign="center",n.textBaseline="middle";let i=Math.min(480,n.measureText(s).width+56);n.fillStyle="rgba(12,10,36,0.72)";let r=(512-i)/2,a=14,o=100,l=50;n.beginPath(),n.moveTo(r+l,a),n.arcTo(r+i,a,r+i,a+o,l),n.arcTo(r+i,a+o,r,a+o,l),n.arcTo(r,a+o,r,a,l),n.arcTo(r,a,r+i,a,l),n.closePath(),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.lineWidth=8,n.strokeStyle="rgba(0,0,0,0.65)",n.strokeText(s,256,68,440),n.fillStyle="#ffffff",n.fillText(s,256,68,440);let c=new Sn(e);c.colorSpace=Ie,c.anisotropy=4;let h=new Sr(new Ps({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return h.renderOrder=999,h.scale.set(2.8,.7,1),h.userData.base=.7,h}var ca={candy:{top:"#3fb0ff",horizon:"#ffd6ee",bottom:"#ffe9f6",fog:"#ffd9ef",fogNear:90,fogFar:520,sun:"#fff1cf",sunPos:[-60,90,-40],sunI:2.5,hemiSky:"#d6eeff",hemiGround:"#ffc2e6",hemiI:1,exp:1.05,waterA:"#2ec8ff",waterB:"#168ae0",water:"water",env:.55},canyon:{top:"#47207a",horizon:"#ff9a52",bottom:"#ffcf8a",fog:"#ffa769",fogNear:80,fogFar:460,sun:"#ffb06b",sunPos:[80,45,-70],sunI:2.7,hemiSky:"#ffd0a6",hemiGround:"#a8402f",hemiI:.9,exp:1,waterA:"#ff4a12",waterB:"#ffc21a",water:"lava",env:.45},frost:{top:"#4aa6ff",horizon:"#e4f4ff",bottom:"#ffffff",fog:"#d8ecff",fogNear:80,fogFar:480,sun:"#fff6ea",sunPos:[50,80,-40],sunI:2.4,hemiSky:"#dff1ff",hemiGround:"#9fc9ee",hemiI:1.1,exp:1.08,waterA:"#2a8fd6",waterB:"#0b4d8c",water:"water",env:.65},fair:{top:"#2f8bff",horizon:"#fff0c2",bottom:"#ffe9b0",fog:"#ffe6bd",fogNear:90,fogFar:520,sun:"#fff0cf",sunPos:[-50,85,-50],sunI:2.6,hemiSky:"#cfe6ff",hemiGround:"#ffd9a0",hemiI:1,exp:1.05,waterA:"#2fe0c8",waterB:"#0e8fb0",water:"water",env:.55},fun:{top:"#35a7ff",horizon:"#e8fbff",bottom:"#fff6d8",fog:"#d9f4ff",fogNear:120,fogFar:640,sun:"#fff4d6",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#d4ecff",hemiGround:"#bfe8a0",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.6},neon:{top:"#04010d",horizon:"#3b0c70",bottom:"#12033a",fog:"#1d0750",fogNear:60,fogFar:380,sun:"#a58bff",sunPos:[-40,70,-30],sunI:1.5,hemiSky:"#6c4cff",hemiGround:"#1a0a3a",hemiI:.95,exp:1.15,waterA:"#2b0b5e",waterB:"#d11cff",water:"grid",env:.5}},Th=null;function fd(){return Th||(Th=(async()=>{try{await Promise.race([Promise.all([document.fonts.load('400 100px "Lilita One"'),document.fonts.load('400 100px "Fredoka One"')]),new Promise(s=>setTimeout(s,2500))])}catch{}})()),Th}var Pl='"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function Ll(s="HARIS",t=null,e=["#fff7a8","#ffc83d","#ff7a1a"]){let n=document.createElement("canvas");n.width=1024,n.height=t?512:400;let i=n.getContext("2d");i.textAlign="center",i.textBaseline="middle";let r=300;for(i.font=`${r}px ${Pl}`;i.measureText(s).width>900&&r>80;)r-=10,i.font=`${r}px ${Pl}`;let a=t?220:200;i.lineJoin="round",i.shadowColor="rgba(255,190,60,0.9)",i.shadowBlur=40,i.lineWidth=46,i.strokeStyle="rgba(255,170,40,0.35)",i.strokeText(s,512,a),i.shadowBlur=0,i.lineWidth=40,i.strokeStyle="#1b0f4a",i.strokeText(s,512,a),i.lineWidth=18,i.strokeStyle="#ffffff",i.strokeText(s,512,a),i.fillStyle="#b0420b";for(let c=14;c>0;c-=2)i.fillText(s,512,a+c);let o=i.createLinearGradient(0,a-r/2,0,a+r/2);o.addColorStop(0,e[0]),o.addColorStop(.55,e[1]),o.addColorStop(1,e[2]),i.fillStyle=o,i.fillText(s,512,a),i.globalCompositeOperation="source-atop",i.fillStyle="rgba(255,255,255,0.35)",i.fillRect(0,a-r/2,1024,r*.18),i.globalCompositeOperation="source-over",t&&(i.font=`90px ${Pl}`,i.lineWidth=16,i.strokeStyle="#1b0f4a",i.strokeText(t,512,440),i.fillStyle="#ffffff",i.fillText(t,512,440));let l=new Sn(n);return l.colorSpace=Ie,l.anisotropy=8,l}function k_(s,t="#ff3b6b",e="#ffffff"){let n=document.createElement("canvas");n.width=1024,n.height=256;let i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,1024,256);let r=32;i.fillStyle=e;for(let o=0;o<1024;o+=r)for(let l=0;l<256;l+=r)(o+l)/r%2===0&&(l<r||l>=256-r)&&i.fillRect(o,l,r,r);i.font=`150px ${Pl}`,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=26,i.strokeStyle="#1b0f4a",i.strokeText(s,512,132),i.fillStyle="#fff",i.fillText(s,512,132);let a=new Sn(n);return a.colorSpace=Ie,a.anisotropy=8,a}function dd(){let s=document.createElement("canvas");s.width=128,s.height=128;let t=s.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="rgba(0,0,0,0.28)",t.beginPath(),t.moveTo(64,14),t.lineTo(108,70),t.lineTo(80,70),t.lineTo(80,112),t.lineTo(48,112),t.lineTo(48,70),t.lineTo(20,70),t.closePath(),t.fill();let e=new Sn(s);return e.colorSpace=Ie,e.anisotropy=4,e}function G_(s="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,s),i.addColorStop(1,t),n.fillStyle=i,n.fillRect(0,0,128,128);let r=new Sn(e);return r.colorSpace=Ie,r}function Ah(s){let t=new B(...s.sunPos).normalize(),e=new $e({side:Ve,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ut(s.top)},horizon:{value:new Ut(s.horizon)},bottom:{value:new Ut(s.bottom)},sunDir:{value:t},sunColor:{value:new Ut(s.sun)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        gl_FragColor = vec4(c, 1.0); }`}),n=new ot(new Ne(900,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function Rh(s,t){let e=new Ut(s.fog),n=s.water==="lava"?1:s.water==="grid"?2:0,i=new $e({uniforms:{time:{value:0},cA:{value:new Ut(s.waterA)},cB:{value:new Ut(s.waterB)},fogC:{value:e},fogN:{value:s.fogNear},fogF:{value:s.fogFar},kind:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 p = vW.xz; vec3 col;
        if(kind < 0.5){ float w = vn(p*0.25+vec2(time*0.25,time*0.15))*0.6 + vn(p*0.7-vec2(time*0.4,0.0))*0.4;
          col = mix(cB, cA, w); float ln = smoothstep(0.78,0.95, sin(p.x*0.5+time*1.2+vn(p*0.3)*6.0)*0.5+0.5)*0.25; col += ln; col += pow(vn(p*1.6+time*0.5),6.0)*0.35; }
        else if(kind < 1.5){ float w = vn(p*0.18+vec2(time*0.07,0.0))*0.6 + vn(p*0.55+time*0.1)*0.4; float cr = smoothstep(0.35,0.6,w);
          col = mix(cB*1.25, cA, cr); col = mix(col, vec3(0.16,0.03,0.02), smoothstep(0.62,0.78,vn(p*0.35-time*0.05))*0.85); col += cA*0.25*(0.5+0.5*sin(time*2.0+p.x*0.3)); }
        else { vec2 g = abs(fract(p*0.125)-0.5); float l = smoothstep(0.47,0.5,max(g.x,g.y)); col = cA + cB*l*1.6; col += cB*0.25*pow(vn(p*0.05+time*0.1),2.0); }
        float d = length(vW - cameraPosition); float f = smoothstep(fogN, fogF, d);
        gl_FragColor = vec4(mix(col, fogC, f), 1.0);
      }`}),r=new ot(new cn(1600,1600),i);return r.rotation.x=-Math.PI/2,r.position.y=t,r.frustumCulled=!1,r.renderOrder=-5,r.userData.mat=i,r}var oa=class{constructor(t=500){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.s0=new Float32Array(t);let e=new Ae;e.setAttribute("position",new Ee(this.pos,3).setUsage(qs)),e.setAttribute("color",new Ee(this.col,3).setUsage(qs)),e.setAttribute("size",new Ee(this.size,1).setUsage(qs)),e.setAttribute("alpha",new Ee(this.alpha,1).setUsage(qs)),e.setDrawRange(0,0),this.mat=new $e({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }"}),this.points=new Gi(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=e,this._c=new Ut}emit(t,e,n,i,r={}){var o,l,c,h,f,u,d,g;let a=this._c.set((o=r.color)!=null?o:"#ffffff");for(let _=0;_<i;_++){let m=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),p=Math.random()*Math.PI*2,S=((l=r.speed)!=null?l:3)*(.3+Math.random()*.9),w=(c=r.up)!=null?c:3,x=m*3;this.pos[x]=t+(Math.random()-.5)*((h=r.spread)!=null?h:.3),this.pos[x+1]=e,this.pos[x+2]=n+(Math.random()-.5)*((f=r.spread)!=null?f:.3),this.vel[x]=Math.cos(p)*S,this.vel[x+1]=w*(.4+Math.random()*.9),this.vel[x+2]=Math.sin(p)*S;let b=r.rainbow?this._c.setHSL(Math.random(),.9,.6):a;this.col[x]=b.r,this.col[x+1]=b.g,this.col[x+2]=b.b,this.life[m]=this.maxLife[m]=((u=r.life)!=null?u:.6)*(.6+Math.random()*.8),this.s0[m]=((d=r.size)!=null?d:.35)*(.6+Math.random()*.8),this.size[m]=this.s0[m],this.grav[m]=(g=r.gravity)!=null?g:9,this.alpha[m]=1}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.alpha[e]=0,this.size[e]=0;continue}this.life[e]-=t;let n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let i=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=Math.min(1,i*1.6),this.size[e]=this.s0[e]*(.4+.6*i)}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setScale(t){this.mat.uniforms.scale.value=t*.9}},la=class{constructor(t,e=350){this.kind=t,this.n=e;let n=new Float32Array(e*3);this.seed=new Float32Array(e*3);for(let a=0;a<e*3;a++)this.seed[a]=Math.random();let i=new Ae;i.setAttribute("position",new Ee(n,3));let r={frost:"#ffffff",canyon:"#ffb347",candy:"#fff6a8",neon:"#7cf9ff",fair:"#ffd6f0",fun:"#fff6a8"};this.mat=new ki({color:r[t]||"#fff",size:t==="frost"?.28:.22,transparent:!0,opacity:.85,depthWrite:!1,map:G_(),blending:t==="neon"||t==="canyon"?Vr:Ei}),this.points=new Gi(i,this.mat),this.points.frustumCulled=!1,this.pos=n}update(t,e){let r=this.kind,a=this.pos,o=this.seed;for(let l=0;l<this.n;l++){let c=l*3,h=o[c]*70,f=o[c+1]*36,u=o[c+2]*70;r==="frost"?(f=36-(t*(2+o[c]*2)+o[c+1]*36)%36,h+=Math.sin(t*.7+l)*1.2):r==="canyon"?(f=(t*(1.5+o[c]*2)+o[c+1]*36)%36,h+=Math.sin(t*.9+l)*.8):(f+=Math.sin(t*.6+l)*.8,h+=Math.cos(t*.4+l*1.3)*.8),a[c]=e.x+((h-e.x)%70+70)%70-70/2,a[c+1]=e.y-36/2+f,a[c+2]=e.z+((u-e.z)%70+70)%70-70/2}this.points.geometry.attributes.position.needsUpdate=!0}};function V_(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function pd(s,t,e,n){let i=ca[t],r=new le;r.name="scenery";let a=V_(t.length*9973+17),o=new Ki,l=new Ki,c=e.length,h=-c-40,f=t==="fun"?0:n.waterY,u=t==="fun"?58:0,d=[],g=(M,I)=>(a()<.5?-1:1)*(M+u+a()*(I-M)),_=M=>M[Math.floor(a()*M.length)],m=(M,I=16,C=10)=>new Ne(M,I,C),p=(M,I,C,R=14)=>new te(M,I,C,R),S=(M,I,C=14)=>new Qe(M,I,C),w={candy:["#ff9bd0","#7be8c8","#ffd479","#b9a4ff"],canyon:["#d9743b","#e8a15a","#b9472f"],frost:["#e5f4ff","#a8d8ff","#ffffff"],neon:["#2d1c78","#4a1a86","#1f2f8a"],fair:["#8bd450","#ffd23f","#ff9bd0","#7be8ff"],fun:["#8bd450","#ffd23f","#ff9bd0","#7be8ff"]}[t];for(let M=0;M<26;M++){let I=60-a()*(c+160),C=g(38,150),R=-4+a()*40,D=5+a()*14,U=_(w);o.add(p(D,D*.9,D*.25,20),C,R,I,U),o.add(S(D*.9,D*1.3,20),C,R-D*.25/2-D*.65,I,t==="frost"?"#9fc8ee":t==="neon"?"#241a60":"#8a5a3a",Math.PI),t==="neon"&&l.add(new ye(D,.18,6,32),C,R+D*.13,I,_(["#22f2ff","#ff2bd6"]),Math.PI/2)}if(t==="candy"){for(let I=0;I<70;I++){let C=70-a()*(c+200),R=g(26,130),D=1+a()*2.2,U=a(),z=f-1;if(U<.35){let O=_(["#ff5fa8","#ffb347","#8f7bff","#3fd6c2","#ffd84d"]);o.add(p(.45*D,.45*D,12*D,8),R,z+6*D,C,"#fff3f8"),o.add(m(3.4*D,20,14),R,z+13.5*D,C,O,0,0,0,1,1,.45),o.add(new ye(2.2*D,.35*D,8,24),R,z+13.5*D,C+1.45*D,"#ffffff"),o.add(new ye(1.1*D,.3*D,8,20),R,z+13.5*D,C+1.5*D,"#ffffff")}else U<.65?(o.add(m(4*D,18,12),R,z,C,_(["#ff6b9e","#6be8c4","#ffd24d","#a58bff"]),0,0,0,1,.85,1),o.add(p(.9*D,1.3*D,.6*D,10),R,z+3.2*D,C,"#ffffff")):U<.85?(o.add(p(2.8*D,2*D,3.2*D,14),R,z+1.6*D,C,_(["#ffd29b","#c9a0ff","#8be0ff"])),o.add(m(3.1*D,16,10),R,z+4*D,C,"#ff9ccb",0,0,0,1,.8,1),o.add(m(.7*D,10,8),R,z+6.1*D,C,"#ff2d55")):(o.add(new ye(4.2*D,1.9*D,12,28),R,z+2*D,C,"#ffbd6b",Math.PI/2-.4),o.add(new ye(4.2*D,1.9*D,12,28),R,z+2.5*D,C,_(["#ff7ab8","#7be8ff"]),Math.PI/2-.4,0,0,1.03,1.03,.6))}let M=["#ff3b3b","#ff9a3b","#ffe03b","#4ddc6a","#3bb0ff","#9b6bff"];[-.12,-.5,-.88].forEach(I=>M.forEach((C,R)=>o.add(new ye(46-R*1.6,.9,6,48,Math.PI),0,f-2,I*c-8,C,0,0,0,1,1.4,1)));for(let I=0;I<22;I++){let C=new le,R=_(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),D=new ot(m(1.6,16,12),new Se({color:R,roughness:.25}));D.scale.y=1.2;let U=new ot(S(.25,.4,8),new Se({color:R}));U.position.y=-1.9,U.rotation.x=Math.PI;let z=new ot(p(.03,.03,4,4),new Ue({color:"#ffffff"}));z.position.y=-4,C.add(D,U,z),C.position.set(g(14,70),8+a()*30,40-a()*(c+120)),C.userData.ph=a()*6,r.add(C),d.push(O=>{C.position.y+=Math.sin(O*.8+C.userData.ph)*.004,C.rotation.z=Math.sin(O*.6+C.userData.ph)*.08})}}else if(t==="canyon"){for(let M=0;M<60;M++){let I=70-a()*(c+200),C=g(28,150),R=1+a()*2.4,D=a(),U=f-2;if(D<.55){let z=3+Math.floor(a()*3);for(let O=0;O<z;O++)o.add(p(5*R-O*.35*R,5.3*R-O*.3*R,4*R,12),C,U+2*R+O*4*R,I,["#b8452f","#d9743b","#e8a15a","#c4503d","#f0b46a"][(O+M)%5])}else D<.85?o.add(S(2.4*R,16*R,7),C,U+8*R,I,_(["#9c3f2c","#c4573a","#7a2f3d"])):o.add(new ye(6*R,2*R,8,20,Math.PI),C,U,I,"#d2693b",0,a()*3)}l.add(m(34,24,16),120,52,-c-140,"#ffd27a"),l.add(m(34,24,16),-150,40,-60,"#ffb35e")}else if(t==="frost")for(let M=0;M<80;M++){let I=70-a()*(c+200),C=g(26,150),R=1+a()*2.2,D=a(),U=f-2;if(D<.3)o.add(S(14*R,30*R,8),C,U+15*R,I,"#bcd8f2"),o.add(S(6.5*R,12*R,8),C,U+24*R,I,"#ffffff");else if(D<.8){for(let z=0;z<4;z++)o.add(S(3.4*R-z*.65*R,4.4*R,9),C,U+(3+z*2.6)*R,I,z%2?"#2f7d6f":"#3a9684"),o.add(S(2.4*R-z*.5*R,2*R,9),C,U+(4.4+z*2.6)*R,I,"#ffffff");o.add(p(.5*R,.6*R,3*R,6),C,U+1.4*R,I,"#6b4a34")}else l.add(new zs(3*R,0),C,U+5*R+a()*10,I,"#bfe8ff",0,a()*3,0,.7,1.8,.7)}else if(t==="fair"||t==="fun"){for(let M=0;M<46;M++){let I=70-a()*(c+200),C=g(26,140),R=1+a()*1.8,D=a(),U=f-1;if(D<.4){let z=_(["#ff4d6d","#3ec6e0","#ffd23f","#8b5cf6"]);o.add(p(6*R,6*R,5*R,16),C,U+2.5*R,I,z),o.add(S(6.8*R,5*R,16),C,U+7.5*R,I,"#ffffff"),o.add(S(1.1*R,3*R,8),C,U+11*R,I,z),o.add(p(.12*R,.12*R,4*R,4),C,U+14*R,I,"#ffffff")}else if(D<.7){for(let z=0;z<8;z++)o.add(p(2.2*R,2.2*R,2.4*R,12),C,U+(1.2+z*2.4)*R,I,z%2?"#ffffff":"#ff4d6d");o.add(S(3*R,4*R,12),C,U+21*R,I,"#ffd23f")}else o.add(p(.3*R,.4*R,9*R,6),C,U+4.5*R,I,"#5b2a86"),l.add(m(1.1*R,10,8),C,U+9.6*R,I,_(["#ffe27a","#ff9ccb","#9cf0ff"]))}[[-120,-c*.25],[140,-c*.62],[-130,-c*.9]].forEach(([M,I],C)=>{let R=new le;R.position.set(M,f+34,I),R.rotation.y=C%2?.5:-.5;let D=new ot(new ye(30,.9,8,48),new Se({color:"#ffffff",roughness:.4}));R.add(D);let U=new Se({color:"#ff4d6d"});for(let V=0;V<8;V++){let W=new ot(p(.35,.35,60,5),U);W.rotation.z=V*Math.PI/8,R.add(W)}let z=[];for(let V=0;V<12;V++){let W=V/12*Math.PI*2,lt=new ot(new De(4.4,3.4,3.4),new Se({color:_(["#ffd23f","#3ec6e0","#ff4d6d","#8bd450"]),roughness:.35}));lt.position.set(Math.cos(W)*30,Math.sin(W)*30-2,0),R.add(lt),z.push([lt,W])}let O=new Se({color:"#5b2a86"});for(let V of[-1,1]){let W=new ot(p(1.2,1.6,44,6),O);W.position.set(V*11,-20,0),W.rotation.z=V*-.28,R.add(W)}r.add(R),d.push(V=>{let W=V*.12*(C%2?-1:1);D.rotation.z=W,R.children.forEach(lt=>{var at,Ct;lt.geometry&&lt.geometry.type==="CylinderGeometry"&&lt.position.x===0&&lt.position.y===0&&(lt.rotation.z=((Ct=(at=lt.userData).b)!=null?Ct:at.b=lt.rotation.z)+W)}),z.forEach(([lt,at])=>lt.position.set(Math.cos(at+W)*30,Math.sin(at+W)*30-2,0))})});for(let M=0;M<26;M++){let I=new le,C=_(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),R=new ot(m(1.6,16,12),new Se({color:C,roughness:.25}));R.scale.y=1.2;let D=new ot(p(.03,.03,4,4),new Ue({color:"#ffffff"}));D.position.y=-3,I.add(R,D),I.position.set(g(14,80),8+a()*34,40-a()*(c+120)),I.userData.ph=a()*6,r.add(I),d.push(U=>{I.position.y+=Math.sin(U*.8+I.userData.ph)*.004,I.rotation.z=Math.sin(U*.6+I.userData.ph)*.08})}}else{for(let D=0;D<70;D++){let U=70-a()*(c+200),z=g(24,140),O=1+a()*2.2,V=a(),W=_(["#22f2ff","#ff2bd6","#7cff3d","#ffe03b"]);V<.35?(o.add(p(1.4*O,1.8*O,24*O,6),z,f+10*O,U,"#190f4d"),l.add(p(1.5*O,1.5*O,.6,6),z,f+6*O,U,W),l.add(p(1.5*O,1.5*O,.6,6),z,f+14*O,U,W)):V<.7?l.add(new zs(2.4*O,0),z,6+a()*40,U,W,a()*3,a()*3,0):l.add(new ye(5*O,.35,6,40),z,10+a()*30,U,W,a()*3,a()*3,0)}o.add(m(60,32,24),-170,90,-c*.55,"#3a1a8c"),l.add(new ye(95,1.5,6,80),-170,90,-c*.55,"#ff2bd6",Math.PI/2-.35,0,.2),l.add(m(26,20,16),200,120,-c*.2,"#ff7ad9");let M=900,I=new Float32Array(M*3);for(let D=0;D<M;D++){let U=a()*Math.PI*2,z=Math.acos(a()*1.6-.2),O=800;I[D*3]=Math.sin(z)*Math.cos(U)*O,I[D*3+1]=Math.cos(z)*O,I[D*3+2]=Math.sin(z)*Math.sin(U)*O}let C=new Ae;C.setAttribute("position",new Ee(I,3));let R=new Gi(C,new ki({color:"#ffffff",size:2.2,sizeAttenuation:!1,fog:!1,depthWrite:!1}));R.frustumCulled=!1,R.renderOrder=-9,r.add(R),r.userData.stars=R}let x=o.build(new Se({vertexColors:!0,roughness:.55}));x&&(x.castShadow=!1,x.receiveShadow=!1,r.add(x));let b=l.build(new Ue({vertexColors:!0,toneMapped:!1}));b&&r.add(b);let T=new le;T.name="brand",r.add(T);let L=Ll("HARIS","MADE THIS GAME"),y=e.finishPlat,A=M=>new Se({color:M,roughness:.4}),P=(M,I,C,R,D)=>{let U=new le;U.position.set(0,I,M);let z=A("#2b1c6b");for(let W of[-1,1]){let lt=new ot(new De(1.2,9,1.2),z);lt.position.set(W*C/2,4.5,0),lt.castShadow=!0,U.add(lt)}let O=new ot(new cn(C,C/4),new Ue({map:k_(R,D),toneMapped:!1,side:hn}));O.position.set(0,8.6,.05),U.add(O);let V=new ot(new De(C+1.2,.6,1.2),z);V.position.set(0,10.4,0),U.add(V),T.add(U)};P(e.startArch,0,20,"START","#22c55e"),P(e.finishZ+.01,y.top,19,"FINISH","#ef233c");let F=new ot(new cn(30,15),new Ue({map:L,transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}));return F.position.set(0,y.top+21,e.finishZ-.5),T.add(F),d.push(M=>{F.position.y=y.top+21+Math.sin(M*1.2)*.4}),s.add(r),{group:r,update(M,I){for(let C of d)C(M);r.userData.stars&&r.userData.stars.position.copy(I)},dispose(){s.remove(r),r.traverse(M=>{M.geometry&&M.geometry.dispose(),M.material&&(Array.isArray(M.material)?M.material:[M.material]).forEach(C=>{C.map&&C.map.dispose(),C.dispose()})})}}}var ue=null,Qi=null,ha=null,Pi=null,Nl=null,gd=!1;var Dl=null,Ii=null;function ci(){if(ue){ue.state==="suspended"&&ue.resume();return}let s=window.AudioContext||window.webkitAudioContext;if(!s)return;ue=new s,Qi=ue.createGain(),Qi.gain.value=gd?0:.9,Qi.connect(ue.destination),ha=ue.createGain(),ha.gain.value=.7,ha.connect(Qi),Pi=ue.createGain(),Pi.gain.value=.22,Pi.connect(Qi);let t=ue.sampleRate;Nl=ue.createBuffer(1,t,ue.sampleRate);let e=Nl.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}function xd(s){gd=s,Qi&&Qi.gain.setTargetAtTime(s?0:.9,ue.currentTime,.05)}function he(s,t,e,n,i=.3,r=0,a=ha){if(!ue)return;let o=ue.currentTime+r,l=ue.createOscillator(),c=ue.createGain();l.type=s,l.frequency.setValueAtTime(t,o),e!==t&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e),o+n),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(i,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+n),l.connect(c),c.connect(a),l.start(o),l.stop(o+n+.05)}function li(s,t,e,n,i,r=0,a=1){if(!ue)return;let o=ue.currentTime+r,l=ue.createBufferSource();l.buffer=Nl,l.loop=!0;let c=ue.createBiquadFilter();c.type=e,c.Q.value=a,c.frequency.setValueAtTime(n,o),c.frequency.exponentialRampToValueAtTime(Math.max(30,i),o+s);let h=ue.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(t,o+.015),h.gain.exponentialRampToValueAtTime(1e-4,o+s),l.connect(c),c.connect(h),h.connect(ha),l.start(o),l.stop(o+s+.05)}var W_=(s,t)=>s+Math.random()*(t-s),Gt={click(){he("triangle",520,780,.09,.25)},select(){he("triangle",660,990,.12,.28),he("sine",990,1320,.1,.18,.06)},back(){he("triangle",520,330,.12,.22)},jump(){he("sine",280,640,.17,.3),he("triangle",420,880,.12,.08,.02)},land(s=10){let t=Math.min(.5,.12+s*.012);he("sine",140,60,.12,t),li(.09,t*.7,"lowpass",900,200)},step(){li(.045,.07,"bandpass",W_(500,800),300,0,2)},dive(){li(.3,.22,"bandpass",500,2200,0,1.5),he("sine",300,520,.2,.15)},bounce(){he("sine",180,920,.3,.38),he("triangle",360,1400,.22,.12,.03)},pickup(){he("triangle",520,1040,.18,.3),he("sine",780,1560,.24,.2,.07),he("sine",1170,2340,.2,.12,.14)},swing(){li(.24,.3,"bandpass",500,2800,0,1.2),he("sine",380,160,.16,.08)},bonk(){he("square",190,55,.2,.42),li(.14,.45,"lowpass",3e3,300),he("triangle",820,220,.22,.22,.02)},hit(){he("sawtooth",420,70,.28,.28),li(.18,.3,"lowpass",1800,150),he("square",220,110,.15,.12,.04)},splash(){li(.6,.45,"bandpass",1800,260,0,.8),li(.3,.2,"highpass",2400,900,.05),he("sine",220,80,.3,.12)},respawn(){li(.4,.22,"highpass",400,4e3,0,.7),he("sine",300,900,.3,.15)},checkpoint(){he("sine",660,660,.14,.3),he("sine",990,990,.25,.3,.1),he("triangle",1320,1320,.3,.1,.18)},tick(){he("sine",660,660,.14,.4)},go(){[523,659,784].forEach(s=>he("square",s,s,.5,.14)),he("sine",1046,1046,.6,.3)},join(){he("triangle",520,520,.1,.25),he("triangle",780,780,.14,.25,.09)},finish(){[523,659,784,1046,1318].forEach((s,t)=>{he("square",s,s,.22,.14,t*.09),he("triangle",s*2,s*2,.3,.08,t*.09)})},win(){[523,659,784,659,784,1046,1318].forEach((t,e)=>{he("square",t,t,.24,.13,e*.12),he("triangle",t/2,t/2,.3,.12,e*.12)})},lose(){[392,349,311,262].forEach((s,t)=>he("triangle",s,s*.97,.3,.22,t*.17))},warn(){he("square",880,880,.08,.14)}},X_={major:[0,2,4,7,9,12,14,16],minor:[0,3,5,7,10,12,15,17],lydian:[0,2,4,6,7,9,11,12],dorian:[0,2,3,5,7,9,10,12]},md=[{bpm:132,root:60,scale:"major",prog:[0,5,3,4],lead:"square",bright:3200},{bpm:118,root:57,scale:"minor",prog:[0,0,3,4],lead:"sawtooth",bright:2200},{bpm:108,root:62,scale:"lydian",prog:[0,4,5,3],lead:"triangle",bright:4200},{bpm:140,root:55,scale:"dorian",prog:[0,3,0,5],lead:"sawtooth",bright:2600},{bpm:126,root:62,scale:"major",prog:[0,4,5,3],lead:"square",bright:3600},{bpm:112,root:65,scale:"lydian",prog:[0,5,3,4],lead:"triangle",bright:3400},{bpm:120,root:60,scale:"major",prog:[0,3,4,0],lead:"triangle",bright:3e3}],Ch=s=>440*Math.pow(2,(s-69)/12);function Ih(s,t,e,n,i,r){let a=ue.createOscillator(),o=ue.createGain(),l=ue.createBiquadFilter();a.type=s,a.frequency.setValueAtTime(t,e),l.type="lowpass",l.frequency.value=r,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(i,e+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(l),l.connect(o),o.connect(Pi),a.start(e),a.stop(e+n+.05)}function q_(s,t){let e=ue.createBufferSource();e.buffer=Nl;let n=ue.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let i=ue.createGain();i.gain.setValueAtTime(t,s),i.gain.exponentialRampToValueAtTime(1e-4,s+.05),e.connect(n),n.connect(i),i.connect(Pi),e.start(s),e.stop(s+.06)}function Y_(s){let t=ue.createOscillator(),e=ue.createGain();t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(40,s+.12),e.gain.setValueAtTime(.55,s),e.gain.exponentialRampToValueAtTime(1e-4,s+.16),t.connect(e),e.connect(Pi),t.start(s),t.stop(s+.2)}function js(s){if(Ph(),!ue)return;let t=md[s]||md[6],e=X_[t.scale],n=60/t.bpm/4,i=1234+s*77,r=()=>(i=i*1664525+1013904223>>>0,i/4294967296),a=[];for(let l=0;l<4;l++){let c=[];for(let h=0;h<16;h++)c.push(h%4===0||r()<.38?Math.floor(r()*6):-1);a.push(c)}Ii={i:0,next:ue.currentTime+.1};let o=()=>{if(!(!ue||!Ii))for(;Ii.next<ue.currentTime+.18;){let l=Ii.i,c=l%16,h=Math.floor(l/16)%4,f=t.prog[h]||0,u=Ii.next,d=t.root+e[f%e.length]-12;c%4===0&&Y_(u),c%2===0&&q_(u,c%4===2?.1:.05),(c%4===0||c%8===6)&&Ih("triangle",Ch(d-12),u,n*3.2,.4,600),c===0&&[0,2,4].forEach(_=>Ih("sine",Ch(t.root+e[(f+_)%e.length]),u,n*15,.07,1400));let g=a[h][c];g>=0&&Ih(t.lead,Ch(t.root+12+e[(g+f)%e.length]),u,n*1.8,.11,t.bright),Ii.next+=n,Ii.i++}};Dl=setInterval(o,40),o()}function Ph(){Dl&&clearInterval(Dl),Dl=null,Ii=null}function Ul(s){Pi&&Pi.gain.setTargetAtTime(s?.08:.22,ue.currentTime,.2)}var Fl=class{constructor(){this.ws=null,this.h={},this.offset=0,this.rtt=0,this.best=1/0,this.connected=!1,this.id=null,this.samples=0}now(){return Date.now()+this.offset}on(t,e){this.h[t]=e}connect(){return new Promise((t,e)=>{if(this.connected)return t();let n=location.protocol==="https:"?"wss":"ws",i;try{i=new WebSocket(`${n}://${location.host}/ws`)}catch(a){return e(a)}this.ws=i;let r=setTimeout(()=>{try{i.close()}catch{}e(new Error("timeout"))},8e3);i.onopen=()=>{clearTimeout(r),this.connected=!0;for(let a=0;a<8;a++)setTimeout(()=>this.ping(),a*140);this.pinger=setInterval(()=>this.ping(),2e3),t()},i.onmessage=a=>{let o;try{o=JSON.parse(a.data)}catch{return}if(o.t==="pong")return this.onPong(o);o.t==="joined"&&(this.id=o.id);let l=this.h[o.t];l&&l(o)},i.onclose=()=>{clearTimeout(r);let a=this.connected;this.connected=!1,clearInterval(this.pinger),a&&this.h.close?this.h.close():e(new Error("closed"))},i.onerror=()=>{}})}ping(){this.send({t:"ping",c:Date.now()})}onPong(t){let e=Date.now(),n=e-t.c;this.rtt=this.rtt?this.rtt*.7+n*.3:n;let i=t.s+n/2-e;(n<=this.best*1.25||this.samples<3)&&(this.offset=this.samples<8?n<=this.best?i:this.offset:this.offset*.8+i*.2,this.best=Math.min(this.best,n)),this.samples++,this.samples%10===0&&(this.best=this.best*1.3+2)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}this.connected=!1,clearInterval(this.pinger)}};var ct=s=>document.getElementById(s),hi=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||(typeof navigator!="undefined"&&navigator.maxTouchPoints||0)>0,fn={x:0,y:0,jump:!1},Bn=(s,t,e)=>s<t?t:s>e?e:s,ts=(s,t,e)=>s+(t-s)*e,Md=(s,t,e)=>{let n=(t-s)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),s+n*e},Ol=s=>{let t=Math.floor(s/60),e=s-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},Lh=s=>s===1?"1st":s===2?"2nd":s===3?"3rd":s+"th",$_=["\u{1F947}","\u{1F948}","\u{1F949}"],Di=ct("c"),dn;try{dn=new na({canvas:Di,antialias:!0,powerPreference:"high-performance"})}catch(s){throw document.querySelector("#loader p").textContent="WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.",s}dn.outputColorSpace=Ie;dn.toneMapping=Vs;dn.toneMappingExposure=1.05;dn.shadowMap.enabled=!0;dn.shadowMap.type=Po;var Qs=Math.min(window.devicePixelRatio||1,hi?1.5:2),ee={dpr:hi?Math.min(Qs,1):Math.min(Qs,1.5),t:0,frames:0,good:0,shadows:!0,warm:3};function es(){ke&&(dn.setPixelRatio(ee.dpr),dn.setSize(window.innerWidth,window.innerHeight,!1),ke.camera.aspect=window.innerWidth/window.innerHeight,ke.camera.updateProjectionMatrix(),rt&&(rt.camera.aspect=window.innerWidth/window.innerHeight,rt.camera.updateProjectionMatrix(),rt.particles.setScale(dn.domElement.height)),ke.particles.setScale(dn.domElement.height))}function J_(s){if(ee.low)return;if(ee.warm>0){ee.warm-=s;return}if(ee.t+=s,ee.frames++,ee.t<1.2)return;let t=ee.frames/ee.t;ee.t=0,ee.frames=0,t<40?(ee.good=0,ee.dpr>.7?(ee.dpr=Math.max(.7,ee.dpr-.2),es()):ee.shadows&&t<30&&(ee.shadows=!1,rt&&rt.setShadows(!1))):t>58?++ee.good>=3&&ee.dpr<Math.min(Qs,1.75)&&(ee.dpr=Math.min(Math.min(Qs,1.75),ee.dpr+.1),ee.good=0,es()):ee.good=0}try{ee.low=localStorage.getItem("ph_low")==="1"}catch{ee.low=!1}ee.low&&(ee.dpr=.75,ee.shadows=!1);function K_(){ee.low?(ee.dpr=.75,ee.shadows=!1):(ee.dpr=hi?Math.min(Qs,1):Math.min(Qs,1.5),ee.shadows=!0,ee.warm=3),rt&&rt.setShadows(ee.shadows),es()}var j_=new Ji(dn),Sd=j_.fromScene(new sa,.04).texture,ut={screen:"title",mode:"single",name:localStorage.getItem("ph_name")||"",char:+(localStorage.getItem("ph_char")||0),level:0,net:null,room:null,myId:null,pendingJoin:null,muted:!1},rt=null,ke=null,Nh=[],bd=s=>+(localStorage.getItem("ph_best_"+s)||0),Uh=class{constructor(){let t=ca.candy;this.scene=new si,this.scene.fog=new Cs(t.fog,70,420),this.scene.environment=Sd,this.scene.environmentIntensity=.7,this.camera=new Ge(42,1,.1,1500),this.sky=Ah(t),this.scene.add(this.sky),this.water=Rh(t,-3),this.scene.add(this.water),this.scene.add(new Wi(t.hemiSky,t.hemiGround,1));let e=new Xi(t.sun,2.4);e.position.set(-10,18,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,n.near=1,n.far=60,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e),this.sun=e;let i=f=>new Se({color:f,roughness:.35}),r=new ot(new te(15,14,2,48),i("#ff9ccf"));r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let a=new ot(new te(13,13,.1,48),i("#fff3fb"));a.position.y=.02,a.receiveShadow=!0,this.scene.add(a),this.tops=[.8,1.25,1.25,.8],[[-4.5,.8,"#7be8a0"],[-1.5,1.25,"#5fc2ff"],[1.5,1.25,"#ffd23f"],[4.5,.8,"#ff9ccf"]].forEach(([f,u,d])=>{let g=new ot(new te(1.1,1.25,u,32),i(d));g.position.set(f,u/2,-.5),g.castShadow=g.receiveShadow=!0,this.scene.add(g)}),this.slotPos=[[-4.5,.8,-.5],[-1.5,1.25,-.5],[1.5,1.25,-.5],[4.5,.8,-.5]];let o=Ll("HARIS"),l=Ll("HARIS","MADE THIS GAME"),c=new ot(new cn(11,4.3),new Ue({map:o,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));c.rotation.x=-Math.PI/2,c.position.set(0,.1,4.4),this.scene.add(c);let h=new ot(new cn(26,13),new Ue({map:l,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));h.position.set(0,9.5,-24),this.scene.add(h),this.banner=h,this.chars=[0,1,2,3].map(f=>{let u=new ji(f);return this.scene.add(u.group),{c:u,tag:null,name:null,show:!0,scale:1,hop:0}}),this.ambient=new la("candy",160),this.scene.add(this.ambient.points),this.particles=new oa(260),this.scene.add(this.particles.points),this.mode="title",this.sel=0,this.t=0,this.lobby=[]}setName(t,e){let n=this.chars[t];n.name!==e&&(n.tag&&(n.c.group.remove(n.tag),n.tag.material.map.dispose(),n.tag.material.dispose(),n.tag=null),n.name=e,e&&(n.tag=Il(e,oi[t].color),n.tag.position.set(0,n.c.height+.55,0),n.c.group.add(n.tag)))}setTitle(t=-1){this.mode="title",this.sel=t,this.lobby=[],this.chars.forEach((e,n)=>{e.show=!0,this.setName(n,null)})}setLobby(t){this.mode="lobby",this.lobby=t,this.chars.forEach((e,n)=>{let i=t.findIndex(r=>r.char===n);e.show=i>=0,e.slot=i,this.setName(n,i>=0?t[i].name:null)})}burst(t){let e=this.slotPos[this.slotOf(t)];this.particles.emit(e[0],e[1]+1.4,e[2]+.5,40,{rainbow:!0,speed:4,up:6,life:1,size:.35,gravity:7})}slotOf(t){return this.mode==="lobby"?[1,2,0,3][Math.max(0,this.chars[t].slot)%4]:t}update(t){this.t+=t;let e=this.camera;e.position.set(Math.sin(this.t*.25)*1.8,2.9+Math.sin(this.t*.4)*.15,10.5),e.lookAt(0,1.9,0),this.sky.position.copy(e.position),this.water.material.uniforms.time.value=this.t,this.chars.forEach((n,i)=>{if(n.c.group.visible=n.show,!n.show)return;let r=this.slotPos[this.slotOf(i)],a=this.mode==="title"?Math.floor(this.t/3)%4===i:this.mode!=="lobby"&&this.sel===i;n.scale=ts(n.scale,a?1.18:1,Math.min(1,t*8)),n.c.group.scale.setScalar(n.scale),n.hop=a?Math.abs(Math.sin(this.t*5))*.25:ts(n.hop,0,Math.min(1,t*8)),n.c.group.position.set(r[0],r[1]+n.hop,r[2]),n.c.group.rotation.y=Md(n.c.group.rotation.y,this.mode==="lobby"?Math.sin(this.t*.7+i)*.3:Math.sin(this.t*.6+i*2)*.35,Math.min(1,t*4)),n.c.update(t,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:a||this.mode==="lobby"&&Math.floor(this.t*.5+i)%2===0}),n.tag&&n.tag.scale.set(2.4,.6,1)}),this.ambient.update(this.t,e.position),this.particles.update(t)}},fa=class{constructor(t,e){this.info=t,this.id=t.id,this.name=t.name,this.model=new ji(t.char),e.add(this.model.group),this.tag=Il(t.name,oi[t.char].color),this.tag.position.set(0,this.model.height+.7,0),this.model.group.add(this.tag),this.snaps=[],this.x=0,this.y=-50,this.z=0,this.yaw=Math.PI,this.speed=0,this.flags=0,this.vy=0,this.vx=0,this.vz=0,this.sw=0,this.ds=[],this.dMin=0,this.jit=0,this.rs=0,this.has=!1,this.finished=!1,this.lastLanded=!1}push(t){t.rs!==this.rs&&(this.snaps.length=0,this.rs=t.rs);let e=this.snaps[this.snaps.length-1];if(e&&t.ts<=e.ts)return;let n=Date.now(),i=n-t.ts;for(this.ds.push([n,i]);this.ds.length>1&&n-this.ds[0][0]>4e3;)this.ds.shift();let r=1/0;for(let a of this.ds)a[1]<r&&(r=a[1]);this.dMin=r,this.jit=this.jit*.92+Math.abs(i-r)*.08,this.snaps.push(t),this.snaps.length>40&&this.snaps.shift()}renderTime(){return Date.now()-this.dMin-Bn(70+this.jit*2.2,70,260)}update(t,e){let n=this.snaps;if(!n.length)return;for(;n.length>2&&n[1].ts<=t;)n.shift();let i=n[0],r=n[1]||n[0],a=0;if(n.length>1){let d=Math.max(1,r.ts-i.ts);a=Bn((t-i.ts)/d,0,1+220/d)}let o=ts(i.x,r.x,a),l=ts(i.y,r.y,a),c=ts(i.z,r.z,a);if(!this.has)this.x=o,this.y=l,this.z=c,this.has=!0;else{let d=1-Math.exp(-28*e),g=this.x,_=this.z;this.x+=(o-this.x)*d,this.y+=(l-this.y)*d,this.z+=(c-this.z)*d,e>0&&(this.vx+=((this.x-g)/e-this.vx)*.25,this.vz+=((this.z-_)/e-this.vz)*.25)}this.yaw=Md(this.yaw,r.r,1-Math.exp(-16*e)),this.speed=ts(i.sp,r.sp,Bn(a,0,1)),this.flags=r.a,this.vy=n.length>1?(r.y-i.y)/Math.max(.02,(r.ts-i.ts)/1e3):0;let h=this.model.group;h.position.set(this.x,this.y,this.z),h.rotation.y=this.yaw;let f=!!(this.flags&1),u=f&&!this.lastLanded;this.lastLanded=f,this.sw=this.flags&16?Math.min(1,(this.sw||.001)+e/.42):0,this.model.update(e,{speed:this.speed,grounded:f,vy:this.vy,stun:this.flags&2?1:0,dive:this.flags&4?1:0,celebrate:!!(this.flags&8),swing:this.sw,shield:!!(this.flags&32),leader:!!this.leader,mega:!!(this.flags&128),landed:u})}dispose(t){t.remove(this.model.group),this.tag.material.map.dispose(),this.tag.material.dispose(),this.model.dispose()}},on=new Set,Li={jump:!1,dive:!1},zl=class s{constructor(t,e,n,i){this.level=t,this.meta=ra[t],this.multi=i.multi,this.localId=n,this.players=e,this.t0=i.t0,this.phase="countdown",this.finished=!1,this.over=!1,this.finishTime=0,this.finishedMap=new Map,this.camYaw=0,this.camPitch=.34,this.camDist=8.2,this.camPos=new B,this.camTarget=new B,this.camInit=!1,this.sendT=0,this.rs=0,this.cpIdx=0,this.cpCur=null,this.stepDist=0,this.lastCount=99,this.hudT=0,this.hintT=0,this.warnSec=-1,this.levelTime=-4,this.batCd=0,this.swingT=0,this.batPending=!1,this.swingMega=!1,this.fx={turbo:0,jump:0,shield:0,mega:0},this.fxSig="";let r=ca[this.meta.key],a=this.scene=new si;a.background=new Ut(r.fog),a.fog=new Cs(r.fog,r.fogNear,r.fogFar),a.environment=Sd,a.environmentIntensity=r.env,this.camera=new Ge(62,window.innerWidth/window.innerHeight,.1,1800);let{world:o,info:l}=rd(t,!1,dd());this.world=o,this.info=l,a.add(o.group),o.onEvent=null,this.sky=Ah(r),a.add(this.sky),this.water=Rh(r,o.waterY),a.add(this.water),this.scenery=pd(a,this.meta.key,l,o),a.add(new Wi(r.hemiSky,r.hemiGround,r.hemiI));let c=this.sun=new Xi(r.sun,r.sunI);this.sunDir=new B(...r.sunPos).normalize().multiplyScalar(90),c.castShadow=ee.shadows,c.shadow.mapSize.set(hi?1024:2048,hi?1024:2048);let h=c.shadow.camera;h.left=-40,h.right=40,h.top=40,h.bottom=-40,h.near=5,h.far=220,c.shadow.bias=-3e-4,c.shadow.normalBias=.04,a.add(c,c.target),this.particles=new oa(600),a.add(this.particles.points),this.particles.setScale(dn.domElement.height),this.ambient=new la(this.meta.key,320),a.add(this.ambient.points),this.remotes=new Map;let f=e.findIndex(d=>d.id===n);this.slot=Math.max(0,f);let u=e[this.slot]||{name:"Player",char:0};this.me={body:ad(),model:new ji(u.char),name:u.name,char:u.char},a.add(this.me.model.group),this.me.tag=Il(u.name,oi[u.char].color),this.me.tag.position.set(0,this.me.model.height+.7,0),this.me.model.group.add(this.me.tag),e.forEach((d,g)=>{d.id!==n&&this.remotes.set(d.id,new fa(d,a))}),this.spawn(this.slot),this.buildProgress(),this.buildBoxes(),document.body.classList.add("in-race"),ct("hud-level").textContent=this.meta.name,ct("hud").classList.remove("hidden"),ct("hud-hint").classList.remove("fade"),this.hintT=8,this.setShadows(ee.shadows),js(t),Ul(!1),this.pos=this.me.body}setShadows(t){this.sun.castShadow=t}spawnPoint(t){return[(t-1.5)*3.6,0,this.info.spawn.z]}spawn(t){let[e,n,i]=this.spawnPoint(t);bh(this.me.body,e,n+.02,i,Math.PI),this.cpCur=null,this.cpIdx=0}buildProgress(){let t=document.querySelector("#hud-progress .track");t.querySelectorAll(".dot").forEach(n=>n.remove()),this.dots=new Map;let e=(n,i)=>{let r=document.createElement("div");r.className="dot"+(i?" me":""),r.style.background=oi[n.char].color,r.innerHTML=`<em>${n.name.replace(/[<>&]/g,"")}</em>`,t.appendChild(r),this.dots.set(n.id,r)};this.players.forEach(n=>e(n,n.id===this.localId))}now(){return this.multi?ut.net.now():performance.now()}look(t,e){this.camYaw-=t*.0024,this.camPitch=Bn(this.camPitch+e*.0021,-.15,1.2)}update(t){let e=this.me.body,n=this.world;this.levelTime=(this.now()-this.t0)/1e3;let i=this.levelTime;if(n.update(i,t),n.carry(e),e.yawOff&&(e.yaw+=e.yawOff,e.yawOff=0),i<0){let w=Math.ceil(-i);w!==this.lastCount&&w<=3&&(this.lastCount=w,this.count(String(w)),Gt.tick())}else this.phase==="countdown"&&(this.phase="race",this.count("GO!"),Gt.go(),this.lastCount=0,this.multi&&setTimeout(()=>{rt===this&&!this.over&&this.toast(hi?"Tap BAT to bonk rivals!":"Press B or click to swing the BAT!")},1400));let r=i>=0&&!this.over,a=0,o=0;(on.has("KeyW")||on.has("ArrowUp"))&&a++,(on.has("KeyS")||on.has("ArrowDown"))&&a--,(on.has("KeyD")||on.has("ArrowRight"))&&o++,(on.has("KeyA")||on.has("ArrowLeft"))&&o--,on.has("KeyQ")&&(this.camYaw+=1.9*t),on.has("KeyE")&&(this.camYaw-=1.9*t),(fn.x||fn.y)&&(o+=fn.x,a+=fn.y);let l=Math.sin(this.camYaw),c=Math.cos(this.camYaw),h=-l*a+c*o,f=-c*a-l*o,u=Math.hypot(h,f);u>1&&(h/=u,f/=u);let d={mx:r?h:0,mz:r?f:0,jumpPressed:r&&Li.jump,jumpHeld:r&&(on.has("Space")||fn.jump),divePressed:r&&Li.dive};Li.jump=!1,Li.dive=!1;let g=Math.max(1,Math.ceil(t/(1/90))),_=t/g,m=!1;for(let w=0;w<g;w++)od(n,e,_,d),d.jumpPressed=!1,d.divePressed=!1,e.events.length&&(m=this.events(e)||m,e.events.length=0);if(r){let w=n.checkHazards(e,i);w&&Cl(e,w.nx,w.nz,w.pow)&&(Gt.hit(),this.particles.emit(e.x,e.y+.9,e.z,26,{color:"#ffffff",speed:5,up:3,life:.5,size:.3}),this.particles.emit(e.x,e.y+.9,e.z,14,{color:"#ffd23f",speed:7,up:4,life:.4,size:.25}))}this.updateBat(t,e),this.updatePowerups(t,e),this.softCollide(e),this.checkpoints(e),!this.finished&&i>=0&&e.z<this.info.finishZ&&e.y>this.info.finishY-3&&Math.abs(e.x)<16&&this.onLocalFinish(),e.grounded&&!e.stun&&(this.stepDist+=Math.hypot(e.vx,e.vz)*t,this.stepDist>2.4&&(this.stepDist=0,Math.hypot(e.vx,e.vz)>3&&(Gt.step(),this.particles.emit(e.x,e.y+.05,e.z,2,{color:"#ffffff",speed:.8,up:.8,life:.35,size:.22,gravity:1}))));let p=this.me.model,S=p.group;if(S.position.set(e.x,e.y,e.z),S.rotation.y=e.yaw,p.update(t,{speed:Math.hypot(e.vx,e.vz),grounded:e.grounded,vy:e.vy,stun:e.stun,dive:e.dive,celebrate:this.finished||this.over&&this.winnerSelf,swing:this.swingT,shield:e.shield>0,leader:this.leaderId===this.localId,mega:this.swingMega&&this.swingT>0,landed:m}),this.tagScale(this.me.tag,S.position,.85),this.multi){this.leaderId=this.findLeader();for(let w of this.remotes.values())w.leader=w.id===this.leaderId,w.update(w.snaps.length?w.renderTime():0,t),this.tagScale(w.tag,w.model.group.position,1),w.flags&64&&Math.random()<.6&&this.particles.emit(w.x,w.y+.3,w.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});if(this.sendT+=t,this.sendT>=.033){this.sendT=0;let w=(e.grounded?1:0)|(e.stun>0?2:0)|(e.dive>0?4:0)|(this.finished?8:0)|(this.swingT>0?16:0)|(e.shield>0?32:0)|(this.fx.turbo>0?64:0)|(this.swingMega&&this.swingT>0?128:0);ut.net.send({t:"s",x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),r:+e.yaw.toFixed(2),a:w,sp:+Math.hypot(e.vx,e.vz).toFixed(1),ts:Math.round(ut.net.now()),rs:this.rs})}}!this.multi&&!this.over&&i>=this.meta.limit&&!this.finished&&this.endSingle(!0),this.updateCamera(t),this.updateLights(),this.water.material.uniforms.time.value=performance.now()/1e3,this.water.position.x=this.camera.position.x,this.water.position.z=this.camera.position.z,this.sky.position.copy(this.camera.position),this.scenery.update(i,this.camera.position),this.ambient.update(performance.now()/1e3,this.camera.position),this.particles.update(t),this.hud(t)}events(t){let e=!1;for(let n of t.events)if(n==="jump")Gt.jump(),this.particles.emit(t.x,t.y+.05,t.z,5,{color:"#ffffff",speed:1.5,up:1,life:.35,size:.25,gravity:2});else if(n==="land")Gt.land(t.landSpeed),e=!0,this.particles.emit(t.x,t.y+.05,t.z,Math.min(14,5+t.landSpeed*.4),{color:"#ffffff",speed:2.4,up:1.4,life:.45,size:.3,gravity:3});else if(n==="bounce")Gt.bounce(),e=!0,this.particles.emit(t.x,t.y+.1,t.z,18,{rainbow:!0,speed:3,up:2,life:.6,size:.3});else if(n==="dive")Gt.dive();else if(n==="splash"){Gt.splash();let i=ca[this.meta.key],r=i.water==="lava"?"#ff9a2a":i.water==="grid"?"#d11cff":"#bfeaff";this.particles.emit(t.x,this.world.waterY+.2,t.z,40,{color:r,speed:4,up:9,life:.9,size:.5,gravity:16,spread:.6})}else n==="fell"&&this.onFell();return e}onFell(){let t=this.me.body,e=this.cpCur,n=(this.slot-1)*1.6,i,r,a;if(e)i=Bn(e.x+n,e.x-e.w/2+1.5,e.x+e.w/2-1.5),r=e.y+.05,a=e.spawn[2];else{let l=this.spawnPoint(this.slot);i=l[0],r=l[1]+.02,a=l[2]}bh(t,i,r,a,Math.PI),this.rs++,Gt.respawn();let o=ct("flash");o.classList.add("on"),setTimeout(()=>o.classList.remove("on"),60),this.particles.emit(i,r+.8,a,30,{rainbow:!0,speed:3,up:3,life:.8,size:.3}),this.camInit=!1,this.camYaw=0}checkpoints(t){let e=this.world.checkpoints;for(;this.cpIdx<e.length&&t.z<e[this.cpIdx].z&&t.y>e[this.cpIdx].y-2.5&&Math.abs(t.x-e[this.cpIdx].x)<e[this.cpIdx].w/2+3;)this.cpCur=e[this.cpIdx],this.cpIdx++,Gt.checkpoint(),this.toast("CHECKPOINT!"),this.particles.emit(t.x,t.y+1,t.z,24,{color:"#ffd23f",speed:3,up:5,life:.8,size:.3})}softCollide(t){if(this.finished)return;let e=ce.R*2+.06;for(let n of this.remotes.values()){if(!n.has||n.flags&8)continue;let i=t.x-n.x,r=t.z-n.z,a=t.y-n.y;if(Math.abs(a)>ce.H*.8)continue;let o=Math.hypot(i,r);if(o>=e)continue;let l,c;if(o>.001)l=i/o,c=r/o;else{let m=t.yaw*7+1;l=Math.cos(m),c=Math.sin(m)}let h=e-o;t.x+=l*h*.62,t.z+=c*h*.62;{let m=Math.sin(t.yaw),p=Math.cos(t.yaw);if(Math.hypot(t.vx,t.vz)>1&&-(m*l+p*c)>.3){let w=-c,x=l,b=m*w+p*x;Math.abs(b)<.3&&(b=-p*w+m*x||1),b=Math.sign(b),t.x+=w*b*h*.55,t.z+=x*b*h*.55}}let f=n.vx||0,u=n.vz||0,d=(t.vx-f)*l+(t.vz-u)*c;if(this.multi&&d<-1.5){let m=performance.now();n.shoveAt>m-80||(n.shoveAt=m,ut.net.send({t:"shove",to:n.id,nx:+(-l).toFixed(3),nz:+(-c).toFixed(3),p:+Math.min(12,-d).toFixed(1)}))}let g=performance.now(),_=!(n.lastContact>g-150);if(n.lastContact=g,d<0&&_){let m=-1.7*d*.5;t.vx+=l*m,t.vz+=c*m,m>2.5&&(t.noCtrl=Math.max(t.noCtrl,.16)),n.flags&4&&-d>7&&t.hitCd<=0&&Cl(t,l,c,11)?this.bonked("TACKLED!",n.name||"",t):-d>6&&t.hitCd<=0&&(Gt.land(6),this.particles.emit(t.x-l*.4,t.y+.9,t.z-c*.4,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}}}bonked(t,e,n){Gt.bonk(),this.toast(t+(e?"  \u2022 "+e:"")),this.particles.emit(n.x,n.y+1,n.z,22,{color:"#ffffff",speed:6,up:3,life:.5,size:.3}),this.particles.emit(n.x,n.y+1,n.z,14,{color:"#ffd23f",speed:8,up:4,life:.45,size:.28})}swing(){return!this.multi||this.over||this.finished||this.levelTime<0||this.batCd>0||this.me.body.stun>0?!1:(this.swingMega=this.fx.mega>0,this.swingMega&&this.fx.mega--,this.batCd=1.1,this.swingT=.001,this.batPending=!0,Gt.swing(),!0)}updateBat(t,e){this.batCd>0&&(this.batCd-=t),this.swingT>0&&(this.swingT+=t/.42,e.stun>0?(this.swingT=0,this.batPending=!1):this.batPending&&this.swingT>=.55&&(this.batPending=!1,this.batHit(e)),this.swingT>=1&&(this.swingT=0))}batHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw);for(let i of this.remotes.values()){if(!i.has||i.flags&8)continue;let r=i.x-t.x,a=i.z-t.z,o=i.y-t.y,l=Math.hypot(r,a);if(l>(this.swingMega?4.4:2.9)||Math.abs(o)>1.7||l<.001||(r*e+a*n)/l<.1)continue;let c=e*.7+r/l*.3,h=n*.7+a/l*.3,f=Math.hypot(c,h)||1;c/=f,h/=f,ut.net.send({t:"bat",to:i.id,nx:+c.toFixed(3),nz:+h.toFixed(3),p:this.swingMega?2:1}),Gt.bonk(),this.toast("BONK!  \u2022 "+(i.name||"")),this.particles.emit(i.x,i.y+1,i.z,24,{color:"#ffd23f",speed:7,up:4,life:.5,size:.3}),this.particles.emit(i.x,i.y+1,i.z,14,{color:"#ffffff",speed:5,up:3,life:.4,size:.25})}}onShove(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0||e.shield>0)return;let n=Bn(+t.p||0,0,12),i=+t.nx,r=+t.nz;!Number.isFinite(i)||!Number.isFinite(r)||(e.x+=i*n*.05,e.z+=r*n*.05,e.vx+=i*n*.12,e.vz+=r*n*.12)}onBat(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0)return;let n=(this.players.find(r=>r.id===t.from)||{}).name||"";if(e.hitCd=0,e.shield>0){this.toast("SHIELD BLOCKED!"),Gt.pickup();return}let i=t.p===2;Cl(e,t.nx,t.nz,i?22:15)&&(e.vy=i?11:9,e.stun=i?1:.75,this.bonked(i?"MEGA BONK!":"BONKED!",n,e))}buildBoxes(){this.boxes=[];let t=[],e=(i,r,a)=>[-4,0,4].forEach(o=>t.push({x:i+o,y:a+1.35,z:r}));e(0,-10,0);let n=1e9;for(let i of this.world.checkpoints)Math.abs(i.z-n)<12||(n=i.z,e(i.x,i.z-5,i.y));if(!s.boxAssets){let i=document.createElement("canvas");i.width=i.height=128;let r=i.getContext("2d"),a=r.createLinearGradient(0,0,128,128);a.addColorStop(0,"#ffe45e"),a.addColorStop(1,"#ff8a1a"),r.fillStyle=a,r.fillRect(0,0,128,128),r.strokeStyle="#fff",r.lineWidth=8,r.strokeRect(6,6,116,116),r.fillStyle="#fff",r.strokeStyle="#7a3500",r.lineWidth=6,r.font="bold 92px Arial",r.textAlign="center",r.textBaseline="middle",r.strokeText("?",64,70),r.fillText("?",64,70);let o=new Sn(i);o.colorSpace=Ie,s.boxAssets={geo:new De(.95,.95,.95),mat:new Se({map:o,emissive:"#ff9a00",emissiveIntensity:.55,roughness:.35})}}for(let i of t){let r=new ot(s.boxAssets.geo,s.boxAssets.mat);r.position.set(i.x,i.y,i.z),r.castShadow=!0,this.scene.add(r),this.boxes.push({...i,mesh:r,respawn:0})}}findLeader(){if(this.players.length<2||this.levelTime<4)return-1;let t=this.localId,e=this.finished?1e5:-this.me.body.z;for(let n of this.remotes.values()){if(!n.has)continue;let i=n.flags&8?1e5:-n.z;i>e+.5&&(e=i,t=n.id)}return t}pickup(t,e){t.respawn=9,t.mesh.visible=!1,Gt.pickup();let n=this.multi?["turbo","turbo","turbo","jump","jump","shield","shield","mega","mega","mega"]:["turbo","jump","shield"],i=e||n[Math.random()*n.length|0],r=this.fx,a=this.me.body;return i==="turbo"?(r.turbo=5,this.toast("\u{1F680} TURBO!")):i==="jump"?(r.jump=7,this.toast("\u{1F998} SUPER JUMP!")):i==="shield"?(r.shield=8,this.toast("\u{1F6E1}\uFE0F SHIELD!")):(r.mega=2,this.toast("\u{1F3CF} MEGA BAT x2!")),this.particles.emit(a.x,a.y+1,a.z,26,{rainbow:!0,speed:4,up:4,life:.7,size:.32}),i}updatePowerups(t,e){let n=performance.now()/1e3,i=this.fx;for(let a of this.boxes){if(a.respawn>0){a.respawn-=t,a.respawn<=0&&(a.mesh.visible=!0);continue}a.mesh.rotation.y+=t*2,a.mesh.rotation.x=Math.sin(n*1.5+a.x)*.25,a.mesh.position.y=a.y+Math.sin(n*2.5+a.x)*.15,!(this.finished||this.over||this.levelTime<0)&&Math.abs(e.x-a.x)<1.3&&Math.abs(e.z-a.z)<1.3&&e.y<a.y+.8&&e.y+ce.H>a.y-.5&&this.pickup(a)}for(let a of["turbo","jump","shield"])i[a]>0&&(i[a]=Math.max(0,i[a]-t));e.speedMul=i.turbo>0?1.4:1,e.jumpMul=i.jump>0?1.3:1,e.shield=i.shield,i.turbo>0&&Math.hypot(e.vx,e.vz)>3&&Math.random()<.7&&this.particles.emit(e.x,e.y+.3,e.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});let r=["turbo","jump","shield"].map(a=>i[a]>0?a+Math.ceil(i[a]):"").join("|")+"|"+i.mega;if(r!==this.fxSig){this.fxSig=r;let a=ct("hud-fx");if(!a)return;a.innerHTML="";let o=(l,c)=>{let h=document.createElement("div");h.className="fx",h.textContent=l+" "+c,a.appendChild(h)};i.turbo>0&&o("\u{1F680}",Math.ceil(i.turbo)+"s"),i.jump>0&&o("\u{1F998}",Math.ceil(i.jump)+"s"),i.shield>0&&o("\u{1F6E1}\uFE0F",Math.ceil(i.shield)+"s"),i.mega>0&&o("\u{1F3CF}","x"+i.mega)}}onLocalFinish(){this.finished=!0,this.finishTime=Math.max(0,this.levelTime),Gt.finish();let t=this.info.finishZ;this.particles.emit(0,this.info.finishY+6,t,120,{rainbow:!0,speed:9,up:10,life:1.8,size:.5,gravity:7,spread:10}),this.particles.emit(-9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.particles.emit(9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.multi?this.toast("FINISHED!"):this.endSingle(!1)}endSingle(t){if(this.over)return;this.over=!0,this.winnerSelf=!t;let e=-this.info.finishZ,n=Bn(-this.me.body.z/e,0,1),i="";if(!t){let a=this.finishTime,o=bd(this.level);!o||a<o?(localStorage.setItem("ph_best_"+this.level,String(a)),i=o?"NEW BEST TIME!":"First clear!"):i=`Best: ${Ol(o)}`}let r=[{place:1,name:this.me.name,char:this.me.char,win:!t,tm:t?`${Math.round(n*100)}% of the track`:Ol(this.finishTime),self:!0}];setTimeout(()=>ut.showResults({title:t?"TIME'S UP!":"YOU DID IT!",sub:t?"You ran out of time. Try again!":i,rows:r,single:!0,win:!t}),t?300:1400),Ul(!0),t?Gt.lose():Gt.win()}onFin(t){this.finishedMap.set(t.id,t.place);let e=this.players.find(n=>n.id===t.id);t.id===this.localId?this.toast(`${Lh(t.place)} PLACE!`):(this.toast(`${e?e.name:"Player"} finished ${Lh(t.place)}!`),Gt.checkpoint())}onEnd(t){this.over=!0;let e=t.winnerId===this.localId;this.winnerSelf=e,Ul(!0),e?Gt.win():Gt.lose();let n=t.results.map(r=>({place:r.place,name:r.name,char:r.char,win:r.id===t.winnerId,self:r.id===this.localId,tm:r.finished?Ol(r.time):`${Math.round(r.progress*100)}% of the track`})),i=t.results[0];setTimeout(()=>ut.showResults({title:e?"YOU WIN!":`${i?i.name:"Nobody"} WINS!`,sub:t.reason==="time"?"Time's up - the nearest player to the finish gate wins!":"First to the finish gate wins!",rows:n,single:!1,win:e}),900)}addRemote(t){this.remotes.has(t.id)||(this.players.push(t),this.remotes.set(t.id,new fa(t,this.scene)),this.buildProgress(),this.toast(t.name+" joined the race!"))}removeRemote(t){let e=this.remotes.get(t);if(e){e.dispose(this.scene),this.remotes.delete(t);let n=this.dots.get(t);n&&n.remove()}}tagScale(t,e,n){let i=e.distanceTo(this.camera.position),r=Bn(i*.07,1,5.2)*n;t.scale.set(2.8*r,.7*r,1),t.visible=i<260}updateCamera(t){let e=this.me.body,n=Math.cos(this.camPitch),i=Math.sin(this.camPitch),r=Math.hypot(e.vx,e.vz);this.camera.fov=ts(this.camera.fov,62+Bn(r-10,0,12)*.9,Math.min(1,t*4)),this.camera.updateProjectionMatrix();let a=e.x,o=e.y+1.35,l=e.z;this.camInit||(this.camTarget.set(a,o,l),this.camInit=!0);let c=1-Math.exp(-14*t);this.camTarget.x+=(a-this.camTarget.x)*c,this.camTarget.z+=(l-this.camTarget.z)*c,this.camTarget.y+=(o-this.camTarget.y)*(1-Math.exp(-7*t)),this.camera.position.set(this.camTarget.x+Math.sin(this.camYaw)*n*this.camDist,this.camTarget.y+i*this.camDist+.4,this.camTarget.z+Math.cos(this.camYaw)*n*this.camDist),this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}updateLights(){let t=this.camTarget;this.sun.position.set(t.x+this.sunDir.x,t.y+this.sunDir.y,t.z+this.sunDir.z),this.sun.target.position.copy(t)}count(t){let e=ct("hud-count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}toast(t){let e=ct("hud-toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}rank(){var i;let t=this.me.body,e=1,n=(i=this.finishedMap.get(this.localId))!=null?i:this.finished&&!this.multi?1:null;if(n)return n;for(let r of this.remotes.values())(this.finishedMap.get(r.id)||r.has&&r.z<t.z-.5)&&e++;return e}hud(t){if(this.hudT+=t,this.hintT>0&&(this.hintT-=t,this.hintT<=0&&ct("hud-hint").classList.add("fade")),this.hudT<.066)return;this.hudT=0;let e=this.levelTime,n=e<0?this.meta.limit:this.meta.limit-e,i=ct("hud-timer"),r=Math.max(0,Math.ceil(n));i.textContent=`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,i.classList.toggle("low",n<10&&e>=0);{let h=ct("b-timer");h&&(h.classList.toggle("hidden",!this.multi),h.classList.toggle("off",!ut.timerOn),h.textContent=hi?"\u23F1 "+(ut.timerOn?"ON":"OFF"):"\u23F1 TIMER: "+(ut.timerOn?"ON":"OFF")+" (T)"),ct("hud-hint").classList.toggle("single",!this.multi),document.body.classList.toggle("single",!this.multi)}i.style.visibility=this.multi&&!ut.timerOn?"hidden":"",e>=0&&n<6&&n>0&&Math.ceil(n)!==this.warnSec&&!this.over&&(this.warnSec=Math.ceil(n),Gt.warn()),ct("hud-rank").textContent=this.multi?Lh(this.rank())+" / "+this.players.length:`${Math.max(0,Math.round(Bn(-this.me.body.z/-this.info.finishZ,0,1)*100))}%`;let a=-this.info.finishZ,o=(h,f)=>{let u=this.dots.get(h);u&&(u.style.left=Bn(-f/a,0,1)*100+"%")};o(this.localId,this.me.body.z);for(let h of this.remotes.values())o(h.id,h.has?h.z:0);let l=ct("click-hint"),c=!this.over&&!this.menuOpen&&document.pointerLockElement!==Di;c!==l.classList.contains("show")&&l.classList.toggle("show",c);{let h=ct("t-bat");h&&h.classList.toggle("cd",this.batCd>0)}this.multi&&(ct("hud-net").textContent=`ping ${Math.round(ut.net.rtt)} ms`)}render(){dn.render(this.scene,this.camera)}destroy(){Ph(),document.body.classList.remove("in-race"),document.body.classList.remove("single"),ct("pause").classList.add("hidden"),this.menuOpen=!1,ct("hud").classList.add("hidden"),ct("hud-count").textContent="",ct("hud-toast").classList.remove("show");{let t=ct("hud-fx");t&&(t.innerHTML="")}for(let t of this.remotes.values())t.dispose(this.scene);this.me.model.dispose(),this.scenery.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),this.scene.clear()}},Q_=["title","profile","levels","mp","lobby","results","help"];function Tn(s){for(let t of Q_){let e=ct("s-"+t);e.classList.toggle("active",t===s),e.classList.remove("hidden")}ut.screen=s}var yd=0;function da(s){let t=ct("toast-global");t.textContent=s,t.classList.add("show"),clearTimeout(yd),yd=setTimeout(()=>t.classList.remove("show"),3200)}function Ed(s,t){s.innerHTML="",oi.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.innerHTML=`<img alt="${e.name}" src="${Nh[e.id]||""}"><b style="color:${e.color}">${e.name}</b>${t.small?"":`<span>${e.tag}</span>`}`,n.onclick=()=>t.onPick(e.id),s.appendChild(n)})}function Fh(s,t,e){s.querySelectorAll(".card").forEach(n=>{let i=+n.dataset.id;n.classList.toggle("sel",i===t),n.classList.toggle("taken",e&&e.has(i)&&i!==t)})}function wd(s,t){s.innerHTML="",ra.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.style.background=`linear-gradient(160deg, ${e.colors[0]}cc, ${e.colors[1]}cc)`;let i=bd(e.id);n.innerHTML=`<div><h4>${e.id+1}. ${e.name}</h4><div class="stars">${"\u2605".repeat(e.stars)}${"\u2606".repeat(5-e.stars)}</div></div><div class="blurb">${e.blurb}</div><div class="meta">${e.sub} &bull; ${Math.floor(e.limit/60)}:${String(e.limit%60).padStart(2,"0")} limit${i?" &bull; best "+Ol(i):""}</div>`,n.onclick=()=>t.onPick(e.id),s.appendChild(n)})}function ty(){let s=new na({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});s.setSize(256,320,!1),s.outputColorSpace=Ie,s.toneMapping=Vs,s.setClearColor(0,0);let t=new si;t.add(new Wi("#ffffff","#b9a4ff",1.6));let e=new Xi("#ffffff",2.6);e.position.set(3,5,6),t.add(e);let n=new Ji(s);t.environment=n.fromScene(new sa,.04).texture,t.environmentIntensity=.7;let i=new Ge(30,256/320,.1,50);i.position.set(0,1.25,6.6),i.lookAt(0,.98,0);let r=[];for(let a=0;a<oi.length;a++){let o=new ji(a);o.group.rotation.y=-.35,t.add(o.group),o.update(.016,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1}),s.render(t,i),r.push(s.domElement.toDataURL("image/png")),t.remove(o.group),o.dispose()}return n.dispose(),s.dispose(),s.forceContextLoss(),r}function ua(s){ut.mode=s,ct("inp-name").value=ut.name,ct("profile-title").textContent="Choose your player",Ed(ct("char-cards"),{onPick:t=>{ut.char=t,Fh(ct("char-cards"),t),ke.sel=t,Gt.select(),ke.burst(t)}}),Fh(ct("char-cards"),ut.char),ke.setTitle(ut.char),ke.mode="profile",ke.sel=ut.char,Tn("profile")}function ey(){let s=ct("inp-name").value.trim().replace(/[<>&"']/g,"").slice(0,14);return s||(s=["Haris","Speedy","Bouncy","Zippy"][Math.floor(Math.random()*4)]+Math.floor(Math.random()*90+10)),ut.name=s,localStorage.setItem("ph_name",s),localStorage.setItem("ph_char",String(ut.char)),s}function Td(){wd(ct("level-cards"),{onPick:s=>{Gt.go(),Hl(s)}}),Tn("levels")}function Hl(s){ci(),rt&&(rt.destroy(),rt=null),ut.level=s,rt=new zl(s,[{id:1,name:ut.name,char:ut.char}],1,{multi:!1,t0:performance.now()+3600}),es(),Tn("none"),ct("s-results").classList.add("hidden"),pa()}ut.showResults=function(s){let t=ct("res-list");t.innerHTML="",s.rows.forEach(i=>{let r=document.createElement("div");r.className="res-row"+(i.win?" win":"");let a=oi[i.char];r.innerHTML=`<div class="place">${i.place<=3?$_[i.place-1]:i.place}</div><div class="nm"><i style="background:${a.color}"></i>${i.name.replace(/[<>&]/g,"")}${i.self?" <small>(you)</small>":""}</div><div class="tm">${i.tm}</div>`,t.appendChild(r)}),ct("res-title").textContent=s.title,ct("res-sub").textContent=s.sub||"";let e=ct("b-res-retry"),n=ct("b-res-next");if(s.single)e.style.display="",e.textContent="RETRY",n.style.display="",n.textContent=ut.level<ra.length-1?"NEXT LEVEL":"LEVELS",n.disabled=!1,ut.resMode="single";else{e.style.display="none";let i=ut.room&&ut.room.hostId===ut.myId;n.style.display="",n.textContent=i?"BACK TO LOBBY":"WAITING FOR HOST...",n.disabled=!i,ut.resMode="multi"}ma(),Tn("results")};ct("b-res-menu").onclick=()=>{Gt.back(),Bh()};ct("b-res-retry").onclick=()=>{Gt.click(),Hl(ut.level)};ct("b-res-next").onclick=()=>{Gt.click(),ut.resMode==="single"?ut.level<ra.length-1?Hl(ut.level+1):(rt&&rt.destroy(),rt=null,Td()):ut.net.send({t:"again"})};function Bh(){rt&&(rt.destroy(),rt=null),ut.net&&ut.room&&ut.net.send({t:"leave"}),ut.room=null,ma(),ke.setTitle(),Tn("title")}async function ny(){if(ut.net&&ut.net.connected)return ut.net;let s=new Fl;return s.on("joined",t=>{ut.myId=t.id}),s.on("lobby",sy),s.on("err",t=>{ct("mp-status").textContent=t.msg,t.retry&&ut.screen==="mp"?(kl(),Bl=setTimeout(()=>{ut.screen==="mp"&&!ut.room&&Oh("join")},2e3)):da(t.msg)}),s.on("go",ry),s.on("s",t=>{if(rt&&rt.multi){let e=rt.remotes.get(t.id);e&&e.push(t)}}),s.on("fin",t=>{rt&&rt.multi&&rt.onFin(t)}),s.on("bat",t=>{rt&&rt.multi&&rt.onBat(t)}),s.on("shove",t=>{rt&&rt.multi&&rt.onShove(t)}),s.on("end",t=>{rt&&rt.multi&&rt.onEnd(t)}),s.on("left",t=>{rt&&rt.multi&&rt.removeRemote(t.id)}),s.on("close",()=>{da("Disconnected from server"),rt&&(rt.destroy(),rt=null),ut.room=null,ma(),ke.setTitle(),Tn("title")}),await s.connect(),ut.net=s,s}function iy(){ct("mp-status").textContent="",ke.setTitle(ut.char),Tn("mp")}var Bl=null;function kl(){Bl&&(clearTimeout(Bl),Bl=null)}async function Oh(s){ci(),kl();let t=ct("mp-status");t.textContent="Connecting...";try{let e=await ny();s==="create"?e.send({t:"create",name:ut.name,char:ut.char}):e.send({t:"join",name:ut.name,char:ut.char}),t.textContent=s==="create"?"":"Looking for a room..."}catch{t.textContent="Could not connect to the game server. Is it running?",da("Could not connect to the game server")}}function sy(s){kl();let t=!ut.room,e=ut.room;if(ut.room=s,rt&&rt.multi){for(let n of s.players)n.id!==ut.myId&&!rt.remotes.has(n.id)&&(s.phase==="race"||s.phase==="countdown")&&rt.addRemote(n);if(s.phase==="lobby"&&ut.screen!=="lobby")rt.destroy(),rt=null,ma(),vd(),Tn("lobby"),js(6);else if(ut.screen==="results"){let n=s.hostId===ut.myId;ut.resMode==="multi"&&(ct("b-res-next").textContent=n?"BACK TO LOBBY":"WAITING FOR HOST...",ct("b-res-next").disabled=!n)}return}(t||ut.screen==="mp"||ut.screen==="profile"||ut.screen==="title")&&(s.phase==="lobby"||s.phase==="results")&&(Tn("lobby"),js(6)),e&&s.players.length>e.players.length&&Gt.join(),vd()}function vd(){let s=ut.room;if(!s)return;let t=s.players.find(r=>r.id===ut.myId);t&&(ut.char=t.char),ct("lobby-code").textContent=s.code,ct("lobby-count").textContent=`${s.players.length}/${4}`;let e=ct("lobby-players");e.innerHTML="";for(let r=0;r<4;r++){let a=s.players[r],o=document.createElement("div");o.className="slot"+(a?"":" empty"),o.innerHTML=a?`<i style="background:${oi[a.char].color}"></i><span>${a.name.replace(/[<>&]/g,"")}</span>${a.id===s.hostId?"<span>\u{1F451}</span>":""}${a.id===ut.myId?'<span class="you">YOU</span>':""}`:'<i style="background:#888"></i><span>Waiting for player...</span>',e.appendChild(o)}let n=new Set(s.players.filter(r=>r.id!==ut.myId).map(r=>r.char));Ed(ct("lobby-chars"),{small:!0,onPick:r=>{n.has(r)||(Gt.select(),ut.net.send({t:"char",char:r}))}}),Fh(ct("lobby-chars"),ut.char,n);let i=s.hostId===ut.myId;wd(ct("lobby-levels"),{onPick:r=>{i&&(Gt.click(),ut.net.send({t:"level",level:r}))}}),ct("lobby-levels").querySelectorAll(".card").forEach(r=>{r.classList.toggle("sel",+r.dataset.id===s.level),i||(r.style.cursor="default")}),ct("lobby-level-note").textContent=i?"(you choose)":"(host chooses)",ct("b-start").disabled=!i,ct("b-start").firstElementChild.textContent=i?"START RACE":"WAITING FOR HOST",ct("lobby-hint").textContent=i?s.players.length<2?"Tell friends to tap MULTIPLAYER on the same link. You can also start alone.":"Everyone ready? Hit start!":"The host will start the race.",ke.setLobby(s.players)}function ry(s){ci(),rt&&(rt.destroy(),rt=null);let t=ut.room;if(!t)return;let e=s.order.map(n=>t.players.find(i=>i.id===n)).filter(Boolean);ut.level=s.level,rt=new zl(s.level,e,ut.myId,{multi:!0,t0:s.t0}),es(),Tn("none"),pa()}function pa(){if(rt&&!rt.over&&document.pointerLockElement!==Di)try{let s=Di.requestPointerLock();s&&s.catch&&s.catch(()=>{})}catch{}}function ma(){document.pointerLockElement&&document.exitPointerLock()}document.addEventListener("pointerlockchange",()=>{let s=document.pointerLockElement===Di;s?Dh=!0:Dh&&rt&&!rt.over&&!rt.menuOpen&&!hi&&Gh(),s||(Dh=!1),ct("click-hint").classList.toggle("show",!!rt&&!rt.over&&!rt.menuOpen&&!s)});var Dh=!1,Gl=!1;Di.addEventListener("mousedown",s=>{Gl=!0,rt&&!rt.over&&(s.button===0&&rt.multi&&document.pointerLockElement===Di&&!rt.menuOpen?rt.swing():pa())});window.addEventListener("mouseup",()=>{Gl=!1});window.addEventListener("mousemove",s=>{rt&&!rt.over&&(document.pointerLockElement===Di||Gl)&&rt.look(s.movementX,s.movementY)});ct("click-hint").addEventListener("click",pa);window.addEventListener("keydown",s=>{if(s.target&&s.target.tagName==="INPUT"){s.code==="Enter"&&(ut.screen==="profile"?ct("b-profile-next").click():ut.screen==="mp"&&ct("b-join").click());return}rt&&!rt.over&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(s.code)&&s.preventDefault(),!s.repeat&&(on.add(s.code),s.code==="Space"&&(Li.jump=!0),(s.code==="ShiftLeft"||s.code==="ShiftRight"||s.code==="KeyF")&&(Li.dive=!0),s.code==="KeyM"&&Hh(),s.code==="KeyT"&&zh(),s.code==="KeyB"&&rt&&!rt.menuOpen&&rt.swing(),(s.code==="Escape"||s.code==="KeyP")&&rt&&!rt.over&&(rt.menuOpen?Vl():Gh()))});window.addEventListener("keyup",s=>on.delete(s.code));window.addEventListener("blur",()=>{on.clear(),Gl=!1});window.addEventListener("resize",es);try{ut.timerOn=localStorage.getItem("ph_timer")!=="0"}catch{ut.timerOn=!0}function zh(){if(!rt||!rt.multi)return;ut.timerOn=!ut.timerOn;try{localStorage.setItem("ph_timer",ut.timerOn?"1":"0")}catch{}let s=ct("b-timer");s&&(s.textContent="\u23F1 TIMER: "+(ut.timerOn?"ON":"OFF")+" (T)",s.classList.toggle("off",!ut.timerOn)),kh(),ct("hud-timer").style.visibility=ut.timerOn?"":"hidden",Gt.click()}{let s=ct("b-timer");s&&s.addEventListener("click",()=>{zh(),s.blur()})}function Hh(){ut.muted=!ut.muted,xd(ut.muted),ct("b-sound").textContent="SOUND: "+(ut.muted?"OFF":"ON"),kh()}function Ad(){ct("p-gfx").textContent="\u{1F5A5} GFX: "+(ee.low?"LOW":"AUTO")}function kh(){ct("p-sound").textContent="\u{1F50A} SOUND: "+(ut.muted?"OFF":"ON"),ct("p-timer").textContent="\u23F1 TIMER: "+(ut.timerOn?"ON":"OFF")}function Gh(){!rt||rt.over||rt.menuOpen||(rt.menuOpen=!0,rt.multi||(rt.paused=!0,rt.pauseAt=performance.now()),ma(),on.clear(),fn.x=fn.y=0,fn.jump=!1,ct("p-title").textContent=rt.multi?"Menu":"Paused",ct("p-info").textContent=rt.meta.name+(rt.multi?"  \u2022  race goes on!":""),ct("p-timer").classList.toggle("hidden",!rt.multi),Ad(),ct("p-retry").classList.toggle("hidden",rt.multi),ct("p-full").classList.toggle("hidden",!(document.documentElement&&document.documentElement.requestFullscreen)),kh(),ct("pause").classList.remove("hidden"),ct("click-hint").classList.remove("show"),Gt.click())}function Vl(){!rt||!rt.menuOpen||(rt.paused&&(rt.t0+=performance.now()-rt.pauseAt,rt.paused=!1),rt.menuOpen=!1,ct("pause").classList.add("hidden"),pa())}ct("b-menu").addEventListener("click",()=>rt&&rt.menuOpen?Vl():Gh());ct("p-resume").onclick=()=>{Gt.click(),Vl()};ct("p-sound").onclick=()=>{ci(),Hh(),Gt.click()};ct("p-timer").onclick=()=>zh();ct("p-gfx").onclick=()=>{ee.low=!ee.low;try{localStorage.setItem("ph_low",ee.low?"1":"0")}catch{}Gt.click(),K_(),Ad()};ct("p-full").onclick=()=>{let s=document,t=s.documentElement;try{!s.fullscreenElement&&t.requestFullscreen?t.requestFullscreen({navigationUI:"hide"}):s.exitFullscreen&&s.fullscreenElement&&s.exitFullscreen()}catch{}};ct("p-retry").onclick=()=>{Gt.click();let s=ut.level;ct("pause").classList.add("hidden"),rt&&(rt.menuOpen=!1),Hl(s)};ct("p-quit").onclick=()=>{Gt.back(),ct("pause").classList.add("hidden"),Bh()};async function ay(){await fd(),ke=new Uh;try{Nh=ty()}catch{Nh=["","","",""]}es(),ke.setTitle(),Tn("title"),ct("b-single").onclick=()=>{ci(),js(6),Gt.click(),ua("single")},ct("b-multi").onclick=()=>{ci(),js(6),Gt.click(),ua("multi")},ct("b-help").onclick=()=>{ci(),Gt.click(),ct("s-help").classList.add("active")},ct("b-help-close").onclick=()=>{Gt.back(),ct("s-help").classList.remove("active")},ct("b-sound").onclick=()=>{ci(),Hh(),Gt.click()},ct("b-profile-back").onclick=()=>{Gt.back(),ke.setTitle(),Tn("title")},ct("b-profile-next").onclick=()=>{ey(),Gt.click(),ut.mode==="single"?Td():iy()},ct("b-levels-back").onclick=()=>{Gt.back(),ua("single")},ct("b-mp-back").onclick=()=>{Gt.back(),kl(),ua("multi")},ct("b-create").onclick=()=>{Gt.click(),Oh("create")},ct("b-join").onclick=()=>{Gt.click(),Oh("join")},ct("b-leave").onclick=()=>{Gt.back(),Bh()},ct("b-start").onclick=()=>{ut.room&&ut.room.hostId===ut.myId&&(Gt.click(),ut.net.send({t:"start"}))},ct("b-copy").onclick=async()=>{let n=`${location.origin}${location.pathname}?room=${ut.room?ut.room.code:""}`;try{await navigator.clipboard.writeText(n),da("Invite link copied!")}catch{prompt("Copy this invite link:",n)}},new URLSearchParams(location.search).get("room")&&(ua("multi"),da("Pick your name & player, then CONTINUE and JOIN ROOM")),ct("loader").classList.add("done"),setTimeout(()=>ct("loader").remove(),600);let t=performance.now(),e=n=>{requestAnimationFrame(e);let i=Math.min(.05,(n-t)/1e3);t=n,J_(i),rt?(rt.over&&rt.menuOpen&&Vl(),rt.paused||rt.update(i),rt.render()):(ke.update(i),dn.render(ke.scene,ke.camera))};requestAnimationFrame(e)}ay().catch(s=>{console.error(s);let t=document.querySelector("#loader p");t&&(t.textContent="Error: "+s.message)});window.__ph={app:ut,Remote:fa,get race(){return rt},get stage(){return ke}};(function(){hi&&document.body.classList.add("touch");let t=ct("touch"),e=ct("joy"),n=ct("joy-knob");if(!t||!e||!n)return;let i=56,r=null,a=null,o=0,l=0,c=0,h=0,f=(g,_)=>{for(let m of g)if(m.identifier===_)return m;return null};t.addEventListener("touchstart",g=>{g.preventDefault();for(let _ of g.changedTouches)_.clientX<window.innerWidth*.5&&r===null?(r=_.identifier,o=_.clientX,l=_.clientY,e.style.left=o+"px",e.style.top=l+"px",e.classList.add("on"),n.style.transform="translate(-50%, -50%)"):a===null&&_.clientX>=window.innerWidth*.5&&(a=_.identifier,c=_.clientX,h=_.clientY)},{passive:!1}),t.addEventListener("touchmove",g=>{g.preventDefault();let _=r!==null?f(g.touches,r):null;if(_){let p=_.clientX-o,S=_.clientY-l,w=Math.hypot(p,S);w>i&&(p*=i/w,S*=i/w),n.style.transform=`translate(calc(-50% + ${p}px), calc(-50% + ${S}px))`;let x=p/i,b=S/i,T=Math.hypot(x,b),L=T<.14?0:(T-.14)/.86/T;fn.x=x*L,fn.y=-b*L}let m=a!==null?f(g.touches,a):null;m&&(rt&&!rt.over&&rt.look((m.clientX-c)*1.7,(m.clientY-h)*1.7),c=m.clientX,h=m.clientY)},{passive:!1});let u=g=>{for(let _ of g.changedTouches)_.identifier===r&&(r=null,fn.x=fn.y=0,e.classList.remove("on")),_.identifier===a&&(a=null)};t.addEventListener("touchend",u),t.addEventListener("touchcancel",u);let d=(g,_,m)=>{let p=ct(g);if(!p)return;p.addEventListener("touchstart",w=>{w.preventDefault(),w.stopPropagation(),_()},{passive:!1});let S=w=>{w.preventDefault(),w.stopPropagation(),m&&m()};p.addEventListener("touchend",S,{passive:!1}),p.addEventListener("touchcancel",S,{passive:!1})};d("t-jump",()=>{rt&&!rt.over&&(Li.jump=!0,fn.jump=!0)},()=>{fn.jump=!1}),d("t-dive",()=>{rt&&!rt.over&&(Li.dive=!0)}),d("t-bat",()=>{rt&&!rt.over&&!rt.menuOpen&&rt.swing()})})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
