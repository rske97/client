import React, { Component } from 'react';
// import Slide from './Slide'
import { Jumbotron } from 'reactstrap';


export default class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron className='h-50 p-3' >
					
					{/* <Slide  /> */}
				</Jumbotron>
				<section className="banner bgwhite p-t-40 p-b-40">
					<div className="container">
						<div className="row">
							<div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto" >
								<div className="block1 hov-img-zoom pos-relative m-b-30" >
									<img src="slike/BODYSUITS.jpg" alt="IMG-BENNER" />

									<div className="block1-wrapbtn w-size2">
										<a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
											BODYSUITS
							</a>
									</div>
								</div>

								<div className="block1 hov-img-zoom pos-relative m-b-30">
									<img src="slike/BRAS.jpg" alt="IMG-BENNER" />

									<div className="block1-wrapbtn w-size2">
										<a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
											BRAS
							</a>
									</div>
								</div>
							</div>

							<div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
								<div className="block1 hov-img-zoom pos-relative m-b-30" >
									<img src="slike/PANTIES.jpg" alt="IMG-BENNER" />

									<div className="block1-wrapbtn w-size2">
										<a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
											PANTIES
							</a>
									</div>
								</div>

								<div className="block1 hov-img-zoom pos-relative m-b-30">
									<img src="slike/SLEEP.jpg" alt="IMG-BENNER" />

									<div className="block1-wrapbtn w-size2">
										<a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
											SLEEP
							</a>
									</div>
								</div>
							</div>

							<div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
								<div className="block1 hov-img-zoom pos-relative m-b-30">
									<img src="slike/SUSPENDERS.jpg" alt="IMG-BENNER" />

									<div className="block1-wrapbtn w-size2">
										<a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
											SUSPENDERS
							</a>
									</div>
								</div>

								<div className="block2 wrap-pic-w pos-relative m-b-30">
									<img src="images/icons/bg-01.jpg" alt="IMG" />

									<div className="block2-content sizefull ab-t-l flex-col-c-m">
										<h4 className="m-text4 t-center w-size3 p-b-8">
											Sign up & get 20% off
							</h4>

										<p className="t-center w-size4">
											Be the frist to know about the latest fashion news and get exclu-sive offers
							</p>

										<div className="w-size2 p-t-25">
											<a href="#" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
												Sign Up
								</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
