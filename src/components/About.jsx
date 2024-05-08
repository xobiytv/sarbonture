import './about.css'
import img from '../assisent/1st-section.jpg'
import img2 from '../assisent/5th-section.jpg'

export default function App() {
    return (

        <div className="flex colFlex  gap-4 h-auto py-20 items-center ">
            <div class="container w-6/12 gap-3 ">
                <div class="item gap-3">
                    <div class="image-container">
                        <img src={img} alt="Image 1" />
                    </div>
                    <div class="content">
                        <p className='text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div class="item gap-3">
                    <div class="content">
                    <p className='text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div class="image-container">
                        <img  src={img2} alt="Image 2" />
                    </div>
                </div>
            </div>

            <div className="w-5/12 mt5 w80">
                <b className="text-3xl ">
                    Know About Mizzle
                </b>
                <div className="text-lg">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda temporibus laudantium asperiores dolorum aut optio quaerat pariatur inventore laborum debitis voluptatum porro delectus necessitatibus, amet ad. Ea, magnam tenetur?
                    </p>
                    <p className="my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda temporibus laudantium asperiores dolorum aut optio quaerat pariatur inventore laborum debitis voluptatum porro delectus necessitatibus, amet ad. Ea, magnam tenetur?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda temporibus laudantium asperiores dolorum aut optio quaerat pariatur inventore laborum debitis voluptatum porro delectus necessitatibus, amet ad. Ea, magnam tenetur?
                    </p>
                </div>

            </div>
        </div>

    );
}
