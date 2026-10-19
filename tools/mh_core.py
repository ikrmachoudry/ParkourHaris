# MakeHuman (CC0 data) base mesh loader + macro-target applier. Pure numpy.
import os, json, numpy as np
D = os.environ.get('MH_DATA', '/home/claude/makehumancommunity/makehuman/makehuman/data')

def load_obj():
    v=[]; f=[]; grp=[]; cur=None; names=[]
    for ln in open(f'{D}/3dobjs/base.obj'):
        if ln.startswith('v '): v.append([float(x) for x in ln.split()[1:4]])
        elif ln.startswith('g '):
            cur=ln.split()[1]; names.append(cur)
        elif ln.startswith('f '):
            idx=[int(p.split('/')[0])-1 for p in ln.split()[1:]]
            f.append(idx); grp.append(cur)
    return np.array(v), f, grp

def tgt(name):
    p=f'{D}/targets/{name}.target'
    out=[]
    for ln in open(p):
        if ln.startswith('#') or not ln.strip(): continue
        a=ln.split()
        out.append((int(a[0]),float(a[1]),float(a[2]),float(a[3])))
    return out

def apply(v, name, w):
    if w<=1e-5: return
    for i,x,y,z in tgt(name): v[i]+=np.array([x,y,z])*w

def macro(v, gender=1.0, age=0.5, muscle=0.5, weight=0.5, african=1/3, asian=1/3, caucasian=1/3, height=0.5, extra=()):
    v=v.copy()
    if age<0.5:
        old=0; baby=max(0,1-age*5.333); young=max(0,(age-0.1875)*3.2); child=max(0,min(1,5.333*age)-young)
    else:
        child=baby=0; old=max(0,age*2-1); young=1-old
    def tri(x): mx=max(0,x*2-1); mn=max(0,1-x*2); return mn,1-(mx+mn),mx
    mnM,avM,mxM=tri(muscle); mnW,avW,mxW=tri(weight)
    G={'male':gender,'female':1-gender}
    A={'baby':baby,'child':child,'young':young,'old':old}
    M={'minmuscle':mnM,'averagemuscle':avM,'maxmuscle':mxM}
    W={'minweight':mnW,'averageweight':avW,'maxweight':mxW}
    for g,gv in G.items():
        for a,av in A.items():
            for m,mv in M.items():
                for w_,wv in W.items():
                    apply(v,f'macrodetails/universal-{g}-{a}-{m}-{w_}',gv*av*mv*wv)
    R={'african':african,'asian':asian,'caucasian':caucasian}
    for r,rv in R.items():
        for g,gv in G.items():
            for a,av in A.items():
                apply(v,f'macrodetails/{r}-{g}-{a}',rv*gv*av)
    return v
