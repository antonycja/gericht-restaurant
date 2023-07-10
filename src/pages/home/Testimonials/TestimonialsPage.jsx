import PageHeader from "../../../components/PageHeader/PageHeader";
import Testimonial from "../../../components/Testimonial/Testimonial";
import users from "../../../constants/users";
import "./testimonials.css";

export default function TestimonialsPage() {
  return (
    <>
      <div className="testimonials-page">
        <section>
          <div className="page-container">
            <PageHeader
              classNam="testimony-header"
              title={"Testimony"}
              heading={"Happy customers"}
            />
            <div className="test">
              {users.map((user, index) => (
                <Testimonial
                  key={index}
                  name={user.name}
                  position={user.position}
                  img={user.img}
                  description={user.description}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
