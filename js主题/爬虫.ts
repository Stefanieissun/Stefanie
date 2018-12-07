import {default as fetch}  from 'node-fetch'
import * as cheerio from "cheerio";

fetch('https://www.zhihu.com/question/287833877',{
    headers:{
        cookie:'_zap=bf1285b7-1f79-41d6-80f9-5b5ad43236a7; d_c0="AMCnE-hoag6PTgGLF1fpYAFCkr3hbxIceKk=|1540439208"; z_c0=Mi4xOXBpM0FnQUFBQUFBd0tjVDZHaHFEaGNBQUFCaEFsVk41OG0tWEFEQ0d3TmlvbWtuSm1mam5KaFpZX01yNnNnYXFB|1540455399|46ff81a29e9304c433c3c82d3f6ff16dbd4ba13d; tst=r; _xsrf=9Y2fVdzh7HQBgkJCSmCFFgYRdko0PYJX; __gads=ID=a62202c4ab7e7404:T=1541490175:S=ALNI_MaPUgDoZpZ3mu78Qvq2AT3U7znEgQ; q_c1=4ec8992867de41e98b8ce2219a134c0b|1543192849000|1540455400000; __utma=51854390.1696359441.1543561514.1543561514.1543561514.1; __utmz=51854390.1543561514.1.1.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmv=51854390.100--|2=registration_date=20160305=1^3=entry_date=20160305=1; tgw_l7_route=7139e401481ef2f46ce98b22af4f4bed'
    }
}).then(a=>a.text()).then(b=>{
    console.log(b)
    // let $=cheerio.load(b)
    // console.log($('.List-item').children())
})