import Image from 'next/image'
import Header from '@/compontents/header'
import Footer from '@/compontents/footer'
import course1 from '../../../public/asserts/course1.png'
import course2 from '../../../public/asserts/course2.png'
import course3 from '../../../public/asserts/course3.png'

export default function Course() {
  return (
    <div>
      <section className="Sub-header">
        <Header />
        <h1>Our Courses</h1>
      </section>


      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Undergraduate Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
          <div className="course-col">
            <h3>Graduate Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
          <div className="course-col">
            <h3>Adult Learning & Degree Completion</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
        </div>
      </section>

      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            <Image src={course1} alt="course1" width={335} height={223} />
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <Image src={course2} alt="course2" width={335} height={223} />
            <h3>Artificial Intelligence</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
          <div className="facilities-col">
            <Image src={course3} alt="course3" width={335} height={223} />
            <h3>Data Science</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}