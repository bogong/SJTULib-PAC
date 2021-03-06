// Generated by zhangbaogang
// https://github.com/bogong/SJTULib-PAC/lib.pac

var domains = {	
	"cnki.net":1,
	"acm.org":1,
	"sciencesocieties.org":1,
	"acs.org":1,
	"wiley.com":1,
	"aiaa.org":1,
	"aip.org":1,
	"asm.org":1,
	"ams.org":1,
	"annualreviews.org":1,
	"aps.org":1,
	"ac.cn":1,
	"ascelibrary.org":1,
	"asminternational.org":1,
	"asme.org":1,
	"aspbjournals.org":1,
	"astm.org":1,
	"begellhouse.com":1,
	"eurekaselect.com":1,
	"biomedcentral.com":1,
	"bioone.org":1,
	"webofknowledge.com":1,
	"brillonline.com":1,
	"bvdep.com":1,
	"bvdinfo.com":1,
	"ovid.com":1,
	"calis.edu.cn":1,
	"cambridge.org":1,
	"cro3.org":1,
	"thecochranelibrary.com":1,
	"crcnetbase.com":1,
	"degruyter.com":1,
	"doaj.org":1,
	"osti.gov":1,
	"proquest.com":1,
	"ebscohost.com":1,
	"engineeringvillage.com":1,
	"electrochem.org":1,
	"sciencedirect.com":1,
	"thomsonreuters.com":1,
	"emeraldinsight.com":1,
	"co.uk":1,
	"galegroup.com":1,
	"globalbooksinprint.com":1,
	"heinonline.org":1,
	"sagepub.com":1,
	"icevirtuallibrary.com":1,
	"ieee.org":1,
	"incopat.com":1,
	"ingentaselect.com":1,
	"ingenuity.com":1,
	"intechopen.com":1,
	"intlpress.com":1,
	"securities.com":1,
	"JOVE.com":1,
	"jstor.org":1,
	"bjmu.edu.cn":1,
	"knovel.com":1,
	"lexis.com":1,
	"msp.org":1,
	"mdpi.com":1,
	"myilibrary.com":1,
	"nexis.com":1,
	"inoteexpress.com":1,
	"nstl.gov.cn":1,
	"ntis.gov":1,
	"oclc.org":1,
	"onepetro.org":1,
	"opticsinfobase.org":1,
	"oxfordscholarship.com":1,
	"oxfordjournals.org":1,
	"palgraveconnect.com":1,
	"pnas.org":1,
	"projecteuclid.org":1,
	"jhu.edu":1,
	"reaxys.com":1,
	"researchgate.net":1,
	"ComputingReviews.com":1,
	"rsc.org":1,
	"chemspider.com":1,
	"sae.org":1,
	"sciencemag.org":1,
	"cas.org":1,
	"scitation.org":1,
	"scopus.com":1,
	"tsinghua.edu.cn":1,
	"books24x7.com":1,
	"spiedl.org":1,
	"springer.com":1,
	"springerprotocols.com":1,
	"tandfonline.com":1,
	"tandfebooks.com":1,
	"ulrichsweb.com":1,
	"universitypressscholarship.com":1,
	"westlaw.com":1,
	"currentprotocols.com":1,
	"worldbank.org":1,
	"worldscinet.com":1,
	"worldscientific.com":1,
	"digitalmechanical.com.cn":1,
	"epsnet.com.cn":1,
	"unipus.cn":1,
	"blyun.com":1,
	"pkulaw.cn":1,
	"lawyee.net":1,
	"bookan.com.cn":1,
	"cxstar.com":1,
	"sjtu.edu.cn":1,
	"chaoxing.com":1,
	"sslibrary.com":1,
	"dachengdata.com":1,
	"xhestore.com":1,
	"kaixidb.com":1,
	"wanfangdata.com.cn":1,
	"tokyotrial.cn":1,
	"duxiu.com":1,
	"fae.cn":1,
	"apabi.com":1,
	"epub.cn":1,
	"nssd.org":1,
	"gtarsc.com":1,
	"drcnet.com.cn":1,
	"hwshu.com":1,
	"airitilibrary.cn":1,
	"shangyekj.com":1,
	"cabplink.com":1,
	"sciencepress.cn":1,
	"qikan.com":1,
	"nlcpress.com":1,
	"stitye.com":1,
	"lieguozhi.com":1,
	"pishu.com.cn":1,
	"ydylcn.com":1,
	"jianpincn.com":1,
	"591ebooks.com":1,
	"dhcdb.com":1,
	"artlib.cn":1,
	"shutuedu.com":1,
	"chineseall.cn":1,
	"datapark.cn":1,
	"twscholar.com":1,
	"tiantianbook.cn":1,
	"51ifind.com":1,
	"westlawchina.com":1,
	"wsbgt.com":1,
	"nmrdata.com":1,
	"koolearn.com":1,
	"yaxue.net":1,
	"corpuscloud.cn":1,
	"hyread.com.cn":1,
	"libvideo.com":1,
	"datahistory.cn":1,
	"hunteq.com":1,
	"cashl.edu.cn":1,
	"data.cn":1,
	"paper.edu.cn":1,
	"acmr.cn":1,
	"meeting.edu.cn":1,
	"image.cn":1,
	"law.cn":1,
	"bjinfobank.com":1,
	"gujilianhe.com":1,
	"cqvip.com":1,
	"nju.edu.cn":1,
	"zju.edu.cn":1,
	"ems-ph.org":1,
	"global-sci.org":1,
	"fiz-karlsruhe.de":1,
	"thieme-connect.com":1,
	"51cto.com":1,
	"cnbksy.net":1,
	"cnpereading.com ":1
};


var proxy =  "PROXY inproxy.sjtu.edu.cn:8000";
var direct = 'DIRECT;';
var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return proxy;
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
