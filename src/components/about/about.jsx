import Hanna from "../../assets/hanna.jpg";
const About = () => {
  return (
    <div className="container-fluid">
      <div className="row py-4">
        <h2 className="text-center lg-font-title pb-4 small-caps">Our Story</h2>
        <div className="col-sm-12 col-sm-offset-0 col-md-5 col-md-offset-1  ">
          <img src={Hanna} alt="Hanna" className="img-fluid" />
        </div>
        <div className="col-sm-12 col-sm-offset-0 col-md-5 col-md-offset-1 ">
          <p className="pb-2 mt-small-2">
            <strong>Regeneration Acres</strong> is a relatively new farm as the
            newlyweds, who tied the knot earlier this year, originally purchased
            their Gore Road farm back in 2022.
          </p>
          <p className="pb-2">
            On our land, they focus on conservation-oriented agriculture,
            focusing on planting trees, along with raising a wide variety of
            animals including chickens, turkeys, sheep, pigs and cattle.
          </p>
          <p className="pb-2">
            Starting in December, we’ll have pork available by the cut to sell.
            It will be processed, USDA (U.S. Department of Agriculture). And
            then starting in January, we’ll have lamb available by the cut
            that’s been processed under a USDA label.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
