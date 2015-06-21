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
					<div className="sample-quote">
						<div className="color-box">
							<div className="top"></div>
							<div className="right"></div>
							<div className="bottom"></div>
							<div className="left"></div>
							<div className="center">
								<h3 className="funQ"></h3>
								<p className="funA"></p>
							</div>
						</div>
					</div>
					<div className="original-quote">
						<div className="center">
							<h3>Look familiar?</h3>
							<h3 className="oriQ"></h3>
							<p className="oriA"></p>
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
