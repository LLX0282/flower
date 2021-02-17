const crypto = require('crypto')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const QcloudSms = require("qcloudsms_js");
const {
    resolve
} = require('path');
const {
    rejects
} = require('assert');

function md5(s) {
    //注意参数需要为string类型，否则会报错
    return crypto.createHash('md5').update(String(s)).digest('hex');
}
let upload = multer({
    storage: multer.diskStorage({
        // 设置⽂件存储位置
        destination: function (req, file, cb) {
            let date = new Date()
            let year = date.getFullYear()
            let month = (date.getMonth() + 1).toString().padStart(2, '0')
            let day = date.getDate()
            let dir = path.join(__dirname, '../public/uploads/' + year + month +
                day)
            // 判断⽬录是否存在，没有则创建
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                })
            }
            // dir就是上传⽂件存放的⽬录
            cb(null, dir)
        },
        // 设置⽂件名称
        filename: function (req, file, cb) {
            let fileName = Date.now() + path.extname(file.originalname)
            // fileName就是上传⽂件的⽂件名
            cb(null, fileName)
        }
    })
})
//短信配置
function SmsConfing(phoneNumber,num) {
    // 短信应用 SDK AppID
    var appid = 1400484242; // SDK AppID 以1400开头
    // 短信应用 SDK AppKey
    var appkey = "ab17a704058bccce033094aa0179c1eb";
    // 短信模板 ID，需要在短信控制台中申请
    var templateId = 869878; // NOTE: 这里的模板ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
    // 签名
    var smsSign = "花卉分享平台"; // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请
    // 实例化 QcloudSms
    var qcloudsms = QcloudSms(appid, appkey);
    var ssender = qcloudsms.SmsSingleSender();
    var params=[num,'5']
    return new Promise((resolve, reject) => {
        ssender.sendWithParam("86", phoneNumber, templateId,
            params, smsSign, "", "", callback);
        function callback(err, res, resData) {
            if (err) {
                console.log("err: ", err);
                reject();//发送失败
            } else {
                console.log("request data: ", res.req);
                console.log("response data: ", resData);
                resolve(true);
            }
        }
    })

}

module.exports = {
    md5,
    upload,
    SmsConfing
}