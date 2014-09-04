'use strict';

angular.module('ya.treeview.breadcrumbs', [])
    .directive('yaTreeviewBreadcrumbs', function () {
        return {
            restrict: 'AE',
            replace: false,
            scope: {
                context: '=yaContext'
            },
            templateUrl: 'lib/templates/ya-treeview-breadcrumbs/breadcrumbs.tpl.html',
            controller: function($scope) {
                $scope.navigateToCrumb = function(node) {
                    $scope.context.selectedNode = node;
                };

                $scope.$watch('context.selectedNode', function(node) {
                    $scope.crumbs = [node];
                    while(node && node.$parent) {
                        node = node.$parent;
                        $scope.crumbs.unshift(node);
                    }
                });
            }
        };
    });