import React,{Component} from 'react';
import ReactTable from 'react-table';

export default class ReactTableComponent extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const {data,columns,className,pageSize} = this.props;

		return (
			<ReactTable data={data} columns={columns} className={className} pageSize={pageSize}/>
		);
	}
}