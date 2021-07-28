import Card from "@material-ui/core/Card";

export function MainPage() {
  return (
    <div className="mainpage">
      <Main topic="Total users" data="10 users" />
      <Main topic="Monthly Income" data="10 crore" />
      <Main topic="Annual Income" data="100 crore" />
      <Main topic="Task Completed" data="10 users" />
      <Main topic="Total users" data="80% Completed" />
      <Main topic="Task Pending" data="20% left" />
      <Main topic="Reports of users" data="5 users" />
      <Main topic="Rating" data="Star" />
    </div>
  );
}

function Main({ topic, data }) {
  return (
    <div>
      <Card className="card" style={{ backgroundColor: "greenyellow" }}>
        <h2>{topic}</h2>
        <br />
        <h3>{data}</h3>
      </Card>
    </div>
  );
}
