import React from 'react';

import './Spinner.css';

// Copied from https://codepen.io/valentinfrancois/pen/VpebJj
export default class Spinner extends React.Component {
  render() {
    return (
      <div className='loader12'>
      	<div className='spinner3'>
      		<div className='container-B'>
      			<div className='hex0'></div>
      			<div className='hex120'></div>
      			<div className='hex240'></div>
      			<div className='spinner3'>
      				<div className='container-B'>
      					<div className='hex0'></div>
      					<div className='hex120'></div>
      					<div className='hex240'></div>
      					<div className='spinner3'>
      						<div className='container-B'>
      							<div className='hex0'></div>
      							<div className='hex120'></div>
      							<div className='hex240'></div>
      							<div className='spinner3'>
      								<div className='container-B'>
      									<div className='hex0'></div>
      									<div className='hex120'></div>
      									<div className='hex240'></div>
      									<div className='spinner3'>
      										<div className='container-B'>
      											<div className='hex0'></div>
      											<div className='hex120'></div>
      											<div className='hex240'></div>
      										</div>
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}
