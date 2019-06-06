/**
 * Created by huangchenxi on 14-5-26.
 */
var tableArray = new Array();

// DataTable 数据源
var dataTableArray = new Array();
// DataTable Html代码
var dataTableHtmlArray = new Array();
// 全部task
var taskMap = new Map();
$(function () {

    $(".on").click(function () {
        $(".on-down").slideToggle();
    });

    // 修改流程使用，暂时还没用到
    var flowNodeCount = $("#flowNodeCount").val();
    if (flowNodeCount == "") {
        flowNodeCount = 0;
    }
    for (var k = 0; k < parseInt(flowNodeCount); k++) {
        dataTableArray[k] = {
            "aaData": [],
            "iTotalDisplayRecords": 0,
            "iTotalRecords": 0
        };

        var html = Editorial.Flow.processDesign.createDataTableHtml(k);

        dataTableHtmlArray[k] = html;

        $("#content").append(dataTableHtmlArray[k]);

        Editorial.Flow.processDesign.createDataTable(k);
    }
    ;

});


Editorial.Flow.processDesign.addTask = function () {
    var url = $('#ctx').val() + "/pages/ftask/form/index?flag=1&productType="+$('#productType').val();
    var commonModalCss = {
        "width": "1200px",
        "height": "600px"
    };
    var commonModalBodyCss = {
        "max-height": "800px"
    };
    openCommonModalInFrame(url, commonModalCss, commonModalBodyCss);

};
Editorial.Flow.processDesign.addSubProcess = function () {
    var url = $('#ctx').val() + "/pages/fprocess/form/listIndex";
    var commonModalCss = {
        "width": "1000px",
        "height": "600px"
    };
    var commonModalBodyCss = {
        "max-height": "800px"
    };
    openCommonModalInFrame(url, commonModalCss, commonModalBodyCss);

};

Editorial.Flow.processDesign.accordionToggle = function (id, obj) {
    var openClassName = "icon-folder-open";
    var closeClassName = "icon-folder-close";
    var imark = $(obj).find("i");
    var disp = $("#" + id).css("display"); // 当前accordion显示状态
    if (disp == "none") {
        imark.removeClass(closeClassName).addClass(openClassName);
    } else {
        imark.removeClass(openClassName).addClass(closeClassName);
    }
    $("#" + id).slideToggle("fast");
};

Editorial.Flow.processDesign.createDataTableHtml = function (k, taskData) {
    var html = "";
    html = html + '<div class="table-header on" onclick="Editorial.Flow.processDesign.accordionToggle(\'task_' + k + '\', this);">';
    html = html + '<i class="icon-folder-open"></i>&nbsp;&nbsp;' + taskData.name;
    html = html + '</div>';
    html = html + '<div id="task_' + k + '" class="on-down">';


    html = html + '<form class="form-horizontal">';
    html = html + '<div class="row-fluid">';
    html = html + '<div class="row-fluid">';
    html = html + '<div class="control-group span3">';
    html = html + '<label class="control-label" for="form-field-1">流程名称：</label>';
    html = html + '<div class="controls">';
    html = html + '<input type="text" id="query_module_shortName" value="' + taskData.name + '" class="span10" disabled />';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '<div class="control-group span3">';
    html = html + '<label class="control-label" for="form-field-1">页面访问路径：</label>';
    html = html + '<div class="controls">';
    html = html + '<input type="text" id="query_module_shortName" value="' + taskData.url + '" class="span10" disabled />';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '<div class="control-group span3">';
    html = html + '<label class="control-label" for="form-field-1">任务类别：</label>';
    html = html + '<div class="controls">';
    html = html + '<select id="taskAssigneeFlag" name="taskAssigneeFlag" class="span10" disabled >';
    html = html + '<option value="">--请选择--</option>';
    html = html + '<option value="1"';
    if ("1" == taskData.taskAssigneeFlag) {
        html = html + " selected = 'true' ";
    }
    html = html + '>普通任务</option>';
    html = html + '<option value="2"';
    if ("2" == taskData.taskAssigneeFlag) {
        html = html + " selected = 'true' ";
    }
    html = html + '>自动任务</option>';
    html = html + '<option value="3"';
    if ("3" == taskData.taskAssigneeFlag) {
        html = html + " selected = 'true' ";
    }
    html = html + '>并发任务起始</option>';
    html = html + '<option value="2"';
    if ("4" == taskData.taskAssigneeFlag) {
        html = html + " selected = 'true' ";
    }
    html = html + '>并发任务汇总</option>';
    html = html + '</select>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '<div class="control-group span3">';
    html = html + '<label class="control-label" for="form-field-1">分配人：</label>';
    html = html + '<div class="controls">';
    html = html + '<input type="text" id="query_module_shortName" value="' + taskData.assignee + '" class="span10" readOnly />';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '<div class="control-group span3">';
    html = html + '<label class="control-label" for="form-field-1">是否是开始任务：</label>';
    html = html + '<div class="controls">';
    html = html + '<select id="taskStartFlag" name="taskStartFlag" class="span10" readOnly >';
    html = html + '<option value="">--请选择--</option>';
    html = html + '<option value="1"';
    if ("1" == taskData.startFlag) {
        html = html + " selected = 'true' ";
    }
    html = html + '>是</option>';
    html = html + '<option value="2"';
    if ("2" == taskData.startFlag) {
        html = html + " selected = 'true' ";
    }
    html = html + '>否</option>';
    html = html + '</select>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '<div class="control-group span3">';
    html = html + '<label class="control-label" for="form-field-1">自定义属性编号：</label>';
    html = html + '<div class="controls">';
    html = html + '<input type="text" id="query_module_shortName" value="' + taskData.field + '" class="span10" disabled />';
    html = html + '<input type="hidden" id="taskDisplayFieldHidden_' + k + '" value="' + taskData.display + '" />';
    html = html + '</div>';
    html = html + '</div>';
    if ("text" == taskData.display || "3" == taskData.taskAssigneeFlag) {
        html = html + '<div class="control-group span3">';
        html = html + '<div class="ace-thumbnails">';
        html = html + '<span class="btn btn-small btn-primary"><i class=icon-edit bigger-125></i>';
        html = html + '<input type="button" class="btn btn-small btn-primary" id="taskAddConditionButton_"' + k;
        html = html + '" onclick="Editorial.Flow.processDesign.addCondition(' + k + ');" value="添加条件"/>';
        html = html + '</span>';
        html = html + '</div>';
        html = html + '</div>';
    }
    if("4" == taskData.taskAssigneeFlag){
        html = html + '<div class="control-group span3">';
        html = html + '<label class="control-label" for="form-field-1">并入条件数目：</label>';
        html = html + '<div class="controls">';
        html = html + '<input type="text" id="joinNum' + k + '" value="' + taskData.joinNum + '" class="span10" disabled />';
        html = html + '</div>';
        html = html + '</div>';
    }
    html = html + '</div>';
    html = html + '</form>';


    html = html + '<table id="table_report' + k + '" class="table table-striped table-bordered table-hover">';
    html = html + '<thead>';
    if ("select" == taskData.display) {
        html = html + '<tr>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '</tr>';
    }
    if ("text" == taskData.display) {
        html = html + '<tr>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '</tr>';
    }
    if ("" == taskData.display) {
        html = html + '<tr>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '</tr>';
    }
    html = html + '</thead>';
    html = html + '<tbody align="center" style="line-height: 18px; border: 1px solid #97bbdc;">';
    html = html + '</tbody>';
    html = html + '<tfoot>';
    if ("select" == taskData.display) {
        html = html + '<tr>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '</tr>';
    }
    if ("text" == taskData.display) {
        html = html + '<tr>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '</tr>';
    }
    if ("" == taskData.display) {
        html = html + '<tr>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '<th width="15%" align="center"></th>';
        html = html + '</tr>';
    }
    html = html + '</tfoot>';
    html = html + '</table>';
    html = html + '</div>';
    html = html + '</div>';
    return html;
};

Editorial.Flow.processDesign.addCondition = function (k) {
    var rowIndex = dataTableArray[k].aaData.length;
    var nextTaskData = {
        id: rowIndex,
        conditionSymbol: "",
        conditionValue: "",
        nextTransitionName: ""
    };
    dataTableArray[k].aaData.push(nextTaskData);
    tableArray[k].fnStandingRedraw();
    //refreshFrameDataTableInFrame("tableArray[k]");
};

Editorial.Flow.processDesign.changeCondition = function (k, row, value) {
    dataTableArray[k].aaData.forEach(function (nextTaskData, index) {
        if (row == index) {
            nextTaskData.conditionSymbol = value;
        }
    });
    tableArray[k].fnStandingRedraw();
};

Editorial.Flow.processDesign.createDataTable = function (k, display) {
    var columns = "";
    if ("select" == display ) {
        columns = Editorial.Flow.processDesign.selectColumns;
    }
    if ( "" == display) {
        columns = Editorial.Flow.processDesign.otherColumns;
    }
    if ("text" == display) {
        columns = Editorial.Flow.processDesign.textColumns;
    }

    tableArray[k] = $('#table_report' + k).dataTable({
        "bFilter": false, // 开关，是否启用客户端过滤器
        "bProcessing": true, // 当datatable获取数据时候是否显示正在处理提示信息。
        "bAutoWidth": false, // 自适应宽度
        "sPaginationType": "full_numbers", // 分页样式
        "bServerSide": true, // 从服务器端取数据
        "sAjaxSource": k,
        // "/pages/BPM/form/findTaskByUserName", // mvc后台ajax调用接口。
        "fnServerParams": function (aoData) {

        },
        "aaData": dataTableArray[k],
        "fnServerData": Editorial.Flow.processDesign.retrieveCacheData,
        "fnDrawCallback": function (oSettings) {
            for (var i = 0, iLen = oSettings.aiDisplay.length; i < iLen; i++) {
                $('td:eq(0)', oSettings.aoData[oSettings.aiDisplay[i]].nTr).html(i + oSettings._iDisplayStart + 1);
            }
        },
        "aoColumns": eval(columns),

        // 多语言配置
        "oLanguage": {
            "sProcessing": "正在加载中......",
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "对不起，查询不到相关数据！",
            "sEmptyTable": "表中无数据存在！",
            "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
            "sInfoFiltered": "数据表中共为 _MAX_ 条记录",
            "sSearch": "搜索",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上一页",
                "sNext": "下一页",
                "sLast": "末页"
            }
        }

    });
};

Editorial.Flow.processDesign.selectColumns = [
    {
        "sTitle": "序号",
        "mDataProp": "id"
    },
    {
        "sTitle": "后置条件",
        "mDataProp": "nextTransitionName"
    },
    {
        "sTitle": "后置流程名称",
        "mData": null,
        "fnRender": function (oObj) {
            var select = '<select id="nextTask_select" name="nextTask_select" class="span10">';
            for (var i = 0; i < taskMap.keys().length; i++) {
                select = select + '<option value="' + taskMap.keys()[i] + '">' + taskMap.keys()[i] + '</option>';
            }
            select = select + '<option value="end">结束</option>';
            select = select + '</select>';
            var hiddenId = '<input type="hidden" id="transitionId_hidden" name="transitionId_hidden" value="' + oObj.aData.id + '"/>';
            var hiddenName = '<input type="hidden" id="transitionName_hidden" name="transitionName_hidden" value="' + oObj.aData.nextTransitionName + '"/>';
            return select + hiddenId + hiddenName;
        }
    }
];
Editorial.Flow.processDesign.otherColumns = [
    {
        "sTitle": "序号",
        "mDataProp": "id"
    },
    {
        "sTitle": "后置流程名称",
        "mData": null,
        "fnRender": function (oObj) {
            var select = '<select id="nextTask_select" name="nextTask_select" class="span10">';
            for (var i = 0; i < taskMap.keys().length; i++) {
                select = select + '<option value="' + taskMap.keys()[i] + '">' + taskMap.keys()[i] + '</option>';
            }
            select = select + '<option value="end">结束</option>';
            select = select + '</select>';
            var hiddenId = '<input type="hidden" id="transitionId_hidden" name="transitionId_hidden" value="' + oObj.aData.id + '"/>';
            var hiddenName = '<input type="hidden" id="transitionName_hidden" name="transitionName_hidden" value="' + oObj.aData.nextTransitionName + '"/>';
            return select + hiddenId + hiddenName;
        }
    }
];

Editorial.Flow.processDesign.textColumns = [
    {
        "sTitle": "序号",
        "mDataProp": "id"
    },
    {
        "sTitle": "符号",
        "mData": null,
        "aTargets": [ -1 ],
        // 自定义列的样式
        "fnRender": function (oObj) {
            var select = "";
            if ("otherwise" == oObj.aData.conditionSymbol) {
                select = '<select id="conditionSymbol_select" name="conditionSymbol_select" class="span10" readOnly>';
                select = select + '<option value="otherwise" selected = "true">otherwise</option>';
                select = select + '</select>';
            } else {
                select = '<select id="conditionSymbol_select" name="conditionSymbol_select" class="span10" onblur="Editorial.Flow.processDesign.changeCondition(\'' + oObj.oSettings.sAjaxSource + '\', \'' + oObj.aData.id + '\', this.value)">';
                if ("1" == oObj.aData.conditionSymbol) {
                    select = select + '<option value="1" selected = "true">=</option>';
                } else {
                    select = select + '<option value="1">=</option>';
                }
                if ("2" == oObj.aData.conditionSymbol) {
                    select = select + '<option value="2" selected = "true">!=</option>';
                } else {
                    select = select + '<option value="2">!=</option>';
                }
                if ("3" == oObj.aData.conditionSymbol) {
                    select = select + '<option value="3" selected = "true"><</option>';
                } else {
                    select = select + '<option value="3"><</option>';
                }
                if ("4" == oObj.aData.conditionSymbol) {
                    select = select + '<option value="4" selected = "true">></option>';
                } else {
                    select = select + '<option value="4">></option>';
                }
                if ("5" == oObj.aData.conditionSymbol) {
                    select = select + '<option value="5" selected = "true"><=</option>';
                } else {
                    select = select + '<option value="5"><=</option>';
                }
                if ("6" == oObj.aData.conditionSymbol) {
                    select = select + '<option value="6" selected = "true">>=</option>';
                } else {
                    select = select + '<option value="6">>=</option>';
                }
                if ("7" == oObj.aData.conditionSymbol) {
                    select = select + '<option value="7" selected = "true"><<</option>';
                } else {
                    select = select + '<option value="7"><<</option>';
                }
                if ("8" == oObj.aData.conditionSymbol) {
                    select = select + '<option value="8" selected = "true"><=<</option>';
                } else {
                    select = select + '<option value="8"><=<</option>';
                }
                if ("9" == oObj.aData.conditionSymbol) {
                    select = select + '<option value="9" selected = "true"><<=</option>';
                } else {
                    select = select + '<option value="9"><<=</option>';
                }
                if ("10" == oObj.aData.conditionSymbol) {
                    select = select + '<option value="10" selected = "true"><=<=</option>';
                } else {
                    select = select + '<option value="10"><=<=</option>';
                }
                select = select + '</select>';
            }
            return select;
        }
    },
    {
        "sTitle": "值",
        "mData": null,
        "aTargets": [ -1 ],
        // 自定义列的样式
        "fnRender": function (oObj) {
            var text = "";
            if ("" == oObj.aData.conditionSymbol || "1" == oObj.aData.conditionSymbol || "2" == oObj.aData.conditionSymbol || "3" == oObj.aData.conditionSymbol || "4" == oObj.aData.conditionSymbol || "5" == oObj.aData.conditionSymbol || "6" == oObj.aData.conditionSymbol) {
                text = '<input type="text" id="conditionValue_text" name="conditionValue_text" value="" class="span6"/>';
            }
            if ("7" == oObj.aData.conditionSymbol || "8" == oObj.aData.conditionSymbol || "9" == oObj.aData.conditionSymbol || "10" == oObj.aData.conditionSymbol) {
                text = text + '<input type="text" id="conditionValue_text" name="conditionValue_text" value="" class="span3"/>';
                text = text + '-';
                text = text + '<input type="text" id="conditionValue_text" name="conditionValue_text" value="" class="span3"/>';
            }
            if ("otherwise" == oObj.aData.conditionSymbol) {
                text = '<input type="text" id="conditionValue_text" name="conditionValue_text" value="otherwise" class="span6" readOnly/>';
            }
            return text;
        }
    },
    {
        "sTitle": "后置流程名称",
        "mData": null,
        "fnRender": function (oObj) {
            var select = '<select id="nextTask_select" name="nextTask_select" class="span10">';
            for (var i = 0; i < taskMap.keys().length; i++) {
                select = select + '<option value="' + taskMap.keys()[i] + '">' + taskMap.keys()[i] + '</option>';
            }
            select = select + '<option value="end">结束</option>';
            select = select + '</select>';
            //var hiddenId = '<input type="hidden" id="transitionId_hidden" name="transitionId_hidden" value="' + oObj.aData.id + '"/>';
            //var hiddenName = '<input type="hidden" id="transitionName_hidden" name="transitionName_hidden" value="' + oObj.aData.nextTransitionName + '"/>';
            return select;
        }
    }
];

Editorial.Flow.processDesign.retrieveCacheData = function (sSource, aoData, fnCallback) {
    fnCallback(dataTableArray[sSource]);
};

Editorial.Flow.processDesign.selectField = function () {
    var url = $('#ctx').val() + "/pages/fdesign/form/dicIndex";
    var commonModalCss = {
        "width": "850px",
        "height": "500px"
    };
    var commonModalBodyCss = {
        "max-height": "800px"
    };
    openCommonModalInFrame(url, commonModalCss, commonModalBodyCss);
};

Editorial.Flow.processDesign.updateField = function (jsonObj, context) {
    $(context).contents().find("#taskField").val(jsonObj.code);
    $(context).contents().find("#taskFieldHidden").val(JSON.stringify(jsonObj.dicMap));
    $(context).contents().find("#taskDisplayFieldHidden").val(jsonObj.display);
};

Editorial.Flow.processDesign.clearForm = function () {
    $("#taskName").val("");
    $("#taskUrl").val("");
    $("#taskAssigneeFlag").val("");
    $("#taskAssignee").val("");
    $("#taskStartFlag").val("");
    //$("#taskEndFlag").val("");
    $("#taskField").val("");
    $("#taskFieldHidden").val("");
    $("#taskDisplayFieldHidden").val("");
};

Editorial.Flow.processDesign.addObj = function (jsonObj, context) {
    $.ajax({
        "dataType": 'json',
        "type": "POST",
        "url": $('#ctx').val() + "/pages/ftask/form/findTaskById?"+jsonObj+"&productType="+$('#productType').val(),
        "cache": false,
        "success": function (response) {
            response.taskList.forEach(function(task,index){
                console.log("-------000000--------");
                console.log(task);
                console.log("-------111111------")
                console.log(index);
                console.log("--------222222-------")
                var taskData = {
                    id:task.id,
                    name: task.name,
                    url: task.url,
                    taskAssigneeFlag: task.taskAssigneeFlag,
                    assignee: task.assignee,
                    startFlag: task.startFlag,
                    //endFlag : $("#taskEndFlag").val(),
                    field: task.field,
                    display:task.display,
                    joinNum:task.joinNum
                };
                console.log(task.dicMap);
                Editorial.Flow.processDesign.addTaskDiv(taskData,task.dicMap);

            });

        },
        "error": function (response) {

        }
    });


};
Editorial.Flow.processDesign.addTaskDiv = function (taskData,dicMap) {

    var index;
    if (dataTableArray.length != 0) {
        index = dataTableArray.length;
    } else {
        index = 0;
    }

    // 将新添加的Node信息加入dataTableArray中
    var temp = {
        "aaData": [],
        "iTotalDisplayRecords": 0,
        "iTotalRecords": 0
    };

    // 将表单的数据加入到Node中

    // 将新添加的Task加入到taskMap中
    taskMap.put(taskData.name, taskData);
    var taskFieldHidden = JSON.stringify(dicMap);
    var taskDisplayFieldHidden = taskData.display;

    // 下拉框
    if ("select" == taskDisplayFieldHidden) {
        var nextObj = JSON.parse(taskFieldHidden);

        for (transition in nextObj) {
            var nextTaskData = {
                id: transition,
                nextTransitionName: nextObj[transition]
            };
            temp.aaData.push(nextTaskData);
        }
        dataTableArray.push(temp);

    }

    // 文本框
    if ("text" == taskDisplayFieldHidden ) {
        var nextTaskData = {
            id: "otherwise",
            conditionSymbol: "otherwise",
            conditionValue: "otherwise",
            nextTransitionName: ""
        };
        temp.aaData.push(nextTaskData);
        dataTableArray.push(temp);
    }

    //
    if ("" == taskDisplayFieldHidden) {
        var nextTaskData = {
            id: "otherwise",
            conditionSymbol: "otherwise",
            conditionValue: "otherwise",
            nextTransitionName: ""
        };
        temp.aaData.push(nextTaskData);
        dataTableArray.push(temp);
    }

    // 创建DataTable Html代码
    var html = Editorial.Flow.processDesign.createDataTableHtml(index, taskData);
    dataTableHtmlArray.push(html);


    $("#content").empty();
    // 重新刷新content中的html代码
    for (var i = 0; i < dataTableHtmlArray.length; i++) {
        var html = dataTableHtmlArray[i];
        var display = "";
        var textValue = 'id="taskDisplayFieldHidden_' + i + '" value="text"';
        var selectValue = 'id="taskDisplayFieldHidden_' + i + '" value="select"';
        if (html.indexOf(textValue) > 0) {
            display = "text";
        }
        if (html.indexOf(selectValue) > 0) {
            display = "select";
        }
        $("#content").append(dataTableHtmlArray[i]);
        // 循环渲染所有DataTable的JS代码
        Editorial.Flow.processDesign.createDataTable(i, display);
    }

};
Editorial.Flow.processDesign.addProcessDiv = function (jsonObj, context) {
//    alert(jsonObj);
    $.ajax({
        "dataType": 'json',
        "type": "POST",
        "url": $('#ctx').val() + "/pages/fprocess/form/findProcessById?id=" + jsonObj,
        "cache": false,
        "success": function (response) {
            var taskArray = response.taskList;
            for(var i = 0 ; i < taskArray.length ; i++){
                var taskData = {
                    id:taskArray[i].id,
                    name: taskArray[i].name,
                    url: taskArray[i].url,
                    taskAssigneeFlag: taskArray[i].taskAssigneeFlag,
                    assignee: taskArray[i].assignee,
                    startFlag: taskArray[i].startFlag,
                    field: taskArray[i].field,
                    display: taskArray[i].display,
                    transition:taskArray[i].transitionList
                };
                Editorial.Flow.processDesign.addTaskInProcess(taskData);
            }


        },
        "error": function (response) {

        }
    });

}
Editorial.Flow.processDesign.addTaskInProcess = function (taskData) {
    var index;
    if (dataTableArray.length != 0) {
        index = dataTableArray.length;
    } else {
        index = 0;
    }

    // 将新添加的Node信息加入dataTableArray中
    var temp = {
        "aaData": [],
        "iTotalDisplayRecords": 0,
        "iTotalRecords": 0
    };

    // 将表单的数据加入到Node中

    // 将新添加的Task加入到taskMap中
    taskMap.put(taskData.name, taskData);
    var taskFieldHidden = JSON.stringify(taskData.transition);
    var taskDisplayFieldHidden = taskData.display;

    // 下拉框
    if ("select" == taskDisplayFieldHidden) {
        var nextObj = JSON.parse(taskFieldHidden);
        for (transition in nextObj) {
            var nextTaskData = {
                id: transition,
                nextTransitionName: nextObj[transition].name
            };
            temp.aaData.push(nextTaskData);
        }
        dataTableArray.push(temp);
    }

    // 文本框
    if ("text" == taskDisplayFieldHidden) {
        var nextTaskData = {
            id: "otherwise",
            conditionSymbol: "otherwise",
            conditionValue: "otherwise",
            nextTransitionName: ""
        };
        temp.aaData.push(nextTaskData);
        dataTableArray.push(temp);
    }
    if ("" == taskDisplayFieldHidden) {
        var nextTaskData = {
            id: "otherwise",
            conditionSymbol: "otherwise",
            conditionValue: "otherwise",
            nextTransitionName: ""
        };
        temp.aaData.push(nextTaskData);
        dataTableArray.push(temp);
    }

    // 创建DataTable Html代码
    var html = Editorial.Flow.processDesign.createDataTableHtml(index, taskData);
    dataTableHtmlArray.push(html);


    $("#content").empty();
    // 重新刷新content中的html代码
    for (var i = 0; i < dataTableHtmlArray.length; i++) {
        var html = dataTableHtmlArray[i];
        var display = "";
        var textValue = 'id="taskDisplayFieldHidden_' + i + '" value="text"';
        var selectValue = 'id="taskDisplayFieldHidden_' + i + '" value="select"';
        if (html.indexOf(textValue) > 0) {
            display = "text";
        }
        if (html.indexOf(selectValue) > 0) {
            display = "select";
        }
        $("#content").append(dataTableHtmlArray[i]);
        // 循环渲染所有DataTable的JS代码
        Editorial.Flow.processDesign.createDataTable(i, display);
    }


    Editorial.Flow.processDesign.clearForm();
}

Editorial.Flow.processDesign.deploy = function () {
    console.log("deploy");
    var jbpmTaskList = new Array();
    for (var i = 0; i < taskMap.keys().length; i++) {
        var jbpmTask = taskMap.get(taskMap.keys()[i]);

        var nextTransitionIdArray = [];
        var nextTransitionNameArray = [];

        var conditionSymbolSelectArray = [];
        var conditionValueTextArray = [];
        var conditionExprArray = [];

        // 后置任务
        var nextTaskSelect = $('select[id^="nextTask_select"]', tableArray[i].fnGetNodes()).serialize();
        nextTaskSelect = nextTaskSelect.replace(new RegExp('nextTask_select=', 'g'), '');
        var nextTaskArray = decodeURIComponent(nextTaskSelect, true).split('&');
        console.log("nextTaskArray:" + nextTaskArray);
        if ("select" == jbpmTask.display) {
            var transitionIdHidden = $('input[id^="transitionId_hidden"]', tableArray[i].fnGetNodes()).serialize();
            var transitionNameHidden = $('input[id^="transitionName_hidden"]', tableArray[i].fnGetNodes()).serialize();
            transitionIdHidden = transitionIdHidden.replace(new RegExp('transitionId_hidden=', 'g'), '');
            nextTransitionIdArray = transitionIdHidden.split('&');
            transitionNameHidden = transitionNameHidden.replace(new RegExp('transitionName_hidden=', 'g'), '');
            nextTransitionNameArray = decodeURIComponent(transitionNameHidden, true).split('&');
        }
        if ("text" == jbpmTask.display) {
            var conditionSymbolSelect = $('select[id^="conditionSymbol_select"]', tableArray[i].fnGetNodes()).serialize();
            var conditionValueText = $('input[id^="conditionValue_text"]', tableArray[i].fnGetNodes()).serialize();
            conditionSymbolSelect = conditionSymbolSelect.replace(new RegExp('conditionSymbol_select=', 'g'), '');
            conditionSymbolSelectArray = conditionSymbolSelect.split('&');
            conditionValueText = conditionValueText.replace(new RegExp('conditionValue_text=', 'g'), '');
            conditionValueTextArray = decodeURIComponent(conditionValueText, true).split('&');

            var count = 0;
            conditionSymbolSelectArray.forEach(function (conditionSymbol, index) {
                var conditionOper = "";
                if ("otherwise" == conditionSymbol) {
                    conditionOper = 'otherwise';
                }
                if ("1" == conditionSymbol) {
                    conditionOper = 'variable = ' + conditionValueTextArray[index + count];
                }
                if ("2" == conditionSymbol) {
                    conditionOper = 'variable != ' + conditionValueTextArray[index + count];
                }
                if ("3" == conditionSymbol) {
                    conditionOper = 'variable < ' + conditionValueTextArray[index + count];
                }
                if ("4" == conditionSymbol) {
                    conditionOper = 'variable > ' + conditionValueTextArray[index + count];
                }
                if ("5" == conditionSymbol) {
                    conditionOper = 'variable <= ' + conditionValueTextArray[index + count];
                }
                if ("6" == conditionSymbol) {
                    conditionOper = 'variable >= ' + conditionValueTextArray[index + count];
                }
                if ("7" == conditionSymbol) {
                    conditionOper = conditionValueTextArray[index + count] + ' < variable < ' + conditionValueTextArray[index + count + 1];
                    count = count + 1;
                }
                if ("8" == conditionSymbol) {
                    conditionOper = conditionValueTextArray[index + count] + ' <= variable < ' + conditionValueTextArray[index + count + 1];
                    count = count + 1;
                }
                if ("9" == conditionSymbol) {
                    conditionOper = conditionValueTextArray[index + count] + ' < variable <= ' + conditionValueTextArray[index + count + 1];
                    count = count + 1;
                }
                if ("10" == conditionSymbol) {
                    conditionOper = conditionValueTextArray[index + count] + ' <= variable <= ' + conditionValueTextArray[index + count + 1];
                    count = count + 1;
                }
                conditionExprArray.push(conditionOper);
            });
        }
        if ("" == jbpmTask.display) {
            var conditionSymbolSelect = $('select[id^="conditionSymbol_select"]', tableArray[i].fnGetNodes()).serialize();
            var conditionValueText = $('input[id^="conditionValue_text"]', tableArray[i].fnGetNodes()).serialize();
            conditionSymbolSelect = conditionSymbolSelect.replace(new RegExp('conditionSymbol_select=', 'g'), '');
            conditionSymbolSelectArray = conditionSymbolSelect.split('&');
            conditionValueText = conditionValueText.replace(new RegExp('conditionValue_text=', 'g'), '');
            conditionValueTextArray = decodeURIComponent(conditionValueText, true).split('&');

            var count = 0;
            conditionSymbolSelectArray.forEach(function (conditionSymbol, index) {
                var conditionOper = "";
                if ("otherwise" == conditionSymbol) {
                    conditionOper = 'otherwise';
                }
                if ("1" == conditionSymbol) {
                    conditionOper = 'variable = ' + conditionValueTextArray[index + count];
                }
                if ("2" == conditionSymbol) {
                    conditionOper = 'variable != ' + conditionValueTextArray[index + count];
                }
                if ("3" == conditionSymbol) {
                    conditionOper = 'variable < ' + conditionValueTextArray[index + count];
                }
                if ("4" == conditionSymbol) {
                    conditionOper = 'variable > ' + conditionValueTextArray[index + count];
                }
                if ("5" == conditionSymbol) {
                    conditionOper = 'variable <= ' + conditionValueTextArray[index + count];
                }
                if ("6" == conditionSymbol) {
                    conditionOper = 'variable >= ' + conditionValueTextArray[index + count];
                }
                if ("7" == conditionSymbol) {
                    conditionOper = conditionValueTextArray[index + count] + ' < variable < ' + conditionValueTextArray[index + count + 1];
                    count = count + 1;
                }
                if ("8" == conditionSymbol) {
                    conditionOper = conditionValueTextArray[index + count] + ' <= variable < ' + conditionValueTextArray[index + count + 1];
                    count = count + 1;
                }
                if ("9" == conditionSymbol) {
                    conditionOper = conditionValueTextArray[index + count] + ' < variable <= ' + conditionValueTextArray[index + count + 1];
                    count = count + 1;
                }
                if ("10" == conditionSymbol) {
                    conditionOper = conditionValueTextArray[index + count] + ' <= variable <= ' + conditionValueTextArray[index + count + 1];
                    count = count + 1;
                }
                conditionExprArray.push(conditionOper);
            });
        }

        jbpmTask.transitionList = new Array();
        for (var j = 0; j < nextTaskArray.length; j++) {
            var transition = null;
            if ("select" == jbpmTask.display) {
                transition = {
                    id: nextTransitionIdArray[j],
                    name: nextTransitionNameArray[j],
                    expr: "",
                    nextTaskName: nextTaskArray[j]
                };
            }
            if ("text" == jbpmTask.display) {
                transition = {
                    id: nextTransitionIdArray[j],
                    name: "",
                    expr: conditionExprArray[j],
                    nextTaskName: nextTaskArray[j]
                };
            }
            if ("" == jbpmTask.display) {
                transition = {
                    id: nextTransitionIdArray[j],
                    name: "",
                    expr: conditionExprArray[j],
                    nextTaskName: nextTaskArray[j]
                };
            }
            console.log("transition:" + JSON.stringify(transition));
            jbpmTask.transitionList.push(transition);
        }
        jbpmTaskList.push(jbpmTask);
    }
    $.ajax({
        "dataType": 'json',
        "contentType": "application/json",
        "type": "POST",
        "url": $('#ctx').val() + "/pages/fdesign/form/deploy",
        "cache": false,
        "data": JSON.stringify({
            "taskList": jbpmTaskList,
            "productType": $('#productType').val()
        }),
        "success": function (response) {
            if (response.isSuccess == "true") {
                ajaxAlertSuccessMsg(response.msg, true);
                refreshFrameDataTableInLayer('Editorial.JBPM.ProcessDefine.oTable1');
                autoCloseCommonModal(5);
            } else {
                ajaxAlertSuccessMsg(response.msg, true);
            }
        },
        "error": function (response) {
            alert("error");
            alert(response);
            alert(response.responseText);
        }
    });
};

Editorial.Flow.processDesign.selectTaskAssigneeFlag = function (value) {
    if (value != "") {
        if (value == "1") {
            $("#taskAssignee").removeAttr('disabled');
        } else {
            $("#taskAssignee").val("");
            $("#taskAssignee").attr('disabled', "true");
        }
    }
};