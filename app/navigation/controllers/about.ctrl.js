angular.module('Navigation')
.controller('AboutCtrl', function($scope) {

  $scope.my_other_number = 20;
  $scope.my_number = 30;

  $scope.my_data_json =
  {
    "tenantId": 1000,
    "eventTypes":
    [
      {
        "name": "event type 1",
        "isOpen": false,
        "displayName": "email received",
        "attributes": [
          {
            "name": "email provider",
            "isOpen": false,
            "values": [
              {"name": "gmail"},
              {"name": "yahoo"},
              {"name": "aol"}
            ]
          },
          {
            "name": "DNS server",
            "isOpen": false,
            "values": [
              {"name": "dns server 1"},
              {"name": "dns server 2"},
              {"name": "dns server 3"}
            ]
          },
          {
            "name": "date",
            "isOpen": false,
            "values": [
              {"name": "March 13, 2015"},
              {"name": "March 28, 2014"},
              {"name": "April 7, 1969"}
            ]
          }
        ]
      },
      {
        "name": "event type 2",
        "isOpen": false,
        "displayName": "purchase",
        "attributes": [
          {
            "name": "item",
            "isOpen": false,
            "values": [
              {"name": "shoes"},
              {"name": "book"},
              {"name": "iPad"}
            ]
          },
          {
            "name": "date",
            "isOpen": false,
            "values": [
              {"name": "Winter 2001"},
              {"name": "Spring 2013"},
              {"name": "Summer 2005"}
            ]
          },
          {
            "name": "customer",
            "isOpen": false,
            "values": [
              {"name": "Ilja"},
              {"name": "Bob"},
              {"name": "David"}
            ]
          }
        ]
      },
      {
        "name": "event type 3",
        "isOpen": false,
        "displayName": "reward received",
        "attributes": [
          {
            "name": "rewardType",
            "isOpen": false,
            "values": [
              {"name": "coupon"},
              {"name": "gift card"},
              {"name": "free hotel room"}
            ]
          },
          {
            "name": "customer",
            "isOpen": false,
            "values": [
              {"name": "Ilja"},
              {"name": "Bob"},
              {"name": "David"}
            ]
          },
          {
            "name": "date",
            "isOpen": false,
            "values": [
              {"name": "Winter 2001"},
              {"name": "Spring 2013"},
              {"name": "Summer 2005"}
            ]
          }
        ]
      }
    ]
  };

  $scope.toggleAttributes = function(index) {
    $scope.my_data_json.eventTypes[index].isOpen = !$scope.my_data_json.eventTypes[index].isOpen;
    console.log(index);
  };

  $scope.toggleValues = function(parentIndex, index) {
    $scope.my_data_json.eventTypes[parentIndex].attributes[index].isOpen = !$scope.my_data_json.eventTypes[parentIndex].attributes[index].isOpen;
    console.log(parentIndex + " " + index);
  };

});
