'use strict';

angular.module('demo', ['notifications']).
  controller('MainCtrl', function($scope, $notification, $timeout){
    console.log('main ctrl started');
    $timeout(function(){
      $notification.success('Notifications Demo', 'The notifications demo is working!');
    }, 500);

    $scope.gimmeHTML5 = function(){
      $notification.enableHtml5Mode();
    };

    $scope.makeInfo = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.info($scope.notiTitle, $scope.notiText, null, $scope.notiDuration);
        $scope.notiText = '';
        $scope.notiTitle = '';
        $scope.notiDuration = 5000;
      }
    };

    $scope.makeWarning = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.warning($scope.notiTitle, $scope.notiText, null, $scope.notiDuration);
        $scope.notiText = '';
        $scope.notiTitle = '';
        $scope.notiDuration = 5000;
      }
    };

    $scope.makeError = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.error($scope.notiTitle, $scope.notiText, null, $scope.notiDuration);
        $scope.notiText = '';
        $scope.notiTitle = '';
        $scope.notiDuration = 5000;
      }
    };

    $scope.makeSuccess = function(){
      if($scope.notiTitle !== '' || $scope.notiText !== ''){
        $notification.success($scope.notiTitle, $scope.notiText, null, $scope.notiDuration);
        $scope.notiText = '';
        $scope.notiTitle = '';
        $scope.notiDuration = 5000;
      }
    };
  });
