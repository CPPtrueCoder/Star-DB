import React,{Component} from "react";
import Spinner from "../loader";
import ErrorIndicator from "../error-indicator";
export const withData = (View, getData) => {
	return class extends Component {
		
		state = {
			itemList: null
		};
		
		componentDidMount() {
			
			getData ()
				.then ((data) => {
					this.setState ({
						data
					});
				});
		}
		
		render() {
			
			const {data} = this.state;
			if ( !data) {
				return <Spinner/>
			}
			
			return <View {...this.props} data={data}/>
		}
	};
};
export default withData()
