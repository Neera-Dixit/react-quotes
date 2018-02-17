import Axios from 'axios';

const util = {
 
 	getRequest : (request) => {
 		return new Promise((resolve, reject) => {
 			Axios.get(`/mocks/${request.URL}`)
	 		.then(function (response) {
			    console.log(response);
			    resolve(response);
			})
			.catch(function (error) {
			    console.log(error);
			    reject(error);
			});
 		});
 	},

 	postRequest : (request) => {
 		return new Promise((resolve, reject) => {
 			Axios.post(`/mocks/${request.URL}`)
	 		.then(function (response) {
			    console.log(response);
			    resolve(response);
			})
			.catch(function (error) {
			    console.log(error);
			    reject(error);
			});
 		});
 	}
};

export default util;