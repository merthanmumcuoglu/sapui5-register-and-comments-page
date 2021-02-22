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

	InputKontrol: function(oEvent, status){
    	let deger = oEvent.getParameter("newValue");
    	if(status == 'sayi'){
    		if(isNaN(deger)){
    			return 1;
    		}
    	}
    	return 0;
    }


 
    //Further functions ....
});
});