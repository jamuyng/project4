import Section1 from "./Section";
import Section2 from "./Section2";

function Main(props) {
  return (
    <section className="main">
      <Section1 list={props.list} />
      <Section2 list={props.list} />
    </section>
  );
}

export default Main;
