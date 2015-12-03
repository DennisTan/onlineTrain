package com.aleadin.train.dao.vo;

import java.util.Date;

public class OfflineClassDetailVO {
	   
	    //课程ID
		private String ID;
		
		//课程标题
		private String title;
		
		//课程介绍
		private String introduce;
		
		//开课时间
		private Date startTime;
		
		//课程图片
		private String imgPath;
		
		//开课地址
		private String address;
		
		//作者ID
		private String authorID;
		
		//作者名字
		private String realName;
		   
		//机构
	    private String company;
	   
	    //职位
	    private String position;
	    
	 // 作者简介
		private String authIntroduce1;

		// 作者简介
		private String authIntroduce2;
		
		// 作者简介
		private String authIntroduce3;
			
		// 作者头像
		private String authImgPath;

		
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

		public Date getStartTime() {
			return startTime;
		}

		public void setStartTime(Date startTime) {
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

		public String getRealName() {
			return realName;
		}

		public void setRealName(String realName) {
			this.realName = realName;
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

		public String getAuthIntroduce1() {
			return authIntroduce1;
		}

		public void setAuthIntroduce1(String authIntroduce1) {
			this.authIntroduce1 = authIntroduce1;
		}

		public String getAuthIntroduce2() {
			return authIntroduce2;
		}

		public void setAuthIntroduce2(String authIntroduce2) {
			this.authIntroduce2 = authIntroduce2;
		}

		public String getAuthIntroduce3() {
			return authIntroduce3;
		}

		public void setAuthIntroduce3(String authIntroduce3) {
			this.authIntroduce3 = authIntroduce3;
		}

		public String getAuthImgPath() {
			return authImgPath;
		}

		public void setAuthImgPath(String authImgPath) {
			this.authImgPath = authImgPath;
		}
		
		
}
