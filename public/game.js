(()=>{var qu=0,Hc=1,Yu=2;var ta=1,Vo=2,$s=3,Ai=0,Ye=1,tn=2,jn=0,Ri=1,Ki=2,kc=3,Gc=4,Zu=5;var ji=100,$u=101,Ju=102,Ku=103,ju=104,Qu=200,tf=201,ef=202,nf=203,Vc=204,Wc=205,sf=206,rf=207,af=208,of=209,lf=210,cf=211,hf=212,uf=213,ff=214,ao=0,oo=1,lo=2,Cs=3,co=4,ho=5,uo=6,fo=7,Wo=0,df=1,pf=2,Bn=0,Xc=1,qc=2,Yc=3,Js=4,Zc=5,$c=6,Jc=7;var Kc=300,Ci=301,Qi=302,Xo=303,qo=304,ea=306,Is=1e3,Yn=1001,po=1002,Ke=1003,mf=1004;var na=1005;var je=1006,Yo=1007;var Ii=1008;var mn=1009,jc=1010,Qc=1011,Ks=1012,Zo=1013,zn=1014,wn=1015,Hn=1016,$o=1017,Jo=1018,js=1020,th=35902,eh=35899,nh=1021,ih=1022,Tn=1023,$n=1026,Pi=1027,Ko=1028,jo=1029,Li=1030,Qo=1031;var tl=1033,ia=33776,sa=33777,ra=33778,aa=33779,el=35840,nl=35841,il=35842,sl=35843,rl=36196,al=37492,ol=37496,ll=37488,cl=37489,oa=37490,hl=37491,ul=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,yl=37816,vl=37817,Ml=37818,Sl=37819,bl=37820,El=37821,wl=36492,Tl=36494,Al=36495,Rl=36283,Cl=36284,la=36285,Il=36286;var Er=2300,mo=2301,so=2302,Ac=2303,Rc=2400,Cc=2401,Ic=2402;var gf=3200;var ca=0,xf=1,ui="",Te="srgb",wr="srgb-linear",Tr="linear",ve="srgb";var ro=7680;var _f=519,yf=512,vf=513,Mf=514,Pl=515,Sf=516,bf=517,Ll=518,Ef=519,sh=35044,Qs=35048;var rh="300 es",Fn=2e3,Ps=2001;function rp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ap(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wf(){let s=Ar("canvas");return s.style.display="block",s}var fu={},Ls=null;function Rr(...s){let t="THREE."+s.shift();Ls?Ls("log",t,...s):console.log(t,...s)}function Tf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Jt(...s){s=Tf(s);let t="THREE."+s.shift();if(Ls)Ls("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Kt(...s){s=Tf(s);let t="THREE."+s.shift();if(Ls)Ls("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Wi(...s){let t=s.join(" ");t in fu||(fu[t]=!0,Jt(...s))}function Af(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Rf={[ao]:oo,[lo]:uo,[co]:fo,[Cs]:ho,[oo]:ao,[uo]:lo,[fo]:co,[ho]:Cs},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],du=1234567,vr=Math.PI/180,Ds=180/Math.PI;function Zn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function le(s,t,e){return Math.max(t,Math.min(e,s))}function ah(s,t){return(s%t+t)%t}function op(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function lp(s,t,e){return s!==t?(e-s)/(t-s):0}function Mr(s,t,e){return(1-e)*s+e*t}function cp(s,t,e,n){return Mr(s,t,1-Math.exp(-e*n))}function hp(s,t=1){return t-Math.abs(ah(s,t*2)-t)}function up(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function fp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function dp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function pp(s,t){return s+Math.random()*(t-s)}function mp(s){return s*(.5-Math.random())}function gp(s){s!==void 0&&(du=s);let t=du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xp(s){return s*vr}function _p(s){return s*Ds}function yp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function vp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sp(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*h,o*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oh={DEG2RAD:vr,RAD2DEG:Ds,generateUUID:Zn,clamp:le,euclideanModulo:ah,mapLinear:op,inverseLerp:lp,lerp:Mr,damp:cp,pingpong:hp,smoothstep:up,smootherstep:fp,randInt:dp,randFloat:pp,randFloatSpread:mp,seededRandom:gp,degToRad:xp,radToDeg:_p,isPowerOfTwo:yp,ceilPowerOfTwo:vp,floorPowerOfTwo:Mp,setQuaternionFromProperEuler:Sp,normalize:Se,denormalize:Un},dh=class dh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;var gt=dh,yn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==f||c!==d||h!==g){let p=l*f+c*d+h*g+u*y;p<0&&(f=-f,d=-d,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),R=Math.sin(S);m=Math.sin(m*S)/R,o=Math.sin(o*S)/R,l=l*m+f*o,c=c*m+d*o,h=h*m+g*o,u=u*m+y*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+g*o,u=u*m+y*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ph=class ph{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nc.copy(this).projectOnVector(t),this.sub(nc)}reflect(t){return this.sub(nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;var B=ph,nc=new B,pu=new yn,mh=class mh{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=i[0],p=i[3],m=i[6],S=i[1],R=i[4],_=i[7],b=i[2],E=i[5],D=i[8];return r[0]=a*y+o*S+l*b,r[3]=a*p+o*R+l*E,r[6]=a*m+o*_+l*D,r[1]=c*y+h*S+u*b,r[4]=c*p+h*R+u*E,r[7]=c*m+h*_+u*D,r[2]=f*y+d*S+g*b,r[5]=f*p+d*R+g*E,r[8]=f*m+d*_+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(i*c-h*n)*y,t[2]=(o*n-i*a)*y,t[3]=f*y,t[4]=(h*e-i*l)*y,t[5]=(i*r-o*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ic.makeScale(t,e)),this}rotate(t){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ic.makeRotation(-t)),this}translate(t,e){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;var te=mh,ic=new te,mu=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bp(){let s={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?Tr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wr]:{primaries:t,whitePoint:n,transfer:Tr,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),s}var ue=bp();function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var hs,go=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hs===void 0&&(hs=Ar("canvas")),hs.width=t.width,hs.height=t.height;let i=hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ep=0,Ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(sc(i[a].image)):r.push(sc(i[a]))}else r=sc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function sc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?go.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var wp=0,rc=new B,hn=class s extends Jn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Yn,i=Yn,r=je,a=Ii,o=Tn,l=mn,c=s.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Zn(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Kc;hn.DEFAULT_ANISOTROPY=1;var gh=class gh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,_=(d+1)/2,b=(m+1)/2,E=(h+f)/4,D=(u+y)/4,v=(g+p)/4;return R>_&&R>b?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=E/n,r=D/n):_>b?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=v/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=D/r,i=v/r),this.set(n,i,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-y)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;var Le=gh,xo=class extends Jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new hn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ns(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends xo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Cr=class extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _o=class extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Go=class Go{constructor(t,e,n,i,r,a,o,l,c,h,u,f,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,d,g,y,p)}set(t,e,n,i,r,a,o,l,c,h,u,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Go().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f+y*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f-y*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tp,t,Ap)}lookAt(t,e,n){let i=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),_i.crossVectors(n,xn),_i.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),_i.crossVectors(n,xn)),_i.normalize(),Pa.crossVectors(xn,_i),i[0]=_i.x,i[4]=Pa.x,i[8]=xn.x,i[1]=_i.y,i[5]=Pa.y,i[9]=xn.y,i[2]=_i.z,i[6]=Pa.z,i[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],p=n[10],m=n[14],S=n[3],R=n[7],_=n[11],b=n[15],E=i[0],D=i[4],v=i[8],T=i[12],L=i[1],O=i[5],M=i[9],I=i[13],C=i[2],A=i[6],U=i[10],F=i[14],H=i[3],z=i[7],q=i[11],W=i[15];return r[0]=a*E+o*L+l*C+c*H,r[4]=a*D+o*O+l*A+c*z,r[8]=a*v+o*M+l*U+c*q,r[12]=a*T+o*I+l*F+c*W,r[1]=h*E+u*L+f*C+d*H,r[5]=h*D+u*O+f*A+d*z,r[9]=h*v+u*M+f*U+d*q,r[13]=h*T+u*I+f*F+d*W,r[2]=g*E+y*L+p*C+m*H,r[6]=g*D+y*O+p*A+m*z,r[10]=g*v+y*M+p*U+m*q,r[14]=g*T+y*I+p*F+m*W,r[3]=S*E+R*L+_*C+b*H,r[7]=S*D+R*O+_*A+b*z,r[11]=S*v+R*M+_*U+b*q,r[15]=S*T+R*I+_*F+b*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],S=l*d-c*f,R=o*d-c*u,_=o*f-l*u,b=a*d-c*h,E=a*f-l*h,D=a*u-o*h;return e*(y*S-p*R+m*_)-n*(g*S-p*b+m*E)+i*(g*R-y*b+m*D)-r*(g*_-y*E+p*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],S=e*o-n*a,R=e*l-i*a,_=e*c-r*a,b=n*l-i*o,E=n*c-r*o,D=i*c-r*l,v=h*y-u*g,T=h*p-f*g,L=h*m-d*g,O=u*p-f*y,M=u*m-d*y,I=f*m-d*p,C=S*I-R*M+_*O+b*L-E*T+D*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return t[0]=(o*I-l*M+c*O)*A,t[1]=(i*M-n*I-r*O)*A,t[2]=(y*D-p*E+m*b)*A,t[3]=(f*E-u*D-d*b)*A,t[4]=(l*L-a*I-c*T)*A,t[5]=(e*I-i*L+r*T)*A,t[6]=(p*_-g*D-m*R)*A,t[7]=(h*D-f*_+d*R)*A,t[8]=(a*M-o*L+c*v)*A,t[9]=(n*L-e*M-r*v)*A,t[10]=(g*E-y*_+m*S)*A,t[11]=(u*_-h*E-d*S)*A,t[12]=(o*T-a*O-l*v)*A,t[13]=(e*O-n*T+i*v)*A,t[14]=(y*R-g*b-p*S)*A,t[15]=(h*b-u*R+f*S)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,y=a*h,p=a*u,m=o*u,S=l*c,R=l*h,_=l*u,b=n.x,E=n.y,D=n.z;return i[0]=(1-(y+m))*b,i[1]=(d+_)*b,i[2]=(g-R)*b,i[3]=0,i[4]=(d-_)*E,i[5]=(1-(f+m))*E,i[6]=(p+S)*E,i[7]=0,i[8]=(g+R)*D,i[9]=(p-S)*D,i[10]=(1-(f+y))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=us.set(i[0],i[1],i[2]).length(),o=us.set(i[4],i[5],i[6]).length(),l=us.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Pn.copy(this);let c=1/a,h=1/o,u=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Fn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Fn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ps)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Fn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Fn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ps)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Go.prototype.isMatrix4=!0;var xe=Go,us=new B,Pn=new xe,Tp=new B(0,0,0),Ap=new B(1,1,1),_i=new B,Pa=new B,xn=new B,xu=new xe,_u=new yn,vn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rp=0,yu=new B,fs=new yn,ni=new xe,La=new B,hr=new B,Cp=new B,Ip=new yn,vu=new B(1,0,0),Mu=new B(0,1,0),Su=new B(0,0,1),bu={type:"added"},Pp={type:"removed"},ds={type:"childadded",child:null},ac={type:"childremoved",child:null},Ge=class s extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new B,e=new vn,n=new yn,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new te}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(vu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?La.copy(t):La.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(hr,La,this.up):ni.lookAt(La,hr,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(ni),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bu),ds.child=t,this.dispatchEvent(ds),ds.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bu),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new B(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ne=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lp={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Da={h:0,s:0,l:0};function oc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=ah(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oc(a,r,t+1/3),this.g=oc(a,r,t),this.b=oc(a,r,t-1/3)}return ue.colorSpaceToWorking(this,i),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=Cf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return ue.workingToColorSpace(sn.copy(this),t),Math.round(le(sn.r*255,0,255))*65536+Math.round(le(sn.g*255,0,255))*256+Math.round(le(sn.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(sn.copy(this),e);let n=sn.r,i=sn.g,r=sn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Te){ue.workingToColorSpace(sn.copy(this),t);let e=sn.r,n=sn.g,i=sn.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Da);let n=Mr(yi.h,Da.h,e),i=Mr(yi.s,Da.s,e),r=Mr(yi.l,Da.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Dt;Dt.NAMES=Cf;var Fs=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ci=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ln=new B,ii=new B,lc=new B,si=new B,ps=new B,ms=new B,Eu=new B,cc=new B,hc=new B,uc=new B,fc=new Le,dc=new Le,pc=new Le,oi=class s{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ln.subVectors(t,e),i.cross(Ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ln.subVectors(i,e),ii.subVectors(n,e),lc.subVectors(t,e);let a=Ln.dot(Ln),o=Ln.dot(ii),l=Ln.dot(lc),c=ii.dot(ii),h=ii.dot(lc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return fc.setScalar(0),dc.setScalar(0),pc.setScalar(0),fc.fromBufferAttribute(t,e),dc.fromBufferAttribute(t,n),pc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(fc,r.x),a.addScaledVector(dc,r.y),a.addScaledVector(pc,r.z),a}static isFrontFacing(t,e,n,i){return Ln.subVectors(n,e),ii.subVectors(t,e),Ln.cross(ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ln.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ps.subVectors(i,n),ms.subVectors(r,n),cc.subVectors(t,n);let l=ps.dot(cc),c=ms.dot(cc);if(l<=0&&c<=0)return e.copy(n);hc.subVectors(t,i);let h=ps.dot(hc),u=ms.dot(hc);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ps,a);uc.subVectors(t,r);let d=ps.dot(uc),g=ms.dot(uc);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ms,o);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Eu.subVectors(r,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Eu,o);let m=1/(p+y+f);return a=y*m,o=f*m,e.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(t.matrixWorld),this.union(Na)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Ua.subVectors(this.max,ur),gs.subVectors(t.a,ur),xs.subVectors(t.b,ur),_s.subVectors(t.c,ur),vi.subVectors(xs,gs),Mi.subVectors(_s,xs),zi.subVectors(gs,_s);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-zi.z,zi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,zi.z,0,-zi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-zi.y,zi.x,0];return!mc(e,gs,xs,_s,Ua)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,gs,xs,_s,Ua))?!1:(Fa.crossVectors(vi,Mi),e=[Fa.x,Fa.y,Fa.z],mc(e,gs,xs,_s,Ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new B,new B,new B,new B,new B,new B,new B,new B],Dn=new B,Na=new Kn,gs=new B,xs=new B,_s=new B,vi=new B,Mi=new B,zi=new B,ur=new B,Ua=new B,Fa=new B,Hi=new B;function mc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Hi.fromArray(s,r);let o=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ke=new B,Oa=new gt,Dp=0,Ae=class extends Jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oa.fromBufferAttribute(this,e),Oa.applyMatrix3(t),this.setXY(e,Oa.x,Oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Pr=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Lr=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Np=new Kn,fr=new B,gc=new B,hi=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Np.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);let e=fr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(gc)),this.expandByPoint(fr.copy(t.center).sub(gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Up=0,En=new xe,xc=new Ge,ys=new B,_n=new Kn,dr=new Kn,Je=new B,Re=class s extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rp(t)?Lr:Pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return xc.lookAt(t),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(_n.min,dr.min),_n.expandByPoint(Je),Je.addVectors(_n.max,dr.max),_n.expandByPoint(Je)):(_n.expandByPoint(dr.min),_n.expandByPoint(dr.max))}_n.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Je.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(t,c),Je.add(ys)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new B,l[v]=new B;let c=new B,h=new B,u=new B,f=new gt,d=new gt,g=new gt,y=new B,p=new B;function m(v,T,L){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,L),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let O=1/(d.x*g.y-g.x*d.y);isFinite(O)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(O),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(O),o[v].add(y),o[T].add(y),o[L].add(y),l[v].add(p),l[T].add(p),l[L].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,T=S.length;v<T;++v){let L=S[v],O=L.start,M=L.count;for(let I=O,C=O+M;I<C;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let R=new B,_=new B,b=new B,E=new B;function D(v){b.fromBufferAttribute(i,v),E.copy(b);let T=o[v];R.copy(T),R.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(E,T);let O=_.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,O)}for(let v=0,T=S.length;v<T;++v){let L=S[v],O=L.start,M=L.count;for(let I=O,C=O+M;I<C;I+=3)D(t.getX(I+0)),D(t.getX(I+1)),D(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Ae(f,h,u)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},cn=new B,Os=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Rr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Rr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_c=new B,Fp=new B,Op=new te,Nn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=_c.subVectors(n,e).cross(Fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(_c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Op.getNormalMatrix(t),i=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bp=0,On=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Ri,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Wc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Bs=class extends On{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vs,pr=new B,Ms=new B,Ss=new B,bs=new gt,mr=new gt,If=new xe,Ba=new B,gr=new B,za=new B,wu=new gt,yc=new gt,Tu=new gt,Nr=class extends Ge{constructor(t=new Bs){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dr(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Os(n,3,0,!1)),vs.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),If.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Ss.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ha(Ba.set(-.5,-.5,0),Ss,a,Ms,i,r),Ha(gr.set(.5,-.5,0),Ss,a,Ms,i,r),Ha(za.set(.5,.5,0),Ss,a,Ms,i,r),wu.set(0,0),yc.set(1,0),Tu.set(1,1);let o=t.ray.intersectTriangle(Ba,gr,za,!1,pr);if(o===null&&(Ha(gr.set(-.5,.5,0),Ss,a,Ms,i,r),yc.set(0,1),o=t.ray.intersectTriangle(Ba,za,gr,!1,pr),o===null))return;let l=t.ray.origin.distanceTo(pr);l<t.near||l>t.far||e.push({distance:l,point:pr.clone(),uv:oi.getInterpolation(pr,Ba,gr,za,wu,yc,Tu,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ha(s,t,e,n,i,r){bs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(mr.x=r*bs.x-i*bs.y,mr.y=i*bs.x+r*bs.y):mr.copy(bs),s.copy(t),s.x+=mr.x,s.y+=mr.y,s.applyMatrix4(If)}var ai=new B,vc=new B,ka=new B,Ga=new B,Ur=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){vc.copy(t).add(e).multiplyScalar(.5),ka.copy(e).sub(t).normalize(),Ga.copy(this.origin).sub(vc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ka),o=Ga.dot(this.direction),l=-Ga.dot(ka),c=Ga.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(vc).addScaledVector(ka,f),d}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=n.x-a.x,S=n.y-a.y,R=n.z-a.z,_=Math.abs(l),b=Math.abs(c),E=Math.abs(h),D,v,T,L,O,M,I,C,A,U,F,H;if(_>=b&&_>=E?(T=l,M=u,A=g,H=m,l>=0?(D=c,v=h,L=f,O=d,I=y,C=p,U=S,F=R):(D=h,v=c,L=d,O=f,I=p,C=y,U=R,F=S)):b>=E?(T=c,M=f,A=y,H=S,c>=0?(D=h,v=l,L=d,O=u,I=p,C=g,U=R,F=m):(D=l,v=h,L=u,O=d,I=g,C=p,U=m,F=R)):(T=h,M=d,A=p,H=R,h>=0?(D=l,v=c,L=u,O=f,I=g,C=y,U=m,F=S):(D=c,v=l,L=f,O=u,I=y,C=g,U=S,F=m)),T===0)return null;let z=D/T,q=v/T,W=1/T,ft=L-z*M,ot=O-q*M,Pt=I-z*A,jt=C-q*A,ee=U-z*H,Q=F-q*H,tt=ee*jt-Q*Pt,_t=ft*Q-ot*ee,Vt=Pt*ot-jt*ft;if(i){if(tt<0||_t<0||Vt<0)return null}else if((tt<0||_t<0||Vt<0)&&(tt>0||_t>0||Vt>0))return null;let St=tt+_t+Vt;if(St===0)return null;let Zt=W*(tt*M+_t*A+Vt*H);return(St>0?Zt<0:Zt>0)?null:this.at(Zt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Au=new xe,ki=new Ur,Va=new hi,Ru=new B,Wa=new B,Xa=new B,qa=new B,Mc=new B,Ya=new B,Cu=new B,Za=new B,it=class extends Ge{constructor(t=new Re,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Mc.fromBufferAttribute(u,t),a?Ya.addScaledVector(Mc,h):Ya.addScaledVector(Mc.sub(e),h))}e.add(Ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(Va.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Va,Ru)===null||ki.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Au.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Au),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),R=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let _=S,b=R;_<b;_+=3){let E=o.getX(_),D=o.getX(_+1),v=o.getX(_+2);i=$a(this,m,t,n,c,h,u,E,D,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let S=o.getX(p),R=o.getX(p+1),_=o.getX(p+2);i=$a(this,a,t,n,c,h,u,S,R,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),R=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=S,b=R;_<b;_+=3){let E=_,D=_+1,v=_+2;i=$a(this,m,t,n,c,h,u,E,D,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let S=p,R=p+1,_=p+2;i=$a(this,a,t,n,c,h,u,S,R,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function zp(s,t,e,n,i,r,a,o){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ai,o),l===null)return null;Za.copy(o),Za.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Za);return c<e.near||c>e.far?null:{distance:c,point:Za.clone(),object:s}}function $a(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Wa),s.getVertexPosition(l,Xa),s.getVertexPosition(c,qa);let h=zp(s,t,e,n,Wa,Xa,qa,Cu);if(h){let u=new B;oi.getBarycoord(Cu,Wa,Xa,qa,u),i&&(h.uv=oi.getInterpolatedAttribute(i,o,l,c,u,new gt)),r&&(h.uv1=oi.getInterpolatedAttribute(r,o,l,c,u,new gt)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};oi.getNormal(Wa,Xa,qa,f.normal),h.face=f,h.barycoord=u}return h}var Fr=class extends hn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ke,h=Ke,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zs=class extends Ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new xe,Iu=new xe,Ja=[],Pu=new Kn,Hp=new xe,xr=new it,_r=new hi,Or=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Pu.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Pu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),_r.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(_r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),t.ray.intersectsSphere(_r)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Es),Iu.multiplyMatrices(n,Es),xr.matrixWorld=Iu,xr.raycast(t,Ja);for(let a=0,o=Ja.length;a<o;a++){let l=Ja[a];l.instanceId=r,l.object=this,e.push(l)}Ja.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(i*this.count),i,this.count,Ko,wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new hi,kp=new gt(.5,.5),Ka=new B,Hs=class{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,r=new Nn,a=new Nn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],S=r[12],R=r[13],_=r[14],b=r[15];if(i[0].setComponents(c-a,d-h,m-g,b-S).normalize(),i[1].setComponents(c+a,d+h,m+g,b+S).normalize(),i[2].setComponents(c+o,d+u,m+y,b+R).normalize(),i[3].setComponents(c-o,d-u,m-y,b-R).normalize(),n)i[4].setComponents(l,f,p,_).normalize(),i[5].setComponents(c-l,d-f,m-p,b-_).normalize();else if(i[4].setComponents(c-l,d-f,m-p,b-_).normalize(),e===Fn)i[5].setComponents(c+l,d+f,m+p,b+_).normalize();else if(e===Ps)i[5].setComponents(l,f,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=kp.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ka.x=i.normal.x>0?t.max.x:t.min.x,Ka.y=i.normal.y>0?t.max.y:t.min.y,Ka.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xi=class extends On{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lu=new xe,Pc=new Ur,ja=new hi,Qa=new B,qi=class extends Ge{constructor(t=new Re,e=new Xi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,t.ray.intersectsSphere(ja)===!1)return;Lu.copy(i).invert(),Pc.copy(t.ray).applyMatrix4(Lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,y=d;g<y;g++){let p=c.getX(g);Qa.fromBufferAttribute(u,p),Du(Qa,p,l,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,y=d;g<y;g++)Qa.fromBufferAttribute(u,g),Du(Qa,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Du(s,t,e,n,i,r,a){let o=Pc.distanceSqToPoint(s);if(o<e){let l=new B;Pc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Br=class extends hn{constructor(t=[],e=Ci,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},un=class extends hn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends hn{constructor(t,e,n=zn,i,r,a,o=Ke,l=Ke,c,h=$n,u=1){if(h!==$n&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yo=class extends bi{constructor(t,e=zn,n=Ci,i,r,a=Ke,o=Ke,l,c=$n){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zr=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},De=class s extends Re{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(y,p,m,S,R,_,b,E,D,v,T){let L=_/D,O=b/v,M=_/2,I=b/2,C=E/2,A=D+1,U=v+1,F=0,H=0,z=new B;for(let q=0;q<U;q++){let W=q*O-I;for(let ft=0;ft<A;ft++){let ot=ft*L-M;z[y]=ot*S,z[p]=W*R,z[m]=C,c.push(z.x,z.y,z.z),z[y]=0,z[p]=0,z[m]=E>0?1:-1,h.push(z.x,z.y,z.z),u.push(ft/D),u.push(1-q/v),F+=1}}for(let q=0;q<v;q++)for(let W=0;W<D;W++){let ft=f+W+A*q,ot=f+W+A*(q+1),Pt=f+(W+1)+A*(q+1),jt=f+(W+1)+A*q;l.push(ft,ot,jt),l.push(ot,Pt,jt),H+=6}o.addGroup(d,H,T),d+=H,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ks=class s extends Re{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,y=i+1,p=new B,m=new B;for(let S=0;S<=g;S++){let R=0,_=0,b=0,E=0;if(S<=n){let T=S/n,L=T*Math.PI/2;_=-h-t*Math.cos(L),b=t*Math.sin(L),E=-t*Math.cos(L),R=T*u}else if(S<=n+r){let T=(S-n)/r;_=-h+T*e,b=t,E=0,R=u+T*f}else{let T=(S-n-r)/n,L=T*Math.PI/2;_=h+t*Math.sin(L),b=t*Math.cos(L),E=t*Math.sin(L),R=u+f+T*u}let D=Math.max(0,Math.min(1,R/d)),v=0;S===0?v=.5/i:S===g&&(v=-.5/i);for(let T=0;T<=i;T++){let L=T/i,O=L*Math.PI*2,M=Math.sin(O),I=Math.cos(O);m.x=-b*I,m.y=_,m.z=b*M,o.push(m.x,m.y,m.z),p.set(-b*I,E,b*M),p.normalize(),l.push(p.x,p.y,p.z),c.push(L+v,D)}if(S>0){let T=(S-1)*y;for(let L=0;L<i;L++){let O=T+L,M=T+L+1,I=S*y+L,C=S*y+L+1;a.push(O,M,I),a.push(M,C,I)}}}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Yi=class s extends Re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new B,h=new gt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Yt=class s extends Re{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],p=n/2,m=0;S(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function S(){let _=new B,b=new B,E=0,D=(e-t)/n;for(let v=0;v<=r;v++){let T=[],L=v/r,O=L*(e-t)+t;for(let M=0;M<=i;M++){let I=M/i,C=I*l+o,A=Math.sin(C),U=Math.cos(C);b.x=O*A,b.y=-L*n+p,b.z=O*U,u.push(b.x,b.y,b.z),_.set(A,D,U).normalize(),f.push(_.x,_.y,_.z),d.push(I,1-L),T.push(g++)}y.push(T)}for(let v=0;v<i;v++)for(let T=0;T<r;T++){let L=y[T][v],O=y[T+1][v],M=y[T+1][v+1],I=y[T][v+1];(t>0||T!==0)&&(h.push(L,O,I),E+=3),(e>0||T!==r-1)&&(h.push(O,M,I),E+=3)}c.addGroup(m,E,0),m+=E}function R(_){let b=g,E=new gt,D=new B,v=0,T=_===!0?t:e,L=_===!0?1:-1;for(let M=1;M<=i;M++)u.push(0,p*L,0),f.push(0,L,0),d.push(.5,.5),g++;let O=g;for(let M=0;M<=i;M++){let C=M/i*l+o,A=Math.cos(C),U=Math.sin(C);D.x=T*U,D.y=p*L,D.z=T*A,u.push(D.x,D.y,D.z),f.push(0,L,0),E.x=A*.5+.5,E.y=U*.5*L+.5,d.push(E.x,E.y),g++}for(let M=0;M<i;M++){let I=b+M,C=O+M;_===!0?h.push(C,C+1,I):h.push(C+1,C,I),v+=3}c.addGroup(m,v,_===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qe=class s extends Yt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vo=class s extends Re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let R=new B,_=new B,b=new B;for(let E=0;E<e.length;E+=3)d(e[E+0],R),d(e[E+1],_),d(e[E+2],b),l(R,_,b,S)}function l(S,R,_,b){let E=b+1,D=[];for(let v=0;v<=E;v++){D[v]=[];let T=S.clone().lerp(_,v/E),L=R.clone().lerp(_,v/E),O=E-v;for(let M=0;M<=O;M++)M===0&&v===E?D[v][M]=T:D[v][M]=T.clone().lerp(L,M/O)}for(let v=0;v<E;v++)for(let T=0;T<2*(E-v)-1;T++){let L=Math.floor(T/2);T%2===0?(f(D[v][L+1]),f(D[v+1][L]),f(D[v][L])):(f(D[v][L+1]),f(D[v+1][L+1]),f(D[v+1][L]))}}function c(S){let R=new B;for(let _=0;_<r.length;_+=3)R.x=r[_+0],R.y=r[_+1],R.z=r[_+2],R.normalize().multiplyScalar(S),r[_+0]=R.x,r[_+1]=R.y,r[_+2]=R.z}function h(){let S=new B;for(let R=0;R<r.length;R+=3){S.x=r[R+0],S.y=r[R+1],S.z=r[R+2];let _=p(S)/2/Math.PI+.5,b=m(S)/Math.PI+.5;a.push(_,1-b)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let R=a[S+0],_=a[S+2],b=a[S+4],E=Math.max(R,_,b),D=Math.min(R,_,b);E>.9&&D<.1&&(R<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,R){let _=S*3;R.x=t[_+0],R.y=t[_+1],R.z=t[_+2]}function g(){let S=new B,R=new B,_=new B,b=new B,E=new gt,D=new gt,v=new gt;for(let T=0,L=0;T<r.length;T+=9,L+=6){S.set(r[T+0],r[T+1],r[T+2]),R.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),E.set(a[L+0],a[L+1]),D.set(a[L+2],a[L+3]),v.set(a[L+4],a[L+5]),b.copy(S).add(R).add(_).divideScalar(3);let O=p(b);y(E,L+0,S,O),y(D,L+2,R,O),y(v,L+4,_,O)}}function y(S,R,_,b){b<0&&S.x===1&&(a[R]=S.x-1),_.x===0&&_.z===0&&(a[R]=b/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new gt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,i=[],r=[],a=[],o=new B,l=new xe;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(le(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(le(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Gs=class extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Mo=class extends Gs{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Nu=new B,Uu=new B,Sc=new lh,bc=new lh,Ec=new lh,So=class extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Uu.subVectors(i[0],i[1]).add(i[0]),c=Uu);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Nu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Nu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Sc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,y,p),bc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,y,p),Ec.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),bc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ec.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Sc.calc(l),bc.calc(l),Ec.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fu(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Gp(s,t){let e=1-s;return e*e*t}function Vp(s,t){return 2*(1-s)*s*t}function Wp(s,t){return s*s*t}function Sr(s,t,e,n){return Gp(s,t)+Vp(s,e)+Wp(s,n)}function Xp(s,t){let e=1-s;return e*e*e*t}function qp(s,t){let e=1-s;return 3*e*e*s*t}function Yp(s,t){return 3*(1-s)*s*s*t}function Zp(s,t){return s*s*s*t}function br(s,t,e,n,i){return Xp(s,t)+qp(s,e)+Yp(s,n)+Zp(s,i)}var Hr=class extends Mn{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(t,i.x,r.x,a.x,o.x),br(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bo=class extends Mn{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(t,i.x,r.x,a.x,o.x),br(t,i.y,r.y,a.y,o.y),br(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kr=class extends Mn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends Mn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends Mn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Sr(t,i.x,r.x,a.x),Sr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends Mn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Sr(t,i.x,r.x,a.x),Sr(t,i.y,r.y,a.y),Sr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Fu(o,l.x,c.x,h.x,u.x),Fu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new gt().fromArray(i))}return this}},Lc=Object.freeze({__proto__:null,ArcCurve:Mo,CatmullRomCurve3:So,CubicBezierCurve:Hr,CubicBezierCurve3:bo,EllipseCurve:Gs,LineCurve:kr,LineCurve3:Eo,QuadraticBezierCurve:Gr,QuadraticBezierCurve3:wo,SplineCurve:Vr}),To=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Lc[i.type]().fromJSON(i))}return this}},Wr=class extends To{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new kr(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Gr(this.currentPoint.clone(),new gt(t,e),new gt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Hr(this.currentPoint.clone(),new gt(t,e),new gt(n,i),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Vr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Gs(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Vs=class extends Wr{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Wr().fromJSON(i))}return this}};function $p(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Pf(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=tm(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,u=l;for(let f=e;f<i;f+=e){let d=s[f],g=s[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Xr(r,a,e,o,l,c,0),a}function Pf(s,t,e,n,i){let r;if(i===um(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ou(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ou(a/n|0,s[a],s[a+1],r);return r&&Ws(r,r.next)&&(Yr(r),r=r.next),r}function Zi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ws(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&rm(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Kp(s,n,i,r):Jp(s)){t.push(l.i,s.i,c.i),Yr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=jp(Zi(s),t),Xr(s,t,e,n,i,r,2)):a===2&&Qp(s,t,e,n,i,r):Xr(Zi(s),t,e,n,i,r,1);break}}}function Jp(s){let t=s.prev,e=s,n=s.next;if(Oe(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),f=Math.max(i,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&yr(i,o,r,l,a,c,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kp(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Oe(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),y=Math.max(o,l,c),p=Math.max(h,u,f),m=Dc(d,g,t,e,n),S=Dc(y,p,t,e,n),R=s.prevZ,_=s.nextZ;for(;R&&R.z>=m&&_&&_.z<=S;){if(R.x>=d&&R.x<=y&&R.y>=g&&R.y<=p&&R!==i&&R!==a&&yr(o,h,l,u,c,f,R.x,R.y)&&Oe(R.prev,R,R.next)>=0||(R=R.prevZ,_.x>=d&&_.x<=y&&_.y>=g&&_.y<=p&&_!==i&&_!==a&&yr(o,h,l,u,c,f,_.x,_.y)&&Oe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;R&&R.z>=m;){if(R.x>=d&&R.x<=y&&R.y>=g&&R.y<=p&&R!==i&&R!==a&&yr(o,h,l,u,c,f,R.x,R.y)&&Oe(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=p&&_!==i&&_!==a&&yr(o,h,l,u,c,f,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function jp(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Ws(n,i)&&Df(n,e,e.next,i)&&qr(n,i)&&qr(i,n)&&(t.push(n.i,e.i,i.i),Yr(e),Yr(e.next),e=s=i),e=e.next}while(e!==s);return Zi(e)}function Qp(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lm(a,o)){let l=Nf(a,o);a=Zi(a,a.next),l=Zi(l,l.next),Xr(a,t,e,n,i,r,0),Xr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function tm(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Pf(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(om(c))}i.sort(em);for(let r=0;r<i.length;r++)e=nm(i[r],e);return e}function em(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function nm(s,t){let e=im(s,t);if(!e)return t;let n=Nf(e,s);return Zi(n,n.next),Zi(e,e.next)}function im(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(Ws(s,e))return e;do{if(Ws(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Lf(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);qr(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&sm(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function sm(s,t){return Oe(s.prev,s,t.prev)<0&&Oe(t.next,s,s.next)<0}function rm(s,t,e,n){let i=s;do i.z===0&&(i.z=Dc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,am(i)}function am(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Dc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function om(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Lf(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function yr(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Lf(s,t,e,n,i,r,a,o)}function lm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!cm(s,t)&&(qr(s,t)&&qr(t,s)&&hm(s,t)&&(Oe(s.prev,s,t.prev)||Oe(s,t.prev,t))||Ws(s,t)&&Oe(s.prev,s,s.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ws(s,t){return s.x===t.x&&s.y===t.y}function Df(s,t,e,n){let i=eo(Oe(s,t,e)),r=eo(Oe(s,t,n)),a=eo(Oe(e,n,s)),o=eo(Oe(e,n,t));return!!(i!==r&&a!==o||i===0&&to(s,e,t)||r===0&&to(s,n,t)||a===0&&to(e,s,n)||o===0&&to(e,t,n))}function to(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function eo(s){return s>0?1:s<0?-1:0}function cm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Df(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function qr(s,t){return Oe(s.prev,s,s.next)<0?Oe(s,t,s.next)>=0&&Oe(s,s.prev,t)>=0:Oe(s,t,s.prev)<0||Oe(s,s.next,t)<0}function hm(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Nf(s,t){let e=Nc(s.i,s.x,s.y),n=Nc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ou(s,t,e,n){let i=Nc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Nc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function um(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Uc=class{static triangulate(t,e,n=2){return $p(t,e,n)}},Vi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Bu(t),zu(n,t);let a=t.length;e.forEach(Bu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,zu(n,e[l]);let o=Uc.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Bu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function zu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Xs=class s extends Re{constructor(t=new Vs([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new fe(i,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:fm,R,_=!1,b,E,D,v;if(m){R=m.getSpacedPoints(h),_=!0,f=!1;let st=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,st),E=new B,D=new B,v=new B}f||(p=0,d=0,g=0,y=0);let T=o.extractPoints(c),L=T.shape,O=T.holes;if(!Vi.isClockWise(L)){L=L.reverse();for(let st=0,ht=O.length;st<ht;st++){let dt=O[st];Vi.isClockWise(dt)&&(O[st]=dt.reverse())}}function I(st){let dt=10000000000000001e-36,mt=st[0];for(let xt=1;xt<=st.length;xt++){let Wt=xt%st.length,Gt=st[Wt],$t=Gt.x-mt.x,J=Gt.y-mt.y,N=$t*$t+J*J,Ct=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(mt.x),Math.abs(mt.y)),Nt=dt*Ct*Ct;if(N<=Nt){st.splice(Wt,1),xt--;continue}mt=Gt}}I(L),O.forEach(I);let C=O.length,A=L;for(let st=0;st<C;st++){let ht=O[st];L=L.concat(ht)}function U(st,ht,dt){return ht||Kt("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ht,dt)}let F=L.length;function H(st,ht,dt){let mt,xt,Wt,Gt=st.x-ht.x,$t=st.y-ht.y,J=dt.x-st.x,N=dt.y-st.y,Ct=Gt*Gt+$t*$t,Nt=Gt*N-$t*J;if(Math.abs(Nt)>Number.EPSILON){let P=Math.sqrt(Ct),x=Math.sqrt(J*J+N*N),k=ht.x-$t/P,X=ht.y+Gt/P,Y=dt.x-N/x,lt=dt.y+J/x,pt=((Y-k)*N-(lt-X)*J)/(Gt*N-$t*J);mt=k+Gt*pt-st.x,xt=X+$t*pt-st.y;let et=mt*mt+xt*xt;if(et<=2)return new gt(mt,xt);Wt=Math.sqrt(et/2)}else{let P=!1;Gt>Number.EPSILON?J>Number.EPSILON&&(P=!0):Gt<-Number.EPSILON?J<-Number.EPSILON&&(P=!0):Math.sign($t)===Math.sign(N)&&(P=!0),P?(mt=-$t,xt=Gt,Wt=Math.sqrt(Ct)):(mt=Gt,xt=$t,Wt=Math.sqrt(Ct/2))}return new gt(mt/Wt,xt/Wt)}let z=[];for(let st=0,ht=A.length,dt=ht-1,mt=st+1;st<ht;st++,dt++,mt++)dt===ht&&(dt=0),mt===ht&&(mt=0),z[st]=H(A[st],A[dt],A[mt]);let q=[],W,ft=z.concat();for(let st=0,ht=C;st<ht;st++){let dt=O[st];W=[];for(let mt=0,xt=dt.length,Wt=xt-1,Gt=mt+1;mt<xt;mt++,Wt++,Gt++)Wt===xt&&(Wt=0),Gt===xt&&(Gt=0),W[mt]=H(dt[mt],dt[Wt],dt[Gt]);q.push(W),ft=ft.concat(W)}let ot;if(p===0)ot=Vi.triangulateShape(A,O);else{let st=[],ht=[];for(let dt=0;dt<p;dt++){let mt=dt/p,xt=d*Math.cos(mt*Math.PI/2),Wt=g*Math.sin(mt*Math.PI/2)+y;for(let Gt=0,$t=A.length;Gt<$t;Gt++){let J=U(A[Gt],z[Gt],Wt);_t(J.x,J.y,-xt),mt===0&&st.push(J)}for(let Gt=0,$t=C;Gt<$t;Gt++){let J=O[Gt];W=q[Gt];let N=[];for(let Ct=0,Nt=J.length;Ct<Nt;Ct++){let P=U(J[Ct],W[Ct],Wt);_t(P.x,P.y,-xt),mt===0&&N.push(P)}mt===0&&ht.push(N)}}ot=Vi.triangulateShape(st,ht)}let Pt=ot.length,jt=g+y;for(let st=0;st<F;st++){let ht=f?U(L[st],ft[st],jt):L[st];_?(D.copy(b.normals[0]).multiplyScalar(ht.x),E.copy(b.binormals[0]).multiplyScalar(ht.y),v.copy(R[0]).add(D).add(E),_t(v.x,v.y,v.z)):_t(ht.x,ht.y,0)}for(let st=1;st<=h;st++)for(let ht=0;ht<F;ht++){let dt=f?U(L[ht],ft[ht],jt):L[ht];_?(D.copy(b.normals[st]).multiplyScalar(dt.x),E.copy(b.binormals[st]).multiplyScalar(dt.y),v.copy(R[st]).add(D).add(E),_t(v.x,v.y,v.z)):_t(dt.x,dt.y,u/h*st)}for(let st=p-1;st>=0;st--){let ht=st/p,dt=d*Math.cos(ht*Math.PI/2),mt=g*Math.sin(ht*Math.PI/2)+y;for(let xt=0,Wt=A.length;xt<Wt;xt++){let Gt=U(A[xt],z[xt],mt);_t(Gt.x,Gt.y,u+dt)}for(let xt=0,Wt=O.length;xt<Wt;xt++){let Gt=O[xt];W=q[xt];for(let $t=0,J=Gt.length;$t<J;$t++){let N=U(Gt[$t],W[$t],mt);_?_t(N.x,N.y+R[h-1].y,R[h-1].x+dt):_t(N.x,N.y,u+dt)}}}ee(),Q();function ee(){let st=i.length/3;if(f){let ht=0,dt=F*ht;for(let mt=0;mt<Pt;mt++){let xt=ot[mt];Vt(xt[2]+dt,xt[1]+dt,xt[0]+dt)}ht=h+p*2,dt=F*ht;for(let mt=0;mt<Pt;mt++){let xt=ot[mt];Vt(xt[0]+dt,xt[1]+dt,xt[2]+dt)}}else{for(let ht=0;ht<Pt;ht++){let dt=ot[ht];Vt(dt[2],dt[1],dt[0])}for(let ht=0;ht<Pt;ht++){let dt=ot[ht];Vt(dt[0]+F*h,dt[1]+F*h,dt[2]+F*h)}}n.addGroup(st,i.length/3-st,0)}function Q(){let st=i.length/3,ht=0;tt(A,ht),ht+=A.length;for(let dt=0,mt=O.length;dt<mt;dt++){let xt=O[dt];tt(xt,ht),ht+=xt.length}n.addGroup(st,i.length/3-st,1)}function tt(st,ht){let dt=st.length;for(;--dt>=0;){let mt=dt,xt=dt-1;xt<0&&(xt=st.length-1);for(let Wt=0,Gt=h+p*2;Wt<Gt;Wt++){let $t=F*Wt,J=F*(Wt+1),N=ht+mt+$t,Ct=ht+xt+$t,Nt=ht+xt+J,P=ht+mt+J;St(N,Ct,Nt,P)}}}function _t(st,ht,dt){l.push(st),l.push(ht),l.push(dt)}function Vt(st,ht,dt){Zt(st),Zt(ht),Zt(dt);let mt=i.length/3,xt=S.generateTopUV(n,i,mt-3,mt-2,mt-1);ge(xt[0]),ge(xt[1]),ge(xt[2])}function St(st,ht,dt,mt){Zt(st),Zt(ht),Zt(mt),Zt(ht),Zt(dt),Zt(mt);let xt=i.length/3,Wt=S.generateSideWallUV(n,i,xt-6,xt-3,xt-2,xt-1);ge(Wt[0]),ge(Wt[1]),ge(Wt[3]),ge(Wt[1]),ge(Wt[2]),ge(Wt[3])}function Zt(st){i.push(l[st*3+0]),i.push(l[st*3+1]),i.push(l[st*3+2])}function ge(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Lc[i.type]().fromJSON(i)),new s(n,t.options)}},fm={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new gt(r,a),new gt(o,l),new gt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new gt(a,1-l),new gt(c,1-u),new gt(f,1-g),new gt(y,1-m)]:[new gt(o,1-l),new gt(h,1-u),new gt(d,1-g),new gt(p,1-m)]}};function dm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qs=class s extends vo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ve=class s extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let S=m*f-a;for(let R=0;R<c;R++){let _=R*u-r;g.push(_,-S,0),y.push(0,0,1),p.push(R/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let R=S+c*m,_=S+c*(m+1),b=S+1+c*(m+1),E=S+1+c*m;d.push(R,_,E),d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var be=class s extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new B,f=new B,d=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let S=[],R=m/n,_=a+R*o,b=t*Math.cos(_),E=Math.sqrt(t*t-b*b),D=0;m===0&&a===0?D=.5/e:m===n&&l===Math.PI&&(D=-.5/e);for(let v=0;v<=e;v++){let T=v/e,L=i+T*r;u.x=-E*Math.cos(L),u.y=b,u.z=E*Math.sin(L),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),p.push(T+D,1-R),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let R=h[m][S+1],_=h[m][S],b=h[m+1][S],E=h[m+1][S+1];(m!==0||a>0)&&d.push(R,_,E),(m!==n-1||l<Math.PI)&&d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Me=class s extends Re{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new B,d=new B,g=new B;for(let y=0;y<=n;y++){let p=a+y/n*o;for(let m=0;m<=i;m++){let S=m/i*r;d.x=(t+e*Math.cos(p))*Math.cos(S),d.y=(t+e*Math.cos(p))*Math.sin(S),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/i),u.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=i;p++){let m=(i+1)*y+p-1,S=(i+1)*(y-1)+p-1,R=(i+1)*(y-1)+p,_=(i+1)*y+p;l.push(m,S,_),l.push(S,R,_)}this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ts(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Hu(i))i.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Hu(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function rn(s){let t={};for(let e=0;e<s.length;e++){let n=ts(s[e]);for(let i in n)t[i]=n[i]}return t}function Hu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function pm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ch(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Uf={clone:ts,merge:rn},mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mm,this.fragmentShader=gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=pm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(i.value);break;case"v2":this.uniforms[n].value=new gt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m3":this.uniforms[n].value=new te().fromArray(i.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ao=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},he=class extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Zr=class extends he{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var $r=class extends On{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ro=class extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Co=class extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ws(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function wc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ei=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Io=class extends Ei{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cc:r=t,o=2*e-n;break;case Ic:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:a=t,l=2*n-e;break;case Ic:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,S=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,R=(-1-d)*p+(1.5+d)*y+.5*g,_=d*p-d*y;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+S*a[c+b]+R*a[l+b]+_*a[u+b];return r}},Po=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Lo=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Do=class extends Ei{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(i-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let f=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=d*f+g*2,S=u[m],R=u[m+1],_=t*f+g*2,b=h[_],E=h[_+1],D=_m(n,e,S,b,i);r[g]=Ff(D,y,R,E,p)}return r}};function Ff(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function xm(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function _m(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Ff(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=xm(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Sn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),wc(t.settings)&&(n.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Do(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case mo:e=this.InterpolantFactoryMethodLinear;break;case so:e=this.InterpolantFactoryMethodSmooth;break;case Ac:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;wc(this.settings)&&(ku(this.settings.inTangents,t),ku(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&ap(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===so,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,wc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function ku(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=mo;var wi=class extends Sn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Er;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};No.prototype.ValueTypeName="color";var Uo=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};Uo.prototype.ValueTypeName="number";var Fo=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Jr=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}};Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Er;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};Oo.prototype.ValueTypeName="vector";var Bo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Of=new Bo,zo=class{constructor(t){this.manager=t!==void 0?t:Of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ys=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$i=class extends Ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Tc=new xe,Gu=new B,Vu=new B,Kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gu),Vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Ps||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},no=new B,io=new yn,qn=new B,jr=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(no,io,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(no,io,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new B,Wu=new gt,Xu=new gt,qe=class extends jr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Wu,Xu),e.subVectors(Xu,Wu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fc=class extends Kr{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},Qr=class extends Ys{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zs=class extends jr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oc=class extends Kr{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ji=class extends Ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Oc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ts=-90,As=1,Ho=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qe(Ts,As,t,e);i.layers=this.layers,this.add(i);let r=new qe(Ts,As,t,e);r.layers=this.layers,this.add(r);let a=new qe(Ts,As,t,e);a.layers=this.layers,this.add(a);let o=new qe(Ts,As,t,e);o.layers=this.layers,this.add(o);let l=new qe(Ts,As,t,e);l.layers=this.layers,this.add(l);let c=new qe(Ts,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ko=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hh="\\[\\]\\.:\\/",ym=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",vm="[^"+hh.replace("\\.","")+"]",Mm=/((?:WC+[\/:])*)/.source.replace("WC",uh),Sm=/(WCOD+)?/.source.replace("WCOD",vm),bm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Em=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),wm=new RegExp("^"+Mm+Sm+bm+Em+"$"),Tm=["material","materials","bones","map"],Bc=class{constructor(t,e,n){let i=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ym,"")}static parseTrackName(t){let e=wm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Tm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Bc;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ky=new Float32Array(1);var xh=class xh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};xh.prototype.isMatrix2=!0;var zc=xh;function fh(s,t,e,n){let i=Am(n);switch(e){case nh:return s*t;case Ko:return s*t/i.components*i.byteLength;case jo:return s*t/i.components*i.byteLength;case Li:return s*t*2/i.components*i.byteLength;case Qo:return s*t*2/i.components*i.byteLength;case ih:return s*t*3/i.components*i.byteLength;case Tn:return s*t*4/i.components*i.byteLength;case tl:return s*t*4/i.components*i.byteLength;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nl:case sl:return Math.max(s,16)*Math.max(t,8)/4;case el:case il:return Math.max(s,8)*Math.max(t,8)/2;case rl:case al:case ll:case cl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ol:case oa:case hl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case dl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case pl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ml:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case gl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case bl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case wl:case Tl:case Al:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case la:case Il:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Am(s){switch(s){case mn:case jc:return{byteLength:1,components:1};case Ks:case Qc:case Hn:return{byteLength:2,components:1};case $o:case Jo:return{byteLength:2,components:4};case zn:case Zo:case wn:return{byteLength:4,components:1};case th:case eh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function rd(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Lm(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
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
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
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
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
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
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,n0=`#define PI 3.141592653589793
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
} // validated`,i0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s0=`vec3 transformedNormal = objectNormal;
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
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
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
}`,M0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
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
#endif`,P0=`uniform sampler2D dfgLUT;
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
}`,L0=`
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,F0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
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
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_g=`float getShadowMask() {
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
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ng=`uniform sampler2D t2D;
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`#include <common>
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
}`,Hg=`#if DEPTH_PACKING == 3200
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
}`,kg=`#define DISTANCE
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
}`,Gg=`#define DISTANCE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,Zg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,Jg=`#define LAMBERT
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
}`,Kg=`#define MATCAP
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
}`,jg=`#define MATCAP
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
}`,Qg=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,ex=`#define PHONG
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
}`,nx=`#define PHONG
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
}`,ix=`#define STANDARD
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
}`,sx=`#define STANDARD
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
}`,rx=`#define TOON
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
}`,ax=`#define TOON
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
}`,ox=`uniform float size;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,hx=`uniform vec3 color;
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
}`,ux=`uniform float rotation;
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
}`,fx=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Dm,alphahash_pars_fragment:Nm,alphamap_fragment:Um,alphamap_pars_fragment:Fm,alphatest_fragment:Om,alphatest_pars_fragment:Bm,aomap_fragment:zm,aomap_pars_fragment:Hm,batching_pars_vertex:km,batching_vertex:Gm,begin_vertex:Vm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:qm,bumpmap_pars_fragment:Ym,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:$m,clipping_planes_pars_vertex:Jm,clipping_planes_vertex:Km,color_fragment:jm,color_pars_fragment:Qm,color_pars_vertex:t0,color_vertex:e0,common:n0,cube_uv_reflection_fragment:i0,defaultnormal_vertex:s0,displacementmap_pars_vertex:r0,displacementmap_vertex:a0,emissivemap_fragment:o0,emissivemap_pars_fragment:l0,colorspace_fragment:c0,colorspace_pars_fragment:h0,envmap_fragment:u0,envmap_common_pars_fragment:f0,envmap_pars_fragment:d0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:w0,envmap_vertex:m0,fog_vertex:g0,fog_pars_vertex:x0,fog_fragment:_0,fog_pars_fragment:y0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:M0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:b0,lights_pars_begin:E0,lights_toon_fragment:T0,lights_toon_pars_fragment:A0,lights_phong_fragment:R0,lights_phong_pars_fragment:C0,lights_physical_fragment:I0,lights_physical_pars_fragment:P0,lights_fragment_begin:L0,lights_fragment_maps:D0,lights_fragment_end:N0,lightprobes_pars_fragment:U0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:O0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:z0,map_fragment:H0,map_pars_fragment:k0,map_particle_fragment:G0,map_particle_pars_fragment:V0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:q0,morphcolor_vertex:Y0,morphnormal_vertex:Z0,morphtarget_pars_vertex:$0,morphtarget_vertex:J0,normal_fragment_begin:K0,normal_fragment_maps:j0,normal_pars_fragment:Q0,normal_pars_vertex:tg,normal_vertex:eg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:rg,iridescence_pars_fragment:ag,opaque_fragment:og,packing:lg,premultiplied_alpha_fragment:cg,project_vertex:hg,dithering_fragment:ug,dithering_pars_fragment:fg,roughnessmap_fragment:dg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:xg,shadowmask_pars_fragment:_g,skinbase_vertex:yg,skinning_pars_vertex:vg,skinning_vertex:Mg,skinnormal_vertex:Sg,specularmap_fragment:bg,specularmap_pars_fragment:Eg,tonemapping_fragment:wg,tonemapping_pars_fragment:Tg,transmission_fragment:Ag,transmission_pars_fragment:Rg,uv_pars_fragment:Cg,uv_pars_vertex:Ig,uv_vertex:Pg,worldpos_vertex:Lg,background_vert:Dg,background_frag:Ng,backgroundCube_vert:Ug,backgroundCube_frag:Fg,cube_vert:Og,cube_frag:Bg,depth_vert:zg,depth_frag:Hg,distance_vert:kg,distance_frag:Gg,equirect_vert:Vg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:qg,meshbasic_vert:Yg,meshbasic_frag:Zg,meshlambert_vert:$g,meshlambert_frag:Jg,meshmatcap_vert:Kg,meshmatcap_frag:jg,meshnormal_vert:Qg,meshnormal_frag:tx,meshphong_vert:ex,meshphong_frag:nx,meshphysical_vert:ix,meshphysical_frag:sx,meshtoon_vert:rx,meshtoon_frag:ax,points_vert:ox,points_frag:lx,shadow_vert:cx,shadow_frag:hx,sprite_vert:ux,sprite_frag:fx},wt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ti={basic:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:rn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:rn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:rn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:rn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:rn([wt.points,wt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:rn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:rn([wt.common,wt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:rn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:rn([wt.sprite,wt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:rn([wt.common,wt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:rn([wt.lights,wt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ti.physical={uniforms:rn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Dl={r:0,b:0,g:0},dx=new xe,ad=new te;ad.set(-1,0,0,0,1,0,0,0,1);function px(s,t,e,n,i,r){let a=new Dt(0),o=i===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let _=S.backgroundBlurriness>0;R=t.get(R,_)}return R}function g(S){let R=!1,_=d(S);_===null?p(a,o):_&&_.isColor&&(p(_,1),R=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(S,R){let _=d(R);_&&(_.isCubeTexture||_.mapping===ea)?(c===void 0&&(c=new it(new De(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:ts(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(R.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ad),c.material.toneMapped=ue.getTransfer(_.colorSpace)!==ve,(h!==_||u!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new it(new Ve(2,2),new We({name:"BackgroundMaterial",uniforms:ts(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=ue.getTransfer(_.colorSpace)!==ve,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,R){S.getRGB(Dl,ch(s)),e.buffers.color.setClear(Dl.r,Dl.g,Dl.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,R=1){a.set(S),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:y,dispose:m}}function mx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(O,M,I,C,A){let U=!1,F=u(O,C,I,M);r!==F&&(r=F,c(r.object)),U=d(O,C,I,A),U&&g(O,C,I,A),A!==null&&t.update(A,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(O,M,I,C),A!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(A).buffer))}function l(){return s.createVertexArray()}function c(O){return s.bindVertexArray(O)}function h(O){return s.deleteVertexArray(O)}function u(O,M,I,C){let A=C.wireframe===!0,U=n[M.id];U===void 0&&(U={},n[M.id]=U);let F=O.isInstancedMesh===!0?O.id:0,H=U[F];H===void 0&&(H={},U[F]=H);let z=H[I.id];z===void 0&&(z={},H[I.id]=z);let q=z[A];return q===void 0&&(q=f(l()),z[A]=q),q}function f(O){let M=[],I=[],C=[];for(let A=0;A<e;A++)M[A]=0,I[A]=0,C[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:I,attributeDivisors:C,object:O,attributes:{},index:null}}function d(O,M,I,C){let A=r.attributes,U=M.attributes,F=0,H=I.getAttributes();for(let z in H)if(H[z].location>=0){let W=A[z],ft=U[z];if(ft===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(ft=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(ft=O.instanceColor)),W===void 0||W.attribute!==ft||ft&&W.data!==ft.data)return!0;F++}return r.attributesNum!==F||r.index!==C}function g(O,M,I,C){let A={},U=M.attributes,F=0,H=I.getAttributes();for(let z in H)if(H[z].location>=0){let W=U[z];W===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(W=O.instanceColor));let ft={};ft.attribute=W,W&&W.data&&(ft.data=W.data),A[z]=ft,F++}r.attributes=A,r.attributesNum=F,r.index=C}function y(){let O=r.newAttributes;for(let M=0,I=O.length;M<I;M++)O[M]=0}function p(O){m(O,0)}function m(O,M){let I=r.newAttributes,C=r.enabledAttributes,A=r.attributeDivisors;I[O]=1,C[O]===0&&(s.enableVertexAttribArray(O),C[O]=1),A[O]!==M&&(s.vertexAttribDivisor(O,M),A[O]=M)}function S(){let O=r.newAttributes,M=r.enabledAttributes;for(let I=0,C=M.length;I<C;I++)M[I]!==O[I]&&(s.disableVertexAttribArray(I),M[I]=0)}function R(O,M,I,C,A,U,F){F===!0?s.vertexAttribIPointer(O,M,I,A,U):s.vertexAttribPointer(O,M,I,C,A,U)}function _(O,M,I,C){y();let A=C.attributes,U=I.getAttributes(),F=M.defaultAttributeValues;for(let H in U){let z=U[H];if(z.location>=0){let q=A[H];if(q===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(q=O.instanceColor)),q!==void 0){let W=q.normalized,ft=q.itemSize,ot=t.get(q);if(ot===void 0)continue;let Pt=ot.buffer,jt=ot.type,ee=ot.bytesPerElement,Q=jt===s.INT||jt===s.UNSIGNED_INT||q.gpuType===Zo;if(q.isInterleavedBufferAttribute){let tt=q.data,_t=tt.stride,Vt=q.offset;if(tt.isInstancedInterleavedBuffer){for(let St=0;St<z.locationSize;St++)m(z.location+St,tt.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let St=0;St<z.locationSize;St++)p(z.location+St);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let St=0;St<z.locationSize;St++)R(z.location+St,ft/z.locationSize,jt,W,_t*ee,(Vt+ft/z.locationSize*St)*ee,Q)}else{if(q.isInstancedBufferAttribute){for(let tt=0;tt<z.locationSize;tt++)m(z.location+tt,q.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let tt=0;tt<z.locationSize;tt++)p(z.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let tt=0;tt<z.locationSize;tt++)R(z.location+tt,ft/z.locationSize,jt,W,ft*ee,ft/z.locationSize*tt*ee,Q)}}else if(F!==void 0){let W=F[H];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(z.location,W);break;case 3:s.vertexAttrib3fv(z.location,W);break;case 4:s.vertexAttrib4fv(z.location,W);break;default:s.vertexAttrib1fv(z.location,W)}}}}S()}function b(){T();for(let O in n){let M=n[O];for(let I in M){let C=M[I];for(let A in C){let U=C[A];for(let F in U)h(U[F].object),delete U[F];delete C[A]}}delete n[O]}}function E(O){if(n[O.id]===void 0)return;let M=n[O.id];for(let I in M){let C=M[I];for(let A in C){let U=C[A];for(let F in U)h(U[F].object),delete U[F];delete C[A]}}delete n[O.id]}function D(O){for(let M in n){let I=n[M];for(let C in I){let A=I[C];if(A[O.id]===void 0)continue;let U=A[O.id];for(let F in U)h(U[F].object),delete U[F];delete A[O.id]}}}function v(O){for(let M in n){let I=n[M],C=O.isInstancedMesh===!0?O.id:0,A=I[C];if(A!==void 0){for(let U in A){let F=A[U];for(let H in F)h(F[H].object),delete F[H];delete A[U]}delete I[C],Object.keys(I).length===0&&delete n[M]}}}function T(){L(),a=!0,r!==i&&(r=i,c(r.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:p,disableUnusedAttributes:S}}function gx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function xx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==Tn&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let v=D===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==mn&&D!==wn&&!v&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:_,maxSamples:b,samples:E}}function _x(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Nn,o=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,R=S*4,_=m.clippingState||null;l.value=_,_=h(g,f,R,d);for(let b=0;b!==R;++b)_[b]=e[b];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=d+y*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,_=d;R!==y;++R,_+=4)a.copy(u[R]).applyMatrix4(S,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var er=4,yx=6,vx=20,Mx=256,ha=new Zs,Bf=new Dt,_h=null,yh=0,vh=0,Mh=!1,Sx=new B,es=new B,ns=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=Sx}=r;_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_h,yh,vh),this._renderer.xr.enabled=Mh,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Hn,format:Tn,colorSpace:wr,depthBuffer:!1},i=zf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bx(r)),this._blurMaterial=wx(r,t,e),this._ggxMaterial=Ex(r,t,e)}return i}_compileMaterial(t){let e=new it(new Re,t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,i,r){let l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Bf),u.toneMapping=Bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new De,new Ce({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,S=t.background;S?S.isColor&&(p.color.copy(S),t.background=null,m=!0):(p.color.copy(Bf),m=!0);for(let R=0;R<6;R++){let _=R%3;_===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):_===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let b=this._cubeSize;tr(i,_*b,R>2?b:0,b,b),u.setRenderTarget(i),m&&u.render(y,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ci||t.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:g}=this,y=this._sizeLods[n],p=3*y*(n>g-er?n-g+er:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,tr(r,p,m,3*y,2*y),i.setRenderTarget(r),i.render(o,ha),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,tr(t,p,m,3*y,2*y),i.setRenderTarget(t),i.render(o,ha)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-er?i-this._lodMax+er:0),f=4*(this._cubeSize-h);tr(e,u,f,3*h,2*h),a.setRenderTarget(e),a.render(l,ha)}};function bx(s){let t=[],e=[],n=s,i=s-er+1+yx;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,g=new Float32Array(d*f*u),y=new Float32Array(d*f*u);for(let m=0;m<u;m++){let S=m%3*2/3-1,R=m>2?0:-1,_=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];g.set(_,d*f*m);for(let b=0;b<f;b++){let E=h[b*2]*2-1,D=h[b*2+1]*2-1;m===0?es.set(1,D,E):m===1?es.set(-E,1,-D):m===2?es.set(-E,D,1):m===3?es.set(-1,D,-E):m===4?es.set(-E,-1,D):es.set(E,D,-1),es.toArray(y,(m*f+b)*d)}}let p=new Re;p.setAttribute("position",new Ae(g,d)),p.setAttribute("outputDirection",new Ae(y,d)),e.push(new it(p,null)),n>er&&n--}return{lodMeshes:e,sizeLods:t}}function zf(s,t,e){let n=new pn(s,t,e);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ex(s,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function wx(s,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:vx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Hf(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function kf(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ul=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Br(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new De(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:jn});r.uniforms.tEquirect.value=e;let a=new it(i,r),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=je),new Ho(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function Tx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Xo||d===qo)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Ul(g.height);return y.fromEquirectangularTexture(s,f),t.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,g=d===Xo||d===qo,y=d===Ci||d===Qi;if(g||y){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ns(s)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let S=f.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new ns(s)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===Xo?f.mapping=Ci:d===qo&&(f.mapping=Qi),f}function l(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Ax(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Wi("WebGLRenderer: "+n+" extension not supported."),i}}}function Rx(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(d!==null){let S=d.array;y=d.version;for(let R=0,_=S.length;R<_;R+=3){let b=S[R+0],E=S[R+1],D=S[R+2];f.push(b,E,E,D,D,b)}}else{let S=g.array;y=g.version;for(let R=0,_=S.length/3-1;R<_;R+=3){let b=R+0,E=R+1,D=R+2;f.push(b,E,E,D,D,b)}}let p=new(g.count>=65535?Lr:Pr)(f,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Cx(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];e.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ix(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Px(s,t,e){let n=new WeakMap,i=new Le;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let T=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],R=0;d===!0&&(R=1),g===!0&&(R=2),y===!0&&(R=3);let _=o.attributes.position.count*R,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*b*4*u),D=new Cr(E,_,b,u);D.type=wn,D.needsUpdate=!0;let v=R*4;for(let L=0;L<u;L++){let O=p[L],M=m[L],I=S[L],C=_*b*4*L;for(let A=0;A<O.count;A++){let U=A*v;d===!0&&(i.fromBufferAttribute(O,A),E[C+U+0]=i.x,E[C+U+1]=i.y,E[C+U+2]=i.z,E[C+U+3]=0),g===!0&&(i.fromBufferAttribute(M,A),E[C+U+4]=i.x,E[C+U+5]=i.y,E[C+U+6]=i.z,E[C+U+7]=0),y===!0&&(i.fromBufferAttribute(I,A),E[C+U+8]=i.x,E[C+U+9]=i.y,E[C+U+10]=i.z,E[C+U+11]=I.itemSize===4?i.w:1)}}f={count:u,texture:D,size:new gt(_,b)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Lx(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Dx={[Xc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[Js]:"ACES_FILMIC_TONE_MAPPING",[$c]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[Zc]:"CUSTOM_TONE_MAPPING"};function Nx(s,t,e,n,i,r){let a=new pn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Re;c.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new fe([0,2,0,0,2,0],2));let h=new Ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new it(c,h),f=new Zs(-1,1,1,-1,0,1),d=null,g=null,y=!1,p,m=null,S=[],R=!1;this.setSize=function(_,b){a.setSize(_,b),o!==null&&o.setSize(_,b),l!==null&&l.setSize(_,b);for(let E=0;E<S.length;E++){let D=S[E];D.setSize&&D.setSize(_,b)}},this.setEffects=function(_){S=_,R=S.length>0&&S[0].isRenderPass===!0;let b=a.width,E=a.height;S.length>0&&o===null&&(o=new pn(b,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new pn(b,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<S.length;D++){let v=S[D];v.setSize&&v.setSize(b,E)}},this.begin=function(_,b){if(y||_.toneMapping===Bn&&S.length===0)return!1;if(m=b,b!==null){let E=b.width,D=b.height;(a.width!==E||a.height!==D)&&this.setSize(E,D)}return R===!1&&_.setRenderTarget(a),p=_.toneMapping,_.toneMapping=Bn,!0},this.hasRenderPass=function(){return R},this.end=function(_,b){_.toneMapping=p,y=!0;let E=a,D=o;for(let v=0;v<S.length;v++){let T=S[v];T.enabled!==!1&&(T.render(_,D,E,b),T.needsSwap!==!1&&(E=D,D=D===o?l:o))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,h.defines={},ue.getTransfer(d)===ve&&(h.defines.SRGB_TRANSFER="");let v=Dx[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(m),_.render(u,f),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var od=new hn,Eh=new bi(1,1),ld=new Cr,cd=new _o,hd=new Br,Gf=[],Vf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),qf=new Float32Array(4);function ir(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Gf[i];if(r===void 0&&(r=new Float32Array(i),Gf[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function $e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ol(s,t){let e=Vf[t];e===void 0&&(e=new Int32Array(t),Vf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ux(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Fx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2fv(this.addr,t),$e(e,t)}}function Ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;s.uniform3fv(this.addr,t),$e(e,t)}}function Bx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4fv(this.addr,t),$e(e,t)}}function zx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;qf.set(n),s.uniformMatrix2fv(this.addr,!1,qf),$e(e,n)}}function Hx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;Xf.set(n),s.uniformMatrix3fv(this.addr,!1,Xf),$e(e,n)}}function kx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;Wf.set(n),s.uniformMatrix4fv(this.addr,!1,Wf),$e(e,n)}}function Gx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2iv(this.addr,t),$e(e,t)}}function Wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3iv(this.addr,t),$e(e,t)}}function Xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4iv(this.addr,t),$e(e,t)}}function qx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2uiv(this.addr,t),$e(e,t)}}function Zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3uiv(this.addr,t),$e(e,t)}}function $x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4uiv(this.addr,t),$e(e,t)}}function Jx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Eh.compareFunction=e.isReversedDepthBuffer()?Ll:Pl,r=Eh):r=od,e.setTexture2D(t||r,i)}function Kx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cd,i)}function jx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hd,i)}function Qx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ld,i)}function t_(s){switch(s){case 5126:return Ux;case 35664:return Fx;case 35665:return Ox;case 35666:return Bx;case 35674:return zx;case 35675:return Hx;case 35676:return kx;case 5124:case 35670:return Gx;case 35667:case 35671:return Vx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Zx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Qx}}function e_(s,t){s.uniform1fv(this.addr,t)}function n_(s,t){let e=ir(t,this.size,2);s.uniform2fv(this.addr,e)}function i_(s,t){let e=ir(t,this.size,3);s.uniform3fv(this.addr,e)}function s_(s,t){let e=ir(t,this.size,4);s.uniform4fv(this.addr,e)}function r_(s,t){let e=ir(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function a_(s,t){let e=ir(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function o_(s,t){let e=ir(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function l_(s,t){s.uniform1iv(this.addr,t)}function c_(s,t){s.uniform2iv(this.addr,t)}function h_(s,t){s.uniform3iv(this.addr,t)}function u_(s,t){s.uniform4iv(this.addr,t)}function f_(s,t){s.uniform1uiv(this.addr,t)}function d_(s,t){s.uniform2uiv(this.addr,t)}function p_(s,t){s.uniform3uiv(this.addr,t)}function m_(s,t){s.uniform4uiv(this.addr,t)}function g_(s,t,e){let n=this.cache,i=t.length,r=Ol(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Eh:a=od;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function x_(s,t,e){let n=this.cache,i=t.length,r=Ol(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||cd,r[a])}function __(s,t,e){let n=this.cache,i=t.length,r=Ol(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||hd,r[a])}function y_(s,t,e){let n=this.cache,i=t.length,r=Ol(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ld,r[a])}function v_(s){switch(s){case 5126:return e_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return a_;case 35676:return o_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return h_;case 35669:case 35673:return u_;case 5125:return f_;case 36294:return d_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return y_}}var wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=t_(e.type)}},Th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v_(e.type)}},Ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function Yf(s,t){s.seq.push(t),s.map[t.id]=t}function M_(s,t,e){let n=s.name,i=n.length;for(Sh.lastIndex=0;;){let r=Sh.exec(n),a=Sh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Yf(e,c===void 0?new wh(o,s,t):new Th(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Ah(o),Yf(e,u)),e=u}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);M_(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Zf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var S_=37297,b_=0;function E_(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var $f=new te;function w_(s){ue._getMatrix($f,ue.workingColorSpace,s);let t=`mat3( ${$f.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(s)){case Tr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Jf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+E_(s.getShaderSource(t),o)}else return r}function T_(s,t){let e=w_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var A_={[Xc]:"Linear",[qc]:"Reinhard",[Yc]:"Cineon",[Js]:"ACESFilmic",[$c]:"AgX",[Jc]:"Neutral",[Zc]:"Custom"};function R_(s,t){let e=A_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nl=new B;function C_(){ue.getLuminanceCoefficients(Nl);let s=Nl.x.toFixed(4),t=Nl.y.toFixed(4),e=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function P_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function fa(s){return s!==""}function Kf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(s){return s.replace(D_,U_)}var N_=new Map;function U_(s,t){let e=ae[t];if(e===void 0){let n=N_.get(t);if(n!==void 0)e=ae[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rh(e)}var F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(s){return s.replace(F_,O_)}function O_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function td(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var B_={[ta]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function z_(s){return B_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H_={[Ci]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE_UV"};function k_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":H_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var G_={[Qi]:"ENVMAP_MODE_REFRACTION"};function V_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":G_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var W_={[Wo]:"ENVMAP_BLENDING_MULTIPLY",[df]:"ENVMAP_BLENDING_MIX",[pf]:"ENVMAP_BLENDING_ADD"};function X_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":W_[s.combine]||"ENVMAP_BLENDING_NONE"}function q_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Y_(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=z_(e),c=k_(e),h=V_(e),u=X_(e),f=q_(e),d=I_(e),g=P_(r),y=i.createProgram(),p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fa).join(`
`),m.length>0&&(m+=`
`)):(p=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),m=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Bn?R_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,T_("linearToOutputTexel",e.outputColorSpace),C_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fa).join(`
`)),a=Rh(a),a=Kf(a,e),a=jf(a,e),o=Rh(o),o=Kf(o,e),o=jf(o,e),a=Qf(a),o=Qf(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=S+p+a,_=S+m+o,b=Zf(i,i.VERTEX_SHADER,R),E=Zf(i,i.FRAGMENT_SHADER,_);i.attachShader(y,b),i.attachShader(y,E),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function D(O){if(s.debug.checkShaderErrors){let M=i.getProgramInfoLog(y)||"",I=i.getShaderInfoLog(b)||"",C=i.getShaderInfoLog(E)||"",A=M.trim(),U=I.trim(),F=C.trim(),H=!0,z=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,b,E);else{let q=Jf(i,b,"vertex"),W=Jf(i,E,"fragment");Kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+A+`
`+q+`
`+W)}else A!==""?Jt("WebGLProgram: Program Info Log:",A):(U===""||F==="")&&(z=!1);z&&(O.diagnostics={runnable:H,programLog:A,vertexShader:{log:U,prefix:p},fragmentShader:{log:F,prefix:m}})}i.deleteShader(b),i.deleteShader(E),v=new nr(i,y),T=L_(i,y)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(y,S_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=b_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=E,this}var Z_=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ih(t),e.set(t,n)),n}},Ih=class{constructor(t){this.id=Z_++,this.code=t,this.usedTimes=0}};function $_(s){return s===Li||s===oa||s===la}function J_(s,t,e,n,i,r){let a=new Ir,o=new Ch,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,T,L,O,M,I){let C=O.fog,A=M.geometry,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=t.get(v.envMap||U,F),z=H&&H.mapping===ea?H.image.height:null,q=d[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Jt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let W=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,ft=W!==void 0?W.length:0,ot=0;A.morphAttributes.position!==void 0&&(ot=1),A.morphAttributes.normal!==void 0&&(ot=2),A.morphAttributes.color!==void 0&&(ot=3);let Pt,jt,ee,Q;if(q){let Ie=ti[q];Pt=Ie.vertexShader,jt=Ie.fragmentShader}else{Pt=v.vertexShader,jt=v.fragmentShader;let Ie=o.getVertexShaderStage(v),_e=o.getFragmentShaderStage(v);o.update(v,Ie,_e),ee=Ie.id,Q=_e.id}let tt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Vt=M.isInstancedMesh===!0,St=M.isBatchedMesh===!0,Zt=!!v.map,ge=!!v.matcap,st=!!H,ht=!!v.aoMap,dt=!!v.lightMap,mt=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,Wt=!!v.displacementMap,Gt=!!v.emissiveMap,$t=!!v.metalnessMap,J=!!v.roughnessMap,N=v.anisotropy>0,Ct=v.clearcoat>0,Nt=v.dispersion>0,P=v.retroreflectivity>0,x=v.iridescence>0,k=v.sheen>0,X=v.transmission>0,Y=N&&!!v.anisotropyMap,lt=Ct&&!!v.clearcoatMap,pt=Ct&&!!v.clearcoatNormalMap,et=Ct&&!!v.clearcoatRoughnessMap,nt=x&&!!v.iridescenceMap,vt=x&&!!v.iridescenceThicknessMap,Ot=k&&!!v.sheenColorMap,yt=k&&!!v.sheenRoughnessMap,Mt=!!v.specularMap,Bt=!!v.specularColorMap,qt=!!v.specularIntensityMap,Qt=X&&!!v.transmissionMap,V=X&&!!v.thicknessMap,bt=!!v.gradientMap,rt=!!v.alphaMap,Et=v.alphaTest>0,Rt=!!v.alphaHash,ut=!!v.extensions,Xt=Bn;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Xt=s.toneMapping);let zt={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:Pt,fragmentShader:jt,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:St,batchingColor:St&&M._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&M.instanceColor!==null,instancingMorph:Vt&&M.morphTexture!==null,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Zt,matcap:ge,envMap:st,envMapMode:st&&H.mapping,envMapCubeUVHeight:z,aoMap:ht,lightMap:dt,bumpMap:mt,normalMap:xt,displacementMap:Wt,emissiveMap:Gt,normalMapObjectSpace:xt&&v.normalMapType===xf,normalMapTangentSpace:xt&&v.normalMapType===ca,packedNormalMap:xt&&v.normalMapType===ca&&$_(v.normalMap.format),metalnessMap:$t,roughnessMap:J,anisotropy:N,anisotropyMap:Y,clearcoat:Ct,clearcoatMap:lt,clearcoatNormalMap:pt,clearcoatRoughnessMap:et,dispersion:Nt,retroreflection:P,iridescence:x,iridescenceMap:nt,iridescenceThicknessMap:vt,sheen:k,sheenColorMap:Ot,sheenRoughnessMap:yt,specularMap:Mt,specularColorMap:Bt,specularIntensityMap:qt,transmission:X,transmissionMap:Qt,thicknessMap:V,gradientMap:bt,opaque:v.transparent===!1&&v.blending===Ri&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:Et,alphaHash:Rt,combine:v.combine,mapUv:Zt&&g(v.map.channel),aoMapUv:ht&&g(v.aoMap.channel),lightMapUv:dt&&g(v.lightMap.channel),bumpMapUv:mt&&g(v.bumpMap.channel),normalMapUv:xt&&g(v.normalMap.channel),displacementMapUv:Wt&&g(v.displacementMap.channel),emissiveMapUv:Gt&&g(v.emissiveMap.channel),metalnessMapUv:$t&&g(v.metalnessMap.channel),roughnessMapUv:J&&g(v.roughnessMap.channel),anisotropyMapUv:Y&&g(v.anisotropyMap.channel),clearcoatMapUv:lt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(v.sheenRoughnessMap.channel),specularMapUv:Mt&&g(v.specularMap.channel),specularColorMapUv:Bt&&g(v.specularColorMap.channel),specularIntensityMapUv:qt&&g(v.specularIntensityMap.channel),transmissionMapUv:Qt&&g(v.transmissionMap.channel),thicknessMapUv:V&&g(v.thicknessMap.channel),alphaMapUv:rt&&g(v.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(xt||N),vertexNormals:!!A.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!A.attributes.uv&&(Zt||rt),fog:!!C,useFog:v.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||A.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:M.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:ot,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Zt&&v.map.isVideoTexture===!0&&ue.getTransfer(v.map.colorSpace)===ve,decodeVideoTextureEmissive:Gt&&v.emissiveMap.isVideoTexture===!0&&ue.getTransfer(v.emissiveMap.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===Ye,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ut&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&v.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function p(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)T.push(L),T.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(m(T,v),S(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){let T=d[v.type],L;if(T){let O=ti[T];L=Uf.clone(O.uniforms)}else L=v.uniforms;return L}function _(v,T){let L=h.get(T);return L!==void 0?++L.usedTimes:(L=new Y_(s,T,v,i),c.push(L),h.set(T,L)),L}function b(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function D(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:R,acquireProgram:_,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:D}}function K_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function j_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ed(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,y,p,m){let S=s[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},s[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=g,S.materialVariant=a(f),S.groupOrder=y,S.renderOrder=f.renderOrder,S.z=p,S.group=m),t++,S}function l(f,d,g,y,p,m,S){S.reversedDepth===!0&&(p=-p);let R=o(f,d,g,y,p,m);g.transmission>0?n.push(R):g.transparent===!0?i.push(R):e.push(R)}function c(f,d,g,y,p,m){let S=o(f,d,g,y,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||j_),n.length>1&&n.sort(d||ed),i.length>1&&i.sort(d||ed)}function u(){for(let f=t,d=s.length;f<d;f++){let g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Q_(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new nd,s.set(n,[a])):i>=r.length?(a=new nd,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ty(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Dt};break;case"SpotLight":e={position:new B,direction:new B,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function ey(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ny=0;function iy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function sy(s){let t=new ty,e=ey(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new xe,a=new xe;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,S=0,R=0,_=0,b=0,E=0,D=0,v=0,T=0,L=0;c.sort(iy);for(let M=0,I=c.length;M<I;M++){let C=c[M],A=C.color,U=C.intensity,F=C.distance,H=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Li?H=C.shadow.map.texture:H=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=A.r*U,u+=A.g*U,f+=A.b*U;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],U);L++}else if(C.isSunLight){let z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,W=e.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[g]=W,n.sunShadowMap[g]=H;let ft=q.getViewportCount();for(let ot=0;ot<ft;ot++)n.sunShadowMatrix[y+ot]=q.getMatrix(ot),n.sunShadowCascade[y+ot]=q._cascadeData[ot];y+=ft,g++}n.sun[d]=z,d++}else if(C.isDirectionalLight){let z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,W=e.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=C.shadow.matrix,b++}n.directional[p]=z,p++}else if(C.isSpotLight){let z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(A).multiplyScalar(U),z.distance=F,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[S]=z;let q=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,q.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[S]=q.matrix,C.castShadow){let W=e.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.spotShadow[S]=W,n.spotShadowMap[S]=H,D++}S++}else if(C.isRectAreaLight){let z=t.get(C);z.color.copy(A).multiplyScalar(U),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[R]=z,R++}else if(C.isPointLight){let z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let q=C.shadow,W=e.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=C.shadow.matrix,E++}n.point[m]=z,m++}else if(C.isHemisphereLight){let z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(U),z.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[_]=z,_++}}R>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let O=n.hash;(O.sunLength!==d||O.directionalLength!==p||O.pointLength!==m||O.spotLength!==S||O.rectAreaLength!==R||O.hemiLength!==_||O.numSunShadows!==g||O.numDirectionalShadows!==b||O.numPointShadows!==E||O.numSpotShadows!==D||O.numSpotMaps!==v||O.numLightProbes!==L)&&(n.sun.length=d,n.directional.length=p,n.spot.length=S,n.rectArea.length=R,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,O.sunLength=d,O.directionalLength=p,O.pointLength=m,O.spotLength=S,O.rectAreaLength=R,O.hemiLength=_,O.numSunShadows=g,O.numDirectionalShadows=b,O.numPointShadows=E,O.numSpotShadows=D,O.numSpotMaps=v,O.numLightProbes=L,n.version=ny++)}function l(c,h){let u=0,f=0,d=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){let _=c[S];if(_.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),f++}else if(_.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function id(s){let t=new sy(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ry(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new id(s),t.set(i,[o])):r>=a.length?(o=new id(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oy=`uniform sampler2D shadow_pass;
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
}`,ly=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],cy=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],sd=new xe,ua=new B,bh=new B;function hy(s,t,e){let n=new Hs,i=new gt,r=new gt,a=new Le,o=new Ro,l=new Co,c={},h=e.maxTextureSize,u={[Ai]:Ye,[Ye]:Ai,[tn]:tn},f=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:ay,fragmentShader:oy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Re;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new it(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let m=this.type;this.render=function(E,D,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Vo&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ta);let T=s.getRenderTarget(),L=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),M=s.state;M.setBlending(jn),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let I=m!==this.type;I&&D.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(A=>A.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,A=E.length;C<A;C++){let U=E[C],F=U.shadow;if(F===void 0){Jt("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let H=F.getFrameExtents();i.multiply(H),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/H.x),i.x=r.x*H.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/H.y),i.y=r.y*H.y,F.mapSize.y=r.y));let z=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=z,F.map===null||I===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===$s){if(U.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new pn(i.x,i.y,{format:Li,type:Hn,minFilter:je,magFilter:je,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new bi(i.x,i.y,wn),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=$n,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ke,F.map.depthTexture.magFilter=Ke}else U.isPointLight?(F.map=new Ul(i.x),F.map.depthTexture=new yo(i.x,zn)):(F.map=new pn(i.x,i.y),F.map.depthTexture=new bi(i.x,i.y,zn)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=$n,this.type===ta?(F.map.depthTexture.compareFunction=z?Ll:Pl,F.map.depthTexture.minFilter=je,F.map.depthTexture.magFilter=je):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ke,F.map.depthTexture.magFilter=Ke);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let q=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();U.isPointLight!==!0&&F.updateMatrices(U,v);for(let W=0;W<q;W++){let ft=F.getCamera(W);if(U.isPointLight){let ot=F.camera,Pt=F.matrix,jt=U.distance||ot.far;jt!==ot.far&&(ot.far=jt,ot.updateProjectionMatrix()),ua.setFromMatrixPosition(U.matrixWorld),ot.position.copy(ua),bh.copy(ot.position),bh.add(ly[W]),ot.up.copy(cy[W]),ot.lookAt(bh),ot.updateMatrixWorld(),Pt.makeTranslation(-ua.x,-ua.y,-ua.z),sd.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),F._frustum.setFromProjectionMatrix(sd,ot.coordinateSystem,ot.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,W),s.clear();else{W===0&&(s.setRenderTarget(F.map),s.clear());let ot=F.getViewport(W);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),M.viewport(a)}n=F.getFrustum(W),_(D,v,ft,U,this.type)}F.isPointLightShadow!==!0&&this.type===$s&&S(F,v),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(T,L,O)};function S(E,D){let v=t.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new pn(i.x,i.y,{format:Li,type:Hn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(D,null,v,f,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(D,null,v,d,y,null)}function R(E,D,v,T){let L=null,O=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)L=O;else if(L=v.isPointLight===!0?l:o,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let M=L.uuid,I=D.uuid,C=c[M];C===void 0&&(C={},c[M]=C);let A=C[I];A===void 0&&(A=L.clone(),C[I]=A,D.addEventListener("dispose",b)),L=A}if(L.visible=D.visible,L.wireframe=D.wireframe,T===$s?L.side=D.shadowSide!==null?D.shadowSide:D.side:L.side=D.shadowSide!==null?D.shadowSide:u[D.side],L.alphaMap=D.alphaMap,L.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,L.map=D.map,L.clipShadows=D.clipShadows,L.clippingPlanes=D.clippingPlanes,L.clipIntersection=D.clipIntersection,L.displacementMap=D.displacementMap,L.displacementScale=D.displacementScale,L.displacementBias=D.displacementBias,L.wireframeLinewidth=D.wireframeLinewidth,L.linewidth=D.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let M=s.properties.get(L);M.light=v}return L}function _(E,D,v,T,L){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===$s)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let I=t.update(E),C=E.material;if(Array.isArray(C)){let A=I.groups;for(let U=0,F=A.length;U<F;U++){let H=A[U],z=C[H.materialIndex];if(z&&z.visible){let q=R(E,z,T,L);E.onBeforeShadow(s,E,D,v,I,q,H),s.renderBufferDirect(v,null,I,q,E,H),E.onAfterShadow(s,E,D,v,I,q,H)}}}else if(C.visible){let A=R(E,C,T,L);E.onBeforeShadow(s,E,D,v,I,A,null),s.renderBufferDirect(v,null,I,A,E,null),E.onAfterShadow(s,E,D,v,I,A,null)}}let M=E.children;for(let I=0,C=M.length;I<C;I++)_(M[I],D,v,T,L)}function b(E){E.target.removeEventListener("dispose",b);for(let v in c){let T=c[v],L=E.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function uy(s,t){function e(){let V=!1,bt=new Le,rt=null,Et=new Le(0,0,0,0);return{setMask:function(Rt){rt!==Rt&&!V&&(s.colorMask(Rt,Rt,Rt,Rt),rt=Rt)},setLocked:function(Rt){V=Rt},setClear:function(Rt,ut,Xt,zt,Ie){Ie===!0&&(Rt*=zt,ut*=zt,Xt*=zt),bt.set(Rt,ut,Xt,zt),Et.equals(bt)===!1&&(s.clearColor(Rt,ut,Xt,zt),Et.copy(bt))},reset:function(){V=!1,rt=null,Et.set(-1,0,0,0)}}}function n(){let V=!1,bt=!1,rt=null,Et=null,Rt=null;return{setReversed:function(ut){if(bt!==ut){let Xt=t.get("EXT_clip_control");ut?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),bt=ut;let zt=Rt;Rt=null,this.setClear(zt)}},getReversed:function(){return bt},setTest:function(ut){ut?tt(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(ut){rt!==ut&&!V&&(s.depthMask(ut),rt=ut)},setFunc:function(ut){if(bt&&(ut=Rf[ut]),Et!==ut){switch(ut){case ao:s.depthFunc(s.NEVER);break;case oo:s.depthFunc(s.ALWAYS);break;case lo:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case co:s.depthFunc(s.EQUAL);break;case ho:s.depthFunc(s.GEQUAL);break;case uo:s.depthFunc(s.GREATER);break;case fo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Et=ut}},setLocked:function(ut){V=ut},setClear:function(ut){Rt!==ut&&(Rt=ut,bt&&(ut=1-ut),s.clearDepth(ut))},reset:function(){V=!1,rt=null,Et=null,Rt=null,bt=!1}}}function i(){let V=!1,bt=null,rt=null,Et=null,Rt=null,ut=null,Xt=null,zt=null,Ie=null;return{setTest:function(_e){V||(_e?tt(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(_e){bt!==_e&&!V&&(s.stencilMask(_e),bt=_e)},setFunc:function(_e,In,Wn){(rt!==_e||Et!==In||Rt!==Wn)&&(s.stencilFunc(_e,In,Wn),rt=_e,Et=In,Rt=Wn)},setOp:function(_e,In,Wn){(ut!==_e||Xt!==In||zt!==Wn)&&(s.stencilOp(_e,In,Wn),ut=_e,Xt=In,zt=Wn)},setLocked:function(_e){V=_e},setClear:function(_e){Ie!==_e&&(s.clearStencil(_e),Ie=_e)},reset:function(){V=!1,bt=null,rt=null,Et=null,Rt=null,ut=null,Xt=null,zt=null,Ie=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,S=null,R=null,_=null,b=null,E=null,D=null,v=new Dt(0,0,0),T=0,L=!1,O=null,M=null,I=null,C=null,A=null,U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,H=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=H>=1):z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=H>=2);let q=null,W={},ft=s.getParameter(s.SCISSOR_BOX),ot=s.getParameter(s.VIEWPORT),Pt=new Le().fromArray(ft),jt=new Le().fromArray(ot);function ee(V,bt,rt,Et){let Rt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(V,ut),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<rt;Xt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,Et,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(bt+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return ut}let Q={};Q[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(s.DEPTH_TEST),a.setFunc(Cs),mt(!1),xt(Hc),tt(s.CULL_FACE),ht(jn);function tt(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function _t(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function Vt(V,bt){return f[V]!==bt?(s.bindFramebuffer(V,bt),f[V]=bt,V===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=bt),V===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function St(V,bt){let rt=g,Et=!1;if(V){rt=d.get(bt),rt===void 0&&(rt=[],d.set(bt,rt));let Rt=V.textures;if(rt.length!==Rt.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Xt=Rt.length;ut<Xt;ut++)rt[ut]=s.COLOR_ATTACHMENT0+ut;rt.length=Rt.length,Et=!0}}else rt[0]!==s.BACK&&(rt[0]=s.BACK,Et=!0);Et&&s.drawBuffers(rt)}function Zt(V){return y!==V?(s.useProgram(V),y=V,!0):!1}let ge={[ji]:s.FUNC_ADD,[$u]:s.FUNC_SUBTRACT,[Ju]:s.FUNC_REVERSE_SUBTRACT};ge[Ku]=s.MIN,ge[ju]=s.MAX;let st={[Qu]:s.ZERO,[tf]:s.ONE,[ef]:s.SRC_COLOR,[Vc]:s.SRC_ALPHA,[lf]:s.SRC_ALPHA_SATURATE,[af]:s.DST_COLOR,[sf]:s.DST_ALPHA,[nf]:s.ONE_MINUS_SRC_COLOR,[Wc]:s.ONE_MINUS_SRC_ALPHA,[of]:s.ONE_MINUS_DST_COLOR,[rf]:s.ONE_MINUS_DST_ALPHA,[cf]:s.CONSTANT_COLOR,[hf]:s.ONE_MINUS_CONSTANT_COLOR,[uf]:s.CONSTANT_ALPHA,[ff]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(V,bt,rt,Et,Rt,ut,Xt,zt,Ie,_e){if(V===jn){p===!0&&(_t(s.BLEND),p=!1);return}if(p===!1&&(tt(s.BLEND),p=!0),V!==Zu){if(V!==m||_e!==L){if((S!==ji||b!==ji)&&(s.blendEquation(s.FUNC_ADD),S=ji,b=ji),_e)switch(V){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ki:s.blendFunc(s.ONE,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Kt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kc:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",V);break}R=null,_=null,E=null,D=null,v.set(0,0,0),T=0,m=V,L=_e}return}Rt=Rt||bt,ut=ut||rt,Xt=Xt||Et,(bt!==S||Rt!==b)&&(s.blendEquationSeparate(ge[bt],ge[Rt]),S=bt,b=Rt),(rt!==R||Et!==_||ut!==E||Xt!==D)&&(s.blendFuncSeparate(st[rt],st[Et],st[ut],st[Xt]),R=rt,_=Et,E=ut,D=Xt),(zt.equals(v)===!1||Ie!==T)&&(s.blendColor(zt.r,zt.g,zt.b,Ie),v.copy(zt),T=Ie),m=V,L=!1}function dt(V,bt){V.side===tn?_t(s.CULL_FACE):tt(s.CULL_FACE);let rt=V.side===Ye;bt&&(rt=!rt),mt(rt),V.blending===Ri&&V.transparent===!1?ht(jn):ht(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let Et=V.stencilWrite;o.setTest(Et),Et&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(V){O!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),O=V)}function xt(V){V!==qu?(tt(s.CULL_FACE),V!==M&&(V===Hc?s.cullFace(s.BACK):V===Yu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),M=V}function Wt(V){V!==I&&(F&&s.lineWidth(V),I=V)}function Gt(V,bt,rt){V?(tt(s.POLYGON_OFFSET_FILL),(C!==bt||A!==rt)&&(C=bt,A=rt,a.getReversed()&&(bt=-bt),s.polygonOffset(bt,rt))):_t(s.POLYGON_OFFSET_FILL)}function $t(V){V?tt(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function J(V){V===void 0&&(V=s.TEXTURE0+U-1),q!==V&&(s.activeTexture(V),q=V)}function N(V,bt,rt){rt===void 0&&(q===null?rt=s.TEXTURE0+U-1:rt=q);let Et=W[rt];Et===void 0&&(Et={type:void 0,texture:void 0},W[rt]=Et),(Et.type!==V||Et.texture!==bt)&&(q!==rt&&(s.activeTexture(rt),q=rt),s.bindTexture(V,bt||Q[V]),Et.type=V,Et.texture=bt)}function Ct(){let V=W[q];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Nt(){try{s.compressedTexImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function x(){try{s.texSubImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function k(){try{s.texSubImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function lt(){try{s.texStorage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function pt(){try{s.texStorage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function et(){try{s.texImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function nt(){try{s.texImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function vt(V){return u[V]!==void 0?u[V]:s.getParameter(V)}function Ot(V,bt){u[V]!==bt&&(s.pixelStorei(V,bt),u[V]=bt)}function yt(V){Pt.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Pt.copy(V))}function Mt(V){jt.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),jt.copy(V))}function Bt(V,bt){let rt=c.get(bt);rt===void 0&&(rt=new WeakMap,c.set(bt,rt));let Et=rt.get(V);Et===void 0&&(Et=s.getUniformBlockIndex(bt,V.name),rt.set(V,Et))}function qt(V,bt){let Et=c.get(bt).get(V);l.get(bt)!==Et&&(s.uniformBlockBinding(bt,Et,V.__bindingPointIndex),l.set(bt,Et))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,W={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,S=null,R=null,_=null,b=null,E=null,D=null,v=new Dt(0,0,0),T=0,L=!1,O=null,M=null,I=null,C=null,A=null,Pt.set(0,0,s.canvas.width,s.canvas.height),jt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:_t,bindFramebuffer:Vt,drawBuffers:St,useProgram:Zt,setBlending:ht,setMaterial:dt,setFlipSided:mt,setCullFace:xt,setLineWidth:Wt,setPolygonOffset:Gt,setScissorTest:$t,activeTexture:J,bindTexture:N,unbindTexture:Ct,compressedTexImage2D:Nt,compressedTexImage3D:P,texImage2D:et,texImage3D:nt,pixelStorei:Ot,getParameter:vt,updateUBOMapping:Bt,uniformBlockBinding:qt,texStorage2D:lt,texStorage3D:pt,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:Y,scissor:yt,viewport:Mt,reset:Qt}}function fy(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,u=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,x){return g?new OffscreenCanvas(P,x):Ar("canvas")}function p(P,x,k){let X=1,Y=Nt(P);if((Y.width>k||Y.height>k)&&(X=k/Math.max(Y.width,Y.height)),X<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let lt=Math.floor(X*Y.width),pt=Math.floor(X*Y.height);f===void 0&&(f=y(lt,pt));let et=x?y(lt,pt):f;return et.width=lt,et.height=pt,et.getContext("2d").drawImage(P,0,0,lt,pt),Jt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+lt+"x"+pt+")."),et}else return"data"in P&&Jt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),P;return P}function m(P){return P.generateMipmaps}function S(P){s.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(P,x,k,X,Y,lt=!1){if(P!==null){if(s[P]!==void 0)return s[P];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pt;X&&(pt=t.get("EXT_texture_norm16"),pt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=x;if(x===s.RED&&(k===s.FLOAT&&(et=s.R32F),k===s.HALF_FLOAT&&(et=s.R16F),k===s.UNSIGNED_BYTE&&(et=s.R8),k===s.UNSIGNED_SHORT&&pt&&(et=pt.R16_EXT),k===s.SHORT&&pt&&(et=pt.R16_SNORM_EXT)),x===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.R8UI),k===s.UNSIGNED_SHORT&&(et=s.R16UI),k===s.UNSIGNED_INT&&(et=s.R32UI),k===s.BYTE&&(et=s.R8I),k===s.SHORT&&(et=s.R16I),k===s.INT&&(et=s.R32I)),x===s.RG&&(k===s.FLOAT&&(et=s.RG32F),k===s.HALF_FLOAT&&(et=s.RG16F),k===s.UNSIGNED_BYTE&&(et=s.RG8),k===s.UNSIGNED_SHORT&&pt&&(et=pt.RG16_EXT),k===s.SHORT&&pt&&(et=pt.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.RG8UI),k===s.UNSIGNED_SHORT&&(et=s.RG16UI),k===s.UNSIGNED_INT&&(et=s.RG32UI),k===s.BYTE&&(et=s.RG8I),k===s.SHORT&&(et=s.RG16I),k===s.INT&&(et=s.RG32I)),x===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.RGB8UI),k===s.UNSIGNED_SHORT&&(et=s.RGB16UI),k===s.UNSIGNED_INT&&(et=s.RGB32UI),k===s.BYTE&&(et=s.RGB8I),k===s.SHORT&&(et=s.RGB16I),k===s.INT&&(et=s.RGB32I)),x===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),k===s.UNSIGNED_INT&&(et=s.RGBA32UI),k===s.BYTE&&(et=s.RGBA8I),k===s.SHORT&&(et=s.RGBA16I),k===s.INT&&(et=s.RGBA32I)),x===s.RGB&&(k===s.UNSIGNED_SHORT&&pt&&(et=pt.RGB16_EXT),k===s.SHORT&&pt&&(et=pt.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(et=s.R11F_G11F_B10F)),x===s.RGBA){let nt=lt?Tr:ue.getTransfer(Y);k===s.FLOAT&&(et=s.RGBA32F),k===s.HALF_FLOAT&&(et=s.RGBA16F),k===s.UNSIGNED_BYTE&&(et=nt===ve?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&pt&&(et=pt.RGBA16_EXT),k===s.SHORT&&pt&&(et=pt.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function b(P,x){let k;return P?x===null||x===zn||x===js?k=s.DEPTH24_STENCIL8:x===wn?k=s.DEPTH32F_STENCIL8:x===Ks&&(k=s.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zn||x===js?k=s.DEPTH_COMPONENT24:x===wn?k=s.DEPTH_COMPONENT32F:x===Ks&&(k=s.DEPTH_COMPONENT16),k}function E(P,x){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ke&&P.minFilter!==je?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function D(P){let x=P.target;x.removeEventListener("dispose",D),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function v(P){let x=P.target;x.removeEventListener("dispose",v),O(x)}function T(P){let x=n.get(P);if(x.__webglInit===void 0)return;let k=P.source,X=d.get(k);if(X){let Y=X[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&L(P),Object.keys(X).length===0&&d.delete(k)}n.remove(P)}function L(P){let x=n.get(P);s.deleteTexture(x.__webglTexture);let k=P.source,X=d.get(k);delete X[x.__cacheKey],a.memory.textures--}function O(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let Y=0;Y<x.__webglFramebuffer[X].length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[X][Y]);else s.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)s.deleteFramebuffer(x.__webglFramebuffer[X]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=P.textures;for(let X=0,Y=k.length;X<Y;X++){let lt=n.get(k[X]);lt.__webglTexture&&(s.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(P)}let M=0;function I(){M=0}function C(){return M}function A(P){M=P}function U(){let P=M;return P>=i.maxTextures&&Jt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),M+=1,P}function F(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function H(P,x){let k=n.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let X=P.image;if(X===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(k,P,x);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+x)}function z(P,x){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){_t(k,P,x);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+x)}function q(P,x){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){_t(k,P,x);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+x)}function W(P,x){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Vt(k,P,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+x)}let ft={[Is]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[po]:s.MIRRORED_REPEAT},ot={[Ke]:s.NEAREST,[mf]:s.NEAREST_MIPMAP_NEAREST,[na]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[Yo]:s.LINEAR_MIPMAP_NEAREST,[Ii]:s.LINEAR_MIPMAP_LINEAR},Pt={[yf]:s.NEVER,[Ef]:s.ALWAYS,[vf]:s.LESS,[Pl]:s.LEQUAL,[Mf]:s.EQUAL,[Ll]:s.GEQUAL,[Sf]:s.GREATER,[bf]:s.NOTEQUAL};function jt(P,x){if(x.type===wn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===je||x.magFilter===Yo||x.magFilter===na||x.magFilter===Ii||x.minFilter===je||x.minFilter===Yo||x.minFilter===na||x.minFilter===Ii)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ft[x.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ft[x.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ft[x.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ot[x.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ot[x.minFilter]),x.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ke||x.minFilter!==na&&x.minFilter!==Ii||x.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ee(P,x){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",D));let X=x.source,Y=d.get(X);Y===void 0&&(Y={},d.set(X,Y));let lt=F(x);if(lt!==P.__cacheKey){Y[lt]===void 0&&(Y[lt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Y[lt].usedTimes++;let pt=Y[P.__cacheKey];pt!==void 0&&(Y[P.__cacheKey].usedTimes--,pt.usedTimes===0&&L(x)),P.__cacheKey=lt,P.__webglTexture=Y[lt].texture}return k}function Q(P,x,k){return Math.floor(Math.floor(P/k)/x)}function tt(P,x,k,X){let lt=P.updateRanges;if(lt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,k,X,x.data);else{lt.sort((Ot,yt)=>Ot.start-yt.start);let pt=0;for(let Ot=1;Ot<lt.length;Ot++){let yt=lt[pt],Mt=lt[Ot],Bt=yt.start+yt.count,qt=Q(Mt.start,x.width,4),Qt=Q(yt.start,x.width,4);Mt.start<=Bt+1&&qt===Qt&&Q(Mt.start+Mt.count-1,x.width,4)===qt?yt.count=Math.max(yt.count,Mt.start+Mt.count-yt.start):(++pt,lt[pt]=Mt)}lt.length=pt+1;let et=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Ot=0,yt=lt.length;Ot<yt;Ot++){let Mt=lt[Ot],Bt=Math.floor(Mt.start/4),qt=Math.ceil(Mt.count/4),Qt=Bt%x.width,V=Math.floor(Bt/x.width),bt=qt,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(s.UNPACK_SKIP_ROWS,V),e.texSubImage2D(s.TEXTURE_2D,0,Qt,V,bt,rt,k,X,x.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,et),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function _t(P,x,k){let X=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=s.TEXTURE_3D);let Y=ee(P,x),lt=x.source;e.bindTexture(X,P.__webglTexture,s.TEXTURE0+k);let pt=n.get(lt);if(lt.version!==pt.__version||Y===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let rt=ue.getPrimaries(ue.workingColorSpace),Et=x.colorSpace===ui?null:ue.getPrimaries(x.colorSpace),Rt=x.colorSpace===ui||rt===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let nt=p(x.image,!1,i.maxTextureSize);nt=Ct(x,nt);let vt=r.convert(x.format,x.colorSpace),Ot=r.convert(x.type),yt=_(x.internalFormat,vt,Ot,x.normalized,x.colorSpace,x.isVideoTexture);jt(X,x);let Mt,Bt=x.mipmaps,qt=x.isVideoTexture!==!0,Qt=pt.__version===void 0||Y===!0,V=lt.dataReady,bt=E(x,nt);if(x.isDepthTexture)yt=b(x.format===Pi,x.type),Qt&&(qt?e.texStorage2D(s.TEXTURE_2D,1,yt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,yt,nt.width,nt.height,0,vt,Ot,null));else if(x.isDataTexture)if(Bt.length>0){qt&&Qt&&e.texStorage2D(s.TEXTURE_2D,bt,yt,Bt[0].width,Bt[0].height);for(let rt=0,Et=Bt.length;rt<Et;rt++)Mt=Bt[rt],qt?V&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,vt,Ot,Mt.data):e.texImage2D(s.TEXTURE_2D,rt,yt,Mt.width,Mt.height,0,vt,Ot,Mt.data);x.generateMipmaps=!1}else qt?(Qt&&e.texStorage2D(s.TEXTURE_2D,bt,yt,nt.width,nt.height),V&&tt(x,nt,vt,Ot)):e.texImage2D(s.TEXTURE_2D,0,yt,nt.width,nt.height,0,vt,Ot,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qt&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,yt,Bt[0].width,Bt[0].height,nt.depth);for(let rt=0,Et=Bt.length;rt<Et;rt++)if(Mt=Bt[rt],x.format!==Tn)if(vt!==null)if(qt){if(V)if(x.layerUpdates.size>0){let Rt=fh(Mt.width,Mt.height,x.format,x.type);for(let ut of x.layerUpdates){let Xt=Mt.data.subarray(ut*Rt/Mt.data.BYTES_PER_ELEMENT,(ut+1)*Rt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,ut,Mt.width,Mt.height,1,vt,Xt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,nt.depth,vt,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,yt,Mt.width,Mt.height,nt.depth,0,Mt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?V&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,nt.depth,vt,Ot,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,yt,Mt.width,Mt.height,nt.depth,0,vt,Ot,Mt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{qt&&Qt&&e.texStorage2D(s.TEXTURE_2D,bt,yt,Bt[0].width,Bt[0].height);for(let rt=0,Et=Bt.length;rt<Et;rt++)Mt=Bt[rt],x.format!==Tn?vt!==null?qt?V&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,yt,Mt.width,Mt.height,0,Mt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?V&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,vt,Ot,Mt.data):e.texImage2D(s.TEXTURE_2D,rt,yt,Mt.width,Mt.height,0,vt,Ot,Mt.data)}else if(x.isDataArrayTexture)if(qt){if(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,yt,nt.width,nt.height,nt.depth),V)if(x.layerUpdates.size>0){let rt=fh(nt.width,nt.height,x.format,x.type);for(let Et of x.layerUpdates){let Rt=nt.data.subarray(Et*rt/nt.data.BYTES_PER_ELEMENT,(Et+1)*rt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Et,nt.width,nt.height,1,vt,Ot,Rt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,Ot,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,nt.width,nt.height,nt.depth,0,vt,Ot,nt.data);else if(x.isData3DTexture)qt?(Qt&&e.texStorage3D(s.TEXTURE_3D,bt,yt,nt.width,nt.height,nt.depth),V&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,Ot,nt.data)):e.texImage3D(s.TEXTURE_3D,0,yt,nt.width,nt.height,nt.depth,0,vt,Ot,nt.data);else if(x.isFramebufferTexture){if(Qt)if(qt)e.texStorage2D(s.TEXTURE_2D,bt,yt,nt.width,nt.height);else{let rt=nt.width,Et=nt.height;for(let Rt=0;Rt<bt;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,yt,rt,Et,0,vt,Ot,null),rt>>=1,Et>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),nt.parentNode!==rt){rt.appendChild(nt),u.add(x),rt.onpaint=Et=>{let Rt=Et.changedElements;for(let ut of u)Rt.includes(ut.image)&&(ut.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{let Rt=s.RGBA,ut=s.RGBA,Xt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Rt,ut,Xt,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(qt&&Qt){let rt=Nt(Bt[0]);e.texStorage2D(s.TEXTURE_2D,bt,yt,rt.width,rt.height)}for(let rt=0,Et=Bt.length;rt<Et;rt++)Mt=Bt[rt],qt?V&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,vt,Ot,Mt):e.texImage2D(s.TEXTURE_2D,rt,yt,vt,Ot,Mt);x.generateMipmaps=!1}else if(qt){if(Qt){let rt=Nt(nt);e.texStorage2D(s.TEXTURE_2D,bt,yt,rt.width,rt.height)}V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Ot,nt)}else e.texImage2D(s.TEXTURE_2D,0,yt,vt,Ot,nt);m(x)&&S(X),pt.__version=lt.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Vt(P,x,k){if(x.image.length!==6)return;let X=ee(P,x),Y=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+k);let lt=n.get(Y);if(Y.version!==lt.__version||X===!0){e.activeTexture(s.TEXTURE0+k);let pt=ue.getPrimaries(ue.workingColorSpace),et=x.colorSpace===ui?null:ue.getPrimaries(x.colorSpace),nt=x.colorSpace===ui||pt===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let vt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ot=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let ut=0;ut<6;ut++)!vt&&!Ot?yt[ut]=p(x.image[ut],!0,i.maxCubemapSize):yt[ut]=Ot?x.image[ut].image:x.image[ut],yt[ut]=Ct(x,yt[ut]);let Mt=yt[0],Bt=r.convert(x.format,x.colorSpace),qt=r.convert(x.type),Qt=_(x.internalFormat,Bt,qt,x.normalized,x.colorSpace),V=x.isVideoTexture!==!0,bt=lt.__version===void 0||X===!0,rt=Y.dataReady,Et=E(x,Mt);jt(s.TEXTURE_CUBE_MAP,x);let Rt;if(vt){V&&bt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,Qt,Mt.width,Mt.height);for(let ut=0;ut<6;ut++){Rt=yt[ut].mipmaps;for(let Xt=0;Xt<Rt.length;Xt++){let zt=Rt[Xt];x.format!==Tn?Bt!==null?V?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt,0,0,zt.width,zt.height,Bt,zt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt,Qt,zt.width,zt.height,0,zt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt,0,0,zt.width,zt.height,Bt,qt,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt,Qt,zt.width,zt.height,0,Bt,qt,zt.data)}}}else{if(Rt=x.mipmaps,V&&bt){Rt.length>0&&Et++;let ut=Nt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,Qt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Ot){V?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,yt[ut].width,yt[ut].height,Bt,qt,yt[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Qt,yt[ut].width,yt[ut].height,0,Bt,qt,yt[ut].data);for(let Xt=0;Xt<Rt.length;Xt++){let Ie=Rt[Xt].image[ut].image;V?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt+1,0,0,Ie.width,Ie.height,Bt,qt,Ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt+1,Qt,Ie.width,Ie.height,0,Bt,qt,Ie.data)}}else{V?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Bt,qt,yt[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Qt,Bt,qt,yt[ut]);for(let Xt=0;Xt<Rt.length;Xt++){let zt=Rt[Xt];V?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt+1,0,0,Bt,qt,zt.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Xt+1,Qt,Bt,qt,zt.image[ut])}}}m(x)&&S(s.TEXTURE_CUBE_MAP),lt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function St(P,x,k,X,Y,lt){let pt=r.convert(k.format,k.colorSpace),et=r.convert(k.type),nt=_(k.internalFormat,pt,et,k.normalized,k.colorSpace),vt=n.get(x),Ot=n.get(k);if(Ot.__renderTarget=x,!vt.__hasExternalTextures){let yt=Math.max(1,x.width>>lt),Mt=Math.max(1,x.height>>lt);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,lt,nt,yt,Mt,x.depth,0,pt,et,null):e.texImage2D(Y,lt,nt,yt,Mt,0,pt,et,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),J(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Y,Ot.__webglTexture,0,$t(x)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Y,Ot.__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(P,x,k){if(s.bindRenderbuffer(s.RENDERBUFFER,P),x.depthBuffer){let X=x.depthTexture,Y=X&&X.isDepthTexture?X.type:null,lt=b(x.stencilBuffer,Y),pt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;J(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(x),lt,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(x),lt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,lt,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,P)}else{let X=x.textures;for(let Y=0;Y<X.length;Y++){let lt=X[Y],pt=r.convert(lt.format,lt.colorSpace),et=r.convert(lt.type),nt=_(lt.internalFormat,pt,et,lt.normalized,lt.colorSpace);J(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(x),nt,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(x),nt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,nt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(P,x,k){let X=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",D)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),jt(s.TEXTURE_CUBE_MAP,x.depthTexture);let vt=r.convert(x.depthTexture.format),Ot=r.convert(x.depthTexture.type),yt;x.depthTexture.format===$n?yt=s.DEPTH_COMPONENT24:x.depthTexture.format===Pi&&(yt=s.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,yt,x.width,x.height,0,vt,Ot,null)}}else H(x.depthTexture,0);let lt=Y.__webglTexture,pt=$t(x),et=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,nt=x.depthTexture.format===Pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===$n)J(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,et,lt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,et,lt,0);else if(x.depthTexture.format===Pi)J(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,et,lt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,nt,et,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(P){let x=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",Y)};X.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=X}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)ge(x.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?ge(x.__webglFramebuffer[0],P,0):ge(x.__webglFramebuffer,P,0)}else if(k){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=s.createRenderbuffer(),Zt(x.__webglDepthbuffer[X],P,!1);else{let Y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,lt)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Zt(x.__webglDepthbuffer,P,!1);else{let Y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,lt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(P,x,k){let X=n.get(P);x!==void 0&&St(X.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&st(P)}function dt(P){let x=P.texture,k=n.get(P),X=n.get(x);P.addEventListener("dispose",v);let Y=P.textures,lt=P.isWebGLCubeRenderTarget===!0,pt=Y.length>1;if(pt||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=x.version,a.memory.textures++),lt){k.__webglFramebuffer=[];for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[et]=[];for(let nt=0;nt<x.mipmaps.length;nt++)k.__webglFramebuffer[et][nt]=s.createFramebuffer()}else k.__webglFramebuffer[et]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let et=0;et<x.mipmaps.length;et++)k.__webglFramebuffer[et]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(pt)for(let et=0,nt=Y.length;et<nt;et++){let vt=n.get(Y[et]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&J(P)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let et=0;et<Y.length;et++){let nt=Y[et];k.__webglColorRenderbuffer[et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[et]);let vt=r.convert(nt.format,nt.colorSpace),Ot=r.convert(nt.type),yt=_(nt.internalFormat,vt,Ot,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),Mt=$t(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,yt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,k.__webglColorRenderbuffer[et])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),jt(s.TEXTURE_CUBE_MAP,x);for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)St(k.__webglFramebuffer[et][nt],P,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,nt);else St(k.__webglFramebuffer[et],P,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(x)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let et=0,nt=Y.length;et<nt;et++){let vt=Y[et],Ot=n.get(vt),yt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ot.__webglTexture),jt(yt,vt),St(k.__webglFramebuffer,P,vt,s.COLOR_ATTACHMENT0+et,yt,0),m(vt)&&S(yt)}e.unbindTexture()}else{let et=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(et=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,X.__webglTexture),jt(et,x),x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)St(k.__webglFramebuffer[nt],P,x,s.COLOR_ATTACHMENT0,et,nt);else St(k.__webglFramebuffer,P,x,s.COLOR_ATTACHMENT0,et,0);m(x)&&S(et),e.unbindTexture()}P.depthBuffer&&st(P)}function mt(P){let x=P.textures;for(let k=0,X=x.length;k<X;k++){let Y=x[k];if(m(Y)){let lt=R(P),pt=n.get(Y).__webglTexture;e.bindTexture(lt,pt),S(lt),e.unbindTexture()}}}let xt=[],Wt=[];function Gt(P){if(P.samples>0){if(J(P)===!1){let x=P.textures,k=P.width,X=P.height,Y=s.COLOR_BUFFER_BIT,lt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=n.get(P),et=x.length>1;if(et)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[vt]);let Ot=n.get(x[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,k,X,0,0,k,X,Y,s.NEAREST),l===!0&&(xt.length=0,Wt.length=0,xt.push(s.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(xt.push(lt),Wt.push(lt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),et)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,pt.__webglColorRenderbuffer[vt]);let Ot=n.get(x[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let x=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function $t(P){return Math.min(i.maxSamples,P.samples)}function J(P){let x=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(P){let x=a.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function Ct(P,x){let k=P.colorSpace,X=P.format,Y=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==wr&&k!==ui&&(ue.getTransfer(k)===ve?(X!==Tn||Y!==mn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",k)),x}function Nt(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=A,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=ht,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=St,this.useMultisampledRTT=J,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function dy(s,t){function e(n,i=ui){let r,a=ue.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===$o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===th)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===eh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===jc)return s.BYTE;if(n===Qc)return s.SHORT;if(n===Ks)return s.UNSIGNED_SHORT;if(n===Zo)return s.INT;if(n===zn)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===Hn)return s.HALF_FLOAT;if(n===nh)return s.ALPHA;if(n===ih)return s.RGB;if(n===Tn)return s.RGBA;if(n===$n)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===Ko)return s.RED;if(n===jo)return s.RED_INTEGER;if(n===Li)return s.RG;if(n===Qo)return s.RG_INTEGER;if(n===tl)return s.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===aa)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===al||n===ol||n===ll||n===cl||n===oa||n===hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===al)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ll)return r.COMPRESSED_R11_EAC;if(n===cl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oa)return r.COMPRESSED_RG11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ul)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===Tl||n===Al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wl)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===Cl||n===la||n===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,my=`
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

}`,Ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:py,fragmentShader:my,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends Jn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,y=typeof XRWebGLBinding!="undefined",p=new Ph,m={},S=e.getContextAttributes(),R=null,_=null,b=[],E=[],D=new gt,v=null,T=null,L=new qe;L.viewport=new Le;let O=new qe;O.viewport=new Le;let M=[L,O],I=new ko,C=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let tt=b[Q];return tt===void 0&&(tt=new Us,b[Q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Q){let tt=b[Q];return tt===void 0&&(tt=new Us,b[Q]=tt),tt.getGripSpace()},this.getHand=function(Q){let tt=b[Q];return tt===void 0&&(tt=new Us,b[Q]=tt),tt.getHandSpace()};function U(Q){let tt=E.indexOf(Q.inputSource);if(tt===-1)return;let _t=b[tt];_t!==void 0&&(_t.update(Q.inputSource,Q.frame,c||a),_t.dispatchEvent({type:Q.type,data:Q.inputSource}))}function F(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",H);for(let Q=0;Q<b.length;Q++){let tt=E[Q];tt!==null&&(E[Q]=null,b[Q].disconnect(tt))}C=null,A=null,p.reset();for(let Q in m)delete m[Q];if(t.setRenderTarget(R),d=null,f=null,u=null,i=null,_=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(D.width,D.height,!1),T!==null){let Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",F),i.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Vt=null,St=null;S.depth&&(St=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=S.stencil?Pi:$n,Vt=S.stencil?js:zn);let Zt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Zt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new pn(f.textureWidth,f.textureHeight,{format:Tn,type:mn,depthTexture:new bi(f.textureWidth,f.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new pn(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(Q){for(let tt=0;tt<Q.removed.length;tt++){let _t=Q.removed[tt],Vt=E.indexOf(_t);Vt>=0&&(E[Vt]=null,b[Vt].disconnect(_t))}for(let tt=0;tt<Q.added.length;tt++){let _t=Q.added[tt],Vt=E.indexOf(_t);if(Vt===-1){for(let Zt=0;Zt<b.length;Zt++)if(Zt>=E.length){E.push(_t),Vt=Zt;break}else if(E[Zt]===null){E[Zt]=_t,Vt=Zt;break}if(Vt===-1)break}let St=b[Vt];St&&St.connect(_t)}}let z=new B,q=new B;function W(Q,tt,_t){z.setFromMatrixPosition(tt.matrixWorld),q.setFromMatrixPosition(_t.matrixWorld);let Vt=z.distanceTo(q),St=tt.projectionMatrix.elements,Zt=_t.projectionMatrix.elements,ge=St[14]/(St[10]-1),st=St[14]/(St[10]+1),ht=(St[9]+1)/St[5],dt=(St[9]-1)/St[5],mt=(St[8]-1)/St[0],xt=(Zt[8]+1)/Zt[0],Wt=ge*mt,Gt=ge*xt,$t=Vt/(-mt+xt),J=$t*-mt;if(tt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(J),Q.translateZ($t),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),St[10]===-1)Q.projectionMatrix.copy(tt.projectionMatrix),Q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let N=ge+$t,Ct=st+$t,Nt=Wt-J,P=Gt+(Vt-J),x=ht*st/Ct*N,k=dt*st/Ct*N;Q.projectionMatrix.makePerspective(Nt,P,x,k,N,Ct),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ft(Q,tt){tt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(tt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let tt=Q.near,_t=Q.far;p.texture!==null&&(p.depthNear>0&&(tt=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),I.near=O.near=L.near=tt,I.far=O.far=L.far=_t,(C!==I.near||A!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,A=I.far),I.layers.mask=Q.layers.mask|6,L.layers.mask=I.layers.mask&-5,O.layers.mask=I.layers.mask&-3;let Vt=Q.parent,St=I.cameras;ft(I,Vt);for(let Zt=0;Zt<St.length;Zt++)ft(St[Zt],Vt);St.length===2?W(I,L,O):I.projectionMatrix.copy(L.projectionMatrix),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),ot(Q,I,Vt)};function ot(Q,tt,_t){_t===null?Q.matrix.copy(tt.matrixWorld):(Q.matrix.copy(_t.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(tt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(tt.projectionMatrix),Q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ds*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(Q){return m[Q]};let Pt=null;function jt(Q,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Vt=!1;_t.length!==I.cameras.length&&(I.cameras.length=0,Vt=!0);for(let st=0;st<_t.length;st++){let ht=_t[st],dt=null;if(d!==null)dt=d.getViewport(ht);else{let xt=u.getViewSubImage(f,ht);dt=xt.viewport,st===0&&(t.setRenderTargetTextures(_,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(_))}let mt=M[st];mt===void 0&&(mt=new qe,mt.layers.enable(st),mt.viewport=new Le,M[st]=mt),mt.matrix.fromArray(ht.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ht.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(dt.x,dt.y,dt.width,dt.height),st===0&&(I.matrix.copy(mt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Vt===!0&&I.cameras.push(mt)}let St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let st=u.getDepthInformation(_t[0]);st&&st.isValid&&st.texture&&p.init(st,i.renderState)}if(St&&St.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let st=0;st<_t.length;st++){let ht=_t[st].camera;if(ht){let dt=m[ht];dt||(dt=new zr,m[ht]=dt);let mt=u.getCameraImage(ht);dt.sourceTexture=mt}}}}for(let _t=0;_t<b.length;_t++){let Vt=E[_t],St=b[_t];Vt!==null&&St!==void 0&&St.update(Vt,tt,c||a)}Pt&&Pt(Q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ee=new rd;ee.setAnimationLoop(jt),this.setAnimationLoop=function(Q){Pt=Q},this.dispose=function(){}}},gy=new xe,ud=new te;ud.set(-1,0,0,0,1,0,0,0,1);function xy(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ch(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,R,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,R):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ye&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ye&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=t.get(m),R=S.envMap,_=S.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(_)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ud),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=R*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ye&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _y(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let E=b.program;n.uniformBlockBinding(_,E)}function c(_,b){let E=i[_.id];E===void 0&&(p(_),E=h(_),i[_.id]=E,_.addEventListener("dispose",S));let D=b.program;n.updateUBOMapping(_,D);let v=t.render.frame;r[_.id]!==v&&(f(_),r[_.id]=v)}function h(_){let b=u();_.__bindingPointIndex=b;let E=s.createBuffer(),D=_.__size,v=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,D,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let b=i[_.id],E=_.uniforms,D=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let v=0,T=E.length;v<T;v++){let L=E[v];if(Array.isArray(L))for(let O=0,M=L.length;O<M;O++)d(L[O],v,O,D);else d(L,v,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,b,E,D){if(y(_,b,E,D)===!0){let v=_.__offset,T=_.value;if(Array.isArray(T)){let L=0;for(let O=0;O<T.length;O++){let M=T[O],I=m(M);g(M,_.__data,L),typeof M!="number"&&typeof M!="boolean"&&!M.isMatrix3&&!ArrayBuffer.isView(M)&&(L+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,_.__data)}}function g(_,b,E){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,E)}function y(_,b,E,D){let v=_.value,T=b+"_"+E;if(D[T]===void 0)return typeof v=="number"||typeof v=="boolean"?D[T]=v:ArrayBuffer.isView(v)?D[T]=v.slice():D[T]=v.clone(),!0;{let L=D[T];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return D[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function p(_){let b=_.uniforms,E=0,D=16;for(let T=0,L=b.length;T<L;T++){let O=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,I=O.length;M<I;M++){let C=O[M],A=Array.isArray(C.value)?C.value:[C.value];for(let U=0,F=A.length;U<F;U++){let H=A[U],z=m(H),q=E%D,W=q%z.boundary,ft=q+W;E+=W,ft!==0&&D-ft<z.storage&&(E+=D-ft),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=z.storage}}}let v=E%D;return v>0&&(E+=D-v),_.__size=E,_.__cache={},this}function m(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",_),b}function S(_){let b=_.target;b.removeEventListener("dispose",S);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function R(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:R}}var yy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qn=null;function vy(){return Qn===null&&(Qn=new Fr(yy,16,16,Li,Hn),Qn.name="DFG_LUT",Qn.minFilter=je,Qn.magFilter=je,Qn.wrapS=Yn,Qn.wrapT=Yn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}var da=class{constructor(t={}){let{canvas:e=wf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=d,p=new Set([tl,Qo,jo]),m=new Set([mn,zn,Ks,js,$o,Jo]),S=new Uint32Array(4),R=new Int32Array(4),_=new B,b=null,E=null,D=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,O=!1,M=null,I=null,C=null,A=null;this._outputColorSpace=Te;let U=0,F=0,H=null,z=-1,q=null,W=new Le,ft=new Le,ot=null,Pt=new Dt(0),jt=0,ee=e.width,Q=e.height,tt=1,_t=null,Vt=null,St=new Le(0,0,ee,Q),Zt=new Le(0,0,ee,Q),ge=!1,st=new Hs,ht=!1,dt=!1,mt=new xe,xt=new B,Wt=new Le,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function J(){return H===null?tt:1}let N=n;function Ct(w,G){return e.getContext(w,G)}let Nt,P,x,k,X,Y,lt,pt,et,nt,vt,Ot,yt,Mt,Bt,qt,Qt,V,bt,rt,Et,Rt,ut;try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",In,!1),N===null){let G="webgl2";if(N=Ct(G,w),N===null)throw Ct(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(w){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",In,!1),Kt("WebGLRenderer: "+w.message),w}function Xt(){Nt=new Ax(N),Nt.init(),Et=new dy(N,Nt),P=new xx(N,Nt,t,Et),x=new uy(N,Nt),P.reversedDepthBuffer&&f&&x.buffers.depth.setReversed(!0),I=N.createFramebuffer(),C=N.createFramebuffer(),A=N.createFramebuffer(),k=new Ix(N),X=new K_,Y=new fy(N,Nt,x,X,P,Et,k),lt=new Tx(L),pt=new Lm(N),Rt=new mx(N,pt),et=new Rx(N,pt,k,Rt),nt=new Lx(N,et,pt,Rt,k),V=new Px(N,P,Y),Bt=new _x(X),vt=new J_(L,lt,Nt,P,Rt,Bt),Ot=new xy(L,X),yt=new Q_,Mt=new ry(Nt),Qt=new px(L,lt,x,nt,g,l),qt=new hy(L,nt,P),ut=new _y(N,k,P,x),bt=new gx(N,Nt,k),rt=new Cx(N,Nt,k),k.programs=vt.programs,L.capabilities=P,L.extensions=Nt,L.properties=X,L.renderLists=yt,L.shadowMap=qt,L.state=x,L.info=k}y!==mn&&(T=new Nx(y,e.width,e.height,o,i,r));let zt=new Lh(L,N);this.xr=zt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=Nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(w){w!==void 0&&(tt=w,this.setSize(ee,Q,!1))},this.getSize=function(w){return w.set(ee,Q)},this.setSize=function(w,G,j=!0){if(zt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,Q=G,e.width=Math.floor(w*tt),e.height=Math.floor(G*tt),j===!0&&(e.style.width=w+"px",e.style.height=G+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(ee*tt,Q*tt).floor()},this.setDrawingBufferSize=function(w,G,j){ee=w,Q=G,tt=j,e.width=Math.floor(w*j),e.height=Math.floor(G*j),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(y===mn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(W)},this.getViewport=function(w){return w.copy(St)},this.setViewport=function(w,G,j,Z){w.isVector4?St.set(w.x,w.y,w.z,w.w):St.set(w,G,j,Z),x.viewport(W.copy(St).multiplyScalar(tt).round())},this.getScissor=function(w){return w.copy(Zt)},this.setScissor=function(w,G,j,Z){w.isVector4?Zt.set(w.x,w.y,w.z,w.w):Zt.set(w,G,j,Z),x.scissor(ft.copy(Zt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(w){x.setScissorTest(ge=w)},this.setOpaqueSort=function(w){_t=w},this.setTransparentSort=function(w){Vt=w},this.getClearColor=function(w){return w.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,j=!0){let Z=0;if(w){let $=!1;if(H!==null){let At=H.texture.format;$=p.has(At)}if($){let At=H.texture.type,Lt=m.has(At),Tt=Qt.getClearColor(),Ut=Qt.getClearAlpha(),kt=Tt.r,re=Tt.g,ce=Tt.b;Lt?(S[0]=kt,S[1]=re,S[2]=ce,S[3]=Ut,N.clearBufferuiv(N.COLOR,0,S)):(R[0]=kt,R[1]=re,R[2]=ce,R[3]=Ut,N.clearBufferiv(N.COLOR,0,R))}else Z|=N.COLOR_BUFFER_BIT}G&&(Z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),M=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",In,!1),Qt.dispose(),yt.dispose(),Mt.dispose(),X.dispose(),lt.dispose(),nt.dispose(),Rt.dispose(),ut.dispose(),vt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",iu),zt.removeEventListener("sessionend",su),Bi.stop()};function Ie(w){w.preventDefault(),Rr("WebGLRenderer: Context Lost."),O=!0}function _e(){Rr("WebGLRenderer: Context Restored."),O=!1;let w=k.autoReset,G=qt.enabled,j=qt.autoUpdate,Z=qt.needsUpdate,$=qt.type;Xt(),k.autoReset=w,qt.enabled=G,qt.autoUpdate=j,qt.needsUpdate=Z,qt.type=$}function In(w){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Wn(w){let G=w.target;G.removeEventListener("dispose",Wn),jd(G)}function jd(w){Qd(w),X.remove(w)}function Qd(w){let G=X.get(w).programs;G!==void 0&&(G.forEach(function(j){vt.releaseProgram(j)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,j,Z,$,At){G===null&&(G=Gt);let Lt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Tt=np(w,G,j,Z,$);x.setMaterial(Z,Lt);let Ut=j.index,kt=1;if(Z.wireframe===!0){if(Ut=et.getWireframeAttribute(j),Ut===void 0)return;kt=2}let re=j.drawRange,ce=j.attributes.position,Ft=re.start*kt,ye=(re.start+re.count)*kt;At!==null&&(Ft=Math.max(Ft,At.start*kt),ye=Math.min(ye,(At.start+At.count)*kt)),Ut!==null?(Ft=Math.max(Ft,0),ye=Math.min(ye,Ut.count)):ce!=null&&(Ft=Math.max(Ft,0),ye=Math.min(ye,ce.count));let He=ye-Ft;if(He<0||He===1/0)return;Rt.setup($,Z,Tt,j,Ut);let Ne,we=bt;if(Ut!==null&&(Ne=pt.get(Ut),we=rt,we.setIndex(Ne)),$.isMesh)Z.wireframe===!0?(x.setLineWidth(Z.wireframeLinewidth*J()),we.setMode(N.LINES)):we.setMode(N.TRIANGLES);else if($.isLine){let en=Z.linewidth;en===void 0&&(en=1),x.setLineWidth(en*J()),$.isLineSegments?we.setMode(N.LINES):$.isLineLoop?we.setMode(N.LINE_LOOP):we.setMode(N.LINE_STRIP)}else $.isPoints?we.setMode(N.POINTS):$.isSprite&&we.setMode(N.TRIANGLES);if($.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))we.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let en=$._multiDrawStarts,It=$._multiDrawCounts,ln=$._multiDrawCount,me=Ut?pt.get(Ut).bytesPerElement:1,bn=X.get(Z).currentProgram.getUniforms();for(let Xn=0;Xn<ln;Xn++)bn.setValue(N,"_gl_DrawID",Xn),we.render(en[Xn]/me,It[Xn])}else if($.isInstancedMesh)we.renderInstances(Ft,He,$.count);else if(j.isInstancedBufferGeometry){let en=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,It=Math.min(j.instanceCount,en);we.renderInstances(Ft,He,It)}else we.render(Ft,He)};function nu(w,G,j,Z){M!==null&&w.isNodeMaterial&&M.setObject(Z,w),ht===!0&&Bt.setState(w,j,!1),w.transparent===!0&&w.side===tn&&w.forceSinglePass===!1?(w.side=Ye,w.needsUpdate=!0,Ia(w,G,Z),w.side=Ai,w.needsUpdate=!0,Ia(w,G,Z),w.side=tn):Ia(w,G,Z)}this.compile=function(w,G,j=null){j===null&&(j=w),M!==null&&M.renderStart(w,G,j),E=Mt.get(j),E.init(G),v.push(E),j.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),w!==j&&w.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),M!==null&&M.updateLights(E.state.lightsArray),dt=this.localClippingEnabled,ht=Bt.init(this.clippingPlanes,dt),ht===!0&&Bt.setGlobalState(this.clippingPlanes,G),M!==null&&qt.render(E.state.shadowsArray,j,G);let Z=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let At=$.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){let Tt=At[Lt];nu(Tt,j,G,$),Z.add(Tt)}else nu(At,j,G,$),Z.add(At)}),E=v.pop(),M!==null&&M.renderEnd(),Z},this.compileAsync=function(w,G,j=null){let Z=this.compile(w,G,j);return new Promise($=>{function At(){if(Z.forEach(function(Lt){let Ut=X.get(Lt).currentProgram;(Ut===void 0||Ut.isReady())&&Z.delete(Lt)}),Z.size===0){$(w);return}setTimeout(At,10)}Nt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let tc=null;function tp(w){tc&&tc(w)}function iu(){Bi.stop()}function su(){Bi.start()}let Bi=new rd;Bi.setAnimationLoop(tp),typeof self!="undefined"&&Bi.setContext(self),this.setAnimationLoop=function(w){tc=w,zt.setAnimationLoop(w),w===null?Bi.stop():Bi.start()},zt.addEventListener("sessionstart",iu),zt.addEventListener("sessionend",su),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;M!==null&&M.renderStart(w,G);let j=zt.enabled===!0&&zt.isPresenting===!0,Z=T!==null&&(H===null||j)&&T.begin(L,H);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(G),G=zt.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,G,H),E=Mt.get(w,v.length),E.init(G),E.state.textureUnits=Y.getTextureUnits(),v.push(E),mt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),st.setFromProjectionMatrix(mt,Fn,G.reversedDepth),dt=this.localClippingEnabled,ht=Bt.init(this.clippingPlanes,dt),b=yt.get(w,D.length),b.init(),D.push(b),zt.enabled===!0&&zt.isPresenting===!0){let Lt=L.xr.getDepthSensingMesh();Lt!==null&&ec(Lt,G,-1/0,L.sortObjects)}ec(w,G,0,L.sortObjects),b.finish(),M!==null&&M.updateLights(E.state.lightsArray),L.sortObjects===!0&&b.sort(_t,Vt),$t=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,$t&&Qt.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Bt.beginShadows();let $=E.state.shadowsArray;if(qt.render($,w,G),ht===!0&&Bt.endShadows(),(Z&&T.hasRenderPass())===!1){let Lt=b.opaque,Tt=b.transmissive;if(E.setupLights(),G.isArrayCamera){let Ut=G.cameras;if(Tt.length>0)for(let kt=0,re=Ut.length;kt<re;kt++){let ce=Ut[kt];au(Lt,Tt,w,ce)}$t&&Qt.render(w);for(let kt=0,re=Ut.length;kt<re;kt++){let ce=Ut[kt];ru(b,w,ce,ce.viewport)}}else Tt.length>0&&au(Lt,Tt,w,G),$t&&Qt.render(w),ru(b,w,G)}H!==null&&F===0&&(Y.updateMultisampleRenderTarget(H),Y.updateRenderTargetMipmap(H)),Z&&T.end(L),w.isScene===!0&&w.onAfterRender(L,w,G),Rt.resetDefaultState(),z=-1,q=null,v.pop(),v.length>0?(E=v[v.length-1],Y.setTextureUnits(E.state.textureUnits),ht===!0&&Bt.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,D.pop(),D.length>0?b=D[D.length-1]:b=null,M!==null&&M.renderEnd()};function ec(w,G,j,Z){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(st)){Z&&Wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(mt);let Lt=nt.update(w),Tt=w.material;Tt.visible&&b.push(w,Lt,Tt,j,Wt.z,null,G)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(st))){let Lt=nt.update(w),Tt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Wt.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Wt.copy(Lt.boundingSphere.center)),Wt.applyMatrix4(w.matrixWorld).applyMatrix4(mt)),Array.isArray(Tt)){let Ut=Lt.groups;for(let kt=0,re=Ut.length;kt<re;kt++){let ce=Ut[kt],Ft=Tt[ce.materialIndex];Ft&&Ft.visible&&b.push(w,Lt,Ft,j,Wt.z,ce,G)}}else Tt.visible&&b.push(w,Lt,Tt,j,Wt.z,null,G)}}let At=w.children;for(let Lt=0,Tt=At.length;Lt<Tt;Lt++)ec(At[Lt],G,j,Z)}function ru(w,G,j,Z){let{opaque:$,transmissive:At,transparent:Lt}=w;E.setupLightsView(j),ht===!0&&Bt.setGlobalState(L.clippingPlanes,j),Z&&x.viewport(W.copy(Z)),$.length>0&&Ca($,G,j),At.length>0&&Ca(At,G,j),Lt.length>0&&Ca(Lt,G,j),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function au(w,G,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){let Ft=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new pn(1,1,{generateMipmaps:!0,type:Ft?Hn:mn,minFilter:Ii,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let At=E.state.transmissionRenderTarget[Z.id],Lt=Z.viewport||W;At.setSize(Lt.z*L.transmissionResolutionScale,Lt.w*L.transmissionResolutionScale);let Tt=L.getRenderTarget(),Ut=L.getActiveCubeFace(),kt=L.getActiveMipmapLevel();L.setRenderTarget(At),L.getClearColor(Pt),jt=L.getClearAlpha(),jt<1&&L.setClearColor(16777215,.5),L.clear(),$t&&Qt.render(j);let re=L.toneMapping;L.toneMapping=Bn;let ce=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),ht===!0&&Bt.setGlobalState(L.clippingPlanes,Z),Ca(w,j,Z),Y.updateMultisampleRenderTarget(At),Y.updateRenderTargetMipmap(At),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ye=0,He=G.length;ye<He;ye++){let Ne=G[ye],{object:we,geometry:en,material:It,group:ln}=Ne;if(It.side===tn&&we.layers.test(Z.layers)){let me=It.side;It.side=Ye,It.needsUpdate=!0,ou(we,j,Z,en,It,ln),It.side=me,It.needsUpdate=!0,Ft=!0}}Ft===!0&&(Y.updateMultisampleRenderTarget(At),Y.updateRenderTargetMipmap(At))}L.setRenderTarget(Tt,Ut,kt),L.setClearColor(Pt,jt),ce!==void 0&&(Z.viewport=ce),L.toneMapping=re}function Ca(w,G,j){let Z=G.isScene===!0?G.overrideMaterial:null;for(let $=0,At=w.length;$<At;$++){let Lt=w[$],{object:Tt,geometry:Ut,group:kt}=Lt,re=Lt.material;re.allowOverride===!0&&Z!==null&&(re=Z),Tt.layers.test(j.layers)&&ou(Tt,G,j,Ut,re,kt)}}function ou(w,G,j,Z,$,At){M!==null&&$.isNodeMaterial&&M.setObject(w,$),w.onBeforeRender(L,G,j,Z,$,At),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(L,G,j,Z,w,At),$.transparent===!0&&$.side===tn&&$.forceSinglePass===!1?($.side=Ye,$.needsUpdate=!0,L.renderBufferDirect(j,G,Z,$,w,At),$.side=Ai,$.needsUpdate=!0,L.renderBufferDirect(j,G,Z,$,w,At),$.side=tn):L.renderBufferDirect(j,G,Z,$,w,At),w.onAfterRender(L,G,j,Z,$,At)}function Ia(w,G,j){G.isScene!==!0&&(G=Gt);let Z=X.get(w),$=E.state.lights,At=E.state.shadowsArray,Lt=$.state.version,Tt=vt.getParameters(w,$.state,At,G,j,E.state.lightProbeGridArray),Ut=vt.getProgramCacheKey(Tt),kt=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;let re=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=lt.get(w.envMap||Z.environment,re),Z.envMapRotation=Z.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,kt===void 0&&(w.addEventListener("dispose",Wn),kt=new Map,Z.programs=kt);let ce=kt.get(Ut);if(ce!==void 0){if(Z.currentProgram===ce&&Z.lightsStateVersion===Lt)return cu(w,Tt),ce}else Tt.uniforms=vt.getUniforms(w),M!==null&&w.isNodeMaterial&&M.build(w,j,Tt),w.onBeforeCompile(Tt,L),ce=vt.acquireProgram(Tt,Ut),kt.set(Ut,ce),Z.uniforms=Tt.uniforms;let Ft=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=Bt.uniform),cu(w,Tt),Z.needsLights=sp(w),Z.lightsStateVersion=Lt,Z.needsLights&&(Ft.ambientLightColor.value=$.state.ambient,Ft.lightProbe.value=$.state.probe,Ft.sunLights.value=$.state.sun,Ft.sunLightShadows.value=$.state.sunShadow,Ft.directionalLights.value=$.state.directional,Ft.directionalLightShadows.value=$.state.directionalShadow,Ft.spotLights.value=$.state.spot,Ft.spotLightShadows.value=$.state.spotShadow,Ft.rectAreaLights.value=$.state.rectArea,Ft.ltc_1.value=$.state.rectAreaLTC1,Ft.ltc_2.value=$.state.rectAreaLTC2,Ft.pointLights.value=$.state.point,Ft.pointLightShadows.value=$.state.pointShadow,Ft.hemisphereLights.value=$.state.hemi,Ft.sunShadowMatrix.value=$.state.sunShadowMatrix,Ft.sunShadowCascade.value=$.state.sunShadowCascade,Ft.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ft.spotLightMatrix.value=$.state.spotLightMatrix,Ft.spotLightMap.value=$.state.spotLightMap,Ft.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=E.state.lightProbeGridArray.length>0,Z.currentProgram=ce,Z.uniformsList=null,ce}function lu(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=nr.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function cu(w,G){let j=X.get(w);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function ep(w,G){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(G.matrixWorld);for(let j=0,Z=w.length;j<Z;j++){let $=w[j];if($.texture!==null&&$.boundingBox.containsPoint(_))return $}return null}function np(w,G,j,Z,$){G.isScene!==!0&&(G=Gt),Y.resetTextureUnits();let At=G.fog,Lt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,Tt=H===null?L.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ue.workingColorSpace,Ut=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,kt=lt.get(Z.envMap||Lt,Ut),re=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ce=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ft=!!j.morphAttributes.position,ye=!!j.morphAttributes.normal,He=!!j.morphAttributes.color,Ne=Bn;Z.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ne=L.toneMapping);let we=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,en=we!==void 0?we.length:0,It=X.get(Z),ln=E.state.lights;if(ht===!0&&(dt===!0||w!==q)){let Pe=w===q&&Z.id===z;Bt.setState(Z,w,Pe)}let me=!1;Z.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ln.state.version||It.outputColorSpace!==Tt||$.isBatchedMesh&&It.batching===!1||!$.isBatchedMesh&&It.batching===!0||$.isBatchedMesh&&It.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&It.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&It.instancing===!1||!$.isInstancedMesh&&It.instancing===!0||$.isSkinnedMesh&&It.skinning===!1||!$.isSkinnedMesh&&It.skinning===!0||$.isInstancedMesh&&It.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&It.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&It.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&It.instancingMorph===!1&&$.morphTexture!==null||It.envMap!==kt||Z.fog===!0&&It.fog!==At||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Bt.numPlanes||It.numIntersection!==Bt.numIntersection)||It.vertexAlphas!==re||It.vertexTangents!==ce||It.morphTargets!==Ft||It.morphNormals!==ye||It.morphColors!==He||It.toneMapping!==Ne||It.morphTargetsCount!==en||!!It.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,It.__version=Z.version);let bn=It.currentProgram;me===!0&&(bn=Ia(Z,G,$),M&&Z.isNodeMaterial&&M.onUpdateProgram(Z,bn,It));let Xn=!1,mi=!1,ls=!1,Ee=bn.getUniforms(),ze=It.uniforms;if(x.useProgram(bn.program)&&(Xn=!0,mi=!0,ls=!0),Z.id!==z&&(z=Z.id,mi=!0),It.needsLights){let Pe=ep(E.state.lightProbeGridArray,$);It.lightProbeGrid!==Pe&&(It.lightProbeGrid=Pe,mi=!0)}if(Xn||q!==w){x.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ee.setValue(N,"projectionMatrix",w.projectionMatrix),Ee.setValue(N,"viewMatrix",w.matrixWorldInverse);let xi=Ee.map.cameraPosition;xi!==void 0&&xi.setValue(N,xt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&Ee.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ee.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,mi=!0,ls=!0)}if(It.needsLights&&(ln.state.sunShadowMap.length>0&&Ee.setValue(N,"sunShadowMap",ln.state.sunShadowMap,Y),ln.state.directionalShadowMap.length>0&&Ee.setValue(N,"directionalShadowMap",ln.state.directionalShadowMap,Y),ln.state.spotShadowMap.length>0&&Ee.setValue(N,"spotShadowMap",ln.state.spotShadowMap,Y),ln.state.pointShadowMap.length>0&&Ee.setValue(N,"pointShadowMap",ln.state.pointShadowMap,Y)),$.isSkinnedMesh){Ee.setOptional(N,$,"bindMatrix"),Ee.setOptional(N,$,"bindMatrixInverse");let Pe=$.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Ee.setValue(N,"boneTexture",Pe.boneTexture,Y))}$.isBatchedMesh&&(Ee.setOptional(N,$,"batchingTexture"),Ee.setValue(N,"batchingTexture",$._matricesTexture,Y),Ee.setOptional(N,$,"batchingIdTexture"),Ee.setValue(N,"batchingIdTexture",$._indirectTexture,Y),Ee.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&Ee.setValue(N,"batchingColorTexture",$._colorsTexture,Y));let gi=j.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&V.update($,j,bn),(mi||It.receiveShadow!==$.receiveShadow)&&(It.receiveShadow=$.receiveShadow,Ee.setValue(N,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(ze.envMapIntensity.value=G.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=vy()),mi){if(Ee.setValue(N,"toneMappingExposure",L.toneMappingExposure),It.needsLights&&ip(ze,ls),At&&Z.fog===!0&&Ot.refreshFogUniforms(ze,At),Ot.refreshMaterialUniforms(ze,Z,tt,Q,E.state.transmissionRenderTarget[w.id]),It.needsLights&&It.lightProbeGrid){let Pe=It.lightProbeGrid;ze.probesSH.value=Pe.texture,ze.probesMin.value.copy(Pe.boundingBox.min),ze.probesMax.value.copy(Pe.boundingBox.max),ze.probesResolution.value.copy(Pe.resolution)}nr.upload(N,lu(It),ze,Y)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(nr.upload(N,lu(It),ze,Y),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ee.setValue(N,"center",$.center),Ee.setValue(N,"modelViewMatrix",$.modelViewMatrix),Ee.setValue(N,"normalMatrix",$.normalMatrix),Ee.setValue(N,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let Pe=Z.uniformsGroups;for(let xi=0,cs=Pe.length;xi<cs;xi++){let uu=Pe[xi];ut.update(uu,bn),ut.bind(uu,bn)}}return bn}function ip(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.sunLights.needsUpdate=G,w.sunLightShadows.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function sp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,G,j){let Z=X.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=G,X.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let j=X.get(w);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,j=0){H=w,U=G,F=j;let Z=null,$=!1,At=!1;if(w){let Tt=X.get(w);if(Tt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,Tt.__webglFramebuffer),W.copy(w.viewport),ft.copy(w.scissor),ot=w.scissorTest,x.viewport(W),x.scissor(ft),x.setScissorTest(ot),z=-1;return}else if(Tt.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(Tt.__hasExternalTextures)Y.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let re=w.depthTexture;if(Tt.__boundDepthTexture!==re){if(re!==null&&X.has(re)&&(w.width!==re.image.width||w.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}let Ut=w.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(At=!0);let kt=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[G])?Z=kt[G][j]:Z=kt[G],$=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?Z=X.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?Z=kt[j]:Z=kt,W.copy(w.viewport),ft.copy(w.scissor),ot=w.scissorTest}else W.copy(St).multiplyScalar(tt).floor(),ft.copy(Zt).multiplyScalar(tt).floor(),ot=ge;if(j!==0&&(Z=I),x.bindFramebuffer(N.FRAMEBUFFER,Z)&&x.drawBuffers(w,Z),x.viewport(W),x.scissor(ft),x.setScissorTest(ot),$){let Tt=X.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,Tt.__webglTexture,j)}else if(At){let Tt=G;for(let Ut=0;Ut<w.textures.length;Ut++){let kt=X.get(w.textures[Ut]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ut,kt.__webglTexture,j,Tt)}}else if(w!==null&&j!==0){let Tt=X.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tt.__webglTexture,j)}z=-1};function hu(w){let G=X.get(w);return(G.__readFormat!==w.format||G.__readType!==w.type)&&(G.__readFormat=w.format,G.__readType=w.type,G.__formatReadable=P.textureFormatReadable(w.format),G.__typeReadable=P.textureTypeReadable(w.type)),G}this.readRenderTargetPixels=function(w,G,j,Z,$,At,Lt,Tt=0){if(!(w&&w.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){x.bindFramebuffer(N.FRAMEBUFFER,Ut);try{let kt=w.textures[Tt],re=kt.format,ce=kt.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Tt);let Ft=hu(kt);if(Ft.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-Z&&j>=0&&j<=w.height-$&&N.readPixels(G,j,Z,$,Et.convert(re),Et.convert(ce),At)}finally{let kt=H!==null?X.get(H).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(w,G,j,Z,$,At,Lt,Tt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut)if(G>=0&&G<=w.width-Z&&j>=0&&j<=w.height-$){x.bindFramebuffer(N.FRAMEBUFFER,Ut);let kt=w.textures[Tt],re=kt.format,ce=kt.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Tt);let Ft=hu(kt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ye),N.bufferData(N.PIXEL_PACK_BUFFER,At.byteLength,N.STREAM_READ),N.readPixels(G,j,Z,$,Et.convert(re),Et.convert(ce),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let He=H!==null?X.get(H).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,He);let Ne=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Af(N,Ne,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ye),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,At),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ye),N.deleteSync(Ne),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,j=0){let Z=Math.pow(2,-j),$=Math.floor(w.image.width*Z),At=Math.floor(w.image.height*Z),Lt=G!==null?G.x:0,Tt=G!==null?G.y:0;Y.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,Lt,Tt,$,At),x.unbindTexture()},this.copyTextureToTexture=function(w,G,j=null,Z=null,$=0,At=0){let Lt,Tt,Ut,kt,re,ce,Ft,ye,He,Ne=w.isCompressedTexture?w.mipmaps[At]:w.image;if(j!==null)Lt=j.max.x-j.min.x,Tt=j.max.y-j.min.y,Ut=j.isBox3?j.max.z-j.min.z:1,kt=j.min.x,re=j.min.y,ce=j.isBox3?j.min.z:0;else{let ze=Math.pow(2,-$);Lt=Math.floor(Ne.width*ze),Tt=Math.floor(Ne.height*ze),w.isDataArrayTexture?Ut=Ne.depth:w.isData3DTexture?Ut=Math.floor(Ne.depth*ze):Ut=1,kt=0,re=0,ce=0}Z!==null?(Ft=Z.x,ye=Z.y,He=Z.z):(Ft=0,ye=0,He=0);let we=Et.convert(G.format),en=Et.convert(G.type),It;G.isData3DTexture?(Y.setTexture3D(G,0),It=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Y.setTexture2DArray(G,0),It=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(G,0),It=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);let ln=x.getParameter(N.UNPACK_ROW_LENGTH),me=x.getParameter(N.UNPACK_IMAGE_HEIGHT),bn=x.getParameter(N.UNPACK_SKIP_PIXELS),Xn=x.getParameter(N.UNPACK_SKIP_ROWS),mi=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,Ne.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ne.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,kt),x.pixelStorei(N.UNPACK_SKIP_ROWS,re),x.pixelStorei(N.UNPACK_SKIP_IMAGES,ce);let ls=w.isDataArrayTexture||w.isData3DTexture,Ee=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let ze=X.get(w),gi=X.get(G),Pe=X.get(ze.__renderTarget),xi=X.get(gi.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,Pe.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let cs=0;cs<Ut;cs++)ls&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(w).__webglTexture,$,ce+cs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(G).__webglTexture,At,He+cs)),N.blitFramebuffer(kt,re,Lt,Tt,Ft,ye,Lt,Tt,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||X.has(w)){let ze=X.get(w),gi=X.get(G);x.bindFramebuffer(N.READ_FRAMEBUFFER,C),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,A);for(let Pe=0;Pe<Ut;Pe++)ls?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.__webglTexture,$,ce+Pe):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ze.__webglTexture,$),Ee?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gi.__webglTexture,At,He+Pe):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,gi.__webglTexture,At),$!==0?N.blitFramebuffer(kt,re,Lt,Tt,Ft,ye,Lt,Tt,N.COLOR_BUFFER_BIT,N.NEAREST):Ee?N.copyTexSubImage3D(It,At,Ft,ye,He+Pe,kt,re,Lt,Tt):N.copyTexSubImage2D(It,At,Ft,ye,kt,re,Lt,Tt);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ee?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(It,At,Ft,ye,He,Lt,Tt,Ut,we,en,Ne.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(It,At,Ft,ye,He,Lt,Tt,Ut,we,Ne.data):N.texSubImage3D(It,At,Ft,ye,He,Lt,Tt,Ut,we,en,Ne):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,At,Ft,ye,Lt,Tt,we,en,Ne.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,At,Ft,ye,Ne.width,Ne.height,we,Ne.data):N.texSubImage2D(N.TEXTURE_2D,At,Ft,ye,Lt,Tt,we,en,Ne);x.pixelStorei(N.UNPACK_ROW_LENGTH,ln),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,me),x.pixelStorei(N.UNPACK_SKIP_PIXELS,bn),x.pixelStorei(N.UNPACK_SKIP_ROWS,Xn),x.pixelStorei(N.UNPACK_SKIP_IMAGES,mi),At===0&&G.generateMipmaps&&N.generateMipmap(It),x.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),x.unbindTexture()},this.resetState=function(){U=0,F=0,H=null,x.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var pa=class extends ci{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new De;t.deleteAttribute("uv");let e=new he({side:Ye}),n=new he,i=new Qr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new it(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Or(t,n,6),o=new Ge;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new it(t,sr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new it(t,sr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new it(t,sr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new it(t,sr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new it(t,sr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new it(t,sr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function sr(s){return new $r({color:0,emissive:16777215,emissiveIntensity:s})}var fi=[{id:0,name:"Bubbles",tag:"The Royal Bean",color:"#ff5fb4"},{id:1,name:"Ninja",tag:"The Silent Bean",color:"#3b82f6"},{id:2,name:"Dino",tag:"The Chunky Dino",color:"#3ddc84"},{id:3,name:"Robo",tag:"The Bolt Bot",color:"#ffc233"}],ma=[{id:0,key:"candy",name:"Candy Meadow",sub:"Easy",stars:1,limit:110,finishZ:-321.9,finishY:0,colors:["#ff7ab8","#7be8ff"],blurb:"Sweet hills, bouncy mushrooms, spinning bars"},{id:1,key:"canyon",name:"Sunset Canyon",sub:"Medium",stars:2,limit:130,finishZ:-314,finishY:5,colors:["#ff8a3d","#8b2fc9"],blurb:"Lava, hammers, conveyors and rolling balls"},{id:2,key:"frost",name:"Frozen Peak",sub:"Hard",stars:3,limit:150,finishZ:-332.7,finishY:10.5,colors:["#9fe3ff","#3b82f6"],blurb:"Slippery ice, snowballs, lifts and bounce pads"},{id:3,key:"neon",name:"Neon Space",sub:"Insane",stars:4,limit:170,finishZ:-412.5,finishY:5,colors:["#22f2ff","#ff2bd6"],blurb:"Vanishing tiles, giant fans and pistons in space"},{id:4,key:"fair",name:"Funfair Frenzy",sub:"Extreme",stars:5,limit:180,finishZ:-421.6,finishY:0,colors:["#ffd23f","#ff4d6d"],blurb:"Seesaws, bungee bounce, roller coaster and pitfalls"},{id:5,key:"fun",name:"Fun Map",sub:"Chill",stars:1,limit:400,finishZ:-424,finishY:.15,colors:["#80ed99","#4cc9f0"],blurb:"Giant theme park: rides, a speedway with 4 cars to drive, then the maze. Nothing can kill you!"}];var ga=new B;function An(s,t,e,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;ga.copy(t),ga[n]=0,ga.normalize();let c=.5*a/(a+o),h=1-ga.angleTo(s)/l;return Math.sign(ga[e])===1?h*c:o/(a+o)+c+c*(1-h)}var rr=class s extends De{constructor(t=1,e=1,n=1,i=2,r=.1){let a=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new B,c=new B,h=new B(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,y=new B,p=.5/a;for(let m=0,S=0;m<u.length;m+=3,S+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:y.set(1,0,0),d[S+0]=An(y,c,"z","y",r,n),d[S+1]=1-An(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),d[S+0]=1-An(y,c,"z","y",r,n),d[S+1]=1-An(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),d[S+0]=1-An(y,c,"x","z",r,t),d[S+1]=An(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),d[S+0]=1-An(y,c,"x","z",r,t),d[S+1]=1-An(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),d[S+0]=1-An(y,c,"x","y",r,t),d[S+1]=1-An(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),d[S+0]=An(y,c,"x","y",r,t),d[S+1]=1-An(y,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};function dd(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Re,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=fd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<a[h].length;++y)d.push(a[h][y][f]);let g=fd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function fd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ae(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);o.setComponent(f+u,g,y)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}var de={R:.42,H:1.55,STEP:.34,EDGE:.28,G:34,RUN:9.4,JUMP:12.2,ACC:70,AIR:22,DEC:95,AIR_DEC:9,ICE_ACC:11,ICE_DEC:5.5,TERM:-50,SNAP:.5},kn=(s,t,e)=>s<t?t:s>e?e:s,pd=new vn,md=new yn,gd=new xe,xd=new B,_d=new B,Ni=new Dt,is=class{constructor(){this.list=[]}add(t,e,n,i,r,a=0,o=0,l=0,c=1,h=1,u=1){pd.set(a,o,l),md.setFromEuler(pd),xd.set(e,n,i),_d.set(c,h,u),gd.compose(xd,md,_d);let f=t.index?t.toNonIndexed():t.clone();f.attributes.uv&&f.deleteAttribute("uv"),f.applyMatrix4(gd);let d=f.attributes.position.count,g=new Float32Array(d*3);Ni.set(r);for(let y=0;y<d;y++)g[y*3]=Ni.r,g[y*3+1]=Ni.g,g[y*3+2]=Ni.b;f.setAttribute("color",new Ae(g,3)),this.list.push(f)}addGeo(t){t.index&&(t=t.toNonIndexed()),t.attributes.uv&&t.deleteAttribute("uv"),this.list.push(t)}build(t){if(!this.list.length)return null;let e=dd(this.list,!1);return this.list.length=0,new it(e,t)}};var Bl=class{constructor(t,e=!1){this.theme=t,this.headless=e,this.group=new ne,this.solids=[],this.ramps=[],this.discs=[],this.hazards=[],this.updaters=[],this.checkpoints=[],this.zones=[],this.pools=[],this.main=new is,this.glow=new is,this.waterY=-5,this.killY=-9,this.geoCache=new Map,this.matCache=new Map,this.colorIdx=0,this.arrowTexture=null,this.time=0,this.hitOut={nx:0,nz:1,pow:10},this.onEvent=null}rbox(t,e,n,i){let r=Math.max(.02,Math.min(i,t/2-.01,e/2-.01,n/2-.01)),a=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,o=this.geoCache.get(a);return o||(o=Math.min(t,e,n)<.35?new De(t,e,n):new rr(t,e,n,2,r),this.geoCache.set(a,o)),o}mat(t,e={}){var r,a,o,l;let n=t+JSON.stringify(e),i=this.matCache.get(n);return i||(i=new he({color:t,roughness:(r=e.rough)!=null?r:.38,metalness:(a=e.metal)!=null?a:.02,emissive:(o=e.emissive)!=null?o:0,emissiveIntensity:(l=e.ei)!=null?l:1}),this.matCache.set(n,i)),i}pick(){let t=this.theme.plat;return t[this.colorIdx++%t.length]}addSolid(t,e,n,i,r,a,o={}){let l={x0:t,y0:e,z0:n,x1:i,y1:r,z1:a,active:!0,ice:!!o.ice,conv:o.conv||null,bounce:o.bounce||0,boost:o.boost||0,dx:0,dy:0,dz:0,moving:!1,name:o.name||""};return this.solids.push(l),l}add(t,e=!0,n=!0){return t.castShadow=e,t.receiveShadow=n,this.group.add(t),t}emit(t,e){this.onEvent&&this.onEvent(t,e)}platform(t,e,n,i,r,a={}){var h,u,f;let o=(h=a.h)!=null?h:1.6,l=(u=a.color)!=null?u:this.pick(),c=this.addSolid(t-i/2,e-o,n-r/2,t+i/2,e,n+r/2,a);if(!this.headless){if(this.main.add(this.rbox(i,o,r,.3),t,e-o/2,n,l),a.pad!==!1&&i>2.4&&r>2.4){let d=(f=a.padColor)!=null?f:a.ice?this.theme.icePad:this.theme.pad;this.main.add(this.rbox(i-1.1,.12,r-1.1,.05),t,e+0,n,d)}if(this.theme.edgeGlow){let d=this.theme.edgeGlow;this.glow.add(this.rbox(i+.04,.12,.12,.03),t,e-.08,n+r/2,d),this.glow.add(this.rbox(i+.04,.12,.12,.03),t,e-.08,n-r/2,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t+i/2,e-.08,n,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t-i/2,e-.08,n,d)}}return c}disc(t,e,n,i,r={}){var u,f,d,g,y,p,m,S,R;let a=(u=r.omega)!=null?u:0,o=(f=r.h)!=null?f:1.4,l={cx:t,cz:n,top:e,r:i,th:o,omega:a,phase:(d=r.phase)!=null?d:0,bounce:r.bounce||0,push:r.push||null,ice:!!r.ice,theta:(g=r.phase)!=null?g:0,dTheta:0,kind:"disc",squash:0,first:!0};if(this.discs.push(l),this.headless)return l;if(r.bounce){let _=new ne;_.position.set(t,e,n);let b=new it(new Yt(i*.55,i*.7,1.4,20),this.mat((y=r.stem)!=null?y:"#fff3d6"));b.position.y=-.7;let E=new it(new be(i,28,14,0,Math.PI*2,0,Math.PI/2),this.mat((p=r.color)!=null?p:"#ff3b6b",{rough:.25}));E.scale.y=.45,E.position.y=-.05,_.add(b,E);for(let D=0;D<6;D++){let v=new it(new be(.26,10,8),this.mat("#ffffff")),T=D/6*Math.PI*2;v.position.set(Math.cos(T)*i*.62,.34*(1-.3),Math.sin(T)*i*.62),v.scale.y=.4,_.add(v)}return this.add(_),l.mesh=_,this.updaters.push((D,v)=>{l.squash=Math.max(0,l.squash-v*4);let T=1-Math.sin(l.squash*Math.PI)*.35*l.squash;_.scale.set(1+(1-T)*.5,T,1+(1-T)*.5)}),l}let c=(m=r.color)!=null?m:this.pick(),h=new Yt(i,i,o,40);if(a===0)this.main.add(h,t,e-o/2,n,c),this.main.add(new Yt(i-.5,i-.5,.12,40),t,e,n,(S=r.padColor)!=null?S:this.theme.pad),this.theme.edgeGlow&&this.glow.add(new Me(i,.07,6,48),t,e-.1,n,this.theme.edgeGlow,Math.PI/2);else{let _=new ne;_.position.set(t,e,n);let b=new it(h,this.mat(c));b.position.y=-o/2;let E=new it(new Yt(i-.5,i-.5,.12,40),this.mat((R=r.padColor)!=null?R:this.theme.pad));_.add(b,E);for(let D=0;D<4;D++){let v=new it(this.rbox(i*1.6,.14,.6,.05),this.mat(this.theme.hazard2));v.position.y=.06,v.rotation.y=D*Math.PI/4,_.add(v)}if(this.theme.edgeGlow){let D=new it(new Me(i,.08,6,48),new Ce({color:this.theme.edgeGlow,toneMapped:!1}));D.rotation.x=Math.PI/2,D.position.y=-.1,_.add(D)}this.add(_),l.mesh=_,this.updaters.push(D=>{_.rotation.y=l.theta})}return l}ramp(t,e,n,i,r,a,o={}){var F,H;let l={x0:t-a/2,x1:t+a/2,zN:e,zF:i,yN:n,yF:r,conv:o.conv||null,ice:!!o.ice,kind:"ramp"};if(this.ramps.push(l),this.headless)return l;let c=Math.min(n,r)-1.6,h=(F=o.color)!=null?F:this.pick(),u=(z,q,W)=>[z,q,W],f=u(l.x0,n,e),d=u(l.x1,n,e),g=u(l.x1,r,i),y=u(l.x0,r,i),p=u(l.x0,c,e),m=u(l.x1,c,e),S=u(l.x1,c,i),R=u(l.x0,c,i),_=[],b=(z,q,W,ft)=>{_.push(...z,...q,...W,...z,...W,...ft)};b(f,y,g,d),b(f,d,m,p),b(g,y,R,S),b(y,f,p,R),b(d,g,S,m);let E=new Re;E.setAttribute("position",new fe(_,3)),E.computeVertexNormals();let D=_.length/3,v=new Float32Array(D*3);Ni.set(h);for(let z=0;z<D;z++)v[z*3]=Ni.r,v[z*3+1]=Ni.g,v[z*3+2]=Ni.b;E.setAttribute("color",new Ae(v,3)),this.main.addGeo(E);let T=e-i,L=r-n,O=Math.hypot(T,L),M=Math.atan2(L,T),I=(e+i)/2,C=(n+r)/2,A=-Math.sin(M),U=Math.cos(M);return this.main.add(this.rbox(a-1.6,.1,O-.6,.04),t,C+U*.02,I+A*.02*0,(H=o.padColor)!=null?H:o.ice?this.theme.icePad:this.theme.pad,M,0,0),l}mover(t,e,n,i,r,a,o={}){var y,p,m;let l=(y=o.h)!=null?y:1.5,c=this.addSolid(t-i/2,e-l,n-r/2,t+i/2,e,n+r/2,o);c.moving=!0,c.first=!0;let h=null;if(!this.headless){if(h=new it(this.rbox(i,l,r,.28),this.mat((p=o.color)!=null?p:this.pick(),{rough:.3})),o.pad!==!1){let S=new it(this.rbox(i-1,.12,r-1,.05),this.mat((m=o.padColor)!=null?m:this.theme.pad));S.position.y=l/2,h.add(S)}if(o.stripes){let S=new it(this.rbox(i+.02,.4,r+.02,.05),this.mat(this.theme.hazard));S.position.y=0,h.add(S)}this.add(h)}let u=0,f=0,d=0,g=S=>{let[R,_,b]=a(S);c.x0=t-i/2+R,c.x1=t+i/2+R,c.y0=e-l+_,c.y1=e+_,c.z0=n-r/2+b,c.z1=n+r/2+b,c.first&&(u=R,f=_,d=b,c.first=!1),c.dx=R-u,c.dy=_-f,c.dz=b-d,u=R,f=_,d=b,h&&h.position.set(t+R,e-l/2+_,n+b)};return g(0),this.updaters.push(S=>g(S)),c}tile(t,e,n,i,r,a={}){var y,p,m,S,R,_;let o=(y=a.period)!=null?y:4.8,l=(p=a.solidT)!=null?p:2.4,c=(m=a.warn)!=null?m:.8,h=(S=a.off)!=null?S:0,u=this.addSolid(t-i/2,e-1,n-r/2,t+i/2,e,n+r/2,a),f=null,d=null;this.headless||(d=new he({color:(R=a.color)!=null?R:this.pick(),roughness:.3,emissive:0}),f=new it(this.rbox(i,1,r,.22),d),f.position.set(t,e-.5,n),this.add(f));let g=new Dt((_=a.color)!=null?_:"#ffffff");return this.updaters.push(b=>{let E=((b+h)%o+o)%o;E<l?(u.active=!0,f&&(f.visible=!0,f.position.x=t,d.emissive.setRGB(0,0,0))):E<l+c?(u.active=!0,f&&(f.visible=!0,f.position.x=t+Math.sin(b*70)*.07,d.emissive.setRGB(.55,.05,.02))):(u.active=!1,f&&(f.visible=!1))}),u}conveyor(t,e,n,i,r,a,o={}){let l=this.addSolid(t-i/2,e-1.4,n-r/2,t+i/2,e,n+r/2,{...o,conv:[0,a]});if(this.headless)return l;this.main.add(this.rbox(i,1.4,r,.25),t,e-.7,n,this.theme.convBase);let c=new Ve(i-1.2,r-.6),h=this.arrowTexture?this.arrowTexture.clone():null;h&&(h.needsUpdate=!0,h.wrapS=h.wrapT=Is,h.repeat.set(Math.max(1,Math.round((i-1.2)/2.4)),Math.max(1,Math.round((r-.6)/2.4))));let u=new it(c,new he({color:this.theme.belt,map:h,roughness:.6}));u.rotation.x=-Math.PI/2,a>0&&(u.rotation.z=Math.PI),u.position.set(t,e+.03,n),this.add(u,!1,!0);let f=Math.abs(a);return this.updaters.push((d,g)=>{h&&(h.offset.y-=f*g/2.4/(r-.6)*h.repeat.y)}),l}bar(t,e,n,i,r={}){var S,R,_,b,E,D,v;let a=(S=r.w)!=null?S:1.2,o=(R=r.h)!=null?R:1.2,l=(_=r.omega)!=null?_:1.4,c=(b=r.phase)!=null?b:0,h=(E=r.arms)!=null?E:1,u={type:"bar",test:(T,L,O)=>{if(T.y>e+o||T.y+de.H<e)return!1;let M=T.x-t,I=T.z-n;if(M*M+I*I>(i/2+1.2)*(i/2+1.2))return!1;let C=c+l*L;for(let A=0;A<h;A++){let U=C+A*Math.PI/h,F=Math.cos(U),H=Math.sin(U),z=M*F-I*H,q=M*H+I*F,W=kn(z,-i/2,i/2),ft=kn(q,-a/2,a/2),ot=z-W,Pt=q-ft;if(ot*ot+Pt*Pt<de.R*de.R){let jt=Math.hypot(M,I)||.001,ee=l*I,Q=-l*M,tt=Math.hypot(ee,Q)||1;ee/=tt,Q/=tt;let _t=ee+M/jt*.45,Vt=Q+I/jt*.45,St=Math.hypot(_t,Vt)||1;return O.nx=_t/St,O.nz=Vt/St,O.pow=kn(6+Math.abs(l)*jt*1.15,9,21),!0}}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new ne;f.position.set(t,e+o/2,n);let d=Math.max(3,Math.round(i/2.4)),g=i/d,y=this.mat((D=r.color1)!=null?D:this.theme.hazard,{rough:.3}),p=this.mat((v=r.color2)!=null?v:this.theme.hazard2,{rough:.3});for(let T=0;T<h;T++){let L=new ne;L.rotation.y=T*Math.PI/h;for(let O=0;O<d;O++){let M=new it(this.rbox(g*.995,o,a,.25),O%2?y:p);M.position.x=-i/2+g*(O+.5),M.castShadow=!0,L.add(M)}f.add(L)}let m=new it(new Yt(a*.85,a,o+.7,16),this.mat(this.theme.hub));return m.castShadow=!0,f.add(m),this.add(f),this.updaters.push(T=>{f.rotation.y=c+l*T}),u}hammer(t,e,n,i,r={}){var m,S,R,_,b,E,D,v,T;let a=(m=r.amp)!=null?m:1.1,o=(S=r.omega)!=null?S:1.6,l=(R=r.phase)!=null?R:0,c=(_=r.r)!=null?_:1.3,h=(b=r.span)!=null?b:9,u={type:"hammer",test:(L,O,M)=>{let I=a*Math.sin(o*O+l),C=t+i*Math.sin(I),A=e-i*Math.cos(I),U=a*o*Math.cos(o*O+l),F=i*Math.cos(I)*U,H=kn(A,L.y+.15,L.y+de.H-.1),z=C-L.x,q=A-H,W=n-L.z,ft=de.R+c;if(z*z+q*q+W*W<ft*ft){let ot=-z,Pt=-W;ot=(Math.sign(F)||Math.sign(ot)||1)*1,Pt=Pt*.5;let ee=Math.hypot(ot,Pt);return M.nx=ot/ee,M.nz=Pt/ee,M.pow=kn(Math.abs(F)*1.05+6,10,23),!0}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new ne;f.position.set(t,e,n);let d=new it(new Yt(.17,.17,i,10),this.mat(this.theme.hub));d.position.y=-i/2;let g=new it(new be(c,28,18),this.mat(this.theme.hazard,{rough:.25}));g.position.y=-i;let y=new it(new Me(c*.98,.12,8,28),this.mat(this.theme.hazard2));y.position.y=-i,y.rotation.x=Math.PI/2;let p=y.clone();if(p.rotation.set(0,Math.PI/2,0),f.add(d,g,y,p),f.traverse(L=>{L.isMesh&&(L.castShadow=!0)}),this.add(f),this.updaters.push(L=>{f.rotation.z=a*Math.sin(o*L+l)}),!this.headless){let L=this.theme.hub;this.main.add(this.rbox(.9,e-((E=r.baseY)!=null?E:e-i-1.5)+1.2,.9,.2),t-h,(e+((D=r.baseY)!=null?D:e-i-1.5))/2-0,n,L),this.main.add(this.rbox(.9,e-((v=r.baseY)!=null?v:e-i-1.5)+1.2,.9,.2),t+h,(e+((T=r.baseY)!=null?T:e-i-1.5))/2-0,n,L),this.main.add(this.rbox(h*2+1,.8,.9,.2),t,e+.6,n,L)}return u}balls(t,e,n,i,r,a,o,l,c={}){let h=n-e,u=h/a,f=l.map(()=>({x:t,z:0,y:0,on:!1})),d=[],g=p=>new Dt(p%2?this.theme.hazard:this.theme.hazard2);this.headless||l.forEach((p,m)=>{let S=new be(r,32,20),R=S.attributes.position,_=R.count,b=new Float32Array(_*3);for(let D=0;D<_;D++){let v=Math.atan2(R.getZ(D),R.getX(D)),L=Math.floor((v+Math.PI)/(Math.PI*2)*8)%2?new Dt(this.theme.hazard):new Dt(this.theme.hazard2);b[D*3]=L.r,b[D*3+1]=L.g,b[D*3+2]=L.b}S.setAttribute("color",new Ae(b,3));let E=new it(S,new he({vertexColors:!0,roughness:.25}));E.visible=!1,this.add(E),d.push(E)});let y={type:"balls",test:(p,m,S)=>{for(let R=0;R<f.length;R++){let _=f[R];if(!_.on)continue;let b=kn(_.y,p.y+.15,p.y+de.H-.1),E=_.x-p.x,D=_.y-b,v=_.z-p.z,T=de.R+r;if(E*E+D*D+v*v<T*T){let L=(p.x-_.x)*.8,O=1,M=Math.hypot(L,O);return S.nx=L/M,S.nz=O/M,S.pow=kn(a*1.1+4,10,20),!0}}return!1}};return this.hazards.push(y),this.updaters.push(p=>{l.forEach((m,S)=>{let R=f[S],_=((p+m)%o+o)%o,b=_<u;R.on=b,b&&(R.z=e+_*a,R.y=i(R.z)+r,R.x=t);let E=d[S];E&&(E.visible=b,b&&(E.position.set(R.x,R.y,R.z),E.rotation.x=R.z/r))})}),y}seesaw(t,e,n,i,r,a,o,l=0){let c={x0:t-i/2,x1:t+i/2,zN:n+r/2,zF:n-r/2,yN:e,yF:e,conv:null,ice:!1,kind:"ramp",seesaw:!0};this.ramps.push(c);let h=g=>{let y=a*Math.sin(2*Math.PI*g/o+l);return c.yN=e+y,c.yF=e-y,y};if(h(0),this.headless)return this.updaters.push(g=>h(g)),c;this.main.add(new Yt(.5,1.1,2.4,8),t,e-1.4,n,this.theme.hub),this.main.add(this.rbox(i*.9,.7,1.4,.2),t,e-2.5,n,this.theme.hazard2);let u=new ne;u.position.set(t,e-.25,n);let f=new it(this.rbox(i,.5,r,.2),this.mat(this.pick(),{rough:.35})),d=new it(this.rbox(i-1.2,.1,r-1.2,.04),this.mat(this.theme.pad));d.position.y=.27,u.add(f,d);for(let g of[-1,1]){let y=new it(this.rbox(i,.62,1.2,.2),this.mat(this.theme.hazard,{rough:.3}));y.position.set(0,.03,g*(r/2-.6)),u.add(y)}for(let g of[-1,1]){let y=new it(new Yt(.1,.1,1.1,8),this.mat(this.theme.hub));y.position.set(g*(i/2-.5),.9,0),u.add(y)}return this.add(u),this.updaters.push(g=>{let y=h(g);u.rotation.x=-Math.atan2(y,r/2)}),c}bungee(t,e,n,i,r,a){let o=this.disc(t,n,e,i,{bounce:r,color:this.theme.hazard});if(this.headless)return o;let l=a,c=14;for(let h=0;h<c;h++){let u=h/c*Math.PI*2,f=t+Math.cos(u)*(i*.92),d=e+Math.sin(u)*(i*.92);this.main.add(new Yt(.07,.07,l-n,5),f,(l+n)/2,d,h%2?"#ffffff":this.theme.hazard)}this.main.add(new Me(i*.92,.35,8,36),t,l,e,this.theme.accent,Math.PI/2),this.main.add(new Me(i*.92,.2,8,36),t,n+.15,e,"#ffffff",Math.PI/2);for(let h=0;h<3;h++){let u=Math.PI/2+h*Math.PI*2/3+.5,f=t+Math.cos(u)*(i+1.4),d=e+Math.sin(u)*(i+1.4);this.main.add(new Yt(.45,.6,l+12,8),f,(l-12)/2,d,h%2?"#ffd23f":"#ffffff")}return this.glow.add(new be(.9,12,8),t,l+1.6,e,"#ffffff"),o}tube(t,e,n){if(this.headless)return;let i=new B(0,1,0),r=new B,a=new B,o=new B,l=new yn,c=new vn;for(let h=0;h<t.length-1;h++){r.set(...t[h]),a.set(...t[h+1]),o.subVectors(a,r);let u=o.length();o.normalize(),l.setFromUnitVectors(i,o),c.setFromQuaternion(l),this.main.add(new Yt(e,e,u*1.02,6),(r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,n,c.x,c.y,c.z)}}airpad(t,e,n,i,r,a={}){var f,d;let o={x:t,z:e,r:n,y0:i,y1:i+r,lift:(f=a.lift)!=null?f:90,vmax:(d=a.vmax)!=null?d:9};if(this.zones.push(o),this.headless)return o;this.main.add(new Yt(n*.95,n,.5,28),t,i+.25,e,this.theme.hub),this.glow.add(new Me(n*.8,.14,8,36),t,i+.55,e,"#9cf0ff",Math.PI/2);let l=new Ce({color:"#8fe9ff",transparent:!0,opacity:.16,depthWrite:!1,side:tn,toneMapped:!1}),c=new it(new Yt(n*.92,n*.92,r,24,1,!0),l);c.position.set(t,i+r/2,e),c.renderOrder=3,this.group.add(c);let h=new Ce({color:"#e6fbff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),u=[];for(let g=0;g<5;g++){let y=new it(new Me(n*.85,.08,6,28),h);y.rotation.x=Math.PI/2,y.renderOrder=3,this.group.add(y),u.push(y)}return this.updaters.push(g=>{u.forEach((y,p)=>{let m=(g*.5+p/5)%1;y.position.set(t,i+.6+m*(r-.8),e),y.scale.setScalar(1-m*.25)})}),o}punch(t,e,n,i,r,a,o={}){var R,_;let l=(R=o.period)!=null?R:3.2,c=(_=o.off)!=null?_:0,h=1,u=Math.hypot(i,r)||1;i/=u,r/=u;let f=b=>{let E=((b+c)%l+l)%l/l,D=(v,T,L)=>{let O=Math.max(0,Math.min(1,(L-v)/(T-v)));return O*O*(3-2*O)};return a*(D(.5,.58,E)-D(.78,.95,E))},d={type:"punch",test:(b,E,D)=>{var U;let v=f(E);if(v<.4)return!1;let T=t+i*(v+.5),L=n+r*(v+.5),O=kn(e,b.y+.15,b.y+de.H-.1),M=T-b.x,I=e-O,C=L-b.z,A=de.R+h;return M*M+I*I+C*C<A*A?(D.nx=i,D.nz=r,D.pow=(U=o.pow)!=null?U:15,!0):!1}};if(this.hazards.push(d),this.headless)return d;let g=new ne;g.position.set(t,e,n),g.rotation.y=Math.atan2(i,r);let y=new it(new Yt(.22,.22,1,8),this.mat(this.theme.hub));y.rotation.x=Math.PI/2;let p=new it(new be(h,20,14),this.mat(this.theme.hazard,{rough:.3})),m=new it(new Yt(.62,.62,.5,14),this.mat("#ffffff"));m.rotation.x=Math.PI/2,m.position.z=-.95;let S=new it(new be(.42,12,10),this.mat(this.theme.hazard,{rough:.3}));return S.position.set(.7,.45,-.35),p.add(m,S),m.position.z=-.95,p.scale.set(1,1,1.1),g.add(y,p),g.traverse(b=>{b.isMesh&&(b.castShadow=!0)}),this.add(g,!1,!1),this.main.add(this.rbox(2.2,2.6,1.2,.3),t-i*.3,e,n-r*.3,this.theme.hub,0,Math.atan2(i,r),0),this.updaters.push(b=>{let E=f(b);y.scale.y=Math.max(.01,E+.2),y.position.z=(E+.2)/2,p.position.z=E+.5}),d}ferris(t,e,n,i,r,a){let o=u=>u*Math.PI*2/r;for(let u=0;u<r;u++)this.mover(t,e-i,n,5,5,f=>{let d=a*f+o(u);return[0,i*(1-Math.cos(d)),i*Math.sin(d)]},{h:.7,color:this.theme.plat[u%this.theme.plat.length],pad:!0});if(this.headless)return;let l=new ne;l.position.set(t,e,n);let c=this.mat("#ffffff",{rough:.35});for(let u of[-1,1]){let f=new it(new Me(i,.28,8,56),c);f.rotation.y=Math.PI/2,f.position.x=u*3.2,l.add(f)}for(let u=0;u<4;u++)for(let f of[-1,1]){let d=new it(new Yt(.12,.12,i*2,6),this.mat(this.theme.hazard));d.rotation.x=u*Math.PI/4,d.position.x=f*3.2,l.add(d)}let h=new it(new Yt(.9,.9,7.4,14),this.mat(this.theme.hub));h.rotation.z=Math.PI/2,l.add(h),this.add(l,!0,!1);for(let u of[-1,1])for(let f of[-1,1])this.main.add(this.rbox(.7,e+1,.7,.2),t+u*4.4,(e-1)/2,n+f*i*.55,this.theme.hub,0,0,0,1,1,1);this.updaters.push(u=>{l.rotation.x=-(a*u)})}pirate(t,e,n,i,r,a=.1){let o=a+n;if(this.mover(t,a,e,10,5,c=>{let h=i*Math.sin(2*Math.PI*c/r);return[0,n*(1-Math.cos(h)),n*Math.sin(h)]},{h:.9,color:this.theme.hazard,stripes:!0,pad:!0}),this.headless)return;for(let c of[-1,1])this.main.add(this.rbox(.8,o+2,.8,.2),t+c*6.2,(o+2)/2-.5,e+2.2,this.theme.hub,0,0,.12*c),this.main.add(this.rbox(.8,o+2,.8,.2),t+c*6.2,(o+2)/2-.5,e-2.2,this.theme.hub,0,0,.12*c);this.main.add(this.rbox(14.5,.9,.9,.2),t,o+.4,e,this.theme.accent);let l=new ne;l.position.set(t,o,e);for(let c of[-1,1]){let h=new it(new Yt(.16,.16,n,8),this.mat("#ffffff"));h.position.set(c*4.2,-n/2,0),l.add(h)}this.add(l,!0,!1),this.updaters.push(c=>{l.rotation.x=-i*Math.sin(2*Math.PI*c/r)})}dropTower(t,e,n,i=13){let r=a=>{let o=(a%i+i)%i;if(o<1)return 0;if(o<5.5){let l=(o-1)/4.5;return n*(l*l*(3-2*l))}if(o<8.5)return n;if(o<9.4){let l=(o-8.5)/.9;return n*(1-l*l)}return 0};if(this.mover(t,.1,e,6,6,a=>[0,r(a),0],{h:.9,color:this.theme.accent,stripes:!0,pad:!0}),!this.headless){for(let a of[-1,1])for(let o of[-1,1])this.main.add(this.rbox(.7,n+5,.7,.2),t+a*3.6,(n+5)/2-.5,e+o*3.6,"#ffffff");this.main.add(this.rbox(8.2,.8,8.2,.2),t,n+4.6,e,this.theme.hazard),this.glow.add(new be(.7,10,8),t,n+5.6,e,"#ffffff")}}orbit(t,e,n,i,r,a){for(let o=0;o<r;o++){let l=o*Math.PI*2/r;this.mover(t+n,i,e,4.4,4.4,c=>{let h=a*c+l;return[n*Math.cos(h)-n,.7*Math.sin(c*1.3+l),n*Math.sin(h)]},{h:.8,color:this.theme.plat[o%this.theme.plat.length],pad:!0})}this.headless||(this.main.add(new Yt(.7,.9,i+5,10),t,(i+5)/2-.4,e,this.theme.hub),this.main.add(new Qe(2.4,2.2,14),t,i+6,e,this.theme.hazard),this.glow.add(new Me(n,.12,6,48),t,i-.5,e,"#ffffff",Math.PI/2))}cannon(t,e,n,i){if(this.disc(t,0,e,2.4,{bounce:n,push:i,color:this.theme.hazard}),this.headless)return;let r=i[1]<0?-1:1;this.main.add(new Yt(1,1.35,5.5,14),t,2.4,e-r*2.8,this.theme.hub,r*.93,0,0),this.main.add(new Me(1.1,.2,8,18),t,4.4,e-r*.5,this.theme.accent,Math.PI/2-r*.64,0,0)}checkpoint(t,e,n,i=14){let r={x:t,y:e,z:n,w:i,spawn:[t,e,n+1]};return this.checkpoints.push(r),this.headless||this.arch(t,e,n,i,this.theme.accent,!0),r}arch(t,e,n,i,r,a=!1){let o=a?5.2:8.5;this.main.add(this.rbox(.9,o,.9,.25),t-i/2,e+o/2,n,r),this.main.add(this.rbox(.9,o,.9,.25),t+i/2,e+o/2,n,r),this.main.add(this.rbox(i+.9,a?.9:1.6,a?.9:1.4,.25),t,e+o,n,r),this.glow.add(new be(.42,12,8),t-i/2,e+o+.8,n,"#ffffff"),this.glow.add(new be(.42,12,8),t+i/2,e+o+.8,n,"#ffffff")}update(t,e){this.time=t;for(let n of this.updaters)n(t,e);for(let n of this.discs)if(n.omega){let i=n.phase+n.omega*t;n.dTheta=n.first?0:i-n.theta,n.theta=i,n.first=!1}}carry(t){let e=t.ground;if(e){if(e.moving)t.x+=e.dx,t.y+=e.dy,t.z+=e.dz;else if(e.kind==="disc"&&e.omega){let n=t.x-e.cx,i=t.z-e.cz,r=e.dTheta,a=Math.cos(r),o=Math.sin(r);t.x=e.cx+n*a+i*o,t.z=e.cz-n*o+i*a,t.yawOff=(t.yawOff||0)+r}}}checkHazards(t,e){for(let n of this.hazards)if(n.test(t,e,this.hitOut))return this.hitOut;return null}finalize(){if(this.headless)return;let t=this.main.build(new he({vertexColors:!0,roughness:.4,metalness:.02}));t&&(t.castShadow=!0,t.receiveShadow=!0,this.group.add(t));let e=this.glow.build(new Ce({vertexColors:!0,toneMapped:!1}));e&&this.group.add(e)}resolveHorizontal(t){let e=de.R,n=de.H;for(let i of this.solids){if(!i.active||i.y1<=t.y+de.STEP||i.y0>=t.y+n||t.x<i.x0-e||t.x>i.x1+e||t.z<i.z0-e||t.z>i.z1+e)continue;let r=kn(t.x,i.x0,i.x1),a=kn(t.z,i.z0,i.z1),o=t.x-r,l=t.z-a,c=o*o+l*l;if(c>=e*e)continue;let h,u;if(c>1e-9){let d=Math.sqrt(c),g=e-d;h=o/d,u=l/d,t.x+=h*g,t.z+=u*g}else{let d=t.x-i.x0,g=i.x1-t.x,y=t.z-i.z0,p=i.z1-t.z,m=Math.min(d,g,y,p);m===d?(t.x=i.x0-e,h=-1,u=0):m===g?(t.x=i.x1+e,h=1,u=0):m===y?(t.z=i.z0-e,h=0,u=-1):(t.z=i.z1+e,h=0,u=1)}let f=t.vx*h+t.vz*u;if(f<0&&(t.vx-=f*h,t.vz-=f*u),i.moving){let d=i.dx*h+i.dz*u;d>0&&(t.vx+=h*Math.min(d/.016,8)*.3,t.vz+=u*Math.min(d/.016,8)*.3)}}for(let i of this.discs){if(t.y+n<=i.top-i.th||t.y>=i.top-de.STEP)continue;let r=t.x-i.cx,a=t.z-i.cz,o=Math.hypot(r,a),l=i.r+e;if(o<l&&o>1e-6){let c=r/o,h=a/o;t.x=i.cx+c*l,t.z=i.cz+h*l;let u=t.vx*c+t.vz*h;u<0&&(t.vx-=u*c,t.vz-=u*h)}}}findGround(t,e,n){let i=de.EDGE,r=e+de.STEP,a=n&&t.noSnap<=0?de.SNAP:0,o=null,l=-1e9;for(let c of this.solids){if(!c.active)continue;let h=c.y1;h>r||h<=l||t.x<c.x0-i||t.x>c.x1+i||t.z<c.z0-i||t.z>c.z1+i||(t.y<=h+1e-4||t.y<=h+a)&&(o=c,l=h)}for(let c of this.ramps){if(t.x<c.x0-i||t.x>c.x1+i||t.z>c.zN+.3||t.z<c.zF-.3)continue;let h=kn((c.zN-t.z)/(c.zN-c.zF),0,1),u=c.yN+(c.yF-c.yN)*h;u>r||u<l||(t.y<=u+1e-4||t.y<=u+a)&&(o=c,l=u)}for(let c of this.discs){let h=c.top;if(h>r||h<l)continue;let u=t.x-c.cx,f=t.z-c.cz,d=c.r+i*.8;u*u+f*f>d*d||(t.y<=h+1e-4||t.y<=h+a)&&(o=c,l=h)}return o?{s:o,top:l}:null}hitCeiling(t,e){for(let n of this.solids)if(n.active&&!(e+de.H>n.y0+.02||t.y+de.H<=n.y0)&&!(t.x<n.x0||t.x>n.x1||t.z<n.z0||t.z>n.z1))return n;return null}};function My(s,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d");if(s==="pk"){i.fillStyle="#01411c",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.fillRect(0,0,t*.25,e);let a=t*.625,o=e*.5,l=e*.3;i.beginPath(),i.arc(a,o,l,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.beginPath(),i.arc(a+l*.28,o-l*.12,l*.82,0,Math.PI*2),i.fillStyle="#01411c",i.fill();let c=a+l*.52,h=o-l*.34,u=l*.34,f=u*.4;i.beginPath();for(let d=0;d<10;d++){let g=-Math.PI/2+d*Math.PI/5+.35,y=d%2?f:u;i.lineTo(c+Math.cos(g)*y,h+Math.sin(g)*y)}i.closePath(),i.fillStyle="#ffffff",i.fill()}else i.fillStyle="#000000",i.fillRect(0,0,t,e/3),i.fillStyle="#ffffff",i.fillRect(0,e/3,t,e/3),i.fillStyle="#007a3d",i.fillRect(0,e*2/3,t,e/3),i.beginPath(),i.moveTo(0,0),i.lineTo(t*.33,e/2),i.lineTo(0,e),i.closePath(),i.fillStyle="#ce1126",i.fill();let r=new un(n);return r.colorSpace=Te,r.anisotropy=4,r}var yd={};function Dh(s){return yd[s]||(yd[s]=My(s,768,512))}function xa(s,t,e){let n=new ne,i=new it(new Ve(t,e),new Ce({map:Dh(s),toneMapped:!1,side:tn}));n.add(i);let r=new it(new De(t+1.2,e+1.2,.3),new he({color:"#f4f1e8",roughness:.5}));return r.position.z=-.2,n.add(r),n}var Sy='"Noto Nastaliq Urdu","Jameel Noori Nastaleeq","Alvi Nastaleeq","Geeza Pro","Segoe UI","Tahoma","Arial",sans-serif',by='"Lilita One","Fredoka One","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function Ey(s,t,e={}){let i=Math.round(1024/t),r=document.createElement("canvas");r.width=1024,r.height=i;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,1024,i);o.addColorStop(0,(e.bg||["#1b1464","#3a2d9e"])[0]),o.addColorStop(1,(e.bg||["#1b1464","#3a2d9e"])[1]),a.fillStyle=o,a.fillRect(0,0,1024,i),a.lineWidth=i*.05,a.strokeStyle=e.border||"#ffd23f",a.strokeRect(i*.05,i*.05,1024-i*.1,i-i*.1);let l=e.urdu?Sy:by,c=i*(e.urdu?.62:.5);a.textAlign="center",a.textBaseline="middle",e.urdu&&(a.direction="rtl"),a.font=`${c}px ${l}`;let h=a.measureText(s).width;h>1024*.86&&(c*=1024*.86/h,a.font=`${c}px ${l}`),a.lineJoin="round",a.lineWidth=c*.12,a.strokeStyle=e.stroke||"#000000",a.strokeText(s,1024/2,i*(e.urdu?.52:.54)),a.fillStyle=e.fg||"#ffd23f",a.fillText(s,1024/2,i*(e.urdu?.52:.54));let u=new un(r);return u.colorSpace=Te,u.anisotropy=4,u}function ar(s,t,e,n={}){let i=new ne;i.add(new it(new Ve(t,e),new Ce({map:Ey(s,t/e,n),toneMapped:!1,side:tn})));let r=new it(new De(t+.8,e+.8,.3),new he({color:n.frame||"#f4f1e8",roughness:.5}));return r.position.z=-.2,i.add(r),i}var wy={candy:{plat:["#ff7ab8","#ffb347","#5ad6c4","#a78bfa","#ffd84d"],pad:"#fff6fc",icePad:"#e8fbff",hazard:"#ff3b6b",hazard2:"#ffffff",hub:"#6b4de6",accent:"#ffdc3a",convBase:"#7a56e8",belt:"#ffe8f4"},canyon:{plat:["#e0793a","#f2b05e","#c4503d","#b8452f","#f5c77e"],pad:"#ffe6c2",icePad:"#fff",hazard:"#4b2a9e",hazard2:"#ffd23f",hub:"#4a2a1c",accent:"#ffd23f",convBase:"#5a2d1e",belt:"#ffb35e"},frost:{plat:["#d6efff","#9fd6ff","#bfe9ff","#8ec5f5","#f4fbff"],pad:"#ffffff",icePad:"#f4fcff",hazard:"#ff4d6d",hazard2:"#ffffff",hub:"#2f5d9e",accent:"#ff8a5b",convBase:"#3a6db0",belt:"#cfe9ff"},fair:{plat:["#ff5d73","#ffd23f","#3ec6e0","#8bd450","#ff9f43"],pad:"#fff7e0",icePad:"#fff",edgeGlow:null,hazard:"#ff2d55",hazard2:"#fff6d6",hub:"#5b2a86",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},fun:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#6a3fa0",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},neon:{plat:["#2a1d6e","#3a1785","#1f2f7a","#4c1a7c","#2f2273"],pad:"#4a36b0",icePad:"#4a36b0",edgeGlow:"#22f2ff",hazard:"#ff2bd6",hazard2:"#22f2ff",hub:"#0e0a2e",accent:"#7cff3d",convBase:"#18104a",belt:"#3a2a9a"}},Ty=["candy","canyon","frost","neon","fair","fun"],Ay=(s,t,e)=>{let n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)};function vd(s,t=!1,e=null){let n=Ty[s],i=wy[n],r=new Bl(i,t);r.arrowTexture=e,r.key=n,r.waterY=s===5?-40:-5.5,r.killY=s===5?-60:-9.5;let a={z:0,y:0},o={key:n,spawn:{x:0,y:0,z:1.5},signs:[],pads:[]};function l(M,I,C={}){var q,W,ft;let A=a.z-((q=C.gap)!=null?q:0),U=A-I/2,F=a.y+((W=C.dy)!=null?W:0),H=(ft=C.x)!=null?ft:0,z=r.platform(H,F,U,M,I,C);return a.z=A-I,a.y=F,{s:z,x:H,cz:U,near:A,far:A-I,top:F,w:M,d:I}}function c(M,I=3.5){return r.checkpoint(M.x,M.top,M.near-I,Math.min(M.w,16))}let h=()=>{a.z=6,a.y=0;let M=l(18,22);return o.startArch=M.near-8,M};function u(M,I,C,A,U={}){let F;for(let H=0;H<M;H++)F=l(I,I,{gap:C,x:Math.sin(H*2.1+.6)*A,...U});return F}function f(M,I,C=12,A={}){let U=r.ramp(0,a.z,a.y,a.z-M,a.y+I,C,A);return a.z-=M,a.y+=I,U}function d(M,I,C,A,U,F){let H=M/(I+1);for(let z=0;z<I;z++){let q=a.z-H*(z+1),W=z*Math.PI;r.mover(0,a.y,q,C,A,ft=>[U*Math.sin(ft*2*Math.PI/F+W),0,0])}a.z-=M}function g(M,I,C,A,U,F){let H=M/(I+1);for(let z=0;z<I;z++){let q=a.z-H*(z+1),W=z*Math.PI*.9;r.mover(0,a.y,q,C,A,ft=>[0,U*(.5-.5*Math.cos(ft*2*Math.PI/F+W)),0],{stripes:!0})}a.z-=M}function y(M,I,C){for(let A=0;A<M;A++){let U=a.z-4.5-A*I;r.disc(A%2?2:-2,a.y,U,2.5,{bounce:C,color:A%2?i.hazard:i.accent})}a.z-=9+(M-1)*I}function p(M,I,C,A,U){for(let F=0;F<M;F++){let H=a.z-A-I;r.disc(0,a.y,H,I,{omega:C[F%C.length],phase:F*1.3}),U&&r.bar(0,a.y+.12,H,I*1.9,{omega:-U*(F%2?-1:1),h:1,w:1,phase:F}),a.z=H-I}}function m(M,I,C,A=0){let U=l(I,M*C+8,{gap:A});for(let F=0;F<M;F++){let H=U.near-7-F*C,z=3,q=I/z;for(let W=0;W<z;W++){let ft=F*1.7+W*2.1,ot=3.4+W%2*.6;r.mover(U.x-I/2+q*(W+.5),U.top+3.4,H,q-.08,.9,Pt=>[0,2.9*Ay(.35,.62,.5+.5*Math.sin(Pt*2*Math.PI/ot+ft)),0],{h:3.4,stripes:!0,pad:!1,color:i.hazard2})}}return U}function S(M,I,C,A,U,F=0,H=1.5){let z=l(M,I,{gap:F});for(let q=0;q<C;q++)r.hammer(z.x,z.top+A+1.45,z.near-7-q*U,A,{amp:1.2,omega:H+.08*q,phase:q*1.9,span:M/2+.8,baseY:z.top,r:1.3});return z}function R(M,I,C,A=0){let U=l(M,I,{gap:A}),F=M/2;for(let H=0;H<C;H++){let z=U.near-7-H*((I-12)/Math.max(1,C-1)||8),q=5.5,W=F-q/2,ft=3.2+H%2*.5;r.mover(U.x-F+q/2,U.top+2.6,z,q,1.1,ot=>[W*(.5-.5*Math.cos(ot*2*Math.PI/ft+H))*2*(H%2,1),0,0],{h:2.6,stripes:!0,pad:!1,color:i.hazard2}),r.mover(U.x+F-q/2,U.top+2.6,z-3.2,q,1.1,ot=>[-W*(.5-.5*Math.cos(ot*2*Math.PI/(ft+.4)+H+1))*2,0,0],{h:2.6,stripes:!0,pad:!1,color:i.hazard2})}return U}function _(M,I,C,A=2.2,U=1.8){for(let F=0;F<M;F++){let H=a.z-A-C/2-F*(C+U);for(let z=0;z<I;z++){let q=(z-(I-1)/2)*(C+1.4);r.platform(q,a.y,H,C,C,{color:i.plat[(F+z)%i.plat.length]})}}a.z-=A+M*C+(M-1)*U}function b(M,I,C,A,U,F){let H=f(M,I,C),z=W=>H.yN+(H.yF-H.yN)*((H.zN-W)/(H.zN-H.zF));return[-C*.32,0,C*.32].forEach((W,ft)=>r.balls(W,H.zF,H.zN-2,z,F,A,U,[ft*U/3],{})),H}function E(M,I,C,A,U,F=1.4){let H=a.z-F,z=H-I/2,q=r.seesaw(0,a.y,z,M,I,C,A,U);return a.z=H-I,q}function D(M,I,C=0){a.z-=C,M.forEach((A,U)=>{let F=a.z-I/2-U*I;for(let H=0;H<A.length;H++)A[H]==="#"&&r.platform((H-(A.length-1)/2)*I,a.y,F,I,I,{color:i.plat[(U+H)%i.plat.length],pad:!0})}),a.z-=M.length*I}function v(M,I,C,A){r.bungee(0,a.z-I,a.y-C,5.5,A,a.y+15),a.z-=M}function T(M,I,C=0){let A=a.z-.9-3;[-4.7+C,4.7+C].forEach((F,H)=>{let z=H*Math.PI,q=ot=>{let Pt=.5-.5*Math.cos(2*Math.PI*ot/I+z);return[1.2*Math.sin(2*Math.PI*Pt),2.3*Math.sin(2*Math.PI*Pt),-M*Pt]};r.mover(F,a.y,A,6,6,ot=>q(ot),{h:1.3,stripes:!0,color:H?i.plat[2]:i.plat[0]});let W=[],ft=48;for(let ot=0;ot<=ft;ot++){let Pt=ot/ft,jt=[F+1.2*Math.sin(2*Math.PI*Pt),2.3*Math.sin(2*Math.PI*Pt),-M*Pt];W.push([jt[0],a.y-1.5+jt[1],A+jt[2]])}for(let ot of[-2.2,2.2])r.tube(W.map(Pt=>[Pt[0]+ot,Pt[1],Pt[2]]),.14,i.hazard);r.tube(W.map(ot=>[ot[0],ot[1]-.3,ot[2]]),.2,i.hub);for(let ot=0;ot<=ft;ot+=4){let Pt=W[ot];r.tube([[Pt[0],Pt[1]-.3,Pt[2]],[Pt[0],a.y-14,Pt[2]]],.22,i.hub)}}),a.z=A-M-3-.9}function L(){let M=l(22,34,{gap:0,color:i.plat[0]}),I=M.near-12;return r.arch(0,M.top,I,20,i.accent,!1),o.finishZ=I,o.finishY=M.top,o.finishPlat=M,M}if(s===0){h(),u(5,6,3,3.2);let M=l(16,10,{gap:3});c(M,3),M=l(18,34,{gap:2.5}),r.bar(M.x,M.top,M.near-10,18,{omega:1.3,h:1,w:1.1}),r.bar(M.x,M.top,M.near-24,18,{omega:-1.6,h:1,w:1.1,phase:1}),c(M,3.5),f(14,3,12),M=l(14,10),c(M,3),d(20,2,6.2,6.2,5,5.2),M=l(14,10),c(M,3),y(3,9,16.5),M=l(14,10),c(M,3),p(3,5,[.9,-1,1.1],2.6),M=l(16,10,{gap:2.6}),c(M,3),M=m(3,18,11,1),f(16,-3,12),L()}else if(s===1){h(),u(3,7,3,2.6);let M=l(18,10,{gap:3});c(M,3),M=S(18,36,3,8,11,2.5,1.5),M=l(14,8,{gap:3}),c(M,3),M=r.conveyor(0,a.y,a.z-15,14,30,5),r.bar(0,a.y,a.z-10,14,{omega:1.5,h:1}),r.bar(0,a.y,a.z-23,14,{omega:-1.8,h:1,phase:2}),a.z-=30,M=l(14,8),c(M,3),_(6,3,4.6),M=l(14,8,{gap:2.2}),c(M,3),b(40,5,14,11,6,1.5),M=l(22,28),r.bar(M.x,M.top,M.near-14,22,{omega:1.05,arms:2,h:1.1}),c(M,3),M=R(16,36,3,2.5),L()}else if(s===2){h();let M=l(10,40,{gap:2.5,ice:!0});r.bar(M.x,M.top,M.near-14,10,{omega:.9,h:.95,w:1}),r.bar(M.x,M.top,M.near-28,10,{omega:-1.1,h:.95,w:1,phase:1.5}),u(4,6.5,3.2,2.5,{ice:!0}),M=l(16,10,{gap:3.2,ice:!0}),c(M,3),p(3,6,[.8,-1,1.2],2.8,1.9),M=l(18,10,{gap:2.8}),c(M,3),b(36,6,14,12,5.4,1.4),M=l(16,10),c(M,3),g(18,2,6.2,6.2,3.2,4.4),M=l(14,10),c(M,3),r.disc(0,a.y,a.z-4,3,{bounce:22,color:i.hazard}),M=l(16,12,{gap:11,dy:4.5}),c(M,3),M=l(12,24,{ice:!0}),r.bar(M.x,M.top,M.near-12,12,{omega:1.4,h:1}),M=l(22,32,{ice:!0}),r.bar(M.x,M.top,M.near-16,22,{omega:-1.25,arms:2,h:1.1}),L()}else if(s===4){h();let M;for(let I=0;I<3;I++)E(9,12,1.4,3.4+I*.5,I*2.1),M=l(12,6,{gap:1.4});c(M,3),D(["#####","#.#.#","##.##",".#.#.",".##..","..#.#",".###.","#####"],3.2,1.2),r.checkpoint(0,a.y,a.z+1.6,14),f(30,8,12),M=l(12,12),c(M,3),v(20,9,9,32),M=l(16,14),c(M,3),f(30,-8,12),M=l(16,8),c(M,3),T(44,12),M=l(16,10),c(M,3),_(5,3,4.6,2.2,1.7),M=l(14,8,{gap:2.2}),c(M,3),p(3,6,[.9,-1.1,1],2.6,1.6),M=l(16,10,{gap:2.6}),c(M,3),M=l(22,30),r.bar(M.x,M.top,M.near-15,22,{omega:1.2,arms:2,h:1.1}),L()}else if(s===5){o.startArch=-2,a.z=-16,a.y=0,r.platform(0,0,-430/2,140,450,{h:2,color:"#92e66c",pad:!1});for(let J=4,N=0;J>-446;J-=14,N++)for(let Ct of[-1,1])r.platform(Ct*(140/2+1),22,J-7,2,14,{h:22,color:i.plat[(N+(Ct>0?2:0))%i.plat.length],pad:!1});if(r.platform(0,22,11,144,2,{h:22,color:i.plat[1],pad:!1}),r.platform(0,22,-441,144,2,{h:22,color:i.plat[3],pad:!1}),r.headless||r.main.add(r.rbox(12,.03,232,.01),0,.02,-128,"#f8ebb8"),!r.headless){let N="\u0639\u06A9\u0631\u0645\u06C1",Ct=(Nt,P,x,k=12)=>{Nt.position.set(P*69.7,k,x),Nt.rotation.y=P<0?Math.PI/2:-Math.PI/2,r.group.add(Nt)};Ct(xa("pk",30,20),-1,-50),Ct(xa("ps",30,20),1,-50),Ct(xa("ps",30,20),-1,-290),Ct(xa("pk",30,20),1,-290),Ct(ar("MADE BY HARIS",44,13,{bg:["#ff3d68","#ff9f1c"],fg:"#ffffff",stroke:"#6a1020",border:"#ffd23f"}),-1,-130),Ct(ar("MADE BY HARIS",44,13,{bg:["#4cc9f0","#3a2d9e"],fg:"#ffd23f",stroke:"#101040",border:"#ffffff"}),1,-170),Ct(ar(N,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),-1,-210),Ct(ar(N,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),1,-330)}let C=J=>r.platform(0,.04,J,8,14,{boost:1,color:"#ffd23f",pad:!1,h:.5});r.checkpoint(0,0,-70,16),C(-30),C(-52),[[-16,-26,3.2,20,0],[-22,-36,3.2,24,1],[-14,-46,3.4,28,2],[16,-28,3.2,22,3],[22,-38,3.4,26,4]].forEach(([J,N,Ct,Nt,P])=>r.disc(J,0,N,Ct,{bounce:Nt,color:i.plat[P]})),r.platform(31,9,-52,12,12,{color:i.plat[1]}),r.disc(20,0,-50,3.4,{bounce:29,color:i.hazard}),r.airpad(-26,-62,3.6,0,15),r.platform(-34,13,-62,8,8,{color:i.plat[2]}),r.orbit(-32,-18,6,1.6,3,.8),r.cannon(22,-14,16,[0,-17]),r.pirate(28,-70,16,.55,6.5),r.dropTower(-32,-82,14,13),r.checkpoint(0,0,-72,16),r.ramp(-14,-72,0,-98,10,8,{color:i.plat[3]}),r.platform(-28,10,-104,30,12,{color:i.plat[1]}),r.punch(-44,11.2,-104,1,0,8,{off:0}),r.punch(-12.2,11.2,-104,-1,0,8,{off:1.6}),[-38,-28,-18].forEach((J,N)=>r.ramp(J,-110,10,-152,0,7,{conv:[0,-14],ice:!0,color:i.plat[N*2%5],padColor:"#ffffff"})),r.platform(26,1.2,-90,14,14,{color:i.plat[4]}),r.punch(17.2,2.4,-90,1,0,7,{off:0}),r.punch(34.8,2.4,-90,-1,0,7,{off:1.6}),r.punch(26,2.4,-98.8,0,1,7,{off:.8}),r.punch(26,2.4,-81.2,0,-1,7,{off:2.4});for(let J=0;J<3;J++)r.seesaw(26,2,-112-J*16,9,12,1.4,3.4+J*.4,J*2.1);C(-118),r.checkpoint(0,0,-150,16),r.ramp(-30,-156,0,-182,8,10,{color:i.plat[2]}),r.platform(-30,8,-188,12,12,{color:i.plat[0]}),r.bungee(-30,-203,0,5.5,30,15),r.ferris(-30,11,-224,9,6,.4),r.ramp(26,-156,0,-164,3,14,{color:i.plat[3]}),a.z=-164,a.y=3,l(16,8,{x:26}),T(36,11,26),l(16,8,{x:26}),r.ramp(26,a.z,3,a.z-8,0,14,{color:i.plat[3]}),r.disc(0,.3,-180,8.5,{omega:.7,color:i.plat[0]}),r.headless||(r.main.add(new Yt(.5,.5,9,10),0,4.8,-180,"#ffffff"),r.main.add(new Qe(10,3.2,20),0,10.4,-180,i.hazard)),[-160,-172,-184].forEach((J,N)=>{r.disc(-14,.3,J,3.5,{omega:N%2?1.5:-1.5,color:i.plat[(N+1)%5]}),r.bar(-14,.4,J,6.4,{omega:N%2?-1.1:1.1,h:.9,w:.9})}),r.checkpoint(0,0,-232,16),r.checkpoint(0,0,-244,16);let A=56,U=7,F={x:0,z:-300},H=29,z=1.35,q=72,W=-27,ft=-420,ot=[],Pt=[{x:A,z:W,r:13,g:"p0"},{x:A,z:ft,r:13,g:"p1"}],jt=J=>{let N=J/q*Math.PI*2;return[F.x+H*Math.cos(N),F.z+H*z*Math.sin(N)]};for(let J=0;J<q;J++){let[N,Ct]=jt(J),[Nt,P]=jt(J+1);ot.push({ax:N,az:Ct,bx:Nt,bz:P,hw:U,g:"ring"})}ot.push({ax:A,az:W,bx:A,bz:ft,hw:U,g:"hwy"}),ot.push({ax:A,az:-300,bx:F.x+H,bz:-300,hw:U,g:"con"});let ee={segs:ot,plazas:Pt,boosts:[{x:A,z:-110,r:4},{x:A,z:-210,r:4},{x:A,z:-370,r:4},{x:-H,z:-300,r:4},{x:0,z:F.z-H*z,r:4}]};if(o.track=ee,o.cars=[[A-3.5,-33],[A+3.5,-33],[A-9.5,-22],[A+9.5,-22]].map(([J,N],Ct)=>({id:Ct,x:J,z:N,yaw:Math.PI})),!r.headless){let J=r.main,N="#3b3f4d",Ct=(x,k,X)=>{for(let Y of ot){if(Y.g===X)continue;let lt=Y.bx-Y.ax,pt=Y.bz-Y.az,et=lt*lt+pt*pt,nt=((x-Y.ax)*lt+(k-Y.az)*pt)/et;if(nt=Math.max(0,Math.min(1,nt)),Math.hypot(x-(Y.ax+lt*nt),k-(Y.az+pt*nt))<Y.hw-.4)return!0}for(let Y of Pt)if(Y.g!==X&&Math.hypot(x-Y.x,k-Y.z)<Y.r-.4)return!0;return!1},Nt=[];ot.forEach(x=>{let k=Math.hypot(x.bx-x.ax,x.bz-x.az),X=Math.max(1,Math.ceil(k/12));for(let Y=0;Y<X;Y++)Nt.push({ax:x.ax+(x.bx-x.ax)*Y/X,az:x.az+(x.bz-x.az)*Y/X,bx:x.ax+(x.bx-x.ax)*(Y+1)/X,bz:x.az+(x.bz-x.az)*(Y+1)/X,hw:x.hw,g:x.g})}),Nt.forEach((x,k)=>{let X=x.bx-x.ax,Y=x.bz-x.az,lt=Math.hypot(X,Y),pt=(x.ax+x.bx)/2,et=(x.az+x.bz)/2,nt=-Math.atan2(Y,X),vt=-Y/lt,Ot=X/lt;J.add(r.rbox(lt+.7,.08,x.hw*2,.02),pt,x.g==="hwy"?.053:x.g==="con"?.056:.05,et,N,0,nt,0);for(let yt of[-1,1]){let Mt=pt+vt*yt*(x.hw-.45),Bt=et+Ot*yt*(x.hw-.45);if(Ct(Mt,Bt,x.g)||J.add(r.rbox(lt+.05,.09,.9,.02),Mt,.1,Bt,(k+(yt>0?1:0))%2?"#ff3b3b":"#ffffff",0,nt,0),k%2===0){let qt=pt+vt*yt*(x.hw+1.3),Qt=et+Ot*yt*(x.hw+1.3);Ct(qt,Qt,x.g)||(J.add(new Yt(.75,.75,.7,10),qt,.35,Qt,"#23252e"),J.add(new Yt(.78,.78,.22,10),qt,.85,Qt,k/2%2?"#ff3b3b":"#ffffff"))}}k%2===0&&!Ct(pt,et,x.g)&&J.add(r.rbox(Math.min(lt,5)*.55,.06,.3,.02),pt,.1,et,"#ffffff",0,nt,0)});for(let x of Pt){J.add(new Yi(x.r,48),x.x,.054,x.z,N,-Math.PI/2,0,0);for(let k=0;k<40;k++){let X=k/40*Math.PI*2,Y=x.x+Math.cos(X)*(x.r-.45),lt=x.z+Math.sin(X)*(x.r-.45);Ct(Y,lt,x.g)||J.add(r.rbox(2,.09,.9,.02),Y,.1,lt,k%2?"#ff3b3b":"#ffffff",0,-X+Math.PI/2,0)}for(let k=0;k<20;k++){let X=k/20*Math.PI*2,Y=x.x+Math.cos(X)*(x.r+1.3),lt=x.z+Math.sin(X)*(x.r+1.3);Ct(Y,lt,x.g)||(J.add(new Yt(.75,.75,.7,10),Y,.35,lt,"#23252e"),J.add(new Yt(.78,.78,.22,10),Y,.85,lt,k%2?"#ff3b3b":"#ffffff"))}}for(let x of ee.boosts){J.add(r.rbox(10,.07,8,.02),x.x,.12,x.z,"#ff9f1c");for(let k=0;k<3;k++)J.add(new Qe(1.5,2,3),x.x,.16,x.z+2-k*2,"#fff3b0",-Math.PI/2*0,Math.PI,0)}for(let x=0;x<5;x++)J.add(r.rbox(26-x*2,1.1,2.4,.1),F.x,.55+x*1.1,F.z-2+x*-2.2,i.plat[x%5]);let P=["#0b6b3a","#2f7bff","#ffb21e","#a855f7"];o.cars.forEach((x,k)=>{J.add(r.rbox(7.5,.07,9.5,.03),x.x,.12,x.z,P[k]),J.add(r.rbox(6.9,.075,8.9,.03),x.x,.125,x.z,N)});for(let[x,k]of[[A-10.5,-14],[A+10.5,-14],[A-10.5,-38],[A+10.5,-38]])J.add(r.rbox(.8,6,.8,.2),x,3,k,i.plat[1]);J.add(r.rbox(23,.7,27,.2),A,6.3,W-0,i.hazard),J.add(r.rbox(21,.4,25,.2),A,6.75,W,"#ffffff");for(let x=0;x<10;x++)for(let k=0;k<2;k++)J.add(r.rbox(1.4,.07,1.4,.01),A-6.3+x*1.4,.13,-48-k*1.4,(x+k)%2?"#111111":"#ffffff");for(let x of[-1,1])J.add(r.rbox(.8,6.4,.8,.2),A+x*8.2,3.2,-48,i.plat[1]);J.add(r.rbox(17.6,1,1.2,.2),A,6.4,-48,i.hazard)}if(!r.headless){let J=(Ct,Nt,P,x,k,X,Y,lt)=>{let pt=ar(Ct,Nt,P,x);return pt.position.set(k,X,Y),pt.rotation.y=lt,r.group.add(pt),pt},N={bg:["#1f8de6","#14609f"],fg:"#ffffff",stroke:"#06223d",border:"#ffd23f"};J("CAR STATION",20,4.6,N,A-11.8,8.8,W,-Math.PI/2),J("CAR STATION",20,4.6,N,A+11.8,8.8,W,Math.PI/2);for(let[Ct,Nt]of[[16,-8],[34,-14]]){let P=new it(new Yt(.2,.2,4,8),new he({color:"#e8e8f0"}));P.position.set(Ct,2,Nt),r.group.add(P),J("CAR STATION \u2192",12,3.2,N,Ct,4.6,Nt,0)}J("LONG ROAD \u2192 DRIVE THE WHOLE MAP",22,3.2,{bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"},A,5.2,-60,0)}let Q=8,tt=7,_t=1.2,Vt=6,St=-356,Zt=20261017,ge=()=>(Zt=Zt*1664525+1013904223>>>0,Zt/4294967296),st=Array.from({length:tt},()=>Array(tt+1).fill(!0)),ht=Array.from({length:tt+1},()=>Array(tt).fill(!0)),dt=Array.from({length:tt},()=>Array(tt).fill(!1)),mt=[[0,3]];for(dt[0][3]=!0;mt.length;){let[J,N]=mt[mt.length-1],Ct=[];if(J+1<tt&&!dt[J+1][N]&&Ct.push([J+1,N]),J-1>=0&&!dt[J-1][N]&&Ct.push([J-1,N]),N-1>=0&&!dt[J][N-1]&&Ct.push([J,N-1]),N+1<tt&&!dt[J][N+1]&&Ct.push([J,N+1]),!Ct.length){mt.pop();continue}let[Nt,P]=Ct[Math.floor(ge()*Ct.length)];Nt===J+1?ht[J+1][N]=!1:Nt===J-1?ht[J][N]=!1:P===N-1?st[J][N]=!1:st[J][N+1]=!1,dt[Nt][P]=!0,mt.push([Nt,P])}ht[0][3]=!1,ht[tt][3]=!1;let xt=["#3fae4a","#58c25c","#2f9a44"];for(let J=0;J<tt;J++)for(let N=0;N<=tt;N++)st[J][N]&&r.platform((N-tt/2)*Q,Vt,St-(J+.5)*Q,_t,Q+_t,{h:Vt,color:xt[(J+N)%3],pad:!1});for(let J=0;J<=tt;J++)for(let N=0;N<tt;N++)ht[J][N]&&r.platform((N+.5-tt/2)*Q,Vt,St-J*Q,Q+_t,_t,{h:Vt,color:xt[(J+N+1)%3],pad:!1});let Wt=new Map,Gt=[[0,3]];for(Wt.set("0,3",null);Gt.length;){let[J,N]=Gt.shift(),Ct=[[J+1,N,ht[J+1][N]],[J-1,N,J>0?ht[J][N]:!0],[J,N-1,st[J][N]],[J,N+1,st[J][N+1]]];for(let[Nt,P,x]of Ct)!x&&Nt>=0&&Nt<tt&&P>=0&&P<tt&&!Wt.has(Nt+","+P)&&(Wt.set(Nt+","+P,[J,N]),Gt.push([Nt,P]))}let $t=[];for(let J=[tt-1,3];J;J=Wt.get(J[0]+","+J[1]))$t.unshift([(J[1]+.5-tt/2)*Q,St-(J[0]+.5)*Q]);o.mazePath=$t,r.checkpoint(0,0,St+2,16),a.z=St-tt*Q,a.y=.15,L()}else{h();for(let I=0;I<4;I++)l(2.8,12,{gap:3.3,x:I%2?2.6:-2.6});let M=l(18,12,{gap:3.3});c(M,3),_(6,3,4.4,2.2,1.9),M=l(16,10,{gap:2.2}),c(M,3),p(3,6.5,[1,-1.2,1.4],2.8,1.7),M=l(16,10,{gap:2.8}),c(M,3),M=r.conveyor(0,a.y,a.z-17,14,34,6),r.hammer(0,a.y+8.5,a.z-10,7,{amp:1.2,omega:1.7,phase:0,span:8,baseY:a.y,r:1.2}),r.hammer(0,a.y+8.5,a.z-24,7,{amp:1.2,omega:1.7,phase:2.2,span:8,baseY:a.y,r:1.2}),a.z-=34,M=l(16,10),c(M,3),M=R(18,38,3,0),c(M,3),d(18,2,6,6,5.5,4.4),M=l(14,8),c(M,3),g(20,2,6,6,3.4,4),M=l(14,10),c(M,3),r.disc(0,a.y,a.z-4,3,{bounce:24,color:i.hazard}),M=l(16,12,{gap:11.5,dy:5}),c(M,3),M=l(22,36),r.bar(M.x,M.top,M.near-18,22,{omega:1.25,arms:3,h:1.15}),L()}r.finalize();let O=o.finishPlat;return o.length=-o.finishZ,o.checkpoints=r.checkpoints,o.endZ=O.far,{world:r,info:o}}function Md(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!1,ground:null,coyote:0,jumpBuf:0,stun:0,dive:0,diveCd:0,noSnap:0,hitCd:0,boost:0,jumping:!1,noCtrl:0,landSpeed:0,inWater:!1,events:[],moveT:0,yawOff:0,swim:0,waterSurf:0}}var Ry=(s,t)=>{let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function zl(s,t,e,n){let i=t-s.vx,r=e-s.vz,a=Math.hypot(i,r);a<=n||a<1e-6?(s.vx=t,s.vz=e):(s.vx+=i/a*n,s.vz+=r/a*n)}function Sd(s,t,e,n){t.coyote=t.grounded?.11:t.coyote-e,t.jumpBuf=n.jumpPressed?.13:t.jumpBuf-e,t.stun>0&&(t.stun=Math.max(0,t.stun-e)),t.dive>0&&(t.dive=Math.max(0,t.dive-e)),t.diveCd>0&&(t.diveCd-=e),t.noSnap>0&&(t.noSnap-=e),t.hitCd>0&&(t.hitCd-=e),t.boost>0&&(t.boost-=e),t.noCtrl>0&&(t.noCtrl-=e);let i=0,r=0;for(let u of s.pools)if(t.x>u.x0&&t.x<u.x1&&t.z>u.z0&&t.z<u.z1){let f=u.surf-t.y;f>.12&&(i=Math.min(1,f/.9),r=u.surf);break}i>.3&&t.swim<=.3&&(t.events.push("splash"),t.waterSurf=r),t.swim=i;let a=t.stun<=0&&t.dive<=0&&t.noCtrl<=0,o=t.ground&&t.ground.ice,l=Math.abs(n.mx)+Math.abs(n.mz)>.01;if(n.divePressed&&t.diveCd<=0&&t.stun<=0&&t.dive<=0){let u=Math.sin(t.yaw),f=Math.cos(t.yaw);t.vx=u*15.5,t.vz=f*15.5,t.vy=t.grounded?7:Math.max(t.vy,3.5),t.grounded=!1,t.ground=null,t.noSnap=.2,t.dive=.85,t.diveCd=1.1,t.events.push("dive")}if(a){let u=de.RUN*(t.boost>0?1.45:1)*(t.speedMul||1)*(1-.34*i);if(l){let f=t.grounded?o?de.ICE_ACC:de.ACC:de.AIR;zl(t,n.mx*u,n.mz*u,f*e);let d=Math.atan2(n.mx,n.mz);t.yaw+=Ry(t.yaw,d)*(1-Math.exp(-20*e))}else t.grounded?zl(t,0,0,(o?de.ICE_DEC:de.DEC)*e):zl(t,0,0,de.AIR_DEC*e)}else{let u=t.grounded?o?1.2:9:.6;zl(t,0,0,u*e)}if(i>.4&&n.jumpPressed&&t.stun<=0?(t.vy=9,t.grounded=!1,t.ground=null,t.noSnap=.2,t.jumpBuf=0,t.events.push("stroke")):t.jumpBuf>0&&(t.grounded||t.coyote>0)&&t.stun<=0&&t.dive<=.45&&(t.vy=de.JUMP*(t.jumpMul||1),t.grounded=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.noSnap=.2,t.jumping=!0,t.events.push("jump")),t.jumping&&!n.jumpHeld&&t.vy>6&&(t.vy-=55*e),t.vy=Math.max(de.TERM,t.vy-de.G*e*(t.dive>0&&!t.grounded?.8:1)*(1-.92*i)),i>.05){let u=r-(n.jumpHeld?.3:.95);t.vy+=(u-t.y)*26*e*i,t.vy*=Math.exp(-2.4*e*i)}for(let u of s.zones){let f=t.x-u.x,d=t.z-u.z;if(f*f+d*d<u.r*u.r&&t.y>u.y0-.3&&t.y<u.y1){let g=Math.max(0,(t.y-u.y0)/(u.y1-u.y0)),y=u.vmax*(1-g*g);t.vy<y&&(t.vy=Math.min(y,t.vy+u.lift*e)),t.noSnap=Math.max(t.noSnap,.12),t.air||(t.air=!0,t.events.push("air"))}else t.air=!1}if(t.grounded&&t.ground){let u=t.ground.conv;u&&(t.x+=u[0]*e,t.z+=u[1]*e),t.ground.boost&&(t.boost=.55)}let c=t.grounded,h=t.y;if(t.x+=t.vx*e,t.z+=t.vz*e,s.resolveHorizontal(t),s.resolveHorizontal(t),t.y+=t.vy*e,t.grounded=!1,t.ground=null,t.vy<=0){let u=s.findGround(t,h,c);if(u){let f=-t.vy;t.y=u.top,t.vy=0,t.grounded=!0,t.ground=u.s,t.jumping=!1,u.s.bounce?(t.vy=u.s.bounce,t.grounded=!1,t.ground=null,t.noSnap=.25,t.jumping=!1,u.s.push&&(t.vx=u.s.push[0],t.vz=u.s.push[1],t.noCtrl=.9),u.s.squash!==void 0&&(u.s.squash=1),t.events.push("bounce")):!c&&f>6&&(t.landSpeed=f,t.events.push("land"))}}else{let u=s.hitCeiling(t,h);u&&(t.y=u.y0-de.H,t.vy=Math.min(0,t.vy*.2))}return t.y<s.waterY-.2&&!t.inWater&&(t.inWater=!0,t.events.push("splash")),t.y<s.killY&&t.events.push("fell"),t}function _a(s,t,e,n){return s.hitCd>0||s.shield>0?!1:(s.vx=t*n,s.vz=e*n,s.vy=Math.max(s.vy,6.5),s.grounded=!1,s.ground=null,s.noSnap=.25,s.stun=.95,s.dive=0,s.hitCd=.5,s.events.push("hit"),!0)}function Hl(s,t,e,n,i){s.x=t,s.y=e,s.z=n,s.vx=s.vy=s.vz=0,s.grounded=!1,s.ground=null,s.stun=0,s.dive=0,s.inWater=!1,s.hitCd=1,s.yaw=i!=null?i:Math.PI,s.noSnap=0,s.boost=0}var Cy=(s,t,e)=>s<t?t:s>e?e:s,fn=(s,t={})=>{var e,n,i;return new Zr({color:s,roughness:(e=t.r)!=null?e:.3,clearcoat:(n=t.cc)!=null?n:.65,clearcoatRoughness:.25,metalness:(i=t.m)!=null?i:0})},Be=(s,t=.55)=>new he({color:s,roughness:t}),Nh=(s,t,e)=>{let n=new it(new ks(s,t,6,16),e);return n.castShadow=!0,n},an=(s,t,e=16,n=12)=>{let i=new it(new be(s,e,n),t);return i.castShadow=!0,i},wd=Be("#ffffff",.25),Td=Be("#101018",.4);function Uh(s,t,e,n,i,r=.55){for(let a of[-1,1]){let o=an(i,wd);o.position.set(a*n,t,e);let l=an(i*r,Td);l.position.set(0,0,i*.62),o.add(l),s.add(o)}}function bd(s,t){let e=new Vs;for(let n=0;n<10;n++){let i=-Math.PI/2+n*Math.PI/5,r=n%2?t:s,a=Math.cos(i)*r,o=Math.sin(i)*r;n?e.lineTo(a,o):e.moveTo(a,o)}return e.closePath(),e}var Ed=[{name:"Bubbles",pivotY:.85},{name:"Ninja",pivotY:.95},{name:"Dino",pivotY:.8},{name:"Robo",pivotY:.9}],ss=class{constructor(t){this.id=t,this.group=new ne,this.pivot=new ne,this.inner=new ne,this.group.add(this.pivot),this.pivot.add(this.inner),this.pivot.position.y=Ed[t].pivotY,this.inner.position.y=-Ed[t].pivotY,this.body=new ne,this.inner.add(this.body),this.t=Math.random()*10,this.phase=0,this.squash=0,this.tumble=0,this.lean=0,this.dive=0,this.wag=[],this.height=1.7,[this.buildBubbles,this.buildNinja,this.buildDino,this.buildRobo][t].call(this),this.makeBat(),this.makeExtras(),this.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}limbs(t,e,n,i,r,a,o,l,c,h,u,f){let d=(g,y,p,m,S,R)=>{let _=new ne;_.position.set(g,y,0);let b=Nh(p,m,S);if(b.position.y=-m/2-p*.6,_.add(b),R){let E=R();_.add(E)}return this.inner.add(_),_};this.legL=d(-t,e,n,i,r,f?()=>{let g=an(n*1.35,f);return g.scale.set(1,.6,1.5),g.position.set(0,-i-n*.55,n*.7),g}:null),this.legR=d(t,e,n,i,r,f?()=>{let g=an(n*1.35,f);return g.scale.set(1,.6,1.5),g.position.set(0,-i-n*.55,n*.7),g}:null),this.armL=d(-a,o,l,c,h,u?()=>{let g=an(l*1.45,u);return g.position.y=-c-l*.9,g}:null),this.armR=d(a,o,l,c,h,u?()=>{let g=an(l*1.45,u);return g.position.y=-c-l*.9,g}:null),this.handY=-c-l*.9}makeExtras(){let t=this.height,e=new it(new be(t*.64,22,14),new Ce({color:"#7fd8ff",transparent:!0,opacity:.3,depthWrite:!1}));e.position.y=t*.52,e.visible=!1,this.group.add(e),this.shield=e;let n=fn("#ffd23f",{m:.6,r:.25}),i=new ne,r=new it(new Yt(.2,.17,.12,5),n);i.add(r);for(let a=0;a<5;a++){let o=a/5*Math.PI*2,l=new it(new Qe(.06,.2,6),n);l.position.set(Math.cos(o)*.17,.15,Math.sin(o)*.17),i.add(l)}i.position.y=t+.22,i.scale.setScalar(1.15),i.visible=!1,this.group.add(i),this.leadCrown=i}makeBat(){let t=fn("#d9a15a",{r:.45,cc:.3}),e=Be("#3a2412",.7),n=Be("#ff3b3b",.5),i=new ne,r=new it(new Yt(.035,.045,.5,10),e);r.position.y=-.18,i.add(r);let a=new it(new Yt(.05,.125,.8,14),t);a.position.y=-.7,i.add(a);let o=new it(new be(.125,12,8),t);o.scale.y=.5,o.position.y=-1.1,i.add(o);let l=new it(new Me(.075,.018,6,16),n);l.rotation.x=Math.PI/2,l.position.y=-.52,i.add(l);let c=new it(new be(.06,8,6),e);c.position.y=.07,i.add(c),i.position.set(0,this.handY,.02),i.visible=!1,i.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.armR.add(i),this.bat=i}buildBubbles(){let t=fn("#ff5fb4"),e=fn("#d63a8d"),n=Nh(.47,.34,t);n.position.y=.3+.64,this.body.add(n),this.limbs(.2,.42,.13,.12,t,.5,.95,.11,.22,t,Be("#ffffff",.3),Be("#7a2cff",.4)),Uh(this.body,1.2,.4,.17,.13);for(let o of[-1,1]){let l=an(.07,Be("#ff8fcf"));l.scale.set(1.4,.8,.5),l.position.set(o*.3,1.04,.4),this.body.add(l)}let i=new it(new Xs(bd(.17,.075),{depth:.04,bevelEnabled:!1}),fn("#ffd23f",{m:.3}));i.position.set(0,.8,.455),this.body.add(i);let r=new ne;r.position.set(0,1.55,.02);let a=new it(new Yt(.27,.3,.16,20),fn("#ffd23f",{m:.55,r:.2}));r.add(a);for(let o=0;o<5;o++){let l=o/5*Math.PI*2,c=new it(new Qe(.065,.22,8),fn("#ffd23f",{m:.55,r:.2}));c.position.set(Math.cos(l)*.23,.18,Math.sin(l)*.23),r.add(c);let h=an(.04,Be(o%2?"#35e0ff":"#ff3b6b",.2));h.position.set(Math.cos(l)*.23,.3,Math.sin(l)*.23),r.add(h)}this.body.add(r),this.crown=r,this.height=1.95}buildNinja(){let t=fn("#2f6bff"),e=fn("#14224f",{cc:.3}),n=Nh(.36,.76,t);n.position.y=.34+.74,this.body.add(n),this.limbs(.15,.55,.11,.3,e,.42,1.28,.09,.3,t,Be("#14224f"),Be("#0a0a14"));let i=new it(new Yt(.372,.372,.22,24,1,!0),Be("#0b0b17",.5));i.position.y=1.5,this.body.add(i);let r=new it(new be(.372,24,8,0,Math.PI*2,0,Math.PI/2),Be("#0b0b17",.5));r.scale.set(1,.96,1),r.position.y=1.46,this.body.add(r),Uh(this.body,1.5,.3,.14,.1,.65);let a=new it(new Me(.31,.05,8,28),Be("#ff2b4a",.4));a.rotation.x=Math.PI/2,a.position.y=1.64,this.body.add(a),this.tails=[];for(let h=0;h<2;h++){let u=new ne;u.position.set(h?.06:-.06,1.64,-.3);let f=new it(new De(.1,.05,.6),Be("#ff2b4a",.4));f.position.z=-.3,u.add(f),this.body.add(u),this.tails.push(u)}let o=new it(new Me(.37,.05,8,28),Be("#ffd23f",.4));o.rotation.x=Math.PI/2,o.position.y=.95,this.body.add(o);let l=new it(new Me(.31,.07,8,24),Be("#ffffff",.5));l.rotation.x=Math.PI/2,l.position.y=1.28,this.body.add(l);let c=new it(new Xs(bd(.13,.04),{depth:.03,bevelEnabled:!1}),fn("#d8e2ff",{m:.8,r:.2}));c.scale.set(1,1,1),c.position.set(0,.7,.34),this.body.add(c),this.height=1.95}buildDino(){let t=fn("#3ddc84"),e=fn("#c8ffd9"),n=fn("#ff9f1c"),i=an(.58,t,28,20);i.scale.set(1,1.08,.98),i.position.y=.3+.62,this.body.add(i);let r=an(.45,e,22,16);r.scale.set(.85,.95,.5),r.position.set(0,.85,.36),this.body.add(r),this.limbs(.24,.42,.15,.1,t,.52,.85,.09,.12,t,null,Be("#1f9d5b"));for(let c of[this.legL,this.legR])for(let h=-1;h<=1;h++){let u=new it(new Qe(.035,.12,6),wd);u.rotation.x=Math.PI/2,u.position.set(h*.07,-.22,.36),c.add(u)}let a=an(.3,t,18,12);a.scale.set(1,.7,.9),a.position.set(0,1,.5),this.body.add(a);for(let c of[-1,1]){let h=an(.03,Td,8,6);h.position.set(c*.08,1.08,.76),this.body.add(h)}Uh(this.body,1.42,.34,.22,.17,.5);for(let c of[-1,1]){let h=new it(new Qe(.06,.2,8),Be("#fff1c2",.4));h.position.set(c*.2,1.68,.18),h.rotation.z=-c*.25,this.body.add(h)}[.62,.8,1,1.2,1.38].forEach((c,h)=>{let u=[.13,.18,.21,.18,.13][h],f=new it(new Qe(u*.75,u*2,8),n),d=-Math.sqrt(Math.max(.02,.58*.58-(c-.92)*(c-.92)/1.17))-.02;f.position.set(0,c,d),f.rotation.x=-(1.15-h*.2),this.body.add(f)}),this.tail=new ne,this.tail.position.set(0,.55,-.45);let o=new it(new Qe(.22,.9,12),t);o.rotation.x=-Math.PI/2-.4,o.position.set(0,0,-.4),this.tail.add(o);let l=an(.07,n);l.position.set(0,-.2,-.78),this.tail.add(l),this.body.add(this.tail),this.height=1.85}buildRobo(){let t=fn("#ffc233"),e=fn("#b4bdcc",{m:.7,r:.25}),n=Be("#1c2233",.4),i=new Ce({color:"#4ff3ff"}),r=new it(new ks(.46,.4,6,16),t);r.scale.set(1,1,.92),r.position.y=.98,r.castShadow=!0,this.body.add(r);let a=new it(new De(.64,.3,.12),n);a.position.set(0,1.28,.4),a.rotation.x=-.12,this.body.add(a);for(let u of[-1,1]){let f=an(.075,i,10,8);f.scale.set(1,1.15,.5),f.position.set(u*.16,1.29,.47),this.body.add(f)}let o=new it(new De(.26,.05,.05),n);o.position.set(0,1.03,.45),this.body.add(o);let l=new it(new De(.34,.24,.06),e);l.position.set(0,.76,.43),l.rotation.x=-.05,this.body.add(l);for(let[u,f]of[[-.1,.82],[.1,.82],[-.1,.7],[.1,.7]]){let d=an(.025,n,6,4);d.position.set(u,f,.47),this.body.add(d)}for(let u of[-1,1]){let f=new it(new Yt(.1,.1,.16,12),e);f.rotation.z=Math.PI/2,f.position.set(u*.5,1.28,0),f.castShadow=!0,this.body.add(f)}let c=new it(new Yt(.025,.025,.3,8),e);c.position.set(0,1.78,0),this.body.add(c);let h=an(.075,Be("#ff3b3b",.3),12,8);h.position.set(0,1.97,0),this.body.add(h),this.limbs(.2,.45,.12,.14,e,.52,.98,.1,.22,e,Be("#ff4d4d",.4),Be("#2b3347",.4)),this.height=2}update(t,e){this.t+=t;let n=Cy(e.speed/10.5,0,1.3);e.grounded&&!e.stun&&(this.phase+=t*(5+n*11));let i=Math.sin(this.phase),r=n*.95;if(e.stun>0)this.tumble+=t*11,this.pivot.rotation.x=this.tumble,this.pivot.rotation.z=Math.sin(this.tumble*.5)*.4,this.legL.rotation.x=Math.sin(this.t*16)*1,this.legR.rotation.x=-Math.sin(this.t*16)*1,this.armL.rotation.z=-1.5+Math.sin(this.t*18)*.5,this.armR.rotation.z=1.5-Math.sin(this.t*18)*.5,this.armL.rotation.x=this.armR.rotation.x=0;else{let l=Math.round(this.tumble/(Math.PI*2))*Math.PI*2;this.tumble+=(l-this.tumble)*Math.min(1,t*14),this.pivot.rotation.z*=Math.max(0,1-t*12);let c=e.dive>0?1:0;this.dive+=(c-this.dive)*Math.min(1,t*16);let h=(e.grounded?n*.2:.05)+this.dive*1.35;if(this.lean+=(h-this.lean)*Math.min(1,t*14),this.pivot.rotation.x=this.tumble+this.lean,e.celebrate){let u=Math.abs(Math.sin(this.t*6))*.35;this.body.position.y=u,this.armL.rotation.z=-2.6+Math.sin(this.t*14)*.3,this.armR.rotation.z=2.6-Math.sin(this.t*14)*.3,this.armL.rotation.x=this.armR.rotation.x=0,this.legL.rotation.x=this.legR.rotation.x=0}else if(this.dive>.3)this.armL.rotation.x=this.armR.rotation.x=-2.9,this.armL.rotation.z=-.15,this.armR.rotation.z=.15,this.legL.rotation.x=this.legR.rotation.x=.2;else if(e.grounded){this.legL.rotation.x=i*r,this.legR.rotation.x=-i*r,this.armL.rotation.x=-i*r*.9,this.armR.rotation.x=i*r*.9;let u=Math.sin(this.t*2.2)*.04;this.armL.rotation.z=-.15-u-n*.2,this.armR.rotation.z=.15+u+n*.2}else{let u=e.vy>0;this.legL.rotation.x=u?.7:.35,this.legR.rotation.x=u?-.5:-.2,this.armL.rotation.z=-2.2,this.armR.rotation.z=2.2,this.armL.rotation.x=this.armR.rotation.x=0}e.celebrate||(this.body.position.y=e.grounded?Math.abs(i)*.07*n:0)}if(this.shield.visible=!!e.shield,e.shield){let l=1+Math.sin(this.t*8)*.04;this.shield.scale.set(l,l,l)}if(this.leadCrown.visible=!!e.leader,e.leader&&(this.leadCrown.rotation.y+=t*2.2,this.leadCrown.position.y=this.height+.22+Math.sin(this.t*3)*.05),this.bat.scale.setScalar(e.mega?1.6:1),e.swing>0&&!e.stun){let l=e.swing,c;if(l<.3)c=-2.95*(l/.3);else{let h=(l-.3)/.7;c=-2.95+2.75*(1-(1-h)*(1-h))}this.armR.rotation.x=c,this.armR.rotation.z=.12,this.pivot.rotation.x=this.tumble+this.lean+(l>.3?.28*Math.sin(Math.min(1,(l-.3)/.35)*Math.PI):0),this.bat.visible=!0}else this.bat.visible=!1;e.landed&&(this.squash=1),this.squash=Math.max(0,this.squash-t*5);let a=1-Math.sin(this.squash*Math.PI)*.22*this.squash;!e.grounded&&e.vy>2&&!e.stun&&(a=1.1),!e.grounded&&e.vy<-8&&(a=1.06);let o=1+(1-a)*.55;this.body.scale.set(o,a,o),this.tails&&this.tails.forEach((l,c)=>{l.rotation.x=-.15-n*.5+Math.sin(this.t*9+c)*.12*(.4+n),l.rotation.y=(c?1:-1)*(.15+Math.sin(this.t*7+c*2)*.12)}),this.tail&&(this.tail.rotation.y=Math.sin(this.t*(6+n*6))*(.35+n*.25)),this.crown&&(this.crown.rotation.z=Math.sin(this.t*5)*.05*n)}dispose(){this.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:[e]).forEach(n=>n.dispose())}})}};function kl(s,t="#ffffff"){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");n.font='700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif',n.textAlign="center",n.textBaseline="middle";let i=Math.min(480,n.measureText(s).width+56);n.fillStyle="rgba(12,10,36,0.72)";let r=(512-i)/2,a=14,o=100,l=50;n.beginPath(),n.moveTo(r+l,a),n.arcTo(r+i,a,r+i,a+o,l),n.arcTo(r+i,a+o,r,a+o,l),n.arcTo(r,a+o,r,a,l),n.arcTo(r,a,r+i,a,l),n.closePath(),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.lineWidth=8,n.strokeStyle="rgba(0,0,0,0.65)",n.strokeText(s,256,68,440),n.fillStyle="#ffffff",n.fillText(s,256,68,440);let c=new un(e);c.colorSpace=Te,c.anisotropy=4;let h=new Nr(new Bs({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return h.renderOrder=999,h.scale.set(2.8,.7,1),h.userData.base=.7,h}var Ma={candy:{top:"#3fb0ff",horizon:"#ffd6ee",bottom:"#ffe9f6",fog:"#ffd9ef",fogNear:90,fogFar:520,sun:"#fff1cf",sunPos:[-60,90,-40],sunI:2.5,hemiSky:"#d6eeff",hemiGround:"#ffc2e6",hemiI:1,exp:1.05,waterA:"#2ec8ff",waterB:"#168ae0",water:"water",env:.55},canyon:{top:"#47207a",horizon:"#ff9a52",bottom:"#ffcf8a",fog:"#ffa769",fogNear:80,fogFar:460,sun:"#ffb06b",sunPos:[80,45,-70],sunI:2.7,hemiSky:"#ffd0a6",hemiGround:"#a8402f",hemiI:.9,exp:1,waterA:"#ff4a12",waterB:"#ffc21a",water:"lava",env:.45},frost:{top:"#4aa6ff",horizon:"#e4f4ff",bottom:"#ffffff",fog:"#d8ecff",fogNear:80,fogFar:480,sun:"#fff6ea",sunPos:[50,80,-40],sunI:2.4,hemiSky:"#dff1ff",hemiGround:"#9fc9ee",hemiI:1.1,exp:1.08,waterA:"#2a8fd6",waterB:"#0b4d8c",water:"water",env:.65},fair:{top:"#2f8bff",horizon:"#fff0c2",bottom:"#ffe9b0",fog:"#ffe6bd",fogNear:90,fogFar:520,sun:"#fff0cf",sunPos:[-50,85,-50],sunI:2.6,hemiSky:"#cfe6ff",hemiGround:"#ffd9a0",hemiI:1,exp:1.05,waterA:"#2fe0c8",waterB:"#0e8fb0",water:"water",env:.55},fun:{top:"#35a7ff",horizon:"#e8fbff",bottom:"#fff6d8",fog:"#d9f4ff",fogNear:120,fogFar:640,sun:"#fff4d6",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#d4ecff",hemiGround:"#bfe8a0",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.6},neon:{top:"#04010d",horizon:"#3b0c70",bottom:"#12033a",fog:"#1d0750",fogNear:60,fogFar:380,sun:"#a58bff",sunPos:[-40,70,-30],sunI:1.5,hemiSky:"#6c4cff",hemiGround:"#1a0a3a",hemiI:.95,exp:1.15,waterA:"#2b0b5e",waterB:"#d11cff",water:"grid",env:.5}},Fh=null;function Ad(){return Fh||(Fh=(async()=>{try{await Promise.race([Promise.all([document.fonts.load('400 100px "Lilita One"'),document.fonts.load('400 100px "Fredoka One"'),document.fonts.load('400 100px "Noto Nastaliq Urdu"',"\u0639\u06A9\u0631\u0645\u06C1")]),new Promise(s=>setTimeout(s,2500))])}catch{}})()),Fh}var Gl='"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function Vl(s="HARIS",t=null,e=["#fff7a8","#ffc83d","#ff7a1a"]){let n=document.createElement("canvas");n.width=1024,n.height=t?512:400;let i=n.getContext("2d");i.textAlign="center",i.textBaseline="middle";let r=300;for(i.font=`${r}px ${Gl}`;i.measureText(s).width>900&&r>80;)r-=10,i.font=`${r}px ${Gl}`;let a=t?220:200;i.lineJoin="round",i.shadowColor="rgba(255,190,60,0.9)",i.shadowBlur=40,i.lineWidth=46,i.strokeStyle="rgba(255,170,40,0.35)",i.strokeText(s,512,a),i.shadowBlur=0,i.lineWidth=40,i.strokeStyle="#1b0f4a",i.strokeText(s,512,a),i.lineWidth=18,i.strokeStyle="#ffffff",i.strokeText(s,512,a),i.fillStyle="#b0420b";for(let c=14;c>0;c-=2)i.fillText(s,512,a+c);let o=i.createLinearGradient(0,a-r/2,0,a+r/2);o.addColorStop(0,e[0]),o.addColorStop(.55,e[1]),o.addColorStop(1,e[2]),i.fillStyle=o,i.fillText(s,512,a),i.globalCompositeOperation="source-atop",i.fillStyle="rgba(255,255,255,0.35)",i.fillRect(0,a-r/2,1024,r*.18),i.globalCompositeOperation="source-over",t&&(i.font=`90px ${Gl}`,i.lineWidth=16,i.strokeStyle="#1b0f4a",i.strokeText(t,512,440),i.fillStyle="#ffffff",i.fillText(t,512,440));let l=new un(n);return l.colorSpace=Te,l.anisotropy=8,l}function Iy(s,t="#ff3b6b",e="#ffffff"){let n=document.createElement("canvas");n.width=1024,n.height=256;let i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,1024,256);let r=32;i.fillStyle=e;for(let o=0;o<1024;o+=r)for(let l=0;l<256;l+=r)(o+l)/r%2===0&&(l<r||l>=256-r)&&i.fillRect(o,l,r,r);i.font=`150px ${Gl}`,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=26,i.strokeStyle="#1b0f4a",i.strokeText(s,512,132),i.fillStyle="#fff",i.fillText(s,512,132);let a=new un(n);return a.colorSpace=Te,a.anisotropy=8,a}function Rd(){let s=document.createElement("canvas");s.width=128,s.height=128;let t=s.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="rgba(0,0,0,0.28)",t.beginPath(),t.moveTo(64,14),t.lineTo(108,70),t.lineTo(80,70),t.lineTo(80,112),t.lineTo(48,112),t.lineTo(48,70),t.lineTo(20,70),t.closePath(),t.fill();let e=new un(s);return e.colorSpace=Te,e.anisotropy=4,e}function Py(s="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,s),i.addColorStop(1,t),n.fillStyle=i,n.fillRect(0,0,128,128);let r=new un(e);return r.colorSpace=Te,r}function Oh(s){let t=new B(...s.sunPos).normalize(),e=new We({side:Ye,depthWrite:!1,fog:!1,uniforms:{top:{value:new Dt(s.top)},horizon:{value:new Dt(s.horizon)},bottom:{value:new Dt(s.bottom)},sunDir:{value:t},sunColor:{value:new Dt(s.sun)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        gl_FragColor = vec4(c, 1.0); }`}),n=new it(new be(900,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function Bh(s,t){let e=new Dt(s.fog),n=s.water==="lava"?1:s.water==="grid"?2:0,i=new We({uniforms:{time:{value:0},cA:{value:new Dt(s.waterA)},cB:{value:new Dt(s.waterB)},fogC:{value:e},fogN:{value:s.fogNear},fogF:{value:s.fogFar},kind:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
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
      }`}),r=new it(new Ve(1600,1600),i);return r.rotation.x=-Math.PI/2,r.position.y=t,r.frustumCulled=!1,r.renderOrder=-5,r.userData.mat=i,r}var ya=class{constructor(t=500){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.s0=new Float32Array(t);let e=new Re;e.setAttribute("position",new Ae(this.pos,3).setUsage(Qs)),e.setAttribute("color",new Ae(this.col,3).setUsage(Qs)),e.setAttribute("size",new Ae(this.size,1).setUsage(Qs)),e.setAttribute("alpha",new Ae(this.alpha,1).setUsage(Qs)),e.setDrawRange(0,0),this.mat=new We({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }"}),this.points=new qi(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=e,this._c=new Dt}emit(t,e,n,i,r={}){var o,l,c,h,u,f,d,g;let a=this._c.set((o=r.color)!=null?o:"#ffffff");for(let y=0;y<i;y++){let p=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),m=Math.random()*Math.PI*2,S=((l=r.speed)!=null?l:3)*(.3+Math.random()*.9),R=(c=r.up)!=null?c:3,_=p*3;this.pos[_]=t+(Math.random()-.5)*((h=r.spread)!=null?h:.3),this.pos[_+1]=e,this.pos[_+2]=n+(Math.random()-.5)*((u=r.spread)!=null?u:.3),this.vel[_]=Math.cos(m)*S,this.vel[_+1]=R*(.4+Math.random()*.9),this.vel[_+2]=Math.sin(m)*S;let b=r.rainbow?this._c.setHSL(Math.random(),.9,.6):a;this.col[_]=b.r,this.col[_+1]=b.g,this.col[_+2]=b.b,this.life[p]=this.maxLife[p]=((f=r.life)!=null?f:.6)*(.6+Math.random()*.8),this.s0[p]=((d=r.size)!=null?d:.35)*(.6+Math.random()*.8),this.size[p]=this.s0[p],this.grav[p]=(g=r.gravity)!=null?g:9,this.alpha[p]=1}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.alpha[e]=0,this.size[e]=0;continue}this.life[e]-=t;let n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let i=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=Math.min(1,i*1.6),this.size[e]=this.s0[e]*(.4+.6*i)}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setScale(t){this.mat.uniforms.scale.value=t*.9}},va=class{constructor(t,e=350){this.kind=t,this.n=e;let n=new Float32Array(e*3);this.seed=new Float32Array(e*3);for(let a=0;a<e*3;a++)this.seed[a]=Math.random();let i=new Re;i.setAttribute("position",new Ae(n,3));let r={frost:"#ffffff",canyon:"#ffb347",candy:"#fff6a8",neon:"#7cf9ff",fair:"#ffd6f0",fun:"#fff6a8"};this.mat=new Xi({color:r[t]||"#fff",size:t==="frost"?.28:.22,transparent:!0,opacity:.85,depthWrite:!1,map:Py(),blending:t==="neon"||t==="canyon"?Ki:Ri}),this.points=new qi(i,this.mat),this.points.frustumCulled=!1,this.pos=n}update(t,e){let r=this.kind,a=this.pos,o=this.seed;for(let l=0;l<this.n;l++){let c=l*3,h=o[c]*70,u=o[c+1]*36,f=o[c+2]*70;r==="frost"?(u=36-(t*(2+o[c]*2)+o[c+1]*36)%36,h+=Math.sin(t*.7+l)*1.2):r==="canyon"?(u=(t*(1.5+o[c]*2)+o[c+1]*36)%36,h+=Math.sin(t*.9+l)*.8):(u+=Math.sin(t*.6+l)*.8,h+=Math.cos(t*.4+l*1.3)*.8),a[c]=e.x+((h-e.x)%70+70)%70-70/2,a[c+1]=e.y-36/2+u,a[c+2]=e.z+((f-e.z)%70+70)%70-70/2}this.points.geometry.attributes.position.needsUpdate=!0}};function Ly(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Cd(s,t,e,n){let i=Ma[t],r=new ne;r.name="scenery";let a=Ly(t.length*9973+17),o=new is,l=new is,c=e.length,h=-c-40,u=t==="fun"?0:n.waterY,f=t==="fun"?82:0,d=[],g=(M,I)=>(a()<.5?-1:1)*(M+f+a()*(I-M)),y=M=>M[Math.floor(a()*M.length)],p=(M,I=16,C=10)=>new be(M,I,C),m=(M,I,C,A=14)=>new Yt(M,I,C,A),S=(M,I,C=14)=>new Qe(M,I,C),R={candy:["#ff9bd0","#7be8c8","#ffd479","#b9a4ff"],canyon:["#d9743b","#e8a15a","#b9472f"],frost:["#e5f4ff","#a8d8ff","#ffffff"],neon:["#2d1c78","#4a1a86","#1f2f8a"],fair:["#8bd450","#ffd23f","#ff9bd0","#7be8ff"],fun:["#8bd450","#ffd23f","#ff9bd0","#7be8ff"]}[t];for(let M=0;M<26;M++){let I=60-a()*(c+160),C=g(38,150),A=-4+a()*40,U=5+a()*14,F=y(R);o.add(m(U,U*.9,U*.25,20),C,A,I,F),o.add(S(U*.9,U*1.3,20),C,A-U*.25/2-U*.65,I,t==="frost"?"#9fc8ee":t==="neon"?"#241a60":"#8a5a3a",Math.PI),t==="neon"&&l.add(new Me(U,.18,6,32),C,A+U*.13,I,y(["#22f2ff","#ff2bd6"]),Math.PI/2)}if(t==="candy"){for(let I=0;I<70;I++){let C=70-a()*(c+200),A=g(26,130),U=1+a()*2.2,F=a(),H=u-1;if(F<.35){let z=y(["#ff5fa8","#ffb347","#8f7bff","#3fd6c2","#ffd84d"]);o.add(m(.45*U,.45*U,12*U,8),A,H+6*U,C,"#fff3f8"),o.add(p(3.4*U,20,14),A,H+13.5*U,C,z,0,0,0,1,1,.45),o.add(new Me(2.2*U,.35*U,8,24),A,H+13.5*U,C+1.45*U,"#ffffff"),o.add(new Me(1.1*U,.3*U,8,20),A,H+13.5*U,C+1.5*U,"#ffffff")}else F<.65?(o.add(p(4*U,18,12),A,H,C,y(["#ff6b9e","#6be8c4","#ffd24d","#a58bff"]),0,0,0,1,.85,1),o.add(m(.9*U,1.3*U,.6*U,10),A,H+3.2*U,C,"#ffffff")):F<.85?(o.add(m(2.8*U,2*U,3.2*U,14),A,H+1.6*U,C,y(["#ffd29b","#c9a0ff","#8be0ff"])),o.add(p(3.1*U,16,10),A,H+4*U,C,"#ff9ccb",0,0,0,1,.8,1),o.add(p(.7*U,10,8),A,H+6.1*U,C,"#ff2d55")):(o.add(new Me(4.2*U,1.9*U,12,28),A,H+2*U,C,"#ffbd6b",Math.PI/2-.4),o.add(new Me(4.2*U,1.9*U,12,28),A,H+2.5*U,C,y(["#ff7ab8","#7be8ff"]),Math.PI/2-.4,0,0,1.03,1.03,.6))}let M=["#ff3b3b","#ff9a3b","#ffe03b","#4ddc6a","#3bb0ff","#9b6bff"];[-.12,-.5,-.88].forEach(I=>M.forEach((C,A)=>o.add(new Me(46-A*1.6,.9,6,48,Math.PI),0,u-2,I*c-8,C,0,0,0,1,1.4,1)));for(let I=0;I<22;I++){let C=new ne,A=y(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),U=new it(p(1.6,16,12),new he({color:A,roughness:.25}));U.scale.y=1.2;let F=new it(S(.25,.4,8),new he({color:A}));F.position.y=-1.9,F.rotation.x=Math.PI;let H=new it(m(.03,.03,4,4),new Ce({color:"#ffffff"}));H.position.y=-4,C.add(U,F,H),C.position.set(g(14,70),8+a()*30,40-a()*(c+120)),C.userData.ph=a()*6,r.add(C),d.push(z=>{C.position.y+=Math.sin(z*.8+C.userData.ph)*.004,C.rotation.z=Math.sin(z*.6+C.userData.ph)*.08})}}else if(t==="canyon"){for(let M=0;M<60;M++){let I=70-a()*(c+200),C=g(28,150),A=1+a()*2.4,U=a(),F=u-2;if(U<.55){let H=3+Math.floor(a()*3);for(let z=0;z<H;z++)o.add(m(5*A-z*.35*A,5.3*A-z*.3*A,4*A,12),C,F+2*A+z*4*A,I,["#b8452f","#d9743b","#e8a15a","#c4503d","#f0b46a"][(z+M)%5])}else U<.85?o.add(S(2.4*A,16*A,7),C,F+8*A,I,y(["#9c3f2c","#c4573a","#7a2f3d"])):o.add(new Me(6*A,2*A,8,20,Math.PI),C,F,I,"#d2693b",0,a()*3)}l.add(p(34,24,16),120,52,-c-140,"#ffd27a"),l.add(p(34,24,16),-150,40,-60,"#ffb35e")}else if(t==="frost")for(let M=0;M<80;M++){let I=70-a()*(c+200),C=g(26,150),A=1+a()*2.2,U=a(),F=u-2;if(U<.3)o.add(S(14*A,30*A,8),C,F+15*A,I,"#bcd8f2"),o.add(S(6.5*A,12*A,8),C,F+24*A,I,"#ffffff");else if(U<.8){for(let H=0;H<4;H++)o.add(S(3.4*A-H*.65*A,4.4*A,9),C,F+(3+H*2.6)*A,I,H%2?"#2f7d6f":"#3a9684"),o.add(S(2.4*A-H*.5*A,2*A,9),C,F+(4.4+H*2.6)*A,I,"#ffffff");o.add(m(.5*A,.6*A,3*A,6),C,F+1.4*A,I,"#6b4a34")}else l.add(new qs(3*A,0),C,F+5*A+a()*10,I,"#bfe8ff",0,a()*3,0,.7,1.8,.7)}else if(t==="fair"||t==="fun"){for(let M=0;M<46;M++){let I=70-a()*(c+200),C=g(26,140),A=1+a()*1.8,U=a(),F=u-1;if(U<.4){let H=y(["#ff4d6d","#3ec6e0","#ffd23f","#8b5cf6"]);o.add(m(6*A,6*A,5*A,16),C,F+2.5*A,I,H),o.add(S(6.8*A,5*A,16),C,F+7.5*A,I,"#ffffff"),o.add(S(1.1*A,3*A,8),C,F+11*A,I,H),o.add(m(.12*A,.12*A,4*A,4),C,F+14*A,I,"#ffffff")}else if(U<.7){for(let H=0;H<8;H++)o.add(m(2.2*A,2.2*A,2.4*A,12),C,F+(1.2+H*2.4)*A,I,H%2?"#ffffff":"#ff4d6d");o.add(S(3*A,4*A,12),C,F+21*A,I,"#ffd23f")}else o.add(m(.3*A,.4*A,9*A,6),C,F+4.5*A,I,"#5b2a86"),l.add(p(1.1*A,10,8),C,F+9.6*A,I,y(["#ffe27a","#ff9ccb","#9cf0ff"]))}[[-120,-c*.25],[140,-c*.62],[-130,-c*.9]].forEach(([M,I],C)=>{let A=new ne;A.position.set(M,u+34,I),A.rotation.y=C%2?.5:-.5;let U=new it(new Me(30,.9,8,48),new he({color:"#ffffff",roughness:.4}));A.add(U);let F=new he({color:"#ff4d6d"});for(let q=0;q<8;q++){let W=new it(m(.35,.35,60,5),F);W.rotation.z=q*Math.PI/8,A.add(W)}let H=[];for(let q=0;q<12;q++){let W=q/12*Math.PI*2,ft=new it(new De(4.4,3.4,3.4),new he({color:y(["#ffd23f","#3ec6e0","#ff4d6d","#8bd450"]),roughness:.35}));ft.position.set(Math.cos(W)*30,Math.sin(W)*30-2,0),A.add(ft),H.push([ft,W])}let z=new he({color:"#5b2a86"});for(let q of[-1,1]){let W=new it(m(1.2,1.6,44,6),z);W.position.set(q*11,-20,0),W.rotation.z=q*-.28,A.add(W)}r.add(A),d.push(q=>{let W=q*.12*(C%2?-1:1);U.rotation.z=W,A.children.forEach(ft=>{var ot,Pt;ft.geometry&&ft.geometry.type==="CylinderGeometry"&&ft.position.x===0&&ft.position.y===0&&(ft.rotation.z=((Pt=(ot=ft.userData).b)!=null?Pt:ot.b=ft.rotation.z)+W)}),H.forEach(([ft,ot])=>ft.position.set(Math.cos(ot+W)*30,Math.sin(ot+W)*30-2,0))})});for(let M=0;M<26;M++){let I=new ne,C=y(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),A=new it(p(1.6,16,12),new he({color:C,roughness:.25}));A.scale.y=1.2;let U=new it(m(.03,.03,4,4),new Ce({color:"#ffffff"}));U.position.y=-3,I.add(A,U),I.position.set(g(14,80),8+a()*34,40-a()*(c+120)),I.userData.ph=a()*6,r.add(I),d.push(F=>{I.position.y+=Math.sin(F*.8+I.userData.ph)*.004,I.rotation.z=Math.sin(F*.6+I.userData.ph)*.08})}}else{for(let U=0;U<70;U++){let F=70-a()*(c+200),H=g(24,140),z=1+a()*2.2,q=a(),W=y(["#22f2ff","#ff2bd6","#7cff3d","#ffe03b"]);q<.35?(o.add(m(1.4*z,1.8*z,24*z,6),H,u+10*z,F,"#190f4d"),l.add(m(1.5*z,1.5*z,.6,6),H,u+6*z,F,W),l.add(m(1.5*z,1.5*z,.6,6),H,u+14*z,F,W)):q<.7?l.add(new qs(2.4*z,0),H,6+a()*40,F,W,a()*3,a()*3,0):l.add(new Me(5*z,.35,6,40),H,10+a()*30,F,W,a()*3,a()*3,0)}o.add(p(60,32,24),-170,90,-c*.55,"#3a1a8c"),l.add(new Me(95,1.5,6,80),-170,90,-c*.55,"#ff2bd6",Math.PI/2-.35,0,.2),l.add(p(26,20,16),200,120,-c*.2,"#ff7ad9");let M=900,I=new Float32Array(M*3);for(let U=0;U<M;U++){let F=a()*Math.PI*2,H=Math.acos(a()*1.6-.2),z=800;I[U*3]=Math.sin(H)*Math.cos(F)*z,I[U*3+1]=Math.cos(H)*z,I[U*3+2]=Math.sin(H)*Math.sin(F)*z}let C=new Re;C.setAttribute("position",new Ae(I,3));let A=new qi(C,new Xi({color:"#ffffff",size:2.2,sizeAttenuation:!1,fog:!1,depthWrite:!1}));A.frustumCulled=!1,A.renderOrder=-9,r.add(A),r.userData.stars=A}let _=o.build(new he({vertexColors:!0,roughness:.55}));_&&(_.castShadow=!1,_.receiveShadow=!1,r.add(_));let b=l.build(new Ce({vertexColors:!0,toneMapped:!1}));b&&r.add(b);let E=new ne;E.name="brand",r.add(E);let D=Vl("HARIS","MADE THIS GAME"),v=e.finishPlat,T=M=>new he({color:M,roughness:.4}),L=(M,I,C,A,U)=>{let F=new ne;F.position.set(0,I,M);let H=T("#2b1c6b");for(let W of[-1,1]){let ft=new it(new De(1.2,9,1.2),H);ft.position.set(W*C/2,4.5,0),ft.castShadow=!0,F.add(ft)}let z=new it(new Ve(C,C/4),new Ce({map:Iy(A,U),toneMapped:!1,side:tn}));z.position.set(0,8.6,.05),F.add(z);let q=new it(new De(C+1.2,.6,1.2),H);q.position.set(0,10.4,0),F.add(q),E.add(F)};L(e.startArch,0,20,"START","#22c55e"),L(e.finishZ+.01,v.top,19,"FINISH","#ef233c");let O=new it(new Ve(30,15),new Ce({map:D,transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}));return O.position.set(0,v.top+21,e.finishZ-.5),E.add(O),d.push(M=>{O.position.y=v.top+21+Math.sin(M*1.2)*.4}),s.add(r),{group:r,update(M,I){for(let C of d)C(M);r.userData.stars&&r.userData.stars.position.copy(I)},dispose(){s.remove(r),r.traverse(M=>{M.geometry&&M.geometry.dispose(),M.material&&(Array.isArray(M.material)?M.material:[M.material]).forEach(C=>{C.map&&C.map.dispose(),C.dispose()})})}}}var ie=null,rs=null,or=null,Fi=null,Xl=null,Pd=!1;var Wl=null,Ui=null;function di(){if(ie){ie.state==="suspended"&&ie.resume();return}let s=window.AudioContext||window.webkitAudioContext;if(!s)return;ie=new s,rs=ie.createGain(),rs.gain.value=Pd?0:.9,rs.connect(ie.destination),or=ie.createGain(),or.gain.value=.7,or.connect(rs),Fi=ie.createGain(),Fi.gain.value=.22,Fi.connect(rs);let t=ie.sampleRate;Xl=ie.createBuffer(1,t,ie.sampleRate);let e=Xl.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}function Ld(s){Pd=s,rs&&rs.gain.setTargetAtTime(s?0:.9,ie.currentTime,.05)}function oe(s,t,e,n,i=.3,r=0,a=or){if(!ie)return;let o=ie.currentTime+r,l=ie.createOscillator(),c=ie.createGain();l.type=s,l.frequency.setValueAtTime(t,o),e!==t&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e),o+n),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(i,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+n),l.connect(c),c.connect(a),l.start(o),l.stop(o+n+.05)}function Gn(s,t,e,n,i,r=0,a=1){if(!ie)return;let o=ie.currentTime+r,l=ie.createBufferSource();l.buffer=Xl,l.loop=!0;let c=ie.createBiquadFilter();c.type=e,c.Q.value=a,c.frequency.setValueAtTime(n,o),c.frequency.exponentialRampToValueAtTime(Math.max(30,i),o+s);let h=ie.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(t,o+.015),h.gain.exponentialRampToValueAtTime(1e-4,o+s),l.connect(c),c.connect(h),h.connect(or),l.start(o),l.stop(o+s+.05)}var Dy=(s,t)=>s+Math.random()*(t-s),Ht={click(){oe("triangle",520,780,.09,.25)},select(){oe("triangle",660,990,.12,.28),oe("sine",990,1320,.1,.18,.06)},back(){oe("triangle",520,330,.12,.22)},jump(){oe("sine",280,640,.17,.3),oe("triangle",420,880,.12,.08,.02)},land(s=10){let t=Math.min(.5,.12+s*.012);oe("sine",140,60,.12,t),Gn(.09,t*.7,"lowpass",900,200)},step(){Gn(.045,.07,"bandpass",Dy(500,800),300,0,2)},dive(){Gn(.3,.22,"bandpass",500,2200,0,1.5),oe("sine",300,520,.2,.15)},bounce(){oe("sine",180,920,.3,.38),oe("triangle",360,1400,.22,.12,.03)},pickup(){oe("triangle",520,1040,.18,.3),oe("sine",780,1560,.24,.2,.07),oe("sine",1170,2340,.2,.12,.14)},swing(){Gn(.24,.3,"bandpass",500,2800,0,1.2),oe("sine",380,160,.16,.08)},bonk(){oe("square",190,55,.2,.42),Gn(.14,.45,"lowpass",3e3,300),oe("triangle",820,220,.22,.22,.02)},hit(){oe("sawtooth",420,70,.28,.28),Gn(.18,.3,"lowpass",1800,150),oe("square",220,110,.15,.12,.04)},door(){oe("square",150,90,.07,.3),oe("square",110,70,.1,.25,.09),Gn(.05,.18,"lowpass",2e3,400)},honk(){oe("square",392,392,.34,.2),oe("square",494,494,.34,.2)},skid(){Gn(.18,.1,"bandpass",2600,1800,0,3)},vroom(){oe("sawtooth",70,160,.35,.2),oe("sawtooth",90,210,.3,.1,.05)},splash(){Gn(.6,.45,"bandpass",1800,260,0,.8),Gn(.3,.2,"highpass",2400,900,.05),oe("sine",220,80,.3,.12)},respawn(){Gn(.4,.22,"highpass",400,4e3,0,.7),oe("sine",300,900,.3,.15)},checkpoint(){oe("sine",660,660,.14,.3),oe("sine",990,990,.25,.3,.1),oe("triangle",1320,1320,.3,.1,.18)},tick(){oe("sine",660,660,.14,.4)},go(){[523,659,784].forEach(s=>oe("square",s,s,.5,.14)),oe("sine",1046,1046,.6,.3)},join(){oe("triangle",520,520,.1,.25),oe("triangle",780,780,.14,.25,.09)},finish(){[523,659,784,1046,1318].forEach((s,t)=>{oe("square",s,s,.22,.14,t*.09),oe("triangle",s*2,s*2,.3,.08,t*.09)})},win(){[523,659,784,659,784,1046,1318].forEach((t,e)=>{oe("square",t,t,.24,.13,e*.12),oe("triangle",t/2,t/2,.3,.12,e*.12)})},lose(){[392,349,311,262].forEach((s,t)=>oe("triangle",s,s*.97,.3,.22,t*.17))},warn(){oe("square",880,880,.08,.14)}},Ny={major:[0,2,4,7,9,12,14,16],minor:[0,3,5,7,10,12,15,17],lydian:[0,2,4,6,7,9,11,12],dorian:[0,2,3,5,7,9,10,12]},Id=[{bpm:132,root:60,scale:"major",prog:[0,5,3,4],lead:"square",bright:3200},{bpm:118,root:57,scale:"minor",prog:[0,0,3,4],lead:"sawtooth",bright:2200},{bpm:108,root:62,scale:"lydian",prog:[0,4,5,3],lead:"triangle",bright:4200},{bpm:140,root:55,scale:"dorian",prog:[0,3,0,5],lead:"sawtooth",bright:2600},{bpm:126,root:62,scale:"major",prog:[0,4,5,3],lead:"square",bright:3600},{bpm:112,root:65,scale:"lydian",prog:[0,5,3,4],lead:"triangle",bright:3400},{bpm:120,root:60,scale:"major",prog:[0,3,4,0],lead:"triangle",bright:3e3}],zh=s=>440*Math.pow(2,(s-69)/12);function Hh(s,t,e,n,i,r){let a=ie.createOscillator(),o=ie.createGain(),l=ie.createBiquadFilter();a.type=s,a.frequency.setValueAtTime(t,e),l.type="lowpass",l.frequency.value=r,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(i,e+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(l),l.connect(o),o.connect(Fi),a.start(e),a.stop(e+n+.05)}function Uy(s,t){let e=ie.createBufferSource();e.buffer=Xl;let n=ie.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let i=ie.createGain();i.gain.setValueAtTime(t,s),i.gain.exponentialRampToValueAtTime(1e-4,s+.05),e.connect(n),n.connect(i),i.connect(Fi),e.start(s),e.stop(s+.06)}function Fy(s){let t=ie.createOscillator(),e=ie.createGain();t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(40,s+.12),e.gain.setValueAtTime(.55,s),e.gain.exponentialRampToValueAtTime(1e-4,s+.16),t.connect(e),e.connect(Fi),t.start(s),t.stop(s+.2)}function lr(s){if(kh(),!ie)return;let t=Id[s]||Id[6],e=Ny[t.scale],n=60/t.bpm/4,i=1234+s*77,r=()=>(i=i*1664525+1013904223>>>0,i/4294967296),a=[];for(let l=0;l<4;l++){let c=[];for(let h=0;h<16;h++)c.push(h%4===0||r()<.38?Math.floor(r()*6):-1);a.push(c)}Ui={i:0,next:ie.currentTime+.1};let o=()=>{if(!(!ie||!Ui))for(;Ui.next<ie.currentTime+.18;){let l=Ui.i,c=l%16,h=Math.floor(l/16)%4,u=t.prog[h]||0,f=Ui.next,d=t.root+e[u%e.length]-12;c%4===0&&Fy(f),c%2===0&&Uy(f,c%4===2?.1:.05),(c%4===0||c%8===6)&&Hh("triangle",zh(d-12),f,n*3.2,.4,600),c===0&&[0,2,4].forEach(y=>Hh("sine",zh(t.root+e[(u+y)%e.length]),f,n*15,.07,1400));let g=a[h][c];g>=0&&Hh(t.lead,zh(t.root+12+e[(g+u)%e.length]),f,n*1.8,.11,t.bright),Ui.next+=n,Ui.i++}};Wl=setInterval(o,40),o()}function kh(){Wl&&clearInterval(Wl),Wl=null,Ui=null}function ql(s){Fi&&Fi.gain.setTargetAtTime(s?.08:.22,ie.currentTime,.2)}var ei=null;function Dd(){if(!ie||ei)return;let s=ie.createGain();s.gain.value=1e-4;let t=ie.createBiquadFilter();t.type="lowpass",t.frequency.value=500;let e=ie.createOscillator(),n=ie.createOscillator();e.type="sawtooth",n.type="square",e.frequency.value=60,n.frequency.value=30,e.connect(t),n.connect(t),t.connect(s),s.connect(or),e.start(),n.start(),ei={g:s,f:t,o1:e,o2:n}}function Nd(s,t){if(!ie||!ei)return;let e=ie.currentTime,n=Math.max(0,Math.min(1,s)),i=52+n*150+(t?16:0);ei.o1.frequency.setTargetAtTime(i,e,.08),ei.o2.frequency.setTargetAtTime(i*.5,e,.08),ei.f.frequency.setTargetAtTime(380+n*900+(t?300:0),e,.1),ei.g.gain.setTargetAtTime(.05+n*.07+(t?.04:0),e,.1)}function Gh(){if(!ei)return;let s=ei;ei=null;try{s.g.gain.setTargetAtTime(1e-4,ie.currentTime,.05),setTimeout(()=>{try{s.o1.stop(),s.o2.stop()}catch{}},300)}catch{}}var Yl=class{constructor(){this.ws=null,this.h={},this.offset=0,this.rtt=0,this.best=1/0,this.connected=!1,this.id=null,this.samples=0}now(){return Date.now()+this.offset}on(t,e){this.h[t]=e}connect(){return new Promise((t,e)=>{if(this.connected)return t();let n=location.protocol==="https:"?"wss":"ws",i;try{i=new WebSocket(`${n}://${location.host}/ws`)}catch(a){return e(a)}this.ws=i;let r=setTimeout(()=>{try{i.close()}catch{}e(new Error("timeout"))},8e3);i.onopen=()=>{clearTimeout(r),this.connected=!0;for(let a=0;a<8;a++)setTimeout(()=>this.ping(),a*140);this.pinger=setInterval(()=>this.ping(),2e3),t()},i.onmessage=a=>{let o;try{o=JSON.parse(a.data)}catch{return}if(o.t==="pong")return this.onPong(o);o.t==="joined"&&(this.id=o.id);let l=this.h[o.t];l&&l(o)},i.onclose=()=>{clearTimeout(r);let a=this.connected;this.connected=!1,clearInterval(this.pinger),a&&this.h.close?this.h.close():e(new Error("closed"))},i.onerror=()=>{}})}ping(){this.send({t:"ping",c:Date.now()})}onPong(t){let e=Date.now(),n=e-t.c;this.rtt=this.rtt?this.rtt*.7+n*.3:n;let i=t.s+n/2-e;(n<=this.best*1.25||this.samples<3)&&(this.offset=this.samples<8?n<=this.best?i:this.offset:this.offset*.8+i*.2,this.best=Math.min(this.best,n)),this.samples++,this.samples%10===0&&(this.best=this.best*1.3+2)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}this.connected=!1,clearInterval(this.pinger)}};var Ud=`
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
`;function Fd(s){let t=s.x1-s.x0,e=s.z1-s.z0,n=new We({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},rect:{value:new Le(s.x0,s.z0,s.x1,s.z1)},depth:{value:s.surf-s.bottom},sunDir:{value:new B(-.35,.8,-.5).normalize()},skyTop:{value:new Dt("#4aa8ff")},skyHor:{value:new Dt("#e8fbff")},fogC:{value:new Dt("#d9f4ff")},fogN:{value:120},fogF:{value:640},ag:{value:[new B(0,0,0),new B(0,0,0),new B(0,0,0),new B(0,0,0)]}},vertexShader:`uniform float time; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y += sin(w.x*1.3+time*1.6)*0.018 + sin(w.z*1.7-time*1.3)*0.015; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float time; uniform vec4 rect; uniform float depth; uniform vec3 sunDir; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform vec3 ag[4]; varying vec3 vW;
      ${Ud}
      float hgt(vec2 p){
        float h = vn(p*0.9+vec2(time*0.35,time*0.2))*0.5 + vn(p*2.1-vec2(time*0.5,time*0.3))*0.3 + vn(p*4.7+vec2(time*0.8,-time*0.6))*0.16;
        h += sin(p.x*2.2+time*1.7)*0.05 + sin(p.y*2.7-time*1.4)*0.05;
        for(int i=0;i<4;i++){ if(ag[i].z>0.0){ float r = length(p-ag[i].xy); h += sin(r*9.0-time*7.0)*exp(-r*1.1)*0.22*ag[i].z; } }
        return h;
      }
      void main(){
        vec2 p = vW.xz; float e = 0.06;
        float h0 = hgt(p), hx = hgt(p+vec2(e,0.0)), hz = hgt(p+vec2(0.0,e));
        vec3 n = normalize(vec3(-(hx-h0)/e*0.22, 1.0, -(hz-h0)/e*0.22));
        vec3 V = normalize(cameraPosition - vW);
        float F = 0.03 + 0.97*pow(1.0 - max(dot(n,V),0.0), 4.0);
        vec3 R = reflect(-V, n);
        vec3 sky = mix(skyHor, skyTop, smoothstep(0.0, 0.8, R.y));
        float glint = pow(max(dot(R, normalize(sunDir)), 0.0), 220.0) * 2.4 + pow(max(dot(R, normalize(sunDir)), 0.0), 18.0) * 0.12;
        // refracted pool tiles
        vec2 q = p + n.xz*0.55*depth*0.35;
        vec2 g = abs(fract(q*0.5)-0.5); float tile = smoothstep(0.46,0.5,max(g.x,g.y));
        vec3 deep = vec3(0.02,0.42,0.62), shallow = vec3(0.14,0.82,0.92);
        float eg = min(min(p.x-rect.x, rect.z-p.x), min(p.y-rect.y, rect.w-p.y));      // distance to the pool edge
        float dk = clamp(eg/10.0, 0.0, 1.0);
        vec3 body = mix(shallow, deep, dk*0.85);
        body = mix(body, vec3(0.75,0.97,1.0), tile*0.28);
        // caustic shimmer
        float c = pow(abs(sin((vn(q*1.3+time*0.4)+vn(q*2.9-time*0.3))*5.0)), 6.0); body += c*0.22;
        vec3 col = mix(body, sky, F) + glint;
        float foam = smoothstep(0.75, 0.0, eg) * (0.55 + 0.45*vn(p*3.0+time*0.7));
        foam += smoothstep(0.35,0.0,eg)*0.6;
        for(int i=0;i<4;i++){ if(ag[i].z>0.0){ float r = length(p-ag[i].xy); foam += smoothstep(1.3,0.4,r)*ag[i].z*0.35*vn(p*6.0+time); } }
        col = mix(col, vec3(1.0), clamp(foam,0.0,1.0)*0.85);
        float f = smoothstep(fogN, fogF, length(vW - cameraPosition));
        float alpha = clamp(mix(0.58, 0.97, F) + foam*0.4, 0.0, 1.0);
        gl_FragColor = vec4(mix(col, fogC, f), alpha);
      }`}),i=new Ve(t,e,40,40),r=new it(i,n);return r.rotation.x=-Math.PI/2,r.position.set((s.x0+s.x1)/2,s.surf,(s.z0+s.z1)/2),r.renderOrder=3,r.frustumCulled=!1,r.userData.pool=s,r}function Od(s){let t=s.x1-s.x0,e=s.z1-s.z0,n=new We({transparent:!0,depthWrite:!1,blending:Ki,uniforms:{time:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; varying vec3 vW; ${Ud}
      void main(){
        vec2 p = vW.xz*0.55; float t = time*0.5, c = 0.0;
        for(int i=0;i<3;i++){ p += vec2(sin(p.y*1.7+t), cos(p.x*1.4-t))*0.55; c += abs(sin(p.x*2.2+p.y*1.8)); }
        c = pow(1.0 - c/3.0, 5.0) * 1.6;
        gl_FragColor = vec4(vec3(0.55,0.95,1.0)*c*0.55, 1.0);
      }`}),i=new it(new Ve(t,e),n);return i.rotation.x=-Math.PI/2,i.position.set((s.x0+s.x1)/2,s.bottom+.03,(s.z0+s.z1)/2),i.renderOrder=2,i.frustumCulled=!1,i}var Sa=[{id:0,name:"Sprinter",color:"#0b6b3a",max:27,acc:17,grip:6.5,turn:2.2,hw:.95,hl:2.1},{id:1,name:"Buggy",color:"#2f7bff",max:23,acc:15,grip:8.5,turn:2.5,hw:1.05,hl:1.9},{id:2,name:"Pickup",color:"#ffb21e",max:22,acc:14,grip:7,turn:2,hw:1.05,hl:2.3},{id:3,name:"Bubble",color:"#a855f7",max:24,acc:16,grip:7.5,turn:2.4,hw:.95,hl:1.8}],Bd=1.8;function zd(s,t,e,n){return{id:s,x:t,z:e,yaw:n,vx:0,vz:0,speed:0,steer:0,drift:0,driver:-1,bump:0,boost:0,parked:!0}}function By(s,t,e,n=1.5){let i=1e9,r=t,a=e,o=1,l=1;for(let h of s.segs){let u=h.bx-h.ax,f=h.bz-h.az,d=u*u+f*f,g=d>0?((t-h.ax)*u+(e-h.az)*f)/d:0;g=g<0?0:g>1?1:g;let y=h.ax+u*g,p=h.az+f*g,m=Math.hypot(t-y,e-p),S=h.hw-n;m-S<i&&(i=m-S,r=y,a=p,o=S,l=m)}for(let h of s.plazas||[]){let u=Math.hypot(t-h.x,e-h.z),f=h.r-n;u-f<i&&(i=u-f,r=h.x,a=h.z,o=f,l=u)}let c=l||1e-6;return{d:i,px:r,pz:a,nx:(t-r)/c,nz:(e-a)/c,lim:o}}function Hd(s,t,e,n,i){let r=Sa[s.id],a=Math.sin(s.yaw),o=Math.cos(s.yaw),l=-o,c=a,h=s.vx*a+s.vz*o,u=s.vx*l+s.vz*c,f=r.max*(s.boost>0?1.3:1);s.boost>0&&(s.boost-=t),e.gas>.01?h+=(h<0?38:r.acc*(1-Math.max(0,h)/(f+2))+1)*e.gas*t:e.gas<-.01?h+=(h>.5?-34:-11)*-e.gas*t:h-=Math.sign(h)*Math.min(Math.abs(h),4.5*t),e.hb&&(h-=Math.sign(h)*Math.min(Math.abs(h),9*t)),h=Math.max(-9,Math.min(f+(s.boost>0?3:0),h)),s.steer+=(e.steer-s.steer)*Math.min(1,t*9);let d=Math.abs(h),g=Math.min(1,d/5)*(1-.38*Math.min(1,d/f));s.yaw-=s.steer*r.turn*g*Math.sign(h||1)*(e.hb?1.35:1)*t;let y=e.hb?1.6:r.grip;u*=Math.exp(-y*t),s.drift=Math.min(1,Math.abs(u)/5);let p=Math.sin(s.yaw),m=Math.cos(s.yaw),S=-m,R=p;s.vx=p*h+S*u,s.vz=m*h+R*u;for(let b of n.boosts||[])Math.abs(s.x-b.x)<b.r&&Math.abs(s.z-b.z)<b.r&&(s.boost=1.4,h<f&&(s.vx+=p*40*t,s.vz+=m*40*t));s.x+=s.vx*t,s.z+=s.vz*t;let _="";{let b=By(n,s.x,s.z,1.5);if(b.d>0){s.x=b.px+b.nx*b.lim,s.z=b.pz+b.nz*b.lim;let E=s.vx*b.nx+s.vz*b.nz;E>0&&(s.vx-=(1+.35)*E*b.nx,s.vz-=(1+.35)*E*b.nz,s.vx*=.93,s.vz*=.93,E>5&&(_="bump"),s.bump=Math.max(s.bump,E))}}for(let b of i||[]){let E=s.x-b.x,D=s.z-b.z,v=Math.hypot(E,D);if(v<Bd*2&&v>1e-4){let T=E/v,L=D/v,O=Bd*2-v;s.x+=T*O,s.z+=L*O;let M=s.vx*T+s.vz*L;M<0&&(s.vx-=(1+.5)*M*T,s.vz-=(1+.5)*M*L,-M>4&&(_="bump"))}}return s.speed=s.vx*p+s.vz*m,_}var pe=(s,t,e,n=.12)=>new rr(s,t,e,3,Math.min(n,s/2-.01,t/2-.01,e/2-.01)),Rn=(s,t={})=>{var e,n,i;return new he({color:s,roughness:(e=t.r)!=null?e:.35,metalness:(n=t.m)!=null?n:.25,emissive:t.e||0,emissiveIntensity:(i=t.ei)!=null?i:1})},Vh=()=>new he({color:"#9fd8ff",roughness:.05,metalness:.4,transparent:!0,opacity:.55});function kd(s){let t=Sa[s],e=new ne,n=Rn("#1b1b22",{r:.8,m:0}),i=Rn("#e8eaf2",{r:.25,m:.8}),r=Rn("#23252e",{r:.6}),a=(b,E,D,v,T,L=0,O=0,M=0)=>{let I=new it(b,E);return I.position.set(D,v,T),I.rotation.set(L,O,M),I.castShadow=!0,I.receiveShadow=!0,e.add(I),I},o=s===0?new he({map:Dh("pk"),roughness:.3,metalness:.15}):Rn(t.color,{r:.28,m:.35}),l=Rn("#ffffff",{r:.3,m:.1}),c=Rn("#fff6c8",{e:"#fff1a8",ei:1.4}),h=Rn("#ff3030",{e:"#ff1a1a",ei:1.2}),u=[],f=[],d=.46,g=1,y=1.35,p=-1.3,m={y:.55,z:-.15};if(s===0)d=.44,g=1.02,y=1.45,p=-1.35,m={y:.5,z:-.2},a(pe(1.9,.5,4.3,.22),o,0,.55,0),a(pe(1.7,.34,1.5,.2),o,0,.78,1.35,-.12),a(pe(1.7,.4,1,.2),o,0,.86,-1.6),a(pe(1.5,.5,.12,.05),Vh(),0,1.02,.78,-.55),a(pe(.12,.1,1.5,.04),r,.95,1.16,-1.82),a(pe(.12,.1,1.5,.04),r,-.95,1.16,-1.82),a(pe(2,.09,.45,.04),o,0,1.28,-2),a(pe(.1,.4,.3,.03),r,.7,1.08,-1.95),a(pe(.1,.4,.3,.03),r,-.7,1.08,-1.95),a(pe(.4,.2,.1,.04),c,.65,.68,2.12),a(pe(.4,.2,.1,.04),c,-.65,.68,2.12),a(pe(.45,.14,.1,.04),h,.65,.78,-2.17),a(pe(.45,.14,.1,.04),h,-.65,.78,-2.17);else if(s===1){d=.62,g=1.18,y=1.3,p=-1.25,m={y:.62,z:-.1},a(pe(1.7,.4,3.8,.16),o,0,.62,0),a(pe(1.5,.3,1.2,.14),o,0,.9,1.4),a(pe(1.3,.35,.9,.12),Rn("#ffd23f",{r:.4}),0,.95,-1.35);for(let b of[-1,1])a(new Yt(.06,.06,1.7,8),r,b*.78,1.5,-.1,.12,0,0),a(new Yt(.06,.06,1.6,8),r,b*.78,1,.7,.9,0,0),a(new Yt(.06,.06,1.7,8),r,b*.78,1.5,-.1,Math.PI/2,0,0);a(new Yt(.06,.06,1.6,8),r,0,2,-.1,0,0,Math.PI/2),a(new be(.2,12,8),c,.55,.98,2),a(new be(.2,12,8),c,-.55,.98,2),a(pe(.4,.12,.1,.04),h,.5,.8,-1.95),a(pe(.4,.12,.1,.04),h,-.5,.8,-1.95)}else if(s===2){d=.55,g=1.1,y=1.55,p=-1.5,m={y:.78,z:.55},a(pe(2,.55,4.7,.2),o,0,.75,0),a(pe(1.9,.75,1.5,.18),o,0,1.28,.55),a(pe(1.5,.45,.1,.05),Vh(),0,1.55,1.3,-.35),a(pe(1.8,.1,1.9,.05),r,0,1.1,-1.35);for(let b of[-1,1])a(pe(.1,.5,1.9,.04),o,b*.97,1.35,-1.35);a(pe(1.8,.5,.1,.04),o,0,1.35,-2.28),a(pe(1.8,.1,.1,.04),Rn("#c8ccd8",{m:.8,r:.2}),0,.75,2.4),a(pe(.1,.5,.1,.03),Rn("#c8ccd8",{m:.8,r:.2}),.6,.85,2.38),a(pe(.1,.5,.1,.03),Rn("#c8ccd8",{m:.8,r:.2}),-.6,.85,2.38),a(pe(.35,.22,.1,.04),c,.7,.98,2.36),a(pe(.35,.22,.1,.04),c,-.7,.98,2.36),a(pe(.3,.2,.1,.04),h,.8,1,-2.36),a(pe(.3,.2,.1,.04),h,-.8,1,-2.36)}else{d=.42,g=.98,y=1.15,p=-1.1,m={y:.5,z:-.05},a(new be(1.15,24,16),o,0,.95,-.05).scale.set(.9,.62,1.55),a(pe(1.6,.14,3.2,.06),l,0,.42,0);for(let E of[-1,1])a(new be(.27,14,10),c,E*.62,.95,1.72),a(new be(.2,12,8),h,E*.55,.85,-1.78),a(new Yt(.09,.09,.5,8),r,E*.42,1.55,1.1,.45,0,0);a(pe(1.5,.35,.1,.04),Vh(),0,1.22,.85,-.7),a(pe(.5,.05,2.3,.02),Rn("#ff6bd5",{r:.4}),.15,1.52,-.75,0,0,.08)}let S=new Yt(d,d,.42,20),R=new Yt(d*.56,d*.56,.44,12);for(let[b,E,D]of[[1,y,1],[-1,y,1],[1,p,0],[-1,p,0]]){let v=new ne;v.position.set(b*g,d,E),e.add(v);let T=new ne;v.add(T);let L=new it(S,n);L.rotation.z=Math.PI/2,L.castShadow=!0,T.add(L);let O=new it(R,i);O.rotation.z=Math.PI/2,T.add(O),u.push(T),D&&f.push(v)}let _=new it(new Yi(2.6,20),new Ce({color:0,transparent:!0,opacity:.22,depthWrite:!1}));return _.rotation.x=-Math.PI/2,_.position.y=.04,_.scale.set(.9,1.25,1),e.add(_),e.userData={wheels:u,pivots:f,seat:m,spec:t},e}function Gd(s,t,e){let n=s.userData;for(let i of n.wheels)i.rotation.x+=t.speed/.5*e;for(let i of n.pivots)i.rotation.y=-t.steer*.5;s.rotation.z=oh.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/20)*.07,-.08,.08)}var at=s=>document.getElementById(s),Vn=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||(typeof navigator!="undefined"&&navigator.maxTouchPoints||0)>0,dn={x:0,y:0,jump:!1},on=(s,t,e)=>s<t?t:s>e?e:s,as=(s,t,e)=>s+(t-s)*e,Jh=(s,t,e)=>{let n=(t-s)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),s+n*e},Zl=s=>{let t=Math.floor(s/60),e=s-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},Wh=s=>s===1?"1st":s===2?"2nd":s===3?"3rd":s+"th",zy=["\u{1F947}","\u{1F948}","\u{1F949}"],Oi=at("c"),gn;try{gn=new da({canvas:Oi,antialias:!0,powerPreference:"high-performance"})}catch(s){throw document.querySelector("#loader p").textContent="WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.",s}gn.outputColorSpace=Te;gn.toneMapping=Js;gn.toneMappingExposure=1.05;gn.shadowMap.enabled=!0;gn.shadowMap.type=Vo;var cr=Math.min(window.devicePixelRatio||1,Vn?1.5:2),se={dpr:Vn?Math.min(cr,1):Math.min(cr,1.5),t:0,frames:0,good:0,shadows:!0,warm:3};function os(){Xe&&(gn.setPixelRatio(se.dpr),gn.setSize(window.innerWidth,window.innerHeight,!1),Xe.camera.aspect=window.innerWidth/window.innerHeight,Xe.camera.updateProjectionMatrix(),K&&(K.camera.aspect=window.innerWidth/window.innerHeight,K.camera.updateProjectionMatrix(),K.particles.setScale(gn.domElement.height)),Xe.particles.setScale(gn.domElement.height))}function Hy(s){if(se.low)return;if(se.warm>0){se.warm-=s;return}if(se.t+=s,se.frames++,se.t<1.2)return;let t=se.frames/se.t;se.t=0,se.frames=0,t<40?(se.good=0,se.dpr>.7?(se.dpr=Math.max(.7,se.dpr-.2),os()):se.shadows&&t<30&&(se.shadows=!1,K&&K.setShadows(!1))):t>58?++se.good>=3&&se.dpr<Math.min(cr,1.75)&&(se.dpr=Math.min(Math.min(cr,1.75),se.dpr+.1),se.good=0,os()):se.good=0}try{let s=localStorage.getItem("ph_low");se.low=s==="1",s===null&&Vn&&((navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<=2)&&(se.low=!0)}catch{se.low=!1}se.low&&(se.dpr=.75,se.shadows=!1);function ky(){se.low?(se.dpr=.75,se.shadows=!1):(se.dpr=Vn?Math.min(cr,1):Math.min(cr,1.5),se.shadows=!0,se.warm=3),K&&K.setShadows(se.shadows),os()}var Gy=new ns(gn),qd=Gy.fromScene(new pa,.04).texture,ct={screen:"title",mode:"single",name:localStorage.getItem("ph_name")||"",char:+(localStorage.getItem("ph_char")||0),level:0,net:null,room:null,myId:null,pendingJoin:null,muted:!1},K=null,Xe=null,qh=[],Yd=s=>+(localStorage.getItem("ph_best_"+s)||0),Yh=class{constructor(){let t=Ma.candy;this.scene=new ci,this.scene.fog=new Fs(t.fog,70,420),this.scene.environment=qd,this.scene.environmentIntensity=.7,this.camera=new qe(42,1,.1,1500),this.sky=Oh(t),this.scene.add(this.sky),this.water=Bh(t,-3),this.scene.add(this.water),this.scene.add(new $i(t.hemiSky,t.hemiGround,1));let e=new Ji(t.sun,2.4);e.position.set(-10,18,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,n.near=1,n.far=60,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e),this.sun=e;let i=u=>new he({color:u,roughness:.35}),r=new it(new Yt(15,14,2,48),i("#ff9ccf"));r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let a=new it(new Yt(13,13,.1,48),i("#fff3fb"));a.position.y=.02,a.receiveShadow=!0,this.scene.add(a),this.tops=[.8,1.25,1.25,.8],[[-4.5,.8,"#7be8a0"],[-1.5,1.25,"#5fc2ff"],[1.5,1.25,"#ffd23f"],[4.5,.8,"#ff9ccf"]].forEach(([u,f,d])=>{let g=new it(new Yt(1.1,1.25,f,32),i(d));g.position.set(u,f/2,-.5),g.castShadow=g.receiveShadow=!0,this.scene.add(g)}),this.slotPos=[[-4.5,.8,-.5],[-1.5,1.25,-.5],[1.5,1.25,-.5],[4.5,.8,-.5]];let o=Vl("HARIS"),l=Vl("HARIS","MADE THIS GAME"),c=new it(new Ve(11,4.3),new Ce({map:o,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));c.rotation.x=-Math.PI/2,c.position.set(0,.1,4.4),this.scene.add(c);let h=new it(new Ve(26,13),new Ce({map:l,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));h.position.set(0,9.5,-24),this.scene.add(h),this.banner=h,this.chars=[0,1,2,3].map(u=>{let f=new ss(u);return this.scene.add(f.group),{c:f,tag:null,name:null,show:!0,scale:1,hop:0}}),this.ambient=new va("candy",160),this.scene.add(this.ambient.points),this.particles=new ya(260),this.scene.add(this.particles.points),this.mode="title",this.sel=0,this.t=0,this.lobby=[]}setName(t,e){let n=this.chars[t];n.name!==e&&(n.tag&&(n.c.group.remove(n.tag),n.tag.material.map.dispose(),n.tag.material.dispose(),n.tag=null),n.name=e,e&&(n.tag=kl(e,fi[t].color),n.tag.position.set(0,n.c.height+.55,0),n.c.group.add(n.tag)))}setTitle(t=-1){this.mode="title",this.sel=t,this.lobby=[],this.chars.forEach((e,n)=>{e.show=!0,this.setName(n,null)})}setLobby(t){this.mode="lobby",this.lobby=t,this.chars.forEach((e,n)=>{let i=t.findIndex(r=>r.char===n);e.show=i>=0,e.slot=i,this.setName(n,i>=0?t[i].name:null)})}burst(t){let e=this.slotPos[this.slotOf(t)];this.particles.emit(e[0],e[1]+1.4,e[2]+.5,40,{rainbow:!0,speed:4,up:6,life:1,size:.35,gravity:7})}slotOf(t){return this.mode==="lobby"?[1,2,0,3][Math.max(0,this.chars[t].slot)%4]:t}update(t){this.t+=t;let e=this.camera;e.position.set(Math.sin(this.t*.25)*1.8,2.9+Math.sin(this.t*.4)*.15,10.5),e.lookAt(0,1.9,0),this.sky.position.copy(e.position),this.water.material.uniforms.time.value=this.t,this.chars.forEach((n,i)=>{if(n.c.group.visible=n.show,!n.show)return;let r=this.slotPos[this.slotOf(i)],a=this.mode==="title"?Math.floor(this.t/3)%4===i:this.mode!=="lobby"&&this.sel===i;n.scale=as(n.scale,a?1.18:1,Math.min(1,t*8)),n.c.group.scale.setScalar(n.scale),n.hop=a?Math.abs(Math.sin(this.t*5))*.25:as(n.hop,0,Math.min(1,t*8)),n.c.group.position.set(r[0],r[1]+n.hop,r[2]),n.c.group.rotation.y=Jh(n.c.group.rotation.y,this.mode==="lobby"?Math.sin(this.t*.7+i)*.3:Math.sin(this.t*.6+i*2)*.35,Math.min(1,t*4)),n.c.update(t,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:a||this.mode==="lobby"&&Math.floor(this.t*.5+i)%2===0}),n.tag&&n.tag.scale.set(2.4,.6,1)}),this.ambient.update(this.t,e.position),this.particles.update(t)}},Ea=class{constructor(t,e){this.info=t,this.id=t.id,this.name=t.name,this.model=new ss(t.char),e.add(this.model.group),this.tag=kl(t.name,fi[t.char].color),this.tag.position.set(0,this.model.height+.7,0),this.model.group.add(this.tag),this.snaps=[],this.x=0,this.y=-50,this.z=0,this.yaw=Math.PI,this.speed=0,this.flags=0,this.vy=0,this.vx=0,this.vz=0,this.sw=0,this.ds=[],this.dMin=0,this.jit=0,this.rs=0,this.has=!1,this.finished=!1,this.lastLanded=!1}push(t){t.rs!==this.rs&&(this.snaps.length=0,this.rs=t.rs);let e=this.snaps[this.snaps.length-1];if(e&&t.ts<=e.ts)return;let n=Date.now(),i=n-t.ts;for(this.ds.push([n,i]);this.ds.length>1&&n-this.ds[0][0]>4e3;)this.ds.shift();let r=1/0;for(let a of this.ds)a[1]<r&&(r=a[1]);this.dMin=r,this.jit=this.jit*.92+Math.abs(i-r)*.08,this.snaps.push(t),this.snaps.length>40&&this.snaps.shift()}renderTime(){return Date.now()-this.dMin-on(70+this.jit*2.2,70,260)}update(t,e){let n=this.snaps;if(!n.length)return;for(;n.length>2&&n[1].ts<=t;)n.shift();let i=n[0],r=n[1]||n[0],a=0;if(n.length>1){let d=Math.max(1,r.ts-i.ts);a=on((t-i.ts)/d,0,1+220/d)}let o=as(i.x,r.x,a),l=as(i.y,r.y,a),c=as(i.z,r.z,a);if(!this.has)this.x=o,this.y=l,this.z=c,this.has=!0;else{let d=1-Math.exp(-28*e),g=this.x,y=this.z;this.x+=(o-this.x)*d,this.y+=(l-this.y)*d,this.z+=(c-this.z)*d,e>0&&(this.vx+=((this.x-g)/e-this.vx)*.25,this.vz+=((this.z-y)/e-this.vz)*.25)}this.yaw=Jh(this.yaw,r.r,1-Math.exp(-16*e)),this.speed=as(i.sp,r.sp,on(a,0,1)),this.flags=r.a,this.vy=n.length>1?(r.y-i.y)/Math.max(.02,(r.ts-i.ts)/1e3):0;let h=this.model.group;h.position.set(this.x,this.y,this.z),h.rotation.y=this.yaw;let u=!!(this.flags&1),f=u&&!this.lastLanded;this.lastLanded=u,this.sw=this.flags&16?Math.min(1,(this.sw||.001)+e/.42):0,this.model.update(e,{speed:this.speed,grounded:u,vy:this.vy,stun:this.flags&2?1:0,dive:this.flags&4?1:0,celebrate:!!(this.flags&8),swing:this.sw,shield:!!(this.flags&32),leader:!!this.leader,mega:!!(this.flags&128),landed:f})}dispose(t){t.remove(this.model.group),this.tag.material.map.dispose(),this.tag.material.dispose(),this.model.dispose()}},Fe=new Set,pi={jump:!1,dive:!1},Jl=class s{constructor(t,e,n,i){this.level=t,this.meta=ma[t],this.multi=i.multi,this.localId=n,this.players=e,this.t0=i.t0,this.phase="countdown",this.finished=!1,this.over=!1,this.finishTime=0,this.finishedMap=new Map,this.camYaw=0,this.camPitch=.34,this.camDist=8.2,this.camPos=new B,this.camTarget=new B,this.camInit=!1,this.sendT=0,this.rs=0,this.cpIdx=0,this.cpCur=null,this.stepDist=0,this.lastCount=99,this.hudT=0,this.hintT=0,this.warnSec=-1,this.levelTime=-4,this.batCd=0,this.swingT=0,this.batPending=!1,this.swingMega=!1,this.fx={turbo:0,jump:0,shield:0,mega:0},this.fxSig="";let r=Ma[this.meta.key],a=this.scene=new ci;a.background=new Dt(r.fog),a.fog=new Fs(r.fog,r.fogNear,r.fogFar),a.environment=qd,a.environmentIntensity=r.env,this.camera=new qe(62,window.innerWidth/window.innerHeight,.1,1800);let{world:o,info:l}=vd(t,!1,Rd());this.world=o,this.info=l,a.add(o.group),o.onEvent=null,this.sky=Oh(r),a.add(this.sky),this.water=Bh(r,o.waterY),a.add(this.water),this.scenery=Cd(a,this.meta.key,l,o),this.poolMeshes=[];for(let d of o.pools){let g=Fd(d),y=g.material.uniforms;y.fogC.value.set(r.fog),y.fogN.value=r.fogNear,y.fogF.value=r.fogFar,y.skyTop.value.set(r.top),y.skyHor.value.set(r.horizon);let p=Od(d);a.add(g,p),this.poolMeshes.push({wm:g,cm:p,pl:d})}if(this.cars=[],this.drive=null,this.carIn={gas:!1,brake:!1,left:!1,right:!1},this.lookT=0,this.nearCar=null,this.hornCd=0,this.skidT=0,l.cars){for(let d of l.cars){let g=kd(d.id);g.rotation.order="YXZ",g.position.set(d.x,0,d.z),g.rotation.y=d.yaw,a.add(g),this.cars.push({st:zd(d.id,d.x,d.z,d.yaw),mesh:g})}i.multi&&ct.pendingCars&&(this.onCars(ct.pendingCars),ct.pendingCars=null)}a.add(new $i(r.hemiSky,r.hemiGround,r.hemiI));let c=this.sun=new Ji(r.sun,r.sunI);this.sunDir=new B(...r.sunPos).normalize().multiplyScalar(90),c.castShadow=se.shadows,c.shadow.mapSize.set(Vn?1024:2048,Vn?1024:2048);let h=c.shadow.camera;h.left=-40,h.right=40,h.top=40,h.bottom=-40,h.near=5,h.far=220,c.shadow.bias=-3e-4,c.shadow.normalBias=.04,a.add(c,c.target),this.particles=new ya(600),a.add(this.particles.points),this.particles.setScale(gn.domElement.height),this.ambient=new va(this.meta.key,320),a.add(this.ambient.points),this.remotes=new Map;let u=e.findIndex(d=>d.id===n);this.slot=Math.max(0,u);let f=e[this.slot]||{name:"Player",char:0};this.me={body:Md(),model:new ss(f.char),name:f.name,char:f.char},a.add(this.me.model.group),this.me.model.group.rotation.order="YXZ",this.me.tag=kl(f.name,fi[f.char].color),this.me.tag.position.set(0,this.me.model.height+.7,0),this.me.model.group.add(this.me.tag),e.forEach((d,g)=>{d.id!==n&&this.remotes.set(d.id,new Ea(d,a))}),this.spawn(this.slot),this.buildProgress(),this.buildBoxes(),document.body.classList.add("in-race"),at("hud-level").textContent=this.meta.name,at("hud").classList.remove("hidden"),at("hud-hint").classList.remove("fade"),this.hintT=8,this.setShadows(se.shadows),lr(t),ql(!1),this.pos=this.me.body}setShadows(t){this.sun.castShadow=t}spawnPoint(t){return[(t-1.5)*3.6,0,this.info.spawn.z]}spawn(t){let[e,n,i]=this.spawnPoint(t);Hl(this.me.body,e,n+.02,i,Math.PI),this.cpCur=null,this.cpIdx=0}buildProgress(){let t=document.querySelector("#hud-progress .track");t.querySelectorAll(".dot").forEach(n=>n.remove()),this.dots=new Map;let e=(n,i)=>{let r=document.createElement("div");r.className="dot"+(i?" me":""),r.style.background=fi[n.char].color,r.innerHTML=`<em>${n.name.replace(/[<>&]/g,"")}</em>`,t.appendChild(r),this.dots.set(n.id,r)};this.players.forEach(n=>e(n,n.id===this.localId))}now(){return this.multi?ct.net.now():performance.now()}look(t,e){this.camYaw-=t*.0024,this.camPitch=on(this.camPitch+e*.0021,-.15,1.2),this.lookT=1.6}update(t){let e=this.me.body,n=this.world;this.levelTime=(this.now()-this.t0)/1e3;let i=this.levelTime;if(n.update(i,t),n.carry(e),e.yawOff&&(e.yaw+=e.yawOff,e.yawOff=0),i<0){let _=Math.ceil(-i);_!==this.lastCount&&_<=3&&(this.lastCount=_,this.count(String(_)),Ht.tick())}else this.phase==="countdown"&&(this.phase="race",this.count("GO!"),Ht.go(),this.lastCount=0,this.multi&&setTimeout(()=>{K===this&&!this.over&&this.toast(Vn?"Tap BAT to bonk rivals!":"Press B or click to swing the BAT!")},1400),this.cars.length&&setTimeout(()=>{K===this&&!this.over&&!this.drive&&this.toast("\u{1F697} Follow the CAR STATION signs to drive!")},this.multi?4200:1600));let r=i>=0&&!this.over,a=0,o=0;(Fe.has("KeyW")||Fe.has("ArrowUp"))&&a++,(Fe.has("KeyS")||Fe.has("ArrowDown"))&&a--,(Fe.has("KeyD")||Fe.has("ArrowRight"))&&o++,(Fe.has("KeyA")||Fe.has("ArrowLeft"))&&o--,Fe.has("KeyQ")&&(this.camYaw+=1.9*t),Fe.has("KeyE")&&(this.camYaw-=1.9*t),(dn.x||dn.y)&&(o+=dn.x,a+=dn.y);let l=Math.sin(this.camYaw),c=Math.cos(this.camYaw),h=-l*a+c*o,u=-c*a-l*o,f=Math.hypot(h,u);f>1&&(h/=f,u/=f);let d={mx:r?h:0,mz:r?u:0,jumpPressed:r&&pi.jump,jumpHeld:r&&(Fe.has("Space")||dn.jump),divePressed:r&&pi.dive};pi.jump=!1,pi.dive=!1;let g=Math.max(1,Math.ceil(t/(1/90))),y=t/g,p=!1;if(this.drive)this.updateDrive(t,r),e.events.length=0;else for(let _=0;_<g;_++)Sd(n,e,y,d),d.jumpPressed=!1,d.divePressed=!1,e.events.length&&(p=this.events(e)||p,e.events.length=0);if(r&&!this.drive){let _=n.checkHazards(e,i);_&&_a(e,_.nx,_.nz,_.pow)&&(Ht.hit(),this.particles.emit(e.x,e.y+.9,e.z,26,{color:"#ffffff",speed:5,up:3,life:.5,size:.3}),this.particles.emit(e.x,e.y+.9,e.z,14,{color:"#ffd23f",speed:7,up:4,life:.4,size:.25}))}this.drive||this.updateBat(t,e),this.updatePowerups(t,e),this.drive||(this.softCollide(e),this.softCars(e,r)),this.checkpoints(e),!this.finished&&i>=0&&e.z<this.info.finishZ&&e.y>this.info.finishY-3&&Math.abs(e.x)<16&&this.onLocalFinish(),e.grounded&&!e.stun&&!this.drive&&!(e.swim>.3)&&(this.stepDist+=Math.hypot(e.vx,e.vz)*t,this.stepDist>2.4&&(this.stepDist=0,Math.hypot(e.vx,e.vz)>3&&(Ht.step(),this.particles.emit(e.x,e.y+.05,e.z,2,{color:"#ffffff",speed:.8,up:.8,life:.35,size:.22,gravity:1}))));let m=this.me.model,S=m.group,R=e.swim>.3?on((e.swim-.3)/.4,0,1):0;if(this.drive?this.seatModel(S,this.drive):(S.position.set(e.x,e.y,e.z),S.rotation.y=e.yaw,S.rotation.x=R*.55*on(Math.hypot(e.vx,e.vz)/3,.25,1),S.scale.setScalar(1)),m.update(t,{speed:this.drive?0:Math.hypot(e.vx,e.vz),grounded:this.drive||R>0?!0:e.grounded,vy:this.drive?0:e.vy,stun:this.drive?0:e.stun,dive:this.drive?0:e.dive,celebrate:this.finished||this.over&&this.winnerSelf,swing:this.swingT,shield:e.shield>0,leader:this.leaderId===this.localId,mega:this.swingMega&&this.swingT>0,landed:p}),this.tagScale(this.me.tag,S.position,.85),this.multi){this.leaderId=this.findLeader();for(let _ of this.remotes.values())_.leader=_.id===this.leaderId,_.update(_.snaps.length?_.renderTime():0,t),this.tagScale(_.tag,_.model.group.position,1),_.flags&64&&Math.random()<.6&&this.particles.emit(_.x,_.y+.3,_.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});if(this.sendT+=t,this.sendT>=.033){this.sendT=0;let _=(e.grounded?1:0)|(e.stun>0?2:0)|(e.dive>0?4:0)|(this.finished?8:0)|(this.swingT>0?16:0)|(e.shield>0?32:0)|(this.fx.turbo>0?64:0)|(this.swingMega&&this.swingT>0?128:0)|(this.drive?256|this.drive.st.id<<9:0)|(e.swim>.4&&!this.drive?2048:0);ct.net.send({t:"s",x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),r:+e.yaw.toFixed(2),a:_,sp:+Math.min(99,Math.hypot(e.vx,e.vz)).toFixed(1),ts:Math.round(ct.net.now()),rs:this.rs})}}this.updateCars(t,r),!this.multi&&!this.over&&i>=this.meta.limit&&!this.finished&&this.endSingle(!0),this.updateCamera(t),this.updateLights(),this.water.material.uniforms.time.value=performance.now()/1e3,this.water.position.x=this.camera.position.x,this.water.position.z=this.camera.position.z,this.sky.position.copy(this.camera.position),this.scenery.update(i,this.camera.position),this.ambient.update(performance.now()/1e3,this.camera.position),this.particles.update(t),this.hud(t)}events(t){let e=!1;for(let n of t.events)if(n==="jump")Ht.jump(),this.particles.emit(t.x,t.y+.05,t.z,5,{color:"#ffffff",speed:1.5,up:1,life:.35,size:.25,gravity:2});else if(n==="land")Ht.land(t.landSpeed),e=!0,this.particles.emit(t.x,t.y+.05,t.z,Math.min(14,5+t.landSpeed*.4),{color:"#ffffff",speed:2.4,up:1.4,life:.45,size:.3,gravity:3});else if(n==="bounce")Ht.bounce(),e=!0,this.particles.emit(t.x,t.y+.1,t.z,18,{rainbow:!0,speed:3,up:2,life:.6,size:.3});else if(n==="dive")Ht.dive();else if(n==="splash"){Ht.splash();let i=t.swim>0&&t.waterSurf,r=Ma[this.meta.key],a=i?"#ffffff":r.water==="lava"?"#ff9a2a":r.water==="grid"?"#d11cff":"#bfeaff";this.particles.emit(t.x,(i?t.waterSurf:this.world.waterY)+.2,t.z,i?34:40,{color:a,speed:4,up:i?6:9,life:.9,size:.45,gravity:16,spread:.6})}else n==="stroke"?(Ht.jump(),this.particles.emit(t.x,t.waterSurf+.1,t.z,10,{color:"#ffffff",speed:2,up:3,life:.6,size:.3,gravity:10})):n==="fell"&&this.onFell();return e}seatModel(t,e){let n=e.st,i=e.mesh.userData.seat;t.position.set(n.x+Math.sin(n.yaw)*i.z,i.y,n.z+Math.cos(n.yaw)*i.z),t.rotation.y=n.yaw,t.rotation.x=0,t.scale.setScalar(.8)}nearestFreeCar(t){if(t.stun>0||t.y>1.5||t.swim>.3)return null;let e=null,n=4.6;for(let i of this.cars){if(i.st.driver!==-1&&i!==this.drive)continue;let r=Math.hypot(t.x-i.st.x,t.z-i.st.z);r<n&&(n=r,e=i)}return e}toggleCar(){if(this.over||this.finished||this.levelTime<0||this.menuOpen||!this.cars.length)return;let t=this.me.body;if(this.drive){let e=this.drive,n=e.st;if(Math.abs(n.speed)>5){this.toast("Slow down to get out!");return}let i=Math.cos(n.yaw),r=-Math.sin(n.yaw);Hl(t,n.x+i*2.4,.05,n.z+r*2.4,n.yaw),t.hitCd=.3,n.vx=n.vz=n.speed=0,n.driver=-1,n.parked=!0,this.drive=null,document.body.classList.remove("driving"),Gh(),Ht.door(),this.g_g(this.me.model.group),this.multi&&ct.net.send({t:"carpark",c:n.id,x:+n.x.toFixed(2),z:+n.z.toFixed(2),r:+n.yaw.toFixed(3)}),this.camYaw=n.yaw+Math.PI,this.camInit=!1}else{let e=this.nearestFreeCar(t);if(!e)return;this.drive=e,e.st.driver=this.localId,e.st.parked=!1,this.carIn.gas=this.carIn.brake=this.carIn.left=this.carIn.right=!1,t.vx=t.vz=t.vy=0,t.grounded=!0,document.body.classList.add("driving"),document.body.classList.remove("near-car"),Dd(),Ht.door(),Ht.vroom(),this.camPitch=.3,this.camYaw=e.st.yaw+Math.PI,this.toast(Sa[e.st.id].name.toUpperCase()+"!  "+(Vn?"GAS to go, \u{1F6AA} to get out":"W/S drive \u2022 A/D steer \u2022 C get out"))}}g_g(t){t.scale.setScalar(1),t.rotation.x=0}updateDrive(t,e){let n=this.drive,i=n.st,r=this.me.body,a=0,o=0,l=!1;if(e){(Fe.has("KeyW")||Fe.has("ArrowUp"))&&a++,(Fe.has("KeyS")||Fe.has("ArrowDown"))&&a--,(Fe.has("KeyD")||Fe.has("ArrowRight"))&&o++,(Fe.has("KeyA")||Fe.has("ArrowLeft"))&&o--,l=Fe.has("Space");let f=this.carIn;f.gas&&a++,f.brake&&a--,f.right&&o++,f.left&&o--}let c=this.cars.filter(f=>f!==n).map(f=>f.st),h="",u={gas:on(a,-1,1),steer:on(o,-1,1),hb:l};for(let f=0;f<2;f++)h=Hd(i,t/2,u,this.info.track,c)||h;if(h==="bump"&&(Ht.land(18),this.particles.emit(i.x,.8,i.z,12,{color:"#ffd23f",speed:4,up:3,life:.4,size:.25})),r.x=i.x,r.y=0,r.z=i.z,r.vx=i.vx,r.vz=i.vz,r.vy=0,r.grounded=!0,r.ground=null,r.yaw=i.yaw,r.stun=0,Nd(Math.abs(i.speed)/27,a>0),this.hornCd-=t,this.skidT-=t,i.drift>.55&&Math.abs(i.speed)>8){this.skidT<=0&&(this.skidT=.25,Ht.skid());for(let f of[-1,1])this.particles.emit(i.x-Math.sin(i.yaw)*1.5+Math.cos(i.yaw)*f*.9,.25,i.z-Math.cos(i.yaw)*1.5-Math.sin(i.yaw)*f*.9,1,{color:"#e8e8e8",speed:1.2,up:1.2,life:.5,size:.5,gravity:-.5})}i.boost>0&&Math.random()<.8&&this.particles.emit(i.x-Math.sin(i.yaw)*2.2,.5,i.z-Math.cos(i.yaw)*2.2,1,{color:"#ffb347",speed:2,up:1,life:.35,size:.4})}honk(){this.drive&&this.hornCd<=0&&(this.hornCd=.4,Ht.honk())}onCars(t){for(let e of Object.keys(t||{})){let n=this.cars[+e],i=t[e];!n||!i||n===this.drive||(n.st.x=+i.x,n.st.z=+i.z,n.st.yaw=+i.r,n.mesh.position.set(n.st.x,0,n.st.z),n.mesh.rotation.y=n.st.yaw)}}softCars(t,e){if(!(!e||this.finished))for(let n of this.cars){if(n===this.drive)continue;let i=n.st,r=Sa[i.id],a=t.x-i.x,o=t.z-i.z;if(a*a+o*o>40||t.y>1.5)continue;let l=Math.sin(i.yaw),c=Math.cos(i.yaw),h=a*l+o*c,u=-a*c+o*l,f=r.hl+.45,d=r.hw+.45;if(Math.abs(h)>=f||Math.abs(u)>=d)continue;if(Math.abs(i.speed)>6&&t.hitCd<=0){let p=Math.sign(i.speed)||1,m=l*p+a*0,S=c*p;m+=-c*Math.sign(u||1)*.5,S+=l*Math.sign(u||1)*.5;let R=Math.hypot(m,S)||1;if(_a(t,m/R,S/R,15)){this.bonked("HIT BY A CAR!","",t);continue}}let g=f-Math.abs(h),y=d-Math.abs(u);if(g<y){let p=Math.sign(h||1)*g;t.x+=l*p,t.z+=c*p}else{let p=Math.sign(u||1)*y;t.x+=-c*p,t.z+=l*p}}}updateCars(t,e){var o;let n=this.me.body,i=performance.now()/1e3;for(let l of this.cars)l!==this.drive&&(l.st.driver=-1,l.st.speed=0,l.st.vx=l.st.vz=0);let r=[];for(let l of this.remotes.values()){let c=l.model.group;if(c.rotation.order="YXZ",!!l.has)if(l.flags&256){let h=this.cars[l.flags>>9&3];if(h&&h!==this.drive){let u=h.st,f=(l.yaw-((o=u._py)!=null?o:l.yaw)+Math.PI*3)%(Math.PI*2)-Math.PI;u.driver=l.id,u.parked=!1,u.x=l.x,u.z=l.z,u.speed=l.speed,u.vx=Math.sin(l.yaw)*l.speed,u.vz=Math.cos(l.yaw)*l.speed,u._py=l.yaw,u.steer+=(on(-f/Math.max(t,.008)*.45,-1,1)-u.steer)*Math.min(1,t*8),u.yaw=l.yaw,this.seatModel(c,h),this.tagScale(l.tag,c.position,1)}}else c.scale.setScalar(1),c.rotation.x=l.flags&2048?.55:0,l.flags&2048&&r.push([l.x,l.z,.35+Math.min(1,l.speed/8)*.65])}n.swim>.3&&!this.drive&&r.push([n.x,n.z,.35+Math.min(1,Math.hypot(n.vx,n.vz)/8)*.65]),n.swim>.3&&!this.drive&&Math.hypot(n.vx,n.vz)>2&&Math.random()<.5&&this.particles.emit(n.x,n.waterSurf+.08,n.z,1,{color:"#ffffff",speed:1.2,up:1.6,life:.5,size:.28,gravity:6,spread:.5});for(let l of this.poolMeshes){let c=l.wm.material.uniforms;c.time.value=i,l.cm.material.uniforms.time.value=i;for(let h=0;h<4;h++){let u=r[h],f=c.ag.value[h];u?f.set(u[0],u[1],u[2]):f.set(0,0,0)}}{let l=!1;for(let h of this.poolMeshes){let u=h.pl,f=this.camera.position;f.x>u.x0&&f.x<u.x1&&f.z>u.z0&&f.z<u.z1&&f.y<u.surf&&(l=!0)}let c=at("uw");c&&c.classList.contains("on")!==l&&c.classList.toggle("on",l)}for(let l of this.cars)l.mesh.position.set(l.st.x,0,l.st.z),l.mesh.rotation.y=l.st.yaw,Gd(l.mesh,l.st,t);let a=!this.drive&&e&&!this.menuOpen&&this.nearestFreeCar(n);if(!!a!==document.body.classList.contains("near-car")&&document.body.classList.toggle("near-car",!!a),this.drive){let l=at("car-speed");if(l){let c=Math.round(Math.abs(this.drive.st.speed)*3.6);l.firstElementChild.textContent!==String(c)&&(l.firstElementChild.textContent=c)}}}onFell(){let t=this.me.body,e=this.cpCur,n=(this.slot-1)*1.6,i,r,a;if(e)i=on(e.x+n,e.x-e.w/2+1.5,e.x+e.w/2-1.5),r=e.y+.05,a=e.spawn[2];else{let l=this.spawnPoint(this.slot);i=l[0],r=l[1]+.02,a=l[2]}Hl(t,i,r,a,Math.PI),this.rs++,Ht.respawn();let o=at("flash");o.classList.add("on"),setTimeout(()=>o.classList.remove("on"),60),this.particles.emit(i,r+.8,a,30,{rainbow:!0,speed:3,up:3,life:.8,size:.3}),this.camInit=!1,this.camYaw=0}checkpoints(t){let e=this.world.checkpoints;for(;this.cpIdx<e.length&&t.z<e[this.cpIdx].z&&t.y>e[this.cpIdx].y-2.5&&Math.abs(t.x-e[this.cpIdx].x)<e[this.cpIdx].w/2+3;)this.cpCur=e[this.cpIdx],this.cpIdx++,Ht.checkpoint(),this.toast("CHECKPOINT!"),this.particles.emit(t.x,t.y+1,t.z,24,{color:"#ffd23f",speed:3,up:5,life:.8,size:.3})}softCollide(t){if(this.finished)return;let e=de.R*2+.06;for(let n of this.remotes.values()){if(!n.has||n.flags&8)continue;let i=t.x-n.x,r=t.z-n.z,a=t.y-n.y;if(Math.abs(a)>de.H*.8)continue;let o=Math.hypot(i,r);if(o>=e)continue;let l,c;if(o>.001)l=i/o,c=r/o;else{let p=t.yaw*7+1;l=Math.cos(p),c=Math.sin(p)}let h=e-o;t.x+=l*h*.62,t.z+=c*h*.62;{let p=Math.sin(t.yaw),m=Math.cos(t.yaw);if(Math.hypot(t.vx,t.vz)>1&&-(p*l+m*c)>.3){let R=-c,_=l,b=p*R+m*_;Math.abs(b)<.3&&(b=-m*R+p*_||1),b=Math.sign(b),t.x+=R*b*h*.55,t.z+=_*b*h*.55}}let u=n.vx||0,f=n.vz||0,d=(t.vx-u)*l+(t.vz-f)*c;if(this.multi&&d<-1.5){let p=performance.now();n.shoveAt>p-80||(n.shoveAt=p,ct.net.send({t:"shove",to:n.id,nx:+(-l).toFixed(3),nz:+(-c).toFixed(3),p:+Math.min(12,-d).toFixed(1)}))}let g=performance.now(),y=!(n.lastContact>g-150);if(n.lastContact=g,d<0&&y){let p=-1.7*d*.5;t.vx+=l*p,t.vz+=c*p,p>2.5&&(t.noCtrl=Math.max(t.noCtrl,.16)),n.flags&4&&-d>7&&t.hitCd<=0&&_a(t,l,c,11)?this.bonked("TACKLED!",n.name||"",t):-d>6&&t.hitCd<=0&&(Ht.land(6),this.particles.emit(t.x-l*.4,t.y+.9,t.z-c*.4,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}}}bonked(t,e,n){Ht.bonk(),this.toast(t+(e?"  \u2022 "+e:"")),this.particles.emit(n.x,n.y+1,n.z,22,{color:"#ffffff",speed:6,up:3,life:.5,size:.3}),this.particles.emit(n.x,n.y+1,n.z,14,{color:"#ffd23f",speed:8,up:4,life:.45,size:.28})}swing(){return!this.multi||this.over||this.finished||this.levelTime<0||this.batCd>0||this.me.body.stun>0?!1:(this.swingMega=this.fx.mega>0,this.swingMega&&this.fx.mega--,this.batCd=1.1,this.swingT=.001,this.batPending=!0,Ht.swing(),!0)}updateBat(t,e){this.batCd>0&&(this.batCd-=t),this.swingT>0&&(this.swingT+=t/.42,e.stun>0?(this.swingT=0,this.batPending=!1):this.batPending&&this.swingT>=.55&&(this.batPending=!1,this.batHit(e)),this.swingT>=1&&(this.swingT=0))}batHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw);for(let i of this.remotes.values()){if(!i.has||i.flags&8)continue;let r=i.x-t.x,a=i.z-t.z,o=i.y-t.y,l=Math.hypot(r,a);if(l>(this.swingMega?4.4:2.9)||Math.abs(o)>1.7||l<.001||(r*e+a*n)/l<.1)continue;let c=e*.7+r/l*.3,h=n*.7+a/l*.3,u=Math.hypot(c,h)||1;c/=u,h/=u,ct.net.send({t:"bat",to:i.id,nx:+c.toFixed(3),nz:+h.toFixed(3),p:this.swingMega?2:1}),Ht.bonk(),this.toast("BONK!  \u2022 "+(i.name||"")),this.particles.emit(i.x,i.y+1,i.z,24,{color:"#ffd23f",speed:7,up:4,life:.5,size:.3}),this.particles.emit(i.x,i.y+1,i.z,14,{color:"#ffffff",speed:5,up:3,life:.4,size:.25})}}onShove(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0||e.shield>0)return;let n=on(+t.p||0,0,12),i=+t.nx,r=+t.nz;!Number.isFinite(i)||!Number.isFinite(r)||(e.x+=i*n*.05,e.z+=r*n*.05,e.vx+=i*n*.12,e.vz+=r*n*.12)}onBat(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0)return;let n=(this.players.find(r=>r.id===t.from)||{}).name||"";if(e.hitCd=0,e.shield>0){this.toast("SHIELD BLOCKED!"),Ht.pickup();return}let i=t.p===2;_a(e,t.nx,t.nz,i?22:15)&&(e.vy=i?11:9,e.stun=i?1:.75,this.bonked(i?"MEGA BONK!":"BONKED!",n,e))}buildBoxes(){this.boxes=[];let t=[],e=(i,r,a)=>[-4,0,4].forEach(o=>t.push({x:i+o,y:a+1.35,z:r}));e(0,-10,0);let n=1e9;for(let i of this.world.checkpoints)Math.abs(i.z-n)<12||(n=i.z,e(i.x,i.z-5,i.y));if(!s.boxAssets){let i=document.createElement("canvas");i.width=i.height=128;let r=i.getContext("2d"),a=r.createLinearGradient(0,0,128,128);a.addColorStop(0,"#ffe45e"),a.addColorStop(1,"#ff8a1a"),r.fillStyle=a,r.fillRect(0,0,128,128),r.strokeStyle="#fff",r.lineWidth=8,r.strokeRect(6,6,116,116),r.fillStyle="#fff",r.strokeStyle="#7a3500",r.lineWidth=6,r.font="bold 92px Arial",r.textAlign="center",r.textBaseline="middle",r.strokeText("?",64,70),r.fillText("?",64,70);let o=new un(i);o.colorSpace=Te,s.boxAssets={geo:new De(.95,.95,.95),mat:new he({map:o,emissive:"#ff9a00",emissiveIntensity:.55,roughness:.35})}}for(let i of t){let r=new it(s.boxAssets.geo,s.boxAssets.mat);r.position.set(i.x,i.y,i.z),r.castShadow=!0,this.scene.add(r),this.boxes.push({...i,mesh:r,respawn:0})}}findLeader(){if(this.players.length<2||this.levelTime<4)return-1;let t=this.localId,e=this.finished?1e5:-this.me.body.z;for(let n of this.remotes.values()){if(!n.has)continue;let i=n.flags&8?1e5:-n.z;i>e+.5&&(e=i,t=n.id)}return t}pickup(t,e){t.respawn=9,t.mesh.visible=!1,Ht.pickup();let n=this.multi?["turbo","turbo","turbo","jump","jump","shield","shield","mega","mega","mega"]:["turbo","jump","shield"],i=e||n[Math.random()*n.length|0],r=this.fx,a=this.me.body;return i==="turbo"?(r.turbo=5,this.toast("\u{1F680} TURBO!")):i==="jump"?(r.jump=7,this.toast("\u{1F998} SUPER JUMP!")):i==="shield"?(r.shield=8,this.toast("\u{1F6E1}\uFE0F SHIELD!")):(r.mega=2,this.toast("\u{1F3CF} MEGA BAT x2!")),this.particles.emit(a.x,a.y+1,a.z,26,{rainbow:!0,speed:4,up:4,life:.7,size:.32}),i}updatePowerups(t,e){let n=performance.now()/1e3,i=this.fx;for(let a of this.boxes){if(a.respawn>0){a.respawn-=t,a.respawn<=0&&(a.mesh.visible=!0);continue}a.mesh.rotation.y+=t*2,a.mesh.rotation.x=Math.sin(n*1.5+a.x)*.25,a.mesh.position.y=a.y+Math.sin(n*2.5+a.x)*.15,!(this.finished||this.over||this.levelTime<0)&&Math.abs(e.x-a.x)<1.3&&Math.abs(e.z-a.z)<1.3&&e.y<a.y+.8&&e.y+de.H>a.y-.5&&this.pickup(a)}for(let a of["turbo","jump","shield"])i[a]>0&&(i[a]=Math.max(0,i[a]-t));e.speedMul=i.turbo>0?1.4:1,e.jumpMul=i.jump>0?1.3:1,e.shield=i.shield,i.turbo>0&&Math.hypot(e.vx,e.vz)>3&&Math.random()<.7&&this.particles.emit(e.x,e.y+.3,e.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});let r=["turbo","jump","shield"].map(a=>i[a]>0?a+Math.ceil(i[a]):"").join("|")+"|"+i.mega;if(r!==this.fxSig){this.fxSig=r;let a=at("hud-fx");if(!a)return;a.innerHTML="";let o=(l,c)=>{let h=document.createElement("div");h.className="fx",h.textContent=l+" "+c,a.appendChild(h)};i.turbo>0&&o("\u{1F680}",Math.ceil(i.turbo)+"s"),i.jump>0&&o("\u{1F998}",Math.ceil(i.jump)+"s"),i.shield>0&&o("\u{1F6E1}\uFE0F",Math.ceil(i.shield)+"s"),i.mega>0&&o("\u{1F3CF}","x"+i.mega)}}onLocalFinish(){this.finished=!0,this.finishTime=Math.max(0,this.levelTime),Ht.finish();let t=this.info.finishZ;this.particles.emit(0,this.info.finishY+6,t,120,{rainbow:!0,speed:9,up:10,life:1.8,size:.5,gravity:7,spread:10}),this.particles.emit(-9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.particles.emit(9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.multi?this.toast("FINISHED!"):this.endSingle(!1)}endSingle(t){if(this.over)return;this.over=!0,this.winnerSelf=!t;let e=-this.info.finishZ,n=on(-this.me.body.z/e,0,1),i="";if(!t){let a=this.finishTime,o=Yd(this.level);!o||a<o?(localStorage.setItem("ph_best_"+this.level,String(a)),i=o?"NEW BEST TIME!":"First clear!"):i=`Best: ${Zl(o)}`}let r=[{place:1,name:this.me.name,char:this.me.char,win:!t,tm:t?`${Math.round(n*100)}% of the track`:Zl(this.finishTime),self:!0}];setTimeout(()=>ct.showResults({title:t?"TIME'S UP!":"YOU DID IT!",sub:t?"You ran out of time. Try again!":i,rows:r,single:!0,win:!t}),t?300:1400),ql(!0),t?Ht.lose():Ht.win()}onFin(t){this.finishedMap.set(t.id,t.place);let e=this.players.find(n=>n.id===t.id);t.id===this.localId?this.toast(`${Wh(t.place)} PLACE!`):(this.toast(`${e?e.name:"Player"} finished ${Wh(t.place)}!`),Ht.checkpoint())}onEnd(t){this.over=!0;let e=t.winnerId===this.localId;this.winnerSelf=e,ql(!0),e?Ht.win():Ht.lose();let n=t.results.map(r=>({place:r.place,name:r.name,char:r.char,win:r.id===t.winnerId,self:r.id===this.localId,tm:r.finished?Zl(r.time):`${Math.round(r.progress*100)}% of the track`})),i=t.results[0];setTimeout(()=>ct.showResults({title:e?"YOU WIN!":`${i?i.name:"Nobody"} WINS!`,sub:t.reason==="time"?"Time's up - the nearest player to the finish gate wins!":"First to the finish gate wins!",rows:n,single:!1,win:e}),900)}addRemote(t){this.remotes.has(t.id)||(this.players.push(t),this.remotes.set(t.id,new Ea(t,this.scene)),this.buildProgress(),this.toast(t.name+" joined the race!"))}removeRemote(t){let e=this.remotes.get(t);if(e){e.dispose(this.scene),this.remotes.delete(t);let n=this.dots.get(t);n&&n.remove()}}tagScale(t,e,n){let i=e.distanceTo(this.camera.position),r=on(i*.07,1,5.2)*n;t.scale.set(2.8*r,.7*r,1),t.visible=i<260}updateCamera(t){let e=this.me.body,n=Math.cos(this.camPitch),i=Math.sin(this.camPitch),r=Math.hypot(e.vx,e.vz);this.camera.fov=as(this.camera.fov,62+on(r-10,0,12)*.9,Math.min(1,t*4)),this.camera.updateProjectionMatrix();let a=this.camDist;if(this.drive){let u=this.drive.st;this.lookT-=t,a=9.2+Math.min(4,Math.abs(u.speed)*.12),this.lookT<=0&&(this.camYaw=Jh(this.camYaw,u.yaw+Math.PI,1-Math.exp(-3.2*t)),this.camPitch+=(.28-this.camPitch)*(1-Math.exp(-2*t)))}let o=e.x,l=e.y+(this.drive?1.1:1.35),c=e.z;this.camInit||(this.camTarget.set(o,l,c),this.camInit=!0);let h=1-Math.exp(-14*t);this.camTarget.x+=(o-this.camTarget.x)*h,this.camTarget.z+=(c-this.camTarget.z)*h,this.camTarget.y+=(l-this.camTarget.y)*(1-Math.exp(-7*t)),this.camera.position.set(this.camTarget.x+Math.sin(this.camYaw)*n*a,this.camTarget.y+i*a+.4,this.camTarget.z+Math.cos(this.camYaw)*n*a),this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}updateLights(){let t=this.camTarget;this.sun.position.set(t.x+this.sunDir.x,t.y+this.sunDir.y,t.z+this.sunDir.z),this.sun.target.position.copy(t)}count(t){let e=at("hud-count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}toast(t){let e=at("hud-toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}rank(){var i;let t=this.me.body,e=1,n=(i=this.finishedMap.get(this.localId))!=null?i:this.finished&&!this.multi?1:null;if(n)return n;for(let r of this.remotes.values())(this.finishedMap.get(r.id)||r.has&&r.z<t.z-.5)&&e++;return e}hud(t){if(this.hudT+=t,this.hintT>0&&(this.hintT-=t,this.hintT<=0&&at("hud-hint").classList.add("fade")),this.hudT<.066)return;this.hudT=0;let e=this.levelTime,n=e<0?this.meta.limit:this.meta.limit-e,i=at("hud-timer"),r=Math.max(0,Math.ceil(n));i.textContent=`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,i.classList.toggle("low",n<10&&e>=0);{let h=at("b-timer");h&&(h.classList.toggle("hidden",!this.multi),h.classList.toggle("off",!ct.timerOn),h.textContent=Vn?"\u23F1 "+(ct.timerOn?"ON":"OFF"):"\u23F1 TIMER: "+(ct.timerOn?"ON":"OFF")+" (T)"),at("hud-hint").classList.toggle("single",!this.multi),document.body.classList.toggle("single",!this.multi)}i.style.visibility=this.multi&&!ct.timerOn?"hidden":"",e>=0&&n<6&&n>0&&Math.ceil(n)!==this.warnSec&&!this.over&&(this.warnSec=Math.ceil(n),Ht.warn()),at("hud-rank").textContent=this.multi?Wh(this.rank())+" / "+this.players.length:`${Math.max(0,Math.round(on(-this.me.body.z/-this.info.finishZ,0,1)*100))}%`;let a=-this.info.finishZ,o=(h,u)=>{let f=this.dots.get(h);f&&(f.style.left=on(-u/a,0,1)*100+"%")};o(this.localId,this.me.body.z);for(let h of this.remotes.values())o(h.id,h.has?h.z:0);let l=at("click-hint"),c=!this.over&&!this.menuOpen&&document.pointerLockElement!==Oi;c!==l.classList.contains("show")&&l.classList.toggle("show",c);{let h=at("t-bat");h&&h.classList.toggle("cd",this.batCd>0)}this.multi&&(at("hud-net").textContent=`ping ${Math.round(ct.net.rtt)} ms`)}render(){gn.render(this.scene,this.camera)}destroy(){kh(),Gh();{let t=at("uw");t&&t.classList.remove("on")}document.body.classList.remove("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("in-race"),document.body.classList.remove("single"),at("pause").classList.add("hidden"),this.menuOpen=!1,at("hud").classList.add("hidden"),at("hud-count").textContent="",at("hud-toast").classList.remove("show");{let t=at("hud-fx");t&&(t.innerHTML="")}for(let t of this.remotes.values())t.dispose(this.scene);this.me.model.dispose(),this.scenery.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),this.scene.clear()}},Vy=["title","profile","levels","mp","lobby","results","help"];function Cn(s){for(let t of Vy){let e=at("s-"+t);e.classList.toggle("active",t===s),e.classList.remove("hidden")}ct.screen=s}var Wd=0;function wa(s){let t=at("toast-global");t.textContent=s,t.classList.add("show"),clearTimeout(Wd),Wd=setTimeout(()=>t.classList.remove("show"),3200)}function Zd(s,t){s.innerHTML="",fi.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.innerHTML=`<img alt="${e.name}" src="${qh[e.id]||""}"><b style="color:${e.color}">${e.name}</b>${t.small?"":`<span>${e.tag}</span>`}`,n.onclick=()=>t.onPick(e.id),s.appendChild(n)})}function Zh(s,t,e){s.querySelectorAll(".card").forEach(n=>{let i=+n.dataset.id;n.classList.toggle("sel",i===t),n.classList.toggle("taken",e&&e.has(i)&&i!==t)})}function $d(s,t){s.innerHTML="",ma.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.style.background=`linear-gradient(160deg, ${e.colors[0]}cc, ${e.colors[1]}cc)`;let i=Yd(e.id);n.innerHTML=`<div><h4>${e.id+1}. ${e.name}</h4><div class="stars">${"\u2605".repeat(e.stars)}${"\u2606".repeat(5-e.stars)}</div></div><div class="blurb">${e.blurb}</div><div class="meta">${e.sub} &bull; ${Math.floor(e.limit/60)}:${String(e.limit%60).padStart(2,"0")} limit${i?" &bull; best "+Zl(i):""}</div>`,n.onclick=()=>t.onPick(e.id),s.appendChild(n)})}function Wy(){let s=new da({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});s.setSize(256,320,!1),s.outputColorSpace=Te,s.toneMapping=Js,s.setClearColor(0,0);let t=new ci;t.add(new $i("#ffffff","#b9a4ff",1.6));let e=new Ji("#ffffff",2.6);e.position.set(3,5,6),t.add(e);let n=new ns(s);t.environment=n.fromScene(new pa,.04).texture,t.environmentIntensity=.7;let i=new qe(30,256/320,.1,50);i.position.set(0,1.25,6.6),i.lookAt(0,.98,0);let r=[];for(let a=0;a<fi.length;a++){let o=new ss(a);o.group.rotation.y=-.35,t.add(o.group),o.update(.016,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1}),s.render(t,i),r.push(s.domElement.toDataURL("image/png")),t.remove(o.group),o.dispose()}return n.dispose(),s.dispose(),s.forceContextLoss(),r}function ba(s){ct.mode=s,at("inp-name").value=ct.name,at("profile-title").textContent="Choose your player",Zd(at("char-cards"),{onPick:t=>{ct.char=t,Zh(at("char-cards"),t),Xe.sel=t,Ht.select(),Xe.burst(t)}}),Zh(at("char-cards"),ct.char),Xe.setTitle(ct.char),Xe.mode="profile",Xe.sel=ct.char,Cn("profile")}function Xy(){let s=at("inp-name").value.trim().replace(/[<>&"']/g,"").slice(0,14);return s||(s=["Haris","Speedy","Bouncy","Zippy"][Math.floor(Math.random()*4)]+Math.floor(Math.random()*90+10)),ct.name=s,localStorage.setItem("ph_name",s),localStorage.setItem("ph_char",String(ct.char)),s}function Jd(){$d(at("level-cards"),{onPick:s=>{Ht.go(),Ta(s)}}),Cn("levels")}function Ta(s){di(),K&&(K.destroy(),K=null),ct.level=s,K=new Jl(s,[{id:1,name:ct.name,char:ct.char}],1,{multi:!1,t0:performance.now()+3600}),os(),Cn("none"),at("s-results").classList.add("hidden"),Aa()}ct.showResults=function(s){let t=at("res-list");t.innerHTML="",s.rows.forEach(i=>{let r=document.createElement("div");r.className="res-row"+(i.win?" win":"");let a=fi[i.char];r.innerHTML=`<div class="place">${i.place<=3?zy[i.place-1]:i.place}</div><div class="nm"><i style="background:${a.color}"></i>${i.name.replace(/[<>&]/g,"")}${i.self?" <small>(you)</small>":""}</div><div class="tm">${i.tm}</div>`,t.appendChild(r)}),at("res-title").textContent=s.title,at("res-sub").textContent=s.sub||"";let e=at("b-res-retry"),n=at("b-res-next");if(s.single)e.style.display="",e.textContent="RETRY",n.style.display="",n.textContent=ct.level<ma.length-1?"NEXT LEVEL":"LEVELS",n.disabled=!1,ct.resMode="single";else{e.style.display="none";let i=ct.room&&ct.room.hostId===ct.myId;n.style.display="",n.textContent=i?"BACK TO LOBBY":"WAITING FOR HOST...",n.disabled=!i,ct.resMode="multi"}Ra(),Cn("results")};at("b-res-menu").onclick=()=>{Ht.back(),Kh()};at("b-res-retry").onclick=()=>{Ht.click(),Ta(ct.level)};at("b-res-next").onclick=()=>{Ht.click(),ct.resMode==="single"?ct.level<ma.length-1?Ta(ct.level+1):(K&&K.destroy(),K=null,Jd()):ct.net.send({t:"again"})};function Kh(){K&&(K.destroy(),K=null),ct.net&&ct.room&&ct.net.send({t:"leave"}),ct.room=null,Ra(),Xe.setTitle(),Cn("title")}async function qy(){if(ct.net&&ct.net.connected)return ct.net;let s=new Yl;return s.on("joined",t=>{ct.myId=t.id}),s.on("lobby",Zy),s.on("err",t=>{at("mp-status").textContent=t.msg,t.retry&&ct.screen==="mp"?(Kl(),$l=setTimeout(()=>{ct.screen==="mp"&&!ct.room&&$h("join")},2e3)):wa(t.msg)}),s.on("go",$y),s.on("s",t=>{if(K&&K.multi){let e=K.remotes.get(t.id);e&&e.push(t)}}),s.on("fin",t=>{K&&K.multi&&K.onFin(t)}),s.on("bat",t=>{K&&K.multi&&K.onBat(t)}),s.on("carpark",t=>{K&&K.multi&&K.onCars({[t.c]:t})}),s.on("cars",t=>{K&&K.multi?K.onCars(t.cars):ct.pendingCars=t.cars}),s.on("shove",t=>{K&&K.multi&&K.onShove(t)}),s.on("end",t=>{K&&K.multi&&K.onEnd(t)}),s.on("left",t=>{K&&K.multi&&K.removeRemote(t.id)}),s.on("close",()=>{wa("Disconnected from server"),K&&(K.destroy(),K=null),ct.room=null,Ra(),Xe.setTitle(),Cn("title")}),await s.connect(),ct.net=s,s}function Yy(){at("mp-status").textContent="",Xe.setTitle(ct.char),Cn("mp")}var $l=null;function Kl(){$l&&(clearTimeout($l),$l=null)}async function $h(s){di(),Kl();let t=at("mp-status");t.textContent="Connecting...";try{let e=await qy();s==="create"?e.send({t:"create",name:ct.name,char:ct.char}):e.send({t:"join",name:ct.name,char:ct.char}),t.textContent=s==="create"?"":"Looking for a room..."}catch{t.textContent="Could not connect to the game server. Is it running?",wa("Could not connect to the game server")}}function Zy(s){Kl();let t=!ct.room,e=ct.room;if(ct.room=s,K&&K.multi){for(let n of s.players)n.id!==ct.myId&&!K.remotes.has(n.id)&&(s.phase==="race"||s.phase==="countdown")&&K.addRemote(n);if(s.phase==="lobby"&&ct.screen!=="lobby")K.destroy(),K=null,Ra(),Xd(),Cn("lobby"),lr(6);else if(ct.screen==="results"){let n=s.hostId===ct.myId;ct.resMode==="multi"&&(at("b-res-next").textContent=n?"BACK TO LOBBY":"WAITING FOR HOST...",at("b-res-next").disabled=!n)}return}(t||ct.screen==="mp"||ct.screen==="profile"||ct.screen==="title")&&(s.phase==="lobby"||s.phase==="results")&&(Cn("lobby"),lr(6)),e&&s.players.length>e.players.length&&Ht.join(),Xd()}function Xd(){let s=ct.room;if(!s)return;let t=s.players.find(r=>r.id===ct.myId);t&&(ct.char=t.char),at("lobby-code").textContent=s.code,at("lobby-count").textContent=`${s.players.length}/${4}`;let e=at("lobby-players");e.innerHTML="";for(let r=0;r<4;r++){let a=s.players[r],o=document.createElement("div");o.className="slot"+(a?"":" empty"),o.innerHTML=a?`<i style="background:${fi[a.char].color}"></i><span>${a.name.replace(/[<>&]/g,"")}</span>${a.id===s.hostId?"<span>\u{1F451}</span>":""}${a.id===ct.myId?'<span class="you">YOU</span>':""}`:'<i style="background:#888"></i><span>Waiting for player...</span>',e.appendChild(o)}let n=new Set(s.players.filter(r=>r.id!==ct.myId).map(r=>r.char));Zd(at("lobby-chars"),{small:!0,onPick:r=>{n.has(r)||(Ht.select(),ct.net.send({t:"char",char:r}))}}),Zh(at("lobby-chars"),ct.char,n);let i=s.hostId===ct.myId;$d(at("lobby-levels"),{onPick:r=>{i&&(Ht.click(),ct.net.send({t:"level",level:r}))}}),at("lobby-levels").querySelectorAll(".card").forEach(r=>{r.classList.toggle("sel",+r.dataset.id===s.level),i||(r.style.cursor="default")}),at("lobby-level-note").textContent=i?"(you choose)":"(host chooses)",at("b-start").disabled=!i,at("b-start").firstElementChild.textContent=i?"START RACE":"WAITING FOR HOST",at("lobby-hint").textContent=i?s.players.length<2?"Tell friends to tap MULTIPLAYER on the same link. You can also start alone.":"Everyone ready? Hit start!":"The host will start the race.",Xe.setLobby(s.players)}function $y(s){di(),K&&(K.destroy(),K=null);let t=ct.room;if(!t)return;let e=s.order.map(n=>t.players.find(i=>i.id===n)).filter(Boolean);ct.level=s.level,K=new Jl(s.level,e,ct.myId,{multi:!0,t0:s.t0}),os(),Cn("none"),Aa()}function Aa(){if(K&&!K.over&&document.pointerLockElement!==Oi)try{let s=Oi.requestPointerLock();s&&s.catch&&s.catch(()=>{})}catch{}}function Ra(){document.pointerLockElement&&document.exitPointerLock()}document.addEventListener("pointerlockchange",()=>{let s=document.pointerLockElement===Oi;s?Xh=!0:Xh&&K&&!K.over&&!K.menuOpen&&!Vn&&eu(),s||(Xh=!1),at("click-hint").classList.toggle("show",!!K&&!K.over&&!K.menuOpen&&!s)});var Xh=!1,jl=!1;Oi.addEventListener("mousedown",s=>{jl=!0,K&&!K.over&&(s.button===0&&K.multi&&document.pointerLockElement===Oi&&!K.menuOpen?K.swing():Aa())});window.addEventListener("mouseup",()=>{jl=!1});window.addEventListener("mousemove",s=>{K&&!K.over&&(document.pointerLockElement===Oi||jl)&&K.look(s.movementX,s.movementY)});at("click-hint").addEventListener("click",Aa);window.addEventListener("keydown",s=>{if(s.target&&s.target.tagName==="INPUT"){s.code==="Enter"&&(ct.screen==="profile"?at("b-profile-next").click():ct.screen==="mp"&&at("b-join").click());return}K&&!K.over&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(s.code)&&s.preventDefault(),!s.repeat&&(Fe.add(s.code),s.code==="Space"&&(pi.jump=!0),(s.code==="ShiftLeft"||s.code==="ShiftRight"||s.code==="KeyF")&&(pi.dive=!0),s.code==="KeyM"&&Qh(),s.code==="KeyT"&&jh(),s.code==="KeyB"&&K&&!K.menuOpen&&K.swing(),s.code==="KeyC"&&K&&!K.over&&!s.repeat&&K.toggleCar(),s.code==="KeyH"&&K&&!K.menuOpen&&K.honk(),(s.code==="Escape"||s.code==="KeyP")&&K&&!K.over&&(K.menuOpen?Ql():eu()))});window.addEventListener("keyup",s=>Fe.delete(s.code));window.addEventListener("blur",()=>{Fe.clear(),jl=!1});window.addEventListener("resize",os);try{ct.timerOn=localStorage.getItem("ph_timer")!=="0"}catch{ct.timerOn=!0}function jh(){if(!K||!K.multi)return;ct.timerOn=!ct.timerOn;try{localStorage.setItem("ph_timer",ct.timerOn?"1":"0")}catch{}let s=at("b-timer");s&&(s.textContent="\u23F1 TIMER: "+(ct.timerOn?"ON":"OFF")+" (T)",s.classList.toggle("off",!ct.timerOn)),tu(),at("hud-timer").style.visibility=ct.timerOn?"":"hidden",Ht.click()}{let s=at("b-timer");s&&s.addEventListener("click",()=>{jh(),s.blur()})}function Qh(){ct.muted=!ct.muted,Ld(ct.muted),at("b-sound").textContent="SOUND: "+(ct.muted?"OFF":"ON"),tu()}function Kd(){at("p-gfx").textContent="\u{1F5A5} GFX: "+(se.low?"LOW":"AUTO")}function tu(){at("p-sound").textContent="\u{1F50A} SOUND: "+(ct.muted?"OFF":"ON"),at("p-timer").textContent="\u23F1 TIMER: "+(ct.timerOn?"ON":"OFF")}function eu(){!K||K.over||K.menuOpen||(K.menuOpen=!0,K.multi||(K.paused=!0,K.pauseAt=performance.now()),Ra(),Fe.clear(),dn.x=dn.y=0,dn.jump=!1,K.carIn&&(K.carIn.gas=K.carIn.brake=K.carIn.left=K.carIn.right=!1),at("p-title").textContent=K.multi?"Menu":"Paused",at("p-info").textContent=K.meta.name+(K.multi?"  \u2022  race goes on!":""),at("p-timer").classList.toggle("hidden",!K.multi),Kd(),at("p-retry").classList.toggle("hidden",K.multi),at("p-full").classList.toggle("hidden",!(document.documentElement&&document.documentElement.requestFullscreen)),tu(),at("pause").classList.remove("hidden"),at("click-hint").classList.remove("show"),Ht.click())}function Ql(){!K||!K.menuOpen||(K.paused&&(K.t0+=performance.now()-K.pauseAt,K.paused=!1),K.menuOpen=!1,at("pause").classList.add("hidden"),Aa())}at("b-menu").addEventListener("click",()=>K&&K.menuOpen?Ql():eu());at("p-resume").onclick=()=>{Ht.click(),Ql()};at("p-sound").onclick=()=>{di(),Qh(),Ht.click()};at("p-timer").onclick=()=>jh();at("p-gfx").onclick=()=>{se.low=!se.low;try{localStorage.setItem("ph_low",se.low?"1":"0")}catch{}Ht.click(),ky(),Kd()};at("p-full").onclick=()=>{let s=document,t=s.documentElement;try{!s.fullscreenElement&&t.requestFullscreen?t.requestFullscreen({navigationUI:"hide"}):s.exitFullscreen&&s.fullscreenElement&&s.exitFullscreen()}catch{}};at("p-retry").onclick=()=>{Ht.click();let s=ct.level;at("pause").classList.add("hidden"),K&&(K.menuOpen=!1),Ta(s)};at("p-quit").onclick=()=>{Ht.back(),at("pause").classList.add("hidden"),Kh()};async function Jy(){await Ad(),Xe=new Yh;try{qh=Wy()}catch{qh=["","","",""]}os(),Xe.setTitle(),Cn("title"),at("b-single").onclick=()=>{di(),lr(6),Ht.click(),ba("single")},at("b-multi").onclick=()=>{di(),lr(6),Ht.click(),ba("multi")},at("b-help").onclick=()=>{di(),Ht.click(),at("s-help").classList.add("active")},at("b-help-close").onclick=()=>{Ht.back(),at("s-help").classList.remove("active")},at("b-sound").onclick=()=>{di(),Qh(),Ht.click()},at("b-profile-back").onclick=()=>{Ht.back(),Xe.setTitle(),Cn("title")},at("b-profile-next").onclick=()=>{Xy(),Ht.click(),ct.mode==="single"?Jd():Yy()},at("b-levels-back").onclick=()=>{Ht.back(),ba("single")},at("b-mp-back").onclick=()=>{Ht.back(),Kl(),ba("multi")},at("b-create").onclick=()=>{Ht.click(),$h("create")},at("b-join").onclick=()=>{Ht.click(),$h("join")},at("b-leave").onclick=()=>{Ht.back(),Kh()},at("b-start").onclick=()=>{ct.room&&ct.room.hostId===ct.myId&&(Ht.click(),ct.net.send({t:"start"}))},at("b-copy").onclick=async()=>{let n=`${location.origin}${location.pathname}?room=${ct.room?ct.room.code:""}`;try{await navigator.clipboard.writeText(n),wa("Invite link copied!")}catch{prompt("Copy this invite link:",n)}},new URLSearchParams(location.search).get("room")&&(ba("multi"),wa("Pick your name & player, then CONTINUE and JOIN ROOM")),at("loader").classList.add("done"),setTimeout(()=>at("loader").remove(),600);let t=performance.now(),e=n=>{requestAnimationFrame(e);let i=Math.min(.05,(n-t)/1e3);t=n,Hy(i),K?(K.over&&K.menuOpen&&Ql(),K.paused||K.update(i),K.render()):(Xe.update(i),gn.render(Xe.scene,Xe.camera))};requestAnimationFrame(e)}Jy().catch(s=>{console.error(s);let t=document.querySelector("#loader p");t&&(t.textContent="Error: "+s.message)});window.__ph={app:ct,Remote:Ea,startSingle:s=>Ta(s),keys:Fe,press:pi,touch:dn,get race(){return K},get stage(){return Xe}};(function(){Vn&&document.body.classList.add("touch");let t=at("touch"),e=at("joy"),n=at("joy-knob");if(!t||!e||!n)return;let i=56,r=null,a=null,o=0,l=0,c=0,h=0,u=(y,p)=>{for(let m of y)if(m.identifier===p)return m;return null};t.addEventListener("touchstart",y=>{y.preventDefault();for(let p of y.changedTouches)p.clientX<window.innerWidth*.5&&r===null?(r=p.identifier,o=p.clientX,l=p.clientY,e.style.left=o+"px",e.style.top=l+"px",e.classList.add("on"),n.style.transform="translate(-50%, -50%)"):a===null&&p.clientX>=window.innerWidth*.5&&(a=p.identifier,c=p.clientX,h=p.clientY)},{passive:!1}),t.addEventListener("touchmove",y=>{y.preventDefault();let p=r!==null?u(y.touches,r):null;if(p){let S=p.clientX-o,R=p.clientY-l,_=Math.hypot(S,R);_>i&&(S*=i/_,R*=i/_),n.style.transform=`translate(calc(-50% + ${S}px), calc(-50% + ${R}px))`;let b=S/i,E=R/i,D=Math.hypot(b,E),v=D<.14?0:(D-.14)/.86/D;dn.x=b*v,dn.y=-E*v}let m=a!==null?u(y.touches,a):null;m&&(K&&!K.over&&K.look((m.clientX-c)*1.7,(m.clientY-h)*1.7),c=m.clientX,h=m.clientY)},{passive:!1});let f=y=>{for(let p of y.changedTouches)p.identifier===r&&(r=null,dn.x=dn.y=0,e.classList.remove("on")),p.identifier===a&&(a=null)};t.addEventListener("touchend",f),t.addEventListener("touchcancel",f);let d=(y,p,m)=>{let S=at(y);if(!S)return;S.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),p()},{passive:!1});let R=_=>{_.preventDefault(),_.stopPropagation(),m&&m()};S.addEventListener("touchend",R,{passive:!1}),S.addEventListener("touchcancel",R,{passive:!1})};d("t-jump",()=>{K&&!K.over&&(pi.jump=!0,dn.jump=!0)},()=>{dn.jump=!1}),d("t-dive",()=>{K&&!K.over&&(pi.dive=!0)}),d("t-bat",()=>{K&&!K.over&&!K.menuOpen&&K.swing()});let g=(y,p)=>()=>{K&&K.carIn&&(K.carIn[y]=p)};d("c-left",g("left",!0),g("left",!1)),d("c-right",g("right",!0),g("right",!1)),d("c-gas",g("gas",!0),g("gas",!1)),d("c-brake",g("brake",!0),g("brake",!1)),d("c-horn",()=>{K&&K.honk()}),d("b-car",()=>{K&&K.toggleCar()}),d("b-exit",()=>{K&&K.toggleCar()});for(let y of["b-car","b-exit"]){let p=at(y);p&&p.addEventListener("click",()=>{K&&K.toggleCar(),p.blur()})}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
