export const name = "自定义表格";
export const desc = "通过HTML元素实现自定义表格";
export const author = "54xavier";
export const link = "https://ccsimple.gitee.io/vue-plugin-hiprint/";
// url 或者 base64 或者 require('../../../assets/logo.png')
export const preview = "/static/template8.png";
export const printData = {
  department: "技术部",
  position: "前端开发工程师",
  form_date: "2024-08-13",
  pInfo: {
    name: "张伟",
    gender: "男",
    place_of_birth: "江苏省南京市",
    ethnicity: "汉族",
    education_level: "本科",
    major: "计算机科学与技术",
    height: "178cm",
    weight: "70kg",
    birth_date: "1992-08-15",
    political_affiliation: "中共党员",
    graduation_year: "2015",
    blood_type: "O型",
    address: "北京市海淀区中关村东路10号",
    email: "zhangwei@example.com",
    phone: "138-1234-5678",
    expected_salary: "20,000元/月",
    availability: "2024-09-01",
    mandarin_level: "一级甲等",
    foreign_language_level: "英语六级",
  },
};
export const json = {
  panels: [
    {
      index: 0,
      name: 1,
      height: 297,
      width: 210,
      paperHeader: 0,
      paperFooter: 842,
      printElements: [
        {
          options: {
            left: 12,
            top: 12,
            height: 430,
            width: 566,
            formatter: `function(t, e, d) {
var html =  \`<style>
.font0
	{color:#000000;
	font-size:11.0pt;
	font-family:宋体;
	font-weight:400;
	font-style:normal;
	text-decoration:none;}
.font1
	{color:#000000;
	font-size:20.0pt;
	font-family:宋体;
	font-weight:400;
	font-style:normal;
	text-decoration:none;}
br
	{mso-data-placement:same-cell;}
td
	{padding-top:1px;
	padding-left:1px;
	padding-right:1px;
	mso-ignore:padding;
	color:#000000;
	font-size:11.0pt;
	font-weight:400;
	font-style:normal;
	text-decoration:none;
	mso-generic-font-family:auto;
	mso-font-charset:134;
	mso-number-format:General;
	border:none;
	mso-background-source:auto;
	mso-pattern:auto;
	text-align:general;
	vertical-align:middle;
	mso-rotate:0;
	mso-protection:locked visible;
    line-break: anywhere;
    width: 120px;}
.et2
	{mso-generic-font-family:auto;
	mso-font-charset:134;
	text-align:center;}
.et3
	{font-size:20.0pt;
	mso-generic-font-family:auto;
	mso-font-charset:134;
	text-align:center;}
.et5
	{mso-generic-font-family:auto;
	mso-font-charset:134;
	text-align:left;}
.et6
	{mso-generic-font-family:auto;
	mso-font-charset:134;
	border:.5pt solid #000000;
	text-align:center;}
.et7
	{mso-generic-font-family:auto;
	mso-font-charset:134;
	border:.5pt solid #000000;
	text-align:left;}
.et8
	{mso-generic-font-family:auto;
	mso-font-charset:134;
	border-top:.5pt solid #000000;
	border-right:.5pt solid #000000;
	border-bottom:none;
	border-left:.5pt solid #000000;
	text-align:center;}
.et9
	{mso-generic-font-family:auto;
	mso-font-charset:134;
	border-top:none;
	border-right:.5pt solid #000000;
	border-bottom:none;
	border-left:.5pt solid #000000;
	text-align:center;}
.et10
	{mso-generic-font-family:auto;
	mso-font-charset:134;
	border-top:none;
	border-right:.5pt solid #000000;
	border-bottom:.5pt solid #000000;
	border-left:.5pt solid #000000;
	text-align:center;}
.et11
	{mso-generic-font-family:auto;
	mso-font-charset:134;
	border-top:.5pt solid #000000;
	border-right:none;
	border-bottom:.5pt solid #000000;
	border-left:.5pt solid #000000;
	text-align:left;}
.et12
	{mso-generic-font-family:auto;
	mso-font-charset:134;
	border-top:.5pt solid #000000;
	border-right:none;
	border-bottom:.5pt solid #000000;
	border-left:none;
	text-align:left;}
.et13
	{mso-generic-font-family:auto;
	mso-font-charset:134;
	border-top:.5pt solid #000000;
	border-right:.5pt solid #000000;
	border-bottom:.5pt solid #000000;
	border-left:none;
	text-align:left;}
</style>
</head>
<body>
<table border=0 cellpadding=0 cellspacing=0 style='border-collapse:collapse;width:100%;'>
 <col width=161 style='width:80.50pt;'>
 <col width=161 style='width:80.50pt;'>
 <col width=161 style='width:80.50pt;'>
 <col width=161 style='width:80.50pt;'>
 <col width=161 style='width:80.50pt;'>
 <col width=161 style='width:80.50pt;' span=2>
 <tr height=100 style='height:50.00pt;'>
  <td colspan=7 class=et3 height=100 width=1127 x:str style='height:50.00pt;width:563.50pt;'>入职信息登记表</td>
 </tr>
 <tr height=40 style='height:20.00pt;'>
  <td colspan=7 class=et5 height=40 x:str style='height:20.00pt;'>入职部门：\\\${d.department}<span style='mso-spacerun:yes'></span>入职岗位：\\\${d.position}<span style='mso-spacerun:yes'></span>填表时间：\\\${d.form_date}</td>
 </tr>
 <tr height=48 style='height:24.00pt;'>
  <td class=et6 height=48 x:str style='height:24.00pt;'>姓名</td>
  <td class=et7 x:str>\\\${d.pInfo.name}</td>
  <td class=et6 x:str>性别</td>
  <td class=et7 x:str>\\\${d.pInfo.gender}</td>
  <td class=et6 x:str>出生年月</td>
  <td class=et7 x:str>\\\${d.pInfo.birth_date}</td>
  <td rowspan=4 class=et8 x:str style='border-bottom:.5pt solid #000000;'>贴照片处</td>
 </tr>
 <tr height=48 style='height:24.00pt;'>
  <td class=et6 height=48 x:str style='height:24.00pt;'>籍贯</td>
  <td class=et7 x:str>\\\${d.pInfo.place_of_birth}</td>
  <td class=et6 x:str>民族</td>
  <td class=et7 x:str>\\\${d.pInfo.ethnicity}</td>
  <td class=et6 x:str>政治面貌</td>
  <td class=et7 x:str>\\\${d.pInfo.political_affiliation}</td>
 </tr>
 <tr height=48 style='height:24.00pt;'>
  <td class=et6 height=48 x:str style='height:24.00pt;'>文化程度</td>
  <td class=et7 x:str>\\\${d.pInfo.education_level}</td>
  <td class=et6 x:str>专业</td>
  <td class=et7 x:str>\\\${d.pInfo.major}</td>
  <td class=et6 x:str>毕业时间</td>
  <td class=et7 x:str>\\\${d.pInfo.graduation_year}</td>
 </tr>
 <tr height=48 style='height:24.00pt;'>
  <td class=et6 height=48 x:str style='height:24.00pt;'>身高</td>
  <td class=et7 x:str>\\\${d.pInfo.height}</td>
  <td class=et6 x:str>体重</td>
  <td class=et7 x:str>\\\${d.pInfo.weight}</td>
  <td class=et6 x:str>血型</td>
  <td class=et7 x:str>\\\${d.pInfo.blood_type}</td>
 </tr>
 <tr height=48 style='height:24.00pt;'>
  <td class=et6 height=48 x:str style='height:24.00pt;'>家庭住址</td>
  <td colspan=6 class=et11 x:str style='border-right:.5pt solid #000000;'>\\\${d.pInfo.address}</td>
 </tr>
 <tr height=48 style='height:24.00pt;'>
  <td class=et6 height=48 x:str style='height:24.00pt;'>联系电话</td>
  <td colspan=2 class=et11 x:str style='border-right:.5pt solid #000000;'>\\\${d.pInfo.phone}</td>
  <td class=et6 x:str>电子邮箱</td>
  <td colspan=3 class=et11 x:str style='border-right:.5pt solid #000000;'>\\\${d.pInfo.email}</td>
 </tr>
 <tr height=48 style='height:24.00pt;'>
  <td class=et6 height=48 x:str style='height:24.00pt;'>期望薪资</td>
  <td colspan=2 class=et11 x:str style='border-right:.5pt solid #000000;'>\\\${d.pInfo.expected_salary}</td>
  <td class=et6 x:str>到岗时间</td>
  <td colspan=3 class=et11 x:str style='border-right:.5pt solid #000000;'>\\\${d.pInfo.availability}</td>
 </tr>
 <tr height=48 style='height:24.00pt;'>
  <td rowspan=2 class=et6 height=96 x:str style='height:48.00pt;'>语言能力</td>
  <td class=et6 x:str>普通话</td>
  <td colspan=2 class=et11 x:str style='border-right:.5pt solid #000000;'>\\\${d.pInfo.mandarin_level}</td>
  <td class=et6 x:str>外语</td>
  <td colspan=2 class=et11 x:str style='border-right:.5pt solid #000000;'>\\\${d.pInfo.foreign_language_level}</td>
 </tr>
 <tr height=48 style='height:24.00pt;'>
  <td class=et6 x:str>其他</td>
  <td colspan=5 class=et11 style='border-right:.5pt solid #000000;'></td>
 </tr>
</table>\`

// ! 这里的处理很关键
if (d) {
    return html.replace(/\\$\{(\\S+)\}/g, (match, key) => {
        return eval(key);
    });
} else {
    return html;
}
// ! 这里的处理很关键
            }`,
          },
          printElementType: { title: "html", type: "html" },
        },
        {
          options: {
            left: 12,
            top: 460,
            height: 45,
            width: 566,
            title:
              "说明：此处模版使用 HTML 元素生成动态表格，方便实现自定义表格，减少拖拽生成表格的繁琐操作，你可以使用 www.lingdaima.com/table 对 EXCEL 进行转换，转换前既可在 excel 中预填字段 ${prop}，模板 EXCEL: https://docs.qq.com/document/DUlFUYVh5aWVHVWZX",
          },
          printElementType: { title: "说明", type: "longText" },
        },
        {
          options: {
            left: 12,
            top: 505,
            height: 24,
            width: 566,
            color: "#FF0000",
            title:
              "注意：www.lingdaima.com/table 提供的转换服务会一直转圈，但你仍可从 f12 网络面板中获取到转换后的 html 代码，你需要对转换后的 td 样式进行修改，并且需要转义 模版字符串 \\\\\\\${} 否知你将无法实现该 demo 效果！",
          },
          printElementType: { title: "注意", type: "longText" },
        },
      ],
      paperNumberLeft: 565.5,
      paperNumberTop: 819,
      paperNumberContinue: true,
      watermarkOptions: {},
    },
  ],
};
export default {
  preview: preview,
  name: name,
  desc: desc,
  author: author,
  link: link,
  printData: printData,
  json: json,
};
