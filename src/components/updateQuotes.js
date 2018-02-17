import React,{Component} from 'react';
import Util from '../util';

export default class UpdateQuotes extends Component {

	constructor(props) {
		super(props);
	}

	addQuote = (e) => {
		e.preventDefault();
		const _quote = {
			description : this.quote.value,
			author : this.author.value
		};
		/*Util.postQuote(_quote)
		.then((responseData)=>{
			console.log(responseData);
		})
		.catch((err)=>{
			console.log(err);
		});*/
		console.log("Quote Added!");
		this.author.value= '';
		this.quote.value= '';
	}

	render() {
		return (
			<div>	
				<h1>Update Quotes</h1>
				<form onSubmit={this.addQuote}>
					<div>
						<label>Author : </label>
						<input type="text" name="author" ref={(author) => this.author = author} required/>
					</div>
					<div>
						<label>Quote : </label>
						<textarea name="quote" rows="5" cols="35" ref={(quote) => this.quote = quote} required></textarea>
					</div>
					<input type="submit" value="ADD QUOTE!" />
				</form>
			</div>
		)
	}
}

