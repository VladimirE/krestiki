

angular.module('tictac', []);

angular.module('tictac')
    .controller('MainController', function($scope) {
        $scope.player = ['Ai','player'];
        $scope.start = function (){
            $scope.winner ='';
            $scope.cells =[];
            $scope.endGame=false;
            for (var i = 0; i < 9; i++) {
                $scope.cells.push({
                    player: null,
                    id: i
                })
            }
        }
        $scope.start();
        $scope.move = function(cell, player){
            if(cell.player !== null){
                return false;
            }
            $scope.player.reverse();
            cell.player=player;
            console.info(_.where($scope.cells, { 'player': null}).length===0);
           if(_.where($scope.cells, { 'player': null}).length===0){
               if (checkEnd($scope.cells)){
                   winnerName (player);
               } else {
                   $scope.endGame = true;
                   $scope.winner = "Ничья";
               }
               return false
           }
            if (checkEnd($scope.cells)){
                winnerName (player);
            } else {
                if (player==='player'){
                    aiMove();
                }
            }
        }
        function aiMove(){
            var id = Math.floor(Math.random() * 9);
            if ($scope.cells[id].player===null ){
                $scope.move($scope.cells[id], 'ai');
            } else{
                aiMove();
            }
        }
        function winnerName (win){
            $scope.endGame = true;
            if(win === 'player'){
                $scope.winner ="Вы выиграли";
            }else{
                $scope.winner ="Вы проиграли";
            }
        }
        function checkEnd(t) {
            console.info(t[0].player=='player' && t[1].player=='player' && t[2].player=='player');
            if (t[0].player=='ai' && t[1].player=='ai' && t[2].player=='ai' || t[0].player=='player' && t[1].player=='player' && t[2].player=='player')  return true;
            if (t[3].player=='ai' && t[4].player=='ai' && t[5].player=='ai' || t[3].player=='player' && t[4].player=='player' && t[5].player=='player')  return true;
            if (t[6].player=='ai' && t[7].player=='ai' && t[8].player=='ai' || t[6].player=='player' && t[7].player=='player' && t[8].player=='player')  return true;
            if (t[0].player=='ai' && t[3].player=='ai' && t[6].player=='ai' || t[0].player=='player' && t[3].player=='player' && t[6].player=='player')  return true;
            if (t[1].player=='ai' && t[4].player=='ai' && t[7].player=='ai' || t[1].player=='player' && t[4].player=='player' && t[7].player=='player')  return true;
            if (t[2].player=='ai' && t[5].player=='ai' && t[8].player=='ai' || t[2].player=='player' && t[5].player=='player' && t[8].player=='player')  return true;
            if (t[0].player=='ai' && t[4].player=='ai' && t[8].player=='ai' || t[0].player=='player' && t[4].player=='player' && t[8].player=='player')  return true;
            if (t[2].player=='ai' && t[4].player=='ai' && t[6].player=='ai' || t[2].player=='player' && t[4].player=='player' && t[6].player=='player')  return true;
          //  if(t[0].player!==null && t[1].player!==null && t[2].player!==null && t[3].player!==null && t[4].player!==null && t[5].player!==null && t[6].player!==null && t[7].player!==null && t[8].player!==null) return true;
        }


    })
    .directive('cell', function() {
        return {
            template: 'Name:    {{customer.name}} Address: {{customer.address}}'
        };
    });