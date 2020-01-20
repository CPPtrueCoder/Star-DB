import React,{Component} from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import  './people-page.css'
import SwapiService from "../../services/swapi-service";

export  default class PeoplePage extends Component{
	
	SwapiService = new SwapiService();
	state={
		selectedPerson: 4,
		hasError:false
	};
	componentDidCatch(error, errorInfo) {
	this.setState({
		hasError:true
	})
	}
	
	onPersonSelected = (id) => {
		this.setState ({
			selectedPerson: id
		})
	};
	render() {
		
		if (this.state.hasError){
			return <ErrorIndicator/>
		}
		return(
			<div className="row mb-2">
				<div className="col-md-6">
					<ItemList onItemSelected={this.onPersonSelected}
					          getData={this.SwapiService.getAllPeople}
					          renderItem={({name,gender,birthYear})=>`${name} (${gender}, ${birthYear})`}/>
				</div>
				<div className="col-md-6">
					<PersonDetails personId={this.state.selectedPerson}/>
				</div>
			</div>
		);
	}
}