/**
 * Created by kolesnikov-a on 05/04/2017.
 */
superApp.factory('Video', ['API_ENDPOINT', function(API_ENDPOINT){

	class Video {

		constructor(videoData){
			if (videoData){

			} else {
				this.name = 'Un video';
				this.description = 'Descripción del video';
				this.id = 1;
			}
		}

		set id(videoId){
			this.videoId = videoId;
			this.srcPath = `${API_ENDPOINT}/video/${videoId}`;
		}

		get id(){
			return this.videoId;
		}

	}

	return Video;

}]);