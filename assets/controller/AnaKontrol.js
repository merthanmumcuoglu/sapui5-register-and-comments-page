sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/SimpleType",
	"sap/ui/model/ValidateException",
	"sap/ui/core/Core",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
], function (Controller, JSONModel, SimpleType,ValidateException, Core, MessageBox, MessageToast) {
	"use strict";
sap.ui.core.mvc.Controller.extend("AnaKontrol", {

	InputKontrol: function(oEvent, status,value = 0){
        
        var deger = !value ? oEvent.getParameter("newValue"): oEvent;
        
    	if(status == 'sayi'){
    		if(isNaN(deger)){
    			return 1;
    		}else{
                return 0;
            }
    	}else if(status == "bos"){
            if(deger == ""){
                return 1;
            }
        }

    	return 0;
    },


    Postreq: function(url,data,result = 1){
        var ret = {};
        var len;
        $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            async : false,
            data: $.param(data),
            success: function(succ){
                ret.data = succ
                ret.durum = 1;
            },
            error: function(e){
                ret.durum = 0;
            }
        });
        len = new JSONModel(ret);
        return len;
    },

    hatamesaj: function(id,mesaj){
        var mesaj = mesaj;
        var text = this.getView().byId(id);
        console.log(mesaj);
        var oModel = new JSONModel(mesaj);
        text.setModel(oModel);
    }
    //Further functions ....
});
});