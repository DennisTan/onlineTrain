package com.aleadin.train.model;

import java.util.List;

public class OfflineClassDetailViewData 
{
	//页面title
	private String pageTitle;
	
	//课程ID
	private String ID;
	
	//课程标题
	private String title;
	
	//课程介绍
	private String introduce;
	
	//开课时间
	private String startTime;
	
	//课程图片
	private String imgPath;
	
	//开课地址
	private String address;
	
	//作者ID
	private String authorID;
	
	 // 作者
	private String authorName;

	// 任职机构
	private String company;

	// 职位
	private String position;
		
	// 作者简介
	private List<String> authIntroduces;
		
	// 作者头像
	private String authImgPath;
	
	// 相关课程
	private java.util.List<OfflineClassSurveyViewData> relationCourse;

	public String getPageTitle() {
		return pageTitle;
	}

	public void setPageTitle(String pageTitle) {
		this.pageTitle = pageTitle;
	}

	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getIntroduce() {
		return introduce;
	}

	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getAuthorID() {
		return authorID;
	}

	public void setAuthorID(String authorID) {
		this.authorID = authorID;
	}

	public List<String> getAuthIntroduces() {
		return authIntroduces;
	}

	public void setAuthIntroduces(List<String> authIntroduces) {
		this.authIntroduces = authIntroduces;
	}

	public String getAuthImgPath() {
		return authImgPath;
	}

	public void setAuthImgPath(String authImgPath) {
		this.authImgPath = authImgPath;
	}

	public java.util.List<OfflineClassSurveyViewData> getRelationCourse() {
		return relationCourse;
	}

	public void setRelationCourse(
			java.util.List<OfflineClassSurveyViewData> relationCourse) {
		this.relationCourse = relationCourse;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}
	
	
}
