jQuery.sap.require("assets/controller/AnaKontrol");
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
	"use strict";

AnaKontrol.extend("assets.controller.tablo", {
    onInit : function() {

    	var request = this.Postreq("validator/mesajlar",{"status":'1'});
         var oModel = new JSONModel(request.oData);
         var tablo = this.getView().byId('mesajlar');
         tablo.setModel(oModel);

         

    },




});
});






