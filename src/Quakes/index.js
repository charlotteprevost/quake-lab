import React, { Component } from 'react';


class Quakes extends Component {
    render(){
					// let date = new Date(quake.properties.time*1000);
					// let hours = date.getHours();
					// let minutes = "0" + date.getMinutes();
					// let seconds = "0" + date.getSeconds();
					// let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
					// console.log(formattedTime);
					// return formattedTime;
					// }

    	const quakeList = this.props.quakes.map((quake, i) => {
    		const dateNow = Date.now();

    		let hoursElapsed = Math.abs(dateNow - quake.properties.time)/36e5;
    		console.log(`hoursElapsed: `, hoursElapsed);

    		return(
    			<li key={i}>
    				Title: {quake.properties.title}<br/>
    				Mag: {quake.properties.mag}<br/>
    				Hours Since: {Math.floor(hoursElapsed)}<br/>
    			</li>
    		)
    	})

        return(
            <div>
            	<ul>{quakeList}</ul>
            </div>
        )
    }
}
export default Quakes;
