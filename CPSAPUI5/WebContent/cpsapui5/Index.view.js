sap.ui.jsview("cpsapui5.Index", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf cpsapui5.Index
	*/ 
	getControllerName : function() {
		return "cpsapui5.Index";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf cpsapui5.Index
	*/ 
	createContent : function(oController) {
		
		var model = new sap.ui.model.json.JSONModel({ 
			  "Tiles":[{ 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/madrid.png", 
			               "title" : "MADRID" 
			          }, 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/cvalenciana.png", 
			               "title" : "COMUNIDAD VALENCIANA" 
			          }, 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/cataluna.png",  
			               "title" : "CATALU�A" 
			          } , 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/andalucia.png",  
			               "title" : "ANDALUC�A" 
			          },
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/castillalamancha.png", 
			               "title" : "CASTILLA LA MANCHA" 
			          }, 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/castillaleon.png", 
			               "title" : "CASTILLA-LE�N" 
			          }, 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/paisvasco.png",  
			               "title" : "PA�S VASCO" 
			          } , 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/aragon.png",  
			               "title" : "ARAG�N" 
			          },
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/galicia.png", 
			               "title" : "GALICIA" 
			          }, 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/islascanarias.png", 
			               "title" : "ISLAS CANARIAS" 
			          }, 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/principadodeasturias.png",  
			               "title" : "PRINCIPADO DE ASTURIAS" 
			          } , 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/andalucia.png",  
			               "title" : "MURCIA" 
			          },
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/navarra.png", 
			               "title" : "NAVARRA" 
			          }, 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/islasbaleares.png", 
			               "title" : "ISLAS BALEARES" 
			          }, 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/extremadura.png",  
			               "title" : "EXTREMADURA" 
			          } , 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/cantabria.png",  
			               "title" : "CANTABRIA" 
			          },
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/larioja.png", 
			               "title" : "LA RIOJA" 
			          }, 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/melilla.png", 
			               "title" : "MELILLA" 
			          }, 
			          { 
			               "icon" : "http://www.carreraspopulares.com/v5-calendario/images/flags/ceuta.png",  
			               "title" : "CEUTA" 
			          }
			          
			          ]
		});
		
 		var Page= new sap.m.Page({
			title: "Selecciona Comunidad"
		});
 		
 		
 	    var container1 = new sap.m.TileContainer({
 	       id : "container"
 	     });
 	   container1.setModel(model);
 	   
 	  var moduleTile = new sap.m.StandardTile({
	      title : '{title}',
	      number:'{press}',
	      info:'{type}', 
		  numberUnit:'{type}',
		  icon:"{icon}"
		});
 	   
 	    container1.bindAggregation("tiles", "/Tiles", moduleTile);
 		
 	    Page.addContent(container1);

 	    return Page;
 	    
 	    
	}

});