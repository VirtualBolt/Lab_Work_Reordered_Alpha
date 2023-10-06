function fnSearchActivity(searchText){
			$('.CLSSRESULTROW').remove();
		//	var searchText=$('#searchTxt').text();
//		console.log("search text=="+searchText)
		var pageCount=1
			var searchResultArr=[];
			var resultStr="";
			if(searchText!="")
			{
				for(var i=0;i<gModuleArr.length;i++)
					{
						for(var j=0;j<gModuleArr[i].Lessons.length;j++)
						{
								for(var k=0;k<gModuleArr[i].Lessons[j].Topics.length;k++)
								{			
									for(var pgCnt=0; pgCnt<gModuleArr[i].Lessons[j].Topics[k].Pages.length;pgCnt++){
											var currentPageText=gModuleArr[i].Lessons[j].Topics[k].Pages[pgCnt].text().toUpperCase();
											
											
											if(currentPageText.indexOf(searchText.toUpperCase())>-1)
											{
												
												var ID=gModuleArr[i].Lessons[j].Topics[k].Pages[pgCnt].attr('ID');
												var title=gModuleArr[i].Lessons[j].Topics[k].Pages[pgCnt].find('PAGETITLE').text();
												var tpageCount
												if(gModuleArr[i].Lessons[j].Topics[k].Pages[pgCnt].attr("SHOWINMENU")=="F"){
													/*To exclude not shown on menu.*/
														tpageCount=pageCount-1;
												}
												else
												tpageCount=pageCount
												
												searchResultArr.push({													
													"ID":ID,
													"Title":title,
													"pageCount":tpageCount
												})
												
											}
											if(gModuleArr[i].Lessons[j].Topics[k].Pages[pgCnt].attr("SHOWINMENU")!="F"){
													/*To exclude not shown on menu.*/
														pageCount++;
												}
										
									}
								}
						}	
					}
					
					if(searchResultArr.length==0)
					{
							resultStr="<div class='CLSSRESULTROW CLSSNOTFOUND'>Not Found</div>";
							$('#searchTxt').text("");
					}
					else
					{
								for(var l=0;l<searchResultArr.length;l++)
								{
									resultStr +="<div class='CLSSRESULTROW'><div class='CLSSRESULTPAGE'>"+searchResultArr[l].pageCount+"</div><div pageNo='"+searchResultArr[l].pageCount+"' id='SR_"+searchResultArr[l].ID+"' class='CLSSRESULTTITLE'>"+searchResultArr[l].Title+"</div></div>"			
										
								}
							//	console.log("pageCount  "+pageCount)
					}
					
					$('#resultSection').append(resultStr);
					
					$('.CLSSRESULTTITLE').click(function(){
							$(".searchPopup").remove();
							//console.log("==drfjhdf=="+$(this).attr('id').substring(3))
							//gCurrPageNum=parseInt($(this).attr('pageNo'))
							fnJumpToPageByID($(this).attr('id').substring(3));
							$('#searchTextDiv').text("")
							disableHelpPopup();
							hideHelpPopUp();
					});			

					
			}
			
	};	