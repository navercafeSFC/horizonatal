sap.ui.define([
		'sap/ui/Device',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(Device, Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.sfc.horizonatal.controller.App", {

		onInit: function () {
			this.getView().setModel(new JSONModel({
				widthS: (Device.system.phone) ? "2em" : "5em",
				widthM: (Device.system.phone) ? "4em" : "10em",
				widthL: (Device.system.phone) ? "6em" : "15em"
			}));

            // set explored app's demo model on this sample
            //img.json 경로 변경. 
			var oImgModel = new JSONModel(sap.ui.require.toUrl("com/sfc/horizonatal/model/img.json")); 
			this.getView().setModel(oImgModel, "img");
		}
	});

});