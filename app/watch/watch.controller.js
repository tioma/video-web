/**
 * Created by kolesnikov-a on 07/04/2017.
 */
superApp.controller('watchCtrl', ['Video', '$stateParams', function(Video, $stateParams){

	this.selectedVideo = new Video();

}]);