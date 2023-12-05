const articles = [
  {
    id: 1,
    number: 1,
    title: "Actionable insights",
    about:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    id: 2,
    number: 2,
    title: "Data-driven decisions",
    about:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    id: 3,
    number: 3,
    title: "Always affordable",
    about:
      "Always affordable pricing that scales with your business Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
];

function Article(props) {
  const { number, title, about } = props;
  return (
    <article className="article">
      <div className="serial">{number}</div>
      <div>
        <h3 className="pro-title">{title}</h3>
        <p className="about">{about}</p>
      </div>
    </article>
  );
}

export default function Pros() {
  return (
    <main className="pros">
      {articles.map((article, index) => {
        return <Article {...article} key={article.id} />;
      })}
    </main>
  );
}
