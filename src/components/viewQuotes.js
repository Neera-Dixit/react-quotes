import React,{Component} from 'react';
import Util from '../util';
import ReactTable from './reactTableComponent';

export default class ViewQuotes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes : []
		}
	}

	componentDidMount = () => {
		Util.getRequest({
			URL : 'quotes.json'
		})
		.then((responseData)=>{
			const _quotes = responseData.data.quotes;
			this.setState({quotes: _quotes});
		})
		.catch((err)=>{
			console.log(err);
		});
	}

	render() {

		const {quotes} = this.state;

		const _quotes = quotes.map((quote,key) => (
			<h1 key={key}> {quote.description} - {quote.author}</h1>
		));

		 const columns = [
			 {
	    		Header: 'ID',
	    		accessor: 'id'
	  		},
	  		{
	  			Header: 'Author',
	    		accessor: 'author'
	  		},
	  		{
	  			Header: 'Date',
	    		accessor: 'publishedDate'
	  		},
	  		{
	  			Header: 'description',
	    		accessor: 'description'	
	  		}
	  	];

		return (
			<div>
				<h1>Quotes!</h1>
				<ReactTable data={quotes} columns={columns} className="-striped" pageSize={5}/>
			</div>
		)
	}
}
