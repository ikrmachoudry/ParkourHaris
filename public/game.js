(()=>{var vd=0,Yh=1,_d=2;var Jo=1,kl=2,Pr=3,mi=0,on=1,fn=2,gi=0,Qi=1,xi=2,Zh=3,Jh=4,Md=5;var Ts=100,bd=101,Ed=102,Sd=103,wd=104,Td=200,Ad=201,Rd=202,Cd=203,$h=204,Kh=205,Id=206,Pd=207,Ld=208,Dd=209,Nd=210,zd=211,Ud=212,Fd=213,Bd=214,ol=0,al=1,ll=2,lr=3,cl=4,hl=5,ul=6,fl=7,Gl=0,Od=1,Hd=2,ri=0,jh=1,Qh=2,tu=3,Lr=4,eu=5,nu=6,iu=7,Dh="attached",kd="detached",su=300,ts=301,As=302,Vl=303,Wl=304,$o=306,Pi=1e3,ui=1001,dl=1002,hn=1003,Gd=1004;var Ko=1005;var pn=1006,Xl=1007;var es=1008;var An=1009,ru=1010,ou=1011,Dr=1012,ql=1013,oi=1014,Hn=1015,ai=1016,Yl=1017,Zl=1018,Nr=1020,au=35902,lu=35899,cu=1021,hu=1022,kn=1023,di=1026,ns=1027,Jl=1028,$l=1029,is=1030,Kl=1031;var jl=1033,jo=33776,Qo=33777,ta=33778,ea=33779,Ql=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37488,ac=37489,na=37490,lc=37491,cc=37808,hc=37809,uc=37810,fc=37811,dc=37812,pc=37813,mc=37814,gc=37815,xc=37816,yc=37817,vc=37818,_c=37819,Mc=37820,bc=37821,Ec=36492,Sc=36494,wc=36495,Tc=36283,Ac=36284,ia=36285,Rc=36286;var yo=2300,pl=2301,sl=2302,Nh=2303,zh=2400,Uh=2401,Fh=2402;var Vd=3200;var sa=0,Wd=1,Ni="",De="srgb",vo="srgb-linear",_o="linear",Ne="srgb";var rl=7680;var Xd=519,qd=512,Yd=513,Zd=514,Cc=515,Jd=516,$d=517,Ic=518,Kd=519,uu=35044,zr=35048;var fu="300 es",ti=2e3,cr=2001;function Kp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jd(){let i=Mo("canvas");return i.style.display="block",i}var Nf={},hr=null;function bo(...i){let t="THREE."+i.shift();hr?hr("log",t,...i):console.log(t,...i)}function Qd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function se(...i){i=Qd(i);let t="THREE."+i.shift();if(hr)hr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=Qd(i);let t="THREE."+i.shift();if(hr)hr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _s(...i){let t=i.join(" ");t in Nf||(Nf[t]=!0,se(...i))}function t0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var e0={[ol]:al,[ll]:ul,[cl]:fl,[lr]:hl,[al]:ol,[ul]:ll,[fl]:cl,[hl]:lr},pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zf=1234567,po=Math.PI/180,ur=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function du(i,t){return(i%t+t)%t}function Qp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function tm(i,t,e){return i!==t?(e-i)/(t-i):0}function mo(i,t,e){return(1-e)*i+e*t}function em(i,t,e,n){return mo(i,t,1-Math.exp(-e*n))}function nm(i,t=1){return t-Math.abs(du(i,t*2)-t)}function im(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function sm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function om(i,t){return i+Math.random()*(t-i)}function am(i){return i*(.5-Math.random())}function lm(i){i!==void 0&&(zf=i);let t=zf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cm(i){return i*po}function hm(i){return i*ur}function um(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function fm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ur={DEG2RAD:po,RAD2DEG:ur,generateUUID:ei,clamp:me,euclideanModulo:du,mapLinear:Qp,inverseLerp:tm,lerp:mo,damp:em,pingpong:nm,smoothstep:im,smootherstep:sm,randInt:rm,randFloat:om,randFloatSpread:am,seededRandom:lm,degToRad:cm,radToDeg:hm,isPowerOfTwo:um,ceilPowerOfTwo:fm,floorPowerOfTwo:dm,setQuaternionFromProperEuler:pm,normalize:ze,denormalize:Qn},vu=class vu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vu.prototype.isVector2=!0;var vt=vu,Qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+u*x;m<0&&(f=-f,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);p=Math.sin(p*v)/T,a=Math.sin(a*v)/T,l=l*p+f*a,c=c*p+d*a,h=h*p+g*a,u=u*p+x*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+g*a,u=u*p+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_u=class _u{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oh.copy(this).projectOnVector(t),this.sub(oh)}reflect(t){return this.sub(oh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_u.prototype.isVector3=!0;var U=_u,oh=new U,Uf=new Qe,Mu=class Mu{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],T=s[4],E=s[7],_=s[2],b=s[5],S=s[8];return r[0]=o*x+a*v+l*_,r[3]=o*m+a*T+l*b,r[6]=o*p+a*E+l*S,r[1]=c*x+h*v+u*_,r[4]=c*m+h*T+u*b,r[7]=c*p+h*E+u*S,r[2]=f*x+d*v+g*_,r[5]=f*m+d*T+g*b,r[8]=f*p+d*E+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ah.makeScale(t,e)),this}rotate(t){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ah.makeRotation(-t)),this}translate(t,e){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ah.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mu.prototype.isMatrix3=!0;var ce=Mu,ah=new ce,Ff=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bf=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mm(){let i={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ne&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ne&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?_o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vo]:{primaries:t,whitePoint:n,transfer:_o,toXYZ:Ff,fromXYZ:Bf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:Ff,fromXYZ:Bf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var we=mm();function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,ml=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vs===void 0&&(Vs=Mo("canvas")),Vs.width=t.width,Vs.height=t.height;let s=Vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ii(e[n]/255)*255):e[n]=Ii(e[n]);return{data:e,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gm=0,fr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lh(s[o].image)):r.push(lh(s[o]))}else r=lh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function lh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}var xm=0,ch=new U,un=class i extends pi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ui,s=ui,r=pn,o=es,a=kn,l=An,c=i.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=ei(),this.name="",this.source=new fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ch).x}get height(){return this.source.getSize(ch).y}get depth(){return this.source.getSize(ch).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){se(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=su;un.DEFAULT_ANISOTROPY=1;var bu=class bu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,E=(d+1)/2,_=(p+1)/2,b=(h+f)/4,S=(u+x)/4,y=(g+m)/4;return T>E&&T>_?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=S/n):E>_?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=b/s,r=y/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=S/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bu.prototype.isVector4=!0;var Pe=bu,gl=class extends pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new un(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends gl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Eo=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xl=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Hl=class Hl{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ws.setFromMatrixColumn(t,0).length(),r=1/Ws.setFromMatrixColumn(t,1).length(),o=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ym,t,vm)}lookAt(t,e,n){let s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Wi.crossVectors(n,zn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Wi.crossVectors(n,zn)),Wi.normalize(),Ia.crossVectors(zn,Wi),s[0]=Wi.x,s[4]=Ia.x,s[8]=zn.x,s[1]=Wi.y,s[5]=Ia.y,s[9]=zn.y,s[2]=Wi.z,s[6]=Ia.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],T=n[7],E=n[11],_=n[15],b=s[0],S=s[4],y=s[8],w=s[12],A=s[1],L=s[5],M=s[9],P=s[13],C=s[2],I=s[6],z=s[10],O=s[14],V=s[3],G=s[7],X=s[11],Z=s[15];return r[0]=o*b+a*A+l*C+c*V,r[4]=o*S+a*L+l*I+c*G,r[8]=o*y+a*M+l*z+c*X,r[12]=o*w+a*P+l*O+c*Z,r[1]=h*b+u*A+f*C+d*V,r[5]=h*S+u*L+f*I+d*G,r[9]=h*y+u*M+f*z+d*X,r[13]=h*w+u*P+f*O+d*Z,r[2]=g*b+x*A+m*C+p*V,r[6]=g*S+x*L+m*I+p*G,r[10]=g*y+x*M+m*z+p*X,r[14]=g*w+x*P+m*O+p*Z,r[3]=v*b+T*A+E*C+_*V,r[7]=v*S+T*L+E*I+_*G,r[11]=v*y+T*M+E*z+_*X,r[15]=v*w+T*P+E*O+_*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],v=l*d-c*f,T=a*d-c*u,E=a*f-l*u,_=o*d-c*h,b=o*f-l*h,S=o*u-a*h;return e*(x*v-m*T+p*E)-n*(g*v-m*_+p*b)+s*(g*T-x*_+p*S)-r*(g*E-x*b+m*S)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=e*a-n*o,T=e*l-s*o,E=e*c-r*o,_=n*l-s*a,b=n*c-r*a,S=s*c-r*l,y=h*x-u*g,w=h*m-f*g,A=h*p-d*g,L=u*m-f*x,M=u*p-d*x,P=f*p-d*m,C=v*P-T*M+E*L+_*A-b*w+S*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return t[0]=(a*P-l*M+c*L)*I,t[1]=(s*M-n*P-r*L)*I,t[2]=(x*S-m*b+p*_)*I,t[3]=(f*b-u*S-d*_)*I,t[4]=(l*A-o*P-c*w)*I,t[5]=(e*P-s*A+r*w)*I,t[6]=(m*E-g*S-p*T)*I,t[7]=(h*S-f*E+d*T)*I,t[8]=(o*M-a*A+c*y)*I,t[9]=(n*A-e*M-r*y)*I,t[10]=(g*b-x*E+p*v)*I,t[11]=(u*E-h*b-d*v)*I,t[12]=(a*w-o*L-l*y)*I,t[13]=(e*L-n*w+s*y)*I,t[14]=(x*T-g*_-m*v)*I,t[15]=(h*_-u*T+f*v)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,v=l*c,T=l*h,E=l*u,_=n.x,b=n.y,S=n.z;return s[0]=(1-(x+p))*_,s[1]=(d+E)*_,s[2]=(g-T)*_,s[3]=0,s[4]=(d-E)*b,s[5]=(1-(f+p))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+T)*S,s[9]=(m-v)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),l=Ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Jn.copy(this);let c=1/o,h=1/a,u=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ti,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===ti)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===cr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ti,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===ti)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===cr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Hl.prototype.isMatrix4=!0;var le=Hl,Ws=new U,Jn=new le,ym=new U(0,0,0),vm=new U(1,1,1),Wi=new U,Ia=new U,zn=new U,Of=new le,Hf=new Qe,mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Of.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Of,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var So=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_m=0,kf=new U,Xs=new Qe,Si=new le,Pa=new U,no=new U,Mm=new U,bm=new Qe,Gf=new U(1,0,0),Vf=new U(0,1,0),Wf=new U(0,0,1),Xf={type:"added"},Em={type:"removed"},qs={type:"childadded",child:null},hh={type:"childremoved",child:null},Je=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new mn,n=new Qe,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new ce}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(Gf,t)}rotateY(t){return this.rotateOnAxis(Vf,t)}rotateZ(t){return this.rotateOnAxis(Wf,t)}translateOnAxis(t,e){return kf.copy(t).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gf,t)}translateY(t){return this.translateOnAxis(Vf,t)}translateZ(t){return this.translateOnAxis(Wf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pa.copy(t):Pa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(no,Pa,this.up):Si.lookAt(Pa,no,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Si),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xf),qs.child=t,this.dispatchEvent(qs),qs.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Em),hh.child=t,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xf),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,Mm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,bm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new U(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zt=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sm={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},n0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},La={h:0,s:0,l:0};function uh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=du(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=uh(o,r,t+1/3),this.g=uh(o,r,t),this.b=uh(o,r,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:se("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=n0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return we.workingToColorSpace(vn.copy(this),t),Math.round(me(vn.r*255,0,255))*65536+Math.round(me(vn.g*255,0,255))*256+Math.round(me(vn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(vn.copy(this),e);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=De){we.workingToColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,s=vn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(La);let n=mo(Xi.h,La.h,e),s=mo(Xi.s,La.s,e),r=mo(Xi.l,La.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Ht;Ht.NAMES=n0;var pr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Li=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},$n=new U,wi=new U,fh=new U,Ti=new U,Ys=new U,Zs=new U,qf=new U,dh=new U,ph=new U,mh=new U,gh=new Pe,xh=new Pe,yh=new Pe,Ci=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),wi.subVectors(n,e),fh.subVectors(t,e);let o=$n.dot($n),a=$n.dot(wi),l=$n.dot(fh),c=wi.dot(wi),h=wi.dot(fh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return gh.setScalar(0),xh.setScalar(0),yh.setScalar(0),gh.fromBufferAttribute(t,e),xh.fromBufferAttribute(t,n),yh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(gh,r.x),o.addScaledVector(xh,r.y),o.addScaledVector(yh,r.z),o}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),wi.subVectors(t,e),$n.cross(wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$n.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ys.subVectors(s,n),Zs.subVectors(r,n),dh.subVectors(t,n);let l=Ys.dot(dh),c=Zs.dot(dh);if(l<=0&&c<=0)return e.copy(n);ph.subVectors(t,s);let h=Ys.dot(ph),u=Zs.dot(ph);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ys,o);mh.subVectors(t,r);let d=Ys.dot(mh),g=Zs.dot(mh);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Zs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return qf.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(qf,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ni=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(t.matrixWorld),this.union(Da)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),Na.subVectors(this.max,io),Js.subVectors(t.a,io),$s.subVectors(t.b,io),Ks.subVectors(t.c,io),qi.subVectors($s,Js),Yi.subVectors(Ks,$s),gs.subVectors(Js,Ks);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-gs.z,gs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,gs.z,0,-gs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-gs.y,gs.x,0];return!vh(e,Js,$s,Ks,Na)||(e=[1,0,0,0,1,0,0,0,1],!vh(e,Js,$s,Ks,Na))?!1:(za.crossVectors(qi,Yi),e=[za.x,za.y,za.z],vh(e,Js,$s,Ks,Na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ai=[new U,new U,new U,new U,new U,new U,new U,new U],Kn=new U,Da=new ni,Js=new U,$s=new U,Ks=new U,qi=new U,Yi=new U,gs=new U,io=new U,Na=new U,za=new U,xs=new U;function vh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xs.fromArray(i,r);let a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=n.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var je=new U,Ua=new vt,wm=0,Ae=class extends pi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ua.fromBufferAttribute(this,e),Ua.applyMatrix3(t),this.setXY(e,Ua.x,Ua.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ms=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wo=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tm=new ni,so=new U,_h=new U,ii=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);let e=so.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(so,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(_h)),this.expandByPoint(so.copy(t.center).sub(_h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Am=0,Xn=new le,Mh=new Je,js=new U,Un=new ni,ro=new ni,cn=new U,Ee=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kp(t)?wo:Ms)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return Mh.lookAt(t),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Un.min,ro.min),Un.expandByPoint(cn),cn.addVectors(Un.max,ro.max),Un.expandByPoint(cn)):(Un.expandByPoint(ro.min),Un.expandByPoint(ro.max))}Un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(t,c),cn.add(js)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new U,l[y]=new U;let c=new U,h=new U,u=new U,f=new vt,d=new vt,g=new vt,x=new U,m=new U;function p(y,w,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,A),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[y].add(x),a[w].add(x),a[A].add(x),l[y].add(m),l[w].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,w=v.length;y<w;++y){let A=v[y],L=A.start,M=A.count;for(let P=L,C=L+M;P<C;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let T=new U,E=new U,_=new U,b=new U;function S(y){_.fromBufferAttribute(s,y),b.copy(_);let w=a[y];T.copy(w),T.sub(_.multiplyScalar(_.dot(w))).normalize(),E.crossVectors(b,w);let L=E.dot(l[y])<0?-1:1;o.setXYZW(y,T.x,T.y,T.z,L)}for(let y=0,w=v.length;y<w;++y){let A=v[y],L=A.start,M=A.count;for(let P=L,C=L+M;P<C;P+=3)S(t.getX(P+0)),S(t.getX(P+1)),S(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Ae(f,h,u)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},To=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uu,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Sn=new U,mr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyMatrix4(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.applyNormalMatrix(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Sn.fromBufferAttribute(this,e),Sn.transformDirection(t),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},bh=new U,Rm=new U,Cm=new ce,jn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bh.subVectors(n,e).cross(Rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cm.getNormalMatrix(t),s=this.coplanarPoint(bh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Im=0,si=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Qi,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Kh,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){se(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){se(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new jn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gr=class extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qs,oo=new U,tr=new U,er=new U,nr=new vt,ao=new vt,i0=new le,Fa=new U,lo=new U,Ba=new U,Yf=new vt,Eh=new vt,Zf=new vt,Ao=class extends Je{constructor(t=new gr){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new To(e,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new mr(n,3,0,!1)),Qs.setAttribute("uv",new mr(n,2,3,!1))}this.geometry=Qs,this.material=t,this.center=new vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),i0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Oa(Fa.set(-.5,-.5,0),er,o,tr,s,r),Oa(lo.set(.5,-.5,0),er,o,tr,s,r),Oa(Ba.set(.5,.5,0),er,o,tr,s,r),Yf.set(0,0),Eh.set(1,0),Zf.set(1,1);let a=t.ray.intersectTriangle(Fa,lo,Ba,!1,oo);if(a===null&&(Oa(lo.set(-.5,.5,0),er,o,tr,s,r),Eh.set(0,1),a=t.ray.intersectTriangle(Fa,Ba,lo,!1,oo),a===null))return;let l=t.ray.origin.distanceTo(oo);l<t.near||l>t.far||e.push({distance:l,point:oo.clone(),uv:Ci.getInterpolation(oo,Fa,lo,Ba,Yf,Eh,Zf,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Oa(i,t,e,n,s,r){nr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ao.x=r*nr.x-s*nr.y,ao.y=s*nr.x+r*nr.y):ao.copy(nr),i.copy(t),i.x+=ao.x,i.y+=ao.y,i.applyMatrix4(i0)}var Ri=new U,Sh=new U,Ha=new U,ka=new U,xr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sh.copy(t).add(e).multiplyScalar(.5),Ha.copy(e).sub(t).normalize(),ka.copy(this.origin).sub(Sh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ha),a=ka.dot(this.direction),l=-ka.dot(Ha),c=ka.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sh).addScaledVector(Ha,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,v=n.y-o.y,T=n.z-o.z,E=Math.abs(l),_=Math.abs(c),b=Math.abs(h),S,y,w,A,L,M,P,C,I,z,O,V;if(E>=_&&E>=b?(w=l,M=u,I=g,V=p,l>=0?(S=c,y=h,A=f,L=d,P=x,C=m,z=v,O=T):(S=h,y=c,A=d,L=f,P=m,C=x,z=T,O=v)):_>=b?(w=c,M=f,I=x,V=v,c>=0?(S=h,y=l,A=d,L=u,P=m,C=g,z=T,O=p):(S=l,y=h,A=u,L=d,P=g,C=m,z=p,O=T)):(w=h,M=d,I=m,V=T,h>=0?(S=l,y=c,A=u,L=f,P=g,C=x,z=p,O=v):(S=c,y=l,A=f,L=u,P=x,C=g,z=v,O=p)),w===0)return null;let G=S/w,X=y/w,Z=1/w,Mt=A-G*M,Rt=L-X*M,re=P-G*I,oe=C-X*I,ie=z-G*V,B=O-X*V,J=ie*oe-B*re,mt=Mt*B-Rt*ie,Dt=re*Rt-oe*Mt;if(s){if(J<0||mt<0||Dt<0)return null}else if((J<0||mt<0||Dt<0)&&(J>0||mt>0||Dt>0))return null;let Et=J+mt+Dt;if(Et===0)return null;let Ft=Z*(J*M+mt*I+Dt*V);return(Et>0?Ft<0:Ft>0)?null:this.at(Ft/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jf=new le,ys=new xr,Ga=new ii,$f=new U,Va=new U,Wa=new U,Xa=new U,wh=new U,qa=new U,Kf=new U,Ya=new U,et=class extends Je{constructor(t=new Ee,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(wh.fromBufferAttribute(u,t),o?qa.addScaledVector(wh,h):qa.addScaledVector(wh.sub(e),h))}e.add(qa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),ys.copy(t.ray).recast(t.near),!(Ga.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Ga,$f)===null||ys.origin.distanceToSquared($f)>(t.far-t.near)**2))&&(Jf.copy(r).invert(),ys.copy(t.ray).applyMatrix4(Jf),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ys)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=v,_=T;E<_;E+=3){let b=a.getX(E),S=a.getX(E+1),y=a.getX(E+2);s=Za(this,p,t,n,c,h,u,b,S,y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);s=Za(this,o,t,n,c,h,u,v,T,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=v,_=T;E<_;E+=3){let b=E,S=E+1,y=E+2;s=Za(this,p,t,n,c,h,u,b,S,y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,T=m+1,E=m+2;s=Za(this,o,t,n,c,h,u,v,T,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Pm(i,t,e,n,s,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===mi,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ya);return c<e.near||c>e.far?null:{distance:c,point:Ya.clone(),object:i}}function Za(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Va),i.getVertexPosition(l,Wa),i.getVertexPosition(c,Xa);let h=Pm(i,t,e,n,Va,Wa,Xa,Kf);if(h){let u=new U;Ci.getBarycoord(Kf,Va,Wa,Xa,u),s&&(h.uv=Ci.getInterpolatedAttribute(s,a,l,c,u,new vt)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,a,l,c,u,new vt)),o&&(h.normal=Ci.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};Ci.getNormal(Va,Wa,Xa,f.normal),h.face=f,h.barycoord=u}return h}var co=new Pe,jf=new Pe,Qf=new Pe,Lm=new Pe,td=new le,Ja=new U,Th=new ii,ed=new le,Ah=new xr,Ro=class extends et{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dh,this.bindMatrix=new le,this.bindMatrixInverse=new le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ja),this.boundingBox.expandByPoint(Ja)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ja),this.boundingSphere.expandByPoint(Ja)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Th.copy(this.boundingSphere),Th.applyMatrix4(s),t.ray.intersectsSphere(Th)!==!1&&(ed.copy(s).invert(),Ah.copy(t.ray).applyMatrix4(ed),!(this.boundingBox!==null&&Ah.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ah)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Pe,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kd?this.bindMatrixInverse.copy(this.bindMatrix).invert():se("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;jf.fromBufferAttribute(s.attributes.skinIndex,t),Qf.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(co.copy(e),e.set(0,0,0,0)):(co.set(...e,1),e.set(0,0,0)),co.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Qf.getComponent(r);if(o!==0){let a=jf.getComponent(r);td.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Lm.copy(co).applyMatrix4(td),o)}}return e.isVector4&&(e.w=co.w),e.applyMatrix4(this.bindMatrixInverse)}},yr=class extends Je{constructor(){super(),this.isBone=!0,this.type="Bone"}},vr=class extends un{constructor(t=null,e=1,n=1,s,r,o,a,l,c=hn,h=hn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nd=new le,Dm=new le,Co=class i{constructor(t=[],e=[]){this.uuid=ei(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){se("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new le)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new le;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Dm;nd.multiplyMatrices(a,e[r]),nd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new vr(e,t,t,kn,Hn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(se("Skeleton: No bone found with UUID:",r),o=new yr),this.bones.push(o),this.boneInverses.push(new le().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},_r=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ir=new le,id=new le,$a=[],sd=new ni,Nm=new le,ho=new et,uo=new ii,Io=class extends et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),sd.copy(t.boundingBox).applyMatrix4(ir),this.boundingBox.union(sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),uo.copy(t.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),t.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),id.multiplyMatrices(n,ir),ho.matrixWorld=id,ho.raycast(t,$a);for(let o=0,a=$a.length;o<a;o++){let l=$a[o];l.instanceId=r,l.object=this,e.push(l)}$a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,Jl,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new ii,zm=new vt(.5,.5),Ka=new U,Mr=class{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,o=new jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],T=r[13],E=r[14],_=r[15];if(s[0].setComponents(c-o,d-h,p-g,_-v).normalize(),s[1].setComponents(c+o,d+h,p+g,_+v).normalize(),s[2].setComponents(c+a,d+u,p+x,_+T).normalize(),s[3].setComponents(c-a,d-u,p-x,_-T).normalize(),n)s[4].setComponents(l,f,m,E).normalize(),s[5].setComponents(c-l,d-f,p-m,_-E).normalize();else if(s[4].setComponents(c-l,d-f,p-m,_-E).normalize(),e===ti)s[5].setComponents(c+l,d+f,p+m,_+E).normalize();else if(e===cr)s[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);let e=zm.distanceTo(t.center);return vs.radius=.7071067811865476+e,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ka.x=s.normal.x>0?t.max.x:t.min.x,Ka.y=s.normal.y>0?t.max.y:t.min.y,Ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var br=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rd=new le,Bh=new xr,ja=new ii,Qa=new U,Er=class extends Je{constructor(t=new Ee,e=new br){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,t.ray.intersectsSphere(ja)===!1)return;rd.copy(s).invert(),Bh.copy(t.ray).applyMatrix4(rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Qa.fromBufferAttribute(u,m),od(Qa,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Qa.fromBufferAttribute(u,g),od(Qa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function od(i,t,e,n,s,r,o){let a=Bh.distanceSqToPoint(i);if(a<e){let l=new U;Bh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Po=class extends un{constructor(t=[],e=ts,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tn=class extends un{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ji=class extends un{constructor(t,e,n=oi,s,r,o,a=hn,l=hn,c,h=di,u=1){if(h!==di&&h!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yl=class extends Ji{constructor(t,e=oi,n=ts,s,r,o=hn,a=hn,l,c=di){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Lo=class extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qt=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function g(x,m,p,v,T,E,_,b,S,y,w){let A=E/S,L=_/y,M=E/2,P=_/2,C=b/2,I=S+1,z=y+1,O=0,V=0,G=new U;for(let X=0;X<z;X++){let Z=X*L-P;for(let Mt=0;Mt<I;Mt++){let Rt=Mt*A-M;G[x]=Rt*v,G[m]=Z*T,G[p]=C,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[p]=b>0?1:-1,h.push(G.x,G.y,G.z),u.push(Mt/S),u.push(1-X/y),O+=1}}for(let X=0;X<y;X++)for(let Z=0;Z<S;Z++){let Mt=f+Z+I*X,Rt=f+Z+I*(X+1),re=f+(Z+1)+I*(X+1),oe=f+(Z+1)+I*X;l.push(Mt,Rt,oe),l.push(Rt,re,oe),V+=6}a.addGroup(d,V,w),d+=V,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var bs=class i extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},It=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(d,2));function v(){let E=new U,_=new U,b=0,S=(e-t)/n;for(let y=0;y<=r;y++){let w=[],A=y/r,L=A*(e-t)+t;for(let M=0;M<=s;M++){let P=M/s,C=P*l+a,I=Math.sin(C),z=Math.cos(C);_.x=L*I,_.y=-A*n+m,_.z=L*z,u.push(_.x,_.y,_.z),E.set(I,S,z).normalize(),f.push(E.x,E.y,E.z),d.push(P,1-A),w.push(g++)}x.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let A=x[w][y],L=x[w+1][y],M=x[w+1][y+1],P=x[w][y+1];(t>0||w!==0)&&(h.push(A,L,P),b+=3),(e>0||w!==r-1)&&(h.push(L,M,P),b+=3)}c.addGroup(p,b,0),p+=b}function T(E){let _=g,b=new vt,S=new U,y=0,w=E===!0?t:e,A=E===!0?1:-1;for(let M=1;M<=s;M++)u.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),g++;let L=g;for(let M=0;M<=s;M++){let C=M/s*l+a,I=Math.cos(C),z=Math.sin(C);S.x=w*z,S.y=m*A,S.z=w*I,u.push(S.x,S.y,S.z),f.push(0,A,0),b.x=I*.5+.5,b.y=z*.5*A+.5,d.push(b.x,b.y),g++}for(let M=0;M<s;M++){let P=_+M,C=L+M;E===!0?h.push(C,C+1,P):h.push(C+1,C,P),y+=3}c.addGroup(p,y,E===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_n=class i extends It{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vl=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let T=new U,E=new U,_=new U;for(let b=0;b<e.length;b+=3)d(e[b+0],T),d(e[b+1],E),d(e[b+2],_),l(T,E,_,v)}function l(v,T,E,_){let b=_+1,S=[];for(let y=0;y<=b;y++){S[y]=[];let w=v.clone().lerp(E,y/b),A=T.clone().lerp(E,y/b),L=b-y;for(let M=0;M<=L;M++)M===0&&y===b?S[y][M]=w:S[y][M]=w.clone().lerp(A,M/L)}for(let y=0;y<b;y++)for(let w=0;w<2*(b-y)-1;w++){let A=Math.floor(w/2);w%2===0?(f(S[y][A+1]),f(S[y+1][A]),f(S[y][A])):(f(S[y][A+1]),f(S[y+1][A+1]),f(S[y+1][A]))}}function c(v){let T=new U;for(let E=0;E<r.length;E+=3)T.x=r[E+0],T.y=r[E+1],T.z=r[E+2],T.normalize().multiplyScalar(v),r[E+0]=T.x,r[E+1]=T.y,r[E+2]=T.z}function h(){let v=new U;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let E=m(v)/2/Math.PI+.5,_=p(v)/Math.PI+.5;o.push(E,1-_)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let T=o[v+0],E=o[v+2],_=o[v+4],b=Math.max(T,E,_),S=Math.min(T,E,_);b>.9&&S<.1&&(T<.2&&(o[v+0]+=1),E<.2&&(o[v+2]+=1),_<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,T){let E=v*3;T.x=t[E+0],T.y=t[E+1],T.z=t[E+2]}function g(){let v=new U,T=new U,E=new U,_=new U,b=new vt,S=new vt,y=new vt;for(let w=0,A=0;w<r.length;w+=9,A+=6){v.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),E.set(r[w+6],r[w+7],r[w+8]),b.set(o[A+0],o[A+1]),S.set(o[A+2],o[A+3]),y.set(o[A+4],o[A+5]),_.copy(v).add(T).add(E).divideScalar(3);let L=m(_);x(b,A+0,v,L),x(S,A+2,T,L),x(y,A+4,E,L)}}function x(v,T,E,_){_<0&&v.x===1&&(o[T]=v.x-1),E.x===0&&E.z===0&&(o[T]=_/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],o=[],a=new U,l=new le;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(me(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(me(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sr=class extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_l=class extends Sr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ad=new U,ld=new U,Rh=new pu,Ch=new pu,Ih=new pu,wr=class extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ld.subVectors(s[0],s[1]).add(s[0]),c=ld);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ad.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ad),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Rh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Ch.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Ih.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Rh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ch.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ih.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Rh.calc(l),Ch.calc(l),Ih.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Um(i,t){let e=1-i;return e*e*t}function Fm(i,t){return 2*(1-i)*i*t}function Bm(i,t){return i*i*t}function go(i,t,e,n){return Um(i,t)+Fm(i,e)+Bm(i,n)}function Om(i,t){let e=1-i;return e*e*e*t}function Hm(i,t){let e=1-i;return 3*e*e*i*t}function km(i,t){return 3*(1-i)*i*i*t}function Gm(i,t){return i*i*i*t}function xo(i,t,e,n,s){return Om(i,t)+Hm(i,e)+km(i,n)+Gm(i,s)}var Do=class extends Fn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ml=class extends Fn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y),xo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},No=class extends Fn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bl=class extends Fn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends Fn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},El=class extends Fn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y),go(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(cd(a,l.x,c.x,h.x,u.x),cd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},Oh=Object.freeze({__proto__:null,ArcCurve:_l,CatmullRomCurve3:wr,CubicBezierCurve:Do,CubicBezierCurve3:Ml,EllipseCurve:Sr,LineCurve:No,LineCurve3:bl,QuadraticBezierCurve:zo,QuadraticBezierCurve3:El,SplineCurve:Uo}),Sl=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Oh[s.type]().fromJSON(s))}return this}},Fo=class extends Sl{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new No(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new zo(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Do(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Sr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Bn=class extends Fo{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Fo().fromJSON(s))}return this}};function Vm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=s0(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Zm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Bo(r,o,e,a,l,c,0),o}function s0(i,t,e,n,s){let r;if(s===rg(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=hd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=hd(o/n|0,i[o],i[o+1],r);return r&&Tr(r,r.next)&&(Ho(r),r=r.next),r}function Es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Tr(e,e.next)||qe(e.prev,e,e.next)===0)){if(Ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Qm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Xm(i,n,s,r):Wm(i)){t.push(l.i,i.i,c.i),Ho(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=qm(Es(i),t),Bo(i,t,e,n,s,r,2)):o===2&&Ym(i,t,e,n,s,r):Bo(Es(i),t,e,n,s,r,1);break}}}function Wm(i){let t=i.prev,e=i,n=i.next;if(qe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&fo(s,a,r,l,o,c,g.x,g.y)&&qe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(qe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),p=Hh(d,g,t,e,n),v=Hh(x,m,t,e,n),T=i.prevZ,E=i.nextZ;for(;T&&T.z>=p&&E&&E.z<=v;){if(T.x>=d&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&fo(a,h,l,u,c,f,T.x,T.y)&&qe(T.prev,T,T.next)>=0||(T=T.prevZ,E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&fo(a,h,l,u,c,f,E.x,E.y)&&qe(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&fo(a,h,l,u,c,f,T.x,T.y)&&qe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;E&&E.z<=v;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&fo(a,h,l,u,c,f,E.x,E.y)&&qe(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function qm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Tr(n,s)&&o0(n,e,e.next,s)&&Oo(n,s)&&Oo(s,n)&&(t.push(n.i,e.i,s.i),Ho(e),Ho(e.next),e=i=s),e=e.next}while(e!==i);return Es(e)}function Ym(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ng(o,a)){let l=a0(o,a);o=Es(o,o.next),l=Es(l,l.next),Bo(o,t,e,n,s,r,0),Bo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Zm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=s0(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(eg(c))}s.sort(Jm);for(let r=0;r<s.length;r++)e=$m(s[r],e);return e}function Jm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function $m(i,t){let e=Km(i,t);if(!e)return t;let n=a0(e,i);return Es(n,n.next),Es(e,e.next)}function Km(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Tr(i,e))return e;do{if(Tr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&r0(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Oo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&jm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function jm(i,t){return qe(i.prev,i,t.prev)<0&&qe(t.next,i,i.next)<0}function Qm(i,t,e,n){let s=i;do s.z===0&&(s.z=Hh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tg(s)}function tg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Hh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function eg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function r0(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&r0(i,t,e,n,s,r,o,a)}function ng(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ig(i,t)&&(Oo(i,t)&&Oo(t,i)&&sg(i,t)&&(qe(i.prev,i,t.prev)||qe(i,t.prev,t))||Tr(i,t)&&qe(i.prev,i,i.next)>0&&qe(t.prev,t,t.next)>0)}function qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Tr(i,t){return i.x===t.x&&i.y===t.y}function o0(i,t,e,n){let s=el(qe(i,t,e)),r=el(qe(i,t,n)),o=el(qe(e,n,i)),a=el(qe(e,n,t));return!!(s!==r&&o!==a||s===0&&tl(i,e,t)||r===0&&tl(i,n,t)||o===0&&tl(e,i,n)||a===0&&tl(e,t,n))}function tl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function el(i){return i>0?1:i<0?-1:0}function ig(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&o0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Oo(i,t){return qe(i.prev,i,i.next)<0?qe(i,t,i.next)>=0&&qe(i,i.prev,t)>=0:qe(i,t,i.prev)<0||qe(i,i.next,t)<0}function sg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function a0(i,t){let e=kh(i.i,i.x,i.y),n=kh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hd(i,t,e,n){let s=kh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Gh=class{static triangulate(t,e,n=2){return Vm(t,e,n)}},fi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ud(t),fd(n,t);let o=t.length;e.forEach(ud);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,fd(n,e[l]);let a=Gh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ud(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Di=class i extends Ee{constructor(t=new Bn([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:og,T,E=!1,_,b,S,y;if(p){T=p.getSpacedPoints(h),E=!0,f=!1;let ot=p.isCatmullRomCurve3?p.closed:!1;_=p.computeFrenetFrames(h,ot),b=new U,S=new U,y=new U}f||(m=0,d=0,g=0,x=0);let w=a.extractPoints(c),A=w.shape,L=w.holes;if(!fi.isClockWise(A)){A=A.reverse();for(let ot=0,ft=L.length;ot<ft;ot++){let dt=L[ot];fi.isClockWise(dt)&&(L[ot]=dt.reverse())}}function P(ot){let dt=10000000000000001e-36,rt=ot[0];for(let gt=1;gt<=ot.length;gt++){let bt=gt%ot.length,Nt=ot[bt],Lt=Nt.x-rt.x,kt=Nt.y-rt.y,H=Lt*Lt+kt*kt,xe=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(rt.x),Math.abs(rt.y)),he=dt*xe*xe;if(H<=he){ot.splice(bt,1),gt--;continue}rt=Nt}}P(A),L.forEach(P);let C=L.length,I=A;for(let ot=0;ot<C;ot++){let ft=L[ot];A=A.concat(ft)}function z(ot,ft,dt){return ft||ae("ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(ft,dt)}let O=A.length;function V(ot,ft,dt){let rt,gt,bt,Nt=ot.x-ft.x,Lt=ot.y-ft.y,kt=dt.x-ot.x,H=dt.y-ot.y,xe=Nt*Nt+Lt*Lt,he=Nt*H-Lt*kt;if(Math.abs(he)>Number.EPSILON){let N=Math.sqrt(xe),R=Math.sqrt(kt*kt+H*H),q=ft.x-Lt/N,K=ft.y+Nt/N,it=dt.x-H/R,wt=dt.y+kt/R,Tt=((it-q)*H-(wt-K)*kt)/(Nt*H-Lt*kt);rt=q+Nt*Tt-ot.x,gt=K+Lt*Tt-ot.y;let st=rt*rt+gt*gt;if(st<=2)return new vt(rt,gt);bt=Math.sqrt(st/2)}else{let N=!1;Nt>Number.EPSILON?kt>Number.EPSILON&&(N=!0):Nt<-Number.EPSILON?kt<-Number.EPSILON&&(N=!0):Math.sign(Lt)===Math.sign(H)&&(N=!0),N?(rt=-Lt,gt=Nt,bt=Math.sqrt(xe)):(rt=Nt,gt=Lt,bt=Math.sqrt(xe/2))}return new vt(rt/bt,gt/bt)}let G=[];for(let ot=0,ft=I.length,dt=ft-1,rt=ot+1;ot<ft;ot++,dt++,rt++)dt===ft&&(dt=0),rt===ft&&(rt=0),G[ot]=V(I[ot],I[dt],I[rt]);let X=[],Z,Mt=G.concat();for(let ot=0,ft=C;ot<ft;ot++){let dt=L[ot];Z=[];for(let rt=0,gt=dt.length,bt=gt-1,Nt=rt+1;rt<gt;rt++,bt++,Nt++)bt===gt&&(bt=0),Nt===gt&&(Nt=0),Z[rt]=V(dt[rt],dt[bt],dt[Nt]);X.push(Z),Mt=Mt.concat(Z)}let Rt;if(m===0)Rt=fi.triangulateShape(I,L);else{let ot=[],ft=[];for(let dt=0;dt<m;dt++){let rt=dt/m,gt=d*Math.cos(rt*Math.PI/2),bt=g*Math.sin(rt*Math.PI/2)+x;for(let Nt=0,Lt=I.length;Nt<Lt;Nt++){let kt=z(I[Nt],G[Nt],bt);mt(kt.x,kt.y,-gt),rt===0&&ot.push(kt)}for(let Nt=0,Lt=C;Nt<Lt;Nt++){let kt=L[Nt];Z=X[Nt];let H=[];for(let xe=0,he=kt.length;xe<he;xe++){let N=z(kt[xe],Z[xe],bt);mt(N.x,N.y,-gt),rt===0&&H.push(N)}rt===0&&ft.push(H)}}Rt=fi.triangulateShape(ot,ft)}let re=Rt.length,oe=g+x;for(let ot=0;ot<O;ot++){let ft=f?z(A[ot],Mt[ot],oe):A[ot];E?(S.copy(_.normals[0]).multiplyScalar(ft.x),b.copy(_.binormals[0]).multiplyScalar(ft.y),y.copy(T[0]).add(S).add(b),mt(y.x,y.y,y.z)):mt(ft.x,ft.y,0)}for(let ot=1;ot<=h;ot++)for(let ft=0;ft<O;ft++){let dt=f?z(A[ft],Mt[ft],oe):A[ft];E?(S.copy(_.normals[ot]).multiplyScalar(dt.x),b.copy(_.binormals[ot]).multiplyScalar(dt.y),y.copy(T[ot]).add(S).add(b),mt(y.x,y.y,y.z)):mt(dt.x,dt.y,u/h*ot)}for(let ot=m-1;ot>=0;ot--){let ft=ot/m,dt=d*Math.cos(ft*Math.PI/2),rt=g*Math.sin(ft*Math.PI/2)+x;for(let gt=0,bt=I.length;gt<bt;gt++){let Nt=z(I[gt],G[gt],rt);mt(Nt.x,Nt.y,u+dt)}for(let gt=0,bt=L.length;gt<bt;gt++){let Nt=L[gt];Z=X[gt];for(let Lt=0,kt=Nt.length;Lt<kt;Lt++){let H=z(Nt[Lt],Z[Lt],rt);E?mt(H.x,H.y+T[h-1].y,T[h-1].x+dt):mt(H.x,H.y,u+dt)}}}ie(),B();function ie(){let ot=s.length/3;if(f){let ft=0,dt=O*ft;for(let rt=0;rt<re;rt++){let gt=Rt[rt];Dt(gt[2]+dt,gt[1]+dt,gt[0]+dt)}ft=h+m*2,dt=O*ft;for(let rt=0;rt<re;rt++){let gt=Rt[rt];Dt(gt[0]+dt,gt[1]+dt,gt[2]+dt)}}else{for(let ft=0;ft<re;ft++){let dt=Rt[ft];Dt(dt[2],dt[1],dt[0])}for(let ft=0;ft<re;ft++){let dt=Rt[ft];Dt(dt[0]+O*h,dt[1]+O*h,dt[2]+O*h)}}n.addGroup(ot,s.length/3-ot,0)}function B(){let ot=s.length/3,ft=0;J(I,ft),ft+=I.length;for(let dt=0,rt=L.length;dt<rt;dt++){let gt=L[dt];J(gt,ft),ft+=gt.length}n.addGroup(ot,s.length/3-ot,1)}function J(ot,ft){let dt=ot.length;for(;--dt>=0;){let rt=dt,gt=dt-1;gt<0&&(gt=ot.length-1);for(let bt=0,Nt=h+m*2;bt<Nt;bt++){let Lt=O*bt,kt=O*(bt+1),H=ft+rt+Lt,xe=ft+gt+Lt,he=ft+gt+kt,N=ft+rt+kt;Et(H,xe,he,N)}}}function mt(ot,ft,dt){l.push(ot),l.push(ft),l.push(dt)}function Dt(ot,ft,dt){Ft(ot),Ft(ft),Ft(dt);let rt=s.length/3,gt=v.generateTopUV(n,s,rt-3,rt-2,rt-1);Yt(gt[0]),Yt(gt[1]),Yt(gt[2])}function Et(ot,ft,dt,rt){Ft(ot),Ft(ft),Ft(rt),Ft(ft),Ft(dt),Ft(rt);let gt=s.length/3,bt=v.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);Yt(bt[0]),Yt(bt[1]),Yt(bt[3]),Yt(bt[1]),Yt(bt[2]),Yt(bt[3])}function Ft(ot){s.push(l[ot*3+0]),s.push(l[ot*3+1]),s.push(l[ot*3+2])}function Yt(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ag(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oh[s.type]().fromJSON(s)),new i(n,t.options)}},og={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new vt(r,o),new vt(a,l),new vt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new vt(o,1-l),new vt(c,1-u),new vt(f,1-g),new vt(x,1-p)]:[new vt(a,1-l),new vt(h,1-u),new vt(d,1-g),new vt(m,1-p)]}};function ag(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ko=class i extends vl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ar=class i extends Ee{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new U,f=new vt,d=new U,g=new U,x=new U,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let v=0;v<=e;v++){let T=n+v*h*s,E=Math.sin(T),_=Math.cos(T);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*E,u.y=t[b].y,u.z=t[b].x*_,o.push(u.x,u.y,u.z),f.x=v/e,f.y=b/(t.length-1),a.push(f.x,f.y);let S=l[3*b+0]*E,y=l[3*b+1],w=l[3*b+0]*_;c.push(S,y,w)}}for(let v=0;v<e;v++)for(let T=0;T<t.length-1;T++){let E=T+v*t.length,_=E,b=E+t.length,S=E+t.length+1,y=E+1;r.push(_,b,y),r.push(S,y,b)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ke=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let T=0;T<c;T++){let E=T*u-r;g.push(E,-v,0),x.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let T=v+c*p,E=v+c*(p+1),_=v+1+c*(p+1),b=v+1+c*p;d.push(T,E,b),d.push(E,_,b)}this.setIndex(d),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Go=class i extends Ee{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new U,g=new vt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let v=p+m,T=v,E=v+n+1,_=v+n+2,b=v+1;a.push(T,E,b),a.push(E,_,b)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Vo=class i extends Ee{constructor(t=new Bn([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;fi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];fi.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=fi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){let v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],T=v[0]+u,E=v[1]+u,_=v[2]+u;n.push(T,E,_),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return lg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function lg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var _e=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,f=new U,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],T=p/n,E=o+T*a,_=t*Math.cos(E),b=Math.sqrt(t*t-_*_),S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let y=0;y<=e;y++){let w=y/e,A=s+w*r;u.x=-b*Math.cos(A),u.y=_,u.z=b*Math.sin(A),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(w+S,1-T),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let T=h[p][v+1],E=h[p][v],_=h[p+1][v],b=h[p+1][v+1];(p!==0||o>0)&&d.push(T,E,b),(p!==n-1||l<Math.PI)&&d.push(E,_,b)}this.setIndex(d),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ce=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new U,d=new U,g=new U;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let v=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,T=(s+1)*(x-1)+m,E=(s+1)*x+m;l.push(p,v,E),l.push(v,T,E)}this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(dd(s))s.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(dd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Mn(i){let t={};for(let e=0;e<i.length;e++){let n=Rs(i[e]);for(let s in n)t[s]=n[s]}return t}function dd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var l0={clone:Rs,merge:Mn},hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wl=class extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ne=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Rr=class extends ne{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Wo=class extends si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Gl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Tl=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Al=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function sr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ph(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Rl=class extends $i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uh:r=t,a=2*e-n;break;case Fh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uh:o=t,l=2*n-e;break;case Fh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-d)*m+(1.5+d)*x+.5*g,E=d*m-d*x;for(let _=0;_!==a;++_)r[_]=p*o[h+_]+v*o[c+_]+T*o[l+_]+E*o[u+_];return r}},Cl=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Il=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pl=class extends $i{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=d*f+g*2,v=u[p],T=u[p+1],E=t*f+g*2,_=h[E],b=h[E+1],S=dg(n,e,v,_,s);r[g]=c0(S,x,T,b,m)}return r}};function c0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function fg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function dg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=c0(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=fg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sr(e,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sr(t.times,Array),values:sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ph(t.settings)&&(n.settings={inTangents:sr(t.settings.inTangents,Array),outTangents:sr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case yo:e=this.InterpolantFactoryMethodDiscrete;break;case pl:e=this.InterpolantFactoryMethodLinear;break;case sl:e=this.InterpolantFactoryMethodSmooth;break;case Nh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return se("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return sl;case this.InterpolantFactoryMethodBezier:return Nh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ph(this.settings)&&(pd(this.settings.inTangents,t),pd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ae("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ae("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&jp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ae("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ph(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=pl;var Ki=class extends On{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=yo;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};Ll.prototype.ValueTypeName="color";var Dl=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};Dl.prototype.ValueTypeName="number";var Nl=class extends $i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xo=class extends On{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Nl(this.times,this.values,this.getValueSize(),t)}};Xo.prototype.ValueTypeName="quaternion";Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends On{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=yo;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};zl.prototype.ValueTypeName="vector";var Ul=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},h0=new Ul,Fl=class{constructor(t){this.manager=t!==void 0?t:h0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ss=class extends Cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Lh=new le,md=new U,gd=new U,qo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Lh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===cr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},nl=new U,il=new Qe,hi=new U,Yo=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nl,il,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(nl,il,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new U,xd=new vt,yd=new vt,rn=class extends Yo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,xd,yd),e.subVectors(yd,xd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Vh=class extends qo{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},Zo=class extends Cr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ir=class extends Yo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Wh=class extends qo{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Wh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var rr=-90,or=1,Bl=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(rr,or,t,e);s.layers=this.layers,this.add(s);let r=new rn(rr,or,t,e);r.layers=this.layers,this.add(r);let o=new rn(rr,or,t,e);o.layers=this.layers,this.add(o);let a=new rn(rr,or,t,e);a.layers=this.layers,this.add(a);let l=new rn(rr,or,t,e);l.layers=this.layers,this.add(l);let c=new rn(rr,or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ol=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gu="\\[\\]\\.:\\/",pg=new RegExp("["+gu+"]","g"),xu="[^"+gu+"]",mg="[^"+gu.replace("\\.","")+"]",gg=/((?:WC+[\/:])*)/.source.replace("WC",xu),xg=/(WCOD+)?/.source.replace("WCOD",mg),yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),_g=new RegExp("^"+gg+xg+yg+vg+"$"),Mg=["material","materials","bones","map"],Xh=class{constructor(t,e,n){let s=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(t){let e=_g.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Xh;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _M=new Float32Array(1);var Eu=class Eu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Eu.prototype.isMatrix2=!0;var qh=Eu;function yu(i,t,e,n){let s=bg(n);switch(e){case cu:return i*t;case Jl:return i*t/s.components*s.byteLength;case $l:return i*t/s.components*s.byteLength;case is:return i*t*2/s.components*s.byteLength;case Kl:return i*t*2/s.components*s.byteLength;case hu:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case jl:return i*t*4/s.components*s.byteLength;case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(i,16)*Math.max(t,8)/4;case Ql:case ec:return Math.max(i,8)*Math.max(t,8)/2;case ic:case sc:case oc:case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rc:case na:case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ec:case Sc:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tc:case Ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ia:case Rc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bg(i){switch(i){case An:case ru:return{byteLength:1,components:1};case Dr:case ou:case ai:return{byteLength:2,components:1};case Yl:case Zl:return{byteLength:2,components:4};case oi:case ql:case Hn:return{byteLength:4,components:1};case au:case lu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function L0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
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
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zg=`#ifdef USE_AOMAP
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
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
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
#endif`,Bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
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
#endif`,Vg=`#ifdef USE_BUMPMAP
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jg=`#define PI 3.141592653589793
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
} // validated`,Qg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tx=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mx=`#ifdef USE_ENVMAP
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
#endif`,bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
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
#endif`,Ax=`uniform sampler2D dfgLUT;
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
}`,Rx=`
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ox=`#if defined( USE_POINTS_UV )
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
#endif`,Hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
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
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p1=`float getShadowMask() {
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
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,x1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I1=`uniform sampler2D t2D;
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
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
}`,U1=`#if DEPTH_PACKING == 3200
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
}`,F1=`#define DISTANCE
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
}`,B1=`#define DISTANCE
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`uniform float scale;
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,W1=`uniform vec3 diffuse;
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
}`,X1=`#define LAMBERT
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
}`,q1=`#define LAMBERT
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
}`,Y1=`#define MATCAP
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
}`,Z1=`#define MATCAP
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
}`,J1=`#define NORMAL
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
}`,$1=`#define NORMAL
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
}`,K1=`#define PHONG
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
}`,j1=`#define PHONG
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
}`,Q1=`#define STANDARD
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
}`,ty=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ny=`#define TOON
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
}`,iy=`uniform float size;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,oy=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:Cg,alphahash_pars_fragment:Ig,alphamap_fragment:Pg,alphamap_pars_fragment:Lg,alphatest_fragment:Dg,alphatest_pars_fragment:Ng,aomap_fragment:zg,aomap_pars_fragment:Ug,batching_pars_vertex:Fg,batching_vertex:Bg,begin_vertex:Og,beginnormal_vertex:Hg,bsdfs:kg,iridescence_fragment:Gg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Yg,color_fragment:Zg,color_pars_fragment:Jg,color_pars_vertex:$g,color_vertex:Kg,common:jg,cube_uv_reflection_fragment:Qg,defaultnormal_vertex:tx,displacementmap_pars_vertex:ex,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:sx,colorspace_fragment:rx,colorspace_pars_fragment:ox,envmap_fragment:ax,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:hx,envmap_physical_pars_fragment:Mx,envmap_vertex:ux,fog_vertex:fx,fog_pars_vertex:dx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:xx,lights_lambert_fragment:yx,lights_lambert_pars_fragment:vx,lights_pars_begin:_x,lights_toon_fragment:bx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Sx,lights_phong_pars_fragment:wx,lights_physical_fragment:Tx,lights_physical_pars_fragment:Ax,lights_fragment_begin:Rx,lights_fragment_maps:Cx,lights_fragment_end:Ix,lightprobes_pars_fragment:Px,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:zx,map_fragment:Ux,map_pars_fragment:Fx,map_particle_fragment:Bx,map_particle_pars_fragment:Ox,metalnessmap_fragment:Hx,metalnessmap_pars_fragment:kx,morphinstance_vertex:Gx,morphcolor_vertex:Vx,morphnormal_vertex:Wx,morphtarget_pars_vertex:Xx,morphtarget_vertex:qx,normal_fragment_begin:Yx,normal_fragment_maps:Zx,normal_pars_fragment:Jx,normal_pars_vertex:$x,normal_vertex:Kx,normalmap_pars_fragment:jx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:e1,iridescence_pars_fragment:n1,opaque_fragment:i1,packing:s1,premultiplied_alpha_fragment:r1,project_vertex:o1,dithering_fragment:a1,dithering_pars_fragment:l1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:u1,shadowmap_pars_vertex:f1,shadowmap_vertex:d1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:x1,skinnormal_vertex:y1,specularmap_fragment:v1,specularmap_pars_fragment:_1,tonemapping_fragment:M1,tonemapping_pars_fragment:b1,transmission_fragment:E1,transmission_pars_fragment:S1,uv_pars_fragment:w1,uv_pars_vertex:T1,uv_vertex:A1,worldpos_vertex:R1,background_vert:C1,background_frag:I1,backgroundCube_vert:P1,backgroundCube_frag:L1,cube_vert:D1,cube_frag:N1,depth_vert:z1,depth_frag:U1,distance_vert:F1,distance_frag:B1,equirect_vert:O1,equirect_frag:H1,linedashed_vert:k1,linedashed_frag:G1,meshbasic_vert:V1,meshbasic_frag:W1,meshlambert_vert:X1,meshlambert_frag:q1,meshmatcap_vert:Y1,meshmatcap_frag:Z1,meshnormal_vert:J1,meshnormal_frag:$1,meshphong_vert:K1,meshphong_frag:j1,meshphysical_vert:Q1,meshphysical_frag:ty,meshtoon_vert:ey,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:oy,sprite_vert:ay,sprite_frag:ly},zt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},vi={basic:{uniforms:Mn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Mn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Mn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Mn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Mn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Mn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Mn([zt.points,zt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Mn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Mn([zt.common,zt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Mn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Mn([zt.sprite,zt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:Mn([zt.common,zt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:Mn([zt.lights,zt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};vi.physical={uniforms:Mn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var Pc={r:0,b:0,g:0},cy=new le,D0=new ce;D0.set(-1,0,0,0,1,0,0,0,1);function hy(i,t,e,n,s,r){let o=new Ht(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let E=v.backgroundBlurriness>0;T=t.get(T,E)}return T}function g(v){let T=!1,E=d(v);E===null?m(o,a):E&&E.isColor&&(m(E,1),T=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,T){let E=d(T);E&&(E.isCubeTexture||E.mapping===$o)?(c===void 0&&(c=new et(new Qt(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Rs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(D0),c.material.toneMapped=we.getTransfer(E.colorSpace)!==Ne,(h!==E||u!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new et(new ke(2,2),new en({name:"BackgroundMaterial",uniforms:Rs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=we.getTransfer(E.colorSpace)!==Ne,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,u=E.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(Pc,mu(i)),e.buffers.color.setClear(Pc.r,Pc.g,Pc.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:p}}function uy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(L,M,P,C,I){let z=!1,O=u(L,C,P,M);r!==O&&(r=O,c(r.object)),z=d(L,C,P,I),z&&g(L,C,P,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,E(L,M,P,C),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,M,P,C){let I=C.wireframe===!0,z=n[M.id];z===void 0&&(z={},n[M.id]=z);let O=L.isInstancedMesh===!0?L.id:0,V=z[O];V===void 0&&(V={},z[O]=V);let G=V[P.id];G===void 0&&(G={},V[P.id]=G);let X=G[I];return X===void 0&&(X=f(l()),G[I]=X),X}function f(L){let M=[],P=[],C=[];for(let I=0;I<e;I++)M[I]=0,P[I]=0,C[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:P,attributeDivisors:C,object:L,attributes:{},index:null}}function d(L,M,P,C){let I=r.attributes,z=M.attributes,O=0,V=P.getAttributes();for(let G in V)if(V[G].location>=0){let Z=I[G],Mt=z[G];if(Mt===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(Mt=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(Mt=L.instanceColor)),Z===void 0||Z.attribute!==Mt||Mt&&Z.data!==Mt.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function g(L,M,P,C){let I={},z=M.attributes,O=0,V=P.getAttributes();for(let G in V)if(V[G].location>=0){let Z=z[G];Z===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));let Mt={};Mt.attribute=Z,Z&&Z.data&&(Mt.data=Z.data),I[G]=Mt,O++}r.attributes=I,r.attributesNum=O,r.index=C}function x(){let L=r.newAttributes;for(let M=0,P=L.length;M<P;M++)L[M]=0}function m(L){p(L,0)}function p(L,M){let P=r.newAttributes,C=r.enabledAttributes,I=r.attributeDivisors;P[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),I[L]!==M&&(i.vertexAttribDivisor(L,M),I[L]=M)}function v(){let L=r.newAttributes,M=r.enabledAttributes;for(let P=0,C=M.length;P<C;P++)M[P]!==L[P]&&(i.disableVertexAttribArray(P),M[P]=0)}function T(L,M,P,C,I,z,O){O===!0?i.vertexAttribIPointer(L,M,P,I,z):i.vertexAttribPointer(L,M,P,C,I,z)}function E(L,M,P,C){x();let I=C.attributes,z=P.getAttributes(),O=M.defaultAttributeValues;for(let V in z){let G=z[V];if(G.location>=0){let X=I[V];if(X===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let Z=X.normalized,Mt=X.itemSize,Rt=t.get(X);if(Rt===void 0)continue;let re=Rt.buffer,oe=Rt.type,ie=Rt.bytesPerElement,B=oe===i.INT||oe===i.UNSIGNED_INT||X.gpuType===ql;if(X.isInterleavedBufferAttribute){let J=X.data,mt=J.stride,Dt=X.offset;if(J.isInstancedInterleavedBuffer){for(let Et=0;Et<G.locationSize;Et++)p(G.location+Et,J.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Et=0;Et<G.locationSize;Et++)m(G.location+Et);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Et=0;Et<G.locationSize;Et++)T(G.location+Et,Mt/G.locationSize,oe,Z,mt*ie,(Dt+Mt/G.locationSize*Et)*ie,B)}else{if(X.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)p(G.location+J,X.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,re);for(let J=0;J<G.locationSize;J++)T(G.location+J,Mt/G.locationSize,oe,Z,Mt*ie,Mt/G.locationSize*J*ie,B)}}else if(O!==void 0){let Z=O[V];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(G.location,Z);break;case 3:i.vertexAttrib3fv(G.location,Z);break;case 4:i.vertexAttrib4fv(G.location,Z);break;default:i.vertexAttrib1fv(G.location,Z)}}}}v()}function _(){w();for(let L in n){let M=n[L];for(let P in M){let C=M[P];for(let I in C){let z=C[I];for(let O in z)h(z[O].object),delete z[O];delete C[I]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let M=n[L.id];for(let P in M){let C=M[P];for(let I in C){let z=C[I];for(let O in z)h(z[O].object),delete z[O];delete C[I]}}delete n[L.id]}function S(L){for(let M in n){let P=n[M];for(let C in P){let I=P[C];if(I[L.id]===void 0)continue;let z=I[L.id];for(let O in z)h(z[O].object),delete z[O];delete I[L.id]}}}function y(L){for(let M in n){let P=n[M],C=L.isInstancedMesh===!0?L.id:0,I=P[C];if(I!==void 0){for(let z in I){let O=I[z];for(let V in O)h(O[V].object),delete O[V];delete I[z]}delete P[C],Object.keys(P).length===0&&delete n[M]}}}function w(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:_,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function fy(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function dy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==kn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let y=S===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==An&&S!==Hn&&!y&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(se("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:E,maxSamples:_,samples:b}}function py(i){let t=this,e=null,n=0,s=!1,r=!1,o=new jn,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,T=v*4,E=p.clippingState||null;l.value=E,E=h(g,f,T,d);for(let _=0;_!==T;++_)E[_]=e[_];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,E=d;T!==x;++T,E+=4)o.copy(u[T]).applyMatrix4(v,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Br=4,my=6,gy=20,xy=256,ra=new Ir,u0=new Ht,Su=null,wu=0,Tu=0,Au=!1,yy=new U,Cs=new U,Is=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=yy}=r;Su=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Su,wu,Tu),this._renderer.xr.enabled=Au,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Su=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ai,format:kn,colorSpace:vo,depthBuffer:!1},s=f0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vy(r)),this._blurMaterial=My(r,t,e),this._ggxMaterial=_y(r,t,e)}return s}_compileMaterial(t){let e=new et(new Ee,t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s,r){let l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(u0),u.toneMapping=ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new Qt,new Te({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(u0),p=!0);for(let T=0;T<6;T++){let E=T%3;E===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):E===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let _=this._cubeSize;Fr(s,E*_,T>2?_:0,_,_),u.setRenderTarget(s),p&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ts||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=p0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ra)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Br?n-g+Br:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Fr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,ra),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Fr(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,ra)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Br?s-this._lodMax+Br:0),f=4*(this._cubeSize-h);Fr(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,ra)}};function vy(i){let t=[],e=[],n=i,s=i-Br+1+my;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,g=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,T=p>2?0:-1,E=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(E,d*f*p);for(let _=0;_<f;_++){let b=h[_*2]*2-1,S=h[_*2+1]*2-1;p===0?Cs.set(1,S,b):p===1?Cs.set(-b,1,-S):p===2?Cs.set(-b,S,1):p===3?Cs.set(-1,S,-b):p===4?Cs.set(-b,-1,S):Cs.set(b,S,-1),Cs.toArray(x,(p*f+_)*d)}}let m=new Ee;m.setAttribute("position",new Ae(g,d)),m.setAttribute("outputDirection",new Ae(x,d)),e.push(new et(m,null)),n>Br&&n--}return{lodMeshes:e,sizeLods:t}}function f0(i,t,e){let n=new Tn(i,t,e);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _y(i,t,e){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function My(i,t,e){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:gy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function d0(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function p0(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Dc=class extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Po(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:gi});r.uniforms.tEquirect.value=e;let o=new et(s,r),a=e.minFilter;return e.minFilter===es&&(e.minFilter=pn),new Bl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function by(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Vl||d===Wl)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new Dc(g.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===Vl||d===Wl,x=d===ts||d===As;if(g||x){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Is(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Is(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Vl?f.mapping=ts:d===Wl&&(f.mapping=As),f}function l(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ey(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&_s("WebGLRenderer: "+n+" extension not supported."),s}}}function Sy(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let T=0,E=v.length;T<E;T+=3){let _=v[T+0],b=v[T+1],S=v[T+2];f.push(_,b,b,S,S,_)}}else{let v=g.array;x=g.version;for(let T=0,E=v.length/3-1;T<E;T+=3){let _=T+0,b=T+1,S=T+2;f.push(_,b,b,S,S,_)}}let m=new(g.count>=65535?wo:Ms)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function wy(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ty(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ay(i,t,e){let n=new WeakMap,s=new Pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let E=a.attributes.position.count*T,_=1;E>t.maxTextureSize&&(_=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let b=new Float32Array(E*_*4*u),S=new Eo(b,E,_,u);S.type=Hn,S.needsUpdate=!0;let y=T*4;for(let A=0;A<u;A++){let L=m[A],M=p[A],P=v[A],C=E*_*4*A;for(let I=0;I<L.count;I++){let z=I*y;d===!0&&(s.fromBufferAttribute(L,I),b[C+z+0]=s.x,b[C+z+1]=s.y,b[C+z+2]=s.z,b[C+z+3]=0),g===!0&&(s.fromBufferAttribute(M,I),b[C+z+4]=s.x,b[C+z+5]=s.y,b[C+z+6]=s.z,b[C+z+7]=0),x===!0&&(s.fromBufferAttribute(P,I),b[C+z+8]=s.x,b[C+z+9]=s.y,b[C+z+10]=s.z,b[C+z+11]=P.itemSize===4?s.w:1)}}f={count:u,texture:S,size:new vt(E,_)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ry(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Cy={[jh]:"LINEAR_TONE_MAPPING",[Qh]:"REINHARD_TONE_MAPPING",[tu]:"CINEON_TONE_MAPPING",[Lr]:"ACES_FILMIC_TONE_MAPPING",[nu]:"AGX_TONE_MAPPING",[iu]:"NEUTRAL_TONE_MAPPING",[eu]:"CUSTOM_TONE_MAPPING"};function Iy(i,t,e,n,s,r){let o=new Tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ee;c.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ee([0,2,0,0,2,0],2));let h=new wl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new et(c,h),f=new Ir(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,v=[],T=!1;this.setSize=function(E,_){o.setSize(E,_),a!==null&&a.setSize(E,_),l!==null&&l.setSize(E,_);for(let b=0;b<v.length;b++){let S=v[b];S.setSize&&S.setSize(E,_)}},this.setEffects=function(E){v=E,T=v.length>0&&v[0].isRenderPass===!0;let _=o.width,b=o.height;v.length>0&&a===null&&(a=new Tn(_,b,{type:ai,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(_,b,{type:ai,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<v.length;S++){let y=v[S];y.setSize&&y.setSize(_,b)}},this.begin=function(E,_){if(x||E.toneMapping===ri&&v.length===0)return!1;if(p=_,_!==null){let b=_.width,S=_.height;(o.width!==b||o.height!==S)&&this.setSize(b,S)}return T===!1&&E.setRenderTarget(o),m=E.toneMapping,E.toneMapping=ri,!0},this.hasRenderPass=function(){return T},this.end=function(E,_){E.toneMapping=m,x=!0;let b=o,S=a;for(let y=0;y<v.length;y++){let w=v[y];w.enabled!==!1&&(w.render(E,S,b,_),w.needsSwap!==!1&&(b=S,S=S===a?l:a))}if(d!==E.outputColorSpace||g!==E.toneMapping){d=E.outputColorSpace,g=E.toneMapping,h.defines={},we.getTransfer(d)===Ne&&(h.defines.SRGB_TRANSFER="");let y=Cy[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,E.setRenderTarget(p),E.render(u,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var N0=new un,Iu=new Ji(1,1),z0=new Eo,U0=new xl,F0=new Po,m0=[],g0=[],x0=new Float32Array(16),y0=new Float32Array(9),v0=new Float32Array(4);function Hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=m0[s];if(r===void 0&&(r=new Float32Array(s),m0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function an(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zc(i,t){let e=g0[t];e===void 0&&(e=new Int32Array(t),g0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Py(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function zy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;v0.set(n),i.uniformMatrix2fv(this.addr,!1,v0),ln(e,n)}}function Uy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;y0.set(n),i.uniformMatrix3fv(this.addr,!1,y0),ln(e,n)}}function Fy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;x0.set(n),i.uniformMatrix4fv(this.addr,!1,x0),ln(e,n)}}function By(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function Hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function Gy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function Wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function Xy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function qy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=e.isReversedDepthBuffer()?Ic:Cc,r=Iu):r=N0,e.setTexture2D(t||r,s)}function Yy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||U0,s)}function Zy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||F0,s)}function Jy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||z0,s)}function $y(i){switch(i){case 5126:return Py;case 35664:return Ly;case 35665:return Dy;case 35666:return Ny;case 35674:return zy;case 35675:return Uy;case 35676:return Fy;case 5124:case 35670:return By;case 35667:case 35671:return Oy;case 35668:case 35672:return Hy;case 35669:case 35673:return ky;case 5125:return Gy;case 36294:return Vy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Jy}}function Ky(i,t){i.uniform1fv(this.addr,t)}function jy(i,t){let e=Hr(t,this.size,2);i.uniform2fv(this.addr,e)}function Qy(i,t){let e=Hr(t,this.size,3);i.uniform3fv(this.addr,e)}function tv(i,t){let e=Hr(t,this.size,4);i.uniform4fv(this.addr,e)}function ev(i,t){let e=Hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nv(i,t){let e=Hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function iv(i,t){let e=Hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sv(i,t){i.uniform1iv(this.addr,t)}function rv(i,t){i.uniform2iv(this.addr,t)}function ov(i,t){i.uniform3iv(this.addr,t)}function av(i,t){i.uniform4iv(this.addr,t)}function lv(i,t){i.uniform1uiv(this.addr,t)}function cv(i,t){i.uniform2uiv(this.addr,t)}function hv(i,t){i.uniform3uiv(this.addr,t)}function uv(i,t){i.uniform4uiv(this.addr,t)}function fv(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Iu:o=N0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function dv(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||U0,r[o])}function pv(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||F0,r[o])}function mv(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||z0,r[o])}function gv(i){switch(i){case 5126:return Ky;case 35664:return jy;case 35665:return Qy;case 35666:return tv;case 35674:return ev;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return sv;case 35667:case 35671:return rv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}var Pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$y(e.type)}},Lu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gv(e.type)}},Du=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ru=/(\w+)(\])?(\[|\.)?/g;function _0(i,t){i.seq.push(t),i.map[t.id]=t}function xv(i,t,e){let n=i.name,s=n.length;for(Ru.lastIndex=0;;){let r=Ru.exec(n),o=Ru.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_0(e,c===void 0?new Pu(a,i,t):new Lu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Du(a),_0(e,u)),e=u}}}var Or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);xv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function M0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var yv=37297,vv=0;function _v(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var b0=new ce;function Mv(i){we._getMatrix(b0,we.workingColorSpace,i);let t=`mat3( ${b0.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(i)){case _o:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function E0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_v(i.getShaderSource(t),a)}else return r}function bv(i,t){let e=Mv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ev={[jh]:"Linear",[Qh]:"Reinhard",[tu]:"Cineon",[Lr]:"ACESFilmic",[nu]:"AgX",[iu]:"Neutral",[eu]:"Custom"};function Sv(i,t){let e=Ev[t];return e===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lc=new U;function wv(){we.getLuminanceCoefficients(Lc);let i=Lc.x.toFixed(4),t=Lc.y.toFixed(4),e=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function Av(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function aa(i){return i!==""}function S0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function w0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(i){return i.replace(Cv,Pv)}var Iv=new Map;function Pv(i,t){let e=ge[t];if(e===void 0){let n=Iv.get(t);if(n!==void 0)e=ge[n],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nu(e)}var Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T0(i){return i.replace(Lv,Dv)}function Dv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function A0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Nv={[Jo]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function zv(i){return Nv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Uv={[ts]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE_UV"};function Fv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Uv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bv={[As]:"ENVMAP_MODE_REFRACTION"};function Ov(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hv={[Gl]:"ENVMAP_BLENDING_MULTIPLY",[Od]:"ENVMAP_BLENDING_MIX",[Hd]:"ENVMAP_BLENDING_ADD"};function kv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Hv[i.combine]||"ENVMAP_BLENDING_NONE"}function Gv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zv(e),c=Fv(e),h=Ov(e),u=kv(e),f=Gv(e),d=Tv(e),g=Av(r),x=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(aa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(m=[A0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[A0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?ge.tonemapping_pars_fragment:"",e.toneMapping!==ri?Sv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,bv("linearToOutputTexel",e.outputColorSpace),wv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(aa).join(`
`)),o=Nu(o),o=S0(o,e),o=w0(o,e),a=Nu(a),a=S0(a,e),a=w0(a,e),o=T0(o),a=T0(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=v+m+o,E=v+p+a,_=M0(s,s.VERTEX_SHADER,T),b=M0(s,s.FRAGMENT_SHADER,E);s.attachShader(x,_),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(L){if(i.debug.checkShaderErrors){let M=s.getProgramInfoLog(x)||"",P=s.getShaderInfoLog(_)||"",C=s.getShaderInfoLog(b)||"",I=M.trim(),z=P.trim(),O=C.trim(),V=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,_,b);else{let X=E0(s,_,"vertex"),Z=E0(s,b,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+X+`
`+Z)}else I!==""?se("WebGLProgram: Program Info Log:",I):(z===""||O==="")&&(G=!1);G&&(L.diagnostics={runnable:V,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(_),s.deleteShader(b),y=new Or(s,x),w=Rv(s,x)}let y;this.getUniforms=function(){return y===void 0&&S(this),y};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,yv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=b,this}var Wv=0,zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uu(t),e.set(t,n)),n}},Uu=class{constructor(t){this.id=Wv++,this.code=t,this.usedTimes=0}};function Xv(i){return i===is||i===na||i===ia}function qv(i,t,e,n,s,r){let o=new So,a=new zu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,w,A,L,M,P){let C=L.fog,I=M.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=t.get(y.envMap||z,O),G=V&&V.mapping===$o?V.image.height:null,X=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&se("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Mt=Z!==void 0?Z.length:0,Rt=0;I.morphAttributes.position!==void 0&&(Rt=1),I.morphAttributes.normal!==void 0&&(Rt=2),I.morphAttributes.color!==void 0&&(Rt=3);let re,oe,ie,B;if(X){let Me=vi[X];re=Me.vertexShader,oe=Me.fragmentShader}else{re=y.vertexShader,oe=y.fragmentShader;let Me=a.getVertexShaderStage(y),ye=a.getFragmentShaderStage(y);a.update(y,Me,ye),ie=Me.id,B=ye.id}let J=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Dt=M.isInstancedMesh===!0,Et=M.isBatchedMesh===!0,Ft=!!y.map,Yt=!!y.matcap,ot=!!V,ft=!!y.aoMap,dt=!!y.lightMap,rt=!!y.bumpMap&&y.wireframe===!1,gt=!!y.normalMap,bt=!!y.displacementMap,Nt=!!y.emissiveMap,Lt=!!y.metalnessMap,kt=!!y.roughnessMap,H=y.anisotropy>0,xe=y.clearcoat>0,he=y.dispersion>0,N=y.retroreflectivity>0,R=y.iridescence>0,q=y.sheen>0,K=y.transmission>0,it=H&&!!y.anisotropyMap,wt=xe&&!!y.clearcoatMap,Tt=xe&&!!y.clearcoatNormalMap,st=xe&&!!y.clearcoatRoughnessMap,at=R&&!!y.iridescenceMap,Ct=R&&!!y.iridescenceThicknessMap,Jt=q&&!!y.sheenColorMap,Pt=q&&!!y.sheenRoughnessMap,k=!!y.specularMap,ct=!!y.specularColorMap,ht=!!y.specularIntensityMap,xt=K&&!!y.transmissionMap,F=K&&!!y.thicknessMap,ut=!!y.gradientMap,tt=!!y.alphaMap,yt=y.alphaTest>0,At=!!y.alphaHash,lt=!!y.extensions,Gt=ri;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Gt=i.toneMapping);let Bt={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:re,fragmentShader:oe,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Et,batchingColor:Et&&M._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&M.instanceColor!==null,instancingMorph:Dt&&M.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:we.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ft,matcap:Yt,envMap:ot,envMapMode:ot&&V.mapping,envMapCubeUVHeight:G,aoMap:ft,lightMap:dt,bumpMap:rt,normalMap:gt,displacementMap:bt,emissiveMap:Nt,normalMapObjectSpace:gt&&y.normalMapType===Wd,normalMapTangentSpace:gt&&y.normalMapType===sa,packedNormalMap:gt&&y.normalMapType===sa&&Xv(y.normalMap.format),metalnessMap:Lt,roughnessMap:kt,anisotropy:H,anisotropyMap:it,clearcoat:xe,clearcoatMap:wt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:st,dispersion:he,retroreflection:N,iridescence:R,iridescenceMap:at,iridescenceThicknessMap:Ct,sheen:q,sheenColorMap:Jt,sheenRoughnessMap:Pt,specularMap:k,specularColorMap:ct,specularIntensityMap:ht,transmission:K,transmissionMap:xt,thicknessMap:F,gradientMap:ut,opaque:y.transparent===!1&&y.blending===Qi&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:yt,alphaHash:At,combine:y.combine,mapUv:Ft&&g(y.map.channel),aoMapUv:ft&&g(y.aoMap.channel),lightMapUv:dt&&g(y.lightMap.channel),bumpMapUv:rt&&g(y.bumpMap.channel),normalMapUv:gt&&g(y.normalMap.channel),displacementMapUv:bt&&g(y.displacementMap.channel),emissiveMapUv:Nt&&g(y.emissiveMap.channel),metalnessMapUv:Lt&&g(y.metalnessMap.channel),roughnessMapUv:kt&&g(y.roughnessMap.channel),anisotropyMapUv:it&&g(y.anisotropyMap.channel),clearcoatMapUv:wt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&g(y.sheenRoughnessMap.channel),specularMapUv:k&&g(y.specularMap.channel),specularColorMapUv:ct&&g(y.specularColorMap.channel),specularIntensityMapUv:ht&&g(y.specularIntensityMap.channel),transmissionMapUv:xt&&g(y.transmissionMap.channel),thicknessMapUv:F&&g(y.thicknessMap.channel),alphaMapUv:tt&&g(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(gt||H),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!I.attributes.uv&&(Ft||tt),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:M.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Rt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Ft&&y.map.isVideoTexture===!0&&we.getTransfer(y.map.colorSpace)===Ne,decodeVideoTextureEmissive:Nt&&y.emissiveMap.isVideoTexture===!0&&we.getTransfer(y.emissiveMap.colorSpace)===Ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&y.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)w.push(A),w.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(p(w,y),v(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function T(y){let w=d[y.type],A;if(w){let L=vi[w];A=l0.clone(L.uniforms)}else A=y.uniforms;return A}function E(y,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new Vv(i,w,y,s),c.push(A),h.set(w,A)),A}function _(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function S(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:E,releaseProgram:_,releaseShaderCache:b,programs:c,dispose:S}}function Yv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function R0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function C0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,x,m,p){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},i[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=g,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=p),t++,v}function l(f,d,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let T=a(f,d,g,x,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(f,d,g,x,m,p){let v=a(f,d,g,x,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(f,d){e.length>1&&e.sort(f||Zv),n.length>1&&n.sort(d||R0),s.length>1&&s.sort(d||R0)}function u(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Jv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new C0,i.set(n,[o])):s>=r.length?(o=new C0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $v(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Kv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jv=0;function Qv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t_(i){let t=new $v,e=Kv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new le,o=new le;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,T=0,E=0,_=0,b=0,S=0,y=0,w=0,A=0;c.sort(Qv);for(let M=0,P=c.length;M<P;M++){let C=c[M],I=C.color,z=C.intensity,O=C.distance,V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===is?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=I.r*z,u+=I.g*z,f+=I.b*z;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],z);A++}else if(C.isSunLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,Z=e.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=V;let Mt=X.getViewportCount();for(let Rt=0;Rt<Mt;Rt++)n.sunShadowMatrix[x+Rt]=X.getMatrix(Rt),n.sunShadowCascade[x+Rt]=X._cascadeData[Rt];x+=Mt,g++}n.sun[d]=G,d++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,Z=e.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=C.shadow.matrix,_++}n.directional[m]=G,m++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(I).multiplyScalar(z),G.distance=O,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[v]=G;let X=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,X.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=X.matrix,C.castShadow){let Z=e.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=V,S++}v++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(I).multiplyScalar(z),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=G,T++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let X=C.shadow,Z=e.get(C);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=C.shadow.matrix,b++}n.point[p]=G,p++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(z),G.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[E]=G,E++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==T||L.hemiLength!==E||L.numSunShadows!==g||L.numDirectionalShadows!==_||L.numPointShadows!==b||L.numSpotShadows!==S||L.numSpotMaps!==y||L.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=p,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.sunLength=d,L.directionalLength=m,L.pointLength=p,L.spotLength=v,L.rectAreaLength=T,L.hemiLength=E,L.numSunShadows=g,L.numDirectionalShadows=_,L.numPointShadows=b,L.numSpotShadows=S,L.numSpotMaps=y,L.numLightProbes=A,n.version=jv++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let E=c[v];if(E.isSunLight){let _=n.sun[u];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(p),u++}else if(E.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(E.isSpotLight){let _=n.spot[g];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),g++}else if(E.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let _=n.hemi[m];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function I0(i){let t=new t_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function e_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new I0(i),t.set(s,[a])):r>=o.length?(a=new I0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var n_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i_=`uniform sampler2D shadow_pass;
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
}`,s_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],r_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],P0=new le,oa=new U,Cu=new U;function o_(i,t,e){let n=new Mr,s=new vt,r=new vt,o=new Pe,a=new Tl,l=new Al,c={},h=e.maxTextureSize,u={[mi]:on,[on]:mi,[fn]:fn},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:n_,fragmentShader:i_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let p=this.type;this.render=function(b,S,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===kl&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jo);let w=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),M=i.state;M.setBlending(gi),M.buffers.depth.getReversed()===!0?M.buffers.color.setClear(0,0,0,0):M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);let P=p!==this.type;P&&S.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(I=>I.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,I=b.length;C<I;C++){let z=b[C],O=z.shadow;if(O===void 0){se("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let V=O.getFrameExtents();s.multiply(V),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,O.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Pr){if(z.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Tn(s.x,s.y,{format:is,type:ai,minFilter:pn,magFilter:pn,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Ji(s.x,s.y,Hn),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=di,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=hn,O.map.depthTexture.magFilter=hn}else z.isPointLight?(O.map=new Dc(s.x),O.map.depthTexture=new yl(s.x,oi)):(O.map=new Tn(s.x,s.y),O.map.depthTexture=new Ji(s.x,s.y,oi)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=di,this.type===Jo?(O.map.depthTexture.compareFunction=G?Ic:Cc,O.map.depthTexture.minFilter=pn,O.map.depthTexture.magFilter=pn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=hn,O.map.depthTexture.magFilter=hn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let X=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();z.isPointLight!==!0&&O.updateMatrices(z,y);for(let Z=0;Z<X;Z++){let Mt=O.getCamera(Z);if(z.isPointLight){let Rt=O.camera,re=O.matrix,oe=z.distance||Rt.far;oe!==Rt.far&&(Rt.far=oe,Rt.updateProjectionMatrix()),oa.setFromMatrixPosition(z.matrixWorld),Rt.position.copy(oa),Cu.copy(Rt.position),Cu.add(s_[Z]),Rt.up.copy(r_[Z]),Rt.lookAt(Cu),Rt.updateMatrixWorld(),re.makeTranslation(-oa.x,-oa.y,-oa.z),P0.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(P0,Rt.coordinateSystem,Rt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(O.map),i.clear());let Rt=O.getViewport(Z);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),M.viewport(o)}n=O.getFrustum(Z),E(S,y,Mt,z,this.type)}O.isPointLightShadow!==!0&&this.type===Pr&&v(O,y),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,A,L)};function v(b,S){let y=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Tn(s.x,s.y,{format:is,type:ai}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,y,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,y,d,x,null)}function T(b,S,y,w){let A=null,L=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)A=L;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let M=A.uuid,P=S.uuid,C=c[M];C===void 0&&(C={},c[M]=C);let I=C[P];I===void 0&&(I=A.clone(),C[P]=I,S.addEventListener("dispose",_)),A=I}if(A.visible=S.visible,A.wireframe=S.wireframe,w===Pr?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:u[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let M=i.properties.get(A);M.light=y}return A}function E(b,S,y,w,A){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Pr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let P=t.update(b),C=b.material;if(Array.isArray(C)){let I=P.groups;for(let z=0,O=I.length;z<O;z++){let V=I[z],G=C[V.materialIndex];if(G&&G.visible){let X=T(b,G,w,A);b.onBeforeShadow(i,b,S,y,P,X,V),i.renderBufferDirect(y,null,P,X,b,V),b.onAfterShadow(i,b,S,y,P,X,V)}}}else if(C.visible){let I=T(b,C,w,A);b.onBeforeShadow(i,b,S,y,P,I,null),i.renderBufferDirect(y,null,P,I,b,null),b.onAfterShadow(i,b,S,y,P,I,null)}}let M=b.children;for(let P=0,C=M.length;P<C;P++)E(M[P],S,y,w,A)}function _(b){b.target.removeEventListener("dispose",_);for(let y in c){let w=c[y],A=b.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function a_(i,t){function e(){let F=!1,ut=new Pe,tt=null,yt=new Pe(0,0,0,0);return{setMask:function(At){tt!==At&&!F&&(i.colorMask(At,At,At,At),tt=At)},setLocked:function(At){F=At},setClear:function(At,lt,Gt,Bt,Me){Me===!0&&(At*=Bt,lt*=Bt,Gt*=Bt),ut.set(At,lt,Gt,Bt),yt.equals(ut)===!1&&(i.clearColor(At,lt,Gt,Bt),yt.copy(ut))},reset:function(){F=!1,tt=null,yt.set(-1,0,0,0)}}}function n(){let F=!1,ut=!1,tt=null,yt=null,At=null;return{setReversed:function(lt){if(ut!==lt){let Gt=t.get("EXT_clip_control");lt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),ut=lt;let Bt=At;At=null,this.setClear(Bt)}},getReversed:function(){return ut},setTest:function(lt){lt?J(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(lt){tt!==lt&&!F&&(i.depthMask(lt),tt=lt)},setFunc:function(lt){if(ut&&(lt=e0[lt]),yt!==lt){switch(lt){case ol:i.depthFunc(i.NEVER);break;case al:i.depthFunc(i.ALWAYS);break;case ll:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case cl:i.depthFunc(i.EQUAL);break;case hl:i.depthFunc(i.GEQUAL);break;case ul:i.depthFunc(i.GREATER);break;case fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=lt}},setLocked:function(lt){F=lt},setClear:function(lt){At!==lt&&(At=lt,ut&&(lt=1-lt),i.clearDepth(lt))},reset:function(){F=!1,tt=null,yt=null,At=null,ut=!1}}}function s(){let F=!1,ut=null,tt=null,yt=null,At=null,lt=null,Gt=null,Bt=null,Me=null;return{setTest:function(ye){F||(ye?J(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(ye){ut!==ye&&!F&&(i.stencilMask(ye),ut=ye)},setFunc:function(ye,$e,Vn){(tt!==ye||yt!==$e||At!==Vn)&&(i.stencilFunc(ye,$e,Vn),tt=ye,yt=$e,At=Vn)},setOp:function(ye,$e,Vn){(lt!==ye||Gt!==$e||Bt!==Vn)&&(i.stencilOp(ye,$e,Vn),lt=ye,Gt=$e,Bt=Vn)},setLocked:function(ye){F=ye},setClear:function(ye){Me!==ye&&(i.clearStencil(ye),Me=ye)},reset:function(){F=!1,ut=null,tt=null,yt=null,At=null,lt=null,Gt=null,Bt=null,Me=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,T=null,E=null,_=null,b=null,S=null,y=new Ht(0,0,0),w=0,A=!1,L=null,M=null,P=null,C=null,I=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=V>=2);let X=null,Z={},Mt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),re=new Pe().fromArray(Mt),oe=new Pe().fromArray(Rt);function ie(F,ut,tt,yt){let At=new Uint8Array(4),lt=i.createTexture();i.bindTexture(F,lt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<tt;Gt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(ut+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return lt}let B={};B[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(lr),rt(!1),gt(Yh),J(i.CULL_FACE),ft(gi);function J(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function mt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Dt(F,ut){return f[F]!==ut?(i.bindFramebuffer(F,ut),f[F]=ut,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ut),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Et(F,ut){let tt=g,yt=!1;if(F){tt=d.get(ut),tt===void 0&&(tt=[],d.set(ut,tt));let At=F.textures;if(tt.length!==At.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Gt=At.length;lt<Gt;lt++)tt[lt]=i.COLOR_ATTACHMENT0+lt;tt.length=At.length,yt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,yt=!0);yt&&i.drawBuffers(tt)}function Ft(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let Yt={[Ts]:i.FUNC_ADD,[bd]:i.FUNC_SUBTRACT,[Ed]:i.FUNC_REVERSE_SUBTRACT};Yt[Sd]=i.MIN,Yt[wd]=i.MAX;let ot={[Td]:i.ZERO,[Ad]:i.ONE,[Rd]:i.SRC_COLOR,[$h]:i.SRC_ALPHA,[Nd]:i.SRC_ALPHA_SATURATE,[Ld]:i.DST_COLOR,[Id]:i.DST_ALPHA,[Cd]:i.ONE_MINUS_SRC_COLOR,[Kh]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Pd]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Ud]:i.ONE_MINUS_CONSTANT_COLOR,[Fd]:i.CONSTANT_ALPHA,[Bd]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(F,ut,tt,yt,At,lt,Gt,Bt,Me,ye){if(F===gi){m===!0&&(mt(i.BLEND),m=!1);return}if(m===!1&&(J(i.BLEND),m=!0),F!==Md){if(F!==p||ye!==A){if((v!==Ts||_!==Ts)&&(i.blendEquation(i.FUNC_ADD),v=Ts,_=Ts),ye)switch(F){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xi:i.blendFunc(i.ONE,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",F);break}else switch(F){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zh:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",F);break}T=null,E=null,b=null,S=null,y.set(0,0,0),w=0,p=F,A=ye}return}At=At||ut,lt=lt||tt,Gt=Gt||yt,(ut!==v||At!==_)&&(i.blendEquationSeparate(Yt[ut],Yt[At]),v=ut,_=At),(tt!==T||yt!==E||lt!==b||Gt!==S)&&(i.blendFuncSeparate(ot[tt],ot[yt],ot[lt],ot[Gt]),T=tt,E=yt,b=lt,S=Gt),(Bt.equals(y)===!1||Me!==w)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Me),y.copy(Bt),w=Me),p=F,A=!1}function dt(F,ut){F.side===fn?mt(i.CULL_FACE):J(i.CULL_FACE);let tt=F.side===on;ut&&(tt=!tt),rt(tt),F.blending===Qi&&F.transparent===!1?ft(gi):ft(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let yt=F.stencilWrite;a.setTest(yt),yt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(F){L!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),L=F)}function gt(F){F!==vd?(J(i.CULL_FACE),F!==M&&(F===Yh?i.cullFace(i.BACK):F===_d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),M=F}function bt(F){F!==P&&(O&&i.lineWidth(F),P=F)}function Nt(F,ut,tt){F?(J(i.POLYGON_OFFSET_FILL),(C!==ut||I!==tt)&&(C=ut,I=tt,o.getReversed()&&(ut=-ut),i.polygonOffset(ut,tt))):mt(i.POLYGON_OFFSET_FILL)}function Lt(F){F?J(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function kt(F){F===void 0&&(F=i.TEXTURE0+z-1),X!==F&&(i.activeTexture(F),X=F)}function H(F,ut,tt){tt===void 0&&(X===null?tt=i.TEXTURE0+z-1:tt=X);let yt=Z[tt];yt===void 0&&(yt={type:void 0,texture:void 0},Z[tt]=yt),(yt.type!==F||yt.texture!==ut)&&(X!==tt&&(i.activeTexture(tt),X=tt),i.bindTexture(F,ut||B[F]),yt.type=F,yt.texture=ut)}function xe(){let F=Z[X];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(F){ae("WebGLState:",F)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(F){ae("WebGLState:",F)}}function R(){try{i.texSubImage2D(...arguments)}catch(F){ae("WebGLState:",F)}}function q(){try{i.texSubImage3D(...arguments)}catch(F){ae("WebGLState:",F)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(F){ae("WebGLState:",F)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(F){ae("WebGLState:",F)}}function wt(){try{i.texStorage2D(...arguments)}catch(F){ae("WebGLState:",F)}}function Tt(){try{i.texStorage3D(...arguments)}catch(F){ae("WebGLState:",F)}}function st(){try{i.texImage2D(...arguments)}catch(F){ae("WebGLState:",F)}}function at(){try{i.texImage3D(...arguments)}catch(F){ae("WebGLState:",F)}}function Ct(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function Jt(F,ut){u[F]!==ut&&(i.pixelStorei(F,ut),u[F]=ut)}function Pt(F){re.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),re.copy(F))}function k(F){oe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),oe.copy(F))}function ct(F,ut){let tt=c.get(ut);tt===void 0&&(tt=new WeakMap,c.set(ut,tt));let yt=tt.get(F);yt===void 0&&(yt=i.getUniformBlockIndex(ut,F.name),tt.set(F,yt))}function ht(F,ut){let yt=c.get(ut).get(F);l.get(ut)!==yt&&(i.uniformBlockBinding(ut,yt,F.__bindingPointIndex),l.set(ut,yt))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},X=null,Z={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,T=null,E=null,_=null,b=null,S=null,y=new Ht(0,0,0),w=0,A=!1,L=null,M=null,P=null,C=null,I=null,re.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:mt,bindFramebuffer:Dt,drawBuffers:Et,useProgram:Ft,setBlending:ft,setMaterial:dt,setFlipSided:rt,setCullFace:gt,setLineWidth:bt,setPolygonOffset:Nt,setScissorTest:Lt,activeTexture:kt,bindTexture:H,unbindTexture:xe,compressedTexImage2D:he,compressedTexImage3D:N,texImage2D:st,texImage3D:at,pixelStorei:Jt,getParameter:Ct,updateUBOMapping:ct,uniformBlockBinding:ht,texStorage2D:wt,texStorage3D:Tt,texSubImage2D:R,texSubImage3D:q,compressedTexSubImage2D:K,compressedTexSubImage3D:it,scissor:Pt,viewport:k,reset:xt}}function l_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,u=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,R){return g?new OffscreenCanvas(N,R):Mo("canvas")}function m(N,R,q){let K=1,it=he(N);if((it.width>q||it.height>q)&&(K=q/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap||typeof VideoFrame!="undefined"&&N instanceof VideoFrame){let wt=Math.floor(K*it.width),Tt=Math.floor(K*it.height);f===void 0&&(f=x(wt,Tt));let st=R?x(wt,Tt):f;return st.width=wt,st.height=Tt,st.getContext("2d").drawImage(N,0,0,wt,Tt),se("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+wt+"x"+Tt+")."),st}else return"data"in N&&se("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),N;return N}function p(N){return N.generateMipmaps}function v(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(N,R,q,K,it,wt=!1){if(N!==null){if(i[N]!==void 0)return i[N];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Tt;K&&(Tt=t.get("EXT_texture_norm16"),Tt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=R;if(R===i.RED&&(q===i.FLOAT&&(st=i.R32F),q===i.HALF_FLOAT&&(st=i.R16F),q===i.UNSIGNED_BYTE&&(st=i.R8),q===i.UNSIGNED_SHORT&&Tt&&(st=Tt.R16_EXT),q===i.SHORT&&Tt&&(st=Tt.R16_SNORM_EXT)),R===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.R8UI),q===i.UNSIGNED_SHORT&&(st=i.R16UI),q===i.UNSIGNED_INT&&(st=i.R32UI),q===i.BYTE&&(st=i.R8I),q===i.SHORT&&(st=i.R16I),q===i.INT&&(st=i.R32I)),R===i.RG&&(q===i.FLOAT&&(st=i.RG32F),q===i.HALF_FLOAT&&(st=i.RG16F),q===i.UNSIGNED_BYTE&&(st=i.RG8),q===i.UNSIGNED_SHORT&&Tt&&(st=Tt.RG16_EXT),q===i.SHORT&&Tt&&(st=Tt.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RG8UI),q===i.UNSIGNED_SHORT&&(st=i.RG16UI),q===i.UNSIGNED_INT&&(st=i.RG32UI),q===i.BYTE&&(st=i.RG8I),q===i.SHORT&&(st=i.RG16I),q===i.INT&&(st=i.RG32I)),R===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RGB8UI),q===i.UNSIGNED_SHORT&&(st=i.RGB16UI),q===i.UNSIGNED_INT&&(st=i.RGB32UI),q===i.BYTE&&(st=i.RGB8I),q===i.SHORT&&(st=i.RGB16I),q===i.INT&&(st=i.RGB32I)),R===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),q===i.UNSIGNED_INT&&(st=i.RGBA32UI),q===i.BYTE&&(st=i.RGBA8I),q===i.SHORT&&(st=i.RGBA16I),q===i.INT&&(st=i.RGBA32I)),R===i.RGB&&(q===i.UNSIGNED_SHORT&&Tt&&(st=Tt.RGB16_EXT),q===i.SHORT&&Tt&&(st=Tt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),R===i.RGBA){let at=wt?_o:we.getTransfer(it);q===i.FLOAT&&(st=i.RGBA32F),q===i.HALF_FLOAT&&(st=i.RGBA16F),q===i.UNSIGNED_BYTE&&(st=at===Ne?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Tt&&(st=Tt.RGBA16_EXT),q===i.SHORT&&Tt&&(st=Tt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function _(N,R){let q;return N?R===null||R===oi||R===Nr?q=i.DEPTH24_STENCIL8:R===Hn?q=i.DEPTH32F_STENCIL8:R===Dr&&(q=i.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===oi||R===Nr?q=i.DEPTH_COMPONENT24:R===Hn?q=i.DEPTH_COMPONENT32F:R===Dr&&(q=i.DEPTH_COMPONENT16),q}function b(N,R){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==hn&&N.minFilter!==pn?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function S(N){let R=N.target;R.removeEventListener("dispose",S),w(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function y(N){let R=N.target;R.removeEventListener("dispose",y),L(R)}function w(N){let R=n.get(N);if(R.__webglInit===void 0)return;let q=N.source,K=d.get(q);if(K){let it=K[R.__cacheKey];it.usedTimes--,it.usedTimes===0&&A(N),Object.keys(K).length===0&&d.delete(q)}n.remove(N)}function A(N){let R=n.get(N);i.deleteTexture(R.__webglTexture);let q=N.source,K=d.get(q);delete K[R.__cacheKey],o.memory.textures--}function L(N){let R=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(R.__webglFramebuffer[K]))for(let it=0;it<R.__webglFramebuffer[K].length;it++)i.deleteFramebuffer(R.__webglFramebuffer[K][it]);else i.deleteFramebuffer(R.__webglFramebuffer[K]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[K])}else{if(Array.isArray(R.__webglFramebuffer))for(let K=0;K<R.__webglFramebuffer.length;K++)i.deleteFramebuffer(R.__webglFramebuffer[K]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let K=0;K<R.__webglColorRenderbuffer.length;K++)R.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[K]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let q=N.textures;for(let K=0,it=q.length;K<it;K++){let wt=n.get(q[K]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(q[K])}n.remove(N)}let M=0;function P(){M=0}function C(){return M}function I(N){M=N}function z(){let N=M;return N>=s.maxTextures&&se("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),M+=1,N}function O(N){let R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function V(N,R){let q=n.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){let K=N.image;if(K===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(q,N,R);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+R)}function G(N,R){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){mt(q,N,R);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+R)}function X(N,R){let q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){mt(q,N,R);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+R)}function Z(N,R){let q=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){Dt(q,N,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+R)}let Mt={[Pi]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[dl]:i.MIRRORED_REPEAT},Rt={[hn]:i.NEAREST,[Gd]:i.NEAREST_MIPMAP_NEAREST,[Ko]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Xl]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},re={[qd]:i.NEVER,[Kd]:i.ALWAYS,[Yd]:i.LESS,[Cc]:i.LEQUAL,[Zd]:i.EQUAL,[Ic]:i.GEQUAL,[Jd]:i.GREATER,[$d]:i.NOTEQUAL};function oe(N,R){if(R.type===Hn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===pn||R.magFilter===Xl||R.magFilter===Ko||R.magFilter===es||R.minFilter===pn||R.minFilter===Xl||R.minFilter===Ko||R.minFilter===es)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Mt[R.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Mt[R.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Mt[R.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Rt[R.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Rt[R.minFilter]),R.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,re[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===hn||R.minFilter!==Ko&&R.minFilter!==es||R.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ie(N,R){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",S));let K=R.source,it=d.get(K);it===void 0&&(it={},d.set(K,it));let wt=O(R);if(wt!==N.__cacheKey){it[wt]===void 0&&(it[wt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),it[wt].usedTimes++;let Tt=it[N.__cacheKey];Tt!==void 0&&(it[N.__cacheKey].usedTimes--,Tt.usedTimes===0&&A(R)),N.__cacheKey=wt,N.__webglTexture=it[wt].texture}return q}function B(N,R,q){return Math.floor(Math.floor(N/q)/R)}function J(N,R,q,K){let wt=N.updateRanges;if(wt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,q,K,R.data);else{wt.sort((Jt,Pt)=>Jt.start-Pt.start);let Tt=0;for(let Jt=1;Jt<wt.length;Jt++){let Pt=wt[Tt],k=wt[Jt],ct=Pt.start+Pt.count,ht=B(k.start,R.width,4),xt=B(Pt.start,R.width,4);k.start<=ct+1&&ht===xt&&B(k.start+k.count-1,R.width,4)===ht?Pt.count=Math.max(Pt.count,k.start+k.count-Pt.start):(++Tt,wt[Tt]=k)}wt.length=Tt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Jt=0,Pt=wt.length;Jt<Pt;Jt++){let k=wt[Jt],ct=Math.floor(k.start/4),ht=Math.ceil(k.count/4),xt=ct%R.width,F=Math.floor(ct/R.width),ut=ht,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,xt,F,ut,tt,q,K,R.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function mt(N,R,q){let K=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(K=i.TEXTURE_3D);let it=ie(N,R),wt=R.source;e.bindTexture(K,N.__webglTexture,i.TEXTURE0+q);let Tt=n.get(wt);if(wt.version!==Tt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap!="undefined"&&R.image instanceof ImageBitmap)===!1){let tt=we.getPrimaries(we.workingColorSpace),yt=R.colorSpace===Ni?null:we.getPrimaries(R.colorSpace),At=R.colorSpace===Ni||tt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let at=m(R.image,!1,s.maxTextureSize);at=xe(R,at);let Ct=r.convert(R.format,R.colorSpace),Jt=r.convert(R.type),Pt=E(R.internalFormat,Ct,Jt,R.normalized,R.colorSpace,R.isVideoTexture);oe(K,R);let k,ct=R.mipmaps,ht=R.isVideoTexture!==!0,xt=Tt.__version===void 0||it===!0,F=wt.dataReady,ut=b(R,at);if(R.isDepthTexture)Pt=_(R.format===ns,R.type),xt&&(ht?e.texStorage2D(i.TEXTURE_2D,1,Pt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Pt,at.width,at.height,0,Ct,Jt,null));else if(R.isDataTexture)if(ct.length>0){ht&&xt&&e.texStorage2D(i.TEXTURE_2D,ut,Pt,ct[0].width,ct[0].height);for(let tt=0,yt=ct.length;tt<yt;tt++)k=ct[tt],ht?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,k.width,k.height,Ct,Jt,k.data):e.texImage2D(i.TEXTURE_2D,tt,Pt,k.width,k.height,0,Ct,Jt,k.data);R.generateMipmaps=!1}else ht?(xt&&e.texStorage2D(i.TEXTURE_2D,ut,Pt,at.width,at.height),F&&J(R,at,Ct,Jt)):e.texImage2D(i.TEXTURE_2D,0,Pt,at.width,at.height,0,Ct,Jt,at.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ht&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Pt,ct[0].width,ct[0].height,at.depth);for(let tt=0,yt=ct.length;tt<yt;tt++)if(k=ct[tt],R.format!==kn)if(Ct!==null)if(ht){if(F)if(R.layerUpdates.size>0){let At=yu(k.width,k.height,R.format,R.type);for(let lt of R.layerUpdates){let Gt=k.data.subarray(lt*At/k.data.BYTES_PER_ELEMENT,(lt+1)*At/k.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,lt,k.width,k.height,1,Ct,Gt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,k.width,k.height,at.depth,Ct,k.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Pt,k.width,k.height,at.depth,0,k.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,k.width,k.height,at.depth,Ct,Jt,k.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Pt,k.width,k.height,at.depth,0,Ct,Jt,k.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{ht&&xt&&e.texStorage2D(i.TEXTURE_2D,ut,Pt,ct[0].width,ct[0].height);for(let tt=0,yt=ct.length;tt<yt;tt++)k=ct[tt],R.format!==kn?Ct!==null?ht?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,k.width,k.height,Ct,k.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Pt,k.width,k.height,0,k.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,k.width,k.height,Ct,Jt,k.data):e.texImage2D(i.TEXTURE_2D,tt,Pt,k.width,k.height,0,Ct,Jt,k.data)}else if(R.isDataArrayTexture)if(ht){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Pt,at.width,at.height,at.depth),F)if(R.layerUpdates.size>0){let tt=yu(at.width,at.height,R.format,R.type);for(let yt of R.layerUpdates){let At=at.data.subarray(yt*tt/at.data.BYTES_PER_ELEMENT,(yt+1)*tt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,at.width,at.height,1,Ct,Jt,At)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Ct,Jt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,at.width,at.height,at.depth,0,Ct,Jt,at.data);else if(R.isData3DTexture)ht?(xt&&e.texStorage3D(i.TEXTURE_3D,ut,Pt,at.width,at.height,at.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Ct,Jt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,at.width,at.height,at.depth,0,Ct,Jt,at.data);else if(R.isFramebufferTexture){if(xt)if(ht)e.texStorage2D(i.TEXTURE_2D,ut,Pt,at.width,at.height);else{let tt=at.width,yt=at.height;for(let At=0;At<ut;At++)e.texImage2D(i.TEXTURE_2D,At,Pt,tt,yt,0,Ct,Jt,null),tt>>=1,yt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),at.parentNode!==tt){tt.appendChild(at),u.add(R),tt.onpaint=yt=>{let At=yt.changedElements;for(let lt of u)At.includes(lt.image)&&(lt.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let At=i.RGBA,lt=i.RGBA,Gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,lt,Gt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ct.length>0){if(ht&&xt){let tt=he(ct[0]);e.texStorage2D(i.TEXTURE_2D,ut,Pt,tt.width,tt.height)}for(let tt=0,yt=ct.length;tt<yt;tt++)k=ct[tt],ht?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Ct,Jt,k):e.texImage2D(i.TEXTURE_2D,tt,Pt,Ct,Jt,k);R.generateMipmaps=!1}else if(ht){if(xt){let tt=he(at);e.texStorage2D(i.TEXTURE_2D,ut,Pt,tt.width,tt.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Jt,at)}else e.texImage2D(i.TEXTURE_2D,0,Pt,Ct,Jt,at);p(R)&&v(K),Tt.__version=wt.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Dt(N,R,q){if(R.image.length!==6)return;let K=ie(N,R),it=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+q);let wt=n.get(it);if(it.version!==wt.__version||K===!0){e.activeTexture(i.TEXTURE0+q);let Tt=we.getPrimaries(we.workingColorSpace),st=R.colorSpace===Ni?null:we.getPrimaries(R.colorSpace),at=R.colorSpace===Ni||Tt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Ct=R.isCompressedTexture||R.image[0].isCompressedTexture,Jt=R.image[0]&&R.image[0].isDataTexture,Pt=[];for(let lt=0;lt<6;lt++)!Ct&&!Jt?Pt[lt]=m(R.image[lt],!0,s.maxCubemapSize):Pt[lt]=Jt?R.image[lt].image:R.image[lt],Pt[lt]=xe(R,Pt[lt]);let k=Pt[0],ct=r.convert(R.format,R.colorSpace),ht=r.convert(R.type),xt=E(R.internalFormat,ct,ht,R.normalized,R.colorSpace),F=R.isVideoTexture!==!0,ut=wt.__version===void 0||K===!0,tt=it.dataReady,yt=b(R,k);oe(i.TEXTURE_CUBE_MAP,R);let At;if(Ct){F&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,xt,k.width,k.height);for(let lt=0;lt<6;lt++){At=Pt[lt].mipmaps;for(let Gt=0;Gt<At.length;Gt++){let Bt=At[Gt];R.format!==kn?ct!==null?F?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt,0,0,Bt.width,Bt.height,ct,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt,xt,Bt.width,Bt.height,0,Bt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt,0,0,Bt.width,Bt.height,ct,ht,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt,xt,Bt.width,Bt.height,0,ct,ht,Bt.data)}}}else{if(At=R.mipmaps,F&&ut){At.length>0&&yt++;let lt=he(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,xt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Jt){F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Pt[lt].width,Pt[lt].height,ct,ht,Pt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,xt,Pt[lt].width,Pt[lt].height,0,ct,ht,Pt[lt].data);for(let Gt=0;Gt<At.length;Gt++){let Me=At[Gt].image[lt].image;F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt+1,0,0,Me.width,Me.height,ct,ht,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt+1,xt,Me.width,Me.height,0,ct,ht,Me.data)}}else{F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,ct,ht,Pt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,xt,ct,ht,Pt[lt]);for(let Gt=0;Gt<At.length;Gt++){let Bt=At[Gt];F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt+1,0,0,ct,ht,Bt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Gt+1,xt,ct,ht,Bt.image[lt])}}}p(R)&&v(i.TEXTURE_CUBE_MAP),wt.__version=it.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Et(N,R,q,K,it,wt){let Tt=r.convert(q.format,q.colorSpace),st=r.convert(q.type),at=E(q.internalFormat,Tt,st,q.normalized,q.colorSpace),Ct=n.get(R),Jt=n.get(q);if(Jt.__renderTarget=R,!Ct.__hasExternalTextures){let Pt=Math.max(1,R.width>>wt),k=Math.max(1,R.height>>wt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,wt,at,Pt,k,R.depth,0,Tt,st,null):e.texImage2D(it,wt,at,Pt,k,0,Tt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),kt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,it,Jt.__webglTexture,0,Lt(R)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,it,Jt.__webglTexture,wt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(N,R,q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),R.depthBuffer){let K=R.depthTexture,it=K&&K.isDepthTexture?K.type:null,wt=_(R.stencilBuffer,it),Tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt(R),wt,R.width,R.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt(R),wt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,wt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,N)}else{let K=R.textures;for(let it=0;it<K.length;it++){let wt=K[it],Tt=r.convert(wt.format,wt.colorSpace),st=r.convert(wt.type),at=E(wt.internalFormat,Tt,st,wt.normalized,wt.colorSpace);kt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt(R),at,R.width,R.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt(R),at,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,at,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Yt(N,R,q){let K=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(R.depthTexture);if(it.__renderTarget=R,(!it.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),K){if(it.__webglInit===void 0&&(it.__webglInit=!0,R.depthTexture.addEventListener("dispose",S)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),oe(i.TEXTURE_CUBE_MAP,R.depthTexture);let Ct=r.convert(R.depthTexture.format),Jt=r.convert(R.depthTexture.type),Pt;R.depthTexture.format===di?Pt=i.DEPTH_COMPONENT24:R.depthTexture.format===ns&&(Pt=i.DEPTH24_STENCIL8);for(let k=0;k<6;k++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Pt,R.width,R.height,0,Ct,Jt,null)}}else V(R.depthTexture,0);let wt=it.__webglTexture,Tt=Lt(R),st=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,at=R.depthTexture.format===ns?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===di)kt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,st,wt,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,at,st,wt,0);else if(R.depthTexture.format===ns)kt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,st,wt,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,at,st,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(N){let R=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){let K=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),K){let it=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),R.__depthDisposeCallback=it}R.__boundDepthTexture=K}if(N.depthTexture&&!R.__autoAllocateDepthBuffer)if(q)for(let K=0;K<6;K++)Yt(R.__webglFramebuffer[K],N,K);else{let K=N.texture.mipmaps;K&&K.length>0?Yt(R.__webglFramebuffer[0],N,0):Yt(R.__webglFramebuffer,N,0)}else if(q){R.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[K]),R.__webglDepthbuffer[K]===void 0)R.__webglDepthbuffer[K]=i.createRenderbuffer(),Ft(R.__webglDepthbuffer[K],N,!1);else{let it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=R.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,wt)}}else{let K=N.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Ft(R.__webglDepthbuffer,N,!1);else{let it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,wt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(N,R,q){let K=n.get(N);R!==void 0&&Et(K.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ot(N)}function dt(N){let R=N.texture,q=n.get(N),K=n.get(R);N.addEventListener("dispose",y);let it=N.textures,wt=N.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=R.version,o.memory.textures++),wt){q.__webglFramebuffer=[];for(let st=0;st<6;st++)if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer[st]=[];for(let at=0;at<R.mipmaps.length;at++)q.__webglFramebuffer[st][at]=i.createFramebuffer()}else q.__webglFramebuffer[st]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer=[];for(let st=0;st<R.mipmaps.length;st++)q.__webglFramebuffer[st]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let st=0,at=it.length;st<at;st++){let Ct=n.get(it[st]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&kt(N)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let at=it[st];q.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[st]);let Ct=r.convert(at.format,at.colorSpace),Jt=r.convert(at.type),Pt=E(at.internalFormat,Ct,Jt,at.normalized,at.colorSpace,N.isXRRenderTarget===!0),k=Lt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,k,Pt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,q.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(q.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(wt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),oe(i.TEXTURE_CUBE_MAP,R);for(let st=0;st<6;st++)if(R.mipmaps&&R.mipmaps.length>0)for(let at=0;at<R.mipmaps.length;at++)Et(q.__webglFramebuffer[st][at],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,at);else Et(q.__webglFramebuffer[st],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(R)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let st=0,at=it.length;st<at;st++){let Ct=it[st],Jt=n.get(Ct),Pt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,Jt.__webglTexture),oe(Pt,Ct),Et(q.__webglFramebuffer,N,Ct,i.COLOR_ATTACHMENT0+st,Pt,0),p(Ct)&&v(Pt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(st=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),oe(st,R),R.mipmaps&&R.mipmaps.length>0)for(let at=0;at<R.mipmaps.length;at++)Et(q.__webglFramebuffer[at],N,R,i.COLOR_ATTACHMENT0,st,at);else Et(q.__webglFramebuffer,N,R,i.COLOR_ATTACHMENT0,st,0);p(R)&&v(st),e.unbindTexture()}N.depthBuffer&&ot(N)}function rt(N){let R=N.textures;for(let q=0,K=R.length;q<K;q++){let it=R[q];if(p(it)){let wt=T(N),Tt=n.get(it).__webglTexture;e.bindTexture(wt,Tt),v(wt),e.unbindTexture()}}}let gt=[],bt=[];function Nt(N){if(N.samples>0){if(kt(N)===!1){let R=N.textures,q=N.width,K=N.height,it=i.COLOR_BUFFER_BIT,wt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(N),st=R.length>1;if(st)for(let Ct=0;Ct<R.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let at=N.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ct=0;Ct<R.length;Ct++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ct]);let Jt=n.get(R[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,q,K,0,0,q,K,it,i.NEAREST),l===!0&&(gt.length=0,bt.length=0,gt.push(i.COLOR_ATTACHMENT0+Ct),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(gt.push(wt),bt.push(wt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let Ct=0;Ct<R.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ct]);let Jt=n.get(R[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let R=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Lt(N){return Math.min(s.maxSamples,N.samples)}function kt(N){let R=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function H(N){let R=o.render.frame;h.get(N)!==R&&(h.set(N,R),N.update())}function xe(N,R){let q=N.colorSpace,K=N.format,it=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==vo&&q!==Ni&&(we.getTransfer(q)===Ne?(K!==kn||it!==An)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",q)),R}function he(N){return typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame!="undefined"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.getTextureUnits=C,this.setTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=ft,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function c_(i,t){function e(n,s=Ni){let r,o=we.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ru)return i.BYTE;if(n===ou)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===ql)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===kn)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===$l)return i.RED_INTEGER;if(n===is)return i.RG;if(n===Kl)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===jo||n===Qo||n===ta||n===ea)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===na||n===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return r.COMPRESSED_R11_EAC;if(n===ac)return r.COMPRESSED_SIGNED_R11_EAC;if(n===na)return r.COMPRESSED_RG11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===yc||n===vc||n===_c||n===Mc||n===bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===Sc||n===wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ec)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tc||n===Ac||n===ia||n===Rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
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

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Lo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new en({vertexShader:h_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bu=class extends pi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding!="undefined",m=new Fu,p={},v=e.getContextAttributes(),T=null,E=null,_=[],b=[],S=new vt,y=null,w=null,A=new rn;A.viewport=new Pe;let L=new rn;L.viewport=new Pe;let M=[A,L],P=new Ol,C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=_[B];return J===void 0&&(J=new dr,_[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=_[B];return J===void 0&&(J=new dr,_[B]=J),J.getGripSpace()},this.getHand=function(B){let J=_[B];return J===void 0&&(J=new dr,_[B]=J),J.getHandSpace()};function z(B){let J=b.indexOf(B.inputSource);if(J===-1)return;let mt=_[J];mt!==void 0&&(mt.update(B.inputSource,B.frame,c||o),mt.dispatchEvent({type:B.type,data:B.inputSource}))}function O(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",V);for(let B=0;B<_.length;B++){let J=b[B];J!==null&&(b[B]=null,_[B].disconnect(J))}C=null,I=null,m.reset();for(let B in p)delete p[B];if(t.setRenderTarget(T),d=null,f=null,u=null,s=null,E=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(S.width,S.height,!1),w!==null){let B=w.camera;B.fov=w.fov,B.zoom=w.zoom,B.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",O),s.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Dt=null,Et=null;v.depth&&(Et=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=v.stencil?ns:di,Dt=v.stencil?Nr:oi);let Ft={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Tn(f.textureWidth,f.textureHeight,{format:kn,type:An,depthTexture:new Ji(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Tn(d.framebufferWidth,d.framebufferHeight,{format:kn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(B){for(let J=0;J<B.removed.length;J++){let mt=B.removed[J],Dt=b.indexOf(mt);Dt>=0&&(b[Dt]=null,_[Dt].disconnect(mt))}for(let J=0;J<B.added.length;J++){let mt=B.added[J],Dt=b.indexOf(mt);if(Dt===-1){for(let Ft=0;Ft<_.length;Ft++)if(Ft>=b.length){b.push(mt),Dt=Ft;break}else if(b[Ft]===null){b[Ft]=mt,Dt=Ft;break}if(Dt===-1)break}let Et=_[Dt];Et&&Et.connect(mt)}}let G=new U,X=new U;function Z(B,J,mt){G.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(mt.matrixWorld);let Dt=G.distanceTo(X),Et=J.projectionMatrix.elements,Ft=mt.projectionMatrix.elements,Yt=Et[14]/(Et[10]-1),ot=Et[14]/(Et[10]+1),ft=(Et[9]+1)/Et[5],dt=(Et[9]-1)/Et[5],rt=(Et[8]-1)/Et[0],gt=(Ft[8]+1)/Ft[0],bt=Yt*rt,Nt=Yt*gt,Lt=Dt/(-rt+gt),kt=Lt*-rt;if(J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(kt),B.translateZ(Lt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Et[10]===-1)B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let H=Yt+Lt,xe=ot+Lt,he=bt-kt,N=Nt+(Dt-kt),R=ft*ot/xe*H,q=dt*ot/xe*H;B.projectionMatrix.makePerspective(he,N,R,q,H,xe),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Mt(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let J=B.near,mt=B.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),P.near=L.near=A.near=J,P.far=L.far=A.far=mt,(C!==P.near||I!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),C=P.near,I=P.far),P.layers.mask=B.layers.mask|6,A.layers.mask=P.layers.mask&-5,L.layers.mask=P.layers.mask&-3;let Dt=B.parent,Et=P.cameras;Mt(P,Dt);for(let Ft=0;Ft<Et.length;Ft++)Mt(Et[Ft],Dt);Et.length===2?Z(P,A,L):P.projectionMatrix.copy(A.projectionMatrix),w===null&&B.isPerspectiveCamera&&(w={camera:B,fov:B.fov,zoom:B.zoom}),Rt(B,P,Dt)};function Rt(B,J,mt){mt===null?B.matrix.copy(J.matrixWorld):(B.matrix.copy(mt.matrixWorld),B.matrix.invert(),B.matrix.multiply(J.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ur*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(B){return p[B]};let re=null;function oe(B,J){if(h=J.getViewerPose(c||o),g=J,h!==null){let mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let Dt=!1;mt.length!==P.cameras.length&&(P.cameras.length=0,Dt=!0);for(let ot=0;ot<mt.length;ot++){let ft=mt[ot],dt=null;if(d!==null)dt=d.getViewport(ft);else{let gt=u.getViewSubImage(f,ft);dt=gt.viewport,ot===0&&(t.setRenderTargetTextures(E,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(E))}let rt=M[ot];rt===void 0&&(rt=new rn,rt.layers.enable(ot),rt.viewport=new Pe,M[ot]=rt),rt.matrix.fromArray(ft.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ft.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(dt.x,dt.y,dt.width,dt.height),ot===0&&(P.matrix.copy(rt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Dt===!0&&P.cameras.push(rt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let ot=u.getDepthInformation(mt[0]);ot&&ot.isValid&&ot.texture&&m.init(ot,s.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let ot=0;ot<mt.length;ot++){let ft=mt[ot].camera;if(ft){let dt=p[ft];dt||(dt=new Lo,p[ft]=dt);let rt=u.getCameraImage(ft);dt.sourceTexture=rt}}}}for(let mt=0;mt<_.length;mt++){let Dt=b[mt],Et=_[mt];Dt!==null&&Et!==void 0&&Et.update(Dt,J,c||o)}re&&re(B,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let ie=new L0;ie.setAnimationLoop(oe),this.setAnimationLoop=function(B){re=B},this.dispose=function(){}}},f_=new le,B0=new ce;B0.set(-1,0,0,0,1,0,0,0,1);function d_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,T,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),T=v.envMap,E=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(B0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,_){let b=_.program;n.uniformBlockBinding(E,b)}function c(E,_){let b=s[E.id];b===void 0&&(m(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",v));let S=_.program;n.updateUBOMapping(E,S);let y=t.render.frame;r[E.id]!==y&&(f(E),r[E.id]=y)}function h(E){let _=u();E.__bindingPointIndex=_;let b=i.createBuffer(),S=E.__size,y=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,S,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let _=s[E.id],b=E.uniforms,S=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let y=0,w=b.length;y<w;y++){let A=b[y];if(Array.isArray(A))for(let L=0,M=A.length;L<M;L++)d(A[L],y,L,S);else d(A,y,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,_,b,S){if(x(E,_,b,S)===!0){let y=E.__offset,w=E.value;if(Array.isArray(w)){let A=0;for(let L=0;L<w.length;L++){let M=w[L],P=p(M);g(M,E.__data,A),typeof M!="number"&&typeof M!="boolean"&&!M.isMatrix3&&!ArrayBuffer.isView(M)&&(A+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,E.__data)}}function g(E,_,b){typeof E=="number"||typeof E=="boolean"?_[0]=E:E.isMatrix3?(_[0]=E.elements[0],_[1]=E.elements[1],_[2]=E.elements[2],_[3]=0,_[4]=E.elements[3],_[5]=E.elements[4],_[6]=E.elements[5],_[7]=0,_[8]=E.elements[6],_[9]=E.elements[7],_[10]=E.elements[8],_[11]=0):ArrayBuffer.isView(E)?_.set(new E.constructor(E.buffer,E.byteOffset,_.length)):E.toArray(_,b)}function x(E,_,b,S){let y=E.value,w=_+"_"+b;if(S[w]===void 0)return typeof y=="number"||typeof y=="boolean"?S[w]=y:ArrayBuffer.isView(y)?S[w]=y.slice():S[w]=y.clone(),!0;{let A=S[w];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return S[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function m(E){let _=E.uniforms,b=0,S=16;for(let w=0,A=_.length;w<A;w++){let L=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,P=L.length;M<P;M++){let C=L[M],I=Array.isArray(C.value)?C.value:[C.value];for(let z=0,O=I.length;z<O;z++){let V=I[z],G=p(V),X=b%S,Z=X%G.boundary,Mt=X+Z;b+=Z,Mt!==0&&S-Mt<G.storage&&(b+=S-Mt),C.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=G.storage}}}let y=b%S;return y>0&&(b+=S-y),E.__size=b,E.__cache={},this}function p(E){let _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(_.boundary=16,_.storage=E.byteLength):se("WebGLRenderer: Unsupported uniform value type.",E),_}function v(E){let _=E.target;_.removeEventListener("dispose",v);let b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function T(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:T}}var m_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function g_(){return yi===null&&(yi=new vr(m_,16,16,is,ai),yi.name="DFG_LUT",yi.minFilter=pn,yi.magFilter=pn,yi.wrapS=ui,yi.wrapT=ui,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var la=class{constructor(t={}){let{canvas:e=jd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=An}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([jl,Kl,$l]),p=new Set([An,oi,Dr,Nr,Yl,Zl]),v=new Uint32Array(4),T=new Int32Array(4),E=new U,_=null,b=null,S=[],y=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,M=null,P=null,C=null,I=null;this._outputColorSpace=De;let z=0,O=0,V=null,G=-1,X=null,Z=new Pe,Mt=new Pe,Rt=null,re=new Ht(0),oe=0,ie=e.width,B=e.height,J=1,mt=null,Dt=null,Et=new Pe(0,0,ie,B),Ft=new Pe(0,0,ie,B),Yt=!1,ot=new Mr,ft=!1,dt=!1,rt=new le,gt=new U,bt=new Pe,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function kt(){return V===null?J:1}let H=n;function xe(D,W){return e.getContext(D,W)}let he,N,R,q,K,it,wt,Tt,st,at,Ct,Jt,Pt,k,ct,ht,xt,F,ut,tt,yt,At,lt;try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",$e,!1),H===null){let W="webgl2";if(H=xe(W,D),H===null)throw xe(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(D){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),ae("WebGLRenderer: "+D.message),D}function Gt(){he=new Ey(H),he.init(),yt=new c_(H,he),N=new dy(H,he,t,yt),R=new a_(H,he),N.reversedDepthBuffer&&f&&R.buffers.depth.setReversed(!0),P=H.createFramebuffer(),C=H.createFramebuffer(),I=H.createFramebuffer(),q=new Ty(H),K=new Yv,it=new l_(H,he,R,K,N,yt,q),wt=new by(A),Tt=new Rg(H),At=new uy(H,Tt),st=new Sy(H,Tt,q,At),at=new Ry(H,st,Tt,At,q),F=new Ay(H,N,it),ct=new py(K),Ct=new qv(A,wt,he,N,At,ct),Jt=new d_(A,K),Pt=new Jv,k=new e_(he),xt=new hy(A,wt,R,at,g,l),ht=new o_(A,at,N),lt=new p_(H,q,N,R),ut=new fy(H,he,q),tt=new wy(H,he,q),q.programs=Ct.programs,A.capabilities=N,A.extensions=he,A.properties=K,A.renderLists=Pt,A.shadowMap=ht,A.state=R,A.info=q}x!==An&&(w=new Iy(x,e.width,e.height,a,s,r));let Bt=new Bu(A,H);this.xr=Bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let D=he.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=he.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(D){D!==void 0&&(J=D,this.setSize(ie,B,!1))},this.getSize=function(D){return D.set(ie,B)},this.setSize=function(D,W,nt=!0){if(Bt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=D,B=W,e.width=Math.floor(D*J),e.height=Math.floor(W*J),nt===!0&&(e.style.width=D+"px",e.style.height=W+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,D,W)},this.getDrawingBufferSize=function(D){return D.set(ie*J,B*J).floor()},this.setDrawingBufferSize=function(D,W,nt){ie=D,B=W,J=nt,e.width=Math.floor(D*nt),e.height=Math.floor(W*nt),this.setViewport(0,0,D,W)},this.setEffects=function(D){if(x===An){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let W=0;W<D.length;W++)if(D[W].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(Z)},this.getViewport=function(D){return D.copy(Et)},this.setViewport=function(D,W,nt,j){D.isVector4?Et.set(D.x,D.y,D.z,D.w):Et.set(D,W,nt,j),R.viewport(Z.copy(Et).multiplyScalar(J).round())},this.getScissor=function(D){return D.copy(Ft)},this.setScissor=function(D,W,nt,j){D.isVector4?Ft.set(D.x,D.y,D.z,D.w):Ft.set(D,W,nt,j),R.scissor(Mt.copy(Ft).multiplyScalar(J).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(D){R.setScissorTest(Yt=D)},this.setOpaqueSort=function(D){mt=D},this.setTransparentSort=function(D){Dt=D},this.getClearColor=function(D){return D.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(D=!0,W=!0,nt=!0){let j=0;if(D){let Q=!1;if(V!==null){let Ot=V.texture.format;Q=m.has(Ot)}if(Q){let Ot=V.texture.type,qt=p.has(Ot),Ut=xt.getClearColor(),$t=xt.getClearAlpha(),jt=Ut.r,pe=Ut.g,be=Ut.b;qt?(v[0]=jt,v[1]=pe,v[2]=be,v[3]=$t,H.clearBufferuiv(H.COLOR,0,v)):(T[0]=jt,T[1]=pe,T[2]=be,T[3]=$t,H.clearBufferiv(H.COLOR,0,T))}else j|=H.COLOR_BUFFER_BIT}W&&(j|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),M=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),xt.dispose(),Pt.dispose(),k.dispose(),K.dispose(),wt.dispose(),at.dispose(),At.dispose(),lt.dispose(),Ct.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",ps),Bt.removeEventListener("sessionend",eo),ms.stop()};function Me(D){D.preventDefault(),bo("WebGLRenderer: Context Lost."),L=!0}function ye(){bo("WebGLRenderer: Context Restored."),L=!1;let D=q.autoReset,W=ht.enabled,nt=ht.autoUpdate,j=ht.needsUpdate,Q=ht.type;Gt(),q.autoReset=D,ht.enabled=W,ht.autoUpdate=nt,ht.needsUpdate=j,ht.type=Q}function $e(D){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Vn(D){let W=D.target;W.removeEventListener("dispose",Vn),Ta(W)}function Ta(D){Aa(D),K.remove(D)}function Aa(D){let W=K.get(D).programs;W!==void 0&&(W.forEach(function(nt){Ct.releaseProgram(nt)}),D.isShaderMaterial&&Ct.releaseShaderCache(D))}this.renderBufferDirect=function(D,W,nt,j,Q,Ot){W===null&&(W=Nt);let qt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ut=Zp(D,W,nt,j,Q);R.setMaterial(j,qt);let $t=nt.index,jt=1;if(j.wireframe===!0){if($t=st.getWireframeAttribute(nt),$t===void 0)return;jt=2}let pe=nt.drawRange,be=nt.attributes.position,Kt=pe.start*jt,Le=(pe.start+pe.count)*jt;Ot!==null&&(Kt=Math.max(Kt,Ot.start*jt),Le=Math.min(Le,(Ot.start+Ot.count)*jt)),$t!==null?(Kt=Math.max(Kt,0),Le=Math.min(Le,$t.count)):be!=null&&(Kt=Math.max(Kt,0),Le=Math.min(Le,be.count));let Ke=Le-Kt;if(Ke<0||Ke===1/0)return;At.setup(Q,j,Ut,nt,$t);let Ve,Be=ut;if($t!==null&&(Ve=Tt.get($t),Be=tt,Be.setIndex(Ve)),Q.isMesh)j.wireframe===!0?(R.setLineWidth(j.wireframeLinewidth*kt()),Be.setMode(H.LINES)):Be.setMode(H.TRIANGLES);else if(Q.isLine){let xn=j.linewidth;xn===void 0&&(xn=1),R.setLineWidth(xn*kt()),Q.isLineSegments?Be.setMode(H.LINES):Q.isLineLoop?Be.setMode(H.LINE_LOOP):Be.setMode(H.LINE_STRIP)}else Q.isPoints?Be.setMode(H.POINTS):Q.isSprite&&Be.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Be.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let xn=Q._multiDrawStarts,Xt=Q._multiDrawCounts,En=Q._multiDrawCount,Re=$t?Tt.get($t).bytesPerElement:1,Wn=K.get(j).currentProgram.getUniforms();for(let ci=0;ci<En;ci++)Wn.setValue(H,"_gl_DrawID",ci),Be.render(xn[ci]/Re,Xt[ci])}else if(Q.isInstancedMesh)Be.renderInstances(Kt,Ke,Q.count);else if(nt.isInstancedBufferGeometry){let xn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Xt=Math.min(nt.instanceCount,xn);Be.renderInstances(Kt,Ke,Xt)}else Be.render(Kt,Ke)};function bn(D,W,nt,j){M!==null&&D.isNodeMaterial&&M.setObject(j,D),ft===!0&&ct.setState(D,nt,!1),D.transparent===!0&&D.side===fn&&D.forceSinglePass===!1?(D.side=on,D.needsUpdate=!0,Ca(D,W,j),D.side=mi,D.needsUpdate=!0,Ca(D,W,j),D.side=fn):Ca(D,W,j)}this.compile=function(D,W,nt=null){nt===null&&(nt=D),M!==null&&M.renderStart(D,W,nt),b=k.get(nt),b.init(W),y.push(b),nt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),D!==nt&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),b.setupLights(),M!==null&&M.updateLights(b.state.lightsArray),dt=this.localClippingEnabled,ft=ct.init(this.clippingPlanes,dt),ft===!0&&ct.setGlobalState(this.clippingPlanes,W),M!==null&&ht.render(b.state.shadowsArray,nt,W);let j=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ot=Q.material;if(Ot)if(Array.isArray(Ot))for(let qt=0;qt<Ot.length;qt++){let Ut=Ot[qt];bn(Ut,nt,W,Q),j.add(Ut)}else bn(Ot,nt,W,Q),j.add(Ot)}),b=y.pop(),M!==null&&M.renderEnd(),j},this.compileAsync=function(D,W,nt=null){let j=this.compile(D,W,nt);return new Promise(Q=>{function Ot(){if(j.forEach(function(qt){let $t=K.get(qt).currentProgram;($t===void 0||$t.isReady())&&j.delete(qt)}),j.size===0){Q(D);return}setTimeout(Ot,10)}he.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Ei=null;function Hs(D){Ei&&Ei(D)}function ps(){ms.stop()}function eo(){ms.start()}let ms=new L0;ms.setAnimationLoop(Hs),typeof self!="undefined"&&ms.setContext(self),this.setAnimationLoop=function(D){Ei=D,Bt.setAnimationLoop(D),D===null?ms.stop():ms.start()},Bt.addEventListener("sessionstart",ps),Bt.addEventListener("sessionend",eo),this.render=function(D,W){if(W!==void 0&&W.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;M!==null&&M.renderStart(D,W);let nt=Bt.enabled===!0&&Bt.isPresenting===!0,j=w!==null&&(V===null||nt)&&w.begin(A,V);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(W),W=Bt.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,W,V),b=k.get(D,y.length),b.init(W),b.state.textureUnits=it.getTextureUnits(),y.push(b),rt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ot.setFromProjectionMatrix(rt,ti,W.reversedDepth),dt=this.localClippingEnabled,ft=ct.init(this.clippingPlanes,dt),_=Pt.get(D,S.length),_.init(),S.push(_),Bt.enabled===!0&&Bt.isPresenting===!0){let qt=A.xr.getDepthSensingMesh();qt!==null&&rh(qt,W,-1/0,A.sortObjects)}rh(D,W,0,A.sortObjects),_.finish(),M!==null&&M.updateLights(b.state.lightsArray),A.sortObjects===!0&&_.sort(mt,Dt),Lt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Lt&&xt.addToRenderList(_,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&ct.beginShadows();let Q=b.state.shadowsArray;if(ht.render(Q,D,W),ft===!0&&ct.endShadows(),(j&&w.hasRenderPass())===!1){let qt=_.opaque,Ut=_.transmissive;if(b.setupLights(),W.isArrayCamera){let $t=W.cameras;if(Ut.length>0)for(let jt=0,pe=$t.length;jt<pe;jt++){let be=$t[jt];Rf(qt,Ut,D,be)}Lt&&xt.render(D);for(let jt=0,pe=$t.length;jt<pe;jt++){let be=$t[jt];Af(_,D,be,be.viewport)}}else Ut.length>0&&Rf(qt,Ut,D,W),Lt&&xt.render(D),Af(_,D,W)}V!==null&&O===0&&(it.updateMultisampleRenderTarget(V),it.updateRenderTargetMipmap(V)),j&&w.end(A),D.isScene===!0&&D.onAfterRender(A,D,W),At.resetDefaultState(),G=-1,X=null,y.pop(),y.length>0?(b=y[y.length-1],it.setTextureUnits(b.state.textureUnits),ft===!0&&ct.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,S.pop(),S.length>0?_=S[S.length-1]:_=null,M!==null&&M.renderEnd()};function rh(D,W,nt,j){if(D.visible===!1)return;if(D.layers.test(W.layers)){if(D.isGroup)nt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(W);else if(D.isLightProbeGrid)b.pushLightProbeGrid(D);else if(D.isLight)b.pushLight(D),D.castShadow&&b.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(ot)){j&&bt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(rt);let qt=at.update(D),Ut=D.material;Ut.visible&&_.push(D,qt,Ut,nt,bt.z,null,W)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(ot))){let qt=at.update(D),Ut=D.material;if(j&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),bt.copy(D.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),bt.copy(qt.boundingSphere.center)),bt.applyMatrix4(D.matrixWorld).applyMatrix4(rt)),Array.isArray(Ut)){let $t=qt.groups;for(let jt=0,pe=$t.length;jt<pe;jt++){let be=$t[jt],Kt=Ut[be.materialIndex];Kt&&Kt.visible&&_.push(D,qt,Kt,nt,bt.z,be,W)}}else Ut.visible&&_.push(D,qt,Ut,nt,bt.z,null,W)}}let Ot=D.children;for(let qt=0,Ut=Ot.length;qt<Ut;qt++)rh(Ot[qt],W,nt,j)}function Af(D,W,nt,j){let{opaque:Q,transmissive:Ot,transparent:qt}=D;b.setupLightsView(nt),ft===!0&&ct.setGlobalState(A.clippingPlanes,nt),j&&R.viewport(Z.copy(j)),Q.length>0&&Ra(Q,W,nt),Ot.length>0&&Ra(Ot,W,nt),qt.length>0&&Ra(qt,W,nt),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Rf(D,W,nt,j){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){let Kt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new Tn(1,1,{generateMipmaps:!0,type:Kt?ai:An,minFilter:es,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:we.workingColorSpace})}let Ot=b.state.transmissionRenderTarget[j.id],qt=j.viewport||Z;Ot.setSize(qt.z*A.transmissionResolutionScale,qt.w*A.transmissionResolutionScale);let Ut=A.getRenderTarget(),$t=A.getActiveCubeFace(),jt=A.getActiveMipmapLevel();A.setRenderTarget(Ot),A.getClearColor(re),oe=A.getClearAlpha(),oe<1&&A.setClearColor(16777215,.5),A.clear(),Lt&&xt.render(nt);let pe=A.toneMapping;A.toneMapping=ri;let be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),ft===!0&&ct.setGlobalState(A.clippingPlanes,j),Ra(D,nt,j),it.updateMultisampleRenderTarget(Ot),it.updateRenderTargetMipmap(Ot),he.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Le=0,Ke=W.length;Le<Ke;Le++){let Ve=W[Le],{object:Be,geometry:xn,material:Xt,group:En}=Ve;if(Xt.side===fn&&Be.layers.test(j.layers)){let Re=Xt.side;Xt.side=on,Xt.needsUpdate=!0,Cf(Be,nt,j,xn,Xt,En),Xt.side=Re,Xt.needsUpdate=!0,Kt=!0}}Kt===!0&&(it.updateMultisampleRenderTarget(Ot),it.updateRenderTargetMipmap(Ot))}A.setRenderTarget(Ut,$t,jt),A.setClearColor(re,oe),be!==void 0&&(j.viewport=be),A.toneMapping=pe}function Ra(D,W,nt){let j=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Ot=D.length;Q<Ot;Q++){let qt=D[Q],{object:Ut,geometry:$t,group:jt}=qt,pe=qt.material;pe.allowOverride===!0&&j!==null&&(pe=j),Ut.layers.test(nt.layers)&&Cf(Ut,W,nt,$t,pe,jt)}}function Cf(D,W,nt,j,Q,Ot){M!==null&&Q.isNodeMaterial&&M.setObject(D,Q),D.onBeforeRender(A,W,nt,j,Q,Ot),D.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(A,W,nt,j,D,Ot),Q.transparent===!0&&Q.side===fn&&Q.forceSinglePass===!1?(Q.side=on,Q.needsUpdate=!0,A.renderBufferDirect(nt,W,j,Q,D,Ot),Q.side=mi,Q.needsUpdate=!0,A.renderBufferDirect(nt,W,j,Q,D,Ot),Q.side=fn):A.renderBufferDirect(nt,W,j,Q,D,Ot),D.onAfterRender(A,W,nt,j,Q,Ot)}function Ca(D,W,nt){W.isScene!==!0&&(W=Nt);let j=K.get(D),Q=b.state.lights,Ot=b.state.shadowsArray,qt=Q.state.version,Ut=Ct.getParameters(D,Q.state,Ot,W,nt,b.state.lightProbeGridArray),$t=Ct.getProgramCacheKey(Ut),jt=j.programs;j.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;let pe=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;j.envMap=wt.get(D.envMap||j.environment,pe),j.envMapRotation=j.environment!==null&&D.envMap===null?W.environmentRotation:D.envMapRotation,jt===void 0&&(D.addEventListener("dispose",Vn),jt=new Map,j.programs=jt);let be=jt.get($t);if(be!==void 0){if(j.currentProgram===be&&j.lightsStateVersion===qt)return Pf(D,Ut),be}else Ut.uniforms=Ct.getUniforms(D),M!==null&&D.isNodeMaterial&&M.build(D,nt,Ut),D.onBeforeCompile(Ut,A),be=Ct.acquireProgram(Ut,$t),jt.set($t,be),j.uniforms=Ut.uniforms;let Kt=j.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Kt.clippingPlanes=ct.uniform),Pf(D,Ut),j.needsLights=$p(D),j.lightsStateVersion=qt,j.needsLights&&(Kt.ambientLightColor.value=Q.state.ambient,Kt.lightProbe.value=Q.state.probe,Kt.sunLights.value=Q.state.sun,Kt.sunLightShadows.value=Q.state.sunShadow,Kt.directionalLights.value=Q.state.directional,Kt.directionalLightShadows.value=Q.state.directionalShadow,Kt.spotLights.value=Q.state.spot,Kt.spotLightShadows.value=Q.state.spotShadow,Kt.rectAreaLights.value=Q.state.rectArea,Kt.ltc_1.value=Q.state.rectAreaLTC1,Kt.ltc_2.value=Q.state.rectAreaLTC2,Kt.pointLights.value=Q.state.point,Kt.pointLightShadows.value=Q.state.pointShadow,Kt.hemisphereLights.value=Q.state.hemi,Kt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Kt.sunShadowCascade.value=Q.state.sunShadowCascade,Kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Kt.spotLightMatrix.value=Q.state.spotLightMatrix,Kt.spotLightMap.value=Q.state.spotLightMap,Kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=b.state.lightProbeGridArray.length>0,j.currentProgram=be,j.uniformsList=null,be}function If(D){if(D.uniformsList===null){let W=D.currentProgram.getUniforms();D.uniformsList=Or.seqWithValue(W.seq,D.uniforms)}return D.uniformsList}function Pf(D,W){let nt=K.get(D);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function Yp(D,W){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;E.setFromMatrixPosition(W.matrixWorld);for(let nt=0,j=D.length;nt<j;nt++){let Q=D[nt];if(Q.texture!==null&&Q.boundingBox.containsPoint(E))return Q}return null}function Zp(D,W,nt,j,Q){W.isScene!==!0&&(W=Nt),it.resetTextureUnits();let Ot=W.fog,qt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,Ut=V===null?A.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:we.workingColorSpace,$t=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,jt=wt.get(j.envMap||qt,$t),pe=j.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,be=!!nt.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Kt=!!nt.morphAttributes.position,Le=!!nt.morphAttributes.normal,Ke=!!nt.morphAttributes.color,Ve=ri;j.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ve=A.toneMapping);let Be=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,xn=Be!==void 0?Be.length:0,Xt=K.get(j),En=b.state.lights;if(ft===!0&&(dt===!0||D!==X)){let He=D===X&&j.id===G;ct.setState(j,D,He)}let Re=!1;j.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==En.state.version||Xt.outputColorSpace!==Ut||Q.isBatchedMesh&&Xt.batching===!1||!Q.isBatchedMesh&&Xt.batching===!0||Q.isBatchedMesh&&Xt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Xt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Xt.instancing===!1||!Q.isInstancedMesh&&Xt.instancing===!0||Q.isSkinnedMesh&&Xt.skinning===!1||!Q.isSkinnedMesh&&Xt.skinning===!0||Q.isInstancedMesh&&Xt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xt.instancingMorph===!1&&Q.morphTexture!==null||Xt.envMap!==jt||j.fog===!0&&Xt.fog!==Ot||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ct.numPlanes||Xt.numIntersection!==ct.numIntersection)||Xt.vertexAlphas!==pe||Xt.vertexTangents!==be||Xt.morphTargets!==Kt||Xt.morphNormals!==Le||Xt.morphColors!==Ke||Xt.toneMapping!==Ve||Xt.morphTargetsCount!==xn||!!Xt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Re=!0):(Re=!0,Xt.__version=j.version);let Wn=Xt.currentProgram;Re===!0&&(Wn=Ca(j,W,Q),M&&j.isNodeMaterial&&M.onUpdateProgram(j,Wn,Xt));let ci=!1,ki=!1,ks=!1,Ue=Wn.getUniforms(),Ze=Xt.uniforms;if(R.useProgram(Wn.program)&&(ci=!0,ki=!0,ks=!0),j.id!==G&&(G=j.id,ki=!0),Xt.needsLights){let He=Yp(b.state.lightProbeGridArray,Q);Xt.lightProbeGrid!==He&&(Xt.lightProbeGrid=He,ki=!0)}if(ci||X!==D){R.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Ue.setValue(H,"projectionMatrix",D.projectionMatrix),Ue.setValue(H,"viewMatrix",D.matrixWorldInverse);let Vi=Ue.map.cameraPosition;Vi!==void 0&&Vi.setValue(H,gt.setFromMatrixPosition(D.matrixWorld)),N.logarithmicDepthBuffer&&Ue.setValue(H,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ue.setValue(H,"isOrthographic",D.isOrthographicCamera===!0),X!==D&&(X=D,ki=!0,ks=!0)}if(Xt.needsLights&&(En.state.sunShadowMap.length>0&&Ue.setValue(H,"sunShadowMap",En.state.sunShadowMap,it),En.state.directionalShadowMap.length>0&&Ue.setValue(H,"directionalShadowMap",En.state.directionalShadowMap,it),En.state.spotShadowMap.length>0&&Ue.setValue(H,"spotShadowMap",En.state.spotShadowMap,it),En.state.pointShadowMap.length>0&&Ue.setValue(H,"pointShadowMap",En.state.pointShadowMap,it)),Q.isSkinnedMesh){Ue.setOptional(H,Q,"bindMatrix"),Ue.setOptional(H,Q,"bindMatrixInverse");let He=Q.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Ue.setValue(H,"boneTexture",He.boneTexture,it))}Q.isBatchedMesh&&(Ue.setOptional(H,Q,"batchingTexture"),Ue.setValue(H,"batchingTexture",Q._matricesTexture,it),Ue.setOptional(H,Q,"batchingIdTexture"),Ue.setValue(H,"batchingIdTexture",Q._indirectTexture,it),Ue.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ue.setValue(H,"batchingColorTexture",Q._colorsTexture,it));let Gi=nt.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&F.update(Q,nt,Wn),(ki||Xt.receiveShadow!==Q.receiveShadow)&&(Xt.receiveShadow=Q.receiveShadow,Ue.setValue(H,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(Ze.envMapIntensity.value=W.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=g_()),ki){if(Ue.setValue(H,"toneMappingExposure",A.toneMappingExposure),Xt.needsLights&&Jp(Ze,ks),Ot&&j.fog===!0&&Jt.refreshFogUniforms(Ze,Ot),Jt.refreshMaterialUniforms(Ze,j,J,B,b.state.transmissionRenderTarget[D.id]),Xt.needsLights&&Xt.lightProbeGrid){let He=Xt.lightProbeGrid;Ze.probesSH.value=He.texture,Ze.probesMin.value.copy(He.boundingBox.min),Ze.probesMax.value.copy(He.boundingBox.max),Ze.probesResolution.value.copy(He.resolution)}Or.upload(H,If(Xt),Ze,it)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Or.upload(H,If(Xt),Ze,it),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ue.setValue(H,"center",Q.center),Ue.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ue.setValue(H,"normalMatrix",Q.normalMatrix),Ue.setValue(H,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let He=j.uniformsGroups;for(let Vi=0,Gs=He.length;Vi<Gs;Vi++){let Df=He[Vi];lt.update(Df,Wn),lt.bind(Df,Wn)}}return Wn}function Jp(D,W){D.ambientLightColor.needsUpdate=W,D.lightProbe.needsUpdate=W,D.sunLights.needsUpdate=W,D.sunLightShadows.needsUpdate=W,D.directionalLights.needsUpdate=W,D.directionalLightShadows.needsUpdate=W,D.pointLights.needsUpdate=W,D.pointLightShadows.needsUpdate=W,D.spotLights.needsUpdate=W,D.spotLightShadows.needsUpdate=W,D.rectAreaLights.needsUpdate=W,D.hemisphereLights.needsUpdate=W}function $p(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(D,W,nt){let j=K.get(D);j.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),K.get(D.texture).__webglTexture=W,K.get(D.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:nt,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,W){let nt=K.get(D);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(D,W=0,nt=0){V=D,z=W,O=nt;let j=null,Q=!1,Ot=!1;if(D){let Ut=K.get(D);if(Ut.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(H.FRAMEBUFFER,Ut.__webglFramebuffer),Z.copy(D.viewport),Mt.copy(D.scissor),Rt=D.scissorTest,R.viewport(Z),R.scissor(Mt),R.setScissorTest(Rt),G=-1;return}else if(Ut.__webglFramebuffer===void 0)it.setupRenderTarget(D);else if(Ut.__hasExternalTextures)it.rebindTextures(D,K.get(D.texture).__webglTexture,K.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let pe=D.depthTexture;if(Ut.__boundDepthTexture!==pe){if(pe!==null&&K.has(pe)&&(D.width!==pe.image.width||D.height!==pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(D)}}let $t=D.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ot=!0);let jt=K.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?j=jt[W][nt]:j=jt[W],Q=!0):D.samples>0&&it.useMultisampledRTT(D)===!1?j=K.get(D).__webglMultisampledFramebuffer:Array.isArray(jt)?j=jt[nt]:j=jt,Z.copy(D.viewport),Mt.copy(D.scissor),Rt=D.scissorTest}else Z.copy(Et).multiplyScalar(J).floor(),Mt.copy(Ft).multiplyScalar(J).floor(),Rt=Yt;if(nt!==0&&(j=P),R.bindFramebuffer(H.FRAMEBUFFER,j)&&R.drawBuffers(D,j),R.viewport(Z),R.scissor(Mt),R.setScissorTest(Rt),Q){let Ut=K.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,nt)}else if(Ot){let Ut=W;for(let $t=0;$t<D.textures.length;$t++){let jt=K.get(D.textures[$t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$t,jt.__webglTexture,nt,Ut)}}else if(D!==null&&nt!==0){let Ut=K.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ut.__webglTexture,nt)}G=-1};function Lf(D){let W=K.get(D);return(W.__readFormat!==D.format||W.__readType!==D.type)&&(W.__readFormat=D.format,W.__readType=D.type,W.__formatReadable=N.textureFormatReadable(D.format),W.__typeReadable=N.textureTypeReadable(D.type)),W}this.readRenderTargetPixels=function(D,W,nt,j,Q,Ot,qt,Ut=0){if(!(D&&D.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=K.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&qt!==void 0&&($t=$t[qt]),$t){R.bindFramebuffer(H.FRAMEBUFFER,$t);try{let jt=D.textures[Ut],pe=jt.format,be=jt.type;D.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ut);let Kt=Lf(jt);if(Kt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=D.width-j&&nt>=0&&nt<=D.height-Q&&H.readPixels(W,nt,j,Q,yt.convert(pe),yt.convert(be),Ot)}finally{let jt=V!==null?K.get(V).__webglFramebuffer:null;R.bindFramebuffer(H.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(D,W,nt,j,Q,Ot,qt,Ut=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=K.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&qt!==void 0&&($t=$t[qt]),$t)if(W>=0&&W<=D.width-j&&nt>=0&&nt<=D.height-Q){R.bindFramebuffer(H.FRAMEBUFFER,$t);let jt=D.textures[Ut],pe=jt.format,be=jt.type;D.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ut);let Kt=Lf(jt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Le),H.bufferData(H.PIXEL_PACK_BUFFER,Ot.byteLength,H.STREAM_READ),H.readPixels(W,nt,j,Q,yt.convert(pe),yt.convert(be),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ke=V!==null?K.get(V).__webglFramebuffer:null;R.bindFramebuffer(H.FRAMEBUFFER,Ke);let Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await t0(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Le),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ot),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Le),H.deleteSync(Ve),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,W=null,nt=0){let j=Math.pow(2,-nt),Q=Math.floor(D.image.width*j),Ot=Math.floor(D.image.height*j),qt=W!==null?W.x:0,Ut=W!==null?W.y:0;it.setTexture2D(D,0),H.copyTexSubImage2D(H.TEXTURE_2D,nt,0,0,qt,Ut,Q,Ot),R.unbindTexture()},this.copyTextureToTexture=function(D,W,nt=null,j=null,Q=0,Ot=0){let qt,Ut,$t,jt,pe,be,Kt,Le,Ke,Ve=D.isCompressedTexture?D.mipmaps[Ot]:D.image;if(nt!==null)qt=nt.max.x-nt.min.x,Ut=nt.max.y-nt.min.y,$t=nt.isBox3?nt.max.z-nt.min.z:1,jt=nt.min.x,pe=nt.min.y,be=nt.isBox3?nt.min.z:0;else{let Ze=Math.pow(2,-Q);qt=Math.floor(Ve.width*Ze),Ut=Math.floor(Ve.height*Ze),D.isDataArrayTexture?$t=Ve.depth:D.isData3DTexture?$t=Math.floor(Ve.depth*Ze):$t=1,jt=0,pe=0,be=0}j!==null?(Kt=j.x,Le=j.y,Ke=j.z):(Kt=0,Le=0,Ke=0);let Be=yt.convert(W.format),xn=yt.convert(W.type),Xt;W.isData3DTexture?(it.setTexture3D(W,0),Xt=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(it.setTexture2DArray(W,0),Xt=H.TEXTURE_2D_ARRAY):(it.setTexture2D(W,0),Xt=H.TEXTURE_2D),R.activeTexture(H.TEXTURE0),R.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),R.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),R.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);let En=R.getParameter(H.UNPACK_ROW_LENGTH),Re=R.getParameter(H.UNPACK_IMAGE_HEIGHT),Wn=R.getParameter(H.UNPACK_SKIP_PIXELS),ci=R.getParameter(H.UNPACK_SKIP_ROWS),ki=R.getParameter(H.UNPACK_SKIP_IMAGES);R.pixelStorei(H.UNPACK_ROW_LENGTH,Ve.width),R.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ve.height),R.pixelStorei(H.UNPACK_SKIP_PIXELS,jt),R.pixelStorei(H.UNPACK_SKIP_ROWS,pe),R.pixelStorei(H.UNPACK_SKIP_IMAGES,be);let ks=D.isDataArrayTexture||D.isData3DTexture,Ue=W.isDataArrayTexture||W.isData3DTexture;if(D.isDepthTexture){let Ze=K.get(D),Gi=K.get(W),He=K.get(Ze.__renderTarget),Vi=K.get(Gi.__renderTarget);R.bindFramebuffer(H.READ_FRAMEBUFFER,He.__webglFramebuffer),R.bindFramebuffer(H.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Gs=0;Gs<$t;Gs++)ks&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(D).__webglTexture,Q,be+Gs),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(W).__webglTexture,Ot,Ke+Gs)),H.blitFramebuffer(jt,pe,qt,Ut,Kt,Le,qt,Ut,H.DEPTH_BUFFER_BIT,H.NEAREST);R.bindFramebuffer(H.READ_FRAMEBUFFER,null),R.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||D.isRenderTargetTexture||K.has(D)){let Ze=K.get(D),Gi=K.get(W);R.bindFramebuffer(H.READ_FRAMEBUFFER,C),R.bindFramebuffer(H.DRAW_FRAMEBUFFER,I);for(let He=0;He<$t;He++)ks?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ze.__webglTexture,Q,be+He):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ze.__webglTexture,Q),Ue?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gi.__webglTexture,Ot,Ke+He):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Gi.__webglTexture,Ot),Q!==0?H.blitFramebuffer(jt,pe,qt,Ut,Kt,Le,qt,Ut,H.COLOR_BUFFER_BIT,H.NEAREST):Ue?H.copyTexSubImage3D(Xt,Ot,Kt,Le,Ke+He,jt,pe,qt,Ut):H.copyTexSubImage2D(Xt,Ot,Kt,Le,jt,pe,qt,Ut);R.bindFramebuffer(H.READ_FRAMEBUFFER,null),R.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ue?D.isDataTexture||D.isData3DTexture?H.texSubImage3D(Xt,Ot,Kt,Le,Ke,qt,Ut,$t,Be,xn,Ve.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Xt,Ot,Kt,Le,Ke,qt,Ut,$t,Be,Ve.data):H.texSubImage3D(Xt,Ot,Kt,Le,Ke,qt,Ut,$t,Be,xn,Ve):D.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ot,Kt,Le,qt,Ut,Be,xn,Ve.data):D.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ot,Kt,Le,Ve.width,Ve.height,Be,Ve.data):H.texSubImage2D(H.TEXTURE_2D,Ot,Kt,Le,qt,Ut,Be,xn,Ve);R.pixelStorei(H.UNPACK_ROW_LENGTH,En),R.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Re),R.pixelStorei(H.UNPACK_SKIP_PIXELS,Wn),R.pixelStorei(H.UNPACK_SKIP_ROWS,ci),R.pixelStorei(H.UNPACK_SKIP_IMAGES,ki),Ot===0&&W.generateMipmaps&&H.generateMipmap(Xt),R.unbindTexture()},this.initRenderTarget=function(D){K.get(D).__webglFramebuffer===void 0&&it.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?it.setTextureCube(D,0):D.isData3DTexture?it.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?it.setTexture2DArray(D,0):it.setTexture2D(D,0),R.unbindTexture()},this.resetState=function(){z=0,O=0,V=null,R.reset(),At.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};var ca=class extends Li{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Qt;t.deleteAttribute("uv");let e=new ne({side:on}),n=new ne,s=new Zo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new et(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Io(t,n,6),a=new Je;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new et(t,kr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new et(t,kr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new et(t,kr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new et(t,kr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new et(t,kr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new et(t,kr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function kr(i){return new Wo({color:0,emissive:16777215,emissiveIntensity:i})}var _i=[{id:0,name:"Haris",tag:"",color:"#ff5fb4"},{id:1,name:"Hannan",tag:"",color:"#3b82f6"},{id:2,name:"Hanbal",tag:"",color:"#3ddc84"},{id:3,name:"Random",tag:"",color:"#ffc233"}],ha=[{id:0,key:"gta",name:"Punjabi GTA",sub:"Open World",stars:3,limit:0,finishZ:-99999,finishY:99999,free:!0,city:!0,colors:["#3a86ff","#ff9f1c"],blurb:"A big open city! Skyscrapers, avenues with traffic, parks, a coast highway and a real MOUNTAIN with a road spiralling to the snowy summit. Jump in any parked car with C and drive anywhere. Up to 4 friends together."}];var ua=new U;function Yn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ua.copy(t),ua[n]=0,ua.normalize();let c=.5*o/(o+a),h=1-ua.angleTo(i)/l;return Math.sign(ua[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ss=class i extends Qt{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U,c=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,x=new U,m=.5/o;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[v+0]=Yn(x,c,"z","y",r,n),d[v+1]=1-Yn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[v+0]=1-Yn(x,c,"z","y",r,n),d[v+1]=1-Yn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[v+0]=1-Yn(x,c,"x","z",r,t),d[v+1]=Yn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[v+0]=1-Yn(x,c,"x","z",r,t),d[v+1]=1-Yn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[v+0]=1-Yn(x,c,"x","y",r,t),d[v+1]=1-Yn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[v+0]=Yn(x,c,"x","y",r,t),d[v+1]=1-Yn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function zi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ee,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=O0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=O0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function O0(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ae(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function x_(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");if(i==="pk"){s.fillStyle="#01411c",s.fillRect(0,0,t,e),s.fillStyle="#ffffff",s.fillRect(0,0,t*.25,e);let o=t*.625,a=e*.5,l=e*.31;s.beginPath(),s.arc(o,a,l,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.beginPath(),s.arc(o+l*.27,a-l*.14,l*.8,0,Math.PI*2),s.fillStyle="#01411c",s.fill();let c=o+l*.46,h=a-l*.36,u=l*.36,f=u*.382;s.beginPath();for(let d=0;d<10;d++){let g=-Math.PI/2+d*Math.PI/5+.52,x=d%2?f:u;s.lineTo(c+Math.cos(g)*x,h+Math.sin(g)*x)}s.closePath(),s.fillStyle="#ffffff",s.fill()}else i==="es"?(s.fillStyle="#aa151b",s.fillRect(0,0,t,e),s.fillStyle="#f1bf00",s.fillRect(0,e/4,t,e/2),y_(s,t*.36,e*.5,e*.42)):(s.fillStyle="#000000",s.fillRect(0,0,t,e/3),s.fillStyle="#ffffff",s.fillRect(0,e/3,t,e/3),s.fillStyle="#007a3d",s.fillRect(0,e*2/3,t,e/3),s.beginPath(),s.moveTo(0,0),s.lineTo(t*.33,e/2),s.lineTo(0,e),s.closePath(),s.fillStyle="#ce1126",s.fill());let r=new tn(n);return r.colorSpace=De,r.anisotropy=4,r}function y_(i,t,e,n){let s="#d9a400",r="#c8102e",o="#0b3d91",a="#f4f4f4",l="#7a2a8a";for(let p of[-1,1])i.fillStyle="#ffffff",i.fillRect(t+p*n*.98-n*.09,e-n*.62,n*.18,n*1.18),i.fillStyle="#b6b6b6",i.fillRect(t+p*n*.98+(p>0?0:-n*.03),e-n*.62,n*.03,n*1.18),i.fillStyle=s,i.fillRect(t+p*n*.98-n*.14,e-n*.7,n*.28,n*.1),i.fillRect(t+p*n*.98-n*.14,e+n*.54,n*.28,n*.08),i.beginPath(),i.arc(t+p*n*.98,e-n*.78,n*.1,0,Math.PI*2),i.fillStyle=s,i.fill(),i.fillStyle=r,i.fillRect(t+p*n*.98-n*.1,e-n*.52,n*.2,n*.1);i.fillStyle=r,i.fillRect(t-n*.95,e+n*.1,n*1.9,n*.16),i.fillStyle="#ffffff",i.fillRect(t-n*.9,e+n*.13,n*1.8,n*.04);let c=n*1.16,h=n*1.3,u=t-c/2,f=e-h*.45;i.save(),i.beginPath(),i.moveTo(u,f),i.lineTo(u+c,f),i.lineTo(u+c,f+h*.55),i.quadraticCurveTo(u+c,f+h,t,f+h),i.quadraticCurveTo(u,f+h,u,f+h*.55),i.closePath(),i.clip(),i.fillStyle=r,i.fillRect(u,f,c/2,h*.5),i.fillStyle=a,i.fillRect(u+c/2,f,c/2,h*.5),i.fillStyle=s,i.fillRect(u,f+h*.5,c/2,h*.5);for(let p=0;p<4;p++)i.fillStyle=r,i.fillRect(u+c*.07+p*c*.115,f+h*.5,c*.055,h*.5);i.fillStyle=r,i.fillRect(u+c/2,f+h*.5,c/2,h*.5),i.strokeStyle=s,i.lineWidth=n*.03,i.beginPath(),i.moveTo(u+c/2,f+h*.5),i.lineTo(u+c,f+h*.5),i.moveTo(u+c*.75,f+h*.5),i.lineTo(u+c*.75,f+h),i.moveTo(u+c/2,f+h*.75),i.lineTo(u+c,f+h*.75),i.stroke(),i.fillStyle=s;let d=u+c*.25,g=f+h*.27;i.fillRect(d-c*.11,g-h*.02,c*.22,h*.17),i.fillRect(d-c*.06,g-h*.1,c*.12,h*.1);for(let p of[-.11,-.04,.03])i.fillRect(d+c*p,g-h*.15,c*.04,h*.06);i.fillStyle=o,i.fillRect(d-c*.025,g+h*.05,c*.05,h*.1),i.fillStyle=l;let x=u+c*.75,m=f+h*.27;i.beginPath(),i.ellipse(x,m,c*.1,h*.1,0,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(x+c*.08,m-h*.09,c*.05,0,Math.PI*2),i.fill(),i.fillRect(x-c*.12,m+h*.04,c*.05,h*.1),i.fillRect(x+c*.05,m+h*.04,c*.05,h*.1),i.fillStyle=r,i.beginPath(),i.arc(t,f+h*.9,c*.08,0,Math.PI*2),i.fill(),i.fillStyle="#2e7d32",i.fillRect(t-c*.02,f+h*.8,c*.04,h*.05),i.restore(),i.strokeStyle="#1a1a1a",i.lineWidth=n*.025,i.beginPath(),i.moveTo(u,f),i.lineTo(u+c,f),i.lineTo(u+c,f+h*.55),i.quadraticCurveTo(u+c,f+h,t,f+h),i.quadraticCurveTo(u,f+h,u,f+h*.55),i.closePath(),i.stroke(),i.beginPath(),i.ellipse(t,e+h*.02,c*.17,h*.2,0,0,Math.PI*2),i.fillStyle=o,i.fill(),i.lineWidth=n*.025,i.strokeStyle=r,i.stroke(),i.fillStyle=a;for(let[p,v]of[[-.06,-.06],[.06,-.06],[0,.07]])i.beginPath(),i.arc(t+c*p,e+h*(.02+v),c*.03,0,Math.PI*2),i.fill();i.fillStyle=s,i.beginPath(),i.moveTo(t-c*.28,f-h*.02),i.lineTo(t-c*.28,f-h*.2),i.lineTo(t-c*.14,f-h*.12),i.lineTo(t,f-h*.24),i.lineTo(t+c*.14,f-h*.12),i.lineTo(t+c*.28,f-h*.2),i.lineTo(t+c*.28,f-h*.02),i.closePath(),i.fill(),i.beginPath(),i.arc(t,f-h*.3,c*.06,0,Math.PI*2),i.fill(),i.fillStyle=r,i.fillRect(t-c*.2,f-h*.11,c*.4,h*.05)}var H0={};function Uc(i){return H0[i]||(H0[i]=x_(i,768,512))}var ve={R:.42,H:1.55,STEP:.34,EDGE:.28,G:34,RUN:9.4,JUMP:12.2,ACC:70,AIR:22,DEC:95,AIR_DEC:9,ICE_ACC:11,ICE_DEC:5.5,TERM:-50,SNAP:.5},v_={active:!0,ice:!1,conv:null,bounce:0,boost:0,dx:0,dy:0,dz:0,moving:!1,name:"terrain"},li=(i,t,e)=>i<t?t:i>e?e:i,k0=new mn,G0=new Qe,V0=new le,W0=new U,X0=new U,rs=new Ht,Ps=class{constructor(){this.list=[]}add(t,e,n,s,r,o=0,a=0,l=0,c=1,h=1,u=1,f="XYZ"){k0.set(o,a,l,f),G0.setFromEuler(k0),W0.set(e,n,s),X0.set(c,h,u),V0.compose(W0,G0,X0);let d=t.index?t.toNonIndexed():t.clone();d.attributes.uv&&d.deleteAttribute("uv"),d.applyMatrix4(V0);let g=d.attributes.position.count,x=new Float32Array(g*3);rs.set(r);for(let m=0;m<g;m++)x[m*3]=rs.r,x[m*3+1]=rs.g,x[m*3+2]=rs.b;d.setAttribute("color",new Ae(x,3)),this.list.push(d)}addGeo(t){t.index&&(t=t.toNonIndexed()),t.attributes.uv&&t.deleteAttribute("uv"),this.list.push(t)}build(t){if(!this.list.length)return null;let e=zi(this.list,!1);return this.list.length=0,new et(e,t)}};var Fc=class{constructor(t,e=!1){this.theme=t,this.headless=e,this.group=new Zt,this.solids=[],this.ramps=[],this.discs=[],this.hazards=[],this.updaters=[],this.checkpoints=[],this.zones=[],this.pools=[],this.winds=[],this.swings=[],this.main=new Ps,this.glow=new Ps,this.waterY=-5,this.killY=-9,this.terrain=null,this.geoCache=new Map,this.matCache=new Map,this.colorIdx=0,this.arrowTexture=null,this.time=0,this.hitOut={nx:0,nz:1,pow:10},this.onEvent=null}rbox(t,e,n,s){let r=Math.max(.02,Math.min(s,t/2-.01,e/2-.01,n/2-.01)),o=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,a=this.geoCache.get(o);return a||(a=Math.min(t,e,n)<.35?new Qt(t,e,n):new ss(t,e,n,2,r),this.geoCache.set(o,a)),a}mat(t,e={}){var r,o,a,l;let n=t+JSON.stringify(e),s=this.matCache.get(n);return s||(s=new ne({color:t,roughness:(r=e.rough)!=null?r:.38,metalness:(o=e.metal)!=null?o:.02,emissive:(a=e.emissive)!=null?a:0,emissiveIntensity:(l=e.ei)!=null?l:1}),this.matCache.set(n,s)),s}pick(){let t=this.theme.plat;return t[this.colorIdx++%t.length]}addSolid(t,e,n,s,r,o,a={}){let l={x0:t,y0:e,z0:n,x1:s,y1:r,z1:o,active:!0,ice:!!a.ice,conv:a.conv||null,bounce:a.bounce||0,boost:a.boost||0,dx:0,dy:0,dz:0,moving:!1,name:a.name||""};return this.solids.push(l),l}add(t,e=!0,n=!0){return t.castShadow=e,t.receiveShadow=n,this.group.add(t),t}emit(t,e){this.onEvent&&this.onEvent(t,e)}platform(t,e,n,s,r,o={}){var h,u,f;let a=(h=o.h)!=null?h:1.6,l=(u=o.color)!=null?u:this.pick(),c=this.addSolid(t-s/2,e-a,n-r/2,t+s/2,e,n+r/2,o);if(!this.headless){if(this.main.add(this.rbox(s,a,r,.3),t,e-a/2,n,l),o.pad!==!1&&s>2.4&&r>2.4){let d=(f=o.padColor)!=null?f:o.ice?this.theme.icePad:this.theme.pad;this.main.add(this.rbox(s-1.1,.12,r-1.1,.05),t,e+0,n,d)}if(this.theme.edgeGlow){let d=this.theme.edgeGlow;this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n+r/2,d),this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n-r/2,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t+s/2,e-.08,n,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t-s/2,e-.08,n,d)}}return c}disc(t,e,n,s,r={}){var u,f,d,g,x,m,p,v,T,E;let o=(u=r.omega)!=null?u:0,a=(f=r.h)!=null?f:1.4,l={cx:t,cz:n,top:e,r:s,th:a,omega:o,phase:(d=r.phase)!=null?d:0,bounce:r.bounce||0,push:r.push||null,ice:!!r.ice,theta:(g=r.phase)!=null?g:0,dTheta:0,kind:"disc",squash:0,first:!0};if(this.discs.push(l),this.headless)return l;if(r.fan){let _=new Zt;_.position.set(t,e,n);let b=new et(new Ce(s,.32,10,40),this.mat((x=r.color)!=null?x:"#ff3d68",{rough:.3}));b.rotation.x=Math.PI/2,_.add(b);let S=new et(new It(s-.2,s-.2,.18,40),this.mat("#dff6ff",{rough:.5}));S.position.y=-.12,_.add(S);let y=new Zt;for(let P=0;P<4;P++){let C=new et(this.rbox(s*.95,.12,1.1,.04),this.mat(P%2?"#ffffff":"#ffd23f"));C.position.set(s*.5,.08,0);let I=new Zt;I.rotation.y=P*Math.PI/2,I.add(C),y.add(I)}let w=new et(new It(.55,.55,.5,14),this.mat("#ffffff"));w.position.y=.1,_.add(w,y),this.add(_);let A=new et(new It(.5,.7,14,10),this.mat(this.theme.hub));A.position.set(t,e-8,n),this.group.add(A);let L=new Te({color:"#ffffff",transparent:!0,opacity:.45,depthWrite:!1,toneMapped:!1}),M=[];for(let P=0;P<6;P++){let C=new et(new Qt(.07,1.6,.07),L);this.group.add(C),M.push({m:C,k:P/6,a:P*1.9})}return l.mesh=_,this.updaters.push((P,C)=>{y.rotation.y=-P*14,l.squash=Math.max(0,l.squash-C*4);for(let I of M){let z=(I.k+P*.7)%1;I.m.position.set(t+Math.cos(I.a)*s*.6*(.3+z),e+.3+z*5,n+Math.sin(I.a)*s*.6*(.3+z)),L.opacity=.4}}),l}if(r.bounce){let _=new Zt;_.position.set(t,e,n);let b=new et(new It(s*.55,s*.7,1.4,20),this.mat((m=r.stem)!=null?m:"#fff3d6"));b.position.y=-.7;let S=new et(new _e(s,28,14,0,Math.PI*2,0,Math.PI/2),this.mat((p=r.color)!=null?p:"#ff3b6b",{rough:.25}));S.scale.y=.45,S.position.y=-.05,_.add(b,S);for(let y=0;y<6;y++){let w=new et(new _e(.26,10,8),this.mat("#ffffff")),A=y/6*Math.PI*2;w.position.set(Math.cos(A)*s*.62,.34*(1-.3),Math.sin(A)*s*.62),w.scale.y=.4,_.add(w)}return this.add(_),l.mesh=_,this.updaters.push((y,w)=>{l.squash=Math.max(0,l.squash-w*4);let A=1-Math.sin(l.squash*Math.PI)*.35*l.squash;_.scale.set(1+(1-A)*.5,A,1+(1-A)*.5)}),l}let c=(v=r.color)!=null?v:this.pick(),h=new It(s,s,a,40);if(o===0)this.main.add(h,t,e-a/2,n,c),this.main.add(new It(s-.5,s-.5,.12,40),t,e,n,(T=r.padColor)!=null?T:this.theme.pad),this.theme.edgeGlow&&this.glow.add(new Ce(s,.07,6,48),t,e-.1,n,this.theme.edgeGlow,Math.PI/2);else{let _=new Zt;_.position.set(t,e,n);let b=new et(h,this.mat(c));b.position.y=-a/2;let S=new et(new It(s-.5,s-.5,.12,40),this.mat((E=r.padColor)!=null?E:this.theme.pad));_.add(b,S);for(let y=0;y<4;y++){let w=new et(this.rbox(s*1.6,.14,.6,.05),this.mat(this.theme.hazard2));w.position.y=.06,w.rotation.y=y*Math.PI/4,_.add(w)}if(this.theme.edgeGlow){let y=new et(new Ce(s,.08,6,48),new Te({color:this.theme.edgeGlow,toneMapped:!1}));y.rotation.x=Math.PI/2,y.position.y=-.1,_.add(y)}this.add(_),l.mesh=_,this.updaters.push(y=>{_.rotation.y=l.theta})}return l}ramp(t,e,n,s,r,o,a={}){var O,V;let l={x0:t-o/2,x1:t+o/2,zN:e,zF:s,yN:n,yF:r,conv:a.conv||null,ice:!!a.ice,kind:"ramp"};if(this.ramps.push(l),this.headless)return l;let c=Math.min(n,r)-1.6,h=(O=a.color)!=null?O:this.pick(),u=(G,X,Z)=>[G,X,Z],f=u(l.x0,n,e),d=u(l.x1,n,e),g=u(l.x1,r,s),x=u(l.x0,r,s),m=u(l.x0,c,e),p=u(l.x1,c,e),v=u(l.x1,c,s),T=u(l.x0,c,s),E=[],_=(G,X,Z,Mt)=>{E.push(...G,...X,...Z,...G,...Z,...Mt)};_(f,x,g,d),_(f,d,p,m),_(g,x,T,v),_(x,f,m,T),_(d,g,v,p);let b=new Ee;b.setAttribute("position",new ee(E,3)),b.computeVertexNormals();let S=E.length/3,y=new Float32Array(S*3);rs.set(h);for(let G=0;G<S;G++)y[G*3]=rs.r,y[G*3+1]=rs.g,y[G*3+2]=rs.b;b.setAttribute("color",new Ae(y,3)),this.main.addGeo(b);let w=e-s,A=r-n,L=Math.hypot(w,A),M=Math.atan2(A,w),P=(e+s)/2,C=(n+r)/2,I=-Math.sin(M),z=Math.cos(M);return this.main.add(this.rbox(o-1.6,.1,L-.6,.04),t,C+z*.02,P+I*.02*0,(V=a.padColor)!=null?V:a.ice?this.theme.icePad:this.theme.pad,M,0,0),l}mover(t,e,n,s,r,o,a={}){var x,m,p;let l=(x=a.h)!=null?x:1.5,c=this.addSolid(t-s/2,e-l,n-r/2,t+s/2,e,n+r/2,a);c.moving=!0,c.first=!0;let h=null;if(!this.headless){if(h=new et(this.rbox(s,l,r,.28),this.mat((m=a.color)!=null?m:this.pick(),{rough:.3})),a.pad!==!1){let v=new et(this.rbox(s-1,.12,r-1,.05),this.mat((p=a.padColor)!=null?p:this.theme.pad));v.position.y=l/2,h.add(v)}if(a.stripes){let v=new et(this.rbox(s+.02,.4,r+.02,.05),this.mat(this.theme.hazard));v.position.y=0,h.add(v)}this.add(h)}let u=0,f=0,d=0,g=v=>{let[T,E,_]=o(v);c.x0=t-s/2+T,c.x1=t+s/2+T,c.y0=e-l+E,c.y1=e+E,c.z0=n-r/2+_,c.z1=n+r/2+_,c.first&&(u=T,f=E,d=_,c.first=!1),c.dx=T-u,c.dy=E-f,c.dz=_-d,u=T,f=E,d=_,h&&h.position.set(t+T,e-l/2+E,n+_)};return g(0),this.updaters.push(v=>g(v)),c}tile(t,e,n,s,r,o={}){var x,m,p,v,T,E;let a=(x=o.period)!=null?x:4.8,l=(m=o.solidT)!=null?m:2.4,c=(p=o.warn)!=null?p:.8,h=(v=o.off)!=null?v:0,u=this.addSolid(t-s/2,e-1,n-r/2,t+s/2,e,n+r/2,o),f=null,d=null;this.headless||(d=new ne({color:(T=o.color)!=null?T:this.pick(),roughness:.3,emissive:0}),f=new et(this.rbox(s,1,r,.22),d),f.position.set(t,e-.5,n),this.add(f));let g=new Ht((E=o.color)!=null?E:"#ffffff");return this.updaters.push(_=>{let b=((_+h)%a+a)%a;b<l?(u.active=!0,f&&(f.visible=!0,f.position.x=t,d.emissive.setRGB(0,0,0))):b<l+c?(u.active=!0,f&&(f.visible=!0,f.position.x=t+Math.sin(_*70)*.07,d.emissive.setRGB(.55,.05,.02))):(u.active=!1,f&&(f.visible=!1))}),u}conveyor(t,e,n,s,r,o,a={}){let l=this.addSolid(t-s/2,e-1.4,n-r/2,t+s/2,e,n+r/2,{...a,conv:[0,o]});if(this.headless)return l;this.main.add(this.rbox(s,1.4,r,.25),t,e-.7,n,this.theme.convBase);let c=new ke(s-1.2,r-.6),h=this.arrowTexture?this.arrowTexture.clone():null;h&&(h.needsUpdate=!0,h.wrapS=h.wrapT=Pi,h.repeat.set(Math.max(1,Math.round((s-1.2)/2.4)),Math.max(1,Math.round((r-.6)/2.4))));let u=new et(c,new ne({color:this.theme.belt,map:h,roughness:.6}));u.rotation.x=-Math.PI/2,o>0&&(u.rotation.z=Math.PI),u.position.set(t,e+.03,n),this.add(u,!1,!0);let f=Math.abs(o);return this.updaters.push((d,g)=>{h&&(h.offset.y-=f*g/2.4/(r-.6)*h.repeat.y)}),l}bar(t,e,n,s,r={}){var v,T,E,_,b,S,y;let o=(v=r.w)!=null?v:1.2,a=(T=r.h)!=null?T:1.2,l=(E=r.omega)!=null?E:1.4,c=(_=r.phase)!=null?_:0,h=(b=r.arms)!=null?b:1,u={type:"bar",test:(w,A,L)=>{if(w.y>e+a||w.y+ve.H<e)return!1;let M=w.x-t,P=w.z-n;if(M*M+P*P>(s/2+1.2)*(s/2+1.2))return!1;let C=c+l*A;for(let I=0;I<h;I++){let z=C+I*Math.PI/h,O=Math.cos(z),V=Math.sin(z),G=M*O-P*V,X=M*V+P*O,Z=li(G,-s/2,s/2),Mt=li(X,-o/2,o/2),Rt=G-Z,re=X-Mt;if(Rt*Rt+re*re<ve.R*ve.R){let oe=Math.hypot(M,P)||.001,ie=l*P,B=-l*M,J=Math.hypot(ie,B)||1;ie/=J,B/=J;let mt=ie+M/oe*.45,Dt=B+P/oe*.45,Et=Math.hypot(mt,Dt)||1;return L.nx=mt/Et,L.nz=Dt/Et,L.pow=li(6+Math.abs(l)*oe*1.15,9,21),!0}}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new Zt;f.position.set(t,e+a/2,n);let d=Math.max(3,Math.round(s/2.4)),g=s/d,x=this.mat((S=r.color1)!=null?S:this.theme.hazard,{rough:.3}),m=this.mat((y=r.color2)!=null?y:this.theme.hazard2,{rough:.3});for(let w=0;w<h;w++){let A=new Zt;A.rotation.y=w*Math.PI/h;for(let L=0;L<d;L++){let M=new et(this.rbox(g*.995,a,o,.25),L%2?x:m);M.position.x=-s/2+g*(L+.5),M.castShadow=!0,A.add(M)}f.add(A)}let p=new et(new It(o*.85,o,a+.7,16),this.mat(this.theme.hub));return p.castShadow=!0,f.add(p),this.add(f),this.updaters.push(w=>{f.rotation.y=c+l*w}),u}hammer(t,e,n,s,r={}){var p,v,T,E,_,b,S,y,w;let o=(p=r.amp)!=null?p:1.1,a=(v=r.omega)!=null?v:1.6,l=(T=r.phase)!=null?T:0,c=(E=r.r)!=null?E:1.3,h=(_=r.span)!=null?_:9,u={type:"hammer",test:(A,L,M)=>{let P=o*Math.sin(a*L+l),C=t+s*Math.sin(P),I=e-s*Math.cos(P),z=o*a*Math.cos(a*L+l),O=s*Math.cos(P)*z,V=li(I,A.y+.15,A.y+ve.H-.1),G=C-A.x,X=I-V,Z=n-A.z,Mt=ve.R+c;if(G*G+X*X+Z*Z<Mt*Mt){let Rt=-G,re=-Z;Rt=(Math.sign(O)||Math.sign(Rt)||1)*1,re=re*.5;let ie=Math.hypot(Rt,re);return M.nx=Rt/ie,M.nz=re/ie,M.pow=li(Math.abs(O)*1.05+6,10,23),!0}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new Zt;f.position.set(t,e,n);let d=new et(new It(.17,.17,s,10),this.mat(this.theme.hub));d.position.y=-s/2;let g=new et(new _e(c,28,18),this.mat(this.theme.hazard,{rough:.25}));g.position.y=-s;let x=new et(new Ce(c*.98,.12,8,28),this.mat(this.theme.hazard2));x.position.y=-s,x.rotation.x=Math.PI/2;let m=x.clone();if(m.rotation.set(0,Math.PI/2,0),f.add(d,g,x,m),f.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),this.add(f),this.updaters.push(A=>{f.rotation.z=o*Math.sin(a*A+l)}),!this.headless){let A=this.theme.hub;this.main.add(this.rbox(.9,e-((b=r.baseY)!=null?b:e-s-1.5)+1.2,.9,.2),t-h,(e+((S=r.baseY)!=null?S:e-s-1.5))/2-0,n,A),this.main.add(this.rbox(.9,e-((y=r.baseY)!=null?y:e-s-1.5)+1.2,.9,.2),t+h,(e+((w=r.baseY)!=null?w:e-s-1.5))/2-0,n,A),this.main.add(this.rbox(h*2+1,.8,.9,.2),t,e+.6,n,A)}return u}balls(t,e,n,s,r,o,a,l,c={}){let h=n-e,u=h/o,f=l.map(()=>({x:t,z:0,y:0,on:!1})),d=[],g=m=>new Ht(m%2?this.theme.hazard:this.theme.hazard2);this.headless||l.forEach((m,p)=>{let v=new _e(r,32,20),T=v.attributes.position,E=T.count,_=new Float32Array(E*3);for(let S=0;S<E;S++){let y=Math.atan2(T.getZ(S),T.getX(S)),A=Math.floor((y+Math.PI)/(Math.PI*2)*8)%2?new Ht(this.theme.hazard):new Ht(this.theme.hazard2);_[S*3]=A.r,_[S*3+1]=A.g,_[S*3+2]=A.b}v.setAttribute("color",new Ae(_,3));let b=new et(v,new ne({vertexColors:!0,roughness:.25}));b.visible=!1,this.add(b),d.push(b)});let x={type:"balls",test:(m,p,v)=>{for(let T=0;T<f.length;T++){let E=f[T];if(!E.on)continue;let _=li(E.y,m.y+.15,m.y+ve.H-.1),b=E.x-m.x,S=E.y-_,y=E.z-m.z,w=ve.R+r;if(b*b+S*S+y*y<w*w){let A=(m.x-E.x)*.8,L=1,M=Math.hypot(A,L);return v.nx=A/M,v.nz=L/M,v.pow=li(o*1.1+4,10,20),!0}}return!1}};return this.hazards.push(x),this.updaters.push(m=>{l.forEach((p,v)=>{let T=f[v],E=((m+p)%a+a)%a,_=E<u;T.on=_,_&&(T.z=e+E*o,T.y=s(T.z)+r,T.x=t);let b=d[v];b&&(b.visible=_,_&&(b.position.set(T.x,T.y,T.z),b.rotation.x=T.z/r))})}),x}seesaw(t,e,n,s,r,o,a,l=0){let c={x0:t-s/2,x1:t+s/2,zN:n+r/2,zF:n-r/2,yN:e,yF:e,conv:null,ice:!1,kind:"ramp",seesaw:!0};this.ramps.push(c);let h=g=>{let x=o*Math.sin(2*Math.PI*g/a+l);return c.yN=e+x,c.yF=e-x,x};if(h(0),this.headless)return this.updaters.push(g=>h(g)),c;this.main.add(new It(.5,1.1,2.4,8),t,e-1.4,n,this.theme.hub),this.main.add(this.rbox(s*.9,.7,1.4,.2),t,e-2.5,n,this.theme.hazard2);let u=new Zt;u.position.set(t,e-.25,n);let f=new et(this.rbox(s,.5,r,.2),this.mat(this.pick(),{rough:.35})),d=new et(this.rbox(s-1.2,.1,r-1.2,.04),this.mat(this.theme.pad));d.position.y=.27,u.add(f,d);for(let g of[-1,1]){let x=new et(this.rbox(s,.62,1.2,.2),this.mat(this.theme.hazard,{rough:.3}));x.position.set(0,.03,g*(r/2-.6)),u.add(x)}for(let g of[-1,1]){let x=new et(new It(.1,.1,1.1,8),this.mat(this.theme.hub));x.position.set(g*(s/2-.5),.9,0),u.add(x)}return this.add(u),this.updaters.push(g=>{let x=h(g);u.rotation.x=-Math.atan2(x,r/2)}),c}bungee(t,e,n,s,r,o){let a=this.disc(t,n,e,s,{bounce:r,color:this.theme.hazard});if(this.headless)return a;let l=o,c=14;for(let h=0;h<c;h++){let u=h/c*Math.PI*2,f=t+Math.cos(u)*(s*.92),d=e+Math.sin(u)*(s*.92);this.main.add(new It(.07,.07,l-n,5),f,(l+n)/2,d,h%2?"#ffffff":this.theme.hazard)}this.main.add(new Ce(s*.92,.35,8,36),t,l,e,this.theme.accent,Math.PI/2),this.main.add(new Ce(s*.92,.2,8,36),t,n+.15,e,"#ffffff",Math.PI/2);for(let h=0;h<3;h++){let u=Math.PI/2+h*Math.PI*2/3+.5,f=t+Math.cos(u)*(s+1.4),d=e+Math.sin(u)*(s+1.4);this.main.add(new It(.45,.6,l+12,8),f,(l-12)/2,d,h%2?"#ffd23f":"#ffffff")}return this.glow.add(new _e(.9,12,8),t,l+1.6,e,"#ffffff"),a}tube(t,e,n){if(this.headless)return;let s=new U(0,1,0),r=new U,o=new U,a=new U,l=new Qe,c=new mn;for(let h=0;h<t.length-1;h++){r.set(...t[h]),o.set(...t[h+1]),a.subVectors(o,r);let u=a.length();a.normalize(),l.setFromUnitVectors(s,a),c.setFromQuaternion(l),this.main.add(new It(e,e,u*1.02,6),(r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2,n,c.x,c.y,c.z)}}airpad(t,e,n,s,r,o={}){var f,d;let a={x:t,z:e,r:n,y0:s,y1:s+r,lift:(f=o.lift)!=null?f:90,vmax:(d=o.vmax)!=null?d:9};if(this.zones.push(a),this.headless)return a;this.main.add(new It(n*.95,n,.5,28),t,s+.25,e,this.theme.hub),this.glow.add(new Ce(n*.8,.14,8,36),t,s+.55,e,"#9cf0ff",Math.PI/2);let l=new Te({color:"#8fe9ff",transparent:!0,opacity:.16,depthWrite:!1,side:fn,toneMapped:!1}),c=new et(new It(n*.92,n*.92,r,24,1,!0),l);c.position.set(t,s+r/2,e),c.renderOrder=3,this.group.add(c);let h=new Te({color:"#e6fbff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),u=[];for(let g=0;g<5;g++){let x=new et(new Ce(n*.85,.08,6,28),h);x.rotation.x=Math.PI/2,x.renderOrder=3,this.group.add(x),u.push(x)}return this.updaters.push(g=>{u.forEach((x,m)=>{let p=(g*.5+m/5)%1;x.position.set(t,s+.6+p*(r-.8),e),x.scale.setScalar(1-p*.25)})}),a}punch(t,e,n,s,r,o,a={}){var T,E;let l=(T=a.period)!=null?T:3.2,c=(E=a.off)!=null?E:0,h=1,u=Math.hypot(s,r)||1;s/=u,r/=u;let f=_=>{let b=((_+c)%l+l)%l/l,S=(y,w,A)=>{let L=Math.max(0,Math.min(1,(A-y)/(w-y)));return L*L*(3-2*L)};return o*(S(.5,.58,b)-S(.78,.95,b))},d={type:"punch",test:(_,b,S)=>{var z;let y=f(b);if(y<.4)return!1;let w=t+s*(y+.5),A=n+r*(y+.5),L=li(e,_.y+.15,_.y+ve.H-.1),M=w-_.x,P=e-L,C=A-_.z,I=ve.R+h;return M*M+P*P+C*C<I*I?(S.nx=s,S.nz=r,S.pow=(z=a.pow)!=null?z:15,!0):!1}};if(this.hazards.push(d),this.headless)return d;let g=new Zt;g.position.set(t,e,n),g.rotation.y=Math.atan2(s,r);let x=new et(new It(.22,.22,1,8),this.mat(this.theme.hub));x.rotation.x=Math.PI/2;let m=new et(new _e(h,20,14),this.mat(this.theme.hazard,{rough:.3})),p=new et(new It(.62,.62,.5,14),this.mat("#ffffff"));p.rotation.x=Math.PI/2,p.position.z=-.95;let v=new et(new _e(.42,12,10),this.mat(this.theme.hazard,{rough:.3}));return v.position.set(.7,.45,-.35),m.add(p,v),p.position.z=-.95,m.scale.set(1,1,1.1),g.add(x,m),g.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),this.add(g,!1,!1),this.main.add(this.rbox(2.2,2.6,1.2,.3),t-s*.3,e,n-r*.3,this.theme.hub,0,Math.atan2(s,r),0),this.updaters.push(_=>{let b=f(_);x.scale.y=Math.max(.01,b+.2),x.position.z=(b+.2)/2,m.position.z=b+.5}),d}ferris(t,e,n,s,r,o){let a=u=>u*Math.PI*2/r;for(let u=0;u<r;u++)this.mover(t,e-s,n,5,5,f=>{let d=o*f+a(u);return[0,s*(1-Math.cos(d)),s*Math.sin(d)]},{h:.7,color:this.theme.plat[u%this.theme.plat.length],pad:!0});if(this.headless)return;let l=new Zt;l.position.set(t,e,n);let c=this.mat("#ffffff",{rough:.35});for(let u of[-1,1]){let f=new et(new Ce(s,.28,8,56),c);f.rotation.y=Math.PI/2,f.position.x=u*3.2,l.add(f)}for(let u=0;u<4;u++)for(let f of[-1,1]){let d=new et(new It(.12,.12,s*2,6),this.mat(this.theme.hazard));d.rotation.x=u*Math.PI/4,d.position.x=f*3.2,l.add(d)}let h=new et(new It(.9,.9,7.4,14),this.mat(this.theme.hub));h.rotation.z=Math.PI/2,l.add(h),this.add(l,!0,!1);for(let u of[-1,1])for(let f of[-1,1])this.main.add(this.rbox(.7,e+1,.7,.2),t+u*4.4,(e-1)/2,n+f*s*.55,this.theme.hub,0,0,0,1,1,1);this.updaters.push(u=>{l.rotation.x=-(o*u)})}pirate(t,e,n,s,r,o=.1){let a=o+n;if(this.mover(t,o,e,10,5,c=>{let h=s*Math.sin(2*Math.PI*c/r);return[0,n*(1-Math.cos(h)),n*Math.sin(h)]},{h:.9,color:this.theme.hazard,stripes:!0,pad:!0}),this.headless)return;for(let c of[-1,1])this.main.add(this.rbox(.8,a+2,.8,.2),t+c*6.2,(a+2)/2-.5,e+2.2,this.theme.hub,0,0,.12*c),this.main.add(this.rbox(.8,a+2,.8,.2),t+c*6.2,(a+2)/2-.5,e-2.2,this.theme.hub,0,0,.12*c);this.main.add(this.rbox(14.5,.9,.9,.2),t,a+.4,e,this.theme.accent);let l=new Zt;l.position.set(t,a,e);for(let c of[-1,1]){let h=new et(new It(.16,.16,n,8),this.mat("#ffffff"));h.position.set(c*4.2,-n/2,0),l.add(h)}this.add(l,!0,!1),this.updaters.push(c=>{l.rotation.x=-s*Math.sin(2*Math.PI*c/r)})}dropTower(t,e,n,s=13){let r=o=>{let a=(o%s+s)%s;if(a<1)return 0;if(a<5.5){let l=(a-1)/4.5;return n*(l*l*(3-2*l))}if(a<8.5)return n;if(a<9.4){let l=(a-8.5)/.9;return n*(1-l*l)}return 0};if(this.mover(t,.1,e,6,6,o=>[0,r(o),0],{h:.9,color:this.theme.accent,stripes:!0,pad:!0}),!this.headless){for(let o of[-1,1])for(let a of[-1,1])this.main.add(this.rbox(.7,n+5,.7,.2),t+o*3.6,(n+5)/2-.5,e+a*3.6,"#ffffff");this.main.add(this.rbox(8.2,.8,8.2,.2),t,n+4.6,e,this.theme.hazard),this.glow.add(new _e(.7,10,8),t,n+5.6,e,"#ffffff")}}orbit(t,e,n,s,r,o){for(let a=0;a<r;a++){let l=a*Math.PI*2/r;this.mover(t+n,s,e,4.4,4.4,c=>{let h=o*c+l;return[n*Math.cos(h)-n,.7*Math.sin(c*1.3+l),n*Math.sin(h)]},{h:.8,color:this.theme.plat[a%this.theme.plat.length],pad:!0})}this.headless||(this.main.add(new It(.7,.9,s+5,10),t,(s+5)/2-.4,e,this.theme.hub),this.main.add(new _n(2.4,2.2,14),t,s+6,e,this.theme.hazard),this.glow.add(new Ce(n,.12,6,48),t,s-.5,e,"#ffffff",Math.PI/2))}cannon(t,e,n,s){if(this.disc(t,0,e,2.4,{bounce:n,push:s,color:this.theme.hazard}),this.headless)return;let r=s[1]<0?-1:1;this.main.add(new It(1,1.35,5.5,14),t,2.4,e-r*2.8,this.theme.hub,r*.93,0,0),this.main.add(new Ce(1.1,.2,8,18),t,4.4,e-r*.5,this.theme.accent,Math.PI/2-r*.64,0,0)}flagShuttle(t,e,n,s,r,o,a,l,c,h={}){var M,P;let u=C=>-s*(.5-.5*Math.cos(2*Math.PI*C/r+o)),f=r/4,d=r/2,g=(M=h.slabZ)!=null?M:3,x=C=>((C-f+d/2)%d+d)%d-d/2,m=C=>{let I=x(C),z=11,O=4.2,V=.35;return I<-5?z:I<-4.4?z+(O-z)*((I+5)/.6):I<-.4?O:I<-.15?O+(V-O)*((I+.4)/.25):I<.6?V:I<1.4?V+(O-V)*((I-.6)/.8):O+(z-O)*Math.min(1,(I-1.4)/.6)},p=this.mover(t,e,n,a,l,C=>[0,0,u(C)],{h:.8,color:(P=h.color)!=null?P:"#f4efe6",pad:!1}),v={type:"blade",test:(C,I,z)=>{let O=x(I);if(O<-.3||O>.25)return!1;let V=n+u(I),G=C.x-t,X=C.z-V;if(Math.abs(G)>a/2+.3||Math.abs(X)>g+.4||C.y>e+3.2||C.y+1.55<e)return!1;z.nx=(Math.sign(G)||1)*.25,z.nz=Math.sign(X)||1;let Z=Math.hypot(z.nx,z.nz);return z.nx/=Z,z.nz/=Z,z.pow=15,!0}};if(this.hazards.push(v),this.shuttles=this.shuttles||[],this.shuttles.push({cx:t,top:e,cz0:n,D:s,T:r,phase:o,w:a,dp:l,pos:u,tau:x,bladeH:m,slabZ:g}),this.headless)return p;let T=new Zt;this.add(T);let E=new et(new ke(a-1.2,(a-1.2)*.667),new Te({map:Uc(c),toneMapped:!1}));E.rotation.x=-Math.PI/2,E.position.y=.06,T.add(E);let _=new Te({color:"#1e6bff",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),b=new Zt;b.position.y=.1,[[0,0,2.6],[1.9,1.3,1.1],[-2,1.5,.9],[1.4,-1.9,1],[-1.6,-1.6,.8],[.2,2.6,.7]].forEach(([C,I,z])=>{let O=new et(new bs(z,18),_);O.rotation.x=-Math.PI/2,O.position.set(C,0,I),b.add(O)}),T.add(b);for(let C of[-1,1]){let I=new et(this.rbox(.6,12.5,.6,.15),this.mat(this.theme.hub));I.position.set(C*(a/2+.1),6.2,0),T.add(I)}let S=new et(this.rbox(a+1.2,.7,.8,.15),this.mat(this.theme.hub));S.position.y=12.6,T.add(S);let y=new Zt,w=new et(this.rbox(a-.6,.5,g*2,.1),this.mat("#c9d3df",{rough:.2}));y.add(w);for(let C=0;C<8;C++){let I=new et(new _n(.55,.9,4),this.mat("#eef3f8",{rough:.15}));I.rotation.x=Math.PI,I.position.set(-(a-1.6)/2+C*((a-1.6)/7),-.65,0),y.add(I)}let A=new et(new It(.15,.15,12,6),this.mat("#8a8f99"));A.position.y=6,y.add(A);let L=new et(new ke(a-.6,g*2),new Te({color:"#ff3d3d",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return L.rotation.x=-Math.PI/2,L.position.y=.09,T.add(L),T.add(y),this.updaters.push(C=>{let I=u(C);T.position.set(t,e+.4,n+I);let z=m(C),O=x(C);y.position.y=z+.5+(O>-1.2&&O<-.4?Math.sin(C*40)*.06:0),L.material.opacity=O>-4.4&&O<-.1?.18+.12*Math.sin(C*12):0,_.opacity=O>-.15&&O<3.4?Math.min(.85,(3.4-O)/3):0}),p}fan(t,e,n,s,r,o,a,l){let c={x0:t,x1:e,z0:n,z1:s,y0:r,y1:o,ax:a,az:l};if(this.winds.push(c),this.headless)return c;let h=(t+e)/2,u=(n+s)/2,f=Math.sign(a)||0,d=Math.sign(l)||0,g=f?f>0?t-.8:e+.8:h,x=d?d>0?n-.8:s+.8:u,m=r+2.2;this.main.add(new It(.3,.45,9.4,8),g,r-3.1,x,this.theme.hub);let p=new Zt;p.position.set(g,m,x),p.rotation.y=f?f>0?Math.PI/2:-Math.PI/2:d>0?0:Math.PI;let v=new et(new Ce(1.6,.18,8,28),this.mat(this.theme.hazard));p.add(v);let T=new et(new It(.4,.4,.5,12),this.mat("#ffffff"));T.rotation.x=Math.PI/2,p.add(T);let E=new Zt;for(let y=0;y<4;y++){let w=new et(this.rbox(.6,1.4,.1,.04),this.mat(y%2?"#ffffff":this.theme.accent));w.position.y=.9;let A=new Zt;A.rotation.z=y*Math.PI/2,A.add(w),E.add(A)}p.add(E),this.add(p);let _=new Te({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),b=[],S=Math.abs(f)?e-t:s-n;for(let y=0;y<7;y++){let w=new et(new Qt(f?2.2:.07,.07,f?.07:2.2),_);this.group.add(w),b.push({m:w,k:y/7,o:y*.37%1})}return this.updaters.push(y=>{E.rotation.z=y*16;for(let w of b){let A=(w.k+y*.55)%1,L=A*S;w.m.position.set(f?f>0?t+L:e-L:t+(e-t)*w.o,r+.8+w.o*7%1*(o-r-1.2),d?d>0?n+L:s-L:n+(s-n)*w.o)}}),c}swing(t,e,n,s,r,o,a=0,l){let c={x:t,y:e,z:n,len:s,amp:r,om:2*Math.PI/o,ph:a};if(this.swings.push(c),this.headless)return c;let h=l!=null?l:this.theme.hazard,u=3;for(let m of[-1,1])this.main.add(this.rbox(.8,e+1,.8,.2),t+m*u,(e-1)/2+.5,n,this.theme.hub);this.main.add(this.rbox(u*2+.8,.8,.8,.2),t,e+.4,n,this.theme.hub),this.glow.add(new _e(.35,10,8),t-u,e+1.2,n,"#ffffff"),this.glow.add(new _e(.35,10,8),t+u,e+1.2,n,"#ffffff");let f=new Zt;f.position.set(t,e,n);let d=new et(new It(.11,.11,s,6),this.mat("#fff2c4"));d.position.y=-s/2,f.add(d);let g=new et(new It(.3,.3,3,12),this.mat("#ffd23f",{rough:.3}));g.rotation.z=Math.PI/2,g.position.y=-s,f.add(g);for(let m of[-1,1]){let p=new et(new _e(.3,10,8),this.mat("#ffffff"));p.position.set(m*1.5,-s,0),f.add(p)}let x=new et(new Ce(.28,.07,6,16),this.mat("#ffd23f"));return x.position.y=-s+0,x.rotation.y=Math.PI/2,f.add(x),this.add(f),c.mesh=f,this.updaters.push(m=>{f.rotation.x=-this.swingAngle(c,m)}),c}swingAngle(t,e){return t.amp*Math.sin(t.om*e+t.ph)}swingTip(t,e,n={}){let s=this.swingAngle(t,e),r=t.amp*t.om*Math.cos(t.om*e+t.ph);return n.x=t.x,n.y=t.y-t.len*Math.cos(s),n.z=t.z+t.len*Math.sin(s),n.vz=t.len*r*Math.cos(s),n.vy=t.len*r*Math.sin(s),n}doorWall(t,e,n,s,r,o,a={}){var f,d;let l=(f=a.h)!=null?f:4.2,c=s/r,h=(d=a.colors)!=null?d:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c","#b58cff","#ff7a7a"],u=[];for(let g=0;g<r;g++){let x=t-s/2+c*(g+.5),m=o[g]?this.addSolid(x-c/2+.05,e,n-.4,x+c/2-.05,e+l,n+.4,{name:"fakedoor"}):null,p={x,z:n,i:g,fake:!!o[g],solid:m,open:0,mesh:null};if(!this.headless){let v=new Zt;v.position.set(x-c/2+.05,e,n);let T=new et(this.rbox(c-.1,l,.5,.12),this.mat(h[g%h.length],{rough:.35}));T.position.set((c-.1)/2,l/2,0),v.add(T);let E=new et(new _e(.2,8,6),this.mat("#ffffff"));E.position.set(c-.5,l*.45,.35),v.add(E);let _=new et(this.rbox(c-.5,.35,.56,.05),this.mat("#ffffff"));_.position.set((c-.1)/2,l*.82,0),v.add(_),this.add(v),p.mesh=v}u.push(p)}return this.headless||(this.main.add(this.rbox(.9,l+1.2,1,.2),t-s/2-.45,e+(l+1.2)/2,n,this.theme.hub),this.main.add(this.rbox(.9,l+1.2,1,.2),t+s/2+.45,e+(l+1.2)/2,n,this.theme.hub),this.main.add(this.rbox(s+1.8,1,1,.2),t,e+l+.5,n,this.theme.hub)),this.doorWalls=this.doorWalls||[],this.doorWalls.push({cx:t,cz:n,w:s,doors:u}),this.updaters.push((g,x)=>{let m=this.nearPlayers||[];for(let p of u){if(!p.mesh)continue;let v=0;if(!p.fake)for(let T of m)Math.abs(T.z-n)<3.2&&Math.abs(T.x-p.x)<c*.9&&(v=1);p.open+=(v-p.open)*Math.min(1,x*9),p.mesh.rotation.y=-p.open*1.45,p.fake}}),u}checkpoint(t,e,n,s=14){let r={x:t,y:e,z:n,w:s,spawn:[t,e,n+1]};return this.checkpoints.push(r),this.headless||this.arch(t,e,n,s,this.theme.accent,!0),r}arch(t,e,n,s,r,o=!1){let a=o?5.2:8.5;this.main.add(this.rbox(.9,a,.9,.25),t-s/2,e+a/2,n,r),this.main.add(this.rbox(.9,a,.9,.25),t+s/2,e+a/2,n,r),this.main.add(this.rbox(s+.9,o?.9:1.6,o?.9:1.4,.25),t,e+a,n,r),this.glow.add(new _e(.42,12,8),t-s/2,e+a+.8,n,"#ffffff"),this.glow.add(new _e(.42,12,8),t+s/2,e+a+.8,n,"#ffffff")}update(t,e){this.time=t;for(let n of this.updaters)n(t,e);for(let n of this.discs)if(n.omega){let s=n.phase+n.omega*t;n.dTheta=n.first?0:s-n.theta,n.theta=s,n.first=!1}}carry(t){let e=t.ground;if(e){if(e.moving)t.x+=e.dx,t.y+=e.dy,t.z+=e.dz;else if(e.kind==="disc"&&e.omega){let n=t.x-e.cx,s=t.z-e.cz,r=e.dTheta,o=Math.cos(r),a=Math.sin(r);t.x=e.cx+n*o+s*a,t.z=e.cz-n*a+s*o,t.yawOff=(t.yawOff||0)+r}}}checkHazards(t,e){for(let n of this.hazards)if(n.test(t,e,this.hitOut))return this.hitOut;return null}finalize(){if(this.headless)return;let t=this.main.build(new ne({vertexColors:!0,roughness:.4,metalness:.02}));t&&(t.castShadow=!0,t.receiveShadow=!0,this.group.add(t));let e=this.glow.build(new Te({vertexColors:!0,toneMapped:!1}));e&&this.group.add(e)}resolveHorizontal(t){let e=ve.R,n=ve.H;for(let s of this.solids){if(!s.active||s.y1<=t.y+ve.STEP||s.y0>=t.y+n||t.x<s.x0-e||t.x>s.x1+e||t.z<s.z0-e||t.z>s.z1+e)continue;let r=li(t.x,s.x0,s.x1),o=li(t.z,s.z0,s.z1),a=t.x-r,l=t.z-o,c=a*a+l*l;if(c>=e*e)continue;let h,u;if(c>1e-9){let d=Math.sqrt(c),g=e-d;h=a/d,u=l/d,t.x+=h*g,t.z+=u*g}else{let d=t.x-s.x0,g=s.x1-t.x,x=t.z-s.z0,m=s.z1-t.z,p=Math.min(d,g,x,m);p===d?(t.x=s.x0-e,h=-1,u=0):p===g?(t.x=s.x1+e,h=1,u=0):p===x?(t.z=s.z0-e,h=0,u=-1):(t.z=s.z1+e,h=0,u=1)}let f=t.vx*h+t.vz*u;if(f<0&&(t.vx-=f*h,t.vz-=f*u),s.moving){let d=s.dx*h+s.dz*u;d>0&&(t.vx+=h*Math.min(d/.016,8)*.3,t.vz+=u*Math.min(d/.016,8)*.3)}}for(let s of this.discs){if(t.y+n<=s.top-s.th||t.y>=s.top-ve.STEP)continue;let r=t.x-s.cx,o=t.z-s.cz,a=Math.hypot(r,o),l=s.r+e;if(a<l&&a>1e-6){let c=r/a,h=o/a;t.x=s.cx+c*l,t.z=s.cz+h*l;let u=t.vx*c+t.vz*h;u<0&&(t.vx-=u*c,t.vz-=u*h)}}}findGround(t,e,n){let s=ve.EDGE,r=e+ve.STEP,o=n&&t.noSnap<=0?ve.SNAP:0,a=null,l=-1e9;for(let c of this.solids){if(!c.active)continue;let h=c.y1;h>r||h<=l||t.x<c.x0-s||t.x>c.x1+s||t.z<c.z0-s||t.z>c.z1+s||(t.y<=h+1e-4||t.y<=h+o)&&(a=c,l=h)}for(let c of this.ramps){if(t.x<c.x0-s||t.x>c.x1+s||t.z>c.zN+.3||t.z<c.zF-.3)continue;let h=li((c.zN-t.z)/(c.zN-c.zF),0,1),u=c.yN+(c.yF-c.yN)*h;u>r||u<l||(t.y<=u+1e-4||t.y<=u+o)&&(a=c,l=u)}for(let c of this.discs){let h=c.top;if(h>r||h<l)continue;let u=t.x-c.cx,f=t.z-c.cz,d=c.r+s*.8;u*u+f*f>d*d||(t.y<=h+1e-4||t.y<=h+o)&&(a=c,l=h)}if(this.terrain){let c=this.terrain(t.x,t.z);c<=r&&c>l&&(t.y<=c+1e-4||t.y<=c+o)&&(a=v_,l=c)}return a?{s:a,top:l}:null}hitCeiling(t,e){for(let n of this.solids)if(n.active&&!(e+ve.H>n.y0+.02||t.y+ve.H<=n.y0)&&!(t.x<n.x0||t.x>n.x1||t.z<n.z0||t.z>n.z1))return n;return null}};var ku={sedan:{L:4.6,w:.92,yb:.27,beltF:.7,beltR:.85,prof:[[2.3,.7],[2,.77],[1.3,.89],[.98,.96],[.05,1.46],[-.95,1.45],[-1.6,1.01],[-2,.98],[-2.3,.93]],axle:1.36,wr:.335,ww:.24,arch:.43,doors:[[-.14,.86],[-.9,-.2]],wind:[.14,.93],rear:[-1.5,-.98],hood:[.99,2.18],trunk:[-2.18,-1.6],seatX:[-.05,-.78]},hatch:{L:3.95,w:.87,yb:.27,beltF:.68,beltR:.84,prof:[[1.98,.68],[1.7,.75],[1.15,.87],[.8,.93],[.05,1.46],[-.85,1.47],[-1.45,1.36],[-1.75,1.08],[-1.98,.97]],axle:1.2,wr:.31,ww:.2,arch:.4,doors:[[-.12,.7],[-.8,-.18]],wind:[.12,.78],rear:[-1.42,-.9],hood:[.82,1.84],trunk:[-1.84,-1.5],seatX:[-.05,-.7],dashX:.52,bayX:1.3,bootX:-1.65},suv:{L:4.7,w:1,yb:.38,beltF:.98,beltR:1.06,prof:[[2.35,.92],[2.05,1],[1.4,1.1],[1,1.15],[.25,1.82],[-1.1,1.84],[-2,1.78],[-2.35,1.62]],axle:1.42,wr:.39,ww:.26,arch:.5,doors:[[-.14,.9],[-.95,-.22]],wind:[.2,.98],rear:[-1.7,-1.1],hood:[1.02,2.2],trunk:[-2.2,-1.65],seatX:[0,-.85],hly:.82,lift:.12},coupe:{L:4.5,w:.93,yb:.24,beltF:.64,beltR:.82,twoDoor:!0,prof:[[2.25,.58],[1.9,.68],[1.25,.8],[.55,.84],[0,1.28],[-.7,1.28],[-1.35,1],[-1.8,.9],[-2.25,.86]],axle:1.36,wr:.33,ww:.26,arch:.43,doors:[[-.25,.85]],wind:[0,.8],rear:[-1.3,-.95],hood:[.9,2.18],trunk:[-2.18,-1.62],seatX:[-.2,-.8],dashX:.5,hly:.58},sports:{L:4.45,w:.97,yb:.2,beltF:.62,beltR:.75,twoDoor:!0,prof:[[2.22,.56],[1.85,.66],[1.2,.74],[.5,.8],[-.05,1.19],[-.7,1.21],[-1.25,.96],[-1.75,.88],[-2.22,.8]],axle:1.34,wr:.33,ww:.3,arch:.44,doors:[[-.3,.8]],wind:[-.05,.75],rear:[-1.2,-.92],hood:[.85,2.15],trunk:[-2.15,-1.65],seatX:[-.25,-.8],dashX:.45,hly:.52}},Hu=(i,t,e)=>i+(t-i)*e,fa=(i,t,e)=>Math.max(t,Math.min(e,i)),q0=(i,t,e)=>{let n=fa((e-i)/(t-i),0,1);return n*n*(3-2*n)};function ue(i,t=[1,1,1]){i.index&&(i=i.toNonIndexed()),i.deleteAttribute("uv"),i.deleteAttribute("uv1");let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new Ae(n,3)),i}var Se=(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=1,c=1)=>(i.applyMatrix4(new le().compose(new U(t,e,n),new Qe().setFromEuler(new mn(s,r,o)),new U(a,l,c))),i),Xe=(i,t,e,n=.03,s=1)=>new ss(i,t,e,s,Math.min(n,i/2-.001,t/2-.001,e/2-.001)),os=i=>i.length?zi(i.map(t=>t.index?t.toNonIndexed():t),!1):null;function Y0(i,t){let e=t!=="lo",n=e?72:36,s=e?[2,2,2,3,3,3,3,3,2]:[1,1,1,2,2,2,2,2,1],r=[0];for(let d of s)r.push(r[r.length-1]+d);let o=r[r.length-1]+1,a=2*o-1,l=[];for(let d=0;d<=n;d++)l.push(-i.L/2+i.L*d/n);let c=i.prof.slice().sort((d,g)=>d[0]-g[0]),u=l.map(d=>{for(let g=0;g<c.length-1;g++)if(d<=c[g+1][0])return Hu(c[g][1],c[g+1][1],(d-c[g][0])/(c[g+1][0]-c[g][0]));return c[c.length-1][1]}).slice();for(let d=0;d<3;d++)u=u.map((g,x)=>{let m=0,p=0;for(let v=-2;v<=2;v++){let T=fa(x+v,0,n);m+=u[T],p++}return m/p});let f=[];for(let d=0;d<=n;d++){let g=l[d],x=g/(i.L/2),m=Math.abs(x),p=Math.pow(Math.max(0,1-Math.pow(m,3.6)),1/3.6),v=i.yb+.2*Math.pow(m,4),T=Hu(i.beltR,i.beltF,(g+i.L/2)/i.L),E=Math.max(u[d],T+.1),_=E-T,b=fa((_-.1)/.3,0,1),S=i.w,y=[[0,v],[S-.28,v],[S-.05,v+.06],[S-.005,v+.27],[S+.005,T-.2],[S,T],[S-.01-.05*b,T+.35*_],[S-.07-.14*b,T+.8*_],[(S-.1*b)*.6,E-.012],[0,E]].map(M=>new U(M[0],M[1],0)),w=new wr(y,!1,"centripetal"),A=[];for(let M=0;M<s.length;M++)for(let P=0;P<s[M];P++)A.push(w.getPoint((M+P/s[M])/s.length));A.push(w.getPoint(1));let L=new Array(a);for(let M=0;M<o;M++){let P=A[M];L[M]=new U(g,P.y,P.x*p)}for(let M=o;M<a;M++){let P=L[a-1-M];L[M]=new U(g,P.y,-P.z)}for(let M=0;M<a;M++)L[M].x-=Math.sign(g)*.22*q0(.8,1,m)*fa((L[M].y-.4)/.35,0,1);for(let M=0;M<a;M++){let P=L[M];if(!(Math.abs(P.z)<.4))for(let C of[i.axle,-i.axle]){let I=Math.hypot(P.x-C,P.y-i.wr);if(I<i.arch){let z=q0(i.arch,i.arch-.13,I);P.z-=Math.sign(P.z)*.17*z,P.dent=Math.max(P.dent||0,z)}}}f.push(L)}return{P:f,N:n,K:o,R:a,kc:r,xs:l}}function Ou(i,t,e,n,s){let{P:r,N:o,R:a}=i,l=[],c=[];for(let S=0;S<=o;S++)for(let y=0;y<a;y++){let w=r[S][y],A=w.y,L=w.z,M=w.x;s&&(L*=s.z,A-=s.y*(A>.6?1:0)),l.push(M,A,L);let P=t?t(S,y,w):[1,1,1];c.push(P[0],P[1],P[2])}let h=new Ee;h.setAttribute("position",new ee(l,3)),h.setAttribute("color",new ee(c,3));let u=[],f=(S,y)=>S*a+y,d=[];for(let S=0;S<o;S++)for(let y=0;y<a-1;y++){let w=f(S,y),A=f(S+1,y),L=f(S+1,y+1),M=f(S,y+1);d.push(w,A,L,w,L,M)}h.setIndex(d),h.computeVertexNormals();let g=h.attributes.normal.array.slice(),x=f(o>>1,4),m=f((o>>1)+1,4),p=f((o>>1)+1,5),v=r[o>>1][4],T=r[(o>>1)+1][4],E=r[(o>>1)+1][5],b=new U().subVectors(T,v).cross(new U().subVectors(E,v)).z<0!=!!n;for(let S=0;S<o;S++)for(let y=0;y<a-1;y++){if(e&&e.some(P=>S>=P.i0&&S<P.i1&&y>=P.k0&&y<P.k1))continue;let w=f(S,y),A=f(S+1,y),L=f(S+1,y+1),M=f(S,y+1);b?u.push(w,L,A,w,M,L):u.push(w,A,L,w,L,M)}if(h.setIndex(u),b)for(let S=0;S<g.length;S++)g[S]=-g[S];return h.setAttribute("normal",new ee(g,3)),h._grid={bad:b},h}function Gr(i,t,e,n,s,r,{gap:o=0,off:a=0,rev:l=!1,inward:c=0,colorMul:h=null,holes:u=null}={}){let f=i.R,d=[],g=[],x=[],m=[],p=t.attributes.position.array,v=t.attributes.normal.array,T=t.attributes.color.array,E=(i.P[e][0].x+i.P[n][0].x)/2,_=(i.P[n][0].x-i.P[e][0].x)/2,b=n-e+1,S=r-s+1;for(let A=e;A<=n;A++)for(let L=s;L<=r;L++){let M=(A*f+L)*3,P=p[M],C=p[M+1],I=p[M+2],z=v[M],O=v[M+1],V=v[M+2];o&&(P+=(E-P)*(o/_)),P+=z*a,C+=O*a,I+=V*a,c&&(I-=Math.sign(p[M+2])*c),d.push(P,C,I),g.push(l?-z:z,l?-O:O,l?-V:V);let G=1;h&&(G=h(A-e,L-s,b,S)),x.push(T[M]*G,T[M+1]*G,T[M+2]*G)}let y=(A,L)=>A*S+L;for(let A=0;A<b-1;A++)for(let L=0;L<S-1;L++){if(u&&u.some(O=>e+A>=O.i0&&e+A<O.i1&&s+L>=O.k0&&s+L<O.k1))continue;let M=y(A,L),P=y(A+1,L),C=y(A+1,L+1),I=y(A,L+1);t._grid.bad!==l?m.push(M,C,P,M,I,C):m.push(M,P,C,M,C,I)}let w=new Ee;return w.setAttribute("position",new ee(d,3)),w.setAttribute("normal",new ee(g,3)),w.setAttribute("color",new ee(x,3)),w.setIndex(m),w}function __(i,t,e,n,s,r){let o=i.R,a=[],l=[],c=[];for(let d=t;d<=e;d++)c.push([d,n]);for(let d=n+1;d<=s;d++)c.push([e,d]);for(let d=e-1;d>=t;d--)c.push([d,s]);for(let d=s-1;d>n;d--)c.push([t,d]);for(let[d,g]of c){let x=i.P[d][g];a.push(x.x,x.y,x.z),a.push(x.x,x.y,x.z-Math.sign(x.z)*r)}let h=c.length;for(let d=0;d<h;d++){let g=(d+1)%h;l.push(d*2,g*2,d*2+1,g*2,g*2+1,d*2+1)}let u=new Ee;u.setAttribute("position",new ee(a,3)),u.setIndex(l);let f=u.toNonIndexed();return f.computeVertexNormals(),f}function M_(i,t){let e=i.wr,n=i.ww,s=n/2,r=[[.21,-s+.01],[.27,-s],[e-.045,-s+.005],[e-.012,-s+.045],[e,-s+.09],[e+.002,0],[e,s-.09],[e-.012,s-.045],[e-.045,s-.005],[.27,s],[.21,s-.01]],o=new Ar(r.map(d=>new vt(d[0],d[1])),t);Se(o,0,0,0,Math.PI/2,0,0);let a=[[0,s-.06],[.06,s-.05],[.09,s-.035],[.14,s-.08],[.205,s-.075],[.23,s-.045],[.225,-s+.06],[.21,-s+.05]],l=new Ar(a.map(d=>new vt(d[0],d[1])),t);Se(l,0,0,0,Math.PI/2,0,0);let c=[];for(let d=0;d<5;d++){let g=d/5*Math.PI*2,x=new Qt(.17,.045,.028);Se(x,.14,0,s-.045);let m=new le().makeRotationZ(g);x.applyMatrix4(m),c.push(ue(x))}let h=os([ue(l),...c]),u=ue(Se(new It(.17,.17,.025,20),0,0,0,Math.PI/2,0,0)),f=ue(Se(new It(.045,.045,.02,12),0,0,s-.04,Math.PI/2,0,0));return{tire:ue(o),rim:h,brake:os([u,f])}}function Bc(i={}){var Tt,st,at,Ct,Jt,Pt;let{style:t="sedan",paint:e="#b01818",detail:n="hi"}=i,s=ku[t],r=n!=="lo",o=null,a=Y0(s,n),{N:l,K:c,R:h,kc:u,xs:f}=a,d=k=>fa(Math.round((k+s.L/2)/s.L*l),0,l),g=k=>h-1-k,x=new Zt,m={paint:new Rr({color:e,vertexColors:!0,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.2}),dark:new ne({color:"#16161a",roughness:.8,metalness:.1,vertexColors:!0}),trim:new ne({color:"#0d0d10",roughness:.55,metalness:.2,vertexColors:!0}),chrome:new ne({color:"#d8dce2",roughness:.18,metalness:1,vertexColors:!0,envMapIntensity:1.4}),glass:new ne({color:"#0e1822",roughness:.04,metalness:.85,transparent:!0,opacity:.58,envMapIntensity:1.6,depthWrite:!1}),head:new ne({color:"#fff6dc",emissive:"#ffefc2",emissiveIntensity:.55,roughness:.15,vertexColors:!0}),tail:new ne({color:"#8a0707",emissive:"#e01010",emissiveIntensity:1,roughness:.25,vertexColors:!0}),seat:new ne({color:"#c9b79a",roughness:.85,vertexColors:!0}),tire:new ne({color:"#0c0c0d",roughness:.92,vertexColors:!0}),rim:new ne({color:"#c7cbd2",roughness:.22,metalness:1,vertexColors:!0,envMapIntensity:1.3}),brake:new ne({color:"#555a60",roughness:.5,metalness:.8,vertexColors:!0})};m.paintInner=m.dark;let p=s.doors[0],v=s.doors[1]||null,T=[],E=u[2],_=u[7];for(let[k,ct,ht]of v?[[p[0],p[1],"front"],[v[0],v[1],"rear"]]:[[p[0],p[1],"front"]]){let xt=d(k),F=d(ct);T.push({i0:xt,i1:F,nm:ht,side:1,k0:E,k1:_},{i0:xt,i1:F,nm:ht,side:-1,k0:g(_),k1:g(E)})}let b=d(s.hood[0]),S=d(s.hood[1]),y=d(s.trunk[0]),w=d(s.trunk[1]),A=u[6],L=T.map(k=>({i0:k.i0,i1:k.i1,k0:k.k0,k1:k.k1}));L.push({i0:b,i1:S,k0:A,k1:g(A)},{i0:y,i1:w,k0:A,k1:g(A)});let M=[];M.push({i0:d(s.wind[0])+1,i1:d(s.wind[1])-1,k0:u[8],k1:g(u[8])}),M.push({i0:d(s.rear[0])+1,i1:d(s.rear[1])-1,k0:u[8],k1:g(u[8])}),((k,ct)=>{M.push({i0:k,i1:ct,k0:u[5]+1,k1:u[7]-1},{i0:k,i1:ct,k0:g(u[7]-1),k1:g(u[5]+1)})})(d(s.rear[0])+2,d(v?v[0]:p[0])-1);let C=T.map(k=>({i0:k.i0+1,i1:k.i1-1,k0:k.side>0?u[5]+1:g(u[7]-1),k1:k.side>0?u[7]-1:g(u[5]+1)}));M.forEach(k=>L.push({i0:k.i0,i1:k.i1,k0:k.k0,k1:k.k1}));let I=new Set,z=(k,ct,ht,xt)=>{for(let F=k;F<=ct;F++)I.add(F*h+ht),I.add(F*h+xt);for(let F=ht;F<=xt;F++)I.add(k*h+F),I.add(ct*h+F)};T.forEach(k=>z(k.i0,k.i1,k.k0,k.k1)),z(b,S,A,g(A)),z(y,w,A,g(A));let O=(k,ct,ht)=>{let xt=1,F=ct<=c-1?ct:g(ct);ht.y<.36?xt=.07:ht.y<.5&&(xt=Hu(.07,1,(ht.y-.36)/.14)),ht.dent&&(xt*=1-.85*ht.dent);let ut=Math.abs(ht.x)/(s.L/2);return ut>.93&&ht.y<.56&&(xt=Math.min(xt,.09)),ut>.965&&ht.y<.66&&(xt=Math.min(xt,.09)),I.has(k*h+ct)&&(xt*=.33),[xt,xt,xt]},V=Ou(a,O,L,!1,null),G=new et(V,m.paint);x.add(G);let X=Ou(a,O,null,!1,null);X._grid=V._grid;let Z=(()=>{let k=Y0(s,"lo");return Ou(k,()=>[.35,.35,.38],null,!0,{z:.93,y:.05})})(),Mt=new et(Z,new ne({color:"#2a2a2f",roughness:.9,vertexColors:!0,side:mi}));r&&x.add(Mt);let Rt=M.map(k=>Gr(a,X,k.i0,k.i1,k.k0,k.k1+0,{})),re=new et(os(Rt.map(k=>ue(k))),m.glass);re.renderOrder=5,x.add(re);let oe=[];for(let k of T){let ct=new Zt,ht=new U(f[k.i1]-.01,0,0),xt=a.P[k.i1][k.side>0?u[5]:g(u[5])];ht.y=xt.y,ht.z=xt.z;let F=(bn,Ei,Hs,ps)=>bn===0||bn===Hs-1||Ei===0||Ei===ps-1?.33:1,ut=C[T.indexOf(k)],tt=Gr(a,X,k.i0,k.i1,k.k0,k.k1,{gap:.012,colorMul:F,holes:[{i0:ut.i0,i1:ut.i1,k0:ut.k0,k1:ut.k1}]}),yt=k.side>0?u[5]:g(u[5]),At=Gr(a,X,k.i0,k.i1,k.side>0?k.k0:yt,k.side>0?yt:k.k1,{gap:.012,rev:!0,inward:.075}),lt=__(a,k.i0,k.i1,k.side>0?k.k0:yt,k.side>0?yt:k.k1,.075),Gt=Gr(a,X,ut.i0,ut.i1,ut.k0,ut.k1,{gap:.012}),Bt=ue(Xe(.16,.035,.03,.012),[.9,.9,.9]),Me=(f[k.i0]+f[k.i1])/2+(k.nm==="front"?-.2:.18),ye=a.P[d(Me)][k.side>0?u[5]:g(u[5])];Se(Bt,Me,ye.y-.02,ye.z+k.side*.012);let $e=[ue(tt,[1,1,1]),Bt];if(k.nm==="front"){let bn=ye.z+k.side*.1,Ei=f[k.i1]-.17,Hs=a.P[k.i1][k.side>0?u[6]:g(u[6])].y+.02,ps=ue(Xe(.1,.1,.17,.035,2));Se(ps,Ei,Hs,bn);let eo=ue(Xe(.05,.03,.1,.01,1));Se(eo,Ei+.02,Hs-.04,bn-k.side*.07),$e.push(ps,eo)}let Vn=new et(os($e.map(bn=>bn.attributes.color?bn:ue(bn))),m.paint),Ta=new et(os([ue(At,[.3,.3,.33]),ue(lt,[.18,.18,.2])]),m.dark);Ta.material=new ne({color:"#1d1d22",roughness:.9,vertexColors:!0,side:fn});let Aa=new et(ue(Gt),m.glass);Aa.renderOrder=6;for(let bn of[Vn,Ta,Aa])bn.geometry.translate(-ht.x,-ht.y,-ht.z),ct.add(bn);ct.position.copy(ht),x.add(ct),oe.push({pivot:ct,side:k.side,name:k.nm,t:0,max:k.nm==="front"?1.15:1})}let ie=(k,ct,ht,xt)=>{let F=new Zt,ut=Gr(a,X,k,ct,A,g(A),{gap:.01,colorMul:(Bt,Me,ye,$e)=>Bt===0||Bt===ye-1||Me===0||Me===$e-1?.33:1}),tt=Gr(a,X,k,ct,A,g(A),{gap:.01,rev:!0,off:-.06}),yt=a.P[ht][c-1].y,At=new U(f[ht],yt,0),lt=new et(ue(ut),m.paint),Gt=new et(ue(tt,[.25,.25,.28]),new ne({color:"#202026",roughness:.9,vertexColors:!0,side:fn}));for(let Bt of[lt,Gt])Bt.geometry.translate(-At.x,-At.y,-At.z),F.add(Bt);return F.position.copy(At),x.add(F),{pivot:F,sign:xt,t:0,max:.95}},B=ie(b,S,b,1),J=ie(y,w,w,-1),mt=[],Dt=[],Et=[],Ft=[],Yt=[],ot=[],ft=(k,ct)=>{let ht=a.P[d(k)],xt=ht[0],F=9;for(let ut=0;ut<c;ut++){let tt=Math.abs(ht[ut].y-ct)+(ht[ut].z<.3?9:0);tt<F&&(F=tt,xt=ht[ut])}return xt.z};for(let k of[1,-1]){for(let yt of[s.axle,-s.axle]){let At=new Bn;At.absarc(0,0,s.arch+.02,-.15,Math.PI+.15,!1),At.closePath();let lt=new Vo(At,14),Gt=ft(yt,s.wr+.1)+k*.012;k<0&&lt.rotateY(Math.PI),Se(lt,yt,s.wr,k*Math.abs(Gt)),lt.rotateY(0),mt.push(ue(lt,[.5,.5,.5]))}let ct=s.L/2-.3,ht=(Tt=s.hly)!=null?Tt:.64,xt=ue(new _e(.12,14,8));Se(xt,0,0,0,0,0,0,.8,.55,1.5),xt.rotateY(k*-.5),Se(xt,ct,ht,k*(s.w*.66)),Dt.push(xt);let F=ue(new Ce(.15,.012,6,18));Se(F,0,0,0,0,0,0,1,.55,1.5),F.rotateY(k*-.5),Se(F,ct,ht,k*(s.w*.66)),Ft.push(F);let ut=ue(Xe(.07,.11,.42,.025));ut.rotateY(k*.4),Se(ut,-s.L/2+.34,s.beltR+.02,k*(s.w*.58)),Et.push(ut);let tt=ue(new It(.04,.04,.16,10));Se(tt,-s.L/2+.2,s.yb+.16,k*.55,0,0,Math.PI/2),Ft.push(tt)}let dt=((st=s.hly)!=null?st:.64)-.64,rt=s.yb-.27-(s.twoDoor?.07:0);mt.push(ue(Xe(.07,.13,.62,.025),[1,1,1])&&Se(ue(Xe(.07,.13,.62,.025)),s.L/2-.04,.6+dt,0)),mt.push(Se(ue(Xe(.07,.1,.9,.03)),s.L/2-.12,.38+dt*.5,0)),Ft.push(Se(ue(Xe(.06,.02,.62,.008)),s.L/2-.035,.675+dt,0)),Ft.push(Se(ue(Xe(.012,.02,.62,.008)),s.L/2-.04,.54+dt,0));let gt=(k,ct)=>{let ht=ue(Xe(.012,.12,.34,.006,1),[.95,.95,.9]);return Se(ht,k,.42+dt*.5,0),ht};Ft.push(gt(s.L/2-0)),Ft.push(gt(-s.L/2+0));let bt=ue(Xe(2.6,.04,1.2,.01,1),[.18,.18,.2]);Se(bt,-.35,.33,0),Yt.push(bt);let Nt=(k,ct,ht)=>{let xt=ue(Xe(.5,.14,.5,.05),ht);Se(xt,k,.43,ct);let F=ue(Xe(.12,.62,.5,.05),ht);Se(F,k-.2,.74,ct,0,0,-.16);let ut=ue(Xe(.1,.17,.26,.04),ht);return Se(ut,k-.27,1.14,ct,0,0,-.16),[xt,F,ut]};for(let k of[.38,-.38])Yt.push(...Nt(s.seatX[0],k,[.78,.7,.58]));s.twoDoor?Yt.push(Se(ue(Xe(.5,.14,1.2,.05),[.74,.66,.54]),s.seatX[1],.43,0)):(Yt.push(...Nt(s.seatX[1],0,[.74,.66,.54])),Yt.push(Se(ue(Xe(.5,.14,1.2,.05),[.74,.66,.54]),s.seatX[1],.43,0)));let Lt=ue(Xe(.45,.2,1.5,.07),[.12,.12,.14]);Se(Lt,(at=s.dashX)!=null?at:.62,s.beltF+.16-(s.yb-.27),0,0,0,0),Yt.push(Lt);let kt=ue(Xe(1.4,.16,.22,.05),[.14,.14,.16]);Se(kt,0,.42,0),Yt.push(kt);let H=new Ce(.17,.02,8,18);Se(H,.38,1,.38,0,Math.PI/2,0),H.rotateZ(0),Se(H,0,0,0,0,0,0),H.translate(-.38,-1,-.38),H.rotateZ(.5),H.translate(.38,1,.38),Yt.push(ue(H,[.1,.1,.1]));let xe=ue(new It(.02,.02,.3,8),[.1,.1,.1]);Se(xe,.46,.93,.38,0,0,1),Yt.push(xe),Yt.push(Se(ue(Xe(.8,.28,.9,.06),[.2,.2,.22]),(Ct=s.bayX)!=null?Ct:1.55,.52,0)),Yt.push(Se(ue(Xe(.3,.2,.34,.03),[.55,.1,.1]),((Jt=s.bayX)!=null?Jt:1.55)+.4,.52,-.3)),Yt.push(Se(ue(Xe(.5,.04,1,.01,1),[.16,.16,.17]),(Pt=s.bootX)!=null?Pt:-1.88,.56,0));for(let k of Yt)k.translate(0,rt,0);let he=[];if(i.extra==="police"||i.extra==="taxi"){let k=s.prof.reduce((ht,xt)=>Math.max(ht,xt[1]),0),ct=-.05;if(i.extra==="police"){let ht=ue(Xe(.22,.07,1.1,.025,1),[.08,.08,.1]);Se(ht,ct,k+.04,0),Ft.push(ue(Xe(.01,.01,.01,.004))),x.add(Object.assign(new et(os([ht]),m.trim)));for(let[xt,F]of[[-.3,[.9,.05,.05]],[.3,[.1,.2,1]]]){let ut=ue(Xe(.2,.06,.46,.02,1),F);Se(ut,ct,k+.1,xt),he.push(ut)}}else{let ht=ue(Xe(.22,.12,.5,.05,1),[1,.95,.75]);Se(ht,ct,k+.08,0),he.push(ht)}}let N=(k,ct)=>{if(!k.length)return;let ht=new et(os(k),ct);return x.add(ht),ht};if(he.length){let k=new et(os(he),new ne({color:"#ffffff",vertexColors:!0,emissive:"#ffffff",emissiveIntensity:.6,roughness:.3}));x.add(k),o=k}N(mt,m.trim),N(Dt,m.head),N(Et,m.tail),N(Ft,m.chrome),N(Yt,m.seat);let R=r?28:14,q=M_(s,R),K=[];for(let[k,ct,ht]of[[s.axle,1,!0],[s.axle,-1,!0],[-s.axle,1,!1],[-s.axle,-1,!1]]){let xt=new Zt,F=new Zt,ut=new Zt;{let tt=Math.abs(k)/(s.L/2),yt=s.w*Math.pow(Math.max(0,1-Math.pow(tt,3.6)),1/3.6);xt.position.set(k,s.wr,ct*(yt-.03-s.ww/2))}xt.add(F),F.add(ut),ct<0&&(F.rotation.y=Math.PI),ut.add(new et(q.tire,m.tire),new et(q.rim,m.rim),new et(q.brake,m.brake)),x.add(xt),K.push({steer:xt,spin:ut,front:ht,flip:ct<0})}x.traverse(k=>{k.isMesh&&(k.castShadow=!0,k.receiveShadow=k.material!==m.glass)});let it=0;return x.traverse(k=>{if(k.isMesh){let ct=k.geometry;it+=(ct.index?ct.index.count:ct.attributes.position.count)/3}}),{group:x,doors:oe,hood:B,trunk:J,wheels:K,tris:Math.round(it),mats:m,setDoor(k,ct){let ht=oe[k];ht.t=ct,ht.pivot.rotation.y=ht.side*ct*ht.max},setLid(k,ct){k.t=ct,k.pivot.rotation.z=k.sign*ct*k.max},steer(k){for(let ct of K)ct.front&&(ct.steer.rotation.y=k)},spin(k){for(let ct of K)ct.spin.rotation.z=ct.flip?k:-k},setColor(k){m.paint.color.set(k)},dent(k,ct,ht){let xt=V.attributes.position,F=V.attributes.color,ut=xt.count,tt=1.15;V.userData.orig||(V.userData.orig={p:xt.array.slice(),c:F?F.array.slice():null});for(let yt=0;yt<ut;yt++){let At=xt.getX(yt),lt=xt.getY(yt),Gt=xt.getZ(yt),Bt=Math.hypot(At-k,Gt-ct);if(Bt>tt)continue;let Me=(1-Bt/tt)*(1-Bt/tt),ye=Math.hypot(At*.35,Gt)||1;if(xt.setX(yt,At-At*.35/ye*ht*Me*.5),xt.setZ(yt,Gt-Gt/ye*ht*Me),xt.setY(yt,lt-ht*Me*.25*(lt>.9?1:.3)),F){let $e=1-.55*Me;F.setXYZ(yt,F.getX(yt)*$e,F.getY(yt)*$e,F.getZ(yt)*$e)}}xt.needsUpdate=!0,F&&(F.needsUpdate=!0),V.computeVertexNormals()},hurtLook(k){B&&B.pivot&&this.setLid(B,k<15?.3:k<40?.16:0)},repair(){let k=V.userData.orig;k&&(V.attributes.position.array.set(k.p),k.c&&V.attributes.color.array.set(k.c),V.attributes.position.needsUpdate=!0,V.attributes.color&&(V.attributes.color.needsUpdate=!0),V.computeVertexNormals()),B&&B.pivot&&this.setLid(B,0)},lamp:o,style:s}}var Rn=(i,t,e)=>i<t?t:i>e?e:i,da=[{id:11,name:"Sedan",style:"sedan",paint:"#b3262b",mass:1380,kW:80,top:50,mu:1,drive:"fwd",cda:.66,cyl:4,pitch:1,hornHz:420},{id:12,name:"Hatchback",style:"hatch",paint:"#2f6fb5",mass:1080,kW:62,top:44,mu:1,drive:"fwd",cda:.62,cyl:3,pitch:1.2,hornHz:480},{id:13,name:"SUV",style:"suv",paint:"#2d3b4a",mass:2050,kW:125,top:49,mu:.95,drive:"rwd",cda:.95,cyl:6,pitch:.8,hornHz:360},{id:14,name:"Taxi",style:"sedan",extra:"taxi",paint:"#f0c400",mass:1420,kW:72,top:46,mu:1,drive:"fwd",cda:.66,cyl:4,pitch:.95,hornHz:440},{id:15,name:"Police",style:"sedan",extra:"police",paint:"#f2f2f2",mass:1650,kW:150,top:58,mu:1.05,drive:"rwd",cda:.68,cyl:8,pitch:.75,hornHz:400},{id:16,name:"Coupe",style:"coupe",paint:"#c9a227",mass:1500,kW:175,top:63,mu:1.1,drive:"rwd",cda:.62,cyl:6,pitch:.85,hornHz:450},{id:17,name:"Sports",style:"sports",paint:"#e8e8ea",mass:1380,kW:330,top:84,mu:1.2,drive:"rwd",cda:.58,cyl:8,pitch:.95,hornHz:480},{id:18,name:"Old Sedan",style:"sedan",paint:"#4e6a52",mass:1450,kW:66,top:42,mu:.95,drive:"fwd",cda:.7,cyl:4,pitch:.9,hornHz:400}],pa=i=>da[i-11],J0={sedan:{L:4.6,w:1.85,wb:2.72},hatch:{L:3.95,w:1.74,wb:2.4},suv:{L:4.7,w:2,wb:2.84},coupe:{L:4.5,w:1.86,wb:2.72},sports:{L:4.45,w:1.94,wb:2.68}};function $0(i,t){let e=J0[t.style];return Object.assign(i,{yr:0,vl:0,ax:0,ay:0,rpm:.12,gear:1,load:0,skid:0,wheelPh:0,rollA:0,pitchA:0,surf:0,shiftT:0,brake:0,hl:e.L/2,hw:e.w/2,hp:100,dmgQ:[]}),i}function K0(i,t,e,n,s,r,o){let a=J0[r.style],l=r.mass,c=a.wb,h=c*.46,u=c-h,f=.55,d=l*Math.pow(.42*c,2),g="",x=Math.max(1,Math.ceil(t/(1/120))),m=t/x;for(let p=0;p<x;p++)g=b_(i,m,e,n,s,r,a,l,c,h,u,f,d,o)||g;return g}function b_(i,t,e,n,s,r,o,a,l,c,h,u,f,d){let g=Math.sin(i.yaw),x=Math.cos(i.yaw),m=-x,p=g,v=i.vx*g+i.vz*x,E=-(i.vx*m+i.vz*p),_=!!i.air,b=d?d(i):!0,S=r.mu*(b?1:.85)*(i.slick>0?.3:1),y=e.gas;i.steer+=(e.steer-i.steer)*Math.min(1,t*(Math.abs(e.steer)<.01?12:16));let w=Math.abs(v),A=Math.min(.6,70/Math.max(1,w*w)),L=-i.steer*A,M=0,P=0;i.hp!==void 0&&i.hp<=0?Math.abs(y)>.01&&Math.abs(v)>.8&&(P=Math.abs(y)*.5):y>.01?v<-.8?P=y:M=y:y<-.01&&(v>.8?P=-y:M=y);let I=i.hp===void 0?100:i.hp,z=r.kW*1300*(I>25?1:I>0?.6:0),O=Math.atan((E-h*i.yr)/(v>=0?Math.max(v,.5):Math.min(v,-.5)));M>0&&Math.abs(v)>2&&!e.hb&&(M*=1-Rn((Math.abs(O)-.09)/.14,0,.9));let V=0;M>0?(V=Math.min(z/Math.max(v,1.4),a*9.81*S*(r.drive==="rwd"?c/l+.1:h/l)*1)*M,V*=v>r.top*1.02?0:1):M<0&&(V=v>-4.2?-Math.min(z*.3/Math.max(-v,1.2),a*2.2)*-M:0);let G=P*a*9.81*S*.95+(e.hb?a*9.81*S*.35:0),X=.5*1.2*r.cda*v*Math.abs(v),Z=(.013+(b?0:.03))*a*9.81*Math.sign(v||0)*Math.min(1,Math.abs(v)/.5),Mt=(i.gx||0)*g+(i.gz||0)*x,Rt=a*9.81*Mt/Math.sqrt(1+Mt*Mt),re=V-X-Z-Rt-Math.sign(v||0)*Math.min(G,Math.abs(v)*a/t*.98),oe=i.ax,ie=Rn(a*9.81*h/l-a*oe*u/l,a*9.81*.15,a*9.81*.85),B=a*9.81-ie,J=v>=0?Math.max(v,.5):Math.min(v,-.5),mt=Math.atan((E+c*i.yr)/J)-L,Dt=Math.atan((E-h*i.yr)/J),Et=r.drive==="fwd"?Rn(Math.abs(V)/Math.max(1,S*ie),0,.95):0,Ft=r.drive==="rwd"?Rn(Math.abs(V)/Math.max(1,S*B),0,.95):0,Yt=Rn(P*.6,0,.9),ot=Rn(P*.4+(e.hb?.7:0),0,.97),ft=Math.sqrt(Math.max(.08,1-Math.max(Et,Yt)**2)),dt=Math.sqrt(Math.max(.05,1-Math.max(Ft,ot)**2)),rt=1.45,gt=S*rt*ie*ft,bt=S*rt*B*dt*(e.hb?.5:1),Nt=17,Lt=-gt*Math.tanh(Nt*mt),kt=-bt*Math.tanh(Nt*Dt);_&&(Lt=kt=0);let H=Rn(Math.abs(v)/2.5,.12,1);Lt*=H,kt*=H;let xe=Math.cos(L),he=Math.sin(L),N=(Lt*xe+kt)/a,R=(re-Lt*he)/a,q=(c*Lt*xe-h*kt)/f;if(_&&(q=0),!_&&!e.hb&&Math.abs(v)>3&&(q-=Math.sign(i.yr)*Math.max(0,Math.abs(O)-.12)*5*(Math.abs(e.steer)>.05?.6:1.2)*(i.yr*O>0?1:.2)),i.yr+=q*t,i.yr*=Math.exp(-.5*t),!_&&Math.abs(v)>1.2){let xt=S*9.81*1.35/Math.abs(v),F=Rn(v*Math.tan(L)/l,-xt,xt);i.yr+=(F-i.yr)*Math.min(1,t*(b?7:5.5))}let K=R+E*i.yr,it=N-v*i.yr;_&&(K=-X/a,it=0),v+=K*t;let wt=E+it*t;Math.abs(v)<.15&&M===0&&(P>.01||Math.abs(Rt)<a*9.81*.06)&&(v=0);let Tt=Rn(1-Math.abs(v)/2.5,0,1),st=wt*(1-Tt)+0*Tt;Tt>0&&!_&&(i.yr+=(v*Math.tan(L)/l-i.yr)*Math.min(1,t*12)*Tt),_||(st*=Math.exp(-((b?1.8:1.5)*(e.hb?.15:1))*t));let at=-st;i.yaw+=i.yr*t;let Ct=Math.sin(i.yaw),Jt=Math.cos(i.yaw),Pt=-Jt,k=Ct;i.vx=Ct*v+Pt*at,i.vz=Jt*v+k*at,i.x+=i.vx*t,i.z+=i.vz*t,i.ax+=(R-i.ax)*Math.min(1,t*6),i.ay+=(N-i.ay)*Math.min(1,t*6),i.speed=v;let ct=Math.max(Math.abs(Dt),Math.abs(mt)*.8);i.vl=st,i.skid+=(Rn((ct-.08)/.15,0,1)*Rn(Math.abs(v)/5,0,1)-i.skid)*Math.min(1,t*12),P>.6&&Math.abs(v)>12&&!e.hb&&(i.skid=Math.max(i.skid,Rn(P*(Math.abs(v)-8)/30,0,.5))),i.drift=Rn(Math.abs(st)/4,0,1),i.brake=P,i.load=Math.max(0,M),i.wheelPh+=v/.34*t;{let xt=[.2,.36,.54,.76,1.02].map(Gt=>Gt*r.top),F=i.gear,ut=Math.abs(v),tt=i.gear;tt<5&&ut>xt[tt-1]*.96?tt++:tt>1&&ut<xt[tt-2]*.62&&tt--,tt!==F&&(i.gear=tt,i.shiftT=tt>F?.22:.1);let yt=tt>1?xt[tt-2]*.62:0,At=(ut-yt)/Math.max(1,xt[tt-1]*.96-yt),lt=.16+.84*Rn(At,0,1);i.shiftT>0&&(i.shiftT-=t,lt=Math.max(.2,lt-.25)),M===0&&ut<.5&&(lt=.12),i.rpm+=(lt-i.rpm)*Math.min(1,t*(M>0?9:5))}let ht="";n.terrain&&(ht=w_(i,t,n,r,o));for(let xt of s||[])ht=T_(i,xt,r,o,a,f)||ht;return ht}function Gu(i,t){let e=t.w*.5-.06,n=t.L*.5-e-.1,s=Math.sin(i.yaw),r=Math.cos(i.yaw),o=[];for(let a of[-1,-1/3,1/3,1])o.push({x:i.x+s*n*a,z:i.z+r*n*a,off:n*a,r:e});return o}function j0(i,t,e,n,s,r,o,a){let l=i.vx+i.yr*s,c=i.vz-i.yr*n,h=l*t+c*e;if(h>=0)return 0;let u=n*e-s*t,f=-(1+a)*h/(1/r+u*u/o);return i.vx+=t*f/r,i.vz+=e*f/r,i.yr-=u*f/o,-h}var E_=i=>i.props?i._all||(i._all=[...i.boxes||[],...i.props]):i.boxes||[],Z0=-.35,S_=352;function w_(i,t,e,n,s){let r=e.terrain,o="",a=n.mass,l=a*Math.pow(.48*(s.wb||2.7),2),c=Math.sin(i.yaw),h=Math.cos(i.yaw);for(let x=0;x<2;x++)for(let m of Gu(i,s))for(let p of E_(e)){if(i.y>p.h-.4||m.x<p.x0-2||m.x>p.x1+2||m.z<p.z0-2||m.z>p.z1+2)continue;let v=Math.max(p.x0,Math.min(p.x1,m.x)),T=Math.max(p.z0,Math.min(p.z1,m.z)),E=m.x-v,_=m.z-T,b=Math.hypot(E,_),S,y,w;if(b>1e-4){if(S=E/b,y=_/b,w=m.r-b,w<=0)continue}else{let L=m.x-p.x0,M=p.x1-m.x,P=m.z-p.z0,C=p.z1-m.z,I=Math.min(L,M,P,C);w=m.r+I,I===L?(S=-1,y=0):I===M?(S=1,y=0):I===P?(S=0,y=-1):(S=0,y=1)}i.x+=S*w,i.z+=y*w,m.x+=S*w,m.z+=y*w;let A=j0(i,S,y,m.x-i.x,m.z-i.z,a,l,.18);A>0&&(Q0(i,A,m.x-i.x,m.z-i.z),i.vx*=.985,i.vz*=.985,A>4&&(o=A>11?"crash":"bump",i.crash=Math.max(i.crash||0,A)))}let u=e.edge||S_;Math.abs(i.x)>u&&(i.x=Math.sign(i.x)*u,i.vx*=-.3),Math.abs(i.z)>u&&(i.z=Math.sign(i.z)*u,i.vz*=-.3),r(i.x+c*2.5,i.z+h*2.5)<Z0&&r(i.x,i.z)<Z0+.6&&(i.vx*=-.35,i.vz*=-.35,i.x+=i.vx*t*3,i.z+=i.vz*t*3,o=o||"bump",i.bump=8);let f=r(i.x,i.z),d=Math.hypot(i.vx,i.vz),g=i.y;if(i.gx=(r(i.x+1.5,i.z)-r(i.x-1.5,i.z))/3,i.gz=(r(i.x,i.z+1.5)-r(i.x,i.z-1.5))/3,i.air){if(i.vy-=9.81*t,i.y+=i.vy*t,i.y<=f){let x=-i.vy;if(i.y=f,i.air=!1,i.vy=0,i.vyg=0,x>5){o=x>10?"crash":"bump",i.crash=Math.max(i.crash||0,x);let m=Math.max(.6,1-x*.012);i.vx*=m,i.vz*=m}}i.pitch+=(Math.atan2(i.vy,Math.max(8,d))*.8-i.pitch)*Math.min(1,t*4)}else{let x=(f-g)/Math.max(t,.001);if(i.vyg+=(x-i.vyg)*Math.min(1,t*18),f<g-.12-d*.0025)i.air=!0,i.vy=Math.max(i.vyg,0),i.y=g;else{i.y=f;let m=i.gx*c+i.gz*h;i.pitch+=(Math.atan(m)-i.pitch)*Math.min(1,t*12)}}return i.air=i.air&&i.y>f+1e-4,o}function Q0(i,t,e,n){if(!(t>2.5))return;let s=Math.min(55,(t-2.5)*.95);i.hp=Math.max(0,(i.hp===void 0?100:i.hp)-s);let r=Math.sin(i.yaw),o=Math.cos(i.yaw);(i.dmgQ||(i.dmgQ=[])).push({lx:e*r+n*o,lz:-e*o+n*r,d:s}),i.dmgQ.length>8&&i.dmgQ.shift()}function T_(i,t,e,n,s,r){if((i.x-t.x)**2+(i.z-t.z)**2>40||Math.abs((t.y||0)-i.y)>2.5)return"";let o=t.hl?{w:t.hw*2,L:t.hl*2,wb:2.7}:n,a=Gu(i,n),l=Gu(t,o),c=null;for(let T of a)for(let E of l){let _=T.x-E.x,b=T.z-E.z,S=Math.hypot(_,b),y=T.r+E.r-S;y>0&&(!c||y>c.pen)&&(c={pen:y,nx:S>1e-4?_/S:Math.sin(i.yaw),nz:S>1e-4?b/S:Math.cos(i.yaw),px:T.x,pz:T.z})}if(!c)return"";let h=t.driver===-1||t.parked||t.heavy,u=h?1:.55;i.x+=c.nx*c.pen*u,i.z+=c.nz*c.pen*u;let f=c.px-i.x,d=c.pz-i.z,g=t.vx||0,x=t.vz||0,m=i.vx,p=i.vz;i.vx-=g,i.vz-=x;let v=j0(i,c.nx,c.nz,f,d,h?s:s*1,r,.25)*(h?1:.6);return i.vx+=g,i.vz+=x,v>0&&(Q0(i,v,f,d),i.vx*=.99,i.vz*=.99),v>9?"crash":v>3.5?"bump":""}var Xu=new U(1e6,0,0),tp=i=>Xu.copy(i),Vu=(i,t,e)=>i<t?t:i>e?e:i,Wu=null;function A_(){if(!Wu){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,32);e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Wu=new tn(i)}return Wu}function R_(i){i.updateMatrixWorld(!0);let t=new Map;i.traverse(n=>{if(!n.isMesh)return;let s=n.material,r=[s.type,s.color?s.color.getHex():0,s.opacity,s.side,s.emissiveIntensity,s.transparent].join("|"),o=t.get(r);o||(o={m:s,geos:[]},t.set(r,o));let a=n.geometry.clone();a.index&&(a=a.toNonIndexed()),a.applyMatrix4(n.matrixWorld),o.geos.push(a)});let e=new Zt;for(let n of t.values()){let s=zi(n.geos,!1);if(!s)continue;let r=new et(s,n.m);r.castShadow=!0,r.receiveShadow=!n.m.transparent,n.m.transparent&&(r.renderOrder=5),e.add(r)}return e}function qu(i,t=!1,e=!1){let n=pa(i),s=ku[n.style],r={style:n.style,paint:n.paint,extra:n.extra},o=t||e?Bc({...r,detail:"lo"}):null,a=o&&(t||e)?o:Bc({...r,detail:"hi"}),l=new Zt,c=new Zt,h=new Zt,u=R_((o||Bc({...r,detail:"lo"})).group);h.rotation.y=-Math.PI/2,e?h.add(u):h.add(a.group,u),l.add(h),u.visible=e;let f=new et(new ke(s.L*1.25,s.w*3.1),new Te({map:A_(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));f.rotation.x=-Math.PI/2,f.rotation.z=Math.PI/2,f.position.y=.03,l.add(f);let d=s.yb-.27-(s.twoDoor?.07:0);return l.userData={hero:a,spec:n,baked:u,bakedOnly:e,full:a.group,wheels:[],pivots:[],seat:{z:s.seatX[0],y:.13+d},seatF:s.seatX[0],seatR:.38,seatY:.14+d,seatS:Math.max(.8,Math.min(1,(Math.max(...s.prof.map(g=>g[1]))-.07-(.14+d))/1.2)),lamp:a.lamp,ph:0,door:0,doorT:9,lastDrv:-1,roll:0,pit:0,yawP:null,yr:0},l}function ep(i,t,e){let n=i.userData,s=n.hero,r=n.spec;{let m=i.position.x-Xu.x,p=i.position.z-Xu.z,v=m*m+p*p,T=!n.bakedOnly&&(t.driver!==-1||v<(n.near?676:361));if((T!==!!n.near||n.near===void 0)&&(n.near=T,n.full.visible=T,n.baked.visible=!T),!T){i.rotation.z=0,i.rotation.x=-(t.pitch||0);return}}let o=t.speed||0,a=t.yaw;n.yawP===null&&(n.yawP=a);let l=(a-n.yawP+Math.PI*3)%(Math.PI*2)-Math.PI;n.yawP=a;let c=t.ownd?t.yr:l/Math.max(e,.001);n.yr+=(Vu(c,-3,3)-n.yr)*Math.min(1,e*8);let h=t.ownd?t.ay:o*n.yr,u=t.ownd?t.ax:(o-(n.sp||o))/Math.max(e,.001);n.sp=o,n.ph+=o/.34*e,s.spin(n.ph);let f=Math.min(.58,26/Math.max(1,o*o));s.steer(-(t.steer||0)*f),n.roll+=(Vu(h*.0065,-.075,.075)-n.roll)*Math.min(1,e*9),n.pit+=(Vu(-u*.0042,-.05,.05)-n.pit)*Math.min(1,e*9),i.rotation.z=n.roll,i.rotation.x=-(t.pitch||0)+n.pit,t.driver!==n.lastDrv&&(n.lastDrv=t.driver,n.doorT=0),n.doorT+=e;let d=n.doorT,g=d<.35?d/.35:d<1.5?1:d<2?1-(d-1.5)/.5:0,x=g*g*(3-2*g);if(x!==n.door&&(n.door=x,s.setDoor(0,x)),s.lamp&&s.lamp.material&&r.extra==="police"){let m=Math.floor(performance.now()/160)%2;s.lamp.material.emissiveIntensity=t.driver!==-1?m?1.4:.2:.35}}function np(i,t){let e=qu(i,!0,!0);return t&&e.userData.hero.setColor(t),e}var fe={HALF:380,SEA:-1.2,GRID:[-120,-60,0,60,120],HW:6.5,MT:{cx:-215,cz:-215,R:105,H:56,Rt:20,T:2.6,th0:Math.PI/4},HWY:{ax:120,bx:300,z:0}},Vr=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)},Yu=(i,t,e)=>i+(t-i)*e,Ls=Math.PI*2,C_=[[210,-210,70,21],[235,205,62,14],[-205,215,66,16],[40,-300,60,11],[-40,300,55,9]],I_=(i,t)=>Math.sin(i*.043+1.3)*Math.cos(t*.051+.4)*.6+Math.sin((i+t)*.09+2)*.3+Math.sin(i*.17)*Math.sin(t*.15)*.1,Wr=i=>{let t=fe.MT;return i>=t.R?0:t.H*Math.pow(1-Math.max(i,t.Rt)/t.R,1.25)},Xr=i=>{let t=fe.MT,e=t.R+(t.Rt-t.R)*i,n=t.th0+i*t.T*Ls;return{x:t.cx+e*Math.cos(n),z:t.cz+e*Math.sin(n),r:e,y:Wr(e)}};function Ds(i,t){let e=fe.MT,n=i-e.cx,s=t-e.cz,r=Math.hypot(n,s),o=Math.max(Math.abs(i),Math.abs(t)),a=Vr(e.R+25,e.R+5,r),l=Vr(150,215,o),c=6.2*Vr(300,395,o),h=0;for(let[d,g,x,m]of C_){let p=Math.hypot(i-d,t-g)/x;h+=m*Math.exp(-p*p)}let u=(1-a)*(l*(h+I_(i,t)*1.1)-c),f=u+Wr(r);if(r<e.R+22){let d=Math.atan2(s,n),g=1e9,x=0;for(let m=-1;m<=2;m++){let v=(((d-e.th0)%Ls+Ls)%Ls+m*Ls)/(e.T*Ls);if(v<0||v>1)continue;let T=e.R+(e.Rt-e.R)*v,E=Math.abs(r-T);E<g&&(g=E,x=Wr(T))}if(g<fe.HW+14){let m=1-Vr(fe.HW+2.5,fe.HW+14,g);f=Yu(f,u+x,m)}}{let d=fe.HWY,g=Math.abs(t-d.z),x=i<d.ax?d.ax-i:i>d.bx?i-d.bx:0,m=Math.hypot(g,x);i>d.ax-10&&m<26&&(f=Yu(f,0,1-Vr(fe.HW+2.5,fe.HW+16,m)));let p=Math.hypot(i-d.bx,t-d.z);p<34&&(f=Yu(f,0,1-Vr(15,30,p)))}return f}var IE=Math.PI/2,Zu=[];function P_(i,t){let e=0;for(let[n,s,r,o,a,l]of Zu){let c=i-n,h=t-s;if(c*c+h*h>(o+l)*(o+l))continue;let u=c*Math.sin(r)+h*Math.cos(r),f=c*Math.cos(r)-h*Math.sin(r);u<0||u>o||Math.abs(f)>l/2||(e=Math.max(e,a*u/o))}return e}var as=(i,t)=>Ds(i,t)+P_(i,t);function ip(){let i=[],t=[],e=fe.GRID,n=fe.HW;for(let a of e)i.push({ax:a,az:-120,bx:a,bz:120,hw:n,y0:0,g:"x"+a}),i.push({ax:-120,az:a,bx:120,bz:a,hw:n,y0:0,g:"z"+a});i.push({ax:-120,az:-120,bx:-140.8,bz:-140.8,hw:n,y0:0,g:"link"});let s=fe.MT,r=(s.R+s.Rt)/2*s.T*Ls,o=Math.ceil(r/7);for(let a=0;a<o;a++){let l=Xr(a/o),c=Xr((a+1)/o);i.push({ax:l.x,az:l.z,bx:c.x,bz:c.z,hw:n,y0:l.y,y1:c.y,g:"mt"})}return t.push({x:s.cx,z:s.cz,r:20,y:Wr(s.Rt),g:"summit"}),i.push({ax:fe.HWY.ax,az:0,bx:fe.HWY.bx,bz:0,hw:n,y0:0,g:"hwy"}),t.push({x:fe.HWY.bx,z:0,r:14,y:0,g:"lookout"}),{segs:i,plazas:t,boosts:[]}}function L_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var ls=[[90,90],[-90,30]],Cn={x:-30,z:13,r:4.6,shop:{x:-30,z:45,w:34,d:14,h:7.5}},qr=[{char:0,name:"Haris",x:-102,z:-103,yaw:Math.PI,color:"#ff5f5f"},{char:1,name:"Hannan",x:-78,z:-103,yaw:Math.PI,color:"#3ddc84"},{char:2,name:"Hanbal",x:-102,z:-77,yaw:0,color:"#ffc233"},{char:3,name:"Random",x:-78,z:-77,yaw:0,color:"#8b6cff"}],D_=[[-30,30],[-90,-90]];function Oc(){let i=L_(4242),t=[],e=["#e8c9a0","#cfd8e3","#e89c8a","#a8c5e8","#f1e0a6","#b9d9b0","#d9b8e0","#f0b27a","#9fb4c8"];for(let s of[-90,-30,30,90])for(let r of[-90,-30,30,90]){if(ls.some(l=>l[0]===s&&l[1]===r))continue;let o=Math.max(Math.abs(s),Math.abs(r)),a=o<=30?0:o<=60?1:2;for(let[l,c]of[[-11.5,-11.5],[11.5,-11.5],[-11.5,11.5],[11.5,11.5]]){let h=12+i()*7,u=12+i()*7,f=a===0?38+i()*42:a===1?16+i()*26:8+i()*14;t.push({x:s+l+(i()-.5)*1.5,z:r+c+(i()-.5)*1.5,w:h,d:u,h:f,col:e[Math.floor(i()*e.length)],zone:a})}}let n=t.find(s=>s.x>30&&s.x<45&&s.z>30&&s.z<45);return n&&(n.h=118,n.w=17,n.d=17,n.col="#7fb6e6",n.tower=!0),t.filter(s=>!D_.some(([r,o])=>Math.abs(s.x-r)<24&&Math.abs(s.z-o)<24))}function sp(){return[[11,-30,-5],[12,-22,-5],[13,-14,-5],[14,12,5],[15,21,5],[16,30,5],[17,-38,5],[18,40,-5]].map(([i,t,e])=>({id:i,x:t,z:e,yaw:e>0?-Math.PI/2:Math.PI/2}))}var rp=[{x0:-60,x1:60,z0:-60,z1:60,n:4,sp:9},{x0:-120,x1:120,z0:-120,z1:120,n:5,sp:12}];function Ju(i,t,e){let s=i.x0+3.25,r=i.x1-3.25,o=i.z0+3.25,a=i.z1-3.25,l=r-s,c=a-o,h=2*(l+c),u=((e*i.sp+t*h/i.n)%h+h)%h,f,d,g;return u<l?(f=r-u,d=o,g=-Math.PI/2):(u-=l)<c?(f=s,d=o+u,g=0):(u-=c)<l?(f=s+u,d=a,g=Math.PI/2):(u-=l,f=r,d=a-u,g=Math.PI),{x:f,z:d,yaw:g,vx:Math.sin(g)*i.sp,vz:Math.cos(g)*i.sp}}var Ui=new Ht;function Ku(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var Yr=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function op(i){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle=i?"#c9d3df":"#ffffff",n.fillRect(0,0,128,128);let s=i?6:26,r=i?10:22,o=128-s*2,a=i?86:78;n.fillStyle="rgba(0,0,0,0.22)",n.fillRect(s-3,r-3,o+6,a+10),n.fillStyle=i?"#5b6676":"#e9e4dc",n.fillRect(s-2,r-2,o+4,a+4);let l=n.createLinearGradient(0,r,0,r+a);l.addColorStop(0,i?"#7fb2e0":"#a9d3f5"),l.addColorStop(.55,i?"#2f5f8f":"#6b9dc9"),l.addColorStop(1,i?"#1d3a58":"#4a6f94"),n.fillStyle=l,n.fillRect(s,r,o,a),n.fillStyle="rgba(255,255,255,0.28)",n.beginPath(),n.moveTo(s,r+a*.6),n.lineTo(s+o*.55,r),n.lineTo(s+o*.8,r),n.lineTo(s,r+a*.95),n.fill(),n.fillStyle=i?"#5b6676":"#e9e4dc",n.fillRect(128/2-1.5,r,3,a),i||n.fillRect(s,r+a*.46,o,3),i||(n.fillStyle="#bdb6aa",n.fillRect(s-6,r+a+3,o+12,5),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(s-6,r+a+8,o+12,4));let c=new tn(e);return c.wrapS=c.wrapT=Pi,c.colorSpace=De,c.anisotropy=8,c}function $u(i,t,e,n,s,r={}){let o=Ku(s),a=16,l=Array.from({length:a*a},()=>o()),c=document.createElement("canvas");c.width=c.height=i;let h=c.getContext("2d");if(!h||!h.createImageData)return new un;let u=h.createImageData(i,i);if(!u||!u.data)return new un;let f=(g,x)=>l[(x%a+a)%a*a+(g%a+a)%a];for(let g=0;g<i;g++)for(let x=0;x<i;x++){let m=x/i*a,p=g/i*a,v=Math.floor(m),T=Math.floor(p),E=m-v,_=p-T,b=E*E*(3-2*E),S=_*_*(3-2*_),y=f(v,T)*(1-b)*(1-S)+f(v+1,T)*b*(1-S)+f(v,T+1)*(1-b)*S+f(v+1,T+1)*b*S,w=Math.max(0,Math.min(255,t+(y-.5)*e+(o()-.5)*n)),A=(g*i+x)*4;u.data[A]=u.data[A+1]=u.data[A+2]=w,u.data[A+3]=255}if(h.putImageData(u,0,0),r.cracks){h.strokeStyle="rgba(10,10,14,0.2)",h.lineWidth=1.2;for(let g=0;g<r.cracks;g++){let x=o()*i,m=o()*i;h.beginPath(),h.moveTo(x,m);for(let p=0;p<7;p++)x+=(o()-.5)*38,m+=(o()-.3)*30,h.lineTo(x,m);h.stroke()}}if(r.patches)for(let g=0;g<r.patches;g++)h.fillStyle=`rgba(0,0,0,${.06+o()*.08})`,h.beginPath(),h.ellipse(o()*i,o()*i,8+o()*30,4+o()*14,o()*3,0,7),h.fill();let d=new tn(c);return d.wrapS=d.wrapT=Pi,d.colorSpace=De,d.anisotropy=4,d}function ap(i){let t=new Qt(i.w,i.h,i.d),e=t.attributes.uv,n=t.attributes.normal;for(let a=0;a<e.count;a++){let l=n.getY(a),c=Math.abs(n.getX(a)),h=e.getX(a),u=e.getY(a);if(Math.abs(l)>.5){e.setXY(a,.02+h*.05,.02+u*.05);continue}let f=c>.5?i.d:i.w;e.setXY(a,h*f/4.2,u*i.h/3.6)}t.translate(i.x,i.h/2,i.z);let s=Ui.set(i.col),r=t.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return t.setAttribute("color",new Ae(o,3)),t}function N_(i,t){let e=[],n=[],s=[],r=0,o=(c,h,u,f,d)=>{let g=Ui.set(d);for(let x of[c,h,u,f])e.push(x[0],x[1],x[2]),n.push(g.r,g.g,g.b);s.push(r,r+1,r+2,r,r+2,r+3),r+=4},a=(c,h,u,f,d,g,x,m,p)=>{let v=f-c,T=d-h,E=Math.hypot(v,T)||1,_=-T/E*x,b=v/E*x;o([c-_,u+p,h-b],[c+_,u+p,h+b],[f+_,g+p,d+b],[f-_,g+p,d-b],m)};for(let c of i.segs){let h=Math.hypot(c.bx-c.ax,c.bz-c.az),u=Math.max(1,Math.ceil(h/6));for(let f=0;f<u;f++){let d=f/u,g=(f+1)/u,x=c.ax+(c.bx-c.ax)*d,m=c.az+(c.bz-c.az)*d,p=c.ax+(c.bx-c.ax)*(g+.04),v=c.az+(c.bz-c.az)*(g+.04),T=c.y0+((c.y1===void 0?c.y0:c.y1)-c.y0)*d,E=c.y0+((c.y1===void 0?c.y0:c.y1)-c.y0)*Math.min(1,g+.04);a(x,m,T,p,v,E,c.hw,"#3d414e",.09),a(x,m,T,p,v,E,c.hw-.25,"#464b5a",.095);{let _=(x+p)/2,b=(m+v)/2,S=!1;if(c.g[0]==="x"?S=fe.GRID.some(y=>Math.abs(b-y)<fe.HW+.5):c.g[0]==="z"&&(S=fe.GRID.some(y=>Math.abs(_-y)<fe.HW+.5)),!S&&(c.g[0]==="x"||c.g[0]==="z")){let y=p-x,w=v-m,A=Math.hypot(y,w)||1,L=-w/A*(c.hw-.55),M=y/A*(c.hw-.55);for(let P of[-1,1])a(x+L*P,m+M*P,T,p+L*P,v+M*P,E,.07,"#e9e9e4",.105)}}if(c.g==="link"||f%2===0){let _=(x+p)/2,b=(m+v)/2,S=!1;c.g[0]==="x"?S=fe.GRID.some(y=>Math.abs(b-y)<fe.HW+1):c.g[0]==="z"&&(S=fe.GRID.some(y=>Math.abs(_-y)<fe.HW+1)),S||a(x,m,T,p,v,E-(E-T)*.2,.08,"#f2f2ee",.11)}}}{let c=fe.GRID,h=fe.HW;for(let u of c)for(let f of c)for(let[d,g]of[[1,0],[-1,0],[0,1],[0,-1]]){let x=u+d*60,m=f+g*60;if(Math.abs(x)>121||Math.abs(m)>121)continue;let p=u+d*(h+2.2),v=f+g*(h+2.2);for(let S=-5;S<=5;S++){let y=d!==0?p:p+S*1.1,w=d!==0?v+S*1.1:v,A=d!==0?1.4:.28,L=d!==0?.28:1.4;o([y-A,.108,w-L],[y-A,.108,w+L],[y+A,.108,w+L],[y+A,.108,w-L],"#eeeeea")}let T=u+d*(h+4.6),E=f+g*(h+4.6),_=d!==0?.2:h-.8,b=d!==0?h-.8:.2;o([T-_,.108,E-b],[T-_,.108,E+b],[T+_,.108,E+b],[T+_,.108,E-b],"#eeeeea")}}for(let c of i.plazas)for(let u=0;u<28;u++){let f=u/28*Math.PI*2,d=(u+1)/28*Math.PI*2;o([c.x,c.y+.095,c.z],[c.x+Math.cos(f)*c.r,c.y+.095,c.z+Math.sin(f)*c.r],[c.x+Math.cos(d)*c.r,c.y+.095,c.z+Math.sin(d)*c.r],[c.x,c.y+.095,c.z],"#464b5a")}let l=new Ee;l.setAttribute("position",new ee(e,3)),l.setAttribute("color",new ee(n,3));{let c=new Float32Array(e.length/3*2);for(let h=0;h<e.length/3;h++)c[h*2]=e[h*3]/7,c[h*2+1]=e[h*3+2]/7;l.setAttribute("uv",new Ae(c,2))}return l.setIndex(s),l.computeVertexNormals(),l}function z_(){let t=fe.HALF*2,e=t/160,n=new Float32Array(25921*3),s=new Float32Array(25921*3),r=[],o=Ku(99),a=new Ht;for(let h=0;h<=160;h++)for(let u=0;u<=160;u++){let f=-fe.HALF+u*e,d=-fe.HALF+h*e,g=Ds(f,d),x=(h*161+u)*3;n[x]=f,n[x+1]=g,n[x+2]=d;let m=(Ds(f+2,d)-Ds(f-2,d))/4,p=(Ds(f,d+2)-Ds(f,d-2))/4,v=Math.hypot(m,p),T=Math.max(Math.abs(f),Math.abs(d)),E=1-Yr(150,205,T);{let _=Math.sin(f*.021+1.7)*Math.sin(d*.017+.3),b=Math.sin(f*.063+d*.041),S=Math.sin(f*.011-d*.019+2.2);a.set("#7dab4a").lerp(Ui.set("#bcb35c"),Yr(-.1,.8,_+b*.45)).lerp(Ui.set("#5d8c3b"),Yr(.1,1,-_-S*.4)*.7).multiplyScalar(.93+o()*.12)}g<.9&&T>250&&a.lerp(Ui.set("#f0dd9f"),Yr(.9,.2,g)*.9+.1),g<-.4&&a.lerp(Ui.set("#d8c68a"),.8),a.lerp(Ui.set("#8d8274"),Yr(.62,1,v)),g>33&&a.lerp(Ui.set("#ffffff"),Yr(33,41,g)),a.lerp(Ui.set("#aab2bb"),E),s[x]=a.r,s[x+1]=a.g,s[x+2]=a.b}for(let h=0;h<160;h++)for(let u=0;u<160;u++){let f=h*161+u,d=f+1,g=f+160+1,x=g+1;r.push(f,g,d,d,g,x)}let l=new Float32Array(25921*2);for(let h=0;h<25921;h++)l[h*2]=n[h*3]/9,l[h*2+1]=n[h*3+2]/9;let c=new Ee;return c.setAttribute("position",new Ae(n,3)),c.setAttribute("color",new Ae(s,3)),c.setAttribute("uv",new Ae(l,2)),c.setIndex(r),c.computeVertexNormals(),c}var lp=(i,t,e)=>({x:i.x+t*Math.cos(i.yaw)+e*Math.sin(i.yaw),z:i.z-t*Math.sin(i.yaw)+e*Math.cos(i.yaw)});function U_(i,t,e){let n=document.createElement("canvas");n.width=512,n.height=128;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,512,128),s.strokeStyle=e,s.lineWidth=8,s.strokeRect(8,8,496,112),s.fillStyle=e,s.font="bold 72px Arial Black, Arial, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,256,68);let r=new tn(n);return r.colorSpace=De,r.anisotropy=4,r}function cp(i,t,e,n){i.waterY=fe.SEA,i.killY=-2.6,i.terrain=as;let s=ip();e.track=s,e.cars=sp(),s.terrain=as,e.finishZ=-99999,e.finishY=99999;let r=Oc();for(let M of[-90,-30,30,90])for(let P of[-90,-30,30,90])i.addSolid(M-23.5,0,P-23.5,M+23.5,.2,P+23.5,{name:"block"});for(let M of r)i.addSolid(M.x-M.w/2,0,M.z-M.d/2,M.x+M.w/2,M.h,M.z+M.d/2,{name:"building"});for(let[M,P]of ls)i.addSolid(M-2.6,.2,P-2.6,M+2.6,1.2,P+2.6,{name:"fountain"});s.boxes=[...r.map(M=>({x0:M.x-M.w/2,x1:M.x+M.w/2,z0:M.z-M.d/2,z1:M.z+M.d/2,h:M.h})),...ls.map(([M,P])=>({x0:M-2.6,x1:M+2.6,z0:P-2.6,z1:P+2.6,h:1.2}))];{let M=Cn.shop;i.addSolid(M.x-M.w/2,0,M.z-M.d/2,M.x+M.w/2,M.h,M.z+M.d/2,{name:"building"}),s.boxes.push({x0:M.x-M.w/2,x1:M.x+M.w/2,z0:M.z-M.d/2,z1:M.z+M.d/2,h:M.h});for(let P of qr){let C=lp(P,0,-3);i.addSolid(C.x-6,0,C.z-4.3,C.x+6,5.5,C.z+4.3,{name:"building"}),s.boxes.push({x0:C.x-6,x1:C.x+6,z0:C.z-4.3,z1:C.z+4.3,h:5.5})}}if(e.gta={buildings:r,roads:s},i.headless)return;let o=$u(256,215,38,30,11,{patches:4}),a=$u(256,195,36,50,21,{cracks:4,patches:5}),l=new et(z_(),new ne({vertexColors:!0,map:o,bumpMap:o,bumpScale:1.6,roughness:.95,metalness:0}));l.receiveShadow=!0,i.group.add(l);let c=new et(N_(s),new ne({vertexColors:!0,map:a,bumpMap:a,bumpScale:1.1,roughness:.82,metalness:.05}));c.receiveShadow=!0,i.group.add(c);let h=op(!1),u=op(!0),f=$u(128,235,30,22,31),d=r.filter(M=>M.zone>0),g=r.filter(M=>M.zone===0),x=new et(zi(d.map(ap)),new ne({vertexColors:!0,map:h,bumpMap:f,bumpScale:.6,roughness:.78,metalness:.02}));x.castShadow=!0,x.receiveShadow=!0,i.group.add(x);let m=new et(zi(g.map(ap)),new ne({vertexColors:!0,map:u,roughness:.22,metalness:.55,envMapIntensity:1.5}));m.castShadow=!0,m.receiveShadow=!0,i.group.add(m);let p=i.main,v=Ku(n||7),T="#d9dde2",E=s.props=[],_=(M,P,C,I,z=0)=>{i.addSolid(M-C,z,P-C,M+C,z+I,P+C,{name:"prop"}),E.push({x0:M-C,x1:M+C,z0:P-C,z1:P+C,h:z+I})},b=(M,P,C,I,z)=>{F_(p,M,P,C,I,v,z),_(M,C,.3*I,3,P)},S=(M,P,C,I)=>{p.add(new It(.08,.13,7.2,8),M,3.6,P,"#4d545e");let z=I?0:-C*.9,O=I?-C*.9:0;p.add(new Qt(I?.1:1.9,.1,I?1.9:.1),M+z,7.15,P+O,"#4d545e"),p.add(new Qt(I?.34:.7,.14,I?.7:.34),M+z*1.9,7.1,P+O*1.9,"#9aa1aa"),i.glow.add(new Qt(I?.28:.55,.05,I?.55:.28),M+z*1.9,7.02,P+O*1.9,"#fff1c4"),_(M,P,.16,7)};for(let M of[-90,-30,30,90])for(let P of[-90,-30,30,90]){let C=ls.some(I=>I[0]===M&&I[1]===P);p.add(i.rbox(47,.2,47,.05),M,.1,P,C?"#7ccf5b":T)}for(let M of r){if(p.add(new Qt(M.w+.8,.5,M.d+.8),M.x,M.h+.25,M.z,"#4a4f5e"),p.add(new Qt(M.w+.7,1.3,M.d+.7),M.x,.65,M.z,"#6a6470"),p.add(new Qt(M.w+1.3,.55,M.d+1.3),M.x,M.h-.3,M.z,"#ece4d3"),M.h>34)for(let P=20;P<M.h-6;P+=20)p.add(new Qt(M.w+.45,.35,M.d+.45),M.x,P,M.z,"#d9d2c4");{let P=M.x-M.w*.25,C=M.z-M.d*.2,I=M.h+.5;p.add(new Qt(1.6,1.3,1.6),P,I+.65,C,"#4a4f5e"),p.add(new It(1.05,1.05,1.5,8),P,I+2,C,v()<.5?"#1e1e24":"#2b4c7e"),p.add(new It(.95,1.05,.2,8),P,I+2.85,C,"#d9d9d9"),p.add(new Qt(1.6,1,1),M.x+M.w*.25,I+.5,M.z+M.d*.2,"#c8ccd2"),p.add(new _e(.55,6,3,0,Math.PI*2,0,1.2),M.x+M.w*.1,I+1.2,M.z+M.d*.3,"#f2f2f2",.9,0,0)}p.add(new Qt(M.w+.9,.4,M.d+.9),M.x,3.7,M.z,["#e63946","#2a9d8f","#f4a261","#457b9d"][Math.floor(v()*4)]),M.h>14&&p.add(new Qt(3,1.6,3),M.x+(v()-.5)*M.w*.4,M.h+1.3,M.z+(v()-.5)*M.d*.4,"#9aa3ad"),M.tower&&(p.add(new It(.25,.4,24,6),M.x,M.h+12,M.z,"#c9d1d9"),i.glow.add(new _e(.9,8,6),M.x,M.h+24,M.z,"#ff3b3b"),p.add(new Qt(M.w*.6,8,M.d*.6),M.x,M.h+4,M.z,"#6ea5d6"))}{let M=Cn.shop,P=Cn.x,C=Cn.z,I=(G,X,Z)=>new Qt(G,X,Z);p.add(I(46,.06,40),M.x,.23,28,"#8a9098"),p.add(I(M.w,M.h,M.d),M.x,M.h/2,M.z,"#d9d3c3"),p.add(I(M.w+1,.5,M.d+1),M.x,M.h+.25,M.z,"#3b3f4a"),p.add(I(M.w+.2,1.3,M.d+.2),M.x,M.h-1,M.z,"#e8b020");let z=M.z-M.d/2-.12;for(let G=-1;G<=1;G++){p.add(I(8.2,5,.3),M.x+G*11,2.6,z,"#e07a1a");for(let X=0;X<6;X++)p.add(I(8.2,.08,.34),M.x+G*11,.7+X*.8,z-.02,"#a8530c");p.add(I(8.8,.35,.4),M.x+G*11,5.3,z,"#2b2f38")}p.add(I(4.5,2.2,.2),M.x-15,3.4,z,"#9fd0f0"),p.add(I(4.5,2.2,.2),M.x+15,3.4,z,"#9fd0f0");let O=new et(new ke(14,3.5),new Te({map:U_("AUTO REPAIR","#173a8a","#ffd23f"),toneMapped:!1}));O.position.set(M.x,M.h+3.2,M.z-M.d/2-.4),O.rotation.y=Math.PI,i.group.add(O);{let G=O.clone();G.material=O.material,G.rotation.y=Math.PI,G.position.set(M.x,M.h+3.2,M.z-M.d/2-.45)}p.add(I(.4,3.4,.4),M.x-5.5,M.h+1.7,M.z-M.d/2-.2,"#3b3f4a"),p.add(I(.4,3.4,.4),M.x+5.5,M.h+1.7,M.z-M.d/2-.2,"#3b3f4a");for(let[G,X]of[[-6.5,-5.2],[6.5,-5.2],[-6.5,5.2],[6.5,5.2]])p.add(new It(.25,.25,5.6,8),P+G,2.9,C+X,"#e8e8ee"),_(P+G,C+X,.28,5.6);p.add(I(15.5,.5,12.6),P,5.85,C,"#2b6cb0"),p.add(I(15.7,.18,12.8),P,5.55,C,"#ffffff"),i.glow.add(I(13,.06,.5),P,5.5,C-3,"#fff6d8"),i.glow.add(I(13,.06,.5),P,5.5,C+3,"#fff6d8");let V=new Go(3.7,4.4,40);V.rotateX(-Math.PI/2),p.add(new It(4.5,4.5,.04,40),P,.27,C,"#2a2f3a"),p.add(V,P,.3,C,"#ffd23f"),p.add(I(.5,.03,4.4),P,.31,C,"#ffd23f",0,.6,0),p.add(new It(.75,.75,.03,10),P+1.55,.31,C+1.15,"#ffd23f"),p.add(new It(.55,.55,.035,10),P-1.55,.315,C-1.15,"#2a2f3a");for(let G=0;G<3;G++){for(let X=0;X<4;X++)p.add(new Ce(.42,.18,8,14),M.x+18.5+G*.1,.22+X*.38,M.z-M.d/2-1.3-G*1,"#17171a",Math.PI/2,0,0);_(M.x+18.5,M.z-M.d/2-1.3-G*1,.6,1.6)}for(let G=0;G<3;G++)p.add(new It(.42,.42,1,12),M.x-18+G*.9,.75,M.z-M.d/2-1.2,["#c0392b","#2b6cb0","#f1c40f"][G]),_(M.x-18+G*.9,M.z-M.d/2-1.2,.45,1.2);p.add(I(1.8,1.6,.9),M.x-20,1,M.z-M.d/2-.6,"#c0392b"),_(M.x-20,M.z-M.d/2-.6,.9,1.6);for(let[G,X]of[[-8,-3],[8,-3],[-8,3],[8,3]])p.add(new _n(.28,.7,10),P+G,.62,C+X,"#ff6a1a");b(M.x-21,.2,14,.9),b(M.x+21,.2,14,.9)}{let M=["#8a3b2e","#4a5a6a","#6b4f3a","#3d4d3d"],P=["#efe3cf","#e5ddd0","#f0e8d8","#dcd6c8"],C=(I,z,O)=>new Qt(I,z,O);qr.forEach((I,z)=>{let O=(X,Z)=>lp(I,X,Z),V=(X,Z,Mt,Rt,re,oe=0)=>{let ie=O(Z,Rt);p.add(X,ie.x,Mt,ie.z,re,0,I.yaw+oe,0)};V(C(23,.08,23),0,.24,0,"#6fbf4f"),V(C(12,5.2,8.5),0,2.8,-3,P[z]),V(C(12.4,.5,8.9),0,.45,-3,"#8a8f97");let G=new _n(1,1,4);G.rotateY(Math.PI/4),G.scale(13.4/Math.SQRT2,2.9,10.2/Math.SQRT2),V(G,0,5.4+1.45,-3,M[z]),V(C(1,2.6,1),-3,7.2,-5.6,"#8a5a4a"),V(C(1.4,2.5,.18),3.4,1.55,1.3,I.color),V(C(1.6,2.7,.12),3.4,1.6,1.27,"#f4f1ea"),i.glow.add(C(.3,.3,.12),O(2.1,1.45).x,2.7,O(2.1,1.45).z,"#fff0b8"),V(C(4.6,.22,2.4),3.4,.36,2.4,"#b9bdc4"),V(C(5,.2,2.6),3.4,3.35,2.5,M[z]),V(new It(.1,.1,3,8),5.7,1.85,3.6,"#f4f1ea"),V(new It(.1,.1,3,8),1.1,1.85,3.6,"#f4f1ea"),V(C(4.2,2.8,.14),-3.3,1.7,1.3,"#f1f1f4");for(let X=0;X<5;X++)V(C(4.2,.05,.18),-3.3,.65+X*.5,1.28,"#c5c9d0");for(let[X,Z,Mt,Rt]of[[.2,2.9,1.3,1],[6.6,3,1.3,1],[-5.4,3.4,1.3,1]])V(C(1.9,1.5,.12),X,Z,Mt,"#9fd0f0"),V(C(2.1,.1,.16),X,Z-.8,Mt,"#f4f1ea");for(let X of[-3,3])V(C(1.9,1.5,.12),X,3.1,-7.3,"#9fd0f0");for(let X of[-6.05,6.05])V(C(.12,1.5,1.9),X,3,-3,"#9fd0f0");i.glow.add(C(1.4,1,.06),O(.2,1.37).x,2.9,O(.2,1.37).z,"#ffe2a0",0,I.yaw,0),V(C(4.8,.06,10),-3.3,.27,6.2,"#9da1a8"),V(C(1.3,.06,8.4),3.4,.27,5.6,"#c7c9ce");for(let[X,Z]of[[-10.8,-5.8],[-.9,2.5],[4.3,10.8]])V(C(Z-X,.9,.1),(X+Z)/2,.7,10.8,"#f2f2f2");V(C(.1,.9,21.6),-10.9,.7,0,"#f2f2f2"),V(C(.1,.9,21.6),10.9,.7,0,"#f2f2f2"),V(C(21.8,.9,.1),0,.7,-10.9,"#f2f2f2"),V(new It(.07,.07,1.1,6),6.2,.8,11,"#4a4f58"),V(C(.55,.38,.3),6.2,1.45,11,I.color),V(C(2.6,.18,1.4),6.6,.4,-9.2,"#8a5a34"),V(C(2.6,.5,.1),6.6,.75,-9.55,"#8a5a34");{let X=O(-8.3,-7.8),Z=O(8.3,7.6),Mt=O(8.4,-4);b(X.x,.2,X.z,1),b(Z.x,.2,Z.z,.85),b(Mt.x,.2,Mt.z,.8)}[-1.5,.3,2.1].forEach((X,Z)=>{let Mt=O(X,1.9);p.add(new _e(.34,7,6),Mt.x,.5,Mt.z,["#e63946","#f4a261","#ff9ec7"][Z])})})}for(let[M,P]of ls){p.add(new It(2.6,2.8,1,14),M,.7,P,"#b8c2cc"),p.add(new It(2,2,.2,14),M,1.22,P,"#5ec8f0"),p.add(new It(.3,.4,2.4,8),M,2.2,P,"#b8c2cc"),i.glow.add(new _e(.7,8,6),M,3.6,P,"#bff0ff");for(let C=0;C<16;C++){let I=M+(v()-.5)*42,z=P+(v()-.5)*42;Math.hypot(I-M,z-P)<6||b(I,.2,z,.9+v()*.7)}for(let C of[0,1,2,3]){let I=M+Math.cos(C*1.57)*8,z=P+Math.sin(C*1.57)*8;p.add(i.rbox(2.4,.3,.8,.05),I,.55,z,"#8a5a34"),p.add(i.rbox(2.4,.6,.15,.03),I,.9,z+.35,"#8a5a34"),_(I,z,1.2,.9,.2)}}for(let M of fe.GRID)for(let P of[-1,1])for(let C=-112;C<=112;C+=14){if(fe.GRID.some(O=>Math.abs(C-O)<10))continue;let I=P*(fe.HW+2.2),z=(C+112)/14%2===0;for(let[O,V,G]of[[M+I,C,!1],[C,M+I,!0]])z?S(O,V,P,G):b(O,.2,V,.8+v()*.3)}for(let M=0,P=0;M<2600&&P<380;M++){let C=(v()-.5)*700,I=(v()-.5)*700,z=as(C,I);if(z<1.2||z>30||Math.max(Math.abs(C),Math.abs(I))<160)continue;let O=(as(C+2,I)-as(C-2,I))/4,V=(as(C,I+2)-as(C,I-2))/4;if(Math.hypot(O,V)>.55||Math.abs(I)<24&&C>100)continue;let G=!1;for(let X=0;X<=1;X+=.02){let Z=Xr(X);if(Math.hypot(Z.x-C,Z.z-I)<13){G=!0;break}}G||(b(C,z,I,1.2+v()*1.2,!0),P++)}{let M=fe.MT,P=Wr(M.Rt);p.add(new It(.15,.2,9,6),M.cx,P+4.5,M.cz,"#ddd"),i.glow.add(new Qt(3.4,1.8,.1),M.cx+1.7,P+8,M.cz,"#ff6b9d")}for(let[M,P,C,I,z,O]of Zu){let V=new Bn;V.moveTo(0,0),V.lineTo(I,0),V.lineTo(I,z),V.lineTo(0,0);let G=new Di(V,{depth:O,bevelEnabled:!1});G.translate(0,0,-O/2),p.add(G,M,.02,P,"#ff8a00",0,C-Math.PI/2,0);let X=5;for(let Z=0;Z<X;Z++){let Mt=(Z+.5)/X*I,Rt=z*Mt/I,re=new Qt(I/X*.45,.06,O*.96);re.rotateZ(Math.atan2(z,I)),p.add(re,M+Math.sin(C)*Mt,Rt+.08,P+Math.cos(C)*Mt,"#ffffff",0,C-Math.PI/2,0)}i.glow.add(new Qt(.25,.25,O),M+Math.sin(C)*I,z+.12,P+Math.cos(C)*I,"#ffee00",0,C-Math.PI/2,0)}let y=[],w=e.trafficList=[],A=["#c9c9cf","#1f3a5f","#9a2b2b","#e8e2d0","#2d5a3d","#6a6f78","#d9b34a","#4a2b5e","#2b2b30"],L=[11,12,13,14,16,18];rp.forEach((M,P)=>{for(let C=0;C<M.n;C++){let I=P*5+C,z=L[I%L.length],O=np(z,z===14?null:A[I%A.length]);O.rotation.order="YXZ",i.group.add(O);let V=Ju(M,C,0),G={id:z,x:V.x,y:0,z:V.z,yaw:V.yaw,vx:V.vx,vz:V.vz,speed:M.sp,driver:1e3+I,parked:!1,heavy:!0,hl:z===12?1.98:2.3,hw:.95};w.push(G),y.push({L:M,k:C,m:O,st:G})}}),i.updaters.push(M=>{for(let P of y){let C=Ju(P.L,P.k,M),I=P.st;I.x=C.x,I.z=C.z,I.yaw=C.yaw,I.vx=C.vx,I.vz=C.vz,P.m.position.set(C.x,0,C.z),P.m.rotation.y=C.yaw}})}var Hc=["#3e6b34","#4a7c3a","#56893f","#3a5f2f","#668f45","#4f7a36"];function F_(i,t,e,n,s,r,o=!1){let a=Hc[Math.floor(r()*Hc.length)],l=Hc[Math.floor(r()*Hc.length)];if(o){i.add(new It(.2*s,.3*s,1.8*s,5),t,e+.9*s,n,"#5a4331"),i.add(new _n(1.5*s,3.2*s,7),t,e+3*s,n,"#2f5d34"),i.add(new _n(1.1*s,2.5*s,7),t,e+4.5*s,n,"#2f5d34");return}i.add(new It(.2*s,.32*s,2.4*s,7),t,e+1.2*s,n,"#5d4a3a"),i.add(new It(.1*s,.17*s,1.5*s,6),t+.35*s,e+2.7*s,n,"#5d4a3a",0,0,-.55),i.add(new It(.1*s,.17*s,1.5*s,6),t-.3*s,e+2.8*s,n+.1*s,"#5d4a3a",0,0,.5);let c=new ko(1,1);i.add(c,t,e+3.6*s,n,a,0,r()*6,0,2.2*s,1.55*s,2.2*s),i.add(c,t+(r()-.5)*1.6*s,e+4.3*s,n+(r()-.5)*1.6*s,l,0,r()*6,0,1.5*s,1.2*s,1.5*s),i.add(c,t+(r()-.5)*2.2*s,e+3.1*s,n+(r()-.5)*2.2*s,a,0,r()*6,0,1.3*s,1*s,1.3*s)}var B_={gta:{plat:["#cfd8e3","#e8c9a0","#a8c5e8","#f1e0a6","#b9d9b0"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff4d6d",hazard2:"#fff7d6",hub:"#5a6270",accent:"#ffd23f",convBase:"#4a3a5e",belt:"#ffe9a8"}};function hp(i,t=!1,e=null,n=1){let r=B_.gta,o=new Fc(r,t);o.arrowTexture=e,o.key="gta",o.waterY=-40,o.killY=-60;let a={key:"gta",spawn:{x:0,y:0,z:1.5},signs:[],pads:[]};return cp(o,r,a,n),a.finishPlat={far:-230},o.finalize(),a.length=-a.finishZ,a.checkpoints=o.checkpoints,a.endZ=a.finishPlat.far,{world:o,info:a}}function up(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!1,ground:null,coyote:0,jumpBuf:0,stun:0,dive:0,diveCd:0,noSnap:0,hitCd:0,immune:0,boost:0,jumping:!1,noCtrl:0,landSpeed:0,inWater:!1,events:[],moveT:0,yawOff:0,swim:0,waterSurf:0}}var O_=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function kc(i,t,e,n){let s=t-i.vx,r=e-i.vz,o=Math.hypot(s,r);o<=n||o<1e-6?(i.vx=t,i.vz=e):(i.vx+=s/o*n,i.vz+=r/o*n)}function fp(i,t,e,n){t.coyote=t.grounded?.11:t.coyote-e,t.jumpBuf=n.jumpPressed?.13:t.jumpBuf-e,t.immune>0&&(t.immune-=e),t.stun>0&&(t.stun=Math.max(0,t.stun-e),t.stun<=0&&(t.immune=1)),t.dive>0&&(t.dive=Math.max(0,t.dive-e)),t.diveCd>0&&(t.diveCd-=e),t.noSnap>0&&(t.noSnap-=e),t.hitCd>0&&(t.hitCd-=e),t.boost>0&&(t.boost-=e),t.noCtrl>0&&(t.noCtrl-=e);let s=0,r=0;for(let u of i.pools)if(t.x>u.x0&&t.x<u.x1&&t.z>u.z0&&t.z<u.z1){let f=u.surf-t.y;f>.12&&(s=Math.min(1,f/.9),r=u.surf);break}s>.3&&t.swim<=.3&&(t.events.push("splash"),t.waterSurf=r),t.swim=s;let o=t.stun<=0&&t.dive<=0&&t.noCtrl<=0,a=t.ground&&t.ground.ice,l=Math.abs(n.mx)+Math.abs(n.mz)>.01;if(n.divePressed&&t.diveCd<=0&&t.stun<=0&&t.dive<=0){let u=Math.sin(t.yaw),f=Math.cos(t.yaw);t.vx=u*15.5,t.vz=f*15.5,t.vy=t.grounded?7:Math.max(t.vy,3.5),t.grounded=!1,t.ground=null,t.noSnap=.2,t.dive=.85,t.diveCd=1.1,t.events.push("dive")}if(o){let u=ve.RUN*(t.boost>0?1.45:1)*(t.speedMul||1)*(1-.34*s);if(l){let f=t.grounded?a?ve.ICE_ACC:ve.ACC:ve.AIR;kc(t,n.mx*u,n.mz*u,f*e);let d=Math.atan2(n.mx,n.mz);t.yaw+=O_(t.yaw,d)*(1-Math.exp(-20*e))}else t.grounded?kc(t,0,0,(a?ve.ICE_DEC:ve.DEC)*e):kc(t,0,0,ve.AIR_DEC*e)}else{let u=t.grounded?a?1.2:9:.6;kc(t,0,0,u*e)}if(s>.4&&n.jumpPressed&&t.stun<=0?(t.vy=9,t.grounded=!1,t.ground=null,t.noSnap=.2,t.jumpBuf=0,t.events.push("stroke")):t.jumpBuf>0&&(t.grounded||t.coyote>0)&&t.stun<=0&&t.dive<=.45&&(t.vy=ve.JUMP*(t.jumpMul||1),t.grounded=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.noSnap=.2,t.jumping=!0,t.events.push("jump")),t.jumping&&!n.jumpHeld&&t.vy>6&&(t.vy-=55*e),t.vy=Math.max(ve.TERM,t.vy-ve.G*e*(t.dive>0&&!t.grounded?.8:1)*(1-.92*s)),s>.05){let u=r-(n.jumpHeld?.3:.95);t.vy+=(u-t.y)*26*e*s,t.vy*=Math.exp(-2.4*e*s)}for(let u of i.zones){let f=t.x-u.x,d=t.z-u.z;if(f*f+d*d<u.r*u.r&&t.y>u.y0-.3&&t.y<u.y1){let g=Math.max(0,(t.y-u.y0)/(u.y1-u.y0)),x=u.vmax*(1-g*g);t.vy<x&&(t.vy=Math.min(x,t.vy+u.lift*e)),t.noSnap=Math.max(t.noSnap,.12),t.air||(t.air=!0,t.events.push("air"))}else t.air=!1}for(let u of i.winds)if(t.x>u.x0&&t.x<u.x1&&t.z>u.z0&&t.z<u.z1&&t.y>u.y0-.5&&t.y<u.y1){let f=t.grounded?1:.75;t.x+=u.ax*f*e,t.z+=u.az*f*e}if(t.grounded&&t.ground){let u=t.ground.conv;u&&(t.x+=u[0]*e,t.z+=u[1]*e),t.ground.boost&&(t.boost=.55)}let c=t.grounded,h=t.y;if(t.x+=t.vx*e,t.z+=t.vz*e,i.resolveHorizontal(t),i.resolveHorizontal(t),t.y+=t.vy*e,t.grounded=!1,t.ground=null,t.vy<=0){let u=i.findGround(t,h,c);if(u){let f=-t.vy;t.y=u.top,t.vy=0,t.grounded=!0,t.ground=u.s,t.jumping=!1,u.s.bounce?(t.vy=u.s.bounce,t.grounded=!1,t.ground=null,t.noSnap=.25,t.jumping=!1,u.s.push&&(t.vx=u.s.push[0],t.vz=u.s.push[1],t.noCtrl=.9),u.s.squash!==void 0&&(u.s.squash=1),t.events.push("bounce")):!c&&f>6&&(t.landSpeed=f,t.events.push("land"))}}else{let u=i.hitCeiling(t,h);u&&(t.y=u.y0-ve.H,t.vy=Math.min(0,t.vy*.2))}return t.y<i.waterY-.2&&!t.inWater&&(t.inWater=!0,t.events.push("splash")),t.y<i.killY&&t.events.push("fell"),t}function cs(i,t,e,n){return i.hitCd>0||i.shield>0?!1:(i.vx=t*n,i.vz=e*n,i.vy=Math.max(i.vy,6.5),i.grounded=!1,i.ground=null,i.noSnap=.25,i.stun=.95,i.dive=0,i.hitCd=.5,i.events.push("hit"),!0)}function Gc(i,t,e,n,s){i.x=t,i.y=e,i.z=n,i.vx=i.vy=i.vz=0,i.grounded=!1,i.ground=null,i.stun=0,i.dive=0,i.inWater=!1,i.hitCd=1,i.yaw=s!=null?s:Math.PI,i.noSnap=0,i.boost=0}var dp=(i,t=.55)=>new ne({color:i,roughness:t});var kE=dp("#ffffff",.25),GE=dp("#101018",.4);function Vc(i,t="#ffffff"){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");n.font='700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif',n.textAlign="center",n.textBaseline="middle";let s=Math.min(480,n.measureText(i).width+56);n.fillStyle="rgba(12,10,36,0.72)";let r=(512-s)/2,o=14,a=100,l=50;n.beginPath(),n.moveTo(r+l,o),n.arcTo(r+s,o,r+s,o+a,l),n.arcTo(r+s,o+a,r,o+a,l),n.arcTo(r,o+a,r,o,l),n.arcTo(r,o,r+s,o,l),n.closePath(),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.lineWidth=8,n.strokeStyle="rgba(0,0,0,0.65)",n.strokeText(i,256,68,440),n.fillStyle="#ffffff",n.fillText(i,256,68,440);let c=new tn(e);c.colorSpace=De,c.anisotropy=4;let h=new Ao(new gr({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return h.renderOrder=999,h.scale.set(2.8,.7,1),h.userData.base=.7,h}var Fe=(i,t,e)=>new U(i,t,e),H_=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Qu=(i,t,e)=>i+(t-i)*e,gn=i=>{let t=new Ht(i);return[t.r,t.g,t.b]},Fi=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],Wc=[["hips",null,[0,.97,0]],["spine","hips",[0,1.07,0]],["chest","spine",[0,1.24,0]],["neck","chest",[0,1.49,0]],["head","neck",[0,1.58,0]],["upperarm.L","chest",[.19,1.45,0]],["forearm.L","upperarm.L",[.265,1.17,0]],["hand.L","forearm.L",[.325,.915,0]],["upperarm.R","chest",[-.19,1.45,0]],["forearm.R","upperarm.R",[-.265,1.17,0]],["hand.R","forearm.R",[-.325,.915,0]],["fing.L","hand.L",[.338,.841,0]],["fingtip.L","fing.L",[.342,.796,0]],["thumb.L","hand.L",[.322,.885,.026]],["fing.R","hand.R",[-.338,.841,0]],["fingtip.R","fing.R",[-.342,.796,0]],["thumb.R","hand.R",[-.322,.885,.026]],["upperleg.L","hips",[.088,.93,0]],["lowerleg.L","upperleg.L",[.088,.52,0]],["foot.L","lowerleg.L",[.088,.095,0]],["upperleg.R","hips",[-.088,.93,0]],["lowerleg.R","upperleg.R",[-.088,.52,0]],["foot.R","lowerleg.R",[-.088,.095,0]]],Ln={};Wc.forEach((i,t)=>{Ln[i[0]]=t});function ju(i,t,e){let n=[0];for(let r=1;r<i.length;r++)n.push(n[r-1]+i[r].distanceTo(i[r-1]));let s=r=>{let o=0,a=1e9;for(let l=0;l<i.length-1;l++){let c=i[l],h=i[l+1],u=h.clone().sub(c),f=u.lengthSq(),d=Math.min(1,Math.max(0,r.clone().sub(c).dot(u)/f)),g=c.clone().addScaledVector(u,d),x=g.distanceTo(r);x<a&&(a=x,o=n[l]+d*Math.sqrt(f))}return o};return{t:s,w(r){let o=s(r),a=1;for(let h=1;h<i.length-1;h++)Math.abs(o-n[h])<Math.abs(o-n[a])&&(a=h);let l=o-n[a];if(i.length>2&&Math.abs(l)<e[a]){let h=H_(-e[a],e[a],l);return[[Ln[t[a]],h],[Ln[t[a-1]],1-h]]}let c=0;for(let h=0;h<t.length;h++)o>=n[h]&&(c=h);return[[Ln[t[Math.min(c,t.length-1)]],1]]}}}var tf=class{constructor(){this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[]}vert(t,e,n){let s=this.pos.length/3;this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]);let r=n.slice(0,4);for(;r.length<4;)r.push([0,0]);let o=0;return r.forEach(a=>{o+=a[1]}),o=o||1,r.forEach(a=>{this.si.push(a[0]),this.sw.push(a[1]/o)}),s}loft(t,e,n,s=!0,r=!0){let o=t[0].length,a=[];t.forEach((c,h)=>{let u=[];c.forEach((f,d)=>u.push(this.vert(f,n(h,d,f),e(f)))),a.push(u)});for(let c=0;c<t.length-1;c++)for(let h=0;h<o;h++){let u=(h+1)%o,f=a[c][h],d=a[c][u],g=a[c+1][h],x=a[c+1][u];this.idx.push(f,d,g,d,x,g)}let l=(c,h)=>{let u=t[c],f=new U;u.forEach(g=>f.add(g)),f.multiplyScalar(1/o);let d=this.vert(f,n(c,0,f),e(f));for(let g=0;g<o;g++){let x=a[c][g],m=a[c][(g+1)%o];h?this.idx.push(x,d,m):this.idx.push(x,m,d)}};s&&l(t.length-1,!0),r&&l(0,!1)}geo(t,e,n,s){t=t.index?t.toNonIndexed():t.clone(),t.applyMatrix4(e),t.computeVertexNormals();let r=t.attributes.position,o=this.pos.length/3;for(let a=0;a<r.count;a++)this.vert(Fe(r.getX(a),r.getY(a),r.getZ(a)),s,[[Ln[n],1]]);for(let a=0;a<r.count;a++)this.idx.push(o+a)}build(){let t=new Ee;return t.setAttribute("position",new ee(this.pos,3)),t.setAttribute("color",new ee(this.col,3)),t.setAttribute("skinIndex",new Ms(this.si,4)),t.setAttribute("skinWeight",new ee(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}},In=(i,t,e,n=1,s=1,r=1,o=0,a=0,l=0)=>new le().compose(Fe(i,t,e),new Qe().setFromEuler(new mn(o,a,l)),Fe(n,s,r)),Pn=(i=1,t=14,e=10,n=0,s=Math.PI*2,r=0,o=Math.PI)=>new _e(i,t,e,n,s,r,o);function Bi(i,t,e,n,s,r,o,a=2){let l=[];for(let c=0;c<o;c++){let h=c/o*Math.PI*2,u=Math.sin(h),f=Math.cos(h),d=Math.sign(u)*Math.pow(Math.abs(u),2/a),g=Math.sign(f)*Math.pow(Math.abs(f),2/a);l.push(Fe(i+n*d,t,e+(g>0?s:r)*g))}return l}var Ns=(i,t)=>{if(t<=i[0][0])return i[0].slice(1);if(t>=i[i.length-1][0])return i[i.length-1].slice(1);for(let e=0;e<i.length-1;e++)if(t<=i[e+1][0]){let n=(t-i[e][0])/(i[e+1][0]-i[e][0]),s=n*n*(3-2*n);return i[e].slice(1).map((r,o)=>Qu(r,i[e+1][o+1],s))}},k_={civilian:{top:"#4a6fa5",pants:"#2b3140",shoes:"#2a2018",sleeve:.62,hat:null,hair:"#16110d"},cop:{top:"#1f3a6b",pants:"#14161c",shoes:"#0d0d0d",sleeve:.62,hat:"cop",belt:!0,badge:!0,tie:"#0d0d12",hair:"#1a130e"},thug:{top:"#17171a",pants:"#38465f",shoes:"#e8e8e8",sleeve:5,hat:"beanie",chain:!0,hair:"#0d0a08",hood:!0},boss:{top:"#111216",pants:"#111216",shoes:"#0b0b0b",sleeve:5,hat:null,glasses:!0,tie:"#7a0f1a",chain:!0,shirt:"#f1efe9",lapel:!0,hair:"#0e0b09"}};function pp(i={}){let t=Object.assign({},k_[i.role||"civilian"],i),e=gn(t.skinTone||"#c08560"),n=gn(t.top),s=gn(t.pants),r=gn(t.shoes),o=gn(t.hair),a=gn(t.shirt||t.top),l=new tf,c=16,h=(B,J)=>Fe(J[0]*B,J[1],J[2]),u=[[.9,.166,.1,.106],[.965,.166,.1,.106],[.99,.168,.104,.11],[1.08,.148,.092,.092],[1.17,.15,.098,.088],[1.27,.172,.12,.094],[1.37,.19,.126,.1],[1.43,.2,.112,.1],[1.465,.168,.092,.09],[1.49,.125,.074,.076],[1.515,.082,.062,.066],[1.545,.058,.058,.06]],f=ju([Fe(0,.97,0),Fe(0,1.07,0),Fe(0,1.24,0),Fe(0,1.49,0),Fe(0,1.58,0),Fe(0,1.8,0)],["hips","spine","chest","neck","head"],[0,.07,.07,.03,.02]),d=!!(t.hood||t.lapel),g=d?.915:1,x=[],m=[];for(let B=d?.9:.965;B<=1.546;B+=.0225)m.push(B);m.push(g-4e-4,g+4e-4),m.sort((B,J)=>B-J);for(let B of m){let[J,mt,Dt]=Ns(u,B);x.push(Bi(0,B,0,J,mt,Dt,c,2.3))}l.loft(x,B=>f.w(B),(B,J,mt)=>mt.y<g?s:mt.y>1.5?e:t.lapel&&mt.z>.06&&Math.abs(mt.x)<.045&&mt.y>1.18?a:t.lapel?n:t.shirt&&!t.lapel?a:n);let p=[];for(let B=1.49;B<=1.605;B+=.023)p.push(Bi(0,B,-.008,.054,.052,.056,12));l.loft(p,B=>f.w(B),()=>e,!1,!1);let v=B=>[Fe(.088*B,1.02,0),Fe(.088*B,.93,0),Fe(.088*B,.52,0),Fe(.088*B,.095,0),Fe(.088*B,0,0)],T=[[.03,.04,.044],[.1,.043,.046],[.2,.05,.054],[.32,.06,.064],[.4,.064,.068],[.47,.054,.058],[.53,.056,.06],[.62,.07,.074],[.75,.087,.092],[.88,.097,.102],[.96,.1,.108],[1,.085,.096],[1.04,.068,.08]];for(let B of[1,-1]){let J=B>0?"L":"R",mt=ju(v(B),["hips","upperleg."+J,"lowerleg."+J,"foot."+J],[0,.08,.06,.04]),Dt=[],Et=[];for(let rt=.105;rt<=1.04;rt+=.0467)Et.push(rt);Et.push(.1146,.1154),Et.sort((rt,gt)=>rt-gt);for(let rt of Et){let[gt,bt]=Ns(T,rt);Dt.push(Bi(.088*B+(rt>.8?-.004*B:0),rt,rt>.5?0:.004,gt,bt*1,bt*1.03,14))}let Ft=t.pants!==void 0;l.loft(Dt,rt=>mt.w(rt),(rt,gt,bt)=>bt.y<.115?e:s,!1,!1);let Yt=[[-.085,.075,.036],[-.07,.108,.043],[0,.104,.046],[.08,.072,.05],[.14,.054,.048],[.19,.04,.04],[.215,.028,.03]],ot=[];for(let rt=-.085;rt<=.2151;rt+=.025){let gt=Ns(Yt,rt),bt=gt[0],Nt=gt[1],Lt=[];for(let kt=0;kt<12;kt++){let H=kt/12*Math.PI*2;Lt.push(Fe(.088*B+Nt*Math.sin(H),.004+bt*(.5+.5*Math.cos(H)),rt))}ot.push(Lt)}let ft={w:()=>[[Ln["foot."+J],1]]},dt=[];ot.forEach(rt=>dt.push(rt.map(gt=>l.vert(gt,r,ft.w(gt)))));for(let rt=0;rt<ot.length-1;rt++)for(let gt=0;gt<12;gt++){let bt=(gt+1)%12;l.idx.push(dt[rt][gt],dt[rt+1][gt],dt[rt][bt],dt[rt][bt],dt[rt+1][gt],dt[rt+1][bt])}for(let[rt,gt]of[[0,!1],[ot.length-1,!0]]){let bt=ot[rt],Nt=Fe(.088*B,.05,bt[0].z),Lt=l.vert(Nt,r,ft.w(Nt));for(let kt=0;kt<12;kt++){let H=dt[rt][kt],xe=dt[rt][(kt+1)%12];gt?l.idx.push(H,xe,Lt):l.idx.push(H,Lt,xe)}}l.geo(new Qt(.1,.014,.3),In(.088*B,.007,.065),"foot."+J,Fi(r,.45))}let E=[[.915,.029,.024],[1,.034,.029],[1.08,.044,.037],[1.15,.048,.04],[1.2,.05,.043],[1.28,.053,.048],[1.37,.057,.055],[1.43,.06,.06],[1.47,.052,.054]];for(let B of[1,-1]){let J=B>0?"L":"R",mt=[Fe(.12*B,1.46,0),Fe(.19*B,1.45,0),Fe(.265*B,1.17,0),Fe(.325*B,.915,0),Fe(.345*B,.8,0)],Dt=ju(mt,["chest","upperarm."+J,"forearm."+J,"hand."+J],[0,.09,.05,.03]),Et=[],Ft=1.45-t.sleeve*.42,Yt=[];for(let bt=.92;bt<=1.475;bt+=.0395)Yt.push(bt);Ft>.93&&Ft<1.46&&Yt.push(Ft-4e-4,Ft+4e-4),Yt.sort((bt,Nt)=>bt-Nt);for(let bt of Yt){let[Nt,Lt]=Ns(E,bt),kt=bt>1.17?Qu(.265,.19,(bt-1.17)/.28):Qu(.325,.265,(bt-.915)/.255),H=t.sleeve>3||bt>1.45-t.sleeve*.42?1.03:1;Et.push(Bi(kt*B,bt,bt>1.3?-.003:.004,Nt*H,Lt*H,Lt*H,12))}l.loft(Et,bt=>Dt.w(bt),(bt,Nt,Lt)=>t.sleeve>3||Lt.y>1.45-t.sleeve*.42?n:e,!1,!1);let ot=[];for(let[bt,Nt,Lt]of[[.928,.021,.03],[.9,.022,.036],[.87,.021,.041],[.843,.018,.043]])ot.push(Bi((.325+(.915-bt)*.15)*B,bt,0,Nt,Lt,Lt,10));l.loft(ot,()=>[[Ln["hand."+J],1]],()=>e,!0,!0);let ft=[.0255,.0085,-.0085,-.0255],dt=[.076,.083,.077,.062],rt=[.0098,.0092,.0088,.008,.0058];for(let bt=0;bt<4;bt++){let Lt=[.843,.8195,.796,.796-.5*(dt[bt]-.047),.843-dt[bt]].map((kt,H)=>Bi((.338+(.843-kt)*.1)*B,kt,ft[bt],rt[H],rt[H],rt[H],7));l.loft(Lt,kt=>kt.y>.8?[[Ln["fing."+J],1]]:kt.y<.792?[[Ln["fingtip."+J],1]]:[[Ln["fing."+J],.5],[Ln["fingtip."+J],.5]],()=>e,!0,!0)}let gt=[];for(let[bt,Nt,Lt]of[[.892,.026,.0125],[.862,.042,.0112],[.834,.05,.0098],[.812,.053,.0078]])gt.push(Bi(.318*B,bt,Nt,Lt,Lt,Lt,7));l.loft(gt,()=>[[Ln["thumb."+J],1]],()=>e,!0,!0)}let _=[[1.555,.028,.05,.04],[1.575,.05,.083,.062],[1.6,.064,.09,.085],[1.63,.072,.09,.098],[1.665,.077,.095,.103],[1.7,.078,.098,.106],[1.735,.075,.092,.106],[1.765,.064,.074,.095],[1.79,.04,.045,.065],[1.806,.012,.013,.016]],b=[];for(let B=1.555;B<=1.8061;B+=.0126){let[J,mt,Dt]=Ns(_,B);b.push(Bi(0,B,0,J,mt,Dt,18,2.2))}let S=()=>[[Ln.head,1]];l.loft(b,S,()=>e,!0,!0);let y=B=>Ns(_,B)[1];for(let B of[1,-1])l.geo(Pn(1,12,8),In(.034*B,1.684,.078,.0118,.0112,.0118),"head",[.93,.92,.9]),l.geo(Pn(1,10,8),In(.034*B,1.684,.0885,.0074,.0074,.0044),"head",gn(t.eye||"#3a2414")),l.geo(Pn(1,8,6),In(.034*B,1.684,.0925,.0036,.0036,.002),"head",[.02,.02,.02]),l.geo(Pn(1,12,6,0,Math.PI*2,0,Math.PI*.5),In(.034*B,1.6865,.079,.0132,.0125,.0132),"head",Fi(e,.93)),l.geo(new Qt(.04,.0075,.012),In(.036*B,1.715,.092,1,1,1,.1,0,-.12*B),"head",o),l.geo(Pn(1,8,6),In(.0775*B,1.672,-.006,.008,.027,.0175,0,0,.12*B),"head",Fi(e,.95)),l.geo(Pn(1,8,6),In(.0115*B,1.639,y(1.639)+.002,.0085,.008,.009),"head",e);l.geo(Pn(1,10,8),In(0,1.668,y(1.668)+.004,.0115,.026,.014,-.18),"head",e),l.geo(Pn(1,10,8),In(0,1.64,y(1.64)+.011,.0125,.0105,.0125),"head",e),l.geo(Pn(1,10,6),In(0,1.618,y(1.618)-.0015,.0225,.0052,.0075),"head",gn("#9b5a55")),l.geo(Pn(1,10,6),In(0,1.6045,y(1.6045)-.0015,.0195,.0062,.0085),"head",gn("#a86560")),l.geo(new Qt(.04,.0016,.004),In(0,1.6115,y(1.6115)+5e-4),"head",[.12,.05,.05]);let w=[];for(let B=1.66;B<=1.8125;B+=.0145){let[J,mt,Dt]=Ns(_,Math.min(B,1.8055)).map(Yt=>Yt),Et=.03+(B-1.655)*.45,Ft=Bi(0,B,0,J+.011,mt+.011,Dt+.013,18,2.2);Ft.forEach(Yt=>{Yt.z>Et&&(Yt.z=Et+(Yt.z-Et)*0),Yt.z>Et&&B<1.72&&(Yt.z=Et)}),w.push(Ft)}t.hat!=="beanie"&&l.loft(w,S,()=>o,!0,!1);let A=(B,J,mt,Dt,Et,Ft,Yt=0,ot=0,ft=0)=>In(B,J,mt,Dt,Et,Ft,Yt,ot,ft);if(t.belt){let B=new It(.1745,.172,.04,24,1,!0);l.geo(B,A(0,1,0,1,1,.66),"hips",[.05,.05,.05]),l.geo(new Qt(.04,.034,.012),A(0,1,.112),"hips",gn("#c9a64a")),l.geo(new Qt(.05,.12,.07),A(-.17,.93,.015),"hips",[.05,.05,.05]),l.geo(new Qt(.05,.04,.07),A(0,1,-.115),"hips",[.08,.08,.08])}if(t.badge&&l.geo(Pn(1,6,4),A(.075,1.33,.118,.024,.028,.006),"chest",gn("#d4af37")),t.tie&&(l.geo(new Qt(.036,.19,.012),A(0,1.35,.121,1,1,1,-.05),"chest",gn(t.tie)),l.geo(new Qt(.044,.04,.02),A(0,1.455,.1),"chest",Fi(gn(t.tie),1.1))),t.lapel)for(let B of[1,-1])l.geo(new Qt(.05,.22,.012),A(.055*B,1.34,.112,1,1,1,-.05,0,.3*B),"chest",Fi(n,1.6));if(t.chain){let B=new Ce(.075,.0055,6,20);l.geo(B,A(0,1.43,.045,1.15,1.2,1,1.15),"chest",gn("#d4af37"))}if(t.hood){let B=new Ce(.075,.032,8,18);l.geo(B,A(0,1.495,-.01,1.2,1,1,Math.PI/2+.35),"chest",Fi(n,1.15))}if(t.top!==void 0&&!t.hood){let B=new Ce(.058,.009,6,16);l.geo(B,A(0,1.503,0,1,1,1,Math.PI/2),"chest",t.lapel||t.tie?a:Fi(n,1.15))}t.hat==="cop"&&(l.geo(new It(.085,.093,.075,20),A(0,1.775,0),"head",Fi(n,.9)),l.geo(new It(.1,.098,.014,20),A(0,1.74,0,1,1,1.05),"head",Fi(n,.8)),l.geo(new Qt(.15,.008,.07),A(0,1.736,.115,1,1,1,.12),"head",[.03,.03,.03]),l.geo(Pn(1,6,4),A(0,1.77,.0925,.014,.016,.004),"head",gn("#d4af37"))),t.hat==="beanie"&&(l.geo(Pn(1,18,10,0,Math.PI*2,0,Math.PI*.62),A(0,1.722,-.006,.092,.1,.108),"head",[.07,.07,.08]),l.geo(new Ce(.087,.012,6,20),A(0,1.742,-.004,1,1,1.15,Math.PI/2),"head",[.1,.1,.11])),t.glasses&&(l.geo(new Qt(.058,.032,.008),A(.034,1.684,.098),"head",[.02,.02,.025]),l.geo(new Qt(.058,.032,.008),A(-.034,1.684,.098),"head",[.02,.02,.025]),l.geo(new Qt(.16,.006,.006),A(0,1.694,.096),"head",[.04,.04,.04])),t.hat==="cap"&&(l.geo(Pn(1,16,8,0,Math.PI*2,0,Math.PI*.5),A(0,1.72,0,.09,.085,.105),"head",gn(t.capCol||"#aa1c1c")),l.geo(new Qt(.12,.006,.07),A(0,1.725,.11,1,1,1,.1),"head",gn(t.capCol||"#aa1c1c")));let L=Wc.map(B=>{let J=new yr;return J.name=B[0],J});Wc.forEach((B,J)=>{let mt=Fe(...B[2]);if(B[1]){let Dt=Wc.find(Et=>Et[0]===B[1]);L[J].position.copy(mt).sub(Fe(...Dt[2])),L[Ln[B[1]]].add(L[J])}else L[J].position.copy(mt)});let M=l.build(),P=new ne({vertexColors:!0,roughness:.62,metalness:0,envMapIntensity:.7}),C=new Ro(M,P),I=new Co(L);C.add(L[0]),C.bind(I),C.castShadow=!0,C.frustumCulled=!1;let z=new Zt;z.add(C);let O={};L.forEach(B=>{O[B.name]=B});let V={};L.forEach(B=>{V[B.name]=B.position.clone()});let G=new Zt,X=new ne({color:"#202225",roughness:.35,metalness:.85}),Z=new ne({color:"#0e0e10",roughness:.6,metalness:.3}),Mt=(B,J,mt,Dt,Et,Ft,Yt=X,ot=0)=>{let ft=new et(new Qt(B,J,mt),Yt);return ft.position.set(Dt,Et,Ft),ft.rotation.x=ot,ft},Rt=new Zt;Rt.add(Mt(.03,.036,.19,0,.074,.03),Mt(.026,.026,.13,0,.044,.01,Z),Mt(.03,.105,.042,0,0,-.012,Z,-.12),Mt(.006,.03,.05,0,.034,.05,Z),Mt(.008,.012,.01,0,.096,.115),Mt(.012,.01,.01,0,.096,-.055));let re=new et(new It(.0075,.0075,.03,8),X);re.rotation.x=Math.PI/2,re.position.set(0,.074,.14),Rt.add(re),Rt.quaternion.setFromRotationMatrix(new le().makeBasis(Fe(1,0,0),Fe(0,0,1),Fe(0,-1,0))),G.add(Rt),G.position.set(.026,-.052,0),G.visible=!1,O["hand.R"].add(G);let oe=M.index.count/3,ie={group:z,mesh:C,bones:O,rest:V,gun:G,tris:Math.round(oe),outfit:t};return ie.pose=(B,J=0,mt=1)=>ef(ie,B,J,mt),ie}var $=(i,t=0,e=0,n=0)=>i.rotation.set(t,e,n);function ef(i,t,e=0,n=1){let s=i.bones,r=i.rest;for(let c in s)s[c].rotation.set(0,0,0),s[c].position.copy(r[c]);i.gun.visible=!1,s["upperarm.L"].rotation.order="YXZ",s["upperarm.R"].rotation.order="YXZ";let o=(c,h)=>{let u=c==="L"?-1:1;$(s["fing."+c],0,0,u*h),$(s["fingtip."+c],0,0,u*h*.95),$(s["thumb."+c],0,0,u*h*.3)};o("L",.3),o("R",.3);let a=.1,l=(c,h)=>{$(s["upperarm.L"],c,0,-a),$(s["upperarm.R"],h,0,a)};if(t==="idle"){let c=Math.sin(e*1.6)*.012;$(s.chest,c,0,0),$(s.head,-c*.5,0,0),l(0,0),$(s["forearm.L"],-.12,0,0),$(s["forearm.R"],-.12,0,0),$(s["upperleg.L"],-.02,0,.03),$(s["upperleg.R"],.02,0,-.03)}else if(t==="walk"||t==="run"){let c=t==="run",h=e*(c?9:6),u=Math.sin(h),f=Math.cos(h),d=c?.95:.52,g=c?1.5:.85,x=c?.95:.5;$(s["upperleg.L"],-d*u,0,.03),$(s["upperleg.R"],d*u,0,-.03),$(s["lowerleg.L"],.1+g*Math.max(0,-f*.9+.1)*(u<0?.35:1),0,0),$(s["lowerleg.R"],.1+g*Math.max(0,f*.9+.1)*(u>0?.35:1),0,0),$(s["foot.L"],-.15*u,0,0),$(s["foot.R"],.15*u,0,0),l(x*u,-x*u),$(s["forearm.L"],-(c?1.1:.35)-.2*Math.max(0,-u),0,0),$(s["forearm.R"],-(c?1.1:.35)-.2*Math.max(0,u),0,0),$(s.spine,c?.2:.04,-.12*u*(c?1.2:1),0),$(s.chest,0,.12*u*(c?1.2:1),0),$(s.head,c?-.12:-.02,0,0),s.hips.position.y=r.hips.y-(c?.05:.025)+Math.abs(f)*(c?.06:.03),s.hips.rotation.y=.1*u*(c?1:.8),s["upperarm.L"].rotation.z=-a-(c?.12:0),s["upperarm.R"].rotation.z=a+(c?.12:0),o("L",c?1.15:.4),o("R",c?1.15:.4)}else if(t==="aim"||t==="aimLow")i.gun.visible=!0,s.hips.position.y=r.hips.y-.07,$(s["upperleg.L"],-.3,0,.12),$(s["upperleg.R"],.2,0,-.12),$(s["lowerleg.L"],.38,0,0),$(s["lowerleg.R"],.3,0,0),$(s["foot.L"],-.08,0,0),$(s["foot.R"],.1,0,0),t==="aim"?($(s.spine,.1,.12,0),$(s.chest,.05,.06,0),$(s.head,-.16,-.18,0),$(s["upperarm.R"],-1.6,.08,.25),$(s["forearm.R"],-.12,0,.04),$(s["hand.R"],0,0,0),$(s["upperarm.L"],-1.58,-.43,-.25),$(s["forearm.L"],-.26,0,-.06),$(s["hand.L"],0,0,0),o("R",1.25),o("L",1.05),s["thumb.R"].rotation.set(0,0,.1),s["thumb.L"].rotation.set(0,0,-.1)):($(s.spine,.08,.1,0),$(s.head,-.08,-.12,0),$(s["upperarm.R"],-.55,.15,.2),$(s["forearm.R"],-1.2,0,0),$(s["hand.R"],0,0,0),$(s["upperarm.L"],-.6,-.2,-.2),$(s["forearm.L"],-1.25,0,0),$(s["hand.L"],0,0,0),o("R",1.25),o("L",.9));else if(t==="jump"){let c=Math.max(0,Math.min(1,(e+1)/2)),h=(u,f)=>u+(f-u)*c;s.hips.position.y=r.hips.y-h(.02,.1),$(s.spine,h(.12,.3),0,0),$(s.chest,.05,h(.05,-.15),0),$(s.head,-h(.1,.22),0,0),$(s["upperleg.L"],h(-.55,-1.45),0,.08),$(s["lowerleg.L"],h(.5,1.6),0,0),$(s["foot.L"],h(.2,.3),0,0),$(s["upperleg.R"],h(.05,.5),0,-.1),$(s["lowerleg.R"],h(.3,1.2),0,0),$(s["upperarm.R"],h(-.9,-1.25),0,h(.9,.15)),$(s["forearm.R"],h(-.5,-1.45),0,0),$(s["upperarm.L"],h(-.6,.55),0,h(-.9,-.15)),$(s["forearm.L"],h(-.5,-.9),0,0),o("R",1.2),o("L",1.2)}else if(t==="sit")$(s["upperleg.L"],-1.5,0,.05),$(s["upperleg.R"],-1.5,0,-.05),$(s["lowerleg.L"],1.5,0,0),$(s["lowerleg.R"],1.5,0,0),s.hips.position.y=r.hips.y-.56,$(s.spine,-.12,0,0),$(s["upperarm.L"],-.9,0,-.1),$(s["upperarm.R"],-.9,0,.1),$(s["forearm.L"],-.6,0,0),$(s["forearm.R"],-.6,0,0);else if(t==="relaxed"){let c=Math.sin(e*1.4)*.012,h=Math.sin(e*.5)*.18;$(s.chest,c,.03,0),$(s.head,-c,h,0),$(s["upperleg.L"],-.03,0,.05),$(s["upperleg.R"],.06,0,-.1),$(s["lowerleg.R"],.06,0,0),$(s["upperarm.R"],.05,0,.1),$(s["forearm.R"],-.25,0,0),$(s["upperarm.L"],.05,0,-.1),$(s["forearm.L"],-.25,0,0),o("R",.45),o("L",.45)}else if(t==="pocket"){let c=Math.sin(e*.9)*.015;$(s.chest,c,.03,0),$(s.head,-.02,-.12+c,0),$(s["upperleg.L"],.05,0,.08),$(s["upperleg.R"],-.04,0,-.04),$(s["upperarm.R"],.1,0,.12),$(s["forearm.R"],-.55,0,.55),$(s["upperarm.L"],.1,0,-.12),$(s["forearm.L"],-.55,0,-.55),o("R",.7),o("L",.7)}else if(t==="thumbs"){let c=Math.sin(e*1.5)*.01;$(s.chest,c,-.06,0),$(s.head,-.02,.12,0),$(s["upperleg.L"],-.02,0,.06),$(s["upperleg.R"],.04,0,-.08),$(s["upperarm.R"],-.55,-.15,.35),$(s["forearm.R"],-1.5,0,.4),$(s["hand.R"],0,0,0),o("R",1.25),$(s["thumb.R"],0,0,-.9),$(s["upperarm.L"],.1,0,-.12),$(s["forearm.L"],-.6,0,-.4)}else if(t==="wave"){let c=Math.sin(e*6)*.35,h=Math.sin(e*1.5)*.01;$(s.chest,h,-.05,0),$(s.head,-.02,.1,0),$(s["upperleg.L"],-.02,0,.05),$(s["upperleg.R"],.02,0,-.05),$(s["upperarm.R"],-.35,0,2.55),$(s["forearm.R"],-.9,c*.4,c),$(s["hand.R"],0,0,c*.5),o("R",.15),$(s["upperarm.L"],.1,0,-.12),$(s["forearm.L"],-.5,0,-.35)}else if(t==="phone"){let c=Math.sin(e*1.5)*.01;$(s.chest,.06+c,0,0),$(s.head,.38,0,0),$(s["upperleg.L"],-.02,0,.05),$(s["upperleg.R"],.03,0,-.05),$(s["upperarm.R"],-.65,.2,.2),$(s["forearm.R"],-1.7,0,.5),$(s["hand.R"],-.2,0,0),o("R",.8),$(s["upperarm.L"],.1,0,-.12),$(s["forearm.L"],-.5,0,-.35)}else if(t==="crouch"){let c=Math.sin(e*2)*.01;s.hips.position.y=r.hips.y-.4,s.hips.position.z=r.hips.z+.04,$(s["upperleg.L"],-1.05,0,.12),$(s["upperleg.R"],-1.05,0,-.12),$(s["lowerleg.L"],1.95,0,0),$(s["lowerleg.R"],1.95,0,0),$(s.spine,.3+c,0,0),$(s.chest,.1,0,0),$(s.head,-.3,0,0),$(s["upperarm.L"],-.5,0,-.1),$(s["upperarm.R"],-.5,0,.1),$(s["forearm.L"],-.7,0,0),$(s["forearm.R"],-.7,0,0)}else if(t==="sitg"){let c=Math.sin(e*1.4)*.01;s.hips.position.y=r.hips.y-.7,$(s["upperleg.L"],-1.5,0,.18),$(s["upperleg.R"],-1.5,0,-.18),$(s["lowerleg.L"],.12,0,0),$(s["lowerleg.R"],.12,0,0),$(s.spine,-.12+c,0,0),$(s.head,.08,Math.sin(e*.5)*.25,0),$(s["upperarm.L"],.45,0,-.25),$(s["upperarm.R"],.45,0,.25),$(s["forearm.L"],-.15,0,0),$(s["forearm.R"],-.15,0,0),o("L",.3),o("R",.3)}else if(t==="punch"){let c=e<.25?-e/.25*.35:e<.5?-.35+(e-.25)/.25*1.35:Math.max(0,1-(e-.5)/.4),h=Math.max(0,c),u=Math.min(0,c);$(s.hips,0,.35*h-.2*-u,0),$(s.chest,.05,-.55*h-.25*-u,0),$(s.spine,.1*h,0,0),$(s.head,0,.45*h,0),$(s["upperleg.L"],-.35,0,.1),$(s["upperleg.R"],.3,0,-.1),$(s["lowerleg.L"],.25,0,0),$(s["lowerleg.R"],.15,0,0),$(s["upperarm.R"],-.9-.7*h-u*.3,0,.12-.12*h),$(s["forearm.R"],-1.9+1.8*h,0,0),o("R",1.3),$(s["upperarm.L"],-.95,0,-.15),$(s["forearm.L"],-1.9,0,0),o("L",1.3)}else if(t==="scared"){let c=Math.sin(e*22)*.03;s.hips.position.y=r.hips.y-.2,$(s["upperleg.L"],-.6,0,.12),$(s["upperleg.R"],-.6,0,-.12),$(s["lowerleg.L"],1,0,0),$(s["lowerleg.R"],1,0,0),$(s.spine,.28+c,0,0),$(s.chest,.1,c,0),$(s.head,.2,c*2,0),$(s["upperarm.R"],-1.9,0,.25),$(s["forearm.R"],-1.8,0,.7),$(s["upperarm.L"],-1.9,0,-.25),$(s["forearm.L"],-1.8,0,-.7),o("R",.8),o("L",.8)}else if(t==="fall"){let c=Math.sin(e*14)*.08;$(s.spine,-.15,0,0),$(s.head,-.3,0,0),$(s["upperarm.L"],-.4,0,-1.3+c),$(s["upperarm.R"],-.4,0,1.3-c),$(s["forearm.L"],-.5,0,0),$(s["forearm.R"],-.5,0,0),$(s["upperleg.L"],-.5,0,.35),$(s["upperleg.R"],.15,0,-.35),$(s["lowerleg.L"],.7,0,0),$(s["lowerleg.R"],.5,0,0)}}var G_=[{role:"civilian",top:"#b53a2e",pants:"#2b3140",skinTone:"#c68e63",hair:"#16110d"},{role:"civilian",top:"#2f7a5a",pants:"#3a3a44",skinTone:"#8d5a3b",hair:"#0d0a08"},{role:"civilian",top:"#d9a52b",pants:"#27384f",skinTone:"#e0ac85",hair:"#4a3020"},{role:"civilian",top:"#5b4aa8",pants:"#22252b",skinTone:"#a8714e",hair:"#120d0a"}],V_=i=>G_[((i|0)%4+4)%4],mp=new Qe,hs=class{constructor(t,e){this.ch=pp(e||V_(t)),this.group=new Zt,this.group.add(this.ch.group),this.height=1.78,this.tris=this.ch.tris,this.tWalk=0,this.tRun=0,this.t=0,this.pose="idle",this.seated=!1,this.prev={};for(let n in this.ch.bones)this.prev[n]={q:new Qe,p:new U,init:!1}}update(t,e){this.t+=t;let n="idle",s=this.t,r=e.speed||0;e.seated?n="sit":!e.grounded&&Math.abs(e.vy||0)>1.2?n="jump":r>3.2?(n="run",this.tRun+=t*r/4.2,s=this.tRun):r>.25&&(n="walk",this.tWalk+=t*r/1.7,s=this.tWalk),e.sitg&&!e.seated?n="sitg":e.crouch&&n!=="jump"&&!e.seated&&(n="crouch"),n==="jump"&&(s=Math.max(-1,Math.min(1,(e.vy||0)/7))),e.stun>0&&!e.seated&&(n="fall"),n==="idle"&&e.gesture&&(n=e.gesture),e.punch>0&&!e.seated&&(n="punch",s=e.punch),ef(this.ch,n,s,1);let o=Math.min(1,t*16);for(let a in this.ch.bones){let l=this.ch.bones[a],c=this.prev[a];if(!c.init||this.pose===n&&!1){c.q.copy(l.quaternion),c.p.copy(l.position),c.init=!0;continue}mp.copy(l.quaternion),c.q.slerp(mp,o),l.quaternion.copy(c.q),c.p.lerp(l.position,o),l.position.copy(c.p)}{let a=e.stun>.3?1:0;this.lie=(this.lie||0)+(a-(this.lie||0))*Math.min(1,t*(a?12:7)),this.lie>.004||a?(this.ch.group.rotation.x=-1.4*this.lie,this.hadLie=!0):this.hadLie&&(this.ch.group.rotation.x=0,this.hadLie=!1)}this.pose=n,this.seated=n==="sit"}dispose(){this.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:[e]).forEach(n=>n.dispose())}})}};var gp=[{top:"#e8e4d8",pants:"#3d4a63",skinTone:"#c68e63",hair:"#16110d"},{top:"#2f5d7a",pants:"#2a2a2e",skinTone:"#8d5a3b",hair:"#0d0a08"},{top:"#a83a3a",pants:"#1f2a44",skinTone:"#d9a077",hair:"#2a1a10"},{top:"#4d7a4f",pants:"#5a4a3a",skinTone:"#b07a52",hair:"#0d0a08"},{top:"#d6c15a",pants:"#2b2f3a",skinTone:"#e0ac85",hair:"#4a3020"},{top:"#6b5aa8",pants:"#3a3a44",skinTone:"#a8714e",hair:"#120d0a"},{top:"#f2f2f2",pants:"#54606e",skinTone:"#c68e63",hair:"#1a120c"},{top:"#8a5a32",pants:"#26303f",skinTone:"#7a4d32",hair:"#0a0806"},{top:"#3b3b44",pants:"#3b3b44",skinTone:"#d2996f",hair:"#16110d"},{top:"#c46a2a",pants:"#2a2f3a",skinTone:"#b98058",hair:"#120d0a"}],W_=i=>{let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)},xp=46,X_=xp*xp,Xc=class{constructor(t,e=14){this.scene=t,this.list=[];let n=W_(777),s=fe.GRID;for(let r=0;r<e;r++){let o=r%2,a=s[Math.floor(n()*s.length)],l=n()<.5?-1:1,c=-112,h=112,u=h-c;this.list.push({i:r,axis:o,g:a,off:l*8.1,lo:c,span:u,sp:1.25+n()*.5,ph:n()*2*u,look:gp[r%gp.length],actor:null,x:0,z:0,yaw:0,st:"walk",hitT:0,vx:0,vz:0,vy:0,y:0,lie:0,wait:0,pause:0,prevS:0,hp:0,hpMax:0,brave:!1,fear:0,timer:0,dx:0,dz:0,punchT:0,atk:0,pend:!1});let f=this.list[this.list.length-1];f.hpMax=f.hp=2+Math.floor(n()*3),f.brave=n()<.4,f.fear=n()}}pose(t,e){let n=t.span*2,s=((e*t.sp+t.ph)%n+n)%n,r=s<t.span,o=r?s:n-s,a=t.lo+o;t.axis===0?(t.x=t.g+t.off,t.z=a,t.yaw=r?0:Math.PI):(t.x=a,t.z=t.g+t.off,t.yaw=r?Math.PI/2:-Math.PI/2)}update(t,e,n,s,r,o,a={}){for(let l of this.list){let c=0,h=null;if(l.st==="walk"){if(this.pose(l,e),r&&a.sit&&l.fear>.55){let x=r.x-l.x,m=r.z-l.z;x*x+m*m<36&&this.scare(l,r.x,r.z)}}else if(l.st==="cower")l.timer-=t,h="scared",l.timer<=0&&(l.st="flee",l.timer=4+Math.random()*2);else if(l.st==="flee")l.timer-=t,c=5.4,l.x+=l.dx*c*t,l.z+=l.dz*c*t,l.yaw=Math.atan2(l.dx,l.dz),l.timer<=0&&(l.st="gone",l.wait=0);else if(l.st==="fight")if(!r)l.st="flee",l.dx=Math.sin(l.yaw+Math.PI),l.dz=Math.cos(l.yaw+Math.PI),l.timer=3;else{let x=r.x-l.x,m=r.z-l.z,p=Math.hypot(x,m)||1;l.yaw=Math.atan2(x,m),p>16?(l.st="gone",l.wait=0):p>1.25&&l.punchT===0&&(c=3.6,l.x+=x/p*c*t,l.z+=m/p*c*t),l.atk-=t,l.punchT===0&&p<1.7&&l.atk<=0&&(l.punchT=.001,l.pend=!0,l.atk=1.4+Math.random()*.6,this.alarm(l.x,l.z,11,l)),l.punchT>0&&(l.punchT+=t/.45,l.pend&&l.punchT>=.42&&(l.pend=!1,p<2&&a.hitMe&&a.hitMe(l)),l.punchT>=1&&(l.punchT=0))}else l.st==="fly"?(l.vy-=9.81*t,l.x+=l.vx*t,l.z+=l.vz*t,l.y+=l.vy*t,l.vx*=Math.exp(-.6*t),l.vz*=Math.exp(-.6*t),l.y<=0&&(l.y=0,l.vx*=.3,l.vz*=.3,Math.abs(l.vy)>1.5?l.vy=-l.vy*.25:(l.vy=0,l.st="lie",l.wait=0)),l.lie=Math.min(1,l.lie+t*4)):l.st==="lie"?(l.wait+=t,l.vx=l.vz=0,l.wait>5&&(l.st="gone",l.wait=0)):l.st==="gone"&&(l.wait+=t,l.wait>6&&(l.st="walk",l.lie=0,l.y=0,l.hp=l.hpMax,l.punchT=0));let u=l.x-n.x,f=l.z-n.z;if(!(l.st!=="gone"&&u*u+f*f<X_)){l.actor&&(l.actor.group.visible=!1),l.prevS=0;continue}l.actor||(l.actor=new hs(l.i,l.look),this.scene.add(l.actor.group));let g=l.actor;if(g.group.visible=!0,l.st==="walk")if(r){let x=r.x-l.x,m=r.z-l.z;c=x*x+m*m<1.3?0:l.sp}else c=l.sp;if(l.st==="walk"||l.st==="flee"||l.st==="cower"||l.st==="fight")for(let x of s){if(Math.abs(x.speed)<2.5||x.y>1)continue;let m=l.x-x.x,p=l.z-x.z,v=Math.sin(x.yaw),T=Math.cos(x.yaw),E=m*v+p*T,_=-m*T+p*v;if(Math.abs(E)<(x.hl||2.2)+.35&&Math.abs(_)<(x.hw||1)+.35){l.st="fly",l.vx=x.vx*.85+-T*(_>0?1:-1)*1.2,l.vz=x.vz*.85+v*(_>0?1:-1)*1.2,l.vy=2.6+Math.min(4,Math.abs(x.speed)*.14),l.lie=0,c=0,this.alarm(l.x,l.z,14,l),o&&o(l,Math.abs(x.speed));break}}g.group.position.set(l.x,l.y,l.z),g.group.rotation.y=l.yaw,g.group.rotation.x=-1.45*(l.st==="fly"||l.st==="lie"?l.lie:0),g.update(t,{speed:c,grounded:l.st!=="fly",vy:l.st==="fly"?3:0,stun:0,seated:!1,gesture:h,punch:l.punchT})}}alarm(t,e,n,s){for(let r of this.list){if(r===s||r.st!=="walk"||r.brave)continue;let o=r.x-t,a=r.z-e;o*o+a*a<n*n&&this.scare(r,t,e)}}scare(t,e,n){let s=t.x-e,r=t.z-n,o=Math.hypot(s,r)||1;t.dx=s/o,t.dz=r/o,t.yaw=Math.atan2(t.dx,t.dz),Math.random()<.5?(t.st="cower",t.timer=1.5+Math.random()*1.5,t.yaw=Math.atan2(-t.dx,-t.dz)):(t.st="flee",t.timer=4+Math.random()*2)}punch(t,e,n,s,r){let o=null,a=9;for(let l of this.list){if(l.st!=="walk"&&l.st!=="flee"&&l.st!=="cower"&&l.st!=="fight")continue;let c=l.x-t,h=l.z-e,u=c*c+h*h;u>3.4||u<1e-4||(c*n+h*s)/Math.sqrt(u)<.3||u<a&&(a=u,o=l)}return o?(o.hp-=1,o.hp<=0?(o.st="fly",o.vx=n*4.5,o.vz=s*4.5,o.vy=3.2,o.lie=0,o.punchT=0):o.brave?(o.st="fight",o.atk=.5,o.punchT=0,o.pend=!1,o.vx=o.vz=0):(o.st=Math.random()<.5?"cower":"flee",o.timer=o.st==="cower"?1:5,o.dx=n,o.dz=s,o.yaw=Math.atan2(n,s)),this.alarm(o.x,o.z,12,o),r&&r(o,o.hp<=0),!0):!1}dispose(){for(let t of this.list)t.actor&&(this.scene.remove(t.actor.group),t.actor.dispose());this.list.length=0}};var nf=760,Ie=380;function q_(){let i=document.createElement("canvas");i.width=i.height=nf;let t=i.getContext("2d");t.fillStyle="#2c78ad",t.fillRect(0,0,nf,nf),t.fillStyle="#8dbf78",t.beginPath(),t.roundRect?t.roundRect(Ie-335,Ie-335,670,670,60):t.rect(Ie-335,Ie-335,670,670),t.fill(),t.fillStyle="#e8dfb4",t.lineWidth=0;{let r=fe.MT,o=t.createRadialGradient(Ie+r.cx,Ie+r.cz,8,Ie+r.cx,Ie+r.cz,r.R+10);o.addColorStop(0,"#f4f6fa"),o.addColorStop(.35,"#b7a98c"),o.addColorStop(1,"rgba(120,150,95,0)"),t.fillStyle=o,t.beginPath(),t.arc(Ie+r.cx,Ie+r.cz,r.R+10,0,7),t.fill()}for(let[r,o,a]of[[210,-210,70],[235,205,62],[-205,215,66],[40,-300,60],[-40,300,55]])t.fillStyle="rgba(95,140,80,.55)",t.beginPath(),t.arc(Ie+r,Ie+o,a*.8,0,7),t.fill();for(let r of[-90,-30,30,90])for(let o of[-90,-30,30,90]){let a=ls.some(l=>l[0]===r&&l[1]===o);t.fillStyle=a?"#6fc24f":"#cfd3d9",t.fillRect(Ie+r-23.5,Ie+o-23.5,47,47)}t.fillStyle="#8f98a6";for(let r of Oc())t.fillRect(Ie+r.x-r.w/2,Ie+r.z-r.d/2,r.w,r.d);let e=(r,o)=>{t.lineCap="round",t.lineJoin="round",t.strokeStyle="#f4f4f4",t.lineWidth=o+3,t.beginPath(),r.forEach((a,l)=>l?t.lineTo(Ie+a[0],Ie+a[1]):t.moveTo(Ie+a[0],Ie+a[1])),t.stroke(),t.strokeStyle="#4a4f59",t.lineWidth=o,t.beginPath(),r.forEach((a,l)=>l?t.lineTo(Ie+a[0],Ie+a[1]):t.moveTo(Ie+a[0],Ie+a[1])),t.stroke()},n=fe.HW*2;for(let r of fe.GRID)e([[r,-120],[r,120]],n),e([[-120,r],[120,r]],n);e([[-120,-120],[-140.8,-140.8]],n);{let r=[];for(let o=0;o<=90;o++){let a=Xr(o/90);r.push([a.x,a.z])}e(r,n)}e([[fe.HWY.ax,0],[fe.HWY.bx,0]],n),t.fillStyle="#4a4f59",t.beginPath(),t.arc(Ie+fe.HWY.bx,Ie,14,0,7),t.fill();for(let r of qr)t.fillStyle=r.color,t.fillRect(Ie+r.x-6,Ie+r.z-4.3-3*Math.cos(r.yaw),12,8.6);let s=Cn.shop;return t.fillStyle="#ffb02e",t.fillRect(Ie+s.x-s.w/2,Ie+s.z-s.d/2,s.w,s.d),i}var qc=class{constructor(t){this.cv=t,this.g=t.getContext("2d"),this.map=null,this.R=95,this.t=0,this.resize()}resize(){let t=Math.min(2,window.devicePixelRatio||1),e=this.cv.clientWidth||150;this.cv.width=this.cv.height=Math.round(e*t)}draw(t,e,n,s){if(this.t+=s||0,this.t<.033)return;this.t=0,this.map||(this.map=q_());let r=this.g,o=this.cv.width;if(!o){this.resize();return}let a=o/2/this.R,l=t.head-Math.PI,c=Math.cos(l),h=Math.sin(l);r.save(),r.clearRect(0,0,o,o),r.beginPath(),r.arc(o/2,o/2,o/2-1,0,7),r.clip(),r.fillStyle="#2c78ad",r.fillRect(0,0,o,o),r.translate(o/2,o/2),r.scale(a,a),r.rotate(l),r.translate(-t.x,-t.z),r.drawImage(this.map,-Ie,-Ie),r.restore();let u=(m,p)=>{let v=m-t.x,T=p-t.z;return[o/2+(v*c-T*h)*a,o/2+(v*h+T*c)*a]},f=(m,p,v,T,E)=>{let[_,b]=u(m,p),S=_-o/2,y=b-o/2,w=Math.hypot(S,y),A=o/2-E-3;w>A&&(_=o/2+S/w*A,b=o/2+y/w*A),r.fillStyle=v,r.strokeStyle="#fff",r.lineWidth=Math.max(1.5,o/90),r.beginPath(),r.arc(_,b,E,0,7),r.fill(),r.stroke(),r.font=Math.round(E*1.25)+"px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle="#fff",r.fillText(T,_,b+1)},d=Math.max(8,o/14);f(Cn.x,Cn.z,"#e8890c","\u{1F527}",d);for(let m of qr)f(m.x,m.z,m.color,"\u{1F3E0}",d*.85);for(let m of n||[]){let[p,v]=u(m.x,m.z);Math.hypot(p-o/2,v-o/2)>o/2-4||(r.fillStyle=m.color||"#ff5f5f",r.strokeStyle="#fff",r.lineWidth=Math.max(1.5,o/100),r.beginPath(),r.arc(p,v,o/40,0,7),r.fill(),r.stroke())}r.save(),r.translate(o/2,o/2),r.rotate(-(e.yaw-t.head));let g=o/22;r.fillStyle="#ffffff",r.strokeStyle="#13203a",r.lineWidth=Math.max(1.5,o/100),r.beginPath(),r.moveTo(0,-g*1.4),r.lineTo(g,g),r.lineTo(0,g*.5),r.lineTo(-g,g),r.closePath(),r.fill(),r.stroke(),r.restore(),r.strokeStyle="rgba(255,255,255,.9)",r.lineWidth=Math.max(2,o/60),r.beginPath(),r.arc(o/2,o/2,o/2-r.lineWidth/2,0,7),r.stroke();let x=Math.atan2(-h*-1,c*0);{let[m,p]=u(t.x,t.z-1e3),v=m-o/2,T=p-o/2,E=Math.hypot(v,T)||1,_=o/2-o/22;r.fillStyle="#d62828",r.beginPath(),r.arc(o/2+v/E*_,o/2+T/E*_,o/28,0,7),r.fill(),r.fillStyle="#fff",r.font="bold "+Math.round(o/22)+"px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("N",o/2+v/E*_,o/2+T/E*_+1)}}};var xa={fun:{top:"#35a7ff",horizon:"#e8fbff",bottom:"#fff6d8",fog:"#d9f4ff",fogNear:120,fogFar:640,sun:"#fff4d6",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#d4ecff",hemiGround:"#bfe8a0",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.6},jungle:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},annoy:{top:"#4a3aa8",horizon:"#ffb3d1",bottom:"#ffe9f3",fog:"#f5b8dc",fogNear:90,fogFar:520,sun:"#ffe0c8",sunPos:[-40,70,-60],sunI:2.4,hemiSky:"#e8d6ff",hemiGround:"#ffb7dc",hemiI:1.05,exp:1.05,waterA:"#7fe8ff",waterB:"#2b9be8",water:"water",env:.6},maze:{top:"#5cc8ff",horizon:"#ffe0f0",bottom:"#fff4fb",fog:"#ffd6ea",fogNear:90,fogFar:520,sun:"#fff0d8",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#ffe6f6",hemiGround:"#ffb7dc",hemiI:1.1,exp:1.05,waterA:"#7fe8ff",waterB:"#2b9be8",water:"water",env:.6},arena:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},gta:{top:"#2f6fcf",horizon:"#ffd7a3",bottom:"#fde8c8",fog:"#ecd0a8",fogNear:180,fogFar:950,sun:"#ffc98a",sunPos:[-75,46,62],sunI:3.6,hemiSky:"#a9c8f0",hemiGround:"#a08662",hemiI:.75,exp:1,waterA:"#37c4e8",waterB:"#1388c9",water:"water",env:.7},hunt:{top:"#2f8fd8",horizon:"#d6f0b8",bottom:"#eefad0",fog:"#bfe3a8",fogNear:60,fogFar:340,sun:"#fff0c0",sunPos:[-50,80,-40],sunI:2.5,hemiSky:"#cfe9ff",hemiGround:"#5fae52",hemiI:1.05,exp:1.02,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},quest:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55}},sf=null;function yp(){return sf||(sf=(async()=>{try{await Promise.race([Promise.all([document.fonts.load('400 100px "Lilita One"'),document.fonts.load('400 100px "Fredoka One"'),document.fonts.load('400 100px "Noto Nastaliq Urdu"',"\u0639\u06A9\u0631\u0645\u06C1")]),new Promise(i=>setTimeout(i,2500))])}catch{}})()),sf}var Yc='"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function rf(i="HARIS",t=null,e=["#fff7a8","#ffc83d","#ff7a1a"]){let n=document.createElement("canvas");n.width=1024,n.height=t?512:400;let s=n.getContext("2d");s.textAlign="center",s.textBaseline="middle";let r=300;for(s.font=`${r}px ${Yc}`;s.measureText(i).width>900&&r>80;)r-=10,s.font=`${r}px ${Yc}`;let o=t?220:200;s.lineJoin="round",s.shadowColor="rgba(255,190,60,0.9)",s.shadowBlur=40,s.lineWidth=46,s.strokeStyle="rgba(255,170,40,0.35)",s.strokeText(i,512,o),s.shadowBlur=0,s.lineWidth=40,s.strokeStyle="#1b0f4a",s.strokeText(i,512,o),s.lineWidth=18,s.strokeStyle="#ffffff",s.strokeText(i,512,o),s.fillStyle="#b0420b";for(let c=14;c>0;c-=2)s.fillText(i,512,o+c);let a=s.createLinearGradient(0,o-r/2,0,o+r/2);a.addColorStop(0,e[0]),a.addColorStop(.55,e[1]),a.addColorStop(1,e[2]),s.fillStyle=a,s.fillText(i,512,o),s.globalCompositeOperation="source-atop",s.fillStyle="rgba(255,255,255,0.35)",s.fillRect(0,o-r/2,1024,r*.18),s.globalCompositeOperation="source-over",t&&(s.font=`90px ${Yc}`,s.lineWidth=16,s.strokeStyle="#1b0f4a",s.strokeText(t,512,440),s.fillStyle="#ffffff",s.fillText(t,512,440));let l=new tn(n);return l.colorSpace=De,l.anisotropy=8,l}function Y_(i,t="#ff3b6b",e="#ffffff"){let n=document.createElement("canvas");n.width=1024,n.height=256;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,1024,256);let r=32;s.fillStyle=e;for(let a=0;a<1024;a+=r)for(let l=0;l<256;l+=r)(a+l)/r%2===0&&(l<r||l>=256-r)&&s.fillRect(a,l,r,r);s.font=`150px ${Yc}`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.lineWidth=26,s.strokeStyle="#1b0f4a",s.strokeText(i,512,132),s.fillStyle="#fff",s.fillText(i,512,132);let o=new tn(n);return o.colorSpace=De,o.anisotropy=8,o}function vp(){let i=document.createElement("canvas");i.width=128,i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="rgba(0,0,0,0.28)",t.beginPath(),t.moveTo(64,14),t.lineTo(108,70),t.lineTo(80,70),t.lineTo(80,112),t.lineTo(48,112),t.lineTo(48,70),t.lineTo(20,70),t.closePath(),t.fill();let e=new tn(i);return e.colorSpace=De,e.anisotropy=4,e}function Z_(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new tn(e);return r.colorSpace=De,r}function of(i){let t=new U(...i.sunPos).normalize(),e=new en({side:on,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ht(i.top)},horizon:{value:new Ht(i.horizon)},bottom:{value:new Ht(i.bottom)},sunDir:{value:t},sunColor:{value:new Ht(i.sun)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        gl_FragColor = vec4(c, 1.0); }`}),n=new et(new _e(900,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function af(i,t){let e=new Ht(i.fog),n=i.water==="lava"?1:i.water==="grid"?2:0,s=new en({uniforms:{time:{value:0},cA:{value:new Ht(i.waterA)},cB:{value:new Ht(i.waterB)},fogC:{value:e},fogN:{value:i.fogNear},fogF:{value:i.fogFar},kind:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
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
      }`}),r=new et(new ke(1600,1600),s);return r.rotation.x=-Math.PI/2,r.position.y=t,r.frustumCulled=!1,r.renderOrder=-5,r.userData.mat=s,r}var ma=class{constructor(t=500){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.s0=new Float32Array(t);let e=new Ee;e.setAttribute("position",new Ae(this.pos,3).setUsage(zr)),e.setAttribute("color",new Ae(this.col,3).setUsage(zr)),e.setAttribute("size",new Ae(this.size,1).setUsage(zr)),e.setAttribute("alpha",new Ae(this.alpha,1).setUsage(zr)),e.setDrawRange(0,0),this.mat=new en({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }"}),this.points=new Er(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=e,this._c=new Ht}emit(t,e,n,s,r={}){var a,l,c,h,u,f,d,g;let o=this._c.set((a=r.color)!=null?a:"#ffffff");for(let x=0;x<s;x++){let m=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),p=Math.random()*Math.PI*2,v=((l=r.speed)!=null?l:3)*(.3+Math.random()*.9),T=(c=r.up)!=null?c:3,E=m*3;this.pos[E]=t+(Math.random()-.5)*((h=r.spread)!=null?h:.3),this.pos[E+1]=e,this.pos[E+2]=n+(Math.random()-.5)*((u=r.spread)!=null?u:.3),this.vel[E]=Math.cos(p)*v,this.vel[E+1]=T*(.4+Math.random()*.9),this.vel[E+2]=Math.sin(p)*v;let _=r.rainbow?this._c.setHSL(Math.random(),.9,.6):o;this.col[E]=_.r,this.col[E+1]=_.g,this.col[E+2]=_.b,this.life[m]=this.maxLife[m]=((f=r.life)!=null?f:.6)*(.6+Math.random()*.8),this.s0[m]=((d=r.size)!=null?d:.35)*(.6+Math.random()*.8),this.size[m]=this.s0[m],this.grav[m]=(g=r.gravity)!=null?g:9,this.alpha[m]=1}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.alpha[e]=0,this.size[e]=0;continue}this.life[e]-=t;let n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let s=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=Math.min(1,s*1.6),this.size[e]=this.s0[e]*(.4+.6*s)}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setScale(t){this.mat.uniforms.scale.value=t*.9}},ga=class{constructor(t,e=350){this.kind=t,this.n=e;let n=new Float32Array(e*3);this.seed=new Float32Array(e*3);for(let o=0;o<e*3;o++)this.seed[o]=Math.random();let s=new Ee;s.setAttribute("position",new Ae(n,3));let r={fun:"#fff6a8",jungle:"#fffbb0",quest:"#fff6c0",hunt:"#fff6c0",gta:"#fffbe0",maze:"#ffe6f6",annoy:"#ffe6f6"};this.mat=new br({color:r[t]||"#fff",size:t==="frost"?.28:.22,transparent:!0,opacity:.85,depthWrite:!1,map:Z_(),blending:t==="neon"||t==="canyon"?xi:Qi}),this.points=new Er(s,this.mat),this.points.frustumCulled=!1,this.pos=n}update(t,e){let r=this.kind,o=this.pos,a=this.seed;for(let l=0;l<this.n;l++){let c=l*3,h=a[c]*70,u=a[c+1]*36,f=a[c+2]*70;r==="frost"?(u=36-(t*(2+a[c]*2)+a[c+1]*36)%36,h+=Math.sin(t*.7+l)*1.2):r==="canyon"?(u=(t*(1.5+a[c]*2)+a[c+1]*36)%36,h+=Math.sin(t*.9+l)*.8):(u+=Math.sin(t*.6+l)*.8,h+=Math.cos(t*.4+l*1.3)*.8),o[c]=e.x+((h-e.x)%70+70)%70-70/2,o[c+1]=e.y-36/2+u,o[c+2]=e.z+((f-e.z)%70+70)%70-70/2}this.points.geometry.attributes.position.needsUpdate=!0}};function J_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function _p(i,t,e,n){let s=xa[t],r=new Zt;r.name="scenery";let o=J_(t.length*9973+17),a=new Ps,l=new Ps,c=e.length,h=-c-40,u=0,f=82,d=[],g=(_,b)=>(o()<.5?-1:1)*(_+f+o()*(b-_)),x=_=>_[Math.floor(o()*_.length)],m=(_,b=16,S=10)=>new _e(_,b,S),p=(_,b,S,y=14)=>new It(_,b,S,y),v=(_,b,S=14)=>new _n(_,b,S);if(t==="fun"){for(let _=0;_<46;_++){let b=70-o()*(c+200),S=g(26,140),y=1+o()*1.8,w=o(),A=u-1;if(w<.4){let L=x(["#ff4d6d","#3ec6e0","#ffd23f","#8b5cf6"]);a.add(p(6*y,6*y,5*y,16),S,A+2.5*y,b,L),a.add(v(6.8*y,5*y,16),S,A+7.5*y,b,"#ffffff"),a.add(v(1.1*y,3*y,8),S,A+11*y,b,L),a.add(p(.12*y,.12*y,4*y,4),S,A+14*y,b,"#ffffff")}else if(w<.7){for(let L=0;L<8;L++)a.add(p(2.2*y,2.2*y,2.4*y,12),S,A+(1.2+L*2.4)*y,b,L%2?"#ffffff":"#ff4d6d");a.add(v(3*y,4*y,12),S,A+21*y,b,"#ffd23f")}else a.add(p(.3*y,.4*y,9*y,6),S,A+4.5*y,b,"#5b2a86"),l.add(m(1.1*y,10,8),S,A+9.6*y,b,x(["#ffe27a","#ff9ccb","#9cf0ff"]))}[[-120,-c*.25],[140,-c*.62],[-130,-c*.9]].forEach(([_,b],S)=>{let y=new Zt;y.position.set(_,u+34,b),y.rotation.y=S%2?.5:-.5;let w=new et(new Ce(30,.9,8,48),new ne({color:"#ffffff",roughness:.4}));y.add(w);let A=new ne({color:"#ff4d6d"});for(let P=0;P<8;P++){let C=new et(p(.35,.35,60,5),A);C.rotation.z=P*Math.PI/8,y.add(C)}let L=[];for(let P=0;P<12;P++){let C=P/12*Math.PI*2,I=new et(new Qt(4.4,3.4,3.4),new ne({color:x(["#ffd23f","#3ec6e0","#ff4d6d","#8bd450"]),roughness:.35}));I.position.set(Math.cos(C)*30,Math.sin(C)*30-2,0),y.add(I),L.push([I,C])}let M=new ne({color:"#5b2a86"});for(let P of[-1,1]){let C=new et(p(1.2,1.6,44,6),M);C.position.set(P*11,-20,0),C.rotation.z=P*-.28,y.add(C)}r.add(y),d.push(P=>{let C=P*.12*(S%2?-1:1);w.rotation.z=C,y.children.forEach(I=>{var z,O;I.geometry&&I.geometry.type==="CylinderGeometry"&&I.position.x===0&&I.position.y===0&&(I.rotation.z=((O=(z=I.userData).b)!=null?O:z.b=I.rotation.z)+C)}),L.forEach(([I,z])=>I.position.set(Math.cos(z+C)*30,Math.sin(z+C)*30-2,0))})});for(let _=0;_<26;_++){let b=new Zt,S=x(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),y=new et(m(1.6,16,12),new ne({color:S,roughness:.25}));y.scale.y=1.2;let w=new et(p(.03,.03,4,4),new Te({color:"#ffffff"}));w.position.y=-3,b.add(y,w),b.position.set(g(14,80),8+o()*34,40-o()*(c+120)),b.userData.ph=o()*6,r.add(b),d.push(A=>{b.position.y+=Math.sin(A*.8+b.userData.ph)*.004,b.rotation.z=Math.sin(A*.6+b.userData.ph)*.08})}}else if(t==="jungle"){for(let _=0;_<90;_++){let b=o()*Math.PI*2,S=120+o()*90,y=150+o()*90,w=Math.cos(b)*S,A=-108+Math.sin(b)*y,L=1.4+o()*2.4;a.add(p(.7*L,1*L,9*L,6),w,4.5*L,A,"#6b4423"),a.add(m(4.4*L,8,6),w,11*L,A,x(["#2e9b3f","#3fb14c","#27863a"]))}for(let _=0;_<16;_++){let b=_/16*Math.PI*2+o()*.3,S=Math.cos(b)*(260+o()*60),y=-108+Math.sin(b)*(300+o()*60),w=1+o()*1.4;a.add(v(40*w,70*w,7),S,30*w,y,x(["#5f9a7a","#6aa88a","#4f8a6c"])),a.add(v(14*w,20*w,7),S,66*w,y,"#ffffff")}for(let _=0;_<26;_++){let b=new Zt,S=(o()-.5)*520,y=-108+(o()-.5)*520,w=85+o()*50,A=3+Math.floor(o()*3);for(let L=0;L<A;L++){let M=new et(m(7+o()*6,10,8),new Te({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));M.position.set(L*9-A*4,o()*3,o()*5),M.scale.y=.55,b.add(M)}b.position.set(S,w,y),b.userData.ph=o()*6,r.add(b),d.push(L=>{b.position.x+=.012*(1+b.userData.ph%1),b.position.x>300&&(b.position.x=-300)})}}else if(t==="gta")for(let _=0;_<46;_++){let b=new Zt,S=(o()-.5)*900,y=(o()-.5)*900,w=130+o()*70,A=3+Math.floor(o()*3);for(let L=0;L<A;L++){let M=new et(m(8+o()*8,10,8),new Te({color:"#ffffff",transparent:!0,opacity:.92,fog:!1}));M.position.set(L*11-A*5,o()*4,o()*6),M.scale.y=.6,b.add(M)}b.position.set(S,w,y),b.userData.ph=o()*6,r.add(b),d.push(L=>{b.position.x+=.02*(1+b.userData.ph%1),b.position.x>480&&(b.position.x=-480)})}else if(t==="quest"||t==="hunt"||t==="maze"||t==="annoy")for(let _=0;_<40;_++){let b=new Zt,S=(o()-.5)*420,y=40-o()*(t==="maze"?860:640),w=70+o()*50,A=3+Math.floor(o()*3);for(let L=0;L<A;L++){let M=new et(m(6+o()*6,10,8),new Te({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));M.position.set(L*8-A*4,o()*3,o()*5),M.scale.y=.55,b.add(M)}b.position.set(S,w,y),b.userData.ph=o()*6,r.add(b),d.push(L=>{b.position.x+=.012*(1+b.userData.ph%1),b.position.x>260&&(b.position.x=-260)})}if(t==="maze"){let _=["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#b58cff","#ff9f1c"];for(let b=0;b<100;b++){let S=30-b*8.6-o()*4,y=b%2?1:-1,w=y*(24+o()*55),A=_[Math.floor(o()*_.length)],L=Math.floor(o()*3),M=.8+o()*.9;L===0?(a.add(p(.6*M,.6*M,16*M,8),w,-3+8*M,S,"#ffffff"),a.add(m(4.4*M,18,12),w,-3+17*M,S,A),a.add(new Ce(3*M,.55*M,8,20),w,-3+17*M,S+3.4*M,"#ffffff")):L===1?(a.add(new Ce(5*M,2.2*M,10,22).rotateX(Math.PI/2),w,-2.2+2.2*M,S,"#e8b878"),a.add(new Ce(5*M,1.7*M,10,22).rotateX(Math.PI/2),w,-2.2+3.1*M,S,A)):(a.add(v(3.4*M,9*M,14).rotateX(Math.PI),w,-3+4.5*M,S,"#e8b878"),a.add(m(3.8*M,16,10),w,-3+10*M,S,A),a.add(m(1.2*M,10,8),w,-3+14*M,S,"#ff3d68"))}}let T=a.build(new ne({vertexColors:!0,roughness:.55}));T&&(T.castShadow=!1,T.receiveShadow=!1,r.add(T));let E=l.build(new Te({vertexColors:!0,toneMapped:!1}));if(E&&r.add(E),t!=="jungle"&&t!=="quest"&&t!=="arena"&&t!=="hunt"&&t!=="gta"){let _=new Zt;_.name="brand",r.add(_);let b=rf("HARIS","MADE THIS GAME"),S=e.finishPlat,y=L=>new ne({color:L,roughness:.4}),w=(L,M,P,C,I)=>{let z=new Zt;z.position.set(0,M,L);let O=y("#2b1c6b");for(let X of[-1,1]){let Z=new et(new Qt(1.2,9,1.2),O);Z.position.set(X*P/2,4.5,0),Z.castShadow=!0,z.add(Z)}let V=new et(new ke(P,P/4),new Te({map:Y_(C,I),toneMapped:!1,side:fn}));V.position.set(0,8.6,.05),z.add(V);let G=new et(new Qt(P+1.2,.6,1.2),O);G.position.set(0,10.4,0),z.add(G),_.add(z)};w(e.startArch,0,20,"START","#22c55e"),w(e.finishZ+.01,S.top,19,"FINISH","#ef233c");let A=new et(new ke(30,15),new Te({map:b,transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}));A.position.set(0,S.top+21,e.finishZ-.5),_.add(A),d.push(L=>{A.position.y=S.top+21+Math.sin(L*1.2)*.4})}return i.add(r),{group:r,update(_,b){for(let S of d)S(_);r.userData.stars&&r.userData.stars.position.copy(b)},dispose(){i.remove(r),r.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(S=>{S.map&&S.map.dispose(),S.dispose()})})}}}var St=null,zs=null,bi=null,fs=null,Bs=null,Mp=!1;var Jc=null,us=null;function Oi(){if(St){St.state==="suspended"&&St.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;St=new i,zs=St.createGain(),zs.gain.value=Mp?0:.9,zs.connect(St.destination),bi=St.createGain(),bi.gain.value=.7,bi.connect(zs),fs=St.createGain(),fs.gain.value=.22,fs.connect(zs);let t=St.sampleRate;Bs=St.createBuffer(1,t,St.sampleRate);let e=Bs.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}function bp(i){Mp=i,zs&&zs.gain.setTargetAtTime(i?0:.9,St.currentTime,.05)}function te(i,t,e,n,s=.3,r=0,o=bi){if(!St)return;let a=St.currentTime+r,l=St.createOscillator(),c=St.createGain();l.type=i,l.frequency.setValueAtTime(t,a),e!==t&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+n),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(s,a+.012),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c),c.connect(o),l.start(a),l.stop(a+n+.05)}function nn(i,t,e,n,s,r=0,o=1){if(!St)return;let a=St.currentTime+r,l=St.createBufferSource();l.buffer=Bs,l.loop=!0;let c=St.createBiquadFilter();c.type=e,c.Q.value=o,c.frequency.setValueAtTime(n,a),c.frequency.exponentialRampToValueAtTime(Math.max(30,s),a+i);let h=St.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(t,a+.015),h.gain.exponentialRampToValueAtTime(1e-4,a+i),l.connect(c),c.connect(h),h.connect(bi),l.start(a),l.stop(a+i+.05)}var $_=(i,t)=>i+Math.random()*(t-i),Wt={click(){te("triangle",520,780,.09,.25)},roar(i=1){te("sawtooth",i?180:260,i?60:110,.5,.22),te("square",i?120:200,50,.4,.12,.03),nn(.4,.14,"lowpass",800,200)},tame(){te("triangle",520,780,.12,.25),te("triangle",660,990,.12,.25,.1),te("triangle",880,1320,.2,.25,.2)},select(){te("triangle",660,990,.12,.28),te("sine",990,1320,.1,.18,.06)},back(){te("triangle",520,330,.12,.22)},jump(){te("sine",280,640,.17,.3),te("triangle",420,880,.12,.08,.02)},land(i=10){let t=Math.min(.5,.12+i*.012);te("sine",140,60,.12,t),nn(.09,t*.7,"lowpass",900,200)},step(){nn(.045,.07,"bandpass",$_(500,800),300,0,2)},dive(){nn(.3,.22,"bandpass",500,2200,0,1.5),te("sine",300,520,.2,.15)},bounce(){te("sine",180,920,.3,.38),te("triangle",360,1400,.22,.12,.03)},pickup(){te("triangle",520,1040,.18,.3),te("sine",780,1560,.24,.2,.07),te("sine",1170,2340,.2,.12,.14)},swing(){nn(.24,.3,"bandpass",500,2800,0,1.2),te("sine",380,160,.16,.08)},shot(){te("sawtooth",900,140,.11,.3),nn(.09,.4,"highpass",2500,900),te("square",200,60,.12,.18)},bonk(){te("square",190,55,.2,.42),nn(.14,.45,"lowpass",3e3,300),te("triangle",820,220,.22,.22,.02)},hit(){te("sawtooth",420,70,.28,.28),nn(.18,.3,"lowpass",1800,150),te("square",220,110,.15,.12,.04)},door(){te("square",150,90,.07,.3),te("square",110,70,.1,.25,.09),nn(.05,.18,"lowpass",2e3,400)},honk(){te("square",392,392,.34,.2),te("square",494,494,.34,.2)},honkBig(){te("sawtooth",130,128,.95,.3),te("square",164,162,.95,.24),te("sawtooth",196,194,.95,.22),te("square",262,258,.95,.14),nn(.12,.12,"lowpass",900,300)},skid(){nn(.18,.1,"bandpass",2600,1800,0,3)},vroom(){te("sawtooth",70,160,.35,.2),te("sawtooth",90,210,.3,.1,.05)},splash(){nn(.6,.45,"bandpass",1800,260,0,.8),nn(.3,.2,"highpass",2400,900,.05),te("sine",220,80,.3,.12)},respawn(){nn(.4,.22,"highpass",400,4e3,0,.7),te("sine",300,900,.3,.15)},checkpoint(){te("sine",660,660,.14,.3),te("sine",990,990,.25,.3,.1),te("triangle",1320,1320,.3,.1,.18)},tick(){te("sine",660,660,.14,.4)},go(){[523,659,784].forEach(i=>te("square",i,i,.5,.14)),te("sine",1046,1046,.6,.3)},join(){te("triangle",520,520,.1,.25),te("triangle",780,780,.14,.25,.09)},finish(){[523,659,784,1046,1318].forEach((i,t)=>{te("square",i,i,.22,.14,t*.09),te("triangle",i*2,i*2,.3,.08,t*.09)})},win(){[523,659,784,659,784,1046,1318].forEach((t,e)=>{te("square",t,t,.24,.13,e*.12),te("triangle",t/2,t/2,.3,.12,e*.12)})},lose(){[392,349,311,262].forEach((i,t)=>te("triangle",i,i*.97,.3,.22,t*.17))},warn(){te("square",880,880,.08,.14)}},K_={major:[0,2,4,7,9,12,14,16],minor:[0,3,5,7,10,12,15,17],lydian:[0,2,4,6,7,9,11,12],dorian:[0,2,3,5,7,9,10,12]},lf=[{bpm:112,root:65,scale:"lydian",prog:[0,5,3,4],lead:"triangle",bright:3400},{bpm:124,root:57,scale:"dorian",prog:[0,3,4,0],lead:"triangle",bright:3e3},{bpm:128,root:62,scale:"lydian",prog:[0,4,5,3],lead:"triangle",bright:3400},{bpm:132,root:64,scale:"major",prog:[0,4,3,4],lead:"triangle",bright:3400},{bpm:138,root:67,scale:"major",prog:[0,5,3,4],lead:"triangle",bright:3800},{bpm:126,root:59,scale:"minor",prog:[0,5,3,4],lead:"triangle",bright:3200},{bpm:130,root:55,scale:"dorian",prog:[0,5,3,4],lead:"triangle",bright:3300},{bpm:104,root:57,scale:"dorian",prog:[0,5,3,4],lead:"sawtooth",bright:2400},{bpm:120,root:60,scale:"major",prog:[0,3,4,0],lead:"triangle",bright:3e3}],cf=i=>440*Math.pow(2,(i-69)/12);function hf(i,t,e,n,s,r){let o=St.createOscillator(),a=St.createGain(),l=St.createBiquadFilter();o.type=i,o.frequency.setValueAtTime(t,e),l.type="lowpass",l.frequency.value=r,a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(l),l.connect(a),a.connect(fs),o.start(e),o.stop(e+n+.05)}function j_(i,t){let e=St.createBufferSource();e.buffer=Bs;let n=St.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let s=St.createGain();s.gain.setValueAtTime(t,i),s.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(n),n.connect(s),s.connect(fs),e.start(i),e.stop(i+.06)}function Q_(i){let t=St.createOscillator(),e=St.createGain();t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(40,i+.12),e.gain.setValueAtTime(.55,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e),e.connect(fs),t.start(i),t.stop(i+.2)}function Zr(i){if($c(),!St)return;let t=lf[i]||lf[lf.length-1],e=K_[t.scale],n=60/t.bpm/4,s=1234+i*77,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=[];for(let l=0;l<4;l++){let c=[];for(let h=0;h<16;h++)c.push(h%4===0||r()<.38?Math.floor(r()*6):-1);o.push(c)}us={i:0,next:St.currentTime+.1};let a=()=>{if(!(!St||!us))for(;us.next<St.currentTime+.18;){let l=us.i,c=l%16,h=Math.floor(l/16)%4,u=t.prog[h]||0,f=us.next,d=t.root+e[u%e.length]-12;c%4===0&&Q_(f),c%2===0&&j_(f,c%4===2?.1:.05),(c%4===0||c%8===6)&&hf("triangle",cf(d-12),f,n*3.2,.4,600),c===0&&[0,2,4].forEach(x=>hf("sine",cf(t.root+e[(u+x)%e.length]),f,n*15,.07,1400));let g=o[h][c];g>=0&&hf(t.lead,cf(t.root+12+e[(g+u)%e.length]),f,n*1.8,.11,t.bright),us.next+=n,us.i++}};Jc=setInterval(a,40),a()}function $c(){Jc&&clearInterval(Jc),Jc=null,us=null}function Kc(i){fs&&fs.gain.setTargetAtTime(i?.08:.22,St.currentTime,.2)}var Mi=null;function Ep(){if(!St||Mi)return;let i=St.createGain();i.gain.value=1e-4;let t=St.createBiquadFilter();t.type="lowpass",t.frequency.value=500;let e=St.createOscillator(),n=St.createOscillator();e.type="sawtooth",n.type="square",e.frequency.value=60,n.frequency.value=30,e.connect(t),n.connect(t),t.connect(i),i.connect(bi),e.start(),n.start(),Mi={g:i,f:t,o1:e,o2:n}}function Sp(i,t){if(!St||!Mi)return;let e=St.currentTime,n=Math.max(0,Math.min(1,i)),s=52+n*150+(t?16:0);Mi.o1.frequency.setTargetAtTime(s,e,.08),Mi.o2.frequency.setTargetAtTime(s*.5,e,.08),Mi.f.frequency.setTargetAtTime(380+n*900+(t?300:0),e,.1),Mi.g.gain.setTargetAtTime(.05+n*.07+(t?.04:0),e,.1)}function uf(){if(!Mi)return;let i=Mi;Mi=null;try{i.g.gain.setTargetAtTime(1e-4,St.currentTime,.05),setTimeout(()=>{try{i.o1.stop(),i.o2.stop()}catch{}},300)}catch{}}var tM=null;try{window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{tM=null})}catch{}var Fs=null,va=null,Us=null,ya=null,Zc=null;function eM(){if(Zc)return Zc;let i=22,t=new Float32Array(i+1),e=new Float32Array(i+1);for(let n=1;n<=i;n++)e[n]=1/Math.pow(n,.85)*(n%2===0?.75:1)*(n===3?1.25:1);return Zc=St.createPeriodicWave(t,e),Zc}function wp(i={}){if(!St||Fs)return;let t=i.cyl||4,e=i.pitch||1,n=t>=6,s=St.createGain();s.gain.value=1e-4;let r=St.createBiquadFilter();r.type="lowpass",r.frequency.value=600,r.Q.value=.8;let o=St.createBiquadFilter();o.type="peaking",o.frequency.value=180,o.gain.value=6,o.Q.value=.9;let a=St.createWaveShaper(),l=new Float32Array(257);for(let E=0;E<257;E++){let _=E/128-1;l[E]=Math.tanh(_*2.4)}a.curve=l,a.oversample="2x";let c=St.createGain();c.gain.value=1;let h=St.createOscillator();h.setPeriodicWave(eM());let u=St.createOscillator();u.type="sawtooth";let f=St.createGain();f.gain.value=n?.5:.22;let d=St.createOscillator();d.type="square";let g=St.createGain();g.gain.value=.08,h.connect(c),u.connect(f),f.connect(c),d.connect(g),g.connect(c);let x=St.createBufferSource();x.buffer=Bs,x.loop=!0;let m=St.createBiquadFilter();m.type="bandpass",m.frequency.value=500,m.Q.value=.7;let p=St.createGain();p.gain.value=1e-4,x.connect(m),m.connect(p),c.connect(a),a.connect(r),r.connect(o),o.connect(s),p.connect(s),s.connect(bi);let v=St.createOscillator(),T=St.createGain();v.frequency.value=9,T.gain.value=0,v.connect(T),T.connect(s.gain),h.start(),u.start(),d.start(),x.start(),v.start(),Fs={out:s,lp:r,o1:h,o2:u,o3:d,ns:x,ng:p,nf:m,lfo:v,lg:T,cyl:t,pitch:e,body:o}}function Tp(i,t){if(!St||!Fs)return;let e=St.currentTime,n=Fs,s=Math.max(0,Math.min(1,i)),r=Math.max(0,Math.min(1,t)),o=(11+s*94)*n.pitch,a=o*n.cyl/2;n.o1.frequency.setTargetAtTime(a,e,.03),n.o2.frequency.setTargetAtTime(a*.5,e,.03),n.o3.frequency.setTargetAtTime(a*2,e,.03),n.lp.frequency.setTargetAtTime(380+s*1500+r*1700,e,.06),n.body.frequency.setTargetAtTime(110+s*260,e,.1);let l=Math.max(0,1-s*3.2);n.lfo.frequency.setTargetAtTime(Math.max(3,a/(n.cyl>=6?3:2)),e,.1),n.lg.gain.setTargetAtTime(.012*l,e,.1),n.out.gain.setTargetAtTime(.05+.04*s+.07*r,e,.06),n.nf.frequency.setTargetAtTime(350+s*1800,e,.1),n.ng.gain.setTargetAtTime(.004+.03*r*(.4+s),e,.08)}function ff(){if(!Fs)return;let i=Fs;Fs=null;try{i.out.gain.setTargetAtTime(1e-4,St.currentTime,.12),setTimeout(()=>{try{i.o1.stop(),i.o2.stop(),i.o3.stop(),i.ns.stop(),i.lfo.stop()}catch{}},700)}catch{}}function Ap(){St&&(te("sawtooth",38,55,.5,.1),te("square",70,110,.45,.04),nn(.5,.05,"bandpass",300,600,0,1))}function Rp(i=420){if(!St||va)return;let t=St.currentTime,e=St.createGain();e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(.26,t+.025);let n=St.createBiquadFilter();n.type="lowpass",n.frequency.value=3200,n.Q.value=.7;let s=St.createBiquadFilter();s.type="peaking",s.frequency.value=1400,s.gain.value=5,s.Q.value=.8;let r=St.createWaveShaper(),o=new Float32Array(257);for(let u=0;u<257;u++){let f=u/128-1;o[u]=Math.tanh(f*1.8)}r.curve=o;let a=St.createGain();a.gain.value=.5,a.connect(r),r.connect(n),n.connect(s),s.connect(e),e.connect(bi);let l=[];for(let[u,f]of[[i,"sawtooth"],[i*1.004,"square"],[i*1.26,"sawtooth"],[i*1.267,"square"],[i*2.02,"triangle"]]){let d=St.createOscillator();d.type=f,d.frequency.value=u;let g=St.createGain();g.gain.value=f==="triangle"?.25:.6,d.connect(g),g.connect(a),d.start(),l.push(d)}let c=St.createOscillator(),h=St.createGain();c.frequency.value=96,h.gain.value=.05,c.connect(h),h.connect(e.gain),c.start(),l.push(c),va={g:e,oscs:l,t0:t}}function Jr(){if(!St||!va)return;let i=va;va=null;let t=Math.max(0,.22-(St.currentTime-i.t0));setTimeout(()=>{try{let e=St.currentTime;i.g.gain.cancelScheduledValues(e),i.g.gain.setTargetAtTime(1e-4,e,.035),setTimeout(()=>{for(let n of i.oscs)try{n.stop()}catch{}},260)}catch{}},t*1e3)}function Cp(i){if(!St)return;if(!Us){let e=St.createBufferSource();e.buffer=Bs,e.loop=!0;let n=St.createBiquadFilter();n.type="bandpass",n.frequency.value=1900,n.Q.value=5;let s=St.createBiquadFilter();s.type="bandpass",s.frequency.value=1150,s.Q.value=3;let r=St.createGain();r.gain.value=1e-4,e.connect(n),e.connect(s),n.connect(r),s.connect(r),r.connect(bi),e.start(),Us={ns:e,g:r,b1:n}}let t=St.currentTime;Us.g.gain.setTargetAtTime(Math.max(1e-4,i*.16),t,.04),Us.b1.frequency.setTargetAtTime(1700+i*900,t,.1)}function df(){if(!Us)return;let i=Us;Us=null;try{i.g.gain.setTargetAtTime(1e-4,St.currentTime,.05),setTimeout(()=>{try{i.ns.stop()}catch{}},300)}catch{}}function $r(i=10){if(!St)return;let t=Math.max(.15,Math.min(1,i/22));te("sine",95,38,.32,.55*t),te("sawtooth",160,50,.22,.22*t),nn(.35,.5*t,"lowpass",2600,250),nn(.18,.3*t,"bandpass",900,2200,.01,1.4),i>11&&(nn(.5,.18*t,"highpass",5200,3200,.05,.9),te("triangle",3400,2500,.18,.05,.04))}function _a(i=!1){te("sine",i?130:105,i?90:55,.14,.3),nn(.06,i?.12:.22,"lowpass",2400,500),nn(.02,.1,"highpass",3500,2500,i?0:.07)}function pf(i){if(!St)return;if(!i){if(ya){let o=ya;ya=null;try{o.g.gain.setTargetAtTime(1e-4,St.currentTime,.4),setTimeout(()=>{try{o.ns.stop(),o.lfo.stop()}catch{}},1500)}catch{}}return}if(ya)return;let t=St.createBufferSource();t.buffer=Bs,t.loop=!0;let e=St.createBiquadFilter();e.type="lowpass",e.frequency.value=260;let n=St.createGain();n.gain.value=1e-4;let s=St.createOscillator(),r=St.createGain();s.frequency.value=.07,r.gain.value=.008,s.connect(r),r.connect(n.gain),t.connect(e),e.connect(n),n.connect(bi),t.start(),s.start(),n.gain.setTargetAtTime(.035,St.currentTime,1.2),ya={ns:t,g:n,lfo:s}}var jc=class{constructor(){this.ws=null,this.h={},this.offset=0,this.rtt=0,this.best=1/0,this.connected=!1,this.id=null,this.samples=0}now(){return Date.now()+this.offset}stamp(){let t=Math.round(Date.now()+this.offset);return this.lastStamp=Math.max(t,(this.lastStamp||0)+1),this.lastStamp}on(t,e){this.h[t]=e}connect(){return new Promise((t,e)=>{if(this.connected)return t();let n=location.protocol==="https:"?"wss":"ws",s;try{s=new WebSocket(`${n}://${location.host}/ws`)}catch(o){return e(o)}this.ws=s;let r=setTimeout(()=>{try{s.close()}catch{}e(new Error("timeout"))},8e3);s.onopen=()=>{clearTimeout(r),this.connected=!0;for(let o=0;o<8;o++)setTimeout(()=>this.ping(),o*140);this.pinger=setInterval(()=>this.ping(),2e3),t()},s.onmessage=o=>{let a;try{a=JSON.parse(o.data)}catch{return}if(a.t==="pong")return this.onPong(a);a.t==="joined"&&(this.id=a.id);let l=this.h[a.t];l&&l(a)},s.onclose=()=>{clearTimeout(r);let o=this.connected;this.connected=!1,clearInterval(this.pinger),o&&this.h.close?this.h.close():e(new Error("closed"))},s.onerror=()=>{}})}ping(){this.send({t:"ping",c:Date.now()})}onPong(t){let e=Date.now(),n=e-t.c;this.rtt=this.rtt?this.rtt*.7+n*.3:n;let s=t.s+n/2-e;(n<=this.best*1.25||this.samples<3)&&(this.offset=this.samples<8?n<=this.best?s:this.offset:this.offset*.8+s*.2,this.best=Math.min(this.best,n)),this.samples++,this.samples%10===0&&(this.best=this.best*1.3+2)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}this.connected=!1,clearInterval(this.pinger)}};var Ip=`
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
`;function Pp(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new en({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},rect:{value:new Pe(i.x0,i.z0,i.x1,i.z1)},depth:{value:i.surf-i.bottom},sunDir:{value:new U(-.35,.8,-.5).normalize()},skyTop:{value:new Ht("#4aa8ff")},skyHor:{value:new Ht("#e8fbff")},fogC:{value:new Ht("#d9f4ff")},fogN:{value:120},fogF:{value:640},ag:{value:[new U(0,0,0),new U(0,0,0),new U(0,0,0),new U(0,0,0)]}},vertexShader:`uniform float time; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y += sin(w.x*1.3+time*1.6)*0.018 + sin(w.z*1.7-time*1.3)*0.015; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float time; uniform vec4 rect; uniform float depth; uniform vec3 sunDir; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform vec3 ag[4]; varying vec3 vW;
      ${Ip}
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
      }`}),s=new ke(t,e,40,40),r=new et(s,n);return r.rotation.x=-Math.PI/2,r.position.set((i.x0+i.x1)/2,i.surf,(i.z0+i.z1)/2),r.renderOrder=3,r.frustumCulled=!1,r.userData.pool=i,r}function Lp(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new en({transparent:!0,depthWrite:!1,blending:xi,uniforms:{time:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; varying vec3 vW; ${Ip}
      void main(){
        vec2 p = vW.xz*0.55; float t = time*0.5, c = 0.0;
        for(int i=0;i<3;i++){ p += vec2(sin(p.y*1.7+t), cos(p.x*1.4-t))*0.55; c += abs(sin(p.x*2.2+p.y*1.8)); }
        c = pow(1.0 - c/3.0, 5.0) * 1.6;
        gl_FragColor = vec4(vec3(0.55,0.95,1.0)*c*0.55, 1.0);
      }`}),s=new et(new ke(t,e),n);return s.rotation.x=-Math.PI/2,s.position.set((i.x0+i.x1)/2,i.bottom+.03,(i.z0+i.z1)/2),s.renderOrder=2,s.frustumCulled=!1,s}var ds=[{id:0,name:"Sprinter",color:"#0b6b3a",max:27,acc:17,grip:6.5,turn:2.2,hw:.95,hl:2.1},{id:1,name:"Buggy",color:"#2f7bff",max:23,acc:15,grip:8.5,turn:2.5,hw:1.05,hl:1.9},{id:2,name:"Pickup",color:"#ffb21e",max:22,acc:14,grip:7,turn:2,hw:1.05,hl:2.3},{id:3,name:"Bubble",color:"#a855f7",max:24,acc:16,grip:7.5,turn:2.4,hw:.95,hl:1.8},...[4,5,6,7].map(i=>({id:i,name:"Racer",color:"#e0001f",max:42,acc:36,grip:9.5,turn:2.15,hw:1.05,hl:2.35,racer:!0})),{id:8,name:"Bike",color:"#ff6b00",max:31,acc:22,grip:7.5,turn:3,hw:.5,hl:1.1,bike:!0},{id:9,name:"Super Bike",color:"#00c2ff",max:52.8,acc:34,grip:9,turn:2.7,hw:.5,hl:1.15,bike:!0},{id:10,name:"Super Car",color:"#ffd400",max:83.3,acc:46,grip:10.5,turn:2,hw:1.05,hl:2.35}];for(let i of da)ds[i.id]={id:i.id,name:i.name,color:i.paint,max:i.top,acc:0,grip:0,turn:0,hw:1,hl:2.3,city:!0};function Np(i,t,e,n){let s={id:i,x:t,z:e,y:0,pitch:0,yaw:n,vx:0,vz:0,speed:0,steer:0,drift:0,driver:-1,bump:0,boost:0,parked:!0,spin:0,crash:0,acc:0,vy:0,vyg:0,air:!1};return i>=11&&$0(s,da[i-11]),s}function mf(i,t,e,n=1.5,s){let r=1e9,o=t,a=e,l=1,c=1,h=0,u=0,f=0,d=s!==void 0;for(let x of i.segs){let m=x.bx-x.ax,p=x.bz-x.az,v=m*m+p*p,T=v>0?((t-x.ax)*m+(e-x.az)*p)/v:0;T=T<0?0:T>1?1:T;let E=x.y0||0,_=x.y1===void 0?E:x.y1,b=E+(_-E)*T;if(d&&Math.abs(b-s)>5)continue;let S=x.ax+m*T,y=x.az+p*T,w=Math.hypot(t-S,e-y),A=x.hw-n;w-A<r&&(r=w-A,o=S,a=y,l=A,c=w,h=b,_!==E&&v>0?(u=(_-E)*m/v,f=(_-E)*p/v):u=f=0)}for(let x of i.plazas||[]){let m=x.y||0;if(d&&Math.abs(m-s)>5)continue;let p=Math.hypot(t-x.x,e-x.z),v=x.r-n;p-v<r&&(r=p-v,o=x.x,a=x.z,l=v,c=p,h=m,u=f=0)}if(r>1e8)return{d:-1,px:t,pz:e,nx:0,nz:1,lim:1,h:d?s:0,gx:0,gz:0};let g=c||1e-6;return{d:r,px:o,pz:a,nx:(t-o)/g,nz:(e-a)/g,lim:l,h,gx:u,gz:f}}function gf(i,t,e,n,s,r=0){let o=ds[i.id];if(o.city)return i.ownd=!0,K0(i,t,e,n,s,da[i.id-11],n.terrain?b=>mf(n,b.x,b.z,-1.2).d<=0:null);let a=Math.sin(i.yaw),l=Math.cos(i.yaw),c=-l,h=a,u=i.vx*a+i.vz*l,f=i.vx*c+i.vz*h,d=o.max*(i.boost>0?1.3:1);i.boost>0&&(i.boost-=t),e.gas>.01?u+=(u<0?38:o.acc*(1-Math.max(0,u)/(d+2))+1)*e.gas*t:e.gas<-.01?u+=(u>.5?-34:-11)*-e.gas*t:u-=Math.sign(u)*Math.min(Math.abs(u),4.5*t),e.hb&&(u-=Math.sign(u)*Math.min(Math.abs(u),9*t));{let b=(i.gx||0)*a+(i.gz||0)*l;b&&(u-=9.8*.55*(b/Math.sqrt(1+b*b))*t)}u=Math.max(-9,Math.min(d+(i.boost>0?3:0),u)),i.steer+=(e.steer-i.steer)*Math.min(1,t*9);let g=Math.abs(u),x=Math.min(1,g/5)*(1-.38*Math.min(1,g/d));i.yaw-=i.steer*o.turn*x*Math.sign(u||1)*(e.hb?1.35:1)*t;let m=(e.hb?1.6:o.grip)*(i.slick>0?.22:1);f*=Math.exp(-m*t),i.drift=Math.min(1,Math.abs(f)/5);let p=Math.sin(i.yaw),v=Math.cos(i.yaw),T=-v,E=p;i.vx=p*u+T*f,i.vz=v*u+E*f;for(let b of n.boosts||[])Math.abs(i.x-b.x)<b.r&&Math.abs(i.z-b.z)<b.r&&Math.abs(i.y-(b.y||0))<3&&(i.boost=1.4,u<d&&(i.vx+=p*40*t,i.vz+=v*40*t));i.x+=i.vx*t,i.z+=i.vz*t;let _="";if(n.terrain)_=sM(i,t,n,p,v,d)||_;else{let b=mf(n,i.x,i.z,1.5,i.y);i.gx=b.gx,i.gz=b.gz;{let S=i.y;i.y+=(b.h-i.y)*Math.min(1,t*14);let y=Math.hypot(i.vx,i.vz)*t;i.pitch+=((y>.001?Math.atan2(i.y-S,y):0)*(i.speed>=0?1:-1)-i.pitch)*Math.min(1,t*10)}for(let S of[1.25,-1.25]){let y=mf(n,i.x+p*S,i.z+v*S,1.6,i.y);if(y.d<=0)continue;i.x-=y.nx*y.d,i.z-=y.nz*y.d;let w=i.vx*y.nx+i.vz*y.nz;if(w>0){let A=-1.35*w*y.nx,L=-(1+.35)*w*y.nz;i.vx+=A,i.vz+=L,i.vx*=.95,i.vz*=.95,i.spin=Math.max(-3,Math.min(3,(i.spin||0)+(v*S*A-p*S*L)*.1)),w>5&&(_="bump"),i.bump=Math.max(i.bump,w)}}}for(let b of s||[]){if((i.x-b.x)**2+(i.z-b.z)**2>36||Math.abs((b.y||0)-i.y)>4)continue;let S=Math.sin(b.yaw),y=Math.cos(b.yaw),w=null;for(let P of[1.05,-1.05])for(let C of[1.05,-1.05]){let I=i.x+p*P,z=i.z+v*P,O=b.x+S*C,V=b.z+y*C,G=I-O,X=z-V,Z=Math.hypot(G,X),Mt=2.3-Z;Mt>0&&(!w||Mt>w.pen)&&(w={pen:Mt,nx:Z>1e-4?G/Z:p,nz:Z>1e-4?X/Z:v,rx:I-i.x,rz:z-i.z})}if(!w)continue;let A=b.driver===-1||b.parked,L=A?1:.6;i.x+=w.nx*w.pen*L,i.z+=w.nz*w.pen*L;let M=(i.vx-b.vx)*w.nx+(i.vz-b.vz)*w.nz;if(M<0){let P=1.55*-M*(A?1:.55),C=w.nx*P,I=w.nz*P;i.vx+=C,i.vz+=I,i.spin=Math.max(-3.2,Math.min(3.2,(i.spin||0)+(w.rz*C-w.rx*I)*.32)),i.vx*=.94,i.vz*=.94,-M>3.5&&(_=-M>7?"crash":"bump",i.crash=Math.max(i.crash||0,-M))}}if(n.dyn&&!n.free){let b=n.dyn(r);for(let S of b){if(Math.abs(S.y-i.y)>4||(i.x-S.x)**2+(i.z-S.z)**2>30)continue;let y=null;for(let A of[1.05,-1.05]){let L=i.x+p*A,M=i.z+v*A,P=L-S.x,C=M-S.z,I=Math.hypot(P,C),z=1.15+S.r-I;z>0&&(!y||z>y.pen)&&(y={pen:z,nx:I>1e-4?P/I:p,nz:I>1e-4?C/I:v,rx:L-i.x,rz:M-i.z})}if(!y)continue;i.x+=y.nx*y.pen,i.z+=y.nz*y.pen;let w=(i.vx-S.vx)*y.nx+(i.vz-S.vz)*y.nz;if(w<0){let A=1.5*-w,L=y.nx*A,M=y.nz*A;i.vx+=L,i.vz+=M,i.spin=Math.max(-3.4,Math.min(3.4,(i.spin||0)+(y.rz*L-y.rx*M)*.4)),i.vx*=.9,i.vz*=.9,-w>3.5&&(_=-w>7?"crash":"bump",i.crash=Math.max(i.crash||0,-w))}}}i.slick=0;for(let b of(n.free?[]:n.slicks)||[])Math.abs(b.y-i.y)<3&&(i.x-b.x)**2+(i.z-b.z)**2<b.r*b.r&&(i.slick=1);return i.spin&&(i.yaw+=i.spin*t,i.spin*=Math.exp(-3.6*t),Math.abs(i.spin)<.02&&(i.spin=0)),i.speed=i.vx*p+i.vz*v,_}var Dp=-.35,iM=352;function sM(i,t,e,n,s,r){let o=e.terrain,a="";for(let f of[1.15,-1.15]){let d=i.x+n*f,g=i.z+s*f;for(let x of e.boxes||[]){if(i.y>x.h-.4||d<x.x0-1.3||d>x.x1+1.3||g<x.z0-1.3||g>x.z1+1.3)continue;let m=Math.max(x.x0,Math.min(x.x1,d)),p=Math.max(x.z0,Math.min(x.z1,g)),v=d-m,T=g-p,E=Math.hypot(v,T),_,b,S;if(E>1e-4){if(_=v/E,b=T/E,S=1.15-E,S<=0)continue}else{let w=d-x.x0,A=x.x1-d,L=g-x.z0,M=x.z1-g,P=Math.min(w,A,L,M);S=1.15+P,P===w?(_=-1,b=0):P===A?(_=1,b=0):P===L?(_=0,b=-1):(_=0,b=1)}i.x+=_*S,i.z+=b*S;let y=i.vx*_+i.vz*b;y<0&&(i.vx-=1.35*y*_,i.vz-=1.35*y*b,i.vx*=.9,i.vz*=.9,i.spin=Math.max(-3,Math.min(3,(i.spin||0)+(s*f*_-n*f*b)*-y*.05)),-y>5&&(a=-y>12?"crash":"bump",i.crash=Math.max(i.crash||0,-y)))}}let l=iM;Math.abs(i.x)>l&&(i.x=Math.sign(i.x)*l,i.vx*=-.3),Math.abs(i.z)>l&&(i.z=Math.sign(i.z)*l,i.vz*=-.3),o(i.x+n*2.5,i.z+s*2.5)<Dp&&o(i.x,i.z)<Dp+.6&&(i.vx*=-.35,i.vz*=-.35,i.x+=i.vx*t*3,i.z+=i.vz*t*3,a=a||"bump",i.bump=8);let c=o(i.x,i.z),h=Math.hypot(i.vx,i.vz),u=i.y;if(i.gx=(o(i.x+1.5,i.z)-o(i.x-1.5,i.z))/3,i.gz=(o(i.x,i.z+1.5)-o(i.x,i.z-1.5))/3,i.air){if(i.vy-=30*t,i.y+=i.vy*t,i.y<=c){let f=-i.vy;i.y=c,i.air=!1,i.vy=0,i.vyg=0,f>7&&(a=f>14?"crash":"bump",i.crash=Math.max(i.crash||0,f),i.vx*=.93,i.vz*=.93)}i.pitch+=(Math.atan2(i.vy,Math.max(8,h))*.8-i.pitch)*Math.min(1,t*4)}else{let f=(c-u)/Math.max(t,.001);if(i.vyg+=(f-i.vyg)*Math.min(1,t*18),c<u-.22-h*.004)i.air=!0,i.vy=Math.max(i.vyg,0),i.y=u;else{i.y=c;let d=i.gx*n+i.gz*s;i.pitch+=(Math.atan(d)-i.pitch)*Math.min(1,t*12)}}return i.air=i.air&&i.y>c+1e-4,a}var Vt=(i,t,e,n=.12)=>new ss(i,t,e,3,Math.min(n,i/2-.01,t/2-.01,e/2-.01)),Ye=(i,t={})=>{var e,n,s;return new ne({color:i,roughness:(e=t.r)!=null?e:.35,metalness:(n=t.m)!=null?n:.25,emissive:t.e||0,emissiveIntensity:(s=t.ei)!=null?s:1})},Kr=()=>new ne({color:"#9fd8ff",roughness:.05,metalness:.4,transparent:!0,opacity:.55});function zp(i,t=!1){if(i>=11)return qu(i,t);let e=ds[i],n=new Zt,s=Ye("#1b1b22",{r:.8,m:0}),r=Ye("#e8eaf2",{r:.25,m:.8}),o=Ye("#23252e",{r:.6}),a=(S,y,w,A,L,M=0,P=0,C=0)=>{let I=new et(S,y);return I.position.set(w,A,L),I.rotation.set(M,P,C),I.castShadow=!0,I.receiveShadow=!0,n.add(I),I},l=i===0?new ne({map:Uc("pk"),roughness:.3,metalness:.15}):Ye(e.color,{r:.28,m:.35}),c=Ye("#ffffff",{r:.3,m:.1}),h=Ye("#fff6c8",{e:"#fff1a8",ei:1.4}),u=Ye("#ff3030",{e:"#ff1a1a",ei:1.2}),f=[],d=[],g=!1,x=.46,m=1,p=1.35,v=-1.3,T={y:.55,z:-.15};if(i===0)x=.44,m=1.02,p=1.45,v=-1.35,T={y:.5,z:-.2},a(Vt(1.9,.5,4.3,.22),l,0,.55,0),a(Vt(1.7,.34,1.5,.2),l,0,.78,1.35,-.12),a(Vt(1.7,.4,1,.2),l,0,.86,-1.6),a(Vt(1.5,.5,.12,.05),Kr(),0,1.02,.78,-.55),a(Vt(.12,.1,1.5,.04),o,.95,1.16,-1.82),a(Vt(.12,.1,1.5,.04),o,-.95,1.16,-1.82),a(Vt(2,.09,.45,.04),l,0,1.28,-2),a(Vt(.1,.4,.3,.03),o,.7,1.08,-1.95),a(Vt(.1,.4,.3,.03),o,-.7,1.08,-1.95),a(Vt(.4,.2,.1,.04),h,.65,.68,2.12),a(Vt(.4,.2,.1,.04),h,-.65,.68,2.12),a(Vt(.45,.14,.1,.04),u,.65,.78,-2.17),a(Vt(.45,.14,.1,.04),u,-.65,.78,-2.17);else if(i===1){x=.62,m=1.18,p=1.3,v=-1.25,T={y:.62,z:-.1},a(Vt(1.7,.4,3.8,.16),l,0,.62,0),a(Vt(1.5,.3,1.2,.14),l,0,.9,1.4),a(Vt(1.3,.35,.9,.12),Ye("#ffd23f",{r:.4}),0,.95,-1.35);for(let S of[-1,1])a(new It(.06,.06,1.7,8),o,S*.78,1.5,-.1,.12,0,0),a(new It(.06,.06,1.6,8),o,S*.78,1,.7,.9,0,0),a(new It(.06,.06,1.7,8),o,S*.78,1.5,-.1,Math.PI/2,0,0);a(new It(.06,.06,1.6,8),o,0,2,-.1,0,0,Math.PI/2),a(new _e(.2,12,8),h,.55,.98,2),a(new _e(.2,12,8),h,-.55,.98,2),a(Vt(.4,.12,.1,.04),u,.5,.8,-1.95),a(Vt(.4,.12,.1,.04),u,-.5,.8,-1.95)}else if(i===2){x=.55,m=1.1,p=1.55,v=-1.5,T={y:.78,z:.55},a(Vt(2,.55,4.7,.2),l,0,.75,0),a(Vt(1.9,.75,1.5,.18),l,0,1.28,.55),a(Vt(1.5,.45,.1,.05),Kr(),0,1.55,1.3,-.35),a(Vt(1.8,.1,1.9,.05),o,0,1.1,-1.35);for(let S of[-1,1])a(Vt(.1,.5,1.9,.04),l,S*.97,1.35,-1.35);a(Vt(1.8,.5,.1,.04),l,0,1.35,-2.28),a(Vt(1.8,.1,.1,.04),Ye("#c8ccd8",{m:.8,r:.2}),0,.75,2.4),a(Vt(.1,.5,.1,.03),Ye("#c8ccd8",{m:.8,r:.2}),.6,.85,2.38),a(Vt(.1,.5,.1,.03),Ye("#c8ccd8",{m:.8,r:.2}),-.6,.85,2.38),a(Vt(.35,.22,.1,.04),h,.7,.98,2.36),a(Vt(.35,.22,.1,.04),h,-.7,.98,2.36),a(Vt(.3,.2,.1,.04),u,.8,1,-2.36),a(Vt(.3,.2,.1,.04),u,-.8,1,-2.36)}else if(i===8||i===9){g=!0;let S=i===9,y=Ye(e.color,{r:.2,m:.5}),w=S?.5:.44;T={y:S?.92:.98,z:-.1},a(Vt(.34,.3,1.5,.1),o,0,.62,0),a(Vt(S?.42:.36,S?.36:.34,1,.14),y,0,.98,.35),a(Vt(.38,.14,.95,.06),Ye("#1b1b22",{r:.8,m:0}),0,.88,-.55),S&&(a(Vt(.5,.5,.5,.2),y,0,.95,.95,-.5),a(Vt(.36,.28,.1,.04),Kr(),0,1.25,.98,-.8),a(Vt(.3,.18,.7,.08),y,0,.92,-1.05,.3)),a(Vt(.9,.07,.07,.03),o,0,S?1.18:1.3,.78),a(new _e(.17,10,8),h,0,S?1:1.15,1.2),a(Vt(.14,.1,.08,.03),u,0,.95,-1.12),a(new It(.07,.09,1,8),Ye("#c8ccd8",{m:.9,r:.2}),.26,.5,-.7,Math.PI/2,0,0);let A=new It(w,w,.24,18),L=new It(w*.55,w*.55,.26,10);for(let[M,P]of[[.95,1],[-.95,0]]){let C=new Zt;C.position.set(0,w,M),n.add(C);let I=new Zt;C.add(I);let z=new et(A,s);z.rotation.z=Math.PI/2,z.castShadow=!0,I.add(z);let O=new et(L,r);O.rotation.z=Math.PI/2,I.add(O),f.push(I),P&&d.push(C)}a(Vt(.12,.7,.12,.03),o,0,.75,.95,.35)}else if(i===10){x=.5,m=1.1,p=1.45,v=-1.45,T={y:.55,z:-.1};let S=Ye("#ffd400",{r:.14,m:.6}),y=Ye("#15161c",{r:.5,m:.2}),w=Ye("#b14bff",{e:"#b14bff",ei:1.6}),A=new Bn;[[-2.45,.28],[-2.45,.78],[-1.6,.95],[-.3,1.02],[.7,.9],[2.3,.5],[2.5,.38],[2.5,.28]].forEach(([P,C],I)=>I?A.lineTo(P,C):A.moveTo(P,C));let L=new Di(A,{depth:1.75,bevelEnabled:!0,bevelSize:.1,bevelThickness:.1,bevelSegments:2,steps:1});L.rotateY(-Math.PI/2),L.translate(.87,0,0),a(L,S,0,0,0),a(Vt(1.3,.34,1.5,.16),Kr(),0,1,-.1,-.08),a(Vt(.5,.03,3,.01),y,.35,.99,-.2),a(Vt(.5,.03,3,.01),y,-.35,.99,-.2),a(Vt(2.2,.08,.6,.03),y,0,1.28,-2.3);for(let P of[-1,1])a(Vt(.09,.4,.09,.02),y,P*.7,1.08,-2.25),a(Vt(.07,.4,.7,.02),S,P*1.1,1.2,-2.3),a(Vt(.42,.14,.1,.04),h,P*.62,.62,2.52),a(Vt(.5,.12,.1,.04),u,P*.62,.8,-2.5),a(Vt(.3,.2,.9,.08),S,P*1.05,.55,1.4);a(Vt(2.3,.08,.5,.03),y,0,.3,2.5);let M=new et(new ke(2.1,4.8),new Te({color:"#b14bff",transparent:!0,opacity:.5,blending:xi,depthWrite:!1,toneMapped:!1}));M.rotation.x=-Math.PI/2,M.position.set(0,.12,0),n.add(M)}else if(i>=4&&i<8){x=.5,m=1.12,p=1.5,v=-1.5,T={y:.62,z:-.2};let S=Ye("#e0001f",{r:.16,m:.55}),y=Ye("#15161c",{r:.5,m:.2}),w=Ye("#ffffff",{r:.25,m:.1}),A=Ye("#ff7a1a",{e:"#ff5a00",ei:2}),L=new Bn;[[-2.4,.3],[-2.4,.84],[-1.7,1],[-.95,.96],[-.8,.66],[.5,.66],[.72,.78],[2.2,.56],[2.46,.44],[2.46,.3]].forEach(([I,z],O)=>O?L.lineTo(I,z):L.moveTo(I,z));let M=new Di(L,{depth:1.7,bevelEnabled:!0,bevelSize:.1,bevelThickness:.1,bevelSegments:2,steps:1});M.rotateY(-Math.PI/2),M.translate(.85,0,0),a(M,S,0,0,0),a(Vt(1.2,.04,1.3,.02),y,0,.7,-.1),a(Vt(1,.32,.18,.06),S,0,.88,-1.05),a(Vt(1.5,.42,.08,.03),Kr(),0,.98,.6,-.62);for(let I of[-1,1])a(Vt(.12,.34,.1,.03),y,I*.76,.9,.62,-.62),a(Vt(.42,.34,1.7,.14),S,I*1.03,.6,-1.6),a(Vt(.3,.3,.9,.1),S,I*1,.55,1.5),a(Vt(.1,.3,.8,.03),y,I*.98,.5,-.35),a(Vt(.07,.62,.8,.02),y,I*1.12,1.52,-2.28),a(Vt(.09,.62,.09,.02),y,I*.55,1.2,-2.15);a(Vt(.46,.03,1.9,.01),w,0,.8,1.4,.07),a(Vt(2.3,.1,.8,.03),S,0,1.52,-2.28),a(Vt(2.3,.07,.34,.02),y,0,1.45,-2),a(Vt(2.3,.08,.55,.03),y,0,.3,2.46),a(Vt(1.9,.12,.3,.04),y,0,.3,-2.4);for(let I of[-1,1])a(Vt(.42,.14,.1,.04),h,I*.62,.62,2.5),a(Vt(.5,.12,.1,.04),u,I*.6,.86,-2.48),a(new It(.1,.12,.3,10),y,I*.42,.52,-2.5,Math.PI/2,0,0);let P=new et(new ke(2.1,4.6),new Te({color:"#27b6ff",transparent:!0,opacity:.55,blending:xi,depthWrite:!1,toneMapped:!1}));P.rotation.x=-Math.PI/2,P.position.set(0,.12,0),n.add(P);let C=[];for(let I of[-1,1])for(let[z,O,V]of[[.17,1.3,"#ff6a00"],[.09,.8,"#ffe14a"]]){let G=new _n(z,O,8);G.rotateX(-Math.PI/2),G.translate(0,0,-O/2);let X=new et(G,new Te({color:V,transparent:!0,opacity:.9,toneMapped:!1}));X.position.set(I*.42,.52,-2.62),n.add(X),C.push(X)}n.userData.flames=C}else{x=.42,m=.98,p=1.15,v=-1.1,T={y:.5,z:-.05},a(new _e(1.15,24,16),l,0,.95,-.05).scale.set(.9,.62,1.55),a(Vt(1.6,.14,3.2,.06),c,0,.42,0);for(let y of[-1,1])a(new _e(.27,14,10),h,y*.62,.95,1.72),a(new _e(.2,12,8),u,y*.55,.85,-1.78),a(new It(.09,.09,.5,8),o,y*.42,1.55,1.1,.45,0,0);a(Vt(1.5,.35,.1,.04),Kr(),0,1.22,.85,-.7),a(Vt(.5,.05,2.3,.02),Ye("#ff6bd5",{r:.4}),.15,1.52,-.75,0,0,.08)}let E=new It(x,x,.42,20),_=new It(x*.56,x*.56,.44,12);if(!g)for(let[S,y,w]of[[1,p,1],[-1,p,1],[1,v,0],[-1,v,0]]){let A=new Zt;A.position.set(S*m,x,y),n.add(A);let L=new Zt;A.add(L);let M=new et(E,s);M.rotation.z=Math.PI/2,M.castShadow=!0,L.add(M);let P=new et(_,r);P.rotation.z=Math.PI/2,L.add(P),f.push(L),w&&d.push(A)}let b=new et(new bs(2.6,20),new Te({color:0,transparent:!0,opacity:.22,depthWrite:!1}));return b.rotation.x=-Math.PI/2,b.position.y=.04,b.scale.set(.9,1.25,1),n.add(b),n.userData={wheels:f,pivots:d,seat:T,spec:e,flames:n.userData.flames},n}function Up(i,t,e){let n=i.userData;if(n.hero){ep(i,t,e);return}for(let r of n.wheels)r.rotation.x+=t.speed/.5*e;for(let r of n.pivots)r.rotation.y=-t.steer*.5;i.rotation.z=n.spec.bike?Ur.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/14)*.5,-.55,.55):Ur.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/20)*.07,-.08,.08);let s=(t.speed-(t._ps===void 0?t.speed:t._ps))/Math.max(e,.001);if(t._ps=t.speed,t._sq=(t._sq||0)+(Ur.clamp(s,-30,30)*.0045-(t._sq||0))*Math.min(1,e*7),i.rotation.x=-(t.pitch||0)-t._sq,n.flames){let r=Ur.clamp(.2+Math.max(0,t.speed)/45+(t.boost>0?.9:0)+(t.driver!==-1?.15:0),.15,2)*(.85+Math.random()*.3);for(let o of n.flames)o.scale.set(1,1,r),o.visible=t.driver!==-1||t.boost>0}}var rM=["relaxed","pocket","thumbs","phone"],oM={...ve},pt=i=>document.getElementById(i),Dn=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||(typeof navigator!="undefined"&&navigator.maxTouchPoints||0)>0,Oe={x:0,y:0,jump:!1,grab:!1},dn=(i,t,e)=>i<t?t:i>e?e:i,jr=(i,t,e)=>i+(t-i)*e,Ef=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},Qc=i=>{let t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},xf=i=>i===1?"1st":i===2?"2nd":i===3?"3rd":i+"th",aM=["\u{1F947}","\u{1F948}","\u{1F949}"],Hi=pt("c"),Nn;try{Nn=new la({canvas:Hi,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.querySelector("#loader p").textContent="WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.",i}Nn.outputColorSpace=De;Nn.toneMapping=Lr;Nn.toneMappingExposure=1.05;Nn.shadowMap.enabled=!0;Nn.shadowMap.type=kl;var Qr=Math.min(window.devicePixelRatio||1,Dn?1.5:2),de={dpr:Dn?Math.min(Qr,1):Math.min(Qr,1.5),t:0,frames:0,good:0,shadows:!0,warm:3};function Os(){sn&&(Nn.setPixelRatio(de.dpr),Nn.setSize(window.innerWidth,window.innerHeight,!1),sn.camera.aspect=window.innerWidth/window.innerHeight,sn.camera.updateProjectionMatrix(),Y&&(Y.camera.aspect=window.innerWidth/window.innerHeight,Y.camera.updateProjectionMatrix(),Y.particles.setScale(Nn.domElement.height)),sn.particles.setScale(Nn.domElement.height))}function lM(i){if(de.low)return;if(de.warm>0){de.warm-=i;return}if(de.t+=i,de.frames++,de.t<1.2)return;let t=de.frames/de.t;de.t=0,de.frames=0,t<40?(de.good=0,de.dpr>.7?(de.dpr=Math.max(.7,de.dpr-.2),Os()):de.shadows&&t<30&&(de.shadows=!1,Y&&Y.setShadows(!1))):t>58?++de.good>=3&&de.dpr<Math.min(Qr,1.75)&&(de.dpr=Math.min(Math.min(Qr,1.75),de.dpr+.1),de.good=0,Os()):de.good=0}try{let i=localStorage.getItem("ph_low");de.low=i==="1",i===null&&Dn&&((navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<=2)&&(de.low=!0)}catch{de.low=!1}de.low&&(de.dpr=.75,de.shadows=!1);function cM(){de.low?(de.dpr=.75,de.shadows=!1):(de.dpr=Dn?Math.min(Qr,1):Math.min(Qr,1.5),de.shadows=!0,de.warm=3),Y&&Y.setShadows(de.shadows),Os()}var hM=new Is(Nn),Hp=hM.fromScene(new ca,.04).texture,_t={screen:"title",mode:"single",name:localStorage.getItem("ph_name")||"",char:+(localStorage.getItem("ph_char")||0),level:0,net:null,room:null,myId:null,pendingJoin:null,muted:!1},Y=null,sn=null,vf=[],kp=i=>+(localStorage.getItem("ph_best_"+i)||0),_f=class{constructor(){let t=xa.fun;this.scene=new Li,this.scene.fog=new pr(t.fog,70,420),this.scene.environment=Hp,this.scene.environmentIntensity=.7,this.camera=new rn(42,1,.1,1500),this.sky=of(t),this.scene.add(this.sky),this.water=af(t,-3),this.scene.add(this.water),this.scene.add(new Ss(t.hemiSky,t.hemiGround,1));let e=new ws(t.sun,2.4);e.position.set(-10,18,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,n.near=1,n.far=60,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e),this.sun=e;let s=c=>new ne({color:c,roughness:.35}),r=new et(new It(15,14,2,48),s("#ff9ccf"));r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let o=new et(new It(13,13,.1,48),s("#fff3fb"));o.position.y=.02,o.receiveShadow=!0,this.scene.add(o),this.tops=[.8,1.25,1.25,.8],[[-4.5,.8,"#7be8a0"],[-1.5,1.25,"#5fc2ff"],[1.5,1.25,"#ffd23f"],[4.5,.8,"#ff9ccf"]].forEach(([c,h,u])=>{let f=new et(new It(1.1,1.25,h,32),s(u));f.position.set(c,h/2,-.5),f.castShadow=f.receiveShadow=!0,this.scene.add(f)}),this.slotPos=[[-4.5,.8,-.5],[-1.5,1.25,-.5],[1.5,1.25,-.5],[4.5,.8,-.5]];let a=rf("HARIS"),l=new et(new ke(11,4.3),new Te({map:a,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));l.rotation.x=-Math.PI/2,l.position.set(0,.1,4.4),this.scene.add(l),this.chars=[0,1,2,3].map(c=>{let h=new hs(c);return this.scene.add(h.group),{c:h,tag:null,name:null,show:!0,scale:1,hop:0}}),this.ambient=new ga("fun",160),this.scene.add(this.ambient.points),this.particles=new ma(360),this.scene.add(this.particles.points),this.mode="title",this.sel=0,this.t=0,this.lobby=[]}setName(t,e){let n=this.chars[t];n.name!==e&&(n.tag&&(n.c.group.remove(n.tag),n.tag.material.map.dispose(),n.tag.material.dispose(),n.tag=null),n.name=e,e&&(n.tag=Vc(e,_i[t].color),n.tag.position.set(0,n.c.height+.55,0),n.c.group.add(n.tag)))}setTitle(t=-1){this.mode="title",this.sel=t,this.lobby=[],this.chars.forEach((e,n)=>{e.show=!0,this.setName(n,null)})}setLobby(t){this.mode="lobby",this.lobby=t,this.chars.forEach((e,n)=>{let s=t.findIndex(r=>r.char===n);e.show=s>=0,e.slot=s,this.setName(n,s>=0?t[s].name:null)})}burst(t){let e=this.slotPos[this.slotOf(t)];this.particles.emit(e[0],e[1]+1.4,e[2]+.5,40,{rainbow:!0,speed:4,up:6,life:1,size:.35,gravity:7})}slotOf(t){return this.mode==="lobby"?[1,2,0,3][Math.max(0,this.chars[t].slot)%4]:t}update(t){this.t+=t;let e=this.camera;e.position.set(Math.sin(this.t*.25)*1.8,2.9+Math.sin(this.t*.4)*.15,10.5),e.lookAt(0,1.9,0),this.sky.position.copy(e.position),this.water.material.uniforms.time.value=this.t,this.chars.forEach((n,s)=>{if(n.c.group.visible=n.show,!n.show)return;let r=this.slotPos[this.slotOf(s)],o=this.mode==="title"?Math.floor(this.t/3)%4===s:this.mode!=="lobby"&&this.sel===s;n.scale=jr(n.scale,o?1.18:1,Math.min(1,t*8)),n.c.group.scale.setScalar(n.scale),n.hop=0,n.c.group.position.set(r[0],r[1]+n.hop,r[2]),n.c.group.rotation.y=Ef(n.c.group.rotation.y,this.mode==="lobby"?Math.sin(this.t*.7+s)*.3:Math.sin(this.t*.6+s*2)*.35,Math.min(1,t*4)),n.c.update(t,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1,gesture:o?"wave":rM[s]}),n.tag&&n.tag.scale.set(2.4,.6,1)}),this.ambient.update(this.t,e.position),this.particles.update(t)}},ba=class{constructor(t,e){this.info=t,this.id=t.id,this.name=t.name,this.model=Gp(t.char),e.add(this.model.group),this.tag=null,Gn||(this.tag=Vc(t.name,_i[t.char].color),this.tag.position.set(0,this.model.height+.7,0),this.model.group.add(this.tag)),this.snaps=[],this.x=0,this.y=-50,this.z=0,this.yaw=Math.PI,this.speed=0,this.flags=0,this.vy=0,this.vx=0,this.vz=0,this.sw=0,this.ds=[],this.dMin=0,this.jit=0,this.rs=0,this.has=!1,this.finished=!1,this.lastLanded=!1,this.rxAt=Date.now(),this.stunT=0}push(t){t.rs!==this.rs&&(this.snaps.length=0,this.rs=t.rs);let e=this.snaps[this.snaps.length-1];if(this.rxAt=Date.now(),e&&t.ts<=e.ts){if(e.ts-t.ts<400)return;this.snaps.length=0,this.ds.length=0}let n=Date.now(),s=n-t.ts;for(this.ds.push([n,s]);this.ds.length>1&&n-this.ds[0][0]>4e3;)this.ds.shift();let r=1/0;for(let o of this.ds)o[1]<r&&(r=o[1]);this.dMin=r,this.jit=this.jit*.92+Math.abs(s-r)*.08,this.snaps.push(t),this.snaps.length>40&&this.snaps.shift()}renderTime(){return Date.now()-this.dMin-dn(70+this.jit*2.2,70,260)}update(t,e){let n=this.snaps;if(!n.length)return;for(;n.length>2&&n[1].ts<=t;)n.shift();let s=n[0],r=n[1]||n[0],o=0;if(n.length>1){let d=Math.max(1,r.ts-s.ts);o=dn((t-s.ts)/d,0,1+220/d)}let a=jr(s.x,r.x,o),l=jr(s.y,r.y,o),c=jr(s.z,r.z,o);if(!this.has)this.x=a,this.y=l,this.z=c,this.has=!0;else{let d=1-Math.exp(-28*e),g=this.x,x=this.z;this.x+=(a-this.x)*d,this.y+=(l-this.y)*d,this.z+=(c-this.z)*d,e>0&&(this.vx+=((this.x-g)/e-this.vx)*.25,this.vz+=((this.z-x)/e-this.vz)*.25)}this.yaw=Ef(this.yaw,r.r,1-Math.exp(-16*e)),this.speed=r.a&8192?0:jr(s.sp,r.sp,dn(o,0,1)),this.flags=r.a,Date.now()-this.rxAt>700&&(this.flags&=-23,this.speed=0),this.vy=n.length>1?(r.y-s.y)/Math.max(.02,(r.ts-s.ts)/1e3):0;let h=this.model.group;h.position.set(this.x,this.y,this.z),h.rotation.y=this.yaw,this.flags&2?this.stunT=(this.stunT||0)+e:this.stunT=0,this.stunT>1.2&&(this.flags&=-3);let u=!!(this.flags&1),f=u&&!this.lastLanded;this.lastLanded=u,this.sw=this.flags&16?Math.min(1,(this.sw||.001)+e/.42):0,this.model.update(e,{speed:this.speed,grounded:u,vy:this.vy,stun:this.flags&2?1:0,dive:this.flags&4?1:0,celebrate:!!(this.flags&8),seated:!!(this.flags&256),swing:this.sw,shield:!!(this.flags&32),leader:!!this.leader,mega:!!(this.flags&128),landed:f,crouch:!!(this.flags&2097152),sitg:!!(this.flags&4194304),punch:this.flags&8388608?this.pn=Math.min(.95,(this.pn||.001)+e/.45):this.pn=0})}dispose(t){t.remove(this.model.group),this.tag&&(this.tag.material.map.dispose(),this.tag.material.dispose()),this.model.dispose()}},Gp=i=>new hs(i),Gn=!1,Ge=new Set,wn={jump:!1,dive:!1,grab:!1},eh=class i{constructor(t,e,n,s){this.level=t,this.meta=ha[t],Gn=!!this.meta.city,document.body.classList.toggle("city-mode",Gn),Object.assign(ve,oM),Gn&&Object.assign(ve,{R:.3,H:1.78,G:9.81,RUN:4.4,JUMP:3.7,ACC:20,DEC:34,AIR:2.5,AIR_DEC:.4,TERM:-55}),this.multi=s.multi,this.localId=n,this.players=e,this.t0=s.t0,this.phase="countdown",this.finished=!1,this.over=!1,this.finishTime=0,this.finishedMap=new Map,this.camYaw=0,this.camPitch=Gn?.17:.34,this.camDist=Gn?3.5:8.2,this.shoulder=0,this.camPos=new U,this.camTarget=new U,this.camInit=!1,this.sendT=0,this.rs=0,this.cpIdx=0,this.cpCur=null,this.stepDist=0,this.lastCount=99,this.hudT=0,this.hintT=0,this.warnSec=-1,this.hang=null,this.hangCd=0,this.hangHint=!1,this.levelTime=-4,this.batCd=0,this.swingT=0,this.crouch=!1,this.sitG=!1,this.punchT=0,this.punchCd=0,this.punchPending=!1,this.batPending=!1,this.swingMega=!1,this.fx={turbo:0,jump:0,shield:0,mega:0},this.fxSig="";let r=xa[this.meta.key],o=this.scene=new Li;o.background=new Ht(r.fog),o.fog=new pr(r.fog,r.fogNear,r.fogFar),o.environment=Hp,o.environmentIntensity=r.env,this.camera=new rn(62,window.innerWidth/window.innerHeight,.1,1800);let{world:a,info:l}=hp(t,!1,vp(),s.seed||1);if(this.world=a,this.info=l,o.add(a.group),a.onEvent=null,this.sky=of(r),o.add(this.sky),this.water=af(r,a.waterY),o.add(this.water),this.scenery=_p(o,this.meta.key,l,a),this.meta.city){this.peds=new Xc(o,Dn?10:16);let d=pt("minimap");d&&typeof d.getContext=="function"&&(this.minimap=new qc(d))}this.poolMeshes=[];for(let d of a.pools){let g=Pp(d),x=g.material.uniforms;x.fogC.value.set(r.fog),x.fogN.value=r.fogNear,x.fogF.value=r.fogFar,x.skyTop.value.set(r.top),x.skyHor.value.set(r.horizon);let m=Lp(d);o.add(g,m),this.poolMeshes.push({wm:g,cm:m,pl:d})}if(this.cars=[],this.rolling=[],this.repairT=0,this.drive=null,this.lookT=0,this.nearCar=null,this.hornCd=0,this.skidT=0,l.cars){for(let d of l.cars){let g=zp(d.id,Dn);g.rotation.order="YXZ",g.position.set(d.x,d.y||0,d.z),g.rotation.y=d.yaw,o.add(g);let x=Np(d.id,d.x,d.z,d.yaw);x.y=d.y||0,this.cars.push({st:x,mesh:g})}this.racerOk=!1,s.multi&&_t.pendingCars&&(this.onCars(_t.pendingCars),_t.pendingCars=null)}o.add(new Ss(r.hemiSky,r.hemiGround,r.hemiI));let c=this.sun=new ws(r.sun,r.sunI);this.sunDir=new U(...r.sunPos).normalize().multiplyScalar(90),c.castShadow=de.shadows,c.shadow.mapSize.set(Dn?1024:2048,Dn?1024:2048);let h=c.shadow.camera;h.left=-40,h.right=40,h.top=40,h.bottom=-40,h.near=5,h.far=220,c.shadow.bias=-3e-4,c.shadow.normalBias=.04,o.add(c,c.target),this.particles=new ma(600),o.add(this.particles.points),this.particles.setScale(Nn.domElement.height),this.ambient=new ga(this.meta.key,320),o.add(this.ambient.points),this.remotes=new Map;let u=e.findIndex(d=>d.id===n);this.slot=Math.max(0,u);let f=e[this.slot]||{name:"Player",char:0};this.me={body:up(),model:Gp(f.char),name:f.name,char:f.char},o.add(this.me.model.group),this.me.model.group.rotation.order="YXZ",this.me.tag=null,Gn||(this.me.tag=Vc(f.name,_i[f.char].color),this.me.tag.position.set(0,this.me.model.height+.7,0),this.me.model.group.add(this.me.tag)),e.forEach((d,g)=>{d.id!==n&&this.remotes.set(d.id,new ba(d,o))}),this.spawn(this.slot),this.victory=0,this.hopT=0,this.buildProgress(),this.buildBoxes(),document.body.classList.add("in-race"),pt("hud-level").textContent=this.meta.name,pt("hud").classList.remove("hidden"),pt("hud-hint").classList.remove("fade"),this.hintT=8,this.setShadows(de.shadows),this.meta.city?($c(),pf(!0)):Zr(t),Kc(!1),this.pos=this.me.body}setShadows(t){this.sun.castShadow=t}spawnPoint(t){return[(t-1.5)*3.6,0,this.info.spawn.z]}spawn(t){let[e,n,s]=this.spawnPoint(t);Gc(this.me.body,e,n+.02,s,Math.PI),this.cpCur=null,this.cpIdx=0}buildProgress(){let t=document.querySelector("#hud-progress .track");t.querySelectorAll(".dot").forEach(n=>n.remove()),this.dots=new Map;let e=(n,s)=>{let r=document.createElement("div");r.className="dot"+(s?" me":""),r.style.background=_i[n.char].color,r.innerHTML=`<em>${n.name.replace(/[<>&]/g,"")}</em>`,t.appendChild(r),this.dots.set(n.id,r)};this.players.forEach(n=>e(n,n.id===this.localId))}now(){return this.multi?_t.net.now():performance.now()}look(t,e){this.camYaw-=t*.0024,this.camPitch=dn(this.camPitch+e*.0021,-.15,1.2),this.lookT=1.6}update(t){let e=this.me.body,n=this.world;this.levelTime=(this.now()-this.t0)/1e3;let s=this.levelTime;if(n.update(s,t),n.carry(e),e.yawOff&&(e.yaw+=e.yawOff,e.yawOff=0),s<0){let _=Math.ceil(-s);_!==this.lastCount&&_<=3&&(this.lastCount=_,this.count(String(_)),Wt.tick())}else this.phase==="countdown"&&(this.phase="race",this.count("GO!"),Wt.go(),this.lastCount=0,this.multi&&setTimeout(()=>{Y===this&&!this.over&&this.toast(Dn?"Tap BAT to bonk rivals!":"Press B or click to swing the BAT!")},1400),this.cars.length&&setTimeout(()=>{Y===this&&!this.over&&!this.drive&&this.toast("\u{1F697} Follow the CAR STATION signs to drive!")},this.multi?4200:1600));let r=s>=0&&!this.over,o=0,a=0;(Ge.has("KeyW")||Ge.has("ArrowUp"))&&o++,(Ge.has("KeyS")||Ge.has("ArrowDown"))&&o--,(Ge.has("KeyD")||Ge.has("ArrowRight"))&&a++,(Ge.has("KeyA")||Ge.has("ArrowLeft"))&&a--,Ge.has("KeyQ")&&(this.camYaw+=1.9*t),Ge.has("KeyE")&&(this.camYaw-=1.9*t),(Oe.x||Oe.y)&&(a+=Oe.x,o+=Oe.y);let l=Math.sin(this.camYaw),c=Math.cos(this.camYaw),h=-l*o+c*a,u=-c*o-l*a,f=Math.hypot(h,u);f>1&&(h/=f,u/=f);let d={mx:r?h:0,mz:r?u:0,jumpPressed:r&&wn.jump,jumpHeld:r&&(Ge.has("Space")||Oe.jump),divePressed:r&&wn.dive&&!this.meta.city};this.meta.city&&(e.speedMul=(Ge.has("ShiftLeft")||Ge.has("ShiftRight"))&&f>.6?1.75:f>0&&f<.55?.42:1),this.meta.city&&(this.sitG&&(f>.25||wn.jump)&&(this.sitG=!1),this.crouch&&wn.jump&&(this.crouch=!1),this.drive&&(this.sitG=!1,this.crouch=!1),this.sitG?(d.mx=0,d.mz=0,d.jumpPressed=!1,d.jumpHeld=!1):(this.crouch&&(e.speedMul=.4),this.punchT>0&&(e.speedMul=Math.min(e.speedMul,.5)))),wn.jump=!1,wn.dive=!1,this.drive&&e.stun>0&&(e.stun=Math.max(0,e.stun-t)),e.stun>0?(this.stunReal=(this.stunReal||0)+t,this.stunReal>1.25&&(e.stun=0,e.immune=.6,this.stunReal=0)):this.stunReal=0;let g=Math.max(1,Math.ceil(t/(1/90))),x=t/g,m=!1;n.nearPlayers=[e,...this.remotes.values()];let p=!1;if(this.stepRolling(t),this.drive)this.updateDrive(t,r),e.events.length=0;else if(p)e.events.length=0;else for(let _=0;_<g;_++)fp(n,e,x,d),d.jumpPressed=!1,d.divePressed=!1,e.events.length&&(m=this.events(e)||m,e.events.length=0);if(r&&!this.drive){let _=n.checkHazards(e,s);_&&cs(e,_.nx,_.nz,_.pow)&&(Wt.hit(),this.particles.emit(e.x,e.y+.9,e.z,26,{color:"#ffffff",speed:5,up:3,life:.5,size:.3}),this.particles.emit(e.x,e.y+.9,e.z,14,{color:"#ffd23f",speed:7,up:4,life:.4,size:.25}))}!this.drive&&!this.meta.city&&this.updateBat(t,e),this.meta.city&&this.updatePunch(t,e),this.meta.city||this.updatePowerups(t,e),this.drive||(this.softCollide(e),this.softCars(e,r)),this.checkpoints(e),!this.finished&&s>=0&&e.z<this.info.finishZ&&e.y>this.info.finishY-3&&Math.abs(e.x)<16&&this.onLocalFinish(),e.grounded&&!e.stun&&!this.drive&&!(e.swim>.3)&&(this.stepDist+=Math.hypot(e.vx,e.vz)*t,this.stepDist>2.4&&(this.stepDist=0,Math.hypot(e.vx,e.vz)>3&&(Wt.step(),this.particles.emit(e.x,e.y+.05,e.z,2,{color:"#ffffff",speed:.8,up:.8,life:.35,size:.22,gravity:1}))));let v=this.me.model,T=v.group,E=e.swim>.3?dn((e.swim-.3)/.4,0,1):0;if(this.drive?this.seatModel(T,this.drive):(T.position.set(e.x,e.y,e.z),T.rotation.y=e.yaw,T.rotation.x=E*.55*dn(Math.hypot(e.vx,e.vz)/3,.25,1),T.scale.setScalar(1)),v.update(t,{seated:!!this.drive,speed:this.drive?0:Math.hypot(e.vx,e.vz),grounded:this.drive||E>0?!0:e.grounded&&!this.hang,vy:this.drive?0:e.vy,stun:this.drive?0:e.stun,dive:this.drive?0:e.dive,celebrate:this.finished||this.over&&this.winnerSelf||this.victory>0,swing:this.swingT,shield:e.shield>0,leader:this.leaderId===this.localId,mega:this.swingMega&&this.swingT>0,landed:m,crouch:this.crouch&&!this.drive,sitg:this.sitG&&!this.drive,punch:this.drive?0:this.punchT}),this.tagScale(this.me.tag,T.position,.85),this.multi){this.leaderId=this.findLeader();for(let _ of this.remotes.values())_.leader=_.id===this.leaderId,_.update(_.snaps.length?_.renderTime():0,t),this.tagScale(_.tag,_.model.group.position,1),_.flags&64&&Math.random()<.6&&this.particles.emit(_.x,_.y+.3,_.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});this.sendT+=t,this.sendT>=.033&&this.sendSnap()}if(this.updateCars(t,r),this.minimap){let _=this.me.body,b=this.drive?this.drive.st:null,S=b?b.x:_.x,y=b?b.z:_.z,w=Number.isFinite(this.camYaw)?this.camYaw+Math.PI:_.yaw;this.minimap.draw({x:S,z:y,head:w},{x:S,z:y,yaw:b?b.yaw:_.yaw},[...this.remotes.values()].filter(A=>A.has).map(A=>({x:A.x,z:A.z,color:_i[A.info.char].color})),t)}this.peds&&this.peds.update(t,Math.max(0,this.levelTime)+60,this.camera.position,this.cars.map(_=>_.st).concat(this.info.trafficList||[]),this.drive?null:this.me.body,(_,b)=>{$r(Math.min(10,2+b*.3)),this.particles.emit(_.x,1,_.z,8,{color:"#ffd9a0",speed:3,up:2,life:.4,size:.2})},{sit:this.sitG||this.crouch&&Math.hypot(this.me.body.vx,this.me.body.vz)>.5,hitMe:_=>this.pedHitMe(_)}),this.updateCamera(t),this.updateLights(),this.water.material.uniforms.time.value=performance.now()/1e3,this.water.position.x=this.camera.position.x,this.water.position.z=this.camera.position.z,this.sky.position.copy(this.camera.position),this.scenery.update(s,this.camera.position),this.ambient.update(performance.now()/1e3,this.camera.position),this.particles.update(t),this.hud(t)}events(t){let e=!1;for(let n of t.events)if(n==="jump")Wt.jump(),this.particles.emit(t.x,t.y+.05,t.z,5,{color:"#ffffff",speed:1.5,up:1,life:.35,size:.25,gravity:2});else if(n==="land")Wt.land(t.landSpeed),e=!0,this.particles.emit(t.x,t.y+.05,t.z,Math.min(14,5+t.landSpeed*.4),{color:"#ffffff",speed:2.4,up:1.4,life:.45,size:.3,gravity:3});else if(n==="bounce")Wt.bounce(),e=!0,this.particles.emit(t.x,t.y+.1,t.z,18,{rainbow:!0,speed:3,up:2,life:.6,size:.3});else if(n==="dive")Wt.dive();else if(n==="splash"){Wt.splash();let s=t.swim>0&&t.waterSurf,r=xa[this.meta.key],o=s?"#ffffff":r.water==="lava"?"#ff9a2a":r.water==="grid"?"#d11cff":"#bfeaff";this.particles.emit(t.x,(s?t.waterSurf:this.world.waterY)+.2,t.z,s?34:40,{color:o,speed:4,up:s?6:9,life:.9,size:.45,gravity:16,spread:.6})}else n==="stroke"?(Wt.jump(),this.particles.emit(t.x,t.waterSurf+.1,t.z,10,{color:"#ffffff",speed:2,up:3,life:.6,size:.3,gravity:10})):n==="fell"&&this.onFell();return e}seatModel(t,e){let n=e.st,s=e.mesh.userData,r=s.seat;if(s.hero){let o=s.seatF,a=s.seatR,l=Math.sin(n.yaw),c=Math.cos(n.yaw);t.position.set(n.x+l*o-c*a,n.y+s.seatY,n.z+c*o+l*a),t.rotation.set(0,n.yaw,0),t.scale.setScalar(s.seatS||1);return}t.position.set(n.x+Math.sin(n.yaw)*r.z,n.y+r.y,n.z+Math.cos(n.yaw)*r.z),t.rotation.y=n.yaw,t.rotation.x=0,t.scale.setScalar(.8)}nearestFreeCar(t){if(t.stun>0||t.y>1.5&&!this.world.terrain||t.swim>.3)return null;let e=null,n=4.6;for(let s of this.cars){let r=s.st.driver!==-1&&s!==this.drive;if(r&&!(Gn&&this.multi)||Math.abs(t.y-s.st.y)>3)continue;let o=Math.hypot(t.x-s.st.x,t.z-s.st.z)+(r?1.5:0);o<n&&(n=o,e=s)}return e}spotFree(t,e,n){for(let s of this.info.track&&this.info.track.boxes||[])if(t>s.x0-.5&&t<s.x1+.5&&e>s.z0-.5&&e<s.z1+.5)return!1;for(let s of this.cars){if(s===n)continue;let r=t-s.st.x,o=e-s.st.z,a=Math.sin(s.st.yaw),l=Math.cos(s.st.yaw),c=r*a+o*l,h=-r*l+o*a;if(Math.abs(c)<(s.st.hl||2.2)+.45&&Math.abs(h)<(s.st.hw||1)+.45)return!1}return!0}onJack(t){let e=this.cars[t.c|0];e&&e===this.drive&&this.toggleCar(!0)}toggleCar(t){if(!t&&(this.over||this.finished||this.levelTime<0||this.menuOpen||!this.cars.length)||t&&!this.drive)return;let e=this.me.body;if(this.drive){let n=this.drive,s=n.st,r=!t&&Math.abs(s.speed)>5.5,o=s.vx,a=s.vz,l=Math.abs(s.speed);if(!t&&s.y>1.2&&!this.world.terrain)return;let c=!!n.mesh.userData.hero,h=Math.cos(s.yaw)*(c?-1:1),u=-Math.sin(s.yaw)*(c?-1:1),f=s.x+h*2.4,d=s.z+u*2.4;if(c){for(let[g,x]of[[h*2.4,u*2.4],[-h*2.4,-u*2.4],[Math.sin(s.yaw)*3.6,Math.cos(s.yaw)*3.6],[-Math.sin(s.yaw)*3.6,-Math.cos(s.yaw)*3.6]])if(this.spotFree(s.x+g,s.z+x,n)){f=s.x+g,d=s.z+x;break}}if(Gc(e,f,this.world.terrain?this.world.terrain(f,d)+.05:.05,d,s.yaw),e.hitCd=.3,r?(s.driver=-1,s.parked=!1,this.rolling.includes(n)||this.rolling.push(n)):t||(s.vx=s.vz=s.speed=0,s.driver=-1,s.parked=!0),this.drive=null,r){let g=Math.hypot(o,a)||1;e.hitCd=0,e.immune=0,cs(e,o/g*.85+h*.5,a/g*.85+u*.5,Math.min(24,l*.8))&&(e.vy=3.5+Math.min(4,l*.1),e.stun=Math.min(1.15,.7+l*.01),$r(Math.min(9,3+l*.2)),this.shake=Math.max(this.shake||0,.35),this.particles.emit(e.x,e.y+.4,e.z,10,{color:"#d8d2c4",speed:3,up:2,life:.5,size:.4}))}document.body.classList.remove("driving"),uf(),ff(),df(),Jr(),c?(_a(!0),setTimeout(()=>_a(!1),1500)):Wt.door(),this.g_g(this.me.model.group),this.multi&&!t&&_t.net.send({t:"carpark",c:this.cars.indexOf(n),x:+s.x.toFixed(2),y:+s.y.toFixed(2),z:+s.z.toFixed(2),r:+s.yaw.toFixed(3)}),this.camYaw=s.yaw+Math.PI,this.camInit=!1,Gn&&(this.camPitch=.17)}else{let n=this.nearestFreeCar(e);if(!n)return;if(this.multi&&n.st.driver!==-1&&n.st.driver!==this.localId&&_t.net.send({t:"jack",to:n.st.driver,c:this.cars.indexOf(n)}),this.drive=n,n.st.driver=this.localId,n.st.parked=!1,e.vx=e.vz=e.vy=0,e.grounded=!0,document.body.classList.add("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("near-swing"),n.mesh.userData.hero){let s=pa(n.st.id);_a(!0),setTimeout(()=>_a(!1),700),setTimeout(()=>{this.drive===n&&(Ap(),wp(s))},900)}else Ep(),Wt.door(),Wt.vroom();this.camPitch=.3,this.camYaw=n.st.yaw+Math.PI,this.toast(ds[n.st.id].name.toUpperCase()+"!  "+(Dn?"use the joystick to drive, tap the door to get out":"W/S drive \u2022 A/D steer \u2022 C get out"))}}g_g(t){t.scale.setScalar(1),t.rotation.x=0}stepRolling(t){if(this.rolling.length)for(let e of this.rolling.slice()){let n=e.st;if(e===this.drive){this.rolling.splice(this.rolling.indexOf(e),1);continue}let s=this.cars.filter(o=>o!==e).map(o=>o.st);if(this.info.trafficList)for(let o of this.info.trafficList)s.push(o);for(let o=0;o<2;o++)gf(n,t/2,{gas:-.35,steer:0},this.info.track,s,Math.max(0,this.levelTime))&&o===0&&($r(n.crash||5),this.particles.emit(n.x,n.y+.8,n.z,12,{color:"#ffd9a0",speed:5,up:3,life:.4,size:.2}),n.crash=0);let r=e.mesh.userData.hero;if(r&&n.dmgQ&&n.dmgQ.length){for(let o of n.dmgQ)r.dent(o.lx,o.lz,Math.min(.3,.07+o.d*.012));n.dmgQ.length=0,r.hurtLook(n.hp)}Math.abs(n.speed)<.4&&(n.vx=n.vz=n.speed=0,n.parked=!0,n.driver=-1,this.rolling.splice(this.rolling.indexOf(e),1),this.multi&&_t.net.send({t:"carpark",c:this.cars.indexOf(e),x:+n.x.toFixed(2),y:+n.y.toFixed(2),z:+n.z.toFixed(2),r:+n.yaw.toFixed(3)}))}}updateDrive(t,e){let n=this.drive,s=n.st,r=this.me.body,o=0,a=0;if(e&&((Ge.has("KeyW")||Ge.has("ArrowUp"))&&o++,(Ge.has("KeyS")||Ge.has("ArrowDown"))&&o--,(Ge.has("KeyD")||Ge.has("ArrowRight"))&&a++,(Ge.has("KeyA")||Ge.has("ArrowLeft"))&&a--,Oe.x||Oe.y)){let u=Math.abs(Oe.y)<.12?0:Oe.y,f=Math.abs(Oe.x)<.06?0:Oe.x;o+=u,a+=Math.sign(f)*Math.min(1,Math.abs(f)*2)}let l=this.cars.filter(u=>u!==n).map(u=>u.st);if(this.info.trafficList)for(let u of this.info.trafficList)l.push(u);let c="",h={gas:dn(o,-1,1),steer:dn(a,-1,1)};for(let u=0;u<2;u++)c=gf(s,t/2,h,this.info.track,l,Math.max(0,this.levelTime))||c;if(n.mesh.userData.hero){let u=n.mesh.userData.hero;if(s.dmgQ&&s.dmgQ.length){for(let f of s.dmgQ)u.dent(f.lx,f.lz,Math.min(.3,.07+f.d*.012));s.dmgQ.length=0,u.hurtLook(s.hp)}{let f=s.x-Cn.x,d=s.z-Cn.z;f*f+d*d<Cn.r*Cn.r&&Math.abs(s.speed)<6&&s.hp<100?(this.repairT+=t,this.repairFx=(this.repairFx||0)-t,this.repairFx<=0&&(this.repairFx=.18,this.particles.emit(s.x+(Math.random()-.5)*2,s.y+.9,s.z+(Math.random()-.5)*2,4,{color:"#8fd3ff",speed:2.2,up:2.5,life:.5,size:.14,gravity:4}),Wt.click()),this.repairT>2.4&&(s.hp=100,this.repairT=0,u.repair(),Wt.pickup(),this.particles.emit(s.x,s.y+1,s.z,40,{rainbow:!0,speed:4,up:4,life:.8,size:.25}))):this.repairT=0}{let f=pt("car-hp-i");if(f){let d=Math.round(s.hp===void 0?100:s.hp);f.dataset.v!==String(d)&&(f.dataset.v=String(d),f.style.width=d+"%",f.style.background=d>55?"#4ade80":d>25?"#facc15":"#ef4444")}}if(c){$r(s.crash||6);let f=Dn?.6:1,d=s.crash||6,g=s.x+Math.sin(s.yaw)*Math.sign(s.speed||1)*1.9,x=s.z+Math.cos(s.yaw)*Math.sign(s.speed||1)*1.9;this.particles.emit(g,s.y+.6,x,Math.round((c==="crash"?16:6)*f),{color:"#ffcf6a",speed:6+d*.3,up:3,life:.35,size:.1,gravity:14,spread:.6}),this.particles.emit(g,s.y+.7,x,Math.round((c==="crash"?9:4)*f),{color:"#b9b9b9",speed:1.6,up:1.4,life:1.1,size:.9,gravity:-.6,spread:.8}),this.shake=Math.max(this.shake||0,Math.min(1,.12+(s.crash||0)*.04)),s.crash=0}}else c==="bump"&&(Wt.land(18),this.particles.emit(s.x,.8,s.z,12,{color:"#ffd23f",speed:4,up:3,life:.4,size:.25}),this.shake=Math.max(this.shake||0,.25)),c==="crash"&&(Wt.land(34),this.particles.emit(s.x,.9,s.z,26,{color:"#ffb347",speed:7,up:5,life:.6,size:.35}),this.shake=Math.max(this.shake||0,Math.min(1,.4+(s.crash||0)*.04)),s.crash=0);if(r.x=s.x,r.y=s.y,r.z=s.z,r.vx=s.vx,r.vz=s.vz,r.vy=0,r.grounded=!0,r.ground=null,r.yaw=s.yaw,r.stun=0,n.mesh.userData.hero?(Tp(s.rpm,s.load),Cp(s.skid>.12?s.skid:0)):Sp(Math.abs(s.speed)/ds[s.id].max,o>0),this.hornCd-=t,this.skidT-=t,n.mesh.userData.hero){if(this.smokeT=(this.smokeT||0)-t,this.smokeT<=0){this.smokeT=Dn?.09:.05;let u=Math.sin(s.yaw),f=Math.cos(s.yaw);if(s.skid>.25&&Math.abs(s.speed)>5)for(let d of[-1,1])this.particles.emit(s.x-u*1.25+f*d*.85,s.y+.12,s.z-f*1.25-u*d*.85,1,{color:"#e6e6e6",speed:.5,up:.7,life:.9,size:.7,gravity:-.35,spread:.2});else s.load>.9&&s.speed>.5&&s.speed<5&&s.gear===1&&this.particles.emit(s.x-u*1.25,s.y+.1,s.z-f*1.25,1,{color:"#d0d0d0",speed:.4,up:.5,life:.6,size:.45,gravity:-.3});{let d=s.hp===void 0?100:s.hp;d<45&&this.particles.emit(s.x+u*1.5,s.y+1,s.z+f*1.5,1,{color:d<20?"#232323":"#9a9a9a",speed:.35,up:d<20?2.2:1.4,life:d<20?1.7:1.2,size:d<20?.9:.6,gravity:-.8,spread:.35}),d<8&&this.particles.emit(s.x+u*1.6,s.y+.95,s.z+f*1.6,1,{color:"#ff7a1a",speed:.5,up:2,life:.45,size:.5,gravity:-2,spread:.3})}}}else if(s.drift>.55&&Math.abs(s.speed)>8){this.skidT<=0&&(this.skidT=.25,Wt.skid());for(let u of[-1,1])this.particles.emit(s.x-Math.sin(s.yaw)*1.5+Math.cos(s.yaw)*u*.9,.25,s.z-Math.cos(s.yaw)*1.5-Math.sin(s.yaw)*u*.9,1,{color:"#e8e8e8",speed:1.2,up:1.2,life:.5,size:.5,gravity:-.5})}s.boost>0&&Math.random()<.8&&this.particles.emit(s.x-Math.sin(s.yaw)*2.2,.5,s.z-Math.cos(s.yaw)*2.2,1,{color:"#ffb347",speed:2,up:1,life:.35,size:.4})}honkOn(){this.drive&&this.drive.mesh.userData.hero?Rp(pa(this.drive.st.id).hornHz):this.honk()}honkOff(){Jr()}honk(){if(this.drive&&this.hornCd<=0){let t=ds[this.drive.st.id].racer;this.hornCd=t?.9:.4,t?Wt.honkBig():Wt.honk(),t&&(this.shake=Math.max(this.shake||0,.12))}}onCars(t){for(let e of Object.keys(t||{})){let n=this.cars[+e],s=t[e];!n||!s||n===this.drive||(n.st.x=+s.x,n.st.z=+s.z,n.st.y=+s.y||0,n.st.yaw=+s.r,n.mesh.position.set(n.st.x,n.st.y,n.st.z),n.mesh.rotation.y=n.st.yaw)}}softCars(t,e){if(!e||this.finished)return;let n=this.cars.filter(s=>s!==this.drive).map(s=>s.st);if(this.info.trafficList)for(let s of this.info.trafficList)n.push(s);for(let s of n){let r=ds[s.id],o=t.x-s.x,a=t.z-s.z;if(o*o+a*a>40||Math.abs(t.y-s.y)>2.5)continue;let l=s.hl||r.hl,c=s.hw||r.hw,h=Math.sin(s.yaw),u=Math.cos(s.yaw),f=o*h+a*u,d=-o*u+a*h,g=l+ve.R+.05,x=c+ve.R+.05;if(Math.abs(f)>=g||Math.abs(d)>=x)continue;if(Math.abs(s.speed)>4&&t.hitCd<=0){let v=Math.sign(s.speed)||1,T=h*v,E=u*v;T+=-u*Math.sign(d||1)*.5,E+=h*Math.sign(d||1)*.5;let _=Math.hypot(T,E)||1;if(cs(t,T/_,E/_,Math.min(22,4+Math.abs(s.speed)*.85))){t.vy=5+Math.min(4,Math.abs(s.speed)*.12),t.stun=Math.min(1.15,.7+Math.abs(s.speed)*.012),$r(Math.min(10,4+Math.abs(s.speed)*.2)),this.shake=Math.max(this.shake||0,.3),this.particles.emit(t.x,t.y+.8,t.z,8,{color:"#ffd9a0",speed:3,up:2,life:.4,size:.2});continue}}let m=g-Math.abs(f),p=x-Math.abs(d);if(m<p){let v=Math.sign(f||1)*m;t.x+=h*v,t.z+=u*v}else{let v=Math.sign(d||1)*p;t.x+=-u*v,t.z+=h*v}}}updateCars(t,e){var a;this.lastDt=t;let n=this.me.body,s=performance.now()/1e3;for(let l of this.cars)l!==this.drive&&!this.rolling.includes(l)&&(l.st.driver=-1,l.st.speed=0,l.st.vx=l.st.vz=0);let r=[];for(let l of this.remotes.values()){let c=l.model.group;if(c.rotation.order="YXZ",!!l.has)if(l.flags&256){let h=this.cars[l.flags>>9&7];if(h&&h!==this.drive){let u=h.st,f=(l.yaw-((a=u._py)!=null?a:l.yaw)+Math.PI*3)%(Math.PI*2)-Math.PI;u.driver=l.id,u.parked=!1,u.x=l.x,u.z=l.z;{let d=u.y;u.y=l.y||0,u.pitch+=((Math.abs(l.speed)>1?Math.atan2(u.y-d,Math.max(.01,Math.abs(l.speed)*t)):0)-u.pitch)*Math.min(1,t*8)}u.speed=l.speed,u.vx=Math.sin(l.yaw)*l.speed,u.vz=Math.cos(l.yaw)*l.speed,u._py=l.yaw,u.steer+=(dn(-f/Math.max(t,.008)*.45,-1,1)-u.steer)*Math.min(1,t*8),u.yaw=l.yaw,this.seatModel(c,h),this.tagScale(l.tag,c.position,1)}}else c.scale.setScalar(1),c.rotation.x=l.flags&4096?.55:0,l.flags&4096&&r.push([l.x,l.z,.35+Math.min(1,l.speed/8)*.65])}n.swim>.3&&!this.drive&&r.push([n.x,n.z,.35+Math.min(1,Math.hypot(n.vx,n.vz)/8)*.65]),n.swim>.3&&!this.drive&&Math.hypot(n.vx,n.vz)>2&&Math.random()<.5&&this.particles.emit(n.x,n.waterSurf+.08,n.z,1,{color:"#ffffff",speed:1.2,up:1.6,life:.5,size:.28,gravity:6,spread:.5});for(let l of this.poolMeshes){let c=l.wm.material.uniforms;c.time.value=s,l.cm.material.uniforms.time.value=s;for(let h=0;h<4;h++){let u=r[h],f=c.ag.value[h];u?f.set(u[0],u[1],u[2]):f.set(0,0,0)}}{let l=!1;for(let h of this.poolMeshes){let u=h.pl,f=this.camera.position;f.x>u.x0&&f.x<u.x1&&f.z>u.z0&&f.z<u.z1&&f.y<u.surf&&(l=!0)}let c=pt("uw");c&&c.classList.contains("on")!==l&&c.classList.toggle("on",l)}tp(this.camera.position);for(let l of this.cars)l.mesh.position.set(l.st.x,l.st.y,l.st.z),l.mesh.rotation.y=l.st.yaw,Up(l.mesh,l.st,t);let o=!this.drive&&e&&!this.menuOpen&&this.nearestFreeCar(n);if(!!o!==document.body.classList.contains("near-car")&&document.body.classList.toggle("near-car",!!o),this.drive){let l=pt("car-speed");if(l){let c=Math.round(Math.abs(this.drive.st.speed)*3.6);l.firstElementChild.textContent!==String(c)&&(l.firstElementChild.textContent=c)}}}onFell(){let t=this.me.body,e=this.cpCur,n=(this.slot-1)*1.6,s,r,o;if(e)s=dn(e.x+n,e.x-e.w/2+1.5,e.x+e.w/2-1.5),r=e.y+.05,o=e.spawn[2];else{let l=this.spawnPoint(this.slot);s=l[0],r=l[1]+.02,o=l[2]}Gc(t,s,r,o,Math.PI),this.rs++,Wt.respawn();let a=pt("flash");a.classList.add("on"),setTimeout(()=>a.classList.remove("on"),60),this.particles.emit(s,r+.8,o,30,{rainbow:!0,speed:3,up:3,life:.8,size:.3}),this.camInit=!1,this.camYaw=0}checkpoints(t){let e=this.world.checkpoints;for(;this.cpIdx<e.length&&t.z<e[this.cpIdx].z&&t.y>e[this.cpIdx].y-2.5&&Math.abs(t.x-e[this.cpIdx].x)<e[this.cpIdx].w/2+3;)this.cpCur=e[this.cpIdx],this.cpIdx++,Wt.checkpoint(),this.toast("CHECKPOINT!"),this.particles.emit(t.x,t.y+1,t.z,24,{color:"#ffd23f",speed:3,up:5,life:.8,size:.3})}softCollide(t){if(this.finished)return;let e=ve.R*2+.06;for(let n of this.remotes.values()){if(!n.has||n.flags&8||Date.now()-n.rxAt>500)continue;let s=t.x-n.x,r=t.z-n.z,o=t.y-n.y;if(Math.abs(o)>ve.H*.8)continue;let a=Math.hypot(s,r);if(a>=e)continue;let l,c;if(a>.001)l=s/a,c=r/a;else{let m=t.yaw*7+1;l=Math.cos(m),c=Math.sin(m)}let h=e-a;t.x+=l*h*.62,t.z+=c*h*.62;{let m=Math.sin(t.yaw),p=Math.cos(t.yaw);if(Math.hypot(t.vx,t.vz)>1&&-(m*l+p*c)>.3){let T=-c,E=l,_=m*T+p*E;Math.abs(_)<.3&&(_=-p*T+m*E||1),_=Math.sign(_),t.x+=T*_*h*.55,t.z+=E*_*h*.55}}let u=n.vx||0,f=n.vz||0,d=(t.vx-u)*l+(t.vz-f)*c;if(this.multi&&d<-1.5){let m=performance.now();n.shoveAt>m-80||(n.shoveAt=m,_t.net.send({t:"shove",to:n.id,nx:+(-l).toFixed(3),nz:+(-c).toFixed(3),p:+Math.min(12,-d).toFixed(1)}))}let g=performance.now(),x=!(n.lastContact>g-150);if(n.lastContact=g,d<0&&x){let m=-1.7*d*.5;t.vx+=l*m,t.vz+=c*m,m>2.5&&(t.noCtrl=Math.max(t.noCtrl,.16)),n.flags&4&&-d>7&&t.hitCd<=0&&cs(t,l,c,11)?this.bonked("TACKLED!",n.name||"",t):-d>6&&t.hitCd<=0&&(Wt.land(6),this.particles.emit(t.x-l*.4,t.y+.9,t.z-c*.4,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}}}bonked(t,e,n){Wt.bonk(),this.toast(t+(e?"  \u2022 "+e:"")),this.particles.emit(n.x,n.y+1,n.z,22,{color:"#ffffff",speed:6,up:3,life:.5,size:.3}),this.particles.emit(n.x,n.y+1,n.z,14,{color:"#ffd23f",speed:8,up:4,life:.45,size:.28})}sendSnap(){let t=this.me.body;this.sendT=0,this.lastSend=performance.now();let e=(t.grounded?1:0)|(t.stun>0?2:0)|(t.dive>0?4:0)|(this.finished?8:0)|(this.swingT>0?16:0)|(t.shield>0?32:0)|(this.fx.turbo>0?64:0)|(this.swingMega&&this.swingT>0?128:0)|(this.drive?256|this.drive.st.id<<9:0)|(this.an?this.an.flagBits():0)|(t.swim>.4&&!this.drive?4096:0)|(this.hang?1048576:0)|(this.crouch&&!this.drive?2097152:0)|(this.sitG&&!this.drive?4194304:0)|(this.punchT>0&&!this.drive?8388608:0);_t.net.send({t:"s",x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),r:+t.yaw.toFixed(2),a:e,sp:+Math.min(99,Math.hypot(t.vx,t.vz)).toFixed(1),ts:_t.net.stamp(),rs:this.rs})}swing(){return this.meta.city||!(this.multi||this.meta.free)||this.over||this.finished||this.levelTime<0||this.batCd>0||this.me.body.stun>0?!1:(this.swingMega=this.fx.mega>0,this.swingMega&&this.fx.mega--,this.batCd=1.1,this.swingT=.001,this.batPending=!0,Wt.swing(),!0)}updateBat(t,e){this.batCd>0&&(this.batCd-=t),this.swingT>0&&(this.swingT+=t/.42,e.stun>0?(this.swingT=0,this.batPending=!1):this.batPending&&this.swingT>=.55&&(this.batPending=!1,this.batHit(e)),this.swingT>=1&&(this.swingT=0))}batHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw);for(let s of this.remotes.values()){if(!s.has||s.flags&8||Date.now()-s.rxAt>800)continue;let r=s.x-t.x,o=s.z-t.z,a=s.y-t.y,l=Math.hypot(r,o);if(l>(this.swingMega?4.4:2.9)||Math.abs(a)>1.7||l<.001||(r*e+o*n)/l<.1)continue;let c=e*.7+r/l*.3,h=n*.7+o/l*.3,u=Math.hypot(c,h)||1;c/=u,h/=u,_t.net.send({t:"bat",to:s.id,nx:+c.toFixed(3),nz:+h.toFixed(3),p:this.swingMega?2:1,ax:+t.x.toFixed(1),az:+t.z.toFixed(1)}),Wt.bonk(),this.toast("BONK!  \u2022 "+(s.name||"")),this.particles.emit(s.x,s.y+1,s.z,24,{color:"#ffd23f",speed:7,up:4,life:.5,size:.3}),this.particles.emit(s.x,s.y+1,s.z,14,{color:"#ffffff",speed:5,up:3,life:.4,size:.25})}}toggleCrouch(){this.over||this.drive||(this.sitG=!1,this.crouch=!this.crouch,this.syncAct())}toggleSit(){if(this.over||this.drive)return;let t=this.me.body;if(this.sitG){this.sitG=!1,this.syncAct();return}!t.grounded||Math.hypot(t.vx,t.vz)>2.5||(this.crouch=!1,this.sitG=!0,this.syncAct())}syncAct(){let t=pt("a-crouch"),e=pt("a-sit");t&&t.classList.toggle("on",!!this.crouch),e&&e.classList.toggle("on",!!this.sitG)}pedHitMe(t){let e=this.me.body;if(this.drive||e.stun>0||e.immune>0)return;let n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s)||1;cs(e,n/r,s/r,7)&&(e.vy=2,e.stun=.4,this.sitG=!1,this.crouch=!1,Wt.bonk(),this.shake=Math.max(this.shake||0,.2),this.particles.emit(e.x,e.y+1.2,e.z,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}punch(){return this.over||this.finished||this.levelTime<0||this.drive||this.punchCd>0||this.me.body.stun>0?!1:(this.sitG=!1,this.punchCd=.55,this.punchT=.001,this.punchPending=!0,Wt.swing(),!0)}updatePunch(t,e){this.punchCd>0&&(this.punchCd-=t),this.punchT>0&&(this.punchT+=t/.45,e.stun>0?(this.punchT=0,this.punchPending=!1):this.punchPending&&this.punchT>=.42&&(this.punchPending=!1,this.punchHit(e)),this.punchT>=1&&(this.punchT=0))}punchHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw);if(!(this.peds&&this.peds.punch(t.x,t.z,e,n,s=>{Wt.bonk(),this.particles.emit(s.x,1.2,s.z,10,{color:"#ffffff",speed:4,up:2,life:.3,size:.25}),this.particles.emit(s.x,1.2,s.z,6,{color:"#ffd23f",speed:5,up:3,life:.3,size:.2})})))for(let s of this.remotes.values()){if(!s.has||s.flags&8||Date.now()-s.rxAt>800)continue;let r=s.x-t.x,o=s.z-t.z,a=s.y-t.y,l=Math.hypot(r,o);if(!(l>1.9||Math.abs(a)>1.5||l<.001)&&!((r*e+o*n)/l<.3)){_t.net.send({t:"bat",to:s.id,nx:+e.toFixed(3),nz:+n.toFixed(3),p:.5,ax:+t.x.toFixed(1),az:+t.z.toFixed(1)}),Wt.bonk(),this.particles.emit(s.x,s.y+1.2,s.z,10,{color:"#ffffff",speed:4,up:2,life:.3,size:.25});break}}}sendNet(t){this.multi&&_t.net.send(t)}onShove(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0||e.shield>0)return;let n=dn(+t.p||0,0,12),s=+t.nx,r=+t.nz;!Number.isFinite(s)||!Number.isFinite(r)||(e.x+=s*n*.05,e.z+=r*n*.05,e.vx+=s*n*.12,e.vz+=r*n*.12)}onBat(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0)return;let n=(this.players.find(r=>r.id===t.from)||{}).name||"";if(e.immune>0||e.stun>.2||Number.isFinite(t.ax)&&Number.isFinite(t.az)&&Math.hypot(t.ax-e.x,t.az-e.z)>7)return;if(e.hitCd=0,e.shield>0){this.toast("SHIELD BLOCKED!"),Wt.pickup();return}if(t.p===.5){cs(e,t.nx,t.nz,9)&&(e.vy=3,e.stun=.45,this.sitG=!1,this.crouch=!1,Wt.bonk());return}let s=t.p===2;cs(e,t.nx,t.nz,s?22:15)&&(e.vy=s?11:9,e.stun=s?1:.75,this.bonked(s?"MEGA BONK!":"BONKED!",n,e))}buildBoxes(){if(this.boxes=[],this.meta.city)return;let t=[],e=(s,r,o)=>[-4,0,4].forEach(a=>t.push({x:s+a,y:o+1.35,z:r}));e(0,-10,0);let n=1e9;for(let s of this.world.checkpoints)Math.abs(s.z-n)<12||(n=s.z,e(s.x,s.z-5,s.y));if(!i.boxAssets){let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createLinearGradient(0,0,128,128);o.addColorStop(0,"#ffe45e"),o.addColorStop(1,"#ff8a1a"),r.fillStyle=o,r.fillRect(0,0,128,128),r.strokeStyle="#fff",r.lineWidth=8,r.strokeRect(6,6,116,116),r.fillStyle="#fff",r.strokeStyle="#7a3500",r.lineWidth=6,r.font="bold 92px Arial",r.textAlign="center",r.textBaseline="middle",r.strokeText("?",64,70),r.fillText("?",64,70);let a=new tn(s);a.colorSpace=De,i.boxAssets={geo:new Qt(.95,.95,.95),mat:new ne({map:a,emissive:"#ff9a00",emissiveIntensity:.55,roughness:.35})}}for(let s of t){let r=new et(i.boxAssets.geo,i.boxAssets.mat);r.position.set(s.x,s.y,s.z),r.castShadow=!0,this.scene.add(r),this.boxes.push({...s,mesh:r,respawn:0})}}findLeader(){if(this.players.length<2||this.levelTime<4)return-1;let t=this.localId,e=this.finished?1e5:-this.me.body.z;for(let n of this.remotes.values()){if(!n.has)continue;let s=n.flags&8?1e5:-n.z;s>e+.5&&(e=s,t=n.id)}return t}pickup(t,e){t.respawn=9,t.mesh.visible=!1,Wt.pickup();let n=this.multi?["turbo","turbo","turbo","jump","jump","shield","shield","mega","mega","mega"]:["turbo","jump","shield"],s=e||n[Math.random()*n.length|0],r=this.fx,o=this.me.body;return s==="turbo"?(r.turbo=5,this.toast("\u{1F680} TURBO!")):s==="jump"?(r.jump=7,this.toast("\u{1F998} SUPER JUMP!")):s==="shield"?(r.shield=8,this.toast("\u{1F6E1}\uFE0F SHIELD!")):(r.mega=2,this.toast("\u{1F3CF} MEGA BAT x2!")),this.particles.emit(o.x,o.y+1,o.z,26,{rainbow:!0,speed:4,up:4,life:.7,size:.32}),s}updatePowerups(t,e){let n=performance.now()/1e3,s=this.fx;for(let o of this.boxes){if(o.respawn>0){o.respawn-=t,o.respawn<=0&&(o.mesh.visible=!0);continue}o.mesh.rotation.y+=t*2,o.mesh.rotation.x=Math.sin(n*1.5+o.x)*.25,o.mesh.position.y=o.y+Math.sin(n*2.5+o.x)*.15,!(this.finished||this.over||this.levelTime<0)&&Math.abs(e.x-o.x)<1.3&&Math.abs(e.z-o.z)<1.3&&e.y<o.y+.8&&e.y+ve.H>o.y-.5&&this.pickup(o)}for(let o of["turbo","jump","shield"])s[o]>0&&(s[o]=Math.max(0,s[o]-t));e.speedMul=(s.turbo>0?1.4:1)*1,e.jumpMul=s.jump>0?1.3:1,e.shield=s.shield,s.turbo>0&&Math.hypot(e.vx,e.vz)>3&&Math.random()<.7&&this.particles.emit(e.x,e.y+.3,e.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});let r=["turbo","jump","shield"].map(o=>s[o]>0?o+Math.ceil(s[o]):"").join("|")+"|"+s.mega;if(r!==this.fxSig){this.fxSig=r;let o=pt("hud-fx");if(!o)return;o.innerHTML="";let a=(l,c)=>{let h=document.createElement("div");h.className="fx",h.textContent=l+" "+c,o.appendChild(h)};s.turbo>0&&a("\u{1F680}",Math.ceil(s.turbo)+"s"),s.jump>0&&a("\u{1F998}",Math.ceil(s.jump)+"s"),s.shield>0&&a("\u{1F6E1}\uFE0F",Math.ceil(s.shield)+"s"),s.mega>0&&a("\u{1F3CF}","x"+s.mega)}}onLocalFinish(){this.finished=!0,this.finishTime=Math.max(0,this.levelTime),Wt.finish();let t=this.info.finishZ;this.particles.emit(0,this.info.finishY+6,t,120,{rainbow:!0,speed:9,up:10,life:1.8,size:.5,gravity:7,spread:10}),this.particles.emit(-9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.particles.emit(9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.multi?this.toast("FINISHED!"):this.endSingle(!1)}endSingle(t){if(this.over)return;this.over=!0,this.winnerSelf=!t;let e=-this.info.finishZ,n=dn(-this.me.body.z/e,0,1),s="";if(!t){let o=this.finishTime,a=kp(this.level);!a||o<a?(localStorage.setItem("ph_best_"+this.level,String(o)),s=a?"NEW BEST TIME!":"First clear!"):s=`Best: ${Qc(a)}`}let r=[{place:1,name:this.me.name,char:this.me.char,win:!t,tm:t?`${Math.round(n*100)}% of the track`:Qc(this.finishTime),self:!0}];setTimeout(()=>_t.showResults({title:t?"TIME'S UP!":"YOU DID IT!",sub:t?"You ran out of time. Try again!":s,rows:r,single:!0,win:!t}),t?300:1400),Kc(!0),t?Wt.lose():Wt.win()}onFin(t){this.finishedMap.set(t.id,t.place);let e=this.players.find(n=>n.id===t.id);t.id===this.localId?this.toast(`${xf(t.place)} PLACE!`):(this.toast(`${e?e.name:"Player"} finished ${xf(t.place)}!`),Wt.checkpoint())}onEnd(t){this.over=!0;let e=t.winnerId===this.localId;this.winnerSelf=e,Kc(!0),e?Wt.win():Wt.lose();let n=t.results.map(r=>({place:r.place,name:r.name,char:r.char,win:r.id===t.winnerId,self:r.id===this.localId,tm:r.finished?Qc(r.time):`${Math.round(r.progress*100)}% of the track`})),s=t.results[0];setTimeout(()=>_t.showResults({title:e?"YOU WIN!":`${s?s.name:"Nobody"} WINS!`,sub:t.reason==="time"?"Time's up - the nearest player to the finish gate wins!":"First to the finish gate wins!",rows:n,single:!1,win:e}),900)}addRemote(t){this.remotes.has(t.id)||(this.players.push(t),this.remotes.set(t.id,new ba(t,this.scene)),this.buildProgress(),this.toast(t.name+" joined the race!"))}removeRemote(t){let e=this.remotes.get(t);if(e){e.dispose(this.scene),this.remotes.delete(t);let n=this.dots.get(t);n&&n.remove()}}tagScale(t,e,n){if(!t)return;let s=e.distanceTo(this.camera.position),r=dn(s*.07,1,5.2)*n;t.scale.set(2.8*r,.7*r,1),t.visible=s<260}updateCamera(t){let e=this.me.body,n=Math.cos(this.camPitch),s=Math.sin(this.camPitch),r=Math.hypot(e.vx,e.vz);this.camera.fov=jr(this.camera.fov,(Gn&&!this.drive?54+dn(r-4,0,6)*.8:62)+(Gn&&!this.drive?0:dn(r-10,0,12)*.9),Math.min(1,t*4)),this.camera.updateProjectionMatrix();let o=this.camDist;if(this.drive){let u=this.drive.st;this.lookT-=t,o=9.2+Math.min(4,Math.abs(u.speed)*.12),this.lookT<=0&&(this.camYaw=Ef(this.camYaw,u.yaw+Math.PI,1-Math.exp(-3.2*t)),this.camPitch+=(.28-this.camPitch)*(1-Math.exp(-2*t)))}this.shoulder+=((Gn&&!this.drive?.62:0)-this.shoulder)*Math.min(1,t*5);let a=e.x+Math.cos(this.camYaw)*this.shoulder,l=e.y+(this.drive?1.1:Gn?1.5:1.35),c=e.z-Math.sin(this.camYaw)*this.shoulder;this.camInit||(this.camTarget.set(a,l,c),this.camInit=!0);let h=1-Math.exp(-14*t);if(this.camTarget.x+=(a-this.camTarget.x)*h,this.camTarget.z+=(c-this.camTarget.z)*h,this.camTarget.y+=(l-this.camTarget.y)*(1-Math.exp(-7*t)),this.camera.position.set(this.camTarget.x+Math.sin(this.camYaw)*n*o,this.camTarget.y+s*o+.4,this.camTarget.z+Math.cos(this.camYaw)*n*o),this.meta.city){let u=this.camera.position,f=this.world.terrain,d=this.camTarget.x,g=this.camTarget.y,x=this.camTarget.z,m=u.x-d,p=u.y-g,v=u.z-x,T=1;for(let _ of this.info.track.boxes||[]){if(g>_.h+1&&u.y>_.h+1)continue;let b=0,S=T,y=!0;for(let[w,A,L,M]of[[d,m,_.x0-.45,_.x1+.45],[x,v,_.z0-.45,_.z1+.45],[g,p,-5,_.h+.45]]){if(Math.abs(A)<1e-6){if(w<L||w>M){y=!1;break}continue}let P=(L-w)/A,C=(M-w)/A;if(P>C){let I=P;P=C,C=I}if(b=Math.max(b,P),S=Math.min(S,C),b>S){y=!1;break}}y&&b<T&&b>0&&(T=b)}for(let _=1;_<=8;_++){let b=_/8*T;if(g+p*b<f(d+m*b,x+v*b)+.35){T=Math.max(.05,(_-1)/8*T);break}}this.camK=this.camK===void 0?1:this.camK;let E=dn(T,.06,1);this.camK=E<this.camK?E:this.camK+(E-this.camK)*Math.min(1,t*3),this.camK<1&&u.set(d+m*this.camK,g+p*this.camK,x+v*this.camK),u.y<f(u.x,u.z)+.35&&(u.y=f(u.x,u.z)+.35)}if(this.shake>.01){let u=this.shake*.5;this.camera.position.x+=(Math.random()-.5)*u,this.camera.position.y+=(Math.random()-.5)*u*.7,this.camera.position.z+=(Math.random()-.5)*u,this.shake*=Math.exp(-7*(this.lastDt||.016))}else this.shake=0;this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}updateLights(){let t=this.camTarget;this.sun.position.set(t.x+this.sunDir.x,t.y+this.sunDir.y,t.z+this.sunDir.z),this.sun.target.position.copy(t)}count(t){let e=pt("hud-count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}toast(t){if(this.meta.city)return;let e=pt("hud-toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}rank(){var s;let t=this.me.body,e=1,n=(s=this.finishedMap.get(this.localId))!=null?s:this.finished&&!this.multi?1:null;if(n)return n;for(let r of this.remotes.values())(this.finishedMap.get(r.id)||r.has&&r.z<t.z-.5)&&e++;return e}hud(t){if(this.hudT+=t,this.hintT>0&&(this.hintT-=t,this.hintT<=0&&pt("hud-hint").classList.add("fade")),this.hudT<.066)return;this.hudT=0;let e=this.levelTime,n=Math.max(0,Math.floor(e)),s=pt("hud-timer");s.textContent=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,s.classList.remove("low");{let c=!this.multi&&!this.meta.free;pt("hud-hint").classList.toggle("single",c),document.body.classList.toggle("single",c)}pt("hud-obj").classList.add("hidden"),pt("hud-rank").textContent=this.meta.city?"Punjabi GTA":this.multi?xf(this.rank())+" / "+this.players.length:`${Math.max(0,Math.round(dn(-this.me.body.z/-this.info.finishZ,0,1)*100))}%`;let r=-this.info.finishZ,o=(c,h)=>{let u=this.dots.get(c);u&&(u.style.left=dn(-h/r,0,1)*100+"%")};o(this.localId,this.me.body.z);for(let c of this.remotes.values())o(c.id,c.has?c.z:0);let a=pt("click-hint"),l=!this.over&&!this.menuOpen&&document.pointerLockElement!==Hi;l!==a.classList.contains("show")&&a.classList.toggle("show",l);{let c=pt("t-bat");c&&c.classList.toggle("cd",this.batCd>0)}this.multi&&(pt("hud-net").textContent=`ping ${Math.round(_t.net.rtt)} ms`)}render(){Nn.render(this.scene,this.camera)}destroy(){this.peds&&(this.peds.dispose(),this.peds=null),$c(),uf();{let t=pt("uw");t&&t.classList.remove("on")}document.body.classList.remove("sky-swap"),document.body.classList.remove("city-mode"),ff(),df(),Jr(),pf(!1),document.body.classList.remove("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("near-swing"),document.body.classList.remove("in-race"),document.body.classList.remove("single"),pt("pause").classList.add("hidden"),this.menuOpen=!1,pt("hud").classList.add("hidden"),pt("hud-count").textContent="",pt("hud-toast").classList.remove("show");{let t=pt("hud-fx");t&&(t.innerHTML="")}for(let t of this.remotes.values())t.dispose(this.scene);this.me.model.dispose(),this.scenery.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),this.scene.clear()}},uM=["title","profile","levels","mp","lobby","results","help"];function Zn(i){for(let t of uM){let e=pt("s-"+t);e.classList.toggle("active",t===i),e.classList.remove("hidden")}_t.screen=i}var Bp=0;function Ea(i){let t=pt("toast-global");t.textContent=i,t.classList.add("show"),clearTimeout(Bp),Bp=setTimeout(()=>t.classList.remove("show"),3200)}function Vp(i,t){i.innerHTML="",_i.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.innerHTML=`<img alt="${e.name}" src="${vf[e.id]||""}"><b style="color:${e.color}">${e.name}</b>`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function Mf(i,t,e){i.querySelectorAll(".card").forEach(n=>{let s=+n.dataset.id;n.classList.toggle("sel",s===t),n.classList.toggle("taken",e&&e.has(s)&&s!==t)})}function Wp(i,t){i.innerHTML="";let e=0;ha.forEach(n=>{if(n.hidden)return;e++;let s=document.createElement("div");s.className="card",s.dataset.id=n.id,s.style.background=`linear-gradient(160deg, ${n.colors[0]}cc, ${n.colors[1]}cc)`;let r=kp(n.id);s.innerHTML=`<div><h4>${e}. ${n.name}</h4><div class="stars">${"\u2605".repeat(n.stars)}${"\u2606".repeat(5-n.stars)}</div></div><div class="blurb">${n.blurb}</div><div class="meta">${n.sub} &bull; no time limit${r?" &bull; best "+Qc(r):""}</div>`,s.onclick=()=>t.onPick(n.id),i.appendChild(s)})}function fM(){let i=new la({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(256,320,!1),i.outputColorSpace=De,i.toneMapping=Lr,i.setClearColor(0,0);let t=new Li;t.add(new Ss("#ffffff","#b9a4ff",1.6));let e=new ws("#ffffff",2.6);e.position.set(3,5,6),t.add(e);let n=new Is(i);t.environment=n.fromScene(new ca,.04).texture,t.environmentIntensity=.7;let s=new rn(30,256/320,.1,50);s.position.set(0,1.25,6.6),s.lookAt(0,.98,0);let r=[];for(let o=0;o<_i.length;o++){let a=new hs(o);a.group.rotation.y=-.35,t.add(a.group),a.update(.016,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1}),i.render(t,s),r.push(i.domElement.toDataURL("image/png")),t.remove(a.group),a.dispose()}return n.dispose(),i.dispose(),i.forceContextLoss(),r}function Ma(i){_t.mode=i,pt("inp-name").value=_t.name,pt("profile-title").textContent="Choose your player",Vp(pt("char-cards"),{onPick:t=>{_t.char=t,Mf(pt("char-cards"),t),sn.sel=t,Wt.select(),sn.burst(t)}}),Mf(pt("char-cards"),_t.char),sn.setTitle(_t.char),sn.mode="profile",sn.sel=_t.char,Zn("profile")}function dM(){let i=pt("inp-name").value.trim().replace(/[<>&"']/g,"").slice(0,14);return i||(i=["Haris","Speedy","Bouncy","Zippy"][Math.floor(Math.random()*4)]+Math.floor(Math.random()*90+10)),_t.name=i,localStorage.setItem("ph_name",i),localStorage.setItem("ph_char",String(_t.char)),i}function pM(){Wp(pt("level-cards"),{onPick:i=>{Wt.go(),to(i)}}),Zn("levels")}function to(i){Oi(),Y&&(Y.destroy(),Y=null),_t.level=i,Y=new eh(i,[{id:1,name:_t.name,char:_t.char}],1,{multi:!1,t0:performance.now()+3600,seed:1+Math.floor(Math.random()*1e9)}),Os(),Zn("none"),pt("s-results").classList.add("hidden"),Sa()}_t.showResults=function(i){let t=pt("res-list");t.innerHTML="",i.rows.forEach(s=>{let r=document.createElement("div");r.className="res-row"+(s.win?" win":"");let o=_i[s.char];r.innerHTML=`<div class="place">${s.place<=3?aM[s.place-1]:s.place}</div><div class="nm"><i style="background:${o.color}"></i>${s.name.replace(/[<>&]/g,"")}${s.self?" <small>(you)</small>":""}</div><div class="tm">${s.tm}</div>`,t.appendChild(r)}),pt("res-title").textContent=i.title,pt("res-sub").textContent=i.sub||"";let e=pt("b-res-retry"),n=pt("b-res-next");if(i.single)e.style.display="",e.textContent="RETRY",n.style.display="",n.textContent=_t.level<ha.length-1?"NEXT LEVEL":"LEVELS",n.disabled=!1,_t.resMode="single";else{e.style.display="none";let s=_t.room&&_t.room.hostId===_t.myId;n.style.display="",n.textContent=s?"BACK TO LOBBY":"WAITING FOR HOST...",n.disabled=!s,_t.resMode="multi"}wa(),Zn("results")};pt("b-res-menu").onclick=()=>{Wt.back(),Sf()};pt("b-res-retry").onclick=()=>{Wt.click(),to(_t.level)};pt("b-res-next").onclick=()=>{Wt.click(),_t.resMode==="single"?_t.level<ha.length-1?to(_t.level+1):(Y&&Y.destroy(),Y=null,pM()):_t.net.send({t:"again"})};function Sf(){Y&&(Y.destroy(),Y=null),_t.net&&_t.room&&_t.net.send({t:"leave"}),_t.room=null,wa(),sn.setTitle(),Zn("title")}async function mM(){if(_t.net&&_t.net.connected)return _t.net;let i=new jc;return i.on("joined",t=>{_t.myId=t.id}),i.on("lobby",xM),i.on("err",t=>{pt("mp-status").textContent=t.msg,t.retry&&_t.screen==="mp"?(nh(),th=setTimeout(()=>{_t.screen==="mp"&&!_t.room&&bf("join")},2e3)):Ea(t.msg)}),i.on("go",yM),i.on("s",t=>{if(Y&&Y.multi){let e=Y.remotes.get(t.id);e&&e.push(t)}}),i.on("fin",t=>{Y&&Y.multi&&Y.onFin(t)}),i.on("bat",t=>{Y&&Y.multi&&Y.onBat(t)}),i.on("carpark",t=>{Y&&Y.multi&&Y.onCars({[t.c]:t})}),i.on("cars",t=>{Y&&Y.multi?Y.onCars(t.cars):_t.pendingCars=t.cars}),i.on("shove",t=>{Y&&Y.multi&&Y.onShove(t)}),i.on("jack",t=>{Y&&Y.multi&&Y.onJack(t)}),i.on("end",t=>{Y&&Y.multi&&Y.onEnd(t)}),i.on("left",t=>{Y&&Y.multi&&Y.removeRemote(t.id)}),i.on("close",()=>{Ea("Disconnected from server"),Y&&(Y.destroy(),Y=null),_t.room=null,wa(),sn.setTitle(),Zn("title")}),await i.connect(),_t.net=i,i}function gM(){pt("mp-status").textContent="",sn.setTitle(_t.char),Zn("mp")}var th=null;function nh(){th&&(clearTimeout(th),th=null)}async function bf(i){Oi(),nh();let t=pt("mp-status");t.textContent="Connecting...";try{let e=await mM();i==="create"?e.send({t:"create",name:_t.name,char:_t.char}):e.send({t:"join",name:_t.name,char:_t.char}),t.textContent=i==="create"?"":"Looking for a room..."}catch{t.textContent="Could not connect to the game server. Is it running?",Ea("Could not connect to the game server")}}function xM(i){nh();let t=!_t.room,e=_t.room;if(_t.room=i,Y&&Y.multi){for(let n of i.players)n.id!==_t.myId&&!Y.remotes.has(n.id)&&(i.phase==="race"||i.phase==="countdown")&&Y.addRemote(n);if(i.phase==="lobby"&&_t.screen!=="lobby")Y.destroy(),Y=null,wa(),Op(),Zn("lobby"),Zr(99);else if(_t.screen==="results"){let n=i.hostId===_t.myId;_t.resMode==="multi"&&(pt("b-res-next").textContent=n?"BACK TO LOBBY":"WAITING FOR HOST...",pt("b-res-next").disabled=!n)}return}(t||_t.screen==="mp"||_t.screen==="profile"||_t.screen==="title")&&(i.phase==="lobby"||i.phase==="results")&&(Zn("lobby"),Zr(99)),e&&i.players.length>e.players.length&&Wt.join(),Op()}function Op(){let i=_t.room;if(!i)return;let t=i.players.find(r=>r.id===_t.myId);t&&(_t.char=t.char),pt("lobby-code").textContent=i.code,pt("lobby-count").textContent=`${i.players.length}/${4}`;let e=pt("lobby-players");e.innerHTML="";for(let r=0;r<4;r++){let o=i.players[r],a=document.createElement("div");a.className="slot"+(o?"":" empty"),a.innerHTML=o?`<i style="background:${_i[o.char].color}"></i><span>${o.name.replace(/[<>&]/g,"")}</span>${o.id===i.hostId?"<span>\u{1F451}</span>":""}${o.id===_t.myId?'<span class="you">YOU</span>':""}`:'<i style="background:#888"></i><span>Waiting for player...</span>',e.appendChild(a)}let n=new Set(i.players.filter(r=>r.id!==_t.myId).map(r=>r.char));Vp(pt("lobby-chars"),{small:!0,onPick:r=>{n.has(r)||(Wt.select(),_t.net.send({t:"char",char:r}))}}),Mf(pt("lobby-chars"),_t.char,n);let s=i.hostId===_t.myId;Wp(pt("lobby-levels"),{onPick:r=>{s&&(Wt.click(),_t.net.send({t:"level",level:r}))}}),pt("lobby-levels").querySelectorAll(".card").forEach(r=>{r.classList.toggle("sel",+r.dataset.id===i.level),s||(r.style.cursor="default")}),pt("lobby-level-note").textContent=s?"(you choose)":"(host chooses)",pt("b-start").disabled=!s,pt("b-start").firstElementChild.textContent=s?"START RACE":"WAITING FOR HOST",pt("lobby-hint").textContent=s?i.players.length<2?"Tell friends to tap MULTIPLAYER on the same link. You can also start alone.":"Everyone ready? Hit start!":"The host will start the race.",sn.setLobby(i.players)}function yM(i){Oi(),Y&&(Y.destroy(),Y=null);let t=_t.room;if(!t)return;let e=i.order.map(n=>t.players.find(s=>s.id===n)).filter(Boolean);_t.level=i.level,Y=new eh(i.level,e,_t.myId,{multi:!0,t0:i.t0,seed:i.seed}),Os(),Zn("none"),Sa()}function Sa(){if(Y&&!Y.over&&document.pointerLockElement!==Hi)try{let i=Hi.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}function wa(){document.pointerLockElement&&document.exitPointerLock()}document.addEventListener("pointerlockchange",()=>{let i=document.pointerLockElement===Hi;i?yf=!0:yf&&Y&&!Y.over&&!Y.menuOpen&&!Dn&&Tf(),i||(yf=!1),pt("click-hint").classList.toggle("show",!!Y&&!Y.over&&!Y.menuOpen&&!i)});var yf=!1,ih=!1;Hi.addEventListener("mousedown",i=>{ih=!0,Y&&!Y.over&&(i.button===0&&Y.hunt&&document.pointerLockElement===Hi&&!Y.menuOpen?Y.fireHeld=!0:i.button===0&&Y.multi&&document.pointerLockElement===Hi&&!Y.menuOpen?Y.swing():Sa())});window.addEventListener("mouseup",()=>{ih=!1,Y&&(Y.fireHeld=!1)});window.addEventListener("mousemove",i=>{Y&&!Y.over&&(document.pointerLockElement===Hi||ih)&&Y.look(i.movementX,i.movementY)});pt("click-hint").addEventListener("click",Sa);window.addEventListener("keydown",i=>{if(i.target&&i.target.tagName==="INPUT"){i.code==="Enter"&&(_t.screen==="profile"?pt("b-profile-next").click():_t.screen==="mp"&&pt("b-join").click());return}Y&&!Y.over&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(Ge.add(i.code),i.code==="Space"&&(wn.jump=!0),(i.code==="ShiftLeft"||i.code==="ShiftRight"||i.code==="KeyF")&&(wn.dive=!0),i.code==="KeyM"&&wf(),i.code==="KeyG"&&(wn.grab=!0),Y&&!Y.over&&!Y.menuOpen&&Y.meta.city&&(i.code==="KeyZ"?Y.toggleCrouch():i.code==="KeyX"?Y.toggleSit():i.code==="KeyF"&&Y.punch()),i.code==="KeyB"&&Y&&!Y.menuOpen&&Y.swing(),i.code==="KeyC"&&Y&&!Y.over&&!i.repeat&&Y.toggleCar(),i.code==="KeyH"&&Y&&!Y.menuOpen&&Y.honkOn(),(i.code==="Escape"||i.code==="KeyP")&&Y&&!Y.over&&(Y.menuOpen?sh():Tf()))});window.addEventListener("keyup",i=>{Ge.delete(i.code),i.code==="KeyH"&&Jr()});window.addEventListener("blur",()=>{Ge.clear(),ih=!1});window.addEventListener("resize",Os);function wf(){_t.muted=!_t.muted,bp(_t.muted),pt("b-sound").textContent="SOUND: "+(_t.muted?"OFF":"ON"),qp()}function Xp(){pt("p-gfx").textContent="\u{1F5A5} GFX: "+(de.low?"LOW":"AUTO")}function qp(){pt("p-sound").textContent="\u{1F50A} SOUND: "+(_t.muted?"OFF":"ON")}function Tf(){!Y||Y.over||Y.menuOpen||(Y.menuOpen=!0,Y.multi||(Y.paused=!0,Y.pauseAt=performance.now()),wa(),Ge.clear(),Oe.x=Oe.y=0,Oe.jump=!1,pt("p-title").textContent=Y.multi?"Menu":"Paused",pt("p-info").textContent=Y.meta.name+(Y.multi?"  \u2022  race goes on!":""),Xp(),pt("p-retry").classList.toggle("hidden",Y.multi),pt("p-full").classList.toggle("hidden",!(document.documentElement&&document.documentElement.requestFullscreen)),qp(),pt("pause").classList.remove("hidden"),pt("click-hint").classList.remove("show"),Wt.click())}function sh(){!Y||!Y.menuOpen||(Y.paused&&(Y.t0+=performance.now()-Y.pauseAt,Y.paused=!1),Y.menuOpen=!1,pt("pause").classList.add("hidden"),Sa())}pt("b-menu").addEventListener("click",()=>Y&&Y.menuOpen?sh():Tf());pt("p-resume").onclick=()=>{Wt.click(),sh()};pt("p-sound").onclick=()=>{Oi(),wf(),Wt.click()};pt("p-gfx").onclick=()=>{de.low=!de.low;try{localStorage.setItem("ph_low",de.low?"1":"0")}catch{}Wt.click(),cM(),Xp()};pt("p-full").onclick=()=>{let i=document,t=i.documentElement;try{!i.fullscreenElement&&t.requestFullscreen?t.requestFullscreen({navigationUI:"hide"}):i.exitFullscreen&&i.fullscreenElement&&i.exitFullscreen()}catch{}};{let i=document,t=i.documentElement,e=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=()=>window.navigator.standalone===!0||typeof window.matchMedia=="function"&&window.matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches,s=()=>!!(i.fullscreenElement||i.webkitFullscreenElement),r=()=>{document.body.classList.toggle("is-full",s()),document.body.classList.toggle("standalone",n())};i.addEventListener("fullscreenchange",r),i.addEventListener("webkitfullscreenchange",r),r(),pt("b-full").addEventListener("click",()=>{try{if(s()){(i.exitFullscreen||i.webkitExitFullscreen).call(i);return}let o=t.requestFullscreen||t.webkitRequestFullscreen;if(o){let a=o.call(t,{navigationUI:"hide"}),l=()=>{try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}};a&&a.then?a.then(l).catch(()=>{}):l()}else if(e){let a=pt("ios-hint");a.classList.remove("hidden"),a.onclick=()=>a.classList.add("hidden"),setTimeout(()=>a.classList.add("hidden"),6e3)}}catch{}})}pt("p-retry").onclick=()=>{Wt.click();let i=_t.level;pt("pause").classList.add("hidden"),Y&&(Y.menuOpen=!1),to(i)};pt("p-quit").onclick=()=>{Wt.back(),pt("pause").classList.add("hidden"),Sf()};async function vM(){await yp(),sn=new _f;try{vf=fM()}catch{vf=["","","",""]}Os(),sn.setTitle(),Zn("title"),pt("b-single").onclick=()=>{Oi(),Zr(99),Wt.click(),Ma("single")},pt("b-multi").onclick=()=>{Oi(),Zr(99),Wt.click(),Ma("multi")},pt("b-help").onclick=()=>{Oi(),Wt.click(),pt("s-help").classList.add("active")},pt("b-help-close").onclick=()=>{Wt.back(),pt("s-help").classList.remove("active")},pt("b-sound").onclick=()=>{Oi(),wf(),Wt.click()},pt("b-profile-back").onclick=()=>{Wt.back(),sn.setTitle(),Zn("title")},pt("b-profile-next").onclick=()=>{dM(),Wt.click(),_t.mode==="single"?(Wt.go(),to(0)):gM()},pt("b-levels-back").onclick=()=>{Wt.back(),Ma("single")},pt("b-mp-back").onclick=()=>{Wt.back(),nh(),Ma("multi")},pt("b-create").onclick=()=>{Wt.click(),bf("create")},pt("b-join").onclick=()=>{Wt.click(),bf("join")},pt("b-leave").onclick=()=>{Wt.back(),Sf()},pt("b-start").onclick=()=>{_t.room&&_t.room.hostId===_t.myId&&(Wt.click(),_t.net.send({t:"start"}))},pt("b-copy").onclick=async()=>{let s=`${location.origin}${location.pathname}?room=${_t.room?_t.room.code:""}`;try{await navigator.clipboard.writeText(s),Ea("Invite link copied!")}catch{prompt("Copy this invite link:",s)}},new URLSearchParams(location.search).get("room")&&(Ma("multi"),Ea("Pick your name & player, then CONTINUE and JOIN ROOM")),pt("loader").classList.add("done"),setTimeout(()=>pt("loader").remove(),600);let t=performance.now(),e=performance.now();try{let s=new Worker(URL.createObjectURL(new Blob(["setInterval(()=>postMessage(0),50)"],{type:"text/javascript"})));s.onmessage=()=>{if(!Y||!Y.multi||Y.paused)return;let r=performance.now();if(r-e>200){let o=Math.min(.25,(r-e)/1e3);e=r,t=r,Y.update(o)}else r-(Y.lastSend||0)>100&&Y.sendSnap()}}catch{}let n=s=>{requestAnimationFrame(n);let r=Math.min(.1,(s-t)/1e3);t=s,e=performance.now(),lM(r),Y?(Y.over&&Y.menuOpen&&sh(),Y.paused||Y.update(r),Y.render()):(sn.update(r),Nn.render(sn.scene,sn.camera))};requestAnimationFrame(n)}vM().catch(i=>{console.error(i);let t=document.querySelector("#loader p");t&&(t.textContent="Error: "+i.message)});window.__ph={app:_t,Remote:ba,startSingle:i=>to(i),keys:Ge,press:wn,touch:Oe,get race(){return Y},get stage(){return sn}};(function(){Dn&&document.body.classList.add("touch");let t=pt("touch"),e=pt("joy"),n=pt("joy-knob");if(!t||!e||!n)return;let s=56,r=null,o=null,a=0,l=0,c=0,h=0,u=(x,m)=>{for(let p of x)if(p.identifier===m)return p;return null};t.addEventListener("touchstart",x=>{x.preventDefault();for(let m of x.changedTouches)m.clientX<window.innerWidth*.5&&r===null?(r=m.identifier,a=m.clientX,l=m.clientY,e.style.left=a+"px",e.style.top=l+"px",e.classList.add("on"),n.style.transform="translate(-50%, -50%)"):o===null&&m.clientX>=window.innerWidth*.5&&(o=m.identifier,c=m.clientX,h=m.clientY)},{passive:!1}),t.addEventListener("touchmove",x=>{x.preventDefault();let m=r!==null?u(x.touches,r):null;if(m){let v=m.clientX-a,T=m.clientY-l,E=Math.hypot(v,T);E>s&&(v*=s/E,T*=s/E),n.style.transform=`translate(calc(-50% + ${v}px), calc(-50% + ${T}px))`;let _=v/s,b=T/s,S=Math.hypot(_,b),y=S<.14?0:(S-.14)/.86/S;Oe.x=_*y,Oe.y=-b*y}let p=o!==null?u(x.touches,o):null;p&&(Y&&!Y.over&&Y.look((p.clientX-c)*1.7,(p.clientY-h)*1.7),c=p.clientX,h=p.clientY)},{passive:!1});let f=x=>{for(let m of x.changedTouches)m.identifier===r&&(r=null,Oe.x=Oe.y=0,e.classList.remove("on")),m.identifier===o&&(o=null)};t.addEventListener("touchend",f),t.addEventListener("touchcancel",f);let d=(x,m,p)=>{let v=pt(x);if(!v)return;v.addEventListener("touchstart",E=>{E.preventDefault(),E.stopPropagation(),m()},{passive:!1});let T=E=>{E.preventDefault(),E.stopPropagation(),p&&p()};v.addEventListener("touchend",T,{passive:!1}),v.addEventListener("touchcancel",T,{passive:!1})},g=(x,m,p)=>{d(x,m,p);let v=pt(x);v&&(v.addEventListener("mousedown",T=>{T.preventDefault(),T.stopPropagation(),m()}),p&&(v.addEventListener("mouseup",p),v.addEventListener("mouseleave",p)))};g("a-jump",()=>{Y&&!Y.over&&!Y.menuOpen&&(wn.jump=!0,Oe.jump=!0)},()=>{Oe.jump=!1}),g("a-crouch",()=>{Y&&!Y.over&&!Y.menuOpen&&Y.toggleCrouch()}),g("a-sit",()=>{Y&&!Y.over&&!Y.menuOpen&&Y.toggleSit()}),g("a-punch",()=>{Y&&!Y.over&&!Y.menuOpen&&Y.punch()}),d("t-jump",()=>{Y&&!Y.over&&(wn.jump=!0,Oe.jump=!0)},()=>{Oe.jump=!1}),d("t-dive",()=>{Y&&!Y.over&&(wn.dive=!0)}),d("t-bat",()=>{Y&&!Y.over&&!Y.menuOpen&&Y.swing()}),d("c-horn",()=>{Y&&Y.honkOn()},()=>Jr()),d("b-grab",()=>{Oe.grab=!0,wn.grab=!0},()=>{Oe.grab=!1});{let x=pt("b-grab");x&&(x.addEventListener("mousedown",m=>{m.preventDefault(),Oe.grab=!0,wn.grab=!0}),window.addEventListener("mouseup",()=>{Oe.grab=!1}))}d("b-car",()=>{Y&&Y.toggleCar()}),d("b-exit",()=>{Y&&Y.toggleCar()});for(let x of["b-car","b-exit"]){let m=pt(x);m&&m.addEventListener("click",()=>{Y&&Y.toggleCar(),m.blur()})}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
