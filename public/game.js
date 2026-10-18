(()=>{var ud=0,kh=1,fd=2;var Vo=1,Ul=2,Rr=3,di=0,sn=1,hn=2,pi=0,Ki=1,mi=2,Gh=3,Vh=4,dd=5;var bs=100,pd=101,md=102,gd=103,xd=104,yd=200,vd=201,_d=202,Md=203,Wh=204,Xh=205,bd=206,Ed=207,Sd=208,wd=209,Td=210,Ad=211,Rd=212,Cd=213,Id=214,tl=0,el=1,nl=2,rr=3,il=4,sl=5,rl=6,ol=7,Fl=0,Pd=1,Ld=2,ii=0,qh=1,Yh=2,Zh=3,Cr=4,$h=5,Jh=6,Kh=7,Ah="attached",Dd="detached",jh=300,ji=301,Es=302,zl=303,Bl=304,Wo=306,Ri=1e3,ci=1001,al=1002,ln=1003,Nd=1004;var Xo=1005;var fn=1006,Ol=1007;var Qi=1008;var Tn=1009,Qh=1010,tu=1011,Ir=1012,Hl=1013,si=1014,Bn=1015,ri=1016,kl=1017,Gl=1018,Pr=1020,eu=35902,nu=35899,iu=1021,su=1022,On=1023,ui=1026,ts=1027,Vl=1028,Wl=1029,es=1030,Xl=1031;var ql=1033,qo=33776,Yo=33777,Zo=33778,$o=33779,Yl=35840,Zl=35841,$l=35842,Jl=35843,Kl=36196,jl=37492,Ql=37496,tc=37488,ec=37489,Jo=37490,nc=37491,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,hc=37815,uc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,xc=36492,yc=36494,vc=36495,_c=36283,Mc=36284,Ko=36285,bc=36286;var fo=2300,ll=2301,ja=2302,Rh=2303,Ch=2400,Ih=2401,Ph=2402;var Ud=3200;var jo=0,Fd=1,Pi="",Ne="srgb",po="srgb-linear",mo="linear",Le="srgb";var Qa=7680;var zd=519,Bd=512,Od=513,Hd=514,Ec=515,kd=516,Gd=517,Sc=518,Vd=519,ru=35044,Lr=35048;var ou="300 es",jn=2e3,or=2001;function Vp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){let i=go("canvas");return i.style.display="block",i}var Tf={},ar=null;function xo(...i){let t="THREE."+i.shift();ar?ar("log",t,...i):console.log(t,...i)}function Xd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ne(...i){i=Xd(i);let t="THREE."+i.shift();if(ar)ar("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=Xd(i);let t="THREE."+i.shift();if(ar)ar("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function gs(...i){let t=i.join(" ");t in Tf||(Tf[t]=!0,ne(...i))}function qd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yd={[tl]:el,[nl]:rl,[il]:ol,[rr]:sl,[el]:tl,[rl]:nl,[ol]:il,[sl]:rr},fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Af=1234567,lo=Math.PI/180,lr=180/Math.PI;function Qn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function au(i,t){return(i%t+t)%t}function Xp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qp(i,t,e){return i!==t?(e-i)/(t-i):0}function co(i,t,e){return(1-e)*i+e*t}function Yp(i,t,e,n){return co(i,t,1-Math.exp(-e*n))}function Zp(i,t=1){return t-Math.abs(au(i,t*2)-t)}function $p(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Kp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jp(i,t){return i+Math.random()*(t-i)}function Qp(i){return i*(.5-Math.random())}function tm(i){i!==void 0&&(Af=i);let t=Af+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function em(i){return i*lo}function nm(i){return i*lr}function im(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function om(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Dr={DEG2RAD:lo,RAD2DEG:lr,generateUUID:Qn,clamp:pe,euclideanModulo:au,mapLinear:Xp,inverseLerp:qp,lerp:co,damp:Yp,pingpong:Zp,smoothstep:$p,smootherstep:Jp,randInt:Kp,randFloat:jp,randFloatSpread:Qp,seededRandom:tm,degToRad:em,radToDeg:nm,isPowerOfTwo:im,ceilPowerOfTwo:sm,floorPowerOfTwo:rm,setQuaternionFromProperEuler:om,normalize:De,denormalize:Kn},du=class du{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};du.prototype.isVector2=!0;var yt=du,Ke=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+u*x;m<0&&(f=-f,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);p=Math.sin(p*v)/T,a=Math.sin(a*v)/T,l=l*p+f*a,c=c*p+d*a,h=h*p+g*a,u=u*p+x*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+g*a,u=u*p+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pu=class pu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return th.copy(this).projectOnVector(t),this.sub(th)}reflect(t){return this.sub(th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pu.prototype.isVector3=!0;var U=pu,th=new U,Rf=new Ke,mu=class mu{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],T=s[4],b=s[7],_=s[2],M=s[5],S=s[8];return r[0]=o*x+a*v+l*_,r[3]=o*m+a*T+l*M,r[6]=o*p+a*b+l*S,r[1]=c*x+h*v+u*_,r[4]=c*m+h*T+u*M,r[7]=c*p+h*b+u*S,r[2]=f*x+d*v+g*_,r[5]=f*m+d*T+g*M,r[8]=f*p+d*b+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eh.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eh.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};mu.prototype.isMatrix3=!0;var he=mu,eh=new he,Cf=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),If=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){let i={enabled:!0,workingColorSpace:po,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Le&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Le&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?mo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[po]:{primaries:t,whitePoint:n,transfer:mo,toXYZ:Cf,fromXYZ:If,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:Le,toXYZ:Cf,fromXYZ:If,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}var be=am();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hs,cl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hs===void 0&&(Hs=go("canvas")),Hs.width=t.width,Hs.height=t.height;let s=Hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lm=0,cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nh(s[o].image)):r.push(nh(s[o]))}else r=nh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nh(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}var cm=0,ih=new U,cn=class i extends fi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ci,s=ci,r=fn,o=Qi,a=On,l=Tn,c=i.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Qn(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ih).x}get height(){return this.source.getSize(ih).y}get depth(){return this.source.getSize(ih).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=jh;cn.DEFAULT_ANISOTROPY=1;var gu=class gu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,b=(d+1)/2,_=(p+1)/2,M=(h+f)/4,S=(u+x)/4,y=(g+m)/4;return T>b&&T>_?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=M/n,r=S/n):b>_?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=M/s,r=y/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=S/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gu.prototype.isVector4=!0;var Ce=gu,hl=class extends fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new cn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new cr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends hl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},yo=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ul=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Nl=class Nl{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hm,t,um)}lookAt(t,e,n){let s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Gi.crossVectors(n,Dn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Gi.crossVectors(n,Dn)),Gi.normalize(),Sa.crossVectors(Dn,Gi),s[0]=Gi.x,s[4]=Sa.x,s[8]=Dn.x,s[1]=Gi.y,s[5]=Sa.y,s[9]=Dn.y,s[2]=Gi.z,s[6]=Sa.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],T=n[7],b=n[11],_=n[15],M=s[0],S=s[4],y=s[8],w=s[12],A=s[1],C=s[5],E=s[9],L=s[13],I=s[2],D=s[6],F=s[10],H=s[14],K=s[3],V=s[7],Z=s[11],j=s[15];return r[0]=o*M+a*A+l*I+c*K,r[4]=o*S+a*C+l*D+c*V,r[8]=o*y+a*E+l*F+c*Z,r[12]=o*w+a*L+l*H+c*j,r[1]=h*M+u*A+f*I+d*K,r[5]=h*S+u*C+f*D+d*V,r[9]=h*y+u*E+f*F+d*Z,r[13]=h*w+u*L+f*H+d*j,r[2]=g*M+x*A+m*I+p*K,r[6]=g*S+x*C+m*D+p*V,r[10]=g*y+x*E+m*F+p*Z,r[14]=g*w+x*L+m*H+p*j,r[3]=v*M+T*A+b*I+_*K,r[7]=v*S+T*C+b*D+_*V,r[11]=v*y+T*E+b*F+_*Z,r[15]=v*w+T*L+b*H+_*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],v=l*d-c*f,T=a*d-c*u,b=a*f-l*u,_=o*d-c*h,M=o*f-l*h,S=o*u-a*h;return e*(x*v-m*T+p*b)-n*(g*v-m*_+p*M)+s*(g*T-x*_+p*S)-r*(g*b-x*M+m*S)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=e*a-n*o,T=e*l-s*o,b=e*c-r*o,_=n*l-s*a,M=n*c-r*a,S=s*c-r*l,y=h*x-u*g,w=h*m-f*g,A=h*p-d*g,C=u*m-f*x,E=u*p-d*x,L=f*p-d*m,I=v*L-T*E+b*C+_*A-M*w+S*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return t[0]=(a*L-l*E+c*C)*D,t[1]=(s*E-n*L-r*C)*D,t[2]=(x*S-m*M+p*_)*D,t[3]=(f*M-u*S-d*_)*D,t[4]=(l*A-o*L-c*w)*D,t[5]=(e*L-s*A+r*w)*D,t[6]=(m*b-g*S-p*T)*D,t[7]=(h*S-f*b+d*T)*D,t[8]=(o*E-a*A+c*y)*D,t[9]=(n*A-e*E-r*y)*D,t[10]=(g*M-x*b+p*v)*D,t[11]=(u*b-h*M-d*v)*D,t[12]=(a*w-o*C-l*y)*D,t[13]=(e*C-n*w+s*y)*D,t[14]=(x*T-g*_-m*v)*D,t[15]=(h*_-u*T+f*v)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,v=l*c,T=l*h,b=l*u,_=n.x,M=n.y,S=n.z;return s[0]=(1-(x+p))*_,s[1]=(d+b)*_,s[2]=(g-T)*_,s[3]=0,s[4]=(d-b)*M,s[5]=(1-(f+p))*M,s[6]=(m+v)*M,s[7]=0,s[8]=(g+T)*S,s[9]=(m-v)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ks.set(s[0],s[1],s[2]).length(),a=ks.set(s[4],s[5],s[6]).length(),l=ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Yn.copy(this);let c=1/o,h=1/a,u=1/l;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,e.setFromRotationMatrix(Yn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=jn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===jn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===or)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=jn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===jn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===or)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Nl.prototype.isMatrix4=!0;var le=Nl,ks=new U,Yn=new le,hm=new U(0,0,0),um=new U(1,1,1),Gi=new U,Sa=new U,Dn=new U,Pf=new le,Lf=new Ke,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lf.setFromEuler(this),this.setFromQuaternion(Lf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fm=0,Df=new U,Gs=new Ke,Mi=new le,wa=new U,Kr=new U,dm=new U,pm=new Ke,Nf=new U(1,0,0),Uf=new U(0,1,0),Ff=new U(0,0,1),zf={type:"added"},mm={type:"removed"},Vs={type:"childadded",child:null},sh={type:"childremoved",child:null},Ze=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new dn,n=new Ke,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new he}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.premultiply(Gs),this}rotateX(t){return this.rotateOnAxis(Nf,t)}rotateY(t){return this.rotateOnAxis(Uf,t)}rotateZ(t){return this.rotateOnAxis(Ff,t)}translateOnAxis(t,e){return Df.copy(t).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nf,t)}translateY(t){return this.translateOnAxis(Uf,t)}translateZ(t){return this.translateOnAxis(Ff,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wa.copy(t):wa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Kr,wa,this.up):Mi.lookAt(wa,Kr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Mi),this.quaternion.premultiply(Gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zf),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mm),sh.child=t,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zf),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,pm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ze.DEFAULT_UP=new U(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},gm={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function rh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=au(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=rh(o,r,t+1/3),this.g=rh(o,r,t),this.b=rh(o,r,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Zd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return be.workingToColorSpace(yn.copy(this),t),Math.round(pe(yn.r*255,0,255))*65536+Math.round(pe(yn.g*255,0,255))*256+Math.round(pe(yn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(yn.copy(this),e);let n=yn.r,s=yn.g,r=yn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Ne){be.workingToColorSpace(yn.copy(this),t);let e=yn.r,n=yn.g,s=yn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Ta);let n=co(Vi.h,Ta.h,e),s=co(Vi.s,Ta.s,e),r=co(Vi.l,Ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Ot;Ot.NAMES=Zd;var ur=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ci=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Zn=new U,bi=new U,oh=new U,Ei=new U,Ws=new U,Xs=new U,Bf=new U,ah=new U,lh=new U,ch=new U,hh=new Ce,uh=new Ce,fh=new Ce,Ti=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Zn.subVectors(s,e),bi.subVectors(n,e),oh.subVectors(t,e);let o=Zn.dot(Zn),a=Zn.dot(bi),l=Zn.dot(oh),c=bi.dot(bi),h=bi.dot(oh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return hh.setScalar(0),uh.setScalar(0),fh.setScalar(0),hh.fromBufferAttribute(t,e),uh.fromBufferAttribute(t,n),fh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(hh,r.x),o.addScaledVector(uh,r.y),o.addScaledVector(fh,r.z),o}static isFrontFacing(t,e,n,s){return Zn.subVectors(n,e),bi.subVectors(t,e),Zn.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Zn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ws.subVectors(s,n),Xs.subVectors(r,n),ah.subVectors(t,n);let l=Ws.dot(ah),c=Xs.dot(ah);if(l<=0&&c<=0)return e.copy(n);lh.subVectors(t,s);let h=Ws.dot(lh),u=Xs.dot(lh);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ws,o);ch.subVectors(t,r);let d=Ws.dot(ch),g=Xs.dot(ch);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Xs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Bf.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Bf,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ti=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),Ra.subVectors(this.max,jr),qs.subVectors(t.a,jr),Ys.subVectors(t.b,jr),Zs.subVectors(t.c,jr),Wi.subVectors(Ys,qs),Xi.subVectors(Zs,Ys),fs.subVectors(qs,Zs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-fs.z,fs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,fs.z,0,-fs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-fs.y,fs.x,0];return!dh(e,qs,Ys,Zs,Ra)||(e=[1,0,0,0,1,0,0,0,1],!dh(e,qs,Ys,Zs,Ra))?!1:(Ca.crossVectors(Wi,Xi),e=[Ca.x,Ca.y,Ca.z],dh(e,qs,Ys,Zs,Ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new U,new U,new U,new U,new U,new U,new U,new U],$n=new U,Aa=new ti,qs=new U,Ys=new U,Zs=new U,Wi=new U,Xi=new U,fs=new U,jr=new U,Ra=new U,Ca=new U,ds=new U;function dh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ds.fromArray(i,r);let a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=t.dot(ds),c=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Je=new U,Ia=new yt,xm=0,we=class extends fi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ia.fromBufferAttribute(this,e),Ia.applyMatrix3(t),this.setXY(e,Ia.x,Ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var xs=class extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _o=class extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}},ym=new ti,Qr=new U,ph=new U,ei=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ym.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(ph)),this.expandByPoint(Qr.copy(t.center).sub(ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vm=0,Vn=new le,mh=new Ze,$s=new U,Nn=new ti,to=new ti,an=new U,Ee=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vp(t)?_o:xs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return mh.lookAt(t),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Nn.min,to.min),Nn.expandByPoint(an),an.addVectors(Nn.max,to.max),Nn.expandByPoint(an)):(Nn.expandByPoint(to.min),Nn.expandByPoint(to.max))}Nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(t,c),an.add($s)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new we(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new U,l[y]=new U;let c=new U,h=new U,u=new U,f=new yt,d=new yt,g=new yt,x=new U,m=new U;function p(y,w,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,A),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[y].add(x),a[w].add(x),a[A].add(x),l[y].add(m),l[w].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,w=v.length;y<w;++y){let A=v[y],C=A.start,E=A.count;for(let L=C,I=C+E;L<I;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let T=new U,b=new U,_=new U,M=new U;function S(y){_.fromBufferAttribute(s,y),M.copy(_);let w=a[y];T.copy(w),T.sub(_.multiplyScalar(_.dot(w))).normalize(),b.crossVectors(M,w);let C=b.dot(l[y])<0?-1:1;o.setXYZW(y,T.x,T.y,T.z,C)}for(let y=0,w=v.length;y<w;++y){let A=v[y],C=A.start,E=A.count;for(let L=C,I=C+E;L<I;L+=3)S(t.getX(L+0)),S(t.getX(L+1)),S(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new we(f,h,u)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},bn=new U,fr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){xo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){xo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gh=new U,_m=new U,Mm=new he,Jn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gh.subVectors(n,e).cross(_m.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(gh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mm.getNormalMatrix(t),s=this.coplanarPoint(gh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bm=0,ni=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Ki,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=Xh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Jn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new yt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},dr=class extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Js,eo=new U,Ks=new U,js=new U,Qs=new yt,no=new yt,$d=new le,Pa=new U,io=new U,La=new U,Of=new yt,xh=new yt,Hf=new yt,bo=class extends Ze{constructor(t=new dr){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mo(e,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new fr(n,3,0,!1)),Js.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=Js,this.material=t,this.center=new yt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),$d.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Da(Pa.set(-.5,-.5,0),js,o,Ks,s,r),Da(io.set(.5,-.5,0),js,o,Ks,s,r),Da(La.set(.5,.5,0),js,o,Ks,s,r),Of.set(0,0),xh.set(1,0),Hf.set(1,1);let a=t.ray.intersectTriangle(Pa,io,La,!1,eo);if(a===null&&(Da(io.set(-.5,.5,0),js,o,Ks,s,r),xh.set(0,1),a=t.ray.intersectTriangle(Pa,La,io,!1,eo),a===null))return;let l=t.ray.origin.distanceTo(eo);l<t.near||l>t.far||e.push({distance:l,point:eo.clone(),uv:Ti.getInterpolation(eo,Pa,io,La,Of,xh,Hf,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Da(i,t,e,n,s,r){Qs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(no.x=r*Qs.x-s*Qs.y,no.y=s*Qs.x+r*Qs.y):no.copy(Qs),i.copy(t),i.x+=no.x,i.y+=no.y,i.applyMatrix4($d)}var wi=new U,yh=new U,Na=new U,Ua=new U,pr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yh.copy(t).add(e).multiplyScalar(.5),Na.copy(e).sub(t).normalize(),Ua.copy(this.origin).sub(yh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Na),a=Ua.dot(this.direction),l=-Ua.dot(Na),c=Ua.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yh).addScaledVector(Na,f),d}intersectSphere(t,e){if(t.radius<0)return null;wi.subVectors(t.center,this.origin);let n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,v=n.y-o.y,T=n.z-o.z,b=Math.abs(l),_=Math.abs(c),M=Math.abs(h),S,y,w,A,C,E,L,I,D,F,H,K;if(b>=_&&b>=M?(w=l,E=u,D=g,K=p,l>=0?(S=c,y=h,A=f,C=d,L=x,I=m,F=v,H=T):(S=h,y=c,A=d,C=f,L=m,I=x,F=T,H=v)):_>=M?(w=c,E=f,D=x,K=v,c>=0?(S=h,y=l,A=d,C=u,L=m,I=g,F=T,H=p):(S=l,y=h,A=u,C=d,L=g,I=m,F=p,H=T)):(w=h,E=d,D=m,K=T,h>=0?(S=l,y=c,A=u,C=f,L=g,I=x,F=p,H=v):(S=c,y=l,A=f,C=u,L=x,I=g,F=v,H=p)),w===0)return null;let V=S/w,Z=y/w,j=1/w,Tt=A-V*E,Rt=C-Z*E,ie=L-V*D,re=I-Z*D,oe=F-V*K,B=H-Z*K,q=oe*re-B*ie,mt=Tt*B-Rt*oe,Lt=ie*Rt-re*Tt;if(s){if(q<0||mt<0||Lt<0)return null}else if((q<0||mt<0||Lt<0)&&(q>0||mt>0||Lt>0))return null;let _t=q+mt+Lt;if(_t===0)return null;let zt=j*(q*E+mt*D+Lt*K);return(_t>0?zt<0:zt>0)?null:this.at(zt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kf=new le,ps=new pr,Fa=new ei,Gf=new U,za=new U,Ba=new U,Oa=new U,vh=new U,Ha=new U,Vf=new U,ka=new U,et=class extends Ze{constructor(t=new Ee,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(vh.fromBufferAttribute(u,t),o?Ha.addScaledVector(vh,h):Ha.addScaledVector(vh.sub(e),h))}e.add(Ha)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(Fa.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Fa,Gf)===null||ps.origin.distanceToSquared(Gf)>(t.far-t.near)**2))&&(kf.copy(r).invert(),ps.copy(t.ray).applyMatrix4(kf),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,_=T;b<_;b+=3){let M=a.getX(b),S=a.getX(b+1),y=a.getX(b+2);s=Ga(this,p,t,n,c,h,u,M,S,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),T=a.getX(m+1),b=a.getX(m+2);s=Ga(this,o,t,n,c,h,u,v,T,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=v,_=T;b<_;b+=3){let M=b,S=b+1,y=b+2;s=Ga(this,p,t,n,c,h,u,M,S,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,T=m+1,b=m+2;s=Ga(this,o,t,n,c,h,u,v,T,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Em(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===di,a),l===null)return null;ka.copy(a),ka.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ka);return c<e.near||c>e.far?null:{distance:c,point:ka.clone(),object:i}}function Ga(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,za),i.getVertexPosition(l,Ba),i.getVertexPosition(c,Oa);let h=Em(i,t,e,n,za,Ba,Oa,Vf);if(h){let u=new U;Ti.getBarycoord(Vf,za,Ba,Oa,u),s&&(h.uv=Ti.getInterpolatedAttribute(s,a,l,c,u,new yt)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,a,l,c,u,new yt)),o&&(h.normal=Ti.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};Ti.getNormal(za,Ba,Oa,f.normal),h.face=f,h.barycoord=u}return h}var so=new Ce,Wf=new Ce,Xf=new Ce,Sm=new Ce,qf=new le,Va=new U,_h=new ei,Yf=new le,Mh=new pr,Eo=class extends et{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ah,this.bindMatrix=new le,this.bindMatrixInverse=new le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Va),this.boundingBox.expandByPoint(Va)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Va),this.boundingSphere.expandByPoint(Va)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_h.copy(this.boundingSphere),_h.applyMatrix4(s),t.ray.intersectsSphere(_h)!==!1&&(Yf.copy(s).invert(),Mh.copy(t.ray).applyMatrix4(Yf),!(this.boundingBox!==null&&Mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Mh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Ce,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;Wf.fromBufferAttribute(s.attributes.skinIndex,t),Xf.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(so.copy(e),e.set(0,0,0,0)):(so.set(...e,1),e.set(0,0,0)),so.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Xf.getComponent(r);if(o!==0){let a=Wf.getComponent(r);qf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Sm.copy(so).applyMatrix4(qf),o)}}return e.isVector4&&(e.w=so.w),e.applyMatrix4(this.bindMatrixInverse)}},mr=class extends Ze{constructor(){super(),this.isBone=!0,this.type="Bone"}},gr=class extends cn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ln,h=ln,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zf=new le,wm=new le,So=class i{constructor(t=[],e=[]){this.uuid=Qn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new le)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new le;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:wm;Zf.multiplyMatrices(a,e[r]),Zf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new gr(e,t,t,On,Bn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(ne("Skeleton: No bone found with UUID:",r),o=new mr),this.bones.push(o),this.boneInverses.push(new le().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},xr=class extends we{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},tr=new le,$f=new le,Wa=[],Jf=new ti,Tm=new le,ro=new et,oo=new ei,wo=class extends et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,tr),Jf.copy(t.boundingBox).applyMatrix4(tr),this.boundingBox.union(Jf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,tr),oo.copy(t.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),t.ray.intersectsSphere(oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,tr),$f.multiplyMatrices(n,tr),ro.matrixWorld=$f,ro.raycast(t,Wa);for(let o=0,a=Wa.length;o<a;o++){let l=Wa[o];l.instanceId=r,l.object=this,e.push(l)}Wa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gr(new Float32Array(s*this.count),s,this.count,Vl,Bn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new ei,Am=new yt(.5,.5),Xa=new U,yr=class{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],T=r[13],b=r[14],_=r[15];if(s[0].setComponents(c-o,d-h,p-g,_-v).normalize(),s[1].setComponents(c+o,d+h,p+g,_+v).normalize(),s[2].setComponents(c+a,d+u,p+x,_+T).normalize(),s[3].setComponents(c-a,d-u,p-x,_-T).normalize(),n)s[4].setComponents(l,f,m,b).normalize(),s[5].setComponents(c-l,d-f,p-m,_-b).normalize();else if(s[4].setComponents(c-l,d-f,p-m,_-b).normalize(),e===jn)s[5].setComponents(c+l,d+f,p+m,_+b).normalize();else if(e===or)s[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=Am.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xa.x=s.normal.x>0?t.max.x:t.min.x,Xa.y=s.normal.y>0?t.max.y:t.min.y,Xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vr=class extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kf=new le,Lh=new pr,qa=new ei,Ya=new U,_r=class extends Ze{constructor(t=new Ee,e=new vr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,t.ray.intersectsSphere(qa)===!1)return;Kf.copy(s).invert(),Lh.copy(t.ray).applyMatrix4(Kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Ya.fromBufferAttribute(u,m),jf(Ya,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Ya.fromBufferAttribute(u,g),jf(Ya,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jf(i,t,e,n,s,r,o){let a=Lh.distanceSqToPoint(i);if(a<e){let l=new U;Lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var To=class extends cn{constructor(t=[],e=ji,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nn=class extends cn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends cn{constructor(t,e,n=si,s,r,o,a=ln,l=ln,c,h=ui,u=1){if(h!==ui&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},fl=class extends Yi{constructor(t,e=si,n=ji,s,r,o=ln,a=ln,l,c=ui){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ao=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qt=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(x,m,p,v,T,b,_,M,S,y,w){let A=b/S,C=_/y,E=b/2,L=_/2,I=M/2,D=S+1,F=y+1,H=0,K=0,V=new U;for(let Z=0;Z<F;Z++){let j=Z*C-L;for(let Tt=0;Tt<D;Tt++){let Rt=Tt*A-E;V[x]=Rt*v,V[m]=j*T,V[p]=I,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[p]=M>0?1:-1,h.push(V.x,V.y,V.z),u.push(Tt/S),u.push(1-Z/y),H+=1}}for(let Z=0;Z<y;Z++)for(let j=0;j<S;j++){let Tt=f+j+D*Z,Rt=f+j+D*(Z+1),ie=f+(j+1)+D*(Z+1),re=f+(j+1)+D*Z;l.push(Tt,Rt,re),l.push(Rt,ie,re),K+=6}a.addGroup(d,K,w),d+=K,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ys=class i extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new yt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Dt=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function v(){let b=new U,_=new U,M=0,S=(e-t)/n;for(let y=0;y<=r;y++){let w=[],A=y/r,C=A*(e-t)+t;for(let E=0;E<=s;E++){let L=E/s,I=L*l+a,D=Math.sin(I),F=Math.cos(I);_.x=C*D,_.y=-A*n+m,_.z=C*F,u.push(_.x,_.y,_.z),b.set(D,S,F).normalize(),f.push(b.x,b.y,b.z),d.push(L,1-A),w.push(g++)}x.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let A=x[w][y],C=x[w+1][y],E=x[w+1][y+1],L=x[w][y+1];(t>0||w!==0)&&(h.push(A,C,L),M+=3),(e>0||w!==r-1)&&(h.push(C,E,L),M+=3)}c.addGroup(p,M,0),p+=M}function T(b){let _=g,M=new yt,S=new U,y=0,w=b===!0?t:e,A=b===!0?1:-1;for(let E=1;E<=s;E++)u.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),g++;let C=g;for(let E=0;E<=s;E++){let I=E/s*l+a,D=Math.cos(I),F=Math.sin(I);S.x=w*F,S.y=m*A,S.z=w*D,u.push(S.x,S.y,S.z),f.push(0,A,0),M.x=D*.5+.5,M.y=F*.5*A+.5,d.push(M.x,M.y),g++}for(let E=0;E<s;E++){let L=_+E,I=C+E;b===!0?h.push(I,I+1,L):h.push(I+1,I,L),y+=3}c.addGroup(p,y,b===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wn=class i extends Dt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},dl=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let T=new U,b=new U,_=new U;for(let M=0;M<e.length;M+=3)d(e[M+0],T),d(e[M+1],b),d(e[M+2],_),l(T,b,_,v)}function l(v,T,b,_){let M=_+1,S=[];for(let y=0;y<=M;y++){S[y]=[];let w=v.clone().lerp(b,y/M),A=T.clone().lerp(b,y/M),C=M-y;for(let E=0;E<=C;E++)E===0&&y===M?S[y][E]=w:S[y][E]=w.clone().lerp(A,E/C)}for(let y=0;y<M;y++)for(let w=0;w<2*(M-y)-1;w++){let A=Math.floor(w/2);w%2===0?(f(S[y][A+1]),f(S[y+1][A]),f(S[y][A])):(f(S[y][A+1]),f(S[y+1][A+1]),f(S[y+1][A]))}}function c(v){let T=new U;for(let b=0;b<r.length;b+=3)T.x=r[b+0],T.y=r[b+1],T.z=r[b+2],T.normalize().multiplyScalar(v),r[b+0]=T.x,r[b+1]=T.y,r[b+2]=T.z}function h(){let v=new U;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let b=m(v)/2/Math.PI+.5,_=p(v)/Math.PI+.5;o.push(b,1-_)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let T=o[v+0],b=o[v+2],_=o[v+4],M=Math.max(T,b,_),S=Math.min(T,b,_);M>.9&&S<.1&&(T<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),_<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,T){let b=v*3;T.x=t[b+0],T.y=t[b+1],T.z=t[b+2]}function g(){let v=new U,T=new U,b=new U,_=new U,M=new yt,S=new yt,y=new yt;for(let w=0,A=0;w<r.length;w+=9,A+=6){v.set(r[w+0],r[w+1],r[w+2]),T.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),M.set(o[A+0],o[A+1]),S.set(o[A+2],o[A+3]),y.set(o[A+4],o[A+5]),_.copy(v).add(T).add(b).divideScalar(3);let C=m(_);x(M,A+0,v,C),x(S,A+2,T,C),x(y,A+4,b,C)}}function x(v,T,b,_){_<0&&v.x===1&&(o[T]=v.x-1),b.x===0&&b.z===0&&(o[T]=_/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new yt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],o=[],a=new U,l=new le;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(pe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(pe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mr=class extends Un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new yt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},pl=class extends Mr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Qf=new U,td=new U,bh=new lu,Eh=new lu,Sh=new lu,br=class extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(td.subVectors(s[0],s[1]).add(s[0]),c=td);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),bh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Eh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Sh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Eh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Sh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(bh.calc(l),Eh.calc(l),Sh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ed(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Rm(i,t){let e=1-i;return e*e*t}function Cm(i,t){return 2*(1-i)*i*t}function Im(i,t){return i*i*t}function ho(i,t,e,n){return Rm(i,t)+Cm(i,e)+Im(i,n)}function Pm(i,t){let e=1-i;return e*e*e*t}function Lm(i,t){let e=1-i;return 3*e*e*i*t}function Dm(i,t){return 3*(1-i)*i*i*t}function Nm(i,t){return i*i*i*t}function uo(i,t,e,n,s){return Pm(i,t)+Lm(i,e)+Dm(i,n)+Nm(i,s)}var Ro=class extends Un{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(uo(t,s.x,r.x,o.x,a.x),uo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ml=class extends Un{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(uo(t,s.x,r.x,o.x,a.x),uo(t,s.y,r.y,o.y,a.y),uo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Co=class extends Un{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gl=class extends Un{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Un{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends Un{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y),ho(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ed(a,l.x,c.x,h.x,u.x),ed(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new yt().fromArray(s))}return this}},Dh=Object.freeze({__proto__:null,ArcCurve:pl,CatmullRomCurve3:br,CubicBezierCurve:Ro,CubicBezierCurve3:ml,EllipseCurve:Mr,LineCurve:Co,LineCurve3:gl,QuadraticBezierCurve:Io,QuadraticBezierCurve3:xl,SplineCurve:Po}),yl=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Dh[s.type]().fromJSON(s))}return this}},Lo=class extends yl{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Co(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Io(this.currentPoint.clone(),new yt(t,e),new yt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ro(this.currentPoint.clone(),new yt(t,e),new yt(n,s),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Po(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Mr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fn=class extends Lo{constructor(t){super(t),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Lo().fromJSON(s))}return this}};function Um(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Jd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Hm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Do(r,o,e,a,l,c,0),o}function Jd(i,t,e,n,s){let r;if(s===Km(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=nd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=nd(o/n|0,i[o],i[o+1],r);return r&&Er(r,r.next)&&(Uo(r),r=r.next),r}function vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Er(e,e.next)||Xe(e.prev,e,e.next)===0)){if(Uo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Do(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?zm(i,n,s,r):Fm(i)){t.push(l.i,i.i,c.i),Uo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Bm(vs(i),t),Do(i,t,e,n,s,r,2)):o===2&&Om(i,t,e,n,s,r):Do(vs(i),t,e,n,s,r,1);break}}}function Fm(i){let t=i.prev,e=i,n=i.next;if(Xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ao(s,a,r,l,o,c,g.x,g.y)&&Xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Xe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),p=Nh(d,g,t,e,n),v=Nh(x,m,t,e,n),T=i.prevZ,b=i.nextZ;for(;T&&T.z>=p&&b&&b.z<=v;){if(T.x>=d&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&ao(a,h,l,u,c,f,T.x,T.y)&&Xe(T.prev,T,T.next)>=0||(T=T.prevZ,b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ao(a,h,l,u,c,f,b.x,b.y)&&Xe(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&ao(a,h,l,u,c,f,T.x,T.y)&&Xe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;b&&b.z<=v;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ao(a,h,l,u,c,f,b.x,b.y)&&Xe(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Bm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Er(n,s)&&jd(n,e,e.next,s)&&No(n,s)&&No(s,n)&&(t.push(n.i,e.i,s.i),Uo(e),Uo(e.next),e=i=s),e=e.next}while(e!==i);return vs(e)}function Om(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zm(o,a)){let l=Qd(o,a);o=vs(o,o.next),l=vs(l,l.next),Do(o,t,e,n,s,r,0),Do(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Hm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Jd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ym(c))}s.sort(km);for(let r=0;r<s.length;r++)e=Gm(s[r],e);return e}function km(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Gm(i,t){let e=Vm(i,t);if(!e)return t;let n=Qd(e,i);return vs(n,n.next),vs(e,e.next)}function Vm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Er(i,e))return e;do{if(Er(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Kd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);No(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Wm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Wm(i,t){return Xe(i.prev,i,t.prev)<0&&Xe(t.next,i,i.next)<0}function Xm(i,t,e,n){let s=i;do s.z===0&&(s.z=Nh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qm(s)}function qm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Nh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ym(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Kd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ao(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Kd(i,t,e,n,s,r,o,a)}function Zm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$m(i,t)&&(No(i,t)&&No(t,i)&&Jm(i,t)&&(Xe(i.prev,i,t.prev)||Xe(i,t.prev,t))||Er(i,t)&&Xe(i.prev,i,i.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Er(i,t){return i.x===t.x&&i.y===t.y}function jd(i,t,e,n){let s=$a(Xe(i,t,e)),r=$a(Xe(i,t,n)),o=$a(Xe(e,n,i)),a=$a(Xe(e,n,t));return!!(s!==r&&o!==a||s===0&&Za(i,e,t)||r===0&&Za(i,n,t)||o===0&&Za(e,i,n)||a===0&&Za(e,t,n))}function Za(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $a(i){return i>0?1:i<0?-1:0}function $m(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function No(i,t){return Xe(i.prev,i,i.next)<0?Xe(i,t,i.next)>=0&&Xe(i,i.prev,t)>=0:Xe(i,t,i.prev)<0||Xe(i,i.next,t)<0}function Jm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Qd(i,t){let e=Uh(i.i,i.x,i.y),n=Uh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nd(i,t,e,n){let s=Uh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Uo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Km(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Fh=class{static triangulate(t,e,n=2){return Um(t,e,n)}},hi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];id(t),sd(n,t);let o=t.length;e.forEach(id);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,sd(n,e[l]);let a=Fh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function id(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ii=class i extends Ee{constructor(t=new Fn([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:jm,T,b=!1,_,M,S,y;if(p){T=p.getSpacedPoints(h),b=!0,f=!1;let ot=p.isCatmullRomCurve3?p.closed:!1;_=p.computeFrenetFrames(h,ot),M=new U,S=new U,y=new U}f||(m=0,d=0,g=0,x=0);let w=a.extractPoints(c),A=w.shape,C=w.holes;if(!hi.isClockWise(A)){A=A.reverse();for(let ot=0,ct=C.length;ot<ct;ot++){let dt=C[ot];hi.isClockWise(dt)&&(C[ot]=dt.reverse())}}function L(ot){let dt=10000000000000001e-36,rt=ot[0];for(let gt=1;gt<=ot.length;gt++){let xt=gt%ot.length,Pt=ot[xt],Ut=Pt.x-rt.x,Gt=Pt.y-rt.y,O=Ut*Ut+Gt*Gt,ge=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(rt.x),Math.abs(rt.y)),ce=dt*ge*ge;if(O<=ce){ot.splice(xt,1),gt--;continue}rt=Pt}}L(A),C.forEach(L);let I=C.length,D=A;for(let ot=0;ot<I;ot++){let ct=C[ot];A=A.concat(ct)}function F(ot,ct,dt){return ct||ae("ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(ct,dt)}let H=A.length;function K(ot,ct,dt){let rt,gt,xt,Pt=ot.x-ct.x,Ut=ot.y-ct.y,Gt=dt.x-ot.x,O=dt.y-ot.y,ge=Pt*Pt+Ut*Ut,ce=Pt*O-Ut*Gt;if(Math.abs(ce)>Number.EPSILON){let N=Math.sqrt(ge),R=Math.sqrt(Gt*Gt+O*O),W=ct.x-Ut/N,Y=ct.y+Pt/N,nt=dt.x-O/R,bt=dt.y+Gt/R,wt=((nt-W)*O-(bt-Y)*Gt)/(Pt*O-Ut*Gt);rt=W+Pt*wt-ot.x,gt=Y+Ut*wt-ot.y;let it=rt*rt+gt*gt;if(it<=2)return new yt(rt,gt);xt=Math.sqrt(it/2)}else{let N=!1;Pt>Number.EPSILON?Gt>Number.EPSILON&&(N=!0):Pt<-Number.EPSILON?Gt<-Number.EPSILON&&(N=!0):Math.sign(Ut)===Math.sign(O)&&(N=!0),N?(rt=-Ut,gt=Pt,xt=Math.sqrt(ge)):(rt=Pt,gt=Ut,xt=Math.sqrt(ge/2))}return new yt(rt/xt,gt/xt)}let V=[];for(let ot=0,ct=D.length,dt=ct-1,rt=ot+1;ot<ct;ot++,dt++,rt++)dt===ct&&(dt=0),rt===ct&&(rt=0),V[ot]=K(D[ot],D[dt],D[rt]);let Z=[],j,Tt=V.concat();for(let ot=0,ct=I;ot<ct;ot++){let dt=C[ot];j=[];for(let rt=0,gt=dt.length,xt=gt-1,Pt=rt+1;rt<gt;rt++,xt++,Pt++)xt===gt&&(xt=0),Pt===gt&&(Pt=0),j[rt]=K(dt[rt],dt[xt],dt[Pt]);Z.push(j),Tt=Tt.concat(j)}let Rt;if(m===0)Rt=hi.triangulateShape(D,C);else{let ot=[],ct=[];for(let dt=0;dt<m;dt++){let rt=dt/m,gt=d*Math.cos(rt*Math.PI/2),xt=g*Math.sin(rt*Math.PI/2)+x;for(let Pt=0,Ut=D.length;Pt<Ut;Pt++){let Gt=F(D[Pt],V[Pt],xt);mt(Gt.x,Gt.y,-gt),rt===0&&ot.push(Gt)}for(let Pt=0,Ut=I;Pt<Ut;Pt++){let Gt=C[Pt];j=Z[Pt];let O=[];for(let ge=0,ce=Gt.length;ge<ce;ge++){let N=F(Gt[ge],j[ge],xt);mt(N.x,N.y,-gt),rt===0&&O.push(N)}rt===0&&ct.push(O)}}Rt=hi.triangulateShape(ot,ct)}let ie=Rt.length,re=g+x;for(let ot=0;ot<H;ot++){let ct=f?F(A[ot],Tt[ot],re):A[ot];b?(S.copy(_.normals[0]).multiplyScalar(ct.x),M.copy(_.binormals[0]).multiplyScalar(ct.y),y.copy(T[0]).add(S).add(M),mt(y.x,y.y,y.z)):mt(ct.x,ct.y,0)}for(let ot=1;ot<=h;ot++)for(let ct=0;ct<H;ct++){let dt=f?F(A[ct],Tt[ct],re):A[ct];b?(S.copy(_.normals[ot]).multiplyScalar(dt.x),M.copy(_.binormals[ot]).multiplyScalar(dt.y),y.copy(T[ot]).add(S).add(M),mt(y.x,y.y,y.z)):mt(dt.x,dt.y,u/h*ot)}for(let ot=m-1;ot>=0;ot--){let ct=ot/m,dt=d*Math.cos(ct*Math.PI/2),rt=g*Math.sin(ct*Math.PI/2)+x;for(let gt=0,xt=D.length;gt<xt;gt++){let Pt=F(D[gt],V[gt],rt);mt(Pt.x,Pt.y,u+dt)}for(let gt=0,xt=C.length;gt<xt;gt++){let Pt=C[gt];j=Z[gt];for(let Ut=0,Gt=Pt.length;Ut<Gt;Ut++){let O=F(Pt[Ut],j[Ut],rt);b?mt(O.x,O.y+T[h-1].y,T[h-1].x+dt):mt(O.x,O.y,u+dt)}}}oe(),B();function oe(){let ot=s.length/3;if(f){let ct=0,dt=H*ct;for(let rt=0;rt<ie;rt++){let gt=Rt[rt];Lt(gt[2]+dt,gt[1]+dt,gt[0]+dt)}ct=h+m*2,dt=H*ct;for(let rt=0;rt<ie;rt++){let gt=Rt[rt];Lt(gt[0]+dt,gt[1]+dt,gt[2]+dt)}}else{for(let ct=0;ct<ie;ct++){let dt=Rt[ct];Lt(dt[2],dt[1],dt[0])}for(let ct=0;ct<ie;ct++){let dt=Rt[ct];Lt(dt[0]+H*h,dt[1]+H*h,dt[2]+H*h)}}n.addGroup(ot,s.length/3-ot,0)}function B(){let ot=s.length/3,ct=0;q(D,ct),ct+=D.length;for(let dt=0,rt=C.length;dt<rt;dt++){let gt=C[dt];q(gt,ct),ct+=gt.length}n.addGroup(ot,s.length/3-ot,1)}function q(ot,ct){let dt=ot.length;for(;--dt>=0;){let rt=dt,gt=dt-1;gt<0&&(gt=ot.length-1);for(let xt=0,Pt=h+m*2;xt<Pt;xt++){let Ut=H*xt,Gt=H*(xt+1),O=ct+rt+Ut,ge=ct+gt+Ut,ce=ct+gt+Gt,N=ct+rt+Gt;_t(O,ge,ce,N)}}}function mt(ot,ct,dt){l.push(ot),l.push(ct),l.push(dt)}function Lt(ot,ct,dt){zt(ot),zt(ct),zt(dt);let rt=s.length/3,gt=v.generateTopUV(n,s,rt-3,rt-2,rt-1);qt(gt[0]),qt(gt[1]),qt(gt[2])}function _t(ot,ct,dt,rt){zt(ot),zt(ct),zt(rt),zt(ct),zt(dt),zt(rt);let gt=s.length/3,xt=v.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);qt(xt[0]),qt(xt[1]),qt(xt[3]),qt(xt[1]),qt(xt[2]),qt(xt[3])}function zt(ot){s.push(l[ot*3+0]),s.push(l[ot*3+1]),s.push(l[ot*3+2])}function qt(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Dh[s.type]().fromJSON(s)),new i(n,t.options)}},jm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new yt(r,o),new yt(a,l),new yt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new yt(o,1-l),new yt(c,1-u),new yt(f,1-g),new yt(x,1-p)]:[new yt(a,1-l),new yt(h,1-u),new yt(d,1-g),new yt(m,1-p)]}};function Qm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fo=class i extends dl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Sr=class i extends Ee{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new U,f=new yt,d=new U,g=new U,x=new U,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let v=0;v<=e;v++){let T=n+v*h*s,b=Math.sin(T),_=Math.cos(T);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*b,u.y=t[M].y,u.z=t[M].x*_,o.push(u.x,u.y,u.z),f.x=v/e,f.y=M/(t.length-1),a.push(f.x,f.y);let S=l[3*M+0]*b,y=l[3*M+1],w=l[3*M+0]*_;c.push(S,y,w)}}for(let v=0;v<e;v++)for(let T=0;T<t.length-1;T++){let b=T+v*t.length,_=b,M=b+t.length,S=b+t.length+1,y=b+1;r.push(_,M,y),r.push(S,y,M)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var We=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let T=0;T<c;T++){let b=T*u-r;g.push(b,-v,0),x.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let T=v+c*p,b=v+c*(p+1),_=v+1+c*(p+1),M=v+1+c*p;d.push(T,b,M),d.push(b,_,M)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var zo=class i extends Ee{constructor(t=new Fn([new yt(0,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;hi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];hi.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=hi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){let v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],T=v[0]+u,b=v[1]+u,_=v[2]+u;n.push(T,b,_),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function tg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ve=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,f=new U,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],T=p/n,b=o+T*a,_=t*Math.cos(b),M=Math.sqrt(t*t-_*_),S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let y=0;y<=e;y++){let w=y/e,A=s+w*r;u.x=-M*Math.cos(A),u.y=_,u.z=M*Math.sin(A),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(w+S,1-T),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let T=h[p][v+1],b=h[p][v],_=h[p+1][v],M=h[p+1][v+1];(p!==0||o>0)&&d.push(T,b,M),(p!==n-1||l<Math.PI)&&d.push(b,_,M)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ie=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new U,d=new U,g=new U;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let v=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,T=(s+1)*(x-1)+m,b=(s+1)*x+m;l.push(p,v,b),l.push(v,T,b)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(rd(s))s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(rd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=Ss(i[e]);for(let s in n)t[s]=n[s]}return t}function rd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function eg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var t0={clone:Ss,merge:vn},ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ng,this.fragmentShader=ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=eg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new yt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new he().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},vl=class extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ee=class extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wr=class extends ee{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Bo=class extends ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_l=class extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ml=class extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function er(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Zi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bl=class extends Zi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ih:r=t,a=2*e-n;break;case Ph:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ih:o=t,l=2*n-e;break;case Ph:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-d)*m+(1.5+d)*x+.5*g,b=d*m-d*x;for(let _=0;_!==a;++_)r[_]=p*o[h+_]+v*o[c+_]+T*o[l+_]+b*o[u+_];return r}},El=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Sl=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wl=class extends Zi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=d*f+g*2,v=u[p],T=u[p+1],b=t*f+g*2,_=h[b],M=h[b+1],S=rg(n,e,v,_,s);r[g]=e0(S,x,T,M,m)}return r}};function e0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function sg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function rg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=e0(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=sg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var zn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=er(e,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:er(t.times,Array),values:er(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),wh(t.settings)&&(n.settings={inTangents:er(t.settings.inTangents,Array),outTangents:er(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fo:e=this.InterpolantFactoryMethodDiscrete;break;case ll:e=this.InterpolantFactoryMethodLinear;break;case ja:e=this.InterpolantFactoryMethodSmooth;break;case Rh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ne("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return ja;case this.InterpolantFactoryMethodBezier:return Rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;wh(this.settings)&&(od(this.settings.inTangents,t),od(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ae("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ae("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Wp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ae("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ja,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,wh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function od(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=ll;var $i=class extends zn{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=fo;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}};Tl.prototype.ValueTypeName="color";var Al=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}};Al.prototype.ValueTypeName="number";var Rl=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ke.slerpFlat(r,0,o,c-a,o,c,l);return r}},Oo=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Rl(this.times,this.values,this.getValueSize(),t)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends zn{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=fo;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends zn{constructor(t,e,n,s){super(t,e,n,s)}};Cl.prototype.ValueTypeName="vector";var Il=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},n0=new Il,Pl=class{constructor(t){this.manager=t!==void 0?t:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},_s=class extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Th=new le,ad=new U,ld=new U,Ho=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ad.setFromMatrixPosition(t.matrixWorld),e.position.copy(ad),ld.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ld),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Th,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===or||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Th)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ja=new U,Ka=new Ke,li=new U,ko=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ja,Ka,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Ka,li.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ja,Ka,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ja,Ka,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new U,cd=new yt,hd=new yt,en=class extends ko{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,cd,hd),e.subVectors(hd,cd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zh=class extends Ho{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},Go=class extends Tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ar=class extends ko{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bh=class extends Ho{constructor(){super(new Ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Bh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var nr=-90,ir=1,Ll=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(nr,ir,t,e);s.layers=this.layers,this.add(s);let r=new en(nr,ir,t,e);r.layers=this.layers,this.add(r);let o=new en(nr,ir,t,e);o.layers=this.layers,this.add(o);let a=new en(nr,ir,t,e);a.layers=this.layers,this.add(a);let l=new en(nr,ir,t,e);l.layers=this.layers,this.add(l);let c=new en(nr,ir,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Dl=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hu="\\[\\]\\.:\\/",og=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",ag="[^"+hu.replace("\\.","")+"]",lg=/((?:WC+[\/:])*)/.source.replace("WC",uu),cg=/(WCOD+)?/.source.replace("WCOD",ag),hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),fg=new RegExp("^"+lg+cg+hg+ug+"$"),dg=["material","materials","bones","map"],Oh=class{constructor(t,e,n){let s=n||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(og,"")}static parseTrackName(t){let e=fg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=Oh;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cM=new Float32Array(1);var xu=class xu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};xu.prototype.isMatrix2=!0;var Hh=xu;function fu(i,t,e,n){let s=pg(n);switch(e){case iu:return i*t;case Vl:return i*t/s.components*s.byteLength;case Wl:return i*t/s.components*s.byteLength;case es:return i*t*2/s.components*s.byteLength;case Xl:return i*t*2/s.components*s.byteLength;case su:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case ql:return i*t*4/s.components*s.byteLength;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zl:case Jl:return Math.max(i,16)*Math.max(t,8)/4;case Yl:case $l:return Math.max(i,8)*Math.max(t,8)/2;case Kl:case jl:case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ql:case Jo:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xc:case yc:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _c:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ko:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pg(i){switch(i){case Tn:case Qh:return{byteLength:1,components:1};case Ir:case tu:case ri:return{byteLength:2,components:1};case kl:case Gl:return{byteLength:2,components:4};case si:case Hl:case Bn:return{byteLength:4,components:1};case eu:case nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function S0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _g(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bg=`#ifdef USE_ALPHAHASH
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
#endif`,Eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
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
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cg=`#ifdef USE_BATCHING
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
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
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
#endif`,Ug=`#ifdef USE_BUMPMAP
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wg=`#define PI 3.141592653589793
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
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qg=`vec3 transformedNormal = objectNormal;
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
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
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
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
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
#endif`,vx=`uniform sampler2D dfgLUT;
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
}`,_x=`
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
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Px=`#if defined( USE_POINTS_UV )
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
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o1=`float getShadowMask() {
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
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,u1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m1=`#ifdef USE_TRANSMISSION
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
#endif`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
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
}`,R1=`#if DEPTH_PACKING == 3200
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
}`,C1=`#define DISTANCE
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
}`,I1=`#define DISTANCE
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`uniform float scale;
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
}`,N1=`uniform vec3 diffuse;
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
}`,U1=`#include <common>
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
}`,F1=`uniform vec3 diffuse;
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
}`,z1=`#define LAMBERT
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
}`,B1=`#define LAMBERT
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
}`,O1=`#define MATCAP
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
}`,H1=`#define MATCAP
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
}`,k1=`#define NORMAL
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
}`,G1=`#define NORMAL
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
}`,V1=`#define PHONG
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
}`,W1=`#define PHONG
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
}`,X1=`#define STANDARD
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
}`,q1=`#define STANDARD
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
}`,Y1=`#define TOON
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
}`,Z1=`#define TOON
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
}`,$1=`uniform float size;
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
}`,J1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,j1=`uniform vec3 color;
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
}`,Q1=`uniform float rotation;
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
}`,ty=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:Mg,alphahash_pars_fragment:bg,alphamap_fragment:Eg,alphamap_pars_fragment:Sg,alphatest_fragment:wg,alphatest_pars_fragment:Tg,aomap_fragment:Ag,aomap_pars_fragment:Rg,batching_pars_vertex:Cg,batching_vertex:Ig,begin_vertex:Pg,beginnormal_vertex:Lg,bsdfs:Dg,iridescence_fragment:Ng,bumpmap_pars_fragment:Ug,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:Bg,clipping_planes_vertex:Og,color_fragment:Hg,color_pars_fragment:kg,color_pars_vertex:Gg,color_vertex:Vg,common:Wg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:Yg,displacementmap_vertex:Zg,emissivemap_fragment:$g,emissivemap_pars_fragment:Jg,colorspace_fragment:Kg,colorspace_pars_fragment:jg,envmap_fragment:Qg,envmap_common_pars_fragment:tx,envmap_pars_fragment:ex,envmap_pars_vertex:nx,envmap_physical_pars_fragment:dx,envmap_vertex:ix,fog_vertex:sx,fog_pars_vertex:rx,fog_fragment:ox,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:ux,lights_pars_begin:fx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:xx,lights_physical_fragment:yx,lights_physical_pars_fragment:vx,lights_fragment_begin:_x,lights_fragment_maps:Mx,lights_fragment_end:bx,lightprobes_pars_fragment:Ex,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Rx,map_pars_fragment:Cx,map_particle_fragment:Ix,map_particle_pars_fragment:Px,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Nx,morphcolor_vertex:Ux,morphnormal_vertex:Fx,morphtarget_pars_vertex:zx,morphtarget_vertex:Bx,normal_fragment_begin:Ox,normal_fragment_maps:Hx,normal_pars_fragment:kx,normal_pars_vertex:Gx,normal_vertex:Vx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:Zx,opaque_fragment:$x,packing:Jx,premultiplied_alpha_fragment:Kx,project_vertex:jx,dithering_fragment:Qx,dithering_pars_fragment:t1,roughnessmap_fragment:e1,roughnessmap_pars_fragment:n1,shadowmap_pars_fragment:i1,shadowmap_pars_vertex:s1,shadowmap_vertex:r1,shadowmask_pars_fragment:o1,skinbase_vertex:a1,skinning_pars_vertex:l1,skinning_vertex:c1,skinnormal_vertex:h1,specularmap_fragment:u1,specularmap_pars_fragment:f1,tonemapping_fragment:d1,tonemapping_pars_fragment:p1,transmission_fragment:m1,transmission_pars_fragment:g1,uv_pars_fragment:x1,uv_pars_vertex:y1,uv_vertex:v1,worldpos_vertex:_1,background_vert:M1,background_frag:b1,backgroundCube_vert:E1,backgroundCube_frag:S1,cube_vert:w1,cube_frag:T1,depth_vert:A1,depth_frag:R1,distance_vert:C1,distance_frag:I1,equirect_vert:P1,equirect_frag:L1,linedashed_vert:D1,linedashed_frag:N1,meshbasic_vert:U1,meshbasic_frag:F1,meshlambert_vert:z1,meshlambert_frag:B1,meshmatcap_vert:O1,meshmatcap_frag:H1,meshnormal_vert:k1,meshnormal_frag:G1,meshphong_vert:V1,meshphong_frag:W1,meshphysical_vert:X1,meshphysical_frag:q1,meshtoon_vert:Y1,meshtoon_frag:Z1,points_vert:$1,points_frag:J1,shadow_vert:K1,shadow_frag:j1,sprite_vert:Q1,sprite_frag:ty},Nt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},xi={basic:{uniforms:vn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:vn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:vn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:vn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:vn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:vn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:vn([Nt.points,Nt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:vn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:vn([Nt.common,Nt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:vn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:vn([Nt.sprite,Nt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:vn([Nt.common,Nt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:vn([Nt.lights,Nt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};xi.physical={uniforms:vn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var wc={r:0,b:0,g:0},ey=new le,w0=new he;w0.set(-1,0,0,0,1,0,0,0,1);function ny(i,t,e,n,s,r){let o=new Ot(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let b=v.backgroundBlurriness>0;T=t.get(T,b)}return T}function g(v){let T=!1,b=d(v);b===null?m(o,a):b&&b.isColor&&(m(b,1),T=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,T){let b=d(T);b&&(b.isCubeTexture||b.mapping===Wo)?(c===void 0&&(c=new et(new Qt(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Ss(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(w0),c.material.toneMapped=be.getTransfer(b.colorSpace)!==Le,(h!==b||u!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new et(new We(2,2),new je({name:"BackgroundMaterial",uniforms:Ss(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=be.getTransfer(b.colorSpace)!==Le,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(wc,cu(i)),e.buffers.color.setClear(wc.r,wc.g,wc.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:p}}function iy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(C,E,L,I,D){let F=!1,H=u(C,I,L,E);r!==H&&(r=H,c(r.object)),F=d(C,I,L,D),F&&g(C,I,L,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,b(C,E,L,I),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,E,L,I){let D=I.wireframe===!0,F=n[E.id];F===void 0&&(F={},n[E.id]=F);let H=C.isInstancedMesh===!0?C.id:0,K=F[H];K===void 0&&(K={},F[H]=K);let V=K[L.id];V===void 0&&(V={},K[L.id]=V);let Z=V[D];return Z===void 0&&(Z=f(l()),V[D]=Z),Z}function f(C){let E=[],L=[],I=[];for(let D=0;D<e;D++)E[D]=0,L[D]=0,I[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:I,object:C,attributes:{},index:null}}function d(C,E,L,I){let D=r.attributes,F=E.attributes,H=0,K=L.getAttributes();for(let V in K)if(K[V].location>=0){let j=D[V],Tt=F[V];if(Tt===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor)),j===void 0||j.attribute!==Tt||Tt&&j.data!==Tt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(C,E,L,I){let D={},F=E.attributes,H=0,K=L.getAttributes();for(let V in K)if(K[V].location>=0){let j=F[V];j===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(j=C.instanceColor));let Tt={};Tt.attribute=j,j&&j.data&&(Tt.data=j.data),D[V]=Tt,H++}r.attributes=D,r.attributesNum=H,r.index=I}function x(){let C=r.newAttributes;for(let E=0,L=C.length;E<L;E++)C[E]=0}function m(C){p(C,0)}function p(C,E){let L=r.newAttributes,I=r.enabledAttributes,D=r.attributeDivisors;L[C]=1,I[C]===0&&(i.enableVertexAttribArray(C),I[C]=1),D[C]!==E&&(i.vertexAttribDivisor(C,E),D[C]=E)}function v(){let C=r.newAttributes,E=r.enabledAttributes;for(let L=0,I=E.length;L<I;L++)E[L]!==C[L]&&(i.disableVertexAttribArray(L),E[L]=0)}function T(C,E,L,I,D,F,H){H===!0?i.vertexAttribIPointer(C,E,L,D,F):i.vertexAttribPointer(C,E,L,I,D,F)}function b(C,E,L,I){x();let D=I.attributes,F=L.getAttributes(),H=E.defaultAttributeValues;for(let K in F){let V=F[K];if(V.location>=0){let Z=D[K];if(Z===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor)),Z!==void 0){let j=Z.normalized,Tt=Z.itemSize,Rt=t.get(Z);if(Rt===void 0)continue;let ie=Rt.buffer,re=Rt.type,oe=Rt.bytesPerElement,B=re===i.INT||re===i.UNSIGNED_INT||Z.gpuType===Hl;if(Z.isInterleavedBufferAttribute){let q=Z.data,mt=q.stride,Lt=Z.offset;if(q.isInstancedInterleavedBuffer){for(let _t=0;_t<V.locationSize;_t++)p(V.location+_t,q.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let _t=0;_t<V.locationSize;_t++)m(V.location+_t);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let _t=0;_t<V.locationSize;_t++)T(V.location+_t,Tt/V.locationSize,re,j,mt*oe,(Lt+Tt/V.locationSize*_t)*oe,B)}else{if(Z.isInstancedBufferAttribute){for(let q=0;q<V.locationSize;q++)p(V.location+q,Z.meshPerAttribute);C.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let q=0;q<V.locationSize;q++)m(V.location+q);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let q=0;q<V.locationSize;q++)T(V.location+q,Tt/V.locationSize,re,j,Tt*oe,Tt/V.locationSize*q*oe,B)}}else if(H!==void 0){let j=H[K];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(V.location,j);break;case 3:i.vertexAttrib3fv(V.location,j);break;case 4:i.vertexAttrib4fv(V.location,j);break;default:i.vertexAttrib1fv(V.location,j)}}}}v()}function _(){w();for(let C in n){let E=n[C];for(let L in E){let I=E[L];for(let D in I){let F=I[D];for(let H in F)h(F[H].object),delete F[H];delete I[D]}}delete n[C]}}function M(C){if(n[C.id]===void 0)return;let E=n[C.id];for(let L in E){let I=E[L];for(let D in I){let F=I[D];for(let H in F)h(F[H].object),delete F[H];delete I[D]}}delete n[C.id]}function S(C){for(let E in n){let L=n[E];for(let I in L){let D=L[I];if(D[C.id]===void 0)continue;let F=D[C.id];for(let H in F)h(F[H].object),delete F[H];delete D[C.id]}}}function y(C){for(let E in n){let L=n[E],I=C.isInstancedMesh===!0?C.id:0,D=L[I];if(D!==void 0){for(let F in D){let H=D[F];for(let K in H)h(H[K].object),delete H[K];delete D[F]}delete L[I],Object.keys(L).length===0&&delete n[E]}}}function w(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:_,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function sy(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ry(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==On&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let y=S===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Tn&&S!==Bn&&!y&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:b,maxSamples:_,samples:M}}function oy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Jn,a=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,T=v*4,b=p.clippingState||null;l.value=b,b=h(g,f,T,d);for(let _=0;_!==T;++_)b[_]=e[_];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,b=d;T!==x;++T,b+=4)o.copy(u[T]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Ur=4,ay=6,ly=20,cy=256,Qo=new Ar,i0=new Ot,yu=null,vu=0,_u=0,Mu=!1,hy=new U,ws=new U,Ts=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=hy}=r;yu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yu,vu,_u),this._renderer.xr.enabled=Mu,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ri,format:On,colorSpace:po,depthBuffer:!1},s=s0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=uy(r)),this._blurMaterial=dy(r,t,e),this._ggxMaterial=fy(r,t,e)}return s}_compileMaterial(t){let e=new et(new Ee,t);this._renderer.compile(e,Qo)}_sceneToCubeUV(t,e,n,s,r){let l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(i0),u.toneMapping=ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new Qt,new Te({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(i0),p=!0);for(let T=0;T<6;T++){let b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let _=this._cubeSize;Nr(s,b*_,T>2?_:0,_,_),u.setRenderTarget(s),p&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ji||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=o0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Qo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ur?n-g+Ur:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Nr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Qo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Nr(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,Qo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Ur?s-this._lodMax+Ur:0),f=4*(this._cubeSize-h);Nr(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Qo)}};function uy(i){let t=[],e=[],n=i,s=i-Ur+1+ay;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,g=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,T=p>2?0:-1,b=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(b,d*f*p);for(let _=0;_<f;_++){let M=h[_*2]*2-1,S=h[_*2+1]*2-1;p===0?ws.set(1,S,M):p===1?ws.set(-M,1,-S):p===2?ws.set(-M,S,1):p===3?ws.set(-1,S,-M):p===4?ws.set(-M,-1,S):ws.set(M,S,-1),ws.toArray(x,(p*f+_)*d)}}let m=new Ee;m.setAttribute("position",new we(g,d)),m.setAttribute("outputDirection",new we(x,d)),e.push(new et(m,null)),n>Ur&&n--}return{lodMeshes:e,sizeLods:t}}function s0(i,t,e){let n=new Sn(i,t,e);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fy(i,t,e){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function dy(i,t,e){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:ly,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function r0(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function o0(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ac=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new To(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:pi});r.uniforms.tEquirect.value=e;let o=new et(s,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=fn),new Ll(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function py(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===zl||d===Bl)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new Ac(g.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===zl||d===Bl,x=d===ji||d===Es;if(g||x){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Ts(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Ts(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===zl?f.mapping=ji:d===Bl&&(f.mapping=Es),f}function l(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function my(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&gs("WebGLRenderer: "+n+" extension not supported."),s}}}function gy(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let T=0,b=v.length;T<b;T+=3){let _=v[T+0],M=v[T+1],S=v[T+2];f.push(_,M,M,S,S,_)}}else{let v=g.array;x=g.version;for(let T=0,b=v.length/3-1;T<b;T+=3){let _=T+0,M=T+1,S=T+2;f.push(_,M,M,S,S,_)}}let m=new(g.count>=65535?_o:xs)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xy(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vy(i,t,e){let n=new WeakMap,s=new Ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let b=a.attributes.position.count*T,_=1;b>t.maxTextureSize&&(_=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let M=new Float32Array(b*_*4*u),S=new yo(M,b,_,u);S.type=Bn,S.needsUpdate=!0;let y=T*4;for(let A=0;A<u;A++){let C=m[A],E=p[A],L=v[A],I=b*_*4*A;for(let D=0;D<C.count;D++){let F=D*y;d===!0&&(s.fromBufferAttribute(C,D),M[I+F+0]=s.x,M[I+F+1]=s.y,M[I+F+2]=s.z,M[I+F+3]=0),g===!0&&(s.fromBufferAttribute(E,D),M[I+F+4]=s.x,M[I+F+5]=s.y,M[I+F+6]=s.z,M[I+F+7]=0),x===!0&&(s.fromBufferAttribute(L,D),M[I+F+8]=s.x,M[I+F+9]=s.y,M[I+F+10]=s.z,M[I+F+11]=L.itemSize===4?s.w:1)}}f={count:u,texture:S,size:new yt(b,_)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function _y(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var My={[qh]:"LINEAR_TONE_MAPPING",[Yh]:"REINHARD_TONE_MAPPING",[Zh]:"CINEON_TONE_MAPPING",[Cr]:"ACES_FILMIC_TONE_MAPPING",[Jh]:"AGX_TONE_MAPPING",[Kh]:"NEUTRAL_TONE_MAPPING",[$h]:"CUSTOM_TONE_MAPPING"};function by(i,t,e,n,s,r){let o=new Sn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ee;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));let h=new vl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new et(c,h),f=new Ar(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,v=[],T=!1;this.setSize=function(b,_){o.setSize(b,_),a!==null&&a.setSize(b,_),l!==null&&l.setSize(b,_);for(let M=0;M<v.length;M++){let S=v[M];S.setSize&&S.setSize(b,_)}},this.setEffects=function(b){v=b,T=v.length>0&&v[0].isRenderPass===!0;let _=o.width,M=o.height;v.length>0&&a===null&&(a=new Sn(_,M,{type:ri,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(_,M,{type:ri,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<v.length;S++){let y=v[S];y.setSize&&y.setSize(_,M)}},this.begin=function(b,_){if(x||b.toneMapping===ii&&v.length===0)return!1;if(p=_,_!==null){let M=_.width,S=_.height;(o.width!==M||o.height!==S)&&this.setSize(M,S)}return T===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=ii,!0},this.hasRenderPass=function(){return T},this.end=function(b,_){b.toneMapping=m,x=!0;let M=o,S=a;for(let y=0;y<v.length;y++){let w=v[y];w.enabled!==!1&&(w.render(b,S,M,_),w.needsSwap!==!1&&(M=S,S=S===a?l:a))}if(d!==b.outputColorSpace||g!==b.toneMapping){d=b.outputColorSpace,g=b.toneMapping,h.defines={},be.getTransfer(d)===Le&&(h.defines.SRGB_TRANSFER="");let y=My[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(p),b.render(u,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var T0=new cn,Su=new Yi(1,1),A0=new yo,R0=new ul,C0=new To,a0=[],l0=[],c0=new Float32Array(16),h0=new Float32Array(9),u0=new Float32Array(4);function zr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=a0[s];if(r===void 0&&(r=new Float32Array(s),a0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cc(i,t){let e=l0[t];e===void 0&&(e=new Int32Array(t),l0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ey(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function Ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function Ay(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;u0.set(n),i.uniformMatrix2fv(this.addr,!1,u0),on(e,n)}}function Ry(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;h0.set(n),i.uniformMatrix3fv(this.addr,!1,h0),on(e,n)}}function Cy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;c0.set(n),i.uniformMatrix4fv(this.addr,!1,c0),on(e,n)}}function Iy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function Ny(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function Fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function By(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Su.compareFunction=e.isReversedDepthBuffer()?Sc:Ec,r=Su):r=T0,e.setTexture2D(t||r,s)}function Oy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||R0,s)}function Hy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||C0,s)}function ky(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||A0,s)}function Gy(i){switch(i){case 5126:return Ey;case 35664:return Sy;case 35665:return wy;case 35666:return Ty;case 35674:return Ay;case 35675:return Ry;case 35676:return Cy;case 5124:case 35670:return Iy;case 35667:case 35671:return Py;case 35668:case 35672:return Ly;case 35669:case 35673:return Dy;case 5125:return Ny;case 36294:return Uy;case 36295:return Fy;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return ky}}function Vy(i,t){i.uniform1fv(this.addr,t)}function Wy(i,t){let e=zr(t,this.size,2);i.uniform2fv(this.addr,e)}function Xy(i,t){let e=zr(t,this.size,3);i.uniform3fv(this.addr,e)}function qy(i,t){let e=zr(t,this.size,4);i.uniform4fv(this.addr,e)}function Yy(i,t){let e=zr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zy(i,t){let e=zr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $y(i,t){let e=zr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jy(i,t){i.uniform1iv(this.addr,t)}function Ky(i,t){i.uniform2iv(this.addr,t)}function jy(i,t){i.uniform3iv(this.addr,t)}function Qy(i,t){i.uniform4iv(this.addr,t)}function tv(i,t){i.uniform1uiv(this.addr,t)}function ev(i,t){i.uniform2uiv(this.addr,t)}function nv(i,t){i.uniform3uiv(this.addr,t)}function iv(i,t){i.uniform4uiv(this.addr,t)}function sv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Su:o=T0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function rv(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||R0,r[o])}function ov(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||C0,r[o])}function av(i,t,e){let n=this.cache,s=t.length,r=Cc(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||A0,r[o])}function lv(i){switch(i){case 5126:return Vy;case 35664:return Wy;case 35665:return Xy;case 35666:return qy;case 35674:return Yy;case 35675:return Zy;case 35676:return $y;case 5124:case 35670:return Jy;case 35667:case 35671:return Ky;case 35668:case 35672:return jy;case 35669:case 35673:return Qy;case 5125:return tv;case 36294:return ev;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return av}}var wu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gy(e.type)}},Tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lv(e.type)}},Au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},bu=/(\w+)(\])?(\[|\.)?/g;function f0(i,t){i.seq.push(t),i.map[t.id]=t}function cv(i,t,e){let n=i.name,s=n.length;for(bu.lastIndex=0;;){let r=bu.exec(n),o=bu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){f0(e,c===void 0?new wu(a,i,t):new Tu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Au(a),f0(e,u)),e=u}}}var Fr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);cv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function d0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hv=37297,uv=0;function fv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var p0=new he;function dv(i){be._getMatrix(p0,be.workingColorSpace,i);let t=`mat3( ${p0.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(i)){case mo:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function m0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+fv(i.getShaderSource(t),a)}else return r}function pv(i,t){let e=dv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var mv={[qh]:"Linear",[Yh]:"Reinhard",[Zh]:"Cineon",[Cr]:"ACESFilmic",[Jh]:"AgX",[Kh]:"Neutral",[$h]:"Custom"};function gv(i,t){let e=mv[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Tc=new U;function xv(){be.getLuminanceCoefficients(Tc);let i=Tc.x.toFixed(4),t=Tc.y.toFixed(4),e=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function vv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _v(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ea(i){return i!==""}function g0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function x0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(i){return i.replace(Mv,Ev)}var bv=new Map;function Ev(i,t){let e=me[t];if(e===void 0){let n=bv.get(t);if(n!==void 0)e=me[n],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ru(e)}var Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(i){return i.replace(Sv,wv)}function wv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function v0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Tv={[Vo]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function Av(i){return Tv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rv={[ji]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function Cv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Rv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Iv={[Es]:"ENVMAP_MODE_REFRACTION"};function Pv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Iv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lv={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[Pd]:"ENVMAP_BLENDING_MIX",[Ld]:"ENVMAP_BLENDING_ADD"};function Dv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lv[i.combine]||"ENVMAP_BLENDING_NONE"}function Nv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Uv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Av(e),c=Cv(e),h=Pv(e),u=Dv(e),f=Nv(e),d=yv(e),g=vv(r),x=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[v0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[v0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?me.tonemapping_pars_fragment:"",e.toneMapping!==ii?gv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,pv("linearToOutputTexel",e.outputColorSpace),xv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ea).join(`
`)),o=Ru(o),o=g0(o,e),o=x0(o,e),a=Ru(a),a=g0(a,e),a=x0(a,e),o=y0(o),a=y0(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=v+m+o,b=v+p+a,_=d0(s,s.VERTEX_SHADER,T),M=d0(s,s.FRAGMENT_SHADER,b);s.attachShader(x,_),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(C){if(i.debug.checkShaderErrors){let E=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(_)||"",I=s.getShaderInfoLog(M)||"",D=E.trim(),F=L.trim(),H=I.trim(),K=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,_,M);else{let Z=m0(s,_,"vertex"),j=m0(s,M,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+Z+`
`+j)}else D!==""?ne("WebGLProgram: Program Info Log:",D):(F===""||H==="")&&(V=!1);V&&(C.diagnostics={runnable:K,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(_),s.deleteShader(M),y=new Fr(s,x),w=_v(s,x)}let y;this.getUniforms=function(){return y===void 0&&S(this),y};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,hv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=M,this}var Fv=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Iu(t),e.set(t,n)),n}},Iu=class{constructor(t){this.id=Fv++,this.code=t,this.usedTimes=0}};function zv(i){return i===es||i===Jo||i===Ko}function Bv(i,t,e,n,s,r){let o=new vo,a=new Cu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,w,A,C,E,L){let I=C.fog,D=E.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=t.get(y.envMap||F,H),V=K&&K.mapping===Wo?K.image.height:null,Z=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&ne("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Tt=j!==void 0?j.length:0,Rt=0;D.morphAttributes.position!==void 0&&(Rt=1),D.morphAttributes.normal!==void 0&&(Rt=2),D.morphAttributes.color!==void 0&&(Rt=3);let ie,re,oe,B;if(Z){let Re=xi[Z];ie=Re.vertexShader,re=Re.fragmentShader}else{ie=y.vertexShader,re=y.fragmentShader;let Re=a.getVertexShaderStage(y),Me=a.getFragmentShaderStage(y);a.update(y,Re,Me),oe=Re.id,B=Me.id}let q=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Lt=E.isInstancedMesh===!0,_t=E.isBatchedMesh===!0,zt=!!y.map,qt=!!y.matcap,ot=!!K,ct=!!y.aoMap,dt=!!y.lightMap,rt=!!y.bumpMap&&y.wireframe===!1,gt=!!y.normalMap,xt=!!y.displacementMap,Pt=!!y.emissiveMap,Ut=!!y.metalnessMap,Gt=!!y.roughnessMap,O=y.anisotropy>0,ge=y.clearcoat>0,ce=y.dispersion>0,N=y.retroreflectivity>0,R=y.iridescence>0,W=y.sheen>0,Y=y.transmission>0,nt=O&&!!y.anisotropyMap,bt=ge&&!!y.clearcoatMap,wt=ge&&!!y.clearcoatNormalMap,it=ge&&!!y.clearcoatRoughnessMap,lt=R&&!!y.iridescenceMap,Ct=R&&!!y.iridescenceThicknessMap,Zt=W&&!!y.sheenColorMap,It=W&&!!y.sheenRoughnessMap,k=!!y.specularMap,at=!!y.specularColorMap,ht=!!y.specularIntensityMap,St=Y&&!!y.transmissionMap,z=Y&&!!y.thicknessMap,ut=!!y.gradientMap,st=!!y.alphaMap,Mt=y.alphaTest>0,At=!!y.alphaHash,ft=!!y.extensions,$t=ii;y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&($t=i.toneMapping);let Ht={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:ie,fragmentShader:re,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:_t,batchingColor:_t&&E._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&E.instanceColor!==null,instancingMorph:Lt&&E.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:zt,matcap:qt,envMap:ot,envMapMode:ot&&K.mapping,envMapCubeUVHeight:V,aoMap:ct,lightMap:dt,bumpMap:rt,normalMap:gt,displacementMap:xt,emissiveMap:Pt,normalMapObjectSpace:gt&&y.normalMapType===Fd,normalMapTangentSpace:gt&&y.normalMapType===jo,packedNormalMap:gt&&y.normalMapType===jo&&zv(y.normalMap.format),metalnessMap:Ut,roughnessMap:Gt,anisotropy:O,anisotropyMap:nt,clearcoat:ge,clearcoatMap:bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:it,dispersion:ce,retroreflection:N,iridescence:R,iridescenceMap:lt,iridescenceThicknessMap:Ct,sheen:W,sheenColorMap:Zt,sheenRoughnessMap:It,specularMap:k,specularColorMap:at,specularIntensityMap:ht,transmission:Y,transmissionMap:St,thicknessMap:z,gradientMap:ut,opaque:y.transparent===!1&&y.blending===Ki&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:Mt,alphaHash:At,combine:y.combine,mapUv:zt&&g(y.map.channel),aoMapUv:ct&&g(y.aoMap.channel),lightMapUv:dt&&g(y.lightMap.channel),bumpMapUv:rt&&g(y.bumpMap.channel),normalMapUv:gt&&g(y.normalMap.channel),displacementMapUv:xt&&g(y.displacementMap.channel),emissiveMapUv:Pt&&g(y.emissiveMap.channel),metalnessMapUv:Ut&&g(y.metalnessMap.channel),roughnessMapUv:Gt&&g(y.roughnessMap.channel),anisotropyMapUv:nt&&g(y.anisotropyMap.channel),clearcoatMapUv:bt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&g(y.sheenRoughnessMap.channel),specularMapUv:k&&g(y.specularMap.channel),specularColorMapUv:at&&g(y.specularColorMap.channel),specularIntensityMapUv:ht&&g(y.specularIntensityMap.channel),transmissionMapUv:St&&g(y.transmissionMap.channel),thicknessMapUv:z&&g(y.thicknessMap.channel),alphaMapUv:st&&g(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(gt||O),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!D.attributes.uv&&(zt||st),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Rt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:zt&&y.map.isVideoTexture===!0&&be.getTransfer(y.map.colorSpace)===Le,decodeVideoTextureEmissive:Pt&&y.emissiveMap.isVideoTexture===!0&&be.getTransfer(y.emissiveMap.colorSpace)===Le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ft&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&y.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)w.push(A),w.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(p(w,y),v(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function T(y){let w=d[y.type],A;if(w){let C=xi[w];A=t0.clone(C.uniforms)}else A=y.uniforms;return A}function b(y,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new Uv(i,w,y,s),c.push(A),h.set(w,A)),A}function _(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function S(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:b,releaseProgram:_,releaseShaderCache:M,programs:c,dispose:S}}function Ov(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function _0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function M0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,x,m,p){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},i[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=g,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=p),t++,v}function l(f,d,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let T=a(f,d,g,x,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(f,d,g,x,m,p){let v=a(f,d,g,x,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(f,d){e.length>1&&e.sort(f||Hv),n.length>1&&n.sort(d||_0),s.length>1&&s.sort(d||_0)}function u(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function kv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new M0,i.set(n,[o])):s>=r.length?(o=new M0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Ot};break;case"SpotLight":e={position:new U,direction:new U,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Vv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wv=0;function Xv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qv(i){let t=new Gv,e=Vv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new le,o=new le;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,T=0,b=0,_=0,M=0,S=0,y=0,w=0,A=0;c.sort(Xv);for(let E=0,L=c.length;E<L;E++){let I=c[E],D=I.color,F=I.intensity,H=I.distance,K=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===es?K=I.shadow.map.texture:K=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=D.r*F,u+=D.g*F,f+=D.b*F;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],F);A++}else if(I.isSunLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,j=e.get(I);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=K;let Tt=Z.getViewportCount();for(let Rt=0;Rt<Tt;Rt++)n.sunShadowMatrix[x+Rt]=Z.getMatrix(Rt),n.sunShadowCascade[x+Rt]=Z._cascadeData[Rt];x+=Tt,g++}n.sun[d]=V,d++}else if(I.isDirectionalLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,j=e.get(I);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=I.shadow.matrix,_++}n.directional[m]=V,m++}else if(I.isSpotLight){let V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(D).multiplyScalar(F),V.distance=H,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[v]=V;let Z=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,Z.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[v]=Z.matrix,I.castShadow){let j=e.get(I);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=K,S++}v++}else if(I.isRectAreaLight){let V=t.get(I);V.color.copy(D).multiplyScalar(F),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=V,T++}else if(I.isPointLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let Z=I.shadow,j=e.get(I);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=I.shadow.matrix,M++}n.point[p]=V,p++}else if(I.isHemisphereLight){let V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(F),V.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[b]=V,b++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.sunLength!==d||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==T||C.hemiLength!==b||C.numSunShadows!==g||C.numDirectionalShadows!==_||C.numPointShadows!==M||C.numSpotShadows!==S||C.numSpotMaps!==y||C.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=T,n.point.length=p,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.sunLength=d,C.directionalLength=m,C.pointLength=p,C.spotLength=v,C.rectAreaLength=T,C.hemiLength=b,C.numSunShadows=g,C.numDirectionalShadows=_,C.numPointShadows=M,C.numSpotShadows=S,C.numSpotMaps=y,C.numLightProbes=A,n.version=Wv++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let b=c[v];if(b.isSunLight){let _=n.sun[u];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(b.isSpotLight){let _=n.spot[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let _=n.hemi[m];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function b0(i){let t=new qv(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Yv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new b0(i),t.set(s,[a])):r>=o.length?(a=new b0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`,Jv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Kv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],E0=new le,ta=new U,Eu=new U;function jv(i,t,e){let n=new yr,s=new yt,r=new yt,o=new Ce,a=new _l,l=new Ml,c={},h=e.maxTextureSize,u={[di]:sn,[sn]:di,[hn]:hn},f=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Zv,fragmentShader:$v}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let p=this.type;this.render=function(M,S,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Ul&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vo);let w=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),E=i.state;E.setBlending(pi),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let L=p!==this.type;L&&S.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(D=>D.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,D=M.length;I<D;I++){let F=M[I],H=F.shadow;if(H===void 0){ne("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let K=H.getFrameExtents();s.multiply(K),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,H.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=V,H.map===null||L===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Rr){if(F.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Sn(s.x,s.y,{format:es,type:ri,minFilter:fn,magFilter:fn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new Yi(s.x,s.y,Bn),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=ui,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ln,H.map.depthTexture.magFilter=ln}else F.isPointLight?(H.map=new Ac(s.x),H.map.depthTexture=new fl(s.x,si)):(H.map=new Sn(s.x,s.y),H.map.depthTexture=new Yi(s.x,s.y,si)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=ui,this.type===Vo?(H.map.depthTexture.compareFunction=V?Sc:Ec,H.map.depthTexture.minFilter=fn,H.map.depthTexture.magFilter=fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ln,H.map.depthTexture.magFilter=ln);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();F.isPointLight!==!0&&H.updateMatrices(F,y);for(let j=0;j<Z;j++){let Tt=H.getCamera(j);if(F.isPointLight){let Rt=H.camera,ie=H.matrix,re=F.distance||Rt.far;re!==Rt.far&&(Rt.far=re,Rt.updateProjectionMatrix()),ta.setFromMatrixPosition(F.matrixWorld),Rt.position.copy(ta),Eu.copy(Rt.position),Eu.add(Jv[j]),Rt.up.copy(Kv[j]),Rt.lookAt(Eu),Rt.updateMatrixWorld(),ie.makeTranslation(-ta.x,-ta.y,-ta.z),E0.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(E0,Rt.coordinateSystem,Rt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,j),i.clear();else{j===0&&(i.setRenderTarget(H.map),i.clear());let Rt=H.getViewport(j);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),E.viewport(o)}n=H.getFrustum(j),b(S,y,Tt,F,this.type)}H.isPointLightShadow!==!0&&this.type===Rr&&v(H,y),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,A,C)};function v(M,S){let y=t.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Sn(s.x,s.y,{format:es,type:ri}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(S,null,y,f,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(S,null,y,d,x,null)}function T(M,S,y,w){let A=null,C=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)A=C;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let E=A.uuid,L=S.uuid,I=c[E];I===void 0&&(I={},c[E]=I);let D=I[L];D===void 0&&(D=A.clone(),I[L]=D,S.addEventListener("dispose",_)),A=D}if(A.visible=S.visible,A.wireframe=S.wireframe,w===Rr?A.side=S.shadowSide!==null?S.shadowSide:S.side:A.side=S.shadowSide!==null?S.shadowSide:u[S.side],A.alphaMap=S.alphaMap,A.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,A.map=S.map,A.clipShadows=S.clipShadows,A.clippingPlanes=S.clippingPlanes,A.clipIntersection=S.clipIntersection,A.displacementMap=S.displacementMap,A.displacementScale=S.displacementScale,A.displacementBias=S.displacementBias,A.wireframeLinewidth=S.wireframeLinewidth,A.linewidth=S.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let E=i.properties.get(A);E.light=y}return A}function b(M,S,y,w,A){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===Rr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let L=t.update(M),I=M.material;if(Array.isArray(I)){let D=L.groups;for(let F=0,H=D.length;F<H;F++){let K=D[F],V=I[K.materialIndex];if(V&&V.visible){let Z=T(M,V,w,A);M.onBeforeShadow(i,M,S,y,L,Z,K),i.renderBufferDirect(y,null,L,Z,M,K),M.onAfterShadow(i,M,S,y,L,Z,K)}}}else if(I.visible){let D=T(M,I,w,A);M.onBeforeShadow(i,M,S,y,L,D,null),i.renderBufferDirect(y,null,L,D,M,null),M.onAfterShadow(i,M,S,y,L,D,null)}}let E=M.children;for(let L=0,I=E.length;L<I;L++)b(E[L],S,y,w,A)}function _(M){M.target.removeEventListener("dispose",_);for(let y in c){let w=c[y],A=M.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function Qv(i,t){function e(){let z=!1,ut=new Ce,st=null,Mt=new Ce(0,0,0,0);return{setMask:function(At){st!==At&&!z&&(i.colorMask(At,At,At,At),st=At)},setLocked:function(At){z=At},setClear:function(At,ft,$t,Ht,Re){Re===!0&&(At*=Ht,ft*=Ht,$t*=Ht),ut.set(At,ft,$t,Ht),Mt.equals(ut)===!1&&(i.clearColor(At,ft,$t,Ht),Mt.copy(ut))},reset:function(){z=!1,st=null,Mt.set(-1,0,0,0)}}}function n(){let z=!1,ut=!1,st=null,Mt=null,At=null;return{setReversed:function(ft){if(ut!==ft){let $t=t.get("EXT_clip_control");ft?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),ut=ft;let Ht=At;At=null,this.setClear(Ht)}},getReversed:function(){return ut},setTest:function(ft){ft?q(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(ft){st!==ft&&!z&&(i.depthMask(ft),st=ft)},setFunc:function(ft){if(ut&&(ft=Yd[ft]),Mt!==ft){switch(ft){case tl:i.depthFunc(i.NEVER);break;case el:i.depthFunc(i.ALWAYS);break;case nl:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case il:i.depthFunc(i.EQUAL);break;case sl:i.depthFunc(i.GEQUAL);break;case rl:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=ft}},setLocked:function(ft){z=ft},setClear:function(ft){At!==ft&&(At=ft,ut&&(ft=1-ft),i.clearDepth(ft))},reset:function(){z=!1,st=null,Mt=null,At=null,ut=!1}}}function s(){let z=!1,ut=null,st=null,Mt=null,At=null,ft=null,$t=null,Ht=null,Re=null;return{setTest:function(Me){z||(Me?q(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(Me){ut!==Me&&!z&&(i.stencilMask(Me),ut=Me)},setFunc:function(Me,mn,kn){(st!==Me||Mt!==mn||At!==kn)&&(i.stencilFunc(Me,mn,kn),st=Me,Mt=mn,At=kn)},setOp:function(Me,mn,kn){(ft!==Me||$t!==mn||Ht!==kn)&&(i.stencilOp(Me,mn,kn),ft=Me,$t=mn,Ht=kn)},setLocked:function(Me){z=Me},setClear:function(Me){Re!==Me&&(i.clearStencil(Me),Re=Me)},reset:function(){z=!1,ut=null,st=null,Mt=null,At=null,ft=null,$t=null,Ht=null,Re=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,T=null,b=null,_=null,M=null,S=null,y=new Ot(0,0,0),w=0,A=!1,C=null,E=null,L=null,I=null,D=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=K>=2);let Z=null,j={},Tt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),ie=new Ce().fromArray(Tt),re=new Ce().fromArray(Rt);function oe(z,ut,st,Mt){let At=new Uint8Array(4),ft=i.createTexture();i.bindTexture(z,ft),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<st;$t++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(ut+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ft}let B={};B[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(rr),rt(!1),gt(kh),q(i.CULL_FACE),ct(pi);function q(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function mt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Lt(z,ut){return f[z]!==ut?(i.bindFramebuffer(z,ut),f[z]=ut,z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ut),z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function _t(z,ut){let st=g,Mt=!1;if(z){st=d.get(ut),st===void 0&&(st=[],d.set(ut,st));let At=z.textures;if(st.length!==At.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,$t=At.length;ft<$t;ft++)st[ft]=i.COLOR_ATTACHMENT0+ft;st.length=At.length,Mt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(st)}function zt(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let qt={[bs]:i.FUNC_ADD,[pd]:i.FUNC_SUBTRACT,[md]:i.FUNC_REVERSE_SUBTRACT};qt[gd]=i.MIN,qt[xd]=i.MAX;let ot={[yd]:i.ZERO,[vd]:i.ONE,[_d]:i.SRC_COLOR,[Wh]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[Xh]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[Ed]:i.ONE_MINUS_DST_ALPHA,[Ad]:i.CONSTANT_COLOR,[Rd]:i.ONE_MINUS_CONSTANT_COLOR,[Cd]:i.CONSTANT_ALPHA,[Id]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(z,ut,st,Mt,At,ft,$t,Ht,Re,Me){if(z===pi){m===!0&&(mt(i.BLEND),m=!1);return}if(m===!1&&(q(i.BLEND),m=!0),z!==dd){if(z!==p||Me!==A){if((v!==bs||_!==bs)&&(i.blendEquation(i.FUNC_ADD),v=bs,_=bs),Me)switch(z){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFunc(i.ONE,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",z);break}else switch(z){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gh:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",z);break}T=null,b=null,M=null,S=null,y.set(0,0,0),w=0,p=z,A=Me}return}At=At||ut,ft=ft||st,$t=$t||Mt,(ut!==v||At!==_)&&(i.blendEquationSeparate(qt[ut],qt[At]),v=ut,_=At),(st!==T||Mt!==b||ft!==M||$t!==S)&&(i.blendFuncSeparate(ot[st],ot[Mt],ot[ft],ot[$t]),T=st,b=Mt,M=ft,S=$t),(Ht.equals(y)===!1||Re!==w)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Re),y.copy(Ht),w=Re),p=z,A=!1}function dt(z,ut){z.side===hn?mt(i.CULL_FACE):q(i.CULL_FACE);let st=z.side===sn;ut&&(st=!st),rt(st),z.blending===Ki&&z.transparent===!1?ct(pi):ct(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Mt=z.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Pt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(z){C!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),C=z)}function gt(z){z!==ud?(q(i.CULL_FACE),z!==E&&(z===kh?i.cullFace(i.BACK):z===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),E=z}function xt(z){z!==L&&(H&&i.lineWidth(z),L=z)}function Pt(z,ut,st){z?(q(i.POLYGON_OFFSET_FILL),(I!==ut||D!==st)&&(I=ut,D=st,o.getReversed()&&(ut=-ut),i.polygonOffset(ut,st))):mt(i.POLYGON_OFFSET_FILL)}function Ut(z){z?q(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function Gt(z){z===void 0&&(z=i.TEXTURE0+F-1),Z!==z&&(i.activeTexture(z),Z=z)}function O(z,ut,st){st===void 0&&(Z===null?st=i.TEXTURE0+F-1:st=Z);let Mt=j[st];Mt===void 0&&(Mt={type:void 0,texture:void 0},j[st]=Mt),(Mt.type!==z||Mt.texture!==ut)&&(Z!==st&&(i.activeTexture(st),Z=st),i.bindTexture(z,ut||B[z]),Mt.type=z,Mt.texture=ut)}function ge(){let z=j[Z];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(z){ae("WebGLState:",z)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(z){ae("WebGLState:",z)}}function R(){try{i.texSubImage2D(...arguments)}catch(z){ae("WebGLState:",z)}}function W(){try{i.texSubImage3D(...arguments)}catch(z){ae("WebGLState:",z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(z){ae("WebGLState:",z)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){ae("WebGLState:",z)}}function bt(){try{i.texStorage2D(...arguments)}catch(z){ae("WebGLState:",z)}}function wt(){try{i.texStorage3D(...arguments)}catch(z){ae("WebGLState:",z)}}function it(){try{i.texImage2D(...arguments)}catch(z){ae("WebGLState:",z)}}function lt(){try{i.texImage3D(...arguments)}catch(z){ae("WebGLState:",z)}}function Ct(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function Zt(z,ut){u[z]!==ut&&(i.pixelStorei(z,ut),u[z]=ut)}function It(z){ie.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ie.copy(z))}function k(z){re.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),re.copy(z))}function at(z,ut){let st=c.get(ut);st===void 0&&(st=new WeakMap,c.set(ut,st));let Mt=st.get(z);Mt===void 0&&(Mt=i.getUniformBlockIndex(ut,z.name),st.set(z,Mt))}function ht(z,ut){let Mt=c.get(ut).get(z);l.get(ut)!==Mt&&(i.uniformBlockBinding(ut,Mt,z.__bindingPointIndex),l.set(ut,Mt))}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,j={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,T=null,b=null,_=null,M=null,S=null,y=new Ot(0,0,0),w=0,A=!1,C=null,E=null,L=null,I=null,D=null,ie.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:mt,bindFramebuffer:Lt,drawBuffers:_t,useProgram:zt,setBlending:ct,setMaterial:dt,setFlipSided:rt,setCullFace:gt,setLineWidth:xt,setPolygonOffset:Pt,setScissorTest:Ut,activeTexture:Gt,bindTexture:O,unbindTexture:ge,compressedTexImage2D:ce,compressedTexImage3D:N,texImage2D:it,texImage3D:lt,pixelStorei:Zt,getParameter:Ct,updateUBOMapping:at,uniformBlockBinding:ht,texStorage2D:bt,texStorage3D:wt,texSubImage2D:R,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:nt,scissor:It,viewport:k,reset:St}}function t_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap,u=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,R){return g?new OffscreenCanvas(N,R):go("canvas")}function m(N,R,W){let Y=1,nt=ce(N);if((nt.width>W||nt.height>W)&&(Y=W/Math.max(nt.width,nt.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap||typeof VideoFrame!="undefined"&&N instanceof VideoFrame){let bt=Math.floor(Y*nt.width),wt=Math.floor(Y*nt.height);f===void 0&&(f=x(bt,wt));let it=R?x(bt,wt):f;return it.width=bt,it.height=wt,it.getContext("2d").drawImage(N,0,0,bt,wt),ne("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+bt+"x"+wt+")."),it}else return"data"in N&&ne("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),N;return N}function p(N){return N.generateMipmaps}function v(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(N,R,W,Y,nt,bt=!1){if(N!==null){if(i[N]!==void 0)return i[N];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let wt;Y&&(wt=t.get("EXT_texture_norm16"),wt||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=R;if(R===i.RED&&(W===i.FLOAT&&(it=i.R32F),W===i.HALF_FLOAT&&(it=i.R16F),W===i.UNSIGNED_BYTE&&(it=i.R8),W===i.UNSIGNED_SHORT&&wt&&(it=wt.R16_EXT),W===i.SHORT&&wt&&(it=wt.R16_SNORM_EXT)),R===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.R8UI),W===i.UNSIGNED_SHORT&&(it=i.R16UI),W===i.UNSIGNED_INT&&(it=i.R32UI),W===i.BYTE&&(it=i.R8I),W===i.SHORT&&(it=i.R16I),W===i.INT&&(it=i.R32I)),R===i.RG&&(W===i.FLOAT&&(it=i.RG32F),W===i.HALF_FLOAT&&(it=i.RG16F),W===i.UNSIGNED_BYTE&&(it=i.RG8),W===i.UNSIGNED_SHORT&&wt&&(it=wt.RG16_EXT),W===i.SHORT&&wt&&(it=wt.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RG8UI),W===i.UNSIGNED_SHORT&&(it=i.RG16UI),W===i.UNSIGNED_INT&&(it=i.RG32UI),W===i.BYTE&&(it=i.RG8I),W===i.SHORT&&(it=i.RG16I),W===i.INT&&(it=i.RG32I)),R===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGB8UI),W===i.UNSIGNED_SHORT&&(it=i.RGB16UI),W===i.UNSIGNED_INT&&(it=i.RGB32UI),W===i.BYTE&&(it=i.RGB8I),W===i.SHORT&&(it=i.RGB16I),W===i.INT&&(it=i.RGB32I)),R===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),W===i.UNSIGNED_INT&&(it=i.RGBA32UI),W===i.BYTE&&(it=i.RGBA8I),W===i.SHORT&&(it=i.RGBA16I),W===i.INT&&(it=i.RGBA32I)),R===i.RGB&&(W===i.UNSIGNED_SHORT&&wt&&(it=wt.RGB16_EXT),W===i.SHORT&&wt&&(it=wt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),R===i.RGBA){let lt=bt?mo:be.getTransfer(nt);W===i.FLOAT&&(it=i.RGBA32F),W===i.HALF_FLOAT&&(it=i.RGBA16F),W===i.UNSIGNED_BYTE&&(it=lt===Le?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&wt&&(it=wt.RGBA16_EXT),W===i.SHORT&&wt&&(it=wt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function _(N,R){let W;return N?R===null||R===si||R===Pr?W=i.DEPTH24_STENCIL8:R===Bn?W=i.DEPTH32F_STENCIL8:R===Ir&&(W=i.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===si||R===Pr?W=i.DEPTH_COMPONENT24:R===Bn?W=i.DEPTH_COMPONENT32F:R===Ir&&(W=i.DEPTH_COMPONENT16),W}function M(N,R){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==ln&&N.minFilter!==fn?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function S(N){let R=N.target;R.removeEventListener("dispose",S),w(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function y(N){let R=N.target;R.removeEventListener("dispose",y),C(R)}function w(N){let R=n.get(N);if(R.__webglInit===void 0)return;let W=N.source,Y=d.get(W);if(Y){let nt=Y[R.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&A(N),Object.keys(Y).length===0&&d.delete(W)}n.remove(N)}function A(N){let R=n.get(N);i.deleteTexture(R.__webglTexture);let W=N.source,Y=d.get(W);delete Y[R.__cacheKey],o.memory.textures--}function C(N){let R=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(R.__webglFramebuffer[Y]))for(let nt=0;nt<R.__webglFramebuffer[Y].length;nt++)i.deleteFramebuffer(R.__webglFramebuffer[Y][nt]);else i.deleteFramebuffer(R.__webglFramebuffer[Y]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[Y])}else{if(Array.isArray(R.__webglFramebuffer))for(let Y=0;Y<R.__webglFramebuffer.length;Y++)i.deleteFramebuffer(R.__webglFramebuffer[Y]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Y=0;Y<R.__webglColorRenderbuffer.length;Y++)R.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[Y]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let W=N.textures;for(let Y=0,nt=W.length;Y<nt;Y++){let bt=n.get(W[Y]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(W[Y])}n.remove(N)}let E=0;function L(){E=0}function I(){return E}function D(N){E=N}function F(){let N=E;return N>=s.maxTextures&&ne("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),E+=1,N}function H(N){let R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function K(N,R){let W=n.get(N);if(N.isVideoTexture&&O(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let Y=N.image;if(Y===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(W,N,R);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+R)}function V(N,R){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){mt(W,N,R);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+R)}function Z(N,R){let W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){mt(W,N,R);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+R)}function j(N,R){let W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){Lt(W,N,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+R)}let Tt={[Ri]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[al]:i.MIRRORED_REPEAT},Rt={[ln]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[Xo]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Ol]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},ie={[Bd]:i.NEVER,[Vd]:i.ALWAYS,[Od]:i.LESS,[Ec]:i.LEQUAL,[Hd]:i.EQUAL,[Sc]:i.GEQUAL,[kd]:i.GREATER,[Gd]:i.NOTEQUAL};function re(N,R){if(R.type===Bn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===fn||R.magFilter===Ol||R.magFilter===Xo||R.magFilter===Qi||R.minFilter===fn||R.minFilter===Ol||R.minFilter===Xo||R.minFilter===Qi)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Tt[R.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Tt[R.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Tt[R.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Rt[R.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Rt[R.minFilter]),R.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ie[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ln||R.minFilter!==Xo&&R.minFilter!==Qi||R.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function oe(N,R){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",S));let Y=R.source,nt=d.get(Y);nt===void 0&&(nt={},d.set(Y,nt));let bt=H(R);if(bt!==N.__cacheKey){nt[bt]===void 0&&(nt[bt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),nt[bt].usedTimes++;let wt=nt[N.__cacheKey];wt!==void 0&&(nt[N.__cacheKey].usedTimes--,wt.usedTimes===0&&A(R)),N.__cacheKey=bt,N.__webglTexture=nt[bt].texture}return W}function B(N,R,W){return Math.floor(Math.floor(N/W)/R)}function q(N,R,W,Y){let bt=N.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,W,Y,R.data);else{bt.sort((Zt,It)=>Zt.start-It.start);let wt=0;for(let Zt=1;Zt<bt.length;Zt++){let It=bt[wt],k=bt[Zt],at=It.start+It.count,ht=B(k.start,R.width,4),St=B(It.start,R.width,4);k.start<=at+1&&ht===St&&B(k.start+k.count-1,R.width,4)===ht?It.count=Math.max(It.count,k.start+k.count-It.start):(++wt,bt[wt]=k)}bt.length=wt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Zt=0,It=bt.length;Zt<It;Zt++){let k=bt[Zt],at=Math.floor(k.start/4),ht=Math.ceil(k.count/4),St=at%R.width,z=Math.floor(at/R.width),ut=ht,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,St),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,St,z,ut,st,W,Y,R.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function mt(N,R,W){let Y=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Y=i.TEXTURE_3D);let nt=oe(N,R),bt=R.source;e.bindTexture(Y,N.__webglTexture,i.TEXTURE0+W);let wt=n.get(bt);if(bt.version!==wt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap!="undefined"&&R.image instanceof ImageBitmap)===!1){let st=be.getPrimaries(be.workingColorSpace),Mt=R.colorSpace===Pi?null:be.getPrimaries(R.colorSpace),At=R.colorSpace===Pi||st===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let lt=m(R.image,!1,s.maxTextureSize);lt=ge(R,lt);let Ct=r.convert(R.format,R.colorSpace),Zt=r.convert(R.type),It=b(R.internalFormat,Ct,Zt,R.normalized,R.colorSpace,R.isVideoTexture);re(Y,R);let k,at=R.mipmaps,ht=R.isVideoTexture!==!0,St=wt.__version===void 0||nt===!0,z=bt.dataReady,ut=M(R,lt);if(R.isDepthTexture)It=_(R.format===ts,R.type),St&&(ht?e.texStorage2D(i.TEXTURE_2D,1,It,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,It,lt.width,lt.height,0,Ct,Zt,null));else if(R.isDataTexture)if(at.length>0){ht&&St&&e.texStorage2D(i.TEXTURE_2D,ut,It,at[0].width,at[0].height);for(let st=0,Mt=at.length;st<Mt;st++)k=at[st],ht?z&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,k.width,k.height,Ct,Zt,k.data):e.texImage2D(i.TEXTURE_2D,st,It,k.width,k.height,0,Ct,Zt,k.data);R.generateMipmaps=!1}else ht?(St&&e.texStorage2D(i.TEXTURE_2D,ut,It,lt.width,lt.height),z&&q(R,lt,Ct,Zt)):e.texImage2D(i.TEXTURE_2D,0,It,lt.width,lt.height,0,Ct,Zt,lt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ht&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,It,at[0].width,at[0].height,lt.depth);for(let st=0,Mt=at.length;st<Mt;st++)if(k=at[st],R.format!==On)if(Ct!==null)if(ht){if(z)if(R.layerUpdates.size>0){let At=fu(k.width,k.height,R.format,R.type);for(let ft of R.layerUpdates){let $t=k.data.subarray(ft*At/k.data.BYTES_PER_ELEMENT,(ft+1)*At/k.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,ft,k.width,k.height,1,Ct,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,k.width,k.height,lt.depth,Ct,k.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,It,k.width,k.height,lt.depth,0,k.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,k.width,k.height,lt.depth,Ct,Zt,k.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,It,k.width,k.height,lt.depth,0,Ct,Zt,k.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{ht&&St&&e.texStorage2D(i.TEXTURE_2D,ut,It,at[0].width,at[0].height);for(let st=0,Mt=at.length;st<Mt;st++)k=at[st],R.format!==On?Ct!==null?ht?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,k.width,k.height,Ct,k.data):e.compressedTexImage2D(i.TEXTURE_2D,st,It,k.width,k.height,0,k.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?z&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,k.width,k.height,Ct,Zt,k.data):e.texImage2D(i.TEXTURE_2D,st,It,k.width,k.height,0,Ct,Zt,k.data)}else if(R.isDataArrayTexture)if(ht){if(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,It,lt.width,lt.height,lt.depth),z)if(R.layerUpdates.size>0){let st=fu(lt.width,lt.height,R.format,R.type);for(let Mt of R.layerUpdates){let At=lt.data.subarray(Mt*st/lt.data.BYTES_PER_ELEMENT,(Mt+1)*st/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,lt.width,lt.height,1,Ct,Zt,At)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Zt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,lt.width,lt.height,lt.depth,0,Ct,Zt,lt.data);else if(R.isData3DTexture)ht?(St&&e.texStorage3D(i.TEXTURE_3D,ut,It,lt.width,lt.height,lt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Zt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,It,lt.width,lt.height,lt.depth,0,Ct,Zt,lt.data);else if(R.isFramebufferTexture){if(St)if(ht)e.texStorage2D(i.TEXTURE_2D,ut,It,lt.width,lt.height);else{let st=lt.width,Mt=lt.height;for(let At=0;At<ut;At++)e.texImage2D(i.TEXTURE_2D,At,It,st,Mt,0,Ct,Zt,null),st>>=1,Mt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),lt.parentNode!==st){st.appendChild(lt),u.add(R),st.onpaint=Mt=>{let At=Mt.changedElements;for(let ft of u)At.includes(ft.image)&&(ft.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{let At=i.RGBA,ft=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,ft,$t,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(at.length>0){if(ht&&St){let st=ce(at[0]);e.texStorage2D(i.TEXTURE_2D,ut,It,st.width,st.height)}for(let st=0,Mt=at.length;st<Mt;st++)k=at[st],ht?z&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Ct,Zt,k):e.texImage2D(i.TEXTURE_2D,st,It,Ct,Zt,k);R.generateMipmaps=!1}else if(ht){if(St){let st=ce(lt);e.texStorage2D(i.TEXTURE_2D,ut,It,st.width,st.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Zt,lt)}else e.texImage2D(i.TEXTURE_2D,0,It,Ct,Zt,lt);p(R)&&v(Y),wt.__version=bt.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function Lt(N,R,W){if(R.image.length!==6)return;let Y=oe(N,R),nt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+W);let bt=n.get(nt);if(nt.version!==bt.__version||Y===!0){e.activeTexture(i.TEXTURE0+W);let wt=be.getPrimaries(be.workingColorSpace),it=R.colorSpace===Pi?null:be.getPrimaries(R.colorSpace),lt=R.colorSpace===Pi||wt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Ct=R.isCompressedTexture||R.image[0].isCompressedTexture,Zt=R.image[0]&&R.image[0].isDataTexture,It=[];for(let ft=0;ft<6;ft++)!Ct&&!Zt?It[ft]=m(R.image[ft],!0,s.maxCubemapSize):It[ft]=Zt?R.image[ft].image:R.image[ft],It[ft]=ge(R,It[ft]);let k=It[0],at=r.convert(R.format,R.colorSpace),ht=r.convert(R.type),St=b(R.internalFormat,at,ht,R.normalized,R.colorSpace),z=R.isVideoTexture!==!0,ut=bt.__version===void 0||Y===!0,st=nt.dataReady,Mt=M(R,k);re(i.TEXTURE_CUBE_MAP,R);let At;if(Ct){z&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,St,k.width,k.height);for(let ft=0;ft<6;ft++){At=It[ft].mipmaps;for(let $t=0;$t<At.length;$t++){let Ht=At[$t];R.format!==On?at!==null?z?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,0,0,Ht.width,Ht.height,at,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,St,Ht.width,Ht.height,0,Ht.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,0,0,Ht.width,Ht.height,at,ht,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t,St,Ht.width,Ht.height,0,at,ht,Ht.data)}}}else{if(At=R.mipmaps,z&&ut){At.length>0&&Mt++;let ft=ce(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,St,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Zt){z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,It[ft].width,It[ft].height,at,ht,It[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,St,It[ft].width,It[ft].height,0,at,ht,It[ft].data);for(let $t=0;$t<At.length;$t++){let Re=At[$t].image[ft].image;z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,0,0,Re.width,Re.height,at,ht,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,St,Re.width,Re.height,0,at,ht,Re.data)}}else{z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,at,ht,It[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,St,at,ht,It[ft]);for(let $t=0;$t<At.length;$t++){let Ht=At[$t];z?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,0,0,at,ht,Ht.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,$t+1,St,at,ht,Ht.image[ft])}}}p(R)&&v(i.TEXTURE_CUBE_MAP),bt.__version=nt.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function _t(N,R,W,Y,nt,bt){let wt=r.convert(W.format,W.colorSpace),it=r.convert(W.type),lt=b(W.internalFormat,wt,it,W.normalized,W.colorSpace),Ct=n.get(R),Zt=n.get(W);if(Zt.__renderTarget=R,!Ct.__hasExternalTextures){let It=Math.max(1,R.width>>bt),k=Math.max(1,R.height>>bt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,bt,lt,It,k,R.depth,0,wt,it,null):e.texImage2D(nt,bt,lt,It,k,0,wt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Gt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,nt,Zt.__webglTexture,0,Ut(R)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,nt,Zt.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(N,R,W){if(i.bindRenderbuffer(i.RENDERBUFFER,N),R.depthBuffer){let Y=R.depthTexture,nt=Y&&Y.isDepthTexture?Y.type:null,bt=_(R.stencilBuffer,nt),wt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(R),bt,R.width,R.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(R),bt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,bt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,N)}else{let Y=R.textures;for(let nt=0;nt<Y.length;nt++){let bt=Y[nt],wt=r.convert(bt.format,bt.colorSpace),it=r.convert(bt.type),lt=b(bt.internalFormat,wt,it,bt.normalized,bt.colorSpace);Gt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(R),lt,R.width,R.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(R),lt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,lt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qt(N,R,W){let Y=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(R.depthTexture);if(nt.__renderTarget=R,(!nt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Y){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,R.depthTexture.addEventListener("dispose",S)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),re(i.TEXTURE_CUBE_MAP,R.depthTexture);let Ct=r.convert(R.depthTexture.format),Zt=r.convert(R.depthTexture.type),It;R.depthTexture.format===ui?It=i.DEPTH_COMPONENT24:R.depthTexture.format===ts&&(It=i.DEPTH24_STENCIL8);for(let k=0;k<6;k++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,It,R.width,R.height,0,Ct,Zt,null)}}else K(R.depthTexture,0);let bt=nt.__webglTexture,wt=Ut(R),it=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,lt=R.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===ui)Gt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,it,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,it,bt,0);else if(R.depthTexture.format===ts)Gt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,it,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,it,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(N){let R=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==N.depthTexture){let Y=N.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Y){let nt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Y.removeEventListener("dispose",nt)};Y.addEventListener("dispose",nt),R.__depthDisposeCallback=nt}R.__boundDepthTexture=Y}if(N.depthTexture&&!R.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)qt(R.__webglFramebuffer[Y],N,Y);else{let Y=N.texture.mipmaps;Y&&Y.length>0?qt(R.__webglFramebuffer[0],N,0):qt(R.__webglFramebuffer,N,0)}else if(W){R.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Y]),R.__webglDepthbuffer[Y]===void 0)R.__webglDepthbuffer[Y]=i.createRenderbuffer(),zt(R.__webglDepthbuffer[Y],N,!1);else{let nt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=R.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,bt)}}else{let Y=N.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),zt(R.__webglDepthbuffer,N,!1);else{let nt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(N,R,W){let Y=n.get(N);R!==void 0&&_t(Y.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ot(N)}function dt(N){let R=N.texture,W=n.get(N),Y=n.get(R);N.addEventListener("dispose",y);let nt=N.textures,bt=N.isWebGLCubeRenderTarget===!0,wt=nt.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=R.version,o.memory.textures++),bt){W.__webglFramebuffer=[];for(let it=0;it<6;it++)if(R.mipmaps&&R.mipmaps.length>0){W.__webglFramebuffer[it]=[];for(let lt=0;lt<R.mipmaps.length;lt++)W.__webglFramebuffer[it][lt]=i.createFramebuffer()}else W.__webglFramebuffer[it]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){W.__webglFramebuffer=[];for(let it=0;it<R.mipmaps.length;it++)W.__webglFramebuffer[it]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(wt)for(let it=0,lt=nt.length;it<lt;it++){let Ct=n.get(nt[it]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Gt(N)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let it=0;it<nt.length;it++){let lt=nt[it];W.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[it]);let Ct=r.convert(lt.format,lt.colorSpace),Zt=r.convert(lt.type),It=b(lt.internalFormat,Ct,Zt,lt.normalized,lt.colorSpace,N.isXRRenderTarget===!0),k=Ut(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,k,It,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,W.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(W.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),re(i.TEXTURE_CUBE_MAP,R);for(let it=0;it<6;it++)if(R.mipmaps&&R.mipmaps.length>0)for(let lt=0;lt<R.mipmaps.length;lt++)_t(W.__webglFramebuffer[it][lt],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt);else _t(W.__webglFramebuffer[it],N,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(R)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let it=0,lt=nt.length;it<lt;it++){let Ct=nt[it],Zt=n.get(Ct),It=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(It=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,Zt.__webglTexture),re(It,Ct),_t(W.__webglFramebuffer,N,Ct,i.COLOR_ATTACHMENT0+it,It,0),p(Ct)&&v(It)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(it=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,Y.__webglTexture),re(it,R),R.mipmaps&&R.mipmaps.length>0)for(let lt=0;lt<R.mipmaps.length;lt++)_t(W.__webglFramebuffer[lt],N,R,i.COLOR_ATTACHMENT0,it,lt);else _t(W.__webglFramebuffer,N,R,i.COLOR_ATTACHMENT0,it,0);p(R)&&v(it),e.unbindTexture()}N.depthBuffer&&ot(N)}function rt(N){let R=N.textures;for(let W=0,Y=R.length;W<Y;W++){let nt=R[W];if(p(nt)){let bt=T(N),wt=n.get(nt).__webglTexture;e.bindTexture(bt,wt),v(bt),e.unbindTexture()}}}let gt=[],xt=[];function Pt(N){if(N.samples>0){if(Gt(N)===!1){let R=N.textures,W=N.width,Y=N.height,nt=i.COLOR_BUFFER_BIT,bt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(N),it=R.length>1;if(it)for(let Ct=0;Ct<R.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let lt=N.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ct=0;Ct<R.length;Ct++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Ct]);let Zt=n.get(R[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,nt,i.NEAREST),l===!0&&(gt.length=0,xt.length=0,gt.push(i.COLOR_ATTACHMENT0+Ct),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(gt.push(bt),xt.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Ct=0;Ct<R.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Ct]);let Zt=n.get(R[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let R=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Ut(N){return Math.min(s.maxSamples,N.samples)}function Gt(N){let R=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function O(N){let R=o.render.frame;h.get(N)!==R&&(h.set(N,R),N.update())}function ge(N,R){let W=N.colorSpace,Y=N.format,nt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==po&&W!==Pi&&(be.getTransfer(W)===Le?(Y!==On||nt!==Tn)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",W)),R}function ce(N){return typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame!="undefined"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.getTextureUnits=I,this.setTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=ct,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function e_(i,t){function e(n,s=Pi){let r,o=be.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return i.BYTE;if(n===tu)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===Hl)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===iu)return i.ALPHA;if(n===su)return i.RGB;if(n===On)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Vl)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===es)return i.RG;if(n===Xl)return i.RG_INTEGER;if(n===ql)return i.RGBA_INTEGER;if(n===qo||n===Yo||n===Zo||n===$o)if(o===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===Zl||n===$l||n===Jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===jl||n===Ql||n===tc||n===ec||n===Jo||n===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===jl)return o===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ql)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return r.COMPRESSED_R11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jo)return r.COMPRESSED_RG11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xc||n===yc||n===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xc)return o===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===Mc||n===Ko||n===bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`,Pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ao(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new We(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends fi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding!="undefined",m=new Pu,p={},v=e.getContextAttributes(),T=null,b=null,_=[],M=[],S=new yt,y=null,w=null,A=new en;A.viewport=new Ce;let C=new en;C.viewport=new Ce;let E=[A,C],L=new Dl,I=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=_[B];return q===void 0&&(q=new hr,_[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=_[B];return q===void 0&&(q=new hr,_[B]=q),q.getGripSpace()},this.getHand=function(B){let q=_[B];return q===void 0&&(q=new hr,_[B]=q),q.getHandSpace()};function F(B){let q=M.indexOf(B.inputSource);if(q===-1)return;let mt=_[q];mt!==void 0&&(mt.update(B.inputSource,B.frame,c||o),mt.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let B=0;B<_.length;B++){let q=M[B];q!==null&&(M[B]=null,_[B].disconnect(q))}I=null,D=null,m.reset();for(let B in p)delete p[B];if(t.setRenderTarget(T),d=null,f=null,u=null,s=null,b=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(S.width,S.height,!1),w!==null){let B=w.camera;B.fov=w.fov,B.zoom=w.zoom,B.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Lt=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=v.stencil?ts:ui,Lt=v.stencil?Pr:si);let zt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Sn(f.textureWidth,f.textureHeight,{format:On,type:Tn,depthTexture:new Yi(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Sn(d.framebufferWidth,d.framebufferHeight,{format:On,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(B){for(let q=0;q<B.removed.length;q++){let mt=B.removed[q],Lt=M.indexOf(mt);Lt>=0&&(M[Lt]=null,_[Lt].disconnect(mt))}for(let q=0;q<B.added.length;q++){let mt=B.added[q],Lt=M.indexOf(mt);if(Lt===-1){for(let zt=0;zt<_.length;zt++)if(zt>=M.length){M.push(mt),Lt=zt;break}else if(M[zt]===null){M[zt]=mt,Lt=zt;break}if(Lt===-1)break}let _t=_[Lt];_t&&_t.connect(mt)}}let V=new U,Z=new U;function j(B,q,mt){V.setFromMatrixPosition(q.matrixWorld),Z.setFromMatrixPosition(mt.matrixWorld);let Lt=V.distanceTo(Z),_t=q.projectionMatrix.elements,zt=mt.projectionMatrix.elements,qt=_t[14]/(_t[10]-1),ot=_t[14]/(_t[10]+1),ct=(_t[9]+1)/_t[5],dt=(_t[9]-1)/_t[5],rt=(_t[8]-1)/_t[0],gt=(zt[8]+1)/zt[0],xt=qt*rt,Pt=qt*gt,Ut=Lt/(-rt+gt),Gt=Ut*-rt;if(q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Gt),B.translateZ(Ut),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),_t[10]===-1)B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let O=qt+Ut,ge=ot+Ut,ce=xt-Gt,N=Pt+(Lt-Gt),R=ct*ot/ge*O,W=dt*ot/ge*O;B.projectionMatrix.makePerspective(ce,N,R,W,O,ge),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Tt(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let q=B.near,mt=B.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),L.near=C.near=A.near=q,L.far=C.far=A.far=mt,(I!==L.near||D!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,D=L.far),L.layers.mask=B.layers.mask|6,A.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;let Lt=B.parent,_t=L.cameras;Tt(L,Lt);for(let zt=0;zt<_t.length;zt++)Tt(_t[zt],Lt);_t.length===2?j(L,A,C):L.projectionMatrix.copy(A.projectionMatrix),w===null&&B.isPerspectiveCamera&&(w={camera:B,fov:B.fov,zoom:B.zoom}),Rt(B,L,Lt)};function Rt(B,q,mt){mt===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(mt.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=lr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(B){return p[B]};let ie=null;function re(B,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Lt=!1;mt.length!==L.cameras.length&&(L.cameras.length=0,Lt=!0);for(let ot=0;ot<mt.length;ot++){let ct=mt[ot],dt=null;if(d!==null)dt=d.getViewport(ct);else{let gt=u.getViewSubImage(f,ct);dt=gt.viewport,ot===0&&(t.setRenderTargetTextures(b,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(b))}let rt=E[ot];rt===void 0&&(rt=new en,rt.layers.enable(ot),rt.viewport=new Ce,E[ot]=rt),rt.matrix.fromArray(ct.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ct.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(dt.x,dt.y,dt.width,dt.height),ot===0&&(L.matrix.copy(rt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Lt===!0&&L.cameras.push(rt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let ot=u.getDepthInformation(mt[0]);ot&&ot.isValid&&ot.texture&&m.init(ot,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let ot=0;ot<mt.length;ot++){let ct=mt[ot].camera;if(ct){let dt=p[ct];dt||(dt=new Ao,p[ct]=dt);let rt=u.getCameraImage(ct);dt.sourceTexture=rt}}}}for(let mt=0;mt<_.length;mt++){let Lt=M[mt],_t=_[mt];Lt!==null&&_t!==void 0&&_t.update(Lt,q,c||o)}ie&&ie(B,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let oe=new S0;oe.setAnimationLoop(re),this.setAnimationLoop=function(B){ie=B},this.dispose=function(){}}},s_=new le,I0=new he;I0.set(-1,0,0,0,1,0,0,0,1);function r_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,T,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),T=v.envMap,b=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(I0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function o_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let M=_.program;n.uniformBlockBinding(b,M)}function c(b,_){let M=s[b.id];M===void 0&&(m(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",v));let S=_.program;n.updateUBOMapping(b,S);let y=t.render.frame;r[b.id]!==y&&(f(b),r[b.id]=y)}function h(b){let _=u();b.__bindingPointIndex=_;let M=i.createBuffer(),S=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,S,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let _=s[b.id],M=b.uniforms,S=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let y=0,w=M.length;y<w;y++){let A=M[y];if(Array.isArray(A))for(let C=0,E=A.length;C<E;C++)d(A[C],y,C,S);else d(A,y,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,_,M,S){if(x(b,_,M,S)===!0){let y=b.__offset,w=b.value;if(Array.isArray(w)){let A=0;for(let C=0;C<w.length;C++){let E=w[C],L=p(E);g(E,b.__data,A),typeof E!="number"&&typeof E!="boolean"&&!E.isMatrix3&&!ArrayBuffer.isView(E)&&(A+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,b.__data)}}function g(b,_,M){typeof b=="number"||typeof b=="boolean"?_[0]=b:b.isMatrix3?(_[0]=b.elements[0],_[1]=b.elements[1],_[2]=b.elements[2],_[3]=0,_[4]=b.elements[3],_[5]=b.elements[4],_[6]=b.elements[5],_[7]=0,_[8]=b.elements[6],_[9]=b.elements[7],_[10]=b.elements[8],_[11]=0):ArrayBuffer.isView(b)?_.set(new b.constructor(b.buffer,b.byteOffset,_.length)):b.toArray(_,M)}function x(b,_,M,S){let y=b.value,w=_+"_"+M;if(S[w]===void 0)return typeof y=="number"||typeof y=="boolean"?S[w]=y:ArrayBuffer.isView(y)?S[w]=y.slice():S[w]=y.clone(),!0;{let A=S[w];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return S[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function m(b){let _=b.uniforms,M=0,S=16;for(let w=0,A=_.length;w<A;w++){let C=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,L=C.length;E<L;E++){let I=C[E],D=Array.isArray(I.value)?I.value:[I.value];for(let F=0,H=D.length;F<H;F++){let K=D[F],V=p(K),Z=M%S,j=Z%V.boundary,Tt=Z+j;M+=j,Tt!==0&&S-Tt<V.storage&&(M+=S-Tt),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=V.storage}}}let y=M%S;return y>0&&(M+=S-y),b.__size=M,b.__cache={},this}function p(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(_.boundary=16,_.storage=b.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",b),_}function v(b){let _=b.target;_.removeEventListener("dispose",v);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function T(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:T}}var a_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function l_(){return gi===null&&(gi=new gr(a_,16,16,es,ri),gi.name="DFG_LUT",gi.minFilter=fn,gi.magFilter=fn,gi.wrapS=ci,gi.wrapT=ci,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var na=class{constructor(t={}){let{canvas:e=Wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Tn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([ql,Xl,Wl]),p=new Set([Tn,si,Ir,Pr,kl,Gl]),v=new Uint32Array(4),T=new Int32Array(4),b=new U,_=null,M=null,S=[],y=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,E=null,L=null,I=null,D=null;this._outputColorSpace=Ne;let F=0,H=0,K=null,V=-1,Z=null,j=new Ce,Tt=new Ce,Rt=null,ie=new Ot(0),re=0,oe=e.width,B=e.height,q=1,mt=null,Lt=null,_t=new Ce(0,0,oe,B),zt=new Ce(0,0,oe,B),qt=!1,ot=new yr,ct=!1,dt=!1,rt=new le,gt=new U,xt=new Ce,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Gt(){return K===null?q:1}let O=n;function ge(P,G){return e.getContext(P,G)}let ce,N,R,W,Y,nt,bt,wt,it,lt,Ct,Zt,It,k,at,ht,St,z,ut,st,Mt,At,ft;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",mn,!1),O===null){let G="webgl2";if(O=ge(G,P),O===null)throw ge(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(P){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),ae("WebGLRenderer: "+P.message),P}function $t(){ce=new my(O),ce.init(),Mt=new e_(O,ce),N=new ry(O,ce,t,Mt),R=new Qv(O,ce),N.reversedDepthBuffer&&f&&R.buffers.depth.setReversed(!0),L=O.createFramebuffer(),I=O.createFramebuffer(),D=O.createFramebuffer(),W=new yy(O),Y=new Ov,nt=new t_(O,ce,R,Y,N,Mt,W),bt=new py(A),wt=new _g(O),At=new iy(O,wt),it=new gy(O,wt,W,At),lt=new _y(O,it,wt,At,W),z=new vy(O,N,nt),at=new oy(Y),Ct=new Bv(A,bt,ce,N,At,at),Zt=new r_(A,Y),It=new kv,k=new Yv(ce),St=new ny(A,bt,R,lt,g,l),ht=new jv(A,lt,N),ft=new o_(O,W,N,R),ut=new sy(O,ce,W),st=new xy(O,ce,W),W.programs=Ct.programs,A.capabilities=N,A.extensions=ce,A.properties=Y,A.renderLists=It,A.shadowMap=ht,A.state=R,A.info=W}x!==Tn&&(w=new by(x,e.width,e.height,a,s,r));let Ht=new Lu(A,O);this.xr=Ht,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let P=ce.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ce.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(P){P!==void 0&&(q=P,this.setSize(oe,B,!1))},this.getSize=function(P){return P.set(oe,B)},this.setSize=function(P,G,tt=!0){if(Ht.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=P,B=G,e.width=Math.floor(P*q),e.height=Math.floor(G*q),tt===!0&&(e.style.width=P+"px",e.style.height=G+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(oe*q,B*q).floor()},this.setDrawingBufferSize=function(P,G,tt){oe=P,B=G,q=tt,e.width=Math.floor(P*tt),e.height=Math.floor(G*tt),this.setViewport(0,0,P,G)},this.setEffects=function(P){if(x===Tn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let G=0;G<P.length;G++)if(P[G].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(j)},this.getViewport=function(P){return P.copy(_t)},this.setViewport=function(P,G,tt,$){P.isVector4?_t.set(P.x,P.y,P.z,P.w):_t.set(P,G,tt,$),R.viewport(j.copy(_t).multiplyScalar(q).round())},this.getScissor=function(P){return P.copy(zt)},this.setScissor=function(P,G,tt,$){P.isVector4?zt.set(P.x,P.y,P.z,P.w):zt.set(P,G,tt,$),R.scissor(Tt.copy(zt).multiplyScalar(q).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(P){R.setScissorTest(qt=P)},this.setOpaqueSort=function(P){mt=P},this.setTransparentSort=function(P){Lt=P},this.getClearColor=function(P){return P.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,tt=!0){let $=0;if(P){let J=!1;if(K!==null){let Bt=K.texture.format;J=m.has(Bt)}if(J){let Bt=K.texture.type,Wt=p.has(Bt),Ft=St.getClearColor(),Jt=St.getClearAlpha(),jt=Ft.r,de=Ft.g,ye=Ft.b;Wt?(v[0]=jt,v[1]=de,v[2]=ye,v[3]=Jt,O.clearBufferuiv(O.COLOR,0,v)):(T[0]=jt,T[1]=de,T[2]=ye,T[3]=Jt,O.clearBufferiv(O.COLOR,0,T))}else $|=O.COLOR_BUFFER_BIT}G&&($|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),E=P},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),St.dispose(),It.dispose(),k.dispose(),Y.dispose(),bt.dispose(),lt.dispose(),At.dispose(),ft.dispose(),Ct.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",hs),Ht.removeEventListener("sessionend",Jr),us.stop()};function Re(P){P.preventDefault(),xo("WebGLRenderer: Context Lost."),C=!0}function Me(){xo("WebGLRenderer: Context Restored."),C=!1;let P=W.autoReset,G=ht.enabled,tt=ht.autoUpdate,$=ht.needsUpdate,J=ht.type;$t(),W.autoReset=P,ht.enabled=G,ht.autoUpdate=tt,ht.needsUpdate=$,ht.type=J}function mn(P){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function kn(P){let G=P.target;G.removeEventListener("dispose",kn),_a(G)}function _a(P){Ma(P),Y.remove(P)}function Ma(P){let G=Y.get(P).programs;G!==void 0&&(G.forEach(function(tt){Ct.releaseProgram(tt)}),P.isShaderMaterial&&Ct.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,tt,$,J,Bt){G===null&&(G=Pt);let Wt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ft=Hp(P,G,tt,$,J);R.setMaterial($,Wt);let Jt=tt.index,jt=1;if($.wireframe===!0){if(Jt=it.getWireframeAttribute(tt),Jt===void 0)return;jt=2}let de=tt.drawRange,ye=tt.attributes.position,Kt=de.start*jt,Pe=(de.start+de.count)*jt;Bt!==null&&(Kt=Math.max(Kt,Bt.start*jt),Pe=Math.min(Pe,(Bt.start+Bt.count)*jt)),Jt!==null?(Kt=Math.max(Kt,0),Pe=Math.min(Pe,Jt.count)):ye!=null&&(Kt=Math.max(Kt,0),Pe=Math.min(Pe,ye.count));let $e=Pe-Kt;if($e<0||$e===1/0)return;At.setup(J,$,Ft,tt,Jt);let ke,ze=ut;if(Jt!==null&&(ke=wt.get(Jt),ze=st,ze.setIndex(ke)),J.isMesh)$.wireframe===!0?(R.setLineWidth($.wireframeLinewidth*Gt()),ze.setMode(O.LINES)):ze.setMode(O.TRIANGLES);else if(J.isLine){let gn=$.linewidth;gn===void 0&&(gn=1),R.setLineWidth(gn*Gt()),J.isLineSegments?ze.setMode(O.LINES):J.isLineLoop?ze.setMode(O.LINE_LOOP):ze.setMode(O.LINE_STRIP)}else J.isPoints?ze.setMode(O.POINTS):J.isSprite&&ze.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))ze.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let gn=J._multiDrawStarts,Vt=J._multiDrawCounts,Mn=J._multiDrawCount,Ae=Jt?wt.get(Jt).bytesPerElement:1,Gn=Y.get($).currentProgram.getUniforms();for(let ai=0;ai<Mn;ai++)Gn.setValue(O,"_gl_DrawID",ai),ze.render(gn[ai]/Ae,Vt[ai])}else if(J.isInstancedMesh)ze.renderInstances(Kt,$e,J.count);else if(tt.isInstancedBufferGeometry){let gn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Vt=Math.min(tt.instanceCount,gn);ze.renderInstances(Kt,$e,Vt)}else ze.render(Kt,$e)};function _n(P,G,tt,$){E!==null&&P.isNodeMaterial&&E.setObject($,P),ct===!0&&at.setState(P,tt,!1),P.transparent===!0&&P.side===hn&&P.forceSinglePass===!1?(P.side=sn,P.needsUpdate=!0,Ea(P,G,$),P.side=di,P.needsUpdate=!0,Ea(P,G,$),P.side=hn):Ea(P,G,$)}this.compile=function(P,G,tt=null){tt===null&&(tt=P),E!==null&&E.renderStart(P,G,tt),M=k.get(tt),M.init(G),y.push(M),tt.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),P!==tt&&P.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),M.setupLights(),E!==null&&E.updateLights(M.state.lightsArray),dt=this.localClippingEnabled,ct=at.init(this.clippingPlanes,dt),ct===!0&&at.setGlobalState(this.clippingPlanes,G),E!==null&&ht.render(M.state.shadowsArray,tt,G);let $=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Bt=J.material;if(Bt)if(Array.isArray(Bt))for(let Wt=0;Wt<Bt.length;Wt++){let Ft=Bt[Wt];_n(Ft,tt,G,J),$.add(Ft)}else _n(Bt,tt,G,J),$.add(Bt)}),M=y.pop(),E!==null&&E.renderEnd(),$},this.compileAsync=function(P,G,tt=null){let $=this.compile(P,G,tt);return new Promise(J=>{function Bt(){if($.forEach(function(Wt){let Jt=Y.get(Wt).currentProgram;(Jt===void 0||Jt.isReady())&&$.delete(Wt)}),$.size===0){J(P);return}setTimeout(Bt,10)}ce.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let _i=null;function zs(P){_i&&_i(P)}function hs(){us.stop()}function Jr(){us.start()}let us=new S0;us.setAnimationLoop(zs),typeof self!="undefined"&&us.setContext(self),this.setAnimationLoop=function(P){_i=P,Ht.setAnimationLoop(P),P===null?us.stop():us.start()},Ht.addEventListener("sessionstart",hs),Ht.addEventListener("sessionend",Jr),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;E!==null&&E.renderStart(P,G);let tt=Ht.enabled===!0&&Ht.isPresenting===!0,$=w!==null&&(K===null||tt)&&w.begin(A,K);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(G),G=Ht.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,G,K),M=k.get(P,y.length),M.init(G),M.state.textureUnits=nt.getTextureUnits(),y.push(M),rt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ot.setFromProjectionMatrix(rt,jn,G.reversedDepth),dt=this.localClippingEnabled,ct=at.init(this.clippingPlanes,dt),_=It.get(P,S.length),_.init(),S.push(_),Ht.enabled===!0&&Ht.isPresenting===!0){let Wt=A.xr.getDepthSensingMesh();Wt!==null&&Qc(Wt,G,-1/0,A.sortObjects)}Qc(P,G,0,A.sortObjects),_.finish(),E!==null&&E.updateLights(M.state.lightsArray),A.sortObjects===!0&&_.sort(mt,Lt),Ut=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Ut&&St.addToRenderList(_,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&at.beginShadows();let J=M.state.shadowsArray;if(ht.render(J,P,G),ct===!0&&at.endShadows(),($&&w.hasRenderPass())===!1){let Wt=_.opaque,Ft=_.transmissive;if(M.setupLights(),G.isArrayCamera){let Jt=G.cameras;if(Ft.length>0)for(let jt=0,de=Jt.length;jt<de;jt++){let ye=Jt[jt];_f(Wt,Ft,P,ye)}Ut&&St.render(P);for(let jt=0,de=Jt.length;jt<de;jt++){let ye=Jt[jt];vf(_,P,ye,ye.viewport)}}else Ft.length>0&&_f(Wt,Ft,P,G),Ut&&St.render(P),vf(_,P,G)}K!==null&&H===0&&(nt.updateMultisampleRenderTarget(K),nt.updateRenderTargetMipmap(K)),$&&w.end(A),P.isScene===!0&&P.onAfterRender(A,P,G),At.resetDefaultState(),V=-1,Z=null,y.pop(),y.length>0?(M=y[y.length-1],nt.setTextureUnits(M.state.textureUnits),ct===!0&&at.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,S.pop(),S.length>0?_=S[S.length-1]:_=null,E!==null&&E.renderEnd()};function Qc(P,G,tt,$){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)tt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLightProbeGrid)M.pushLightProbeGrid(P);else if(P.isLight)M.pushLight(P),P.castShadow&&M.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ot)){$&&xt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(rt);let Wt=lt.update(P),Ft=P.material;Ft.visible&&_.push(P,Wt,Ft,tt,xt.z,null,G)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ot))){let Wt=lt.update(P),Ft=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),xt.copy(P.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),xt.copy(Wt.boundingSphere.center)),xt.applyMatrix4(P.matrixWorld).applyMatrix4(rt)),Array.isArray(Ft)){let Jt=Wt.groups;for(let jt=0,de=Jt.length;jt<de;jt++){let ye=Jt[jt],Kt=Ft[ye.materialIndex];Kt&&Kt.visible&&_.push(P,Wt,Kt,tt,xt.z,ye,G)}}else Ft.visible&&_.push(P,Wt,Ft,tt,xt.z,null,G)}}let Bt=P.children;for(let Wt=0,Ft=Bt.length;Wt<Ft;Wt++)Qc(Bt[Wt],G,tt,$)}function vf(P,G,tt,$){let{opaque:J,transmissive:Bt,transparent:Wt}=P;M.setupLightsView(tt),ct===!0&&at.setGlobalState(A.clippingPlanes,tt),$&&R.viewport(j.copy($)),J.length>0&&ba(J,G,tt),Bt.length>0&&ba(Bt,G,tt),Wt.length>0&&ba(Wt,G,tt),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function _f(P,G,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[$.id]===void 0){let Kt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[$.id]=new Sn(1,1,{generateMipmaps:!0,type:Kt?ri:Tn,minFilter:Qi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}let Bt=M.state.transmissionRenderTarget[$.id],Wt=$.viewport||j;Bt.setSize(Wt.z*A.transmissionResolutionScale,Wt.w*A.transmissionResolutionScale);let Ft=A.getRenderTarget(),Jt=A.getActiveCubeFace(),jt=A.getActiveMipmapLevel();A.setRenderTarget(Bt),A.getClearColor(ie),re=A.getClearAlpha(),re<1&&A.setClearColor(16777215,.5),A.clear(),Ut&&St.render(tt);let de=A.toneMapping;A.toneMapping=ii;let ye=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),M.setupLightsView($),ct===!0&&at.setGlobalState(A.clippingPlanes,$),ba(P,tt,$),nt.updateMultisampleRenderTarget(Bt),nt.updateRenderTargetMipmap(Bt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Pe=0,$e=G.length;Pe<$e;Pe++){let ke=G[Pe],{object:ze,geometry:gn,material:Vt,group:Mn}=ke;if(Vt.side===hn&&ze.layers.test($.layers)){let Ae=Vt.side;Vt.side=sn,Vt.needsUpdate=!0,Mf(ze,tt,$,gn,Vt,Mn),Vt.side=Ae,Vt.needsUpdate=!0,Kt=!0}}Kt===!0&&(nt.updateMultisampleRenderTarget(Bt),nt.updateRenderTargetMipmap(Bt))}A.setRenderTarget(Ft,Jt,jt),A.setClearColor(ie,re),ye!==void 0&&($.viewport=ye),A.toneMapping=de}function ba(P,G,tt){let $=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Bt=P.length;J<Bt;J++){let Wt=P[J],{object:Ft,geometry:Jt,group:jt}=Wt,de=Wt.material;de.allowOverride===!0&&$!==null&&(de=$),Ft.layers.test(tt.layers)&&Mf(Ft,G,tt,Jt,de,jt)}}function Mf(P,G,tt,$,J,Bt){E!==null&&J.isNodeMaterial&&E.setObject(P,J),P.onBeforeRender(A,G,tt,$,J,Bt),P.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(A,G,tt,$,P,Bt),J.transparent===!0&&J.side===hn&&J.forceSinglePass===!1?(J.side=sn,J.needsUpdate=!0,A.renderBufferDirect(tt,G,$,J,P,Bt),J.side=di,J.needsUpdate=!0,A.renderBufferDirect(tt,G,$,J,P,Bt),J.side=hn):A.renderBufferDirect(tt,G,$,J,P,Bt),P.onAfterRender(A,G,tt,$,J,Bt)}function Ea(P,G,tt){G.isScene!==!0&&(G=Pt);let $=Y.get(P),J=M.state.lights,Bt=M.state.shadowsArray,Wt=J.state.version,Ft=Ct.getParameters(P,J.state,Bt,G,tt,M.state.lightProbeGridArray),Jt=Ct.getProgramCacheKey(Ft),jt=$.programs;$.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let de=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;$.envMap=bt.get(P.envMap||$.environment,de),$.envMapRotation=$.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,jt===void 0&&(P.addEventListener("dispose",kn),jt=new Map,$.programs=jt);let ye=jt.get(Jt);if(ye!==void 0){if($.currentProgram===ye&&$.lightsStateVersion===Wt)return Ef(P,Ft),ye}else Ft.uniforms=Ct.getUniforms(P),E!==null&&P.isNodeMaterial&&E.build(P,tt,Ft),P.onBeforeCompile(Ft,A),ye=Ct.acquireProgram(Ft,Jt),jt.set(Jt,ye),$.uniforms=Ft.uniforms;let Kt=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Kt.clippingPlanes=at.uniform),Ef(P,Ft),$.needsLights=Gp(P),$.lightsStateVersion=Wt,$.needsLights&&(Kt.ambientLightColor.value=J.state.ambient,Kt.lightProbe.value=J.state.probe,Kt.sunLights.value=J.state.sun,Kt.sunLightShadows.value=J.state.sunShadow,Kt.directionalLights.value=J.state.directional,Kt.directionalLightShadows.value=J.state.directionalShadow,Kt.spotLights.value=J.state.spot,Kt.spotLightShadows.value=J.state.spotShadow,Kt.rectAreaLights.value=J.state.rectArea,Kt.ltc_1.value=J.state.rectAreaLTC1,Kt.ltc_2.value=J.state.rectAreaLTC2,Kt.pointLights.value=J.state.point,Kt.pointLightShadows.value=J.state.pointShadow,Kt.hemisphereLights.value=J.state.hemi,Kt.sunShadowMatrix.value=J.state.sunShadowMatrix,Kt.sunShadowCascade.value=J.state.sunShadowCascade,Kt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Kt.spotLightMatrix.value=J.state.spotLightMatrix,Kt.spotLightMap.value=J.state.spotLightMap,Kt.pointShadowMatrix.value=J.state.pointShadowMatrix),$.lightProbeGrid=M.state.lightProbeGridArray.length>0,$.currentProgram=ye,$.uniformsList=null,ye}function bf(P){if(P.uniformsList===null){let G=P.currentProgram.getUniforms();P.uniformsList=Fr.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function Ef(P,G){let tt=Y.get(P);tt.outputColorSpace=G.outputColorSpace,tt.batching=G.batching,tt.batchingColor=G.batchingColor,tt.instancing=G.instancing,tt.instancingColor=G.instancingColor,tt.instancingMorph=G.instancingMorph,tt.skinning=G.skinning,tt.morphTargets=G.morphTargets,tt.morphNormals=G.morphNormals,tt.morphColors=G.morphColors,tt.morphTargetsCount=G.morphTargetsCount,tt.numClippingPlanes=G.numClippingPlanes,tt.numIntersection=G.numClipIntersection,tt.vertexAlphas=G.vertexAlphas,tt.vertexTangents=G.vertexTangents,tt.toneMapping=G.toneMapping}function Op(P,G){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let tt=0,$=P.length;tt<$;tt++){let J=P[tt];if(J.texture!==null&&J.boundingBox.containsPoint(b))return J}return null}function Hp(P,G,tt,$,J){G.isScene!==!0&&(G=Pt),nt.resetTextureUnits();let Bt=G.fog,Wt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,Ft=K===null?A.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:be.workingColorSpace,Jt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,jt=bt.get($.envMap||Wt,Jt),de=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ye=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Kt=!!tt.morphAttributes.position,Pe=!!tt.morphAttributes.normal,$e=!!tt.morphAttributes.color,ke=ii;$.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ke=A.toneMapping);let ze=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,gn=ze!==void 0?ze.length:0,Vt=Y.get($),Mn=M.state.lights;if(ct===!0&&(dt===!0||P!==Z)){let Oe=P===Z&&$.id===V;at.setState($,P,Oe)}let Ae=!1;$.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Mn.state.version||Vt.outputColorSpace!==Ft||J.isBatchedMesh&&Vt.batching===!1||!J.isBatchedMesh&&Vt.batching===!0||J.isBatchedMesh&&Vt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Vt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Vt.instancing===!1||!J.isInstancedMesh&&Vt.instancing===!0||J.isSkinnedMesh&&Vt.skinning===!1||!J.isSkinnedMesh&&Vt.skinning===!0||J.isInstancedMesh&&Vt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Vt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Vt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Vt.instancingMorph===!1&&J.morphTexture!==null||Vt.envMap!==jt||$.fog===!0&&Vt.fog!==Bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==at.numPlanes||Vt.numIntersection!==at.numIntersection)||Vt.vertexAlphas!==de||Vt.vertexTangents!==ye||Vt.morphTargets!==Kt||Vt.morphNormals!==Pe||Vt.morphColors!==$e||Vt.toneMapping!==ke||Vt.morphTargetsCount!==gn||!!Vt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ae=!0):(Ae=!0,Vt.__version=$.version);let Gn=Vt.currentProgram;Ae===!0&&(Gn=Ea($,G,J),E&&$.isNodeMaterial&&E.onUpdateProgram($,Gn,Vt));let ai=!1,Oi=!1,Bs=!1,Ue=Gn.getUniforms(),Ye=Vt.uniforms;if(R.useProgram(Gn.program)&&(ai=!0,Oi=!0,Bs=!0),$.id!==V&&(V=$.id,Oi=!0),Vt.needsLights){let Oe=Op(M.state.lightProbeGridArray,J);Vt.lightProbeGrid!==Oe&&(Vt.lightProbeGrid=Oe,Oi=!0)}if(ai||Z!==P){R.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ue.setValue(O,"projectionMatrix",P.projectionMatrix),Ue.setValue(O,"viewMatrix",P.matrixWorldInverse);let ki=Ue.map.cameraPosition;ki!==void 0&&ki.setValue(O,gt.setFromMatrixPosition(P.matrixWorld)),N.logarithmicDepthBuffer&&Ue.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ue.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),Z!==P&&(Z=P,Oi=!0,Bs=!0)}if(Vt.needsLights&&(Mn.state.sunShadowMap.length>0&&Ue.setValue(O,"sunShadowMap",Mn.state.sunShadowMap,nt),Mn.state.directionalShadowMap.length>0&&Ue.setValue(O,"directionalShadowMap",Mn.state.directionalShadowMap,nt),Mn.state.spotShadowMap.length>0&&Ue.setValue(O,"spotShadowMap",Mn.state.spotShadowMap,nt),Mn.state.pointShadowMap.length>0&&Ue.setValue(O,"pointShadowMap",Mn.state.pointShadowMap,nt)),J.isSkinnedMesh){Ue.setOptional(O,J,"bindMatrix"),Ue.setOptional(O,J,"bindMatrixInverse");let Oe=J.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ue.setValue(O,"boneTexture",Oe.boneTexture,nt))}J.isBatchedMesh&&(Ue.setOptional(O,J,"batchingTexture"),Ue.setValue(O,"batchingTexture",J._matricesTexture,nt),Ue.setOptional(O,J,"batchingIdTexture"),Ue.setValue(O,"batchingIdTexture",J._indirectTexture,nt),Ue.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&Ue.setValue(O,"batchingColorTexture",J._colorsTexture,nt));let Hi=tt.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&z.update(J,tt,Gn),(Oi||Vt.receiveShadow!==J.receiveShadow)&&(Vt.receiveShadow=J.receiveShadow,Ue.setValue(O,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Ye.envMapIntensity.value=G.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=l_()),Oi){if(Ue.setValue(O,"toneMappingExposure",A.toneMappingExposure),Vt.needsLights&&kp(Ye,Bs),Bt&&$.fog===!0&&Zt.refreshFogUniforms(Ye,Bt),Zt.refreshMaterialUniforms(Ye,$,q,B,M.state.transmissionRenderTarget[P.id]),Vt.needsLights&&Vt.lightProbeGrid){let Oe=Vt.lightProbeGrid;Ye.probesSH.value=Oe.texture,Ye.probesMin.value.copy(Oe.boundingBox.min),Ye.probesMax.value.copy(Oe.boundingBox.max),Ye.probesResolution.value.copy(Oe.resolution)}Fr.upload(O,bf(Vt),Ye,nt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Fr.upload(O,bf(Vt),Ye,nt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ue.setValue(O,"center",J.center),Ue.setValue(O,"modelViewMatrix",J.modelViewMatrix),Ue.setValue(O,"normalMatrix",J.normalMatrix),Ue.setValue(O,"modelMatrix",J.matrixWorld),$.uniformsGroups!==void 0){let Oe=$.uniformsGroups;for(let ki=0,Os=Oe.length;ki<Os;ki++){let wf=Oe[ki];ft.update(wf,Gn),ft.bind(wf,Gn)}}return Gn}function kp(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.sunLights.needsUpdate=G,P.sunLightShadows.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function Gp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(P,G,tt){let $=Y.get(P);$.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Y.get(P.texture).__webglTexture=G,Y.get(P.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){let tt=Y.get(P);tt.__webglFramebuffer=G,tt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,tt=0){K=P,F=G,H=tt;let $=null,J=!1,Bt=!1;if(P){let Ft=Y.get(P);if(Ft.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(O.FRAMEBUFFER,Ft.__webglFramebuffer),j.copy(P.viewport),Tt.copy(P.scissor),Rt=P.scissorTest,R.viewport(j),R.scissor(Tt),R.setScissorTest(Rt),V=-1;return}else if(Ft.__webglFramebuffer===void 0)nt.setupRenderTarget(P);else if(Ft.__hasExternalTextures)nt.rebindTextures(P,Y.get(P.texture).__webglTexture,Y.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let de=P.depthTexture;if(Ft.__boundDepthTexture!==de){if(de!==null&&Y.has(de)&&(P.width!==de.image.width||P.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(P)}}let Jt=P.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Bt=!0);let jt=Y.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(jt[G])?$=jt[G][tt]:$=jt[G],J=!0):P.samples>0&&nt.useMultisampledRTT(P)===!1?$=Y.get(P).__webglMultisampledFramebuffer:Array.isArray(jt)?$=jt[tt]:$=jt,j.copy(P.viewport),Tt.copy(P.scissor),Rt=P.scissorTest}else j.copy(_t).multiplyScalar(q).floor(),Tt.copy(zt).multiplyScalar(q).floor(),Rt=qt;if(tt!==0&&($=L),R.bindFramebuffer(O.FRAMEBUFFER,$)&&R.drawBuffers(P,$),R.viewport(j),R.scissor(Tt),R.setScissorTest(Rt),J){let Ft=Y.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ft.__webglTexture,tt)}else if(Bt){let Ft=G;for(let Jt=0;Jt<P.textures.length;Jt++){let jt=Y.get(P.textures[Jt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Jt,jt.__webglTexture,tt,Ft)}}else if(P!==null&&tt!==0){let Ft=Y.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ft.__webglTexture,tt)}V=-1};function Sf(P){let G=Y.get(P);return(G.__readFormat!==P.format||G.__readType!==P.type)&&(G.__readFormat=P.format,G.__readType=P.type,G.__formatReadable=N.textureFormatReadable(P.format),G.__typeReadable=N.textureTypeReadable(P.type)),G}this.readRenderTargetPixels=function(P,G,tt,$,J,Bt,Wt,Ft=0){if(!(P&&P.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=Y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Wt!==void 0&&(Jt=Jt[Wt]),Jt){R.bindFramebuffer(O.FRAMEBUFFER,Jt);try{let jt=P.textures[Ft],de=jt.format,ye=jt.type;P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ft);let Kt=Sf(jt);if(Kt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-$&&tt>=0&&tt<=P.height-J&&O.readPixels(G,tt,$,J,Mt.convert(de),Mt.convert(ye),Bt)}finally{let jt=K!==null?Y.get(K).__webglFramebuffer:null;R.bindFramebuffer(O.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(P,G,tt,$,J,Bt,Wt,Ft=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=Y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Wt!==void 0&&(Jt=Jt[Wt]),Jt)if(G>=0&&G<=P.width-$&&tt>=0&&tt<=P.height-J){R.bindFramebuffer(O.FRAMEBUFFER,Jt);let jt=P.textures[Ft],de=jt.format,ye=jt.type;P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ft);let Kt=Sf(jt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.bufferData(O.PIXEL_PACK_BUFFER,Bt.byteLength,O.STREAM_READ),O.readPixels(G,tt,$,J,Mt.convert(de),Mt.convert(ye),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let $e=K!==null?Y.get(K).__webglFramebuffer:null;R.bindFramebuffer(O.FRAMEBUFFER,$e);let ke=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await qd(O,ke,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Bt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Pe),O.deleteSync(ke),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,tt=0){let $=Math.pow(2,-tt),J=Math.floor(P.image.width*$),Bt=Math.floor(P.image.height*$),Wt=G!==null?G.x:0,Ft=G!==null?G.y:0;nt.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,tt,0,0,Wt,Ft,J,Bt),R.unbindTexture()},this.copyTextureToTexture=function(P,G,tt=null,$=null,J=0,Bt=0){let Wt,Ft,Jt,jt,de,ye,Kt,Pe,$e,ke=P.isCompressedTexture?P.mipmaps[Bt]:P.image;if(tt!==null)Wt=tt.max.x-tt.min.x,Ft=tt.max.y-tt.min.y,Jt=tt.isBox3?tt.max.z-tt.min.z:1,jt=tt.min.x,de=tt.min.y,ye=tt.isBox3?tt.min.z:0;else{let Ye=Math.pow(2,-J);Wt=Math.floor(ke.width*Ye),Ft=Math.floor(ke.height*Ye),P.isDataArrayTexture?Jt=ke.depth:P.isData3DTexture?Jt=Math.floor(ke.depth*Ye):Jt=1,jt=0,de=0,ye=0}$!==null?(Kt=$.x,Pe=$.y,$e=$.z):(Kt=0,Pe=0,$e=0);let ze=Mt.convert(G.format),gn=Mt.convert(G.type),Vt;G.isData3DTexture?(nt.setTexture3D(G,0),Vt=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(nt.setTexture2DArray(G,0),Vt=O.TEXTURE_2D_ARRAY):(nt.setTexture2D(G,0),Vt=O.TEXTURE_2D),R.activeTexture(O.TEXTURE0),R.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);let Mn=R.getParameter(O.UNPACK_ROW_LENGTH),Ae=R.getParameter(O.UNPACK_IMAGE_HEIGHT),Gn=R.getParameter(O.UNPACK_SKIP_PIXELS),ai=R.getParameter(O.UNPACK_SKIP_ROWS),Oi=R.getParameter(O.UNPACK_SKIP_IMAGES);R.pixelStorei(O.UNPACK_ROW_LENGTH,ke.width),R.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ke.height),R.pixelStorei(O.UNPACK_SKIP_PIXELS,jt),R.pixelStorei(O.UNPACK_SKIP_ROWS,de),R.pixelStorei(O.UNPACK_SKIP_IMAGES,ye);let Bs=P.isDataArrayTexture||P.isData3DTexture,Ue=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){let Ye=Y.get(P),Hi=Y.get(G),Oe=Y.get(Ye.__renderTarget),ki=Y.get(Hi.__renderTarget);R.bindFramebuffer(O.READ_FRAMEBUFFER,Oe.__webglFramebuffer),R.bindFramebuffer(O.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Os=0;Os<Jt;Os++)Bs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(P).__webglTexture,J,ye+Os),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(G).__webglTexture,Bt,$e+Os)),O.blitFramebuffer(jt,de,Wt,Ft,Kt,Pe,Wt,Ft,O.DEPTH_BUFFER_BIT,O.NEAREST);R.bindFramebuffer(O.READ_FRAMEBUFFER,null),R.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(J!==0||P.isRenderTargetTexture||Y.has(P)){let Ye=Y.get(P),Hi=Y.get(G);R.bindFramebuffer(O.READ_FRAMEBUFFER,I),R.bindFramebuffer(O.DRAW_FRAMEBUFFER,D);for(let Oe=0;Oe<Jt;Oe++)Bs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.__webglTexture,J,ye+Oe):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ye.__webglTexture,J),Ue?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Hi.__webglTexture,Bt,$e+Oe):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Hi.__webglTexture,Bt),J!==0?O.blitFramebuffer(jt,de,Wt,Ft,Kt,Pe,Wt,Ft,O.COLOR_BUFFER_BIT,O.NEAREST):Ue?O.copyTexSubImage3D(Vt,Bt,Kt,Pe,$e+Oe,jt,de,Wt,Ft):O.copyTexSubImage2D(Vt,Bt,Kt,Pe,jt,de,Wt,Ft);R.bindFramebuffer(O.READ_FRAMEBUFFER,null),R.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ue?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Vt,Bt,Kt,Pe,$e,Wt,Ft,Jt,ze,gn,ke.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Vt,Bt,Kt,Pe,$e,Wt,Ft,Jt,ze,ke.data):O.texSubImage3D(Vt,Bt,Kt,Pe,$e,Wt,Ft,Jt,ze,gn,ke):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Bt,Kt,Pe,Wt,Ft,ze,gn,ke.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Bt,Kt,Pe,ke.width,ke.height,ze,ke.data):O.texSubImage2D(O.TEXTURE_2D,Bt,Kt,Pe,Wt,Ft,ze,gn,ke);R.pixelStorei(O.UNPACK_ROW_LENGTH,Mn),R.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ae),R.pixelStorei(O.UNPACK_SKIP_PIXELS,Gn),R.pixelStorei(O.UNPACK_SKIP_ROWS,ai),R.pixelStorei(O.UNPACK_SKIP_IMAGES,Oi),Bt===0&&G.generateMipmaps&&O.generateMipmap(Vt),R.unbindTexture()},this.initRenderTarget=function(P){Y.get(P).__webglFramebuffer===void 0&&nt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?nt.setTextureCube(P,0):P.isData3DTexture?nt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?nt.setTexture2DArray(P,0):nt.setTexture2D(P,0),R.unbindTexture()},this.resetState=function(){F=0,H=0,K=null,R.reset(),At.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var ia=class extends Ci{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Qt;t.deleteAttribute("uv");let e=new ee({side:sn}),n=new ee,s=new Go(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new et(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new wo(t,n,6),a=new Ze;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new et(t,Br(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new et(t,Br(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new et(t,Br(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new et(t,Br(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new et(t,Br(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new et(t,Br(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Br(i){return new Bo({color:0,emissive:16777215,emissiveIntensity:i})}var Li=[{id:0,name:"Haris",tag:"",color:"#ff5fb4"},{id:1,name:"Hannan",tag:"",color:"#3b82f6"},{id:2,name:"Hanbal",tag:"",color:"#3ddc84"},{id:3,name:"Random",tag:"",color:"#ffc233"}],sa=[{id:0,key:"gta",name:"Punjabi GTA",sub:"Open World",stars:3,limit:0,finishZ:-99999,finishY:99999,free:!0,city:!0,colors:["#3a86ff","#ff9f1c"],blurb:"A big open city! Skyscrapers, avenues with traffic, parks, a coast highway and a real MOUNTAIN with a road spiralling to the snowy summit. Jump in any parked car with C and drive anywhere. Up to 4 friends together."}];var ra=new U;function Xn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ra.copy(t),ra[n]=0,ra.normalize();let c=.5*o/(o+a),h=1-ra.angleTo(i)/l;return Math.sign(ra[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ns=class i extends Qt{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U,c=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,x=new U,m=.5/o;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[v+0]=Xn(x,c,"z","y",r,n),d[v+1]=1-Xn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[v+0]=1-Xn(x,c,"z","y",r,n),d[v+1]=1-Xn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[v+0]=1-Xn(x,c,"x","z",r,t),d[v+1]=Xn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[v+0]=1-Xn(x,c,"x","z",r,t),d[v+1]=1-Xn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[v+0]=1-Xn(x,c,"x","y",r,t),d[v+1]=1-Xn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[v+0]=Xn(x,c,"x","y",r,t),d[v+1]=1-Xn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function Di(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ee,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=P0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=P0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function P0(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new we(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function c_(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d");if(i==="pk"){s.fillStyle="#01411c",s.fillRect(0,0,t,e),s.fillStyle="#ffffff",s.fillRect(0,0,t*.25,e);let o=t*.625,a=e*.5,l=e*.31;s.beginPath(),s.arc(o,a,l,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.beginPath(),s.arc(o+l*.27,a-l*.14,l*.8,0,Math.PI*2),s.fillStyle="#01411c",s.fill();let c=o+l*.46,h=a-l*.36,u=l*.36,f=u*.382;s.beginPath();for(let d=0;d<10;d++){let g=-Math.PI/2+d*Math.PI/5+.52,x=d%2?f:u;s.lineTo(c+Math.cos(g)*x,h+Math.sin(g)*x)}s.closePath(),s.fillStyle="#ffffff",s.fill()}else i==="es"?(s.fillStyle="#aa151b",s.fillRect(0,0,t,e),s.fillStyle="#f1bf00",s.fillRect(0,e/4,t,e/2),h_(s,t*.36,e*.5,e*.42)):(s.fillStyle="#000000",s.fillRect(0,0,t,e/3),s.fillStyle="#ffffff",s.fillRect(0,e/3,t,e/3),s.fillStyle="#007a3d",s.fillRect(0,e*2/3,t,e/3),s.beginPath(),s.moveTo(0,0),s.lineTo(t*.33,e/2),s.lineTo(0,e),s.closePath(),s.fillStyle="#ce1126",s.fill());let r=new nn(n);return r.colorSpace=Ne,r.anisotropy=4,r}function h_(i,t,e,n){let s="#d9a400",r="#c8102e",o="#0b3d91",a="#f4f4f4",l="#7a2a8a";for(let p of[-1,1])i.fillStyle="#ffffff",i.fillRect(t+p*n*.98-n*.09,e-n*.62,n*.18,n*1.18),i.fillStyle="#b6b6b6",i.fillRect(t+p*n*.98+(p>0?0:-n*.03),e-n*.62,n*.03,n*1.18),i.fillStyle=s,i.fillRect(t+p*n*.98-n*.14,e-n*.7,n*.28,n*.1),i.fillRect(t+p*n*.98-n*.14,e+n*.54,n*.28,n*.08),i.beginPath(),i.arc(t+p*n*.98,e-n*.78,n*.1,0,Math.PI*2),i.fillStyle=s,i.fill(),i.fillStyle=r,i.fillRect(t+p*n*.98-n*.1,e-n*.52,n*.2,n*.1);i.fillStyle=r,i.fillRect(t-n*.95,e+n*.1,n*1.9,n*.16),i.fillStyle="#ffffff",i.fillRect(t-n*.9,e+n*.13,n*1.8,n*.04);let c=n*1.16,h=n*1.3,u=t-c/2,f=e-h*.45;i.save(),i.beginPath(),i.moveTo(u,f),i.lineTo(u+c,f),i.lineTo(u+c,f+h*.55),i.quadraticCurveTo(u+c,f+h,t,f+h),i.quadraticCurveTo(u,f+h,u,f+h*.55),i.closePath(),i.clip(),i.fillStyle=r,i.fillRect(u,f,c/2,h*.5),i.fillStyle=a,i.fillRect(u+c/2,f,c/2,h*.5),i.fillStyle=s,i.fillRect(u,f+h*.5,c/2,h*.5);for(let p=0;p<4;p++)i.fillStyle=r,i.fillRect(u+c*.07+p*c*.115,f+h*.5,c*.055,h*.5);i.fillStyle=r,i.fillRect(u+c/2,f+h*.5,c/2,h*.5),i.strokeStyle=s,i.lineWidth=n*.03,i.beginPath(),i.moveTo(u+c/2,f+h*.5),i.lineTo(u+c,f+h*.5),i.moveTo(u+c*.75,f+h*.5),i.lineTo(u+c*.75,f+h),i.moveTo(u+c/2,f+h*.75),i.lineTo(u+c,f+h*.75),i.stroke(),i.fillStyle=s;let d=u+c*.25,g=f+h*.27;i.fillRect(d-c*.11,g-h*.02,c*.22,h*.17),i.fillRect(d-c*.06,g-h*.1,c*.12,h*.1);for(let p of[-.11,-.04,.03])i.fillRect(d+c*p,g-h*.15,c*.04,h*.06);i.fillStyle=o,i.fillRect(d-c*.025,g+h*.05,c*.05,h*.1),i.fillStyle=l;let x=u+c*.75,m=f+h*.27;i.beginPath(),i.ellipse(x,m,c*.1,h*.1,0,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(x+c*.08,m-h*.09,c*.05,0,Math.PI*2),i.fill(),i.fillRect(x-c*.12,m+h*.04,c*.05,h*.1),i.fillRect(x+c*.05,m+h*.04,c*.05,h*.1),i.fillStyle=r,i.beginPath(),i.arc(t,f+h*.9,c*.08,0,Math.PI*2),i.fill(),i.fillStyle="#2e7d32",i.fillRect(t-c*.02,f+h*.8,c*.04,h*.05),i.restore(),i.strokeStyle="#1a1a1a",i.lineWidth=n*.025,i.beginPath(),i.moveTo(u,f),i.lineTo(u+c,f),i.lineTo(u+c,f+h*.55),i.quadraticCurveTo(u+c,f+h,t,f+h),i.quadraticCurveTo(u,f+h,u,f+h*.55),i.closePath(),i.stroke(),i.beginPath(),i.ellipse(t,e+h*.02,c*.17,h*.2,0,0,Math.PI*2),i.fillStyle=o,i.fill(),i.lineWidth=n*.025,i.strokeStyle=r,i.stroke(),i.fillStyle=a;for(let[p,v]of[[-.06,-.06],[.06,-.06],[0,.07]])i.beginPath(),i.arc(t+c*p,e+h*(.02+v),c*.03,0,Math.PI*2),i.fill();i.fillStyle=s,i.beginPath(),i.moveTo(t-c*.28,f-h*.02),i.lineTo(t-c*.28,f-h*.2),i.lineTo(t-c*.14,f-h*.12),i.lineTo(t,f-h*.24),i.lineTo(t+c*.14,f-h*.12),i.lineTo(t+c*.28,f-h*.2),i.lineTo(t+c*.28,f-h*.02),i.closePath(),i.fill(),i.beginPath(),i.arc(t,f-h*.3,c*.06,0,Math.PI*2),i.fill(),i.fillStyle=r,i.fillRect(t-c*.2,f-h*.11,c*.4,h*.05)}var L0={};function Ic(i){return L0[i]||(L0[i]=c_(i,768,512))}var xe={R:.42,H:1.55,STEP:.34,EDGE:.28,G:34,RUN:9.4,JUMP:12.2,ACC:70,AIR:22,DEC:95,AIR_DEC:9,ICE_ACC:11,ICE_DEC:5.5,TERM:-50,SNAP:.5},u_={active:!0,ice:!1,conv:null,bounce:0,boost:0,dx:0,dy:0,dz:0,moving:!1,name:"terrain"},oi=(i,t,e)=>i<t?t:i>e?e:i,D0=new dn,N0=new Ke,U0=new le,F0=new U,z0=new U,is=new Ot,As=class{constructor(){this.list=[]}add(t,e,n,s,r,o=0,a=0,l=0,c=1,h=1,u=1,f="XYZ"){D0.set(o,a,l,f),N0.setFromEuler(D0),F0.set(e,n,s),z0.set(c,h,u),U0.compose(F0,N0,z0);let d=t.index?t.toNonIndexed():t.clone();d.attributes.uv&&d.deleteAttribute("uv"),d.applyMatrix4(U0);let g=d.attributes.position.count,x=new Float32Array(g*3);is.set(r);for(let m=0;m<g;m++)x[m*3]=is.r,x[m*3+1]=is.g,x[m*3+2]=is.b;d.setAttribute("color",new we(x,3)),this.list.push(d)}addGeo(t){t.index&&(t=t.toNonIndexed()),t.attributes.uv&&t.deleteAttribute("uv"),this.list.push(t)}build(t){if(!this.list.length)return null;let e=Di(this.list,!1);return this.list.length=0,new et(e,t)}};var Pc=class{constructor(t,e=!1){this.theme=t,this.headless=e,this.group=new Yt,this.solids=[],this.ramps=[],this.discs=[],this.hazards=[],this.updaters=[],this.checkpoints=[],this.zones=[],this.pools=[],this.winds=[],this.swings=[],this.main=new As,this.glow=new As,this.waterY=-5,this.killY=-9,this.terrain=null,this.geoCache=new Map,this.matCache=new Map,this.colorIdx=0,this.arrowTexture=null,this.time=0,this.hitOut={nx:0,nz:1,pow:10},this.onEvent=null}rbox(t,e,n,s){let r=Math.max(.02,Math.min(s,t/2-.01,e/2-.01,n/2-.01)),o=`${t.toFixed(2)}|${e.toFixed(2)}|${n.toFixed(2)}|${r.toFixed(2)}`,a=this.geoCache.get(o);return a||(a=Math.min(t,e,n)<.35?new Qt(t,e,n):new ns(t,e,n,2,r),this.geoCache.set(o,a)),a}mat(t,e={}){var r,o,a,l;let n=t+JSON.stringify(e),s=this.matCache.get(n);return s||(s=new ee({color:t,roughness:(r=e.rough)!=null?r:.38,metalness:(o=e.metal)!=null?o:.02,emissive:(a=e.emissive)!=null?a:0,emissiveIntensity:(l=e.ei)!=null?l:1}),this.matCache.set(n,s)),s}pick(){let t=this.theme.plat;return t[this.colorIdx++%t.length]}addSolid(t,e,n,s,r,o,a={}){let l={x0:t,y0:e,z0:n,x1:s,y1:r,z1:o,active:!0,ice:!!a.ice,conv:a.conv||null,bounce:a.bounce||0,boost:a.boost||0,dx:0,dy:0,dz:0,moving:!1,name:a.name||""};return this.solids.push(l),l}add(t,e=!0,n=!0){return t.castShadow=e,t.receiveShadow=n,this.group.add(t),t}emit(t,e){this.onEvent&&this.onEvent(t,e)}platform(t,e,n,s,r,o={}){var h,u,f;let a=(h=o.h)!=null?h:1.6,l=(u=o.color)!=null?u:this.pick(),c=this.addSolid(t-s/2,e-a,n-r/2,t+s/2,e,n+r/2,o);if(!this.headless){if(this.main.add(this.rbox(s,a,r,.3),t,e-a/2,n,l),o.pad!==!1&&s>2.4&&r>2.4){let d=(f=o.padColor)!=null?f:o.ice?this.theme.icePad:this.theme.pad;this.main.add(this.rbox(s-1.1,.12,r-1.1,.05),t,e+0,n,d)}if(this.theme.edgeGlow){let d=this.theme.edgeGlow;this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n+r/2,d),this.glow.add(this.rbox(s+.04,.12,.12,.03),t,e-.08,n-r/2,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t+s/2,e-.08,n,d),this.glow.add(this.rbox(.12,.12,r+.04,.03),t-s/2,e-.08,n,d)}}return c}disc(t,e,n,s,r={}){var u,f,d,g,x,m,p,v,T,b;let o=(u=r.omega)!=null?u:0,a=(f=r.h)!=null?f:1.4,l={cx:t,cz:n,top:e,r:s,th:a,omega:o,phase:(d=r.phase)!=null?d:0,bounce:r.bounce||0,push:r.push||null,ice:!!r.ice,theta:(g=r.phase)!=null?g:0,dTheta:0,kind:"disc",squash:0,first:!0};if(this.discs.push(l),this.headless)return l;if(r.fan){let _=new Yt;_.position.set(t,e,n);let M=new et(new Ie(s,.32,10,40),this.mat((x=r.color)!=null?x:"#ff3d68",{rough:.3}));M.rotation.x=Math.PI/2,_.add(M);let S=new et(new Dt(s-.2,s-.2,.18,40),this.mat("#dff6ff",{rough:.5}));S.position.y=-.12,_.add(S);let y=new Yt;for(let L=0;L<4;L++){let I=new et(this.rbox(s*.95,.12,1.1,.04),this.mat(L%2?"#ffffff":"#ffd23f"));I.position.set(s*.5,.08,0);let D=new Yt;D.rotation.y=L*Math.PI/2,D.add(I),y.add(D)}let w=new et(new Dt(.55,.55,.5,14),this.mat("#ffffff"));w.position.y=.1,_.add(w,y),this.add(_);let A=new et(new Dt(.5,.7,14,10),this.mat(this.theme.hub));A.position.set(t,e-8,n),this.group.add(A);let C=new Te({color:"#ffffff",transparent:!0,opacity:.45,depthWrite:!1,toneMapped:!1}),E=[];for(let L=0;L<6;L++){let I=new et(new Qt(.07,1.6,.07),C);this.group.add(I),E.push({m:I,k:L/6,a:L*1.9})}return l.mesh=_,this.updaters.push((L,I)=>{y.rotation.y=-L*14,l.squash=Math.max(0,l.squash-I*4);for(let D of E){let F=(D.k+L*.7)%1;D.m.position.set(t+Math.cos(D.a)*s*.6*(.3+F),e+.3+F*5,n+Math.sin(D.a)*s*.6*(.3+F)),C.opacity=.4}}),l}if(r.bounce){let _=new Yt;_.position.set(t,e,n);let M=new et(new Dt(s*.55,s*.7,1.4,20),this.mat((m=r.stem)!=null?m:"#fff3d6"));M.position.y=-.7;let S=new et(new ve(s,28,14,0,Math.PI*2,0,Math.PI/2),this.mat((p=r.color)!=null?p:"#ff3b6b",{rough:.25}));S.scale.y=.45,S.position.y=-.05,_.add(M,S);for(let y=0;y<6;y++){let w=new et(new ve(.26,10,8),this.mat("#ffffff")),A=y/6*Math.PI*2;w.position.set(Math.cos(A)*s*.62,.34*(1-.3),Math.sin(A)*s*.62),w.scale.y=.4,_.add(w)}return this.add(_),l.mesh=_,this.updaters.push((y,w)=>{l.squash=Math.max(0,l.squash-w*4);let A=1-Math.sin(l.squash*Math.PI)*.35*l.squash;_.scale.set(1+(1-A)*.5,A,1+(1-A)*.5)}),l}let c=(v=r.color)!=null?v:this.pick(),h=new Dt(s,s,a,40);if(o===0)this.main.add(h,t,e-a/2,n,c),this.main.add(new Dt(s-.5,s-.5,.12,40),t,e,n,(T=r.padColor)!=null?T:this.theme.pad),this.theme.edgeGlow&&this.glow.add(new Ie(s,.07,6,48),t,e-.1,n,this.theme.edgeGlow,Math.PI/2);else{let _=new Yt;_.position.set(t,e,n);let M=new et(h,this.mat(c));M.position.y=-a/2;let S=new et(new Dt(s-.5,s-.5,.12,40),this.mat((b=r.padColor)!=null?b:this.theme.pad));_.add(M,S);for(let y=0;y<4;y++){let w=new et(this.rbox(s*1.6,.14,.6,.05),this.mat(this.theme.hazard2));w.position.y=.06,w.rotation.y=y*Math.PI/4,_.add(w)}if(this.theme.edgeGlow){let y=new et(new Ie(s,.08,6,48),new Te({color:this.theme.edgeGlow,toneMapped:!1}));y.rotation.x=Math.PI/2,y.position.y=-.1,_.add(y)}this.add(_),l.mesh=_,this.updaters.push(y=>{_.rotation.y=l.theta})}return l}ramp(t,e,n,s,r,o,a={}){var H,K;let l={x0:t-o/2,x1:t+o/2,zN:e,zF:s,yN:n,yF:r,conv:a.conv||null,ice:!!a.ice,kind:"ramp"};if(this.ramps.push(l),this.headless)return l;let c=Math.min(n,r)-1.6,h=(H=a.color)!=null?H:this.pick(),u=(V,Z,j)=>[V,Z,j],f=u(l.x0,n,e),d=u(l.x1,n,e),g=u(l.x1,r,s),x=u(l.x0,r,s),m=u(l.x0,c,e),p=u(l.x1,c,e),v=u(l.x1,c,s),T=u(l.x0,c,s),b=[],_=(V,Z,j,Tt)=>{b.push(...V,...Z,...j,...V,...j,...Tt)};_(f,x,g,d),_(f,d,p,m),_(g,x,T,v),_(x,f,m,T),_(d,g,v,p);let M=new Ee;M.setAttribute("position",new se(b,3)),M.computeVertexNormals();let S=b.length/3,y=new Float32Array(S*3);is.set(h);for(let V=0;V<S;V++)y[V*3]=is.r,y[V*3+1]=is.g,y[V*3+2]=is.b;M.setAttribute("color",new we(y,3)),this.main.addGeo(M);let w=e-s,A=r-n,C=Math.hypot(w,A),E=Math.atan2(A,w),L=(e+s)/2,I=(n+r)/2,D=-Math.sin(E),F=Math.cos(E);return this.main.add(this.rbox(o-1.6,.1,C-.6,.04),t,I+F*.02,L+D*.02*0,(K=a.padColor)!=null?K:a.ice?this.theme.icePad:this.theme.pad,E,0,0),l}mover(t,e,n,s,r,o,a={}){var x,m,p;let l=(x=a.h)!=null?x:1.5,c=this.addSolid(t-s/2,e-l,n-r/2,t+s/2,e,n+r/2,a);c.moving=!0,c.first=!0;let h=null;if(!this.headless){if(h=new et(this.rbox(s,l,r,.28),this.mat((m=a.color)!=null?m:this.pick(),{rough:.3})),a.pad!==!1){let v=new et(this.rbox(s-1,.12,r-1,.05),this.mat((p=a.padColor)!=null?p:this.theme.pad));v.position.y=l/2,h.add(v)}if(a.stripes){let v=new et(this.rbox(s+.02,.4,r+.02,.05),this.mat(this.theme.hazard));v.position.y=0,h.add(v)}this.add(h)}let u=0,f=0,d=0,g=v=>{let[T,b,_]=o(v);c.x0=t-s/2+T,c.x1=t+s/2+T,c.y0=e-l+b,c.y1=e+b,c.z0=n-r/2+_,c.z1=n+r/2+_,c.first&&(u=T,f=b,d=_,c.first=!1),c.dx=T-u,c.dy=b-f,c.dz=_-d,u=T,f=b,d=_,h&&h.position.set(t+T,e-l/2+b,n+_)};return g(0),this.updaters.push(v=>g(v)),c}tile(t,e,n,s,r,o={}){var x,m,p,v,T,b;let a=(x=o.period)!=null?x:4.8,l=(m=o.solidT)!=null?m:2.4,c=(p=o.warn)!=null?p:.8,h=(v=o.off)!=null?v:0,u=this.addSolid(t-s/2,e-1,n-r/2,t+s/2,e,n+r/2,o),f=null,d=null;this.headless||(d=new ee({color:(T=o.color)!=null?T:this.pick(),roughness:.3,emissive:0}),f=new et(this.rbox(s,1,r,.22),d),f.position.set(t,e-.5,n),this.add(f));let g=new Ot((b=o.color)!=null?b:"#ffffff");return this.updaters.push(_=>{let M=((_+h)%a+a)%a;M<l?(u.active=!0,f&&(f.visible=!0,f.position.x=t,d.emissive.setRGB(0,0,0))):M<l+c?(u.active=!0,f&&(f.visible=!0,f.position.x=t+Math.sin(_*70)*.07,d.emissive.setRGB(.55,.05,.02))):(u.active=!1,f&&(f.visible=!1))}),u}conveyor(t,e,n,s,r,o,a={}){let l=this.addSolid(t-s/2,e-1.4,n-r/2,t+s/2,e,n+r/2,{...a,conv:[0,o]});if(this.headless)return l;this.main.add(this.rbox(s,1.4,r,.25),t,e-.7,n,this.theme.convBase);let c=new We(s-1.2,r-.6),h=this.arrowTexture?this.arrowTexture.clone():null;h&&(h.needsUpdate=!0,h.wrapS=h.wrapT=Ri,h.repeat.set(Math.max(1,Math.round((s-1.2)/2.4)),Math.max(1,Math.round((r-.6)/2.4))));let u=new et(c,new ee({color:this.theme.belt,map:h,roughness:.6}));u.rotation.x=-Math.PI/2,o>0&&(u.rotation.z=Math.PI),u.position.set(t,e+.03,n),this.add(u,!1,!0);let f=Math.abs(o);return this.updaters.push((d,g)=>{h&&(h.offset.y-=f*g/2.4/(r-.6)*h.repeat.y)}),l}bar(t,e,n,s,r={}){var v,T,b,_,M,S,y;let o=(v=r.w)!=null?v:1.2,a=(T=r.h)!=null?T:1.2,l=(b=r.omega)!=null?b:1.4,c=(_=r.phase)!=null?_:0,h=(M=r.arms)!=null?M:1,u={type:"bar",test:(w,A,C)=>{if(w.y>e+a||w.y+xe.H<e)return!1;let E=w.x-t,L=w.z-n;if(E*E+L*L>(s/2+1.2)*(s/2+1.2))return!1;let I=c+l*A;for(let D=0;D<h;D++){let F=I+D*Math.PI/h,H=Math.cos(F),K=Math.sin(F),V=E*H-L*K,Z=E*K+L*H,j=oi(V,-s/2,s/2),Tt=oi(Z,-o/2,o/2),Rt=V-j,ie=Z-Tt;if(Rt*Rt+ie*ie<xe.R*xe.R){let re=Math.hypot(E,L)||.001,oe=l*L,B=-l*E,q=Math.hypot(oe,B)||1;oe/=q,B/=q;let mt=oe+E/re*.45,Lt=B+L/re*.45,_t=Math.hypot(mt,Lt)||1;return C.nx=mt/_t,C.nz=Lt/_t,C.pow=oi(6+Math.abs(l)*re*1.15,9,21),!0}}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new Yt;f.position.set(t,e+a/2,n);let d=Math.max(3,Math.round(s/2.4)),g=s/d,x=this.mat((S=r.color1)!=null?S:this.theme.hazard,{rough:.3}),m=this.mat((y=r.color2)!=null?y:this.theme.hazard2,{rough:.3});for(let w=0;w<h;w++){let A=new Yt;A.rotation.y=w*Math.PI/h;for(let C=0;C<d;C++){let E=new et(this.rbox(g*.995,a,o,.25),C%2?x:m);E.position.x=-s/2+g*(C+.5),E.castShadow=!0,A.add(E)}f.add(A)}let p=new et(new Dt(o*.85,o,a+.7,16),this.mat(this.theme.hub));return p.castShadow=!0,f.add(p),this.add(f),this.updaters.push(w=>{f.rotation.y=c+l*w}),u}hammer(t,e,n,s,r={}){var p,v,T,b,_,M,S,y,w;let o=(p=r.amp)!=null?p:1.1,a=(v=r.omega)!=null?v:1.6,l=(T=r.phase)!=null?T:0,c=(b=r.r)!=null?b:1.3,h=(_=r.span)!=null?_:9,u={type:"hammer",test:(A,C,E)=>{let L=o*Math.sin(a*C+l),I=t+s*Math.sin(L),D=e-s*Math.cos(L),F=o*a*Math.cos(a*C+l),H=s*Math.cos(L)*F,K=oi(D,A.y+.15,A.y+xe.H-.1),V=I-A.x,Z=D-K,j=n-A.z,Tt=xe.R+c;if(V*V+Z*Z+j*j<Tt*Tt){let Rt=-V,ie=-j;Rt=(Math.sign(H)||Math.sign(Rt)||1)*1,ie=ie*.5;let oe=Math.hypot(Rt,ie);return E.nx=Rt/oe,E.nz=ie/oe,E.pow=oi(Math.abs(H)*1.05+6,10,23),!0}return!1}};if(this.hazards.push(u),this.headless)return u;let f=new Yt;f.position.set(t,e,n);let d=new et(new Dt(.17,.17,s,10),this.mat(this.theme.hub));d.position.y=-s/2;let g=new et(new ve(c,28,18),this.mat(this.theme.hazard,{rough:.25}));g.position.y=-s;let x=new et(new Ie(c*.98,.12,8,28),this.mat(this.theme.hazard2));x.position.y=-s,x.rotation.x=Math.PI/2;let m=x.clone();if(m.rotation.set(0,Math.PI/2,0),f.add(d,g,x,m),f.traverse(A=>{A.isMesh&&(A.castShadow=!0)}),this.add(f),this.updaters.push(A=>{f.rotation.z=o*Math.sin(a*A+l)}),!this.headless){let A=this.theme.hub;this.main.add(this.rbox(.9,e-((M=r.baseY)!=null?M:e-s-1.5)+1.2,.9,.2),t-h,(e+((S=r.baseY)!=null?S:e-s-1.5))/2-0,n,A),this.main.add(this.rbox(.9,e-((y=r.baseY)!=null?y:e-s-1.5)+1.2,.9,.2),t+h,(e+((w=r.baseY)!=null?w:e-s-1.5))/2-0,n,A),this.main.add(this.rbox(h*2+1,.8,.9,.2),t,e+.6,n,A)}return u}balls(t,e,n,s,r,o,a,l,c={}){let h=n-e,u=h/o,f=l.map(()=>({x:t,z:0,y:0,on:!1})),d=[],g=m=>new Ot(m%2?this.theme.hazard:this.theme.hazard2);this.headless||l.forEach((m,p)=>{let v=new ve(r,32,20),T=v.attributes.position,b=T.count,_=new Float32Array(b*3);for(let S=0;S<b;S++){let y=Math.atan2(T.getZ(S),T.getX(S)),A=Math.floor((y+Math.PI)/(Math.PI*2)*8)%2?new Ot(this.theme.hazard):new Ot(this.theme.hazard2);_[S*3]=A.r,_[S*3+1]=A.g,_[S*3+2]=A.b}v.setAttribute("color",new we(_,3));let M=new et(v,new ee({vertexColors:!0,roughness:.25}));M.visible=!1,this.add(M),d.push(M)});let x={type:"balls",test:(m,p,v)=>{for(let T=0;T<f.length;T++){let b=f[T];if(!b.on)continue;let _=oi(b.y,m.y+.15,m.y+xe.H-.1),M=b.x-m.x,S=b.y-_,y=b.z-m.z,w=xe.R+r;if(M*M+S*S+y*y<w*w){let A=(m.x-b.x)*.8,C=1,E=Math.hypot(A,C);return v.nx=A/E,v.nz=C/E,v.pow=oi(o*1.1+4,10,20),!0}}return!1}};return this.hazards.push(x),this.updaters.push(m=>{l.forEach((p,v)=>{let T=f[v],b=((m+p)%a+a)%a,_=b<u;T.on=_,_&&(T.z=e+b*o,T.y=s(T.z)+r,T.x=t);let M=d[v];M&&(M.visible=_,_&&(M.position.set(T.x,T.y,T.z),M.rotation.x=T.z/r))})}),x}seesaw(t,e,n,s,r,o,a,l=0){let c={x0:t-s/2,x1:t+s/2,zN:n+r/2,zF:n-r/2,yN:e,yF:e,conv:null,ice:!1,kind:"ramp",seesaw:!0};this.ramps.push(c);let h=g=>{let x=o*Math.sin(2*Math.PI*g/a+l);return c.yN=e+x,c.yF=e-x,x};if(h(0),this.headless)return this.updaters.push(g=>h(g)),c;this.main.add(new Dt(.5,1.1,2.4,8),t,e-1.4,n,this.theme.hub),this.main.add(this.rbox(s*.9,.7,1.4,.2),t,e-2.5,n,this.theme.hazard2);let u=new Yt;u.position.set(t,e-.25,n);let f=new et(this.rbox(s,.5,r,.2),this.mat(this.pick(),{rough:.35})),d=new et(this.rbox(s-1.2,.1,r-1.2,.04),this.mat(this.theme.pad));d.position.y=.27,u.add(f,d);for(let g of[-1,1]){let x=new et(this.rbox(s,.62,1.2,.2),this.mat(this.theme.hazard,{rough:.3}));x.position.set(0,.03,g*(r/2-.6)),u.add(x)}for(let g of[-1,1]){let x=new et(new Dt(.1,.1,1.1,8),this.mat(this.theme.hub));x.position.set(g*(s/2-.5),.9,0),u.add(x)}return this.add(u),this.updaters.push(g=>{let x=h(g);u.rotation.x=-Math.atan2(x,r/2)}),c}bungee(t,e,n,s,r,o){let a=this.disc(t,n,e,s,{bounce:r,color:this.theme.hazard});if(this.headless)return a;let l=o,c=14;for(let h=0;h<c;h++){let u=h/c*Math.PI*2,f=t+Math.cos(u)*(s*.92),d=e+Math.sin(u)*(s*.92);this.main.add(new Dt(.07,.07,l-n,5),f,(l+n)/2,d,h%2?"#ffffff":this.theme.hazard)}this.main.add(new Ie(s*.92,.35,8,36),t,l,e,this.theme.accent,Math.PI/2),this.main.add(new Ie(s*.92,.2,8,36),t,n+.15,e,"#ffffff",Math.PI/2);for(let h=0;h<3;h++){let u=Math.PI/2+h*Math.PI*2/3+.5,f=t+Math.cos(u)*(s+1.4),d=e+Math.sin(u)*(s+1.4);this.main.add(new Dt(.45,.6,l+12,8),f,(l-12)/2,d,h%2?"#ffd23f":"#ffffff")}return this.glow.add(new ve(.9,12,8),t,l+1.6,e,"#ffffff"),a}tube(t,e,n){if(this.headless)return;let s=new U(0,1,0),r=new U,o=new U,a=new U,l=new Ke,c=new dn;for(let h=0;h<t.length-1;h++){r.set(...t[h]),o.set(...t[h+1]),a.subVectors(o,r);let u=a.length();a.normalize(),l.setFromUnitVectors(s,a),c.setFromQuaternion(l),this.main.add(new Dt(e,e,u*1.02,6),(r.x+o.x)/2,(r.y+o.y)/2,(r.z+o.z)/2,n,c.x,c.y,c.z)}}airpad(t,e,n,s,r,o={}){var f,d;let a={x:t,z:e,r:n,y0:s,y1:s+r,lift:(f=o.lift)!=null?f:90,vmax:(d=o.vmax)!=null?d:9};if(this.zones.push(a),this.headless)return a;this.main.add(new Dt(n*.95,n,.5,28),t,s+.25,e,this.theme.hub),this.glow.add(new Ie(n*.8,.14,8,36),t,s+.55,e,"#9cf0ff",Math.PI/2);let l=new Te({color:"#8fe9ff",transparent:!0,opacity:.16,depthWrite:!1,side:hn,toneMapped:!1}),c=new et(new Dt(n*.92,n*.92,r,24,1,!0),l);c.position.set(t,s+r/2,e),c.renderOrder=3,this.group.add(c);let h=new Te({color:"#e6fbff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),u=[];for(let g=0;g<5;g++){let x=new et(new Ie(n*.85,.08,6,28),h);x.rotation.x=Math.PI/2,x.renderOrder=3,this.group.add(x),u.push(x)}return this.updaters.push(g=>{u.forEach((x,m)=>{let p=(g*.5+m/5)%1;x.position.set(t,s+.6+p*(r-.8),e),x.scale.setScalar(1-p*.25)})}),a}punch(t,e,n,s,r,o,a={}){var T,b;let l=(T=a.period)!=null?T:3.2,c=(b=a.off)!=null?b:0,h=1,u=Math.hypot(s,r)||1;s/=u,r/=u;let f=_=>{let M=((_+c)%l+l)%l/l,S=(y,w,A)=>{let C=Math.max(0,Math.min(1,(A-y)/(w-y)));return C*C*(3-2*C)};return o*(S(.5,.58,M)-S(.78,.95,M))},d={type:"punch",test:(_,M,S)=>{var F;let y=f(M);if(y<.4)return!1;let w=t+s*(y+.5),A=n+r*(y+.5),C=oi(e,_.y+.15,_.y+xe.H-.1),E=w-_.x,L=e-C,I=A-_.z,D=xe.R+h;return E*E+L*L+I*I<D*D?(S.nx=s,S.nz=r,S.pow=(F=a.pow)!=null?F:15,!0):!1}};if(this.hazards.push(d),this.headless)return d;let g=new Yt;g.position.set(t,e,n),g.rotation.y=Math.atan2(s,r);let x=new et(new Dt(.22,.22,1,8),this.mat(this.theme.hub));x.rotation.x=Math.PI/2;let m=new et(new ve(h,20,14),this.mat(this.theme.hazard,{rough:.3})),p=new et(new Dt(.62,.62,.5,14),this.mat("#ffffff"));p.rotation.x=Math.PI/2,p.position.z=-.95;let v=new et(new ve(.42,12,10),this.mat(this.theme.hazard,{rough:.3}));return v.position.set(.7,.45,-.35),m.add(p,v),p.position.z=-.95,m.scale.set(1,1,1.1),g.add(x,m),g.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),this.add(g,!1,!1),this.main.add(this.rbox(2.2,2.6,1.2,.3),t-s*.3,e,n-r*.3,this.theme.hub,0,Math.atan2(s,r),0),this.updaters.push(_=>{let M=f(_);x.scale.y=Math.max(.01,M+.2),x.position.z=(M+.2)/2,m.position.z=M+.5}),d}ferris(t,e,n,s,r,o){let a=u=>u*Math.PI*2/r;for(let u=0;u<r;u++)this.mover(t,e-s,n,5,5,f=>{let d=o*f+a(u);return[0,s*(1-Math.cos(d)),s*Math.sin(d)]},{h:.7,color:this.theme.plat[u%this.theme.plat.length],pad:!0});if(this.headless)return;let l=new Yt;l.position.set(t,e,n);let c=this.mat("#ffffff",{rough:.35});for(let u of[-1,1]){let f=new et(new Ie(s,.28,8,56),c);f.rotation.y=Math.PI/2,f.position.x=u*3.2,l.add(f)}for(let u=0;u<4;u++)for(let f of[-1,1]){let d=new et(new Dt(.12,.12,s*2,6),this.mat(this.theme.hazard));d.rotation.x=u*Math.PI/4,d.position.x=f*3.2,l.add(d)}let h=new et(new Dt(.9,.9,7.4,14),this.mat(this.theme.hub));h.rotation.z=Math.PI/2,l.add(h),this.add(l,!0,!1);for(let u of[-1,1])for(let f of[-1,1])this.main.add(this.rbox(.7,e+1,.7,.2),t+u*4.4,(e-1)/2,n+f*s*.55,this.theme.hub,0,0,0,1,1,1);this.updaters.push(u=>{l.rotation.x=-(o*u)})}pirate(t,e,n,s,r,o=.1){let a=o+n;if(this.mover(t,o,e,10,5,c=>{let h=s*Math.sin(2*Math.PI*c/r);return[0,n*(1-Math.cos(h)),n*Math.sin(h)]},{h:.9,color:this.theme.hazard,stripes:!0,pad:!0}),this.headless)return;for(let c of[-1,1])this.main.add(this.rbox(.8,a+2,.8,.2),t+c*6.2,(a+2)/2-.5,e+2.2,this.theme.hub,0,0,.12*c),this.main.add(this.rbox(.8,a+2,.8,.2),t+c*6.2,(a+2)/2-.5,e-2.2,this.theme.hub,0,0,.12*c);this.main.add(this.rbox(14.5,.9,.9,.2),t,a+.4,e,this.theme.accent);let l=new Yt;l.position.set(t,a,e);for(let c of[-1,1]){let h=new et(new Dt(.16,.16,n,8),this.mat("#ffffff"));h.position.set(c*4.2,-n/2,0),l.add(h)}this.add(l,!0,!1),this.updaters.push(c=>{l.rotation.x=-s*Math.sin(2*Math.PI*c/r)})}dropTower(t,e,n,s=13){let r=o=>{let a=(o%s+s)%s;if(a<1)return 0;if(a<5.5){let l=(a-1)/4.5;return n*(l*l*(3-2*l))}if(a<8.5)return n;if(a<9.4){let l=(a-8.5)/.9;return n*(1-l*l)}return 0};if(this.mover(t,.1,e,6,6,o=>[0,r(o),0],{h:.9,color:this.theme.accent,stripes:!0,pad:!0}),!this.headless){for(let o of[-1,1])for(let a of[-1,1])this.main.add(this.rbox(.7,n+5,.7,.2),t+o*3.6,(n+5)/2-.5,e+a*3.6,"#ffffff");this.main.add(this.rbox(8.2,.8,8.2,.2),t,n+4.6,e,this.theme.hazard),this.glow.add(new ve(.7,10,8),t,n+5.6,e,"#ffffff")}}orbit(t,e,n,s,r,o){for(let a=0;a<r;a++){let l=a*Math.PI*2/r;this.mover(t+n,s,e,4.4,4.4,c=>{let h=o*c+l;return[n*Math.cos(h)-n,.7*Math.sin(c*1.3+l),n*Math.sin(h)]},{h:.8,color:this.theme.plat[a%this.theme.plat.length],pad:!0})}this.headless||(this.main.add(new Dt(.7,.9,s+5,10),t,(s+5)/2-.4,e,this.theme.hub),this.main.add(new wn(2.4,2.2,14),t,s+6,e,this.theme.hazard),this.glow.add(new Ie(n,.12,6,48),t,s-.5,e,"#ffffff",Math.PI/2))}cannon(t,e,n,s){if(this.disc(t,0,e,2.4,{bounce:n,push:s,color:this.theme.hazard}),this.headless)return;let r=s[1]<0?-1:1;this.main.add(new Dt(1,1.35,5.5,14),t,2.4,e-r*2.8,this.theme.hub,r*.93,0,0),this.main.add(new Ie(1.1,.2,8,18),t,4.4,e-r*.5,this.theme.accent,Math.PI/2-r*.64,0,0)}flagShuttle(t,e,n,s,r,o,a,l,c,h={}){var E,L;let u=I=>-s*(.5-.5*Math.cos(2*Math.PI*I/r+o)),f=r/4,d=r/2,g=(E=h.slabZ)!=null?E:3,x=I=>((I-f+d/2)%d+d)%d-d/2,m=I=>{let D=x(I),F=11,H=4.2,K=.35;return D<-5?F:D<-4.4?F+(H-F)*((D+5)/.6):D<-.4?H:D<-.15?H+(K-H)*((D+.4)/.25):D<.6?K:D<1.4?K+(H-K)*((D-.6)/.8):H+(F-H)*Math.min(1,(D-1.4)/.6)},p=this.mover(t,e,n,a,l,I=>[0,0,u(I)],{h:.8,color:(L=h.color)!=null?L:"#f4efe6",pad:!1}),v={type:"blade",test:(I,D,F)=>{let H=x(D);if(H<-.3||H>.25)return!1;let K=n+u(D),V=I.x-t,Z=I.z-K;if(Math.abs(V)>a/2+.3||Math.abs(Z)>g+.4||I.y>e+3.2||I.y+1.55<e)return!1;F.nx=(Math.sign(V)||1)*.25,F.nz=Math.sign(Z)||1;let j=Math.hypot(F.nx,F.nz);return F.nx/=j,F.nz/=j,F.pow=15,!0}};if(this.hazards.push(v),this.shuttles=this.shuttles||[],this.shuttles.push({cx:t,top:e,cz0:n,D:s,T:r,phase:o,w:a,dp:l,pos:u,tau:x,bladeH:m,slabZ:g}),this.headless)return p;let T=new Yt;this.add(T);let b=new et(new We(a-1.2,(a-1.2)*.667),new Te({map:Ic(c),toneMapped:!1}));b.rotation.x=-Math.PI/2,b.position.y=.06,T.add(b);let _=new Te({color:"#1e6bff",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),M=new Yt;M.position.y=.1,[[0,0,2.6],[1.9,1.3,1.1],[-2,1.5,.9],[1.4,-1.9,1],[-1.6,-1.6,.8],[.2,2.6,.7]].forEach(([I,D,F])=>{let H=new et(new ys(F,18),_);H.rotation.x=-Math.PI/2,H.position.set(I,0,D),M.add(H)}),T.add(M);for(let I of[-1,1]){let D=new et(this.rbox(.6,12.5,.6,.15),this.mat(this.theme.hub));D.position.set(I*(a/2+.1),6.2,0),T.add(D)}let S=new et(this.rbox(a+1.2,.7,.8,.15),this.mat(this.theme.hub));S.position.y=12.6,T.add(S);let y=new Yt,w=new et(this.rbox(a-.6,.5,g*2,.1),this.mat("#c9d3df",{rough:.2}));y.add(w);for(let I=0;I<8;I++){let D=new et(new wn(.55,.9,4),this.mat("#eef3f8",{rough:.15}));D.rotation.x=Math.PI,D.position.set(-(a-1.6)/2+I*((a-1.6)/7),-.65,0),y.add(D)}let A=new et(new Dt(.15,.15,12,6),this.mat("#8a8f99"));A.position.y=6,y.add(A);let C=new et(new We(a-.6,g*2),new Te({color:"#ff3d3d",transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return C.rotation.x=-Math.PI/2,C.position.y=.09,T.add(C),T.add(y),this.updaters.push(I=>{let D=u(I);T.position.set(t,e+.4,n+D);let F=m(I),H=x(I);y.position.y=F+.5+(H>-1.2&&H<-.4?Math.sin(I*40)*.06:0),C.material.opacity=H>-4.4&&H<-.1?.18+.12*Math.sin(I*12):0,_.opacity=H>-.15&&H<3.4?Math.min(.85,(3.4-H)/3):0}),p}fan(t,e,n,s,r,o,a,l){let c={x0:t,x1:e,z0:n,z1:s,y0:r,y1:o,ax:a,az:l};if(this.winds.push(c),this.headless)return c;let h=(t+e)/2,u=(n+s)/2,f=Math.sign(a)||0,d=Math.sign(l)||0,g=f?f>0?t-.8:e+.8:h,x=d?d>0?n-.8:s+.8:u,m=r+2.2;this.main.add(new Dt(.3,.45,9.4,8),g,r-3.1,x,this.theme.hub);let p=new Yt;p.position.set(g,m,x),p.rotation.y=f?f>0?Math.PI/2:-Math.PI/2:d>0?0:Math.PI;let v=new et(new Ie(1.6,.18,8,28),this.mat(this.theme.hazard));p.add(v);let T=new et(new Dt(.4,.4,.5,12),this.mat("#ffffff"));T.rotation.x=Math.PI/2,p.add(T);let b=new Yt;for(let y=0;y<4;y++){let w=new et(this.rbox(.6,1.4,.1,.04),this.mat(y%2?"#ffffff":this.theme.accent));w.position.y=.9;let A=new Yt;A.rotation.z=y*Math.PI/2,A.add(w),b.add(A)}p.add(b),this.add(p);let _=new Te({color:"#ffffff",transparent:!0,opacity:.5,depthWrite:!1,toneMapped:!1}),M=[],S=Math.abs(f)?e-t:s-n;for(let y=0;y<7;y++){let w=new et(new Qt(f?2.2:.07,.07,f?.07:2.2),_);this.group.add(w),M.push({m:w,k:y/7,o:y*.37%1})}return this.updaters.push(y=>{b.rotation.z=y*16;for(let w of M){let A=(w.k+y*.55)%1,C=A*S;w.m.position.set(f?f>0?t+C:e-C:t+(e-t)*w.o,r+.8+w.o*7%1*(o-r-1.2),d?d>0?n+C:s-C:n+(s-n)*w.o)}}),c}swing(t,e,n,s,r,o,a=0,l){let c={x:t,y:e,z:n,len:s,amp:r,om:2*Math.PI/o,ph:a};if(this.swings.push(c),this.headless)return c;let h=l!=null?l:this.theme.hazard,u=3;for(let m of[-1,1])this.main.add(this.rbox(.8,e+1,.8,.2),t+m*u,(e-1)/2+.5,n,this.theme.hub);this.main.add(this.rbox(u*2+.8,.8,.8,.2),t,e+.4,n,this.theme.hub),this.glow.add(new ve(.35,10,8),t-u,e+1.2,n,"#ffffff"),this.glow.add(new ve(.35,10,8),t+u,e+1.2,n,"#ffffff");let f=new Yt;f.position.set(t,e,n);let d=new et(new Dt(.11,.11,s,6),this.mat("#fff2c4"));d.position.y=-s/2,f.add(d);let g=new et(new Dt(.3,.3,3,12),this.mat("#ffd23f",{rough:.3}));g.rotation.z=Math.PI/2,g.position.y=-s,f.add(g);for(let m of[-1,1]){let p=new et(new ve(.3,10,8),this.mat("#ffffff"));p.position.set(m*1.5,-s,0),f.add(p)}let x=new et(new Ie(.28,.07,6,16),this.mat("#ffd23f"));return x.position.y=-s+0,x.rotation.y=Math.PI/2,f.add(x),this.add(f),c.mesh=f,this.updaters.push(m=>{f.rotation.x=-this.swingAngle(c,m)}),c}swingAngle(t,e){return t.amp*Math.sin(t.om*e+t.ph)}swingTip(t,e,n={}){let s=this.swingAngle(t,e),r=t.amp*t.om*Math.cos(t.om*e+t.ph);return n.x=t.x,n.y=t.y-t.len*Math.cos(s),n.z=t.z+t.len*Math.sin(s),n.vz=t.len*r*Math.cos(s),n.vy=t.len*r*Math.sin(s),n}doorWall(t,e,n,s,r,o,a={}){var f,d;let l=(f=a.h)!=null?f:4.2,c=s/r,h=(d=a.colors)!=null?d:["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#ff9f1c","#b58cff","#ff7a7a"],u=[];for(let g=0;g<r;g++){let x=t-s/2+c*(g+.5),m=o[g]?this.addSolid(x-c/2+.05,e,n-.4,x+c/2-.05,e+l,n+.4,{name:"fakedoor"}):null,p={x,z:n,i:g,fake:!!o[g],solid:m,open:0,mesh:null};if(!this.headless){let v=new Yt;v.position.set(x-c/2+.05,e,n);let T=new et(this.rbox(c-.1,l,.5,.12),this.mat(h[g%h.length],{rough:.35}));T.position.set((c-.1)/2,l/2,0),v.add(T);let b=new et(new ve(.2,8,6),this.mat("#ffffff"));b.position.set(c-.5,l*.45,.35),v.add(b);let _=new et(this.rbox(c-.5,.35,.56,.05),this.mat("#ffffff"));_.position.set((c-.1)/2,l*.82,0),v.add(_),this.add(v),p.mesh=v}u.push(p)}return this.headless||(this.main.add(this.rbox(.9,l+1.2,1,.2),t-s/2-.45,e+(l+1.2)/2,n,this.theme.hub),this.main.add(this.rbox(.9,l+1.2,1,.2),t+s/2+.45,e+(l+1.2)/2,n,this.theme.hub),this.main.add(this.rbox(s+1.8,1,1,.2),t,e+l+.5,n,this.theme.hub)),this.doorWalls=this.doorWalls||[],this.doorWalls.push({cx:t,cz:n,w:s,doors:u}),this.updaters.push((g,x)=>{let m=this.nearPlayers||[];for(let p of u){if(!p.mesh)continue;let v=0;if(!p.fake)for(let T of m)Math.abs(T.z-n)<3.2&&Math.abs(T.x-p.x)<c*.9&&(v=1);p.open+=(v-p.open)*Math.min(1,x*9),p.mesh.rotation.y=-p.open*1.45,p.fake}}),u}checkpoint(t,e,n,s=14){let r={x:t,y:e,z:n,w:s,spawn:[t,e,n+1]};return this.checkpoints.push(r),this.headless||this.arch(t,e,n,s,this.theme.accent,!0),r}arch(t,e,n,s,r,o=!1){let a=o?5.2:8.5;this.main.add(this.rbox(.9,a,.9,.25),t-s/2,e+a/2,n,r),this.main.add(this.rbox(.9,a,.9,.25),t+s/2,e+a/2,n,r),this.main.add(this.rbox(s+.9,o?.9:1.6,o?.9:1.4,.25),t,e+a,n,r),this.glow.add(new ve(.42,12,8),t-s/2,e+a+.8,n,"#ffffff"),this.glow.add(new ve(.42,12,8),t+s/2,e+a+.8,n,"#ffffff")}update(t,e){this.time=t;for(let n of this.updaters)n(t,e);for(let n of this.discs)if(n.omega){let s=n.phase+n.omega*t;n.dTheta=n.first?0:s-n.theta,n.theta=s,n.first=!1}}carry(t){let e=t.ground;if(e){if(e.moving)t.x+=e.dx,t.y+=e.dy,t.z+=e.dz;else if(e.kind==="disc"&&e.omega){let n=t.x-e.cx,s=t.z-e.cz,r=e.dTheta,o=Math.cos(r),a=Math.sin(r);t.x=e.cx+n*o+s*a,t.z=e.cz-n*a+s*o,t.yawOff=(t.yawOff||0)+r}}}checkHazards(t,e){for(let n of this.hazards)if(n.test(t,e,this.hitOut))return this.hitOut;return null}finalize(){if(this.headless)return;let t=this.main.build(new ee({vertexColors:!0,roughness:.4,metalness:.02}));t&&(t.castShadow=!0,t.receiveShadow=!0,this.group.add(t));let e=this.glow.build(new Te({vertexColors:!0,toneMapped:!1}));e&&this.group.add(e)}resolveHorizontal(t){let e=xe.R,n=xe.H;for(let s of this.solids){if(!s.active||s.y1<=t.y+xe.STEP||s.y0>=t.y+n||t.x<s.x0-e||t.x>s.x1+e||t.z<s.z0-e||t.z>s.z1+e)continue;let r=oi(t.x,s.x0,s.x1),o=oi(t.z,s.z0,s.z1),a=t.x-r,l=t.z-o,c=a*a+l*l;if(c>=e*e)continue;let h,u;if(c>1e-9){let d=Math.sqrt(c),g=e-d;h=a/d,u=l/d,t.x+=h*g,t.z+=u*g}else{let d=t.x-s.x0,g=s.x1-t.x,x=t.z-s.z0,m=s.z1-t.z,p=Math.min(d,g,x,m);p===d?(t.x=s.x0-e,h=-1,u=0):p===g?(t.x=s.x1+e,h=1,u=0):p===x?(t.z=s.z0-e,h=0,u=-1):(t.z=s.z1+e,h=0,u=1)}let f=t.vx*h+t.vz*u;if(f<0&&(t.vx-=f*h,t.vz-=f*u),s.moving){let d=s.dx*h+s.dz*u;d>0&&(t.vx+=h*Math.min(d/.016,8)*.3,t.vz+=u*Math.min(d/.016,8)*.3)}}for(let s of this.discs){if(t.y+n<=s.top-s.th||t.y>=s.top-xe.STEP)continue;let r=t.x-s.cx,o=t.z-s.cz,a=Math.hypot(r,o),l=s.r+e;if(a<l&&a>1e-6){let c=r/a,h=o/a;t.x=s.cx+c*l,t.z=s.cz+h*l;let u=t.vx*c+t.vz*h;u<0&&(t.vx-=u*c,t.vz-=u*h)}}}findGround(t,e,n){let s=xe.EDGE,r=e+xe.STEP,o=n&&t.noSnap<=0?xe.SNAP:0,a=null,l=-1e9;for(let c of this.solids){if(!c.active)continue;let h=c.y1;h>r||h<=l||t.x<c.x0-s||t.x>c.x1+s||t.z<c.z0-s||t.z>c.z1+s||(t.y<=h+1e-4||t.y<=h+o)&&(a=c,l=h)}for(let c of this.ramps){if(t.x<c.x0-s||t.x>c.x1+s||t.z>c.zN+.3||t.z<c.zF-.3)continue;let h=oi((c.zN-t.z)/(c.zN-c.zF),0,1),u=c.yN+(c.yF-c.yN)*h;u>r||u<l||(t.y<=u+1e-4||t.y<=u+o)&&(a=c,l=u)}for(let c of this.discs){let h=c.top;if(h>r||h<l)continue;let u=t.x-c.cx,f=t.z-c.cz,d=c.r+s*.8;u*u+f*f>d*d||(t.y<=h+1e-4||t.y<=h+o)&&(a=c,l=h)}if(this.terrain){let c=this.terrain(t.x,t.z);c<=r&&c>l&&(t.y<=c+1e-4||t.y<=c+o)&&(a=u_,l=c)}return a?{s:a,top:l}:null}hitCeiling(t,e){for(let n of this.solids)if(n.active&&!(e+xe.H>n.y0+.02||t.y+xe.H<=n.y0)&&!(t.x<n.x0||t.x>n.x1||t.z<n.z0||t.z>n.z1))return n;return null}};var Uu={sedan:{L:4.6,w:.92,yb:.27,beltF:.7,beltR:.85,prof:[[2.3,.7],[2,.77],[1.3,.89],[.98,.96],[.05,1.46],[-.95,1.45],[-1.6,1.01],[-2,.98],[-2.3,.93]],axle:1.36,wr:.335,ww:.24,arch:.43,doors:[[-.14,.86],[-.9,-.2]],wind:[.14,.93],rear:[-1.5,-.98],hood:[.99,2.18],trunk:[-2.18,-1.6],seatX:[-.05,-.78]},hatch:{L:3.95,w:.87,yb:.27,beltF:.68,beltR:.84,prof:[[1.98,.68],[1.7,.75],[1.15,.87],[.8,.93],[.05,1.46],[-.85,1.47],[-1.45,1.36],[-1.75,1.08],[-1.98,.97]],axle:1.2,wr:.31,ww:.2,arch:.4,doors:[[-.12,.7],[-.8,-.18]],wind:[.12,.78],rear:[-1.42,-.9],hood:[.82,1.84],trunk:[-1.84,-1.5],seatX:[-.05,-.7],dashX:.52,bayX:1.3,bootX:-1.65},suv:{L:4.7,w:1,yb:.38,beltF:.98,beltR:1.06,prof:[[2.35,.92],[2.05,1],[1.4,1.1],[1,1.15],[.25,1.82],[-1.1,1.84],[-2,1.78],[-2.35,1.62]],axle:1.42,wr:.39,ww:.26,arch:.5,doors:[[-.14,.9],[-.95,-.22]],wind:[.2,.98],rear:[-1.7,-1.1],hood:[1.02,2.2],trunk:[-2.2,-1.65],seatX:[0,-.85],hly:.82,lift:.12},coupe:{L:4.5,w:.93,yb:.24,beltF:.64,beltR:.82,twoDoor:!0,prof:[[2.25,.58],[1.9,.68],[1.25,.8],[.55,.84],[0,1.28],[-.7,1.28],[-1.35,1],[-1.8,.9],[-2.25,.86]],axle:1.36,wr:.33,ww:.26,arch:.43,doors:[[-.25,.85]],wind:[0,.8],rear:[-1.3,-.95],hood:[.9,2.18],trunk:[-2.18,-1.62],seatX:[-.2,-.8],dashX:.5,hly:.58},sports:{L:4.45,w:.97,yb:.2,beltF:.62,beltR:.75,twoDoor:!0,prof:[[2.22,.56],[1.85,.66],[1.2,.74],[.5,.8],[-.05,1.19],[-.7,1.21],[-1.25,.96],[-1.75,.88],[-2.22,.8]],axle:1.34,wr:.33,ww:.3,arch:.44,doors:[[-.3,.8]],wind:[-.05,.75],rear:[-1.2,-.92],hood:[.85,2.15],trunk:[-2.15,-1.65],seatX:[-.25,-.8],dashX:.45,hly:.52}},Nu=(i,t,e)=>i+(t-i)*e,oa=(i,t,e)=>Math.max(t,Math.min(e,i)),B0=(i,t,e)=>{let n=oa((e-i)/(t-i),0,1);return n*n*(3-2*n)};function ue(i,t=[1,1,1]){i.index&&(i=i.toNonIndexed()),i.deleteAttribute("uv"),i.deleteAttribute("uv1");let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n[s*3]=t[0],n[s*3+1]=t[1],n[s*3+2]=t[2];return i.setAttribute("color",new we(n,3)),i}var _e=(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=1,c=1)=>(i.applyMatrix4(new le().compose(new U(t,e,n),new Ke().setFromEuler(new dn(s,r,o)),new U(a,l,c))),i),Ve=(i,t,e,n=.03,s=1)=>new ns(i,t,e,s,Math.min(n,i/2-.001,t/2-.001,e/2-.001)),ss=i=>i.length?Di(i.map(t=>t.index?t.toNonIndexed():t),!1):null;function O0(i,t){let e=t!=="lo",n=e?72:36,s=e?[2,2,2,3,3,3,3,3,2]:[1,1,1,2,2,2,2,2,1],r=[0];for(let d of s)r.push(r[r.length-1]+d);let o=r[r.length-1]+1,a=2*o-1,l=[];for(let d=0;d<=n;d++)l.push(-i.L/2+i.L*d/n);let c=i.prof.slice().sort((d,g)=>d[0]-g[0]),u=l.map(d=>{for(let g=0;g<c.length-1;g++)if(d<=c[g+1][0])return Nu(c[g][1],c[g+1][1],(d-c[g][0])/(c[g+1][0]-c[g][0]));return c[c.length-1][1]}).slice();for(let d=0;d<3;d++)u=u.map((g,x)=>{let m=0,p=0;for(let v=-2;v<=2;v++){let T=oa(x+v,0,n);m+=u[T],p++}return m/p});let f=[];for(let d=0;d<=n;d++){let g=l[d],x=g/(i.L/2),m=Math.abs(x),p=Math.pow(Math.max(0,1-Math.pow(m,3.6)),1/3.6),v=i.yb+.2*Math.pow(m,4),T=Nu(i.beltR,i.beltF,(g+i.L/2)/i.L),b=Math.max(u[d],T+.1),_=b-T,M=oa((_-.1)/.3,0,1),S=i.w,y=[[0,v],[S-.28,v],[S-.05,v+.06],[S-.005,v+.27],[S+.005,T-.2],[S,T],[S-.01-.05*M,T+.35*_],[S-.07-.14*M,T+.8*_],[(S-.1*M)*.6,b-.012],[0,b]].map(E=>new U(E[0],E[1],0)),w=new br(y,!1,"centripetal"),A=[];for(let E=0;E<s.length;E++)for(let L=0;L<s[E];L++)A.push(w.getPoint((E+L/s[E])/s.length));A.push(w.getPoint(1));let C=new Array(a);for(let E=0;E<o;E++){let L=A[E];C[E]=new U(g,L.y,L.x*p)}for(let E=o;E<a;E++){let L=C[a-1-E];C[E]=new U(g,L.y,-L.z)}for(let E=0;E<a;E++)C[E].x-=Math.sign(g)*.22*B0(.8,1,m)*oa((C[E].y-.4)/.35,0,1);for(let E=0;E<a;E++){let L=C[E];if(!(Math.abs(L.z)<.4))for(let I of[i.axle,-i.axle]){let D=Math.hypot(L.x-I,L.y-i.wr);if(D<i.arch){let F=B0(i.arch,i.arch-.13,D);L.z-=Math.sign(L.z)*.17*F,L.dent=Math.max(L.dent||0,F)}}}f.push(C)}return{P:f,N:n,K:o,R:a,kc:r,xs:l}}function Du(i,t,e,n,s){let{P:r,N:o,R:a}=i,l=[],c=[];for(let S=0;S<=o;S++)for(let y=0;y<a;y++){let w=r[S][y],A=w.y,C=w.z,E=w.x;s&&(C*=s.z,A-=s.y*(A>.6?1:0)),l.push(E,A,C);let L=t?t(S,y,w):[1,1,1];c.push(L[0],L[1],L[2])}let h=new Ee;h.setAttribute("position",new se(l,3)),h.setAttribute("color",new se(c,3));let u=[],f=(S,y)=>S*a+y,d=[];for(let S=0;S<o;S++)for(let y=0;y<a-1;y++){let w=f(S,y),A=f(S+1,y),C=f(S+1,y+1),E=f(S,y+1);d.push(w,A,C,w,C,E)}h.setIndex(d),h.computeVertexNormals();let g=h.attributes.normal.array.slice(),x=f(o>>1,4),m=f((o>>1)+1,4),p=f((o>>1)+1,5),v=r[o>>1][4],T=r[(o>>1)+1][4],b=r[(o>>1)+1][5],M=new U().subVectors(T,v).cross(new U().subVectors(b,v)).z<0!=!!n;for(let S=0;S<o;S++)for(let y=0;y<a-1;y++){if(e&&e.some(L=>S>=L.i0&&S<L.i1&&y>=L.k0&&y<L.k1))continue;let w=f(S,y),A=f(S+1,y),C=f(S+1,y+1),E=f(S,y+1);M?u.push(w,C,A,w,E,C):u.push(w,A,C,w,C,E)}if(h.setIndex(u),M)for(let S=0;S<g.length;S++)g[S]=-g[S];return h.setAttribute("normal",new se(g,3)),h._grid={bad:M},h}function Or(i,t,e,n,s,r,{gap:o=0,off:a=0,rev:l=!1,inward:c=0,colorMul:h=null,holes:u=null}={}){let f=i.R,d=[],g=[],x=[],m=[],p=t.attributes.position.array,v=t.attributes.normal.array,T=t.attributes.color.array,b=(i.P[e][0].x+i.P[n][0].x)/2,_=(i.P[n][0].x-i.P[e][0].x)/2,M=n-e+1,S=r-s+1;for(let A=e;A<=n;A++)for(let C=s;C<=r;C++){let E=(A*f+C)*3,L=p[E],I=p[E+1],D=p[E+2],F=v[E],H=v[E+1],K=v[E+2];o&&(L+=(b-L)*(o/_)),L+=F*a,I+=H*a,D+=K*a,c&&(D-=Math.sign(p[E+2])*c),d.push(L,I,D),g.push(l?-F:F,l?-H:H,l?-K:K);let V=1;h&&(V=h(A-e,C-s,M,S)),x.push(T[E]*V,T[E+1]*V,T[E+2]*V)}let y=(A,C)=>A*S+C;for(let A=0;A<M-1;A++)for(let C=0;C<S-1;C++){if(u&&u.some(H=>e+A>=H.i0&&e+A<H.i1&&s+C>=H.k0&&s+C<H.k1))continue;let E=y(A,C),L=y(A+1,C),I=y(A+1,C+1),D=y(A,C+1);t._grid.bad!==l?m.push(E,I,L,E,D,I):m.push(E,L,I,E,I,D)}let w=new Ee;return w.setAttribute("position",new se(d,3)),w.setAttribute("normal",new se(g,3)),w.setAttribute("color",new se(x,3)),w.setIndex(m),w}function f_(i,t,e,n,s,r){let o=i.R,a=[],l=[],c=[];for(let d=t;d<=e;d++)c.push([d,n]);for(let d=n+1;d<=s;d++)c.push([e,d]);for(let d=e-1;d>=t;d--)c.push([d,s]);for(let d=s-1;d>n;d--)c.push([t,d]);for(let[d,g]of c){let x=i.P[d][g];a.push(x.x,x.y,x.z),a.push(x.x,x.y,x.z-Math.sign(x.z)*r)}let h=c.length;for(let d=0;d<h;d++){let g=(d+1)%h;l.push(d*2,g*2,d*2+1,g*2,g*2+1,d*2+1)}let u=new Ee;u.setAttribute("position",new se(a,3)),u.setIndex(l);let f=u.toNonIndexed();return f.computeVertexNormals(),f}function d_(i,t){let e=i.wr,n=i.ww,s=n/2,r=[[.21,-s+.01],[.27,-s],[e-.045,-s+.005],[e-.012,-s+.045],[e,-s+.09],[e+.002,0],[e,s-.09],[e-.012,s-.045],[e-.045,s-.005],[.27,s],[.21,s-.01]],o=new Sr(r.map(d=>new yt(d[0],d[1])),t);_e(o,0,0,0,Math.PI/2,0,0);let a=[[0,s-.06],[.06,s-.05],[.09,s-.035],[.14,s-.08],[.205,s-.075],[.23,s-.045],[.225,-s+.06],[.21,-s+.05]],l=new Sr(a.map(d=>new yt(d[0],d[1])),t);_e(l,0,0,0,Math.PI/2,0,0);let c=[];for(let d=0;d<5;d++){let g=d/5*Math.PI*2,x=new Qt(.17,.045,.028);_e(x,.14,0,s-.045);let m=new le().makeRotationZ(g);x.applyMatrix4(m),c.push(ue(x))}let h=ss([ue(l),...c]),u=ue(_e(new Dt(.17,.17,.025,20),0,0,0,Math.PI/2,0,0)),f=ue(_e(new Dt(.045,.045,.02,12),0,0,s-.04,Math.PI/2,0,0));return{tire:ue(o),rim:h,brake:ss([u,f])}}function Lc(i={}){var wt,it,lt,Ct,Zt,It;let{style:t="sedan",paint:e="#b01818",detail:n="hi"}=i,s=Uu[t],r=n!=="lo",o=null,a=O0(s,n),{N:l,K:c,R:h,kc:u,xs:f}=a,d=k=>oa(Math.round((k+s.L/2)/s.L*l),0,l),g=k=>h-1-k,x=new Yt,m={paint:new wr({color:e,vertexColors:!0,metalness:.55,roughness:.34,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.2}),dark:new ee({color:"#16161a",roughness:.8,metalness:.1,vertexColors:!0}),trim:new ee({color:"#0d0d10",roughness:.55,metalness:.2,vertexColors:!0}),chrome:new ee({color:"#d8dce2",roughness:.18,metalness:1,vertexColors:!0,envMapIntensity:1.4}),glass:new ee({color:"#0e1822",roughness:.04,metalness:.85,transparent:!0,opacity:.58,envMapIntensity:1.6,depthWrite:!1}),head:new ee({color:"#fff6dc",emissive:"#ffefc2",emissiveIntensity:.55,roughness:.15,vertexColors:!0}),tail:new ee({color:"#8a0707",emissive:"#e01010",emissiveIntensity:1,roughness:.25,vertexColors:!0}),seat:new ee({color:"#c9b79a",roughness:.85,vertexColors:!0}),tire:new ee({color:"#0c0c0d",roughness:.92,vertexColors:!0}),rim:new ee({color:"#c7cbd2",roughness:.22,metalness:1,vertexColors:!0,envMapIntensity:1.3}),brake:new ee({color:"#555a60",roughness:.5,metalness:.8,vertexColors:!0})};m.paintInner=m.dark;let p=s.doors[0],v=s.doors[1]||null,T=[],b=u[2],_=u[7];for(let[k,at,ht]of v?[[p[0],p[1],"front"],[v[0],v[1],"rear"]]:[[p[0],p[1],"front"]]){let St=d(k),z=d(at);T.push({i0:St,i1:z,nm:ht,side:1,k0:b,k1:_},{i0:St,i1:z,nm:ht,side:-1,k0:g(_),k1:g(b)})}let M=d(s.hood[0]),S=d(s.hood[1]),y=d(s.trunk[0]),w=d(s.trunk[1]),A=u[6],C=T.map(k=>({i0:k.i0,i1:k.i1,k0:k.k0,k1:k.k1}));C.push({i0:M,i1:S,k0:A,k1:g(A)},{i0:y,i1:w,k0:A,k1:g(A)});let E=[];E.push({i0:d(s.wind[0])+1,i1:d(s.wind[1])-1,k0:u[8],k1:g(u[8])}),E.push({i0:d(s.rear[0])+1,i1:d(s.rear[1])-1,k0:u[8],k1:g(u[8])}),((k,at)=>{E.push({i0:k,i1:at,k0:u[5]+1,k1:u[7]-1},{i0:k,i1:at,k0:g(u[7]-1),k1:g(u[5]+1)})})(d(s.rear[0])+2,d(v?v[0]:p[0])-1);let I=T.map(k=>({i0:k.i0+1,i1:k.i1-1,k0:k.side>0?u[5]+1:g(u[7]-1),k1:k.side>0?u[7]-1:g(u[5]+1)}));E.forEach(k=>C.push({i0:k.i0,i1:k.i1,k0:k.k0,k1:k.k1}));let D=new Set,F=(k,at,ht,St)=>{for(let z=k;z<=at;z++)D.add(z*h+ht),D.add(z*h+St);for(let z=ht;z<=St;z++)D.add(k*h+z),D.add(at*h+z)};T.forEach(k=>F(k.i0,k.i1,k.k0,k.k1)),F(M,S,A,g(A)),F(y,w,A,g(A));let H=(k,at,ht)=>{let St=1,z=at<=c-1?at:g(at);ht.y<.36?St=.07:ht.y<.5&&(St=Nu(.07,1,(ht.y-.36)/.14)),ht.dent&&(St*=1-.85*ht.dent);let ut=Math.abs(ht.x)/(s.L/2);return ut>.93&&ht.y<.56&&(St=Math.min(St,.09)),ut>.965&&ht.y<.66&&(St=Math.min(St,.09)),D.has(k*h+at)&&(St*=.33),[St,St,St]},K=Du(a,H,C,!1,null),V=new et(K,m.paint);x.add(V);let Z=Du(a,H,null,!1,null);Z._grid=K._grid;let j=(()=>{let k=O0(s,"lo");return Du(k,()=>[.35,.35,.38],null,!0,{z:.93,y:.05})})(),Tt=new et(j,new ee({color:"#2a2a2f",roughness:.9,vertexColors:!0,side:di}));r&&x.add(Tt);let Rt=E.map(k=>Or(a,Z,k.i0,k.i1,k.k0,k.k1+0,{})),ie=new et(ss(Rt.map(k=>ue(k))),m.glass);ie.renderOrder=5,x.add(ie);let re=[];for(let k of T){let at=new Yt,ht=new U(f[k.i1]-.01,0,0),St=a.P[k.i1][k.side>0?u[5]:g(u[5])];ht.y=St.y,ht.z=St.z;let z=(_n,_i,zs,hs)=>_n===0||_n===zs-1||_i===0||_i===hs-1?.33:1,ut=I[T.indexOf(k)],st=Or(a,Z,k.i0,k.i1,k.k0,k.k1,{gap:.012,colorMul:z,holes:[{i0:ut.i0,i1:ut.i1,k0:ut.k0,k1:ut.k1}]}),Mt=k.side>0?u[5]:g(u[5]),At=Or(a,Z,k.i0,k.i1,k.side>0?k.k0:Mt,k.side>0?Mt:k.k1,{gap:.012,rev:!0,inward:.075}),ft=f_(a,k.i0,k.i1,k.side>0?k.k0:Mt,k.side>0?Mt:k.k1,.075),$t=Or(a,Z,ut.i0,ut.i1,ut.k0,ut.k1,{gap:.012}),Ht=ue(Ve(.16,.035,.03,.012),[.9,.9,.9]),Re=(f[k.i0]+f[k.i1])/2+(k.nm==="front"?-.2:.18),Me=a.P[d(Re)][k.side>0?u[5]:g(u[5])];_e(Ht,Re,Me.y-.02,Me.z+k.side*.012);let mn=[ue(st,[1,1,1]),Ht];if(k.nm==="front"){let _n=Me.z+k.side*.1,_i=f[k.i1]-.17,zs=a.P[k.i1][k.side>0?u[6]:g(u[6])].y+.02,hs=ue(Ve(.1,.1,.17,.035,2));_e(hs,_i,zs,_n);let Jr=ue(Ve(.05,.03,.1,.01,1));_e(Jr,_i+.02,zs-.04,_n-k.side*.07),mn.push(hs,Jr)}let kn=new et(ss(mn.map(_n=>_n.attributes.color?_n:ue(_n))),m.paint),_a=new et(ss([ue(At,[.3,.3,.33]),ue(ft,[.18,.18,.2])]),m.dark);_a.material=new ee({color:"#1d1d22",roughness:.9,vertexColors:!0,side:hn});let Ma=new et(ue($t),m.glass);Ma.renderOrder=6;for(let _n of[kn,_a,Ma])_n.geometry.translate(-ht.x,-ht.y,-ht.z),at.add(_n);at.position.copy(ht),x.add(at),re.push({pivot:at,side:k.side,name:k.nm,t:0,max:k.nm==="front"?1.15:1})}let oe=(k,at,ht,St)=>{let z=new Yt,ut=Or(a,Z,k,at,A,g(A),{gap:.01,colorMul:(Ht,Re,Me,mn)=>Ht===0||Ht===Me-1||Re===0||Re===mn-1?.33:1}),st=Or(a,Z,k,at,A,g(A),{gap:.01,rev:!0,off:-.06}),Mt=a.P[ht][c-1].y,At=new U(f[ht],Mt,0),ft=new et(ue(ut),m.paint),$t=new et(ue(st,[.25,.25,.28]),new ee({color:"#202026",roughness:.9,vertexColors:!0,side:hn}));for(let Ht of[ft,$t])Ht.geometry.translate(-At.x,-At.y,-At.z),z.add(Ht);return z.position.copy(At),x.add(z),{pivot:z,sign:St,t:0,max:.95}},B=oe(M,S,M,1),q=oe(y,w,w,-1),mt=[],Lt=[],_t=[],zt=[],qt=[],ot=[],ct=(k,at)=>{let ht=a.P[d(k)],St=ht[0],z=9;for(let ut=0;ut<c;ut++){let st=Math.abs(ht[ut].y-at)+(ht[ut].z<.3?9:0);st<z&&(z=st,St=ht[ut])}return St.z};for(let k of[1,-1]){for(let Mt of[s.axle,-s.axle]){let At=new Fn;At.absarc(0,0,s.arch+.02,-.15,Math.PI+.15,!1),At.closePath();let ft=new zo(At,14),$t=ct(Mt,s.wr+.1)+k*.012;k<0&&ft.rotateY(Math.PI),_e(ft,Mt,s.wr,k*Math.abs($t)),ft.rotateY(0),mt.push(ue(ft,[.5,.5,.5]))}let at=s.L/2-.3,ht=(wt=s.hly)!=null?wt:.64,St=ue(new ve(.12,14,8));_e(St,0,0,0,0,0,0,.8,.55,1.5),St.rotateY(k*-.5),_e(St,at,ht,k*(s.w*.66)),Lt.push(St);let z=ue(new Ie(.15,.012,6,18));_e(z,0,0,0,0,0,0,1,.55,1.5),z.rotateY(k*-.5),_e(z,at,ht,k*(s.w*.66)),zt.push(z);let ut=ue(Ve(.07,.11,.42,.025));ut.rotateY(k*.4),_e(ut,-s.L/2+.34,s.beltR+.02,k*(s.w*.58)),_t.push(ut);let st=ue(new Dt(.04,.04,.16,10));_e(st,-s.L/2+.2,s.yb+.16,k*.55,0,0,Math.PI/2),zt.push(st)}let dt=((it=s.hly)!=null?it:.64)-.64,rt=s.yb-.27-(s.twoDoor?.07:0);mt.push(ue(Ve(.07,.13,.62,.025),[1,1,1])&&_e(ue(Ve(.07,.13,.62,.025)),s.L/2-.04,.6+dt,0)),mt.push(_e(ue(Ve(.07,.1,.9,.03)),s.L/2-.12,.38+dt*.5,0)),zt.push(_e(ue(Ve(.06,.02,.62,.008)),s.L/2-.035,.675+dt,0)),zt.push(_e(ue(Ve(.012,.02,.62,.008)),s.L/2-.04,.54+dt,0));let gt=(k,at)=>{let ht=ue(Ve(.012,.12,.34,.006,1),[.95,.95,.9]);return _e(ht,k,.42+dt*.5,0),ht};zt.push(gt(s.L/2-0)),zt.push(gt(-s.L/2+0));let xt=ue(Ve(2.6,.04,1.2,.01,1),[.18,.18,.2]);_e(xt,-.35,.33,0),qt.push(xt);let Pt=(k,at,ht)=>{let St=ue(Ve(.5,.14,.5,.05),ht);_e(St,k,.43,at);let z=ue(Ve(.12,.62,.5,.05),ht);_e(z,k-.2,.74,at,0,0,-.16);let ut=ue(Ve(.1,.17,.26,.04),ht);return _e(ut,k-.27,1.14,at,0,0,-.16),[St,z,ut]};for(let k of[.38,-.38])qt.push(...Pt(s.seatX[0],k,[.78,.7,.58]));s.twoDoor?qt.push(_e(ue(Ve(.5,.14,1.2,.05),[.74,.66,.54]),s.seatX[1],.43,0)):(qt.push(...Pt(s.seatX[1],0,[.74,.66,.54])),qt.push(_e(ue(Ve(.5,.14,1.2,.05),[.74,.66,.54]),s.seatX[1],.43,0)));let Ut=ue(Ve(.45,.2,1.5,.07),[.12,.12,.14]);_e(Ut,(lt=s.dashX)!=null?lt:.62,s.beltF+.16-(s.yb-.27),0,0,0,0),qt.push(Ut);let Gt=ue(Ve(1.4,.16,.22,.05),[.14,.14,.16]);_e(Gt,0,.42,0),qt.push(Gt);let O=new Ie(.17,.02,8,18);_e(O,.38,1,.38,0,Math.PI/2,0),O.rotateZ(0),_e(O,0,0,0,0,0,0),O.translate(-.38,-1,-.38),O.rotateZ(.5),O.translate(.38,1,.38),qt.push(ue(O,[.1,.1,.1]));let ge=ue(new Dt(.02,.02,.3,8),[.1,.1,.1]);_e(ge,.46,.93,.38,0,0,1),qt.push(ge),qt.push(_e(ue(Ve(.8,.28,.9,.06),[.2,.2,.22]),(Ct=s.bayX)!=null?Ct:1.55,.52,0)),qt.push(_e(ue(Ve(.3,.2,.34,.03),[.55,.1,.1]),((Zt=s.bayX)!=null?Zt:1.55)+.4,.52,-.3)),qt.push(_e(ue(Ve(.5,.04,1,.01,1),[.16,.16,.17]),(It=s.bootX)!=null?It:-1.88,.56,0));for(let k of qt)k.translate(0,rt,0);let ce=[];if(i.extra==="police"||i.extra==="taxi"){let k=s.prof.reduce((ht,St)=>Math.max(ht,St[1]),0),at=-.05;if(i.extra==="police"){let ht=ue(Ve(.22,.07,1.1,.025,1),[.08,.08,.1]);_e(ht,at,k+.04,0),zt.push(ue(Ve(.01,.01,.01,.004))),x.add(Object.assign(new et(ss([ht]),m.trim)));for(let[St,z]of[[-.3,[.9,.05,.05]],[.3,[.1,.2,1]]]){let ut=ue(Ve(.2,.06,.46,.02,1),z);_e(ut,at,k+.1,St),ce.push(ut)}}else{let ht=ue(Ve(.22,.12,.5,.05,1),[1,.95,.75]);_e(ht,at,k+.08,0),ce.push(ht)}}let N=(k,at)=>{if(!k.length)return;let ht=new et(ss(k),at);return x.add(ht),ht};if(ce.length){let k=new et(ss(ce),new ee({color:"#ffffff",vertexColors:!0,emissive:"#ffffff",emissiveIntensity:.6,roughness:.3}));x.add(k),o=k}N(mt,m.trim),N(Lt,m.head),N(_t,m.tail),N(zt,m.chrome),N(qt,m.seat);let R=r?28:14,W=d_(s,R),Y=[];for(let[k,at,ht]of[[s.axle,1,!0],[s.axle,-1,!0],[-s.axle,1,!1],[-s.axle,-1,!1]]){let St=new Yt,z=new Yt,ut=new Yt;{let st=Math.abs(k)/(s.L/2),Mt=s.w*Math.pow(Math.max(0,1-Math.pow(st,3.6)),1/3.6);St.position.set(k,s.wr,at*(Mt-.03-s.ww/2))}St.add(z),z.add(ut),at<0&&(z.rotation.y=Math.PI),ut.add(new et(W.tire,m.tire),new et(W.rim,m.rim),new et(W.brake,m.brake)),x.add(St),Y.push({steer:St,spin:ut,front:ht,flip:at<0})}x.traverse(k=>{k.isMesh&&(k.castShadow=!0,k.receiveShadow=k.material!==m.glass)});let nt=0;return x.traverse(k=>{if(k.isMesh){let at=k.geometry;nt+=(at.index?at.index.count:at.attributes.position.count)/3}}),{group:x,doors:re,hood:B,trunk:q,wheels:Y,tris:Math.round(nt),mats:m,setDoor(k,at){let ht=re[k];ht.t=at,ht.pivot.rotation.y=ht.side*at*ht.max},setLid(k,at){k.t=at,k.pivot.rotation.z=k.sign*at*k.max},steer(k){for(let at of Y)at.front&&(at.steer.rotation.y=k)},spin(k){for(let at of Y)at.spin.rotation.z=at.flip?k:-k},setColor(k){m.paint.color.set(k)},lamp:o,style:s}}var An=(i,t,e)=>i<t?t:i>e?e:i,aa=[{id:11,name:"Sedan",style:"sedan",paint:"#b3262b",mass:1380,kW:80,top:50,mu:1,drive:"fwd",cda:.66,cyl:4,pitch:1,hornHz:420},{id:12,name:"Hatchback",style:"hatch",paint:"#2f6fb5",mass:1080,kW:62,top:44,mu:1,drive:"fwd",cda:.62,cyl:3,pitch:1.2,hornHz:480},{id:13,name:"SUV",style:"suv",paint:"#2d3b4a",mass:2050,kW:125,top:49,mu:.95,drive:"rwd",cda:.95,cyl:6,pitch:.8,hornHz:360},{id:14,name:"Taxi",style:"sedan",extra:"taxi",paint:"#f0c400",mass:1420,kW:72,top:46,mu:1,drive:"fwd",cda:.66,cyl:4,pitch:.95,hornHz:440},{id:15,name:"Police",style:"sedan",extra:"police",paint:"#f2f2f2",mass:1650,kW:150,top:58,mu:1.05,drive:"rwd",cda:.68,cyl:8,pitch:.75,hornHz:400},{id:16,name:"Coupe",style:"coupe",paint:"#c9a227",mass:1500,kW:175,top:63,mu:1.1,drive:"rwd",cda:.62,cyl:6,pitch:.85,hornHz:450},{id:17,name:"Sports",style:"sports",paint:"#e8e8ea",mass:1380,kW:330,top:84,mu:1.2,drive:"rwd",cda:.58,cyl:8,pitch:.95,hornHz:480},{id:18,name:"Old Sedan",style:"sedan",paint:"#4e6a52",mass:1450,kW:66,top:42,mu:.95,drive:"fwd",cda:.7,cyl:4,pitch:.9,hornHz:400}],la=i=>aa[i-11],k0={sedan:{L:4.6,w:1.85,wb:2.72},hatch:{L:3.95,w:1.74,wb:2.4},suv:{L:4.7,w:2,wb:2.84},coupe:{L:4.5,w:1.86,wb:2.72},sports:{L:4.45,w:1.94,wb:2.68}};function G0(i,t){let e=k0[t.style];return Object.assign(i,{yr:0,vl:0,ax:0,ay:0,rpm:.12,gear:1,load:0,skid:0,wheelPh:0,rollA:0,pitchA:0,surf:0,shiftT:0,brake:0,hl:e.L/2,hw:e.w/2}),i}function V0(i,t,e,n,s,r,o){let a=k0[r.style],l=r.mass,c=a.wb,h=c*.46,u=c-h,f=.55,d=l*Math.pow(.42*c,2),g="",x=Math.max(1,Math.ceil(t/(1/120))),m=t/x;for(let p=0;p<x;p++)g=p_(i,m,e,n,s,r,a,l,c,h,u,f,d,o)||g;return g}function p_(i,t,e,n,s,r,o,a,l,c,h,u,f,d){let g=Math.sin(i.yaw),x=Math.cos(i.yaw),m=-x,p=g,v=i.vx*g+i.vz*x,b=-(i.vx*m+i.vz*p),_=!!i.air,M=d?d(i):!0,S=r.mu*(M?1:.85)*(i.slick>0?.3:1),y=e.gas;i.steer+=(e.steer-i.steer)*Math.min(1,t*(Math.abs(e.steer)<.01?12:16));let w=Math.abs(v),A=Math.min(.6,70/Math.max(1,w*w)),C=-i.steer*A,E=0,L=0;y>.01?v<-.8?L=y:E=y:y<-.01&&(v>.8?L=-y:E=y);let I=r.kW*1300,D=Math.atan((b-h*i.yr)/(v>=0?Math.max(v,.5):Math.min(v,-.5)));E>0&&Math.abs(v)>2&&!e.hb&&(E*=1-An((Math.abs(D)-.09)/.14,0,.9));let F=0;E>0?(F=Math.min(I/Math.max(v,1.4),a*9.81*S*(r.drive==="rwd"?c/l+.1:h/l)*1)*E,F*=v>r.top*1.02?0:1):E<0&&(F=v>-4.2?-Math.min(I*.3/Math.max(-v,1.2),a*2.2)*-E:0);let H=L*a*9.81*S*.95+(e.hb?a*9.81*S*.35:0),K=.5*1.2*r.cda*v*Math.abs(v),V=(.013+(M?0:.03))*a*9.81*Math.sign(v||0)*Math.min(1,Math.abs(v)/.5),Z=(i.gx||0)*g+(i.gz||0)*x,j=a*9.81*Z/Math.sqrt(1+Z*Z),Tt=F-K-V-j-Math.sign(v||0)*Math.min(H,Math.abs(v)*a/t*.98),Rt=i.ax,ie=An(a*9.81*h/l-a*Rt*u/l,a*9.81*.15,a*9.81*.85),re=a*9.81-ie,oe=v>=0?Math.max(v,.5):Math.min(v,-.5),B=Math.atan((b+c*i.yr)/oe)-C,q=Math.atan((b-h*i.yr)/oe),mt=r.drive==="fwd"?An(Math.abs(F)/Math.max(1,S*ie),0,.95):0,Lt=r.drive==="rwd"?An(Math.abs(F)/Math.max(1,S*re),0,.95):0,_t=An(L*.6,0,.9),zt=An(L*.4+(e.hb?.7:0),0,.97),qt=Math.sqrt(Math.max(.08,1-Math.max(mt,_t)**2)),ot=Math.sqrt(Math.max(.05,1-Math.max(Lt,zt)**2)),ct=1.45,dt=S*ct*ie*qt,rt=S*ct*re*ot*(e.hb?.5:1),gt=17,xt=-dt*Math.tanh(gt*B),Pt=-rt*Math.tanh(gt*q);_&&(xt=Pt=0);let Ut=An(Math.abs(v)/2.5,.12,1);xt*=Ut,Pt*=Ut;let Gt=Math.cos(C),O=Math.sin(C),ge=(xt*Gt+Pt)/a,ce=(Tt-xt*O)/a,N=(c*xt*Gt-h*Pt)/f;if(_&&(N=0),!_&&!e.hb&&Math.abs(v)>3&&(N-=Math.sign(i.yr)*Math.max(0,Math.abs(D)-.12)*5*(Math.abs(e.steer)>.05?.6:1.2)*(i.yr*D>0?1:.2)),i.yr+=N*t,i.yr*=Math.exp(-.5*t),!_&&Math.abs(v)>1.2){let at=S*9.81*1.35/Math.abs(v),ht=An(v*Math.tan(C)/l,-at,at);i.yr+=(ht-i.yr)*Math.min(1,t*(M?7:5.5))}let R=ce+b*i.yr,W=ge-v*i.yr;_&&(R=-K/a,W=0),v+=R*t;let Y=b+W*t;Math.abs(v)<.15&&E===0&&(L>.01||Math.abs(j)<a*9.81*.06)&&(v=0);let nt=An(1-Math.abs(v)/2.5,0,1),bt=Y*(1-nt)+0*nt;nt>0&&!_&&(i.yr+=(v*Math.tan(C)/l-i.yr)*Math.min(1,t*12)*nt),_||(bt*=Math.exp(-((M?1.8:1.5)*(e.hb?.15:1))*t));let wt=-bt;i.yaw+=i.yr*t;let it=Math.sin(i.yaw),lt=Math.cos(i.yaw),Ct=-lt,Zt=it;i.vx=it*v+Ct*wt,i.vz=lt*v+Zt*wt,i.x+=i.vx*t,i.z+=i.vz*t,i.ax+=(ce-i.ax)*Math.min(1,t*6),i.ay+=(ge-i.ay)*Math.min(1,t*6),i.speed=v;let It=Math.max(Math.abs(q),Math.abs(B)*.8);i.vl=bt,i.skid+=(An((It-.08)/.15,0,1)*An(Math.abs(v)/5,0,1)-i.skid)*Math.min(1,t*12),L>.6&&Math.abs(v)>12&&!e.hb&&(i.skid=Math.max(i.skid,An(L*(Math.abs(v)-8)/30,0,.5))),i.drift=An(Math.abs(bt)/4,0,1),i.brake=L,i.load=Math.max(0,E),i.wheelPh+=v/.34*t;{let at=[.2,.36,.54,.76,1.02].map(At=>At*r.top),ht=i.gear,St=Math.abs(v),z=i.gear;z<5&&St>at[z-1]*.96?z++:z>1&&St<at[z-2]*.62&&z--,z!==ht&&(i.gear=z,i.shiftT=z>ht?.22:.1);let ut=z>1?at[z-2]*.62:0,st=(St-ut)/Math.max(1,at[z-1]*.96-ut),Mt=.16+.84*An(st,0,1);i.shiftT>0&&(i.shiftT-=t,Mt=Math.max(.2,Mt-.25)),E===0&&St<.5&&(Mt=.12),i.rpm+=(Mt-i.rpm)*Math.min(1,t*(E>0?9:5))}let k="";n.terrain&&(k=x_(i,t,n,r,o));for(let at of s||[])k=y_(i,at,r,o,a,f)||k;return k}function Fu(i,t){let e=t.w*.5-.06,n=t.L*.5-e-.1,s=Math.sin(i.yaw),r=Math.cos(i.yaw),o=[];for(let a of[-1,-1/3,1/3,1])o.push({x:i.x+s*n*a,z:i.z+r*n*a,off:n*a,r:e});return o}function W0(i,t,e,n,s,r,o,a){let l=i.vx+i.yr*s,c=i.vz-i.yr*n,h=l*t+c*e;if(h>=0)return 0;let u=n*e-s*t,f=-(1+a)*h/(1/r+u*u/o);return i.vx+=t*f/r,i.vz+=e*f/r,i.yr-=u*f/o,-h}var m_=i=>i.props?i._all||(i._all=[...i.boxes||[],...i.props]):i.boxes||[],H0=-.35,g_=352;function x_(i,t,e,n,s){let r=e.terrain,o="",a=n.mass,l=a*Math.pow(.48*(s.wb||2.7),2),c=Math.sin(i.yaw),h=Math.cos(i.yaw);for(let x=0;x<2;x++)for(let m of Fu(i,s))for(let p of m_(e)){if(i.y>p.h-.4||m.x<p.x0-2||m.x>p.x1+2||m.z<p.z0-2||m.z>p.z1+2)continue;let v=Math.max(p.x0,Math.min(p.x1,m.x)),T=Math.max(p.z0,Math.min(p.z1,m.z)),b=m.x-v,_=m.z-T,M=Math.hypot(b,_),S,y,w;if(M>1e-4){if(S=b/M,y=_/M,w=m.r-M,w<=0)continue}else{let C=m.x-p.x0,E=p.x1-m.x,L=m.z-p.z0,I=p.z1-m.z,D=Math.min(C,E,L,I);w=m.r+D,D===C?(S=-1,y=0):D===E?(S=1,y=0):D===L?(S=0,y=-1):(S=0,y=1)}i.x+=S*w,i.z+=y*w,m.x+=S*w,m.z+=y*w;let A=W0(i,S,y,m.x-i.x,m.z-i.z,a,l,.18);A>0&&(i.vx*=.985,i.vz*=.985,A>4&&(o=A>11?"crash":"bump",i.crash=Math.max(i.crash||0,A)))}let u=e.edge||g_;Math.abs(i.x)>u&&(i.x=Math.sign(i.x)*u,i.vx*=-.3),Math.abs(i.z)>u&&(i.z=Math.sign(i.z)*u,i.vz*=-.3),r(i.x+c*2.5,i.z+h*2.5)<H0&&r(i.x,i.z)<H0+.6&&(i.vx*=-.35,i.vz*=-.35,i.x+=i.vx*t*3,i.z+=i.vz*t*3,o=o||"bump",i.bump=8);let f=r(i.x,i.z),d=Math.hypot(i.vx,i.vz),g=i.y;if(i.gx=(r(i.x+1.5,i.z)-r(i.x-1.5,i.z))/3,i.gz=(r(i.x,i.z+1.5)-r(i.x,i.z-1.5))/3,i.air){if(i.vy-=9.81*t,i.y+=i.vy*t,i.y<=f){let x=-i.vy;if(i.y=f,i.air=!1,i.vy=0,i.vyg=0,x>5){o=x>10?"crash":"bump",i.crash=Math.max(i.crash||0,x);let m=Math.max(.6,1-x*.012);i.vx*=m,i.vz*=m}}i.pitch+=(Math.atan2(i.vy,Math.max(8,d))*.8-i.pitch)*Math.min(1,t*4)}else{let x=(f-g)/Math.max(t,.001);if(i.vyg+=(x-i.vyg)*Math.min(1,t*18),f<g-.12-d*.0025)i.air=!0,i.vy=Math.max(i.vyg,0),i.y=g;else{i.y=f;let m=i.gx*c+i.gz*h;i.pitch+=(Math.atan(m)-i.pitch)*Math.min(1,t*12)}}return i.air=i.air&&i.y>f+1e-4,o}function y_(i,t,e,n,s,r){if((i.x-t.x)**2+(i.z-t.z)**2>40||Math.abs((t.y||0)-i.y)>2.5)return"";let o=t.hl?{w:t.hw*2,L:t.hl*2,wb:2.7}:n,a=Fu(i,n),l=Fu(t,o),c=null;for(let T of a)for(let b of l){let _=T.x-b.x,M=T.z-b.z,S=Math.hypot(_,M),y=T.r+b.r-S;y>0&&(!c||y>c.pen)&&(c={pen:y,nx:S>1e-4?_/S:Math.sin(i.yaw),nz:S>1e-4?M/S:Math.cos(i.yaw),px:T.x,pz:T.z})}if(!c)return"";let h=t.driver===-1||t.parked||t.heavy,u=h?1:.55;i.x+=c.nx*c.pen*u,i.z+=c.nz*c.pen*u;let f=c.px-i.x,d=c.pz-i.z,g=t.vx||0,x=t.vz||0,m=i.vx,p=i.vz;i.vx-=g,i.vz-=x;let v=W0(i,c.nx,c.nz,f,d,h?s:s*1,r,.25)*(h?1:.6);return i.vx+=g,i.vz+=x,v>0&&(i.vx*=.99,i.vz*=.99),v>9?"crash":v>3.5?"bump":""}var Ou=new U(1e6,0,0),X0=i=>Ou.copy(i),zu=(i,t,e)=>i<t?t:i>e?e:i,Bu=null;function v_(){if(!Bu){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,32);e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Bu=new nn(i)}return Bu}function __(i){i.updateMatrixWorld(!0);let t=new Map;i.traverse(n=>{if(!n.isMesh)return;let s=n.material,r=[s.type,s.color?s.color.getHex():0,s.opacity,s.side,s.emissiveIntensity,s.transparent].join("|"),o=t.get(r);o||(o={m:s,geos:[]},t.set(r,o));let a=n.geometry.clone();a.index&&(a=a.toNonIndexed()),a.applyMatrix4(n.matrixWorld),o.geos.push(a)});let e=new Yt;for(let n of t.values()){let s=Di(n.geos,!1);if(!s)continue;let r=new et(s,n.m);r.castShadow=!0,r.receiveShadow=!n.m.transparent,n.m.transparent&&(r.renderOrder=5),e.add(r)}return e}function Hu(i,t=!1,e=!1){let n=la(i),s=Uu[n.style],r={style:n.style,paint:n.paint,extra:n.extra},o=t||e?Lc({...r,detail:"lo"}):null,a=o&&(t||e)?o:Lc({...r,detail:"hi"}),l=new Yt,c=new Yt,h=new Yt,u=__((o||Lc({...r,detail:"lo"})).group);h.rotation.y=-Math.PI/2,e?h.add(u):h.add(a.group,u),l.add(h),u.visible=e;let f=new et(new We(s.L*1.25,s.w*3.1),new Te({map:v_(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));f.rotation.x=-Math.PI/2,f.rotation.z=Math.PI/2,f.position.y=.03,l.add(f);let d=s.yb-.27-(s.twoDoor?.07:0);return l.userData={hero:a,spec:n,baked:u,bakedOnly:e,full:a.group,wheels:[],pivots:[],seat:{z:s.seatX[0],y:.13+d},seatF:s.seatX[0],seatR:.38,seatY:.14+d,seatS:Math.max(.8,Math.min(1,(Math.max(...s.prof.map(g=>g[1]))-.07-(.14+d))/1.2)),lamp:a.lamp,ph:0,door:0,doorT:9,lastDrv:-1,roll:0,pit:0,yawP:null,yr:0},l}function q0(i,t,e){let n=i.userData,s=n.hero,r=n.spec;{let m=i.position.x-Ou.x,p=i.position.z-Ou.z,v=m*m+p*p,T=!n.bakedOnly&&(t.driver!==-1||v<(n.near?676:361));if((T!==!!n.near||n.near===void 0)&&(n.near=T,n.full.visible=T,n.baked.visible=!T),!T){i.rotation.z=0,i.rotation.x=-(t.pitch||0);return}}let o=t.speed||0,a=t.yaw;n.yawP===null&&(n.yawP=a);let l=(a-n.yawP+Math.PI*3)%(Math.PI*2)-Math.PI;n.yawP=a;let c=t.ownd?t.yr:l/Math.max(e,.001);n.yr+=(zu(c,-3,3)-n.yr)*Math.min(1,e*8);let h=t.ownd?t.ay:o*n.yr,u=t.ownd?t.ax:(o-(n.sp||o))/Math.max(e,.001);n.sp=o,n.ph+=o/.34*e,s.spin(n.ph);let f=Math.min(.58,26/Math.max(1,o*o));s.steer(-(t.steer||0)*f),n.roll+=(zu(h*.0065,-.075,.075)-n.roll)*Math.min(1,e*9),n.pit+=(zu(-u*.0042,-.05,.05)-n.pit)*Math.min(1,e*9),i.rotation.z=n.roll,i.rotation.x=-(t.pitch||0)+n.pit,t.driver!==n.lastDrv&&(n.lastDrv=t.driver,n.doorT=0),n.doorT+=e;let d=n.doorT,g=d<.35?d/.35:d<1.5?1:d<2?1-(d-1.5)/.5:0,x=g*g*(3-2*g);if(x!==n.door&&(n.door=x,s.setDoor(0,x)),s.lamp&&s.lamp.material&&r.extra==="police"){let m=Math.floor(performance.now()/160)%2;s.lamp.material.emissiveIntensity=t.driver!==-1?m?1.4:.2:.35}}function Y0(i,t){let e=Hu(i,!0,!0);return t&&e.userData.hero.setColor(t),e}var Se={HALF:380,SEA:-1.2,GRID:[-120,-60,0,60,120],HW:6.5,MT:{cx:-215,cz:-215,R:105,H:56,Rt:20,T:2.6,th0:Math.PI/4},HWY:{ax:120,bx:300,z:0}},Hr=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)},ku=(i,t,e)=>i+(t-i)*e,Rs=Math.PI*2,M_=[[210,-210,70,21],[235,205,62,14],[-205,215,66,16],[40,-300,60,11],[-40,300,55,9]],b_=(i,t)=>Math.sin(i*.043+1.3)*Math.cos(t*.051+.4)*.6+Math.sin((i+t)*.09+2)*.3+Math.sin(i*.17)*Math.sin(t*.15)*.1,kr=i=>{let t=Se.MT;return i>=t.R?0:t.H*Math.pow(1-Math.max(i,t.Rt)/t.R,1.25)},Dc=i=>{let t=Se.MT,e=t.R+(t.Rt-t.R)*i,n=t.th0+i*t.T*Rs;return{x:t.cx+e*Math.cos(n),z:t.cz+e*Math.sin(n),r:e,y:kr(e)}};function Cs(i,t){let e=Se.MT,n=i-e.cx,s=t-e.cz,r=Math.hypot(n,s),o=Math.max(Math.abs(i),Math.abs(t)),a=Hr(e.R+25,e.R+5,r),l=Hr(150,215,o),c=6.2*Hr(300,395,o),h=0;for(let[d,g,x,m]of M_){let p=Math.hypot(i-d,t-g)/x;h+=m*Math.exp(-p*p)}let u=(1-a)*(l*(h+b_(i,t)*1.1)-c),f=u+kr(r);if(r<e.R+22){let d=Math.atan2(s,n),g=1e9,x=0;for(let m=-1;m<=2;m++){let v=(((d-e.th0)%Rs+Rs)%Rs+m*Rs)/(e.T*Rs);if(v<0||v>1)continue;let T=e.R+(e.Rt-e.R)*v,b=Math.abs(r-T);b<g&&(g=b,x=kr(T))}if(g<Se.HW+14){let m=1-Hr(Se.HW+2.5,Se.HW+14,g);f=ku(f,u+x,m)}}{let d=Se.HWY,g=Math.abs(t-d.z),x=i<d.ax?d.ax-i:i>d.bx?i-d.bx:0,m=Math.hypot(g,x);i>d.ax-10&&m<26&&(f=ku(f,0,1-Hr(Se.HW+2.5,Se.HW+16,m)));let p=Math.hypot(i-d.bx,t-d.z);p<34&&(f=ku(f,0,1-Hr(15,30,p)))}return f}var _S=Math.PI/2,Gu=[];function E_(i,t){let e=0;for(let[n,s,r,o,a,l]of Gu){let c=i-n,h=t-s;if(c*c+h*h>(o+l)*(o+l))continue;let u=c*Math.sin(r)+h*Math.cos(r),f=c*Math.cos(r)-h*Math.sin(r);u<0||u>o||Math.abs(f)>l/2||(e=Math.max(e,a*u/o))}return e}var rs=(i,t)=>Cs(i,t)+E_(i,t);function Z0(){let i=[],t=[],e=Se.GRID,n=Se.HW;for(let a of e)i.push({ax:a,az:-120,bx:a,bz:120,hw:n,y0:0,g:"x"+a}),i.push({ax:-120,az:a,bx:120,bz:a,hw:n,y0:0,g:"z"+a});i.push({ax:-120,az:-120,bx:-140.8,bz:-140.8,hw:n,y0:0,g:"link"});let s=Se.MT,r=(s.R+s.Rt)/2*s.T*Rs,o=Math.ceil(r/7);for(let a=0;a<o;a++){let l=Dc(a/o),c=Dc((a+1)/o);i.push({ax:l.x,az:l.z,bx:c.x,bz:c.z,hw:n,y0:l.y,y1:c.y,g:"mt"})}return t.push({x:s.cx,z:s.cz,r:20,y:kr(s.Rt),g:"summit"}),i.push({ax:Se.HWY.ax,az:0,bx:Se.HWY.bx,bz:0,hw:n,y0:0,g:"hwy"}),t.push({x:Se.HWY.bx,z:0,r:14,y:0,g:"lookout"}),{segs:i,plazas:t,boosts:[]}}function S_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var Gr=[[90,90],[-90,30]];function $0(){let i=S_(4242),t=[],e=["#e8c9a0","#cfd8e3","#e89c8a","#a8c5e8","#f1e0a6","#b9d9b0","#d9b8e0","#f0b27a","#9fb4c8"];for(let s of[-90,-30,30,90])for(let r of[-90,-30,30,90]){if(Gr.some(l=>l[0]===s&&l[1]===r))continue;let o=Math.max(Math.abs(s),Math.abs(r)),a=o<=30?0:o<=60?1:2;for(let[l,c]of[[-11.5,-11.5],[11.5,-11.5],[-11.5,11.5],[11.5,11.5]]){let h=12+i()*7,u=12+i()*7,f=a===0?38+i()*42:a===1?16+i()*26:8+i()*14;t.push({x:s+l+(i()-.5)*1.5,z:r+c+(i()-.5)*1.5,w:h,d:u,h:f,col:e[Math.floor(i()*e.length)],zone:a})}}let n=t.find(s=>s.x>30&&s.x<45&&s.z>30&&s.z<45);return n&&(n.h=118,n.w=17,n.d=17,n.col="#7fb6e6",n.tower=!0),t}function J0(){return[[11,-30,-5],[12,-22,-5],[13,-14,-5],[14,12,5],[15,21,5],[16,30,5],[17,-38,5],[18,40,-5]].map(([i,t,e])=>({id:i,x:t,z:e,yaw:e>0?-Math.PI/2:Math.PI/2}))}var K0=[{x0:-60,x1:60,z0:-60,z1:60,n:4,sp:9},{x0:-120,x1:120,z0:-120,z1:120,n:5,sp:12}];function Vu(i,t,e){let s=i.x0+3.25,r=i.x1-3.25,o=i.z0+3.25,a=i.z1-3.25,l=r-s,c=a-o,h=2*(l+c),u=((e*i.sp+t*h/i.n)%h+h)%h,f,d,g;return u<l?(f=r-u,d=o,g=-Math.PI/2):(u-=l)<c?(f=s,d=o+u,g=0):(u-=c)<l?(f=s+u,d=a,g=Math.PI/2):(u-=l,f=r,d=a-u,g=Math.PI),{x:f,z:d,yaw:g,vx:Math.sin(g)*i.sp,vz:Math.cos(g)*i.sp}}var Ni=new Ot;function Xu(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var Vr=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function j0(i){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle=i?"#c9d3df":"#ffffff",n.fillRect(0,0,128,128);let s=i?6:26,r=i?10:22,o=128-s*2,a=i?86:78;n.fillStyle="rgba(0,0,0,0.22)",n.fillRect(s-3,r-3,o+6,a+10),n.fillStyle=i?"#5b6676":"#e9e4dc",n.fillRect(s-2,r-2,o+4,a+4);let l=n.createLinearGradient(0,r,0,r+a);l.addColorStop(0,i?"#7fb2e0":"#a9d3f5"),l.addColorStop(.55,i?"#2f5f8f":"#6b9dc9"),l.addColorStop(1,i?"#1d3a58":"#4a6f94"),n.fillStyle=l,n.fillRect(s,r,o,a),n.fillStyle="rgba(255,255,255,0.28)",n.beginPath(),n.moveTo(s,r+a*.6),n.lineTo(s+o*.55,r),n.lineTo(s+o*.8,r),n.lineTo(s,r+a*.95),n.fill(),n.fillStyle=i?"#5b6676":"#e9e4dc",n.fillRect(128/2-1.5,r,3,a),i||n.fillRect(s,r+a*.46,o,3),i||(n.fillStyle="#bdb6aa",n.fillRect(s-6,r+a+3,o+12,5),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(s-6,r+a+8,o+12,4));let c=new nn(e);return c.wrapS=c.wrapT=Ri,c.colorSpace=Ne,c.anisotropy=8,c}function Wu(i,t,e,n,s,r={}){let o=Xu(s),a=16,l=Array.from({length:a*a},()=>o()),c=document.createElement("canvas");c.width=c.height=i;let h=c.getContext("2d");if(!h||!h.createImageData)return new cn;let u=h.createImageData(i,i);if(!u||!u.data)return new cn;let f=(g,x)=>l[(x%a+a)%a*a+(g%a+a)%a];for(let g=0;g<i;g++)for(let x=0;x<i;x++){let m=x/i*a,p=g/i*a,v=Math.floor(m),T=Math.floor(p),b=m-v,_=p-T,M=b*b*(3-2*b),S=_*_*(3-2*_),y=f(v,T)*(1-M)*(1-S)+f(v+1,T)*M*(1-S)+f(v,T+1)*(1-M)*S+f(v+1,T+1)*M*S,w=Math.max(0,Math.min(255,t+(y-.5)*e+(o()-.5)*n)),A=(g*i+x)*4;u.data[A]=u.data[A+1]=u.data[A+2]=w,u.data[A+3]=255}if(h.putImageData(u,0,0),r.cracks){h.strokeStyle="rgba(10,10,14,0.2)",h.lineWidth=1.2;for(let g=0;g<r.cracks;g++){let x=o()*i,m=o()*i;h.beginPath(),h.moveTo(x,m);for(let p=0;p<7;p++)x+=(o()-.5)*38,m+=(o()-.3)*30,h.lineTo(x,m);h.stroke()}}if(r.patches)for(let g=0;g<r.patches;g++)h.fillStyle=`rgba(0,0,0,${.06+o()*.08})`,h.beginPath(),h.ellipse(o()*i,o()*i,8+o()*30,4+o()*14,o()*3,0,7),h.fill();let d=new nn(c);return d.wrapS=d.wrapT=Ri,d.colorSpace=Ne,d.anisotropy=4,d}function Q0(i){let t=new Qt(i.w,i.h,i.d),e=t.attributes.uv,n=t.attributes.normal;for(let a=0;a<e.count;a++){let l=n.getY(a),c=Math.abs(n.getX(a)),h=e.getX(a),u=e.getY(a);if(Math.abs(l)>.5){e.setXY(a,.02+h*.05,.02+u*.05);continue}let f=c>.5?i.d:i.w;e.setXY(a,h*f/4.2,u*i.h/3.6)}t.translate(i.x,i.h/2,i.z);let s=Ni.set(i.col),r=t.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return t.setAttribute("color",new we(o,3)),t}function w_(i,t){let e=[],n=[],s=[],r=0,o=(c,h,u,f,d)=>{let g=Ni.set(d);for(let x of[c,h,u,f])e.push(x[0],x[1],x[2]),n.push(g.r,g.g,g.b);s.push(r,r+1,r+2,r,r+2,r+3),r+=4},a=(c,h,u,f,d,g,x,m,p)=>{let v=f-c,T=d-h,b=Math.hypot(v,T)||1,_=-T/b*x,M=v/b*x;o([c-_,u+p,h-M],[c+_,u+p,h+M],[f+_,g+p,d+M],[f-_,g+p,d-M],m)};for(let c of i.segs){let h=Math.hypot(c.bx-c.ax,c.bz-c.az),u=Math.max(1,Math.ceil(h/6));for(let f=0;f<u;f++){let d=f/u,g=(f+1)/u,x=c.ax+(c.bx-c.ax)*d,m=c.az+(c.bz-c.az)*d,p=c.ax+(c.bx-c.ax)*(g+.04),v=c.az+(c.bz-c.az)*(g+.04),T=c.y0+((c.y1===void 0?c.y0:c.y1)-c.y0)*d,b=c.y0+((c.y1===void 0?c.y0:c.y1)-c.y0)*Math.min(1,g+.04);a(x,m,T,p,v,b,c.hw,"#3d414e",.09),a(x,m,T,p,v,b,c.hw-.25,"#464b5a",.095);{let _=(x+p)/2,M=(m+v)/2,S=!1;if(c.g[0]==="x"?S=Se.GRID.some(y=>Math.abs(M-y)<Se.HW+.5):c.g[0]==="z"&&(S=Se.GRID.some(y=>Math.abs(_-y)<Se.HW+.5)),!S&&(c.g[0]==="x"||c.g[0]==="z")){let y=p-x,w=v-m,A=Math.hypot(y,w)||1,C=-w/A*(c.hw-.55),E=y/A*(c.hw-.55);for(let L of[-1,1])a(x+C*L,m+E*L,T,p+C*L,v+E*L,b,.07,"#e9e9e4",.105)}}if(c.g==="link"||f%2===0){let _=(x+p)/2,M=(m+v)/2,S=!1;c.g[0]==="x"?S=Se.GRID.some(y=>Math.abs(M-y)<Se.HW+1):c.g[0]==="z"&&(S=Se.GRID.some(y=>Math.abs(_-y)<Se.HW+1)),S||a(x,m,T,p,v,b-(b-T)*.2,.08,"#f2f2ee",.11)}}}{let c=Se.GRID,h=Se.HW;for(let u of c)for(let f of c)for(let[d,g]of[[1,0],[-1,0],[0,1],[0,-1]]){let x=u+d*60,m=f+g*60;if(Math.abs(x)>121||Math.abs(m)>121)continue;let p=u+d*(h+2.2),v=f+g*(h+2.2);for(let S=-5;S<=5;S++){let y=d!==0?p:p+S*1.1,w=d!==0?v+S*1.1:v,A=d!==0?1.4:.28,C=d!==0?.28:1.4;o([y-A,.108,w-C],[y-A,.108,w+C],[y+A,.108,w+C],[y+A,.108,w-C],"#eeeeea")}let T=u+d*(h+4.6),b=f+g*(h+4.6),_=d!==0?.2:h-.8,M=d!==0?h-.8:.2;o([T-_,.108,b-M],[T-_,.108,b+M],[T+_,.108,b+M],[T+_,.108,b-M],"#eeeeea")}}for(let c of i.plazas)for(let u=0;u<28;u++){let f=u/28*Math.PI*2,d=(u+1)/28*Math.PI*2;o([c.x,c.y+.095,c.z],[c.x+Math.cos(f)*c.r,c.y+.095,c.z+Math.sin(f)*c.r],[c.x+Math.cos(d)*c.r,c.y+.095,c.z+Math.sin(d)*c.r],[c.x,c.y+.095,c.z],"#464b5a")}let l=new Ee;l.setAttribute("position",new se(e,3)),l.setAttribute("color",new se(n,3));{let c=new Float32Array(e.length/3*2);for(let h=0;h<e.length/3;h++)c[h*2]=e[h*3]/7,c[h*2+1]=e[h*3+2]/7;l.setAttribute("uv",new we(c,2))}return l.setIndex(s),l.computeVertexNormals(),l}function T_(){let t=Se.HALF*2,e=t/160,n=new Float32Array(25921*3),s=new Float32Array(25921*3),r=[],o=Xu(99),a=new Ot;for(let h=0;h<=160;h++)for(let u=0;u<=160;u++){let f=-Se.HALF+u*e,d=-Se.HALF+h*e,g=Cs(f,d),x=(h*161+u)*3;n[x]=f,n[x+1]=g,n[x+2]=d;let m=(Cs(f+2,d)-Cs(f-2,d))/4,p=(Cs(f,d+2)-Cs(f,d-2))/4,v=Math.hypot(m,p),T=Math.max(Math.abs(f),Math.abs(d)),b=1-Vr(150,205,T);{let _=Math.sin(f*.021+1.7)*Math.sin(d*.017+.3),M=Math.sin(f*.063+d*.041),S=Math.sin(f*.011-d*.019+2.2);a.set("#7dab4a").lerp(Ni.set("#bcb35c"),Vr(-.1,.8,_+M*.45)).lerp(Ni.set("#5d8c3b"),Vr(.1,1,-_-S*.4)*.7).multiplyScalar(.93+o()*.12)}g<.9&&T>250&&a.lerp(Ni.set("#f0dd9f"),Vr(.9,.2,g)*.9+.1),g<-.4&&a.lerp(Ni.set("#d8c68a"),.8),a.lerp(Ni.set("#8d8274"),Vr(.62,1,v)),g>33&&a.lerp(Ni.set("#ffffff"),Vr(33,41,g)),a.lerp(Ni.set("#aab2bb"),b),s[x]=a.r,s[x+1]=a.g,s[x+2]=a.b}for(let h=0;h<160;h++)for(let u=0;u<160;u++){let f=h*161+u,d=f+1,g=f+160+1,x=g+1;r.push(f,g,d,d,g,x)}let l=new Float32Array(25921*2);for(let h=0;h<25921;h++)l[h*2]=n[h*3]/9,l[h*2+1]=n[h*3+2]/9;let c=new Ee;return c.setAttribute("position",new we(n,3)),c.setAttribute("color",new we(s,3)),c.setAttribute("uv",new we(l,2)),c.setIndex(r),c.computeVertexNormals(),c}function tp(i,t,e,n){i.waterY=Se.SEA,i.killY=-2.6,i.terrain=rs;let s=Z0();e.track=s,e.cars=J0(),s.terrain=rs,e.finishZ=-99999,e.finishY=99999;let r=$0();for(let E of[-90,-30,30,90])for(let L of[-90,-30,30,90])i.addSolid(E-23.5,0,L-23.5,E+23.5,.2,L+23.5,{name:"block"});for(let E of r)i.addSolid(E.x-E.w/2,0,E.z-E.d/2,E.x+E.w/2,E.h,E.z+E.d/2,{name:"building"});for(let[E,L]of Gr)i.addSolid(E-2.6,.2,L-2.6,E+2.6,1.2,L+2.6,{name:"fountain"});if(s.boxes=[...r.map(E=>({x0:E.x-E.w/2,x1:E.x+E.w/2,z0:E.z-E.d/2,z1:E.z+E.d/2,h:E.h})),...Gr.map(([E,L])=>({x0:E-2.6,x1:E+2.6,z0:L-2.6,z1:L+2.6,h:1.2}))],e.gta={buildings:r,roads:s},i.headless)return;let o=Wu(256,215,38,30,11,{patches:4}),a=Wu(256,195,36,50,21,{cracks:4,patches:5}),l=new et(T_(),new ee({vertexColors:!0,map:o,bumpMap:o,bumpScale:1.6,roughness:.95,metalness:0}));l.receiveShadow=!0,i.group.add(l);let c=new et(w_(s),new ee({vertexColors:!0,map:a,bumpMap:a,bumpScale:1.1,roughness:.82,metalness:.05}));c.receiveShadow=!0,i.group.add(c);let h=j0(!1),u=j0(!0),f=Wu(128,235,30,22,31),d=r.filter(E=>E.zone>0),g=r.filter(E=>E.zone===0),x=new et(Di(d.map(Q0)),new ee({vertexColors:!0,map:h,bumpMap:f,bumpScale:.6,roughness:.78,metalness:.02}));x.castShadow=!0,x.receiveShadow=!0,i.group.add(x);let m=new et(Di(g.map(Q0)),new ee({vertexColors:!0,map:u,roughness:.22,metalness:.55,envMapIntensity:1.5}));m.castShadow=!0,m.receiveShadow=!0,i.group.add(m);let p=i.main,v=Xu(n||7),T="#d9dde2",b=s.props=[],_=(E,L,I,D,F=0)=>{i.addSolid(E-I,F,L-I,E+I,F+D,L+I,{name:"prop"}),b.push({x0:E-I,x1:E+I,z0:L-I,z1:L+I,h:F+D})},M=(E,L,I,D,F)=>{A_(p,E,L,I,D,v,F),_(E,I,.3*D,3,L)},S=(E,L,I,D)=>{p.add(new Dt(.08,.13,7.2,8),E,3.6,L,"#4d545e");let F=D?0:-I*.9,H=D?-I*.9:0;p.add(new Qt(D?.1:1.9,.1,D?1.9:.1),E+F,7.15,L+H,"#4d545e"),p.add(new Qt(D?.34:.7,.14,D?.7:.34),E+F*1.9,7.1,L+H*1.9,"#9aa1aa"),i.glow.add(new Qt(D?.28:.55,.05,D?.55:.28),E+F*1.9,7.02,L+H*1.9,"#fff1c4"),_(E,L,.16,7)};for(let E of[-90,-30,30,90])for(let L of[-90,-30,30,90]){let I=Gr.some(D=>D[0]===E&&D[1]===L);p.add(i.rbox(47,.2,47,.05),E,.1,L,I?"#7ccf5b":T)}for(let E of r){if(p.add(new Qt(E.w+.8,.5,E.d+.8),E.x,E.h+.25,E.z,"#4a4f5e"),p.add(new Qt(E.w+.7,1.3,E.d+.7),E.x,.65,E.z,"#6a6470"),p.add(new Qt(E.w+1.3,.55,E.d+1.3),E.x,E.h-.3,E.z,"#ece4d3"),E.h>34)for(let L=20;L<E.h-6;L+=20)p.add(new Qt(E.w+.45,.35,E.d+.45),E.x,L,E.z,"#d9d2c4");{let L=E.x-E.w*.25,I=E.z-E.d*.2,D=E.h+.5;p.add(new Qt(1.6,1.3,1.6),L,D+.65,I,"#4a4f5e"),p.add(new Dt(1.05,1.05,1.5,8),L,D+2,I,v()<.5?"#1e1e24":"#2b4c7e"),p.add(new Dt(.95,1.05,.2,8),L,D+2.85,I,"#d9d9d9"),p.add(new Qt(1.6,1,1),E.x+E.w*.25,D+.5,E.z+E.d*.2,"#c8ccd2"),p.add(new ve(.55,6,3,0,Math.PI*2,0,1.2),E.x+E.w*.1,D+1.2,E.z+E.d*.3,"#f2f2f2",.9,0,0)}p.add(new Qt(E.w+.9,.4,E.d+.9),E.x,3.7,E.z,["#e63946","#2a9d8f","#f4a261","#457b9d"][Math.floor(v()*4)]),E.h>14&&p.add(new Qt(3,1.6,3),E.x+(v()-.5)*E.w*.4,E.h+1.3,E.z+(v()-.5)*E.d*.4,"#9aa3ad"),E.tower&&(p.add(new Dt(.25,.4,24,6),E.x,E.h+12,E.z,"#c9d1d9"),i.glow.add(new ve(.9,8,6),E.x,E.h+24,E.z,"#ff3b3b"),p.add(new Qt(E.w*.6,8,E.d*.6),E.x,E.h+4,E.z,"#6ea5d6"))}for(let[E,L]of Gr){p.add(new Dt(2.6,2.8,1,14),E,.7,L,"#b8c2cc"),p.add(new Dt(2,2,.2,14),E,1.22,L,"#5ec8f0"),p.add(new Dt(.3,.4,2.4,8),E,2.2,L,"#b8c2cc"),i.glow.add(new ve(.7,8,6),E,3.6,L,"#bff0ff");for(let I=0;I<16;I++){let D=E+(v()-.5)*42,F=L+(v()-.5)*42;Math.hypot(D-E,F-L)<6||M(D,.2,F,.9+v()*.7)}for(let I of[0,1,2,3]){let D=E+Math.cos(I*1.57)*8,F=L+Math.sin(I*1.57)*8;p.add(i.rbox(2.4,.3,.8,.05),D,.55,F,"#8a5a34"),p.add(i.rbox(2.4,.6,.15,.03),D,.9,F+.35,"#8a5a34"),_(D,F,1.2,.9,.2)}}for(let E of Se.GRID)for(let L of[-1,1])for(let I=-112;I<=112;I+=14){if(Se.GRID.some(H=>Math.abs(I-H)<10))continue;let D=L*(Se.HW+2.2),F=(I+112)/14%2===0;for(let[H,K,V]of[[E+D,I,!1],[I,E+D,!0]])F?S(H,K,L,V):M(H,.2,K,.8+v()*.3)}for(let E=0,L=0;E<2600&&L<380;E++){let I=(v()-.5)*700,D=(v()-.5)*700,F=rs(I,D);if(F<1.2||F>30||Math.max(Math.abs(I),Math.abs(D))<160)continue;let H=(rs(I+2,D)-rs(I-2,D))/4,K=(rs(I,D+2)-rs(I,D-2))/4;if(Math.hypot(H,K)>.55||Math.abs(D)<24&&I>100)continue;let V=!1;for(let Z=0;Z<=1;Z+=.02){let j=Dc(Z);if(Math.hypot(j.x-I,j.z-D)<13){V=!0;break}}V||(M(I,F,D,1.2+v()*1.2,!0),L++)}{let E=Se.MT,L=kr(E.Rt);p.add(new Dt(.15,.2,9,6),E.cx,L+4.5,E.cz,"#ddd"),i.glow.add(new Qt(3.4,1.8,.1),E.cx+1.7,L+8,E.cz,"#ff6b9d")}for(let[E,L,I,D,F,H]of Gu){let K=new Fn;K.moveTo(0,0),K.lineTo(D,0),K.lineTo(D,F),K.lineTo(0,0);let V=new Ii(K,{depth:H,bevelEnabled:!1});V.translate(0,0,-H/2),p.add(V,E,.02,L,"#ff8a00",0,I-Math.PI/2,0);let Z=5;for(let j=0;j<Z;j++){let Tt=(j+.5)/Z*D,Rt=F*Tt/D,ie=new Qt(D/Z*.45,.06,H*.96);ie.rotateZ(Math.atan2(F,D)),p.add(ie,E+Math.sin(I)*Tt,Rt+.08,L+Math.cos(I)*Tt,"#ffffff",0,I-Math.PI/2,0)}i.glow.add(new Qt(.25,.25,H),E+Math.sin(I)*D,F+.12,L+Math.cos(I)*D,"#ffee00",0,I-Math.PI/2,0)}let y=[],w=e.trafficList=[],A=["#c9c9cf","#1f3a5f","#9a2b2b","#e8e2d0","#2d5a3d","#6a6f78","#d9b34a","#4a2b5e","#2b2b30"],C=[11,12,13,14,16,18];K0.forEach((E,L)=>{for(let I=0;I<E.n;I++){let D=L*5+I,F=C[D%C.length],H=Y0(F,F===14?null:A[D%A.length]);H.rotation.order="YXZ",i.group.add(H);let K=Vu(E,I,0),V={id:F,x:K.x,y:0,z:K.z,yaw:K.yaw,vx:K.vx,vz:K.vz,speed:E.sp,driver:1e3+D,parked:!1,heavy:!0,hl:F===12?1.98:2.3,hw:.95};w.push(V),y.push({L:E,k:I,m:H,st:V})}}),i.updaters.push(E=>{for(let L of y){let I=Vu(L.L,L.k,E),D=L.st;D.x=I.x,D.z=I.z,D.yaw=I.yaw,D.vx=I.vx,D.vz=I.vz,L.m.position.set(I.x,0,I.z),L.m.rotation.y=I.yaw}})}var Nc=["#3e6b34","#4a7c3a","#56893f","#3a5f2f","#668f45","#4f7a36"];function A_(i,t,e,n,s,r,o=!1){let a=Nc[Math.floor(r()*Nc.length)],l=Nc[Math.floor(r()*Nc.length)];if(o){i.add(new Dt(.2*s,.3*s,1.8*s,5),t,e+.9*s,n,"#5a4331"),i.add(new wn(1.5*s,3.2*s,7),t,e+3*s,n,"#2f5d34"),i.add(new wn(1.1*s,2.5*s,7),t,e+4.5*s,n,"#2f5d34");return}i.add(new Dt(.2*s,.32*s,2.4*s,7),t,e+1.2*s,n,"#5d4a3a"),i.add(new Dt(.1*s,.17*s,1.5*s,6),t+.35*s,e+2.7*s,n,"#5d4a3a",0,0,-.55),i.add(new Dt(.1*s,.17*s,1.5*s,6),t-.3*s,e+2.8*s,n+.1*s,"#5d4a3a",0,0,.5);let c=new Fo(1,1);i.add(c,t,e+3.6*s,n,a,0,r()*6,0,2.2*s,1.55*s,2.2*s),i.add(c,t+(r()-.5)*1.6*s,e+4.3*s,n+(r()-.5)*1.6*s,l,0,r()*6,0,1.5*s,1.2*s,1.5*s),i.add(c,t+(r()-.5)*2.2*s,e+3.1*s,n+(r()-.5)*2.2*s,a,0,r()*6,0,1.3*s,1*s,1.3*s)}var R_={gta:{plat:["#cfd8e3","#e8c9a0","#a8c5e8","#f1e0a6","#b9d9b0"],pad:"#ffffff",icePad:"#ffffff",edgeGlow:null,hazard:"#ff4d6d",hazard2:"#fff7d6",hub:"#5a6270",accent:"#ffd23f",convBase:"#4a3a5e",belt:"#ffe9a8"}};function ep(i,t=!1,e=null,n=1){let r=R_.gta,o=new Pc(r,t);o.arrowTexture=e,o.key="gta",o.waterY=-40,o.killY=-60;let a={key:"gta",spawn:{x:0,y:0,z:1.5},signs:[],pads:[]};return tp(o,r,a,n),a.finishPlat={far:-230},o.finalize(),a.length=-a.finishZ,a.checkpoints=o.checkpoints,a.endZ=a.finishPlat.far,{world:o,info:a}}function np(){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!1,ground:null,coyote:0,jumpBuf:0,stun:0,dive:0,diveCd:0,noSnap:0,hitCd:0,immune:0,boost:0,jumping:!1,noCtrl:0,landSpeed:0,inWater:!1,events:[],moveT:0,yawOff:0,swim:0,waterSurf:0}}var C_=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function Uc(i,t,e,n){let s=t-i.vx,r=e-i.vz,o=Math.hypot(s,r);o<=n||o<1e-6?(i.vx=t,i.vz=e):(i.vx+=s/o*n,i.vz+=r/o*n)}function ip(i,t,e,n){t.coyote=t.grounded?.11:t.coyote-e,t.jumpBuf=n.jumpPressed?.13:t.jumpBuf-e,t.immune>0&&(t.immune-=e),t.stun>0&&(t.stun=Math.max(0,t.stun-e),t.stun<=0&&(t.immune=1)),t.dive>0&&(t.dive=Math.max(0,t.dive-e)),t.diveCd>0&&(t.diveCd-=e),t.noSnap>0&&(t.noSnap-=e),t.hitCd>0&&(t.hitCd-=e),t.boost>0&&(t.boost-=e),t.noCtrl>0&&(t.noCtrl-=e);let s=0,r=0;for(let u of i.pools)if(t.x>u.x0&&t.x<u.x1&&t.z>u.z0&&t.z<u.z1){let f=u.surf-t.y;f>.12&&(s=Math.min(1,f/.9),r=u.surf);break}s>.3&&t.swim<=.3&&(t.events.push("splash"),t.waterSurf=r),t.swim=s;let o=t.stun<=0&&t.dive<=0&&t.noCtrl<=0,a=t.ground&&t.ground.ice,l=Math.abs(n.mx)+Math.abs(n.mz)>.01;if(n.divePressed&&t.diveCd<=0&&t.stun<=0&&t.dive<=0){let u=Math.sin(t.yaw),f=Math.cos(t.yaw);t.vx=u*15.5,t.vz=f*15.5,t.vy=t.grounded?7:Math.max(t.vy,3.5),t.grounded=!1,t.ground=null,t.noSnap=.2,t.dive=.85,t.diveCd=1.1,t.events.push("dive")}if(o){let u=xe.RUN*(t.boost>0?1.45:1)*(t.speedMul||1)*(1-.34*s);if(l){let f=t.grounded?a?xe.ICE_ACC:xe.ACC:xe.AIR;Uc(t,n.mx*u,n.mz*u,f*e);let d=Math.atan2(n.mx,n.mz);t.yaw+=C_(t.yaw,d)*(1-Math.exp(-20*e))}else t.grounded?Uc(t,0,0,(a?xe.ICE_DEC:xe.DEC)*e):Uc(t,0,0,xe.AIR_DEC*e)}else{let u=t.grounded?a?1.2:9:.6;Uc(t,0,0,u*e)}if(s>.4&&n.jumpPressed&&t.stun<=0?(t.vy=9,t.grounded=!1,t.ground=null,t.noSnap=.2,t.jumpBuf=0,t.events.push("stroke")):t.jumpBuf>0&&(t.grounded||t.coyote>0)&&t.stun<=0&&t.dive<=.45&&(t.vy=xe.JUMP*(t.jumpMul||1),t.grounded=!1,t.ground=null,t.coyote=0,t.jumpBuf=0,t.noSnap=.2,t.jumping=!0,t.events.push("jump")),t.jumping&&!n.jumpHeld&&t.vy>6&&(t.vy-=55*e),t.vy=Math.max(xe.TERM,t.vy-xe.G*e*(t.dive>0&&!t.grounded?.8:1)*(1-.92*s)),s>.05){let u=r-(n.jumpHeld?.3:.95);t.vy+=(u-t.y)*26*e*s,t.vy*=Math.exp(-2.4*e*s)}for(let u of i.zones){let f=t.x-u.x,d=t.z-u.z;if(f*f+d*d<u.r*u.r&&t.y>u.y0-.3&&t.y<u.y1){let g=Math.max(0,(t.y-u.y0)/(u.y1-u.y0)),x=u.vmax*(1-g*g);t.vy<x&&(t.vy=Math.min(x,t.vy+u.lift*e)),t.noSnap=Math.max(t.noSnap,.12),t.air||(t.air=!0,t.events.push("air"))}else t.air=!1}for(let u of i.winds)if(t.x>u.x0&&t.x<u.x1&&t.z>u.z0&&t.z<u.z1&&t.y>u.y0-.5&&t.y<u.y1){let f=t.grounded?1:.75;t.x+=u.ax*f*e,t.z+=u.az*f*e}if(t.grounded&&t.ground){let u=t.ground.conv;u&&(t.x+=u[0]*e,t.z+=u[1]*e),t.ground.boost&&(t.boost=.55)}let c=t.grounded,h=t.y;if(t.x+=t.vx*e,t.z+=t.vz*e,i.resolveHorizontal(t),i.resolveHorizontal(t),t.y+=t.vy*e,t.grounded=!1,t.ground=null,t.vy<=0){let u=i.findGround(t,h,c);if(u){let f=-t.vy;t.y=u.top,t.vy=0,t.grounded=!0,t.ground=u.s,t.jumping=!1,u.s.bounce?(t.vy=u.s.bounce,t.grounded=!1,t.ground=null,t.noSnap=.25,t.jumping=!1,u.s.push&&(t.vx=u.s.push[0],t.vz=u.s.push[1],t.noCtrl=.9),u.s.squash!==void 0&&(u.s.squash=1),t.events.push("bounce")):!c&&f>6&&(t.landSpeed=f,t.events.push("land"))}}else{let u=i.hitCeiling(t,h);u&&(t.y=u.y0-xe.H,t.vy=Math.min(0,t.vy*.2))}return t.y<i.waterY-.2&&!t.inWater&&(t.inWater=!0,t.events.push("splash")),t.y<i.killY&&t.events.push("fell"),t}function Is(i,t,e,n){return i.hitCd>0||i.shield>0?!1:(i.vx=t*n,i.vz=e*n,i.vy=Math.max(i.vy,6.5),i.grounded=!1,i.ground=null,i.noSnap=.25,i.stun=.95,i.dive=0,i.hitCd=.5,i.events.push("hit"),!0)}function Fc(i,t,e,n,s){i.x=t,i.y=e,i.z=n,i.vx=i.vy=i.vz=0,i.grounded=!1,i.ground=null,i.stun=0,i.dive=0,i.inWater=!1,i.hitCd=1,i.yaw=s!=null?s:Math.PI,i.noSnap=0,i.boost=0}var sp=(i,t=.55)=>new ee({color:i,roughness:t});var PS=sp("#ffffff",.25),LS=sp("#101018",.4);function zc(i,t="#ffffff"){let e=document.createElement("canvas");e.width=512,e.height=128;let n=e.getContext("2d");n.font='700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif',n.textAlign="center",n.textBaseline="middle";let s=Math.min(480,n.measureText(i).width+56);n.fillStyle="rgba(12,10,36,0.72)";let r=(512-s)/2,o=14,a=100,l=50;n.beginPath(),n.moveTo(r+l,o),n.arcTo(r+s,o,r+s,o+a,l),n.arcTo(r+s,o+a,r,o+a,l),n.arcTo(r,o+a,r,o,l),n.arcTo(r,o,r+s,o,l),n.closePath(),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.lineWidth=8,n.strokeStyle="rgba(0,0,0,0.65)",n.strokeText(i,256,68,440),n.fillStyle="#ffffff",n.fillText(i,256,68,440);let c=new nn(e);c.colorSpace=Ne,c.anisotropy=4;let h=new bo(new dr({map:c,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return h.renderOrder=999,h.scale.set(2.8,.7,1),h.userData.base=.7,h}var Fe=(i,t,e)=>new U(i,t,e),I_=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Yu=(i,t,e)=>i+(t-i)*e,pn=i=>{let t=new Ot(i);return[t.r,t.g,t.b]},Ui=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],Bc=[["hips",null,[0,.97,0]],["spine","hips",[0,1.07,0]],["chest","spine",[0,1.24,0]],["neck","chest",[0,1.49,0]],["head","neck",[0,1.58,0]],["upperarm.L","chest",[.19,1.45,0]],["forearm.L","upperarm.L",[.265,1.17,0]],["hand.L","forearm.L",[.325,.915,0]],["upperarm.R","chest",[-.19,1.45,0]],["forearm.R","upperarm.R",[-.265,1.17,0]],["hand.R","forearm.R",[-.325,.915,0]],["fing.L","hand.L",[.338,.841,0]],["fingtip.L","fing.L",[.342,.796,0]],["thumb.L","hand.L",[.322,.885,.026]],["fing.R","hand.R",[-.338,.841,0]],["fingtip.R","fing.R",[-.342,.796,0]],["thumb.R","hand.R",[-.322,.885,.026]],["upperleg.L","hips",[.088,.93,0]],["lowerleg.L","upperleg.L",[.088,.52,0]],["foot.L","lowerleg.L",[.088,.095,0]],["upperleg.R","hips",[-.088,.93,0]],["lowerleg.R","upperleg.R",[-.088,.52,0]],["foot.R","lowerleg.R",[-.088,.095,0]]],In={};Bc.forEach((i,t)=>{In[i[0]]=t});function qu(i,t,e){let n=[0];for(let r=1;r<i.length;r++)n.push(n[r-1]+i[r].distanceTo(i[r-1]));let s=r=>{let o=0,a=1e9;for(let l=0;l<i.length-1;l++){let c=i[l],h=i[l+1],u=h.clone().sub(c),f=u.lengthSq(),d=Math.min(1,Math.max(0,r.clone().sub(c).dot(u)/f)),g=c.clone().addScaledVector(u,d),x=g.distanceTo(r);x<a&&(a=x,o=n[l]+d*Math.sqrt(f))}return o};return{t:s,w(r){let o=s(r),a=1;for(let h=1;h<i.length-1;h++)Math.abs(o-n[h])<Math.abs(o-n[a])&&(a=h);let l=o-n[a];if(i.length>2&&Math.abs(l)<e[a]){let h=I_(-e[a],e[a],l);return[[In[t[a]],h],[In[t[a-1]],1-h]]}let c=0;for(let h=0;h<t.length;h++)o>=n[h]&&(c=h);return[[In[t[Math.min(c,t.length-1)]],1]]}}}var Zu=class{constructor(){this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[]}vert(t,e,n){let s=this.pos.length/3;this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]);let r=n.slice(0,4);for(;r.length<4;)r.push([0,0]);let o=0;return r.forEach(a=>{o+=a[1]}),o=o||1,r.forEach(a=>{this.si.push(a[0]),this.sw.push(a[1]/o)}),s}loft(t,e,n,s=!0,r=!0){let o=t[0].length,a=[];t.forEach((c,h)=>{let u=[];c.forEach((f,d)=>u.push(this.vert(f,n(h,d,f),e(f)))),a.push(u)});for(let c=0;c<t.length-1;c++)for(let h=0;h<o;h++){let u=(h+1)%o,f=a[c][h],d=a[c][u],g=a[c+1][h],x=a[c+1][u];this.idx.push(f,d,g,d,x,g)}let l=(c,h)=>{let u=t[c],f=new U;u.forEach(g=>f.add(g)),f.multiplyScalar(1/o);let d=this.vert(f,n(c,0,f),e(f));for(let g=0;g<o;g++){let x=a[c][g],m=a[c][(g+1)%o];h?this.idx.push(x,d,m):this.idx.push(x,m,d)}};s&&l(t.length-1,!0),r&&l(0,!1)}geo(t,e,n,s){t=t.index?t.toNonIndexed():t.clone(),t.applyMatrix4(e),t.computeVertexNormals();let r=t.attributes.position,o=this.pos.length/3;for(let a=0;a<r.count;a++)this.vert(Fe(r.getX(a),r.getY(a),r.getZ(a)),s,[[In[n],1]]);for(let a=0;a<r.count;a++)this.idx.push(o+a)}build(){let t=new Ee;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("color",new se(this.col,3)),t.setAttribute("skinIndex",new xs(this.si,4)),t.setAttribute("skinWeight",new se(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}},Rn=(i,t,e,n=1,s=1,r=1,o=0,a=0,l=0)=>new le().compose(Fe(i,t,e),new Ke().setFromEuler(new dn(o,a,l)),Fe(n,s,r)),Cn=(i=1,t=14,e=10,n=0,s=Math.PI*2,r=0,o=Math.PI)=>new ve(i,t,e,n,s,r,o);function Fi(i,t,e,n,s,r,o,a=2){let l=[];for(let c=0;c<o;c++){let h=c/o*Math.PI*2,u=Math.sin(h),f=Math.cos(h),d=Math.sign(u)*Math.pow(Math.abs(u),2/a),g=Math.sign(f)*Math.pow(Math.abs(f),2/a);l.push(Fe(i+n*d,t,e+(g>0?s:r)*g))}return l}var Ps=(i,t)=>{if(t<=i[0][0])return i[0].slice(1);if(t>=i[i.length-1][0])return i[i.length-1].slice(1);for(let e=0;e<i.length-1;e++)if(t<=i[e+1][0]){let n=(t-i[e][0])/(i[e+1][0]-i[e][0]),s=n*n*(3-2*n);return i[e].slice(1).map((r,o)=>Yu(r,i[e+1][o+1],s))}},P_={civilian:{top:"#4a6fa5",pants:"#2b3140",shoes:"#2a2018",sleeve:.62,hat:null,hair:"#16110d"},cop:{top:"#1f3a6b",pants:"#14161c",shoes:"#0d0d0d",sleeve:.62,hat:"cop",belt:!0,badge:!0,tie:"#0d0d12",hair:"#1a130e"},thug:{top:"#17171a",pants:"#38465f",shoes:"#e8e8e8",sleeve:5,hat:"beanie",chain:!0,hair:"#0d0a08",hood:!0},boss:{top:"#111216",pants:"#111216",shoes:"#0b0b0b",sleeve:5,hat:null,glasses:!0,tie:"#7a0f1a",chain:!0,shirt:"#f1efe9",lapel:!0,hair:"#0e0b09"}};function rp(i={}){let t=Object.assign({},P_[i.role||"civilian"],i),e=pn(t.skinTone||"#c08560"),n=pn(t.top),s=pn(t.pants),r=pn(t.shoes),o=pn(t.hair),a=pn(t.shirt||t.top),l=new Zu,c=16,h=(B,q)=>Fe(q[0]*B,q[1],q[2]),u=[[.9,.166,.1,.106],[.965,.166,.1,.106],[.99,.168,.104,.11],[1.08,.148,.092,.092],[1.17,.15,.098,.088],[1.27,.172,.12,.094],[1.37,.19,.126,.1],[1.43,.2,.112,.1],[1.465,.168,.092,.09],[1.49,.125,.074,.076],[1.515,.082,.062,.066],[1.545,.058,.058,.06]],f=qu([Fe(0,.97,0),Fe(0,1.07,0),Fe(0,1.24,0),Fe(0,1.49,0),Fe(0,1.58,0),Fe(0,1.8,0)],["hips","spine","chest","neck","head"],[0,.07,.07,.03,.02]),d=!!(t.hood||t.lapel),g=d?.915:1,x=[],m=[];for(let B=d?.9:.965;B<=1.546;B+=.0225)m.push(B);m.push(g-4e-4,g+4e-4),m.sort((B,q)=>B-q);for(let B of m){let[q,mt,Lt]=Ps(u,B);x.push(Fi(0,B,0,q,mt,Lt,c,2.3))}l.loft(x,B=>f.w(B),(B,q,mt)=>mt.y<g?s:mt.y>1.5?e:t.lapel&&mt.z>.06&&Math.abs(mt.x)<.045&&mt.y>1.18?a:t.lapel?n:t.shirt&&!t.lapel?a:n);let p=[];for(let B=1.49;B<=1.605;B+=.023)p.push(Fi(0,B,-.008,.054,.052,.056,12));l.loft(p,B=>f.w(B),()=>e,!1,!1);let v=B=>[Fe(.088*B,1.02,0),Fe(.088*B,.93,0),Fe(.088*B,.52,0),Fe(.088*B,.095,0),Fe(.088*B,0,0)],T=[[.03,.04,.044],[.1,.043,.046],[.2,.05,.054],[.32,.06,.064],[.4,.064,.068],[.47,.054,.058],[.53,.056,.06],[.62,.07,.074],[.75,.087,.092],[.88,.097,.102],[.96,.1,.108],[1,.085,.096],[1.04,.068,.08]];for(let B of[1,-1]){let q=B>0?"L":"R",mt=qu(v(B),["hips","upperleg."+q,"lowerleg."+q,"foot."+q],[0,.08,.06,.04]),Lt=[],_t=[];for(let rt=.105;rt<=1.04;rt+=.0467)_t.push(rt);_t.push(.1146,.1154),_t.sort((rt,gt)=>rt-gt);for(let rt of _t){let[gt,xt]=Ps(T,rt);Lt.push(Fi(.088*B+(rt>.8?-.004*B:0),rt,rt>.5?0:.004,gt,xt*1,xt*1.03,14))}let zt=t.pants!==void 0;l.loft(Lt,rt=>mt.w(rt),(rt,gt,xt)=>xt.y<.115?e:s,!1,!1);let qt=[[-.085,.075,.036],[-.07,.108,.043],[0,.104,.046],[.08,.072,.05],[.14,.054,.048],[.19,.04,.04],[.215,.028,.03]],ot=[];for(let rt=-.085;rt<=.2151;rt+=.025){let gt=Ps(qt,rt),xt=gt[0],Pt=gt[1],Ut=[];for(let Gt=0;Gt<12;Gt++){let O=Gt/12*Math.PI*2;Ut.push(Fe(.088*B+Pt*Math.sin(O),.004+xt*(.5+.5*Math.cos(O)),rt))}ot.push(Ut)}let ct={w:()=>[[In["foot."+q],1]]},dt=[];ot.forEach(rt=>dt.push(rt.map(gt=>l.vert(gt,r,ct.w(gt)))));for(let rt=0;rt<ot.length-1;rt++)for(let gt=0;gt<12;gt++){let xt=(gt+1)%12;l.idx.push(dt[rt][gt],dt[rt+1][gt],dt[rt][xt],dt[rt][xt],dt[rt+1][gt],dt[rt+1][xt])}for(let[rt,gt]of[[0,!1],[ot.length-1,!0]]){let xt=ot[rt],Pt=Fe(.088*B,.05,xt[0].z),Ut=l.vert(Pt,r,ct.w(Pt));for(let Gt=0;Gt<12;Gt++){let O=dt[rt][Gt],ge=dt[rt][(Gt+1)%12];gt?l.idx.push(O,ge,Ut):l.idx.push(O,Ut,ge)}}l.geo(new Qt(.1,.014,.3),Rn(.088*B,.007,.065),"foot."+q,Ui(r,.45))}let b=[[.915,.029,.024],[1,.034,.029],[1.08,.044,.037],[1.15,.048,.04],[1.2,.05,.043],[1.28,.053,.048],[1.37,.057,.055],[1.43,.06,.06],[1.47,.052,.054]];for(let B of[1,-1]){let q=B>0?"L":"R",mt=[Fe(.12*B,1.46,0),Fe(.19*B,1.45,0),Fe(.265*B,1.17,0),Fe(.325*B,.915,0),Fe(.345*B,.8,0)],Lt=qu(mt,["chest","upperarm."+q,"forearm."+q,"hand."+q],[0,.09,.05,.03]),_t=[],zt=1.45-t.sleeve*.42,qt=[];for(let xt=.92;xt<=1.475;xt+=.0395)qt.push(xt);zt>.93&&zt<1.46&&qt.push(zt-4e-4,zt+4e-4),qt.sort((xt,Pt)=>xt-Pt);for(let xt of qt){let[Pt,Ut]=Ps(b,xt),Gt=xt>1.17?Yu(.265,.19,(xt-1.17)/.28):Yu(.325,.265,(xt-.915)/.255),O=t.sleeve>3||xt>1.45-t.sleeve*.42?1.03:1;_t.push(Fi(Gt*B,xt,xt>1.3?-.003:.004,Pt*O,Ut*O,Ut*O,12))}l.loft(_t,xt=>Lt.w(xt),(xt,Pt,Ut)=>t.sleeve>3||Ut.y>1.45-t.sleeve*.42?n:e,!1,!1);let ot=[];for(let[xt,Pt,Ut]of[[.928,.021,.03],[.9,.022,.036],[.87,.021,.041],[.843,.018,.043]])ot.push(Fi((.325+(.915-xt)*.15)*B,xt,0,Pt,Ut,Ut,10));l.loft(ot,()=>[[In["hand."+q],1]],()=>e,!0,!0);let ct=[.0255,.0085,-.0085,-.0255],dt=[.076,.083,.077,.062],rt=[.0098,.0092,.0088,.008,.0058];for(let xt=0;xt<4;xt++){let Ut=[.843,.8195,.796,.796-.5*(dt[xt]-.047),.843-dt[xt]].map((Gt,O)=>Fi((.338+(.843-Gt)*.1)*B,Gt,ct[xt],rt[O],rt[O],rt[O],7));l.loft(Ut,Gt=>Gt.y>.8?[[In["fing."+q],1]]:Gt.y<.792?[[In["fingtip."+q],1]]:[[In["fing."+q],.5],[In["fingtip."+q],.5]],()=>e,!0,!0)}let gt=[];for(let[xt,Pt,Ut]of[[.892,.026,.0125],[.862,.042,.0112],[.834,.05,.0098],[.812,.053,.0078]])gt.push(Fi(.318*B,xt,Pt,Ut,Ut,Ut,7));l.loft(gt,()=>[[In["thumb."+q],1]],()=>e,!0,!0)}let _=[[1.555,.028,.05,.04],[1.575,.05,.083,.062],[1.6,.064,.09,.085],[1.63,.072,.09,.098],[1.665,.077,.095,.103],[1.7,.078,.098,.106],[1.735,.075,.092,.106],[1.765,.064,.074,.095],[1.79,.04,.045,.065],[1.806,.012,.013,.016]],M=[];for(let B=1.555;B<=1.8061;B+=.0126){let[q,mt,Lt]=Ps(_,B);M.push(Fi(0,B,0,q,mt,Lt,18,2.2))}let S=()=>[[In.head,1]];l.loft(M,S,()=>e,!0,!0);let y=B=>Ps(_,B)[1];for(let B of[1,-1])l.geo(Cn(1,12,8),Rn(.034*B,1.684,.078,.0118,.0112,.0118),"head",[.93,.92,.9]),l.geo(Cn(1,10,8),Rn(.034*B,1.684,.0885,.0074,.0074,.0044),"head",pn(t.eye||"#3a2414")),l.geo(Cn(1,8,6),Rn(.034*B,1.684,.0925,.0036,.0036,.002),"head",[.02,.02,.02]),l.geo(Cn(1,12,6,0,Math.PI*2,0,Math.PI*.5),Rn(.034*B,1.6865,.079,.0132,.0125,.0132),"head",Ui(e,.93)),l.geo(new Qt(.04,.0075,.012),Rn(.036*B,1.715,.092,1,1,1,.1,0,-.12*B),"head",o),l.geo(Cn(1,8,6),Rn(.0775*B,1.672,-.006,.008,.027,.0175,0,0,.12*B),"head",Ui(e,.95)),l.geo(Cn(1,8,6),Rn(.0115*B,1.639,y(1.639)+.002,.0085,.008,.009),"head",e);l.geo(Cn(1,10,8),Rn(0,1.668,y(1.668)+.004,.0115,.026,.014,-.18),"head",e),l.geo(Cn(1,10,8),Rn(0,1.64,y(1.64)+.011,.0125,.0105,.0125),"head",e),l.geo(Cn(1,10,6),Rn(0,1.618,y(1.618)-.0015,.0225,.0052,.0075),"head",pn("#9b5a55")),l.geo(Cn(1,10,6),Rn(0,1.6045,y(1.6045)-.0015,.0195,.0062,.0085),"head",pn("#a86560")),l.geo(new Qt(.04,.0016,.004),Rn(0,1.6115,y(1.6115)+5e-4),"head",[.12,.05,.05]);let w=[];for(let B=1.66;B<=1.8125;B+=.0145){let[q,mt,Lt]=Ps(_,Math.min(B,1.8055)).map(qt=>qt),_t=.03+(B-1.655)*.45,zt=Fi(0,B,0,q+.011,mt+.011,Lt+.013,18,2.2);zt.forEach(qt=>{qt.z>_t&&(qt.z=_t+(qt.z-_t)*0),qt.z>_t&&B<1.72&&(qt.z=_t)}),w.push(zt)}t.hat!=="beanie"&&l.loft(w,S,()=>o,!0,!1);let A=(B,q,mt,Lt,_t,zt,qt=0,ot=0,ct=0)=>Rn(B,q,mt,Lt,_t,zt,qt,ot,ct);if(t.belt){let B=new Dt(.1745,.172,.04,24,1,!0);l.geo(B,A(0,1,0,1,1,.66),"hips",[.05,.05,.05]),l.geo(new Qt(.04,.034,.012),A(0,1,.112),"hips",pn("#c9a64a")),l.geo(new Qt(.05,.12,.07),A(-.17,.93,.015),"hips",[.05,.05,.05]),l.geo(new Qt(.05,.04,.07),A(0,1,-.115),"hips",[.08,.08,.08])}if(t.badge&&l.geo(Cn(1,6,4),A(.075,1.33,.118,.024,.028,.006),"chest",pn("#d4af37")),t.tie&&(l.geo(new Qt(.036,.19,.012),A(0,1.35,.121,1,1,1,-.05),"chest",pn(t.tie)),l.geo(new Qt(.044,.04,.02),A(0,1.455,.1),"chest",Ui(pn(t.tie),1.1))),t.lapel)for(let B of[1,-1])l.geo(new Qt(.05,.22,.012),A(.055*B,1.34,.112,1,1,1,-.05,0,.3*B),"chest",Ui(n,1.6));if(t.chain){let B=new Ie(.075,.0055,6,20);l.geo(B,A(0,1.43,.045,1.15,1.2,1,1.15),"chest",pn("#d4af37"))}if(t.hood){let B=new Ie(.075,.032,8,18);l.geo(B,A(0,1.495,-.01,1.2,1,1,Math.PI/2+.35),"chest",Ui(n,1.15))}if(t.top!==void 0&&!t.hood){let B=new Ie(.058,.009,6,16);l.geo(B,A(0,1.503,0,1,1,1,Math.PI/2),"chest",t.lapel||t.tie?a:Ui(n,1.15))}t.hat==="cop"&&(l.geo(new Dt(.085,.093,.075,20),A(0,1.775,0),"head",Ui(n,.9)),l.geo(new Dt(.1,.098,.014,20),A(0,1.74,0,1,1,1.05),"head",Ui(n,.8)),l.geo(new Qt(.15,.008,.07),A(0,1.736,.115,1,1,1,.12),"head",[.03,.03,.03]),l.geo(Cn(1,6,4),A(0,1.77,.0925,.014,.016,.004),"head",pn("#d4af37"))),t.hat==="beanie"&&(l.geo(Cn(1,18,10,0,Math.PI*2,0,Math.PI*.62),A(0,1.722,-.006,.092,.1,.108),"head",[.07,.07,.08]),l.geo(new Ie(.087,.012,6,20),A(0,1.742,-.004,1,1,1.15,Math.PI/2),"head",[.1,.1,.11])),t.glasses&&(l.geo(new Qt(.058,.032,.008),A(.034,1.684,.098),"head",[.02,.02,.025]),l.geo(new Qt(.058,.032,.008),A(-.034,1.684,.098),"head",[.02,.02,.025]),l.geo(new Qt(.16,.006,.006),A(0,1.694,.096),"head",[.04,.04,.04])),t.hat==="cap"&&(l.geo(Cn(1,16,8,0,Math.PI*2,0,Math.PI*.5),A(0,1.72,0,.09,.085,.105),"head",pn(t.capCol||"#aa1c1c")),l.geo(new Qt(.12,.006,.07),A(0,1.725,.11,1,1,1,.1),"head",pn(t.capCol||"#aa1c1c")));let C=Bc.map(B=>{let q=new mr;return q.name=B[0],q});Bc.forEach((B,q)=>{let mt=Fe(...B[2]);if(B[1]){let Lt=Bc.find(_t=>_t[0]===B[1]);C[q].position.copy(mt).sub(Fe(...Lt[2])),C[In[B[1]]].add(C[q])}else C[q].position.copy(mt)});let E=l.build(),L=new ee({vertexColors:!0,roughness:.62,metalness:0,envMapIntensity:.7}),I=new Eo(E,L),D=new So(C);I.add(C[0]),I.bind(D),I.castShadow=!0,I.frustumCulled=!1;let F=new Yt;F.add(I);let H={};C.forEach(B=>{H[B.name]=B});let K={};C.forEach(B=>{K[B.name]=B.position.clone()});let V=new Yt,Z=new ee({color:"#202225",roughness:.35,metalness:.85}),j=new ee({color:"#0e0e10",roughness:.6,metalness:.3}),Tt=(B,q,mt,Lt,_t,zt,qt=Z,ot=0)=>{let ct=new et(new Qt(B,q,mt),qt);return ct.position.set(Lt,_t,zt),ct.rotation.x=ot,ct},Rt=new Yt;Rt.add(Tt(.03,.036,.19,0,.074,.03),Tt(.026,.026,.13,0,.044,.01,j),Tt(.03,.105,.042,0,0,-.012,j,-.12),Tt(.006,.03,.05,0,.034,.05,j),Tt(.008,.012,.01,0,.096,.115),Tt(.012,.01,.01,0,.096,-.055));let ie=new et(new Dt(.0075,.0075,.03,8),Z);ie.rotation.x=Math.PI/2,ie.position.set(0,.074,.14),Rt.add(ie),Rt.quaternion.setFromRotationMatrix(new le().makeBasis(Fe(1,0,0),Fe(0,0,1),Fe(0,-1,0))),V.add(Rt),V.position.set(.026,-.052,0),V.visible=!1,H["hand.R"].add(V);let re=E.index.count/3,oe={group:F,mesh:I,bones:H,rest:K,gun:V,tris:Math.round(re),outfit:t};return oe.pose=(B,q=0,mt=1)=>$u(oe,B,q,mt),oe}var Q=(i,t=0,e=0,n=0)=>i.rotation.set(t,e,n);function $u(i,t,e=0,n=1){let s=i.bones,r=i.rest;for(let c in s)s[c].rotation.set(0,0,0),s[c].position.copy(r[c]);i.gun.visible=!1,s["upperarm.L"].rotation.order="YXZ",s["upperarm.R"].rotation.order="YXZ";let o=(c,h)=>{let u=c==="L"?-1:1;Q(s["fing."+c],0,0,u*h),Q(s["fingtip."+c],0,0,u*h*.95),Q(s["thumb."+c],0,0,u*h*.3)};o("L",.3),o("R",.3);let a=.1,l=(c,h)=>{Q(s["upperarm.L"],c,0,-a),Q(s["upperarm.R"],h,0,a)};if(t==="idle"){let c=Math.sin(e*1.6)*.012;Q(s.chest,c,0,0),Q(s.head,-c*.5,0,0),l(0,0),Q(s["forearm.L"],-.12,0,0),Q(s["forearm.R"],-.12,0,0),Q(s["upperleg.L"],-.02,0,.03),Q(s["upperleg.R"],.02,0,-.03)}else if(t==="walk"||t==="run"){let c=t==="run",h=e*(c?9:6),u=Math.sin(h),f=Math.cos(h),d=c?.95:.52,g=c?1.5:.85,x=c?.95:.5;Q(s["upperleg.L"],-d*u,0,.03),Q(s["upperleg.R"],d*u,0,-.03),Q(s["lowerleg.L"],.1+g*Math.max(0,-f*.9+.1)*(u<0?.35:1),0,0),Q(s["lowerleg.R"],.1+g*Math.max(0,f*.9+.1)*(u>0?.35:1),0,0),Q(s["foot.L"],-.15*u,0,0),Q(s["foot.R"],.15*u,0,0),l(x*u,-x*u),Q(s["forearm.L"],-(c?1.1:.35)-.2*Math.max(0,-u),0,0),Q(s["forearm.R"],-(c?1.1:.35)-.2*Math.max(0,u),0,0),Q(s.spine,c?.2:.04,-.12*u*(c?1.2:1),0),Q(s.chest,0,.12*u*(c?1.2:1),0),Q(s.head,c?-.12:-.02,0,0),s.hips.position.y=r.hips.y-(c?.05:.025)+Math.abs(f)*(c?.06:.03),s.hips.rotation.y=.1*u*(c?1:.8),s["upperarm.L"].rotation.z=-a-(c?.12:0),s["upperarm.R"].rotation.z=a+(c?.12:0),o("L",c?1.15:.4),o("R",c?1.15:.4)}else if(t==="aim"||t==="aimLow")i.gun.visible=!0,s.hips.position.y=r.hips.y-.07,Q(s["upperleg.L"],-.3,0,.12),Q(s["upperleg.R"],.2,0,-.12),Q(s["lowerleg.L"],.38,0,0),Q(s["lowerleg.R"],.3,0,0),Q(s["foot.L"],-.08,0,0),Q(s["foot.R"],.1,0,0),t==="aim"?(Q(s.spine,.1,.12,0),Q(s.chest,.05,.06,0),Q(s.head,-.16,-.18,0),Q(s["upperarm.R"],-1.6,.08,.25),Q(s["forearm.R"],-.12,0,.04),Q(s["hand.R"],0,0,0),Q(s["upperarm.L"],-1.58,-.43,-.25),Q(s["forearm.L"],-.26,0,-.06),Q(s["hand.L"],0,0,0),o("R",1.25),o("L",1.05),s["thumb.R"].rotation.set(0,0,.1),s["thumb.L"].rotation.set(0,0,-.1)):(Q(s.spine,.08,.1,0),Q(s.head,-.08,-.12,0),Q(s["upperarm.R"],-.55,.15,.2),Q(s["forearm.R"],-1.2,0,0),Q(s["hand.R"],0,0,0),Q(s["upperarm.L"],-.6,-.2,-.2),Q(s["forearm.L"],-1.25,0,0),Q(s["hand.L"],0,0,0),o("R",1.25),o("L",.9));else if(t==="jump")Q(s["upperleg.L"],-.9,0,.1),Q(s["upperleg.R"],-.25,0,-.1),Q(s["lowerleg.L"],1.1,0,0),Q(s["lowerleg.R"],.6,0,0),l(-2.2,-2.2),Q(s["forearm.L"],-.3,0,0),Q(s["forearm.R"],-.3,0,0),Q(s.spine,.05,0,0);else if(t==="sit")Q(s["upperleg.L"],-1.5,0,.05),Q(s["upperleg.R"],-1.5,0,-.05),Q(s["lowerleg.L"],1.5,0,0),Q(s["lowerleg.R"],1.5,0,0),s.hips.position.y=r.hips.y-.56,Q(s.spine,-.12,0,0),Q(s["upperarm.L"],-.9,0,-.1),Q(s["upperarm.R"],-.9,0,.1),Q(s["forearm.L"],-.6,0,0),Q(s["forearm.R"],-.6,0,0);else if(t==="relaxed"){let c=Math.sin(e*1.4)*.012,h=Math.sin(e*.5)*.18;Q(s.chest,c,.03,0),Q(s.head,-c,h,0),Q(s["upperleg.L"],-.03,0,.05),Q(s["upperleg.R"],.06,0,-.1),Q(s["lowerleg.R"],.06,0,0),Q(s["upperarm.R"],.05,0,.1),Q(s["forearm.R"],-.25,0,0),Q(s["upperarm.L"],.05,0,-.1),Q(s["forearm.L"],-.25,0,0),o("R",.45),o("L",.45)}else if(t==="pocket"){let c=Math.sin(e*.9)*.015;Q(s.chest,c,.03,0),Q(s.head,-.02,-.12+c,0),Q(s["upperleg.L"],.05,0,.08),Q(s["upperleg.R"],-.04,0,-.04),Q(s["upperarm.R"],.1,0,.12),Q(s["forearm.R"],-.55,0,.55),Q(s["upperarm.L"],.1,0,-.12),Q(s["forearm.L"],-.55,0,-.55),o("R",.7),o("L",.7)}else if(t==="thumbs"){let c=Math.sin(e*1.5)*.01;Q(s.chest,c,-.06,0),Q(s.head,-.02,.12,0),Q(s["upperleg.L"],-.02,0,.06),Q(s["upperleg.R"],.04,0,-.08),Q(s["upperarm.R"],-.55,-.15,.35),Q(s["forearm.R"],-1.5,0,.4),Q(s["hand.R"],0,0,0),o("R",1.25),Q(s["thumb.R"],0,0,-.9),Q(s["upperarm.L"],.1,0,-.12),Q(s["forearm.L"],-.6,0,-.4)}else if(t==="wave"){let c=Math.sin(e*6)*.35,h=Math.sin(e*1.5)*.01;Q(s.chest,h,-.05,0),Q(s.head,-.02,.1,0),Q(s["upperleg.L"],-.02,0,.05),Q(s["upperleg.R"],.02,0,-.05),Q(s["upperarm.R"],-.35,0,2.55),Q(s["forearm.R"],-.9,c*.4,c),Q(s["hand.R"],0,0,c*.5),o("R",.15),Q(s["upperarm.L"],.1,0,-.12),Q(s["forearm.L"],-.5,0,-.35)}else if(t==="phone"){let c=Math.sin(e*1.5)*.01;Q(s.chest,.06+c,0,0),Q(s.head,.38,0,0),Q(s["upperleg.L"],-.02,0,.05),Q(s["upperleg.R"],.03,0,-.05),Q(s["upperarm.R"],-.65,.2,.2),Q(s["forearm.R"],-1.7,0,.5),Q(s["hand.R"],-.2,0,0),o("R",.8),Q(s["upperarm.L"],.1,0,-.12),Q(s["forearm.L"],-.5,0,-.35)}else if(t==="crouch"){let c=Math.sin(e*2)*.01;s.hips.position.y=r.hips.y-.4,s.hips.position.z=r.hips.z+.04,Q(s["upperleg.L"],-1.05,0,.12),Q(s["upperleg.R"],-1.05,0,-.12),Q(s["lowerleg.L"],1.95,0,0),Q(s["lowerleg.R"],1.95,0,0),Q(s.spine,.3+c,0,0),Q(s.chest,.1,0,0),Q(s.head,-.3,0,0),Q(s["upperarm.L"],-.5,0,-.1),Q(s["upperarm.R"],-.5,0,.1),Q(s["forearm.L"],-.7,0,0),Q(s["forearm.R"],-.7,0,0)}else if(t==="sitg"){let c=Math.sin(e*1.4)*.01;s.hips.position.y=r.hips.y-.7,Q(s["upperleg.L"],-1.5,0,.18),Q(s["upperleg.R"],-1.5,0,-.18),Q(s["lowerleg.L"],.12,0,0),Q(s["lowerleg.R"],.12,0,0),Q(s.spine,-.12+c,0,0),Q(s.head,.08,Math.sin(e*.5)*.25,0),Q(s["upperarm.L"],.45,0,-.25),Q(s["upperarm.R"],.45,0,.25),Q(s["forearm.L"],-.15,0,0),Q(s["forearm.R"],-.15,0,0),o("L",.3),o("R",.3)}else if(t==="punch"){let c=e<.25?-e/.25*.35:e<.5?-.35+(e-.25)/.25*1.35:Math.max(0,1-(e-.5)/.4),h=Math.max(0,c),u=Math.min(0,c);Q(s.hips,0,.35*h-.2*-u,0),Q(s.chest,.05,-.55*h-.25*-u,0),Q(s.spine,.1*h,0,0),Q(s.head,0,.45*h,0),Q(s["upperleg.L"],-.35,0,.1),Q(s["upperleg.R"],.3,0,-.1),Q(s["lowerleg.L"],.25,0,0),Q(s["lowerleg.R"],.15,0,0),Q(s["upperarm.R"],-.9-.7*h-u*.3,0,.12-.12*h),Q(s["forearm.R"],-1.9+1.8*h,0,0),o("R",1.3),Q(s["upperarm.L"],-.95,0,-.15),Q(s["forearm.L"],-1.9,0,0),o("L",1.3)}else if(t==="scared"){let c=Math.sin(e*22)*.03;s.hips.position.y=r.hips.y-.2,Q(s["upperleg.L"],-.6,0,.12),Q(s["upperleg.R"],-.6,0,-.12),Q(s["lowerleg.L"],1,0,0),Q(s["lowerleg.R"],1,0,0),Q(s.spine,.28+c,0,0),Q(s.chest,.1,c,0),Q(s.head,.2,c*2,0),Q(s["upperarm.R"],-1.9,0,.25),Q(s["forearm.R"],-1.8,0,.7),Q(s["upperarm.L"],-1.9,0,-.25),Q(s["forearm.L"],-1.8,0,-.7),o("R",.8),o("L",.8)}}var L_=[{role:"civilian",top:"#b53a2e",pants:"#2b3140",skinTone:"#c68e63",hair:"#16110d"},{role:"civilian",top:"#2f7a5a",pants:"#3a3a44",skinTone:"#8d5a3b",hair:"#0d0a08"},{role:"civilian",top:"#d9a52b",pants:"#27384f",skinTone:"#e0ac85",hair:"#4a3020"},{role:"civilian",top:"#5b4aa8",pants:"#22252b",skinTone:"#a8714e",hair:"#120d0a"}],D_=i=>L_[((i|0)%4+4)%4],op=new Ke,os=class{constructor(t,e){this.ch=rp(e||D_(t)),this.group=new Yt,this.group.add(this.ch.group),this.height=1.78,this.tris=this.ch.tris,this.tWalk=0,this.tRun=0,this.t=0,this.pose="idle",this.seated=!1,this.prev={};for(let n in this.ch.bones)this.prev[n]={q:new Ke,p:new U,init:!1}}update(t,e){this.t+=t;let n="idle",s=this.t,r=e.speed||0;e.seated?n="sit":!e.grounded&&Math.abs(e.vy||0)>1.2?n="jump":r>3.2?(n="run",this.tRun+=t*r/4.2,s=this.tRun):r>.25&&(n="walk",this.tWalk+=t*r/1.7,s=this.tWalk),e.sitg&&!e.seated?n="sitg":e.crouch&&n!=="jump"&&!e.seated&&(n="crouch"),n==="idle"&&e.gesture&&(n=e.gesture),e.punch>0&&!e.seated&&(n="punch",s=e.punch),$u(this.ch,n,s,1);let o=Math.min(1,t*16);for(let a in this.ch.bones){let l=this.ch.bones[a],c=this.prev[a];if(!c.init||this.pose===n&&!1){c.q.copy(l.quaternion),c.p.copy(l.position),c.init=!0;continue}op.copy(l.quaternion),c.q.slerp(op,o),l.quaternion.copy(c.q),c.p.lerp(l.position,o),l.position.copy(c.p)}this.pose=n,this.seated=n==="sit"}dispose(){this.group.traverse(t=>{if(t.isMesh){t.geometry.dispose();let e=t.material;(Array.isArray(e)?e:[e]).forEach(n=>n.dispose())}})}};var ap=[{top:"#e8e4d8",pants:"#3d4a63",skinTone:"#c68e63",hair:"#16110d"},{top:"#2f5d7a",pants:"#2a2a2e",skinTone:"#8d5a3b",hair:"#0d0a08"},{top:"#a83a3a",pants:"#1f2a44",skinTone:"#d9a077",hair:"#2a1a10"},{top:"#4d7a4f",pants:"#5a4a3a",skinTone:"#b07a52",hair:"#0d0a08"},{top:"#d6c15a",pants:"#2b2f3a",skinTone:"#e0ac85",hair:"#4a3020"},{top:"#6b5aa8",pants:"#3a3a44",skinTone:"#a8714e",hair:"#120d0a"},{top:"#f2f2f2",pants:"#54606e",skinTone:"#c68e63",hair:"#1a120c"},{top:"#8a5a32",pants:"#26303f",skinTone:"#7a4d32",hair:"#0a0806"},{top:"#3b3b44",pants:"#3b3b44",skinTone:"#d2996f",hair:"#16110d"},{top:"#c46a2a",pants:"#2a2f3a",skinTone:"#b98058",hair:"#120d0a"}],N_=i=>{let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)},lp=46,U_=lp*lp,Oc=class{constructor(t,e=14){this.scene=t,this.list=[];let n=N_(777),s=Se.GRID;for(let r=0;r<e;r++){let o=r%2,a=s[Math.floor(n()*s.length)],l=n()<.5?-1:1,c=-112,h=112,u=h-c;this.list.push({i:r,axis:o,g:a,off:l*8.1,lo:c,span:u,sp:1.25+n()*.5,ph:n()*2*u,look:ap[r%ap.length],actor:null,x:0,z:0,yaw:0,st:"walk",hitT:0,vx:0,vz:0,vy:0,y:0,lie:0,wait:0,pause:0,prevS:0,hp:0,hpMax:0,brave:!1,fear:0,timer:0,dx:0,dz:0,punchT:0,atk:0,pend:!1});let f=this.list[this.list.length-1];f.hpMax=f.hp=2+Math.floor(n()*3),f.brave=n()<.4,f.fear=n()}}pose(t,e){let n=t.span*2,s=((e*t.sp+t.ph)%n+n)%n,r=s<t.span,o=r?s:n-s,a=t.lo+o;t.axis===0?(t.x=t.g+t.off,t.z=a,t.yaw=r?0:Math.PI):(t.x=a,t.z=t.g+t.off,t.yaw=r?Math.PI/2:-Math.PI/2)}update(t,e,n,s,r,o,a={}){for(let l of this.list){let c=0,h=null;if(l.st==="walk"){if(this.pose(l,e),r&&a.sit&&l.fear>.55){let x=r.x-l.x,m=r.z-l.z;x*x+m*m<36&&this.scare(l,r.x,r.z)}}else if(l.st==="cower")l.timer-=t,h="scared",l.timer<=0&&(l.st="flee",l.timer=4+Math.random()*2);else if(l.st==="flee")l.timer-=t,c=5.4,l.x+=l.dx*c*t,l.z+=l.dz*c*t,l.yaw=Math.atan2(l.dx,l.dz),l.timer<=0&&(l.st="gone",l.wait=0);else if(l.st==="fight")if(!r)l.st="flee",l.dx=Math.sin(l.yaw+Math.PI),l.dz=Math.cos(l.yaw+Math.PI),l.timer=3;else{let x=r.x-l.x,m=r.z-l.z,p=Math.hypot(x,m)||1;l.yaw=Math.atan2(x,m),p>16?(l.st="gone",l.wait=0):p>1.25&&l.punchT===0&&(c=3.6,l.x+=x/p*c*t,l.z+=m/p*c*t),l.atk-=t,l.punchT===0&&p<1.7&&l.atk<=0&&(l.punchT=.001,l.pend=!0,l.atk=1.4+Math.random()*.6,this.alarm(l.x,l.z,11,l)),l.punchT>0&&(l.punchT+=t/.45,l.pend&&l.punchT>=.42&&(l.pend=!1,p<2&&a.hitMe&&a.hitMe(l)),l.punchT>=1&&(l.punchT=0))}else l.st==="fly"?(l.vy-=9.81*t,l.x+=l.vx*t,l.z+=l.vz*t,l.y+=l.vy*t,l.vx*=Math.exp(-.6*t),l.vz*=Math.exp(-.6*t),l.y<=0&&(l.y=0,l.vx*=.3,l.vz*=.3,Math.abs(l.vy)>1.5?l.vy=-l.vy*.25:(l.vy=0,l.st="lie",l.wait=0)),l.lie=Math.min(1,l.lie+t*4)):l.st==="lie"?(l.wait+=t,l.vx=l.vz=0,l.wait>5&&(l.st="gone",l.wait=0)):l.st==="gone"&&(l.wait+=t,l.wait>6&&(l.st="walk",l.lie=0,l.y=0,l.hp=l.hpMax,l.punchT=0));let u=l.x-n.x,f=l.z-n.z;if(!(l.st!=="gone"&&u*u+f*f<U_)){l.actor&&(l.actor.group.visible=!1),l.prevS=0;continue}l.actor||(l.actor=new os(l.i,l.look),this.scene.add(l.actor.group));let g=l.actor;if(g.group.visible=!0,l.st==="walk")if(r){let x=r.x-l.x,m=r.z-l.z;c=x*x+m*m<1.3?0:l.sp}else c=l.sp;if(l.st==="walk"||l.st==="flee"||l.st==="cower"||l.st==="fight")for(let x of s){if(Math.abs(x.speed)<2.5||x.y>1)continue;let m=l.x-x.x,p=l.z-x.z,v=Math.sin(x.yaw),T=Math.cos(x.yaw),b=m*v+p*T,_=-m*T+p*v;if(Math.abs(b)<(x.hl||2.2)+.35&&Math.abs(_)<(x.hw||1)+.35){l.st="fly",l.vx=x.vx*.85+-T*(_>0?1:-1)*1.2,l.vz=x.vz*.85+v*(_>0?1:-1)*1.2,l.vy=2.6+Math.min(4,Math.abs(x.speed)*.14),l.lie=0,c=0,this.alarm(l.x,l.z,14,l),o&&o(l,Math.abs(x.speed));break}}g.group.position.set(l.x,l.y,l.z),g.group.rotation.y=l.yaw,g.group.rotation.x=-1.45*(l.st==="fly"||l.st==="lie"?l.lie:0),g.update(t,{speed:c,grounded:l.st!=="fly",vy:l.st==="fly"?3:0,stun:0,seated:!1,gesture:h,punch:l.punchT})}}alarm(t,e,n,s){for(let r of this.list){if(r===s||r.st!=="walk"||r.brave)continue;let o=r.x-t,a=r.z-e;o*o+a*a<n*n&&this.scare(r,t,e)}}scare(t,e,n){let s=t.x-e,r=t.z-n,o=Math.hypot(s,r)||1;t.dx=s/o,t.dz=r/o,t.yaw=Math.atan2(t.dx,t.dz),Math.random()<.5?(t.st="cower",t.timer=1.5+Math.random()*1.5,t.yaw=Math.atan2(-t.dx,-t.dz)):(t.st="flee",t.timer=4+Math.random()*2)}punch(t,e,n,s,r){let o=null,a=9;for(let l of this.list){if(l.st!=="walk"&&l.st!=="flee"&&l.st!=="cower"&&l.st!=="fight")continue;let c=l.x-t,h=l.z-e,u=c*c+h*h;u>3.4||u<1e-4||(c*n+h*s)/Math.sqrt(u)<.3||u<a&&(a=u,o=l)}return o?(o.hp-=1,o.hp<=0?(o.st="fly",o.vx=n*4.5,o.vz=s*4.5,o.vy=3.2,o.lie=0,o.punchT=0):o.brave?(o.st="fight",o.atk=.5,o.punchT=0,o.pend=!1,o.vx=o.vz=0):(o.st=Math.random()<.5?"cower":"flee",o.timer=o.st==="cower"?1:5,o.dx=n,o.dz=s,o.yaw=Math.atan2(n,s)),this.alarm(o.x,o.z,12,o),r&&r(o,o.hp<=0),!0):!1}dispose(){for(let t of this.list)t.actor&&(this.scene.remove(t.actor.group),t.actor.dispose());this.list.length=0}};var ua={fun:{top:"#35a7ff",horizon:"#e8fbff",bottom:"#fff6d8",fog:"#d9f4ff",fogNear:120,fogFar:640,sun:"#fff4d6",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#d4ecff",hemiGround:"#bfe8a0",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.6},jungle:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},annoy:{top:"#4a3aa8",horizon:"#ffb3d1",bottom:"#ffe9f3",fog:"#f5b8dc",fogNear:90,fogFar:520,sun:"#ffe0c8",sunPos:[-40,70,-60],sunI:2.4,hemiSky:"#e8d6ff",hemiGround:"#ffb7dc",hemiI:1.05,exp:1.05,waterA:"#7fe8ff",waterB:"#2b9be8",water:"water",env:.6},maze:{top:"#5cc8ff",horizon:"#ffe0f0",bottom:"#fff4fb",fog:"#ffd6ea",fogNear:90,fogFar:520,sun:"#fff0d8",sunPos:[-40,90,-60],sunI:2.7,hemiSky:"#ffe6f6",hemiGround:"#ffb7dc",hemiI:1.1,exp:1.05,waterA:"#7fe8ff",waterB:"#2b9be8",water:"water",env:.6},arena:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},gta:{top:"#2f6fcf",horizon:"#ffd7a3",bottom:"#fde8c8",fog:"#ecd0a8",fogNear:180,fogFar:950,sun:"#ffc98a",sunPos:[-75,46,62],sunI:3.6,hemiSky:"#a9c8f0",hemiGround:"#a08662",hemiI:.75,exp:1,waterA:"#37c4e8",waterB:"#1388c9",water:"water",env:.7},hunt:{top:"#2f8fd8",horizon:"#d6f0b8",bottom:"#eefad0",fog:"#bfe3a8",fogNear:60,fogFar:340,sun:"#fff0c0",sunPos:[-50,80,-40],sunI:2.5,hemiSky:"#cfe9ff",hemiGround:"#5fae52",hemiI:1.05,exp:1.02,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55},quest:{top:"#3a9be8",horizon:"#dff6c9",bottom:"#f3ffd9",fog:"#cfeec0",fogNear:70,fogFar:380,sun:"#fff3c8",sunPos:[-50,85,-40],sunI:2.6,hemiSky:"#cfe9ff",hemiGround:"#6fbf5a",hemiI:1.05,exp:1.05,waterA:"#37d7e8",waterB:"#1388c9",water:"water",env:.55}},Ju=null;function cp(){return Ju||(Ju=(async()=>{try{await Promise.race([Promise.all([document.fonts.load('400 100px "Lilita One"'),document.fonts.load('400 100px "Fredoka One"'),document.fonts.load('400 100px "Noto Nastaliq Urdu"',"\u0639\u06A9\u0631\u0645\u06C1")]),new Promise(i=>setTimeout(i,2500))])}catch{}})()),Ju}var Hc='"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';function Ku(i="HARIS",t=null,e=["#fff7a8","#ffc83d","#ff7a1a"]){let n=document.createElement("canvas");n.width=1024,n.height=t?512:400;let s=n.getContext("2d");s.textAlign="center",s.textBaseline="middle";let r=300;for(s.font=`${r}px ${Hc}`;s.measureText(i).width>900&&r>80;)r-=10,s.font=`${r}px ${Hc}`;let o=t?220:200;s.lineJoin="round",s.shadowColor="rgba(255,190,60,0.9)",s.shadowBlur=40,s.lineWidth=46,s.strokeStyle="rgba(255,170,40,0.35)",s.strokeText(i,512,o),s.shadowBlur=0,s.lineWidth=40,s.strokeStyle="#1b0f4a",s.strokeText(i,512,o),s.lineWidth=18,s.strokeStyle="#ffffff",s.strokeText(i,512,o),s.fillStyle="#b0420b";for(let c=14;c>0;c-=2)s.fillText(i,512,o+c);let a=s.createLinearGradient(0,o-r/2,0,o+r/2);a.addColorStop(0,e[0]),a.addColorStop(.55,e[1]),a.addColorStop(1,e[2]),s.fillStyle=a,s.fillText(i,512,o),s.globalCompositeOperation="source-atop",s.fillStyle="rgba(255,255,255,0.35)",s.fillRect(0,o-r/2,1024,r*.18),s.globalCompositeOperation="source-over",t&&(s.font=`90px ${Hc}`,s.lineWidth=16,s.strokeStyle="#1b0f4a",s.strokeText(t,512,440),s.fillStyle="#ffffff",s.fillText(t,512,440));let l=new nn(n);return l.colorSpace=Ne,l.anisotropy=8,l}function F_(i,t="#ff3b6b",e="#ffffff"){let n=document.createElement("canvas");n.width=1024,n.height=256;let s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,1024,256);let r=32;s.fillStyle=e;for(let a=0;a<1024;a+=r)for(let l=0;l<256;l+=r)(a+l)/r%2===0&&(l<r||l>=256-r)&&s.fillRect(a,l,r,r);s.font=`150px ${Hc}`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.lineWidth=26,s.strokeStyle="#1b0f4a",s.strokeText(i,512,132),s.fillStyle="#fff",s.fillText(i,512,132);let o=new nn(n);return o.colorSpace=Ne,o.anisotropy=8,o}function hp(){let i=document.createElement("canvas");i.width=128,i.height=128;let t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,128,128),t.fillStyle="rgba(0,0,0,0.28)",t.beginPath(),t.moveTo(64,14),t.lineTo(108,70),t.lineTo(80,70),t.lineTo(80,112),t.lineTo(48,112),t.lineTo(48,70),t.lineTo(20,70),t.closePath(),t.fill();let e=new nn(i);return e.colorSpace=Ne,e.anisotropy=4,e}function z_(i="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,128,128);let r=new nn(e);return r.colorSpace=Ne,r}function ju(i){let t=new U(...i.sunPos).normalize(),e=new je({side:sn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ot(i.top)},horizon:{value:new Ot(i.horizon)},bottom:{value:new Ot(i.bottom)},sunDir:{value:t},sunColor:{value:new Ot(i.sun)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        gl_FragColor = vec4(c, 1.0); }`}),n=new et(new ve(900,32,16),e);return n.frustumCulled=!1,n.renderOrder=-10,n}function Qu(i,t){let e=new Ot(i.fog),n=i.water==="lava"?1:i.water==="grid"?2:0,s=new je({uniforms:{time:{value:0},cA:{value:new Ot(i.waterA)},cB:{value:new Ot(i.waterB)},fogC:{value:e},fogN:{value:i.fogNear},fogF:{value:i.fogFar},kind:{value:n}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
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
      }`}),r=new et(new We(1600,1600),s);return r.rotation.x=-Math.PI/2,r.position.y=t,r.frustumCulled=!1,r.renderOrder=-5,r.userData.mat=s,r}var ca=class{constructor(t=500){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.s0=new Float32Array(t);let e=new Ee;e.setAttribute("position",new we(this.pos,3).setUsage(Lr)),e.setAttribute("color",new we(this.col,3).setUsage(Lr)),e.setAttribute("size",new we(this.size,1).setUsage(Lr)),e.setAttribute("alpha",new we(this.alpha,1).setUsage(Lr)),e.setDrawRange(0,0),this.mat=new je({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }"}),this.points=new _r(e,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=e,this._c=new Ot}emit(t,e,n,s,r={}){var a,l,c,h,u,f,d,g;let o=this._c.set((a=r.color)!=null?a:"#ffffff");for(let x=0;x<s;x++){let m=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),p=Math.random()*Math.PI*2,v=((l=r.speed)!=null?l:3)*(.3+Math.random()*.9),T=(c=r.up)!=null?c:3,b=m*3;this.pos[b]=t+(Math.random()-.5)*((h=r.spread)!=null?h:.3),this.pos[b+1]=e,this.pos[b+2]=n+(Math.random()-.5)*((u=r.spread)!=null?u:.3),this.vel[b]=Math.cos(p)*v,this.vel[b+1]=T*(.4+Math.random()*.9),this.vel[b+2]=Math.sin(p)*v;let _=r.rainbow?this._c.setHSL(Math.random(),.9,.6):o;this.col[b]=_.r,this.col[b+1]=_.g,this.col[b+2]=_.b,this.life[m]=this.maxLife[m]=((f=r.life)!=null?f:.6)*(.6+Math.random()*.8),this.s0[m]=((d=r.size)!=null?d:.35)*(.6+Math.random()*.8),this.size[m]=this.s0[m],this.grav[m]=(g=r.gravity)!=null?g:9,this.alpha[m]=1}}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.alpha[e]=0,this.size[e]=0;continue}this.life[e]-=t;let n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let s=Math.max(0,this.life[e]/this.maxLife[e]);this.alpha[e]=Math.min(1,s*1.6),this.size[e]=this.s0[e]*(.4+.6*s)}this.geo.setDrawRange(0,this.n),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0}setScale(t){this.mat.uniforms.scale.value=t*.9}},ha=class{constructor(t,e=350){this.kind=t,this.n=e;let n=new Float32Array(e*3);this.seed=new Float32Array(e*3);for(let o=0;o<e*3;o++)this.seed[o]=Math.random();let s=new Ee;s.setAttribute("position",new we(n,3));let r={fun:"#fff6a8",jungle:"#fffbb0",quest:"#fff6c0",hunt:"#fff6c0",gta:"#fffbe0",maze:"#ffe6f6",annoy:"#ffe6f6"};this.mat=new vr({color:r[t]||"#fff",size:t==="frost"?.28:.22,transparent:!0,opacity:.85,depthWrite:!1,map:z_(),blending:t==="neon"||t==="canyon"?mi:Ki}),this.points=new _r(s,this.mat),this.points.frustumCulled=!1,this.pos=n}update(t,e){let r=this.kind,o=this.pos,a=this.seed;for(let l=0;l<this.n;l++){let c=l*3,h=a[c]*70,u=a[c+1]*36,f=a[c+2]*70;r==="frost"?(u=36-(t*(2+a[c]*2)+a[c+1]*36)%36,h+=Math.sin(t*.7+l)*1.2):r==="canyon"?(u=(t*(1.5+a[c]*2)+a[c+1]*36)%36,h+=Math.sin(t*.9+l)*.8):(u+=Math.sin(t*.6+l)*.8,h+=Math.cos(t*.4+l*1.3)*.8),o[c]=e.x+((h-e.x)%70+70)%70-70/2,o[c+1]=e.y-36/2+u,o[c+2]=e.z+((f-e.z)%70+70)%70-70/2}this.points.geometry.attributes.position.needsUpdate=!0}};function B_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function up(i,t,e,n){let s=ua[t],r=new Yt;r.name="scenery";let o=B_(t.length*9973+17),a=new As,l=new As,c=e.length,h=-c-40,u=0,f=82,d=[],g=(_,M)=>(o()<.5?-1:1)*(_+f+o()*(M-_)),x=_=>_[Math.floor(o()*_.length)],m=(_,M=16,S=10)=>new ve(_,M,S),p=(_,M,S,y=14)=>new Dt(_,M,S,y),v=(_,M,S=14)=>new wn(_,M,S);if(t==="fun"){for(let _=0;_<46;_++){let M=70-o()*(c+200),S=g(26,140),y=1+o()*1.8,w=o(),A=u-1;if(w<.4){let C=x(["#ff4d6d","#3ec6e0","#ffd23f","#8b5cf6"]);a.add(p(6*y,6*y,5*y,16),S,A+2.5*y,M,C),a.add(v(6.8*y,5*y,16),S,A+7.5*y,M,"#ffffff"),a.add(v(1.1*y,3*y,8),S,A+11*y,M,C),a.add(p(.12*y,.12*y,4*y,4),S,A+14*y,M,"#ffffff")}else if(w<.7){for(let C=0;C<8;C++)a.add(p(2.2*y,2.2*y,2.4*y,12),S,A+(1.2+C*2.4)*y,M,C%2?"#ffffff":"#ff4d6d");a.add(v(3*y,4*y,12),S,A+21*y,M,"#ffd23f")}else a.add(p(.3*y,.4*y,9*y,6),S,A+4.5*y,M,"#5b2a86"),l.add(m(1.1*y,10,8),S,A+9.6*y,M,x(["#ffe27a","#ff9ccb","#9cf0ff"]))}[[-120,-c*.25],[140,-c*.62],[-130,-c*.9]].forEach(([_,M],S)=>{let y=new Yt;y.position.set(_,u+34,M),y.rotation.y=S%2?.5:-.5;let w=new et(new Ie(30,.9,8,48),new ee({color:"#ffffff",roughness:.4}));y.add(w);let A=new ee({color:"#ff4d6d"});for(let L=0;L<8;L++){let I=new et(p(.35,.35,60,5),A);I.rotation.z=L*Math.PI/8,y.add(I)}let C=[];for(let L=0;L<12;L++){let I=L/12*Math.PI*2,D=new et(new Qt(4.4,3.4,3.4),new ee({color:x(["#ffd23f","#3ec6e0","#ff4d6d","#8bd450"]),roughness:.35}));D.position.set(Math.cos(I)*30,Math.sin(I)*30-2,0),y.add(D),C.push([D,I])}let E=new ee({color:"#5b2a86"});for(let L of[-1,1]){let I=new et(p(1.2,1.6,44,6),E);I.position.set(L*11,-20,0),I.rotation.z=L*-.28,y.add(I)}r.add(y),d.push(L=>{let I=L*.12*(S%2?-1:1);w.rotation.z=I,y.children.forEach(D=>{var F,H;D.geometry&&D.geometry.type==="CylinderGeometry"&&D.position.x===0&&D.position.y===0&&(D.rotation.z=((H=(F=D.userData).b)!=null?H:F.b=D.rotation.z)+I)}),C.forEach(([D,F])=>D.position.set(Math.cos(F+I)*30,Math.sin(F+I)*30-2,0))})});for(let _=0;_<26;_++){let M=new Yt,S=x(["#ff5fa8","#ffd84d","#4dd0ff","#9b7bff","#5ee89a"]),y=new et(m(1.6,16,12),new ee({color:S,roughness:.25}));y.scale.y=1.2;let w=new et(p(.03,.03,4,4),new Te({color:"#ffffff"}));w.position.y=-3,M.add(y,w),M.position.set(g(14,80),8+o()*34,40-o()*(c+120)),M.userData.ph=o()*6,r.add(M),d.push(A=>{M.position.y+=Math.sin(A*.8+M.userData.ph)*.004,M.rotation.z=Math.sin(A*.6+M.userData.ph)*.08})}}else if(t==="jungle"){for(let _=0;_<90;_++){let M=o()*Math.PI*2,S=120+o()*90,y=150+o()*90,w=Math.cos(M)*S,A=-108+Math.sin(M)*y,C=1.4+o()*2.4;a.add(p(.7*C,1*C,9*C,6),w,4.5*C,A,"#6b4423"),a.add(m(4.4*C,8,6),w,11*C,A,x(["#2e9b3f","#3fb14c","#27863a"]))}for(let _=0;_<16;_++){let M=_/16*Math.PI*2+o()*.3,S=Math.cos(M)*(260+o()*60),y=-108+Math.sin(M)*(300+o()*60),w=1+o()*1.4;a.add(v(40*w,70*w,7),S,30*w,y,x(["#5f9a7a","#6aa88a","#4f8a6c"])),a.add(v(14*w,20*w,7),S,66*w,y,"#ffffff")}for(let _=0;_<26;_++){let M=new Yt,S=(o()-.5)*520,y=-108+(o()-.5)*520,w=85+o()*50,A=3+Math.floor(o()*3);for(let C=0;C<A;C++){let E=new et(m(7+o()*6,10,8),new Te({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));E.position.set(C*9-A*4,o()*3,o()*5),E.scale.y=.55,M.add(E)}M.position.set(S,w,y),M.userData.ph=o()*6,r.add(M),d.push(C=>{M.position.x+=.012*(1+M.userData.ph%1),M.position.x>300&&(M.position.x=-300)})}}else if(t==="gta")for(let _=0;_<46;_++){let M=new Yt,S=(o()-.5)*900,y=(o()-.5)*900,w=130+o()*70,A=3+Math.floor(o()*3);for(let C=0;C<A;C++){let E=new et(m(8+o()*8,10,8),new Te({color:"#ffffff",transparent:!0,opacity:.92,fog:!1}));E.position.set(C*11-A*5,o()*4,o()*6),E.scale.y=.6,M.add(E)}M.position.set(S,w,y),M.userData.ph=o()*6,r.add(M),d.push(C=>{M.position.x+=.02*(1+M.userData.ph%1),M.position.x>480&&(M.position.x=-480)})}else if(t==="quest"||t==="hunt"||t==="maze"||t==="annoy")for(let _=0;_<40;_++){let M=new Yt,S=(o()-.5)*420,y=40-o()*(t==="maze"?860:640),w=70+o()*50,A=3+Math.floor(o()*3);for(let C=0;C<A;C++){let E=new et(m(6+o()*6,10,8),new Te({color:"#ffffff",transparent:!0,opacity:.9,fog:!1}));E.position.set(C*8-A*4,o()*3,o()*5),E.scale.y=.55,M.add(E)}M.position.set(S,w,y),M.userData.ph=o()*6,r.add(M),d.push(C=>{M.position.x+=.012*(1+M.userData.ph%1),M.position.x>260&&(M.position.x=-260)})}if(t==="maze"){let _=["#ff6b9d","#ffd23f","#4cc9f0","#80ed99","#b58cff","#ff9f1c"];for(let M=0;M<100;M++){let S=30-M*8.6-o()*4,y=M%2?1:-1,w=y*(24+o()*55),A=_[Math.floor(o()*_.length)],C=Math.floor(o()*3),E=.8+o()*.9;C===0?(a.add(p(.6*E,.6*E,16*E,8),w,-3+8*E,S,"#ffffff"),a.add(m(4.4*E,18,12),w,-3+17*E,S,A),a.add(new Ie(3*E,.55*E,8,20),w,-3+17*E,S+3.4*E,"#ffffff")):C===1?(a.add(new Ie(5*E,2.2*E,10,22).rotateX(Math.PI/2),w,-2.2+2.2*E,S,"#e8b878"),a.add(new Ie(5*E,1.7*E,10,22).rotateX(Math.PI/2),w,-2.2+3.1*E,S,A)):(a.add(v(3.4*E,9*E,14).rotateX(Math.PI),w,-3+4.5*E,S,"#e8b878"),a.add(m(3.8*E,16,10),w,-3+10*E,S,A),a.add(m(1.2*E,10,8),w,-3+14*E,S,"#ff3d68"))}}let T=a.build(new ee({vertexColors:!0,roughness:.55}));T&&(T.castShadow=!1,T.receiveShadow=!1,r.add(T));let b=l.build(new Te({vertexColors:!0,toneMapped:!1}));if(b&&r.add(b),t!=="jungle"&&t!=="quest"&&t!=="arena"&&t!=="hunt"&&t!=="gta"){let _=new Yt;_.name="brand",r.add(_);let M=Ku("HARIS","MADE THIS GAME"),S=e.finishPlat,y=C=>new ee({color:C,roughness:.4}),w=(C,E,L,I,D)=>{let F=new Yt;F.position.set(0,E,C);let H=y("#2b1c6b");for(let Z of[-1,1]){let j=new et(new Qt(1.2,9,1.2),H);j.position.set(Z*L/2,4.5,0),j.castShadow=!0,F.add(j)}let K=new et(new We(L,L/4),new Te({map:F_(I,D),toneMapped:!1,side:hn}));K.position.set(0,8.6,.05),F.add(K);let V=new et(new Qt(L+1.2,.6,1.2),H);V.position.set(0,10.4,0),F.add(V),_.add(F)};w(e.startArch,0,20,"START","#22c55e"),w(e.finishZ+.01,S.top,19,"FINISH","#ef233c");let A=new et(new We(30,15),new Te({map:M,transparent:!0,toneMapped:!1,depthWrite:!1,fog:!1}));A.position.set(0,S.top+21,e.finishZ-.5),_.add(A),d.push(C=>{A.position.y=S.top+21+Math.sin(C*1.2)*.4})}return i.add(r),{group:r,update(_,M){for(let S of d)S(_);r.userData.stars&&r.userData.stars.position.copy(M)},dispose(){i.remove(r),r.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material:[_.material]).forEach(S=>{S.map&&S.map.dispose(),S.dispose()})})}}}var Et=null,Ls=null,vi=null,ls=null,Us=null,fp=!1;var Gc=null,as=null;function zi(){if(Et){Et.state==="suspended"&&Et.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Et=new i,Ls=Et.createGain(),Ls.gain.value=fp?0:.9,Ls.connect(Et.destination),vi=Et.createGain(),vi.gain.value=.7,vi.connect(Ls),ls=Et.createGain(),ls.gain.value=.22,ls.connect(Ls);let t=Et.sampleRate;Us=Et.createBuffer(1,t,Et.sampleRate);let e=Us.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}function dp(i){fp=i,Ls&&Ls.gain.setTargetAtTime(i?0:.9,Et.currentTime,.05)}function te(i,t,e,n,s=.3,r=0,o=vi){if(!Et)return;let a=Et.currentTime+r,l=Et.createOscillator(),c=Et.createGain();l.type=i,l.frequency.setValueAtTime(t,a),e!==t&&l.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+n),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(s,a+.012),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c),c.connect(o),l.start(a),l.stop(a+n+.05)}function Qe(i,t,e,n,s,r=0,o=1){if(!Et)return;let a=Et.currentTime+r,l=Et.createBufferSource();l.buffer=Us,l.loop=!0;let c=Et.createBiquadFilter();c.type=e,c.Q.value=o,c.frequency.setValueAtTime(n,a),c.frequency.exponentialRampToValueAtTime(Math.max(30,s),a+i);let h=Et.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(t,a+.015),h.gain.exponentialRampToValueAtTime(1e-4,a+i),l.connect(c),c.connect(h),h.connect(vi),l.start(a),l.stop(a+i+.05)}var O_=(i,t)=>i+Math.random()*(t-i),Xt={click(){te("triangle",520,780,.09,.25)},roar(i=1){te("sawtooth",i?180:260,i?60:110,.5,.22),te("square",i?120:200,50,.4,.12,.03),Qe(.4,.14,"lowpass",800,200)},tame(){te("triangle",520,780,.12,.25),te("triangle",660,990,.12,.25,.1),te("triangle",880,1320,.2,.25,.2)},select(){te("triangle",660,990,.12,.28),te("sine",990,1320,.1,.18,.06)},back(){te("triangle",520,330,.12,.22)},jump(){te("sine",280,640,.17,.3),te("triangle",420,880,.12,.08,.02)},land(i=10){let t=Math.min(.5,.12+i*.012);te("sine",140,60,.12,t),Qe(.09,t*.7,"lowpass",900,200)},step(){Qe(.045,.07,"bandpass",O_(500,800),300,0,2)},dive(){Qe(.3,.22,"bandpass",500,2200,0,1.5),te("sine",300,520,.2,.15)},bounce(){te("sine",180,920,.3,.38),te("triangle",360,1400,.22,.12,.03)},pickup(){te("triangle",520,1040,.18,.3),te("sine",780,1560,.24,.2,.07),te("sine",1170,2340,.2,.12,.14)},swing(){Qe(.24,.3,"bandpass",500,2800,0,1.2),te("sine",380,160,.16,.08)},shot(){te("sawtooth",900,140,.11,.3),Qe(.09,.4,"highpass",2500,900),te("square",200,60,.12,.18)},bonk(){te("square",190,55,.2,.42),Qe(.14,.45,"lowpass",3e3,300),te("triangle",820,220,.22,.22,.02)},hit(){te("sawtooth",420,70,.28,.28),Qe(.18,.3,"lowpass",1800,150),te("square",220,110,.15,.12,.04)},door(){te("square",150,90,.07,.3),te("square",110,70,.1,.25,.09),Qe(.05,.18,"lowpass",2e3,400)},honk(){te("square",392,392,.34,.2),te("square",494,494,.34,.2)},honkBig(){te("sawtooth",130,128,.95,.3),te("square",164,162,.95,.24),te("sawtooth",196,194,.95,.22),te("square",262,258,.95,.14),Qe(.12,.12,"lowpass",900,300)},skid(){Qe(.18,.1,"bandpass",2600,1800,0,3)},vroom(){te("sawtooth",70,160,.35,.2),te("sawtooth",90,210,.3,.1,.05)},splash(){Qe(.6,.45,"bandpass",1800,260,0,.8),Qe(.3,.2,"highpass",2400,900,.05),te("sine",220,80,.3,.12)},respawn(){Qe(.4,.22,"highpass",400,4e3,0,.7),te("sine",300,900,.3,.15)},checkpoint(){te("sine",660,660,.14,.3),te("sine",990,990,.25,.3,.1),te("triangle",1320,1320,.3,.1,.18)},tick(){te("sine",660,660,.14,.4)},go(){[523,659,784].forEach(i=>te("square",i,i,.5,.14)),te("sine",1046,1046,.6,.3)},join(){te("triangle",520,520,.1,.25),te("triangle",780,780,.14,.25,.09)},finish(){[523,659,784,1046,1318].forEach((i,t)=>{te("square",i,i,.22,.14,t*.09),te("triangle",i*2,i*2,.3,.08,t*.09)})},win(){[523,659,784,659,784,1046,1318].forEach((t,e)=>{te("square",t,t,.24,.13,e*.12),te("triangle",t/2,t/2,.3,.12,e*.12)})},lose(){[392,349,311,262].forEach((i,t)=>te("triangle",i,i*.97,.3,.22,t*.17))},warn(){te("square",880,880,.08,.14)}},H_={major:[0,2,4,7,9,12,14,16],minor:[0,3,5,7,10,12,15,17],lydian:[0,2,4,6,7,9,11,12],dorian:[0,2,3,5,7,9,10,12]},tf=[{bpm:112,root:65,scale:"lydian",prog:[0,5,3,4],lead:"triangle",bright:3400},{bpm:124,root:57,scale:"dorian",prog:[0,3,4,0],lead:"triangle",bright:3e3},{bpm:128,root:62,scale:"lydian",prog:[0,4,5,3],lead:"triangle",bright:3400},{bpm:132,root:64,scale:"major",prog:[0,4,3,4],lead:"triangle",bright:3400},{bpm:138,root:67,scale:"major",prog:[0,5,3,4],lead:"triangle",bright:3800},{bpm:126,root:59,scale:"minor",prog:[0,5,3,4],lead:"triangle",bright:3200},{bpm:130,root:55,scale:"dorian",prog:[0,5,3,4],lead:"triangle",bright:3300},{bpm:104,root:57,scale:"dorian",prog:[0,5,3,4],lead:"sawtooth",bright:2400},{bpm:120,root:60,scale:"major",prog:[0,3,4,0],lead:"triangle",bright:3e3}],ef=i=>440*Math.pow(2,(i-69)/12);function nf(i,t,e,n,s,r){let o=Et.createOscillator(),a=Et.createGain(),l=Et.createBiquadFilter();o.type=i,o.frequency.setValueAtTime(t,e),l.type="lowpass",l.frequency.value=r,a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(l),l.connect(a),a.connect(ls),o.start(e),o.stop(e+n+.05)}function k_(i,t){let e=Et.createBufferSource();e.buffer=Us;let n=Et.createBiquadFilter();n.type="highpass",n.frequency.value=7e3;let s=Et.createGain();s.gain.setValueAtTime(t,i),s.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(n),n.connect(s),s.connect(ls),e.start(i),e.stop(i+.06)}function G_(i){let t=Et.createOscillator(),e=Et.createGain();t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(40,i+.12),e.gain.setValueAtTime(.55,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e),e.connect(ls),t.start(i),t.stop(i+.2)}function Wr(i){if(Vc(),!Et)return;let t=tf[i]||tf[tf.length-1],e=H_[t.scale],n=60/t.bpm/4,s=1234+i*77,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=[];for(let l=0;l<4;l++){let c=[];for(let h=0;h<16;h++)c.push(h%4===0||r()<.38?Math.floor(r()*6):-1);o.push(c)}as={i:0,next:Et.currentTime+.1};let a=()=>{if(!(!Et||!as))for(;as.next<Et.currentTime+.18;){let l=as.i,c=l%16,h=Math.floor(l/16)%4,u=t.prog[h]||0,f=as.next,d=t.root+e[u%e.length]-12;c%4===0&&G_(f),c%2===0&&k_(f,c%4===2?.1:.05),(c%4===0||c%8===6)&&nf("triangle",ef(d-12),f,n*3.2,.4,600),c===0&&[0,2,4].forEach(x=>nf("sine",ef(t.root+e[(u+x)%e.length]),f,n*15,.07,1400));let g=o[h][c];g>=0&&nf(t.lead,ef(t.root+12+e[(g+u)%e.length]),f,n*1.8,.11,t.bright),as.next+=n,as.i++}};Gc=setInterval(a,40),a()}function Vc(){Gc&&clearInterval(Gc),Gc=null,as=null}function Wc(i){ls&&ls.gain.setTargetAtTime(i?.08:.22,Et.currentTime,.2)}var yi=null;function pp(){if(!Et||yi)return;let i=Et.createGain();i.gain.value=1e-4;let t=Et.createBiquadFilter();t.type="lowpass",t.frequency.value=500;let e=Et.createOscillator(),n=Et.createOscillator();e.type="sawtooth",n.type="square",e.frequency.value=60,n.frequency.value=30,e.connect(t),n.connect(t),t.connect(i),i.connect(vi),e.start(),n.start(),yi={g:i,f:t,o1:e,o2:n}}function mp(i,t){if(!Et||!yi)return;let e=Et.currentTime,n=Math.max(0,Math.min(1,i)),s=52+n*150+(t?16:0);yi.o1.frequency.setTargetAtTime(s,e,.08),yi.o2.frequency.setTargetAtTime(s*.5,e,.08),yi.f.frequency.setTargetAtTime(380+n*900+(t?300:0),e,.1),yi.g.gain.setTargetAtTime(.05+n*.07+(t?.04:0),e,.1)}function sf(){if(!yi)return;let i=yi;yi=null;try{i.g.gain.setTargetAtTime(1e-4,Et.currentTime,.05),setTimeout(()=>{try{i.o1.stop(),i.o2.stop()}catch{}},300)}catch{}}var V_=null;try{window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{V_=null})}catch{}var Ns=null,da=null,Ds=null,fa=null,kc=null;function W_(){if(kc)return kc;let i=22,t=new Float32Array(i+1),e=new Float32Array(i+1);for(let n=1;n<=i;n++)e[n]=1/Math.pow(n,.85)*(n%2===0?.75:1)*(n===3?1.25:1);return kc=Et.createPeriodicWave(t,e),kc}function gp(i={}){if(!Et||Ns)return;let t=i.cyl||4,e=i.pitch||1,n=t>=6,s=Et.createGain();s.gain.value=1e-4;let r=Et.createBiquadFilter();r.type="lowpass",r.frequency.value=600,r.Q.value=.8;let o=Et.createBiquadFilter();o.type="peaking",o.frequency.value=180,o.gain.value=6,o.Q.value=.9;let a=Et.createWaveShaper(),l=new Float32Array(257);for(let b=0;b<257;b++){let _=b/128-1;l[b]=Math.tanh(_*2.4)}a.curve=l,a.oversample="2x";let c=Et.createGain();c.gain.value=1;let h=Et.createOscillator();h.setPeriodicWave(W_());let u=Et.createOscillator();u.type="sawtooth";let f=Et.createGain();f.gain.value=n?.5:.22;let d=Et.createOscillator();d.type="square";let g=Et.createGain();g.gain.value=.08,h.connect(c),u.connect(f),f.connect(c),d.connect(g),g.connect(c);let x=Et.createBufferSource();x.buffer=Us,x.loop=!0;let m=Et.createBiquadFilter();m.type="bandpass",m.frequency.value=500,m.Q.value=.7;let p=Et.createGain();p.gain.value=1e-4,x.connect(m),m.connect(p),c.connect(a),a.connect(r),r.connect(o),o.connect(s),p.connect(s),s.connect(vi);let v=Et.createOscillator(),T=Et.createGain();v.frequency.value=9,T.gain.value=0,v.connect(T),T.connect(s.gain),h.start(),u.start(),d.start(),x.start(),v.start(),Ns={out:s,lp:r,o1:h,o2:u,o3:d,ns:x,ng:p,nf:m,lfo:v,lg:T,cyl:t,pitch:e,body:o}}function xp(i,t){if(!Et||!Ns)return;let e=Et.currentTime,n=Ns,s=Math.max(0,Math.min(1,i)),r=Math.max(0,Math.min(1,t)),o=(11+s*94)*n.pitch,a=o*n.cyl/2;n.o1.frequency.setTargetAtTime(a,e,.03),n.o2.frequency.setTargetAtTime(a*.5,e,.03),n.o3.frequency.setTargetAtTime(a*2,e,.03),n.lp.frequency.setTargetAtTime(380+s*1500+r*1700,e,.06),n.body.frequency.setTargetAtTime(110+s*260,e,.1);let l=Math.max(0,1-s*3.2);n.lfo.frequency.setTargetAtTime(Math.max(3,a/(n.cyl>=6?3:2)),e,.1),n.lg.gain.setTargetAtTime(.012*l,e,.1),n.out.gain.setTargetAtTime(.05+.04*s+.07*r,e,.06),n.nf.frequency.setTargetAtTime(350+s*1800,e,.1),n.ng.gain.setTargetAtTime(.004+.03*r*(.4+s),e,.08)}function rf(){if(!Ns)return;let i=Ns;Ns=null;try{i.out.gain.setTargetAtTime(1e-4,Et.currentTime,.12),setTimeout(()=>{try{i.o1.stop(),i.o2.stop(),i.o3.stop(),i.ns.stop(),i.lfo.stop()}catch{}},700)}catch{}}function yp(){Et&&(te("sawtooth",38,55,.5,.1),te("square",70,110,.45,.04),Qe(.5,.05,"bandpass",300,600,0,1))}function vp(i=420){if(!Et||da)return;let t=Et.currentTime,e=Et.createGain();e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(.26,t+.025);let n=Et.createBiquadFilter();n.type="lowpass",n.frequency.value=3200,n.Q.value=.7;let s=Et.createBiquadFilter();s.type="peaking",s.frequency.value=1400,s.gain.value=5,s.Q.value=.8;let r=Et.createWaveShaper(),o=new Float32Array(257);for(let u=0;u<257;u++){let f=u/128-1;o[u]=Math.tanh(f*1.8)}r.curve=o;let a=Et.createGain();a.gain.value=.5,a.connect(r),r.connect(n),n.connect(s),s.connect(e),e.connect(vi);let l=[];for(let[u,f]of[[i,"sawtooth"],[i*1.004,"square"],[i*1.26,"sawtooth"],[i*1.267,"square"],[i*2.02,"triangle"]]){let d=Et.createOscillator();d.type=f,d.frequency.value=u;let g=Et.createGain();g.gain.value=f==="triangle"?.25:.6,d.connect(g),g.connect(a),d.start(),l.push(d)}let c=Et.createOscillator(),h=Et.createGain();c.frequency.value=96,h.gain.value=.05,c.connect(h),h.connect(e.gain),c.start(),l.push(c),da={g:e,oscs:l,t0:t}}function Xr(){if(!Et||!da)return;let i=da;da=null;let t=Math.max(0,.22-(Et.currentTime-i.t0));setTimeout(()=>{try{let e=Et.currentTime;i.g.gain.cancelScheduledValues(e),i.g.gain.setTargetAtTime(1e-4,e,.035),setTimeout(()=>{for(let n of i.oscs)try{n.stop()}catch{}},260)}catch{}},t*1e3)}function _p(i){if(!Et)return;if(!Ds){let e=Et.createBufferSource();e.buffer=Us,e.loop=!0;let n=Et.createBiquadFilter();n.type="bandpass",n.frequency.value=1900,n.Q.value=5;let s=Et.createBiquadFilter();s.type="bandpass",s.frequency.value=1150,s.Q.value=3;let r=Et.createGain();r.gain.value=1e-4,e.connect(n),e.connect(s),n.connect(r),s.connect(r),r.connect(vi),e.start(),Ds={ns:e,g:r,b1:n}}let t=Et.currentTime;Ds.g.gain.setTargetAtTime(Math.max(1e-4,i*.16),t,.04),Ds.b1.frequency.setTargetAtTime(1700+i*900,t,.1)}function of(){if(!Ds)return;let i=Ds;Ds=null;try{i.g.gain.setTargetAtTime(1e-4,Et.currentTime,.05),setTimeout(()=>{try{i.ns.stop()}catch{}},300)}catch{}}function Xc(i=10){if(!Et)return;let t=Math.max(.15,Math.min(1,i/22));te("sine",95,38,.32,.55*t),te("sawtooth",160,50,.22,.22*t),Qe(.35,.5*t,"lowpass",2600,250),Qe(.18,.3*t,"bandpass",900,2200,.01,1.4),i>11&&(Qe(.5,.18*t,"highpass",5200,3200,.05,.9),te("triangle",3400,2500,.18,.05,.04))}function pa(i=!1){te("sine",i?130:105,i?90:55,.14,.3),Qe(.06,i?.12:.22,"lowpass",2400,500),Qe(.02,.1,"highpass",3500,2500,i?0:.07)}function af(i){if(!Et)return;if(!i){if(fa){let o=fa;fa=null;try{o.g.gain.setTargetAtTime(1e-4,Et.currentTime,.4),setTimeout(()=>{try{o.ns.stop(),o.lfo.stop()}catch{}},1500)}catch{}}return}if(fa)return;let t=Et.createBufferSource();t.buffer=Us,t.loop=!0;let e=Et.createBiquadFilter();e.type="lowpass",e.frequency.value=260;let n=Et.createGain();n.gain.value=1e-4;let s=Et.createOscillator(),r=Et.createGain();s.frequency.value=.07,r.gain.value=.008,s.connect(r),r.connect(n.gain),t.connect(e),e.connect(n),n.connect(vi),t.start(),s.start(),n.gain.setTargetAtTime(.035,Et.currentTime,1.2),fa={ns:t,g:n,lfo:s}}var qc=class{constructor(){this.ws=null,this.h={},this.offset=0,this.rtt=0,this.best=1/0,this.connected=!1,this.id=null,this.samples=0}now(){return Date.now()+this.offset}stamp(){let t=Math.round(Date.now()+this.offset);return this.lastStamp=Math.max(t,(this.lastStamp||0)+1),this.lastStamp}on(t,e){this.h[t]=e}connect(){return new Promise((t,e)=>{if(this.connected)return t();let n=location.protocol==="https:"?"wss":"ws",s;try{s=new WebSocket(`${n}://${location.host}/ws`)}catch(o){return e(o)}this.ws=s;let r=setTimeout(()=>{try{s.close()}catch{}e(new Error("timeout"))},8e3);s.onopen=()=>{clearTimeout(r),this.connected=!0;for(let o=0;o<8;o++)setTimeout(()=>this.ping(),o*140);this.pinger=setInterval(()=>this.ping(),2e3),t()},s.onmessage=o=>{let a;try{a=JSON.parse(o.data)}catch{return}if(a.t==="pong")return this.onPong(a);a.t==="joined"&&(this.id=a.id);let l=this.h[a.t];l&&l(a)},s.onclose=()=>{clearTimeout(r);let o=this.connected;this.connected=!1,clearInterval(this.pinger),o&&this.h.close?this.h.close():e(new Error("closed"))},s.onerror=()=>{}})}ping(){this.send({t:"ping",c:Date.now()})}onPong(t){let e=Date.now(),n=e-t.c;this.rtt=this.rtt?this.rtt*.7+n*.3:n;let s=t.s+n/2-e;(n<=this.best*1.25||this.samples<3)&&(this.offset=this.samples<8?n<=this.best?s:this.offset:this.offset*.8+s*.2,this.best=Math.min(this.best,n)),this.samples++,this.samples%10===0&&(this.best=this.best*1.3+2)}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}this.connected=!1,clearInterval(this.pinger)}};var Mp=`
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
`;function bp(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new je({transparent:!0,depthWrite:!1,uniforms:{time:{value:0},rect:{value:new Ce(i.x0,i.z0,i.x1,i.z1)},depth:{value:i.surf-i.bottom},sunDir:{value:new U(-.35,.8,-.5).normalize()},skyTop:{value:new Ot("#4aa8ff")},skyHor:{value:new Ot("#e8fbff")},fogC:{value:new Ot("#d9f4ff")},fogN:{value:120},fogF:{value:640},ag:{value:[new U(0,0,0),new U(0,0,0),new U(0,0,0),new U(0,0,0)]}},vertexShader:`uniform float time; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y += sin(w.x*1.3+time*1.6)*0.018 + sin(w.z*1.7-time*1.3)*0.015; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float time; uniform vec4 rect; uniform float depth; uniform vec3 sunDir; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform vec3 ag[4]; varying vec3 vW;
      ${Mp}
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
      }`}),s=new We(t,e,40,40),r=new et(s,n);return r.rotation.x=-Math.PI/2,r.position.set((i.x0+i.x1)/2,i.surf,(i.z0+i.z1)/2),r.renderOrder=3,r.frustumCulled=!1,r.userData.pool=i,r}function Ep(i){let t=i.x1-i.x0,e=i.z1-i.z0,n=new je({transparent:!0,depthWrite:!1,blending:mi,uniforms:{time:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time; varying vec3 vW; ${Mp}
      void main(){
        vec2 p = vW.xz*0.55; float t = time*0.5, c = 0.0;
        for(int i=0;i<3;i++){ p += vec2(sin(p.y*1.7+t), cos(p.x*1.4-t))*0.55; c += abs(sin(p.x*2.2+p.y*1.8)); }
        c = pow(1.0 - c/3.0, 5.0) * 1.6;
        gl_FragColor = vec4(vec3(0.55,0.95,1.0)*c*0.55, 1.0);
      }`}),s=new et(new We(t,e),n);return s.rotation.x=-Math.PI/2,s.position.set((i.x0+i.x1)/2,i.bottom+.03,(i.z0+i.z1)/2),s.renderOrder=2,s.frustumCulled=!1,s}var cs=[{id:0,name:"Sprinter",color:"#0b6b3a",max:27,acc:17,grip:6.5,turn:2.2,hw:.95,hl:2.1},{id:1,name:"Buggy",color:"#2f7bff",max:23,acc:15,grip:8.5,turn:2.5,hw:1.05,hl:1.9},{id:2,name:"Pickup",color:"#ffb21e",max:22,acc:14,grip:7,turn:2,hw:1.05,hl:2.3},{id:3,name:"Bubble",color:"#a855f7",max:24,acc:16,grip:7.5,turn:2.4,hw:.95,hl:1.8},...[4,5,6,7].map(i=>({id:i,name:"Racer",color:"#e0001f",max:42,acc:36,grip:9.5,turn:2.15,hw:1.05,hl:2.35,racer:!0})),{id:8,name:"Bike",color:"#ff6b00",max:31,acc:22,grip:7.5,turn:3,hw:.5,hl:1.1,bike:!0},{id:9,name:"Super Bike",color:"#00c2ff",max:52.8,acc:34,grip:9,turn:2.7,hw:.5,hl:1.15,bike:!0},{id:10,name:"Super Car",color:"#ffd400",max:83.3,acc:46,grip:10.5,turn:2,hw:1.05,hl:2.35}];for(let i of aa)cs[i.id]={id:i.id,name:i.name,color:i.paint,max:i.top,acc:0,grip:0,turn:0,hw:1,hl:2.3,city:!0};function wp(i,t,e,n){let s={id:i,x:t,z:e,y:0,pitch:0,yaw:n,vx:0,vz:0,speed:0,steer:0,drift:0,driver:-1,bump:0,boost:0,parked:!0,spin:0,crash:0,acc:0,vy:0,vyg:0,air:!1};return i>=11&&G0(s,aa[i-11]),s}function lf(i,t,e,n=1.5,s){let r=1e9,o=t,a=e,l=1,c=1,h=0,u=0,f=0,d=s!==void 0;for(let x of i.segs){let m=x.bx-x.ax,p=x.bz-x.az,v=m*m+p*p,T=v>0?((t-x.ax)*m+(e-x.az)*p)/v:0;T=T<0?0:T>1?1:T;let b=x.y0||0,_=x.y1===void 0?b:x.y1,M=b+(_-b)*T;if(d&&Math.abs(M-s)>5)continue;let S=x.ax+m*T,y=x.az+p*T,w=Math.hypot(t-S,e-y),A=x.hw-n;w-A<r&&(r=w-A,o=S,a=y,l=A,c=w,h=M,_!==b&&v>0?(u=(_-b)*m/v,f=(_-b)*p/v):u=f=0)}for(let x of i.plazas||[]){let m=x.y||0;if(d&&Math.abs(m-s)>5)continue;let p=Math.hypot(t-x.x,e-x.z),v=x.r-n;p-v<r&&(r=p-v,o=x.x,a=x.z,l=v,c=p,h=m,u=f=0)}if(r>1e8)return{d:-1,px:t,pz:e,nx:0,nz:1,lim:1,h:d?s:0,gx:0,gz:0};let g=c||1e-6;return{d:r,px:o,pz:a,nx:(t-o)/g,nz:(e-a)/g,lim:l,h,gx:u,gz:f}}function Tp(i,t,e,n,s,r=0){let o=cs[i.id];if(o.city)return i.ownd=!0,V0(i,t,e,n,s,aa[i.id-11],n.terrain?M=>lf(n,M.x,M.z,-1.2).d<=0:null);let a=Math.sin(i.yaw),l=Math.cos(i.yaw),c=-l,h=a,u=i.vx*a+i.vz*l,f=i.vx*c+i.vz*h,d=o.max*(i.boost>0?1.3:1);i.boost>0&&(i.boost-=t),e.gas>.01?u+=(u<0?38:o.acc*(1-Math.max(0,u)/(d+2))+1)*e.gas*t:e.gas<-.01?u+=(u>.5?-34:-11)*-e.gas*t:u-=Math.sign(u)*Math.min(Math.abs(u),4.5*t),e.hb&&(u-=Math.sign(u)*Math.min(Math.abs(u),9*t));{let M=(i.gx||0)*a+(i.gz||0)*l;M&&(u-=9.8*.55*(M/Math.sqrt(1+M*M))*t)}u=Math.max(-9,Math.min(d+(i.boost>0?3:0),u)),i.steer+=(e.steer-i.steer)*Math.min(1,t*9);let g=Math.abs(u),x=Math.min(1,g/5)*(1-.38*Math.min(1,g/d));i.yaw-=i.steer*o.turn*x*Math.sign(u||1)*(e.hb?1.35:1)*t;let m=(e.hb?1.6:o.grip)*(i.slick>0?.22:1);f*=Math.exp(-m*t),i.drift=Math.min(1,Math.abs(f)/5);let p=Math.sin(i.yaw),v=Math.cos(i.yaw),T=-v,b=p;i.vx=p*u+T*f,i.vz=v*u+b*f;for(let M of n.boosts||[])Math.abs(i.x-M.x)<M.r&&Math.abs(i.z-M.z)<M.r&&Math.abs(i.y-(M.y||0))<3&&(i.boost=1.4,u<d&&(i.vx+=p*40*t,i.vz+=v*40*t));i.x+=i.vx*t,i.z+=i.vz*t;let _="";if(n.terrain)_=Y_(i,t,n,p,v,d)||_;else{let M=lf(n,i.x,i.z,1.5,i.y);i.gx=M.gx,i.gz=M.gz;{let S=i.y;i.y+=(M.h-i.y)*Math.min(1,t*14);let y=Math.hypot(i.vx,i.vz)*t;i.pitch+=((y>.001?Math.atan2(i.y-S,y):0)*(i.speed>=0?1:-1)-i.pitch)*Math.min(1,t*10)}for(let S of[1.25,-1.25]){let y=lf(n,i.x+p*S,i.z+v*S,1.6,i.y);if(y.d<=0)continue;i.x-=y.nx*y.d,i.z-=y.nz*y.d;let w=i.vx*y.nx+i.vz*y.nz;if(w>0){let A=-1.35*w*y.nx,C=-(1+.35)*w*y.nz;i.vx+=A,i.vz+=C,i.vx*=.95,i.vz*=.95,i.spin=Math.max(-3,Math.min(3,(i.spin||0)+(v*S*A-p*S*C)*.1)),w>5&&(_="bump"),i.bump=Math.max(i.bump,w)}}}for(let M of s||[]){if((i.x-M.x)**2+(i.z-M.z)**2>36||Math.abs((M.y||0)-i.y)>4)continue;let S=Math.sin(M.yaw),y=Math.cos(M.yaw),w=null;for(let L of[1.05,-1.05])for(let I of[1.05,-1.05]){let D=i.x+p*L,F=i.z+v*L,H=M.x+S*I,K=M.z+y*I,V=D-H,Z=F-K,j=Math.hypot(V,Z),Tt=2.3-j;Tt>0&&(!w||Tt>w.pen)&&(w={pen:Tt,nx:j>1e-4?V/j:p,nz:j>1e-4?Z/j:v,rx:D-i.x,rz:F-i.z})}if(!w)continue;let A=M.driver===-1||M.parked,C=A?1:.6;i.x+=w.nx*w.pen*C,i.z+=w.nz*w.pen*C;let E=(i.vx-M.vx)*w.nx+(i.vz-M.vz)*w.nz;if(E<0){let L=1.55*-E*(A?1:.55),I=w.nx*L,D=w.nz*L;i.vx+=I,i.vz+=D,i.spin=Math.max(-3.2,Math.min(3.2,(i.spin||0)+(w.rz*I-w.rx*D)*.32)),i.vx*=.94,i.vz*=.94,-E>3.5&&(_=-E>7?"crash":"bump",i.crash=Math.max(i.crash||0,-E))}}if(n.dyn&&!n.free){let M=n.dyn(r);for(let S of M){if(Math.abs(S.y-i.y)>4||(i.x-S.x)**2+(i.z-S.z)**2>30)continue;let y=null;for(let A of[1.05,-1.05]){let C=i.x+p*A,E=i.z+v*A,L=C-S.x,I=E-S.z,D=Math.hypot(L,I),F=1.15+S.r-D;F>0&&(!y||F>y.pen)&&(y={pen:F,nx:D>1e-4?L/D:p,nz:D>1e-4?I/D:v,rx:C-i.x,rz:E-i.z})}if(!y)continue;i.x+=y.nx*y.pen,i.z+=y.nz*y.pen;let w=(i.vx-S.vx)*y.nx+(i.vz-S.vz)*y.nz;if(w<0){let A=1.5*-w,C=y.nx*A,E=y.nz*A;i.vx+=C,i.vz+=E,i.spin=Math.max(-3.4,Math.min(3.4,(i.spin||0)+(y.rz*C-y.rx*E)*.4)),i.vx*=.9,i.vz*=.9,-w>3.5&&(_=-w>7?"crash":"bump",i.crash=Math.max(i.crash||0,-w))}}}i.slick=0;for(let M of(n.free?[]:n.slicks)||[])Math.abs(M.y-i.y)<3&&(i.x-M.x)**2+(i.z-M.z)**2<M.r*M.r&&(i.slick=1);return i.spin&&(i.yaw+=i.spin*t,i.spin*=Math.exp(-3.6*t),Math.abs(i.spin)<.02&&(i.spin=0)),i.speed=i.vx*p+i.vz*v,_}var Sp=-.35,q_=352;function Y_(i,t,e,n,s,r){let o=e.terrain,a="";for(let f of[1.15,-1.15]){let d=i.x+n*f,g=i.z+s*f;for(let x of e.boxes||[]){if(i.y>x.h-.4||d<x.x0-1.3||d>x.x1+1.3||g<x.z0-1.3||g>x.z1+1.3)continue;let m=Math.max(x.x0,Math.min(x.x1,d)),p=Math.max(x.z0,Math.min(x.z1,g)),v=d-m,T=g-p,b=Math.hypot(v,T),_,M,S;if(b>1e-4){if(_=v/b,M=T/b,S=1.15-b,S<=0)continue}else{let w=d-x.x0,A=x.x1-d,C=g-x.z0,E=x.z1-g,L=Math.min(w,A,C,E);S=1.15+L,L===w?(_=-1,M=0):L===A?(_=1,M=0):L===C?(_=0,M=-1):(_=0,M=1)}i.x+=_*S,i.z+=M*S;let y=i.vx*_+i.vz*M;y<0&&(i.vx-=1.35*y*_,i.vz-=1.35*y*M,i.vx*=.9,i.vz*=.9,i.spin=Math.max(-3,Math.min(3,(i.spin||0)+(s*f*_-n*f*M)*-y*.05)),-y>5&&(a=-y>12?"crash":"bump",i.crash=Math.max(i.crash||0,-y)))}}let l=q_;Math.abs(i.x)>l&&(i.x=Math.sign(i.x)*l,i.vx*=-.3),Math.abs(i.z)>l&&(i.z=Math.sign(i.z)*l,i.vz*=-.3),o(i.x+n*2.5,i.z+s*2.5)<Sp&&o(i.x,i.z)<Sp+.6&&(i.vx*=-.35,i.vz*=-.35,i.x+=i.vx*t*3,i.z+=i.vz*t*3,a=a||"bump",i.bump=8);let c=o(i.x,i.z),h=Math.hypot(i.vx,i.vz),u=i.y;if(i.gx=(o(i.x+1.5,i.z)-o(i.x-1.5,i.z))/3,i.gz=(o(i.x,i.z+1.5)-o(i.x,i.z-1.5))/3,i.air){if(i.vy-=30*t,i.y+=i.vy*t,i.y<=c){let f=-i.vy;i.y=c,i.air=!1,i.vy=0,i.vyg=0,f>7&&(a=f>14?"crash":"bump",i.crash=Math.max(i.crash||0,f),i.vx*=.93,i.vz*=.93)}i.pitch+=(Math.atan2(i.vy,Math.max(8,h))*.8-i.pitch)*Math.min(1,t*4)}else{let f=(c-u)/Math.max(t,.001);if(i.vyg+=(f-i.vyg)*Math.min(1,t*18),c<u-.22-h*.004)i.air=!0,i.vy=Math.max(i.vyg,0),i.y=u;else{i.y=c;let d=i.gx*n+i.gz*s;i.pitch+=(Math.atan(d)-i.pitch)*Math.min(1,t*12)}}return i.air=i.air&&i.y>c+1e-4,a}var kt=(i,t,e,n=.12)=>new ns(i,t,e,3,Math.min(n,i/2-.01,t/2-.01,e/2-.01)),qe=(i,t={})=>{var e,n,s;return new ee({color:i,roughness:(e=t.r)!=null?e:.35,metalness:(n=t.m)!=null?n:.25,emissive:t.e||0,emissiveIntensity:(s=t.ei)!=null?s:1})},qr=()=>new ee({color:"#9fd8ff",roughness:.05,metalness:.4,transparent:!0,opacity:.55});function Ap(i,t=!1){if(i>=11)return Hu(i,t);let e=cs[i],n=new Yt,s=qe("#1b1b22",{r:.8,m:0}),r=qe("#e8eaf2",{r:.25,m:.8}),o=qe("#23252e",{r:.6}),a=(S,y,w,A,C,E=0,L=0,I=0)=>{let D=new et(S,y);return D.position.set(w,A,C),D.rotation.set(E,L,I),D.castShadow=!0,D.receiveShadow=!0,n.add(D),D},l=i===0?new ee({map:Ic("pk"),roughness:.3,metalness:.15}):qe(e.color,{r:.28,m:.35}),c=qe("#ffffff",{r:.3,m:.1}),h=qe("#fff6c8",{e:"#fff1a8",ei:1.4}),u=qe("#ff3030",{e:"#ff1a1a",ei:1.2}),f=[],d=[],g=!1,x=.46,m=1,p=1.35,v=-1.3,T={y:.55,z:-.15};if(i===0)x=.44,m=1.02,p=1.45,v=-1.35,T={y:.5,z:-.2},a(kt(1.9,.5,4.3,.22),l,0,.55,0),a(kt(1.7,.34,1.5,.2),l,0,.78,1.35,-.12),a(kt(1.7,.4,1,.2),l,0,.86,-1.6),a(kt(1.5,.5,.12,.05),qr(),0,1.02,.78,-.55),a(kt(.12,.1,1.5,.04),o,.95,1.16,-1.82),a(kt(.12,.1,1.5,.04),o,-.95,1.16,-1.82),a(kt(2,.09,.45,.04),l,0,1.28,-2),a(kt(.1,.4,.3,.03),o,.7,1.08,-1.95),a(kt(.1,.4,.3,.03),o,-.7,1.08,-1.95),a(kt(.4,.2,.1,.04),h,.65,.68,2.12),a(kt(.4,.2,.1,.04),h,-.65,.68,2.12),a(kt(.45,.14,.1,.04),u,.65,.78,-2.17),a(kt(.45,.14,.1,.04),u,-.65,.78,-2.17);else if(i===1){x=.62,m=1.18,p=1.3,v=-1.25,T={y:.62,z:-.1},a(kt(1.7,.4,3.8,.16),l,0,.62,0),a(kt(1.5,.3,1.2,.14),l,0,.9,1.4),a(kt(1.3,.35,.9,.12),qe("#ffd23f",{r:.4}),0,.95,-1.35);for(let S of[-1,1])a(new Dt(.06,.06,1.7,8),o,S*.78,1.5,-.1,.12,0,0),a(new Dt(.06,.06,1.6,8),o,S*.78,1,.7,.9,0,0),a(new Dt(.06,.06,1.7,8),o,S*.78,1.5,-.1,Math.PI/2,0,0);a(new Dt(.06,.06,1.6,8),o,0,2,-.1,0,0,Math.PI/2),a(new ve(.2,12,8),h,.55,.98,2),a(new ve(.2,12,8),h,-.55,.98,2),a(kt(.4,.12,.1,.04),u,.5,.8,-1.95),a(kt(.4,.12,.1,.04),u,-.5,.8,-1.95)}else if(i===2){x=.55,m=1.1,p=1.55,v=-1.5,T={y:.78,z:.55},a(kt(2,.55,4.7,.2),l,0,.75,0),a(kt(1.9,.75,1.5,.18),l,0,1.28,.55),a(kt(1.5,.45,.1,.05),qr(),0,1.55,1.3,-.35),a(kt(1.8,.1,1.9,.05),o,0,1.1,-1.35);for(let S of[-1,1])a(kt(.1,.5,1.9,.04),l,S*.97,1.35,-1.35);a(kt(1.8,.5,.1,.04),l,0,1.35,-2.28),a(kt(1.8,.1,.1,.04),qe("#c8ccd8",{m:.8,r:.2}),0,.75,2.4),a(kt(.1,.5,.1,.03),qe("#c8ccd8",{m:.8,r:.2}),.6,.85,2.38),a(kt(.1,.5,.1,.03),qe("#c8ccd8",{m:.8,r:.2}),-.6,.85,2.38),a(kt(.35,.22,.1,.04),h,.7,.98,2.36),a(kt(.35,.22,.1,.04),h,-.7,.98,2.36),a(kt(.3,.2,.1,.04),u,.8,1,-2.36),a(kt(.3,.2,.1,.04),u,-.8,1,-2.36)}else if(i===8||i===9){g=!0;let S=i===9,y=qe(e.color,{r:.2,m:.5}),w=S?.5:.44;T={y:S?.92:.98,z:-.1},a(kt(.34,.3,1.5,.1),o,0,.62,0),a(kt(S?.42:.36,S?.36:.34,1,.14),y,0,.98,.35),a(kt(.38,.14,.95,.06),qe("#1b1b22",{r:.8,m:0}),0,.88,-.55),S&&(a(kt(.5,.5,.5,.2),y,0,.95,.95,-.5),a(kt(.36,.28,.1,.04),qr(),0,1.25,.98,-.8),a(kt(.3,.18,.7,.08),y,0,.92,-1.05,.3)),a(kt(.9,.07,.07,.03),o,0,S?1.18:1.3,.78),a(new ve(.17,10,8),h,0,S?1:1.15,1.2),a(kt(.14,.1,.08,.03),u,0,.95,-1.12),a(new Dt(.07,.09,1,8),qe("#c8ccd8",{m:.9,r:.2}),.26,.5,-.7,Math.PI/2,0,0);let A=new Dt(w,w,.24,18),C=new Dt(w*.55,w*.55,.26,10);for(let[E,L]of[[.95,1],[-.95,0]]){let I=new Yt;I.position.set(0,w,E),n.add(I);let D=new Yt;I.add(D);let F=new et(A,s);F.rotation.z=Math.PI/2,F.castShadow=!0,D.add(F);let H=new et(C,r);H.rotation.z=Math.PI/2,D.add(H),f.push(D),L&&d.push(I)}a(kt(.12,.7,.12,.03),o,0,.75,.95,.35)}else if(i===10){x=.5,m=1.1,p=1.45,v=-1.45,T={y:.55,z:-.1};let S=qe("#ffd400",{r:.14,m:.6}),y=qe("#15161c",{r:.5,m:.2}),w=qe("#b14bff",{e:"#b14bff",ei:1.6}),A=new Fn;[[-2.45,.28],[-2.45,.78],[-1.6,.95],[-.3,1.02],[.7,.9],[2.3,.5],[2.5,.38],[2.5,.28]].forEach(([L,I],D)=>D?A.lineTo(L,I):A.moveTo(L,I));let C=new Ii(A,{depth:1.75,bevelEnabled:!0,bevelSize:.1,bevelThickness:.1,bevelSegments:2,steps:1});C.rotateY(-Math.PI/2),C.translate(.87,0,0),a(C,S,0,0,0),a(kt(1.3,.34,1.5,.16),qr(),0,1,-.1,-.08),a(kt(.5,.03,3,.01),y,.35,.99,-.2),a(kt(.5,.03,3,.01),y,-.35,.99,-.2),a(kt(2.2,.08,.6,.03),y,0,1.28,-2.3);for(let L of[-1,1])a(kt(.09,.4,.09,.02),y,L*.7,1.08,-2.25),a(kt(.07,.4,.7,.02),S,L*1.1,1.2,-2.3),a(kt(.42,.14,.1,.04),h,L*.62,.62,2.52),a(kt(.5,.12,.1,.04),u,L*.62,.8,-2.5),a(kt(.3,.2,.9,.08),S,L*1.05,.55,1.4);a(kt(2.3,.08,.5,.03),y,0,.3,2.5);let E=new et(new We(2.1,4.8),new Te({color:"#b14bff",transparent:!0,opacity:.5,blending:mi,depthWrite:!1,toneMapped:!1}));E.rotation.x=-Math.PI/2,E.position.set(0,.12,0),n.add(E)}else if(i>=4&&i<8){x=.5,m=1.12,p=1.5,v=-1.5,T={y:.62,z:-.2};let S=qe("#e0001f",{r:.16,m:.55}),y=qe("#15161c",{r:.5,m:.2}),w=qe("#ffffff",{r:.25,m:.1}),A=qe("#ff7a1a",{e:"#ff5a00",ei:2}),C=new Fn;[[-2.4,.3],[-2.4,.84],[-1.7,1],[-.95,.96],[-.8,.66],[.5,.66],[.72,.78],[2.2,.56],[2.46,.44],[2.46,.3]].forEach(([D,F],H)=>H?C.lineTo(D,F):C.moveTo(D,F));let E=new Ii(C,{depth:1.7,bevelEnabled:!0,bevelSize:.1,bevelThickness:.1,bevelSegments:2,steps:1});E.rotateY(-Math.PI/2),E.translate(.85,0,0),a(E,S,0,0,0),a(kt(1.2,.04,1.3,.02),y,0,.7,-.1),a(kt(1,.32,.18,.06),S,0,.88,-1.05),a(kt(1.5,.42,.08,.03),qr(),0,.98,.6,-.62);for(let D of[-1,1])a(kt(.12,.34,.1,.03),y,D*.76,.9,.62,-.62),a(kt(.42,.34,1.7,.14),S,D*1.03,.6,-1.6),a(kt(.3,.3,.9,.1),S,D*1,.55,1.5),a(kt(.1,.3,.8,.03),y,D*.98,.5,-.35),a(kt(.07,.62,.8,.02),y,D*1.12,1.52,-2.28),a(kt(.09,.62,.09,.02),y,D*.55,1.2,-2.15);a(kt(.46,.03,1.9,.01),w,0,.8,1.4,.07),a(kt(2.3,.1,.8,.03),S,0,1.52,-2.28),a(kt(2.3,.07,.34,.02),y,0,1.45,-2),a(kt(2.3,.08,.55,.03),y,0,.3,2.46),a(kt(1.9,.12,.3,.04),y,0,.3,-2.4);for(let D of[-1,1])a(kt(.42,.14,.1,.04),h,D*.62,.62,2.5),a(kt(.5,.12,.1,.04),u,D*.6,.86,-2.48),a(new Dt(.1,.12,.3,10),y,D*.42,.52,-2.5,Math.PI/2,0,0);let L=new et(new We(2.1,4.6),new Te({color:"#27b6ff",transparent:!0,opacity:.55,blending:mi,depthWrite:!1,toneMapped:!1}));L.rotation.x=-Math.PI/2,L.position.set(0,.12,0),n.add(L);let I=[];for(let D of[-1,1])for(let[F,H,K]of[[.17,1.3,"#ff6a00"],[.09,.8,"#ffe14a"]]){let V=new wn(F,H,8);V.rotateX(-Math.PI/2),V.translate(0,0,-H/2);let Z=new et(V,new Te({color:K,transparent:!0,opacity:.9,toneMapped:!1}));Z.position.set(D*.42,.52,-2.62),n.add(Z),I.push(Z)}n.userData.flames=I}else{x=.42,m=.98,p=1.15,v=-1.1,T={y:.5,z:-.05},a(new ve(1.15,24,16),l,0,.95,-.05).scale.set(.9,.62,1.55),a(kt(1.6,.14,3.2,.06),c,0,.42,0);for(let y of[-1,1])a(new ve(.27,14,10),h,y*.62,.95,1.72),a(new ve(.2,12,8),u,y*.55,.85,-1.78),a(new Dt(.09,.09,.5,8),o,y*.42,1.55,1.1,.45,0,0);a(kt(1.5,.35,.1,.04),qr(),0,1.22,.85,-.7),a(kt(.5,.05,2.3,.02),qe("#ff6bd5",{r:.4}),.15,1.52,-.75,0,0,.08)}let b=new Dt(x,x,.42,20),_=new Dt(x*.56,x*.56,.44,12);if(!g)for(let[S,y,w]of[[1,p,1],[-1,p,1],[1,v,0],[-1,v,0]]){let A=new Yt;A.position.set(S*m,x,y),n.add(A);let C=new Yt;A.add(C);let E=new et(b,s);E.rotation.z=Math.PI/2,E.castShadow=!0,C.add(E);let L=new et(_,r);L.rotation.z=Math.PI/2,C.add(L),f.push(C),w&&d.push(A)}let M=new et(new ys(2.6,20),new Te({color:0,transparent:!0,opacity:.22,depthWrite:!1}));return M.rotation.x=-Math.PI/2,M.position.y=.04,M.scale.set(.9,1.25,1),n.add(M),n.userData={wheels:f,pivots:d,seat:T,spec:e,flames:n.userData.flames},n}function Rp(i,t,e){let n=i.userData;if(n.hero){q0(i,t,e);return}for(let r of n.wheels)r.rotation.x+=t.speed/.5*e;for(let r of n.pivots)r.rotation.y=-t.steer*.5;i.rotation.z=n.spec.bike?Dr.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/14)*.5,-.55,.55):Dr.clamp(-t.steer*Math.min(1,Math.abs(t.speed)/20)*.07,-.08,.08);let s=(t.speed-(t._ps===void 0?t.speed:t._ps))/Math.max(e,.001);if(t._ps=t.speed,t._sq=(t._sq||0)+(Dr.clamp(s,-30,30)*.0045-(t._sq||0))*Math.min(1,e*7),i.rotation.x=-(t.pitch||0)-t._sq,n.flames){let r=Dr.clamp(.2+Math.max(0,t.speed)/45+(t.boost>0?.9:0)+(t.driver!==-1?.15:0),.15,2)*(.85+Math.random()*.3);for(let o of n.flames)o.scale.set(1,1,r),o.visible=t.driver!==-1||t.boost>0}}var Z_=["relaxed","pocket","thumbs","phone"],$_={...xe},pt=i=>document.getElementById(i),Pn=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches||(typeof navigator!="undefined"&&navigator.maxTouchPoints||0)>0,Be={x:0,y:0,jump:!1,grab:!1},un=(i,t,e)=>i<t?t:i>e?e:i,Yr=(i,t,e)=>i+(t-i)*e,mf=(i,t,e)=>{let n=(t-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*e},Yc=i=>{let t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`},cf=i=>i===1?"1st":i===2?"2nd":i===3?"3rd":i+"th",J_=["\u{1F947}","\u{1F948}","\u{1F949}"],Bi=pt("c"),Ln;try{Ln=new na({canvas:Bi,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.querySelector("#loader p").textContent="WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.",i}Ln.outputColorSpace=Ne;Ln.toneMapping=Cr;Ln.toneMappingExposure=1.05;Ln.shadowMap.enabled=!0;Ln.shadowMap.type=Ul;var Zr=Math.min(window.devicePixelRatio||1,Pn?1.5:2),fe={dpr:Pn?Math.min(Zr,1):Math.min(Zr,1.5),t:0,frames:0,good:0,shadows:!0,warm:3};function Fs(){tn&&(Ln.setPixelRatio(fe.dpr),Ln.setSize(window.innerWidth,window.innerHeight,!1),tn.camera.aspect=window.innerWidth/window.innerHeight,tn.camera.updateProjectionMatrix(),X&&(X.camera.aspect=window.innerWidth/window.innerHeight,X.camera.updateProjectionMatrix(),X.particles.setScale(Ln.domElement.height)),tn.particles.setScale(Ln.domElement.height))}function K_(i){if(fe.low)return;if(fe.warm>0){fe.warm-=i;return}if(fe.t+=i,fe.frames++,fe.t<1.2)return;let t=fe.frames/fe.t;fe.t=0,fe.frames=0,t<40?(fe.good=0,fe.dpr>.7?(fe.dpr=Math.max(.7,fe.dpr-.2),Fs()):fe.shadows&&t<30&&(fe.shadows=!1,X&&X.setShadows(!1))):t>58?++fe.good>=3&&fe.dpr<Math.min(Zr,1.75)&&(fe.dpr=Math.min(Math.min(Zr,1.75),fe.dpr+.1),fe.good=0,Fs()):fe.good=0}try{let i=localStorage.getItem("ph_low");fe.low=i==="1",i===null&&Pn&&((navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<=2)&&(fe.low=!0)}catch{fe.low=!1}fe.low&&(fe.dpr=.75,fe.shadows=!1);function j_(){fe.low?(fe.dpr=.75,fe.shadows=!1):(fe.dpr=Pn?Math.min(Zr,1):Math.min(Zr,1.5),fe.shadows=!0,fe.warm=3),X&&X.setShadows(fe.shadows),Fs()}var Q_=new Ts(Ln),Lp=Q_.fromScene(new ia,.04).texture,vt={screen:"title",mode:"single",name:localStorage.getItem("ph_name")||"",char:+(localStorage.getItem("ph_char")||0),level:0,net:null,room:null,myId:null,pendingJoin:null,muted:!1},X=null,tn=null,uf=[],Dp=i=>+(localStorage.getItem("ph_best_"+i)||0),ff=class{constructor(){let t=ua.fun;this.scene=new Ci,this.scene.fog=new ur(t.fog,70,420),this.scene.environment=Lp,this.scene.environmentIntensity=.7,this.camera=new en(42,1,.1,1500),this.sky=ju(t),this.scene.add(this.sky),this.water=Qu(t,-3),this.scene.add(this.water),this.scene.add(new _s(t.hemiSky,t.hemiGround,1));let e=new Ms(t.sun,2.4);e.position.set(-10,18,14),e.castShadow=!0,e.shadow.mapSize.set(1024,1024);let n=e.shadow.camera;n.left=-12,n.right=12,n.top=12,n.bottom=-12,n.near=1,n.far=60,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,this.scene.add(e),this.sun=e;let s=c=>new ee({color:c,roughness:.35}),r=new et(new Dt(15,14,2,48),s("#ff9ccf"));r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let o=new et(new Dt(13,13,.1,48),s("#fff3fb"));o.position.y=.02,o.receiveShadow=!0,this.scene.add(o),this.tops=[.8,1.25,1.25,.8],[[-4.5,.8,"#7be8a0"],[-1.5,1.25,"#5fc2ff"],[1.5,1.25,"#ffd23f"],[4.5,.8,"#ff9ccf"]].forEach(([c,h,u])=>{let f=new et(new Dt(1.1,1.25,h,32),s(u));f.position.set(c,h/2,-.5),f.castShadow=f.receiveShadow=!0,this.scene.add(f)}),this.slotPos=[[-4.5,.8,-.5],[-1.5,1.25,-.5],[1.5,1.25,-.5],[4.5,.8,-.5]];let a=Ku("HARIS"),l=new et(new We(11,4.3),new Te({map:a,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));l.rotation.x=-Math.PI/2,l.position.set(0,.1,4.4),this.scene.add(l),this.chars=[0,1,2,3].map(c=>{let h=new os(c);return this.scene.add(h.group),{c:h,tag:null,name:null,show:!0,scale:1,hop:0}}),this.ambient=new ha("fun",160),this.scene.add(this.ambient.points),this.particles=new ca(360),this.scene.add(this.particles.points),this.mode="title",this.sel=0,this.t=0,this.lobby=[]}setName(t,e){let n=this.chars[t];n.name!==e&&(n.tag&&(n.c.group.remove(n.tag),n.tag.material.map.dispose(),n.tag.material.dispose(),n.tag=null),n.name=e,e&&(n.tag=zc(e,Li[t].color),n.tag.position.set(0,n.c.height+.55,0),n.c.group.add(n.tag)))}setTitle(t=-1){this.mode="title",this.sel=t,this.lobby=[],this.chars.forEach((e,n)=>{e.show=!0,this.setName(n,null)})}setLobby(t){this.mode="lobby",this.lobby=t,this.chars.forEach((e,n)=>{let s=t.findIndex(r=>r.char===n);e.show=s>=0,e.slot=s,this.setName(n,s>=0?t[s].name:null)})}burst(t){let e=this.slotPos[this.slotOf(t)];this.particles.emit(e[0],e[1]+1.4,e[2]+.5,40,{rainbow:!0,speed:4,up:6,life:1,size:.35,gravity:7})}slotOf(t){return this.mode==="lobby"?[1,2,0,3][Math.max(0,this.chars[t].slot)%4]:t}update(t){this.t+=t;let e=this.camera;e.position.set(Math.sin(this.t*.25)*1.8,2.9+Math.sin(this.t*.4)*.15,10.5),e.lookAt(0,1.9,0),this.sky.position.copy(e.position),this.water.material.uniforms.time.value=this.t,this.chars.forEach((n,s)=>{if(n.c.group.visible=n.show,!n.show)return;let r=this.slotPos[this.slotOf(s)],o=this.mode==="title"?Math.floor(this.t/3)%4===s:this.mode!=="lobby"&&this.sel===s;n.scale=Yr(n.scale,o?1.18:1,Math.min(1,t*8)),n.c.group.scale.setScalar(n.scale),n.hop=0,n.c.group.position.set(r[0],r[1]+n.hop,r[2]),n.c.group.rotation.y=mf(n.c.group.rotation.y,this.mode==="lobby"?Math.sin(this.t*.7+s)*.3:Math.sin(this.t*.6+s*2)*.35,Math.min(1,t*4)),n.c.update(t,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1,gesture:o?"wave":Z_[s]}),n.tag&&n.tag.scale.set(2.4,.6,1)}),this.ambient.update(this.t,e.position),this.particles.update(t)}},ga=class{constructor(t,e){this.info=t,this.id=t.id,this.name=t.name,this.model=Np(t.char),e.add(this.model.group),this.tag=null,Hn||(this.tag=zc(t.name,Li[t.char].color),this.tag.position.set(0,this.model.height+.7,0),this.model.group.add(this.tag)),this.snaps=[],this.x=0,this.y=-50,this.z=0,this.yaw=Math.PI,this.speed=0,this.flags=0,this.vy=0,this.vx=0,this.vz=0,this.sw=0,this.ds=[],this.dMin=0,this.jit=0,this.rs=0,this.has=!1,this.finished=!1,this.lastLanded=!1,this.rxAt=Date.now(),this.stunT=0}push(t){t.rs!==this.rs&&(this.snaps.length=0,this.rs=t.rs);let e=this.snaps[this.snaps.length-1];if(this.rxAt=Date.now(),e&&t.ts<=e.ts){if(e.ts-t.ts<400)return;this.snaps.length=0,this.ds.length=0}let n=Date.now(),s=n-t.ts;for(this.ds.push([n,s]);this.ds.length>1&&n-this.ds[0][0]>4e3;)this.ds.shift();let r=1/0;for(let o of this.ds)o[1]<r&&(r=o[1]);this.dMin=r,this.jit=this.jit*.92+Math.abs(s-r)*.08,this.snaps.push(t),this.snaps.length>40&&this.snaps.shift()}renderTime(){return Date.now()-this.dMin-un(70+this.jit*2.2,70,260)}update(t,e){let n=this.snaps;if(!n.length)return;for(;n.length>2&&n[1].ts<=t;)n.shift();let s=n[0],r=n[1]||n[0],o=0;if(n.length>1){let d=Math.max(1,r.ts-s.ts);o=un((t-s.ts)/d,0,1+220/d)}let a=Yr(s.x,r.x,o),l=Yr(s.y,r.y,o),c=Yr(s.z,r.z,o);if(!this.has)this.x=a,this.y=l,this.z=c,this.has=!0;else{let d=1-Math.exp(-28*e),g=this.x,x=this.z;this.x+=(a-this.x)*d,this.y+=(l-this.y)*d,this.z+=(c-this.z)*d,e>0&&(this.vx+=((this.x-g)/e-this.vx)*.25,this.vz+=((this.z-x)/e-this.vz)*.25)}this.yaw=mf(this.yaw,r.r,1-Math.exp(-16*e)),this.speed=r.a&8192?0:Yr(s.sp,r.sp,un(o,0,1)),this.flags=r.a,Date.now()-this.rxAt>700&&(this.flags&=-23,this.speed=0),this.vy=n.length>1?(r.y-s.y)/Math.max(.02,(r.ts-s.ts)/1e3):0;let h=this.model.group;h.position.set(this.x,this.y,this.z),h.rotation.y=this.yaw,this.flags&2?this.stunT=(this.stunT||0)+e:this.stunT=0,this.stunT>1.2&&(this.flags&=-3);let u=!!(this.flags&1),f=u&&!this.lastLanded;this.lastLanded=u,this.sw=this.flags&16?Math.min(1,(this.sw||.001)+e/.42):0,this.model.update(e,{speed:this.speed,grounded:u,vy:this.vy,stun:this.flags&2?1:0,dive:this.flags&4?1:0,celebrate:!!(this.flags&8),seated:!!(this.flags&256),swing:this.sw,shield:!!(this.flags&32),leader:!!this.leader,mega:!!(this.flags&128),landed:f,crouch:!!(this.flags&2097152),sitg:!!(this.flags&4194304),punch:this.flags&8388608?this.pn=Math.min(.95,(this.pn||.001)+e/.45):this.pn=0})}dispose(t){t.remove(this.model.group),this.tag&&(this.tag.material.map.dispose(),this.tag.material.dispose()),this.model.dispose()}},Np=i=>new os(i),Hn=!1,He=new Set,En={jump:!1,dive:!1,grab:!1},$c=class i{constructor(t,e,n,s){this.level=t,this.meta=sa[t],Hn=!!this.meta.city,document.body.classList.toggle("city-mode",Hn),Object.assign(xe,$_),Hn&&Object.assign(xe,{R:.3,H:1.78,G:9.81,RUN:4.4,JUMP:3.7,ACC:20,DEC:34,AIR:2.5,AIR_DEC:.4,TERM:-55}),this.multi=s.multi,this.localId=n,this.players=e,this.t0=s.t0,this.phase="countdown",this.finished=!1,this.over=!1,this.finishTime=0,this.finishedMap=new Map,this.camYaw=0,this.camPitch=Hn?.17:.34,this.camDist=Hn?3.5:8.2,this.shoulder=0,this.camPos=new U,this.camTarget=new U,this.camInit=!1,this.sendT=0,this.rs=0,this.cpIdx=0,this.cpCur=null,this.stepDist=0,this.lastCount=99,this.hudT=0,this.hintT=0,this.warnSec=-1,this.hang=null,this.hangCd=0,this.hangHint=!1,this.levelTime=-4,this.batCd=0,this.swingT=0,this.crouch=!1,this.sitG=!1,this.punchT=0,this.punchCd=0,this.punchPending=!1,this.batPending=!1,this.swingMega=!1,this.fx={turbo:0,jump:0,shield:0,mega:0},this.fxSig="";let r=ua[this.meta.key],o=this.scene=new Ci;o.background=new Ot(r.fog),o.fog=new ur(r.fog,r.fogNear,r.fogFar),o.environment=Lp,o.environmentIntensity=r.env,this.camera=new en(62,window.innerWidth/window.innerHeight,.1,1800);let{world:a,info:l}=ep(t,!1,hp(),s.seed||1);this.world=a,this.info=l,o.add(a.group),a.onEvent=null,this.sky=ju(r),o.add(this.sky),this.water=Qu(r,a.waterY),o.add(this.water),this.scenery=up(o,this.meta.key,l,a),this.meta.city&&(this.peds=new Oc(o,Pn?10:16)),this.poolMeshes=[];for(let d of a.pools){let g=bp(d),x=g.material.uniforms;x.fogC.value.set(r.fog),x.fogN.value=r.fogNear,x.fogF.value=r.fogFar,x.skyTop.value.set(r.top),x.skyHor.value.set(r.horizon);let m=Ep(d);o.add(g,m),this.poolMeshes.push({wm:g,cm:m,pl:d})}if(this.cars=[],this.drive=null,this.lookT=0,this.nearCar=null,this.hornCd=0,this.skidT=0,l.cars){for(let d of l.cars){let g=Ap(d.id,Pn);g.rotation.order="YXZ",g.position.set(d.x,d.y||0,d.z),g.rotation.y=d.yaw,o.add(g);let x=wp(d.id,d.x,d.z,d.yaw);x.y=d.y||0,this.cars.push({st:x,mesh:g})}this.racerOk=!1,s.multi&&vt.pendingCars&&(this.onCars(vt.pendingCars),vt.pendingCars=null)}o.add(new _s(r.hemiSky,r.hemiGround,r.hemiI));let c=this.sun=new Ms(r.sun,r.sunI);this.sunDir=new U(...r.sunPos).normalize().multiplyScalar(90),c.castShadow=fe.shadows,c.shadow.mapSize.set(Pn?1024:2048,Pn?1024:2048);let h=c.shadow.camera;h.left=-40,h.right=40,h.top=40,h.bottom=-40,h.near=5,h.far=220,c.shadow.bias=-3e-4,c.shadow.normalBias=.04,o.add(c,c.target),this.particles=new ca(600),o.add(this.particles.points),this.particles.setScale(Ln.domElement.height),this.ambient=new ha(this.meta.key,320),o.add(this.ambient.points),this.remotes=new Map;let u=e.findIndex(d=>d.id===n);this.slot=Math.max(0,u);let f=e[this.slot]||{name:"Player",char:0};this.me={body:np(),model:Np(f.char),name:f.name,char:f.char},o.add(this.me.model.group),this.me.model.group.rotation.order="YXZ",this.me.tag=null,Hn||(this.me.tag=zc(f.name,Li[f.char].color),this.me.tag.position.set(0,this.me.model.height+.7,0),this.me.model.group.add(this.me.tag)),e.forEach((d,g)=>{d.id!==n&&this.remotes.set(d.id,new ga(d,o))}),this.spawn(this.slot),this.victory=0,this.hopT=0,this.buildProgress(),this.buildBoxes(),document.body.classList.add("in-race"),pt("hud-level").textContent=this.meta.name,pt("hud").classList.remove("hidden"),pt("hud-hint").classList.remove("fade"),this.hintT=8,this.setShadows(fe.shadows),this.meta.city?(Vc(),af(!0)):Wr(t),Wc(!1),this.pos=this.me.body}setShadows(t){this.sun.castShadow=t}spawnPoint(t){return[(t-1.5)*3.6,0,this.info.spawn.z]}spawn(t){let[e,n,s]=this.spawnPoint(t);Fc(this.me.body,e,n+.02,s,Math.PI),this.cpCur=null,this.cpIdx=0}buildProgress(){let t=document.querySelector("#hud-progress .track");t.querySelectorAll(".dot").forEach(n=>n.remove()),this.dots=new Map;let e=(n,s)=>{let r=document.createElement("div");r.className="dot"+(s?" me":""),r.style.background=Li[n.char].color,r.innerHTML=`<em>${n.name.replace(/[<>&]/g,"")}</em>`,t.appendChild(r),this.dots.set(n.id,r)};this.players.forEach(n=>e(n,n.id===this.localId))}now(){return this.multi?vt.net.now():performance.now()}look(t,e){this.camYaw-=t*.0024,this.camPitch=un(this.camPitch+e*.0021,-.15,1.2),this.lookT=1.6}update(t){let e=this.me.body,n=this.world;this.levelTime=(this.now()-this.t0)/1e3;let s=this.levelTime;if(n.update(s,t),n.carry(e),e.yawOff&&(e.yaw+=e.yawOff,e.yawOff=0),s<0){let _=Math.ceil(-s);_!==this.lastCount&&_<=3&&(this.lastCount=_,this.count(String(_)),Xt.tick())}else this.phase==="countdown"&&(this.phase="race",this.count("GO!"),Xt.go(),this.lastCount=0,this.multi&&setTimeout(()=>{X===this&&!this.over&&this.toast(Pn?"Tap BAT to bonk rivals!":"Press B or click to swing the BAT!")},1400),this.cars.length&&setTimeout(()=>{X===this&&!this.over&&!this.drive&&this.toast("\u{1F697} Follow the CAR STATION signs to drive!")},this.multi?4200:1600));let r=s>=0&&!this.over,o=0,a=0;(He.has("KeyW")||He.has("ArrowUp"))&&o++,(He.has("KeyS")||He.has("ArrowDown"))&&o--,(He.has("KeyD")||He.has("ArrowRight"))&&a++,(He.has("KeyA")||He.has("ArrowLeft"))&&a--,He.has("KeyQ")&&(this.camYaw+=1.9*t),He.has("KeyE")&&(this.camYaw-=1.9*t),(Be.x||Be.y)&&(a+=Be.x,o+=Be.y);let l=Math.sin(this.camYaw),c=Math.cos(this.camYaw),h=-l*o+c*a,u=-c*o-l*a,f=Math.hypot(h,u);f>1&&(h/=f,u/=f);let d={mx:r?h:0,mz:r?u:0,jumpPressed:r&&En.jump,jumpHeld:r&&(He.has("Space")||Be.jump),divePressed:r&&En.dive&&!this.meta.city};this.meta.city&&(e.speedMul=(He.has("ShiftLeft")||He.has("ShiftRight"))&&f>.6?1.75:f>0&&f<.55?.42:1),this.meta.city&&(this.sitG&&(f>.25||En.jump)&&(this.sitG=!1),this.crouch&&En.jump&&(this.crouch=!1),this.drive&&(this.sitG=!1,this.crouch=!1),this.sitG?(d.mx=0,d.mz=0,d.jumpPressed=!1,d.jumpHeld=!1):(this.crouch&&(e.speedMul=.4),this.punchT>0&&(e.speedMul=Math.min(e.speedMul,.5)))),En.jump=!1,En.dive=!1,this.drive&&e.stun>0&&(e.stun=Math.max(0,e.stun-t)),e.stun>0?(this.stunReal=(this.stunReal||0)+t,this.stunReal>1.25&&(e.stun=0,e.immune=.6,this.stunReal=0)):this.stunReal=0;let g=Math.max(1,Math.ceil(t/(1/90))),x=t/g,m=!1;n.nearPlayers=[e,...this.remotes.values()];let p=!1;if(this.drive)this.updateDrive(t,r),e.events.length=0;else if(p)e.events.length=0;else for(let _=0;_<g;_++)ip(n,e,x,d),d.jumpPressed=!1,d.divePressed=!1,e.events.length&&(m=this.events(e)||m,e.events.length=0);if(r&&!this.drive){let _=n.checkHazards(e,s);_&&Is(e,_.nx,_.nz,_.pow)&&(Xt.hit(),this.particles.emit(e.x,e.y+.9,e.z,26,{color:"#ffffff",speed:5,up:3,life:.5,size:.3}),this.particles.emit(e.x,e.y+.9,e.z,14,{color:"#ffd23f",speed:7,up:4,life:.4,size:.25}))}!this.drive&&!this.meta.city&&this.updateBat(t,e),this.meta.city&&this.updatePunch(t,e),this.meta.city||this.updatePowerups(t,e),this.drive||(this.softCollide(e),this.softCars(e,r)),this.checkpoints(e),!this.finished&&s>=0&&e.z<this.info.finishZ&&e.y>this.info.finishY-3&&Math.abs(e.x)<16&&this.onLocalFinish(),e.grounded&&!e.stun&&!this.drive&&!(e.swim>.3)&&(this.stepDist+=Math.hypot(e.vx,e.vz)*t,this.stepDist>2.4&&(this.stepDist=0,Math.hypot(e.vx,e.vz)>3&&(Xt.step(),this.particles.emit(e.x,e.y+.05,e.z,2,{color:"#ffffff",speed:.8,up:.8,life:.35,size:.22,gravity:1}))));let v=this.me.model,T=v.group,b=e.swim>.3?un((e.swim-.3)/.4,0,1):0;if(this.drive?this.seatModel(T,this.drive):(T.position.set(e.x,e.y,e.z),T.rotation.y=e.yaw,T.rotation.x=b*.55*un(Math.hypot(e.vx,e.vz)/3,.25,1),T.scale.setScalar(1)),v.update(t,{seated:!!this.drive,speed:this.drive?0:Math.hypot(e.vx,e.vz),grounded:this.drive||b>0?!0:e.grounded&&!this.hang,vy:this.drive?0:e.vy,stun:this.drive?0:e.stun,dive:this.drive?0:e.dive,celebrate:this.finished||this.over&&this.winnerSelf||this.victory>0,swing:this.swingT,shield:e.shield>0,leader:this.leaderId===this.localId,mega:this.swingMega&&this.swingT>0,landed:m,crouch:this.crouch&&!this.drive,sitg:this.sitG&&!this.drive,punch:this.drive?0:this.punchT}),this.tagScale(this.me.tag,T.position,.85),this.multi){this.leaderId=this.findLeader();for(let _ of this.remotes.values())_.leader=_.id===this.leaderId,_.update(_.snaps.length?_.renderTime():0,t),this.tagScale(_.tag,_.model.group.position,1),_.flags&64&&Math.random()<.6&&this.particles.emit(_.x,_.y+.3,_.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});this.sendT+=t,this.sendT>=.033&&this.sendSnap()}this.updateCars(t,r),this.peds&&this.peds.update(t,Math.max(0,this.levelTime)+60,this.camera.position,this.cars.map(_=>_.st).concat(this.info.trafficList||[]),this.drive?null:this.me.body,(_,M)=>{Xc(Math.min(10,2+M*.3)),this.particles.emit(_.x,1,_.z,8,{color:"#ffd9a0",speed:3,up:2,life:.4,size:.2})},{sit:this.sitG||this.crouch&&Math.hypot(this.me.body.vx,this.me.body.vz)>.5,hitMe:_=>this.pedHitMe(_)}),this.updateCamera(t),this.updateLights(),this.water.material.uniforms.time.value=performance.now()/1e3,this.water.position.x=this.camera.position.x,this.water.position.z=this.camera.position.z,this.sky.position.copy(this.camera.position),this.scenery.update(s,this.camera.position),this.ambient.update(performance.now()/1e3,this.camera.position),this.particles.update(t),this.hud(t)}events(t){let e=!1;for(let n of t.events)if(n==="jump")Xt.jump(),this.particles.emit(t.x,t.y+.05,t.z,5,{color:"#ffffff",speed:1.5,up:1,life:.35,size:.25,gravity:2});else if(n==="land")Xt.land(t.landSpeed),e=!0,this.particles.emit(t.x,t.y+.05,t.z,Math.min(14,5+t.landSpeed*.4),{color:"#ffffff",speed:2.4,up:1.4,life:.45,size:.3,gravity:3});else if(n==="bounce")Xt.bounce(),e=!0,this.particles.emit(t.x,t.y+.1,t.z,18,{rainbow:!0,speed:3,up:2,life:.6,size:.3});else if(n==="dive")Xt.dive();else if(n==="splash"){Xt.splash();let s=t.swim>0&&t.waterSurf,r=ua[this.meta.key],o=s?"#ffffff":r.water==="lava"?"#ff9a2a":r.water==="grid"?"#d11cff":"#bfeaff";this.particles.emit(t.x,(s?t.waterSurf:this.world.waterY)+.2,t.z,s?34:40,{color:o,speed:4,up:s?6:9,life:.9,size:.45,gravity:16,spread:.6})}else n==="stroke"?(Xt.jump(),this.particles.emit(t.x,t.waterSurf+.1,t.z,10,{color:"#ffffff",speed:2,up:3,life:.6,size:.3,gravity:10})):n==="fell"&&this.onFell();return e}seatModel(t,e){let n=e.st,s=e.mesh.userData,r=s.seat;if(s.hero){let o=s.seatF,a=s.seatR,l=Math.sin(n.yaw),c=Math.cos(n.yaw);t.position.set(n.x+l*o-c*a,n.y+s.seatY,n.z+c*o+l*a),t.rotation.set(0,n.yaw,0),t.scale.setScalar(s.seatS||1);return}t.position.set(n.x+Math.sin(n.yaw)*r.z,n.y+r.y,n.z+Math.cos(n.yaw)*r.z),t.rotation.y=n.yaw,t.rotation.x=0,t.scale.setScalar(.8)}nearestFreeCar(t){if(t.stun>0||t.y>1.5&&!this.world.terrain||t.swim>.3)return null;let e=null,n=4.6;for(let s of this.cars){let r=s.st.driver!==-1&&s!==this.drive;if(r&&!(Hn&&this.multi)||Math.abs(t.y-s.st.y)>3)continue;let o=Math.hypot(t.x-s.st.x,t.z-s.st.z)+(r?1.5:0);o<n&&(n=o,e=s)}return e}spotFree(t,e,n){for(let s of this.info.track&&this.info.track.boxes||[])if(t>s.x0-.5&&t<s.x1+.5&&e>s.z0-.5&&e<s.z1+.5)return!1;for(let s of this.cars){if(s===n)continue;let r=t-s.st.x,o=e-s.st.z,a=Math.sin(s.st.yaw),l=Math.cos(s.st.yaw),c=r*a+o*l,h=-r*l+o*a;if(Math.abs(c)<(s.st.hl||2.2)+.45&&Math.abs(h)<(s.st.hw||1)+.45)return!1}return!0}onJack(t){let e=this.cars[t.c|0];e&&e===this.drive&&this.toggleCar(!0)}toggleCar(t){if(!t&&(this.over||this.finished||this.levelTime<0||this.menuOpen||!this.cars.length)||t&&!this.drive)return;let e=this.me.body;if(this.drive){let n=this.drive,s=n.st;if(!t&&Math.abs(s.speed)>5){this.toast("Slow down to get out!");return}if(!t&&s.y>1.2&&!this.world.terrain)return;let r=!!n.mesh.userData.hero,o=Math.cos(s.yaw)*(r?-1:1),a=-Math.sin(s.yaw)*(r?-1:1),l=s.x+o*2.4,c=s.z+a*2.4;if(r){for(let[h,u]of[[o*2.4,a*2.4],[-o*2.4,-a*2.4],[Math.sin(s.yaw)*3.6,Math.cos(s.yaw)*3.6],[-Math.sin(s.yaw)*3.6,-Math.cos(s.yaw)*3.6]])if(this.spotFree(s.x+h,s.z+u,n)){l=s.x+h,c=s.z+u;break}}Fc(e,l,this.world.terrain?this.world.terrain(l,c)+.05:.05,c,s.yaw),e.hitCd=.3,t||(s.vx=s.vz=s.speed=0,s.driver=-1,s.parked=!0),this.drive=null,document.body.classList.remove("driving"),sf(),rf(),of(),Xr(),r?(pa(!0),setTimeout(()=>pa(!1),1500)):Xt.door(),this.g_g(this.me.model.group),this.multi&&!t&&vt.net.send({t:"carpark",c:this.cars.indexOf(n),x:+s.x.toFixed(2),y:+s.y.toFixed(2),z:+s.z.toFixed(2),r:+s.yaw.toFixed(3)}),this.camYaw=s.yaw+Math.PI,this.camInit=!1,Hn&&(this.camPitch=.17)}else{let n=this.nearestFreeCar(e);if(!n)return;if(this.multi&&n.st.driver!==-1&&n.st.driver!==this.localId&&vt.net.send({t:"jack",to:n.st.driver,c:this.cars.indexOf(n)}),this.drive=n,n.st.driver=this.localId,n.st.parked=!1,e.vx=e.vz=e.vy=0,e.grounded=!0,document.body.classList.add("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("near-swing"),n.mesh.userData.hero){let s=la(n.st.id);pa(!0),setTimeout(()=>pa(!1),700),setTimeout(()=>{this.drive===n&&(yp(),gp(s))},900)}else pp(),Xt.door(),Xt.vroom();this.camPitch=.3,this.camYaw=n.st.yaw+Math.PI,this.toast(cs[n.st.id].name.toUpperCase()+"!  "+(Pn?"use the joystick to drive, tap the door to get out":"W/S drive \u2022 A/D steer \u2022 C get out"))}}g_g(t){t.scale.setScalar(1),t.rotation.x=0}updateDrive(t,e){let n=this.drive,s=n.st,r=this.me.body,o=0,a=0;if(e&&((He.has("KeyW")||He.has("ArrowUp"))&&o++,(He.has("KeyS")||He.has("ArrowDown"))&&o--,(He.has("KeyD")||He.has("ArrowRight"))&&a++,(He.has("KeyA")||He.has("ArrowLeft"))&&a--,Be.x||Be.y)){let u=Math.abs(Be.y)<.12?0:Be.y,f=Math.abs(Be.x)<.06?0:Be.x;o+=u,a+=Math.sign(f)*Math.min(1,Math.abs(f)*2)}let l=this.cars.filter(u=>u!==n).map(u=>u.st);if(this.info.trafficList)for(let u of this.info.trafficList)l.push(u);let c="",h={gas:un(o,-1,1),steer:un(a,-1,1)};for(let u=0;u<2;u++)c=Tp(s,t/2,h,this.info.track,l,Math.max(0,this.levelTime))||c;if(n.mesh.userData.hero){if(c){Xc(s.crash||6);let u=Pn?.6:1,f=s.crash||6,d=s.x+Math.sin(s.yaw)*Math.sign(s.speed||1)*1.9,g=s.z+Math.cos(s.yaw)*Math.sign(s.speed||1)*1.9;this.particles.emit(d,s.y+.6,g,Math.round((c==="crash"?16:6)*u),{color:"#ffcf6a",speed:6+f*.3,up:3,life:.35,size:.1,gravity:14,spread:.6}),this.particles.emit(d,s.y+.7,g,Math.round((c==="crash"?9:4)*u),{color:"#b9b9b9",speed:1.6,up:1.4,life:1.1,size:.9,gravity:-.6,spread:.8}),s.dmg=Math.min(100,(s.dmg||0)+(c==="crash"?f*1.4:f*.5)),this.shake=Math.max(this.shake||0,Math.min(1,.12+(s.crash||0)*.04)),s.crash=0}}else c==="bump"&&(Xt.land(18),this.particles.emit(s.x,.8,s.z,12,{color:"#ffd23f",speed:4,up:3,life:.4,size:.25}),this.shake=Math.max(this.shake||0,.25)),c==="crash"&&(Xt.land(34),this.particles.emit(s.x,.9,s.z,26,{color:"#ffb347",speed:7,up:5,life:.6,size:.35}),this.shake=Math.max(this.shake||0,Math.min(1,.4+(s.crash||0)*.04)),s.crash=0);if(r.x=s.x,r.y=s.y,r.z=s.z,r.vx=s.vx,r.vz=s.vz,r.vy=0,r.grounded=!0,r.ground=null,r.yaw=s.yaw,r.stun=0,n.mesh.userData.hero?(xp(s.rpm,s.load),_p(s.skid>.12?s.skid:0)):mp(Math.abs(s.speed)/cs[s.id].max,o>0),this.hornCd-=t,this.skidT-=t,n.mesh.userData.hero){if(this.smokeT=(this.smokeT||0)-t,this.smokeT<=0){this.smokeT=Pn?.09:.05;let u=Math.sin(s.yaw),f=Math.cos(s.yaw);if(s.skid>.25&&Math.abs(s.speed)>5)for(let d of[-1,1])this.particles.emit(s.x-u*1.25+f*d*.85,s.y+.12,s.z-f*1.25-u*d*.85,1,{color:"#e6e6e6",speed:.5,up:.7,life:.9,size:.7,gravity:-.35,spread:.2});else s.load>.9&&s.speed>.5&&s.speed<5&&s.gear===1&&this.particles.emit(s.x-u*1.25,s.y+.1,s.z-f*1.25,1,{color:"#d0d0d0",speed:.4,up:.5,life:.6,size:.45,gravity:-.3});(s.dmg||0)>35&&this.particles.emit(s.x+u*1.5,s.y+1,s.z+f*1.5,1,{color:s.dmg>70?"#2a2a2a":"#8a8a8a",speed:.3,up:1.4,life:1.3,size:.6,gravity:-.8,spread:.3})}}else if(s.drift>.55&&Math.abs(s.speed)>8){this.skidT<=0&&(this.skidT=.25,Xt.skid());for(let u of[-1,1])this.particles.emit(s.x-Math.sin(s.yaw)*1.5+Math.cos(s.yaw)*u*.9,.25,s.z-Math.cos(s.yaw)*1.5-Math.sin(s.yaw)*u*.9,1,{color:"#e8e8e8",speed:1.2,up:1.2,life:.5,size:.5,gravity:-.5})}s.boost>0&&Math.random()<.8&&this.particles.emit(s.x-Math.sin(s.yaw)*2.2,.5,s.z-Math.cos(s.yaw)*2.2,1,{color:"#ffb347",speed:2,up:1,life:.35,size:.4})}honkOn(){this.drive&&this.drive.mesh.userData.hero?vp(la(this.drive.st.id).hornHz):this.honk()}honkOff(){Xr()}honk(){if(this.drive&&this.hornCd<=0){let t=cs[this.drive.st.id].racer;this.hornCd=t?.9:.4,t?Xt.honkBig():Xt.honk(),t&&(this.shake=Math.max(this.shake||0,.12))}}onCars(t){for(let e of Object.keys(t||{})){let n=this.cars[+e],s=t[e];!n||!s||n===this.drive||(n.st.x=+s.x,n.st.z=+s.z,n.st.y=+s.y||0,n.st.yaw=+s.r,n.mesh.position.set(n.st.x,n.st.y,n.st.z),n.mesh.rotation.y=n.st.yaw)}}softCars(t,e){if(!e||this.finished)return;let n=this.cars.filter(s=>s!==this.drive).map(s=>s.st);if(this.info.trafficList)for(let s of this.info.trafficList)n.push(s);for(let s of n){let r=cs[s.id],o=t.x-s.x,a=t.z-s.z;if(o*o+a*a>40||Math.abs(t.y-s.y)>2.5)continue;let l=s.hl||r.hl,c=s.hw||r.hw,h=Math.sin(s.yaw),u=Math.cos(s.yaw),f=o*h+a*u,d=-o*u+a*h,g=l+xe.R+.05,x=c+xe.R+.05;if(Math.abs(f)>=g||Math.abs(d)>=x)continue;if(Math.abs(s.speed)>4&&t.hitCd<=0){let v=Math.sign(s.speed)||1,T=h*v,b=u*v;T+=-u*Math.sign(d||1)*.5,b+=h*Math.sign(d||1)*.5;let _=Math.hypot(T,b)||1;if(Is(t,T/_,b/_,Math.min(14,3+Math.abs(s.speed)*.7))){Xc(6);continue}}let m=g-Math.abs(f),p=x-Math.abs(d);if(m<p){let v=Math.sign(f||1)*m;t.x+=h*v,t.z+=u*v}else{let v=Math.sign(d||1)*p;t.x+=-u*v,t.z+=h*v}}}updateCars(t,e){var a;this.lastDt=t;let n=this.me.body,s=performance.now()/1e3;for(let l of this.cars)l!==this.drive&&(l.st.driver=-1,l.st.speed=0,l.st.vx=l.st.vz=0);let r=[];for(let l of this.remotes.values()){let c=l.model.group;if(c.rotation.order="YXZ",!!l.has)if(l.flags&256){let h=this.cars[l.flags>>9&7];if(h&&h!==this.drive){let u=h.st,f=(l.yaw-((a=u._py)!=null?a:l.yaw)+Math.PI*3)%(Math.PI*2)-Math.PI;u.driver=l.id,u.parked=!1,u.x=l.x,u.z=l.z;{let d=u.y;u.y=l.y||0,u.pitch+=((Math.abs(l.speed)>1?Math.atan2(u.y-d,Math.max(.01,Math.abs(l.speed)*t)):0)-u.pitch)*Math.min(1,t*8)}u.speed=l.speed,u.vx=Math.sin(l.yaw)*l.speed,u.vz=Math.cos(l.yaw)*l.speed,u._py=l.yaw,u.steer+=(un(-f/Math.max(t,.008)*.45,-1,1)-u.steer)*Math.min(1,t*8),u.yaw=l.yaw,this.seatModel(c,h),this.tagScale(l.tag,c.position,1)}}else c.scale.setScalar(1),c.rotation.x=l.flags&4096?.55:0,l.flags&4096&&r.push([l.x,l.z,.35+Math.min(1,l.speed/8)*.65])}n.swim>.3&&!this.drive&&r.push([n.x,n.z,.35+Math.min(1,Math.hypot(n.vx,n.vz)/8)*.65]),n.swim>.3&&!this.drive&&Math.hypot(n.vx,n.vz)>2&&Math.random()<.5&&this.particles.emit(n.x,n.waterSurf+.08,n.z,1,{color:"#ffffff",speed:1.2,up:1.6,life:.5,size:.28,gravity:6,spread:.5});for(let l of this.poolMeshes){let c=l.wm.material.uniforms;c.time.value=s,l.cm.material.uniforms.time.value=s;for(let h=0;h<4;h++){let u=r[h],f=c.ag.value[h];u?f.set(u[0],u[1],u[2]):f.set(0,0,0)}}{let l=!1;for(let h of this.poolMeshes){let u=h.pl,f=this.camera.position;f.x>u.x0&&f.x<u.x1&&f.z>u.z0&&f.z<u.z1&&f.y<u.surf&&(l=!0)}let c=pt("uw");c&&c.classList.contains("on")!==l&&c.classList.toggle("on",l)}X0(this.camera.position);for(let l of this.cars)l.mesh.position.set(l.st.x,l.st.y,l.st.z),l.mesh.rotation.y=l.st.yaw,Rp(l.mesh,l.st,t);let o=!this.drive&&e&&!this.menuOpen&&this.nearestFreeCar(n);if(!!o!==document.body.classList.contains("near-car")&&document.body.classList.toggle("near-car",!!o),this.drive){let l=pt("car-speed");if(l){let c=Math.round(Math.abs(this.drive.st.speed)*3.6);l.firstElementChild.textContent!==String(c)&&(l.firstElementChild.textContent=c)}}}onFell(){let t=this.me.body,e=this.cpCur,n=(this.slot-1)*1.6,s,r,o;if(e)s=un(e.x+n,e.x-e.w/2+1.5,e.x+e.w/2-1.5),r=e.y+.05,o=e.spawn[2];else{let l=this.spawnPoint(this.slot);s=l[0],r=l[1]+.02,o=l[2]}Fc(t,s,r,o,Math.PI),this.rs++,Xt.respawn();let a=pt("flash");a.classList.add("on"),setTimeout(()=>a.classList.remove("on"),60),this.particles.emit(s,r+.8,o,30,{rainbow:!0,speed:3,up:3,life:.8,size:.3}),this.camInit=!1,this.camYaw=0}checkpoints(t){let e=this.world.checkpoints;for(;this.cpIdx<e.length&&t.z<e[this.cpIdx].z&&t.y>e[this.cpIdx].y-2.5&&Math.abs(t.x-e[this.cpIdx].x)<e[this.cpIdx].w/2+3;)this.cpCur=e[this.cpIdx],this.cpIdx++,Xt.checkpoint(),this.toast("CHECKPOINT!"),this.particles.emit(t.x,t.y+1,t.z,24,{color:"#ffd23f",speed:3,up:5,life:.8,size:.3})}softCollide(t){if(this.finished)return;let e=xe.R*2+.06;for(let n of this.remotes.values()){if(!n.has||n.flags&8||Date.now()-n.rxAt>500)continue;let s=t.x-n.x,r=t.z-n.z,o=t.y-n.y;if(Math.abs(o)>xe.H*.8)continue;let a=Math.hypot(s,r);if(a>=e)continue;let l,c;if(a>.001)l=s/a,c=r/a;else{let m=t.yaw*7+1;l=Math.cos(m),c=Math.sin(m)}let h=e-a;t.x+=l*h*.62,t.z+=c*h*.62;{let m=Math.sin(t.yaw),p=Math.cos(t.yaw);if(Math.hypot(t.vx,t.vz)>1&&-(m*l+p*c)>.3){let T=-c,b=l,_=m*T+p*b;Math.abs(_)<.3&&(_=-p*T+m*b||1),_=Math.sign(_),t.x+=T*_*h*.55,t.z+=b*_*h*.55}}let u=n.vx||0,f=n.vz||0,d=(t.vx-u)*l+(t.vz-f)*c;if(this.multi&&d<-1.5){let m=performance.now();n.shoveAt>m-80||(n.shoveAt=m,vt.net.send({t:"shove",to:n.id,nx:+(-l).toFixed(3),nz:+(-c).toFixed(3),p:+Math.min(12,-d).toFixed(1)}))}let g=performance.now(),x=!(n.lastContact>g-150);if(n.lastContact=g,d<0&&x){let m=-1.7*d*.5;t.vx+=l*m,t.vz+=c*m,m>2.5&&(t.noCtrl=Math.max(t.noCtrl,.16)),n.flags&4&&-d>7&&t.hitCd<=0&&Is(t,l,c,11)?this.bonked("TACKLED!",n.name||"",t):-d>6&&t.hitCd<=0&&(Xt.land(6),this.particles.emit(t.x-l*.4,t.y+.9,t.z-c*.4,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}}}bonked(t,e,n){Xt.bonk(),this.toast(t+(e?"  \u2022 "+e:"")),this.particles.emit(n.x,n.y+1,n.z,22,{color:"#ffffff",speed:6,up:3,life:.5,size:.3}),this.particles.emit(n.x,n.y+1,n.z,14,{color:"#ffd23f",speed:8,up:4,life:.45,size:.28})}sendSnap(){let t=this.me.body;this.sendT=0,this.lastSend=performance.now();let e=(t.grounded?1:0)|(t.stun>0?2:0)|(t.dive>0?4:0)|(this.finished?8:0)|(this.swingT>0?16:0)|(t.shield>0?32:0)|(this.fx.turbo>0?64:0)|(this.swingMega&&this.swingT>0?128:0)|(this.drive?256|this.drive.st.id<<9:0)|(this.an?this.an.flagBits():0)|(t.swim>.4&&!this.drive?4096:0)|(this.hang?1048576:0)|(this.crouch&&!this.drive?2097152:0)|(this.sitG&&!this.drive?4194304:0)|(this.punchT>0&&!this.drive?8388608:0);vt.net.send({t:"s",x:+t.x.toFixed(2),y:+t.y.toFixed(2),z:+t.z.toFixed(2),r:+t.yaw.toFixed(2),a:e,sp:+Math.min(99,Math.hypot(t.vx,t.vz)).toFixed(1),ts:vt.net.stamp(),rs:this.rs})}swing(){return this.meta.city||!(this.multi||this.meta.free)||this.over||this.finished||this.levelTime<0||this.batCd>0||this.me.body.stun>0?!1:(this.swingMega=this.fx.mega>0,this.swingMega&&this.fx.mega--,this.batCd=1.1,this.swingT=.001,this.batPending=!0,Xt.swing(),!0)}updateBat(t,e){this.batCd>0&&(this.batCd-=t),this.swingT>0&&(this.swingT+=t/.42,e.stun>0?(this.swingT=0,this.batPending=!1):this.batPending&&this.swingT>=.55&&(this.batPending=!1,this.batHit(e)),this.swingT>=1&&(this.swingT=0))}batHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw);for(let s of this.remotes.values()){if(!s.has||s.flags&8||Date.now()-s.rxAt>800)continue;let r=s.x-t.x,o=s.z-t.z,a=s.y-t.y,l=Math.hypot(r,o);if(l>(this.swingMega?4.4:2.9)||Math.abs(a)>1.7||l<.001||(r*e+o*n)/l<.1)continue;let c=e*.7+r/l*.3,h=n*.7+o/l*.3,u=Math.hypot(c,h)||1;c/=u,h/=u,vt.net.send({t:"bat",to:s.id,nx:+c.toFixed(3),nz:+h.toFixed(3),p:this.swingMega?2:1,ax:+t.x.toFixed(1),az:+t.z.toFixed(1)}),Xt.bonk(),this.toast("BONK!  \u2022 "+(s.name||"")),this.particles.emit(s.x,s.y+1,s.z,24,{color:"#ffd23f",speed:7,up:4,life:.5,size:.3}),this.particles.emit(s.x,s.y+1,s.z,14,{color:"#ffffff",speed:5,up:3,life:.4,size:.25})}}toggleCrouch(){this.over||this.drive||(this.sitG=!1,this.crouch=!this.crouch,this.syncAct())}toggleSit(){if(this.over||this.drive)return;let t=this.me.body;if(this.sitG){this.sitG=!1,this.syncAct();return}!t.grounded||Math.hypot(t.vx,t.vz)>2.5||(this.crouch=!1,this.sitG=!0,this.syncAct())}syncAct(){let t=pt("a-crouch"),e=pt("a-sit");t&&t.classList.toggle("on",!!this.crouch),e&&e.classList.toggle("on",!!this.sitG)}pedHitMe(t){let e=this.me.body;if(this.drive||e.stun>0||e.immune>0)return;let n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s)||1;Is(e,n/r,s/r,7)&&(e.vy=2,e.stun=.4,this.sitG=!1,this.crouch=!1,Xt.bonk(),this.shake=Math.max(this.shake||0,.2),this.particles.emit(e.x,e.y+1.2,e.z,8,{color:"#ffffff",speed:3,up:2,life:.3,size:.25}))}punch(){return this.over||this.finished||this.levelTime<0||this.drive||this.punchCd>0||this.me.body.stun>0?!1:(this.sitG=!1,this.punchCd=.55,this.punchT=.001,this.punchPending=!0,Xt.swing(),!0)}updatePunch(t,e){this.punchCd>0&&(this.punchCd-=t),this.punchT>0&&(this.punchT+=t/.45,e.stun>0?(this.punchT=0,this.punchPending=!1):this.punchPending&&this.punchT>=.42&&(this.punchPending=!1,this.punchHit(e)),this.punchT>=1&&(this.punchT=0))}punchHit(t){let e=Math.sin(t.yaw),n=Math.cos(t.yaw);if(!(this.peds&&this.peds.punch(t.x,t.z,e,n,s=>{Xt.bonk(),this.particles.emit(s.x,1.2,s.z,10,{color:"#ffffff",speed:4,up:2,life:.3,size:.25}),this.particles.emit(s.x,1.2,s.z,6,{color:"#ffd23f",speed:5,up:3,life:.3,size:.2})})))for(let s of this.remotes.values()){if(!s.has||s.flags&8||Date.now()-s.rxAt>800)continue;let r=s.x-t.x,o=s.z-t.z,a=s.y-t.y,l=Math.hypot(r,o);if(!(l>1.9||Math.abs(a)>1.5||l<.001)&&!((r*e+o*n)/l<.3)){vt.net.send({t:"bat",to:s.id,nx:+e.toFixed(3),nz:+n.toFixed(3),p:.5,ax:+t.x.toFixed(1),az:+t.z.toFixed(1)}),Xt.bonk(),this.particles.emit(s.x,s.y+1.2,s.z,10,{color:"#ffffff",speed:4,up:2,life:.3,size:.25});break}}}sendNet(t){this.multi&&vt.net.send(t)}onShove(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0||e.shield>0)return;let n=un(+t.p||0,0,12),s=+t.nx,r=+t.nz;!Number.isFinite(s)||!Number.isFinite(r)||(e.x+=s*n*.05,e.z+=r*n*.05,e.vx+=s*n*.12,e.vz+=r*n*.12)}onBat(t){let e=this.me.body;if(this.over||this.finished||this.levelTime<0)return;let n=(this.players.find(r=>r.id===t.from)||{}).name||"";if(e.immune>0||e.stun>.2||Number.isFinite(t.ax)&&Number.isFinite(t.az)&&Math.hypot(t.ax-e.x,t.az-e.z)>7)return;if(e.hitCd=0,e.shield>0){this.toast("SHIELD BLOCKED!"),Xt.pickup();return}if(t.p===.5){Is(e,t.nx,t.nz,9)&&(e.vy=3,e.stun=.45,this.sitG=!1,this.crouch=!1,Xt.bonk());return}let s=t.p===2;Is(e,t.nx,t.nz,s?22:15)&&(e.vy=s?11:9,e.stun=s?1:.75,this.bonked(s?"MEGA BONK!":"BONKED!",n,e))}buildBoxes(){if(this.boxes=[],this.meta.city)return;let t=[],e=(s,r,o)=>[-4,0,4].forEach(a=>t.push({x:s+a,y:o+1.35,z:r}));e(0,-10,0);let n=1e9;for(let s of this.world.checkpoints)Math.abs(s.z-n)<12||(n=s.z,e(s.x,s.z-5,s.y));if(!i.boxAssets){let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),o=r.createLinearGradient(0,0,128,128);o.addColorStop(0,"#ffe45e"),o.addColorStop(1,"#ff8a1a"),r.fillStyle=o,r.fillRect(0,0,128,128),r.strokeStyle="#fff",r.lineWidth=8,r.strokeRect(6,6,116,116),r.fillStyle="#fff",r.strokeStyle="#7a3500",r.lineWidth=6,r.font="bold 92px Arial",r.textAlign="center",r.textBaseline="middle",r.strokeText("?",64,70),r.fillText("?",64,70);let a=new nn(s);a.colorSpace=Ne,i.boxAssets={geo:new Qt(.95,.95,.95),mat:new ee({map:a,emissive:"#ff9a00",emissiveIntensity:.55,roughness:.35})}}for(let s of t){let r=new et(i.boxAssets.geo,i.boxAssets.mat);r.position.set(s.x,s.y,s.z),r.castShadow=!0,this.scene.add(r),this.boxes.push({...s,mesh:r,respawn:0})}}findLeader(){if(this.players.length<2||this.levelTime<4)return-1;let t=this.localId,e=this.finished?1e5:-this.me.body.z;for(let n of this.remotes.values()){if(!n.has)continue;let s=n.flags&8?1e5:-n.z;s>e+.5&&(e=s,t=n.id)}return t}pickup(t,e){t.respawn=9,t.mesh.visible=!1,Xt.pickup();let n=this.multi?["turbo","turbo","turbo","jump","jump","shield","shield","mega","mega","mega"]:["turbo","jump","shield"],s=e||n[Math.random()*n.length|0],r=this.fx,o=this.me.body;return s==="turbo"?(r.turbo=5,this.toast("\u{1F680} TURBO!")):s==="jump"?(r.jump=7,this.toast("\u{1F998} SUPER JUMP!")):s==="shield"?(r.shield=8,this.toast("\u{1F6E1}\uFE0F SHIELD!")):(r.mega=2,this.toast("\u{1F3CF} MEGA BAT x2!")),this.particles.emit(o.x,o.y+1,o.z,26,{rainbow:!0,speed:4,up:4,life:.7,size:.32}),s}updatePowerups(t,e){let n=performance.now()/1e3,s=this.fx;for(let o of this.boxes){if(o.respawn>0){o.respawn-=t,o.respawn<=0&&(o.mesh.visible=!0);continue}o.mesh.rotation.y+=t*2,o.mesh.rotation.x=Math.sin(n*1.5+o.x)*.25,o.mesh.position.y=o.y+Math.sin(n*2.5+o.x)*.15,!(this.finished||this.over||this.levelTime<0)&&Math.abs(e.x-o.x)<1.3&&Math.abs(e.z-o.z)<1.3&&e.y<o.y+.8&&e.y+xe.H>o.y-.5&&this.pickup(o)}for(let o of["turbo","jump","shield"])s[o]>0&&(s[o]=Math.max(0,s[o]-t));e.speedMul=(s.turbo>0?1.4:1)*1,e.jumpMul=s.jump>0?1.3:1,e.shield=s.shield,s.turbo>0&&Math.hypot(e.vx,e.vz)>3&&Math.random()<.7&&this.particles.emit(e.x,e.y+.3,e.z,1,{color:"#5fc2ff",speed:1,up:.5,life:.35,size:.35});let r=["turbo","jump","shield"].map(o=>s[o]>0?o+Math.ceil(s[o]):"").join("|")+"|"+s.mega;if(r!==this.fxSig){this.fxSig=r;let o=pt("hud-fx");if(!o)return;o.innerHTML="";let a=(l,c)=>{let h=document.createElement("div");h.className="fx",h.textContent=l+" "+c,o.appendChild(h)};s.turbo>0&&a("\u{1F680}",Math.ceil(s.turbo)+"s"),s.jump>0&&a("\u{1F998}",Math.ceil(s.jump)+"s"),s.shield>0&&a("\u{1F6E1}\uFE0F",Math.ceil(s.shield)+"s"),s.mega>0&&a("\u{1F3CF}","x"+s.mega)}}onLocalFinish(){this.finished=!0,this.finishTime=Math.max(0,this.levelTime),Xt.finish();let t=this.info.finishZ;this.particles.emit(0,this.info.finishY+6,t,120,{rainbow:!0,speed:9,up:10,life:1.8,size:.5,gravity:7,spread:10}),this.particles.emit(-9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.particles.emit(9,this.info.finishY+1,t,40,{rainbow:!0,speed:4,up:12,life:1.4,size:.4,gravity:8}),this.multi?this.toast("FINISHED!"):this.endSingle(!1)}endSingle(t){if(this.over)return;this.over=!0,this.winnerSelf=!t;let e=-this.info.finishZ,n=un(-this.me.body.z/e,0,1),s="";if(!t){let o=this.finishTime,a=Dp(this.level);!a||o<a?(localStorage.setItem("ph_best_"+this.level,String(o)),s=a?"NEW BEST TIME!":"First clear!"):s=`Best: ${Yc(a)}`}let r=[{place:1,name:this.me.name,char:this.me.char,win:!t,tm:t?`${Math.round(n*100)}% of the track`:Yc(this.finishTime),self:!0}];setTimeout(()=>vt.showResults({title:t?"TIME'S UP!":"YOU DID IT!",sub:t?"You ran out of time. Try again!":s,rows:r,single:!0,win:!t}),t?300:1400),Wc(!0),t?Xt.lose():Xt.win()}onFin(t){this.finishedMap.set(t.id,t.place);let e=this.players.find(n=>n.id===t.id);t.id===this.localId?this.toast(`${cf(t.place)} PLACE!`):(this.toast(`${e?e.name:"Player"} finished ${cf(t.place)}!`),Xt.checkpoint())}onEnd(t){this.over=!0;let e=t.winnerId===this.localId;this.winnerSelf=e,Wc(!0),e?Xt.win():Xt.lose();let n=t.results.map(r=>({place:r.place,name:r.name,char:r.char,win:r.id===t.winnerId,self:r.id===this.localId,tm:r.finished?Yc(r.time):`${Math.round(r.progress*100)}% of the track`})),s=t.results[0];setTimeout(()=>vt.showResults({title:e?"YOU WIN!":`${s?s.name:"Nobody"} WINS!`,sub:t.reason==="time"?"Time's up - the nearest player to the finish gate wins!":"First to the finish gate wins!",rows:n,single:!1,win:e}),900)}addRemote(t){this.remotes.has(t.id)||(this.players.push(t),this.remotes.set(t.id,new ga(t,this.scene)),this.buildProgress(),this.toast(t.name+" joined the race!"))}removeRemote(t){let e=this.remotes.get(t);if(e){e.dispose(this.scene),this.remotes.delete(t);let n=this.dots.get(t);n&&n.remove()}}tagScale(t,e,n){if(!t)return;let s=e.distanceTo(this.camera.position),r=un(s*.07,1,5.2)*n;t.scale.set(2.8*r,.7*r,1),t.visible=s<260}updateCamera(t){let e=this.me.body,n=Math.cos(this.camPitch),s=Math.sin(this.camPitch),r=Math.hypot(e.vx,e.vz);this.camera.fov=Yr(this.camera.fov,(Hn&&!this.drive?54+un(r-4,0,6)*.8:62)+(Hn&&!this.drive?0:un(r-10,0,12)*.9),Math.min(1,t*4)),this.camera.updateProjectionMatrix();let o=this.camDist;if(this.drive){let u=this.drive.st;this.lookT-=t,o=9.2+Math.min(4,Math.abs(u.speed)*.12),this.lookT<=0&&(this.camYaw=mf(this.camYaw,u.yaw+Math.PI,1-Math.exp(-3.2*t)),this.camPitch+=(.28-this.camPitch)*(1-Math.exp(-2*t)))}this.shoulder+=((Hn&&!this.drive?.62:0)-this.shoulder)*Math.min(1,t*5);let a=e.x+Math.cos(this.camYaw)*this.shoulder,l=e.y+(this.drive?1.1:Hn?1.5:1.35),c=e.z-Math.sin(this.camYaw)*this.shoulder;this.camInit||(this.camTarget.set(a,l,c),this.camInit=!0);let h=1-Math.exp(-14*t);if(this.camTarget.x+=(a-this.camTarget.x)*h,this.camTarget.z+=(c-this.camTarget.z)*h,this.camTarget.y+=(l-this.camTarget.y)*(1-Math.exp(-7*t)),this.camera.position.set(this.camTarget.x+Math.sin(this.camYaw)*n*o,this.camTarget.y+s*o+.4,this.camTarget.z+Math.cos(this.camYaw)*n*o),this.meta.city){let u=this.camera.position,f=this.world.terrain,d=this.camTarget.x,g=this.camTarget.y,x=this.camTarget.z,m=u.x-d,p=u.y-g,v=u.z-x,T=1;for(let _ of this.info.track.boxes||[]){if(g>_.h+1&&u.y>_.h+1)continue;let M=0,S=T,y=!0;for(let[w,A,C,E]of[[d,m,_.x0-.45,_.x1+.45],[x,v,_.z0-.45,_.z1+.45],[g,p,-5,_.h+.45]]){if(Math.abs(A)<1e-6){if(w<C||w>E){y=!1;break}continue}let L=(C-w)/A,I=(E-w)/A;if(L>I){let D=L;L=I,I=D}if(M=Math.max(M,L),S=Math.min(S,I),M>S){y=!1;break}}y&&M<T&&M>0&&(T=M)}for(let _=1;_<=8;_++){let M=_/8*T;if(g+p*M<f(d+m*M,x+v*M)+.35){T=Math.max(.05,(_-1)/8*T);break}}this.camK=this.camK===void 0?1:this.camK;let b=un(T,.06,1);this.camK=b<this.camK?b:this.camK+(b-this.camK)*Math.min(1,t*3),this.camK<1&&u.set(d+m*this.camK,g+p*this.camK,x+v*this.camK),u.y<f(u.x,u.z)+.35&&(u.y=f(u.x,u.z)+.35)}if(this.shake>.01){let u=this.shake*.5;this.camera.position.x+=(Math.random()-.5)*u,this.camera.position.y+=(Math.random()-.5)*u*.7,this.camera.position.z+=(Math.random()-.5)*u,this.shake*=Math.exp(-7*(this.lastDt||.016))}else this.shake=0;this.camera.lookAt(this.camTarget.x,this.camTarget.y+.2,this.camTarget.z)}updateLights(){let t=this.camTarget;this.sun.position.set(t.x+this.sunDir.x,t.y+this.sunDir.y,t.z+this.sunDir.z),this.sun.target.position.copy(t)}count(t){let e=pt("hud-count");e.textContent=t,e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop")}toast(t){if(this.meta.city)return;let e=pt("hud-toast");e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}rank(){var s;let t=this.me.body,e=1,n=(s=this.finishedMap.get(this.localId))!=null?s:this.finished&&!this.multi?1:null;if(n)return n;for(let r of this.remotes.values())(this.finishedMap.get(r.id)||r.has&&r.z<t.z-.5)&&e++;return e}hud(t){if(this.hudT+=t,this.hintT>0&&(this.hintT-=t,this.hintT<=0&&pt("hud-hint").classList.add("fade")),this.hudT<.066)return;this.hudT=0;let e=this.levelTime,n=Math.max(0,Math.floor(e)),s=pt("hud-timer");s.textContent=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,s.classList.remove("low");{let c=!this.multi&&!this.meta.free;pt("hud-hint").classList.toggle("single",c),document.body.classList.toggle("single",c)}pt("hud-obj").classList.add("hidden"),pt("hud-rank").textContent=this.meta.city?"Punjabi GTA":this.multi?cf(this.rank())+" / "+this.players.length:`${Math.max(0,Math.round(un(-this.me.body.z/-this.info.finishZ,0,1)*100))}%`;let r=-this.info.finishZ,o=(c,h)=>{let u=this.dots.get(c);u&&(u.style.left=un(-h/r,0,1)*100+"%")};o(this.localId,this.me.body.z);for(let c of this.remotes.values())o(c.id,c.has?c.z:0);let a=pt("click-hint"),l=!this.over&&!this.menuOpen&&document.pointerLockElement!==Bi;l!==a.classList.contains("show")&&a.classList.toggle("show",l);{let c=pt("t-bat");c&&c.classList.toggle("cd",this.batCd>0)}this.multi&&(pt("hud-net").textContent=`ping ${Math.round(vt.net.rtt)} ms`)}render(){Ln.render(this.scene,this.camera)}destroy(){this.peds&&(this.peds.dispose(),this.peds=null),Vc(),sf();{let t=pt("uw");t&&t.classList.remove("on")}document.body.classList.remove("sky-swap"),document.body.classList.remove("city-mode"),rf(),of(),Xr(),af(!1),document.body.classList.remove("driving"),document.body.classList.remove("near-car"),document.body.classList.remove("near-swing"),document.body.classList.remove("in-race"),document.body.classList.remove("single"),pt("pause").classList.add("hidden"),this.menuOpen=!1,pt("hud").classList.add("hidden"),pt("hud-count").textContent="",pt("hud-toast").classList.remove("show");{let t=pt("hud-fx");t&&(t.innerHTML="")}for(let t of this.remotes.values())t.dispose(this.scene);this.me.model.dispose(),this.scenery.dispose(),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>{n.map&&n.map.dispose(),n.dispose()})}),this.scene.clear()}},tM=["title","profile","levels","mp","lobby","results","help"];function qn(i){for(let t of tM){let e=pt("s-"+t);e.classList.toggle("active",t===i),e.classList.remove("hidden")}vt.screen=i}var Ip=0;function xa(i){let t=pt("toast-global");t.textContent=i,t.classList.add("show"),clearTimeout(Ip),Ip=setTimeout(()=>t.classList.remove("show"),3200)}function Up(i,t){i.innerHTML="",Li.forEach(e=>{let n=document.createElement("div");n.className="card",n.dataset.id=e.id,n.innerHTML=`<img alt="${e.name}" src="${uf[e.id]||""}"><b style="color:${e.color}">${e.name}</b>`,n.onclick=()=>t.onPick(e.id),i.appendChild(n)})}function df(i,t,e){i.querySelectorAll(".card").forEach(n=>{let s=+n.dataset.id;n.classList.toggle("sel",s===t),n.classList.toggle("taken",e&&e.has(s)&&s!==t)})}function Fp(i,t){i.innerHTML="";let e=0;sa.forEach(n=>{if(n.hidden)return;e++;let s=document.createElement("div");s.className="card",s.dataset.id=n.id,s.style.background=`linear-gradient(160deg, ${n.colors[0]}cc, ${n.colors[1]}cc)`;let r=Dp(n.id);s.innerHTML=`<div><h4>${e}. ${n.name}</h4><div class="stars">${"\u2605".repeat(n.stars)}${"\u2606".repeat(5-n.stars)}</div></div><div class="blurb">${n.blurb}</div><div class="meta">${n.sub} &bull; no time limit${r?" &bull; best "+Yc(r):""}</div>`,s.onclick=()=>t.onPick(n.id),i.appendChild(s)})}function eM(){let i=new na({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setSize(256,320,!1),i.outputColorSpace=Ne,i.toneMapping=Cr,i.setClearColor(0,0);let t=new Ci;t.add(new _s("#ffffff","#b9a4ff",1.6));let e=new Ms("#ffffff",2.6);e.position.set(3,5,6),t.add(e);let n=new Ts(i);t.environment=n.fromScene(new ia,.04).texture,t.environmentIntensity=.7;let s=new en(30,256/320,.1,50);s.position.set(0,1.25,6.6),s.lookAt(0,.98,0);let r=[];for(let o=0;o<Li.length;o++){let a=new os(o);a.group.rotation.y=-.35,t.add(a.group),a.update(.016,{speed:0,grounded:!0,vy:0,stun:0,dive:0,celebrate:!1}),i.render(t,s),r.push(i.domElement.toDataURL("image/png")),t.remove(a.group),a.dispose()}return n.dispose(),i.dispose(),i.forceContextLoss(),r}function ma(i){vt.mode=i,pt("inp-name").value=vt.name,pt("profile-title").textContent="Choose your player",Up(pt("char-cards"),{onPick:t=>{vt.char=t,df(pt("char-cards"),t),tn.sel=t,Xt.select(),tn.burst(t)}}),df(pt("char-cards"),vt.char),tn.setTitle(vt.char),tn.mode="profile",tn.sel=vt.char,qn("profile")}function nM(){let i=pt("inp-name").value.trim().replace(/[<>&"']/g,"").slice(0,14);return i||(i=["Haris","Speedy","Bouncy","Zippy"][Math.floor(Math.random()*4)]+Math.floor(Math.random()*90+10)),vt.name=i,localStorage.setItem("ph_name",i),localStorage.setItem("ph_char",String(vt.char)),i}function iM(){Fp(pt("level-cards"),{onPick:i=>{Xt.go(),$r(i)}}),qn("levels")}function $r(i){zi(),X&&(X.destroy(),X=null),vt.level=i,X=new $c(i,[{id:1,name:vt.name,char:vt.char}],1,{multi:!1,t0:performance.now()+3600,seed:1+Math.floor(Math.random()*1e9)}),Fs(),qn("none"),pt("s-results").classList.add("hidden"),ya()}vt.showResults=function(i){let t=pt("res-list");t.innerHTML="",i.rows.forEach(s=>{let r=document.createElement("div");r.className="res-row"+(s.win?" win":"");let o=Li[s.char];r.innerHTML=`<div class="place">${s.place<=3?J_[s.place-1]:s.place}</div><div class="nm"><i style="background:${o.color}"></i>${s.name.replace(/[<>&]/g,"")}${s.self?" <small>(you)</small>":""}</div><div class="tm">${s.tm}</div>`,t.appendChild(r)}),pt("res-title").textContent=i.title,pt("res-sub").textContent=i.sub||"";let e=pt("b-res-retry"),n=pt("b-res-next");if(i.single)e.style.display="",e.textContent="RETRY",n.style.display="",n.textContent=vt.level<sa.length-1?"NEXT LEVEL":"LEVELS",n.disabled=!1,vt.resMode="single";else{e.style.display="none";let s=vt.room&&vt.room.hostId===vt.myId;n.style.display="",n.textContent=s?"BACK TO LOBBY":"WAITING FOR HOST...",n.disabled=!s,vt.resMode="multi"}va(),qn("results")};pt("b-res-menu").onclick=()=>{Xt.back(),gf()};pt("b-res-retry").onclick=()=>{Xt.click(),$r(vt.level)};pt("b-res-next").onclick=()=>{Xt.click(),vt.resMode==="single"?vt.level<sa.length-1?$r(vt.level+1):(X&&X.destroy(),X=null,iM()):vt.net.send({t:"again"})};function gf(){X&&(X.destroy(),X=null),vt.net&&vt.room&&vt.net.send({t:"leave"}),vt.room=null,va(),tn.setTitle(),qn("title")}async function sM(){if(vt.net&&vt.net.connected)return vt.net;let i=new qc;return i.on("joined",t=>{vt.myId=t.id}),i.on("lobby",oM),i.on("err",t=>{pt("mp-status").textContent=t.msg,t.retry&&vt.screen==="mp"?(Jc(),Zc=setTimeout(()=>{vt.screen==="mp"&&!vt.room&&pf("join")},2e3)):xa(t.msg)}),i.on("go",aM),i.on("s",t=>{if(X&&X.multi){let e=X.remotes.get(t.id);e&&e.push(t)}}),i.on("fin",t=>{X&&X.multi&&X.onFin(t)}),i.on("bat",t=>{X&&X.multi&&X.onBat(t)}),i.on("carpark",t=>{X&&X.multi&&X.onCars({[t.c]:t})}),i.on("cars",t=>{X&&X.multi?X.onCars(t.cars):vt.pendingCars=t.cars}),i.on("shove",t=>{X&&X.multi&&X.onShove(t)}),i.on("jack",t=>{X&&X.multi&&X.onJack(t)}),i.on("end",t=>{X&&X.multi&&X.onEnd(t)}),i.on("left",t=>{X&&X.multi&&X.removeRemote(t.id)}),i.on("close",()=>{xa("Disconnected from server"),X&&(X.destroy(),X=null),vt.room=null,va(),tn.setTitle(),qn("title")}),await i.connect(),vt.net=i,i}function rM(){pt("mp-status").textContent="",tn.setTitle(vt.char),qn("mp")}var Zc=null;function Jc(){Zc&&(clearTimeout(Zc),Zc=null)}async function pf(i){zi(),Jc();let t=pt("mp-status");t.textContent="Connecting...";try{let e=await sM();i==="create"?e.send({t:"create",name:vt.name,char:vt.char}):e.send({t:"join",name:vt.name,char:vt.char}),t.textContent=i==="create"?"":"Looking for a room..."}catch{t.textContent="Could not connect to the game server. Is it running?",xa("Could not connect to the game server")}}function oM(i){Jc();let t=!vt.room,e=vt.room;if(vt.room=i,X&&X.multi){for(let n of i.players)n.id!==vt.myId&&!X.remotes.has(n.id)&&(i.phase==="race"||i.phase==="countdown")&&X.addRemote(n);if(i.phase==="lobby"&&vt.screen!=="lobby")X.destroy(),X=null,va(),Pp(),qn("lobby"),Wr(99);else if(vt.screen==="results"){let n=i.hostId===vt.myId;vt.resMode==="multi"&&(pt("b-res-next").textContent=n?"BACK TO LOBBY":"WAITING FOR HOST...",pt("b-res-next").disabled=!n)}return}(t||vt.screen==="mp"||vt.screen==="profile"||vt.screen==="title")&&(i.phase==="lobby"||i.phase==="results")&&(qn("lobby"),Wr(99)),e&&i.players.length>e.players.length&&Xt.join(),Pp()}function Pp(){let i=vt.room;if(!i)return;let t=i.players.find(r=>r.id===vt.myId);t&&(vt.char=t.char),pt("lobby-code").textContent=i.code,pt("lobby-count").textContent=`${i.players.length}/${4}`;let e=pt("lobby-players");e.innerHTML="";for(let r=0;r<4;r++){let o=i.players[r],a=document.createElement("div");a.className="slot"+(o?"":" empty"),a.innerHTML=o?`<i style="background:${Li[o.char].color}"></i><span>${o.name.replace(/[<>&]/g,"")}</span>${o.id===i.hostId?"<span>\u{1F451}</span>":""}${o.id===vt.myId?'<span class="you">YOU</span>':""}`:'<i style="background:#888"></i><span>Waiting for player...</span>',e.appendChild(a)}let n=new Set(i.players.filter(r=>r.id!==vt.myId).map(r=>r.char));Up(pt("lobby-chars"),{small:!0,onPick:r=>{n.has(r)||(Xt.select(),vt.net.send({t:"char",char:r}))}}),df(pt("lobby-chars"),vt.char,n);let s=i.hostId===vt.myId;Fp(pt("lobby-levels"),{onPick:r=>{s&&(Xt.click(),vt.net.send({t:"level",level:r}))}}),pt("lobby-levels").querySelectorAll(".card").forEach(r=>{r.classList.toggle("sel",+r.dataset.id===i.level),s||(r.style.cursor="default")}),pt("lobby-level-note").textContent=s?"(you choose)":"(host chooses)",pt("b-start").disabled=!s,pt("b-start").firstElementChild.textContent=s?"START RACE":"WAITING FOR HOST",pt("lobby-hint").textContent=s?i.players.length<2?"Tell friends to tap MULTIPLAYER on the same link. You can also start alone.":"Everyone ready? Hit start!":"The host will start the race.",tn.setLobby(i.players)}function aM(i){zi(),X&&(X.destroy(),X=null);let t=vt.room;if(!t)return;let e=i.order.map(n=>t.players.find(s=>s.id===n)).filter(Boolean);vt.level=i.level,X=new $c(i.level,e,vt.myId,{multi:!0,t0:i.t0,seed:i.seed}),Fs(),qn("none"),ya()}function ya(){if(X&&!X.over&&document.pointerLockElement!==Bi)try{let i=Bi.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}function va(){document.pointerLockElement&&document.exitPointerLock()}document.addEventListener("pointerlockchange",()=>{let i=document.pointerLockElement===Bi;i?hf=!0:hf&&X&&!X.over&&!X.menuOpen&&!Pn&&yf(),i||(hf=!1),pt("click-hint").classList.toggle("show",!!X&&!X.over&&!X.menuOpen&&!i)});var hf=!1,Kc=!1;Bi.addEventListener("mousedown",i=>{Kc=!0,X&&!X.over&&(i.button===0&&X.hunt&&document.pointerLockElement===Bi&&!X.menuOpen?X.fireHeld=!0:i.button===0&&X.multi&&document.pointerLockElement===Bi&&!X.menuOpen?X.swing():ya())});window.addEventListener("mouseup",()=>{Kc=!1,X&&(X.fireHeld=!1)});window.addEventListener("mousemove",i=>{X&&!X.over&&(document.pointerLockElement===Bi||Kc)&&X.look(i.movementX,i.movementY)});pt("click-hint").addEventListener("click",ya);window.addEventListener("keydown",i=>{if(i.target&&i.target.tagName==="INPUT"){i.code==="Enter"&&(vt.screen==="profile"?pt("b-profile-next").click():vt.screen==="mp"&&pt("b-join").click());return}X&&!X.over&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(He.add(i.code),i.code==="Space"&&(En.jump=!0),(i.code==="ShiftLeft"||i.code==="ShiftRight"||i.code==="KeyF")&&(En.dive=!0),i.code==="KeyM"&&xf(),i.code==="KeyG"&&(En.grab=!0),X&&!X.over&&!X.menuOpen&&X.meta.city&&(i.code==="KeyZ"?X.toggleCrouch():i.code==="KeyX"?X.toggleSit():i.code==="KeyF"&&X.punch()),i.code==="KeyB"&&X&&!X.menuOpen&&X.swing(),i.code==="KeyC"&&X&&!X.over&&!i.repeat&&X.toggleCar(),i.code==="KeyH"&&X&&!X.menuOpen&&X.honkOn(),(i.code==="Escape"||i.code==="KeyP")&&X&&!X.over&&(X.menuOpen?jc():yf()))});window.addEventListener("keyup",i=>{He.delete(i.code),i.code==="KeyH"&&Xr()});window.addEventListener("blur",()=>{He.clear(),Kc=!1});window.addEventListener("resize",Fs);function xf(){vt.muted=!vt.muted,dp(vt.muted),pt("b-sound").textContent="SOUND: "+(vt.muted?"OFF":"ON"),Bp()}function zp(){pt("p-gfx").textContent="\u{1F5A5} GFX: "+(fe.low?"LOW":"AUTO")}function Bp(){pt("p-sound").textContent="\u{1F50A} SOUND: "+(vt.muted?"OFF":"ON")}function yf(){!X||X.over||X.menuOpen||(X.menuOpen=!0,X.multi||(X.paused=!0,X.pauseAt=performance.now()),va(),He.clear(),Be.x=Be.y=0,Be.jump=!1,pt("p-title").textContent=X.multi?"Menu":"Paused",pt("p-info").textContent=X.meta.name+(X.multi?"  \u2022  race goes on!":""),zp(),pt("p-retry").classList.toggle("hidden",X.multi),pt("p-full").classList.toggle("hidden",!(document.documentElement&&document.documentElement.requestFullscreen)),Bp(),pt("pause").classList.remove("hidden"),pt("click-hint").classList.remove("show"),Xt.click())}function jc(){!X||!X.menuOpen||(X.paused&&(X.t0+=performance.now()-X.pauseAt,X.paused=!1),X.menuOpen=!1,pt("pause").classList.add("hidden"),ya())}pt("b-menu").addEventListener("click",()=>X&&X.menuOpen?jc():yf());pt("p-resume").onclick=()=>{Xt.click(),jc()};pt("p-sound").onclick=()=>{zi(),xf(),Xt.click()};pt("p-gfx").onclick=()=>{fe.low=!fe.low;try{localStorage.setItem("ph_low",fe.low?"1":"0")}catch{}Xt.click(),j_(),zp()};pt("p-full").onclick=()=>{let i=document,t=i.documentElement;try{!i.fullscreenElement&&t.requestFullscreen?t.requestFullscreen({navigationUI:"hide"}):i.exitFullscreen&&i.fullscreenElement&&i.exitFullscreen()}catch{}};{let i=document,t=i.documentElement,e=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=()=>window.navigator.standalone===!0||typeof window.matchMedia=="function"&&window.matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches,s=()=>!!(i.fullscreenElement||i.webkitFullscreenElement),r=()=>{document.body.classList.toggle("is-full",s()),document.body.classList.toggle("standalone",n())};i.addEventListener("fullscreenchange",r),i.addEventListener("webkitfullscreenchange",r),r(),pt("b-full").addEventListener("click",()=>{try{if(s()){(i.exitFullscreen||i.webkitExitFullscreen).call(i);return}let o=t.requestFullscreen||t.webkitRequestFullscreen;if(o){let a=o.call(t,{navigationUI:"hide"}),l=()=>{try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}};a&&a.then?a.then(l).catch(()=>{}):l()}else if(e){let a=pt("ios-hint");a.classList.remove("hidden"),a.onclick=()=>a.classList.add("hidden"),setTimeout(()=>a.classList.add("hidden"),6e3)}}catch{}})}pt("p-retry").onclick=()=>{Xt.click();let i=vt.level;pt("pause").classList.add("hidden"),X&&(X.menuOpen=!1),$r(i)};pt("p-quit").onclick=()=>{Xt.back(),pt("pause").classList.add("hidden"),gf()};async function lM(){await cp(),tn=new ff;try{uf=eM()}catch{uf=["","","",""]}Fs(),tn.setTitle(),qn("title"),pt("b-single").onclick=()=>{zi(),Wr(99),Xt.click(),ma("single")},pt("b-multi").onclick=()=>{zi(),Wr(99),Xt.click(),ma("multi")},pt("b-help").onclick=()=>{zi(),Xt.click(),pt("s-help").classList.add("active")},pt("b-help-close").onclick=()=>{Xt.back(),pt("s-help").classList.remove("active")},pt("b-sound").onclick=()=>{zi(),xf(),Xt.click()},pt("b-profile-back").onclick=()=>{Xt.back(),tn.setTitle(),qn("title")},pt("b-profile-next").onclick=()=>{nM(),Xt.click(),vt.mode==="single"?(Xt.go(),$r(0)):rM()},pt("b-levels-back").onclick=()=>{Xt.back(),ma("single")},pt("b-mp-back").onclick=()=>{Xt.back(),Jc(),ma("multi")},pt("b-create").onclick=()=>{Xt.click(),pf("create")},pt("b-join").onclick=()=>{Xt.click(),pf("join")},pt("b-leave").onclick=()=>{Xt.back(),gf()},pt("b-start").onclick=()=>{vt.room&&vt.room.hostId===vt.myId&&(Xt.click(),vt.net.send({t:"start"}))},pt("b-copy").onclick=async()=>{let s=`${location.origin}${location.pathname}?room=${vt.room?vt.room.code:""}`;try{await navigator.clipboard.writeText(s),xa("Invite link copied!")}catch{prompt("Copy this invite link:",s)}},new URLSearchParams(location.search).get("room")&&(ma("multi"),xa("Pick your name & player, then CONTINUE and JOIN ROOM")),pt("loader").classList.add("done"),setTimeout(()=>pt("loader").remove(),600);let t=performance.now(),e=performance.now();try{let s=new Worker(URL.createObjectURL(new Blob(["setInterval(()=>postMessage(0),50)"],{type:"text/javascript"})));s.onmessage=()=>{if(!X||!X.multi||X.paused)return;let r=performance.now();if(r-e>200){let o=Math.min(.25,(r-e)/1e3);e=r,t=r,X.update(o)}else r-(X.lastSend||0)>100&&X.sendSnap()}}catch{}let n=s=>{requestAnimationFrame(n);let r=Math.min(.1,(s-t)/1e3);t=s,e=performance.now(),K_(r),X?(X.over&&X.menuOpen&&jc(),X.paused||X.update(r),X.render()):(tn.update(r),Ln.render(tn.scene,tn.camera))};requestAnimationFrame(n)}lM().catch(i=>{console.error(i);let t=document.querySelector("#loader p");t&&(t.textContent="Error: "+i.message)});window.__ph={app:vt,Remote:ga,startSingle:i=>$r(i),keys:He,press:En,touch:Be,get race(){return X},get stage(){return tn}};(function(){Pn&&document.body.classList.add("touch");let t=pt("touch"),e=pt("joy"),n=pt("joy-knob");if(!t||!e||!n)return;let s=56,r=null,o=null,a=0,l=0,c=0,h=0,u=(x,m)=>{for(let p of x)if(p.identifier===m)return p;return null};t.addEventListener("touchstart",x=>{x.preventDefault();for(let m of x.changedTouches)m.clientX<window.innerWidth*.5&&r===null?(r=m.identifier,a=m.clientX,l=m.clientY,e.style.left=a+"px",e.style.top=l+"px",e.classList.add("on"),n.style.transform="translate(-50%, -50%)"):o===null&&m.clientX>=window.innerWidth*.5&&(o=m.identifier,c=m.clientX,h=m.clientY)},{passive:!1}),t.addEventListener("touchmove",x=>{x.preventDefault();let m=r!==null?u(x.touches,r):null;if(m){let v=m.clientX-a,T=m.clientY-l,b=Math.hypot(v,T);b>s&&(v*=s/b,T*=s/b),n.style.transform=`translate(calc(-50% + ${v}px), calc(-50% + ${T}px))`;let _=v/s,M=T/s,S=Math.hypot(_,M),y=S<.14?0:(S-.14)/.86/S;Be.x=_*y,Be.y=-M*y}let p=o!==null?u(x.touches,o):null;p&&(X&&!X.over&&X.look((p.clientX-c)*1.7,(p.clientY-h)*1.7),c=p.clientX,h=p.clientY)},{passive:!1});let f=x=>{for(let m of x.changedTouches)m.identifier===r&&(r=null,Be.x=Be.y=0,e.classList.remove("on")),m.identifier===o&&(o=null)};t.addEventListener("touchend",f),t.addEventListener("touchcancel",f);let d=(x,m,p)=>{let v=pt(x);if(!v)return;v.addEventListener("touchstart",b=>{b.preventDefault(),b.stopPropagation(),m()},{passive:!1});let T=b=>{b.preventDefault(),b.stopPropagation(),p&&p()};v.addEventListener("touchend",T,{passive:!1}),v.addEventListener("touchcancel",T,{passive:!1})},g=(x,m,p)=>{d(x,m,p);let v=pt(x);v&&(v.addEventListener("mousedown",T=>{T.preventDefault(),T.stopPropagation(),m()}),p&&(v.addEventListener("mouseup",p),v.addEventListener("mouseleave",p)))};g("a-jump",()=>{X&&!X.over&&!X.menuOpen&&(En.jump=!0,Be.jump=!0)},()=>{Be.jump=!1}),g("a-crouch",()=>{X&&!X.over&&!X.menuOpen&&X.toggleCrouch()}),g("a-sit",()=>{X&&!X.over&&!X.menuOpen&&X.toggleSit()}),g("a-punch",()=>{X&&!X.over&&!X.menuOpen&&X.punch()}),d("t-jump",()=>{X&&!X.over&&(En.jump=!0,Be.jump=!0)},()=>{Be.jump=!1}),d("t-dive",()=>{X&&!X.over&&(En.dive=!0)}),d("t-bat",()=>{X&&!X.over&&!X.menuOpen&&X.swing()}),d("c-horn",()=>{X&&X.honkOn()},()=>Xr()),d("b-grab",()=>{Be.grab=!0,En.grab=!0},()=>{Be.grab=!1});{let x=pt("b-grab");x&&(x.addEventListener("mousedown",m=>{m.preventDefault(),Be.grab=!0,En.grab=!0}),window.addEventListener("mouseup",()=>{Be.grab=!1}))}d("b-car",()=>{X&&X.toggleCar()}),d("b-exit",()=>{X&&X.toggleCar()});for(let x of["b-car","b-exit"]){let m=pt(x);m&&m.addEventListener("click",()=>{X&&X.toggleCar(),m.blur()})}})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
