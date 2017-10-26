'use strict';

angular.module('htmlDirectivesModule', [])
	.directive(
			'customerForm',
			function() {
				return {
					restrict : 'E',
					replace : true,
					scope: {
						label: '@',
						model: '=',
						name: '@',
						placeholder: '@',
					},
					template : 	'<div class="col-md-6">\
									<div class="form-group"> \
								      <label>{{label}}</label>\
								      <input type="text" class="form-control" name="{{name}}" placeholder={{placeholder}} ng-model="model">\
									</div>\
								</div>'					
				}
			})
	.directive('buttonCustomer', function() {
		return {
			restrict : 'E',
			replace : true,
			scope: {
				click: '=',
				show: '=',
				value: '@',
			},			
			template : '<input type="button" class="btn btn-info btn-fill pull-right" ng-click="click" ng-show="show" value=={{value}}>'
		}
	})
