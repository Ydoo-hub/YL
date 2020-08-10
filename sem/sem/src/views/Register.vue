<template>
    <div id="bodyone">
        <div class="oneleft">
            <div class="onetext">
                <div class="lineone"><p>AdsPower</p></div>
                <div class="linetwo"><p>为每个账号提供独立的浏览器</p></div>
                <div class="linethree"><p>您的多账号管理专家，单个店铺独立环境每月低于4块钱</p></div>
            </div>
            <div class="onebtn">
                <a :href="window_url" class='pc'>Windows版本免费下载</a>
                <a :href="mac_url" class="pc">MAC版本免费下载</a>
                <a @click='toDownload()' class="phone">Windows版本免费下载</a>
                <a @click='toDownload()' class="phone">MAC版本免费下载</a>
            </div>
            <img src="@/assets/color_03.png" style="position:absolute" width="10%">
            <img src="@/assets/banner_01.png" class="banner1">
        </div>
        <div class="oneright">
            <img src='@/assets/color_02.png' style="position:absolute!important">
            <div  class='atitle'>免费注册</div>
            <div v-if="emailIsOk" class="div1error">
                <label><input placeholder="邮箱" autocomplete='off' @blur="emailBlur(regemail,'email')"  v-model="email"></label>
                <br>
                <span class="span1" style="font-size:12px">请输入正确的邮箱地址</span>
            </div>
            <div v-if="!emailIsOk" class="div1">
                <label><input placeholder="邮箱" autocomplete='off' @blur="emailBlur(regemail,'email')"  v-model="email"></label>
            </div>
            <div v-if="passwordIsOk" class="div2error">
                <label><input placeholder="密码" class='input1' autocomplete='off' @blur="passwordBlur(regpassword,'password')" type="password" v-model="password"></label>
                <br>
                <span class="span2" style="font-size:12px">必须包含数字和大小写字母，8-20位</span>
            </div>
            <div v-if="!passwordIsOk" class="div2">
                <label><input placeholder="密码" autocomplete='off' class='input1' @blur="passwordBlur(regpassword,'password')" type="password" v-model="password"></label>
            </div>
            <div class="div3">
                <label><input placeholder="邀请码（选填）" autocomplete='off' class="input2" style="padding-right:0px" v-model="code" id='inputid'></label>
            </div>
            <div v-if="isKnow" class='isok'>
                <label><Checkbox v-model="gender"><span class='checktext'>我已阅读并同意&nbsp;</span></Checkbox></label><a class='checktext' style="text-decoration: underline" @click="toProtocol()">用户协议</a>
            </div>
            <div v-if="!isKnow" class='isok'>
                <label><Checkbox v-model="gender"><span class='checktext'>我已阅读并同意&nbsp;</span></Checkbox></label><a class='checktext' style="text-decoration: underline" @click="toProtocol()">用户协议</a>
                <br>
                <span class="span3" style="font-size: 12px">请阅读并同意用户协议</span>
            </div>
            <!-- <button class="register" href="#" @click="registration()"  >注册</button> -->
            <Button class="register" @click="registration()" :loading="regLoad" >注册</Button>

            <span class="color">已有帐号？</span>
            <a @click="toLogin()" class="color">立即登录</a>
        </div>
        <Modal
            v-model="show"
            title="用户协议"
            footer-hide
            :width="800"
            @on-cancel="cancel"
        >
        <div class="protocol-box">
            <div class="title">Adspower 相关政策</div>
            <div class="serve">服务条款</div>
            <div class="date">2020年3月9日生效</div>
            <p>
                请仔细阅读本协议的条款，当您选择“我接受”，“我同意”，“确定”，“继续”，“是”，或者以任何方式安装或使用本软件，即表示您已完全理解和接受本协议的条款。如果您不同意这些条款和条件，请不要单击“我接受”、“我同意”、“确定”、“继续”、“是”等或以任何方式安装或使用本软件。
            </p>
            <p>
                您在法律上同意这些条款具有约束力的规则（“条款”）。您还同意我们的隐私政策，Cookie政策，付款验证政策，并同意您有责任遵守任何适用的当地法律，适用于您使用Adspower的隐私政策，支付政策以及其他政策通过引用成为本协议的一部分。我们可能会不时更改这些条款。如果这样做，我们会通过在网站上通知您或向您发送电子邮件来通知您任何重大更改。这些条款的新版本永远不会追溯适用，我们会告诉您新版本条款确切的生效日期。如果更改后仍继续使用Adspower，则表示您接受新条款。我们保留本协议未明确授予的任何和所有权利，包括但不限于系统的任何和所有权利。
            </p>
            <p>违反以下任何条款将导致您的帐户被终止。您同意自行承担使用软件的风险。</p>
            <div class="title-sub">账户条款</div>
            <p>
                您必须年满18岁才能注册Adspower账户，或足以在您居住的地方签订有约束力的合同。如果您未满18岁，则未经父母或监护人的同意（代表您同意您将遵守服务条款），您不能使用Adspower产品。
            </p>
            <p>
                您需要注册来使用Adspower，选择帐户名称并设置密码。您的信息将根据可适用的数据保护法以及我们的隐私政策进行收集和披露。所有用户在注册我们的网站或服务时都必须提供真实和准确的信息，请勿使用无效或他人的电子邮件，因为这会降低您的帐户安全性。
            </p>
            <p>
                我们保留验证所有用户凭据并拒绝任何用户的权利。您应对帐户中的所有活动负责，并对密码保密。您同意将任何未经授权使用您的帐户或任何其他违反安全性的行为立即通知我们。对于他人在您知情或不知情的情况下使用您的密码或帐户给您造成的任何损失，Adspower不承担任何责任。如果发现有人未经您的许可使用了您的帐户，则应将其报告给service@adspower.io。
            </p>
            <p>
                您不得将软件用于任何非法或未经授权的目的。您在使用软件时，不得违反您所在司法管辖区的任何法律（包括但不限于版权法）。
            </p>
            <div class="title-sub">禁止行为</div>
            <p>
                您应当遵守任何可适用的法律法规的规定，不得利用Adspower的服务及账户实施包括但不限于以下行为，也不得为以下行为提供便利：
            </p>
            <p>
                （1）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一、损害国家荣誉和利益的；
            </p>
            <p>
                （2）宣扬邪教和封建迷信的；
            </p>
            <p>
                （3）散布谣言，扰乱社会秩序，破坏社会稳定的；
            </p>
            <p>
                （4）散布淫秽、色情、赌博、暴力、凶杀、恐怖、骚扰、低俗或者教唆犯罪的；
            </p>
            <p>
                （5）侮辱或者诽谤他人，侵害他人合法权益的；
            </p>
            <p>
                （6）侵害他人知识产权、商业秘密等合法权利的；
            </p>
            <p>
                （7）虚构事实、隐瞒真相以误导、欺骗他人的；
            </p>
            <p>
                （8）实施博彩、赌博游戏等非法互联网活动的；
            </p>
            <p>
                （9）其他违反公序良俗或法律法规禁止的行为。
            </p>
            <p>
                您承诺，您不会使用任何类型的软件或设备（无论是手动还是自动的）来“爬行”或“蜘蛛化”Adspower的任何部分，也不会对Adspower的任何内容进行拆解或反向工程。
            </p>
            <div class="title-sub">费用条款</div>
            <p>
                请访问我们的付款政策页面，以了解我们的所有服务的价格和最新优惠。Adspower的某些功能是免费的，某些功能只能付费使用。如果您同意我们的付款政策并订购相关功能，则您承诺支付相关功能的费用。所有服务的价格（包括但不限于软件的每月订购计划费用）可能会发生变化。价格更改将发布到https://app.adspower.io/fbcc/price或软件本身。
            </p>
            <p>
                我们保留随时或不定期更改或终止本服务（或其任何部分）的权利，恕不另行通知。Adspower对您或任何第三方对本服务的任何修改、价格变动、暂停或终止不承担任何责任。
            </p>
            <div class="title-sub">退款政策</div>
            <p>
                Adspower提供预先充值订阅套餐，同时我们无法为任何付费服务提供退款。请注意，所有付款均为最终付款。部分月份的服务，升级/降级退款或未使用开设的帐户的月份的退款将不予退款或抵免。为了平等地对待每个人，将不会有例外。
            </p>
            <div class="title-sub">条款和终止</div>
            <p>
                本协议将在您接受本使用条款后开始，并且有效期为无限期，直到任何一方将其终止。Adspower有权随时出于任何原因暂停或终止您的帐户，服务的这种终止将导致您的帐户被停用或删除或您对帐户的访问，以及帐户中所有内容的没收和放弃。Adspower保留随时出于任何原因拒绝向任何人提供服务的权利。
            </p>
            <p>
                您可以随时通过官网客服或通过service@adspower.io与我们联系，请注意，终止帐户后，可能会立即禁止访问我们网站或服务的某些部分。如果我们确定以下情况，我们可以与您终止本协议：
            </p>
            <p>
                1.您在使用我们的网站或服务时违反了任何适用法律；
            </p>
            <p>
                2.您违反本协议或网站或服务允许的条款；
            </p>
            <p>
                3.我们认为您的任何行为在法律上损害我们的商业利益；
            </p>
            <p>
                如果终止我们将努力为您提供及时的解释，但是这个不是必需的。
            </p>
            <div class="title-sub">知识产权</div>
            <p>
                Aspower网站或产品中的所有的内容、设计、文本、图表、图像、标识、按钮、图标、界面、音频及视频、以及以上内容的所有排列组合均为Aspower或其相应内容提供商的专属财产，受可适用的著作权法保护。网站所使用的所有软件为Aspower或其相应的软件供应商的财产，受受可适用的著作权法保护和其他相关法律和条约保护。网站用户不得发送/上传任何侵犯他人著作权或其他知识产权的内容至本网站。
            </p>
            <p>
                Aspower网站或产品使用的所有商标、服务标识和商业名称（统称“标识”）均为Aspower独有。该等标识不得用于任何非Aspower的产品或服务，或任何导致消费者混淆、或以任何方式诋毁或败坏Aspower名声的其他产品或服务上。
            </p>
            <div class="title-sub">保密和反馈</div>
            <p>
                我们重视您的隐私，我们的隐私权政策已纳入本协议，请查看我们的隐私政策，以便您了解我们的隐私惯例。我们收集的所有信息均受我们的隐私政策的约束，通过使用网站或服务，您同意我们根据隐私政策对您的信息采取的所有措施。
            </p>
            <p>
                您同意对机密信息保密，不得将其用于履行本协议，也不得向第三方披露您知道的Adspower机密信息。在您向我们提供有关任何Adspower软件或服务的任何建议，信息，想法或反馈的范围内，包括但不限于您在使用软件或相关服务时发现的任何错误的报告文档（“反馈”），此类反馈将归公司所有。您同意在全球范围内将“反馈”中的所有权利，所有权和利益以及相关的知识产权转让给Adspower，并同意协助我们完善和执行这些权利。
            </p>

            <div class="title-sub">免责声明</div>
            <p class="font-bold">
                我们建议您经常备份数据。您应始终有责任减轻损失。此软件不是容错软件，也不是设计用于或旨在用于任何需要保证安全性能或操作的危险环境中。Adspower不保证包含服务的网站或产品将是无错误的或无中断的，也不承诺该网站或服务或服务器不受任何有害组件的影响。Adspower不对提供的服务是准确，完整或有用的作任何陈述或保证。Adspower并不保证您在任何特定的司法管辖区均合法使用该网站或服务，并且我们特别声明不作任何此类保证。
            </p>
            <p class="font-bold">
                我们不会介入用户之间或用户与任何第三方之间有关使用服务的纠纷。 当您使用服务时，您会从与此类纠纷和服务有关的任何索赔和要求（已知或未知，可疑或意外，公开或未公开）中释放Adspower。您自行承担因使用Adspower网站或服务而招致的任何结果， 您对因您行为而对任何一方造成的任何损害或损失负全责。
            </p>
            <p class="font-bold">
                任何使用、测试或评估Adspower的人都应对Adspower的质量和性能承担全部风险。我们对任何形式的损害概不负责，包括但不限于因使用，执行或交付Adspower而造成的直接或间接损害，即使已被告知Adspower存在或可能造成这种损害。
            </p>
            <p class="font-bold">
                某些国家（地区）不允许限制或排除偶发或继发性损害的责任，因此上述限制或排除可能对您不适用。在任何情况下，我们的责任均不会超过您为Adspower支付的购买价格。无论您是否接受使用、评估或测试Adspower，上述免责声明和限制均适用。
            </p>

            <div class="title title-privacy">隐私政策</div>
            <p>
                使用本网站，即表示您接受本政策和我们的服务条款。如果您不同意，请不要使用我们的网站。在本政策发生变更后，您继续使用本网站将被视为您接受这些变更。本隐私政策适用于本网站以及Adspower提供的所有产品和服务。如果您对此隐私政策，本网站的惯例或与本网站的交易有任何疑问，请与我们联系。Adspower的隐私政策遵循以下原则：
            </p>
            <p>
                1.除非我们确实需要，否则我们不会要求您提供个人信息。
            </p>
            <p>
                2.除了遵守法律、开发我们的产品或保护我们的权利外，我们不会与任何人共享您的个人信息。
            </p>
            <p>
                3.除非为一项服务的持续运行所必需，否则我们不会在服务器上存储个人信息。
            </p>
            <div class="title-sub">个人信息收集</div>
            <p>
                您在我们的产品中使用的所有帐户信息都保存在本地计算机上，我们绝不会以任何方式或任何形式对其进行访问，确保这些账户信息的安全是您的责任。
            </p>
            <div class="title-sub">自愿收集的个人信息</div>
            <p>
                当您访问我们的网站或使用我们的服务时，我们网站或服务的某些部分可能会收集有关您的个人信息。在您使用网站或服务期间，我们可能会收集您的姓名，电子邮件，地址，电话号码，用户名，密码，标识符，组织信息，IP地址，位置，信息，ISP信息和其他标识详细信息。您提交的任何个人信息均应根据本隐私政策使用和披露。我们也可能会收集您提供给我们的付款信息，以供您使用我们的网站或服务。请注意，此付款信息应由第三方付款处理者存储。仅当用户自愿向我们提交个人身份信息时，我们才会收集这些信息。用户始终可以拒绝提供个人身份信息，除非它可能阻止他们从事某些与网站或服务相关的活动。
            </p>
            <div class="title-sub">自动收集的个人信息</div>
            <p>
                每当您使用我们的网站或服务时，我们可能会收集您的非识别信息，例如您与网站的交互，查询信息，价格数据，研究历史，引荐URL，浏览器，应用程序交互，移动提供商信息，操作系统等。
            </p>
            <div class="title-sub">网站cookie收集</div>
            <p>
                我们的网站使用cookie来了解和保存您对以后的访问的偏好，并汇总有关网站流量和网站互动的汇总数据，以便将来我们可以提供更好的网站体验和工具。用户的Web浏览器将cookie放在其硬盘驱动器上，以进行记录保存，有时还会跟踪有关它们的信息。用户可以选择将其Web浏览器设置为拒绝cookie，或在发送cookie时提醒您。如果这样做，请注意网站的某些部分可能无法正常运行。
            </p>
            <div class="title-sub">收集信息的使用</div>
            <p>
            </p>
            <p>
                1.登录帐户时识别您的身份并管理您在我们系统的帐户；
            </p>
            <p>
                2.诊断或修复您使用中的技术问题以及开发和测试新产品和功能；
            </p>
            <p>
                3.我们会根据您收到的信息和反馈不断努力改善我们的网站产品；
            </p>
            <p>
                4.您的信息可帮助我们更有效地响应您的客户服务要求和支持需求；
            </p>
            <p>
                5.您的电子邮件地址仅用于答复您的查询和其他请求或问题以及发送营销通讯；
            </p>
            <p>
                6.我们非常重视保护您的数据并保护您的隐私。未经您的允许，我们绝不会将任何信息发布到其他第三方帐户，我们也不会出售您的数据。
            </p>
            <div class="title-sub">个人信息披露</div>
            <p>
                基于本隐私政策的目的，我们的关联方可能会获取用户的个人信息。我们会根据法律的要求为了配合法院传票、其他类似的法律程序或政府要求而披露您的个人信息；或者，当我们认为披露相关个人信息是法律所要求的或为保护我们的权利、财产，他人的权利、财产以及安全所必要的，我们可能会披露您的个人信息，包括向顾问、执法部门、司法监督部门的披露。我们也可能会将您的个人信息传输给收购我们部分或全部的财产、股权或以合并、收购、重组或其他形式取得我们部分或全部业务的第三方。
            </p>
            <div class="title-sub">未成年人保护</div>
            <p>
                本网站不会故意收集未成年人的个人信息。您所提供的任何未成年人的个人信息须事先征得未成年人的父母或者监护人的同意。对未成年人的定义由适用本隐私政策的法律作出规定。
            </p>
            <div class="title-sub">隐私政策的变更</div>
            <p>
                Adspower有权随时更新此隐私政策。完成后我们将在页面底部修改更新的日期。我们鼓励用户经常检查此页面是否有任何更改，以便随时了解我们如何帮助保护我们收集的个人信息。您承认并同意，您有责任定期查看本隐私政策并了解更改。
            </p>
            <div class="date">2020年3月9日更新</div>
        </div>
    </Modal>
    </div>
</template>

<script>
import md5 from 'js-md5';
export default {
  name: 'bodyone',
  components: {
    //   Protocol
  },
  data() {
         return {
             code:'',
             gender: false,
             email: '',
             password: '',
             regemail: '',
             regpassword:'',
             rule: false,
             emailIsOk: false,
             passwordIsOk: false,
             isKnow: true,
             window_url: 'www.baidu.com',
             mac_url: 'www.baidu.com',
             regLoad: false,
             hosturl: '',
             toRegSuccess: '',
             showProtocol: false,
             show: false,
             asd: false

         }
  },
  methods: {
    toDownload() {
        this.$Message.info('请前往pc端下载');
    },
    getQueryString(name, url) {
        const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
        let newUrl = '';
        if (url) {
            const index = url.indexOf('?');
            newUrl = url.substr(index);
        } else {
            newUrl = window.location.search;
        }
        const r = newUrl.substr(1).match(reg);
        if (r != null) { return unescape(r[2]); } return null;
    },
    emailBlur(re,name){
        var reg = new RegExp(re)
        if(!reg.test(this.email)){
            this.emailIsOk = true;
            return;
        }
        this.emailIsOk = false;
        return;
    },
    passwordBlur(re,name){
        if(!re.test(this.password)){    
            this.passwordIsOk = true;
            return;
        }
        this.passwordIsOk = false;
        return;
    },
    registration(){
        var reg = new RegExp(this.regemail)
        var reg2 = new RegExp(this.regpassword)
        if(!reg.test(this.email)){
            this.emailIsOk = true;
            if(!reg2.test(this.password)){    
                this.passwordIsOk = true;
                    if(this.gender === false){
                        this.isKnow = false;
                        return;
                    }
                    this.isKnow = true;
                return;
            }
            return;
        }
        if(reg.test(this.email)){
            this.emailIsOk = false;
            if(!reg2.test(this.password)){    
                this.passwordIsOk = true;
                console.log(this.passwordIsOk);
                    if(this.gender === false){
                        this.isKnow = false;
                        return;
                    }
                    this.isKnow = true;
                return;
            } else {
                this.passwordIsOk = false;
                    if(this.gender === false){
                        this.isKnow = false;
                        return;
                    }
                this.isKnow = true;
            }
        }
        if(!this.emailIsOk && !this.passwordIsOk && this.isKnow){
            const that = this;
            const formdata=new FormData();
            that.regLoad = true;
            formdata.append("email",String(this.email));
            formdata.append("password",String(md5(this.password)));
            formdata.append("language",'zh-CN');
            formdata.append("invite_code",String(document.getElementById('inputid').value));
            formdata.append("source",String(window.localStorage.getItem('source')));
        }
    },
    toLogin(){
        const code = localStorage.getItem('code');
        const source = localStorage.getItem('source')
        if(code&&source){
            window.location.href = 'https://'+this.toRegSuccess+'/login/?code='+ code +'&source='+source;
        }else if(code && !source){
            window.location.href = 'https://'+this.toRegSuccess+'/login/?code='+code;
        }else if(!code && source){
            window.location.href = 'https://'+this.toRegSuccess+'/login/?source='+source;
        }else{
            window.location.href = 'https://'+this.toRegSuccess+'/login';
        }
    },
    toProtocol(){
        this.show = true
    },
    cancel (){
        this.show = false
    }
  },

  mounted() {
    const that = this;
    const sourcecode=new FormData();
    let code = this.getQueryString('code');
    let source = this.getQueryString('source');

    // if(window.location.hostname === 'app-testing.xmp.one'){
    //     this.toRegSuccess = 'app-testing.xmp.one'
    //  }
     

    // alert(code+'----'+source)
    if (code && source) {
        window.localStorage.setItem('code',code)
        window.localStorage.setItem('source',source)
        that.code = code
    }
    if( !code && source){
        window.localStorage.setItem('source',source)
        window.localStorage.setItem('code', '')
    }
    if( code && !source){
        window.localStorage.setItem('code',code)
        window.localStorage.setItem('source', '')

        that.code = code
    }
    sourcecode.append("source",String(source));
    sourcecode.append("callback",'');

  },
}
</script>
<style lang="less">
.ivu-checkbox-inner{
    background-color: #2846d2!important;
}
.checktext{
    position: relative;
    left: -17px;
}

.font-bold {
    font-weight: bold;
}
.protocol-box {
    padding: 20px 30px;
    .title {
        font-weight: bold;
        text-align: center;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .serve {
        font-size: 15px;
        text-align: center;
        font-size: 24px;
    }
    .date {
        font-style: italic;
        text-decoration: underline;
        margin: 30px 0;
    }
    .title-sub {
        font-size: 15px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    p {
        text-indent: 24px;
        line-height: 2.5;
    }
    .title-privacy {
        margin: 30px 0;
    }
}
</style>
