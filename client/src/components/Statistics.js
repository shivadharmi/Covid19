import React, { Component } from 'react';
import axios from 'axios';
import { Doughnut, Bar } from 'react-chartjs-2';
import './Statistics.css';
// import data from './data';
class Statistics extends Component {
	state = {
		doughnutChartData: {
			labels: ['Active Cases', 'Dead', 'Recovered'],
			datasets: [
				{
					label: 'Total',
					data: [],
					backgroundColor: [
						'rgb(0,63,92,0.5)',
						'rgba(188,80,144,0.5)',
						'rgb(255,166,0,0.5)',
					],
					borderWidth: '1',
					borderColor: [
						'rgb(0,63,92,1)',
						'rgba(188,80,144,1)',
						'rgb(255,166,0,1)',
					],
				},
			],
		},
		tableData: [],
		searchValue: '',
		tableStore: [],
		barChartData: {
			labels: ['TC', 'C/D', 'D'],
			datasets: [
				{
					backgroundColor: [
						'rgb(212,80,135,0.7)',
						'rgb(102,81,145,0.7)',
						'rgb(255,166,0,0.7)',
					],
					borderColor: [
						'rgb(212,80,135)',
						'rgb(102,81,145,1)',
						'rgb(255,166,0,1)',
					],
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
			responsive: true,
			maintainAspectRatio: false,
		},
		barData: [],
	};
	componentDidMount() {
		axios
			.get('https://corona.lmao.ninja/v2/all')
			.then((response) => {
				var ar = [
					response.data.cases,
					response.data.deaths,
					response.data.recovered,
				];
				var temp = this.state.doughnutChartData;
				temp.datasets[0].data = ar;
				this.setState({ doughnutChartData: temp });
			});

		axios
			.get('https://corona.lmao.ninja/v2/countries')
			.then((response) => {
				this.setState({ tableData: response.data, tableStore: response.data });
			});

		axios.get('https://api.covid19india.org/v4/data.json').then((response) => {
			const data = response.data;
			const keys = Object.keys(data);
			const arrayData = [];
			keys.forEach(key =>{
				arrayData.push({label:key,data:[data[key].total.confirmed,data[key].total.recovered,data[key].total.deceased]});
			});
			this.setState({ barData: arrayData });
		});
	}
	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right',
	};

	onSearchChange = (e) => {
		var s = e.target.value;
		var ar = this.state.tableStore.filter((res) =>
			res.country.toLowerCase().startsWith(s.toLowerCase())
		);
		this.setState({
			searchValue: e.target.value,
			tableData: ar,
		});
	};

	allCountriesData() {
		return this.state.tableData.map((x) => {
			return (
				<tr key={x.country}>
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
		return this.state.barData.map((x) => {
			const data = {
				labels: this.state.barChartData.labels,
				datasets: [
					{
						...x,
						backgroundColor: this.state.barChartData.datasets[0]
							.backgroundColor,
						borderColor: this.state.barChartData.datasets[0].borderColor,
						borderWidth: this.state.barChartData.datasets[0].borderWidth,
					},
				],
			};
			const options = { ...this.state.options };
			return (
				<div className='card-3' key={x.label}>
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
					paddingLeft: '0px',
				}}>
				<div className='fx-container'>
					<div className='card-2'>
						<Doughnut
							data={this.state.doughnutChartData}
							options={{
								title: {
									display: 'this.props.displayTitle',
									text: 'Statistics Around The World',
									fontSize: 25,
								},
								legend: {
									display: this.props.displayLegend,
									position: this.props.legendPosition,
								},
								responsive: true,
								maintainAspectRatio: false,
							}}
							width={700}
							height={300}
						/>
					</div>
					<div className='card-2'>
						<label className='searchLabel'>Country : </label>
						<input
							type='text'
							className='searchBox'
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
					Cases Of All States{' '}
					<small>
						TC = TOTAL CONFIRMED; C/D = CURED/DISCHARGED; D = DEATHS
					</small>
				</h3>
				<div
					className='fx-container'
					style={{
						paddingLeft: '0px',
						paddingRight: '0px',
					}}>
					{this.allStatesData()}
				</div>
			</div>
		);
	}
}

export default Statistics;
