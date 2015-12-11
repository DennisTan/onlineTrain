package com.aleadin.train.model;

import java.util.List;

public class DateBarViewData {
	
	private String pageTitle;

	private List<TutorialTopicSurveyViewData> topics;
	
	
	public String getPageTitle() {
		return pageTitle;
	}

	public void setPageTitle(String pageTitle) {
		this.pageTitle = pageTitle;
	}

	public List<TutorialTopicSurveyViewData> getTopics() {
		return topics;
	}

	public void setTopics(List<TutorialTopicSurveyViewData> topics) {
		this.topics = topics;
	}
	
}
