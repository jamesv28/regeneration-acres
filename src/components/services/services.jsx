import Cattle from "../../assets/cattle_snow.jpg";
import Chicken from "../../assets/chicken.jpg";

const Services = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="text-center lg-font-title py-4 small-caps">Services</h2>
      </div>
      <div className="row">
        <div className="col-md-5 offset-md-1 col-sm-12 offset-sm-0">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="col-md-5 col-sm-12">
          <img src={Cattle} alt="cattle" className="img-fluid rounded" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-5 col-sm-12 offset-md-1 offset-sm-0">
          <img src={Chicken} alt="cattle" className="img-fluid rounded" />
        </div>
        <div className="col-md-5  col-sm-12 ">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-md-5 offset-md-1 col-sm-12 offset-sm-0">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="col-md-5 col-sm-12">
          <img src={Cattle} alt="cattle" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Services;
