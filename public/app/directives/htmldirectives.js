'use strict';

angular.module('htmlDirectivesModule', [])
	.directive(
			'formularios',
			function() {
				return {
					restrict : 'E',
					replace : true,
					scope: {
						class: '@',
						type:'@',
						label: '@',
						model: '=',
						name: '@',
						placeholder: '@',
					},
					template : 	'<div class="{{class}}">\
									<div class="form-group"> \
								      <label>{{label}}</label>\
								      <input type="{{type}}" class="form-control" name="{{name}}" placeholder={{placeholder}} ng-model="model">\
									</div>\
								</div>'					
				}
			})
			
	.directive('textAreaDirective', function() { 
		return { 
			restrict : 'E', 
			replace : true, 
			scope: { 
				class: '@', 
				rows:'@',
				label: '@',
				model: '=',
				name: '@',
				placeholder: '@',
				}, 
				template : '<div class="{{class}}">\
					         	<div class="form-group">\
					                <label>{{label}}</label>\
					                <textarea rows="{{rows}}" class="form-control" name="{{name}}" ng-model="model" placeholder={{placeholder}}></textarea>\
				    			</div>\
							</div>'	
					
					 
		}
	})

	.directive('botones', function() {
		return {
			restrict : 'E',
			replace : true,
			scope: {
				click: '=',
				class: '@', 
				show: '=',
				value: '@',
			},			
			template : '<input type="button" class="{{class}}" ng-click="click" ng-show="show" value=={{value}}>'
		}
	})
