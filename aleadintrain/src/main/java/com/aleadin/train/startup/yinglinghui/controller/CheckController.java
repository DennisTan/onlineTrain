package com.aleadin.train.startup.yinglinghui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CheckController
{

	@RequestMapping(value="/ylh/datebar_index.html")
	public String dateBarIndex()
	{
		return "datebar_index";
	}
	
	@RequestMapping(value="/ylh/datebar/dateBar_stu_step1.html")
	public String dateBarStuStep1()
	{
		return "dateBar_stu_step1";
	}
	
	@RequestMapping(value="/ylh/datebar/dateBar_stu_step2.html")
	public String dateBarStuStep2()
	{
		return "dateBar_stu_step2";
	}
	
	@RequestMapping(value="/ylh/datebar/dateBar_stu_step3.html")
	public String dateBarStuStepe3()
	{
		return "dateBar_stu_step3";
	}
	
	@RequestMapping(value="/ylh/datebar/dateBar_stu_step4.html")
	public String dateBarStuStepe4()
	{
		return "dateBar_stu_step4";
	}
	
	@RequestMapping(value="/ylh/datebar/dateBar_stu_step5.html")
	public String dateBarStuStepe5()
	{
		return "dateBar_stu_step5";
	}
	
	@RequestMapping(value="/ylh/datebar/dateBar_tea_step1.html")
	public String dateBarTeaStepe1()
	{
		return "dateBar_tea_step1";
	}
	
	@RequestMapping(value="/ylh/datebar/dateBar_tea_step2.html")
	public String dateBarTeaStepe2()
	{
		return "dateBar_tea_step2";
	}
	
	@RequestMapping(value="/ylh/datebar/dateBar_tea_step3.html")
	public String dateBarTeaStepe3()
	{
		return "dateBar_tea_step3";
	}
	@RequestMapping(value="/ylh/datebar/dateBar_tea_step4.html")
	public String dateBarTeaStepe4()
	{
		return "dateBar_tea_step4";
	}
	
	@RequestMapping(value="/ylh/datebar/dateBar_tea_step5.html")
	public String dateBarTeaStepe5()
	{
		return "dateBar_tea_step5";
	}
}
