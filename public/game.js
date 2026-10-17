(()=>{var Wu=0,Hc=1,Xu=2;var ta=1,Vo=2,$s=3,Ai=0,Ze=1,en=2,Kn=0,Ri=1,Ki=2,kc=3,Gc=4,qu=5;var ji=100,Yu=101,Zu=102,$u=103,Ju=104,Ku=200,ju=201,Qu=202,tf=203,Vc=204,Wc=205,ef=206,nf=207,sf=208,rf=209,af=210,of=211,lf=212,cf=213,hf=214,ao=0,oo=1,lo=2,Cs=3,co=4,ho=5,uo=6,fo=7,Wo=0,uf=1,ff=2,On=0,Xc=1,qc=2,Yc=3,Js=4,Zc=5,$c=6,Jc=7;var Kc=300,Ci=301,Qi=302,Xo=303,qo=304,ea=306,Is=1e3,qn=1001,po=1002,je=1003,df=1004;var na=1005;var Qe=1006,Yo=1007;var Ii=1008;var mn=1009,jc=1010,Qc=1011,Ks=1012,Zo=1013,zn=1014,wn=1015,Hn=1016,$o=1017,Jo=1018,js=1020,th=35902,eh=35899,nh=1021,ih=1022,Tn=1023,Zn=1026,Pi=1027,Ko=1028,jo=1029,Li=1030,Qo=1031;var tl=1033,ia=33776,sa=33777,ra=33778,aa=33779,el=35840,nl=35841,il=35842,sl=35843,rl=36196,al=37492,ol=37496,ll=37488,cl=37489,oa=37490,hl=37491,ul=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,yl=37816,vl=37817,Ml=37818,Sl=37819,bl=37820,El=37821,wl=36492,Tl=36494,Al=36495,Rl=36283,Cl=36284,la=36285,Il=36286;var Er=2300,mo=2301,so=2302,Ac=2303,Rc=2400,Cc=2401,Ic=2402;var pf=3200;var ca=0,mf=1,ui="",Te="srgb",wr="srgb-linear",Tr="linear",ve="srgb";var ro=7680;var gf=519,xf=512,_f=513,yf=514,Pl=515,vf=516,Mf=517,Ll=518,Sf=519,sh=35044,Qs=35048;var rh="300 es",Fn=2e3,Ps=2001;function ip(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function sp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bf(){let s=Ar("canvas");return s.style.display="block",s}var hu={},Ls=null;function Rr(...s){let t="THREE."+s.shift();Ls?Ls("log",t,...s):console.log(t,...s)}function Ef(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Jt(...s){s=Ef(s);let t="THREE."+s.shift();if(Ls)Ls("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Kt(...s){s=Ef(s);let t="THREE."+s.shift();if(Ls)Ls("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Wi(...s){let t=s.join(" ");t in hu||(hu[t]=!0,Jt(...s))}function wf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Tf={[ao]:oo,[lo]:uo,[co]:fo,[Cs]:ho,[oo]:ao,[uo]:lo,[fo]:co,[ho]:Cs},$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=1234567,vr=Math.PI/180,Ds=180/Math.PI;function Yn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function le(s,t,e){return Math.max(t,Math.min(e,s))}function ah(s,t){return(s%t+t)%t}function rp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ap(s,t,e){return s!==t?(e-s)/(t-s):0}function Mr(s,t,e){return(1-e)*s+e*t}function op(s,t,e,n){return Mr(s,t,1-Math.exp(-e*n))}function lp(s,t=1){return t-Math.abs(ah(s,t*2)-t)}function cp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function hp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function up(s,t){return s+Math.floor(Math.random()*(t-s+1))}function fp(s,t){return s+Math.random()*(t-s)}function dp(s){return s*(.5-Math.random())}function pp(s){s!==void 0&&(uu=s);let t=uu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mp(s){return s*vr}function gp(s){return s*Ds}function xp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function _p(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vp(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oh={DEG2RAD:vr,RAD2DEG:Ds,generateUUID:Yn,clamp:le,euclideanModulo:ah,mapLinear:rp,inverseLerp:ap,lerp:Mr,damp:op,pingpong:lp,smoothstep:cp,smootherstep:hp,randInt:up,randFloat:fp,randFloatSpread:dp,seededRandom:pp,degToRad:mp,radToDeg:gp,isPowerOfTwo:xp,ceilPowerOfTwo:_p,floorPowerOfTwo:yp,setQuaternionFromProperEuler:vp,normalize:Se,denormalize:Un},dh=class dh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dh.prototype.isVector2=!0;var xt=dh,yn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],m=r[a+2],_=r[a+3];if(u!==_||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*_;g<0&&(f=-f,d=-d,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let S=Math.acos(g),T=Math.sin(S);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T,l=l*p+f*o,c=c*p+d*o,h=h*p+m*o,u=u*p+_*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+m*o,u=u*p+_*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-o*d,t[e+2]=c*m+h*d+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ph=class ph{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nc.copy(this).projectOnVector(t),this.sub(nc)}reflect(t){return this.sub(nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;var z=ph,nc=new z,fu=new yn,mh=class mh{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],S=i[1],T=i[4],x=i[7],b=i[2],E=i[5],N=i[8];return r[0]=a*_+o*S+l*b,r[3]=a*g+o*T+l*E,r[6]=a*p+o*x+l*N,r[1]=c*_+h*S+u*b,r[4]=c*g+h*T+u*E,r[7]=c*p+h*x+u*N,r[2]=f*_+d*S+m*b,r[5]=f*g+d*T+m*E,r[8]=f*p+d*x+m*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ic.makeScale(t,e)),this}rotate(t){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ic.makeRotation(-t)),this}translate(t,e){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;var te=mh,ic=new te,du=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){let s={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?Tr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Wi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Wi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wr]:{primaries:t,whitePoint:n,transfer:Tr,toXYZ:du,fromXYZ:pu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:du,fromXYZ:pu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),s}var ue=Mp();function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var hs,go=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hs===void 0&&(hs=Ar("canvas")),hs.width=t.width,hs.height=t.height;let i=hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sp=0,Ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(sc(i[a].image)):r.push(sc(i[a]))}else r=sc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function sc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?go.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var bp=0,rc=new z,un=class s extends $n{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=qn,i=qn,r=Qe,a=Ii,o=Tn,l=mn,c=s.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Yn(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Kc;un.DEFAULT_ANISOTROPY=1;var gh=class gh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,x=(d+1)/2,b=(p+1)/2,E=(h+f)/4,N=(u+_)/4,y=(m+g)/4;return T>x&&T>b?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=E/n,r=N/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=N/r,i=y/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gh.prototype.isVector4=!0;var Le=gh,xo=class extends $n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new un(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ns(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends xo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Cr=class extends un{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _o=class extends un{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Go=class Go{constructor(t,e,n,i,r,a,o,l,c,h,u,f,d,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,d,m,_,g)}set(t,e,n,i,r,a,o,l,c,h,u,f,d,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Go().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,m=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f+_*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,m=o*h,_=o*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*l,d=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ep,t,wp)}lookAt(t,e,n){let i=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),_i.crossVectors(n,xn),_i.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),_i.crossVectors(n,xn)),_i.normalize(),Pa.crossVectors(xn,_i),i[0]=_i.x,i[4]=Pa.x,i[8]=xn.x,i[1]=_i.y,i[5]=Pa.y,i[9]=xn.y,i[2]=_i.z,i[6]=Pa.z,i[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],S=n[3],T=n[7],x=n[11],b=n[15],E=i[0],N=i[4],y=i[8],A=i[12],D=i[1],O=i[5],M=i[9],P=i[13],C=i[2],R=i[6],U=i[10],B=i[14],k=i[3],H=i[7],q=i[11],X=i[15];return r[0]=a*E+o*D+l*C+c*k,r[4]=a*N+o*O+l*R+c*H,r[8]=a*y+o*M+l*U+c*q,r[12]=a*A+o*P+l*B+c*X,r[1]=h*E+u*D+f*C+d*k,r[5]=h*N+u*O+f*R+d*H,r[9]=h*y+u*M+f*U+d*q,r[13]=h*A+u*P+f*B+d*X,r[2]=m*E+_*D+g*C+p*k,r[6]=m*N+_*O+g*R+p*H,r[10]=m*y+_*M+g*U+p*q,r[14]=m*A+_*P+g*B+p*X,r[3]=S*E+T*D+x*C+b*k,r[7]=S*N+T*O+x*R+b*H,r[11]=S*y+T*M+x*U+b*q,r[15]=S*A+T*P+x*B+b*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15],S=l*d-c*f,T=o*d-c*u,x=o*f-l*u,b=a*d-c*h,E=a*f-l*h,N=a*u-o*h;return e*(_*S-g*T+p*x)-n*(m*S-g*b+p*E)+i*(m*T-_*b+p*N)-r*(m*x-_*E+g*N)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],S=e*o-n*a,T=e*l-i*a,x=e*c-r*a,b=n*l-i*o,E=n*c-r*o,N=i*c-r*l,y=h*_-u*m,A=h*g-f*m,D=h*p-d*m,O=u*g-f*_,M=u*p-d*_,P=f*p-d*g,C=S*P-T*M+x*O+b*D-E*A+N*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=(o*P-l*M+c*O)*R,t[1]=(i*M-n*P-r*O)*R,t[2]=(_*N-g*E+p*b)*R,t[3]=(f*E-u*N-d*b)*R,t[4]=(l*D-a*P-c*A)*R,t[5]=(e*P-i*D+r*A)*R,t[6]=(g*x-m*N-p*T)*R,t[7]=(h*N-f*x+d*T)*R,t[8]=(a*M-o*D+c*y)*R,t[9]=(n*D-e*M-r*y)*R,t[10]=(m*E-_*x+p*S)*R,t[11]=(u*x-h*E-d*S)*R,t[12]=(o*A-a*O-l*y)*R,t[13]=(e*O-n*A+i*y)*R,t[14]=(_*T-m*b-g*S)*R,t[15]=(h*b-u*T+f*S)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,_=a*h,g=a*u,p=o*u,S=l*c,T=l*h,x=l*u,b=n.x,E=n.y,N=n.z;return i[0]=(1-(_+p))*b,i[1]=(d+x)*b,i[2]=(m-T)*b,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+p))*E,i[6]=(g+S)*E,i[7]=0,i[8]=(m+T)*N,i[9]=(g-S)*N,i[10]=(1-(f+_))*N,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=us.set(i[0],i[1],i[2]).length(),o=us.set(i[4],i[5],i[6]).length(),l=us.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Pn.copy(this);let c=1/a,h=1/o,u=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Fn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===Fn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ps)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Fn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===Fn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ps)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Go.prototype.isMatrix4=!0;var xe=Go,us=new z,Pn=new xe,Ep=new z(0,0,0),wp=new z(1,1,1),_i=new z,Pa=new z,xn=new z,mu=new xe,gu=new yn,vn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gu.setFromEuler(this),this.setFromQuaternion(gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tp=0,xu=new z,fs=new yn,ni=new xe,La=new z,hr=new z,Ap=new z,Rp=new yn,_u=new z(1,0,0),yu=new z(0,1,0),vu=new z(0,0,1),Mu={type:"added"},Cp={type:"removed"},ds={type:"childadded",child:null},ac={type:"childremoved",child:null},Ve=class s extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new z,e=new vn,n=new yn,i=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new te}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(_u,t)}rotateY(t){return this.rotateOnAxis(yu,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return xu.copy(t).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_u,t)}translateY(t){return this.translateOnAxis(yu,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?La.copy(t):La.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(hr,La,this.up):ni.lookAt(La,hr,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(ni),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mu),ds.child=t,this.dispatchEvent(ds),ds.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cp),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mu),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new z(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ne=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ip={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Da={h:0,s:0,l:0};function oc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=ah(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oc(a,r,t+1/3),this.g=oc(a,r,t),this.b=oc(a,r,t-1/3)}return ue.colorSpaceToWorking(this,i),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=Af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return ue.workingToColorSpace(rn.copy(this),t),Math.round(le(rn.r*255,0,255))*65536+Math.round(le(rn.g*255,0,255))*256+Math.round(le(rn.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(rn.copy(this),e);let n=rn.r,i=rn.g,r=rn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Te){ue.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,i=rn.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Da);let n=Mr(yi.h,Da.h,e),i=Mr(yi.s,Da.s,e),r=Mr(yi.l,Da.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Dt;Dt.NAMES=Af;var Fs=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ci=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ln=new z,ii=new z,lc=new z,si=new z,ps=new z,ms=new z,Su=new z,cc=new z,hc=new z,uc=new z,fc=new Le,dc=new Le,pc=new Le,oi=class s{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ln.subVectors(t,e),i.cross(Ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ln.subVectors(i,e),ii.subVectors(n,e),lc.subVectors(t,e);let a=Ln.dot(Ln),o=Ln.dot(ii),l=Ln.dot(lc),c=ii.dot(ii),h=ii.dot(lc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return fc.setScalar(0),dc.setScalar(0),pc.setScalar(0),fc.fromBufferAttribute(t,e),dc.fromBufferAttribute(t,n),pc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(fc,r.x),a.addScaledVector(dc,r.y),a.addScaledVector(pc,r.z),a}static isFrontFacing(t,e,n,i){return Ln.subVectors(n,e),ii.subVectors(t,e),Ln.cross(ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ln.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ps.subVectors(i,n),ms.subVectors(r,n),cc.subVectors(t,n);let l=ps.dot(cc),c=ms.dot(cc);if(l<=0&&c<=0)return e.copy(n);hc.subVectors(t,i);let h=ps.dot(hc),u=ms.dot(hc);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ps,a);uc.subVectors(t,r);let d=ps.dot(uc),m=ms.dot(uc);if(m>=0&&d<=m)return e.copy(r);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(ms,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Su.subVectors(r,i),o=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(Su,o);let p=1/(g+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(t.matrixWorld),this.union(Na)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Ua.subVectors(this.max,ur),gs.subVectors(t.a,ur),xs.subVectors(t.b,ur),_s.subVectors(t.c,ur),vi.subVectors(xs,gs),Mi.subVectors(_s,xs),zi.subVectors(gs,_s);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-zi.z,zi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,zi.z,0,-zi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-zi.y,zi.x,0];return!mc(e,gs,xs,_s,Ua)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,gs,xs,_s,Ua))?!1:(Fa.crossVectors(vi,Mi),e=[Fa.x,Fa.y,Fa.z],mc(e,gs,xs,_s,Ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new z,new z,new z,new z,new z,new z,new z,new z],Dn=new z,Na=new Jn,gs=new z,xs=new z,_s=new z,vi=new z,Mi=new z,zi=new z,ur=new z,Ua=new z,Fa=new z,Hi=new z;function mc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Hi.fromArray(s,r);let o=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ge=new z,Ba=new xt,Pp=0,Ae=class extends $n{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Pr=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Lr=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lp=new Jn,fr=new z,gc=new z,hi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);let e=fr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(gc)),this.expandByPoint(fr.copy(t.center).sub(gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Dp=0,En=new xe,xc=new Ve,ys=new z,_n=new Jn,dr=new Jn,Ke=new z,Re=class s extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ip(t)?Lr:Pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return xc.lookAt(t),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(_n.min,dr.min),_n.expandByPoint(Ke),Ke.addVectors(_n.max,dr.max),_n.expandByPoint(Ke)):(_n.expandByPoint(dr.min),_n.expandByPoint(dr.max))}_n.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ke.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(t,c),Ke.add(ys)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new z,l[y]=new z;let c=new z,h=new z,u=new z,f=new xt,d=new xt,m=new xt,_=new z,g=new z;function p(y,A,D){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,D),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,D),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let O=1/(d.x*m.y-m.x*d.y);isFinite(O)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(O),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(O),o[y].add(_),o[A].add(_),o[D].add(_),l[y].add(g),l[A].add(g),l[D].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let y=0,A=S.length;y<A;++y){let D=S[y],O=D.start,M=D.count;for(let P=O,C=O+M;P<C;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let T=new z,x=new z,b=new z,E=new z;function N(y){b.fromBufferAttribute(i,y),E.copy(b);let A=o[y];T.copy(A),T.sub(b.multiplyScalar(b.dot(A))).normalize(),x.crossVectors(E,A);let O=x.dot(l[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,O)}for(let y=0,A=S.length;y<A;++y){let D=S[y],O=D.start,M=D.count;for(let P=O,C=O+M;P<C;P+=3)N(t.getX(P+0)),N(t.getX(P+1)),N(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Ae(f,h,u)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},hn=new z,Bs=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Rr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Rr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_c=new z,Np=new z,Up=new te,Nn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=_c.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(_c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Up.getNormalMatrix(t),i=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fp=0,Bn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Ri,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Wc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Os=class extends Bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vs,pr=new z,Ms=new z,Ss=new z,bs=new xt,mr=new xt,Rf=new xe,Oa=new z,gr=new z,za=new z,bu=new xt,yc=new xt,Eu=new xt,Nr=class extends Ve{constructor(t=new Os){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dr(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Bs(n,3,0,!1)),vs.setAttribute("uv",new Bs(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),Rf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Ss.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ha(Oa.set(-.5,-.5,0),Ss,a,Ms,i,r),Ha(gr.set(.5,-.5,0),Ss,a,Ms,i,r),Ha(za.set(.5,.5,0),Ss,a,Ms,i,r),bu.set(0,0),yc.set(1,0),Eu.set(1,1);let o=t.ray.intersectTriangle(Oa,gr,za,!1,pr);if(o===null&&(Ha(gr.set(-.5,.5,0),Ss,a,Ms,i,r),yc.set(0,1),o=t.ray.intersectTriangle(Oa,za,gr,!1,pr),o===null))return;let l=t.ray.origin.distanceTo(pr);l<t.near||l>t.far||e.push({distance:l,point:pr.clone(),uv:oi.getInterpolation(pr,Oa,gr,za,bu,yc,Eu,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ha(s,t,e,n,i,r){bs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(mr.x=r*bs.x-i*bs.y,mr.y=i*bs.x+r*bs.y):mr.copy(bs),s.copy(t),s.x+=mr.x,s.y+=mr.y,s.applyMatrix4(Rf)}var ai=new z,vc=new z,ka=new z,Ga=new z,Ur=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){vc.copy(t).add(e).multiplyScalar(.5),ka.copy(e).sub(t).normalize(),Ga.copy(this.origin).sub(vc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ka),o=Ga.dot(this.direction),l=-Ga.dot(ka),c=Ga.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(vc).addScaledVector(ka,f),d}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,m=e.x-a.x,_=e.y-a.y,g=e.z-a.z,p=n.x-a.x,S=n.y-a.y,T=n.z-a.z,x=Math.abs(l),b=Math.abs(c),E=Math.abs(h),N,y,A,D,O,M,P,C,R,U,B,k;if(x>=b&&x>=E?(A=l,M=u,R=m,k=p,l>=0?(N=c,y=h,D=f,O=d,P=_,C=g,U=S,B=T):(N=h,y=c,D=d,O=f,P=g,C=_,U=T,B=S)):b>=E?(A=c,M=f,R=_,k=S,c>=0?(N=h,y=l,D=d,O=u,P=g,C=m,U=T,B=p):(N=l,y=h,D=u,O=d,P=m,C=g,U=p,B=T)):(A=h,M=d,R=g,k=T,h>=0?(N=l,y=c,D=u,O=f,P=m,C=_,U=p,B=S):(N=c,y=l,D=f,O=u,P=_,C=m,U=S,B=p)),A===0)return null;let H=N/A,q=y/A,X=1/A,lt=D-H*M,at=O-q*M,It=P-H*R,$t=C-q*R,ee=U-H*k,j=B-q*k,et=ee*$t-j*It,dt=lt*j-at*ee,Gt=It*at-$t*lt;if(i){if(et<0||dt<0||Gt<0)return null}else if((et<0||dt<0||Gt<0)&&(et>0||dt>0||Gt>0))return null;let wt=et+dt+Gt;if(wt===0)return null;let Wt=X*(et*M+dt*R+Gt*k);return(wt>0?Wt<0:Wt>0)?null:this.at(Wt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wu=new xe,ki=new Ur,Va=new hi,Tu=new z,Wa=new z,Xa=new z,qa=new z,Mc=new z,Ya=new z,Au=new z,Za=new z,it=class extends Ve{constructor(t=new Re,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Mc.fromBufferAttribute(u,t),a?Ya.addScaledVector(Mc,h):Ya.addScaledVector(Mc.sub(e),h))}e.add(Ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(Va.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Va,Tu)===null||ki.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(wu.copy(r).invert(),ki.copy(t.ray).applyMatrix4(wu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),T=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,b=T;x<b;x+=3){let E=o.getX(x),N=o.getX(x+1),y=o.getX(x+2);i=$a(this,p,t,n,c,h,u,E,N,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let S=o.getX(g),T=o.getX(g+1),x=o.getX(g+2);i=$a(this,a,t,n,c,h,u,S,T,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),T=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,b=T;x<b;x+=3){let E=x,N=x+1,y=x+2;i=$a(this,p,t,n,c,h,u,E,N,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let S=g,T=g+1,x=g+2;i=$a(this,a,t,n,c,h,u,S,T,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Bp(s,t,e,n,i,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ai,o),l===null)return null;Za.copy(o),Za.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Za);return c<e.near||c>e.far?null:{distance:c,point:Za.clone(),object:s}}function $a(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Wa),s.getVertexPosition(l,Xa),s.getVertexPosition(c,qa);let h=Bp(s,t,e,n,Wa,Xa,qa,Au);if(h){let u=new z;oi.getBarycoord(Au,Wa,Xa,qa,u),i&&(h.uv=oi.getInterpolatedAttribute(i,o,l,c,u,new xt)),r&&(h.uv1=oi.getInterpolatedAttribute(r,o,l,c,u,new xt)),a&&(h.normal=oi.getInterpolatedAttribute(a,o,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new z,materialIndex:0};oi.getNormal(Wa,Xa,qa,f.normal),h.face=f,h.barycoord=u}return h}var Fr=class extends un{constructor(t=null,e=1,n=1,i,r,a,o,l,c=je,h=je,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zs=class extends Ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new xe,Ru=new xe,Ja=[],Cu=new Jn,Op=new xe,xr=new it,_r=new hi,Br=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Op)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Cu.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Cu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),_r.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(_r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),t.ray.intersectsSphere(_r)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Es),Ru.multiplyMatrices(n,Es),xr.matrixWorld=Ru,xr.raycast(t,Ja);for(let a=0,o=Ja.length;a<o;a++){let l=Ja[a];l.instanceId=r,l.object=this,e.push(l)}Ja.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(i*this.count),i,this.count,Ko,wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new hi,zp=new xt(.5,.5),Ka=new z,Hs=class{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,r=new Nn,a=new Nn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],S=r[12],T=r[13],x=r[14],b=r[15];if(i[0].setComponents(c-a,d-h,p-m,b-S).normalize(),i[1].setComponents(c+a,d+h,p+m,b+S).normalize(),i[2].setComponents(c+o,d+u,p+_,b+T).normalize(),i[3].setComponents(c-o,d-u,p-_,b-T).normalize(),n)i[4].setComponents(l,f,g,x).normalize(),i[5].setComponents(c-l,d-f,p-g,b-x).normalize();else if(i[4].setComponents(c-l,d-f,p-g,b-x).normalize(),e===Fn)i[5].setComponents(c+l,d+f,p+g,b+x).normalize();else if(e===Ps)i[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=zp.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ka.x=i.normal.x>0?t.max.x:t.min.x,Ka.y=i.normal.y>0?t.max.y:t.min.y,Ka.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xi=class extends Bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Iu=new xe,Pc=new Ur,ja=new hi,Qa=new z,qi=class extends Ve{constructor(t=new Re,e=new Xi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,t.ray.intersectsSphere(ja)===!1)return;Iu.copy(i).invert(),Pc.copy(t.ray).applyMatrix4(Iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,_=d;m<_;m++){let g=c.getX(m);Qa.fromBufferAttribute(u,g),Pu(Qa,g,l,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,_=d;m<_;m++)Qa.fromBufferAttribute(u,m),Pu(Qa,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pu(s,t,e,n,i,r,a){let o=Pc.distanceSqToPoint(s);if(o<e){let l=new z;Pc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Or=class extends un{constructor(t=[],e=Ci,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fn=class extends un{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends un{constructor(t,e,n=zn,i,r,a,o=je,l=je,c,h=Zn,u=1){if(h!==Zn&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yo=class extends bi{constructor(t,e=zn,n=Ci,i,r,a=je,o=je,l,c=Zn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zr=class extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},De=class s extends Re{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function m(_,g,p,S,T,x,b,E,N,y,A){let D=x/N,O=b/y,M=x/2,P=b/2,C=E/2,R=N+1,U=y+1,B=0,k=0,H=new z;for(let q=0;q<U;q++){let X=q*O-P;for(let lt=0;lt<R;lt++){let at=lt*D-M;H[_]=at*S,H[g]=X*T,H[p]=C,c.push(H.x,H.y,H.z),H[_]=0,H[g]=0,H[p]=E>0?1:-1,h.push(H.x,H.y,H.z),u.push(lt/N),u.push(1-q/y),B+=1}}for(let q=0;q<y;q++)for(let X=0;X<N;X++){let lt=f+X+R*q,at=f+X+R*(q+1),It=f+(X+1)+R*(q+1),$t=f+(X+1)+R*q;l.push(lt,at,$t),l.push(at,It,$t),k+=6}o.addGroup(d,k,A),d+=k,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ks=class s extends Re{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,m=n*2+r,_=i+1,g=new z,p=new z;for(let S=0;S<=m;S++){let T=0,x=0,b=0,E=0;if(S<=n){let A=S/n,D=A*Math.PI/2;x=-h-t*Math.cos(D),b=t*Math.sin(D),E=-t*Math.cos(D),T=A*u}else if(S<=n+r){let A=(S-n)/r;x=-h+A*e,b=t,E=0,T=u+A*f}else{let A=(S-n-r)/n,D=A*Math.PI/2;x=h+t*Math.sin(D),b=t*Math.cos(D),E=t*Math.sin(D),T=u+f+A*u}let N=Math.max(0,Math.min(1,T/d)),y=0;S===0?y=.5/i:S===m&&(y=-.5/i);for(let A=0;A<=i;A++){let D=A/i,O=D*Math.PI*2,M=Math.sin(O),P=Math.cos(O);p.x=-b*P,p.y=x,p.z=b*M,o.push(p.x,p.y,p.z),g.set(-b*P,E,b*M),g.normalize(),l.push(g.x,g.y,g.z),c.push(D+y,N)}if(S>0){let A=(S-1)*_;for(let D=0;D<i;D++){let O=A+D,M=A+D+1,P=S*_+D,C=S*_+D+1;a.push(O,M,P),a.push(M,C,P)}}}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Yi=class s extends Re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new z,h=new xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(o,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Yt=class s extends Re{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,_=[],g=n/2,p=0;S(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function S(){let x=new z,b=new z,E=0,N=(e-t)/n;for(let y=0;y<=r;y++){let A=[],D=y/r,O=D*(e-t)+t;for(let M=0;M<=i;M++){let P=M/i,C=P*l+o,R=Math.sin(C),U=Math.cos(C);b.x=O*R,b.y=-D*n+g,b.z=O*U,u.push(b.x,b.y,b.z),x.set(R,N,U).normalize(),f.push(x.x,x.y,x.z),d.push(P,1-D),A.push(m++)}_.push(A)}for(let y=0;y<i;y++)for(let A=0;A<r;A++){let D=_[A][y],O=_[A+1][y],M=_[A+1][y+1],P=_[A][y+1];(t>0||A!==0)&&(h.push(D,O,P),E+=3),(e>0||A!==r-1)&&(h.push(O,M,P),E+=3)}c.addGroup(p,E,0),p+=E}function T(x){let b=m,E=new xt,N=new z,y=0,A=x===!0?t:e,D=x===!0?1:-1;for(let M=1;M<=i;M++)u.push(0,g*D,0),f.push(0,D,0),d.push(.5,.5),m++;let O=m;for(let M=0;M<=i;M++){let C=M/i*l+o,R=Math.cos(C),U=Math.sin(C);N.x=A*U,N.y=g*D,N.z=A*R,u.push(N.x,N.y,N.z),f.push(0,D,0),E.x=R*.5+.5,E.y=U*.5*D+.5,d.push(E.x,E.y),m++}for(let M=0;M<i;M++){let P=b+M,C=O+M;x===!0?h.push(C,C+1,P):h.push(C+1,C,P),y+=3}c.addGroup(p,y,x===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},tn=class s extends Yt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vo=class s extends Re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let T=new z,x=new z,b=new z;for(let E=0;E<e.length;E+=3)d(e[E+0],T),d(e[E+1],x),d(e[E+2],b),l(T,x,b,S)}function l(S,T,x,b){let E=b+1,N=[];for(let y=0;y<=E;y++){N[y]=[];let A=S.clone().lerp(x,y/E),D=T.clone().lerp(x,y/E),O=E-y;for(let M=0;M<=O;M++)M===0&&y===E?N[y][M]=A:N[y][M]=A.clone().lerp(D,M/O)}for(let y=0;y<E;y++)for(let A=0;A<2*(E-y)-1;A++){let D=Math.floor(A/2);A%2===0?(f(N[y][D+1]),f(N[y+1][D]),f(N[y][D])):(f(N[y][D+1]),f(N[y+1][D+1]),f(N[y+1][D]))}}function c(S){let T=new z;for(let x=0;x<r.length;x+=3)T.x=r[x+0],T.y=r[x+1],T.z=r[x+2],T.normalize().multiplyScalar(S),r[x+0]=T.x,r[x+1]=T.y,r[x+2]=T.z}function h(){let S=new z;for(let T=0;T<r.length;T+=3){S.x=r[T+0],S.y=r[T+1],S.z=r[T+2];let x=g(S)/2/Math.PI+.5,b=p(S)/Math.PI+.5;a.push(x,1-b)}m(),u()}function u(){for(let S=0;S<a.length;S+=6){let T=a[S+0],x=a[S+2],b=a[S+4],E=Math.max(T,x,b),N=Math.min(T,x,b);E>.9&&N<.1&&(T<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,T){let x=S*3;T.x=t[x+0],T.y=t[x+1],T.z=t[x+2]}function m(){let S=new z,T=new z,x=new z,b=new z,E=new xt,N=new xt,y=new xt;for(let A=0,D=0;A<r.length;A+=9,D+=6){S.set(r[A+0],r[A+1],r[A+2]),T.set(r[A+3],r[A+4],r[A+5]),x.set(r[A+6],r[A+7],r[A+8]),E.set(a[D+0],a[D+1]),N.set(a[D+2],a[D+3]),y.set(a[D+4],a[D+5]),b.copy(S).add(T).add(x).divideScalar(3);let O=g(b);_(E,D+0,S,O),_(N,D+2,T,O),_(y,D+4,x,O)}}function _(S,T,x,b){b<0&&S.x===1&&(a[T]=S.x-1),x.x===0&&x.z===0&&(a[T]=b/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new xt:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,i=[],r=[],a=[],o=new z,l=new xe;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(le(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(le(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Gs=class extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new xt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Mo=class extends Gs{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Lu=new z,Du=new z,Sc=new lh,bc=new lh,Ec=new lh,So=class extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new z){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Du.subVectors(i[0],i[1]).add(i[0]),c=Du);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Lu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Lu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Sc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,g),bc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,g),Ec.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),bc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ec.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Sc.calc(l),bc.calc(l),Ec.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nu(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Hp(s,t){let e=1-s;return e*e*t}function kp(s,t){return 2*(1-s)*s*t}function Gp(s,t){return s*s*t}function Sr(s,t,e,n){return Hp(s,t)+kp(s,e)+Gp(s,n)}function Vp(s,t){let e=1-s;return e*e*e*t}function Wp(s,t){let e=1-s;return 3*e*e*s*t}function Xp(s,t){return 3*(1-s)*s*s*t}function qp(s,t){return s*s*s*t}function br(s,t,e,n,i){return Vp(s,t)+Wp(s,e)+Xp(s,n)+qp(s,i)}var Hr=class extends Mn{constructor(t=new xt,e=new xt,n=new xt,i=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new xt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(t,i.x,r.x,a.x,o.x),br(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bo=class extends Mn{constructor(t=new z,e=new z,n=new z,i=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new z){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(t,i.x,r.x,a.x,o.x),br(t,i.y,r.y,a.y,o.y),br(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kr=class extends Mn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends Mn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends Mn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Sr(t,i.x,r.x,a.x),Sr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends Mn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Sr(t,i.x,r.x,a.x),Sr(t,i.y,r.y,a.y),Sr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Nu(o,l.x,c.x,h.x,u.x),Nu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new xt().fromArray(i))}return this}},Lc=Object.freeze({__proto__:null,ArcCurve:Mo,CatmullRomCurve3:So,CubicBezierCurve:Hr,CubicBezierCurve3:bo,EllipseCurve:Gs,LineCurve:kr,LineCurve3:Eo,QuadraticBezierCurve:Gr,QuadraticBezierCurve3:wo,SplineCurve:Vr}),To=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Lc[i.type]().fromJSON(i))}return this}},Wr=class extends To{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new kr(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Gr(this.currentPoint.clone(),new xt(t,e),new xt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Hr(this.currentPoint.clone(),new xt(t,e),new xt(n,i),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Vr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Gs(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Vs=class extends Wr{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Wr().fromJSON(i))}return this}};function Yp(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Cf(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=jp(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,u=l;for(let f=e;f<i;f+=e){let d=s[f],m=s[f+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Xr(r,a,e,o,l,c,0),a}function Cf(s,t,e,n,i){let r;if(i===cm(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Uu(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Uu(a/n|0,s[a],s[a+1],r);return r&&Ws(r,r.next)&&(Yr(r),r=r.next),r}function Zi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ws(e,e.next)||Be(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&im(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?$p(s,n,i,r):Zp(s)){t.push(l.i,s.i,c.i),Yr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Jp(Zi(s),t),Xr(s,t,e,n,i,r,2)):a===2&&Kp(s,t,e,n,i,r):Xr(Zi(s),t,e,n,i,r,1);break}}}function Zp(s){let t=s.prev,e=s,n=s.next;if(Be(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),f=Math.max(i,r,a),d=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&yr(i,o,r,l,a,c,m.x,m.y)&&Be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $p(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Be(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=Math.min(o,l,c),m=Math.min(h,u,f),_=Math.max(o,l,c),g=Math.max(h,u,f),p=Dc(d,m,t,e,n),S=Dc(_,g,t,e,n),T=s.prevZ,x=s.nextZ;for(;T&&T.z>=p&&x&&x.z<=S;){if(T.x>=d&&T.x<=_&&T.y>=m&&T.y<=g&&T!==i&&T!==a&&yr(o,h,l,u,c,f,T.x,T.y)&&Be(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&yr(o,h,l,u,c,f,x.x,x.y)&&Be(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=_&&T.y>=m&&T.y<=g&&T!==i&&T!==a&&yr(o,h,l,u,c,f,T.x,T.y)&&Be(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&yr(o,h,l,u,c,f,x.x,x.y)&&Be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jp(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Ws(n,i)&&Pf(n,e,e.next,i)&&qr(n,i)&&qr(i,n)&&(t.push(n.i,e.i,i.i),Yr(e),Yr(e.next),e=s=i),e=e.next}while(e!==s);return Zi(e)}function Kp(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&am(a,o)){let l=Lf(a,o);a=Zi(a,a.next),l=Zi(l,l.next),Xr(a,t,e,n,i,r,0),Xr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function jp(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Cf(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(rm(c))}i.sort(Qp);for(let r=0;r<i.length;r++)e=tm(i[r],e);return e}function Qp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function tm(s,t){let e=em(s,t);if(!e)return t;let n=Lf(e,s);return Zi(n,n.next),Zi(e,e.next)}function em(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(Ws(s,e))return e;do{if(Ws(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&If(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);qr(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&nm(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function nm(s,t){return Be(s.prev,s,t.prev)<0&&Be(t.next,s,s.next)<0}function im(s,t,e,n){let i=s;do i.z===0&&(i.z=Dc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,sm(i)}function sm(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Dc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function rm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function If(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function yr(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&If(s,t,e,n,i,r,a,o)}function am(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!om(s,t)&&(qr(s,t)&&qr(t,s)&&lm(s,t)&&(Be(s.prev,s,t.prev)||Be(s,t.prev,t))||Ws(s,t)&&Be(s.prev,s,s.next)>0&&Be(t.prev,t,t.next)>0)}function Be(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ws(s,t){return s.x===t.x&&s.y===t.y}function Pf(s,t,e,n){let i=eo(Be(s,t,e)),r=eo(Be(s,t,n)),a=eo(Be(e,n,s)),o=eo(Be(e,n,t));return!!(i!==r&&a!==o||i===0&&to(s,e,t)||r===0&&to(s,n,t)||a===0&&to(e,s,n)||o===0&&to(e,t,n))}function to(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function eo(s){return s>0?1:s<0?-1:0}function om(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Pf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function qr(s,t){return Be(s.prev,s,s.next)<0?Be(s,t,s.next)>=0&&Be(s,s.prev,t)>=0:Be(s,t,s.prev)<0||Be(s,s.next,t)<0}function lm(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Lf(s,t){let e=Nc(s.i,s.x,s.y),n=Nc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Uu(s,t,e,n){let i=Nc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Nc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cm(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Uc=class{static triangulate(t,e,n=2){return Yp(t,e,n)}},Vi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Fu(t),Bu(n,t);let a=t.length;e.forEach(Fu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Bu(n,e[l]);let o=Uc.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Fu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Bu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Xs=class s extends Re{constructor(t=new Vs([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new fe(i,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:hm,T,x=!1,b,E,N,y;if(p){T=p.getSpacedPoints(h),x=!0,f=!1;let rt=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,rt),E=new z,N=new z,y=new z}f||(g=0,d=0,m=0,_=0);let A=o.extractPoints(c),D=A.shape,O=A.holes;if(!Vi.isClockWise(D)){D=D.reverse();for(let rt=0,ct=O.length;rt<ct;rt++){let ft=O[rt];Vi.isClockWise(ft)&&(O[rt]=ft.reverse())}}function P(rt){let ft=10000000000000001e-36,pt=rt[0];for(let _t=1;_t<=rt.length;_t++){let Xt=_t%rt.length,zt=rt[Xt],Zt=zt.x-pt.x,jt=zt.y-pt.y,I=Zt*Zt+jt*jt,mt=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(pt.x),Math.abs(pt.y)),Mt=ft*mt*mt;if(I<=Mt){rt.splice(Xt,1),_t--;continue}pt=zt}}P(D),O.forEach(P);let C=O.length,R=D;for(let rt=0;rt<C;rt++){let ct=O[rt];D=D.concat(ct)}function U(rt,ct,ft){return ct||Kt("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ct,ft)}let B=D.length;function k(rt,ct,ft){let pt,_t,Xt,zt=rt.x-ct.x,Zt=rt.y-ct.y,jt=ft.x-rt.x,I=ft.y-rt.y,mt=zt*zt+Zt*Zt,Mt=zt*I-Zt*jt;if(Math.abs(Mt)>Number.EPSILON){let L=Math.sqrt(mt),v=Math.sqrt(jt*jt+I*I),F=ct.x-Zt/L,G=ct.y+zt/L,Y=ft.x-I/v,tt=ft.y+jt/v,ut=((Y-F)*I-(tt-G)*jt)/(zt*I-Zt*jt);pt=F+zt*ut-rt.x,_t=G+Zt*ut-rt.y;let J=pt*pt+_t*_t;if(J<=2)return new xt(pt,_t);Xt=Math.sqrt(J/2)}else{let L=!1;zt>Number.EPSILON?jt>Number.EPSILON&&(L=!0):zt<-Number.EPSILON?jt<-Number.EPSILON&&(L=!0):Math.sign(Zt)===Math.sign(I)&&(L=!0),L?(pt=-Zt,_t=zt,Xt=Math.sqrt(mt)):(pt=zt,_t=Zt,Xt=Math.sqrt(mt/2))}return new xt(pt/Xt,_t/Xt)}let H=[];for(let rt=0,ct=R.length,ft=ct-1,pt=rt+1;rt<ct;rt++,ft++,pt++)ft===ct&&(ft=0),pt===ct&&(pt=0),H[rt]=k(R[rt],R[ft],R[pt]);let q=[],X,lt=H.concat();for(let rt=0,ct=C;rt<ct;rt++){let ft=O[rt];X=[];for(let pt=0,_t=ft.length,Xt=_t-1,zt=pt+1;pt<_t;pt++,Xt++,zt++)Xt===_t&&(Xt=0),zt===_t&&(zt=0),X[pt]=k(ft[pt],ft[Xt],ft[zt]);q.push(X),lt=lt.concat(X)}let at;if(g===0)at=Vi.triangulateShape(R,O);else{let rt=[],ct=[];for(let ft=0;ft<g;ft++){let pt=ft/g,_t=d*Math.cos(pt*Math.PI/2),Xt=m*Math.sin(pt*Math.PI/2)+_;for(let zt=0,Zt=R.length;zt<Zt;zt++){let jt=U(R[zt],H[zt],Xt);dt(jt.x,jt.y,-_t),pt===0&&rt.push(jt)}for(let zt=0,Zt=C;zt<Zt;zt++){let jt=O[zt];X=q[zt];let I=[];for(let mt=0,Mt=jt.length;mt<Mt;mt++){let L=U(jt[mt],X[mt],Xt);dt(L.x,L.y,-_t),pt===0&&I.push(L)}pt===0&&ct.push(I)}}at=Vi.triangulateShape(rt,ct)}let It=at.length,$t=m+_;for(let rt=0;rt<B;rt++){let ct=f?U(D[rt],lt[rt],$t):D[rt];x?(N.copy(b.normals[0]).multiplyScalar(ct.x),E.copy(b.binormals[0]).multiplyScalar(ct.y),y.copy(T[0]).add(N).add(E),dt(y.x,y.y,y.z)):dt(ct.x,ct.y,0)}for(let rt=1;rt<=h;rt++)for(let ct=0;ct<B;ct++){let ft=f?U(D[ct],lt[ct],$t):D[ct];x?(N.copy(b.normals[rt]).multiplyScalar(ft.x),E.copy(b.binormals[rt]).multiplyScalar(ft.y),y.copy(T[rt]).add(N).add(E),dt(y.x,y.y,y.z)):dt(ft.x,ft.y,u/h*rt)}for(let rt=g-1;rt>=0;rt--){let ct=rt/g,ft=d*Math.cos(ct*Math.PI/2),pt=m*Math.sin(ct*Math.PI/2)+_;for(let _t=0,Xt=R.length;_t<Xt;_t++){let zt=U(R[_t],H[_t],pt);dt(zt.x,zt.y,u+ft)}for(let _t=0,Xt=O.length;_t<Xt;_t++){let zt=O[_t];X=q[_t];for(let Zt=0,jt=zt.length;Zt<jt;Zt++){let I=U(zt[Zt],X[Zt],pt);x?dt(I.x,I.y+T[h-1].y,T[h-1].x+ft):dt(I.x,I.y,u+ft)}}}ee(),j();function ee(){let rt=i.length/3;if(f){let ct=0,ft=B*ct;for(let pt=0;pt<It;pt++){let _t=at[pt];Gt(_t[2]+ft,_t[1]+ft,_t[0]+ft)}ct=h+g*2,ft=B*ct;for(let pt=0;pt<It;pt++){let _t=at[pt];Gt(_t[0]+ft,_t[1]+ft,_t[2]+ft)}}else{for(let ct=0;ct<It;ct++){let ft=at[ct];Gt(ft[2],ft[1],ft[0])}for(let ct=0;ct<It;ct++){let ft=at[ct];Gt(ft[0]+B*h,ft[1]+B*h,ft[2]+B*h)}}n.addGroup(rt,i.length/3-rt,0)}function j(){let rt=i.length/3,ct=0;et(R,ct),ct+=R.length;for(let ft=0,pt=O.length;ft<pt;ft++){let _t=O[ft];et(_t,ct),ct+=_t.length}n.addGroup(rt,i.length/3-rt,1)}function et(rt,ct){let ft=rt.length;for(;--ft>=0;){let pt=ft,_t=ft-1;_t<0&&(_t=rt.length-1);for(let Xt=0,zt=h+g*2;Xt<zt;Xt++){let Zt=B*Xt,jt=B*(Xt+1),I=ct+pt+Zt,mt=ct+_t+Zt,Mt=ct+_t+jt,L=ct+pt+jt;wt(I,mt,Mt,L)}}}function dt(rt,ct,ft){l.push(rt),l.push(ct),l.push(ft)}function Gt(rt,ct,ft){Wt(rt),Wt(ct),Wt(ft);let pt=i.length/3,_t=S.generateTopUV(n,i,pt-3,pt-2,pt-1);me(_t[0]),me(_t[1]),me(_t[2])}function wt(rt,ct,ft,pt){Wt(rt),Wt(ct),Wt(pt),Wt(ct),Wt(ft),Wt(pt);let _t=i.length/3,Xt=S.generateSideWallUV(n,i,_t-6,_t-3,_t-2,_t-1);me(Xt[0]),me(Xt[1]),me(Xt[3]),me(Xt[1]),me(Xt[2]),me(Xt[3])}function Wt(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function me(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return um(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Lc[i.type]().fromJSON(i)),new s(n,t.options)}},hm={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new xt(r,a),new xt(o,l),new xt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new xt(a,1-l),new xt(c,1-u),new xt(f,1-m),new xt(_,1-p)]:[new xt(o,1-l),new xt(h,1-u),new xt(d,1-m),new xt(g,1-p)]}};function um(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qs=class s extends vo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},We=class s extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let S=p*f-a;for(let T=0;T<c;T++){let x=T*u-r;m.push(x,-S,0),_.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let T=S+c*p,x=S+c*(p+1),b=S+1+c*(p+1),E=S+1+c*p;d.push(T,x,E),d.push(x,b,E)}this.setIndex(d),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var be=class s extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new z,f=new z,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let S=[],T=p/n,x=a+T*o,b=t*Math.cos(x),E=Math.sqrt(t*t-b*b),N=0;p===0&&a===0?N=.5/e:p===n&&l===Math.PI&&(N=-.5/e);for(let y=0;y<=e;y++){let A=y/e,D=i+A*r;u.x=-E*Math.cos(D),u.y=b,u.z=E*Math.sin(D),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(A+N,1-T),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let T=h[p][S+1],x=h[p][S],b=h[p+1][S],E=h[p+1][S+1];(p!==0||a>0)&&d.push(T,x,E),(p!==n-1||l<Math.PI)&&d.push(x,b,E)}this.setIndex(d),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Me=class s extends Re{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new z,d=new z,m=new z;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let p=0;p<=i;p++){let S=p/i*r;d.x=(t+e*Math.cos(g))*Math.cos(S),d.y=(t+e*Math.cos(g))*Math.sin(S),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),f.x=t*Math.cos(S),f.y=t*Math.sin(S),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let p=(i+1)*_+g-1,S=(i+1)*(_-1)+g-1,T=(i+1)*(_-1)+g,x=(i+1)*_+g;l.push(p,S,x),l.push(S,T,x)}this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ts(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Ou(i))i.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ou(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function an(s){let t={};for(let e=0;e<s.length;e++){let n=ts(s[e]);for(let i in n)t[i]=n[i]}return t}function Ou(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function fm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ch(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Df={clone:ts,merge:an},dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(i.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(i.value);break;case"m3":this.uniforms[n].value=new te().fromArray(i.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ao=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},he=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Zr=class extends he{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var $r=class extends Bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ro=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Co=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ws(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function wc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ei=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Io=class extends Ei{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cc:r=t,o=2*e-n;break;case Ic:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:a=t,l=2*n-e;break;case Ic:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,S=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,T=(-1-d)*g+(1.5+d)*_+.5*m,x=d*g-d*_;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+S*a[c+b]+T*a[l+b]+x*a[u+b];return r}},Po=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Lo=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Do=class extends Ei{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(i-e),_=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*m;return r}let f=o*2,d=t-1;for(let m=0;m!==o;++m){let _=a[c+m],g=a[l+m],p=d*f+m*2,S=u[p],T=u[p+1],x=t*f+m*2,b=h[x],E=h[x+1],N=gm(n,e,S,b,i);r[m]=Nf(N,_,T,E,g)}return r}};function Nf(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function mm(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function gm(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Nf(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=mm(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Sn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),wc(t.settings)&&(n.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Do(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case mo:e=this.InterpolantFactoryMethodLinear;break;case so:e=this.InterpolantFactoryMethodSmooth;break;case Ac:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;wc(this.settings)&&(zu(this.settings.inTangents,t),zu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Kt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&sp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===so,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[f+m]||_!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,wc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function zu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=mo;var wi=class extends Sn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Er;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};No.prototype.ValueTypeName="color";var Uo=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};Uo.prototype.ValueTypeName="number";var Fo=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Jr=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}};Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Er;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends Sn{constructor(t,e,n,i){super(t,e,n,i)}};Bo.prototype.ValueTypeName="vector";var Oo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Uf=new Oo,zo=class{constructor(t){this.manager=t!==void 0?t:Uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ys=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$i=class extends Ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Tc=new xe,Hu=new z,ku=new z,Kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Ps||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},no=new z,io=new yn,Xn=new z,jr=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(no,io,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(no,io,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new z,Gu=new xt,Vu=new xt,Ye=class extends jr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Gu,Vu),e.subVectors(Vu,Gu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fc=class extends Kr{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}},Qr=class extends Ys{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zs=class extends jr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bc=class extends Kr{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ji=class extends Ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Bc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ts=-90,As=1,Ho=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ye(Ts,As,t,e);i.layers=this.layers,this.add(i);let r=new Ye(Ts,As,t,e);r.layers=this.layers,this.add(r);let a=new Ye(Ts,As,t,e);a.layers=this.layers,this.add(a);let o=new Ye(Ts,As,t,e);o.layers=this.layers,this.add(o);let l=new Ye(Ts,As,t,e);l.layers=this.layers,this.add(l);let c=new Ye(Ts,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ko=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hh="\\[\\]\\.:\\/",xm=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",_m="[^"+hh.replace("\\.","")+"]",ym=/((?:WC+[\/:])*)/.source.replace("WC",uh),vm=/(WCOD+)?/.source.replace("WCOD",_m),Mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Sm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),bm=new RegExp("^"+ym+vm+Mm+Sm+"$"),Em=["material","materials","bones","map"],Oc=class{constructor(t,e,n){let i=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xm,"")}static parseTrackName(t){let e=bm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Em.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Oc;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $y=new Float32Array(1);var xh=class xh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};xh.prototype.isMatrix2=!0;var zc=xh;function fh(s,t,e,n){let i=wm(n);switch(e){case nh:return s*t;case Ko:return s*t/i.components*i.byteLength;case jo:return s*t/i.components*i.byteLength;case Li:return s*t*2/i.components*i.byteLength;case Qo:return s*t*2/i.components*i.byteLength;case ih:return s*t*3/i.components*i.byteLength;case Tn:return s*t*4/i.components*i.byteLength;case tl:return s*t*4/i.components*i.byteLength;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nl:case sl:return Math.max(s,16)*Math.max(t,8)/4;case el:case il:return Math.max(s,8)*Math.max(t,8)/2;case rl:case al:case ll:case cl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ol:case oa:case hl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case dl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case pl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ml:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case gl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case bl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case wl:case Tl:case Al:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case la:case Il:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wm(s){switch(s){case mn:case jc:return{byteLength:1,components:1};case Ks:case Qc:case Hn:return{byteLength:2,components:1};case $o:case Jo:return{byteLength:2,components:4};case zn:case Zo:case wn:return{byteLength:4,components:1};case th:case eh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function id(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Im(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lm=`#ifdef USE_ALPHAHASH
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
#endif`,Dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bm=`#ifdef USE_AOMAP
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
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm=`#ifdef USE_BATCHING
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
#endif`,Hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Xm=`#ifdef USE_BUMPMAP
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,t0=`#define PI 3.141592653589793
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
} // validated`,e0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n0=`vec3 transformedNormal = objectNormal;
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
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b0=`#ifdef USE_ENVMAP
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
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
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
#endif`,C0=`uniform sampler2D dfgLUT;
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
}`,I0=`
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k0=`#if defined( USE_POINTS_UV )
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
#endif`,G0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gg=`float getShadowMask() {
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
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lg=`uniform sampler2D t2D;
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#include <common>
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#define LAMBERT
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
}`,Zg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,Jg=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,jg=`#define NORMAL
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
}`,Qg=`#define PHONG
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
}`,tx=`#define PHONG
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
}`,ex=`#define STANDARD
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
}`,nx=`#define STANDARD
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
}`,ix=`#define TOON
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
}`,sx=`#define TOON
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
}`,rx=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,lx=`uniform vec3 color;
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
}`,cx=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Pm,alphahash_pars_fragment:Lm,alphamap_fragment:Dm,alphamap_pars_fragment:Nm,alphatest_fragment:Um,alphatest_pars_fragment:Fm,aomap_fragment:Bm,aomap_pars_fragment:Om,batching_pars_vertex:zm,batching_vertex:Hm,begin_vertex:km,beginnormal_vertex:Gm,bsdfs:Vm,iridescence_fragment:Wm,bumpmap_pars_fragment:Xm,clipping_planes_fragment:qm,clipping_planes_pars_fragment:Ym,clipping_planes_pars_vertex:Zm,clipping_planes_vertex:$m,color_fragment:Jm,color_pars_fragment:Km,color_pars_vertex:jm,color_vertex:Qm,common:t0,cube_uv_reflection_fragment:e0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:s0,emissivemap_fragment:r0,emissivemap_pars_fragment:a0,colorspace_fragment:o0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:h0,envmap_pars_fragment:u0,envmap_pars_vertex:f0,envmap_physical_pars_fragment:b0,envmap_vertex:d0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:x0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:y0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:M0,lights_pars_begin:S0,lights_toon_fragment:E0,lights_toon_pars_fragment:w0,lights_phong_fragment:T0,lights_phong_pars_fragment:A0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:I0,lights_fragment_maps:P0,lights_fragment_end:L0,lightprobes_pars_fragment:D0,logdepthbuf_fragment:N0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:F0,logdepthbuf_vertex:B0,map_fragment:O0,map_pars_fragment:z0,map_particle_fragment:H0,map_particle_pars_fragment:k0,metalnessmap_fragment:G0,metalnessmap_pars_fragment:V0,morphinstance_vertex:W0,morphcolor_vertex:X0,morphnormal_vertex:q0,morphtarget_pars_vertex:Y0,morphtarget_vertex:Z0,normal_fragment_begin:$0,normal_fragment_maps:J0,normal_pars_fragment:K0,normal_pars_vertex:j0,normal_vertex:Q0,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:ng,clearcoat_pars_fragment:ig,iridescence_pars_fragment:sg,opaque_fragment:rg,packing:ag,premultiplied_alpha_fragment:og,project_vertex:lg,dithering_fragment:cg,dithering_pars_fragment:hg,roughnessmap_fragment:ug,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:pg,shadowmap_vertex:mg,shadowmask_pars_fragment:gg,skinbase_vertex:xg,skinning_pars_vertex:_g,skinning_vertex:yg,skinnormal_vertex:vg,specularmap_fragment:Mg,specularmap_pars_fragment:Sg,tonemapping_fragment:bg,tonemapping_pars_fragment:Eg,transmission_fragment:wg,transmission_pars_fragment:Tg,uv_pars_fragment:Ag,uv_pars_vertex:Rg,uv_vertex:Cg,worldpos_vertex:Ig,background_vert:Pg,background_frag:Lg,backgroundCube_vert:Dg,backgroundCube_frag:Ng,cube_vert:Ug,cube_frag:Fg,depth_vert:Bg,depth_frag:Og,distance_vert:zg,distance_frag:Hg,equirect_vert:kg,equirect_frag:Gg,linedashed_vert:Vg,linedashed_frag:Wg,meshbasic_vert:Xg,meshbasic_frag:qg,meshlambert_vert:Yg,meshlambert_frag:Zg,meshmatcap_vert:$g,meshmatcap_frag:Jg,meshnormal_vert:Kg,meshnormal_frag:jg,meshphong_vert:Qg,meshphong_frag:tx,meshphysical_vert:ex,meshphysical_frag:nx,meshtoon_vert:ix,meshtoon_frag:sx,points_vert:rx,points_frag:ax,shadow_vert:ox,shadow_frag:lx,sprite_vert:cx,sprite_frag:hx},Tt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Qn={basic:{uniforms:an([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:an([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:an([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:an([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:an([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:an([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:an([Tt.points,Tt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:an([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:an([Tt.common,Tt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:an([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:an([Tt.sprite,Tt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:an([Tt.common,Tt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:an([Tt.lights,Tt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Qn.physical={uniforms:an([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Dl={r:0,b:0,g:0},ux=new xe,sd=new te;sd.set(-1,0,0,0,1,0,0,0,1);function fx(s,t,e,n,i,r){let a=new Dt(0),o=i===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let x=S.backgroundBlurriness>0;T=t.get(T,x)}return T}function m(S){let T=!1,x=d(S);x===null?g(a,o):x&&x.isColor&&(g(x,1),T=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(S,T){let x=d(T);x&&(x.isCubeTexture||x.mapping===ea)?(c===void 0&&(c=new it(new De(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:ts(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sd),c.material.toneMapped=ue.getTransfer(x.colorSpace)!==ve,(h!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new it(new We(2,2),new Xe({name:"BackgroundMaterial",uniforms:ts(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ue.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,T){S.getRGB(Dl,ch(s)),e.buffers.color.setClear(Dl.r,Dl.g,Dl.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:m,addToRenderList:_,dispose:p}}function dx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(O,M,P,C,R){let U=!1,B=u(O,C,P,M);r!==B&&(r=B,c(r.object)),U=d(O,C,P,R),U&&m(O,C,P,R),R!==null&&t.update(R,s.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,x(O,M,P,C),R!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return s.createVertexArray()}function c(O){return s.bindVertexArray(O)}function h(O){return s.deleteVertexArray(O)}function u(O,M,P,C){let R=C.wireframe===!0,U=n[M.id];U===void 0&&(U={},n[M.id]=U);let B=O.isInstancedMesh===!0?O.id:0,k=U[B];k===void 0&&(k={},U[B]=k);let H=k[P.id];H===void 0&&(H={},k[P.id]=H);let q=H[R];return q===void 0&&(q=f(l()),H[R]=q),q}function f(O){let M=[],P=[],C=[];for(let R=0;R<e;R++)M[R]=0,P[R]=0,C[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:P,attributeDivisors:C,object:O,attributes:{},index:null}}function d(O,M,P,C){let R=r.attributes,U=M.attributes,B=0,k=P.getAttributes();for(let H in k)if(k[H].location>=0){let X=R[H],lt=U[H];if(lt===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(lt=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(lt=O.instanceColor)),X===void 0||X.attribute!==lt||lt&&X.data!==lt.data)return!0;B++}return r.attributesNum!==B||r.index!==C}function m(O,M,P,C){let R={},U=M.attributes,B=0,k=P.getAttributes();for(let H in k)if(k[H].location>=0){let X=U[H];X===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(X=O.instanceColor));let lt={};lt.attribute=X,X&&X.data&&(lt.data=X.data),R[H]=lt,B++}r.attributes=R,r.attributesNum=B,r.index=C}function _(){let O=r.newAttributes;for(let M=0,P=O.length;M<P;M++)O[M]=0}function g(O){p(O,0)}function p(O,M){let P=r.newAttributes,C=r.enabledAttributes,R=r.attributeDivisors;P[O]=1,C[O]===0&&(s.enableVertexAttribArray(O),C[O]=1),R[O]!==M&&(s.vertexAttribDivisor(O,M),R[O]=M)}function S(){let O=r.newAttributes,M=r.enabledAttributes;for(let P=0,C=M.length;P<C;P++)M[P]!==O[P]&&(s.disableVertexAttribArray(P),M[P]=0)}function T(O,M,P,C,R,U,B){B===!0?s.vertexAttribIPointer(O,M,P,R,U):s.vertexAttribPointer(O,M,P,C,R,U)}function x(O,M,P,C){_();let R=C.attributes,U=P.getAttributes(),B=M.defaultAttributeValues;for(let k in U){let H=U[k];if(H.location>=0){let q=R[k];if(q===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(q=O.instanceColor)),q!==void 0){let X=q.normalized,lt=q.itemSize,at=t.get(q);if(at===void 0)continue;let It=at.buffer,$t=at.type,ee=at.bytesPerElement,j=$t===s.INT||$t===s.UNSIGNED_INT||q.gpuType===Zo;if(q.isInterleavedBufferAttribute){let et=q.data,dt=et.stride,Gt=q.offset;if(et.isInstancedInterleavedBuffer){for(let wt=0;wt<H.locationSize;wt++)p(H.location+wt,et.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let wt=0;wt<H.locationSize;wt++)g(H.location+wt);s.bindBuffer(s.ARRAY_BUFFER,It);for(let wt=0;wt<H.locationSize;wt++)T(H.location+wt,lt/H.locationSize,$t,X,dt*ee,(Gt+lt/H.locationSize*wt)*ee,j)}else{if(q.isInstancedBufferAttribute){for(let et=0;et<H.locationSize;et++)p(H.location+et,q.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let et=0;et<H.locationSize;et++)g(H.location+et);s.bindBuffer(s.ARRAY_BUFFER,It);for(let et=0;et<H.locationSize;et++)T(H.location+et,lt/H.locationSize,$t,X,lt*ee,lt/H.locationSize*et*ee,j)}}else if(B!==void 0){let X=B[k];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(H.location,X);break;case 3:s.vertexAttrib3fv(H.location,X);break;case 4:s.vertexAttrib4fv(H.location,X);break;default:s.vertexAttrib1fv(H.location,X)}}}}S()}function b(){A();for(let O in n){let M=n[O];for(let P in M){let C=M[P];for(let R in C){let U=C[R];for(let B in U)h(U[B].object),delete U[B];delete C[R]}}delete n[O]}}function E(O){if(n[O.id]===void 0)return;let M=n[O.id];for(let P in M){let C=M[P];for(let R in C){let U=C[R];for(let B in U)h(U[B].object),delete U[B];delete C[R]}}delete n[O.id]}function N(O){for(let M in n){let P=n[M];for(let C in P){let R=P[C];if(R[O.id]===void 0)continue;let U=R[O.id];for(let B in U)h(U[B].object),delete U[B];delete R[O.id]}}}function y(O){for(let M in n){let P=n[M],C=O.isInstancedMesh===!0?O.id:0,R=P[C];if(R!==void 0){for(let U in R){let B=R[U];for(let k in B)h(B[k].object),delete B[k];delete R[U]}delete P[C],Object.keys(P).length===0&&delete n[M]}}}function A(){D(),a=!0,r!==i&&(r=i,c(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function px(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function mx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(N){return!(N!==Tn&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){let y=N===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==mn&&N!==wn&&!y&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:x,maxSamples:b,samples:E}}function gx(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Nn,o=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,T=S*4,x=p.clippingState||null;l.value=x,x=h(m,f,T,d);for(let b=0;b!==T;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,x=d;T!==_;++T,x+=4)a.copy(u[T]).applyMatrix4(S,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var er=4,xx=6,_x=20,yx=256,ha=new Zs,Ff=new Dt,_h=null,yh=0,vh=0,Mh=!1,vx=new z,es=new z,ns=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=vx}=r;_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_h,yh,vh),this._renderer.xr.enabled=Mh,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Hn,format:Tn,colorSpace:wr,depthBuffer:!1},i=Bf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mx(r)),this._blurMaterial=bx(r,t,e),this._ggxMaterial=Sx(r,t,e)}return i}_compileMaterial(t){let e=new it(new Re,t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,i,r){let l=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ff),u.toneMapping=On,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new De,new Ce({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(Ff),p=!0);for(let T=0;T<6;T++){let x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let b=this._cubeSize;tr(i,x*b,T>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(_,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ci||t.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-er?n-m+er:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,tr(r,g,p,3*_,2*_),i.setRenderTarget(r),i.render(o,ha),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,tr(t,g,p,3*_,2*_),i.setRenderTarget(t),i.render(o,ha)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-er?i-this._lodMax+er:0),f=4*(this._cubeSize-h);tr(e,u,f,3*h,2*h),a.setRenderTarget(e),a.render(l,ha)}};function Mx(s){let t=[],e=[],n=s,i=s-er+1+xx;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),_=new Float32Array(d*f*u);for(let p=0;p<u;p++){let S=p%3*2/3-1,T=p>2?0:-1,x=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];m.set(x,d*f*p);for(let b=0;b<f;b++){let E=h[b*2]*2-1,N=h[b*2+1]*2-1;p===0?es.set(1,N,E):p===1?es.set(-E,1,-N):p===2?es.set(-E,N,1):p===3?es.set(-1,N,-E):p===4?es.set(-E,-1,N):es.set(E,N,-1),es.toArray(_,(p*f+b)*d)}}let g=new Re;g.setAttribute("position",new Ae(m,d)),g.setAttribute("outputDirection",new Ae(_,d)),e.push(new it(g,null)),n>er&&n--}return{lodMeshes:e,sizeLods:t}}function Bf(s,t,e){let n=new pn(s,t,e);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Sx(s,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function bx(s,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:_x,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Of(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function zf(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ul=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Or(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new De(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Kn});r.uniforms.tEquirect.value=e;let a=new it(i,r),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Qe),new Ho(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function Ex(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Xo||d===qo)if(t.has(f)){let m=t.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new Ul(m.height);return _.fromEquirectangularTexture(s,f),t.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,m=d===Xo||d===qo,_=d===Ci||d===Qi;if(m||_){let g=e.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new ns(s)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let S=f.image;return m&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new ns(s)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===Xo?f.mapping=Ci:d===qo&&(f.mapping=Qi),f}function l(f){let d=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function wx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Wi("WebGLRenderer: "+n+" extension not supported."),i}}}function Tx(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,_=0;if(m===void 0)return;if(d!==null){let S=d.array;_=d.version;for(let T=0,x=S.length;T<x;T+=3){let b=S[T+0],E=S[T+1],N=S[T+2];f.push(b,E,E,N,N,b)}}else{let S=m.array;_=m.version;for(let T=0,x=S.length/3-1;T<x;T+=3){let b=T+0,E=T+1,N=T+2;f.push(b,E,E,N,N,b)}}let g=new(m.count>=65535?Lr:Pr)(f,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ax(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Rx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Cx(s,t,e){let n=new WeakMap,i=new Le;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let A=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;d===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let x=o.attributes.position.count*T,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*b*4*u),N=new Cr(E,x,b,u);N.type=wn,N.needsUpdate=!0;let y=T*4;for(let D=0;D<u;D++){let O=g[D],M=p[D],P=S[D],C=x*b*4*D;for(let R=0;R<O.count;R++){let U=R*y;d===!0&&(i.fromBufferAttribute(O,R),E[C+U+0]=i.x,E[C+U+1]=i.y,E[C+U+2]=i.z,E[C+U+3]=0),m===!0&&(i.fromBufferAttribute(M,R),E[C+U+4]=i.x,E[C+U+5]=i.y,E[C+U+6]=i.z,E[C+U+7]=0),_===!0&&(i.fromBufferAttribute(P,R),E[C+U+8]=i.x,E[C+U+9]=i.y,E[C+U+10]=i.z,E[C+U+11]=P.itemSize===4?i.w:1)}}f={count:u,texture:N,size:new xt(x,b)},n.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Ix(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Px={[Xc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[Js]:"ACES_FILMIC_TONE_MAPPING",[$c]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[Zc]:"CUSTOM_TONE_MAPPING"};function Lx(s,t,e,n,i,r){let a=new pn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Re;c.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new fe([0,2,0,0,2,0],2));let h=new Ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new it(c,h),f=new Zs(-1,1,1,-1,0,1),d=null,m=null,_=!1,g,p=null,S=[],T=!1;this.setSize=function(x,b){a.setSize(x,b),o!==null&&o.setSize(x,b),l!==null&&l.setSize(x,b);for(let E=0;E<S.length;E++){let N=S[E];N.setSize&&N.setSize(x,b)}},this.setEffects=function(x){S=x,T=S.length>0&&S[0].isRenderPass===!0;let b=a.width,E=a.height;S.length>0&&o===null&&(o=new pn(b,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new pn(b,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<S.length;N++){let y=S[N];y.setSize&&y.setSize(b,E)}},this.begin=function(x,b){if(_||x.toneMapping===On&&S.length===0)return!1;if(p=b,b!==null){let E=b.width,N=b.height;(a.width!==E||a.height!==N)&&this.setSize(E,N)}return T===!1&&x.setRenderTarget(a),g=x.toneMapping,x.toneMapping=On,!0},this.hasRenderPass=function(){return T},this.end=function(x,b){x.toneMapping=g,_=!0;let E=a,N=o;for(let y=0;y<S.length;y++){let A=S[y];A.enabled!==!1&&(A.render(x,N,E,b),A.needsSwap!==!1&&(E=N,N=N===o?l:o))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,h.defines={},ue.getTransfer(d)===ve&&(h.defines.SRGB_TRANSFER="");let y=Px[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(p),x.render(u,f),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var rd=new un,Eh=new bi(1,1),ad=new Cr,od=new _o,ld=new Or,Hf=[],kf=[],Gf=new Float32Array(16),Vf=new Float32Array(9),Wf=new Float32Array(4);function ir(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Hf[i];if(r===void 0&&(r=new Float32Array(i),Hf[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function $e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Je(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Bl(s,t){let e=kf[t];e===void 0&&(e=new Int32Array(t),kf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Dx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2fv(this.addr,t),Je(e,t)}}function Ux(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;s.uniform3fv(this.addr,t),Je(e,t)}}function Fx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4fv(this.addr,t),Je(e,t)}}function Bx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Wf.set(n),s.uniformMatrix2fv(this.addr,!1,Wf),Je(e,n)}}function Ox(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Vf.set(n),s.uniformMatrix3fv(this.addr,!1,Vf),Je(e,n)}}function zx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Gf.set(n),s.uniformMatrix4fv(this.addr,!1,Gf),Je(e,n)}}function Hx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2iv(this.addr,t),Je(e,t)}}function Gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3iv(this.addr,t),Je(e,t)}}function Vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4iv(this.addr,t),Je(e,t)}}function Wx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2uiv(this.addr,t),Je(e,t)}}function qx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3uiv(this.addr,t),Je(e,t)}}function Yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4uiv(this.addr,t),Je(e,t)}}function Zx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Eh.compareFunction=e.isReversedDepthBuffer()?Ll:Pl,r=Eh):r=rd,e.setTexture2D(t||r,i)}function $x(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||od,i)}function Jx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ld,i)}function Kx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ad,i)}function jx(s){switch(s){case 5126:return Dx;case 35664:return Nx;case 35665:return Ux;case 35666:return Fx;case 35674:return Bx;case 35675:return Ox;case 35676:return zx;case 5124:case 35670:return Hx;case 35667:case 35671:return kx;case 35668:case 35672:return Gx;case 35669:case 35673:return Vx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return Kx}}function Qx(s,t){s.uniform1fv(this.addr,t)}function t_(s,t){let e=ir(t,this.size,2);s.uniform2fv(this.addr,e)}function e_(s,t){let e=ir(t,this.size,3);s.uniform3fv(this.addr,e)}function n_(s,t){let e=ir(t,this.size,4);s.uniform4fv(this.addr,e)}function i_(s,t){let e=ir(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function s_(s,t){let e=ir(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function r_(s,t){let e=ir(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function a_(s,t){s.uniform1iv(this.addr,t)}function o_(s,t){s.uniform2iv(this.addr,t)}function l_(s,t){s.uniform3iv(this.addr,t)}function c_(s,t){s.uniform4iv(this.addr,t)}function h_(s,t){s.uniform1uiv(this.addr,t)}function u_(s,t){s.uniform2uiv(this.addr,t)}function f_(s,t){s.uniform3uiv(this.addr,t)}function d_(s,t){s.uniform4uiv(this.addr,t)}function p_(s,t,e){let n=this.cache,i=t.length,r=Bl(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Eh:a=rd;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function m_(s,t,e){let n=this.cache,i=t.length,r=Bl(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||od,r[a])}function g_(s,t,e){let n=this.cache,i=t.length,r=Bl(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ld,r[a])}function x_(s,t,e){let n=this.cache,i=t.length,r=Bl(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ad,r[a])}function __(s){switch(s){case 5126:return Qx;case 35664:return t_;case 35665:return e_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return f_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return x_}}var wh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jx(e.type)}},Th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=__(e.type)}},Ah=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function Xf(s,t){s.seq.push(t),s.map[t.id]=t}function y_(s,t,e){let n=s.name,i=n.length;for(Sh.lastIndex=0;;){let r=Sh.exec(n),a=Sh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Xf(e,c===void 0?new wh(o,s,t):new Th(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Ah(o),Xf(e,u)),e=u}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);y_(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function qf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var v_=37297,M_=0;function S_(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Yf=new te;function b_(s){ue._getMatrix(Yf,ue.workingColorSpace,s);let t=`mat3( ${Yf.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(s)){case Tr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Zf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+S_(s.getShaderSource(t),o)}else return r}function E_(s,t){let e=b_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var w_={[Xc]:"Linear",[qc]:"Reinhard",[Yc]:"Cineon",[Js]:"ACESFilmic",[$c]:"AgX",[Jc]:"Neutral",[Zc]:"Custom"};function T_(s,t){let e=w_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nl=new z;function A_(){ue.getLuminanceCoefficients(Nl);let s=Nl.x.toFixed(4),t=Nl.y.toFixed(4),e=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function C_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function fa(s){return s!==""}function $f(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(s){return s.replace(P_,D_)}var L_=new Map;function D_(s,t){let e=ae[t];if(e===void 0){let n=L_.get(t);if(n!==void 0)e=ae[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rh(e)}var N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(s){return s.replace(N_,U_)}function U_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var F_={[ta]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function B_(s){return F_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var O_={[Ci]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE_UV"};function z_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":O_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var H_={[Qi]:"ENVMAP_MODE_REFRACTION"};function k_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":H_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G_={[Wo]:"ENVMAP_BLENDING_MULTIPLY",[uf]:"ENVMAP_BLENDING_MIX",[ff]:"ENVMAP_BLENDING_ADD"};function V_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":G_[s.combine]||"ENVMAP_BLENDING_NONE"}function W_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function X_(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=B_(e),c=z_(e),h=k_(e),u=V_(e),f=W_(e),d=R_(e),m=C_(r),_=i.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(g=[jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?ae.tonemapping_pars_fragment:"",e.toneMapping!==On?T_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),A_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fa).join(`
`)),a=Rh(a),a=$f(a,e),a=Jf(a,e),o=Rh(o),o=$f(o,e),o=Jf(o,e),a=Kf(a),o=Kf(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=S+g+a,x=S+p+o,b=qf(i,i.VERTEX_SHADER,T),E=qf(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function N(O){if(s.debug.checkShaderErrors){let M=i.getProgramInfoLog(_)||"",P=i.getShaderInfoLog(b)||"",C=i.getShaderInfoLog(E)||"",R=M.trim(),U=P.trim(),B=C.trim(),k=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,E);else{let q=Zf(i,b,"vertex"),X=Zf(i,E,"fragment");Kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+R+`
`+q+`
`+X)}else R!==""?Jt("WebGLProgram: Program Info Log:",R):(U===""||B==="")&&(H=!1);H&&(O.diagnostics={runnable:k,programLog:R,vertexShader:{log:U,prefix:g},fragmentShader:{log:B,prefix:p}})}i.deleteShader(b),i.deleteShader(E),y=new nr(i,_),A=I_(i,_)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(_,v_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}var q_=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ih(t),e.set(t,n)),n}},Ih=class{constructor(t){this.id=q_++,this.code=t,this.usedTimes=0}};function Y_(s){return s===Li||s===oa||s===la}function Z_(s,t,e,n,i,r){let a=new Ir,o=new Ch,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,A,D,O,M,P){let C=O.fog,R=M.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=t.get(y.envMap||U,B),H=k&&k.mapping===ea?k.image.height:null,q=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Jt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let X=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,lt=X!==void 0?X.length:0,at=0;R.morphAttributes.position!==void 0&&(at=1),R.morphAttributes.normal!==void 0&&(at=2),R.morphAttributes.color!==void 0&&(at=3);let It,$t,ee,j;if(q){let Ie=Qn[q];It=Ie.vertexShader,$t=Ie.fragmentShader}else{It=y.vertexShader,$t=y.fragmentShader;let Ie=o.getVertexShaderStage(y),_e=o.getFragmentShaderStage(y);o.update(y,Ie,_e),ee=Ie.id,j=_e.id}let et=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),Gt=M.isInstancedMesh===!0,wt=M.isBatchedMesh===!0,Wt=!!y.map,me=!!y.matcap,rt=!!k,ct=!!y.aoMap,ft=!!y.lightMap,pt=!!y.bumpMap&&y.wireframe===!1,_t=!!y.normalMap,Xt=!!y.displacementMap,zt=!!y.emissiveMap,Zt=!!y.metalnessMap,jt=!!y.roughnessMap,I=y.anisotropy>0,mt=y.clearcoat>0,Mt=y.dispersion>0,L=y.retroreflectivity>0,v=y.iridescence>0,F=y.sheen>0,G=y.transmission>0,Y=I&&!!y.anisotropyMap,tt=mt&&!!y.clearcoatMap,ut=mt&&!!y.clearcoatNormalMap,J=mt&&!!y.clearcoatRoughnessMap,nt=v&&!!y.iridescenceMap,yt=v&&!!y.iridescenceThicknessMap,Ft=F&&!!y.sheenColorMap,St=F&&!!y.sheenRoughnessMap,vt=!!y.specularMap,Bt=!!y.specularColorMap,qt=!!y.specularIntensityMap,Qt=G&&!!y.transmissionMap,W=G&&!!y.thicknessMap,bt=!!y.gradientMap,st=!!y.alphaMap,Et=y.alphaTest>0,Ct=!!y.alphaHash,ot=!!y.extensions,Vt=On;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Vt=s.toneMapping);let Ot={shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:It,fragmentShader:$t,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:wt,batchingColor:wt&&M._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&M.instanceColor!==null,instancingMorph:Gt&&M.morphTexture!==null,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Wt,matcap:me,envMap:rt,envMapMode:rt&&k.mapping,envMapCubeUVHeight:H,aoMap:ct,lightMap:ft,bumpMap:pt,normalMap:_t,displacementMap:Xt,emissiveMap:zt,normalMapObjectSpace:_t&&y.normalMapType===mf,normalMapTangentSpace:_t&&y.normalMapType===ca,packedNormalMap:_t&&y.normalMapType===ca&&Y_(y.normalMap.format),metalnessMap:Zt,roughnessMap:jt,anisotropy:I,anisotropyMap:Y,clearcoat:mt,clearcoatMap:tt,clearcoatNormalMap:ut,clearcoatRoughnessMap:J,dispersion:Mt,retroreflection:L,iridescence:v,iridescenceMap:nt,iridescenceThicknessMap:yt,sheen:F,sheenColorMap:Ft,sheenRoughnessMap:St,specularMap:vt,specularColorMap:Bt,specularIntensityMap:qt,transmission:G,transmissionMap:Qt,thicknessMap:W,gradientMap:bt,opaque:y.transparent===!1&&y.blending===Ri&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:Et,alphaHash:Ct,combine:y.combine,mapUv:Wt&&m(y.map.channel),aoMapUv:ct&&m(y.aoMap.channel),lightMapUv:ft&&m(y.lightMap.channel),bumpMapUv:pt&&m(y.bumpMap.channel),normalMapUv:_t&&m(y.normalMap.channel),displacementMapUv:Xt&&m(y.displacementMap.channel),emissiveMapUv:zt&&m(y.emissiveMap.channel),metalnessMapUv:Zt&&m(y.metalnessMap.channel),roughnessMapUv:jt&&m(y.roughnessMap.channel),anisotropyMapUv:Y&&m(y.anisotropyMap.channel),clearcoatMapUv:tt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(y.sheenRoughnessMap.channel),specularMapUv:vt&&m(y.specularMap.channel),specularColorMapUv:Bt&&m(y.specularColorMap.channel),specularIntensityMapUv:qt&&m(y.specularIntensityMap.channel),transmissionMapUv:Qt&&m(y.transmissionMap.channel),thicknessMapUv:W&&m(y.thicknessMap.channel),alphaMapUv:st&&m(y.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(_t||I),vertexNormals:!!R.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!R.attributes.uv&&(Wt||st),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||R.attributes.normal===void 0&&_t===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:dt,skinning:M.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:at,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Wt&&y.map.isVideoTexture===!0&&ue.getTransfer(y.map.colorSpace)===ve,decodeVideoTextureEmissive:zt&&y.emissiveMap.isVideoTexture===!0&&ue.getTransfer(y.emissiveMap.colorSpace)===ve,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===en,flipSided:y.side===Ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)A.push(D),A.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(p(A,y),S(A,y),A.push(s.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function S(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){let A=d[y.type],D;if(A){let O=Qn[A];D=Df.clone(O.uniforms)}else D=y.uniforms;return D}function x(y,A){let D=h.get(A);return D!==void 0?++D.usedTimes:(D=new X_(s,A,y,i),c.push(D),h.set(A,D)),D}function b(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function N(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:x,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:N}}function $_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function J_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Qf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function td(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,_,g,p){let S=s[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},s[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=m,S.materialVariant=a(f),S.groupOrder=_,S.renderOrder=f.renderOrder,S.z=g,S.group=p),t++,S}function l(f,d,m,_,g,p,S){S.reversedDepth===!0&&(g=-g);let T=o(f,d,m,_,g,p);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):e.push(T)}function c(f,d,m,_,g,p){let S=o(f,d,m,_,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?i.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||J_),n.length>1&&n.sort(d||Qf),i.length>1&&i.sort(d||Qf)}function u(){for(let f=t,d=s.length;f<d;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function K_(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new td,s.set(n,[a])):i>=r.length?(a=new td,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function j_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new Dt};break;case"SpotLight":e={position:new z,direction:new z,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new z,halfWidth:new z,halfHeight:new z};break}return s[t.id]=e,e}}}function Q_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ty=0;function ey(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ny(s){let t=new j_,e=Q_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let i=new z,r=new xe,a=new xe;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,S=0,T=0,x=0,b=0,E=0,N=0,y=0,A=0,D=0;c.sort(ey);for(let M=0,P=c.length;M<P;M++){let C=c[M],R=C.color,U=C.intensity,B=C.distance,k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Li?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=R.r*U,u+=R.g*U,f+=R.b*U;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],U);D++}else if(C.isSunLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,X=e.get(C);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[m]=X,n.sunShadowMap[m]=k;let lt=q.getViewportCount();for(let at=0;at<lt;at++)n.sunShadowMatrix[_+at]=q.getMatrix(at),n.sunShadowCascade[_+at]=q._cascadeData[at];_+=lt,m++}n.sun[d]=H,d++}else if(C.isDirectionalLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,X=e.get(C);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=k,n.directionalShadowMatrix[g]=C.shadow.matrix,b++}n.directional[g]=H,g++}else if(C.isSpotLight){let H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(R).multiplyScalar(U),H.distance=B,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[S]=H;let q=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,q.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[S]=q.matrix,C.castShadow){let X=e.get(C);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,n.spotShadow[S]=X,n.spotShadowMap[S]=k,N++}S++}else if(C.isRectAreaLight){let H=t.get(C);H.color.copy(R).multiplyScalar(U),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=H,T++}else if(C.isPointLight){let H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let q=C.shadow,X=e.get(C);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=C.shadow.matrix,E++}n.point[p]=H,p++}else if(C.isHemisphereLight){let H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(U),H.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[x]=H,x++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let O=n.hash;(O.sunLength!==d||O.directionalLength!==g||O.pointLength!==p||O.spotLength!==S||O.rectAreaLength!==T||O.hemiLength!==x||O.numSunShadows!==m||O.numDirectionalShadows!==b||O.numPointShadows!==E||O.numSpotShadows!==N||O.numSpotMaps!==y||O.numLightProbes!==D)&&(n.sun.length=d,n.directional.length=g,n.spot.length=S,n.rectArea.length=T,n.point.length=p,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,O.sunLength=d,O.directionalLength=g,O.pointLength=p,O.spotLength=S,O.rectAreaLength=T,O.hemiLength=x,O.numSunShadows=m,O.numDirectionalShadows=b,O.numPointShadows=E,O.numSpotShadows=N,O.numSpotMaps=y,O.numLightProbes=D,n.version=ty++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){let x=c[S];if(x.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),u++}else if(x.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),f++}else if(x.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function ed(s){let t=new ny(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function iy(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new ed(s),t.set(i,[o])):r>=a.length?(o=new ed(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
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
}`,ay=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],oy=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],nd=new xe,ua=new z,bh=new z;function ly(s,t,e){let n=new Hs,i=new xt,r=new xt,a=new Le,o=new Ro,l=new Co,c={},h=e.maxTextureSize,u={[Ai]:Ze,[Ze]:Ai,[en]:en},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:sy,fragmentShader:ry}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Re;m.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new it(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let p=this.type;this.render=function(E,N,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Vo&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ta);let A=s.getRenderTarget(),D=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),M=s.state;M.setBlending(Kn),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let P=p!==this.type;P&&N.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(R=>R.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,R=E.length;C<R;C++){let U=E[C],B=U.shadow;if(B===void 0){Jt("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let k=B.getFrameExtents();i.multiply(k),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/k.x),i.x=r.x*k.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/k.y),i.y=r.y*k.y,B.mapSize.y=r.y));let H=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=H,B.map===null||P===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===$s){if(U.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new pn(i.x,i.y,{format:Li,type:Hn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new bi(i.x,i.y,wn),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Zn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=je,B.map.depthTexture.magFilter=je}else U.isPointLight?(B.map=new Ul(i.x),B.map.depthTexture=new yo(i.x,zn)):(B.map=new pn(i.x,i.y),B.map.depthTexture=new bi(i.x,i.y,zn)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Zn,this.type===ta?(B.map.depthTexture.compareFunction=H?Ll:Pl,B.map.depthTexture.minFilter=Qe,B.map.depthTexture.magFilter=Qe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=je,B.map.depthTexture.magFilter=je);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();U.isPointLight!==!0&&B.updateMatrices(U,y);for(let X=0;X<q;X++){let lt=B.getCamera(X);if(U.isPointLight){let at=B.camera,It=B.matrix,$t=U.distance||at.far;$t!==at.far&&(at.far=$t,at.updateProjectionMatrix()),ua.setFromMatrixPosition(U.matrixWorld),at.position.copy(ua),bh.copy(at.position),bh.add(ay[X]),at.up.copy(oy[X]),at.lookAt(bh),at.updateMatrixWorld(),It.makeTranslation(-ua.x,-ua.y,-ua.z),nd.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),B._frustum.setFromProjectionMatrix(nd,at.coordinateSystem,at.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,X),s.clear();else{X===0&&(s.setRenderTarget(B.map),s.clear());let at=B.getViewport(X);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),M.viewport(a)}n=B.getFrustum(X),x(N,y,lt,U,this.type)}B.isPointLightShadow!==!0&&this.type===$s&&S(B,y),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(A,D,O)};function S(E,N){let y=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new pn(i.x,i.y,{format:Li,type:Hn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(N,null,y,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(N,null,y,d,_,null)}function T(E,N,y,A){let D=null,O=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)D=O;else if(D=y.isPointLight===!0?l:o,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let M=D.uuid,P=N.uuid,C=c[M];C===void 0&&(C={},c[M]=C);let R=C[P];R===void 0&&(R=D.clone(),C[P]=R,N.addEventListener("dispose",b)),D=R}if(D.visible=N.visible,D.wireframe=N.wireframe,A===$s?D.side=N.shadowSide!==null?N.shadowSide:N.side:D.side=N.shadowSide!==null?N.shadowSide:u[N.side],D.alphaMap=N.alphaMap,D.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,D.map=N.map,D.clipShadows=N.clipShadows,D.clippingPlanes=N.clippingPlanes,D.clipIntersection=N.clipIntersection,D.displacementMap=N.displacementMap,D.displacementScale=N.displacementScale,D.displacementBias=N.displacementBias,D.wireframeLinewidth=N.wireframeLinewidth,D.linewidth=N.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let M=s.properties.get(D);M.light=y}return D}function x(E,N,y,A,D){if(E.visible===!1)return;if(E.layers.test(N.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===$s)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let P=t.update(E),C=E.material;if(Array.isArray(C)){let R=P.groups;for(let U=0,B=R.length;U<B;U++){let k=R[U],H=C[k.materialIndex];if(H&&H.visible){let q=T(E,H,A,D);E.onBeforeShadow(s,E,N,y,P,q,k),s.renderBufferDirect(y,null,P,q,E,k),E.onAfterShadow(s,E,N,y,P,q,k)}}}else if(C.visible){let R=T(E,C,A,D);E.onBeforeShadow(s,E,N,y,P,R,null),s.renderBufferDirect(y,null,P,R,E,null),E.onAfterShadow(s,E,N,y,P,R,null)}}let M=E.children;for(let P=0,C=M.length;P<C;P++)x(M[P],N,y,A,D)}function b(E){E.target.removeEventListener("dispose",b);for(let y in c){let A=c[y],D=E.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function cy(s,t){function e(){let W=!1,bt=new Le,st=null,Et=new Le(0,0,0,0);return{setMask:function(Ct){st!==Ct&&!W&&(s.colorMask(Ct,Ct,Ct,Ct),st=Ct)},setLocked:function(Ct){W=Ct},setClear:function(Ct,ot,Vt,Ot,Ie){Ie===!0&&(Ct*=Ot,ot*=Ot,Vt*=Ot),bt.set(Ct,ot,Vt,Ot),Et.equals(bt)===!1&&(s.clearColor(Ct,ot,Vt,Ot),Et.copy(bt))},reset:function(){W=!1,st=null,Et.set(-1,0,0,0)}}}function n(){let W=!1,bt=!1,st=null,Et=null,Ct=null;return{setReversed:function(ot){if(bt!==ot){let Vt=t.get("EXT_clip_control");ot?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),bt=ot;let Ot=Ct;Ct=null,this.setClear(Ot)}},getReversed:function(){return bt},setTest:function(ot){ot?et(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(ot){st!==ot&&!W&&(s.depthMask(ot),st=ot)},setFunc:function(ot){if(bt&&(ot=Tf[ot]),Et!==ot){switch(ot){case ao:s.depthFunc(s.NEVER);break;case oo:s.depthFunc(s.ALWAYS);break;case lo:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case co:s.depthFunc(s.EQUAL);break;case ho:s.depthFunc(s.GEQUAL);break;case uo:s.depthFunc(s.GREATER);break;case fo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Et=ot}},setLocked:function(ot){W=ot},setClear:function(ot){Ct!==ot&&(Ct=ot,bt&&(ot=1-ot),s.clearDepth(ot))},reset:function(){W=!1,st=null,Et=null,Ct=null,bt=!1}}}function i(){let W=!1,bt=null,st=null,Et=null,Ct=null,ot=null,Vt=null,Ot=null,Ie=null;return{setTest:function(_e){W||(_e?et(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(_e){bt!==_e&&!W&&(s.stencilMask(_e),bt=_e)},setFunc:function(_e,In,Vn){(st!==_e||Et!==In||Ct!==Vn)&&(s.stencilFunc(_e,In,Vn),st=_e,Et=In,Ct=Vn)},setOp:function(_e,In,Vn){(ot!==_e||Vt!==In||Ot!==Vn)&&(s.stencilOp(_e,In,Vn),ot=_e,Vt=In,Ot=Vn)},setLocked:function(_e){W=_e},setClear:function(_e){Ie!==_e&&(s.clearStencil(_e),Ie=_e)},reset:function(){W=!1,bt=null,st=null,Et=null,Ct=null,ot=null,Vt=null,Ot=null,Ie=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],_=null,g=!1,p=null,S=null,T=null,x=null,b=null,E=null,N=null,y=new Dt(0,0,0),A=0,D=!1,O=null,M=null,P=null,C=null,R=null,U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,k=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=k>=2);let q=null,X={},lt=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),It=new Le().fromArray(lt),$t=new Le().fromArray(at);function ee(W,bt,st,Et){let Ct=new Uint8Array(4),ot=s.createTexture();s.bindTexture(W,ot),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<st;Vt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,Et,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(bt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return ot}let j={};j[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(s.DEPTH_TEST),a.setFunc(Cs),pt(!1),_t(Hc),et(s.CULL_FACE),ct(Kn);function et(W){h[W]!==!0&&(s.enable(W),h[W]=!0)}function dt(W){h[W]!==!1&&(s.disable(W),h[W]=!1)}function Gt(W,bt){return f[W]!==bt?(s.bindFramebuffer(W,bt),f[W]=bt,W===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=bt),W===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function wt(W,bt){let st=m,Et=!1;if(W){st=d.get(bt),st===void 0&&(st=[],d.set(bt,st));let Ct=W.textures;if(st.length!==Ct.length||st[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Vt=Ct.length;ot<Vt;ot++)st[ot]=s.COLOR_ATTACHMENT0+ot;st.length=Ct.length,Et=!0}}else st[0]!==s.BACK&&(st[0]=s.BACK,Et=!0);Et&&s.drawBuffers(st)}function Wt(W){return _!==W?(s.useProgram(W),_=W,!0):!1}let me={[ji]:s.FUNC_ADD,[Yu]:s.FUNC_SUBTRACT,[Zu]:s.FUNC_REVERSE_SUBTRACT};me[$u]=s.MIN,me[Ju]=s.MAX;let rt={[Ku]:s.ZERO,[ju]:s.ONE,[Qu]:s.SRC_COLOR,[Vc]:s.SRC_ALPHA,[af]:s.SRC_ALPHA_SATURATE,[sf]:s.DST_COLOR,[ef]:s.DST_ALPHA,[tf]:s.ONE_MINUS_SRC_COLOR,[Wc]:s.ONE_MINUS_SRC_ALPHA,[rf]:s.ONE_MINUS_DST_COLOR,[nf]:s.ONE_MINUS_DST_ALPHA,[of]:s.CONSTANT_COLOR,[lf]:s.ONE_MINUS_CONSTANT_COLOR,[cf]:s.CONSTANT_ALPHA,[hf]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(W,bt,st,Et,Ct,ot,Vt,Ot,Ie,_e){if(W===Kn){g===!0&&(dt(s.BLEND),g=!1);return}if(g===!1&&(et(s.BLEND),g=!0),W!==qu){if(W!==p||_e!==D){if((S!==ji||b!==ji)&&(s.blendEquation(s.FUNC_ADD),S=ji,b=ji),_e)switch(W){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ki:s.blendFunc(s.ONE,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Kt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kc:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",W);break}T=null,x=null,E=null,N=null,y.set(0,0,0),A=0,p=W,D=_e}return}Ct=Ct||bt,ot=ot||st,Vt=Vt||Et,(bt!==S||Ct!==b)&&(s.blendEquationSeparate(me[bt],me[Ct]),S=bt,b=Ct),(st!==T||Et!==x||ot!==E||Vt!==N)&&(s.blendFuncSeparate(rt[st],rt[Et],rt[ot],rt[Vt]),T=st,x=Et,E=ot,N=Vt),(Ot.equals(y)===!1||Ie!==A)&&(s.blendColor(Ot.r,Ot.g,Ot.b,Ie),y.copy(Ot),A=Ie),p=W,D=!1}function ft(W,bt){W.side===en?dt(s.CULL_FACE):et(s.CULL_FACE);let st=W.side===Ze;bt&&(st=!st),pt(st),W.blending===Ri&&W.transparent===!1?ct(Kn):ct(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let Et=W.stencilWrite;o.setTest(Et),Et&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),zt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(W){O!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),O=W)}function _t(W){W!==Wu?(et(s.CULL_FACE),W!==M&&(W===Hc?s.cullFace(s.BACK):W===Xu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),M=W}function Xt(W){W!==P&&(B&&s.lineWidth(W),P=W)}function zt(W,bt,st){W?(et(s.POLYGON_OFFSET_FILL),(C!==bt||R!==st)&&(C=bt,R=st,a.getReversed()&&(bt=-bt),s.polygonOffset(bt,st))):dt(s.POLYGON_OFFSET_FILL)}function Zt(W){W?et(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function jt(W){W===void 0&&(W=s.TEXTURE0+U-1),q!==W&&(s.activeTexture(W),q=W)}function I(W,bt,st){st===void 0&&(q===null?st=s.TEXTURE0+U-1:st=q);let Et=X[st];Et===void 0&&(Et={type:void 0,texture:void 0},X[st]=Et),(Et.type!==W||Et.texture!==bt)&&(q!==st&&(s.activeTexture(st),q=st),s.bindTexture(W,bt||j[W]),Et.type=W,Et.texture=bt)}function mt(){let W=X[q];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Mt(){try{s.compressedTexImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function v(){try{s.texSubImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function F(){try{s.texSubImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function tt(){try{s.texStorage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function ut(){try{s.texStorage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function J(){try{s.texImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function nt(){try{s.texImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function yt(W){return u[W]!==void 0?u[W]:s.getParameter(W)}function Ft(W,bt){u[W]!==bt&&(s.pixelStorei(W,bt),u[W]=bt)}function St(W){It.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),It.copy(W))}function vt(W){$t.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),$t.copy(W))}function Bt(W,bt){let st=c.get(bt);st===void 0&&(st=new WeakMap,c.set(bt,st));let Et=st.get(W);Et===void 0&&(Et=s.getUniformBlockIndex(bt,W.name),st.set(W,Et))}function qt(W,bt){let Et=c.get(bt).get(W);l.get(bt)!==Et&&(s.uniformBlockBinding(bt,Et,W.__bindingPointIndex),l.set(bt,Et))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,X={},f={},d=new WeakMap,m=[],_=null,g=!1,p=null,S=null,T=null,x=null,b=null,E=null,N=null,y=new Dt(0,0,0),A=0,D=!1,O=null,M=null,P=null,C=null,R=null,It.set(0,0,s.canvas.width,s.canvas.height),$t.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:dt,bindFramebuffer:Gt,drawBuffers:wt,useProgram:Wt,setBlending:ct,setMaterial:ft,setFlipSided:pt,setCullFace:_t,setLineWidth:Xt,setPolygonOffset:zt,setScissorTest:Zt,activeTexture:jt,bindTexture:I,unbindTexture:mt,compressedTexImage2D:Mt,compressedTexImage3D:L,texImage2D:J,texImage3D:nt,pixelStorei:Ft,getParameter:yt,updateUBOMapping:Bt,uniformBlockBinding:qt,texStorage2D:tt,texStorage3D:ut,texSubImage2D:v,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:St,viewport:vt,reset:Qt}}function hy(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,v){return m?new OffscreenCanvas(L,v):Ar("canvas")}function g(L,v,F){let G=1,Y=Mt(L);if((Y.width>F||Y.height>F)&&(G=F/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let tt=Math.floor(G*Y.width),ut=Math.floor(G*Y.height);f===void 0&&(f=_(tt,ut));let J=v?_(tt,ut):f;return J.width=tt,J.height=ut,J.getContext("2d").drawImage(L,0,0,tt,ut),Jt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+tt+"x"+ut+")."),J}else return"data"in L&&Jt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),L;return L}function p(L){return L.generateMipmaps}function S(L){s.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,v,F,G,Y,tt=!1){if(L!==null){if(s[L]!==void 0)return s[L];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut;G&&(ut=t.get("EXT_texture_norm16"),ut||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===s.RED&&(F===s.FLOAT&&(J=s.R32F),F===s.HALF_FLOAT&&(J=s.R16F),F===s.UNSIGNED_BYTE&&(J=s.R8),F===s.UNSIGNED_SHORT&&ut&&(J=ut.R16_EXT),F===s.SHORT&&ut&&(J=ut.R16_SNORM_EXT)),v===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(J=s.R8UI),F===s.UNSIGNED_SHORT&&(J=s.R16UI),F===s.UNSIGNED_INT&&(J=s.R32UI),F===s.BYTE&&(J=s.R8I),F===s.SHORT&&(J=s.R16I),F===s.INT&&(J=s.R32I)),v===s.RG&&(F===s.FLOAT&&(J=s.RG32F),F===s.HALF_FLOAT&&(J=s.RG16F),F===s.UNSIGNED_BYTE&&(J=s.RG8),F===s.UNSIGNED_SHORT&&ut&&(J=ut.RG16_EXT),F===s.SHORT&&ut&&(J=ut.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(J=s.RG8UI),F===s.UNSIGNED_SHORT&&(J=s.RG16UI),F===s.UNSIGNED_INT&&(J=s.RG32UI),F===s.BYTE&&(J=s.RG8I),F===s.SHORT&&(J=s.RG16I),F===s.INT&&(J=s.RG32I)),v===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(J=s.RGB8UI),F===s.UNSIGNED_SHORT&&(J=s.RGB16UI),F===s.UNSIGNED_INT&&(J=s.RGB32UI),F===s.BYTE&&(J=s.RGB8I),F===s.SHORT&&(J=s.RGB16I),F===s.INT&&(J=s.RGB32I)),v===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),F===s.UNSIGNED_INT&&(J=s.RGBA32UI),F===s.BYTE&&(J=s.RGBA8I),F===s.SHORT&&(J=s.RGBA16I),F===s.INT&&(J=s.RGBA32I)),v===s.RGB&&(F===s.UNSIGNED_SHORT&&ut&&(J=ut.RGB16_EXT),F===s.SHORT&&ut&&(J=ut.RGB16_SNORM_EXT),F===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),v===s.RGBA){let nt=tt?Tr:ue.getTransfer(Y);F===s.FLOAT&&(J=s.RGBA32F),F===s.HALF_FLOAT&&(J=s.RGBA16F),F===s.UNSIGNED_BYTE&&(J=nt===ve?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT&&ut&&(J=ut.RGBA16_EXT),F===s.SHORT&&ut&&(J=ut.RGBA16_SNORM_EXT),F===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function b(L,v){let F;return L?v===null||v===zn||v===js?F=s.DEPTH24_STENCIL8:v===wn?F=s.DEPTH32F_STENCIL8:v===Ks&&(F=s.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zn||v===js?F=s.DEPTH_COMPONENT24:v===wn?F=s.DEPTH_COMPONENT32F:v===Ks&&(F=s.DEPTH_COMPONENT16),F}function E(L,v){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==je&&L.minFilter!==Qe?Math.log2(Math.max(v.width,v.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?v.mipmaps.length:1}function N(L){let v=L.target;v.removeEventListener("dispose",N),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function y(L){let v=L.target;v.removeEventListener("dispose",y),O(v)}function A(L){let v=n.get(L);if(v.__webglInit===void 0)return;let F=L.source,G=d.get(F);if(G){let Y=G[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&D(L),Object.keys(G).length===0&&d.delete(F)}n.remove(L)}function D(L){let v=n.get(L);s.deleteTexture(v.__webglTexture);let F=L.source,G=d.get(F);delete G[v.__cacheKey],a.memory.textures--}function O(L){let v=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let Y=0;Y<v.__webglFramebuffer[G].length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[G][Y]);else s.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)s.deleteFramebuffer(v.__webglFramebuffer[G]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=L.textures;for(let G=0,Y=F.length;G<Y;G++){let tt=n.get(F[G]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(F[G])}n.remove(L)}let M=0;function P(){M=0}function C(){return M}function R(L){M=L}function U(){let L=M;return L>=i.maxTextures&&Jt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),M+=1,L}function B(L){let v=[];return v.push(L.wrapS),v.push(L.wrapT),v.push(L.wrapR||0),v.push(L.magFilter),v.push(L.minFilter),v.push(L.anisotropy),v.push(L.internalFormat),v.push(L.format),v.push(L.type),v.push(L.generateMipmaps),v.push(L.premultiplyAlpha),v.push(L.flipY),v.push(L.unpackAlignment),v.push(L.colorSpace),v.join()}function k(L,v){let F=n.get(L);if(L.isVideoTexture&&I(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&F.__version!==L.version){let G=L.image;if(G===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(F,L,v);return}}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+v)}function H(L,v){let F=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){dt(F,L,v);return}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+v)}function q(L,v){let F=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){dt(F,L,v);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+v)}function X(L,v){let F=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&F.__version!==L.version){Gt(F,L,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+v)}let lt={[Is]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[po]:s.MIRRORED_REPEAT},at={[je]:s.NEAREST,[df]:s.NEAREST_MIPMAP_NEAREST,[na]:s.NEAREST_MIPMAP_LINEAR,[Qe]:s.LINEAR,[Yo]:s.LINEAR_MIPMAP_NEAREST,[Ii]:s.LINEAR_MIPMAP_LINEAR},It={[xf]:s.NEVER,[Sf]:s.ALWAYS,[_f]:s.LESS,[Pl]:s.LEQUAL,[yf]:s.EQUAL,[Ll]:s.GEQUAL,[vf]:s.GREATER,[Mf]:s.NOTEQUAL};function $t(L,v){if(v.type===wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Qe||v.magFilter===Yo||v.magFilter===na||v.magFilter===Ii||v.minFilter===Qe||v.minFilter===Yo||v.minFilter===na||v.minFilter===Ii)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,lt[v.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,lt[v.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,lt[v.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,at[v.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,It[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==na&&v.minFilter!==Ii||v.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ee(L,v){let F=!1;L.__webglInit===void 0&&(L.__webglInit=!0,v.addEventListener("dispose",N));let G=v.source,Y=d.get(G);Y===void 0&&(Y={},d.set(G,Y));let tt=B(v);if(tt!==L.__cacheKey){Y[tt]===void 0&&(Y[tt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Y[tt].usedTimes++;let ut=Y[L.__cacheKey];ut!==void 0&&(Y[L.__cacheKey].usedTimes--,ut.usedTimes===0&&D(v)),L.__cacheKey=tt,L.__webglTexture=Y[tt].texture}return F}function j(L,v,F){return Math.floor(Math.floor(L/F)/v)}function et(L,v,F,G){let tt=L.updateRanges;if(tt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,F,G,v.data);else{tt.sort((Ft,St)=>Ft.start-St.start);let ut=0;for(let Ft=1;Ft<tt.length;Ft++){let St=tt[ut],vt=tt[Ft],Bt=St.start+St.count,qt=j(vt.start,v.width,4),Qt=j(St.start,v.width,4);vt.start<=Bt+1&&qt===Qt&&j(vt.start+vt.count-1,v.width,4)===qt?St.count=Math.max(St.count,vt.start+vt.count-St.start):(++ut,tt[ut]=vt)}tt.length=ut+1;let J=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),yt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Ft=0,St=tt.length;Ft<St;Ft++){let vt=tt[Ft],Bt=Math.floor(vt.start/4),qt=Math.ceil(vt.count/4),Qt=Bt%v.width,W=Math.floor(Bt/v.width),bt=qt,st=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(s.UNPACK_SKIP_ROWS,W),e.texSubImage2D(s.TEXTURE_2D,0,Qt,W,bt,st,F,G,v.data)}L.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function dt(L,v,F){let G=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=s.TEXTURE_3D);let Y=ee(L,v),tt=v.source;e.bindTexture(G,L.__webglTexture,s.TEXTURE0+F);let ut=n.get(tt);if(tt.version!==ut.__version||Y===!0){if(e.activeTexture(s.TEXTURE0+F),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let st=ue.getPrimaries(ue.workingColorSpace),Et=v.colorSpace===ui?null:ue.getPrimaries(v.colorSpace),Ct=v.colorSpace===ui||st===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let nt=g(v.image,!1,i.maxTextureSize);nt=mt(v,nt);let yt=r.convert(v.format,v.colorSpace),Ft=r.convert(v.type),St=x(v.internalFormat,yt,Ft,v.normalized,v.colorSpace,v.isVideoTexture);$t(G,v);let vt,Bt=v.mipmaps,qt=v.isVideoTexture!==!0,Qt=ut.__version===void 0||Y===!0,W=tt.dataReady,bt=E(v,nt);if(v.isDepthTexture)St=b(v.format===Pi,v.type),Qt&&(qt?e.texStorage2D(s.TEXTURE_2D,1,St,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,St,nt.width,nt.height,0,yt,Ft,null));else if(v.isDataTexture)if(Bt.length>0){qt&&Qt&&e.texStorage2D(s.TEXTURE_2D,bt,St,Bt[0].width,Bt[0].height);for(let st=0,Et=Bt.length;st<Et;st++)vt=Bt[st],qt?W&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,vt.width,vt.height,yt,Ft,vt.data):e.texImage2D(s.TEXTURE_2D,st,St,vt.width,vt.height,0,yt,Ft,vt.data);v.generateMipmaps=!1}else qt?(Qt&&e.texStorage2D(s.TEXTURE_2D,bt,St,nt.width,nt.height),W&&et(v,nt,yt,Ft)):e.texImage2D(s.TEXTURE_2D,0,St,nt.width,nt.height,0,yt,Ft,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qt&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,St,Bt[0].width,Bt[0].height,nt.depth);for(let st=0,Et=Bt.length;st<Et;st++)if(vt=Bt[st],v.format!==Tn)if(yt!==null)if(qt){if(W)if(v.layerUpdates.size>0){let Ct=fh(vt.width,vt.height,v.format,v.type);for(let ot of v.layerUpdates){let Vt=vt.data.subarray(ot*Ct/vt.data.BYTES_PER_ELEMENT,(ot+1)*Ct/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,ot,vt.width,vt.height,1,yt,Vt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,vt.width,vt.height,nt.depth,yt,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,St,vt.width,vt.height,nt.depth,0,vt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?W&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,vt.width,vt.height,nt.depth,yt,Ft,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,st,St,vt.width,vt.height,nt.depth,0,yt,Ft,vt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{qt&&Qt&&e.texStorage2D(s.TEXTURE_2D,bt,St,Bt[0].width,Bt[0].height);for(let st=0,Et=Bt.length;st<Et;st++)vt=Bt[st],v.format!==Tn?yt!==null?qt?W&&e.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,st,St,vt.width,vt.height,0,vt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?W&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,vt.width,vt.height,yt,Ft,vt.data):e.texImage2D(s.TEXTURE_2D,st,St,vt.width,vt.height,0,yt,Ft,vt.data)}else if(v.isDataArrayTexture)if(qt){if(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,St,nt.width,nt.height,nt.depth),W)if(v.layerUpdates.size>0){let st=fh(nt.width,nt.height,v.format,v.type);for(let Et of v.layerUpdates){let Ct=nt.data.subarray(Et*st/nt.data.BYTES_PER_ELEMENT,(Et+1)*st/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Et,nt.width,nt.height,1,yt,Ft,Ct)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,yt,Ft,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,yt,Ft,nt.data);else if(v.isData3DTexture)qt?(Qt&&e.texStorage3D(s.TEXTURE_3D,bt,St,nt.width,nt.height,nt.depth),W&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,yt,Ft,nt.data)):e.texImage3D(s.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,yt,Ft,nt.data);else if(v.isFramebufferTexture){if(Qt)if(qt)e.texStorage2D(s.TEXTURE_2D,bt,St,nt.width,nt.height);else{let st=nt.width,Et=nt.height;for(let Ct=0;Ct<bt;Ct++)e.texImage2D(s.TEXTURE_2D,Ct,St,st,Et,0,yt,Ft,null),st>>=1,Et>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let st=s.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),nt.parentNode!==st){st.appendChild(nt),u.add(v),st.onpaint=Et=>{let Ct=Et.changedElements;for(let ot of u)Ct.includes(ot.image)&&(ot.needsUpdate=!0)},st.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{let Ct=s.RGBA,ot=s.RGBA,Vt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ct,ot,Vt,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(qt&&Qt){let st=Mt(Bt[0]);e.texStorage2D(s.TEXTURE_2D,bt,St,st.width,st.height)}for(let st=0,Et=Bt.length;st<Et;st++)vt=Bt[st],qt?W&&e.texSubImage2D(s.TEXTURE_2D,st,0,0,yt,Ft,vt):e.texImage2D(s.TEXTURE_2D,st,St,yt,Ft,vt);v.generateMipmaps=!1}else if(qt){if(Qt){let st=Mt(nt);e.texStorage2D(s.TEXTURE_2D,bt,St,st.width,st.height)}W&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Ft,nt)}else e.texImage2D(s.TEXTURE_2D,0,St,yt,Ft,nt);p(v)&&S(G),ut.__version=tt.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function Gt(L,v,F){if(v.image.length!==6)return;let G=ee(L,v),Y=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+F);let tt=n.get(Y);if(Y.version!==tt.__version||G===!0){e.activeTexture(s.TEXTURE0+F);let ut=ue.getPrimaries(ue.workingColorSpace),J=v.colorSpace===ui?null:ue.getPrimaries(v.colorSpace),nt=v.colorSpace===ui||ut===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let yt=v.isCompressedTexture||v.image[0].isCompressedTexture,Ft=v.image[0]&&v.image[0].isDataTexture,St=[];for(let ot=0;ot<6;ot++)!yt&&!Ft?St[ot]=g(v.image[ot],!0,i.maxCubemapSize):St[ot]=Ft?v.image[ot].image:v.image[ot],St[ot]=mt(v,St[ot]);let vt=St[0],Bt=r.convert(v.format,v.colorSpace),qt=r.convert(v.type),Qt=x(v.internalFormat,Bt,qt,v.normalized,v.colorSpace),W=v.isVideoTexture!==!0,bt=tt.__version===void 0||G===!0,st=Y.dataReady,Et=E(v,vt);$t(s.TEXTURE_CUBE_MAP,v);let Ct;if(yt){W&&bt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,Qt,vt.width,vt.height);for(let ot=0;ot<6;ot++){Ct=St[ot].mipmaps;for(let Vt=0;Vt<Ct.length;Vt++){let Ot=Ct[Vt];v.format!==Tn?Bt!==null?W?st&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,0,0,Ot.width,Ot.height,Bt,Ot.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,Qt,Ot.width,Ot.height,0,Ot.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,0,0,Ot.width,Ot.height,Bt,qt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,Qt,Ot.width,Ot.height,0,Bt,qt,Ot.data)}}}else{if(Ct=v.mipmaps,W&&bt){Ct.length>0&&Et++;let ot=Mt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,Qt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ft){W?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,St[ot].width,St[ot].height,Bt,qt,St[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Qt,St[ot].width,St[ot].height,0,Bt,qt,St[ot].data);for(let Vt=0;Vt<Ct.length;Vt++){let Ie=Ct[Vt].image[ot].image;W?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,0,0,Ie.width,Ie.height,Bt,qt,Ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,Qt,Ie.width,Ie.height,0,Bt,qt,Ie.data)}}else{W?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Bt,qt,St[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Qt,Bt,qt,St[ot]);for(let Vt=0;Vt<Ct.length;Vt++){let Ot=Ct[Vt];W?st&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,0,0,Bt,qt,Ot.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,Qt,Bt,qt,Ot.image[ot])}}}p(v)&&S(s.TEXTURE_CUBE_MAP),tt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function wt(L,v,F,G,Y,tt){let ut=r.convert(F.format,F.colorSpace),J=r.convert(F.type),nt=x(F.internalFormat,ut,J,F.normalized,F.colorSpace),yt=n.get(v),Ft=n.get(F);if(Ft.__renderTarget=v,!yt.__hasExternalTextures){let St=Math.max(1,v.width>>tt),vt=Math.max(1,v.height>>tt);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,tt,nt,St,vt,v.depth,0,ut,J,null):e.texImage2D(Y,tt,nt,St,vt,0,ut,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),jt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,Y,Ft.__webglTexture,0,Zt(v)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,Y,Ft.__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(L,v,F){if(s.bindRenderbuffer(s.RENDERBUFFER,L),v.depthBuffer){let G=v.depthTexture,Y=G&&G.isDepthTexture?G.type:null,tt=b(v.stencilBuffer,Y),ut=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt(v),tt,v.width,v.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt(v),tt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,tt,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,L)}else{let G=v.textures;for(let Y=0;Y<G.length;Y++){let tt=G[Y],ut=r.convert(tt.format,tt.colorSpace),J=r.convert(tt.type),nt=x(tt.internalFormat,ut,J,tt.normalized,tt.colorSpace);jt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt(v),nt,v.width,v.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt(v),nt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,nt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(L,v,F){let G=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(v.depthTexture);if(Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,v.depthTexture.addEventListener("dispose",N)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),$t(s.TEXTURE_CUBE_MAP,v.depthTexture);let yt=r.convert(v.depthTexture.format),Ft=r.convert(v.depthTexture.type),St;v.depthTexture.format===Zn?St=s.DEPTH_COMPONENT24:v.depthTexture.format===Pi&&(St=s.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,St,v.width,v.height,0,yt,Ft,null)}}else k(v.depthTexture,0);let tt=Y.__webglTexture,ut=Zt(v),J=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,nt=v.depthTexture.format===Pi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===Zn)jt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,J,tt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,nt,J,tt,0);else if(v.depthTexture.format===Pi)jt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,J,tt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,nt,J,tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(L){let v=n.get(L),F=L.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==L.depthTexture){let G=L.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=G}if(L.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)me(v.__webglFramebuffer[G],L,G);else{let G=L.texture.mipmaps;G&&G.length>0?me(v.__webglFramebuffer[0],L,0):me(v.__webglFramebuffer,L,0)}else if(F){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=s.createRenderbuffer(),Wt(v.__webglDepthbuffer[G],L,!1);else{let Y=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,tt)}}else{let G=L.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Wt(v.__webglDepthbuffer,L,!1);else{let Y=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,tt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(L,v,F){let G=n.get(L);v!==void 0&&wt(G.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&rt(L)}function ft(L){let v=L.texture,F=n.get(L),G=n.get(v);L.addEventListener("dispose",y);let Y=L.textures,tt=L.isWebGLCubeRenderTarget===!0,ut=Y.length>1;if(ut||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=v.version,a.memory.textures++),tt){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let nt=0;nt<v.mipmaps.length;nt++)F.__webglFramebuffer[J][nt]=s.createFramebuffer()}else F.__webglFramebuffer[J]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)F.__webglFramebuffer[J]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ut)for(let J=0,nt=Y.length;J<nt;J++){let yt=n.get(Y[J]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&jt(L)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<Y.length;J++){let nt=Y[J];F.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[J]);let yt=r.convert(nt.format,nt.colorSpace),Ft=r.convert(nt.type),St=x(nt.internalFormat,yt,Ft,nt.normalized,nt.colorSpace,L.isXRRenderTarget===!0),vt=Zt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,St,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,F.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(F.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),$t(s.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)wt(F.__webglFramebuffer[J][nt],L,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt);else wt(F.__webglFramebuffer[J],L,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(v)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let J=0,nt=Y.length;J<nt;J++){let yt=Y[J],Ft=n.get(yt),St=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(St=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(St,Ft.__webglTexture),$t(St,yt),wt(F.__webglFramebuffer,L,yt,s.COLOR_ATTACHMENT0+J,St,0),p(yt)&&S(St)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(J=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,G.__webglTexture),$t(J,v),v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)wt(F.__webglFramebuffer[nt],L,v,s.COLOR_ATTACHMENT0,J,nt);else wt(F.__webglFramebuffer,L,v,s.COLOR_ATTACHMENT0,J,0);p(v)&&S(J),e.unbindTexture()}L.depthBuffer&&rt(L)}function pt(L){let v=L.textures;for(let F=0,G=v.length;F<G;F++){let Y=v[F];if(p(Y)){let tt=T(L),ut=n.get(Y).__webglTexture;e.bindTexture(tt,ut),S(tt),e.unbindTexture()}}}let _t=[],Xt=[];function zt(L){if(L.samples>0){if(jt(L)===!1){let v=L.textures,F=L.width,G=L.height,Y=s.COLOR_BUFFER_BIT,tt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(L),J=v.length>1;if(J)for(let yt=0;yt<v.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let nt=L.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let yt=0;yt<v.length;yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[yt]);let Ft=n.get(v[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,F,G,0,0,F,G,Y,s.NEAREST),l===!0&&(_t.length=0,Xt.length=0,_t.push(s.COLOR_ATTACHMENT0+yt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(_t.push(tt),Xt.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let yt=0;yt<v.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[yt]);let Ft=n.get(v[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let v=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Zt(L){return Math.min(i.maxSamples,L.samples)}function jt(L){let v=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(L){let v=a.render.frame;h.get(L)!==v&&(h.set(L,v),L.update())}function mt(L,v){let F=L.colorSpace,G=L.format,Y=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||F!==wr&&F!==ui&&(ue.getTransfer(F)===ve?(G!==Tn||Y!==mn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",F)),v}function Mt(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.getTextureUnits=C,this.setTextureUnits=R,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=ct,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function uy(s,t){function e(n,i=ui){let r,a=ue.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===$o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===th)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===eh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===jc)return s.BYTE;if(n===Qc)return s.SHORT;if(n===Ks)return s.UNSIGNED_SHORT;if(n===Zo)return s.INT;if(n===zn)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===Hn)return s.HALF_FLOAT;if(n===nh)return s.ALPHA;if(n===ih)return s.RGB;if(n===Tn)return s.RGBA;if(n===Zn)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===Ko)return s.RED;if(n===jo)return s.RED_INTEGER;if(n===Li)return s.RG;if(n===Qo)return s.RG_INTEGER;if(n===tl)return s.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===aa)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===al||n===ol||n===ll||n===cl||n===oa||n===hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===al)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ll)return r.COMPRESSED_R11_EAC;if(n===cl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oa)return r.COMPRESSED_RG11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ul)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===Tl||n===Al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wl)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===Cl||n===la||n===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`,Ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:fy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new We(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends $n{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,_=typeof XRWebGLBinding!="undefined",g=new Ph,p={},S=e.getContextAttributes(),T=null,x=null,b=[],E=[],N=new xt,y=null,A=null,D=new Ye;D.viewport=new Le;let O=new Ye;O.viewport=new Le;let M=[D,O],P=new ko,C=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=b[j];return et===void 0&&(et=new Us,b[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=b[j];return et===void 0&&(et=new Us,b[j]=et),et.getGripSpace()},this.getHand=function(j){let et=b[j];return et===void 0&&(et=new Us,b[j]=et),et.getHandSpace()};function U(j){let et=E.indexOf(j.inputSource);if(et===-1)return;let dt=b[et];dt!==void 0&&(dt.update(j.inputSource,j.frame,c||a),dt.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",k);for(let j=0;j<b.length;j++){let et=E[j];et!==null&&(E[j]=null,b[j].disconnect(et))}C=null,R=null,g.reset();for(let j in p)delete p[j];if(t.setRenderTarget(T),d=null,f=null,u=null,i=null,x=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(N.width,N.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",B),i.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(N),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Gt=null,wt=null;S.depth&&(wt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=S.stencil?Pi:Zn,Gt=S.stencil?js:zn);let Wt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Wt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new pn(f.textureWidth,f.textureHeight,{format:Tn,type:mn,depthTexture:new bi(f.textureWidth,f.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let dt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new pn(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(j){for(let et=0;et<j.removed.length;et++){let dt=j.removed[et],Gt=E.indexOf(dt);Gt>=0&&(E[Gt]=null,b[Gt].disconnect(dt))}for(let et=0;et<j.added.length;et++){let dt=j.added[et],Gt=E.indexOf(dt);if(Gt===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=E.length){E.push(dt),Gt=Wt;break}else if(E[Wt]===null){E[Wt]=dt,Gt=Wt;break}if(Gt===-1)break}let wt=b[Gt];wt&&wt.connect(dt)}}let H=new z,q=new z;function X(j,et,dt){H.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(dt.matrixWorld);let Gt=H.distanceTo(q),wt=et.projectionMatrix.elements,Wt=dt.projectionMatrix.elements,me=wt[14]/(wt[10]-1),rt=wt[14]/(wt[10]+1),ct=(wt[9]+1)/wt[5],ft=(wt[9]-1)/wt[5],pt=(wt[8]-1)/wt[0],_t=(Wt[8]+1)/Wt[0],Xt=me*pt,zt=me*_t,Zt=Gt/(-pt+_t),jt=Zt*-pt;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(jt),j.translateZ(Zt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),wt[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let I=me+Zt,mt=rt+Zt,Mt=Xt-jt,L=zt+(Gt-jt),v=ct*rt/mt*I,F=ft*rt/mt*I;j.projectionMatrix.makePerspective(Mt,L,v,F,I,mt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function lt(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let et=j.near,dt=j.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),P.near=O.near=D.near=et,P.far=O.far=D.far=dt,(C!==P.near||R!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),C=P.near,R=P.far),P.layers.mask=j.layers.mask|6,D.layers.mask=P.layers.mask&-5,O.layers.mask=P.layers.mask&-3;let Gt=j.parent,wt=P.cameras;lt(P,Gt);for(let Wt=0;Wt<wt.length;Wt++)lt(wt[Wt],Gt);wt.length===2?X(P,D,O):P.projectionMatrix.copy(D.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),at(j,P,Gt)};function at(j,et,dt){dt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(dt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ds*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(j){return p[j]};let It=null;function $t(j,et){if(h=et.getViewerPose(c||a),m=et,h!==null){let dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Gt=!1;dt.length!==P.cameras.length&&(P.cameras.length=0,Gt=!0);for(let rt=0;rt<dt.length;rt++){let ct=dt[rt],ft=null;if(d!==null)ft=d.getViewport(ct);else{let _t=u.getViewSubImage(f,ct);ft=_t.viewport,rt===0&&(t.setRenderTargetTextures(x,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(x))}let pt=M[rt];pt===void 0&&(pt=new Ye,pt.layers.enable(rt),pt.viewport=new Le,M[rt]=pt),pt.matrix.fromArray(ct.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ct.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ft.x,ft.y,ft.width,ft.height),rt===0&&(P.matrix.copy(pt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Gt===!0&&P.cameras.push(pt)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let rt=u.getDepthInformation(dt[0]);rt&&rt.isValid&&rt.texture&&g.init(rt,i.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<dt.length;rt++){let ct=dt[rt].camera;if(ct){let ft=p[ct];ft||(ft=new zr,p[ct]=ft);let pt=u.getCameraImage(ct);ft.sourceTexture=pt}}}}for(let dt=0;dt<b.length;dt++){let Gt=E[dt],wt=b[dt];Gt!==null&&wt!==void 0&&wt.update(Gt,et,c||a)}It&&It(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let ee=new id;ee.setAnimationLoop($t),this.setAnimationLoop=function(j){It=j},this.dispose=function(){}}},py=new xe,cd=new te;cd.set(-1,0,0,0,1,0,0,0,1);function my(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ch(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,S,T,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),T=S.envMap,x=S.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(py.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(cd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gy(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let E=b.program;n.uniformBlockBinding(x,E)}function c(x,b){let E=i[x.id];E===void 0&&(g(x),E=h(x),i[x.id]=E,x.addEventListener("dispose",S));let N=b.program;n.updateUBOMapping(x,N);let y=t.render.frame;r[x.id]!==y&&(f(x),r[x.id]=y)}function h(x){let b=u();x.__bindingPointIndex=b;let E=s.createBuffer(),N=x.__size,y=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,N,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let b=i[x.id],E=x.uniforms,N=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let y=0,A=E.length;y<A;y++){let D=E[y];if(Array.isArray(D))for(let O=0,M=D.length;O<M;O++)d(D[O],y,O,N);else d(D,y,0,N)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,b,E,N){if(_(x,b,E,N)===!0){let y=x.__offset,A=x.value;if(Array.isArray(A)){let D=0;for(let O=0;O<A.length;O++){let M=A[O],P=p(M);m(M,x.__data,D),typeof M!="number"&&typeof M!="boolean"&&!M.isMatrix3&&!ArrayBuffer.isView(M)&&(D+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,x.__data)}}function m(x,b,E){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,E)}function _(x,b,E,N){let y=x.value,A=b+"_"+E;if(N[A]===void 0)return typeof y=="number"||typeof y=="boolean"?N[A]=y:ArrayBuffer.isView(y)?N[A]=y.slice():N[A]=y.clone(),!0;{let D=N[A];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return N[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function g(x){let b=x.uniforms,E=0,N=16;for(let A=0,D=b.length;A<D;A++){let O=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,P=O.length;M<P;M++){let C=O[M],R=Array.isArray(C.value)?C.value:[C.value];for(let U=0,B=R.length;U<B;U++){let k=R[U],H=p(k),q=E%N,X=q%H.boundary,lt=q+X;E+=X,lt!==0&&N-lt<H.storage&&(E+=N-lt),C.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=H.storage}}}let y=E%N;return y>0&&(E+=N-y),x.__size=E,x.__cache={},this}function p(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",x),b}function S(x){let b=x.target;b.removeEventListener("dispose",S);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function T(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:T}}var xy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;function _y(){return jn===null&&(jn=new Fr(xy,16,16,Li,Hn),jn.name="DFG_LUT",jn.minFilter=Qe,jn.magFilter=Qe,jn.wrapS=qn,jn.wrapT=qn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}var da=class{constructor(t={}){let{canvas:e=bf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=mn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=d,g=new Set([tl,Qo,jo]),p=new Set([mn,zn,Ks,js,$o,Jo]),S=new Uint32Array(4),T=new Int32Array(4),x=new z,b=null,E=null,N=[],y=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,O=!1,M=null,P=null,C=null,R=null;this._outputColorSpace=Te;let U=0,B=0,k=null,H=-1,q=null,X=new Le,lt=new Le,at=null,It=new Dt(0),$t=0,ee=e.width,j=e.height,et=1,dt=null,Gt=null,wt=new Le(0,0,ee,j),Wt=new Le(0,0,ee,j),me=!1,rt=new Hs,ct=!1,ft=!1,pt=new xe,_t=new z,Xt=new Le,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function jt(){return k===null?et:1}let I=n;function mt(w,V){return e.getContext(w,V)}let Mt,L,v,F,G,Y,tt,ut,J,nt,yt,Ft,St,vt,Bt,qt,Qt,W,bt,st,Et,Ct,ot;try{let w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",In,!1),I===null){let V="webgl2";if(I=mt(V,w),I===null)throw mt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(w){throw e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",In,!1),Kt("WebGLRenderer: "+w.message),w}function Vt(){Mt=new wx(I),Mt.init(),Et=new uy(I,Mt),L=new mx(I,Mt,t,Et),v=new cy(I,Mt),L.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),P=I.createFramebuffer(),C=I.createFramebuffer(),R=I.createFramebuffer(),F=new Rx(I),G=new $_,Y=new hy(I,Mt,v,G,L,Et,F),tt=new Ex(D),ut=new Im(I),Ct=new dx(I,ut),J=new Tx(I,ut,F,Ct),nt=new Ix(I,J,ut,Ct,F),W=new Cx(I,L,Y),Bt=new gx(G),yt=new Z_(D,tt,Mt,L,Ct,Bt),Ft=new my(D,G),St=new K_,vt=new iy(Mt),Qt=new fx(D,tt,v,nt,m,l),qt=new ly(D,nt,L),ot=new gy(I,F,L,v),bt=new px(I,Mt,F),st=new Ax(I,Mt,F),F.programs=yt.programs,D.capabilities=L,D.extensions=Mt,D.properties=G,D.renderLists=St,D.shadowMap=qt,D.state=v,D.info=F}_!==mn&&(A=new Lx(_,e.width,e.height,o,i,r));let Ot=new Lh(D,I);this.xr=Ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(ee,j,!1))},this.getSize=function(w){return w.set(ee,j)},this.setSize=function(w,V,K=!0){if(Ot.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,j=V,e.width=Math.floor(w*et),e.height=Math.floor(V*et),K===!0&&(e.style.width=w+"px",e.style.height=V+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(ee*et,j*et).floor()},this.setDrawingBufferSize=function(w,V,K){ee=w,j=V,et=K,e.width=Math.floor(w*K),e.height=Math.floor(V*K),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(_===mn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(X)},this.getViewport=function(w){return w.copy(wt)},this.setViewport=function(w,V,K,Z){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,V,K,Z),v.viewport(X.copy(wt).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(Wt)},this.setScissor=function(w,V,K,Z){w.isVector4?Wt.set(w.x,w.y,w.z,w.w):Wt.set(w,V,K,Z),v.scissor(lt.copy(Wt).multiplyScalar(et).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(w){v.setScissorTest(me=w)},this.setOpaqueSort=function(w){dt=w},this.setTransparentSort=function(w){Gt=w},this.getClearColor=function(w){return w.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,K=!0){let Z=0;if(w){let $=!1;if(k!==null){let Rt=k.texture.format;$=g.has(Rt)}if($){let Rt=k.texture.type,Lt=p.has(Rt),At=Qt.getClearColor(),Nt=Qt.getClearAlpha(),Ht=At.r,re=At.g,ce=At.b;Lt?(S[0]=Ht,S[1]=re,S[2]=ce,S[3]=Nt,I.clearBufferuiv(I.COLOR,0,S)):(T[0]=Ht,T[1]=re,T[2]=ce,T[3]=Nt,I.clearBufferiv(I.COLOR,0,T))}else Z|=I.COLOR_BUFFER_BIT}V&&(Z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),M=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",In,!1),Qt.dispose(),St.dispose(),vt.dispose(),G.dispose(),tt.dispose(),nt.dispose(),Ct.dispose(),ot.dispose(),yt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",eu),Ot.removeEventListener("sessionend",nu),Oi.stop()};function Ie(w){w.preventDefault(),Rr("WebGLRenderer: Context Lost."),O=!0}function _e(){Rr("WebGLRenderer: Context Restored."),O=!1;let w=F.autoReset,V=qt.enabled,K=qt.autoUpdate,Z=qt.needsUpdate,$=qt.type;Vt(),F.autoReset=w,qt.enabled=V,qt.autoUpdate=K,qt.needsUpdate=Z,qt.type=$}function In(w){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vn(w){let V=w.target;V.removeEventListener("dispose",Vn),Jd(V)}function Jd(w){Kd(w),G.remove(w)}function Kd(w){let V=G.get(w).programs;V!==void 0&&(V.forEach(function(K){yt.releaseProgram(K)}),w.isShaderMaterial&&yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,K,Z,$,Rt){V===null&&(V=zt);let Lt=$.isMesh&&$.matrixWorld.determinantAffine()<0,At=tp(w,V,K,Z,$);v.setMaterial(Z,Lt);let Nt=K.index,Ht=1;if(Z.wireframe===!0){if(Nt=J.getWireframeAttribute(K),Nt===void 0)return;Ht=2}let re=K.drawRange,ce=K.attributes.position,Ut=re.start*Ht,ye=(re.start+re.count)*Ht;Rt!==null&&(Ut=Math.max(Ut,Rt.start*Ht),ye=Math.min(ye,(Rt.start+Rt.count)*Ht)),Nt!==null?(Ut=Math.max(Ut,0),ye=Math.min(ye,Nt.count)):ce!=null&&(Ut=Math.max(Ut,0),ye=Math.min(ye,ce.count));let ke=ye-Ut;if(ke<0||ke===1/0)return;Ct.setup($,Z,At,K,Nt);let Ne,we=bt;if(Nt!==null&&(Ne=ut.get(Nt),we=st,we.setIndex(Ne)),$.isMesh)Z.wireframe===!0?(v.setLineWidth(Z.wireframeLinewidth*jt()),we.setMode(I.LINES)):we.setMode(I.TRIANGLES);else if($.isLine){let nn=Z.linewidth;nn===void 0&&(nn=1),v.setLineWidth(nn*jt()),$.isLineSegments?we.setMode(I.LINES):$.isLineLoop?we.setMode(I.LINE_LOOP):we.setMode(I.LINE_STRIP)}else $.isPoints?we.setMode(I.POINTS):$.isSprite&&we.setMode(I.TRIANGLES);if($.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))we.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let nn=$._multiDrawStarts,Pt=$._multiDrawCounts,cn=$._multiDrawCount,ge=Nt?ut.get(Nt).bytesPerElement:1,bn=G.get(Z).currentProgram.getUniforms();for(let Wn=0;Wn<cn;Wn++)bn.setValue(I,"_gl_DrawID",Wn),we.render(nn[Wn]/ge,Pt[Wn])}else if($.isInstancedMesh)we.renderInstances(Ut,ke,$.count);else if(K.isInstancedBufferGeometry){let nn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Pt=Math.min(K.instanceCount,nn);we.renderInstances(Ut,ke,Pt)}else we.render(Ut,ke)};function tu(w,V,K,Z){M!==null&&w.isNodeMaterial&&M.setObject(Z,w),ct===!0&&Bt.setState(w,K,!1),w.transparent===!0&&w.side===en&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,Ia(w,V,Z),w.side=Ai,w.needsUpdate=!0,Ia(w,V,Z),w.side=en):Ia(w,V,Z)}this.compile=function(w,V,K=null){K===null&&(K=w),M!==null&&M.renderStart(w,V,K),E=vt.get(K),E.init(V),y.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),w!==K&&w.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),M!==null&&M.updateLights(E.state.lightsArray),ft=this.localClippingEnabled,ct=Bt.init(this.clippingPlanes,ft),ct===!0&&Bt.setGlobalState(this.clippingPlanes,V),M!==null&&qt.render(E.state.shadowsArray,K,V);let Z=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Rt=$.material;if(Rt)if(Array.isArray(Rt))for(let Lt=0;Lt<Rt.length;Lt++){let At=Rt[Lt];tu(At,K,V,$),Z.add(At)}else tu(Rt,K,V,$),Z.add(Rt)}),E=y.pop(),M!==null&&M.renderEnd(),Z},this.compileAsync=function(w,V,K=null){let Z=this.compile(w,V,K);return new Promise($=>{function Rt(){if(Z.forEach(function(Lt){let Nt=G.get(Lt).currentProgram;(Nt===void 0||Nt.isReady())&&Z.delete(Lt)}),Z.size===0){$(w);return}setTimeout(Rt,10)}Mt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let tc=null;function jd(w){tc&&tc(w)}function eu(){Oi.stop()}function nu(){Oi.start()}let Oi=new id;Oi.setAnimationLoop(jd),typeof self!="undefined"&&Oi.setContext(self),this.setAnimationLoop=function(w){tc=w,Ot.setAnimationLoop(w),w===null?Oi.stop():Oi.start()},Ot.addEventListener("sessionstart",eu),Ot.addEventListener("sessionend",nu),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;M!==null&&M.renderStart(w,V);let K=Ot.enabled===!0&&Ot.isPresenting===!0,Z=A!==null&&(k===null||K)&&A.begin(D,k);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(V),V=Ot.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,V,k),E=vt.get(w,y.length),E.init(V),E.state.textureUnits=Y.getTextureUnits(),y.push(E),pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),rt.setFromProjectionMatrix(pt,Fn,V.reversedDepth),ft=this.localClippingEnabled,ct=Bt.init(this.clippingPlanes,ft),b=St.get(w,N.length),b.init(),N.push(b),Ot.enabled===!0&&Ot.isPresenting===!0){let Lt=D.xr.getDepthSensingMesh();Lt!==null&&ec(Lt,V,-1/0,D.sortObjects)}ec(w,V,0,D.sortObjects),b.finish(),M!==null&&M.updateLights(E.state.lightsArray),D.sortObjects===!0&&b.sort(dt,Gt),Zt=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Zt&&Qt.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Bt.beginShadows();let $=E.state.shadowsArray;if(qt.render($,w,V),ct===!0&&Bt.endShadows(),(Z&&A.hasRenderPass())===!1){let Lt=b.opaque,At=b.transmissive;if(E.setupLights(),V.isArrayCamera){let Nt=V.cameras;if(At.length>0)for(let Ht=0,re=Nt.length;Ht<re;Ht++){let ce=Nt[Ht];su(Lt,At,w,ce)}Zt&&Qt.render(w);for(let Ht=0,re=Nt.length;Ht<re;Ht++){let ce=Nt[Ht];iu(b,w,ce,ce.viewport)}}else At.length>0&&su(Lt,At,w,V),Zt&&Qt.render(w),iu(b,w,V)}k!==null&&B===0&&(Y.updateMultisampleRenderTarget(k),Y.updateRenderTargetMipmap(k)),Z&&A.end(D),w.isScene===!0&&w.onAfterRender(D,w,V),Ct.resetDefaultState(),H=-1,q=null,y.pop(),y.length>0?(E=y[y.length-1],Y.setTextureUnits(E.state.textureUnits),ct===!0&&Bt.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,N.pop(),N.length>0?b=N[N.length-1]:b=null,M!==null&&M.renderEnd()};function ec(w,V,K,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(rt)){Z&&Xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pt);let Lt=nt.update(w),At=w.material;At.visible&&b.push(w,Lt,At,K,Xt.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(rt))){let Lt=nt.update(w),At=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xt.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Xt.copy(Lt.boundingSphere.center)),Xt.applyMatrix4(w.matrixWorld).applyMatrix4(pt)),Array.isArray(At)){let Nt=Lt.groups;for(let Ht=0,re=Nt.length;Ht<re;Ht++){let ce=Nt[Ht],Ut=At[ce.materialIndex];Ut&&Ut.visible&&b.push(w,Lt,Ut,K,Xt.z,ce,V)}}else At.visible&&b.push(w,Lt,At,K,Xt.z,null,V)}}let Rt=w.children;for(let Lt=0,At=Rt.length;Lt<At;Lt++)ec(Rt[Lt],V,K,Z)}function iu(w,V,K,Z){let{opaque:$,transmissive:Rt,transparent:Lt}=w;E.setupLightsView(K),ct===!0&&Bt.setGlobalState(D.clippingPlanes,K),Z&&v.viewport(X.copy(Z)),$.length>0&&Ca($,V,K),Rt.length>0&&Ca(Rt,V,K),Lt.length>0&&Ca(Lt,V,K),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function su(w,V,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){let Ut=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new pn(1,1,{generateMipmaps:!0,type:Ut?Hn:mn,minFilter:Ii,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Rt=E.state.transmissionRenderTarget[Z.id],Lt=Z.viewport||X;Rt.setSize(Lt.z*D.transmissionResolutionScale,Lt.w*D.transmissionResolutionScale);let At=D.getRenderTarget(),Nt=D.getActiveCubeFace(),Ht=D.getActiveMipmapLevel();D.setRenderTarget(Rt),D.getClearColor(It),$t=D.getClearAlpha(),$t<1&&D.setClearColor(16777215,.5),D.clear(),Zt&&Qt.render(K);let re=D.toneMapping;D.toneMapping=On;let ce=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),ct===!0&&Bt.setGlobalState(D.clippingPlanes,Z),Ca(w,K,Z),Y.updateMultisampleRenderTarget(Rt),Y.updateRenderTargetMipmap(Rt),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ye=0,ke=V.length;ye<ke;ye++){let Ne=V[ye],{object:we,geometry:nn,material:Pt,group:cn}=Ne;if(Pt.side===en&&we.layers.test(Z.layers)){let ge=Pt.side;Pt.side=Ze,Pt.needsUpdate=!0,ru(we,K,Z,nn,Pt,cn),Pt.side=ge,Pt.needsUpdate=!0,Ut=!0}}Ut===!0&&(Y.updateMultisampleRenderTarget(Rt),Y.updateRenderTargetMipmap(Rt))}D.setRenderTarget(At,Nt,Ht),D.setClearColor(It,$t),ce!==void 0&&(Z.viewport=ce),D.toneMapping=re}function Ca(w,V,K){let Z=V.isScene===!0?V.overrideMaterial:null;for(let $=0,Rt=w.length;$<Rt;$++){let Lt=w[$],{object:At,geometry:Nt,group:Ht}=Lt,re=Lt.material;re.allowOverride===!0&&Z!==null&&(re=Z),At.layers.test(K.layers)&&ru(At,V,K,Nt,re,Ht)}}function ru(w,V,K,Z,$,Rt){M!==null&&$.isNodeMaterial&&M.setObject(w,$),w.onBeforeRender(D,V,K,Z,$,Rt),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(D,V,K,Z,w,Rt),$.transparent===!0&&$.side===en&&$.forceSinglePass===!1?($.side=Ze,$.needsUpdate=!0,D.renderBufferDirect(K,V,Z,$,w,Rt),$.side=Ai,$.needsUpdate=!0,D.renderBufferDirect(K,V,Z,$,w,Rt),$.side=en):D.renderBufferDirect(K,V,Z,$,w,Rt),w.onAfterRender(D,V,K,Z,$,Rt)}function Ia(w,V,K){V.isScene!==!0&&(V=zt);let Z=G.get(w),$=E.state.lights,Rt=E.state.shadowsArray,Lt=$.state.version,At=yt.getParameters(w,$.state,Rt,V,K,E.state.lightProbeGridArray),Nt=yt.getProgramCacheKey(At),Ht=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let re=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=tt.get(w.envMap||Z.environment,re),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ht===void 0&&(w.addEventListener("dispose",Vn),Ht=new Map,Z.programs=Ht);let ce=Ht.get(Nt);if(ce!==void 0){if(Z.currentProgram===ce&&Z.lightsStateVersion===Lt)return ou(w,At),ce}else At.uniforms=yt.getUniforms(w),M!==null&&w.isNodeMaterial&&M.build(w,K,At),w.onBeforeCompile(At,D),ce=yt.acquireProgram(At,Nt),Ht.set(Nt,ce),Z.uniforms=At.uniforms;let Ut=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ut.clippingPlanes=Bt.uniform),ou(w,At),Z.needsLights=np(w),Z.lightsStateVersion=Lt,Z.needsLights&&(Ut.ambientLightColor.value=$.state.ambient,Ut.lightProbe.value=$.state.probe,Ut.sunLights.value=$.state.sun,Ut.sunLightShadows.value=$.state.sunShadow,Ut.directionalLights.value=$.state.directional,Ut.directionalLightShadows.value=$.state.directionalShadow,Ut.spotLights.value=$.state.spot,Ut.spotLightShadows.value=$.state.spotShadow,Ut.rectAreaLights.value=$.state.rectArea,Ut.ltc_1.value=$.state.rectAreaLTC1,Ut.ltc_2.value=$.state.rectAreaLTC2,Ut.pointLights.value=$.state.point,Ut.pointLightShadows.value=$.state.pointShadow,Ut.hemisphereLights.value=$.state.hemi,Ut.sunShadowMatrix.value=$.state.sunShadowMatrix,Ut.sunShadowCascade.value=$.state.sunShadowCascade,Ut.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ut.spotLightMatrix.value=$.state.spotLightMatrix,Ut.spotLightMap.value=$.state.spotLightMap,Ut.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=E.state.lightProbeGridArray.length>0,Z.currentProgram=ce,Z.uniformsList=null,ce}function au(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=nr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function ou(w,V){let K=G.get(w);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Qd(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(V.matrixWorld);for(let K=0,Z=w.length;K<Z;K++){let $=w[K];if($.texture!==null&&$.boundingBox.containsPoint(x))return $}return null}function tp(w,V,K,Z,$){V.isScene!==!0&&(V=zt),Y.resetTextureUnits();let Rt=V.fog,Lt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,At=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ue.workingColorSpace,Nt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ht=tt.get(Z.envMap||Lt,Nt),re=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ce=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ut=!!K.morphAttributes.position,ye=!!K.morphAttributes.normal,ke=!!K.morphAttributes.color,Ne=On;Z.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ne=D.toneMapping);let we=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,nn=we!==void 0?we.length:0,Pt=G.get(Z),cn=E.state.lights;if(ct===!0&&(ft===!0||w!==q)){let Pe=w===q&&Z.id===H;Bt.setState(Z,w,Pe)}let ge=!1;Z.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==cn.state.version||Pt.outputColorSpace!==At||$.isBatchedMesh&&Pt.batching===!1||!$.isBatchedMesh&&Pt.batching===!0||$.isBatchedMesh&&Pt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Pt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Pt.instancing===!1||!$.isInstancedMesh&&Pt.instancing===!0||$.isSkinnedMesh&&Pt.skinning===!1||!$.isSkinnedMesh&&Pt.skinning===!0||$.isInstancedMesh&&Pt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Pt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Pt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Pt.instancingMorph===!1&&$.morphTexture!==null||Pt.envMap!==Ht||Z.fog===!0&&Pt.fog!==Rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Bt.numPlanes||Pt.numIntersection!==Bt.numIntersection)||Pt.vertexAlphas!==re||Pt.vertexTangents!==ce||Pt.morphTargets!==Ut||Pt.morphNormals!==ye||Pt.morphColors!==ke||Pt.toneMapping!==Ne||Pt.morphTargetsCount!==nn||!!Pt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Pt.__version=Z.version);let bn=Pt.currentProgram;ge===!0&&(bn=Ia(Z,V,$),M&&Z.isNodeMaterial&&M.onUpdateProgram(Z,bn,Pt));let Wn=!1,mi=!1,ls=!1,Ee=bn.getUniforms(),ze=Pt.uniforms;if(v.useProgram(bn.program)&&(Wn=!0,mi=!0,ls=!0),Z.id!==H&&(H=Z.id,mi=!0),Pt.needsLights){let Pe=Qd(E.state.lightProbeGridArray,$);Pt.lightProbeGrid!==Pe&&(Pt.lightProbeGrid=Pe,mi=!0)}if(Wn||q!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ee.setValue(I,"projectionMatrix",w.projectionMatrix),Ee.setValue(I,"viewMatrix",w.matrixWorldInverse);let xi=Ee.map.cameraPosition;xi!==void 0&&xi.setValue(I,_t.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&Ee.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ee.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,mi=!0,ls=!0)}if(Pt.needsLights&&(cn.state.sunShadowMap.length>0&&Ee.setValue(I,"sunShadowMap",cn.state.sunShadowMap,Y),cn.state.directionalShadowMap.length>0&&Ee.setValue(I,"directionalShadowMap",cn.state.directionalShadowMap,Y),cn.state.spotShadowMap.length>0&&Ee.setValue(I,"spotShadowMap",cn.state.spotShadowMap,Y),cn.state.pointShadowMap.length>0&&Ee.setValue(I,"pointShadowMap",cn.state.pointShadowMap,Y)),$.isSkinnedMesh){Ee.setOptional(I,$,"bindMatrix"),Ee.setOptional(I,$,"bindMatrixInverse");let Pe=$.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Ee.setValue(I,"boneTexture",Pe.boneTexture,Y))}$.isBatchedMesh&&(Ee.setOptional(I,$,"batchingTexture"),Ee.setValue(I,"batchingTexture",$._matricesTexture,Y),Ee.setOptional(I,$,"batchingIdTexture"),Ee.setValue(I,"batchingIdTexture",$._indirectTexture,Y),Ee.setOptional(I,$,"batchingColorTexture"),$._colorsTexture!==null&&Ee.setValue(I,"batchingColorTexture",$._colorsTexture,Y));let gi=K.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&W.update($,K,bn),(mi||Pt.receiveShadow!==$.receiveShadow)&&(Pt.receiveShadow=$.receiveShadow,Ee.setValue(I,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(ze.envMapIntensity.value=V.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=_y()),mi){if(Ee.setValue(I,"toneMappingExposure",D.toneMappingExposure),Pt.needsLights&&ep(ze,ls),Rt&&Z.fog===!0&&Ft.refreshFogUniforms(ze,Rt),Ft.refreshMaterialUniforms(ze,Z,et,j,E.state.transmissionRenderTarget[w.id]),Pt.needsLights&&Pt.lightProbeGrid){let Pe=Pt.lightProbeGrid;ze.probesSH.value=Pe.texture,ze.probesMin.value.copy(Pe.boundingBox.min),ze.probesMax.value.copy(Pe.boundingBox.max),ze.probesResolution.value.copy(Pe.resolution)}nr.upload(I,au(Pt),ze,Y)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(nr.upload(I,au(Pt),ze,Y),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ee.setValue(I,"center",$.center),Ee.setValue(I,"modelViewMatrix",$.modelViewMatrix),Ee.setValue(I,"normalMatrix",$.normalMatrix),Ee.setValue(I,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let Pe=Z.uniformsGroups;for(let xi=0,cs=Pe.length;xi<cs;xi++){let cu=Pe[xi];ot.update(cu,bn),ot.bind(cu,bn)}}return bn}function ep(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function np(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,V,K){let Z=G.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=V,G.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let K=G.get(w);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,K=0){k=w,U=V,B=K;let Z=null,$=!1,Rt=!1;if(w){let At=G.get(w);if(At.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,At.__webglFramebuffer),X.copy(w.viewport),lt.copy(w.scissor),at=w.scissorTest,v.viewport(X),v.scissor(lt),v.setScissorTest(at),H=-1;return}else if(At.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(At.__hasExternalTextures)Y.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let re=w.depthTexture;if(At.__boundDepthTexture!==re){if(re!==null&&G.has(re)&&(w.width!==re.image.width||w.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}let Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Rt=!0);let Ht=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[V])?Z=Ht[V][K]:Z=Ht[V],$=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?Z=G.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?Z=Ht[K]:Z=Ht,X.copy(w.viewport),lt.copy(w.scissor),at=w.scissorTest}else X.copy(wt).multiplyScalar(et).floor(),lt.copy(Wt).multiplyScalar(et).floor(),at=me;if(K!==0&&(Z=P),v.bindFramebuffer(I.FRAMEBUFFER,Z)&&v.drawBuffers(w,Z),v.viewport(X),v.scissor(lt),v.setScissorTest(at),$){let At=G.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,At.__webglTexture,K)}else if(Rt){let At=V;for(let Nt=0;Nt<w.textures.length;Nt++){let Ht=G.get(w.textures[Nt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Nt,Ht.__webglTexture,K,At)}}else if(w!==null&&K!==0){let At=G.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,At.__webglTexture,K)}H=-1};function lu(w){let V=G.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=L.textureFormatReadable(w.format),V.__typeReadable=L.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,K,Z,$,Rt,Lt,At=0){if(!(w&&w.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){v.bindFramebuffer(I.FRAMEBUFFER,Nt);try{let Ht=w.textures[At],re=Ht.format,ce=Ht.type;w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+At);let Ut=lu(Ht);if(Ut.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&K>=0&&K<=w.height-$&&I.readPixels(V,K,Z,$,Et.convert(re),Et.convert(ce),Rt)}finally{let Ht=k!==null?G.get(k).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(w,V,K,Z,$,Rt,Lt,At=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt)if(V>=0&&V<=w.width-Z&&K>=0&&K<=w.height-$){v.bindFramebuffer(I.FRAMEBUFFER,Nt);let Ht=w.textures[At],re=Ht.format,ce=Ht.type;w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+At);let Ut=lu(Ht);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ye),I.bufferData(I.PIXEL_PACK_BUFFER,Rt.byteLength,I.STREAM_READ),I.readPixels(V,K,Z,$,Et.convert(re),Et.convert(ce),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let ke=k!==null?G.get(k).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,ke);let Ne=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wf(I,Ne,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ye),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Rt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ye),I.deleteSync(Ne),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,K=0){let Z=Math.pow(2,-K),$=Math.floor(w.image.width*Z),Rt=Math.floor(w.image.height*Z),Lt=V!==null?V.x:0,At=V!==null?V.y:0;Y.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,Lt,At,$,Rt),v.unbindTexture()},this.copyTextureToTexture=function(w,V,K=null,Z=null,$=0,Rt=0){let Lt,At,Nt,Ht,re,ce,Ut,ye,ke,Ne=w.isCompressedTexture?w.mipmaps[Rt]:w.image;if(K!==null)Lt=K.max.x-K.min.x,At=K.max.y-K.min.y,Nt=K.isBox3?K.max.z-K.min.z:1,Ht=K.min.x,re=K.min.y,ce=K.isBox3?K.min.z:0;else{let ze=Math.pow(2,-$);Lt=Math.floor(Ne.width*ze),At=Math.floor(Ne.height*ze),w.isDataArrayTexture?Nt=Ne.depth:w.isData3DTexture?Nt=Math.floor(Ne.depth*ze):Nt=1,Ht=0,re=0,ce=0}Z!==null?(Ut=Z.x,ye=Z.y,ke=Z.z):(Ut=0,ye=0,ke=0);let we=Et.convert(V.format),nn=Et.convert(V.type),Pt;V.isData3DTexture?(Y.setTexture3D(V,0),Pt=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Y.setTexture2DArray(V,0),Pt=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(V,0),Pt=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);let cn=v.getParameter(I.UNPACK_ROW_LENGTH),ge=v.getParameter(I.UNPACK_IMAGE_HEIGHT),bn=v.getParameter(I.UNPACK_SKIP_PIXELS),Wn=v.getParameter(I.UNPACK_SKIP_ROWS),mi=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Ht),v.pixelStorei(I.UNPACK_SKIP_ROWS,re),v.pixelStorei(I.UNPACK_SKIP_IMAGES,ce);let ls=w.isDataArrayTexture||w.isData3DTexture,Ee=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let ze=G.get(w),gi=G.get(V),Pe=G.get(ze.__renderTarget),xi=G.get(gi.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,Pe.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let cs=0;cs<Nt;cs++)ls&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(w).__webglTexture,$,ce+cs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(V).__webglTexture,Rt,ke+cs)),I.blitFramebuffer(Ht,re,Lt,At,Ut,ye,Lt,At,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||G.has(w)){let ze=G.get(w),gi=G.get(V);v.bindFramebuffer(I.READ_FRAMEBUFFER,C),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,R);for(let Pe=0;Pe<Nt;Pe++)ls?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.__webglTexture,$,ce+Pe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ze.__webglTexture,$),Ee?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gi.__webglTexture,Rt,ke+Pe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gi.__webglTexture,Rt),$!==0?I.blitFramebuffer(Ht,re,Lt,At,Ut,ye,Lt,At,I.COLOR_BUFFER_BIT,I.NEAREST):Ee?I.copyTexSubImage3D(Pt,Rt,Ut,ye,ke+Pe,Ht,re,Lt,At):I.copyTexSubImage2D(Pt,Rt,Ut,ye,Ht,re,Lt,At);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ee?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Pt,Rt,Ut,ye,ke,Lt,At,Nt,we,nn,Ne.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(Pt,Rt,Ut,ye,ke,Lt,At,Nt,we,Ne.data):I.texSubImage3D(Pt,Rt,Ut,ye,ke,Lt,At,Nt,we,nn,Ne):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Rt,Ut,ye,Lt,At,we,nn,Ne.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Rt,Ut,ye,Ne.width,Ne.height,we,Ne.data):I.texSubImage2D(I.TEXTURE_2D,Rt,Ut,ye,Lt,At,we,nn,Ne);v.pixelStorei(I.UNPACK_ROW_LENGTH,cn),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge),v.pixelStorei(I.UNPACK_SKIP_PIXELS,bn),v.pixelStorei(I.UNPACK_SKIP_ROWS,Wn),v.pixelStorei(I.UNPACK_SKIP_IMAGES,mi),Rt===0&&V.generateMipmaps&&I.generateMipmap(Pt),v.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){U=0,B=0,k=null,v.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var pa=class extends ci{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new De;t.deleteAttribute("uv");let e=new he({side:Ze}),n=new he,i=new Qr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new it(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Br(t,n,6),o=new Ve;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new it(t,sr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new it(t,sr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new it(t,sr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new it(t,sr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new it(t,sr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new it(t,sr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function sr(s){return new $r({color:0,emissive:16777215,emissiveIntensity:s})}var fi=[{id:0,name:"Bubbles",tag:"The Royal Bean",color:"#ff5fb4"},{id:1,name:"Ninja",tag:"The Silent Bean",color:"#3b82f6"},{id:2,name:"Dino",tag:"The Chunky Dino",color:"#3ddc84"},{id:3,name:"Robo",tag:"The Bolt Bot",color:"#ffc233"}],ma=[{id:0,key:"candy",name:"Candy Meadow",sub:"Easy",stars:1,limit:110,finishZ:-321.9,finishY:0,colors:["#ff7ab8","#7be8ff"],blurb:"Sweet hills, bouncy mushrooms, spinning bars"},{id:1,key:"canyon",name:"Sunset Canyon",sub:"Medium",stars:2,limit:130,finishZ:-314,finishY:5,colors:["#ff8a3d","#8b2fc9"],blurb:"Lava, hammers, conveyors and rolling balls"},{id:2,key:"frost",name:"Frozen Peak",sub:"Hard",stars:3,limit:150,finishZ:-332.7,finishY:10.5,colors:["#9fe3ff","#3b82f6"],blurb:"Slippery ice, snowballs, lifts and bounce pads"},{id:3,key:"neon",name:"Neon Space",sub:"Insane",stars:4,limit:170,finishZ:-412.5,finishY:5,colors:["#22f2ff","#ff2bd6"],blurb:"Vanishing tiles, giant fans and pistons in space"},{id:4,key:"fair",name:"Funfair Frenzy",sub:"Extreme",stars:5,limit:180,finishZ:-421.6,finishY:0,colors:["#ffd23f","#ff4d6d"],blurb:"Seesaws, bungee bounce, roller coaster and pitfalls"},{id:5,key:"fun",name:"Fun Map",sub:"Chill",stars:1,limit:400,finishZ:-424,finishY:.15,colors:["#80ed99","#4cc9f0"],blurb:"Giant theme park: rides, a speedway with 4 cars to drive, then the maze. Nothing can kill you!"}];var ga=new z;function An(s,t,e,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;ga.copy(t),ga[n]=0,ga.normalize();let c=.5*a/(a+o),h=1-ga.angleTo(s)/l;return Math.sign(ga[e])===1?h*c:o/(a+o)+c+c*(1-h)}var rr=class s extends De{constructor(t=1,e=1,n=1,i=2,r=.1){let a=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new z,c=new z,h=new z(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,_=new z,g=.5/a;for(let p=0,S=0;p<u.length;p+=3,S+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),d[S+0]=An(_,c,"z","y",r,n),d[S+1]=1-An(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[S+0]=1-An(_,c,"z","y",r,n),d[S+1]=1-An(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[S+0]=1-An(_,c,"x","z",r,t),d[S+1]=An(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[S+0]=1-An(_,c,"x","z",r,t),d[S+1]=1-An(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[S+0]=1-An(_,c,"x","y",r,t),d[S+1]=1-An(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[S+0]=An(_,c,"x","y",r,t),d[S+1]=1-An(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};function ud(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Re,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=hd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);let m=hd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function hd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ae(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){let _=h.getComponent(f,m);o.setComponent(f+u,m,_)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}var de={R:.42,H:1.55,STEP:.34,EDGE:.28,G:34,RUN:9.4,JUMP:12.2,ACC:70,AIR:22,DEC:95,AIR_DEC:9,ICE_ACC:11,ICE_DEC:5.5,TERM:-50,SNAP:.5},kn=(s,t,e)=>s<t?t:s>e?e:s,fd=new vn,dd=new yn,pd=new xe,md=new z,gd=new z,Ni=new Dt,is=class{constructor(){this.list=[]}add(t,e,n,i,r,a=0,o=0,l=0,c=1,h=1,u=1){fd.set(a,o,l),dd.setFromEuler(fd),md.set(e,n,i),gd.set(c,h,u),pd.compose(md,dd,gd);let f=t.index?t.toNonIndexed():t.clone();f.attributes.uv&&f.deleteAttribute("uv"),f.applyMatrix4(pd);let d=f.attributes.position.count,m=new Float32Array(d*3);Ni.set(r);for(let _=0;_<d;_++)m[_*3]=Ni.r,m[_*3+1]=Ni.g,m[_*3+2]=Ni.b;f.setAttribute("color",new Ae(m,3)),this.list.push(f)}addGeo(t){t.index&&(t=t.toNonIndexed()),t.attributes.uv&&t.deleteAttribute("uv"),this.list.push(t)}build(t){if(!this.list.length)return null;let e=ud(this.list,!1);return this.list.length=0,new it(e,t)}};var Ol=class{constructor(t,e=!1){this.theme=t,this.headless=e,this.group=new ne,this.solids=[],this.ramps=[],this.discs=[],this.hazards=[],this.updaters=[],this.checkpoints=[],this.zones=[],this.pools=[],this.main=new is,this.glow=new is,this.waterY=-5,this.killY=-9,this.geoCache=new Map,this.matCache=new Map,this.colorIdx=0,this.arrowTexture=null,this.time=0,this.hitOut={nx:0,nz:1,pow:10},this.onEvent=null}rbox(t,e,n,i){let r=Math.max(.02,Math.min(i,t/2-.01,e/2-.01,n/2-.01)),a=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,o=this.geoCache.get(a);return o||(o=Math.min(t,e,n)<.35?new De(t,e,n):new rr(t,e,n,2,r),this.geoCache.set(a,o)),o}mat(t,e={}){var r,a,o,l;let n=t+JSON.stringify(e),i=this.matCache.get(n);return i||(i=new he({color:t,roughness:(r=e.rough)!=null?r:.38,metalness:(a=e.metal)!=null?a:.02,emissive:(o=e.emissive)!=null?o:0,emissiveIntensity:(l=e.ei)!=null?l:1}),this.matCache.set(n,i)),i}pick(){let t=this.theme.plat;return t[this.colorIdx++%t.length]}addSolid(t,e,n,i,r,a,o={}){let l={x0:t,y0:e,z0:n,x1:i,y1:r,z1:a,active:!0,ice:!!o.ice,conv:o.conv||null,bounce:o.bounce||0,boost:o.boost||0,dx:0,dy:0,dz:0,moving:!1,name:o.name||""};return this.solids.push(l),l}add(t,e=!0,n=!0){return t.castShadow=e,t.receiveShadow=n,this.group.add(t),t}emit(t,e){this.onEvent&&this.onEvent(t,e)}platform(t,e,n,i,r,a={}){var h,u,f;let o=(h=a.h)!=null?h:1.6,l=(u=a.color)!=null?u:this.pick(),c=this.addSolid(t-i/2,e-o,n-r/2,t+i/2,e,n+r/2,a);if(!this.headless){if(this.main.add(this.rbox(i,o,r,.3),t,e-o/2,n,l),a.pad!==!1&&i>2.4&&r>2.4){let d=(f=a.padColor)!=null?f:a.ice?this.theme.icePad:this.theme.pad;this.main.add(this.rbox(i-1.1,.12,r-1.1,.05),t,e+0,n,d)}if(this.theme.edgeGlow){let d=this.theme.edgeGlow;this.glow.add(this.rbox(i+.04,.12,.12,.03),t,e-.08,n+r/2,d),this.glow.add(this.rbox(i+.04,.12,.12,.03),t,e-.08,n-r/2,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t+i/2,e-.08,n,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t-i/2,e-.08,n,d)}}return c}disc(t,e,n,i,r={}){var u,f,d,m,_,g,p,S,T;let a=(u=r.omega)!=null?u:0,o=(f=r.h)!=null?f:1.4,l={cx:t,cz:n,top:e,r:i,th:o,omega:a,phase:(d=r.phase)!=null?d:0,bounce:r.bounce||0,push:r.push||null,ice:!!r.ice,theta:(m=r.phase)!=null?m:0,dTheta:0,kind:"disc",squash:0,first:!0};if(this.discs.push(l),this.headless)return l;if(r.bounce){let x=new ne;x.position.set(t,e,n);let b=new it(new Yt(i*.55,i*.7,1.4,20),this.mat((_=r.stem)!=null?_:"#fff3d6"));b.position.y=-.7;let E=new it(new be(i,28,14,0,Math.PI*2,0,Math.PI/2),this.mat((g=r.color)!=null?g:"#ff3b6b",{rough:.25}));E.scale.y=.45,E.position.y=-.05,x.add(b,E);for(let N=0;N<6;N++){let y=new it(new be(.26,10,8),this.mat("#ffffff")),A=N/6*Math.PI*2;y.position.set(Math.cos(A)*i*.62,.34*(1-.3),Math.sin(A)*i*.62),y.scale.y=.4,x.add(y)}return this.add(x),l.mesh=x,this.updaters.push((N,y)=>{l.squash=Math.max(0,l.squash-y*4);let A=1-Math.sin(l.squash*Math.PI)*.35*l.squash;x.scale.set(1+(1-A)*.5,A,1+(1-A)*.5)}),l}let c=(p=r.color)!=null?p:this.pick(),h=new Yt(i,i,o,40);if(a===0)this.main.add(h,t,e-o/2,n,c),this.main.add(new Yt(i-.5,i-.5,.12,40),t,e,n,(S=r.padColor)!=null?S:this.theme.pad),this.theme.edgeGlow&&this.glow.add(new Me(i,.07,6,48),t,e-.1,n,this.theme.edgeGlow,Math.PI/2);else{let x=new ne;x.position.set(t,e,n);let b=new it(h,this.mat(c));b.position.y=-o/2;let E=new it(new Yt(i-.5,i-.5,.12,40),this.mat((T=r.padColor)!=null?T:this.theme.pad));x.add(b,E);for(let N=0;N<4;N++){let y=new it(this.rbox(i*1.6,.14,.6,.05),this.mat(this.theme.hazard2));y.position.y=.06,y.rotation.y=N*Math.PI/4,x.add(y)}if(this.theme.edgeGlow){let N=new it(new Me(i,.08,6,48),new Ce({color:this.theme.edgeGlow,toneMapped:!1}));N.rotation.x=Math.PI/2,N.position.y=-.1,x.add(N)}this.add(x),l.mesh=x,this.updaters.push(N=>{x.rotation.y=l.theta})}return l}ramp(t,e,n,i,r,a,o={}){var B,k;let l={x0:t-a/2,x1:t+a/2,zN:e,zF:i,yN:n,yF:r,conv:o.conv||null,ice:!!o.ice,kind:"ramp"};if(this.ramps.push(l),this.headless)return l;let c=Math.min(n,r)-1.6,h=(B=o.color)!=null?B:this.pick(),u=(H,q,X)=>[H,q,X],f=u(l.x0,n,e),d=u(l.x1,n,e),m=u(l.x1,r,i),_=u(l.x0,r,i),g=u(l.x0,c,e),p=u(l.x1,c,e),S=u(l.x1,c,i),T=u(l.x0,c,i),x=[],b=(H,q,X,lt)=>{x.push(...H,...q,...X,...H,...X,...lt)};b(f,_,m,d),b(f,d,p,g),b(m,_,T,S),b(_,f,g,T),b(d,m,S,p);let E=new Re;E.setAttribute("position",new fe(x,3)),E.computeVertexNormals();let N=x.length/3,y=new Float32Array(N*3);Ni.set(h);for(let H=0;H<N;H++)y[H*3]=Ni.r,y[H*3+1]=Ni.g,y[H*3+2]=Ni.b;E.setAttribute("color",new Ae(y,3)),this.main.addGeo(E);let A=e-i,D=r-n,O=Math.hypot(A,D),M=Math.atan2(D,A),P=(e+i)/2,C=(n+r)/2,R=-Math.sin(M),U=Math.cos(M);return this.main.add(this.rbox(a-1.6,.1,O-.6,.04),t,C+U*.02,P+R*.02*0,(k=o.padColor)!=null?k:o.ice?this.theme.icePad:this.theme.pad,M,0,0),l}mover(t,e,n,i,r,a,o={}){var _,g,p;let l=(_=o.h)!=null?_:1.5,c=this.addSolid(t-i/2,e-l,n-r/2,t+i/2,e,n+r/2,o);c.moving=!0,c.first=!0;let h=null;if(!this.headless){if(h=new it(this.rbox(i,l,r,.28),this.mat((g=o.color)!=null?g:this.pick(),{rough:.3})),o.pad!==!1){let S=new it(this.rbox(i-1,.12,r-1,.05),this.mat((p=o.padColor)!=null?p:this.theme.pad));S.position.y=l/2,h.add(S)}if(o.stripes){let S=new it(this.rbox(i+.02,.4,r+.02,.05),this.mat(this.theme.hazard));S.position.y=0,h.add(S)}this.add(h)}let u=0,f=0,d=0,m=S=>{let[T,x,b]=a(S);c.x0=t-i/2+T,c.x1=t+i/2+T,c.y0=e-l+x,c.y1=e+x,c.z0=n-r/2+b,c.z1=n+r/2+b,c.first&&(u=T,f=x,d=b,c.first=!1),c.dx=T-u,c.dy=x-f,c.dz=b-d,u=T,f=x,d=b,h&&h.position.set(t+T,e-l/2+x,n+b)};return m(0),this.updaters.push(S=>m(S)),c}tile(t,e,n,i,r,a={}){var _,g,p,S,T,x;let o=(_=a.period)!=null?_:4.8,l=(g=a.solidT)!=null?g:2.4,c=(p=a.warn)!=null?p:.8,h=(S=a.off)!=null?S:0,u=this.addSolid(t-i/2,e-1,n-r/2,t+i/2,e,n+r/2,a),f=null,d=null;this.headless||(d=new he({color:(T=a.color)!=null?T:this.pick(),roughness:.3,emissive:0}),f=new it(this.rbox(i,1,r,.22),d),f.position.set(t,e-.5,n),this.add(f));let m=new Dt((x=a.color)!=null?x:"#ffffff");return this.updaters.push(b=>{let E=((b+h)%o+o)%o;E<l?(u.active=!0,f&&(f.visible=!0,f.position.x=t,d.emissive.setRGB(0,0,0))):E<l+c?(u.active=!0,f&&(f.visible=!0,f.position.x=t+Math.sin(b*70)*.07,d.emissive.setRGB(.55,.05,.02))):(u.active=!1,f&&(f.visible=!1))}),u}conveyor(t,e,n,i,r,a,o={}){let l=this.addSolid(t-i/2,e-1.4,n-r/2,t+i/2,e,n+r/2,{...o,conv:[0,a]});if(this.headless)return l;this.main.add(this.rbox(i,1.4,r,.25),t,e-.7,n,this.theme.convBase);let c=new We(i-1.2,r-.6),h=this.arrowTexture?this.arrowTexture.clone():null;h&&(h.needsUpdate=!0,h.wrapS=h.wrapT=Is,h.repeat.set(Math.max(1,Math.round((i-1.2)/2.4)),Math.max(1,Math.round((r-.6)/2.4))));let u=new it(c,new he({color:this.theme.belt,map:h,roughness:.6}));u.rotation.x=-Math.PI/2,a>0&&(u.rotation.z=Math.PI),u.position.set(t,e+.03,n),this.add(u,!1,!0);let f=Math.abs(a);return this.updaters.push((d,m)=>{h&&(h.offset.y-=f*m/2.4/(r-.6)*h.repeat.y)}),l}bar(t,e,n,i,r={}){var S,T,x,b,E,N,y;let a=(S=r.w)!=null?S:1.2,o=(T=r.h)!=null?T:1.2,l=(x=r.omega)!=null?x:1.4,c=(b=r.phase)!=null?b:0,h=(E=r.arms)!=null?E:1,u={type:"bar",test:(A,D,O)=>{if(A.y>e+o||A.y+de.H<e)return!1;let M=A.x-t,P=A.z-n;if(M*M+P*P>(i/2+1.2)*(i/2+1.2))return!1;let C=c+l*D;for(let R=0;R<h;R++){let U=C+R*Math.PI/h,B=Math.cos(U),k=Math.sin(U),H=M*B-P*k,q=M*k+P*B,X=kn(H,-i/2,i/2),lt=kn(q,-a/2,a/2),at=H-X,It=q-lt;if(at*at+It*It<de.R*de.R){let $t=Math.hypot(M,P)||.001,ee=l*P,j=-l*M,et=Math.hypot(ee,j)||1;ee/=et,j/=et;let dt=ee+M/$t*.45,Gt=j+P/$t*.45,wt=Math.hypot(dt,Gt)||1;return O.nx=dt/wt,O.nz=Gt/wt,O.pow=kn(6+Math.abs(l)*$t*1.15,9,21),!0}}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new ne;f.position.set(t,e+o/2,n);let d=Math.max(3,Math.round(i/2.4)),m=i/d,_=this.mat((N=r.color1)!=null?N:this.theme.hazard,{rough:.3}),g=this.mat((y=r.color2)!=null?y:this.theme.hazard2,{rough:.3});for(let A=0;A<h;A++){let D=new ne;D.rotation.y=A*Math.PI/h;for(let O=0;O<d;O++){let M=new it(this.rbox(m*.995,o,a,.25),O%2?_:g);M.position.x=-i/2+m*(O+.5),M.castShadow=!0,D.add(M)}f.add(D)}let p=new it(new Yt(a*.85,a,o+.7,16),this.mat(this.theme.hub));return p.castShadow=!0,f.add(p),this.add(f),this.updaters.push(A=>{f.rotation.y=c+l*A}),u}hammer(t,e,n,i,r={}){var p,S,T,x,b,E,N,y,A;let a=(p=r.amp)!=null?p:1.1,o=(S=r.omega)!=null?S:1.6,l=(T=r.phase)!=null?T:0,c=(x=r.r)!=null?x:1.3,h=(b=r.span)!=null?b:9,u={type:"hammer",test:(D,O,M)=>{let P=a*Math.sin(o*O+l),C=t+i*Math.sin(P),R=e-i*Math.cos(P),U=a*o*Math.cos(o*O+l),B=i*Math.cos(P)*U,k=kn(R,D.y+.15,D.y+de.H-.1),H=C-D.x,q=R-k,X=n-D.z,lt=de.R+c;if(H*H+q*q+X*X<lt*lt){let at=-H,It=-X;at=(Math.sign(B)||Math.sign(at)||1)*1,It=It*.5;let ee=Math.hypot(at,It);return M.nx=at/ee,M.nz=It/ee,M.pow=kn(Math.abs(B)*1.05+6,10,23),!0}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new ne;f.position.set(t,e,n);let d=new it(new Yt(.17,.17,i,10),this.mat(this.theme.hub));d.position.y=-i/2;let m=new it(new be(c,28,18),this.mat(this.theme.hazard,{rough:.25}));m.position.y=-i;let _=new it(new Me(c*.98,.12,8,28),this.mat(this.theme.hazard2));_.position.y=-i,_.rotation.x=Math.PI/2;let g=_.clone();if(g.rotation.set(0,Math.PI/2,0),f.add(d,m,_,g),f.traverse(D=>{D.isMesh&&(D.castShadow=!0)}),this.add(f),this.updaters.push(D=>{f.rotation.z=a*Math.sin(o*D+l)}),!this.headless){let D=this.theme.hub;this.main.add(this.rbox(.9,e-((E=r.baseY)!=null?E:e-i-1.5)+1.2,.9,.2),t-h,(e+((N=r.baseY)!=null?N:e-i-1.5))/2-0,n,D),this.main.add(this.rbox(.9,e-((y=r.baseY)!=null?y:e-i-1.5)+1.2,.9,.2),t+h,(e+((A=r.baseY)!=null?A:e-i-1.5))/2-0,n,D),this.main.add(this.rbox(h*2+1,.8,.9,.2),t,e+.6,n,D)}return u}balls(t,e,n,i,r,a,o,l,c={}){let h=n-e,u=h/a,f=l.map(()=>({x:t,z:0,y:0,on:!1})),d=[],m=g=>new Dt(g%2?this.theme.hazard:this.theme.hazard2);this.headless||l.forEach((g,p)=>{let S=new be(r,32,20),T=S.attributes.position,x=T.count,b=new Float32Array(x*3);for(let N=0;N<x;N++){let y=Math.atan2(T.getZ(N),T.getX(N)),D=Math.floor((y+Math.PI)/(Math.PI*2)*8)%2?new Dt(this.theme.hazard):new Dt(this.theme.hazard2);b[N*3]=D.r,b[N*3+1]=D.g,b[N*3+2]=D.b}S.setAttribute("color",new Ae(b,3));let E=new it(S,new he({vertexColors:!0,roughness:.25}));E.visible=!1,this.add(E),d.push(E)});let _={type:"balls",test:(g,p,S)=>{for(let T=0;T<f.length;T++){let x=f[T];if(!x.on)continue;let b=kn(x.y,g.y+.15,g.y+de.H-.1),E=x.x-g.x,N=x.y-b,y=x.z-g.z,A=de.R+r;if(E*E+N*N+y*y<A*A){let D=(g.x-x.x)*.8,O=1,M=Math.hypot(D,O);return S.nx=D/M,S.nz=O/M,S.pow=kn(a*1.1+4,10,20),!0}}return!1}};return this.hazards.push(_),this.updaters.push(g=>{l.forEach((p,S)=>{let T=f[S],x=((g+p)%o+o)%o,b=x<u;T.on=b,b&&(T.z=e+x*a,T.y=i(T.z)+r,T.x=t);let E=d[S];E&&(E.visible=b,b&&(E.position.set(T.x,T.y,T.z),E.rotation.x=T.z/r))})}),_}seesaw(t,e,n,i,r,a,o,l=0){let c={x0:t-i/2,x1:t+i/2,zN:n+r/2,zF:n-r/2,yN:e,yF:e,conv:null,ice:!1,kind:"ramp",seesaw:!0};this.ramps.push(c);let h=m=>{let _=a*Math.sin(2*Math.PI*m/o+l);return c.yN=e+_,c.yF=e-_,_};if(h(0),this.headless)return this.updaters.push(m=>h(m)),c;this.main.add(new Yt(.5,1.1,2.4,8),t,e-1.4,n,this.theme.hub),this.main.add(this.rbox(i*.9,.7,1.4,.2),t,e-2.5,n,this.theme.hazard2);let u=new ne;u.position.set(t,e-.25,n);let f=new it(this.rbox(i,.5,r,.2),this.mat(this.pick(),{rough:.35})),d=new it(this.rbox(i-1.2,.1,r-1.2,.04),this.mat(this.theme.pad));d.position.y=.27,u.add(f,d);for(let m of[-1,1]){let _=new it(this.rbox(i,.62,1.2,.2),this.mat(this.theme.hazard,{rough:.3}));_.position.set(0,.03,m*(r/2-.6)),u.add(_)}for(let m of[-1,1]){let _=new it(new Yt(.1,.1,1.1,8),this.mat(this.theme.hub));_.position.set(m*(i/2-.5),.9,0),u.add(_)}return this.add(u),this.updaters.push(m=>{let _=h(m);u.rotation.x=-Math.atan2(_,r/2)}),c}bungee(t,e,n,i,r,a){let o=this.disc(t,n,e,i,{bounce:r,color:this.theme.hazard});if(this.headless)return o;let l=a,c=14;for(let h=0;h<c;h++){let u=h/c*Math.PI*2,f=t+Math.cos(u)*(i*.92),d=e+Math.sin(u)*(i*.92);this.main.add(new Yt(.07,.07,l-n,5),f,(l+n)/2,d,h%2?"#ffffff":this.theme.hazard)}this.main.add(new Me(i*.92,.35,8,36),t,l,e,this.theme.accent,Math.PI/2),this.main.add(new Me(i*.92,.2,8,36),t,n+.15,e,"#ffffff",Math.PI/2);for(let h=0;h<3;h++){let u=Math.PI/2+h*Math.PI*2/3+.5,f=t+Math.cos(u)*(i+1.4),d=e+Math.sin(u)*(i+1.4);this.main.add(new Yt(.45,.6,l+12,8),f,(l-12)/2,d,h%2?"#ffd23f":"#ffffff")}return this.glow.add(new be(.9,12,8),t,l+1.6,e,"#ffffff"),o}tube(t,e,n){if(this.headless)return;let i=new z(0,1,0),r=new z,a=new z,o=new z,l=new yn,c=new vn;for(let h=0;h<t.length-1;h++){r.set(...t[h]),a.set(...t[h+1]),o.subVectors(a,r);let u=o.length();o.normalize(),l.setFromUnitVectors(i,o),c.setFromQuaternion(l),this.main.add(new Yt(e,e,u*1.02,6),(r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,n,c.x,c.y,c.z)}}airpad(t,e,n,i,r,a={}){var f,d;let o={x:t,z:e,r:n,y0:i,y1:i+r,lift:(f=a.lift)!=null?f:90,vmax:(d=a.vmax)!=null?d:9};if(this.zones.push(o),this.headless)return o;this.main.add(new Yt(n*.95,n,.5,28),t,i+.25,e,this.theme.hub),this.glow.add(new Me(n*.8,.14,8,36),t,i+.55,e,"#9cf0ff",Math.PI/2);let l=new Ce({color:"#8fe9ff",transparent:!0,opacity:.16,depthWrite:!1,side:en,toneMapped:!1}),c=new it(new Yt(n*.92,n*.92,r,24,1,!0),l);c.position.set(t,i+r/2,e),c.renderOrder=3,this.group.add(c);let h=new Ce({color:"#e6fbff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),u=[];for(let m=0;m<5;m++){let _=new it(new Me(n*.85,.08,6,28),h);_.rotation.x=Math.PI/2,_.renderOrder=3,this.group.add(_),u.push(_)}return this.updaters.push(m=>{u.forEach((_,g)=>{let p=(m*.5+g/5)%1;_.position.set(t,i+.6+p*(r-.8),e),_.scale.setScalar(1-p*.25)})}),o}punch(t,e,n,i,r,a,o={}){var T,x;let l=(T=o.period)!=null?T:3.2,c=(x=o.off)!=null?x:0,h=1,u=Math.hypot(i,r)||1;i/=u,r/=u;let f=b=>{let E=((b+c)%l+l)%l/l,N=(y,A,D)=>{let O=Math.max(0,Math.min(1,(D-y)/(A-y)));return O*O*(3-2*O)};return a*(N(.5,.58,E)-N(.78,.95,E))},d={type:"punch",test:(b,E,N)=>{var U;let y=f(E);if(y<.4)return!1;let A=t+i*(y+.5),D=n+r*(y+.5),O=kn(e,b.y+.15,b.y+de.H-.1),M=A-b.x,P=e-O,C=D-b.z,R=de.R+h;return M*M+P*P+C*C<R*R?(N.nx=i,N.nz=r,N.pow=(U=o.pow)!=null?U:15,!0):!1}};if(this.hazards.push(d),this.headless)return d;let m=new ne;m.position.set(t,e,n),m.rotation.y=Math.atan2(i,r);let _=new it(new Yt(.22,.22,1,8),this.mat(this.theme.hub));_.rotation.x=Math.PI/2;let g=new it(new be(h,20,14),this.mat(this.theme.hazard,{rough:.3})),p=new it(new Yt(.62,.62,.5,14),this.mat("#ffffff"));p.rotation.x=Math.PI/2,p.position.z=-.95;let S=new it(new be(.42,12,10),this.mat(this.theme.hazard,{rough:.3}));return S.position.set(.7,.45,-.35),g.add(p,S),p.position.z=-.95,g.scale.set(1,1,1.1),m.add(_,g),m.traverse(b=>{b.isMesh&&(b.castShadow=!0)}),this.add(m,!1,!1),this.main.add(this.rbox(2.2,2.6,1.2,.3),t-i*.3,e,n-r*.3,this.theme.hub,0,Math.atan2(i,r),0),this.updaters.push(b=>{let E=f(b);_.scale.y=Math.max(.01,E+.2),_.position.z=(E+.2)/2,g.position.z=E+.5}),d}ferris(t,e,n,i,r,a){let o=u=>u*Math.PI*2/r;for(let u=0;u<r;u++)this.mover(t,e-i,n,5,5,f=>{let d=a*f+o(u);return[0,i*(1-Math.cos(d)),i*Math.sin(d)]},{h:.7,color:this.theme.plat[u%this.theme.plat.length],pad:!0});if(this.headless)return;let l=new ne;l.position.set(t,e,n);let c=this.mat("#ffffff",{rough:.35});for(let u of[-1,1]){let f=new it(new Me(i,.28,8,56),c);f.rotation.y=Math.PI/2,f.position.x=u*3.2,l.add(f)}for(let u=0;u<4;u++)for(let f of[-1,1]){let d=new it(new Yt(.12,.12,i*2,6),this.mat(this.theme.hazard));d.rotation.x=u*Math.PI/4,d.position.x=f*3.2,l.add(d)}let h=new it(new Yt(.9,.9,7.4,14),this.mat(this.theme.hub));h.rotation.z=Math.PI/2,l.add(h),this.add(l,!0,!1);for(let u of[-1,1])for(let f of[-1,1])this.main.add(this.rbox(.7,e+1,.7,.2),t+u*4.4,(e-1)/2,n+f*i*.55,this.theme.hub,0,0,0,1,1,1);this.updaters.push(u=>{l.rotation.x=-(a*u)})}pirate(t,e,n,i,r,a=.1){let o=a+n;if(this.mover(t,a,e,10,5,c=>{let h=i*Math.sin(2*Math.PI*c/r);return[0,n*(1-Math.cos(h)),n*Math.sin(h)]},{h:.9,color:this.theme.hazard,stripes:!0,pad:!0}),this.headless)return;for(let c of[-1,1])this.main.add(this.rbox(.8,o+2,.8,.2),t+c*6.2,(o+2)/2-.5,e+2.2,this.theme.hub,0,0,.12*c),this.main.add(this.rbox(.8,o+2,.8,.2),t+c*6.2,(o+2)/2-.5,e-2.2,this.theme.hub,0,0,.12*c);this.main.add(this.rbox(14.5,.9,.9,.2),t,o+.4,e,this.theme.accent);let l=new ne;l.position.set(t,o,e);for(let c of[-1,1]){let h=new it(new Yt(.16,.16,n,8),this.mat("#ffffff"));h.position.set(c*4.2,-n/2,0),l.add(h)}this.add(l,!0,!1),this.updaters.push(c=>{l.rotation.x=-i*Math.sin(2*Math.PI*c/r)})}dropTower(t,e,n,i=13){let r=a=>{let o=(a%i+i)%i;if(o<1)return 0;if(o<5.5){let l=(o-1)/4.5;return n*(l*l*(3-2*l))}if(o<8.5)return n;if(o<9.4){let l=(o-8.5)/.9;return n*(1-l*l)}return 0};if(this.mover(t,.1,e,6,6,a=>[0,r(a),0],{h:.9,color:this.theme.accent,stripes:!0,pad:!0}),!this.headless){for(let a of[-1,1])for(let o of[-1,1])this.main.add(this.rbox(.7,n+5,.7,.2),t+a*3.6,(n+5)/2-.5,e+o*3.6,"#ffffff");this.main.add(this.rbox(8.2,.8,8.2,.2),t,n+4.6,e,this.theme.hazard),this.glow.add(new be(.7,10,8),t,n+5.6,e,"#ffffff")}}orbit(t,e,n,i,r,a){for(let o=0;o<r;o++){let l=o*Math.PI*2/r;this.mover(t+n,i,e,4.4,4.4,c=>{let h=a*c+l;return[n*Math.cos(h)-n,.7*Math.sin(c*1.3+l),n*Math.sin(h)]},{h:.8,color:this.theme.plat[o%this.theme.plat.length],pad:!0})}this.headless||(this.main.add(new Yt(.7,.9,i+5,10),t,(i+5)/2-.4,e,this.theme.hub),this.main.add(new tn(2.4,2.2,14),t,i+6,e,this.theme.hazard),this.glow.add(new Me(n,.12,6,48),t,i-.5,e,"#ffffff",Math.PI/2))}cannon(t,e,n,i){if(this.disc(t,0,e,2.4,{bounce:n,push:i,color:this.theme.hazard}),this.headless)return;let r=i[1]<0?-1:1;this.main.add(new Yt(1,1.35,5.5,14),t,2.4,e-r*2.8,this.theme.hub,r*.93,0,0),this.main.add(new Me(1.1,.2,8,18),t,4.4,e-r*.5,this.theme.accent,Math.PI/2-r*.64,0,0)}checkpoint(t,e,n,i=14){let r={x:t,y:e,z:n,w:i,spawn:[t,e,n+1]};return this.checkpoints.push(r),this.headless||this.arch(t,e,n,i,this.theme.accent,!0),r}arch(t,e,n,i,r,a=!1){let o=a?5.2:8.5;this.main.add(this.rbox(.9,o,.9,.25),t-i/2,e+o/2,n,r),this.main.add(this.rbox(.9,o,.9,.25),t+i/2,e+o/2,n,r),this.main.add(this.rbox(i+.9,a?.9:1.6,a?.9:1.4,.25),t,e+o,n,r),this.glow.add(new be(.42,12,8),t-i/2,e+o+.8,n,"#ffffff"),this.glow.add(new be(.42,12,8),t+i/2,e+o+.8,n,"#ffffff")}update(t,e){this.time=t;for(let n of this.updaters)n(t,e);for(let n of this.discs)if(n.omega){let i=n.phase+n.omega*t;n.dTheta=n.first?0:i-n.theta,n.theta=i,n.first=!1}}carry(t){let e=t.ground;if(e){if(e.moving)t.x+=e.dx,t.y+=e.dy,t.z+=e.dz;else if(e.kind==="disc"&&e.omega){let n=t.x-e.cx,i=t.z-e.cz,r=e.dTheta,a=Math.cos(r),o=Math.sin(r);t.x=e.cx+n*a+i*o,t.z=e.cz-n*o+i*a,t.yawOff=(t.yawOff||0)+r}}}checkHazards(t,e){for(let n of this.hazards)if(n.test(t,e,this.hitOut))return this.hitOut;return null}finalize(){if(this.headless)return;let t=this.main.build(new he({vertexColors:!0,roughness:.4,metalness:.02}));t&&(t.castShadow=!0,t.receiveShadow=!0,this.group.add(t));let e=this.glow.build(new Ce({vertexColors:!0,toneMapped:!1}));e&&this.group.add(e)}resolveHorizontal(t){let e=de.R,n=de.H;for(let i of this.solids){if(!i.active||i.y1<=t.y+de.STEP||i.y0>=t.y+n||t.x<i.x0-e||t.x>i.x1+e||t.z<i.z0-e||t.z>i.z1+e)continue;let r=kn(t.x,i.x0,i.x1),a=kn(t.z,i.z0,i.z1),o=t.x-r,l=t.z-a,c=o*o+l*l;if(c>=e*e)continue;let h,u;if(c>1e-9){let d=Math.sqrt(c),m=e-d;h=o/d,u=l/d,t.x+=h*m,t.z+=u*m}else{let d=t.x-i.x0,m=i.x1-t.x,_=t.z-i.z0,g=i.z1-t.z,p=Math.min(d,m,_,g);p===d?(t.x=i.x0-e,h=-1,u=0):p===m?(t.x=i.x1+e,h=1,u=0):p===_?(t.z=i.z0-e,h=0,u=-1):(t.z=i.z1+e,h=0,u=1)}let f=t.vx*h+t.vz*u;if(f<0&&(t.vx-=f*h,t.vz-=f*u),i.moving){let d=i.dx*h+i.dz*u;d>0&&(t.vx+=h*Math.min(d/.016,8)*.3,t.vz+=u*Math.min(d/.016,8)*.3)}}for(let i of this.discs){if(t.y+n<=i.top-i.th||t.y>=i.top-de.STEP)continue;let r=t.x-i.cx,a=t.z-i.cz,o=Math.hypot(r,a),l=i.r+e;if(o<l&&o>1e-6){let c=r/o,h=a/o;t.x=i.cx+c*l,t.z=i.cz+h*l;let u=t.vx*c+t.vz*h;u<0&&(t.vx-=u*c,t.vz-=u*h)}}}findGround(t,e,n){let i=de.EDGE,r=e+de.STEP,a=n&&t.noSnap<=0?de.SNAP:0,o=null,l=-1e9;for(let c of this.solids){if(!c.active)continue;let h=c.y1;h>r||h<=l||t.x<c.x0-i||t.x>c.x1+i||t.z<c.z0-i||t.z>c.z1+i||(t.y<=h+1e-4||t.y<=h+a)&&(o=c,l=h)}for(let c of this.ramps){if(t.x<c.x0-i||t.x>c.x1+i||t.z>c.zN+.3||t.z<c.zF-.3)continue;let h=kn((c.zN-t.z)/(c.zN-c.zF),0,1),u=c.yN+(c.yF-c.yN)*h;u>r||u<l||(t.y<=u+1e-4||t.y<=u+a)&&(o=c,l=u)}for(let c of this.discs){let h=c.top;if(h>r||h<l)continue;let u=t.x-c.cx,f=t.z-c.cz,d=c.r+i*.8;u*u+f*f>d*d||(t.y<=h+1e-4||t.y<=h+a)&&(o=c,l=h)}return o?{s:o,top:l}:null}hitCeiling(t,e){for(let n of this.solids)if(n.active&&!(e+de.H>n.y0+.02||t.y+de.H<=n.y0)&&!(t.x<n.x0||t.x>n.x1||t.z<n.z0||t.z>n.z1))return n;return null}};function yy(s,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d");if(s==="pk"){i.fillStyle="#01411c",i.fillRect(0,0,t,e),i.fillStyle="#ffffff",i.fillRect(0,0,t*.25,e);let a=t*.625,o=e*.5,l=e*.3;i.beginPath(),i.arc(a,o,l,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.beginPath(),i.arc(a+l*.28,o-l*.12,l*.82,0,Math.PI*2),i.fillStyle="#01411c",i.fill();let c=a+l*.52,h=o-l*.34,u=l*.34,f=u*.4;i.beginPath();for(let d=0;d<10;d++){let m=-Math.PI/2+d*Math.PI/5+.35,_=d%2?f:u;i.lineTo(c+Math.cos(m)*_,h+Math.sin(m)*_)}i.closePath(),i.fillStyle="#ffffff",i.fill()}else i.fillStyle="#000000",i.fillRect(0,0,t,e/3),i.fillStyle="#ffffff",i.fillRect(0,e/3,t,e/3),i.fillStyle="#007a3d",i.fillRect(0,e*2/3,t,e/3),i.beginPath(),i.moveTo(0,0),i.lineTo(t*.33,e/2),i.lineTo(0,e),i.closePath(),i.fillStyle="#ce1126",i.fill();let r=new fn(n);return r.colorSpace=Te,r.anisotropy=4,r}var xd={};function Dh(s){return xd[s]||(xd[s]=yy(s,768,512))}function xa(s,t,e){let n=new ne,i=new it(new We(t,e),new Ce({map:Dh(s),toneMapped:!1,side:en}));n.add(i);let r=new it(new De(t+1.2,e+1.2,.3),new he({color:"#f4f1e8",roughness:.5}));return r.position.z=-.2,n.add(r),n}var vy='"Noto Nastaliq Urdu","Jameel Noori Nastaleeq","Alvi Nastaleeq","Geeza Pro","Segoe UI","Tahoma","Arial",sans-serif',My='"Lilita One","Fredoka One","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function Sy(s,t,e={}){let i=Math.round(1024/t),r=document.createElement("canvas");r.width=1024,r.height=i;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,1024,i);o.addColorStop(0,(e.bg||["#1b1464","#3a2d9e"])[0]),o.addColorStop(1,(e.bg||["#1b1464","#3a2d9e"])[1]),a.fillStyle=o,a.fillRect(0,0,1024,i),a.lineWidth=i*.05,a.strokeStyle=e.border||"#ffd23f",a.strokeRect(i*.05,i*.05,1024-i*.1,i-i*.1);let l=e.urdu?vy:My,c=i*(e.urdu?.36:.5);a.textAlign="center",a.textBaseline="alphabetic",e.urdu&&(a.direction="rtl");let h=1024*(e.urdu?.62:.86),u=i*(e.urdu?.6:.62),f=c*.8,d=c*.2;for(let g=0;g<3;g++){a.font=`${c}px ${l}`;let p=a.measureText(s);f=p.actualBoundingBoxAscent>0?p.actualBoundingBoxAscent:c*.8,d=p.actualBoundingBoxDescent>0?p.actualBoundingBoxDescent:c*.2;let S=Math.min(1,h/Math.max(1,p.width),u/Math.max(1,f+d));if(S>=.99)break;c*=S}let m=i/2+(f-d)/2;a.lineJoin="round",a.lineWidth=c*.12,a.strokeStyle=e.stroke||"#000000",a.strokeText(s,1024/2,m),a.fillStyle=e.fg||"#ffd23f",a.fillText(s,1024/2,m);let _=new fn(r);return _.colorSpace=Te,_.anisotropy=4,_}function ar(s,t,e,n={}){let i=new ne;i.add(new it(new We(t,e),new Ce({map:Sy(s,t/e,n),toneMapped:!1,side:en})));let r=new it(new De(t+.8,e+.8,.3),new he({color:n.frame||"#f4f1e8",roughness:.5}));return r.position.z=-.2,i.add(r),i}var by={candy:{plat:["#ff7ab8","#ffb347","#5ad6c4","#a78bfa","#ffd84d"],pad:"#fff6fc",icePad:"#e8fbff",hazard:"#ff3b6b",hazard2:"#ffffff",hub:"#6b4de6",accent:"#ffdc3a",convBase:"#7a56e8",belt:"#ffe8f4"},canyon:{plat:["#e0793a","#f2b05e","#c4503d","#b8452f","#f5c77e"],pad:"#ffe6c2",icePad:"#fff",hazard:"#4b2a9e",hazard2:"#ffd23f",hub:"#4a2a1c",accent:"#ffd23f",convBase:"#5a2d1e",belt:"#ffb35e"},frost:{plat:["#d6efff","#9fd6ff","#bfe9ff","#8ec5f5","#f4fbff"],pad:"#ffffff",icePad:"#f4fcff",hazard:"#ff4d6d",hazard2:"#ffffff",hub:"#2f5d9e",accent:"#ff8a5b",convBase:"#3a6db0",belt:"#cfe9ff"},fair:{plat:["#ff5d73","#ffd23f","#3ec6e0","#8bd450","#ff9f43"],pad:"#fff7e0",icePad:"#fff",edgeGlow:null,hazard:"#ff2d55",hazard2:"#fff6d6",hub:"#5b2a86",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},fun:{plat:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff3d68",hazard2:"#fff7d6",hub:"#6a3fa0",accent:"#ffd23f",convBase:"#7a2d9e",belt:"#ffe9a8"},neon:{plat:["#2a1d6e","#3a1785","#1f2f7a","#4c1a7c","#2f2273"],pad:"#4a36b0",icePad:"#4a36b0",edgeGlow:"#22f2ff",hazard:"#ff2bd6",hazard2:"#22f2ff",hub:"#0e0a2e",accent:"#7cff3d",convBase:"#18104a",belt:"#3a2a9a"}},Ey=["candy","canyon","frost","neon","fair","fun"],wy=(s,t,e)=>{let n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)};function _d(s,t=!1,e=null){let n=Ey[s],i=by[n],r=new Ol(i,t);r.arrowTexture=e,r.key=n,r.waterY=s===5?-40:-5.5,r.killY=s===5?-60:-9.5;let a={z:0,y:0},o={key:n,spawn:{x:0,y:0,z:1.5},signs:[],pads:[]};function l(M,P,C={}){var q,X,lt;let R=a.z-((q=C.gap)!=null?q:0),U=R-P/2,B=a.y+((X=C.dy)!=null?X:0),k=(lt=C.x)!=null?lt:0,H=r.platform(k,B,U,M,P,C);return a.z=R-P,a.y=B,{s:H,x:k,cz:U,near:R,far:R-P,top:B,w:M,d:P}}function c(M,P=3.5){return r.checkpoint(M.x,M.top,M.near-P,Math.min(M.w,16))}let h=()=>{a.z=6,a.y=0;let M=l(18,22);return o.startArch=M.near-8,M};function u(M,P,C,R,U={}){let B;for(let k=0;k<M;k++)B=l(P,P,{gap:C,x:Math.sin(k*2.1+.6)*R,...U});return B}function f(M,P,C=12,R={}){let U=r.ramp(0,a.z,a.y,a.z-M,a.y+P,C,R);return a.z-=M,a.y+=P,U}function d(M,P,C,R,U,B){let k=M/(P+1);for(let H=0;H<P;H++){let q=a.z-k*(H+1),X=H*Math.PI;r.mover(0,a.y,q,C,R,lt=>[U*Math.sin(lt*2*Math.PI/B+X),0,0])}a.z-=M}function m(M,P,C,R,U,B){let k=M/(P+1);for(let H=0;H<P;H++){let q=a.z-k*(H+1),X=H*Math.PI*.9;r.mover(0,a.y,q,C,R,lt=>[0,U*(.5-.5*Math.cos(lt*2*Math.PI/B+X)),0],{stripes:!0})}a.z-=M}function _(M,P,C){for(let R=0;R<M;R++){let U=a.z-4.5-R*P;r.disc(R%2?2:-2,a.y,U,2.5,{bounce:C,color:R%2?i.hazard:i.accent})}a.z-=9+(M-1)*P}function g(M,P,C,R,U){for(let B=0;B<M;B++){let k=a.z-R-P;r.disc(0,a.y,k,P,{omega:C[B%C.length],phase:B*1.3}),U&&r.bar(0,a.y+.12,k,P*1.9,{omega:-U*(B%2?-1:1),h:1,w:1,phase:B}),a.z=k-P}}function p(M,P,C,R=0){let U=l(P,M*C+8,{gap:R});for(let B=0;B<M;B++){let k=U.near-7-B*C,H=3,q=P/H;for(let X=0;X<H;X++){let lt=B*1.7+X*2.1,at=3.4+X%2*.6;r.mover(U.x-P/2+q*(X+.5),U.top+3.4,k,q-.08,.9,It=>[0,2.9*wy(.35,.62,.5+.5*Math.sin(It*2*Math.PI/at+lt)),0],{h:3.4,stripes:!0,pad:!1,color:i.hazard2})}}return U}function S(M,P,C,R,U,B=0,k=1.5){let H=l(M,P,{gap:B});for(let q=0;q<C;q++)r.hammer(H.x,H.top+R+1.45,H.near-7-q*U,R,{amp:1.2,omega:k+.08*q,phase:q*1.9,span:M/2+.8,baseY:H.top,r:1.3});return H}function T(M,P,C,R=0){let U=l(M,P,{gap:R}),B=M/2;for(let k=0;k<C;k++){let H=U.near-7-k*((P-12)/Math.max(1,C-1)||8),q=5.5,X=B-q/2,lt=3.2+k%2*.5;r.mover(U.x-B+q/2,U.top+2.6,H,q,1.1,at=>[X*(.5-.5*Math.cos(at*2*Math.PI/lt+k))*2*(k%2,1),0,0],{h:2.6,stripes:!0,pad:!1,color:i.hazard2}),r.mover(U.x+B-q/2,U.top+2.6,H-3.2,q,1.1,at=>[-X*(.5-.5*Math.cos(at*2*Math.PI/(lt+.4)+k+1))*2,0,0],{h:2.6,stripes:!0,pad:!1,color:i.hazard2})}return U}function x(M,P,C,R=2.2,U=1.8){for(let B=0;B<M;B++){let k=a.z-R-C/2-B*(C+U);for(let H=0;H<P;H++){let q=(H-(P-1)/2)*(C+1.4);r.platform(q,a.y,k,C,C,{color:i.plat[(B+H)%i.plat.length]})}}a.z-=R+M*C+(M-1)*U}function b(M,P,C,R,U,B){let k=f(M,P,C),H=X=>k.yN+(k.yF-k.yN)*((k.zN-X)/(k.zN-k.zF));return[-C*.32,0,C*.32].forEach((X,lt)=>r.balls(X,k.zF,k.zN-2,H,B,R,U,[lt*U/3],{})),k}function E(M,P,C,R,U,B=1.4){let k=a.z-B,H=k-P/2,q=r.seesaw(0,a.y,H,M,P,C,R,U);return a.z=k-P,q}function N(M,P,C=0){a.z-=C,M.forEach((R,U)=>{let B=a.z-P/2-U*P;for(let k=0;k<R.length;k++)R[k]==="#"&&r.platform((k-(R.length-1)/2)*P,a.y,B,P,P,{color:i.plat[(U+k)%i.plat.length],pad:!0})}),a.z-=M.length*P}function y(M,P,C,R){r.bungee(0,a.z-P,a.y-C,5.5,R,a.y+15),a.z-=M}function A(M,P,C=0){let R=a.z-.9-3;[-4.7+C,4.7+C].forEach((B,k)=>{let H=k*Math.PI,q=at=>{let It=.5-.5*Math.cos(2*Math.PI*at/P+H);return[1.2*Math.sin(2*Math.PI*It),2.3*Math.sin(2*Math.PI*It),-M*It]};r.mover(B,a.y,R,6,6,at=>q(at),{h:1.3,stripes:!0,color:k?i.plat[2]:i.plat[0]});let X=[],lt=48;for(let at=0;at<=lt;at++){let It=at/lt,$t=[B+1.2*Math.sin(2*Math.PI*It),2.3*Math.sin(2*Math.PI*It),-M*It];X.push([$t[0],a.y-1.5+$t[1],R+$t[2]])}for(let at of[-2.2,2.2])r.tube(X.map(It=>[It[0]+at,It[1],It[2]]),.14,i.hazard);r.tube(X.map(at=>[at[0],at[1]-.3,at[2]]),.2,i.hub);for(let at=0;at<=lt;at+=4){let It=X[at];r.tube([[It[0],It[1]-.3,It[2]],[It[0],a.y-14,It[2]]],.22,i.hub)}}),a.z=R-M-3-.9}function D(){let M=l(22,34,{gap:0,color:i.plat[0]}),P=M.near-12;return r.arch(0,M.top,P,20,i.accent,!1),o.finishZ=P,o.finishY=M.top,o.finishPlat=M,M}if(s===0){h(),u(5,6,3,3.2);let M=l(16,10,{gap:3});c(M,3),M=l(18,34,{gap:2.5}),r.bar(M.x,M.top,M.near-10,18,{omega:1.3,h:1,w:1.1}),r.bar(M.x,M.top,M.near-24,18,{omega:-1.6,h:1,w:1.1,phase:1}),c(M,3.5),f(14,3,12),M=l(14,10),c(M,3),d(20,2,6.2,6.2,5,5.2),M=l(14,10),c(M,3),_(3,9,16.5),M=l(14,10),c(M,3),g(3,5,[.9,-1,1.1],2.6),M=l(16,10,{gap:2.6}),c(M,3),M=p(3,18,11,1),f(16,-3,12),D()}else if(s===1){h(),u(3,7,3,2.6);let M=l(18,10,{gap:3});c(M,3),M=S(18,36,3,8,11,2.5,1.5),M=l(14,8,{gap:3}),c(M,3),M=r.conveyor(0,a.y,a.z-15,14,30,5),r.bar(0,a.y,a.z-10,14,{omega:1.5,h:1}),r.bar(0,a.y,a.z-23,14,{omega:-1.8,h:1,phase:2}),a.z-=30,M=l(14,8),c(M,3),x(6,3,4.6),M=l(14,8,{gap:2.2}),c(M,3),b(40,5,14,11,6,1.5),M=l(22,28),r.bar(M.x,M.top,M.near-14,22,{omega:1.05,arms:2,h:1.1}),c(M,3),M=T(16,36,3,2.5),D()}else if(s===2){h();let M=l(10,40,{gap:2.5,ice:!0});r.bar(M.x,M.top,M.near-14,10,{omega:.9,h:.95,w:1}),r.bar(M.x,M.top,M.near-28,10,{omega:-1.1,h:.95,w:1,phase:1.5}),u(4,6.5,3.2,2.5,{ice:!0}),M=l(16,10,{gap:3.2,ice:!0}),c(M,3),g(3,6,[.8,-1,1.2],2.8,1.9),M=l(18,10,{gap:2.8}),c(M,3),b(36,6,14,12,5.4,1.4),M=l(16,10),c(M,3),m(18,2,6.2,6.2,3.2,4.4),M=l(14,10),c(M,3),r.disc(0,a.y,a.z-4,3,{bounce:22,color:i.hazard}),M=l(16,12,{gap:11,dy:4.5}),c(M,3),M=l(12,24,{ice:!0}),r.bar(M.x,M.top,M.near-12,12,{omega:1.4,h:1}),M=l(22,32,{ice:!0}),r.bar(M.x,M.top,M.near-16,22,{omega:-1.25,arms:2,h:1.1}),D()}else if(s===4){h();let M;for(let P=0;P<3;P++)E(9,12,1.4,3.4+P*.5,P*2.1),M=l(12,6,{gap:1.4});c(M,3),N(["#####","#.#.#","##.##",".#.#.",".##..","..#.#",".###.","#####"],3.2,1.2),r.checkpoint(0,a.y,a.z+1.6,14),f(30,8,12),M=l(12,12),c(M,3),y(20,9,9,32),M=l(16,14),c(M,3),f(30,-8,12),M=l(16,8),c(M,3),A(44,12),M=l(16,10),c(M,3),x(5,3,4.6,2.2,1.7),M=l(14,8,{gap:2.2}),c(M,3),g(3,6,[.9,-1.1,1],2.6,1.6),M=l(16,10,{gap:2.6}),c(M,3),M=l(22,30),r.bar(M.x,M.top,M.near-15,22,{omega:1.2,arms:2,h:1.1}),D()}else if(s===5){o.startArch=-2,a.z=-16,a.y=0,r.platform(0,0,-430/2,140,450,{h:2,color:"#92e66c",pad:!1});for(let I=4,mt=0;I>-446;I-=14,mt++)for(let Mt of[-1,1])r.platform(Mt*(140/2+1),22,I-7,2,14,{h:22,color:i.plat[(mt+(Mt>0?2:0))%i.plat.length],pad:!1});if(r.platform(0,22,11,144,2,{h:22,color:i.plat[1],pad:!1}),r.platform(0,22,-441,144,2,{h:22,color:i.plat[3],pad:!1}),r.headless||r.main.add(r.rbox(12,.03,232,.01),0,.02,-128,"#f8ebb8"),!r.headless){let mt="\u0639\u06A9\u0631\u0645\u06C1",Mt=(L,v,F,G=12)=>{L.position.set(v*69.7,G,F),L.rotation.y=v<0?Math.PI/2:-Math.PI/2,r.group.add(L)};Mt(xa("pk",30,20),-1,-50),Mt(xa("ps",30,20),1,-50),Mt(xa("ps",30,20),-1,-290),Mt(xa("pk",30,20),1,-290),Mt(ar("MADE BY HARIS",44,13,{bg:["#ff3d68","#ff9f1c"],fg:"#ffffff",stroke:"#6a1020",border:"#ffd23f"}),-1,-130),Mt(ar("MADE BY HARIS",44,13,{bg:["#4cc9f0","#3a2d9e"],fg:"#ffd23f",stroke:"#101040",border:"#ffffff"}),1,-170),Mt(ar(mt,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),-1,-210),Mt(ar(mt,30,15,{urdu:!0,bg:["#0b6b3a","#01411c"],fg:"#ffffff",stroke:"#00230f",border:"#ffd23f"}),1,-330)}let C=I=>r.platform(0,.04,I,8,14,{boost:1,color:"#ffd23f",pad:!1,h:.5});r.checkpoint(0,0,-70,16),C(-30),C(-52),[[-16,-26,3.2,20,0],[-22,-36,3.2,24,1],[-14,-46,3.4,28,2],[16,-28,3.2,22,3],[22,-38,3.4,26,4]].forEach(([I,mt,Mt,L,v])=>r.disc(I,0,mt,Mt,{bounce:L,color:i.plat[v]})),r.platform(31,9,-52,12,12,{color:i.plat[1]}),r.disc(20,0,-50,3.4,{bounce:29,color:i.hazard}),r.airpad(-26,-62,3.6,0,15),r.platform(-34,13,-62,8,8,{color:i.plat[2]}),r.orbit(-32,-18,6,1.6,3,.8),r.cannon(22,-14,16,[0,-17]),r.pirate(28,-70,16,.55,6.5),r.dropTower(-32,-82,14,13),r.checkpoint(0,0,-72,16),r.ramp(-14,-72,0,-98,10,8,{color:i.plat[3]}),r.platform(-28,10,-104,30,12,{color:i.plat[1]}),r.punch(-44,11.2,-104,1,0,8,{off:0}),r.punch(-12.2,11.2,-104,-1,0,8,{off:1.6}),[-38,-28,-18].forEach((I,mt)=>r.ramp(I,-110,10,-152,0,7,{conv:[0,-14],ice:!0,color:i.plat[mt*2%5],padColor:"#ffffff"})),r.platform(26,1.2,-90,14,14,{color:i.plat[4]}),r.punch(17.2,2.4,-90,1,0,7,{off:0}),r.punch(34.8,2.4,-90,-1,0,7,{off:1.6}),r.punch(26,2.4,-98.8,0,1,7,{off:.8}),r.punch(26,2.4,-81.2,0,-1,7,{off:2.4});for(let I=0;I<3;I++)r.seesaw(26,2,-112-I*16,9,12,1.4,3.4+I*.4,I*2.1);C(-118),r.checkpoint(0,0,-150,16),r.ramp(-30,-156,0,-182,8,10,{color:i.plat[2]}),r.platform(-30,8,-188,12,12,{color:i.plat[0]}),r.bungee(-30,-203,0,5.5,30,15),r.ferris(-30,11,-224,9,6,.4),r.ramp(26,-156,0,-164,3,14,{color:i.plat[3]}),a.z=-164,a.y=3,l(16,8,{x:26}),A(36,11,26),l(16,8,{x:26}),r.ramp(26,a.z,3,a.z-8,0,14,{color:i.plat[3]}),r.disc(0,.3,-180,8.5,{omega:.7,color:i.plat[0]}),r.headless||(r.main.add(new Yt(.5,.5,9,10),0,4.8,-180,"#ffffff"),r.main.add(new tn(10,3.2,20),0,10.4,-180,i.hazard)),[-160,-172,-184].forEach((I,mt)=>{r.disc(-14,.3,I,3.5,{omega:mt%2?1.5:-1.5,color:i.plat[(mt+1)%5]}),r.bar(-14,.4,I,6.4,{omega:mt%2?-1.1:1.1,h:.9,w:.9})}),r.checkpoint(0,0,-232,16),r.checkpoint(0,0,-244,16);let R=56,U=7,B={x:0,z:-300},k=29,H=1.35,q=72,X=-27,lt=-420,at=[1,-1],It=[],$t=[],ee=I=>{let mt=I/q*Math.PI*2;return[B.x+k*Math.cos(mt),B.z+k*H*Math.sin(mt)]};for(let I=0;I<q;I++){let[mt,Mt]=ee(I),[L,v]=ee(I+1);It.push({ax:mt,az:Mt,bx:L,bz:v,hw:U,g:"ring"})}for(let I of at)$t.push({x:R*I,z:X,r:13,g:"p0"+I},{x:R*I,z:lt,r:13,g:"p1"+I}),It.push({ax:R*I,az:X,bx:R*I,bz:lt,hw:U,g:"hwy"+I}),It.push({ax:R*I,az:-300,bx:B.x+k*I,bz:-300,hw:U,g:"con"+I});let j={segs:It,plazas:$t,boosts:[{x:R,z:-110,r:4},{x:R,z:-210,r:4},{x:R,z:-370,r:4},{x:-R,z:-110,r:4},{x:-R,z:-210,r:4},{x:-R,z:-370,r:4},{x:-k,z:-300,r:4},{x:0,z:B.z-k*H,r:4}]};if(o.track=j,o.cars=[[R-3.5,-33],[R+3.5,-33],[-R-3.5,-33],[-R+3.5,-33]].map(([I,mt],Mt)=>({id:Mt,x:I,z:mt,yaw:Math.PI})),!r.headless){let I=r.main,mt="#3b3f4d",Mt=(F,G,Y)=>{for(let tt of It){if(tt.g===Y)continue;let ut=tt.bx-tt.ax,J=tt.bz-tt.az,nt=ut*ut+J*J,yt=((F-tt.ax)*ut+(G-tt.az)*J)/nt;if(yt=Math.max(0,Math.min(1,yt)),Math.hypot(F-(tt.ax+ut*yt),G-(tt.az+J*yt))<tt.hw-.4)return!0}for(let tt of $t)if(tt.g!==Y&&Math.hypot(F-tt.x,G-tt.z)<tt.r-.4)return!0;return!1},L=[];It.forEach(F=>{let G=Math.hypot(F.bx-F.ax,F.bz-F.az),Y=Math.max(1,Math.ceil(G/12));for(let tt=0;tt<Y;tt++)L.push({ax:F.ax+(F.bx-F.ax)*tt/Y,az:F.az+(F.bz-F.az)*tt/Y,bx:F.ax+(F.bx-F.ax)*(tt+1)/Y,bz:F.az+(F.bz-F.az)*(tt+1)/Y,hw:F.hw,g:F.g})}),L.forEach((F,G)=>{let Y=F.bx-F.ax,tt=F.bz-F.az,ut=Math.hypot(Y,tt),J=(F.ax+F.bx)/2,nt=(F.az+F.bz)/2,yt=-Math.atan2(tt,Y),Ft=-tt/ut,St=Y/ut;I.add(r.rbox(ut+.7,.08,F.hw*2,.02),J,F.g.startsWith("hwy")?.053:F.g.startsWith("con")?.056:.05,nt,mt,0,yt,0);for(let vt of[-1,1]){let Bt=J+Ft*vt*(F.hw-.45),qt=nt+St*vt*(F.hw-.45);if(Mt(Bt,qt,F.g)||I.add(r.rbox(ut+.05,.09,.9,.02),Bt,.1,qt,(G+(vt>0?1:0))%2?"#ff3b3b":"#ffffff",0,yt,0),G%2===0){let Qt=J+Ft*vt*(F.hw+1.3),W=nt+St*vt*(F.hw+1.3);Mt(Qt,W,F.g)||(I.add(new Yt(.75,.75,.7,10),Qt,.35,W,"#23252e"),I.add(new Yt(.78,.78,.22,10),Qt,.85,W,G/2%2?"#ff3b3b":"#ffffff"))}}G%2===0&&!Mt(J,nt,F.g)&&I.add(r.rbox(Math.min(ut,5)*.55,.06,.3,.02),J,.1,nt,"#ffffff",0,yt,0)});for(let F of $t){I.add(new Yi(F.r,48),F.x,.054,F.z,mt,-Math.PI/2,0,0);for(let G=0;G<40;G++){let Y=G/40*Math.PI*2,tt=F.x+Math.cos(Y)*(F.r-.45),ut=F.z+Math.sin(Y)*(F.r-.45);Mt(tt,ut,F.g)||I.add(r.rbox(2,.09,.9,.02),tt,.1,ut,G%2?"#ff3b3b":"#ffffff",0,-Y+Math.PI/2,0)}for(let G=0;G<20;G++){let Y=G/20*Math.PI*2,tt=F.x+Math.cos(Y)*(F.r+1.3),ut=F.z+Math.sin(Y)*(F.r+1.3);Mt(tt,ut,F.g)||(I.add(new Yt(.75,.75,.7,10),tt,.35,ut,"#23252e"),I.add(new Yt(.78,.78,.22,10),tt,.85,ut,G%2?"#ff3b3b":"#ffffff"))}}for(let F of j.boosts){I.add(r.rbox(10,.07,8,.02),F.x,.12,F.z,"#ff9f1c");for(let G=0;G<3;G++)I.add(new tn(1.5,2,3),F.x,.16,F.z+2-G*2,"#fff3b0",-Math.PI/2*0,Math.PI,0)}for(let F=0;F<5;F++)I.add(r.rbox(26-F*2,1.1,2.4,.1),B.x,.55+F*1.1,B.z-2+F*-2.2,i.plat[F%5]);let v=["#0b6b3a","#2f7bff","#ffb21e","#a855f7"];o.cars.forEach((F,G)=>{I.add(r.rbox(7.5,.07,9.5,.03),F.x,.12,F.z,v[G]),I.add(r.rbox(6.9,.075,8.9,.03),F.x,.125,F.z,mt)});for(let F of at){let G=R*F;for(let[Y,tt]of[[G-10.5,-14],[G+10.5,-14],[G-10.5,-38],[G+10.5,-38]])I.add(r.rbox(.8,6,.8,.2),Y,3,tt,i.plat[1]);I.add(r.rbox(23,.7,27,.2),G,6.3,X,i.hazard),I.add(r.rbox(21,.4,25,.2),G,6.75,X,"#ffffff");for(let Y=0;Y<10;Y++)for(let tt=0;tt<2;tt++)I.add(r.rbox(1.4,.07,1.4,.01),G-6.3+Y*1.4,.13,-48-tt*1.4,(Y+tt)%2?"#111111":"#ffffff");for(let Y of[-1,1])I.add(r.rbox(.8,6.4,.8,.2),G+Y*8.2,3.2,-48,i.plat[1]);I.add(r.rbox(17.6,1,1.2,.2),G,6.4,-48,i.hazard)}}if(!r.headless){let I=(Mt,L,v,F,G,Y,tt,ut)=>{let J=ar(Mt,L,v,F);return J.position.set(G,Y,tt),J.rotation.y=ut,r.group.add(J),J},mt={bg:["#1f8de6","#14609f"],fg:"#ffffff",stroke:"#06223d",border:"#ffd23f"};for(let Mt of at){let L=R*Mt;I("CAR STATION",20,4.6,mt,L-11.8,8.8,X,-Math.PI/2),I("CAR STATION",20,4.6,mt,L+11.8,8.8,X,Math.PI/2);for(let[v,F]of[[16,-8],[34,-14]]){let G=new it(new Yt(.2,.2,4,8),new he({color:"#e8e8f0"}));G.position.set(v*Mt,2,F),r.group.add(G),I(Mt>0?"CAR STATION \u2192":"\u2190 CAR STATION",12,3.2,mt,v*Mt,4.6,F,0)}I("LONG ROAD \u2192 DRIVE THE WHOLE MAP",22,3.2,{bg:["#ff9f1c","#e0601a"],fg:"#ffffff",stroke:"#4a1c00",border:"#ffffff"},L,5.2,-60,0)}}let et=8,dt=7,Gt=1.2,wt=6,Wt=-356,me=20261017,rt=()=>(me=me*1664525+1013904223>>>0,me/4294967296),ct=Array.from({length:dt},()=>Array(dt+1).fill(!0)),ft=Array.from({length:dt+1},()=>Array(dt).fill(!0)),pt=Array.from({length:dt},()=>Array(dt).fill(!1)),_t=[[0,3]];for(pt[0][3]=!0;_t.length;){let[I,mt]=_t[_t.length-1],Mt=[];if(I+1<dt&&!pt[I+1][mt]&&Mt.push([I+1,mt]),I-1>=0&&!pt[I-1][mt]&&Mt.push([I-1,mt]),mt-1>=0&&!pt[I][mt-1]&&Mt.push([I,mt-1]),mt+1<dt&&!pt[I][mt+1]&&Mt.push([I,mt+1]),!Mt.length){_t.pop();continue}let[L,v]=Mt[Math.floor(rt()*Mt.length)];L===I+1?ft[I+1][mt]=!1:L===I-1?ft[I][mt]=!1:v===mt-1?ct[I][mt]=!1:ct[I][mt+1]=!1,pt[L][v]=!0,_t.push([L,v])}ft[0][3]=!1,ft[dt][3]=!1;let Xt=["#3fae4a","#58c25c","#2f9a44"];for(let I=0;I<dt;I++)for(let mt=0;mt<=dt;mt++)ct[I][mt]&&r.platform((mt-dt/2)*et,wt,Wt-(I+.5)*et,Gt,et+Gt,{h:wt,color:Xt[(I+mt)%3],pad:!1});for(let I=0;I<=dt;I++)for(let mt=0;mt<dt;mt++)ft[I][mt]&&r.platform((mt+.5-dt/2)*et,wt,Wt-I*et,et+Gt,Gt,{h:wt,color:Xt[(I+mt+1)%3],pad:!1});let zt=new Map,Zt=[[0,3]];for(zt.set("0,3",null);Zt.length;){let[I,mt]=Zt.shift(),Mt=[[I+1,mt,ft[I+1][mt]],[I-1,mt,I>0?ft[I][mt]:!0],[I,mt-1,ct[I][mt]],[I,mt+1,ct[I][mt+1]]];for(let[L,v,F]of Mt)!F&&L>=0&&L<dt&&v>=0&&v<dt&&!zt.has(L+","+v)&&(zt.set(L+","+v,[I,mt]),Zt.push([L,v]))}let jt=[];for(let I=[dt-1,3];I;I=zt.get(I[0]+","+I[1]))jt.unshift([(I[1]+.5-dt/2)*et,Wt-(I[0]+.5)*et]);o.mazePath=jt,r.checkpoint(0,0,Wt+2,16),a.z=Wt-dt*et,a.y=.15,D()}else{h();for(let P=0;P<4;P++)l(2.8,12,{gap:3.3,x:P%2?2.6:-2.6});let M=l(18,12,{gap:3.3});c(M,3),x(6,3,4.4,2.2,1.9),M=l(16,10,{gap:2.2}),c(M,3),g(3,6.5,[1,-1.2,1.4],2.8,1.7),M=l(16,10,{gap:2.8}),c(M,3),M=r.conveyor(0,a.y,a.z-17,14,34,6),r.hammer(0,a.y+8.5,a.z-10,7,{amp:1.2,omega:1.7,phase:0,span:8,baseY:a.y,r:1.2}),r.hammer(0,a.y+8.5,a.z-24,7,{amp:1.2,omega:1.7,phase:2.2,span:8,baseY:a.y,r:1.2}),a.z-=34,M=l(16,10),c(M,3),M=T(18,38,3,0),c(M,3),d(18,2,6,6,5.5,4.4),M=l(14,8),c(M,3),m(20,2,6,6,3.4,4),M=l(14,10),c(M,3),r.disc(0,a.y,a.z-4,3,{bounce:24,color:i.hazard}),M=l(16,12,{gap:11.5,dy:5}),c(M,3),M=l(22,36),r.bar(M.x,M.top,M.near-18,22,{omega:1.25,arms:3,h:1.15}),D()}r.finalize();let O=o.finishPlat;return o.length=-o.finishZ,o.checkpoints=r.checkpoints,o.endZ=O.far,{world:r,info:o}}function yd(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!1,ground:null,coyote:0,jumpBuf:0,stun:0,dive:0,diveCd:0,noSnap:0,hitCd:0,boost:0,jumping:!1,noCtrl:0,landSpeed:0,inWater:!1,events:[],moveT:0,yawOff:0,swim:0,waterSurf:0}}var Ty=(s,t)=>{let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function zl(s,t,e,n){let i=t-s.vx,r=e-s.vz,a=Math.hypot(i,r);a<=n||a<1e-6?(s.vx=t,s.vz=e):(s.vx+=i/a*n,s.vz+=r/a*n)}function vd(s,t,e,n){t.coyote=t.grounded?.11:t.coyote-e,t.jumpBuf=n.jumpPressed?.13:t.jumpBuf-e,t.stun>0&&(t.stun=Math.max(0,t.stun-e)),t.dive>0&&(t.dive=Math.max(0,t.dive-e)),t.diveCd>0&&(t.diveCd-=e),t.noSnap>0&&(t.noSnap-=e),t.hitCd>0&&(t.hitCd-=e),t.boost>0&&(t.boost-=e),t.noCtrl>0&&(t.noCtrl-=e);let i=0,r=0;for(let u of s.pools)if(t.x>u.x0&&t.x<u.x1&&t.z>u.z0&&t.z<u.z1){let f=u.surf-t.y;f>.12&&(i=Math.min(1,f/.9),r=u.surf);break}i>.3&&t.swim<=.3&&(t.events.push("splash"),t.waterSurf=r),t.swim=i;let a=t.stun<=0&&t.dive<=0&&t.noCtrl<=0,o=t.ground&&t.ground.ice,l=Math.abs(n.mx)+Math.abs(n.mz)>.01;if(n.divePressed&&t.diveCd<=0&&t.stun<=0&&t.dive<=0){let u=Math.sin(t.yaw),f=Math.cos(t.yaw);t.vx=u*15.5,t.vz=f*15.5,t.vy=t.grounded?7:Math.max(t.vy,3.5),t.grounded=!1,t.ground=null,t.noSnap=.2,t.dive=.85,t.diveCd=1.1,t.events.push("dive")}if(a){let u=de.RUN*(t.boost>0?1.45:1)*(t.speedMul||1)*(1-.34*i);if(l){let f=t.grounded?o?de.ICE_ACC:de.ACC:de.AIR;zl(t,n.mx*u,n.mz*u,f*e);let d=Math.atan2(n.mx,n.mz);t.yaw+=Ty(t.yaw,d)*(1-Math.exp(-20*e))}else t.grounded?zl(t,0,0,(o?de.ICE_DEC:de.DEC)*e):zl(t,0,0,de.AIR_DEC*e)}else{let u=t.grounded?o?1.2:9:.6;zl(t,0,0,u*e)}if(i>.4&&n.jumpPressed&&t.stun<=0?(t.vy=9,t.grounded=!1,t.ground=null,t.noSnap=.2,t.jumpBuf=0,t.events.push("stroke")):t.jumpBuf>0&&(t.grounded||t.coyote>0)&&t.stun<=0&&t.dive<=.45&&(t.vy=de.JUMP*(t.jumpMul||1),t.grounded=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.noSnap=.2,t.jumping=!0,t.events.push("jump")),t.jumping&&!n.jumpHeld&&t.vy>6&&(t.vy-=55*e),t.vy=Math.max(de.TERM,t.vy-de.G*e*(t.dive>0&&!t.grounded?.8:1)*(1-.92*i)),i>.05){let u=r-(n.jumpHeld?.3:.95);t.vy+=(u-t.y)*26*e*i,t.vy*=Math.exp(-2.4*e*i)}for(let u of s.zones){let f=t.x-u.x,d=t.z-u.z;if(f*f+d*d<u.r*u.r&&t.y>u.y0-.3&&t.y<u.y1){let m=Math.max(0,(t.y-u.y0)/(u.y1-u.y0)),_=u.vmax*(1-m*m);t.vy<_&&(t.vy=Math.min(_,t.vy+u.lift*e)),t.noSnap=Math.max(t.noSnap,.12),t.air||(t.air=!0,t.events.push("air"))}else t.air=!1}if(t.grounded&&t.ground){let u=t.ground.conv;u&&(t.x+=u[0]*e,t.z+=u[1]*e),t.ground.boost&&(t.boost=.55)}let c=t.grounded,h=t.y;if(t.x+=t.vx*e,t.z+=t.vz*e,s.resolveHorizontal(t),s.resolveHorizontal(t),t.y+=t.vy*e,t.grounded=!1,t.ground=null,t.vy<=0){let u=s.findGround(t,h,c);if(u){let f=-t.vy;t.y=u.top,t.vy=0,t.grounded=!0,t.ground=u.s,t.jumping=!1,u.s.bounce?(t.vy=u.s.bounce,t.grounded=!1,t.ground=null,t.noSnap=.25,t.jumping=!1,u.s.push&&(t.vx=u.s.push[0],t.vz=u.s.push[1],t.noCtrl=.9),u.s.squash!==void 0&&(u.s.squash=1),t.events.push("bounce")):!c&&f>6&&(t.landSpeed=f,t.events.push("land"))}}else{let u=s.hitCeiling(t,h);u&&(t.y=u.y0-de.H,t.vy=Math.min(0,t.vy*.2))}return t.y<s.waterY-.2&&!t.inWater&&(t.inWater=!0,t.events.push("splash")),t.y<s.killY&&t.events.push("fell"),t}function _a(s,t,e,n){return s.hitCd>0||s.shield>0?!1:(s.vx=t*n,s.vz=e*n,s.vy=Math.max(s.vy,6.5),s.grounded=!1,s.ground=null,s.noSnap=.25,s.stun=.95,s.dive=0,s.hitCd=.5,s.events.push("hit"),!0)}function Hl(s,t,e,n,i){s.x=t,s.y=e,s.z=n,s.vx=s.vy=s.vz=0,s.grounded=!1,s.ground=null,s.stun=0,s.dive=0,s.inWater=!1,s.hitCd=1,s.yaw=i!=null?i:Math.PI,s.noSnap=0,s.boost=0}var Ay=(s,t,e)=>s<t?t:s>e?e:s,dn=(s,t={})=>{var e,n,i;return new Zr({color:s,roughness:(e=t.r)!=null?e:.3,clearcoat:(n=t.cc)!=null?n:.65,clearcoatRoughness:.25,metalness:(i=t.m)!=null?i:0})},Oe=(s,t=.55)=>new he({color:s,roughness:t}),Nh=(s,t,e)=>{let n=new it(new ks(s,t,6,16),e);return n.castShadow=!0,n},on=(s,t,e=16,n=12)=>{let i=new it(new be(s,e,n),t);return i.castShadow=!0,i},bd=Oe("#ffffff",.25),Ed=Oe("#101018",.4);function Uh(s,t,e,n,i,r=.55){for(let a of[-1,1]){let o=on(i,bd);o.position.set(a*n,t,e);let l=on(i*r,Ed);l.position.set(0,0,i*.62),o.add(l),s.add(o)}}function Md(s,t){let e=new Vs;for(let n=0;n<10;n++){let i=-Math.PI/2+n*Math.PI/5,r=n%2?t:s,a=Math.cos(i)*r,o=Math.sin(i)*r;n?e.lineTo(a,o):e.moveTo(a,o)}return e.closePath(),e}var Sd=[{name:"Bubbles",pivotY:.85},{name:"Ninja",pivotY:.95},{name:"Dino",pivotY:.8},{name:"Robo",pivotY:.9}],ss=class{constructor(t){this.id=t,this.group=new ne,this.pivot=new ne,this.inner=new ne,this.group.add(this.pivot),this.pivot.add(this.inner),this.pivot.position.y=Sd[t].pivotY,this.inner.position.y=-Sd[t].pivotY,this.body=new ne,this.inner.add(this.body),this.t=Math.random()*10,this.phase=0,this.squash=0,this.tumble=0,this.lean=0,this.dive=0,this.wag=[],this.height=1.7,[this.buildBubbles,this.buildNinja,this.buildDino,this.buildRobo][t].call(this),this.makeBat(),this.makeExtras(),this.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}limbs(t,e,n,i,r,a,o,l,c,h,u,f){let d=(m,_,g,p,S,T)=>{let x=new ne;x.position.set(m,_,0);let b=Nh(g,p,S);if(b.position.y=-p/2-g*.6,x.add(b),T){let E=T();x.add(E)}return this.inner.add(x),x};this.legL=d(-t,e,n,i,r,f?()=>{let m=on(n*1.35,f);return m.scale.set(1,.6,1.5),m.position.set(0,-i-n*.55,n*.7),m}:null),this.legR=d(t,e,n,i,r,f?()=>{let m=on(n*1.35,f);return m.scale.set(1,.6,1.5),m.position.set(0,-i-n*.55,n*.7),m}:null),this.armL=d(-a,o,l,c,h,u?()=>{let m=on(l*1.45,u);return m.position.y=-c-l*.9,m}:null),this.armR=d(a,o,l,c,h,u?()=>{let m=on(l*1.45,u);return m.position.y=-c-l*.9,m}:null),this.handY=-c-l*.9}makeExtras(){let t=this.height,e=new it(new be(t*.64,22,14),new Ce({color:"#7fd8ff",transparent:!0,opacity:.3,depthWrite:!1}));e.position.y=t*.52,e.visible=!1,this.group.add(e),this.shield=e;let n=dn("#ffd23f",{m:.6,r:.25}),i=new ne,r=new it(new Yt(.2,.17,.12,5),n);i.add(r);for(let a=0;a<5;a++){let o=a/5*Math.PI*2,l=new it(new tn(.06,.2,6),n);l.position.set(Math.cos(o)*.17,.15,Math.sin(o)*.17),i.add(l)}i.position.y=t+.22,i.scale.setScalar(1.15),i.visible=!1,this.group.add(i),this.leadCrown=i}makeBat(){let t=dn("#d9a15a",{r:.45,cc:.3}),e=Oe("#3a2412",.7),n=Oe("#ff3b3b",.5),i=new ne,r=new it(new Yt(.035,.045,.5,10),e);r.position.y=-.18,i.add(r);let a=new it(new Yt(.05,.125,.8,14),t);a.position.y=-.7,i.add(a);let o=new it(new be(.125,12,8),t);o.scale.y=.5,o.position.y=-1.1,i.add(o);let l=new it(new Me(.075,.018,6,16),n);l.rotation.x=Math.PI/2,l.position.y=-.52,i.add(l);let c=new it(new be(.06,8,6),e);c.position.y=.07,i.add(c),i.position.set(0,this.handY,.02),i.visible=!1,i.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.armR.add(i),this.bat=i}buildBubbles(){let t=dn("#ff5fb4"),e=dn("#d63a8d"),n=Nh(.47,.34,t);n.position.y=.3+.64,this.body.add(n),this.limbs(.2,.42,.13,.12,t,.5,.95,.11,.22,t,Oe("#ffffff",.3),Oe("#7a2cff",.4)),Uh(this.body,1.2,.4,.17,.13);for(let o of[-1,1]){let l=on(.07,Oe("#ff8fcf"));l.scale.set(1.4,.8,.5),l.position.set(o*.3,1.04,.4),this.body.add(l)}let i=new it(new Xs(Md(.17,.075),{depth:.04,bevelEnabled:!1}),dn("#ffd23f",{m:.3}));i.position.set(0,.8,.455),this.body.add(i);let r=new ne;r.position.set(0,1.55,.02);let a=new it(new Yt(.27,.3,.16,20),dn("#ffd23f",{m:.55,r:.2}));r.add(a);for(let o=0;o<5;o++){let l=o/5*Math.PI*2,c=new it(new tn(.065,.22,8),dn("#ffd23f",{m:.55,r:.2}));c.position.set(Math.cos(l)*.23,.18,Math.sin(l)*.23),r.add(c);let h=on(.04,Oe(o%2?"#35e0ff":"#ff3b6b",.2));h.position.set(Math.cos(l)*.23,.3,Math.sin(l)*.23),r.add(h)}this.body.add(r),this.crown=r,this.height=1.95}buildNinja(){let t=dn("#2f6bff"),e=dn("#14224f",{cc:.3}),n=Nh(.36,.76,t);n.position.y=.34+.74,this.body.add(n),this.limbs(.15,.55,.11,.3,e,.42,1.28,.09,.3,t,Oe("#14224f"),Oe("#0a0a14"));let i=new it(new Yt(.372,.372,.22,24,1,!0),Oe("#0b0b17",.5));i.position.y=1.5,this.body.add(i);let r=new it(new be(.372,24,8,0,Math.PI*2,0,Math.PI/2),Oe("#0b0b17",.5));r.scale.set(1,.96,1),r.position.y=1.46,this.body.add(r),Uh(this.body,1.5,.3,.14,.1,.65);let a=new it(new Me(.31,.05,8,28),Oe("#ff2b4a",.4));a.rotation.x=Math.PI/2,a.position.y=1.64,this.body.add(a),this.tails=[];for(let h=0;h<2;h++){let u=new ne;u.position.set(h?.06:-.06,1.64,-.3);let f=new it(new De(.1,.05,.6),Oe("#ff2b4a",.4));f.position.z=-.3,u.add(f),this.body.add(u),this.tails.push(u)}let o=new it(new Me(.37,.05,8,28),Oe("#ffd23f",.4));o.rotation.x=Math.PI/2,o.position.y=.95,this.body.add(o);let l=new it(new Me(.31,.07,8,24),Oe("#ffffff",.5));l.rotation.x=Math.PI/2,l.position.y=1.28,this.body.add(l);let c=new it(new Xs(Md(.13,.04),{depth:.03,bevelEnabled:!1}),dn("#d8e2ff",{m:.8,r:.2}));c.scale.set(1,1,1),c.position.set(0,.7,.34),this.body.add(c),this.height=1.95}buildDino(){let t=dn("#3ddc84"),e=dn("#c8ffd9"),n=dn("#ff9f1c"),i=on(.58,t,28,20);i.scale.set(1,1.08,.98),i.position.y=.3+.62,this.body.add(i);let r=on(.45,e,22,16);r.scale.set(.85,.95,.5),r.position.set(0,.85,.36),this.body.add(r),this.limbs(.24,.42,.15,.1,t,.52,.85,.09,.12,t,null,Oe("#1f9d5b"));for(let c of[this.legL,this.legR])for(let h=-1;h<=1;h++){let u=new it(new tn(.035,.12,6),bd);u.rotation.x=Math.PI/2,u.position.set(h*.07,-.22,.36),c.add(u)}let a=on(.3,t,18,12);a.scale.set(1,.7,.9),a.position.set(0,1,.5),this.body.add(a);for(let c of[-1,1]){let h=on(.03,Ed,8,6);h.position.set(c*.08,1.08,.76),this.body.add(h)}Uh(this.body,1.42,.34,.22,.17,.5);for(let c of[-1,1]){let h=new it(new tn(.06,.2,8),Oe("#fff1c2",.4));h.position.set(c*.2,1.68,.18),h.rotation.z=-c*.25,this.body.add(h)}[.62,.8,1,1.2,1.38].forEach((c,h)=>{let u=[.13,.18,.21,.18,.13][h],f=new it(new tn(u*.75,u*2,8),n),d=-Math.sqrt(Math.max(.02,.58*.58-(c-.92)*(c-.92)/1.17))-.02;f.position.set(0,c,d),f.rotation.x=-(1.15-h*.2),this.body.add(f)}),this.tail=new ne,this.tail.position.set(0,.55,-.45);let o=new it(new tn(.22,.9,12),t);o.rotation.x=-Math.PI/2-.4,o.position.set(0,0,-.4),this.tail.add(o);let l=on(.07,n);l.position.set(0,-.2,-.78),this.tail.add(l),this.body.add(this.tail),this.height=1.85}buildRobo(){let t=dn("#ffc233"),e=dn("#b4bdcc",{m:.7,r:.25}),n=Oe("#1c2233",.4),i=new Ce({color:"#4ff3ff"}),r=new it(new ks(.46,.4,6,16),t);r.scale.set(1,1,.92),r.position.y=.98,r.castShadow=!0,this.body.add(r);let a=new it(new De(.64,.3,.12),n);a.position.set(0,1.28,.4),a.rotation.x=-.12,this.body.add(a);for(let u of[-1,1]){let f=on(.075,i,10,8);f.scale.set(1,1.15,.5),f.position.set(u*.16,1.29,.47),this.body.add(f)}let o=new it(new De(.26,.05,.05),n);o.position.set(0,1.03,.45),this.body.add(o);let l=new it(new De(.34,.24,.06),e);l.position.set(0,.76,.43),l.rotation.x=-.05,this.body.add(l);for(let[u,f]of[[-.1,.82],[.1,.82],[-.1,.7],[.1,.7]]){let d=on(.025,n,6,4);d.position.set(u,f,.47),this.body.add(d)}for(let u of[-1,1]){let f=new it(new Yt(.1,.1,.16,12),e);f.rotation.z=Math.PI/2,f.position.set(u*.5,1.28,0),f.castShadow=!0,this.body.add(f)}let c=new it(new Yt(.025,.025,.3,8),e);c.position.set(0,1.78,0),this.body.add(c);let h=on(.075,Oe("#ff3b3b",.3),12,8);h.position.set(0,1.97,0),this.body.add(h),this.limbs(.2,.45,.12,.14,e,.52,.98,.1,.22,e,Oe("#ff4d4d",.4),Oe("#2b3347",.4)),this.height=2}update(t,e){this.t+=t;let n=Ay(e.speed/10.5,0,1.3);e.grounded&&!e.stun&&(this.phase+=t*(5+n*11));let i=Math.sin(this.phase),r=n*.95;if(e.stun>0)this.tumble+=t*11,this.pivot.rotation.x=this.tumble,this.pivot.rotation.z=Math.sin(this.tumble*.5)*.4,this.legL.rotation.x=Math.sin(this.t*16)*1,this.legR.rotation.x=-Math.sin(this.t*16)*1,this.armL.rotation.z=-1.5+Math.sin(this.t*18)*.5,this.armR.rotation.z=1.5-Math.sin(this.t*18)*.5,this.armL.rotation.x=this.armR.rotation.x=0;else{let l=Math.round(this.tumble/(Math.PI*2))*Math.PI*2;this.tumble+=(l-this.tumble)*Math.min(1,t*14),this.pivot.rotation.z*=Math.max(0,1-t*12);let c=e.dive>0?1:0;this.dive+=(c-this.dive)*Math.min(1,t*16);let h=(e.grounded?n*.2:.05)+this.dive*1.35;if(this.lean+=(h-this.lean)*Math.min(1,t*14),this.pivot.rotation.x=this.tumble+this.lean,e.celebrate){let u=Math.abs(Math.sin(this.t*6))*.35;this.body.position.y=u,this.armL.rotation.z=-2.6+Math.sin(this.t*14)*.3,this.armR.rotation.z=2.6-Math.sin(this.t*14)*.3,this.armL.rotation.x=this.armR.rotation.x=0,this.legL.rotation.x=this.legR.rotation.x=0}else if(this.dive>.3)this.armL.rotation.x=this.armR.rotation.x=-2.9,this.armL.rotation.z=-.15,this.armR.rotation.z=.15,this.legL.rotation.x=this.legR.rotation.x=.2;else if(e.grounded){this.legL.rotation.x=i*r,this.legR.rotation.x=-i*r,this.armL.rotation.x=-i*r*.9,this.armR.rotation.x=i*r*.9;let u=Math.sin(this.t*2.2)*.04;this.armL.rotation.z=-.15-u-n*.2,this.armR.rotation.z=.15+u+n*.2}else{let u=e.vy>0;this.legL.rotation.x=u?.7:.35,this.legR.rotation.x=u?-.5:-.2,this.armL.rotation.z=-2.2,this.armR.rotation.z=2.2,this.armL.rotation.x=this.armR.rotation.x=0}e.celebrate||(this.body.position.y=e.grounded?Math.abs(i)*.07*n:0)}if(this.shield.visible=!!e.shield,e.shield){let l=1+Math.sin(this.t*8)*.04;this.shield.scale.set(l,l,l)}if(this.leadCrown.visible=!!e.leader,e.leader&&(this.leadCrown.rotation.y+=t*2.2,this.leadCrown.position.y=this.height+.22+Math.sin(this.t*3)*.05),this.bat.scale.setScalar(e.mega?1.6:1),e.swing>0&&!e.stun){let l=e.swing,c;if(l<.3)c=-2.95*(l/.3);else{let h=(l-.3)/.7;c=-2.95+2.75*(1-(1-h)*(1-h))}this.armR.rotation.x=c,this.armR.rotation.z=.12,this.pivot.rotation.x=this.tumble+this.lean+(l>.3?.28*Math.sin(Math.min(1,(l-.3)/.35)*Math.PI):0),this.bat.visible=!0}else this.bat.visible=!1;e.landed&&(this.squash=1),this.squash=Math.max(0,this.squash-t*5);let a=1-Math.sin(this.squash*Math.PI)*.22*this.squash;!e.grounded&&e.vy>2&&!e.stun&&(a=1.1),!e.grounded&&e.vy<-8&&(a=1.06);let o=1+(1-a)*.55;this.body.scale.set(o,a,o),this.tails&&this.tails.forEach((l,c)=>{l.rotation.x=-.15-n*.5+Math.sin(this.t*9+c)*.12*(.4+n),l.rotation.y=(c?1:-1)*(.15+Math.sin(this.t*7+c*2)*.12)}),this.tail&&(this.tail.rotation.y=Math.sin(this.t*(6+n*6))*(.35+n*.25)),this.crown&&(this.crown.rotation.z=Math.sin(this.t*5)*.05*n)}dispose(){this.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:[e]).forEach(n=>n.dispose())}})}};function kl(s,t="#ffffff"){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");n.font='700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif',n.textAlign="center",n.textBaseline="middle";let i=Math.min(480,n.measureText(s).width+56);n.fillStyle="rgba(12,10,36,0.72)";let r=(512-i)/2,a=14,o=100,l=50;n.beginPath(),n.moveTo(r+l,a),n.arcTo(r+i,a,r+i,a+o,l),n.arcTo(r+i,a+o,r,a+o,l),n.arcTo(r,a+o,r,a,l),n.arcTo(r,a,r+i,a,l),n.closePath(),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.lineWidth=8,n.strokeStyle="rgba(0,0,0,0.65)",n.strokeText(s,256,68,440),n.fillStyle="#ffffff",n.fillText(s,256,68,440);let c=new fn(e);c.colorSpace=Te,c.anisotropy=4;let h=new Nr(new Os({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return h.renderOrder=999,h.scale.set(2.8,.7,1),h.userData.base=.7,h}var Ma={candy:{top:"#3fb0ff",horizon:"#ffd6ee",bottom:"#ffe9f6",fog:"#ffd9ef",fogNear:90,fogFar:520,sun:"#fff1cf",sunPos:[-60,90,-40],sunI:2.5,hemiSky:"#d6eeff",hemiGround:"#ffc2e6",hemiI:1,exp:1.05,waterA:"#2ec8ff",waterB:"#168ae0",water:"water",env:.55},canyon:{top:"#47207a",horizon:"#ff9a52",bottom:"#ffcf8a",fog:"#ffa769",fogNear:80,fogFar:460,sun:"#ffb06b",sunPos:[80,45,-70],sunI:2.7,hemiSky:"#ffd0a6",hemiGround:"#a8402f",hemiI:.9,exp:1,waterA:"#ff4a12",waterB:"#ffc21a",water:"lava",env:.45},frost:{top:"#4aa6ff",horizon:"#e4f4ff",bottom:"#ffffff",fog:"#d8ecff",fogNear:80,fogFar:480,sun:"#fff6ea",sunPos:[50,80,-40],sunI:2.4,hemiSky:"#dff1ff",hemiGround:"#9fc9ee",hemiI:1.1,exp:1.08,waterA:"#2a8fd6",waterB:"#0b4d8c",water:"water",env:.65},fair:{top:"#2f8bff",horizon:"#fff0c2",bottom:"#ffe9b0",fog:"#ffe6bd",fogNear:90,fogFar:520,sun:"#fff0cf",sunPos:[-50,85,-50],sunI:2.6,hemiSky:"#cfe6ff",hemiGround:"#ffd9a0",hemiI:1,exp:1.05,waterA:"#2fe0c8",waterB:"#0e8fb0",water:"water",env:.55},fun:{top:"#35a7ff",horizon:"#e8fbff",bottom:"#fff6d8",fog:"#d9f4ff",fogNear:120,fogFar:640,sun:"#fff4d6",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#d4ecff",hemiGround:"#bfe8a0",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.6},neon:{top:"#04010d",horizon:"#3b0c70",bottom:"#12033a",fog:"#1d0750",fogNear:60,fogFar:380,sun:"#a58bff",sunPos:[-40,70,-30],sunI:1.5,hemiSky:"#6c4cff",hemiGround:"#1a0a3a",hemiI:.95,exp:1.15,waterA:"#2b0b5e",waterB:"#d11cff",water:"grid",env:.5}},Fh=null;function wd(){return Fh||(Fh=(async()=>{try{await Promise.race([Promise.all([document.fonts.load('400 100px "Lilita One"'),document.fonts.load('400 100px "Fredoka One"'),document.fonts.load('400 100px "Noto Nastaliq Urdu"',"\u0639\u06A9\u0631\u0645\u06C1")]),new Promise(s=>setTimeout(s,2500))])}catch{}})()),Fh}var Gl='"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function Vl(s="HARIS",t=null,e=["#fff7a8","#ffc83d","#ff7a1a"]){let n=document.createElement("canvas");n.width=1024,n.height=t?512:400;let i=n.getContext("2d");i.textAlign="center",i.textBaseline="middle";let r=300;for(i.font=`${r}px ${Gl}`;i.measureText(s).width>900&&r>80;)r-=10,i.font=`${r}px ${Gl}`;let a=t?220:200;i.lineJoin="round",i.shadowColor="rgba(255,190,60,0.9)",i.shadowBlur=40,i.lineWidth=46,i.strokeStyle="rgba(255,170,40,0.35)",i.strokeText(s,512,a),i.shadowBlur=0,i.lineWidth=40,i.strokeStyle="#1b0f4a",i.strokeText(s,512,a),i.lineWidth=18,i.strokeStyle="#ffffff",i.strokeText(s,512,a),i.fillStyle="#b0420b";for(let c=14;c>0;c-=2)i.fillText(s,512,a+c);let o=i.createLinearGradient(0,a-r/2,0,a+r/2);o.addColorStop(0,e[0]),o.addColorStop(.55,e[1]),o.addColorStop(1,e[2]),i.fillStyle=o,i.fillText(s,512,a),i.globalCompositeOperation="source-atop",i.fillStyle="rgba(255,255,255,0.35)",i.fillRect(0,a-r/2,1024,r*.18),i.globalCompositeOperation="source-over",t&&(i.font=`90px ${Gl}`,i.lineWidth=16,i.strokeStyle="#1b0f4a",i.strokeText(t,512,440),i.fillStyle="#ffffff",i.fillText(t,512,440));let l=new fn(n);return l.colorSpace=Te,l.anisotropy=8,l}function Ry(s,t="#ff3b6b",e="#ffffff"){let n=document.createElement("canvas");n.width=1024,n.height=256;let i=n.getContext("2d");i.fillStyle=t,i.fillRect(0,0,1024,256);let r=32;i.fillStyle=e;for(let o=0;o<1024;o+=r)for(let l=0;l<256;l+=r)(o+l)/r%2===0&&(l<r||l>=256-r)&&i.fillRect(o,l,r,r);i.font=`150px ${Gl}`,i.textAlign="center",i.textBaseline="middle",i.lineJoin="round",i.lineWidth=26,i.strokeStyle="#1b0f4a",i.strokeText(s,512,132),i.fillStyle="#fff",i.fillText(s,512,132);let a=new fn(n);return a.colorSpace=Te,a.anisotropy=8,a}function Td(){let s=document.createElement("canvas");s.width=128,s.height=128;let t=s.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="rgba(0,0,0,0.28)",t.beginPath(),t.moveTo(64,14),t.lineTo(108,70),t.lineTo(80,70),t.lineTo(80,112),t.lineTo(48,112),t.lineTo(48,70),t.lineTo(20,70),t.closePath(),t.fill();let e=new fn(s);return e.colorSpace=Te,e.anisotropy=4,e}function Cy(s="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,s),i.addColorStop(1,t),n.fillStyle=i,n.fillRect(0,0,128,128);let r=new fn(e);return r.colorSpace=Te,r}function Bh(s){let t=new z(...s.sunPos).normalize(),e=new Xe({side:Ze,depthWrite:!1,fog:!1,uniforms:{top:{value:new Dt(s.top)},horizon:{value:new Dt(s.horizon)},bottom:{value:new Dt(s.bottom)},sunDir:{value:t},sunColor:{value:new Dt(s.sun)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        gl_FragColor = vec4(c, 1.0); }`}),n=new it(new be(900,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function Oh(s,t){let e=new Dt(s.fog),n=s.water==="lava"?1:s.water==="grid"?2:0,i=new Xe({uniforms:{time:{value:0},cA:{value:new Dt(s.waterA)},cB:{value:new Dt(s.waterB)},fogC:{value:e},fogN:{value:s.fogNear},fogF:{value:s.fogFar},kind:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
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
      }`}),r=new it(new We(1600,1600),i);return r.rotation.x=-Math.PI/2,r.position.y=t,r.frustumCulled=!1,r.renderOrder=-5,r.userData.mat=i,r}var ya=class{constructor(t=500){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.s0=new Float32Array(t);let e=new Re;e.setAttribute("position",new Ae(this.pos,3).setUsage(Qs)),e.setAttribute("color",new Ae(this.col,3).setUsage(Qs)),e.setAttribute("size",new Ae(this.size,1).setUsage(Qs)),e.setAttribute("alpha",new Ae(this.alpha,1).setUsage(Qs)),e.setDrawRange(0,0),this.mat=new Xe({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }"}),this.points=new qi(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=e,this._c=new Dt}emit(t,e,n,i,r={}){var o,l,c,h,u,f,d,m;let a=this._c.set((o=r.color)!=null?o:"#ffffff");for(let _=0;_<i;_++){let g=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),p=Math.random()*Math.PI*2,S=((l=r.speed)!=null?l:3)*(.3+Math.random()*.9),T=(c=r.up)!=null?c:3,x=g*3;this.pos[x]=t+(Math.random()-.5)*((h=r.spread)!=null?h:.3),this.pos[x+1]=e,this.pos[x+2]=n+(Math.random()-.5)*((u=r.spread)!=null?u:.3),this.vel[x]=Math.cos(p)*S,this.vel[x+1]=T*(.4+Math.random()*.9),this.vel[x+2]=Math.sin(p)*S;let b=r.rainbow?this._c.setHSL(Math.random(),.9,.6):a;this.col[x]=b.r,this.col[x+1]=b.g,this.col[x+2]=b.b,this.life[g]=this.maxLife[g]=((f=r.life)!=null?f:.6)*(.6+Math.random()*.8),this.s0[g]=((d=r.size)!=null?d:.35)*(.6+Math.random()*.8),this.size[g]=this.s0[g],this.grav[g]=(m=r.gravity)!=null?m:9,this.alpha[g]=1}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.alpha[e]=0,this.size[e]=0;continue}this.life[e]-=t;let n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let i=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=Math.min(1,i*1.6),this.size[e]=this.s0[e]*(.4+.6*i)}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setScale(t){this.mat.uniforms.scale.value=t*.9}},va=class{constructor(t,e=350){this.kind=t,this.n=e;let n=new Float32Array(e*3);this.seed=new Float32Array(e*3);for(let a=0;a<e*3;a++)this.seed[a]=Math.random();let i=new Re;i.setAttribute("position",new Ae(n,3));let r={frost:"#ffffff",canyon:"#ffb347",candy:"#fff6a8",neon:"#7cf9ff",fair:"#ffd6f0",fun:"#fff6a8"};this.mat=new Xi({color:r[t]||"#fff",size:t==="frost"?.28:.22,transparent:!0,opacity:.85,depthWrite:!1,map:Cy(),blending:t==="neon"||t==="canyon"?Ki:Ri}),this.points=new qi(i,this.mat),this.points.frustumCulled=!1,this.pos=n}update(t,e){let r=this.kind,a=this.pos,o=this.seed;for(let l=0;l<this.n;l++){let c=l*3,h=o[c]*70,u=o[c+1]*36,f=o[c+2]*70;r==="frost"?(u=36-(t*(2+o[c]*2)+o[c+1]*36)%36,h+=Math.sin(t*.7+l)*1.2):r==="canyon"?(u=(t*(1.5+o[c]*2)+o[c+1]*36)%36,h+=Math.sin(t*.9+l)*.8):(u+=Math.sin(t*.6+l)*.8,h+=Math.cos(t*.4+l*1.3)*.8),a[c]=e.x+((h-e.x)%70+70)%70-70/2,a[c+1]=e.y-36/2+u,a[c+2]=e.z+((f-e.z)%70+70)%70-70/2}this.points.geometry.attributes.position.needsUpdate=!0}};function Iy(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Ad(s,t,e,n){let i=Ma[t],r=new ne;r.name="scenery";let a=Iy(t.length*9973+17),o=new is,l=new is,c=e.length,h=-c-40,u=t==="fun"?0:n.waterY,f=t==="fun"?82:0,d=[],m=(M,P)=>(a()<.5?-1:1)*(M+f+a()*(P-M)),_=M=>M[Math.floor(a()*M.length)],g=(M,P=16,C=10)=>new be(M,P,C),p=(M,P,C,R=14)=>new Yt(M,P,C,R),S=(M,P,C=14)=>new tn(M,P,C),T={candy:["#ff9bd0","#7be8c8","#ffd479","#b9a4ff"],canyon:["#d9743b","#e8a15a","#b9472f"],frost:["#e5f4ff","#a8d8ff","#ffffff"],neon:["#2d1c78","#4a1a86","#1f2f8a"],fair:["#8bd450","#ffd23f","#ff9bd0","#7be8ff"],fun:["#8bd450","#ffd23f","#ff9bd0","#7be8ff"]}[t];for(let M=0;M<26;M++){let P=60-a()*(c+160),C=m(38,150),R=-4+a()*40,U=5+a()*14,B=_(T);o.add(p(U,U*.9,U*.25,20),C,R,P,B),o.add(S(U*.9,U*1.3,20),C,R-U*.25/2-U*.65,P,t==="frost"?"#9fc8ee":t==="neon"?"#241a60":"#8a5a3a",Math.PI),t==="neon"&&l.add(new Me(U,.18,6,32),C,R+U*.13,P,_(["#22f2ff","#ff2bd6"]),Math.PI/2)}if(t==="candy"){for(let P=0;P<70;P++){let C=70-a()*(c+200),R=m(26,130),U=1+a()*2.2,B=a(),k=u-1;if(B<.35){let H=_(["#ff5fa8","#ffb347","#8f7bff","#3fd6c2","#ffd84d"]);o.add(p(.45*U,.45*U,12*U,8),R,k+6*U,C,"#fff3f8"),o.add(g(3.4*U,20,14),R,k+13.5*U,C,H,0,0,0,1,1,.45),o.add(new Me(2.2*U,.35*U,8,24),R,k+13.5*U,C+1.45*U,"#ffffff"),o.add(new Me(1.1*U,.3*U,8,20),R,k+13.5*U,C+1.5*U,"#ffffff")}else B<.65?(o.add(g(4*U,18,12),R,k,C,_(["#ff6b9e","#6be8c4","#ffd24d","#a58bff"]),0,0,0,1,.85,1),o.add(p(.9*U,1.3*U,.6*U,10),R,k+3.2*U,C,"#ffffff")):B<.85?(o.add(p(2.8*U,2*U,3.2*U,14),R,k+1.6*U,C,_(["#ffd29b","#c9a0ff","#8be0ff"])),o.add(g(3.1*U,16,10),R,k+4*U,C,"#ff9ccb",0,0,0,1,.8,1),o.add(g(.7*U,10,8),R,k+6.1*U,C,"#ff2d55")):(o.add(new Me(4.2*U,1.9*U,12,28),R,k+2*U,C,"#ffbd6b",Math.PI/2-.4),o.add(new Me(4.2*U,1.9*U,12,28),R,k+2.5*U,C,_(["#ff7ab8","#7be8ff"]),Math.PI/2-.4,0,0,1.03,1.03,.6))}let M=["#ff3b3b","#ff9a3b","#ffe03b","#4ddc6a","#3bb0ff","#9b6bff"];[-.12,-.5,-.88].forEach(P=>M.forEach((C,R)=>o.add(new Me(46-R*1.6,.9,6,48,Math.PI),0,u-2,P*c-8,C,0,0,0,1,1.4,1)));for(let P=0;P<22;P++){let C=new ne,R=_(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),U=new it(g(1.6,16,12),new he({color:R,roughness:.25}));U.scale.y=1.2;let B=new it(S(.25,.4,8),new he({color:R}));B.position.y=-1.9,B.rotation.x=Math.PI;let k=new it(p(.03,.03,4,4),new Ce({color:"#ffffff"}));k.position.y=-4,C.add(U,B,k),C.position.set(m(14,70),8+a()*30,40-a()*(c+120)),C.userData.ph=a()*6,r.add(C),d.push(H=>{C.position.y+=Math.sin(H*.8+C.userData.ph)*.004,C.rotation.z=Math.sin(H*.6+C.userData.ph)*.08})}}else if(t==="canyon"){for(let M=0;M<60;M++){let P=70-a()*(c+200),C=m(28,150),R=1+a()*2.4,U=a(),B=u-2;if(U<.55){let k=3+Math.floor(a()*3);for(let H=0;H<k;H++)o.add(p(5*R-H*.35*R,5.3*R-H*.3*R,4*R,12),C,B+2*R+H*4*R,P,["#b8452f","#d9743b","#e8a15a","#c4503d","#f0b46a"][(H+M)%5])}else U<.85?o.add(S(2.4*R,16*R,7),C,B+8*R,P,_(["#9c3f2c","#c4573a","#7a2f3d"])):o.add(new Me(6*R,2*R,8,20,Math.PI),C,B,P,"#d2693b",0,a()*3)}l.add(g(34,24,16),120,52,-c-140,"#ffd27a"),l.add(g(34,24,16),-150,40,-60,"#ffb35e")}else if(t==="frost")for(let M=0;M<80;M++){let P=70-a()*(c+200),C=m(26,150),R=1+a()*2.2,U=a(),B=u-2;if(U<.3)o.add(S(14*R,30*R,8),C,B+15*R,P,"#bcd8f2"),o.add(S(6.5*R,12*R,8),C,B+24*R,P,"#ffffff");else if(U<.8){for(let k=0;k<4;k++)o.add(S(3.4*R-k*.65*R,4.4*R,9),C,B+(3+k*2.6)*R,P,k%2?"#2f7d6f":"#3a9684"),o.add(S(2.4*R-k*.5*R,2*R,9),C,B+(4.4+k*2.6)*R,P,"#ffffff");o.add(p(.5*R,.6*R,3*R,6),C,B+1.4*R,P,"#6b4a34")}else l.add(new qs(3*R,0),C,B+5*R+a()*10,P,"#bfe8ff",0,a()*3,0,.7,1.8,.7)}else if(t==="fair"||t==="fun"){for(let M=0;M<46;M++){let P=70-a()*(c+200),C=m(26,140),R=1+a()*1.8,U=a(),B=u-1;if(U<.4){let k=_(["#ff4d6d","#3ec6e0","#ffd23f","#8b5cf6"]);o.add(p(6*R,6*R,5*R,16),C,B+2.5*R,P,k),o.add(S(6.8*R,5*R,16),C,B+7.5*R,P,"#ffffff"),o.add(S(1.1*R,3*R,8),C,B+11*R,P,k),o.add(p(.12*R,.12*R,4*R,4),C,B+14*R,P,"#ffffff")}else if(U<.7){for(let k=0;k<8;k++)o.add(p(2.2*R,2.2*R,2.4*R,12),C,B+(1.2+k*2.4)*R,P,k%2?"#ffffff":"#ff4d6d");o.add(S(3*R,4*R,12),C,B+21*R,P,"#ffd23f")}else o.add(p(.3*R,.4*R,9*R,6),C,B+4.5*R,P,"#5b2a86"),l.add(g(1.1*R,10,8),C,B+9.6*R,P,_(["#ffe27a","#ff9ccb","#9cf0ff"]))}[[-120,-c*.25],[140,-c*.62],[-130,-c*.9]].forEach(([M,P],C)=>{let R=new ne;R.position.set(M,u+34,P),R.rotation.y=C%2?.5:-.5;let U=new it(new Me(30,.9,8,48),new he({color:"#ffffff",roughness:.4}));R.add(U);let B=new he({color:"#ff4d6d"});for(let q=0;q<8;q++){let X=new it(p(.35,.35,60,5),B);X.rotation.z=q*Math.PI/8,R.add(X)}let k=[];for(let q=0;q<12;q++){let X=q/12*Math.PI*2,lt=new it(new De(4.4,3.4,3.4),new he({color:_(["#ffd23f","#3ec6e0","#ff4d6d","#8bd450"]),roughness:.35}));lt.position.set(Math.cos(X)*30,Math.sin(X)*30-2,0),R.add(lt),k.push([lt,X])}let H=new he({color:"#5b2a86"});for(let q of[-1,1]){let X=new it(p(1.2,1.6,44,6),H);X.position.set(q*11,-20,0),X.rotation.z=q*-.28,R.add(X)}r.add(R),d.push(q=>{let X=q*.12*(C%2?-1:1);U.rotation.z=X,R.children.forEach(lt=>{var at,It;lt.geometry&&lt.geometry.type==="CylinderGeometry"&&lt.position.x===0&&lt.position.y===0&&(lt.rotation.z=((It=(at=lt.userData).b)!=null?It:at.b=lt.rotation.z)+X)}),k.forEach(([lt,at])=>lt.position.set(Math.cos(at+X)*30,Math.sin(at+X)*30-2,0))})});for(let M=0;M<26;M++){let P=new ne,C=_(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),R=new it(g(1.6,16,12),new he({color:C,roughness:.25}));R.scale.y=1.2;let U=new it(p(.03,.03,4,4),new Ce({color:"#ffffff"}));U.position.y=-3,P.add(R,U),P.position.set(m(14,80),8+a()*34,40-a()*(c+120)),P.userData.ph=a()*6,r.add(P),d.push(B=>{P.position.y+=Math.sin(B*.8+P.userData.ph)*.004,P.rotation.z=Math.sin(B*.6+P.userData.ph)*.08})}}else{for(let U=0;U<70;U++){let B=70-a()*(c+200),k=m(24,140),H=1+a()*2.2,q=a(),X=_(["#22f2ff","#ff2bd6","#7cff3d","#ffe03b"]);q<.35?(o.add(p(1.4*H,1.8*H,24*H,6),k,u+10*H,B,"#190f4d"),l.add(p(1.5*H,1.5*H,.6,6),k,u+6*H,B,X),l.add(p(1.5*H,1.5*H,.6,6),k,u+14*H,B,X)):q<.7?l.add(new qs(2.4*H,0),k,6+a()*40,B,X,a()*3,a()*3,0):l.add(new Me(5*H,.35,6,40),k,10+a()*30,B,X,a()*3,a()*3,0)}o.add(g(60,32,24),-170,90,-c*.55,"#3a1a8c"),l.add(new Me(95,1.5,6,80),-170,90,-c*.55,"#ff2bd6",Math.PI/2-.35,0,.2),l.add(g(26,20,16),200,120,-c*.2,"#ff7ad9");let M=900,P=new Float32Array(M*3);for(let U=0;U<M;U++){let B=a()*Math.PI*2,k=Math.acos(a()*1.6-.2),H=800;P[U*3]=Math.sin(k)*Math.cos(B)*H,P[U*3+1]=Math.cos(k)*H,P[U*3+2]=Math.sin(k)*Math.sin(B)*H}let C=new Re;C.setAttribute("position",new Ae(P,3));let R=new qi(C,new Xi({color:"#ffffff",size:2.2,sizeAttenuation:!1,fog:!1,depthWrite:!1}));R.frustumCulled=!1,R.renderOrder=-9,r.add(R),r.userData.stars=R}let x=o.build(new he({vertexColors:!0,roughness:.55}));x&&(x.castShadow=!1,x.receiveShadow=!1,r.add(x));let b=l.build(new Ce({vertexColors:!0,toneMapped:!1}));b&&r.add(b);let E=new ne;E.name="brand",r.add(E);let N=Vl("HARIS","MADE THIS GAME"),y=e.finishPlat,A=M=>new he({color:M,roughness:.4}),D=(M,P,C,R,U)=>{let B=new ne;B.position.set(0,P,M);let k=A("#2b1c6b");for(let X of[-1,1]){let lt=new it(new De(1.2,9,1.2),k);lt.position.set(X*C/2,4.5,0),lt.castShadow=!0,B.add(lt)}let H=new it(new We(C,C/4),new Ce({map:Ry(R,U),toneMapped:!1,side:en}));H.position.set(0,8.6,.05),B.add(H);let q=new it(new De(C+1.2,.6,1.2),k);q.position.set(0,10.4,0),B.add(q),E.add(B)};D(e.startArch,0,20,"START","#22c55e"),D(e.finishZ+.01,y.top,19,"FINISH","#ef233c");let O=new it(new We(30,15),new Ce({map:N,transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}));return O.position.set(0,y.top+21,e.finishZ-.5),E.add(O),d.push(M=>{O.position.y=y.top+21+Math.sin(M*1.2)*.4}),s.add(r),{group:r,update(M,P){for(let C of d)C(M);r.userData.stars&&r.userData.stars.position.copy(P)},dispose(){s.remove(r),r.traverse(M=>{M.geometry&&M.geometry.dispose(),M.material&&(Array.isArray(M.material)?M.material:[M.material]).forEach(C=>{C.map&&C.map.dispose(),C.dispose()})})}}}var ie=null,rs=null,or=null,Fi=null,Xl=null,Cd=!1;var Wl=null,Ui=null;function di(){if(ie){ie.state==="suspended"&&ie.resume();return}let s=window.AudioContext||window.webkitAudioContext;if(!s)return;ie=new s,rs=ie.createGain(),rs.gain.value=Cd?0:.9,rs.connect(ie.destination),or=ie.createGain(),or.gain.value=.7,or.connect(rs),Fi=ie.createGain(),Fi.gain.value=.22,Fi.connect(rs);let t=ie.sampleRate;Xl=ie.createBuffer(1,t,ie.sampleRate);let e=Xl.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}function Id(s){Cd=s,rs&&rs.gain.setTargetAtTime(s?0:.9,ie.currentTime,.05)}function oe(s,t,e,n,i=.3,r=0,a=or){if(!ie)return;let o=ie.currentTime+r,l=ie.createOscillator(),c=ie.createGain();l.type=s,l.frequency.setValueAtTime(t,o),e!==t&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e),o+n),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(i,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+n),l.connect(c),c.connect(a),l.start(o),l.stop(o+n+.05)}function Gn(s,t,e,n,i,r=0,a=1){if(!ie)return;let o=ie.currentTime+r,l=ie.createBufferSource();l.buffer=Xl,l.loop=!0;let c=ie.createBiquadFilter();c.type=e,c.Q.value=a,c.frequency.setValueAtTime(n,o),c.frequency.exponentialRampToValueAtTime(Math.max(30,i),o+s);let h=ie.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(t,o+.015),h.gain.exponentialRampToValueAtTime(1e-4,o+s),l.connect(c),c.connect(h),h.connect(or),l.start(o),l.stop(o+s+.05)}var Py=(s,t)=>s+Math.random()*(t-s),kt={click(){oe("triangle",520,780,.09,.25)},select(){oe("triangle",660,990,.12,.28),oe("sine",990,1320,.1,.18,.06)},back(){oe("triangle",520,330,.12,.22)},jump(){oe("sine",280,640,.17,.3),oe("triangle",420,880,.12,.08,.02)},land(s=10){let t=Math.min(.5,.12+s*.012);oe("sine",140,60,.12,t),Gn(.09,t*.7,"lowpass",900,200)},step(){Gn(.045,.07,"bandpass",Py(500,800),300,0,2)},dive(){Gn(.3,.22,"bandpass",500,2200,0,1.5),oe("sine",300,520,.2,.15)},bounce(){oe("sine",180,920,.3,.38),oe("triangle",360,1400,.22,.12,.03)},pickup(){oe("triangle",520,1040,.18,.3),oe("sine",780,1560,.24,.2,.07),oe("sine",1170,2340,.2,.12,.14)},swing(){Gn(.24,.3,"bandpass",500,2800,0,1.2),oe("sine",380,160,.16,.08)},bonk(){oe("square",190,55,.2,.42),Gn(.14,.45,"lowpass",3e3,300),oe("triangle",820,220,.22,.22,.02)},hit(){oe("sawtooth",420,70,.28,.28),Gn(.18,.3,"lowpass",1800,150),oe("square",220,110,.15,.12,.04)},door(){oe("square",150,90,.07,.3),oe("square",110,70,.1,.25,.09),Gn(.05,.18,"lowpass",2e3,400)},honk(){oe("square",392,392,.34,.2),oe("square",494,494,.34,.2)},skid(){Gn(.18,.1,"bandpass",2600,1800,0,3)},vroom(){oe("sawtooth",70,160,.35,.2),oe("sawtooth",90,210,.3,.1,.05)},splash(){Gn(.6,.45,"bandpass",1800,260,0,.8),Gn(.3,.2,"highpass",2400,900,.05),oe("sine",220,80,.3,.12)},respawn(){Gn(.4,.22,"highpass",400,4e3,0,.7),oe("sine",300,900,.3,.15)},checkpoint(){oe("sine",660,660,.14,.3),oe("sine",990,990,.25,.3,.1),oe("triangle",1320,1320,.3,.1,.18)},tick(){oe("sine",660,660,.14,.4)},go(){[523,659,784].forEach(s=>oe("square",s,s,.5,.14)),oe("sine",1046,1046,.6,.3)},join(){oe("triangle",520,520,.1,.25),oe("triangle",780,780,.14,.25,.09)},finish(){[523,659,784,1046,1318].forEach((s,t)=>{oe("square",s,s,.22,.14,t*.09),oe("triangle",s*2,s*2,.3,.08,t*.09)})},win(){[523,659,784,659,784,1046,1318].forEach((t,e)=>{oe("square",t,t,.24,.13,e*.12),oe("triangle",t/2,t/2,.3,.12,e*.12)})},lose(){[392,349,311,262].forEach((s,t)=>oe("triangle",s,s*.97,.3,.22,t*.17))},warn(){oe("square",880,880,.08,.14)}},Ly={major:[0,2,4,7,9,12,14,16],minor:[0,3,5,7,10,12,15,17],lydian:[0,2,4,6,7,9,11,12],dorian:[0,2,3,5,7,9,10,12]},Rd=[{bpm:132,root:60,scale:"major",prog:[0,5,3,4],lead:"square",bright:3200},{bpm:118,root:57,scale:"minor",prog:[0,0,3,4],lead:"sawtooth",bright:2200},{bpm:108,root:62,scale:"lydian",prog:[0,4,5,3],lead:"triangle",bright:4200},{bpm:140,root:55,scale:"dorian",prog:[0,3,0,5],lead:"sawtooth",bright:2600},{bpm:126,root:62,scale:"major",prog:[0,4,5,3],lead:"square",bright:3600},{bpm:112,root:65,scale:"lydian",prog:[0,5,3,4],lead:"triangle",bright:3400},{bpm:120,root:60,scale:"major",prog:[0,3,4,0],lead:"triangle",bright:3e3}],zh=s=>440*Math.pow(2,(s-69)/12);function Hh(s,t,e,n,i,r){let a=ie.createOscillator(),o=ie.createGain(),l=ie.createBiquadFilter();a.type=s,a.frequency.setValueAtTime(t,e),l.type="lowpass",l.frequency.value=r,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(i,e+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(l),l.connect(o),o.connect(Fi),a.start(e),a.stop(e+n+.05)}function Dy(s,t){let e=ie.createBufferSource();e.buffer=Xl;let n=ie.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let i=ie.createGain();i.gain.setValueAtTime(t,s),i.gain.exponentialRampToValueAtTime(1e-4,s+.05),e.connect(n),n.connect(i),i.connect(Fi),e.start(s),e.stop(s+.06)}function Ny(s){let t=ie.createOscillator(),e=ie.createGain();t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(40,s+.12),e.gain.setValueAtTime(.55,s),e.gain.exponentialRampToValueAtTime(1e-4,s+.16),t.connect(e),e.connect(Fi),t.start(s),t.stop(s+.2)}function lr(s){if(kh(),!ie)return;let t=Rd[s]||Rd[6],e=Ly[t.scale],n=60/t.bpm/4,i=1234+s*77,r=()=>(i=i*1664525+1013904223>>>0,i/4294967296),a=[];for(let l=0;l<4;l++){let c=[];for(let h=0;h<16;h++)c.push(h%4===0||r()<.38?Math.floor(r()*6):-1);a.push(c)}Ui={i:0,next:ie.currentTime+.1};let o=()=>{if(!(!ie||!Ui))for(;Ui.next<ie.currentTime+.18;){let l=Ui.i,c=l%16,h=Math.floor(l/16)%4,u=t.prog[h]||0,f=Ui.next,d=t.root+e[u%e.length]-12;c%4===0&&Ny(f),c%2===0&&Dy(f,c%4===2?.1:.05),(c%4===0||c%8===6)&&Hh("triangle",zh(d-12),f,n*3.2,.4,600),c===0&&[0,2,4].forEach(_=>Hh("sine",zh(t.root+e[(u+_)%e.length]),f,n*15,.07,1400));let m=a[h][c];m>=0&&Hh(t.lead,zh(t.root+12+e[(m+u)%e.length]),f,n*1.8,.11,t.bright),Ui.next+=n,Ui.i++}};Wl=setInterval(o,40),o()}function kh(){Wl&&clearInterval(Wl),Wl=null,Ui=null}function ql(s){Fi&&Fi.gain.setTargetAtTime(s?.08:.22,ie.currentTime,.2)}var ti=null;function Pd(){if(!ie||ti)return;let s=ie.createGain();s.gain.value=1e-4;let t=ie.createBiquadFilter();t.type="lowpass",t.frequency.value=500;let e=ie.createOscillator(),n=ie.createOscillator();e.type="sawtooth",n.type="square",e.frequency.value=60,n.frequency.value=30,e.connect(t),n.connect(t),t.connect(s),s.connect(or),e.start(),n.start(),ti={g:s,f:t,o1:e,o2:n}}function Ld(s,t){if(!ie||!ti)return;let e=ie.currentTime,n=Math.max(0,Math.min(1,s)),i=52+n*150+(t?16:0);ti.o1.frequency.setTargetAtTime(i,e,.08),ti.o2.frequency.setTargetAtTime(i*.5,e,.08),ti.f.frequency.setTargetAtTime(380+n*900+(t?300:0),e,.1),ti.g.gain.setTargetAtTime(.05+n*.07+(t?.04:0),e,.1)}function Gh(){if(!ti)return;let s=ti;ti=null;try{s.g.gain.setTargetAtTime(1e-4,ie.currentTime,.05),setTimeout(()=>{try{s.o1.stop(),s.o2.stop()}catch{}},300)}catch{}}var Yl=class{constructor(){this.ws=null,this.h={},this.offset=0,this.rtt=0,this.best=1/0,this.connected=!1,this.id=null,this.samples=0}now(){return Date.now()+this.offset}on(t,e){this.h[t]=e}connect(){return new Promise((t,e)=>{if(this.connected)return t();let n=location.protocol==="https:"?"wss":"ws",i;try{i=new WebSocket(`${n}://${location.host}/ws`)}catch(a){return e(a)}this.ws=i;let r=setTimeout(()=>{try{i.close()}catch{}e(new Error("timeout"))},8e3);i.onopen=()=>{clearTimeout(r),this.connected=!0;for(let a=0;a<8;a++)setTimeout(()=>this.ping(),a*140);this.pinger=setInterval(()=>this.ping(),2e3),t()},i.onmessage=a=>{let o;try{o=JSON.parse(a.data)}catch{return}if(o.t==="pong")return this.onPong(o);o.t==="joined"&&(this.id=o.id);let l=this.h[o.t];l&&l(o)},i.onclose=()=>{clearTimeout(r);let a=this.connected;this.connected=!1,clearInterval(this.pinger),a&&this.h.close?this.h.close():e(new Error("closed"))},i.onerror=()=>{}})}ping(){this.send({t:"ping",c:Date.now()})}onPong(t){let e=Date.now(),n=e-t.c;this.rtt=this.rtt?this.rtt*.7+n*.3:n;let i=t.s+n/2-e;(n<=this.best*1.25||this.samples<3)&&(this.offset=this.samples<8?n<=this.best?i:this.offset:this.offset*.8+i*.2,this.best=Math.min(this.best,n)),this.samples++,this.samples%10===0&&(this.best=this.best*1.3+2)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}this.connected=!1,clearInterval(this.pinger)}};var Dd=`
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
`;function Nd(s){let t=s.x1-s.x0,e=s.z1-s.z0,n=new Xe({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},rect:{value:new Le(s.x0,s.z0,s.x1,s.z1)},depth:{value:s.surf-s.bottom},sunDir:{value:new z(-.35,.8,-.5).normalize()},skyTop:{value:new Dt("#4aa8ff")},skyHor:{value:new Dt("#e8fbff")},fogC:{value:new Dt("#d9f4ff")},fogN:{value:120},fogF:{value:640},ag:{value:[new z(0,0,0),new z(0,0,0),new z(0,0,0),new z(0,0,0)]}},vertexShader:`uniform float time; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y += sin(w.x*1.3+time*1.6)*0.018 + sin(w.z*1.7-time*1.3)*0.015; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float time; uniform vec4 rect; uniform float depth; uniform vec3 sunDir; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform vec3 ag[4]; varying vec3 vW;
      ${Dd}
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
      }`}),i=new We(t,e,40,40),r=new it(i,n);return r.rotation.x=-Math.PI/2,r.position.set((s.x0+s.x1)/2,s.surf,(s.z0+s.z1)/2),r.renderOrder=3,r.frustumCulled=!1,r.userData.pool=s,r}function Ud(s){let t=s.x1-s.x0,e=s.z1-s.z0,n=new Xe({transparent:!0,depthWrite:!1,blending:Ki,uniforms:{time:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; varying vec3 vW; ${Dd}
      void main(){
        vec2 p = vW.xz*0.55; float t = time*0.5, c = 0.0;
        for(int i=0;i<3;i++){ p += vec2(sin(p.y*1.7+t), cos(p.x*1.4-t))*0.55; c += abs(sin(p.x*2.2+p.y*1.8)); }
        c = pow(1.0 - c/3.0, 5.0) * 1.6;
        gl_FragColor = vec4(vec3(0.55,0.95,1.0)*c*0.55, 1.0);
      }`}),i=new it(new We(t,e),n);return i.rotation.x=-Math.PI/2,i.position.set((s.x0+s.x1)/2,s.bottom+.03,(s.z0+s.z1)/2),i.renderOrder=2,i.frustumCulled=!1,i}var Sa=[{id:0,name:"Sprinter",color:"#0b6b3a",max:27,acc:17,grip:6.5,turn:2.2,hw:.95,hl:2.1},{id:1,name:"Buggy",color:"#2f7bff",max:23,acc:15,grip:8.5,turn:2.5,hw:1.05,hl:1.9},{id:2,name:"Pickup",color:"#ffb21e",max:22,acc:14,grip:7,turn:2,hw:1.05,hl:2.3},{id:3,name:"Bubble",color:"#a855f7",max:24,acc:16,grip:7.5,turn:2.4,hw:.95,hl:1.8}];function Fd(s,t,e,n){return{id:s,x:t,z:e,yaw:n,vx:0,vz:0,speed:0,steer:0,drift:0,driver:-1,bump:0,boost:0,parked:!0}}function Fy(s,t,e,n=1.5){let i=1e9,r=t,a=e,o=1,l=1;for(let h of s.segs){let u=h.bx-h.ax,f=h.bz-h.az,d=u*u+f*f,m=d>0?((t-h.ax)*u+(e-h.az)*f)/d:0;m=m<0?0:m>1?1:m;let _=h.ax+u*m,g=h.az+f*m,p=Math.hypot(t-_,e-g),S=h.hw-n;p-S<i&&(i=p-S,r=_,a=g,o=S,l=p)}for(let h of s.plazas||[]){let u=Math.hypot(t-h.x,e-h.z),f=h.r-n;u-f<i&&(i=u-f,r=h.x,a=h.z,o=f,l=u)}let c=l||1e-6;return{d:i,px:r,pz:a,nx:(t-r)/c,nz:(e-a)/c,lim:o}}function Bd(s,t,e,n,i){let r=Sa[s.id],a=Math.sin(s.yaw),o=Math.cos(s.yaw),l=-o,c=a,h=s.vx*a+s.vz*o,u=s.vx*l+s.vz*c,f=r.max*(s.boost>0?1.3:1);s.boost>0&&(s.boost-=t),e.gas>.01?h+=(h<0?38:r.acc*(1-Math.max(0,h)/(f+2))+1)*e.gas*t:e.gas<-.01?h+=(h>.5?-34:-11)*-e.gas*t:h-=Math.sign(h)*Math.min(Math.abs(h),4.5*t),e.hb&&(h-=Math.sign(h)*Math.min(Math.abs(h),9*t)),h=Math.max(-9,Math.min(f+(s.boost>0?3:0),h)),s.steer+=(e.steer-s.steer)*Math.min(1,t*9);let d=Math.abs(h),m=Math.min(1,d/5)*(1-.38*Math.min(1,d/f));s.yaw-=s.steer*r.turn*m*Math.sign(h||1)*(e.hb?1.35:1)*t;let _=e.hb?1.6:r.grip;u*=Math.exp(-_*t),s.drift=Math.min(1,Math.abs(u)/5);let g=Math.sin(s.yaw),p=Math.cos(s.yaw),S=-p,T=g;s.vx=g*h+S*u,s.vz=p*h+T*u;for(let b of n.boosts||[])Math.abs(s.x-b.x)<b.r&&Math.abs(s.z-b.z)<b.r&&(s.boost=1.4,h<f&&(s.vx+=g*40*t,s.vz+=p*40*t));s.x+=s.vx*t,s.z+=s.vz*t;let x="";{let b=Fy(n,s.x,s.z,1.5);if(b.d>0){s.x=b.px+b.nx*b.lim,s.z=b.pz+b.nz*b.lim;let E=s.vx*b.nx+s.vz*b.nz;E>0&&(s.vx-=(1+.35)*E*b.nx,s.vz-=(1+.35)*E*b.nz,s.vx*=.93,s.vz*=.93,E>5&&(x="bump"),s.bump=Math.max(s.bump,E))}}for(let b of i||[]){if((s.x-b.x)**2+(s.z-b.z)**2>36)continue;let E=Math.sin(b.yaw),N=Math.cos(b.yaw),y=null;for(let M of[1.05,-1.05])for(let P of[1.05,-1.05]){let C=s.x+g*M,R=s.z+p*M,U=b.x+E*P,B=b.z+N*P,k=C-U,H=R-B,q=Math.hypot(k,H),X=2.3-q;X>0&&(!y||X>y.pen)&&(y={pen:X,nx:q>1e-4?k/q:g,nz:q>1e-4?H/q:p,rx:C-s.x,rz:R-s.z})}if(!y)continue;let A=b.driver===-1||b.parked,D=A?1:.6;s.x+=y.nx*y.pen*D,s.z+=y.nz*y.pen*D;let O=(s.vx-b.vx)*y.nx+(s.vz-b.vz)*y.nz;if(O<0){let M=1.55*-O*(A?1:.55),P=y.nx*M,C=y.nz*M;s.vx+=P,s.vz+=C,s.spin=Math.max(-3.2,Math.min(3.2,(s.spin||0)+(y.rz*P-y.rx*C)*.32)),s.vx*=.94,s.vz*=.94,-O>3.5&&(x=-O>7?"crash":"bump",s.crash=Math.max(s.crash||0,-O))}}return s.spin&&(s.yaw+=s.spin*t,s.spin*=Math.exp(-3.6*t),Math.abs(s.spin)<.02&&(s.spin=0)),s.speed=s.vx*g+s.vz*p,x}var pe=(s,t,e,n=.12)=>new rr(s,t,e,3,Math.min(n,s/2-.01,t/2-.01,e/2-.01)),Rn=(s,t={})=>{var e,n,i;return new he({color:s,roughness:(e=t.r)!=null?e:.35,metalness:(n=t.m)!=null?n:.25,emissive:t.e||0,emissiveIntensity:(i=t.ei)!=null?i:1})},Vh=()=>new he({color:"#9fd8ff",roughness:.05,metalness:.4,transparent:!0,opacity:.55});function Od(s){let t=Sa[s],e=new ne,n=Rn("#1b1b22",{r:.8,m:0}),i=Rn("#e8eaf2",{r:.25,m:.8}),r=Rn("#23252e",{r:.6}),a=(b,E,N,y,A,D=0,O=0,M=0)=>{let P=new it(b,E);return P.position.set(N,y,A),P.rotation.set(D,O,M),P.castShadow=!0,P.receiveShadow=!0,e.add(P),P},o=s===0?new he({map:Dh("pk"),roughness:.3,metalness:.15}):Rn(t.color,{r:.28,m:.35}),l=Rn("#ffffff",{r:.3,m:.1}),c=Rn("#fff6c8",{e:"#fff1a8",ei:1.4}),h=Rn("#ff3030",{e:"#ff1a1a",ei:1.2}),u=[],f=[],d=.46,m=1,_=1.35,g=-1.3,p={y:.55,z:-.15};if(s===0)d=.44,m=1.02,_=1.45,g=-1.35,p={y:.5,z:-.2},a(pe(1.9,.5,4.3,.22),o,0,.55,0),a(pe(1.7,.34,1.5,.2),o,0,.78,1.35,-.12),a(pe(1.7,.4,1,.2),o,0,.86,-1.6),a(pe(1.5,.5,.12,.05),Vh(),0,1.02,.78,-.55),a(pe(.12,.1,1.5,.04),r,.95,1.16,-1.82),a(pe(.12,.1,1.5,.04),r,-.95,1.16,-1.82),a(pe(2,.09,.45,.04),o,0,1.28,-2),a(pe(.1,.4,.3,.03),r,.7,1.08,-1.95),a(pe(.1,.4,.3,.03),r,-.7,1.08,-1.95),a(pe(.4,.2,.1,.04),c,.65,.68,2.12),a(pe(.4,.2,.1,.04),c,-.65,.68,2.12),a(pe(.45,.14,.1,.04),h,.65,.78,-2.17),a(pe(.45,.14,.1,.04),h,-.65,.78,-2.17);else if(s===1){d=.62,m=1.18,_=1.3,g=-1.25,p={y:.62,z:-.1},a(pe(1.7,.4,3.8,.16),o,0,.62,0),a(pe(1.5,.3,1.2,.14),o,0,.9,1.4),a(pe(1.3,.35,.9,.12),Rn("#ffd23f",{r:.4}),0,.95,-1.35);for(let b of[-1,1])a(new Yt(.06,.06,1.7,8),r,b*.78,1.5,-.1,.12,0,0),a(new Yt(.06,.06,1.6,8),r,b*.78,1,.7,.9,0,0),a(new Yt(.06,.06,1.7,8),r,b*.78,1.5,-.1,Math.PI/2,0,0);a(new Yt(.06,.06,1.6,8),r,0,2,-.1,0,0,Math.PI/2),a(new be(.2,12,8),c,.55,.98,2),a(new be(.2,12,8),c,-.55,.98,2),a(pe(.4,.12,.1,.04),h,.5,.8,-1.95),a(pe(.4,.12,.1,.04),h,-.5,.8,-1.95)}else if(s===2){d=.55,m=1.1,_=1.55,g=-1.5,p={y:.78,z:.55},a(pe(2,.55,4.7,.2),o,0,.75,0),a(pe(1.9,.75,1.5,.18),o,0,1.28,.55),a(pe(1.5,.45,.1,.05),Vh(),0,1.55,1.3,-.35),a(pe(1.8,.1,1.9,.05),r,0,1.1,-1.35);for(let b of[-1,1])a(pe(.1,.5,1.9,.04),o,b*.97,1.35,-1.35);a(pe(1.8,.5,.1,.04),o,0,1.35,-2.28),a(pe(1.8,.1,.1,.04),Rn("#c8ccd8",{m:.8,r:.2}),0,.75,2.4),a(pe(.1,.5,.1,.03),Rn("#c8ccd8",{m:.8,r:.2}),.6,.85,2.38),a(pe(.1,.5,.1,.03),Rn("#c8ccd8",{m:.8,r:.2}),-.6,.85,2.38),a(pe(.35,.22,.1,.04),c,.7,.98,2.36),a(pe(.35,.22,.1,.04),c,-.7,.98,2.36),a(pe(.3,.2,.1,.04),h,.8,1,-2.36),a(pe(.3,.2,.1,.04),h,-.8,1,-2.36)}else{d=.42,m=.98,_=1.15,g=-1.1,p={y:.5,z:-.05},a(new be(1.15,24,16),o,0,.95,-.05).scale.set(.9,.62,1.55),a(pe(1.6,.14,3.2,.06),l,0,.42,0);for(let E of[-1,1])a(new be(.27,14,10),c,E*.62,.95,1.72),a(new be(.2,12,8),h,E*.55,.85,-1.78),a(new Yt(.09,.09,.5,8),r,E*.42,1.55,1.1,.45,0,0);a(pe(1.5,.35,.1,.04),Vh(),0,1.22,.85,-.7),a(pe(.5,.05,2.3,.02),Rn("#ff6bd5",{r:.4}),.15,1.52,-.75,0,0,.08)}let S=new Yt(d,d,.42,20),T=new Yt(d*.56,d*.56,.44,12);for(let[b,E,N]of[[1,_,1],[-1,_,1],[1,g,0],[-1,g,0]]){let y=new ne;y.position.set(b*m,d,E),e.add(y);let A=new ne;y.add(A);let D=new it(S,n);D.rotation.z=Math.PI/2,D.castShadow=!0,A.add(D);let O=new it(T,i);O.rotation.z=Math.PI/2,A.add(O),u.push(A),N&&f.push(y)}let x=new it(new Yi(2.6,20),new Ce({color:0,transparent:!0,opacity:.22,depthWrite:!1}));return x.rotation.x=-Math.PI/2,x.position.y=.04,x.scale.set(.9,1.25,1),e.add(x),e.userData={wheels:u,pivots:f,seat:p,spec:t},e}function zd(s,t,e){let n=s.userData;for(let i of n.wheels)i.rotation.x+=t.speed/.5*e;for(let i of n.pivots)i.rotation.y=-t.steer*.5;s.rotation.z=oh.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/20)*.07,-.08,.08)}var ht=s=>document.getElementById(s),ei=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||(typeof navigator!="undefined"&&navigator.maxTouchPoints||0)>0,He={x:0,y:0,jump:!1},ln=(s,t,e)=>s<t?t:s>e?e:s,as=(s,t,e)=>s+(t-s)*e,Jh=(s,t,e)=>{let n=(t-s)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),s+n*e},Zl=s=>{let t=Math.floor(s/60),e=s-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},Wh=s=>s===1?"1st":s===2?"2nd":s===3?"3rd":s+"th",By=["\u{1F947}","\u{1F948}","\u{1F949}"],Bi=ht("c"),gn;try{gn=new da({canvas:Bi,antialias:!0,powerPreference:"high-performance"})}catch(s){throw document.querySelector("#loader p").textContent="WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.",s}gn.outputColorSpace=Te;gn.toneMapping=Js;gn.toneMappingExposure=1.05;gn.shadowMap.enabled=!0;gn.shadowMap.type=Vo;var cr=Math.min(window.devicePixelRatio||1,ei?1.5:2),se={dpr:ei?Math.min(cr,1):Math.min(cr,1.5),t:0,frames:0,good:0,shadows:!0,warm:3};function os(){qe&&(gn.setPixelRatio(se.dpr),gn.setSize(window.innerWidth,window.innerHeight,!1),qe.camera.aspect=window.innerWidth/window.innerHeight,qe.camera.updateProjectionMatrix(),Q&&(Q.camera.aspect=window.innerWidth/window.innerHeight,Q.camera.updateProjectionMatrix(),Q.particles.setScale(gn.domElement.height)),qe.particles.setScale(gn.domElement.height))}function Oy(s){if(se.low)return;if(se.warm>0){se.warm-=s;return}if(se.t+=s,se.frames++,se.t<1.2)return;let t=se.frames/se.t;se.t=0,se.frames=0,t<40?(se.good=0,se.dpr>.7?(se.dpr=Math.max(.7,se.dpr-.2),os()):se.shadows&&t<30&&(se.shadows=!1,Q&&Q.setShadows(!1))):t>58?++se.good>=3&&se.dpr<Math.min(cr,1.75)&&(se.dpr=Math.min(Math.min(cr,1.75),se.dpr+.1),se.good=0,os()):se.good=0}try{let s=localStorage.getItem("ph_low");se.low=s==="1",s===null&&ei&&((navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<=2)&&(se.low=!0)}catch{se.low=!1}se.low&&(se.dpr=.75,se.shadows=!1);function zy(){se.low?(se.dpr=.75,se.shadows=!1):(se.dpr=ei?Math.min(cr,1):Math.min(cr,1.5),se.shadows=!0,se.warm=3),Q&&Q.setShadows(se.shadows),os()}var Hy=new ns(gn),Vd=Hy.fromScene(new pa,.04).texture,gt={screen:"title",mode:"single",name:localStorage.getItem("ph_name")||"",char:+(localStorage.getItem("ph_char")||0),level:0,net:null,room:null,myId:null,pendingJoin:null,muted:!1},Q=null,qe=null,qh=[],Wd=s=>+(localStorage.getItem("ph_best_"+s)||0),Yh=class{constructor(){let t=Ma.candy;this.scene=new ci,this.scene.fog=new Fs(t.fog,70,420),this.scene.environment=Vd,this.scene.environmentIntensity=.7,this.camera=new Ye(42,1,.1,1500),this.sky=Bh(t),this.scene.add(this.sky),this.water=Oh(t,-3),this.scene.add(this.water),this.scene.add(new $i(t.hemiSky,t.hemiGround,1));let e=new Ji(t.sun,2.4);e.position.set(-10,18,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,n.near=1,n.far=60,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e),this.sun=e;let i=u=>new he({color:u,roughness:.35}),r=new it(new Yt(15,14,2,48),i("#ff9ccf"));r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let a=new it(new Yt(13,13,.1,48),i("#fff3fb"));a.position.y=.02,a.receiveShadow=!0,this.scene.add(a),this.tops=[.8,1.25,1.25,.8],[[-4.5,.8,"#7be8a0"],[-1.5,1.25,"#5fc2ff"],[1.5,1.25,"#ffd23f"],[4.5,.8,"#ff9ccf"]].forEach(([u,f,d])=>{let m=new it(new Yt(1.1,1.25,f,32),i(d));m.position.set(u,f/2,-.5),m.castShadow=m.receiveShadow=!0,this.scene.add(m)}),this.slotPos=[[-4.5,.8,-.5],[-1.5,1.25,-.5],[1.5,1.25,-.5],[4.5,.8,-.5]];let o=Vl("HARIS"),l=Vl("HARIS","MADE THIS GAME"),c=new it(new We(11,4.3),new Ce({map:o,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));c.rotation.x=-Math.PI/2,c.position.set(0,.1,4.4),this.scene.add(c);let h=new it(new We(26,13),new Ce({map:l,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}));h.position.set(0,9.5,-24),this.scene.add(h),this.banner=h,this.chars=[0,1,2,3].map(u=>{let f=new ss(u);return this.scene.add(f.group),{c:f,tag:null,name:null,show:!0,scale:1,hop:0}}),this.ambient=new va("candy",160),this.scene.add(this.ambient.points),this.particles=new ya(260),this.scene.add(this.particles.points),this.mode="title",this.sel=0,this.t=0,this.lobby=[]}setName(t,e){let n=this.chars[t];n.name!==e&&(n.tag&&(n.c.group.remove(n.tag),n.tag.material.map.dispose(),n.tag.material.dispose(),n.tag=null),n.name=e,e&&(n.tag=kl(e,fi[t].color),n.tag.position.set(0,n.c.height+.55,0),n.c.group.add(n.tag)))}setTitle(t=-1){this.mode="title",this.sel=t,this.lobby=[],this.chars.forEach((e,n)=>{e.show=!0,this.setName(n,null)})}setLobby(t){this.mode="lobby",this.lobby=t,this.chars.forEach((e,n)=>{let i=t.findIndex(r=>r.char===n);e.show=i>=0,e.slot=i,this.setName(n,i>=0?t[i].name:null)})}burst(t){let e=this.slotPos[this.slotOf(t)];this.particles.emit(e[0],e[1]+1.4,e[2]+.5,40,{rainbow:!0,speed:4,up:6,life:1,size:.35,gravity:7})}slotOf(t){return this.mode==="lobby"?[1,2,0,3][Math.max(0,this.chars[t].slot)%4]:t}update(t){this.t+=t;let e=this.camera;e.position.set(Math.sin(this.t*.25)*1.8,2.9+Math.sin(this.t*.4)*.15,10.5),e.lookAt(0,1.9,0),this.sky.position.copy(e.position),this.water.material.uniforms.time.value=this.t,this.chars.forEach((n,i)=>{if(n.c.group.visible=n.show,!n.show)return;let r=this.slotPos[this.slotOf(i)],a=this.mode==="title"?Math.floor(this.t/3)%4===i:this.mode!=="lobby"&&this.sel===i;n.scale=as(n.scale,a?1.18:1,Math.min(1,t*8)),n.c.group.scale.setScalar(n.scale),n.hop=a?Math.abs(Math.sin(this.t*5))*.25:as(n.hop,0,Math.min(1,t*8)),n.c.group.position.set(r[0],r[1]+n.hop,r[2]),n.c.group.rotation.y=Jh(n.c.group.rotation.y,this.mode==="lobby"?Math.sin(this.t*.7+i)*.3:Math.sin(this.t*.6+i*2)*.35,Math.min(1,t*4)),n.c.update(t,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:a||this.mode==="lobby"&&Math.floor(this.t*.5+i)%2===0}),n.tag&&n.tag.scale.set(2.4,.6,1)}),this.ambient.update(this.t,e.position),this.particles.update(t)}},Ea=class{constructor(t,e){this.info=t,this.id=t.id,this.name=t.name,this.model=new ss(t.char),e.add(this.model.group),this.tag=kl(t.name,fi[t.char].color),this.tag.position.set(0,this.model.height+.7,0),this.model.group.add(this.tag),this.snaps=[],this.x=0,this.y=-50,this.z=0,this.yaw=Math.PI,this.speed=0,this.flags=0,this.vy=0,this.vx=0,this.vz=0,this.sw=0,this.ds=[],this.dMin=0,this.jit=0,this.rs=0,this.has=!1,this.finished=!1,this.lastLanded=!1}push(t){t.rs!==this.rs&&(this.snaps.length=0,this.rs=t.rs);let e=this.snaps[this.snaps.length-1];if(e&&t.ts<=e.ts)return;let n=Date.now(),i=n-t.ts;for(this.ds.push([n,i]);this.ds.length>1&&n-this.ds[0][0]>4e3;)this.ds.shift();let r=1/0;for(let a of this.ds)a[1]<r&&(r=a[1]);this.dMin=r,this.jit=this.jit*.92+Math.abs(i-r)*.08,this.snaps.push(t),this.snaps.length>40&&this.snaps.shift()}renderTime(){return Date.now()-this.dMin-ln(70+this.jit*2.2,70,260)}update(t,e){let n=this.snaps;if(!n.length)return;for(;n.length>2&&n[1].ts<=t;)n.shift();let i=n[0],r=n[1]||n[0],a=0;if(n.length>1){let d=Math.max(1,r.ts-i.ts);a=ln((t-i.ts)/d,0,1+220/d)}let o=as(i.x,r.x,a),l=as(i.y,r.y,a),c=as(i.z,r.z,a);if(!this.has)this.x=o,this.y=l,this.z=c,this.has=!0;else{let d=1-Math.exp(-28*e),m=this.x,_=this.z;this.x+=(o-this.x)*d,this.y+=(l-this.y)*d,this.z+=(c-this.z)*d,e>0&&(this.vx+=((this.x-m)/e-this.vx)*.25,this.vz+=((this.z-_)/e-this.vz)*.25)}this.yaw=Jh(this.yaw,r.r,1-Math.exp(-16*e)),this.speed=as(i.sp,r.sp,ln(a,0,1)),this.flags=r.a,this.vy=n.length>1?(r.y-i.y)/Math.max(.02,(r.ts-i.ts)/1e3):0;let h=this.model.group;h.position.set(this.x,this.y,this.z),h.rotation.y=this.yaw;let u=!!(this.flags&1),f=u&&!this.lastLanded;this.lastLanded=u,this.sw=this.flags&16?Math.min(1,(this.sw||.001)+e/.42):0,this.model.update(e,{speed:this.speed,grounded:u,vy:this.vy,stun:this.flags&2?1:0,dive:this.flags&4?1:0,celebrate:!!(this.flags&8),swing:this.sw,shield:!!(this.flags&32),leader:!!this.leader,mega:!!(this.flags&128),landed:f})}dispose(t){t.remove(this.model.group),this.tag.material.map.dispose(),this.tag.material.dispose(),this.model.dispose()}},Fe=new Set,pi={jump:!1,dive:!1},Jl=class s{constructor(t,e,n,i){this.level=t,this.meta=ma[t],this.multi=i.multi,this.localId=n,this.players=e,this.t0=i.t0,this.phase="countdown",this.finished=!1,this.over=!1,this.finishTime=0,this.finishedMap=new Map,this.camYaw=0,this.camPitch=.34,this.camDist=8.2,this.camPos=new z,this.camTarget=new z,this.camInit=!1,this.sendT=0,this.rs=0,this.cpIdx=0,this.cpCur=null,this.stepDist=0,this.lastCount=99,this.hudT=0,this.hintT=0,this.warnSec=-1,this.levelTime=-4,this.batCd=0,this.swingT=0,this.batPending=!1,this.swingMega=!1,this.fx={turbo:0,jump:0,shield:0,mega:0},this.fxSig="";let r=Ma[this.meta.key],a=this.scene=new ci;a.background=new Dt(r.fog),a.fog=new Fs(r.fog,r.fogNear,r.fogFar),a.environment=Vd,a.environmentIntensity=r.env,this.camera=new Ye(62,window.innerWidth/window.innerHeight,.1,1800);let{world:o,info:l}=_d(t,!1,Td());this.world=o,this.info=l,a.add(o.group),o.onEvent=null,this.sky=Bh(r),a.add(this.sky),this.water=Oh(r,o.waterY),a.add(this.water),this.scenery=Ad(a,this.meta.key,l,o),this.poolMeshes=[];for(let d of o.pools){let m=Nd(d),_=m.material.uniforms;_.fogC.value.set(r.fog),_.fogN.value=r.fogNear,_.fogF.value=r.fogFar,_.skyTop.value.set(r.top),_.skyHor.value.set(r.horizon);let g=Ud(d);a.add(m,g),this.poolMeshes.push({wm:m,cm:g,pl:d})}if(this.cars=[],this.drive=null,this.lookT=0,this.nearCar=null,this.hornCd=0,this.skidT=0,l.cars){for(let d of l.cars){let m=Od(d.id);m.rotation.order="YXZ",m.position.set(d.x,0,d.z),m.rotation.y=d.yaw,a.add(m),this.cars.push({st:Fd(d.id,d.x,d.z,d.yaw),mesh:m})}i.multi&&gt.pendingCars&&(this.onCars(gt.pendingCars),gt.pendingCars=null)}a.add(new $i(r.hemiSky,r.hemiGround,r.hemiI));let c=this.sun=new Ji(r.sun,r.sunI);this.sunDir=new z(...r.sunPos).normalize().multiplyScalar(90),c.castShadow=se.shadows,c.shadow.mapSize.set(ei?1024:2048,ei?1024:2048);let h=c.shadow.camera;h.left=-40,h.right=40,h.top=40,h.bottom=-40,h.near=5,h.far=220,c.shadow.bias=-3e-4,c.shadow.normalBias=.04,a.add(c,c.target),this.particles=new ya(600),a.add(this.particles.points),this.particles.setScale(gn.domElement.height),this.ambient=new va(this.meta.key,320),a.add(this.ambient.points),this.remotes=new Map;let u=e.findIndex(d=>d.id===n);this.slot=Math.max(0,u);let f=e[this.slot]||{name:"Player",char:0};this.me={body:yd(),model:new ss(f.char),name:f.name,char:f.char},a.add(this.me.model.group),this.me.model.group.rotation.order="YXZ",this.me.tag=kl(f.name,fi[f.char].color),this.me.tag.position.set(0,this.me.model.height+.7,0),this.me.model.group.add(this.me.tag),e.forEach((d,m)=>{d.id!==n&&this.remotes.set(d.id,new Ea(d,a))}),this.spawn(this.slot),this.buildProgress(),this.buildBoxes(),document.body.classList.add("in-race"),ht("hud-level").textContent=this.meta.name,ht("hud").classList.remove("hidden"),ht("hud-hint").classList.remove("fade"),this.hintT=8,this.setShadows(se.shadows),lr(t),ql(!1),this.pos=this.me.body}setShadows(t){this.sun.castShadow=t}spawnPoint(t){return[(t-1.5)*3.6,0,this.info.spawn.z]}spawn(t){let[e,n,i]=this.spawnPoint(t);Hl(this.me.body,e,n+.02,i,Math.PI),this.cpCur=null,this.cpIdx=0}buildProgress(){let t=document.querySelector("#hud-progress .track");t.querySelectorAll(".dot").forEach(n=>n.remove()),this.dots=new Map;let e=(n,i)=>{let r=document.createElement("div");r.className="dot"+(i?" me":""),r.style.background=fi[n.char].color,r.innerHTML=`<em>${n.name.replace(/[<>&]/g,"")}</em>`,t.appendChild(r),this.dots.set(n.id,r)};this.players.forEach(n=>e(n,n.id===this.localId))}now(){return this.multi?gt.net.now():performance.now()}look(t,e){this.camYaw-=t*.0024,this.camPitch=ln(this.camPitch+e*.0021,-.15,1.2),this.lookT=1.6}update(t){let e=this.me.body,n=this.world;this.levelTime=(this.now()-this.t0)/1e3;let i=this.levelTime;if(n.update(i,t),n.carry(e),e.yawOff&&(e.yaw+=e.yawOff,e.yawOff=0),i<0){let x=Math.ceil(-i);x!==this.lastCount&&x<=3&&(this.lastCount=x,this.count(String(x)),kt.tick())}else this.phase==="countdown"&&(this.phase="race",this.count("GO!"),kt.go(),this.lastCount=0,this.multi&&setTimeout(()=>{Q===this&&!this.over&&this.toast(ei?"Tap BAT to bonk rivals!":"Press B or click to swing the BAT!")},1400),this.cars.length&&setTimeout(()=>{Q===this&&!this.over&&!this.drive&&this.toast("\u{1F697} Follow the CAR STATION signs to drive!")},this.multi?4200:1600));let r=i>=0&&!this.over,a=0,o=0;(Fe.has("KeyW")||Fe.has("ArrowUp"))&&a++,(Fe.has("KeyS")||Fe.has("ArrowDown"))&&a--,(Fe.has("KeyD")||Fe.has("ArrowRight"))&&o++,(Fe.has("KeyA")||Fe.has("ArrowLeft"))&&o--,Fe.has("KeyQ")&&(this.camYaw+=1.9*t),Fe.has("KeyE")&&(this.camYaw-=1.9*t),(He.x||He.y)&&(o+=He.x,a+=He.y);let l=Math.sin(this.camYaw),c=Math.cos(this.camYaw),h=-l*a+c*o,u=-c*a-l*o,f=Math.hypot(h,u);f>1&&(h/=f,u/=f);let d={mx:r?h:0,mz:r?u:0,jumpPressed:r&&pi.jump,jumpHeld:r&&(Fe.has("Space")||He.jump),divePressed:r&&pi.dive};pi.jump=!1,pi.dive=!1;let m=Math.max(1,Math.ceil(t/(1/90))),_=t/m,g=!1;if(this.drive)this.updateDrive(t,r),e.events.length=0;else for(let x=0;x<m;x++)vd(n,e,_,d),d.jumpPressed=!1,d.divePressed=!1,e.events.length&&(g=this.events(e)||g,e.events.length=0);if(r&&!this.drive){let x=n.checkHazards(e,i);x&&_a(e,x.nx,x.nz,x.pow)&&(kt.hit(),this.particles.emit(e.x,e.y+.9,e.z,26,{color:"#ffffff",speed:5,up:3,life:.5,size:.3}),this.particles.emit(e.x,e.y+.9,e.z,14,{color:"#ffd23f",speed:7,up:4,life:.4,size:.25}))}this.drive||this.updateBat(t,e),this.updatePowerups(t,e),this.drive||(this.softCollide(e),this.softCars(e,r)),this.checkpoints(e),!this.finished&&i>=0&&e.z<this.info.finishZ&&e.y>this.info.finishY-3&&Math.abs(e.x)<16&&this.onLocalFinish(),e.grounded&&!e.stun&&!this.drive&&!(e.swim>.3)&&(this.stepDist+=Math.hypot(e.vx,e.vz)*t,this.stepDist>2.4&&(this.stepDist=0,Math.hypot(e.vx,e.vz)>3&&(kt.step(),this.particles.emit(e.x,e.y+.05,e.z,2,{color:"#ffffff",speed:.8,up:.8,life:.35,size:.22,gravity:1}))));let p=this.me.model,S=p.group,T=e.swim>.3?ln((e.swim-.3)/.4,0,1):0;if(this.drive?this.seatModel(S,this.drive):(S.position.set(e.x,e.y,e.z),S.rotation.y=e.yaw,S.rotation.x=T*.55*ln(Math.hypot(e.vx,e.vz)/3,.25,1),S.scale.setScalar(1)),p.update(t,{speed:this.drive?0:Math.hypot(e.vx,e.vz),grounded:this.drive||T>0?!0:e.grounded,vy:this.drive?0:e.vy,stun:this.drive?0:e.stun,dive:this.drive?0:e.dive,celebrate:this.finished||this.over&&this.winnerSelf,swing:this.swingT,shield:e.shield>0,leader:this.leaderId===this.localId,mega:this.swingMega&&this.swingT>0,landed:g}),this.tagScale(this.me.tag,S.position,.85),this.multi){this.leaderId=this.findLeader();for(let x of this.remotes.values())x.leader=x.id===this.leaderId,x.update(x.snaps.length?x.renderTime():0,t),this.tagScale(x.tag,x.model.group.position,1),x.flags&64&&Math.random()<.6&&this.particles.emit(x.x,x.y+.3,x.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});if(this.sendT+=t,this.sendT>=.033){this.sendT=0;let x=(e.grounded?1:0)|(e.stun>0?2:0)|(e.dive>0?4:0)|(this.finished?8:0)|(this.swingT>0?16:0)|(e.shield>0?32:0)|(this.fx.turbo>0?64:0)|(this.swingMega&&this.swingT>0?128:0)|(this.drive?256|this.drive.st.id<<9:0)|(e.swim>.4&&!this.drive?2048:0);gt.net.send({t:"s",x:+e.x.toFixed(2),y:+e.y.toFixed(2),z:+e.z.toFixed(2),r:+e.yaw.toFixed(2),a:x,sp:+Math.min(99,Math.hypot(e.vx,e.vz)).toFixed(1),ts:Math.round(gt.net.now()),rs:this.rs})}}this.updateCars(t,r),this.updateCamera(t),this.updateLights(),this.water.material.uniforms.time.value=performance.now()/1e3,this.water.position.x=this.camera.position.x,this.water.position.z=this.camera.position.z,this.sky.position.copy(this.camera.position),this.scenery.update(i,this.camera.position),this.ambient.update(performance.now()/1e3,this.camera.position),this.particles.update(t),this.hud(t)}events(t){let e=!1;for(let n of t.events)if(n==="jump")kt.jump(),this.particles.emit(t.x,t.y+.05,t.z,5,{color:"#ffffff",speed:1.5,up:1,life:.35,size:.25,gravity:2});else if(n==="land")kt.land(t.landSpeed),e=!0,this.particles.emit(t.x,t.y+.05,t.z,Math.min(14,5+t.landSpeed*.4),{color:"#ffffff",speed:2.4,up:1.4,life:.45,size:.3,gravity:3});else if(n==="bounce")kt.bounce(),e=!0,this.particles.emit(t.x,t.y+.1,t.z,18,{rainbow:!0,speed:3,up:2,life:.6,size:.3});else if(n==="dive")kt.dive();else if(n==="splash"){kt.splash();let i=t.swim>0&&t.waterSurf,r=Ma[this.meta.key],a=i?"#ffffff":r.water==="lava"?"#ff9a2a":r.water==="grid"?"#d11cff":"#bfeaff";this.particles.emit(t.x,(i?t.waterSurf:this.world.waterY)+.2,t.z,i?34:40,{color:a,speed:4,up:i?6:9,life:.9,size:.45,gravity:16,spread:.6})}else n==="stroke"?(kt.jump(),this.particles.emit(t.x,t.waterSurf+.1,t.z,10,{color:"#ffffff",speed:2,up:3,life:.6,size:.3,gravity:10})):n==="fell"&&this.onFell();return e}seatModel(t,e){let n=e.st,i=e.mesh.userData.seat;t.position.set(n.x+Math.sin(n.yaw)*i.z,i.y,n.z+Math.cos(n.yaw)*i.z),t.rotation.y=n.yaw,t.rotation.x=0,t.scale.setScalar(.8)}nearestFreeCar(t){if(t.stun>0||t.y>1.5||t.swim>.3)return null;let e=null,n=4.6;for(let i of this.cars){if(i.st.driver!==-1&&i!==this.drive)continue;let r=Math.hypot(t.x-i.st.x,t.z-i.st.z);r<n&&(n=r,e=i)}return e}toggleCar(){if(this.over||this.finished||this.levelTime<0||this.menuOpen||!this.cars.length)return;let t=this.me.body;if(this.drive){let e=this.drive,n=e.st;if(Math.abs(n.speed)>5){this.toast("Slow down to get out!");return}let i=Math.cos(n.yaw),r=-Math.sin(n.yaw);Hl(t,n.x+i*2.4,.05,n.z+r*2.4,n.yaw),t.hitCd=.3,n.vx=n.vz=n.speed=0,n.driver=-1,n.parked=!0,this.drive=null,document.body.classList.remove("driving"),Gh(),kt.door(),this.g_g(this.me.model.group),this.multi&&gt.net.send({t:"carpark",c:n.id,x:+n.x.toFixed(2),z:+n.z.toFixed(2),r:+n.yaw.toFixed(3)}),this.camYaw=n.yaw+Math.PI,this.camInit=!1}else{let e=this.nearestFreeCar(t);if(!e)return;this.drive=e,e.st.driver=this.localId,e.st.parked=!1,t.vx=t.vz=t.vy=0,t.grounded=!0,document.body.classList.add("driving"),document.body.classList.remove("near-car"),Pd(),kt.door(),kt.vroom(),this.camPitch=.3,this.camYaw=e.st.yaw+Math.PI,this.toast(Sa[e.st.id].name.toUpperCase()+"!  "+(ei?"use the joystick to drive, tap the door to get out":"W/S drive \u2022 A/D steer \u2022 C get out"))}}g_g(t){t.scale.setScalar(1),t.rotation.x=0}updateDrive(t,e){let n=this.drive,i=n.st,r=this.me.body,a=0,o=0,l=!1;if(e&&((Fe.has("KeyW")||Fe.has("ArrowUp"))&&a++,(Fe.has("KeyS")||Fe.has("ArrowDown"))&&a--,(Fe.has("KeyD")||Fe.has("ArrowRight"))&&o++,(Fe.has("KeyA")||Fe.has("ArrowLeft"))&&o--,l=Fe.has("Space"),He.x||He.y)){let f=Math.sin(this.camYaw),d=Math.cos(this.camYaw),m=-f*He.y+d*He.x,_=-d*He.y-f*He.x,g=Math.min(1,Math.hypot(m,_));if(g>.12){let p=Math.hypot(m,_)||1;m/=p,_/=p;let S=m*Math.sin(i.yaw)+_*Math.cos(i.yaw),T=-m*Math.cos(i.yaw)+_*Math.sin(i.yaw);S>-.35?(a+=Math.min(1,g*1.25)*(.45+.55*Math.max(0,S)),o+=S<.2?Math.sign(T||1):Math.max(-1,Math.min(1,T*2.4))):(a-=Math.min(1,g*1.25),o+=Math.max(-1,Math.min(1,T*2)))}}let c=this.cars.filter(f=>f!==n).map(f=>f.st),h="",u={gas:ln(a,-1,1),steer:ln(o,-1,1),hb:l};for(let f=0;f<2;f++)h=Bd(i,t/2,u,this.info.track,c)||h;if(h==="bump"&&(kt.land(18),this.particles.emit(i.x,.8,i.z,12,{color:"#ffd23f",speed:4,up:3,life:.4,size:.25}),this.shake=Math.max(this.shake||0,.25)),h==="crash"&&(kt.land(34),this.particles.emit(i.x,.9,i.z,26,{color:"#ffb347",speed:7,up:5,life:.6,size:.35}),this.shake=Math.max(this.shake||0,Math.min(1,.4+(i.crash||0)*.04)),i.crash=0),r.x=i.x,r.y=0,r.z=i.z,r.vx=i.vx,r.vz=i.vz,r.vy=0,r.grounded=!0,r.ground=null,r.yaw=i.yaw,r.stun=0,Ld(Math.abs(i.speed)/27,a>0),this.hornCd-=t,this.skidT-=t,i.drift>.55&&Math.abs(i.speed)>8){this.skidT<=0&&(this.skidT=.25,kt.skid());for(let f of[-1,1])this.particles.emit(i.x-Math.sin(i.yaw)*1.5+Math.cos(i.yaw)*f*.9,.25,i.z-Math.cos(i.yaw)*1.5-Math.sin(i.yaw)*f*.9,1,{color:"#e8e8e8",speed:1.2,up:1.2,life:.5,size:.5,gravity:-.5})}i.boost>0&&Math.random()<.8&&this.particles.emit(i.x-Math.sin(i.yaw)*2.2,.5,i.z-Math.cos(i.yaw)*2.2,1,{color:"#ffb347",speed:2,up:1,life:.35,size:.4})}honk(){this.drive&&this.hornCd<=0&&(this.hornCd=.4,kt.honk())}onCars(t){for(let e of Object.keys(t||{})){let n=this.cars[+e],i=t[e];!n||!i||n===this.drive||(n.st.x=+i.x,n.st.z=+i.z,n.st.yaw=+i.r,n.mesh.position.set(n.st.x,0,n.st.z),n.mesh.rotation.y=n.st.yaw)}}softCars(t,e){if(!(!e||this.finished))for(let n of this.cars){if(n===this.drive)continue;let i=n.st,r=Sa[i.id],a=t.x-i.x,o=t.z-i.z;if(a*a+o*o>40||t.y>1.5)continue;let l=Math.sin(i.yaw),c=Math.cos(i.yaw),h=a*l+o*c,u=-a*c+o*l,f=r.hl+.45,d=r.hw+.45;if(Math.abs(h)>=f||Math.abs(u)>=d)continue;if(Math.abs(i.speed)>6&&t.hitCd<=0){let g=Math.sign(i.speed)||1,p=l*g+a*0,S=c*g;p+=-c*Math.sign(u||1)*.5,S+=l*Math.sign(u||1)*.5;let T=Math.hypot(p,S)||1;if(_a(t,p/T,S/T,15)){this.bonked("HIT BY A CAR!","",t);continue}}let m=f-Math.abs(h),_=d-Math.abs(u);if(m<_){let g=Math.sign(h||1)*m;t.x+=l*g,t.z+=c*g}else{let g=Math.sign(u||1)*_;t.x+=-c*g,t.z+=l*g}}}updateCars(t,e){var o;this.lastDt=t;let n=this.me.body,i=performance.now()/1e3;for(let l of this.cars)l!==this.drive&&(l.st.driver=-1,l.st.speed=0,l.st.vx=l.st.vz=0);let r=[];for(let l of this.remotes.values()){let c=l.model.group;if(c.rotation.order="YXZ",!!l.has)if(l.flags&256){let h=this.cars[l.flags>>9&3];if(h&&h!==this.drive){let u=h.st,f=(l.yaw-((o=u._py)!=null?o:l.yaw)+Math.PI*3)%(Math.PI*2)-Math.PI;u.driver=l.id,u.parked=!1,u.x=l.x,u.z=l.z,u.speed=l.speed,u.vx=Math.sin(l.yaw)*l.speed,u.vz=Math.cos(l.yaw)*l.speed,u._py=l.yaw,u.steer+=(ln(-f/Math.max(t,.008)*.45,-1,1)-u.steer)*Math.min(1,t*8),u.yaw=l.yaw,this.seatModel(c,h),this.tagScale(l.tag,c.position,1)}}else c.scale.setScalar(1),c.rotation.x=l.flags&2048?.55:0,l.flags&2048&&r.push([l.x,l.z,.35+Math.min(1,l.speed/8)*.65])}n.swim>.3&&!this.drive&&r.push([n.x,n.z,.35+Math.min(1,Math.hypot(n.vx,n.vz)/8)*.65]),n.swim>.3&&!this.drive&&Math.hypot(n.vx,n.vz)>2&&Math.random()<.5&&this.particles.emit(n.x,n.waterSurf+.08,n.z,1,{color:"#ffffff",speed:1.2,up:1.6,life:.5,size:.28,gravity:6,spread:.5});for(let l of this.poolMeshes){let c=l.wm.material.uniforms;c.time.value=i,l.cm.material.uniforms.time.value=i;for(let h=0;h<4;h++){let u=r[h],f=c.ag.value[h];u?f.set(u[0],u[1],u[2]):f.set(0,0,0)}}{let l=!1;for(let h of this.poolMeshes){let u=h.pl,f=this.camera.position;f.x>u.x0&&f.x<u.x1&&f.z>u.z0&&f.z<u.z1&&f.y<u.surf&&(l=!0)}let c=ht("uw");c&&c.classList.contains("on")!==l&&c.classList.toggle("on",l)}for(let l of this.cars)l.mesh.position.set(l.st.x,0,l.st.z),l.mesh.rotation.y=l.st.yaw,zd(l.mesh,l.st,t);let a=!this.drive&&e&&!this.menuOpen&&this.nearestFreeCar(n);if(!!a!==document.body.classList.contains("near-car")&&document.body.classList.toggle("near-car",!!a),this.drive){let l=ht("car-speed");if(l){let c=Math.round(Math.abs(this.drive.st.speed)*3.6);l.firstElementChild.textContent!==String(c)&&(l.firstElementChild.textContent=c)}}}onFell(){let t=this.me.body,e=this.cpCur,n=(this.slot-1)*1.6,i,r,a;if(e)i=ln(e.x+n,e.x-e.w/2+1.5,e.x+e.w/2-1.5),r=e.y+.05,a=e.spawn[2];else{let l=this.spawnPoint(this.slot);i=l[0],r=l[1]+.02,a=l[2]}Hl(t,i,r,a,Math.PI),this.rs++,kt.respawn();let o=ht("flash");o.classList.add("on"),setTimeout(()=>o.classList.remove("on"),60),this.particles.emit(i,r+.8,a,30,{rainbow:!0,speed:3,up:3,life:.8,size:.3}),this.camInit=!1,this.camYaw=0}checkpoints(t){let e=this.world.checkpoints;for(;this.cpIdx<e.length&&t.z<e[this.cpIdx].z&&t.y>e[this.cpIdx].y-2.5&&Math.abs(t.x-e[this.cpIdx].x)<e[this.cpIdx].w/2+3;)this.cpCur=e[this.cpIdx],this.cpIdx++,kt.checkpoint(),this.toast("CHECKPOINT!"),this.particles.emit(t.x,t.y+1,t.z,24,{color:"#ffd23f",speed:3,up:5,life:.8,size:.3})}softCollide(t){if(this.finished)return;let e=de.R*2+.06;for(let n of this.remotes.values()){if(!n.has||n.flags&8)continue;let i=t.x-n.x,r=t.z-n.z,a=t.y-n.y;if(Math.abs(a)>de.H*.8)continue;let o=Math.hypot(i,r);if(o>=e)continue;let l,c;if(o>.001)l=i/o,c=r/o;else{let g=t.yaw*7+1;l=Math.cos(g),c=Math.sin(g)}let h=e-o;t.x+=l*h*.62,t.z+=c*h*.62;{let g=Math.sin(t.yaw),p=Math.cos(t.yaw);if(Math.hypot(t.vx,t.vz)>1&&-(g*l+p*c)>.3){let T=-c,x=l,b=g*T+p*x;Math.abs(b)<.3&&(b=-p*T+g*x||1),b=Math.sign(b),t.x+=T*b*h*.55,t.z+=x*b*h*.55}}let u=n.vx||0,f=n.vz||0,d=(t.vx-u)*l+(t.vz-f)*c;if(this.multi&&d<-1.5){let g=performance.now();n.shoveAt>g-80||(n.shoveAt=g,gt.net.send({t:"shove",to:n.id,nx:+(-l).toFixed(3),nz:+(-c).toFixed(3),p:+Math.min(12,-d).toFixed(1)}))}let m=performance.now(),_=!(n.lastContact>m-150);if(n.lastContact=m,d<0&&_){let g=-1.7*d*.5;t.vx+=l*g,t.vz+=c*g,g>2.5&&(t.noCtrl=Math.max(t.noCtrl,.16)),n.flags&4&&-d>7&&t.hitCd<=0&&_a(t,l,c,11)?this.bonked("TACKLED!",n.name||"",t):-d>6&&t.hitCd<=0&&(kt.land(6),this.particles.emit(t.x-l*.4,t.y+.9,t.z-c*.4,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}}}bonked(t,e,n){kt.bonk(),this.toast(t+(e?"  \u2022 "+e:"")),this.particles.emit(n.x,n.y+1,n.z,22,{color:"#ffffff",speed:6,up:3,life:.5,size:.3}),this.particles.emit(n.x,n.y+1,n.z,14,{color:"#ffd23f",speed:8,up:4,life:.45,size:.28})}swing(){return!this.multi||this.over||this.finished||this.levelTime<0||this.batCd>0||this.me.body.stun>0?!1:(this.swingMega=this.fx.mega>0,this.swingMega&&this.fx.mega--,this.batCd=1.1,this.swingT=.001,this.batPending=!0,kt.swing(),!0)}updateBat(t,e){this.batCd>0&&(this.batCd-=t),this.swingT>0&&(this.swingT+=t/.42,e.stun>0?(this.swingT=0,this.batPending=!1):this.batPending&&this.swingT>=.55&&(this.batPending=!1,this.batHit(e)),this.swingT>=1&&(this.swingT=0))}batHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw);for(let i of this.remotes.values()){if(!i.has||i.flags&8)continue;let r=i.x-t.x,a=i.z-t.z,o=i.y-t.y,l=Math.hypot(r,a);if(l>(this.swingMega?4.4:2.9)||Math.abs(o)>1.7||l<.001||(r*e+a*n)/l<.1)continue;let c=e*.7+r/l*.3,h=n*.7+a/l*.3,u=Math.hypot(c,h)||1;c/=u,h/=u,gt.net.send({t:"bat",to:i.id,nx:+c.toFixed(3),nz:+h.toFixed(3),p:this.swingMega?2:1}),kt.bonk(),this.toast("BONK!  \u2022 "+(i.name||"")),this.particles.emit(i.x,i.y+1,i.z,24,{color:"#ffd23f",speed:7,up:4,life:.5,size:.3}),this.particles.emit(i.x,i.y+1,i.z,14,{color:"#ffffff",speed:5,up:3,life:.4,size:.25})}}onShove(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0||e.shield>0)return;let n=ln(+t.p||0,0,12),i=+t.nx,r=+t.nz;!Number.isFinite(i)||!Number.isFinite(r)||(e.x+=i*n*.05,e.z+=r*n*.05,e.vx+=i*n*.12,e.vz+=r*n*.12)}onBat(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0)return;let n=(this.players.find(r=>r.id===t.from)||{}).name||"";if(e.hitCd=0,e.shield>0){this.toast("SHIELD BLOCKED!"),kt.pickup();return}let i=t.p===2;_a(e,t.nx,t.nz,i?22:15)&&(e.vy=i?11:9,e.stun=i?1:.75,this.bonked(i?"MEGA BONK!":"BONKED!",n,e))}buildBoxes(){this.boxes=[];let t=[],e=(i,r,a)=>[-4,0,4].forEach(o=>t.push({x:i+o,y:a+1.35,z:r}));e(0,-10,0);let n=1e9;for(let i of this.world.checkpoints)Math.abs(i.z-n)<12||(n=i.z,e(i.x,i.z-5,i.y));if(!s.boxAssets){let i=document.createElement("canvas");i.width=i.height=128;let r=i.getContext("2d"),a=r.createLinearGradient(0,0,128,128);a.addColorStop(0,"#ffe45e"),a.addColorStop(1,"#ff8a1a"),r.fillStyle=a,r.fillRect(0,0,128,128),r.strokeStyle="#fff",r.lineWidth=8,r.strokeRect(6,6,116,116),r.fillStyle="#fff",r.strokeStyle="#7a3500",r.lineWidth=6,r.font="bold 92px Arial",r.textAlign="center",r.textBaseline="middle",r.strokeText("?",64,70),r.fillText("?",64,70);let o=new fn(i);o.colorSpace=Te,s.boxAssets={geo:new De(.95,.95,.95),mat:new he({map:o,emissive:"#ff9a00",emissiveIntensity:.55,roughness:.35})}}for(let i of t){let r=new it(s.boxAssets.geo,s.boxAssets.mat);r.position.set(i.x,i.y,i.z),r.castShadow=!0,this.scene.add(r),this.boxes.push({...i,mesh:r,respawn:0})}}findLeader(){if(this.players.length<2||this.levelTime<4)return-1;let t=this.localId,e=this.finished?1e5:-this.me.body.z;for(let n of this.remotes.values()){if(!n.has)continue;let i=n.flags&8?1e5:-n.z;i>e+.5&&(e=i,t=n.id)}return t}pickup(t,e){t.respawn=9,t.mesh.visible=!1,kt.pickup();let n=this.multi?["turbo","turbo","turbo","jump","jump","shield","shield","mega","mega","mega"]:["turbo","jump","shield"],i=e||n[Math.random()*n.length|0],r=this.fx,a=this.me.body;return i==="turbo"?(r.turbo=5,this.toast("\u{1F680} TURBO!")):i==="jump"?(r.jump=7,this.toast("\u{1F998} SUPER JUMP!")):i==="shield"?(r.shield=8,this.toast("\u{1F6E1}\uFE0F SHIELD!")):(r.mega=2,this.toast("\u{1F3CF} MEGA BAT x2!")),this.particles.emit(a.x,a.y+1,a.z,26,{rainbow:!0,speed:4,up:4,life:.7,size:.32}),i}updatePowerups(t,e){let n=performance.now()/1e3,i=this.fx;for(let a of this.boxes){if(a.respawn>0){a.respawn-=t,a.respawn<=0&&(a.mesh.visible=!0);continue}a.mesh.rotation.y+=t*2,a.mesh.rotation.x=Math.sin(n*1.5+a.x)*.25,a.mesh.position.y=a.y+Math.sin(n*2.5+a.x)*.15,!(this.finished||this.over||this.levelTime<0)&&Math.abs(e.x-a.x)<1.3&&Math.abs(e.z-a.z)<1.3&&e.y<a.y+.8&&e.y+de.H>a.y-.5&&this.pickup(a)}for(let a of["turbo","jump","shield"])i[a]>0&&(i[a]=Math.max(0,i[a]-t));e.speedMul=i.turbo>0?1.4:1,e.jumpMul=i.jump>0?1.3:1,e.shield=i.shield,i.turbo>0&&Math.hypot(e.vx,e.vz)>3&&Math.random()<.7&&this.particles.emit(e.x,e.y+.3,e.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});let r=["turbo","jump","shield"].map(a=>i[a]>0?a+Math.ceil(i[a]):"").join("|")+"|"+i.mega;if(r!==this.fxSig){this.fxSig=r;let a=ht("hud-fx");if(!a)return;a.innerHTML="";let o=(l,c)=>{let h=document.createElement("div");h.className="fx",h.textContent=l+" "+c,a.appendChild(h)};i.turbo>0&&o("\u{1F680}",Math.ceil(i.turbo)+"s"),i.jump>0&&o("\u{1F998}",Math.ceil(i.jump)+"s"),i.shield>0&&o("\u{1F6E1}\uFE0F",Math.ceil(i.shield)+"s"),i.mega>0&&o("\u{1F3CF}","x"+i.mega)}}onLocalFinish(){this.finished=!0,this.finishTime=Math.max(0,this.levelTime),kt.finish();let t=this.info.finishZ;this.particles.emit(0,this.info.finishY+6,t,120,{rainbow:!0,speed:9,up:10,life:1.8,size:.5,gravity:7,spread:10}),this.particles.emit(-9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.particles.emit(9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.multi?this.toast("FINISHED!"):this.endSingle(!1)}endSingle(t){if(this.over)return;this.over=!0,this.winnerSelf=!t;let e=-this.info.finishZ,n=ln(-this.me.body.z/e,0,1),i="";if(!t){let a=this.finishTime,o=Wd(this.level);!o||a<o?(localStorage.setItem("ph_best_"+this.level,String(a)),i=o?"NEW BEST TIME!":"First clear!"):i=`Best: ${Zl(o)}`}let r=[{place:1,name:this.me.name,char:this.me.char,win:!t,tm:t?`${Math.round(n*100)}% of the track`:Zl(this.finishTime),self:!0}];setTimeout(()=>gt.showResults({title:t?"TIME'S UP!":"YOU DID IT!",sub:t?"You ran out of time. Try again!":i,rows:r,single:!0,win:!t}),t?300:1400),ql(!0),t?kt.lose():kt.win()}onFin(t){this.finishedMap.set(t.id,t.place);let e=this.players.find(n=>n.id===t.id);t.id===this.localId?this.toast(`${Wh(t.place)} PLACE!`):(this.toast(`${e?e.name:"Player"} finished ${Wh(t.place)}!`),kt.checkpoint())}onEnd(t){this.over=!0;let e=t.winnerId===this.localId;this.winnerSelf=e,ql(!0),e?kt.win():kt.lose();let n=t.results.map(r=>({place:r.place,name:r.name,char:r.char,win:r.id===t.winnerId,self:r.id===this.localId,tm:r.finished?Zl(r.time):`${Math.round(r.progress*100)}% of the track`})),i=t.results[0];setTimeout(()=>gt.showResults({title:e?"YOU WIN!":`${i?i.name:"Nobody"} WINS!`,sub:t.reason==="time"?"Time's up - the nearest player to the finish gate wins!":"First to the finish gate wins!",rows:n,single:!1,win:e}),900)}addRemote(t){this.remotes.has(t.id)||(this.players.push(t),this.remotes.set(t.id,new Ea(t,this.scene)),this.buildProgress(),this.toast(t.name+" joined the race!"))}removeRemote(t){let e=this.remotes.get(t);if(e){e.dispose(this.scene),this.remotes.delete(t);let n=this.dots.get(t);n&&n.remove()}}tagScale(t,e,n){let i=e.distanceTo(this.camera.position),r=ln(i*.07,1,5.2)*n;t.scale.set(2.8*r,.7*r,1),t.visible=i<260}updateCamera(t){let e=this.me.body,n=Math.cos(this.camPitch),i=Math.sin(this.camPitch),r=Math.hypot(e.vx,e.vz);this.camera.fov=as(this.camera.fov,62+ln(r-10,0,12)*.9,Math.min(1,t*4)),this.camera.updateProjectionMatrix();let a=this.camDist;if(this.drive){let u=this.drive.st;this.lookT-=t,a=9.2+Math.min(4,Math.abs(u.speed)*.12),this.lookT<=0&&(this.camYaw=Jh(this.camYaw,u.yaw+Math.PI,1-Math.exp(-3.2*t)),this.camPitch+=(.28-this.camPitch)*(1-Math.exp(-2*t)))}let o=e.x,l=e.y+(this.drive?1.1:1.35),c=e.z;this.camInit||(this.camTarget.set(o,l,c),this.camInit=!0);let h=1-Math.exp(-14*t);if(this.camTarget.x+=(o-this.camTarget.x)*h,this.camTarget.z+=(c-this.camTarget.z)*h,this.camTarget.y+=(l-this.camTarget.y)*(1-Math.exp(-7*t)),this.camera.position.set(this.camTarget.x+Math.sin(this.camYaw)*n*a,this.camTarget.y+i*a+.4,this.camTarget.z+Math.cos(this.camYaw)*n*a),this.shake>.01){let u=this.shake*.5;this.camera.position.x+=(Math.random()-.5)*u,this.camera.position.y+=(Math.random()-.5)*u*.7,this.camera.position.z+=(Math.random()-.5)*u,this.shake*=Math.exp(-7*(this.lastDt||.016))}else this.shake=0;this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}updateLights(){let t=this.camTarget;this.sun.position.set(t.x+this.sunDir.x,t.y+this.sunDir.y,t.z+this.sunDir.z),this.sun.target.position.copy(t)}count(t){let e=ht("hud-count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}toast(t){let e=ht("hud-toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}rank(){var i;let t=this.me.body,e=1,n=(i=this.finishedMap.get(this.localId))!=null?i:this.finished&&!this.multi?1:null;if(n)return n;for(let r of this.remotes.values())(this.finishedMap.get(r.id)||r.has&&r.z<t.z-.5)&&e++;return e}hud(t){if(this.hudT+=t,this.hintT>0&&(this.hintT-=t,this.hintT<=0&&ht("hud-hint").classList.add("fade")),this.hudT<.066)return;this.hudT=0;let e=this.levelTime,n=Math.max(0,Math.floor(e)),i=ht("hud-timer");i.textContent=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,i.classList.remove("low"),ht("hud-hint").classList.toggle("single",!this.multi),document.body.classList.toggle("single",!this.multi),ht("hud-rank").textContent=this.multi?Wh(this.rank())+" / "+this.players.length:`${Math.max(0,Math.round(ln(-this.me.body.z/-this.info.finishZ,0,1)*100))}%`;let r=-this.info.finishZ,a=(c,h)=>{let u=this.dots.get(c);u&&(u.style.left=ln(-h/r,0,1)*100+"%")};a(this.localId,this.me.body.z);for(let c of this.remotes.values())a(c.id,c.has?c.z:0);let o=ht("click-hint"),l=!this.over&&!this.menuOpen&&document.pointerLockElement!==Bi;l!==o.classList.contains("show")&&o.classList.toggle("show",l);{let c=ht("t-bat");c&&c.classList.toggle("cd",this.batCd>0)}this.multi&&(ht("hud-net").textContent=`ping ${Math.round(gt.net.rtt)} ms`)}render(){gn.render(this.scene,this.camera)}destroy(){kh(),Gh();{let t=ht("uw");t&&t.classList.remove("on")}document.body.classList.remove("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("in-race"),document.body.classList.remove("single"),ht("pause").classList.add("hidden"),this.menuOpen=!1,ht("hud").classList.add("hidden"),ht("hud-count").textContent="",ht("hud-toast").classList.remove("show");{let t=ht("hud-fx");t&&(t.innerHTML="")}for(let t of this.remotes.values())t.dispose(this.scene);this.me.model.dispose(),this.scenery.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),this.scene.clear()}},ky=["title","profile","levels","mp","lobby","results","help"];function Cn(s){for(let t of ky){let e=ht("s-"+t);e.classList.toggle("active",t===s),e.classList.remove("hidden")}gt.screen=s}var kd=0;function wa(s){let t=ht("toast-global");t.textContent=s,t.classList.add("show"),clearTimeout(kd),kd=setTimeout(()=>t.classList.remove("show"),3200)}function Xd(s,t){s.innerHTML="",fi.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.innerHTML=`<img alt="${e.name}" src="${qh[e.id]||""}"><b style="color:${e.color}">${e.name}</b>${t.small?"":`<span>${e.tag}</span>`}`,n.onclick=()=>t.onPick(e.id),s.appendChild(n)})}function Zh(s,t,e){s.querySelectorAll(".card").forEach(n=>{let i=+n.dataset.id;n.classList.toggle("sel",i===t),n.classList.toggle("taken",e&&e.has(i)&&i!==t)})}function qd(s,t){s.innerHTML="",ma.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.style.background=`linear-gradient(160deg, ${e.colors[0]}cc, ${e.colors[1]}cc)`;let i=Wd(e.id);n.innerHTML=`<div><h4>${e.id+1}. ${e.name}</h4><div class="stars">${"\u2605".repeat(e.stars)}${"\u2606".repeat(5-e.stars)}</div></div><div class="blurb">${e.blurb}</div><div class="meta">${e.sub} &bull; no time limit${i?" &bull; best "+Zl(i):""}</div>`,n.onclick=()=>t.onPick(e.id),s.appendChild(n)})}function Gy(){let s=new da({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});s.setSize(256,320,!1),s.outputColorSpace=Te,s.toneMapping=Js,s.setClearColor(0,0);let t=new ci;t.add(new $i("#ffffff","#b9a4ff",1.6));let e=new Ji("#ffffff",2.6);e.position.set(3,5,6),t.add(e);let n=new ns(s);t.environment=n.fromScene(new pa,.04).texture,t.environmentIntensity=.7;let i=new Ye(30,256/320,.1,50);i.position.set(0,1.25,6.6),i.lookAt(0,.98,0);let r=[];for(let a=0;a<fi.length;a++){let o=new ss(a);o.group.rotation.y=-.35,t.add(o.group),o.update(.016,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1}),s.render(t,i),r.push(s.domElement.toDataURL("image/png")),t.remove(o.group),o.dispose()}return n.dispose(),s.dispose(),s.forceContextLoss(),r}function ba(s){gt.mode=s,ht("inp-name").value=gt.name,ht("profile-title").textContent="Choose your player",Xd(ht("char-cards"),{onPick:t=>{gt.char=t,Zh(ht("char-cards"),t),qe.sel=t,kt.select(),qe.burst(t)}}),Zh(ht("char-cards"),gt.char),qe.setTitle(gt.char),qe.mode="profile",qe.sel=gt.char,Cn("profile")}function Vy(){let s=ht("inp-name").value.trim().replace(/[<>&"']/g,"").slice(0,14);return s||(s=["Haris","Speedy","Bouncy","Zippy"][Math.floor(Math.random()*4)]+Math.floor(Math.random()*90+10)),gt.name=s,localStorage.setItem("ph_name",s),localStorage.setItem("ph_char",String(gt.char)),s}function Yd(){qd(ht("level-cards"),{onPick:s=>{kt.go(),Ta(s)}}),Cn("levels")}function Ta(s){di(),Q&&(Q.destroy(),Q=null),gt.level=s,Q=new Jl(s,[{id:1,name:gt.name,char:gt.char}],1,{multi:!1,t0:performance.now()+3600}),os(),Cn("none"),ht("s-results").classList.add("hidden"),Aa()}gt.showResults=function(s){let t=ht("res-list");t.innerHTML="",s.rows.forEach(i=>{let r=document.createElement("div");r.className="res-row"+(i.win?" win":"");let a=fi[i.char];r.innerHTML=`<div class="place">${i.place<=3?By[i.place-1]:i.place}</div><div class="nm"><i style="background:${a.color}"></i>${i.name.replace(/[<>&]/g,"")}${i.self?" <small>(you)</small>":""}</div><div class="tm">${i.tm}</div>`,t.appendChild(r)}),ht("res-title").textContent=s.title,ht("res-sub").textContent=s.sub||"";let e=ht("b-res-retry"),n=ht("b-res-next");if(s.single)e.style.display="",e.textContent="RETRY",n.style.display="",n.textContent=gt.level<ma.length-1?"NEXT LEVEL":"LEVELS",n.disabled=!1,gt.resMode="single";else{e.style.display="none";let i=gt.room&&gt.room.hostId===gt.myId;n.style.display="",n.textContent=i?"BACK TO LOBBY":"WAITING FOR HOST...",n.disabled=!i,gt.resMode="multi"}Ra(),Cn("results")};ht("b-res-menu").onclick=()=>{kt.back(),Kh()};ht("b-res-retry").onclick=()=>{kt.click(),Ta(gt.level)};ht("b-res-next").onclick=()=>{kt.click(),gt.resMode==="single"?gt.level<ma.length-1?Ta(gt.level+1):(Q&&Q.destroy(),Q=null,Yd()):gt.net.send({t:"again"})};function Kh(){Q&&(Q.destroy(),Q=null),gt.net&&gt.room&&gt.net.send({t:"leave"}),gt.room=null,Ra(),qe.setTitle(),Cn("title")}async function Wy(){if(gt.net&&gt.net.connected)return gt.net;let s=new Yl;return s.on("joined",t=>{gt.myId=t.id}),s.on("lobby",qy),s.on("err",t=>{ht("mp-status").textContent=t.msg,t.retry&&gt.screen==="mp"?(Kl(),$l=setTimeout(()=>{gt.screen==="mp"&&!gt.room&&$h("join")},2e3)):wa(t.msg)}),s.on("go",Yy),s.on("s",t=>{if(Q&&Q.multi){let e=Q.remotes.get(t.id);e&&e.push(t)}}),s.on("fin",t=>{Q&&Q.multi&&Q.onFin(t)}),s.on("bat",t=>{Q&&Q.multi&&Q.onBat(t)}),s.on("carpark",t=>{Q&&Q.multi&&Q.onCars({[t.c]:t})}),s.on("cars",t=>{Q&&Q.multi?Q.onCars(t.cars):gt.pendingCars=t.cars}),s.on("shove",t=>{Q&&Q.multi&&Q.onShove(t)}),s.on("end",t=>{Q&&Q.multi&&Q.onEnd(t)}),s.on("left",t=>{Q&&Q.multi&&Q.removeRemote(t.id)}),s.on("close",()=>{wa("Disconnected from server"),Q&&(Q.destroy(),Q=null),gt.room=null,Ra(),qe.setTitle(),Cn("title")}),await s.connect(),gt.net=s,s}function Xy(){ht("mp-status").textContent="",qe.setTitle(gt.char),Cn("mp")}var $l=null;function Kl(){$l&&(clearTimeout($l),$l=null)}async function $h(s){di(),Kl();let t=ht("mp-status");t.textContent="Connecting...";try{let e=await Wy();s==="create"?e.send({t:"create",name:gt.name,char:gt.char}):e.send({t:"join",name:gt.name,char:gt.char}),t.textContent=s==="create"?"":"Looking for a room..."}catch{t.textContent="Could not connect to the game server. Is it running?",wa("Could not connect to the game server")}}function qy(s){Kl();let t=!gt.room,e=gt.room;if(gt.room=s,Q&&Q.multi){for(let n of s.players)n.id!==gt.myId&&!Q.remotes.has(n.id)&&(s.phase==="race"||s.phase==="countdown")&&Q.addRemote(n);if(s.phase==="lobby"&&gt.screen!=="lobby")Q.destroy(),Q=null,Ra(),Gd(),Cn("lobby"),lr(6);else if(gt.screen==="results"){let n=s.hostId===gt.myId;gt.resMode==="multi"&&(ht("b-res-next").textContent=n?"BACK TO LOBBY":"WAITING FOR HOST...",ht("b-res-next").disabled=!n)}return}(t||gt.screen==="mp"||gt.screen==="profile"||gt.screen==="title")&&(s.phase==="lobby"||s.phase==="results")&&(Cn("lobby"),lr(6)),e&&s.players.length>e.players.length&&kt.join(),Gd()}function Gd(){let s=gt.room;if(!s)return;let t=s.players.find(r=>r.id===gt.myId);t&&(gt.char=t.char),ht("lobby-code").textContent=s.code,ht("lobby-count").textContent=`${s.players.length}/${4}`;let e=ht("lobby-players");e.innerHTML="";for(let r=0;r<4;r++){let a=s.players[r],o=document.createElement("div");o.className="slot"+(a?"":" empty"),o.innerHTML=a?`<i style="background:${fi[a.char].color}"></i><span>${a.name.replace(/[<>&]/g,"")}</span>${a.id===s.hostId?"<span>\u{1F451}</span>":""}${a.id===gt.myId?'<span class="you">YOU</span>':""}`:'<i style="background:#888"></i><span>Waiting for player...</span>',e.appendChild(o)}let n=new Set(s.players.filter(r=>r.id!==gt.myId).map(r=>r.char));Xd(ht("lobby-chars"),{small:!0,onPick:r=>{n.has(r)||(kt.select(),gt.net.send({t:"char",char:r}))}}),Zh(ht("lobby-chars"),gt.char,n);let i=s.hostId===gt.myId;qd(ht("lobby-levels"),{onPick:r=>{i&&(kt.click(),gt.net.send({t:"level",level:r}))}}),ht("lobby-levels").querySelectorAll(".card").forEach(r=>{r.classList.toggle("sel",+r.dataset.id===s.level),i||(r.style.cursor="default")}),ht("lobby-level-note").textContent=i?"(you choose)":"(host chooses)",ht("b-start").disabled=!i,ht("b-start").firstElementChild.textContent=i?"START RACE":"WAITING FOR HOST",ht("lobby-hint").textContent=i?s.players.length<2?"Tell friends to tap MULTIPLAYER on the same link. You can also start alone.":"Everyone ready? Hit start!":"The host will start the race.",qe.setLobby(s.players)}function Yy(s){di(),Q&&(Q.destroy(),Q=null);let t=gt.room;if(!t)return;let e=s.order.map(n=>t.players.find(i=>i.id===n)).filter(Boolean);gt.level=s.level,Q=new Jl(s.level,e,gt.myId,{multi:!0,t0:s.t0}),os(),Cn("none"),Aa()}function Aa(){if(Q&&!Q.over&&document.pointerLockElement!==Bi)try{let s=Bi.requestPointerLock();s&&s.catch&&s.catch(()=>{})}catch{}}function Ra(){document.pointerLockElement&&document.exitPointerLock()}document.addEventListener("pointerlockchange",()=>{let s=document.pointerLockElement===Bi;s?Xh=!0:Xh&&Q&&!Q.over&&!Q.menuOpen&&!ei&&Qh(),s||(Xh=!1),ht("click-hint").classList.toggle("show",!!Q&&!Q.over&&!Q.menuOpen&&!s)});var Xh=!1,jl=!1;Bi.addEventListener("mousedown",s=>{jl=!0,Q&&!Q.over&&(s.button===0&&Q.multi&&document.pointerLockElement===Bi&&!Q.menuOpen?Q.swing():Aa())});window.addEventListener("mouseup",()=>{jl=!1});window.addEventListener("mousemove",s=>{Q&&!Q.over&&(document.pointerLockElement===Bi||jl)&&Q.look(s.movementX,s.movementY)});ht("click-hint").addEventListener("click",Aa);window.addEventListener("keydown",s=>{if(s.target&&s.target.tagName==="INPUT"){s.code==="Enter"&&(gt.screen==="profile"?ht("b-profile-next").click():gt.screen==="mp"&&ht("b-join").click());return}Q&&!Q.over&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(s.code)&&s.preventDefault(),!s.repeat&&(Fe.add(s.code),s.code==="Space"&&(pi.jump=!0),(s.code==="ShiftLeft"||s.code==="ShiftRight"||s.code==="KeyF")&&(pi.dive=!0),s.code==="KeyM"&&jh(),s.code==="KeyB"&&Q&&!Q.menuOpen&&Q.swing(),s.code==="KeyC"&&Q&&!Q.over&&!s.repeat&&Q.toggleCar(),s.code==="KeyH"&&Q&&!Q.menuOpen&&Q.honk(),(s.code==="Escape"||s.code==="KeyP")&&Q&&!Q.over&&(Q.menuOpen?Ql():Qh()))});window.addEventListener("keyup",s=>Fe.delete(s.code));window.addEventListener("blur",()=>{Fe.clear(),jl=!1});window.addEventListener("resize",os);function jh(){gt.muted=!gt.muted,Id(gt.muted),ht("b-sound").textContent="SOUND: "+(gt.muted?"OFF":"ON"),$d()}function Zd(){ht("p-gfx").textContent="\u{1F5A5} GFX: "+(se.low?"LOW":"AUTO")}function $d(){ht("p-sound").textContent="\u{1F50A} SOUND: "+(gt.muted?"OFF":"ON")}function Qh(){!Q||Q.over||Q.menuOpen||(Q.menuOpen=!0,Q.multi||(Q.paused=!0,Q.pauseAt=performance.now()),Ra(),Fe.clear(),He.x=He.y=0,He.jump=!1,ht("p-title").textContent=Q.multi?"Menu":"Paused",ht("p-info").textContent=Q.meta.name+(Q.multi?"  \u2022  race goes on!":""),Zd(),ht("p-retry").classList.toggle("hidden",Q.multi),ht("p-full").classList.toggle("hidden",!(document.documentElement&&document.documentElement.requestFullscreen)),$d(),ht("pause").classList.remove("hidden"),ht("click-hint").classList.remove("show"),kt.click())}function Ql(){!Q||!Q.menuOpen||(Q.paused&&(Q.t0+=performance.now()-Q.pauseAt,Q.paused=!1),Q.menuOpen=!1,ht("pause").classList.add("hidden"),Aa())}ht("b-menu").addEventListener("click",()=>Q&&Q.menuOpen?Ql():Qh());ht("p-resume").onclick=()=>{kt.click(),Ql()};ht("p-sound").onclick=()=>{di(),jh(),kt.click()};ht("p-gfx").onclick=()=>{se.low=!se.low;try{localStorage.setItem("ph_low",se.low?"1":"0")}catch{}kt.click(),zy(),Zd()};ht("p-full").onclick=()=>{let s=document,t=s.documentElement;try{!s.fullscreenElement&&t.requestFullscreen?t.requestFullscreen({navigationUI:"hide"}):s.exitFullscreen&&s.fullscreenElement&&s.exitFullscreen()}catch{}};ht("p-retry").onclick=()=>{kt.click();let s=gt.level;ht("pause").classList.add("hidden"),Q&&(Q.menuOpen=!1),Ta(s)};ht("p-quit").onclick=()=>{kt.back(),ht("pause").classList.add("hidden"),Kh()};async function Zy(){await wd(),qe=new Yh;try{qh=Gy()}catch{qh=["","","",""]}os(),qe.setTitle(),Cn("title"),ht("b-single").onclick=()=>{di(),lr(6),kt.click(),ba("single")},ht("b-multi").onclick=()=>{di(),lr(6),kt.click(),ba("multi")},ht("b-help").onclick=()=>{di(),kt.click(),ht("s-help").classList.add("active")},ht("b-help-close").onclick=()=>{kt.back(),ht("s-help").classList.remove("active")},ht("b-sound").onclick=()=>{di(),jh(),kt.click()},ht("b-profile-back").onclick=()=>{kt.back(),qe.setTitle(),Cn("title")},ht("b-profile-next").onclick=()=>{Vy(),kt.click(),gt.mode==="single"?Yd():Xy()},ht("b-levels-back").onclick=()=>{kt.back(),ba("single")},ht("b-mp-back").onclick=()=>{kt.back(),Kl(),ba("multi")},ht("b-create").onclick=()=>{kt.click(),$h("create")},ht("b-join").onclick=()=>{kt.click(),$h("join")},ht("b-leave").onclick=()=>{kt.back(),Kh()},ht("b-start").onclick=()=>{gt.room&&gt.room.hostId===gt.myId&&(kt.click(),gt.net.send({t:"start"}))},ht("b-copy").onclick=async()=>{let n=`${location.origin}${location.pathname}?room=${gt.room?gt.room.code:""}`;try{await navigator.clipboard.writeText(n),wa("Invite link copied!")}catch{prompt("Copy this invite link:",n)}},new URLSearchParams(location.search).get("room")&&(ba("multi"),wa("Pick your name & player, then CONTINUE and JOIN ROOM")),ht("loader").classList.add("done"),setTimeout(()=>ht("loader").remove(),600);let t=performance.now(),e=n=>{requestAnimationFrame(e);let i=Math.min(.05,(n-t)/1e3);t=n,Oy(i),Q?(Q.over&&Q.menuOpen&&Ql(),Q.paused||Q.update(i),Q.render()):(qe.update(i),gn.render(qe.scene,qe.camera))};requestAnimationFrame(e)}Zy().catch(s=>{console.error(s);let t=document.querySelector("#loader p");t&&(t.textContent="Error: "+s.message)});window.__ph={app:gt,Remote:Ea,startSingle:s=>Ta(s),keys:Fe,press:pi,touch:He,get race(){return Q},get stage(){return qe}};(function(){ei&&document.body.classList.add("touch");let t=ht("touch"),e=ht("joy"),n=ht("joy-knob");if(!t||!e||!n)return;let i=56,r=null,a=null,o=0,l=0,c=0,h=0,u=(m,_)=>{for(let g of m)if(g.identifier===_)return g;return null};t.addEventListener("touchstart",m=>{m.preventDefault();for(let _ of m.changedTouches)_.clientX<window.innerWidth*.5&&r===null?(r=_.identifier,o=_.clientX,l=_.clientY,e.style.left=o+"px",e.style.top=l+"px",e.classList.add("on"),n.style.transform="translate(-50%, -50%)"):a===null&&_.clientX>=window.innerWidth*.5&&(a=_.identifier,c=_.clientX,h=_.clientY)},{passive:!1}),t.addEventListener("touchmove",m=>{m.preventDefault();let _=r!==null?u(m.touches,r):null;if(_){let p=_.clientX-o,S=_.clientY-l,T=Math.hypot(p,S);T>i&&(p*=i/T,S*=i/T),n.style.transform=`translate(calc(-50% + ${p}px), calc(-50% + ${S}px))`;let x=p/i,b=S/i,E=Math.hypot(x,b),N=E<.14?0:(E-.14)/.86/E;He.x=x*N,He.y=-b*N}let g=a!==null?u(m.touches,a):null;g&&(Q&&!Q.over&&Q.look((g.clientX-c)*1.7,(g.clientY-h)*1.7),c=g.clientX,h=g.clientY)},{passive:!1});let f=m=>{for(let _ of m.changedTouches)_.identifier===r&&(r=null,He.x=He.y=0,e.classList.remove("on")),_.identifier===a&&(a=null)};t.addEventListener("touchend",f),t.addEventListener("touchcancel",f);let d=(m,_,g)=>{let p=ht(m);if(!p)return;p.addEventListener("touchstart",T=>{T.preventDefault(),T.stopPropagation(),_()},{passive:!1});let S=T=>{T.preventDefault(),T.stopPropagation(),g&&g()};p.addEventListener("touchend",S,{passive:!1}),p.addEventListener("touchcancel",S,{passive:!1})};d("t-jump",()=>{Q&&!Q.over&&(pi.jump=!0,He.jump=!0)},()=>{He.jump=!1}),d("t-dive",()=>{Q&&!Q.over&&(pi.dive=!0)}),d("t-bat",()=>{Q&&!Q.over&&!Q.menuOpen&&Q.swing()}),d("c-horn",()=>{Q&&Q.honk()}),d("b-car",()=>{Q&&Q.toggleCar()}),d("b-exit",()=>{Q&&Q.toggleCar()});for(let m of["b-car","b-exit"]){let _=ht(m);_&&_.addEventListener("click",()=>{Q&&Q.toggleCar(),_.blur()})}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
