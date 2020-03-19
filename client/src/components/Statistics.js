import React,{Component} from 'react';
import axios from 'axios'
import {Pie} from 'react-chartjs-2'
import './Statistics.css'

class Statistics extends Component {
	state={
		chartData:{
			labels:['Active Cases','Dead','Recovered'],
			datasets:[
				{
					label:'Total',
					data:[],
					backgroundColor:[
						'gray',
						'red',
						'green',
					]
				}
			]
		},
		tableData:{
			
		}
	}
	componentDidMount()
	{
		axios.get('https://coronavirus-19-api.herokuapp.com/all')
		.then(response=>{
			var ar=[response.data.cases,response.data.deaths,response.data.recovered]
			var temp=this.state.chartData
			temp.datasets[0].data=ar
			this.setState({chartData:temp})
		})

		axios.get('https://coronavirus-19-api.herokuapp.com/countries')
		.then(res=>console.log(res.data))
	}
	static defaultProps = {
		displayTitle:true,
		displayLegend: true,
		legendPosition:'right',
	  }
	render()
	{
		return(
			<main>
				<div>
						<Pie
						data={this.state.chartData}
						options={{
							title:{
							display:'this.props.displayTitle',
							text:'Statistics Around The World',
							fontSize:25
							},
							legend:{
							display:this.props.displayLegend,
							position:this.props.legendPosition,
							},
							responsive: true,
							maintainAspectRatio: true,	
						}}
						width={700}
						height={300}
						/>
				</div>

				</main>
		)
	}
};

export default Statistics;
