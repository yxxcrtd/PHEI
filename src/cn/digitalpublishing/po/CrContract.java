package cn.digitalpublishing.po;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * @name 11_合同
 * @table CR_CONTRACT
 */
@SuppressWarnings({"serial","unused"})
public class CrContract implements Serializable {

	private String contractId; // 合同ID
	private String contractType; // 合同类型
	private String contractName; // 合同名称
	private Date contractDate; // 合同签订日期
	private String contractSource; // 合同来源
	private String contractReason; // 合同原因
	private Date contractExpired; // 合同过期日期
	private Integer contractDays; // 合同过期天数
	private String contractStatus; // 合同状态
	private String contractLicenseDuration; // 合同License时间
	private Date contractLicenseStartOn; // 合同License开始日期
	private Date contractLicenseEndOn; // 合同License到期日期
	private String contractLicenseOption; // 合同License开始选项
	private Integer contractAuthorCount; // 合同作者获取免费样书个数
	private Integer contractProxyCount; // 合同代理商获取免费样书个数
	private BigDecimal contractBailAmount; // 合同保证金
	private BigDecimal contractMaxAmount; // 合同最多金额
	private BigDecimal contractMinAmount; // 合同最少金额
	private BigDecimal contractProxyAmount; // 合同代理费
	
	//@JsonIgnore
	//private Set<PProductContractRelationship> productContractRelationshipSet = new HashSet<PProductContractRelationship>(); // 01_产品和合同关系

}