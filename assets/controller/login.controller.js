jQuery.sap.require("assets/controller/AnaKontrol");
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
], function (Controller, JSONModel, MessageBox, MessageToast) {
	"use strict";

AnaKontrol.extend("assets.controller.login", {
    onInit : function() {
    	var oData = {
    		Object:[
    		{test:"test1"},
    		{test:"test2"}
    		]
    	};

         var oModel = new JSONModel(oData);
         var tablo = this.getView().byId('mesajlar');
         tablo.setModel(oModel);

         

    },



    sadecesayi(oEvent) {
		var kontrol = this.InputKontrol(oEvent,'sayi',0);
		if(kontrol){
			MessageBox.alert("Şifre Sadece Sayılardan Oluşabilir");
			this.byId(oEvent.getParameter("id")).setValue("");
		}
	},
	hatamesaj: function(id,mesaj){
		var mesaj = mesaj;
		var text = this.getView().byId(id);
		console.log(mesaj);
		var oModel = new JSONModel(mesaj);
		text.setModel(oModel);
	},
	onSubmit: function(){
		var email = this.getView().byId('emailInput').getValue();

		var sifre = this.getView().byId('sifreinput').getValue();
	
		if(this.InputKontrol(email,'bos',1) || this.InputKontrol(sifre,'bos',1)){
			MessageBox.alert("Email veya Şifre Boş Bırakılamaz");	
			return;
		}
		var request = this.Postreq("validator/login",{"email":email,"sifre":sifre});
		
		
		if(!request.oData.durum){
			MessageBox.alert("Sistemsel Bir hata oluştu Tekrar Deneyiniz");	
		}
		if(!request.oData.data.durum){
			var mesaj = request.oData.data.mesaj;
			this.hatamesaj('hatamesaj',mesaj);
		}else{	
			window.location.replace("/mesajgonder");
		}
		
	}


});
});







