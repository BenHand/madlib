var Home = React.createClass({
	render: function () {
		return (
			<div>
				<section className="quote-previews">
					<div className="sample-quote">
						<div className="color-box">
							<div className="top"></div>
							<div className="right"></div>
							<div className="bottom"></div>
							<div className="left"></div>
							<div className="center">
								<h3>"Say '<span className="noun">boy</span>' to my little <span className="noun">farm</span>!"</h3>
								<p> —Carissa Montana</p>
							</div>
						</div>
					</div>
					<div className="original-quote">
						<div className="center">
							<h3>Look familiar?</h3>
							<h3>"Say 'hello' to my little friend!"</h3>
							<p> —Tony Montana</p>
						</div>
					</div>
				</section>
				<section className="start">
					<Registration/>
					<Login/>
				</section>
			</div>
		);
	}
});
