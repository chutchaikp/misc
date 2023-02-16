import { BsCreditCard2Back } from 'react-icons/bs'
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'

import Img1 from '../images/design1.png'
import Img2 from '../images/design2.png'
import Img3 from '../images/design3.png'

import './design.scss';
const Design = () => {
	return (
		<div className='design'>
			<h1> Welcome, USER </h1>
			<div className="started">
				<div className="creditcard">
					<BsCreditCard2Back />
				</div>
				Get started with our free courses
			</div>

			<div className="boxes">
				<div className="box">
					<img src={Img1} alt="" />
					<div className="wrapper">
						<p className="course">COURSE</p>
						<p className="title">Grokking the Behavioral Interview</p>

						<div className="foot">
							<div className="threedot">
								Beginner
							</div>
							<div className="btn">
								<button>
									Get started
									<AiOutlineArrowRight />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="box">
					<img src={Img2} alt="" />

					<div className="wrapper">
						<p className="course">COURSE</p>
						<p className="title">Learn Dart: First Step to Flutter</p>
						<div className="foot">
							<div className="threedot">
								Beginner
							</div>
							<div className="btn">
								<button>
									Get started
									<AiOutlineArrowRight />
								</button>
							</div>
						</div>
					</div>

				</div>
				<div className="box">
					<img src={Img3} alt="" />

					<div className="wrapper">
						<p className="course">COURSE</p>
						<p className="title">Learn Rust from Scratch</p>
						<div className="foot">
							<div className="threedot">
								Beginner
							</div>
							<div className="btn">
								<button>
									Get started
									<AiOutlineArrowRight />
								</button>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div className="btn-outline">
				<button>Show More <AiOutlineArrowDown /> </button>
			</div>

			<h3>Take your skills to the next level.</h3>

			<div className="take">
				<button>Explore all Content</button>
			</div>

		</div>
	)
}
export default Design;