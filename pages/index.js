import * as React from 'react'

class Home extends React.PureComponent {
  static async getInitialProps(req) {
    return req.query;
  }

  render() {
    const { userId } = this.props;
    return <div>Welcome { userId } to Next.js!</div>
  }
}

export default Home
