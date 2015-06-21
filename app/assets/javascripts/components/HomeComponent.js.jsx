var Home = React.createClass({
	render: function () {
		$.get("mad_orig", function(madorig){
			for(var i=0; i < madorig.length; i++){
				$(".funA").html("— " + madorig[0].fun_author);
				$(".funQ").html("“" + madorig[0].span_quote + "”");
				$(".oriA").html("— " + madorig[1][0].author);
				$(".oriQ").html("“" + madorig[1][0].quote + "”");
				console.log(madorig)
			}
		})
		return (
			<div>
				<section className="quote-previews">
					<div className="fun-quote">
						<div className="color-box">
							<div className="top"></div>
							<div className="right"></div>
							<div className="bottom"></div>
							<div className="left"></div>
							<div className="center">
								<h3 className="funQ">"Say <span className="noun">boy</span> to my little <span className="noun">farm</span>!"</h3>
								<p className="funA"> —Carissa Montana</p>
							</div>
						</div>
					</div>
					<div className="original-quote">
						<div className="center">
							<h3>Look familiar?</h3>
							<h3 className="oriQ">“Say hello to my little friend!”</h3>
							<p className="oriA">— Tony Montana</p>
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
