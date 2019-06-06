package cn.digitalpublishing.facade;

import cn.digitalpublishing.dao.ArticleDao;
import cn.digitalpublishing.dao.BDicClassDao;
import cn.digitalpublishing.dao.BDicDao;
import cn.digitalpublishing.dao.ChapterDao;
import cn.digitalpublishing.dao.CompressDao;
import cn.digitalpublishing.dao.CopyrightDao;
import cn.digitalpublishing.dao.IntegralDao;
import cn.digitalpublishing.dao.OrderDao;
import cn.digitalpublishing.dao.PProductDao;
import cn.digitalpublishing.dao.PProductLicenseDao;
import cn.digitalpublishing.dao.PProductStructureRelationshipDao;
import cn.digitalpublishing.dao.PProductTypeDao;
import cn.digitalpublishing.dao.PStructureDao;
import cn.digitalpublishing.dao.PublishTradeDao;
import cn.digitalpublishing.dao.RechargeDao;
import cn.digitalpublishing.dao.RecordCompressDao;
import cn.digitalpublishing.dao.SectionDao;
import cn.digitalpublishing.dao.ShoppingCartDao;
import cn.digitalpublishing.dao.UserDao;
import cn.digitalpublishing.dao.WatermarkDao;

/**
 * @author Stone
 */
public class DaoFacade {

	/**
	 * 基础
	 */
	BDicDao dicDao;
	BDicClassDao dicClassDao;

	/**
	 * 产品
	 */
	PProductDao productDao;
	PProductTypeDao productTypeDao;
	PStructureDao structureDao;
	PProductStructureRelationshipDao productStructureRelationshipDao;

	/**
	 * 版权版税
	 */
	public CopyrightDao copyrightDao;
    PProductLicenseDao productLicenseDao;
	
	/**
	 * 用户注册
	 */
	UserDao userDao;
	
	/**
	 * 在线创作
	 */
	ArticleDao articleDao;
	
	/**
	 * 版权交易信息
	 */
	PublishTradeDao publishTradeDao;
	
	/**
	 * 打包
	 */
	CompressDao compressDao;
	
	/**
	 * 打包记录
	 */
	RecordCompressDao recordCompressDao;
	
	/**
	 * 水印
	 */
	WatermarkDao watermarkDao;
	
	/**
	 * 购物车
	 */
	ShoppingCartDao shoppingCartDao;
	
	/**
	 * 订单
	 */
	OrderDao orderDao;
	
	/**
	 * 积分记录
	 */
	IntegralDao integralDao;
	
	/**
	 * 充值记录
	 */
	RechargeDao rechargeDao;
	
	/**
	 * 图书章
	 */
	ChapterDao chapterDao;
	
	/**
	 * 图书节
	 */
	SectionDao sectionDao;

	public SectionDao getSectionDao() {
		return sectionDao;
	}

	public void setSectionDao(SectionDao sectionDao) {
		this.sectionDao = sectionDao;
	}

	public ChapterDao getChapterDao() {
		return chapterDao;
	}

	public void setChapterDao(ChapterDao chapterDao) {
		this.chapterDao = chapterDao;
	}

	public ArticleDao getArticleDao() {
		return articleDao;
	}

	public void setArticleDao(ArticleDao articleDao) {
		this.articleDao = articleDao;
	}

	public BDicDao getDicDao() {
		return dicDao;
	}

	public void setDicDao(BDicDao dicDao) {
		this.dicDao = dicDao;
	}

	public BDicClassDao getDicClassDao() {
		return dicClassDao;
	}

	public void setDicClassDao(BDicClassDao dicClassDao) {
		this.dicClassDao = dicClassDao;
	}

	public PProductDao getProductDao() {
		return productDao;
	}

	public void setProductDao(PProductDao productDao) {
		this.productDao = productDao;
	}

	public PProductTypeDao getProductTypeDao() {
		return productTypeDao;
	}

	public void setProductTypeDao(PProductTypeDao productTypeDao) {
		this.productTypeDao = productTypeDao;
	}

	public PStructureDao getStructureDao() {
		return structureDao;
	}

	public void setStructureDao(PStructureDao structureDao) {
		this.structureDao = structureDao;
	}

	public PProductStructureRelationshipDao getProductStructureRelationshipDao() {
		return productStructureRelationshipDao;
	}

	public void setProductStructureRelationshipDao(PProductStructureRelationshipDao productStructureRelationshipDao) {
		this.productStructureRelationshipDao = productStructureRelationshipDao;
	}

	public CopyrightDao getCopyrightDao() {
		return copyrightDao;
	}

	public void setCopyrightDao(CopyrightDao copyrightDao) {
		this.copyrightDao = copyrightDao;
	}

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	public PublishTradeDao getPublishTradeDao() {
		return publishTradeDao;
	}

	public void setPublishTradeDao(PublishTradeDao publishTradeDao) {
		this.publishTradeDao = publishTradeDao;
	}

    public PProductLicenseDao getProductLicenseDao() {
        return productLicenseDao;
    }

    public void setProductLicenseDao(PProductLicenseDao productLicenseDao) {
        this.productLicenseDao = productLicenseDao;
    }

	public ShoppingCartDao getShoppingCartDao() {
		return shoppingCartDao;
	}

	public void setShoppingCartDao(ShoppingCartDao shoppingCartDao) {
		this.shoppingCartDao = shoppingCartDao;
	}

	public OrderDao getOrderDao() {
		return orderDao;
	}

	public void setOrderDao(OrderDao orderDao) {
		this.orderDao = orderDao;
	}

	public CompressDao getCompressDao() {
		return compressDao;
	}

	public void setCompressDao(CompressDao compressDao) {
		this.compressDao = compressDao;
	}

	public RecordCompressDao getRecordCompressDao() {
		return recordCompressDao;
	}

	public void setRecordCompressDao(RecordCompressDao recordCompressDao) {
		this.recordCompressDao = recordCompressDao;
	}

	public WatermarkDao getWatermarkDao() {
		return watermarkDao;
	}

	public void setWatermarkDao(WatermarkDao watermarkDao) {
		this.watermarkDao = watermarkDao;
	}

	public IntegralDao getIntegralDao() {
		return integralDao;
	}

	public void setIntegralDao(IntegralDao integralDao) {
		this.integralDao = integralDao;
	}

	public RechargeDao getRechargeDao() {
		return rechargeDao;
	}

	public void setRechargeDao(RechargeDao rechargeDao) {
		this.rechargeDao = rechargeDao;
	}
	
}