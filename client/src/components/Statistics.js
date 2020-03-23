import React, { Component } from 'react';
import axios from 'axios';
import { Pie, Bar } from 'react-chartjs-2';
import './Statistics.css';
// import data from './data';
class Statistics extends Component {
	state = {
		pieChartData: {
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
		searchValue: '',
		tableStore: [],
		barChartData: {
			labels: ['TCC(INDIANS)', 'TCC(FOREIGNER)', 'CURED/DISCHARGED', 'DEATH'],
			datasets: [
				{
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)'
					],
					borderWidth: 1
				}
			]
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			},
			responsive: true,
			maintainAspectRatio: false
		},
		barData: []
	};
	componentDidMount() {
		axios.get('https://coronavirus-19-api.herokuapp.com/all').then(response => {
			var ar = [
				response.data.cases,
				response.data.deaths,
				response.data.recovered
			];
			var temp = this.state.pieChartData;
			temp.datasets[0].data = ar;
			this.setState({ pieChartData: temp });
		});

		axios
			.get('https://coronavirus-19-api.herokuapp.com/countries')
			.then(response => {
				console.log(response.data);
				this.setState({ tableData: response.data, tableStore: response.data });
			});

		axios.get('api//data/barData').then(response => {
			this.setState({ barData: response.data });
		});
	}
	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right'
	};

	onSearchChange = e => {
		var s = e.target.value;
		var ar = this.state.tableStore.filter(res =>
			res.country.toLowerCase().startsWith(s.toLowerCase())
		);
		this.setState({
			searchValue: e.target.value,
			tableData: ar
		});
	};

	allCountriesData() {
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

	allStatesData() {
		return this.state.barData.map(x => {
			const data = {
				labels: this.state.barChartData.labels,
				datasets: [
					{
						...x,
						backgroundColor: this.state.barChartData.datasets[0]
							.backgroundColor,
						borderColor: this.state.barChartData.datasets[0].borderColor,
						borderWidth: this.state.barChartData.datasets[0].borderWidth
					}
				]
			};
			const options = { ...this.state.options };
			return (
				<div className='card-2'>
					<div className='bar-border'>
						<Bar data={data} options={options} width={700} height={300} />
					</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div
				className='fx'
				style={{
					paddingLeft: '0px'
				}}>
				<div className='fx-container'>
					<div className='card-2'>
						<Pie
							data={this.state.pieChartData}
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
					<div className='card-2'>
						<label className='searchLabel'>Country : </label>
						<input
							type='text'
							class='searchBox'
							placeholder='Search Country'
							value={this.state.searchValue}
							onChange={this.onSearchChange}
						/>
						<table>
							<caption>
								Statistics of all countries{' '}
								<h3 className='fx-head'>
									<small>TC = TODAY CASES ; TD = TODAY DEATHS</small>
								</h3>
							</caption>

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
							<tbody>{this.allCountriesData()}</tbody>
						</table>
					</div>
				</div>

				<h3 className='fx-head'>
					Cases Of All States <small>TCC = TOTAL CONFIRMED CASES</small>
				</h3>
				<div
					className='fx-container'
					style={{
						paddingLeft: '0px',
						paddingRight: '0px'
					}}>
					{this.allStatesData()}
				</div>
			</div>
		);
	}
}

export default Statistics;
