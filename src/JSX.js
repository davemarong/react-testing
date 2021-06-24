export default function JSX() {
  // video 1 - Hva er JSX?
  const element = <h1>Hei verden!</h1>;
  //   -----------------------------------------------------

  // video 2 - Javascript utrykk
  const velkommen = "Velkommen hit";
  const jsxText = <p>{velkommen}, Jens!</p>;
  //   -----------------------------------------------------

  // video 3 - Attributter

  //   className
  const jsxMedClass1 = <h1 className="overskrift">Hei du!</h1>;

  const overskriftClass = "overskrift";
  const jsxMedClass2 = <h1 className={overskriftClass}>Hei du!</h1>;

  // href

  const jsxMedHref = <h1 href="www.google.com">Link til google</h1>;

  const hrefLink = "www.google.com";
  const jsxMedHref2 = <h1 href={hrefLink}>Hei du!</h1>;
  //   -----------------------------------------------------

  // video 4 - Eksempler på JSX
  const overskrift = "overskrift";
  const jsx1 = <h1>Jeg er en {overskrift}</h1>;
  const knapp = "knapp";
  const overskrift2 = () => {
    return "Overskrift nummer 2";
  };

  //   -----------------------------------------------------

  return (
    <div>
      <p>Jeg er et paragraf</p>
      {jsx1}
      <button>Jeg er en {knapp}</button>
      <h2>{overskrift2()}</h2>

      <h1 className="overskrift">Hei du!</h1>
      <h1 className={overskriftClass}>Hei du!</h1>
    </div>
  );
}
