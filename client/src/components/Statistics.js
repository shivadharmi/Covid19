import React, { Component } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import './Statistics.css';

class Statistics extends Component {
	state = {
		chartData: {
			labels: ['Active Cases', 'Dead', 'Recovered'],
			datasets: [
				{
					label: 'Total',
					data: [],
					backgroundColor: ['blue', 'red', 'green']
				}
			]
		},
		tableData: [],
		searchValue:"",
		tableStore:[]
	};
	componentDidMount() {
		axios.get('https://coronavirus-19-api.herokuapp.com/all').then(response => {
			var ar = [
				response.data.cases,
				response.data.deaths,
				response.data.recovered
			];
			var temp = this.state.chartData;
			temp.datasets[0].data = ar;
			this.setState({ chartData: temp });
		});

		axios
			.get('https://coronavirus-19-api.herokuapp.com/countries')
			.then(response => {
				this.setState({ tableData: response.data,
				tableStore:response.data });
			});
	}
	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right'
	};

	onSearchChange = (e) => {
		var s = e.target.value
		var ar = this.state.tableStore.filter(res=>res.country.toLowerCase().startsWith(s.toLowerCase()))
		this.setState({
				searchValue:e.target.value,
				tableData:ar
			})
	}

	allCountryData() {
		return this.state.tableData.map(x => {
			return (
				<tr>
					<td>{x.country}</td>
					<td>{x.cases}</td>
					<td>{x.todayCases}</td>
					<td>{x.deaths}</td>
					<td>{x.todayDeaths}</td>
					<td>{x.recovered}</td>
					<td>{x.active}</td>
					<td>{x.critical}</td>
					<td>{x.casesPerOneMillion}</td>
				</tr>
			);
		});
	}
	render() {
		console.log(this.state.tableData);
		return (
			<div className='fx'>
				<div className='card-1'>
					<Pie
						data={this.state.chartData}
						options={{
							title: {
								display: 'this.props.displayTitle',
								text: 'Statistics Around The World',
								fontSize: 25
							},
							legend: {
								display: this.props.displayLegend,
								position: this.props.legendPosition
							},
							responsive: true,
							maintainAspectRatio: false
						}}
						width={700}
						height={300}
					/>
				</div>
				
				<br />	
				<div className="search">
				<label className="searchLabel">Country :  </label>
				<input type="text" class="searchBox" placeholder="Search Country" 
				value={this.state.searchValue} onChange={this.onSearchChange}/>
				</div>

				<div className='table-container'>
					<div className='card-1'>
						<table>
							<caption>Statistics of all countries</caption>
							<thead>
								<tr>
									<th>country</th>
									<th>cases</th>
									<th>TC</th>
									<th>deaths</th>
									<th>TD</th>
									<th>recovered</th>
									<th>active</th>
									<th>critical</th>
									<th>casesPer1M</th>
								</tr>
							</thead>
							<tbody>{this.allCountryData()}</tbody>
						</table>
					</div>
				</div>

			</div>
		);
	}
}

export default Statistics;
