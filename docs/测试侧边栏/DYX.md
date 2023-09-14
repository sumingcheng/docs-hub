现在原型地址，需要输入密码
VnetYx#@！

# 开发

### 外采资源管理，查看组件

接收参数type、form启用[]

1. 专项数据库，三项下拉框，选择城市

## 2023年7月19日 12:44:19

1. 重构三个管理页面的内容

# 外采

1. 国内专线：自己的
2. 海外专线：OFFNET询价结果
3. 国内互联网：自己的
4. 海外互联网：VPN PLAS
5. 设备：MPLS 设备  设备是多个，列表

# 外采接口

## 最后一公里

1国内专线
2海外专线
3国内互联网
4海外互联网

## 产品对应设备

设备

# addressList组件

```js
const allDisabled = ref(false)
const isCityShow = ref(true)

// ——————————————————————————————————
let countryList: Array<CountryItem> = []

watch(
  () => drawerForm.addressList,
  (newValue) => {
    drawerForm.countryId = newValue[0]
    drawerForm.provinceId = newValue[1]
    drawerForm.cityId = newValue[2]
  },
  { deep: true }
)

// 级联选择参数，懒加载
const cascaderProp: CascaderProps = reactive({
  lazy: true,
  async lazyLoad(node, resolve) {
    const { level, value } = node
    let result: any
    if (!value) {
      result = await getCountryList()
    } else {
      let params = ''
      // 注：现在只有中国有下一级，并且是CN
      if (value === '1') {
        params = 'CN'
      } else {
        params = value as string
      }
      result = await getProvinceCityList(params)
    }
    resolve(result)
  },
})

// TODO: 接口搜索，返回级联的结果值，然后赋值给v-model自动获取
const cascaderFilterMethod = async (keyword: string) => {
  drawerForm.addressList = ['1', '220000']
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return true
}

// 骨干端口 - 获取国家列表 provinceCode !== '1' 为叶子节点
const getCountryList = () => {
  return getCountry().then((res) => {
    countryList = res.data
    const list = res.data.map((item: CountryItem) => {
      return {
        label: item.countryName,
        value: item.provinceCode,
        leaf: item.provinceCode !== '1',
      }
    })
    return list
  })
}

/**
 * 骨干端口 - 获取省市列表 regionLevel > 2 为叶子节点
 * @param regionParentCode 上级code
 * @param type 骨干端口固定为 corePort
 */
const getProvinceCityList = (regionParentCode: string) => {
  return getProvinceCity(regionParentCode, 'corePort').then((res) => {
    return res.data.map((item: ProvinceCityItem) => {
      return {
        label: item.regionName,
        value: item.regionCode,
        leaf: item.regionLevel && item.regionLevel >= 2,
      }
    })
  })
}
// ——————————————————————————————————
```

# 接口

```
获取所有枚举接口
http://localhost:8890/dcomsp-sales/sysCategory/queryDetail

sdwan参数
param=sd_wan_child_type
参数param，多个用逗号分割
```

```
mpls_devices_brands - mpls设备品牌
vpn_devices_brands - vpn设备品牌
sd_wan_devices_brands - sd_wan设备品牌
sd_wan_child_type - SDWAN设备子类
```

```
/dcomsp-sales/sysRegion/queryDetail 获取国内省市
参数 regionParentCode=上级code 
获取省份code是CN，获取市code是省
type 骨干端口corePort 最后一公里lastMile
```

```
获取海外国家 http://localhost:8890/dcomsp-sales/dyxQuotationSdwanNongcSupport/getAllCountry
获取海外城市 http://localhost:8890/dcomsp-sales/dyxQuotationSdwanNongcSupport/getCityByCountry
参数 country国家名称
```

# 增加的需求

1. SD-WAN Non-GC support 编辑国家和城市的时候可以任选其他
2. 定价成本-增加查看可编辑的参数价格书-需要有权限控制
3. 查看报价单也需要权限控制
4. 带宽改成带宽量，是一个东西

![lQLPJwAw9gUCzPzNAsXNB2uwV28NflrTEpIEyo8fNEC7AA_1899_709](D:\Desktop\DYX\assets\lQLPJwAw9gUCzPzNAsXNB2uwV28NflrTEpIEyo8fNEC7AA_1899_709.png)

![lQLPJx8aeXwzsLzNAu_NB3ewVmBqvqjCkVAEyo9S2oC7AA_1911_751](D:\Desktop\DYX\assets\lQLPJx8aeXwzsLzNAu_NB3ewVmBqvqjCkVAEyo9S2oC7AA_1911_751.png)

![195b3d01ebfaa9c5e253af5d4ae4fc9b](D:\Desktop\DYX\assets\195b3d01ebfaa9c5e253af5d4ae4fc9b.png)

![6a77c8ae126c70dca4c09b1d0d623a81](D:\Desktop\DYX\assets\6a77c8ae126c70dca4c09b1d0d623a81.png)

![img](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/WgZOZZVW8XJdOLX8/img/78b89530-3c59-4fb4-a346-7fc930ae7b64.png)

```
CommonResponse
```

# 问题

```javascript
const handleDrawerData = (result: LastLineDetail, lastLineType: number) => {
  // 国内专线
  if (lastLineType === purchaseType.DOMESTICDEDICATEDLINE) {
    const domesticDedicatedLineData = new DomesticDedicatedLineForm()
    domesticDedicatedLineData.customerName = listForm.customName
    domesticDedicatedLineData.addressList = [
      '1',
      result.provinceCode,
      result.cityCode,
    ] // TODO： 国家ID
    domesticDedicatedLineData.installationAddress = result.installationAddress
    domesticDedicatedLineData.requiredBandwidth = result.requiredBandwidth
    domesticDedicatedLineData.demandLineType = result.requiredLineType
    domesticDedicatedLineData.contractPeriod = listForm.contractPeriod
    return domesticDedicatedLineData
  }
  // 国内互联网
  if (lastLineType === purchaseType.DOMESTICINTERNETLINE) {
    const domesticInternetLineData = new DomesticInternetLineForm()

    domesticInternetLineData.countryId = result.countryCode // 国家ID
    domesticInternetLineData.provinceId = result.provinceCode // 省份ID
    domesticInternetLineData.cityId = result.cityCode // 城市ID
    domesticInternetLineData.productType = result.lineType ?? 0 // 产品类型
    domesticInternetLineData.addressList = [
      '1',
      result.provinceCode,
      result.cityCode,
    ] // 地址 TODO： 国家ID
    domesticInternetLineData.installationAddress = result.installAddress // 线路安装地址
    domesticInternetLineData.isBandwidth = result.bandwitdhIsSame ?? 0 // 上下行带宽是否一致
    domesticInternetLineData.uplinkBandwidth = result.upBandwidth ?? 0 // 线路上行带宽M
    domesticInternetLineData.downlinkBandwidthM = result.downBandwidth ?? 0 // 线路下行带宽M
    domesticInternetLineData.isFixedIP = result.staticIp ?? 0 // 是否要求固定IP
    domesticInternetLineData.numberOfIPs = result.ipCount ?? 0 // IP数量
    domesticInternetLineData.remark = result.remark // 备注

    return domesticInternetLineData
  }
  // 海外专线
  if (lastLineType === purchaseType.ABROADDEDICATEDLINE) {
    const overseasDedicatedLineData = new OverseasDedicatedLineForm()
    overseasDedicatedLineData.aTerminalAddress = result.sourceAddress
    overseasDedicatedLineData.zTerminalAddress = result.installAddress
    overseasDedicatedLineData.bandwidthSize = result.demandBandwidth ?? 0
    overseasDedicatedLineData.lineType = result.lineType ?? 0
    overseasDedicatedLineData.isProtection = result.needProtection ?? 0
    overseasDedicatedLineData.isCE = result.needCe ?? 0
    overseasDedicatedLineData.isNNI = result.hasNni ?? 0
    overseasDedicatedLineData.remark = result.remark // 备注

    return overseasDedicatedLineData
  }
  // 海外互联网
  if (lastLineType === purchaseType.ABROADINTERNETLINE) {
    const overseasInternetLineData = new OverseasInternetLineForm()
    overseasInternetLineData.lineType = result.lineType ?? 0
    overseasInternetLineData.addressList = result.addressList
    overseasInternetLineData.installationAddress = result.installAddress
    overseasInternetLineData.bandwidthSize = result.demandBandwidth ?? 0
    overseasInternetLineData.numberOfIPs = result.ipCount ?? 0
    overseasInternetLineData.supplier = result.operator ?? 0
    overseasInternetLineData.isNNI = result.hasNni ?? 0
    overseasInternetLineData.remark = result.remark // 备注

    return overseasInternetLineData
  }
}
```

# 字段

1. 带宽大小
2. 线路安装地址
3. 是否接入指定POP
4. POP点地址

```
1国内专线
2海外专线
3国内互联网
4海外互联网   
```

# 问题

1. 国内专线需求线路类型输入提示 ' ' √
2. 海外需要运营商，运营商需要修改：
3. 定价成本，可以填写小数，外采显示也需要支持2位小数  √
4. 采购勾选供应商
