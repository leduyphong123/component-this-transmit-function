class Football extends React.Component {
  shoot = (a) => {
    alert(a);
  };
  render() {
    return <button onClick={() => this.shoot("Goal")}>Take the shot!</button>;
  }
}
